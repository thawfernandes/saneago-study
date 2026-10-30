// ==============================================================================
// SANEAGO STUDY - MODAL DE PERFIL PESSOAL SEM LOGIN TRADICIONAL
// Criar perfil com geração de código de alta entropia OU entrar com código existente
// ==============================================================================

import { generatePersonalAccessCode, hashAccessCode, isValidAccessCode, normalizeAccessCode, generateUUID } from "../services/crypto.js";
import { saveProfile, saveUserGoals, saveSelectedRoleIds, getProfile } from "../services/storage.js";
import { remoteCreateProfile, remoteAuthenticateProfile } from "../services/supabaseClient.js";
import { SANEAGO_ROLES } from "../data/saneagoRoles.js";

export function renderAuthModal(onSuccess) {
  const existing = document.getElementById("auth-modal-root");
  if (existing) existing.remove();

  const container = document.createElement("div");
  container.id = "auth-modal-root";
  container.className = "modal-backdrop";

  let activeTab = "create"; // 'create' ou 'login'

  function updateModalDOM() {
    container.innerHTML = `
      <div class="modal-container" style="max-width: 540px;">
        <div class="modal-header" style="background: linear-gradient(135deg, #0F172A, #1E293B); color: white; border-bottom: none;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 38px; height: 38px; border-radius: 8px; background: #0284C7; display: flex; align-items: center; justify-content: center; font-size: 20px;">💧</div>
            <div>
              <h3 style="color: white; font-size: 19px; font-weight: 700;">Saneago Study</h3>
              <p style="color: #94A3B8; font-size: 12px;">Plataforma Pessoal de Preparação para Concursos</p>
            </div>
          </div>
        </div>

        <div style="display: flex; border-bottom: 1px solid var(--border); background: var(--bg-surface);">
          <button id="tab-btn-create" class="btn" style="flex: 1; border-radius: 0; padding: 14px; font-weight: 600; border-bottom: 2px solid ${activeTab === "create" ? "var(--primary)" : "transparent"}; color: ${activeTab === "create" ? "var(--primary)" : "var(--text-muted)"};">
            Criar meu perfil
          </button>
          <button id="tab-btn-login" class="btn" style="flex: 1; border-radius: 0; padding: 14px; font-weight: 600; border-bottom: 2px solid ${activeTab === "login" ? "var(--primary)" : "transparent"}; color: ${activeTab === "login" ? "var(--primary)" : "var(--text-muted)"};">
            Acessar com meu código
          </button>
        </div>

        <div class="modal-body" style="padding: 24px;">
          ${activeTab === "create" ? renderCreateForm() : renderLoginForm()}
        </div>
      </div>
    `;

    // Event listeners de abas
    container.querySelector("#tab-btn-create")?.addEventListener("click", () => {
      activeTab = "create";
      updateModalDOM();
    });

    container.querySelector("#tab-btn-login")?.addEventListener("click", () => {
      activeTab = "login";
      updateModalDOM();
    });

    attachFormHandlers();
  }

  function renderCreateForm() {
    return `
      <form id="create-profile-form">
        <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 18px;">
          Sem e-mail e sem senha tradicional. Você receberá um <strong>Código Pessoal Seguro</strong> para acessar seus dados em qualquer dispositivo.
        </p>

        <div class="form-group">
          <label class="form-label" for="user-name">Nome ou apelido *</label>
          <input type="text" id="user-name" class="form-control" placeholder="Ex: Roberto Lima" required minlength="2" autofocus>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div class="form-group">
            <label class="form-label" for="daily-goal">Meta diária (minutos)</label>
            <input type="number" id="daily-goal" class="form-control" value="120" min="15" max="720" step="15">
            <span class="form-hint">Ex: 120 min = 2 horas</span>
          </div>

          <div class="form-group">
            <label class="form-label" for="daily-hours">Tempo disponível (h/dia)</label>
            <input type="number" id="daily-hours" class="form-control" value="2" min="0.5" max="14" step="0.5">
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Dias disponíveis para estudar</label>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            ${["seg", "ter", "qua", "qui", "sex", "sab", "dom"].map(d => `
              <label style="display: flex; align-items: center; gap: 4px; font-size: 12.5px; background: var(--bg-page); padding: 5px 10px; border-radius: var(--radius-sm); border: 1px solid var(--border); cursor: pointer;">
                <input type="checkbox" name="avail-day" value="${d}" ${d !== "dom" ? "checked" : ""}>
                ${d.toUpperCase()}
              </label>
            `).join("")}
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="initial-role">Cargo de interesse principal</label>
          <select id="initial-role" class="form-select">
            ${SANEAGO_ROLES.map(r => `
              <option value="${r.id}">${r.name} (${r.educationLevel})</option>
            `).join("")}
          </select>
        </div>

        <div id="create-error" style="display: none; color: var(--danger); font-size: 13px; margin-bottom: 14px;"></div>

        <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">
          Gerar meu código e começar
        </button>
      </form>
    `;
  }

  function renderLoginForm() {
    return `
      <form id="login-profile-form">
        <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 18px;">
          Informe o seu <strong>Código Pessoal</strong> gerado anteriormente para carregar seus estudos neste navegador.
        </p>

        <div class="form-group">
          <label class="form-label" for="access-code-input">Código de acesso pessoal</label>
          <input type="text" id="access-code-input" class="form-control" placeholder="SANE-XXXX-XXXX-XXXX" style="font-family: monospace; font-size: 16px; letter-spacing: 1.5px; text-transform: uppercase;" required autofocus>
          <span class="form-hint">Formato de 16 caracteres: SANE-XXXX-XXXX-XXXX</span>
        </div>

        <div id="login-error" style="display: none; color: var(--danger); font-size: 13px; margin-bottom: 14px;"></div>

        <button type="submit" id="btn-login-submit" class="btn btn-primary btn-lg" style="width: 100%;">
          Entrar e recuperar meus dados
        </button>
      </form>
    `;
  }

  function attachFormHandlers() {
    // Formulário de Criação
    const createForm = container.querySelector("#create-profile-form");
    if (createForm) {
      createForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const name = container.querySelector("#user-name").value.trim();
        const dailyGoal = parseInt(container.querySelector("#daily-goal").value, 10) || 120;
        const dailyHours = parseFloat(container.querySelector("#daily-hours").value) || 2;
        const selectedRole = container.querySelector("#initial-role").value;

        const dayCheckboxes = container.querySelectorAll("input[name='avail-day']:checked");
        const availableDays = Array.from(dayCheckboxes).map(cb => cb.value);

        if (!name) return;

        const accessCode = generatePersonalAccessCode();
        const codeHash = await hashAccessCode(accessCode);
        const profileId = generateUUID();

        const profileData = {
          id: profileId,
          name,
          accessCode, // mantido para exibição na tela do próprio usuário
          accessCodeHash: codeHash,
          dailyGoalMinutes: dailyGoal,
          dailyAvailableHours: dailyHours,
          availableDays,
          preferredRoles: [selectedRole],
          createdAt: new Date().toISOString()
        };

        // Salva perfil e metas localmente
        saveProfile(profileData);
        saveSelectedRoleIds([selectedRole]);
        saveUserGoals({
          dailyStudyMinutes: dailyGoal,
          weeklyStudyMinutes: dailyGoal * availableDays.length,
          dailyQuestionsCount: 20,
          weeklyReviewsCount: 5,
          restDays: ["dom"].filter(d => !availableDays.includes(d)),
          targetExamDate: null
        });

        // Tenta criar no Supabase se já configurado
        remoteCreateProfile(profileData, codeHash).catch(console.warn);

        // Exibe tela com o código de acesso para cópia obrigatória
        renderCodeDisplayScreen(accessCode, name);
      });
    }

    // Formulário de Login
    const loginForm = container.querySelector("#login-profile-form");
    if (loginForm) {
      loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const codeInput = container.querySelector("#access-code-input");
        const errorDiv = container.querySelector("#login-error");
        const submitBtn = container.querySelector("#btn-login-submit");

        const rawCode = codeInput.value;
        const normalized = normalizeAccessCode(rawCode);

        if (!isValidAccessCode(normalized)) {
          errorDiv.textContent = "Código inválido. Digite no formato correto: SANE-XXXX-XXXX-XXXX.";
          errorDiv.style.display = "block";
          return;
        }

        submitBtn.disabled = true;
        submitBtn.textContent = "Validando código...";
        errorDiv.style.display = "none";

        try {
          const hash = await hashAccessCode(normalized);

          // Verifica primeiro se coincide com o perfil local
          const localProfile = getProfile();
          if (localProfile && (localProfile.accessCodeHash === hash || localProfile.accessCode === normalized)) {
            container.remove();
            if (onSuccess) onSuccess(localProfile);
            return;
          }

          // Se não coincidir localmente, consulta o Supabase
          const remoteRes = await remoteAuthenticateProfile(hash);
          if (remoteRes && remoteRes.success && remoteRes.profile) {
            const profileData = {
              ...remoteRes.profile,
              accessCode: normalized,
              accessCodeHash: hash,
              sessionToken: remoteRes.session_token
            };
            saveProfile(profileData);
            container.remove();
            if (onSuccess) onSuccess(profileData);
          } else {
            errorDiv.textContent = remoteRes?.error || "Código de acesso não encontrado. Verifique se o digitou corretamente.";
            errorDiv.style.display = "block";
            submitBtn.disabled = false;
            submitBtn.textContent = "Entrar e recuperar meus dados";
          }
        } catch (err) {
          errorDiv.textContent = err.message || "Erro ao validar código.";
          errorDiv.style.display = "block";
          submitBtn.disabled = false;
          submitBtn.textContent = "Entrar e recuperar meus dados";
        }
      });
    }
  }

  function renderCodeDisplayScreen(code, name) {
    container.innerHTML = `
      <div class="modal-container" style="max-width: 520px; text-align: center;">
        <div class="modal-body" style="padding: 32px 28px;">
          <div style="width: 56px; height: 56px; border-radius: 50%; background: #D1FAE5; color: #10B981; font-size: 28px; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">
            ✓
          </div>
          <h3 style="font-size: 22px; font-weight: 700; margin-bottom: 8px;">Perfil criado com sucesso!</h3>
          <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 24px;">
            Olá, <strong>${name}</strong>! Este é o seu <strong>Código Pessoal de Acesso</strong>. Você precisará dele para acessar seus dados em outros computadores ou celulares.
          </p>

          <div style="background: var(--bg-page); border: 2px dashed var(--accent); border-radius: var(--radius-md); padding: 18px; margin-bottom: 20px;">
            <div id="code-text" style="font-family: monospace; font-size: 22px; font-weight: 700; color: var(--primary); letter-spacing: 2px;">
              ${code}
            </div>
          </div>

          <button id="btn-copy-code" class="btn btn-outline" style="width: 100%; margin-bottom: 14px; gap: 8px;">
            📋 Copiar código de acesso
          </button>

          <div style="background: #FEF3C7; border: 1px solid #FDE68A; border-radius: var(--radius-md); padding: 12px 16px; text-align: left; margin-bottom: 24px; font-size: 12.5px; color: #92400E; display: flex; gap: 10px;">
            <span>⚠️</span>
            <span><strong>Atenção:</strong> Guarde este código em local seguro (bloco de notas, gerenciador de senhas). Sem ele, não será possível recuperar seus dados se trocar de navegador!</span>
          </div>

          <button id="btn-start-dashboard" class="btn btn-primary btn-lg" style="width: 100%;">
            Entrar no Meu Painel de Estudos
          </button>
        </div>
      </div>
    `;

    const copyBtn = container.querySelector("#btn-copy-code");
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(code).then(() => {
        copyBtn.textContent = "✓ Código copiado com sucesso!";
        copyBtn.style.color = "var(--success)";
      }).catch(() => {
        copyBtn.textContent = "Selecione e copie o código acima manualmente.";
      });
    });

    const startBtn = container.querySelector("#btn-start-dashboard");
    startBtn.addEventListener("click", () => {
      container.remove();
      if (onSuccess) onSuccess(getProfile());
    });
  }

  document.body.appendChild(container);
  updateModalDOM();
}

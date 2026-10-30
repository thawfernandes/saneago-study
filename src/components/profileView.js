// ==============================================================================
// SANEAGO STUDY - MEU PERFIL, SEGURANÇA, SUPABASE E BACKUP
// Código pessoal, configuração do banco em nuvem, exportação/importação JSON/CSV
// ==============================================================================

import { getProfile, saveProfile, getSupabaseConfig, saveSupabaseConfig, exportAllDataJSON, importDataJSON, exportStudyHistoryCSV, exportErrorNotebookCSV, clearAllLocalData } from "../services/storage.js";
import { testSupabaseConnection, syncPush, syncPull } from "../services/supabaseClient.js";
import { renderAuthModal } from "./authModal.js";

export function renderProfileView(container, navigateTo) {
  function render() {
    const profile = getProfile();
    const config = getSupabaseConfig();

    container.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 24px; max-width: 900px;">

        <!-- CABEÇALHO -->
        <div>
          <h2 style="font-size: 22px; font-weight: 700;">Meu Perfil e Configurações do Sistema</h2>
          <p style="font-size: 13.5px; color: var(--text-muted);">
            Gerencie seu código de acesso pessoal, configure a sincronização na nuvem e exporte seus backups.
          </p>
        </div>

        <!-- CARD 1: CÓDIGO PESSOAL DE ACESSO E RECUPERAÇÃO -->
        <div class="card" style="border: 2px solid var(--accent); background: linear-gradient(135deg, #F0F9FF, #FFFFFF);">
          <div class="card-header">
            <div class="card-title" style="color: var(--primary);">🔑 Seu Código Pessoal de Acesso</div>
            <span class="badge badge-success">Ativo</span>
          </div>
          <div class="card-body">
            <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 16px;">
              Este código substitui login e senha tradicionais. Utilize-o para carregar seus estudos em outro celular ou computador:
            </p>

            <div style="display: flex; align-items: center; gap: 12px; background: var(--bg-surface); border: 2px dashed var(--accent); border-radius: var(--radius-md); padding: 14px 20px; margin-bottom: 14px;">
              <div id="user-access-code" style="font-family: monospace; font-size: 20px; font-weight: 700; color: var(--primary); letter-spacing: 2px; flex: 1;">
                ${profile?.accessCode || "CÓDIGO PROTEGIDO LOCALMENTE"}
              </div>

              <button id="btn-copy-profile-code" class="btn btn-primary btn-sm">
                📋 Copiar Código
              </button>
            </div>

            <div style="font-size: 12.5px; color: #92400E; background: #FEF3C7; padding: 10px 14px; border-radius: var(--radius-sm); border: 1px solid #FDE68A;">
              🔒 <strong>Segurança:</strong> O código de recuperação é validado no servidor utilizando funções criptográficas seguras (hashes). Nunca compartilhe seu código com terceiros.
            </div>
          </div>
        </div>

        <!-- CARD 2: DADOS PESSOAIS DO ESTUDANTE -->
        <div class="card">
          <div class="card-header">
            <div class="card-title">👤 Informações do Perfil</div>
          </div>
          <div class="card-body">
            <form id="profile-info-form">
              <div class="form-group">
                <label class="form-label" for="profile-name">Nome ou Apelido</label>
                <input type="text" id="profile-name" class="form-control" value="${profile?.name || ""}" required>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                <div class="form-group">
                  <label class="form-label" for="profile-daily-goal">Meta Diária (minutos)</label>
                  <input type="number" id="profile-daily-goal" class="form-control" value="${profile?.dailyGoalMinutes || 120}" min="15" max="720" step="15">
                </div>

                <div class="form-group">
                  <label class="form-label" for="profile-avail-hours">Tempo Disponível (horas/dia)</label>
                  <input type="number" id="profile-avail-hours" class="form-control" value="${profile?.dailyAvailableHours || 2}" min="0.5" max="14" step="0.5">
                </div>
              </div>

              <button type="submit" class="btn btn-primary btn-sm">
                Salvar Dados do Perfil
              </button>
            </form>
          </div>
        </div>

        <!-- CARD 3: SINCRONIZAÇÃO EM NUVEM VIA SUPABASE -->
        <div class="card">
          <div class="card-header">
            <div class="card-title">☁️ Sincronização em Nuvem (Supabase Gratuito)</div>
            <span class="badge ${config.isConfigured ? "badge-success" : "badge-gray"}">
              ${config.isConfigured ? "Conectado ao Supabase" : "Modo Local (Offline)"}
            </span>
          </div>
          <div class="card-body">
            <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 16px;">
              O Saneago Study utiliza o plano gratuito do <strong>Supabase</strong> para sincronizar seus dados entre celular e computador com isolamento via Row Level Security (RLS).
            </p>

            <form id="supabase-config-form">
              <div class="form-group">
                <label class="form-label" for="sb-url">URL do Projeto no Supabase</label>
                <input type="url" id="sb-url" class="form-control" placeholder="https://xyzcompany.supabase.co" value="${config.url || ""}">
                <span class="form-hint">Encontrada em Project Settings > API no painel do Supabase.</span>
              </div>

              <div class="form-group">
                <label class="form-label" for="sb-key">Chave Pública Anônima (anon public key)</label>
                <input type="password" id="sb-key" class="form-control" placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." value="${config.anonKey || ""}">
                <span class="form-hint"><strong>Atenção:</strong> NUNCA insira a chave <em>service_role</em>! Apenas a chave pública <em>anon</em> deve ser utilizada no navegador.</span>
              </div>

              <div id="sb-test-status" style="margin-bottom: 14px; display: none; font-size: 13px;"></div>

              <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                <button type="button" id="btn-test-supabase" class="btn btn-outline btn-sm">
                  ⚡ Testar Conexão
                </button>
                <button type="submit" class="btn btn-primary btn-sm">
                  Salvar Configuração do Supabase
                </button>
                ${config.isConfigured ? `
                  <button type="button" id="btn-manual-sync" class="btn btn-success btn-sm">
                    🔄 Sincronizar Agora
                  </button>
                ` : ""}
              </div>
            </form>
          </div>
        </div>

        <!-- CARD 4: BACKUP E PORTABILIDADE DE DADOS (SEÇÃO 18) -->
        <div class="card">
          <div class="card-header">
            <div class="card-title">📦 Backup e Portabilidade de Dados</div>
          </div>
          <div class="card-body">
            <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 16px;">
              Exporte seus dados pessoais para ter controle total sobre seus resumos, histórico de estudos e questões resolvidas.
            </p>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px; margin-bottom: 24px;">
              <button id="btn-export-json" class="btn btn-outline" style="justify-content: flex-start; padding: 14px;">
                <span style="font-size: 20px;">📄</span>
                <div style="text-align: left;">
                  <div style="font-weight: 700; font-size: 13.5px;">Exportar Backup Completo (JSON)</div>
                  <div style="font-size: 11px; color: var(--text-muted);">Inclui tarefas, resumos, metas e histórico</div>
                </div>
              </button>

              <button id="btn-export-sessions-csv" class="btn btn-outline" style="justify-content: flex-start; padding: 14px;">
                <span style="font-size: 20px;">📊</span>
                <div style="text-align: left;">
                  <div style="font-weight: 700; font-size: 13.5px;">Exportar Horas de Estudo (CSV)</div>
                  <div style="font-size: 11px; color: var(--text-muted);">Compatível com Excel e Google Sheets</div>
                </div>
              </button>

              <button id="btn-export-errors-csv" class="btn btn-outline" style="justify-content: flex-start; padding: 14px;">
                <span style="font-size: 20px;">📕</span>
                <div style="text-align: left;">
                  <div style="font-weight: 700; font-size: 13.5px;">Exportar Caderno de Erros (CSV)</div>
                  <div style="font-size: 11px; color: var(--text-muted);">Planilha de motivos e correções</div>
                </div>
              </button>
            </div>

            <!-- RESTAURAÇÃO DE BACKUP COM VALIDAÇÃO -->
            <div style="border-top: 1px solid var(--border); padding-top: 18px;">
              <h4 style="font-size: 14px; font-weight: 700; margin-bottom: 6px;">Restaurar Dados a partir de Backup JSON</h4>
              <p style="font-size: 12.5px; color: var(--text-secondary); margin-bottom: 12px;">
                O arquivo será validado antes de qualquer alteração. Você poderá escolher se deseja substituir ou combinar com os dados existentes.
              </p>

              <input type="file" id="file-import-json" accept=".json" style="display: none;">
              <button id="btn-trigger-import" class="btn btn-outline btn-sm">
                📥 Selecionar Arquivo JSON para Restaurar
              </button>
            </div>
          </div>
        </div>

        <!-- CARD 5: GESTÃO DE CONTA E LOGOUT -->
        <div class="card" style="border: 1px solid #FECACA;">
          <div class="card-header" style="background: #FEF2F2;">
            <div class="card-title" style="color: #991B1B;">⚠️ Gestão de Perfil e Dispositivo</div>
          </div>
          <div class="card-body">
            <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 16px;">
              Caso deseje acessar outro perfil ou limpar os dados locais deste navegador:
            </p>

            <div style="display: flex; gap: 12px; flex-wrap: wrap;">
              <button id="btn-switch-account" class="btn btn-secondary btn-sm">
                🚪 Trocar de Perfil / Acessar Outro Código
              </button>

              <button id="btn-clear-all" class="btn btn-danger btn-sm">
                🗑️ Redefinir Dados Locais deste Navegador
              </button>
            </div>
          </div>
        </div>

      </div>

      <!-- MODAL DE CONFIRMAÇÃO DE IMPORTAÇÃO -->
      <div id="import-modal-container"></div>
    `;

    attachProfileEvents(profile, config);
  }

  function attachProfileEvents(profile, config) {
    // Copiar código
    const copyBtn = container.querySelector("#btn-copy-profile-code");
    copyBtn?.addEventListener("click", () => {
      if (profile?.accessCode) {
        navigator.clipboard.writeText(profile.accessCode).then(() => {
          copyBtn.textContent = "✓ Copiado!";
          setTimeout(() => copyBtn.textContent = "📋 Copiar Código", 2000);
        });
      }
    });

    // Salvar dados do perfil
    container.querySelector("#profile-info-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const updated = {
        ...profile,
        name: container.querySelector("#profile-name").value.trim(),
        dailyGoalMinutes: parseInt(container.querySelector("#profile-daily-goal").value, 10),
        dailyAvailableHours: parseFloat(container.querySelector("#profile-avail-hours").value)
      };
      saveProfile(updated);
      alert("Dados do perfil atualizados com sucesso!");
      render();
    });

    // Salvar configuração do Supabase
    container.querySelector("#supabase-config-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const url = container.querySelector("#sb-url").value.trim();
      const anonKey = container.querySelector("#sb-key").value.trim();

      saveSupabaseConfig({
        url,
        anonKey,
        isConfigured: !!(url && anonKey),
        lastSyncTime: config.lastSyncTime
      });

      alert("Configuração do Supabase salva com sucesso!");
      render();
    });

    // Testar conexão
    container.querySelector("#btn-test-supabase")?.addEventListener("click", async () => {
      const url = container.querySelector("#sb-url").value.trim();
      const key = container.querySelector("#sb-key").value.trim();
      const statusDiv = container.querySelector("#sb-test-status");

      if (!url || !key) {
        alert("Preencha a URL e a Chave Anon antes de testar a conexão.");
        return;
      }

      statusDiv.style.display = "block";
      statusDiv.style.color = "var(--primary)";
      statusDiv.textContent = "Conectando ao Supabase...";

      const res = await testSupabaseConnection(url, key);
      if (res.success) {
        statusDiv.style.color = "var(--success-text)";
        statusDiv.textContent = res.message;
      } else {
        statusDiv.style.color = "var(--danger-text)";
        statusDiv.textContent = `Falha na conexão: ${res.error}`;
      }
    });

    // Sincronização manual
    container.querySelector("#btn-manual-sync")?.addEventListener("click", async () => {
      const btn = container.querySelector("#btn-manual-sync");
      btn.disabled = true;
      btn.textContent = "Sincronizando...";

      const allData = exportAllDataJSON();
      const res = await syncPush(profile.id, profile.sessionToken, allData);

      if (res.success) {
        alert(`Sincronização concluída com sucesso às ${new Date().toLocaleTimeString("pt-BR")}!`);
      } else {
        alert(`Aviso: Os dados permanecem salvos localmente. Sincronização em nuvem pendente (${res.error || "Serviço indisponível"}).`);
      }

      btn.disabled = false;
      btn.textContent = "🔄 Sincronizar Agora";
      render();
    });

    // Exportação JSON
    container.querySelector("#btn-export-json")?.addEventListener("click", () => {
      const data = exportAllDataJSON();
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `saneago_study_backup_${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
    });

    // Exportação CSV de Sessões
    container.querySelector("#btn-export-sessions-csv")?.addEventListener("click", () => {
      const csv = exportStudyHistoryCSV();
      const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `saneago_horas_estudo_${new Date().toISOString().slice(0, 10)}.csv`;
      a.click();
      URL.revokeObjectURL(url);
    });

    // Exportação CSV de Erros
    container.querySelector("#btn-export-errors-csv")?.addEventListener("click", () => {
      const csv = exportErrorNotebookCSV();
      const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `saneago_caderno_erros_${new Date().toISOString().slice(0, 10)}.csv`;
      a.click();
      URL.revokeObjectURL(url);
    });

    // Importação JSON
    const fileInput = container.querySelector("#file-import-json");
    container.querySelector("#btn-trigger-import")?.addEventListener("click", () => {
      fileInput.click();
    });

    fileInput?.addEventListener("change", (e) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          openImportConfirmModal(parsed);
        } catch (err) {
          alert("Arquivo JSON inválido. Verifique o arquivo selecionado.");
        }
      };
      reader.readAsText(file);
    });

    // Trocar de perfil / Desconectar
    container.querySelector("#btn-switch-account")?.addEventListener("click", () => {
      if (confirm("Deseja sair deste perfil? Certifique-se de que guardou seu Código de Acesso para retornar futuramente!")) {
        renderAuthModal(() => {
          render();
        });
      }
    });

    // Limpar tudo
    container.querySelector("#btn-clear-all")?.addEventListener("click", () => {
      if (confirm("ATENÇÃO: Deseja apagar todos os dados salvos neste navegador? Esta operação é irreversível a menos que você possua um backup JSON!")) {
        clearAllLocalData();
        renderAuthModal(() => {
          render();
        });
      }
    });
  }

  function openImportConfirmModal(data) {
    const modalRoot = container.querySelector("#import-modal-container");
    modalRoot.innerHTML = `
      <div class="modal-backdrop">
        <div class="modal-container">
          <div class="modal-header">
            <h3 class="modal-title">Confirmar Restauração de Dados</h3>
            <button class="modal-close-btn">&times;</button>
          </div>

          <div class="modal-body">
            <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 14px;">
              O arquivo foi analisado e contém dados de <strong>${data.profile?.name || "Estudante"}</strong>.
            </p>

            <div style="background: var(--bg-page); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 12px; font-size: 13px; margin-bottom: 16px;">
              <div>• Tarefas: <strong>${data.tasks?.length || 0}</strong></div>
              <div>• Sessões de Estudo: <strong>${data.sessions?.length || 0}</strong></div>
              <div>• Resumos: <strong>${data.notes?.length || 0}</strong></div>
              <div>• Caderno de Erros: <strong>${data.errorNotebook?.length || 0}</strong></div>
            </div>

            <p style="font-weight: 600; font-size: 13.5px; margin-bottom: 8px;">Como deseja importar?</p>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <label style="display: flex; align-items: flex-start; gap: 10px; padding: 10px; border: 1px solid var(--border); border-radius: var(--radius-md); cursor: pointer;">
                <input type="radio" name="import-mode" value="merge" checked>
                <div>
                  <div style="font-weight: 600; font-size: 13px;">Combinar com os dados atuais (Recomendado)</div>
                  <div style="font-size: 12px; color: var(--text-muted);">Acrescenta os itens do arquivo sem apagar seus dados já registrados.</div>
                </div>
              </label>

              <label style="display: flex; align-items: flex-start; gap: 10px; padding: 10px; border: 1px solid var(--border); border-radius: var(--radius-md); cursor: pointer;">
                <input type="radio" name="import-mode" value="replace">
                <div>
                  <div style="font-weight: 600; font-size: 13px; color: var(--danger-text);">Substituir completamente todos os dados atuais</div>
                  <div style="font-size: 12px; color: var(--text-muted);">Sobrescreve o perfil e todo o histórico deste dispositivo.</div>
                </div>
              </label>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary modal-close-btn">Cancelar</button>
            <button type="button" id="btn-confirm-import-execute" class="btn btn-primary">Executar Importação</button>
          </div>
        </div>
      </div>
    `;

    modalRoot.querySelectorAll(".modal-close-btn").forEach(btn => btn.addEventListener("click", () => modalRoot.innerHTML = ""));

    modalRoot.querySelector("#btn-confirm-import-execute")?.addEventListener("click", () => {
      const mode = modalRoot.querySelector("input[name='import-mode']:checked").value;
      try {
        importDataJSON(data, mode);
        modalRoot.innerHTML = "";
        alert("Dados importados com sucesso!");
        render();
      } catch (err) {
        alert(`Erro na importação: ${err.message}`);
      }
    });
  }

  render();
}

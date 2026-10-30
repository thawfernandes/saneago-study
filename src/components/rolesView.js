// ==============================================================================
// SANEAGO STUDY - CATÁLOGO DE CARGOS DA SANEAGO E COMPARTILHAMENTO DE PROGRESSO
// Consulta, multi-seleção de cargos, criação de cargo personalizado e unificação de matérias
// ==============================================================================

import { getRolesCatalog, saveCustomRole, getSelectedRoleIds, saveSelectedRoleIds, getTopics, getSubjects, getQuestionAttempts } from "../services/storage.js";
import { generateUUID } from "../services/crypto.js";

export function renderRolesView(container, navigateTo) {
  let selectedRoleTab = null;

  function render() {
    const roles = getRolesCatalog();
    const selectedIds = getSelectedRoleIds();
    const topics = getTopics();
    const subjects = getSubjects();
    const attempts = getQuestionAttempts();

    const subjMap = new Map(subjects.map(s => [s.id, s]));

    if (!selectedRoleTab && selectedIds.length > 0) {
      selectedRoleTab = selectedIds[0];
    } else if (!selectedRoleTab && roles.length > 0) {
      selectedRoleTab = roles[0].id;
    }

    const currentRole = roles.find(r => r.id === selectedRoleTab);

    // Tópicos associados ao cargo ativo
    const roleTopics = topics.filter(t => t.roleIds && t.roleIds.includes(currentRole?.id));
    const completedRoleTopics = roleTopics.filter(t => t.status === "concluido").length;
    const progressPercent = roleTopics.length > 0 ? Math.round((completedRoleTopics / roleTopics.length) * 100) : 0;

    // Desempenho nas questões deste cargo
    const roleTopicIds = new Set(roleTopics.map(t => t.id));
    const roleAttempts = attempts.filter(a => roleTopicIds.has(a.topicId));
    const roleCorrect = roleAttempts.filter(a => a.isCorrect).length;
    const roleAccuracy = roleAttempts.length > 0 ? Math.round((roleCorrect / roleAttempts.length) * 100) : null;

    container.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 24px;">

        <!-- CABEÇALHO -->
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 14px;">
          <div>
            <h2 style="font-size: 22px; font-weight: 700;">Cargos da Saneago e Frentes de Preparação</h2>
            <p style="font-size: 13.5px; color: var(--text-muted);">
              Consulte os requisitos oficiais de editais anteriores, selecione os cargos de interesse e compartilhe matérias comuns.
            </p>
          </div>

          <button id="btn-add-custom-role" class="btn btn-outline btn-sm">+ Cadastrar Cargo Personalizado</button>
        </div>

        <!-- SELEÇÃO MÚLTIPLA DE CARGOS DO ESTUDANTE -->
        <div class="card" style="border: 2px solid #BAE6FD; background: #F0F9FF;">
          <div class="card-body" style="padding: 18px 22px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
              <div>
                <h4 style="font-size: 15px; font-weight: 700; color: #0369A1;">Minha Preparação: Cargos Selecionados</h4>
                <p style="font-size: 12.5px; color: #0284C7;">Você pode estudar para mais de um cargo. Matérias compartilhadas têm progresso unificado.</p>
              </div>
              <span class="badge badge-primary">${selectedIds.length} cargo(s) selecionado(s)</span>
            </div>

            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              ${roles.map(r => {
                const isSelected = selectedIds.includes(r.id);
                return `
                  <label style="display: flex; align-items: center; gap: 8px; padding: 8px 14px; border-radius: var(--radius-md); background: ${isSelected ? "var(--bg-surface)" : "transparent"}; border: 1px solid ${isSelected ? "var(--primary)" : "#CBD5E1"}; cursor: pointer; transition: var(--transition);">
                    <input type="checkbox" class="role-selector-checkbox" value="${r.id}" ${isSelected ? "checked" : ""}>
                    <span style="font-size: 13.5px; font-weight: ${isSelected ? "700" : "500"}; color: ${isSelected ? "var(--primary)" : "var(--text-secondary)"};">
                      ${r.name} (${r.educationLevel})
                    </span>
                  </label>
                `;
              }).join("")}
            </div>
          </div>
        </div>

        <!-- ABAS DOS CARGOS PARA VISUALIZAÇÃO DETALHADA -->
        <div style="display: flex; gap: 8px; overflow-x: auto; padding-bottom: 4px; border-bottom: 1px solid var(--border);">
          ${roles.map(r => {
            const isActive = r.id === selectedRoleTab;
            const isUserTarget = selectedIds.includes(r.id);
            return `
              <button class="btn btn-role-tab" data-id="${r.id}" style="padding: 10px 16px; border-radius: var(--radius-md) var(--radius-md) 0 0; background: ${isActive ? "var(--bg-surface)" : "transparent"}; color: ${isActive ? "var(--primary)" : "var(--text-secondary)"}; font-weight: ${isActive ? "700" : "500"}; border: 1px solid ${isActive ? "var(--border)" : "transparent"}; border-bottom: ${isActive ? "2px solid var(--primary)" : "none"}; display: flex; align-items: center; gap: 8px;">
                <span>${r.name}</span>
                ${isUserTarget ? `<span class="badge badge-success" style="font-size: 10px; padding: 2px 6px;">Alvo</span>` : ""}
              </button>
            `;
          }).join("")}
        </div>

        <!-- DETALHES DO CARGO SELECIONADO -->
        ${currentRole ? `
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 24px;">

            <!-- COLUNA 1: FICHA TÉCNICA E REQUISITOS -->
            <div class="card">
              <div class="card-header">
                <div>
                  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                    <span class="badge badge-primary">${currentRole.educationLevel}</span>
                    <span class="badge ${formatOriginBadge(currentRole.sourceStatus)}">
                      ${formatOriginLabel(currentRole.sourceStatus)}
                    </span>
                  </div>
                  <h3 class="card-title">${currentRole.name}</h3>
                </div>
              </div>

              <div class="card-body" style="display: flex; flex-direction: column; gap: 16px;">
                <div>
                  <div style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: var(--text-muted); margin-bottom: 2px;">Requisitos Oficiais</div>
                  <div style="font-size: 13.5px; color: var(--text-primary);">${currentRole.requirements}</div>
                </div>

                <div>
                  <div style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: var(--text-muted); margin-bottom: 2px;">Atribuições do Cargo</div>
                  <div style="font-size: 13.5px; color: var(--text-secondary); line-height: 1.5;">${currentRole.duties}</div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; background: var(--bg-page); padding: 12px; border-radius: var(--radius-md); border: 1px solid var(--border);">
                  <div>
                    <div style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: var(--text-muted);">Remuneração Base</div>
                    <div style="font-size: 14px; font-weight: 700; color: var(--primary);">${currentRole.salaryInfo}</div>
                  </div>
                  <div>
                    <div style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: var(--text-muted);">Jornada</div>
                    <div style="font-size: 14px; font-weight: 700;">${currentRole.workload}</div>
                  </div>
                </div>

                <div>
                  <div style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: var(--text-muted); margin-bottom: 2px;">Benefícios Corporativos</div>
                  <div style="font-size: 13px; color: var(--text-secondary);">${currentRole.benefits || "Vale-alimentação, plano de saúde e odontológico, PLR, Saneaprev."}</div>
                </div>

                <div style="font-size: 12px; color: var(--text-muted); border-top: 1px solid var(--border-subtle); padding-top: 10px;">
                  Fonte: <strong>${currentRole.sourceDocument || currentRole.referenceContest || "Documentação Oficial"}</strong>
                </div>
              </div>
            </div>

            <!-- COLUNA 2: CONTEÚDOS EXIGIDOS E PROGRESSO DO CARGO -->
            <div class="card">
              <div class="card-header">
                <div class="card-title">🎯 Progresso Específico para este Cargo</div>
                <span class="badge ${progressPercent >= 70 ? "badge-success" : "badge-warning"}">${progressPercent}% Concluído</span>
              </div>

              <div class="card-body">
                <!-- Métricas reais do cargo -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 20px;">
                  <div style="background: var(--bg-page); padding: 12px; border-radius: var(--radius-md); text-align: center; border: 1px solid var(--border);">
                    <div style="font-size: 22px; font-weight: 700; color: var(--primary);">${completedRoleTopics} / ${roleTopics.length}</div>
                    <div style="font-size: 12px; color: var(--text-muted);">Assuntos Concluídos</div>
                  </div>

                  <div style="background: var(--bg-page); padding: 12px; border-radius: var(--radius-md); text-align: center; border: 1px solid var(--border);">
                    <div style="font-size: 22px; font-weight: 700; color: ${roleAccuracy !== null && roleAccuracy >= 70 ? "var(--success)" : "var(--primary)"};">
                      ${roleAccuracy !== null ? `${roleAccuracy}%` : "—"}
                    </div>
                    <div style="font-size: 12px; color: var(--text-muted);">Taxa de Acertos (${roleAttempts.length} q.)</div>
                  </div>
                </div>

                <h4 style="font-size: 14px; font-weight: 700; margin-bottom: 10px;">Disciplinas Vinculadas a este Cargo:</h4>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                  ${roleTopics.map(t => {
                    const isDone = t.status === "concluido";
                    const isShared = (t.roleIds?.length || 0) > 1;

                    return `
                      <div style="padding: 10px 12px; border-radius: var(--radius-md); border: 1px solid var(--border); background: ${isDone ? "#F0FDF4" : "var(--bg-surface)"}; display: flex; justify-content: space-between; align-items: center;">
                        <div>
                          <div style="font-weight: 600; font-size: 13.5px; ${isDone ? "text-decoration: line-through; color: var(--text-muted);" : ""}">${t.name}</div>
                          ${isShared ? `<span class="badge badge-info" style="font-size: 10.5px; margin-top: 3px;">🔗 Compartilhado com +${t.roleIds.length - 1} cargo(s)</span>` : ""}
                        </div>

                        <span class="badge ${isDone ? "badge-success" : "badge-gray"}" style="font-size: 11px;">
                          ${isDone ? "Concluído" : "Pendente"}
                        </span>
                      </div>
                    `;
                  }).join("")}
                </div>
              </div>
            </div>

          </div>
        ` : ""}

      </div>

      <!-- MODAL DE CARGO PERSONALIZADO -->
      <div id="custom-role-modal-container"></div>
    `;

    attachRoleEvents(roles);
  }

  function formatOriginBadge(status) {
    if (status === "confirmado_oficial") return "badge-success";
    if (status === "concurso_anterior") return "badge-primary";
    return "badge-warning";
  }

  function formatOriginLabel(status) {
    const map = {
      confirmado_oficial: "Confirmado em Documento Oficial",
      concurso_anterior: "Informação de Concurso Anterior (CS-UFG)",
      estimativa: "Estimativa / Não Confirmado",
      pendente_confirmacao: "Pendente de Confirmação no Novo Edital"
    };
    return map[status] || status;
  }

  function attachRoleEvents(roles) {
    // Alternar aba do cargo
    container.querySelectorAll(".btn-role-tab").forEach(tab => {
      tab.addEventListener("click", () => {
        selectedRoleTab = tab.getAttribute("data-id");
        render();
      });
    });

    // Checkbox de seleção de cargos do estudante
    container.querySelectorAll(".role-selector-checkbox").forEach(cb => {
      cb.addEventListener("change", () => {
        const checked = Array.from(container.querySelectorAll(".role-selector-checkbox:checked")).map(el => el.value);
        if (checked.length === 0) {
          alert("Mantenha ao menos 1 cargo selecionado para o seu plano de estudos.");
          cb.checked = true;
          return;
        }
        saveSelectedRoleIds(checked);
        render();
      });
    });

    // Cadastrar cargo personalizado
    container.querySelector("#btn-add-custom-role")?.addEventListener("click", () => {
      openCustomRoleModal();
    });
  }

  function openCustomRoleModal() {
    const modalRoot = container.querySelector("#custom-role-modal-container");
    modalRoot.innerHTML = `
      <div class="modal-backdrop">
        <div class="modal-container">
          <div class="modal-header">
            <h3 class="modal-title">Cadastrar Cargo Personalizado</h3>
            <button class="modal-close-btn">&times;</button>
          </div>

          <form id="custom-role-form">
            <div class="modal-body">
              <div class="form-group">
                <label class="form-label" for="cr-name">Nome do Cargo *</label>
                <input type="text" id="cr-name" class="form-control" placeholder="Ex: Técnico em Agrimensura" required>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
                <div class="form-group">
                  <label class="form-label" for="cr-level">Escolaridade</label>
                  <select id="cr-level" class="form-select">
                    <option value="Fundamental">Nível Fundamental</option>
                    <option value="Médio">Nível Médio</option>
                    <option value="Técnico" selected>Nível Técnico</option>
                    <option value="Superior">Nível Superior</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label" for="cr-salary">Remuneração Estimada</label>
                  <input type="text" id="cr-salary" class="form-control" placeholder="Ex: R$ 4.500,00">
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="cr-reqs">Requisitos</label>
                <textarea id="cr-reqs" class="form-control" rows="2" placeholder="Curso técnico exigido, conselho de classe..."></textarea>
              </div>

              <div class="form-group">
                <label class="form-label" for="cr-duties">Atribuições Principais</label>
                <textarea id="cr-duties" class="form-control" rows="2" placeholder="Principais atividades executadas..."></textarea>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary modal-close-btn">Cancelar</button>
              <button type="submit" class="btn btn-primary">Salvar Cargo Personalizado</button>
            </div>
          </form>
        </div>
      </div>
    `;

    modalRoot.querySelectorAll(".modal-close-btn").forEach(btn => btn.addEventListener("click", () => modalRoot.innerHTML = ""));

    modalRoot.querySelector("#custom-role-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const newRole = {
        id: `custom_${generateUUID().slice(0, 8)}`,
        name: modalRoot.querySelector("#cr-name").value.trim(),
        educationLevel: modalRoot.querySelector("#cr-level").value,
        salaryInfo: modalRoot.querySelector("#cr-salary").value.trim() || "Pendente de confirmação",
        requirements: modalRoot.querySelector("#cr-reqs").value.trim() || "Pendente de confirmação",
        duties: modalRoot.querySelector("#cr-duties").value.trim() || "Pendente de confirmação",
        workload: "40 horas semanais",
        sourceStatus: "pendente_confirmacao",
        isCustom: true
      };

      saveCustomRole(newRole);
      modalRoot.innerHTML = "";
      render();
    });
  }

  render();
}

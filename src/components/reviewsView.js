// ==============================================================================
// SANEAGO STUDY - REVISÕES E CADERNO DE ERROS
// Repetição espaçada (D+1, D+7, D+30), diagnóstico de causas de erro e estatísticas
// ==============================================================================

import { getCategorizedReviews, completeReview, ERROR_REASONS } from "../services/spacedRepetition.js";
import { getErrorNotebook, updateErrorNotebookEntry, getSubjects, getTopics } from "../services/storage.js";

export function renderReviewsView(container, navigateTo) {
  let activeTab = "spaced"; // 'spaced' | 'errors'

  function render() {
    const { dueToday, overdue, upcoming, completed } = getCategorizedReviews();
    const errorEntries = getErrorNotebook();
    const subjects = getSubjects();
    const topics = getTopics();

    const subjMap = new Map(subjects.map(s => [s.id, s]));
    const topMap = new Map(topics.map(t => [t.id, t]));

    // Análise de causas de erro
    const reasonCounts = {};
    ERROR_REASONS.forEach(r => reasonCounts[r.id] = 0);
    errorEntries.forEach(e => {
      if (reasonCounts[e.errorReason] !== undefined) {
        reasonCounts[e.errorReason] += 1;
      }
    });

    container.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 20px;">

        <!-- CABEÇALHO -->
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 14px;">
          <div>
            <h2 style="font-size: 22px; font-weight: 700;">Revisões e Caderno de Erros</h2>
            <p style="font-size: 13.5px; color: var(--text-muted);">Consolide sua memória de longo prazo e ataque as causas reais dos seus erros.</p>
          </div>

          <div style="display: flex; gap: 8px;">
            <button id="tab-spaced" class="btn ${activeTab === "spaced" ? "btn-primary" : "btn-outline"} btn-sm">
              🔄 Revisões Espaçadas (${dueToday.length + overdue.length} pendentes)
            </button>
            <button id="tab-errors" class="btn ${activeTab === "errors" ? "btn-primary" : "btn-outline"} btn-sm">
              📕 Caderno de Erros (${errorEntries.length})
            </button>
          </div>
        </div>

        <!-- ABA DE REVISÕES ESPAÇADAS -->
        ${activeTab === "spaced" ? `
          <div style="display: flex; flex-direction: column; gap: 24px;">

            <!-- CARDS DE HOJE E ATRASADAS -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 24px;">

              <!-- REVISÕES ATRASADAS -->
              <div class="card" style="border-top: 4px solid var(--danger);">
                <div class="card-header">
                  <div class="card-title" style="color: var(--danger-text);">⚠️ Atrasadas (${overdue.length})</div>
                </div>
                <div class="card-body">
                  ${overdue.length === 0 ? `
                    <div class="empty-state" style="padding: 24px 12px;">
                      <div style="font-size: 24px; color: var(--success); margin-bottom: 6px;">✓</div>
                      <div style="font-size: 14px; font-weight: 600;">Nenhuma revisão atrasada!</div>
                    </div>
                  ` : `
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                      ${overdue.map(r => renderReviewItem(r, subjMap, topMap, true)).join("")}
                    </div>
                  `}
                </div>
              </div>

              <!-- REVISÕES DE HOJE -->
              <div class="card" style="border-top: 4px solid var(--warning);">
                <div class="card-header">
                  <div class="card-title" style="color: var(--warning-text);">📅 Para Revisar Hoje (${dueToday.length})</div>
                </div>
                <div class="card-body">
                  ${dueToday.length === 0 ? `
                    <div class="empty-state" style="padding: 24px 12px;">
                      <div style="font-size: 24px; color: var(--success); margin-bottom: 6px;">✓</div>
                      <div style="font-size: 14px; font-weight: 600;">Tudo em dia para hoje!</div>
                    </div>
                  ` : `
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                      ${dueToday.map(r => renderReviewItem(r, subjMap, topMap, false)).join("")}
                    </div>
                  `}
                </div>
              </div>

            </div>

            <!-- PRÓXIMAS REVISÕES (CICLOS D+7 E D+30) -->
            <div class="card">
              <div class="card-header">
                <div class="card-title">🗓️ Próximas Revisões Programadas (${upcoming.length})</div>
              </div>
              <div class="card-body">
                ${upcoming.length === 0 ? `
                  <p style="font-size: 13.5px; color: var(--text-muted);">Conclua sessões de estudo para que novos ciclos espaçados apareçam aqui.</p>
                ` : `
                  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px;">
                    ${upcoming.slice(0, 8).map(r => {
                      const top = topMap.get(r.topicId);
                      const subj = subjMap.get(r.subjectId);
                      const d = new Date(r.dueDate + "T00:00:00");
                      const dateStr = d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" });

                      return `
                        <div style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 12px; background: var(--bg-surface);">
                          <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                            <span class="badge badge-gray">Ciclo D+${r.reviewStage === 1 ? 1 : r.reviewStage === 2 ? 7 : 30}</span>
                            <span style="font-size: 12px; font-weight: 700; color: var(--primary);">${dateStr}</span>
                          </div>
                          <div style="font-weight: 600; font-size: 13.5px;">${top?.name || "Assunto"}</div>
                          <div style="font-size: 12px; color: var(--text-muted);">${subj?.name || "Matéria"}</div>
                        </div>
                      `;
                    }).join("")}
                  </div>
                `}
              </div>
            </div>

          </div>
        ` : `
          <!-- ABA DO CADERNO DE ERROS -->
          <div style="display: flex; flex-direction: column; gap: 24px;">

            <!-- GRÁFICO E ANÁLISE DOS MOTIVOS DE ERRO -->
            <div class="card">
              <div class="card-header">
                <div class="card-title">🔍 Diagnóstico de Erros Recorrentes</div>
              </div>
              <div class="card-body">
                ${errorEntries.length === 0 ? `
                  <div class="empty-state">
                    <div class="empty-state-icon">🎉</div>
                    <div class="empty-state-title">Seu caderno de erros está limpo!</div>
                    <p class="empty-state-desc">Ao errar uma questão na aba "Questões e simulados", clique em "Anotar no Caderno de Erros" para catalogá-la aqui.</p>
                  </div>
                ` : `
                  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 20px;">
                    ${ERROR_REASONS.map(r => {
                      const count = reasonCounts[r.id] || 0;
                      const percent = errorEntries.length > 0 ? Math.round((count / errorEntries.length) * 100) : 0;

                      return `
                        <div style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 12px; background: var(--bg-surface);">
                          <div style="font-size: 12px; font-weight: 600; color: var(--text-muted); margin-bottom: 4px;">${r.label}</div>
                          <div style="font-size: 20px; font-weight: 700; color: ${count > 0 ? "var(--danger)" : "var(--text-primary)"};">
                            ${count} <span style="font-size: 12px; font-weight: 500; color: var(--text-muted);">(${percent}%)</span>
                          </div>
                        </div>
                      `;
                    }).join("")}
                  </div>
                `}
              </div>
            </div>

            <!-- LISTAGEM DAS QUESTÕES ERRADAS -->
            <div class="card">
              <div class="card-header">
                <div class="card-title">📝 Registros do Caderno de Erros (${errorEntries.length})</div>
              </div>
              <div class="card-body">
                <div style="display: flex; flex-direction: column; gap: 14px;">
                  ${errorEntries.map(e => {
                    const subj = subjMap.get(e.subjectId);
                    const top = topMap.get(e.topicId);
                    const reasonObj = ERROR_REASONS.find(r => r.id === e.errorReason);
                    const date = e.createdAt ? new Date(e.createdAt).toLocaleDateString("pt-BR") : "";

                    return `
                      <div class="error-item">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 12px;">
                          <div>
                            <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 6px;">
                              <span class="badge badge-primary">${subj?.name || "Matéria"}</span>
                              <span class="badge badge-info">${top?.name || "Assunto"}</span>
                              <span class="badge badge-danger">${reasonObj?.label || e.errorReason}</span>
                              <span style="font-size: 12px; color: var(--text-muted);">Data: ${date}</span>
                            </div>
                            <div style="font-size: 13.5px; font-weight: 600; margin-bottom: 4px;">
                              Você marcou: <span style="color: var(--danger); font-weight: 700;">${e.chosenLetter || "?"}</span> | Gabarito Correto: <span style="color: var(--success); font-weight: 700;">${e.correctLetter || "?"}</span>
                            </div>
                          </div>

                          <div style="display: flex; gap: 6px;">
                            <button class="btn btn-outline btn-sm btn-mark-error-status" data-id="${e.id}" data-status="dominado">
                              ${e.status === "dominado" ? "✓ Dominado" : "Marcar como Dominado"}
                            </button>
                          </div>
                        </div>

                        ${e.explanation ? `
                          <div style="font-size: 13px; color: var(--text-secondary); background: var(--bg-page); padding: 10px 14px; border-radius: var(--radius-sm); border: 1px solid var(--border);">
                            <strong>Explicação:</strong> ${e.explanation}
                          </div>
                        ` : ""}

                        ${e.notes ? `
                          <div style="font-size: 12.5px; color: #92400E; background: #FEF3C7; padding: 6px 12px; border-radius: var(--radius-sm);">
                            💡 <strong>Sua anotação preventiva:</strong> "${e.notes}"
                          </div>
                        ` : ""}
                      </div>
                    `;
                  }).join("")}
                </div>
              </div>
            </div>

          </div>
        `}

      </div>
    `;

    attachReviewEvents();
  }

  function renderReviewItem(review, subjMap, topMap, isLate) {
    const top = topMap.get(review.topicId);
    const subj = subjMap.get(review.subjectId);

    return `
      <div style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 12px; background: var(--bg-surface); display: flex; flex-direction: column; gap: 8px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div>
            <div style="font-weight: 700; font-size: 14px;">${top?.name || "Assunto"}</div>
            <div style="font-size: 12px; color: var(--text-muted);">${subj?.name || "Matéria"} • Ciclo D+${review.reviewStage === 1 ? 1 : review.reviewStage === 2 ? 7 : 30}</div>
          </div>
          <span class="badge ${isLate ? "badge-danger" : "badge-warning"}">${isLate ? "Atrasada" : "Hoje"}</span>
        </div>

        <div style="display: flex; gap: 6px; margin-top: 4px;">
          <button class="btn btn-success btn-sm btn-action-review" data-id="${review.id}" data-status="realizada" style="flex: 1;">
            ✓ Realizada
          </button>
          <button class="btn btn-warning btn-sm btn-action-review" data-id="${review.id}" data-status="precisa_estudar_novamente" style="flex: 1;">
            ⚠️ Rever Novamente
          </button>
          <button class="btn btn-outline btn-sm btn-action-review" data-id="${review.id}" data-status="nao_realizada">
            Não feita
          </button>
        </div>
      </div>
    `;
  }

  function attachReviewEvents() {
    container.querySelector("#tab-spaced")?.addEventListener("click", () => {
      activeTab = "spaced";
      render();
    });

    container.querySelector("#tab-errors")?.addEventListener("click", () => {
      activeTab = "errors";
      render();
    });

    // Ações de conclusão de revisão
    container.querySelectorAll(".btn-action-review").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const status = btn.getAttribute("data-status");
        completeReview(id, status);
        render();
      });
    });

    // Marcar erro como dominado
    container.querySelectorAll(".btn-mark-error-status").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const status = btn.getAttribute("data-status");
        updateErrorNotebookEntry(id, { status });
        render();
      });
    });
  }

  render();
}

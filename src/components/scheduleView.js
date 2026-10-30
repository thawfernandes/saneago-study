// ==============================================================================
// SANEAGO STUDY - MEU CRONOGRAMA (PLANEJAMENTO PERSONALIZÁVEL)
// Visualizações Semanal e Mensal, CRUD de tarefas, comparação planejado vs realizado
// Algoritmo de adaptação e redistribuição inteligente sem sobrecarga
// ==============================================================================

import { getTasks, saveTask, deleteTask, getSubjects, getTopics, getUserGoals, saveUserGoals } from "../services/storage.js";
import { generateAdaptiveSuggestions, redistributeMissedTasks } from "../services/adaptiveEngine.js";

export function renderScheduleView(container, navigateTo) {
  let viewMode = "week"; // 'week' | 'month'
  let currentReferenceDate = new Date();
  let editingTask = null;

  function render() {
    const tasks = getTasks();
    const subjects = getSubjects();
    const topics = getTopics();
    const goals = getUserGoals();
    const suggestions = generateAdaptiveSuggestions();

    const subjMap = new Map(subjects.map(s => [s.id, s]));
    const topMap = new Map(topics.map(t => [t.id, t]));

    container.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        
        <!-- CABEÇALHO DO CRONOGRAMA & CONTROLES -->
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 14px;">
          <div>
            <h2 style="font-size: 22px; font-weight: 700;">Meu Cronograma de Estudos</h2>
            <p style="font-size: 13.5px; color: var(--text-muted);">Organize sua rotina, ajuste horários e compare o tempo planejado com o realizado.</p>
          </div>

          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="display: flex; background: var(--bg-surface); border: 1px solid var(--border); border-radius: var(--radius-md); overflow: hidden;">
              <button id="btn-view-week" class="btn btn-sm" style="background: ${viewMode === "week" ? "var(--primary)" : "transparent"}; color: ${viewMode === "week" ? "white" : "var(--text-secondary)"}; border-radius: 0;">
                Visão Semanal
              </button>
              <button id="btn-view-month" class="btn btn-sm" style="background: ${viewMode === "month" ? "var(--primary)" : "transparent"}; color: ${viewMode === "month" ? "white" : "var(--text-secondary)"}; border-radius: 0;">
                Visão Mensal
              </button>
            </div>

            <button id="btn-open-new-task-modal" class="btn btn-primary btn-sm">
              + Nova Tarefa
            </button>
          </div>
        </div>

        <!-- SUGESTÕES ADAPTATIVAS DO CRONOGRAMA -->
        ${suggestions.length > 0 ? `
          <div class="suggestion-banner" style="margin-bottom: 0;">
            <div class="suggestion-icon">⚡</div>
            <div class="suggestion-content">
              <div class="suggestion-title">${suggestions[0].title}</div>
              <div class="suggestion-reason">${suggestions[0].reason}</div>
              <div style="display: flex; gap: 8px;">
                <button id="btn-apply-sched-sug" class="btn btn-primary btn-sm">Aplicar ajuste sugerido</button>
                <button id="btn-dismiss-sched-sug" class="btn btn-outline btn-sm">Ignorar</button>
              </div>
            </div>
          </div>
        ` : ""}

        <!-- NAVEGAÇÃO DE DATAS -->
        <div style="display: flex; justify-content: space-between; align-items: center; background: var(--bg-surface); padding: 12px 20px; border-radius: var(--radius-md); border: 1px solid var(--border);">
          <button id="btn-prev-period" class="btn btn-outline btn-sm">◀ Anterior</button>
          <div id="period-label" style="font-family: var(--font-heading); font-weight: 700; font-size: 16px;">
            ${formatPeriodLabel(currentReferenceDate, viewMode)}
          </div>
          <button id="btn-next-period" class="btn btn-outline btn-sm">Próximo ▶</button>
        </div>

        <!-- CORPO DO CALENDÁRIO -->
        <div id="calendar-container">
          ${viewMode === "week" ? renderWeekView(tasks, subjMap, topMap) : renderMonthView(tasks, subjMap, topMap)}
        </div>

      </div>

      <!-- MODAL DE CRIAR / EDITAR TAREFA -->
      <div id="task-modal-container"></div>

      <!-- MODAL DE CONFIRMAÇÃO DE EXCLUSÃO -->
      <div id="confirm-modal-container"></div>
    `;

    attachEvents(tasks, subjMap, topMap, suggestions);
  }

  function formatPeriodLabel(refDate, mode) {
    if (mode === "week") {
      const start = getStartOfWeek(refDate);
      const end = new Date(start);
      end.setDate(end.getDate() + 6);
      return `${start.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" })} a ${end.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })}`;
    } else {
      return refDate.toLocaleDateString("pt-BR", { month: "long", year: "numeric" }).toUpperCase();
    }
  }

  function getStartOfWeek(date) {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1); // segunda-feira como início
    return new Date(d.setDate(diff));
  }

  function renderWeekView(tasks, subjMap, topMap) {
    const start = getStartOfWeek(currentReferenceDate);
    const days = [];

    for (let i = 0; i < 7; i++) {
      const d = new Date(start);
      d.setDate(d.getDate() + i);
      days.push(d);
    }

    const todayStr = new Date().toISOString().slice(0, 10);

    return `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 12px;">
        ${days.map(day => {
          const dayStr = day.toISOString().slice(0, 10);
          const isToday = dayStr === todayStr;
          const dayTasks = tasks.filter(t => t.scheduledDate === dayStr);

          const plannedMins = dayTasks.reduce((acc, t) => acc + (t.estimatedMinutes || 0), 0);
          const actualMins = dayTasks.reduce((acc, t) => acc + (t.actualMinutes || 0), 0);

          return `
            <div style="background: var(--bg-surface); border: ${isToday ? "2px solid var(--accent)" : "1px solid var(--border)"}; border-radius: var(--radius-lg); padding: 14px; min-height: 280px; display: flex; flex-direction: column;">
              <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 6px;">
                <div>
                  <div style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: ${isToday ? "var(--accent)" : "var(--text-muted)"};">
                    ${day.toLocaleDateString("pt-BR", { weekday: "short" })}
                  </div>
                  <div style="font-size: 17px; font-weight: 700;">
                    ${day.getDate()}
                  </div>
                </div>

                <div style="text-align: right; font-size: 11px; color: var(--text-muted);">
                  <div>Plan: ${plannedMins}m</div>
                  ${actualMins > 0 ? `<div style="color: var(--success-text); font-weight: 700;">Feito: ${actualMins}m</div>` : ""}
                </div>
              </div>

              <!-- Lista de tarefas do dia -->
              <div style="flex: 1; display: flex; flex-direction: column; gap: 8px;">
                ${dayTasks.map(t => {
                  const subj = subjMap.get(t.subjectId);
                  const top = topMap.get(t.topicId);
                  const isDone = t.status === "concluida";
                  const isMissed = t.status === "nao_realizada";

                  return `
                    <div style="background: ${isDone ? "#F0FDF4" : isMissed ? "#FEF2F2" : "var(--bg-page)"}; border: 1px solid ${isDone ? "#BBF7D0" : isMissed ? "#FECACA" : "var(--border)"}; border-radius: var(--radius-sm); padding: 8px; font-size: 12px; cursor: pointer;" class="task-card-item" data-task-id="${t.id}">
                      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                        <span style="font-weight: 700; color: ${subj?.color || "var(--primary)"};">${subj?.name?.slice(0, 14) || "Geral"}...</span>
                        <span style="font-size: 10px; font-weight: 700; color: ${isDone ? "var(--success-text)" : isMissed ? "var(--danger-text)" : "var(--text-muted)"};">
                          ${isDone ? "✓ Feito" : isMissed ? "✗ Não feito" : `${t.estimatedMinutes}m`}
                        </span>
                      </div>
                      <div style="font-weight: 500; color: var(--text-primary); ${isDone ? "text-decoration: line-through;" : ""}">
                        ${top?.name || t.notes || "Estudo programado"}
                      </div>
                    </div>
                  `;
                }).join("")}

                <button class="btn btn-outline btn-sm btn-add-day-task" data-date="${dayStr}" style="margin-top: auto; width: 100%; border-style: dashed; padding: 4px; font-size: 11px;">
                  + Adicionar
                </button>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;
  }

  function renderMonthView(tasks, subjMap, topMap) {
    const year = currentReferenceDate.getFullYear();
    const month = currentReferenceDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const days = [];
    // Padding inicial
    let startDayOfWeek = firstDay.getDay(); // 0 = dom, 1 = seg
    let pad = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1;
    for (let p = pad; p > 0; p--) {
      const prevDate = new Date(year, month, 1 - p);
      days.push({ date: prevDate, isCurrentMonth: false });
    }
    // Dias do mês
    for (let d = 1; d <= lastDay.getDate(); d++) {
      days.push({ date: new Date(year, month, d), isCurrentMonth: true });
    }

    const todayStr = new Date().toISOString().slice(0, 10);

    return `
      <div style="background: var(--bg-surface); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden;">
        <div style="display: grid; grid-template-columns: repeat(7, 1fr); background: var(--bg-page); border-bottom: 1px solid var(--border); text-align: center; font-weight: 700; font-size: 12px; padding: 10px 0; color: var(--text-muted);">
          <div>SEG</div><div>TER</div><div>QUA</div><div>QUI</div><div>SEX</div><div>SÁB</div><div>DOM</div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 1px; background: var(--border);">
          ${days.map(({ date, isCurrentMonth }) => {
            const dateStr = date.toISOString().slice(0, 10);
            const isToday = dateStr === todayStr;
            const dayTasks = tasks.filter(t => t.scheduledDate === dateStr);

            return `
              <div style="background: ${isCurrentMonth ? "var(--bg-surface)" : "var(--bg-page)"}; min-height: 100px; padding: 8px; opacity: ${isCurrentMonth ? "1" : "0.5"};" class="month-day-cell" data-date="${dateStr}">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                  <span style="font-size: 13px; font-weight: ${isToday ? "700" : "500"}; ${isToday ? "background: var(--accent); color: white; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center;" : ""}">
                    ${date.getDate()}
                  </span>
                  ${dayTasks.length > 0 ? `<span style="font-size: 10px; font-weight: 700; color: var(--primary);">${dayTasks.length} tarefas</span>` : ""}
                </div>

                <div style="display: flex; flex-direction: column; gap: 3px;">
                  ${dayTasks.slice(0, 2).map(t => {
                    const isDone = t.status === "concluida";
                    const subj = subjMap.get(t.subjectId);
                    return `
                      <div class="task-card-item" data-task-id="${t.id}" style="background: ${isDone ? "#DCFCE7" : "var(--primary-light)"}; font-size: 10.5px; border-radius: 3px; padding: 2px 4px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; cursor: pointer;">
                        ${subj?.name || "Estudo"}
                      </div>
                    `;
                  }).join("")}
                  ${dayTasks.length > 2 ? `<span style="font-size: 10px; color: var(--text-muted);">+ ${dayTasks.length - 2} mais...</span>` : ""}
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }

  function attachEvents(tasks, subjMap, topMap, suggestions) {
    // Alternar visão
    container.querySelector("#btn-view-week")?.addEventListener("click", () => {
      viewMode = "week";
      render();
    });

    container.querySelector("#btn-view-month")?.addEventListener("click", () => {
      viewMode = "month";
      render();
    });

    // Navegar períodos
    container.querySelector("#btn-prev-period")?.addEventListener("click", () => {
      if (viewMode === "week") {
        currentReferenceDate.setDate(currentReferenceDate.getDate() - 7);
      } else {
        currentReferenceDate.setMonth(currentReferenceDate.getMonth() - 1);
      }
      render();
    });

    container.querySelector("#btn-next-period")?.addEventListener("click", () => {
      if (viewMode === "week") {
        currentReferenceDate.setDate(currentReferenceDate.getDate() + 7);
      } else {
        currentReferenceDate.setMonth(currentReferenceDate.getMonth() + 1);
      }
      render();
    });

    // Abrir modal de nova tarefa
    container.querySelector("#btn-open-new-task-modal")?.addEventListener("click", () => {
      openTaskModal(null, new Date().toISOString().slice(0, 10));
    });

    container.querySelectorAll(".btn-add-day-task").forEach(btn => {
      btn.addEventListener("click", () => {
        const date = btn.getAttribute("data-date");
        openTaskModal(null, date);
      });
    });

    // Clicar em tarefa existente para editar/reagendar/excluir
    container.querySelectorAll(".task-card-item").forEach(item => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        const taskId = item.getAttribute("data-task-id");
        const task = tasks.find(t => t.id === taskId);
        if (task) openTaskModal(task);
      });
    });

    // Aplicar sugestão adaptativa do cronograma
    container.querySelector("#btn-apply-sched-sug")?.addEventListener("click", () => {
      if (suggestions.length > 0) {
        const sug = suggestions[0];
        if (sug.type === "missed_tasks") {
          redistributeMissedTasks(sug.actionData.overdueTaskIds);
        }
        render();
      }
    });

    container.querySelector("#btn-dismiss-sched-sug")?.addEventListener("click", (e) => {
      e.target.closest(".suggestion-banner")?.remove();
    });
  }

  function openTaskModal(task = null, defaultDate = null) {
    const subjects = getSubjects();
    const topics = getTopics();
    const modalRoot = container.querySelector("#task-modal-container");

    const isEdit = !!task;
    const initialDate = task ? task.scheduledDate : defaultDate || new Date().toISOString().slice(0, 10);
    const initialSubjId = task ? task.subjectId : subjects[0]?.id || "";

    modalRoot.innerHTML = `
      <div class="modal-backdrop">
        <div class="modal-container">
          <div class="modal-header">
            <h3 class="modal-title">${isEdit ? "Editar Tarefa de Estudo" : "Criar Nova Tarefa"}</h3>
            <button class="modal-close-btn">&times;</button>
          </div>

          <form id="task-edit-form">
            <div class="modal-body">
              <div class="form-group">
                <label class="form-label" for="task-subject-select">Matéria *</label>
                <select id="task-subject-select" class="form-select" required>
                  ${subjects.map(s => `
                    <option value="${s.id}" ${s.id === initialSubjId ? "selected" : ""}>${s.name}</option>
                  `).join("")}
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="task-topic-select">Assunto / Conteúdo</label>
                <select id="task-topic-select" class="form-select">
                  <!-- Carregado dinamicamente -->
                </select>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
                <div class="form-group">
                  <label class="form-label" for="task-date">Data Programada *</label>
                  <input type="date" id="task-date" class="form-control" value="${initialDate}" required>
                </div>

                <div class="form-group">
                  <label class="form-label" for="task-time">Horário (Opcional)</label>
                  <input type="time" id="task-time" class="form-control" value="${task?.scheduledTime || ""}">
                </div>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
                <div class="form-group">
                  <label class="form-label" for="task-estimated">Tempo Estimado (min)</label>
                  <input type="number" id="task-estimated" class="form-control" value="${task?.estimatedMinutes || 45}" min="10" max="480" step="5">
                </div>

                <div class="form-group">
                  <label class="form-label" for="task-actual">Tempo Realizado (min)</label>
                  <input type="number" id="task-actual" class="form-control" value="${task?.actualMinutes || 0}" min="0" max="600" step="5">
                  <span class="form-hint">Diferenciado do planejado</span>
                </div>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
                <div class="form-group">
                  <label class="form-label" for="task-priority">Prioridade</label>
                  <select id="task-priority" class="form-select">
                    <option value="alta" ${task?.priority === "alta" ? "selected" : ""}>Alta Prioridade</option>
                    <option value="media" ${!task || task?.priority === "media" ? "selected" : ""}>Média Prioridade</option>
                    <option value="baixa" ${task?.priority === "baixa" ? "selected" : ""}>Baixa Prioridade</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label" for="task-status">Situação</label>
                  <select id="task-status" class="form-select">
                    <option value="pendente" ${!task || task?.status === "pendente" ? "selected" : ""}>Pendente</option>
                    <option value="concluida" ${task?.status === "concluida" ? "selected" : ""}>Concluída</option>
                    <option value="adiada" ${task?.status === "adiada" ? "selected" : ""}>Adiada</option>
                    <option value="nao_realizada" ${task?.status === "nao_realizada" ? "selected" : ""}>Não realizada</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="task-notes">Observações ou metas da sessão</label>
                <textarea id="task-notes" class="form-control" rows="2" placeholder="Ex: Resolver 15 questões e ler resumo de concordância">${task?.notes || ""}</textarea>
              </div>
            </div>

            <div class="modal-footer" style="display: flex; justify-content: space-between;">
              ${isEdit ? `
                <button type="button" id="btn-delete-task" class="btn btn-danger btn-sm">
                  🗑️ Excluir Tarefa
                </button>
              ` : `<div></div>`}

              <div style="display: flex; gap: 10px;">
                <button type="button" class="btn btn-secondary modal-close-btn">Cancelar</button>
                <button type="submit" class="btn btn-primary">
                  ${isEdit ? "Salvar Alterações" : "Criar Tarefa"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    `;

    // Atualiza opções de tópicos conforme a matéria selecionada
    const subjSelect = modalRoot.querySelector("#task-subject-select");
    const topSelect = modalRoot.querySelector("#task-topic-select");

    function updateTopicsDropdown(selectedSubjId) {
      const filtered = topics.filter(t => t.subjectId === selectedSubjId);
      topSelect.innerHTML = `
        <option value="">-- Selecione o Assunto ou deixe geral --</option>
        ${filtered.map(t => `
          <option value="${t.id}" ${task && task.topicId === t.id ? "selected" : ""}>${t.name}</option>
        `).join("")}
      `;
    }

    updateTopicsDropdown(subjSelect.value);
    subjSelect.addEventListener("change", () => updateTopicsDropdown(subjSelect.value));

    // Fechar modal
    modalRoot.querySelectorAll(".modal-close-btn").forEach(btn => {
      btn.addEventListener("click", () => modalRoot.innerHTML = "");
    });

    // Salvar formulário
    modalRoot.querySelector("#task-edit-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const updatedData = {
        id: task ? task.id : undefined,
        subjectId: subjSelect.value,
        topicId: topSelect.value || null,
        scheduledDate: modalRoot.querySelector("#task-date").value,
        scheduledTime: modalRoot.querySelector("#task-time").value || null,
        estimatedMinutes: parseInt(modalRoot.querySelector("#task-estimated").value, 10) || 45,
        actualMinutes: parseInt(modalRoot.querySelector("#task-actual").value, 10) || 0,
        priority: modalRoot.querySelector("#task-priority").value,
        status: modalRoot.querySelector("#task-status").value,
        notes: modalRoot.querySelector("#task-notes").value.trim()
      };

      saveTask(updatedData);
      modalRoot.innerHTML = "";
      render();
    });

    // Excluir tarefa com confirmação
    if (isEdit) {
      modalRoot.querySelector("#btn-delete-task").addEventListener("click", () => {
        if (confirm("Deseja realmente excluir esta tarefa do cronograma? Esta operação não pode ser desfeita.")) {
          deleteTask(task.id);
          modalRoot.innerHTML = "";
          render();
        }
      });
    }
  }

  render();
}

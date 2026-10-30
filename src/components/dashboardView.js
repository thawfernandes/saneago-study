// ==============================================================================
// SANEAGO STUDY - TELA INICIAL: MEU PAINEL (DASHBOARD)
// Mostra primeiro o que o estudante precisa fazer hoje, com métricas 100% reais.
// ==============================================================================

import { getTasks, saveTask, getSessions, getTopics, getSubjects, getQuestionAttempts } from "../services/storage.js";
import { getCategorizedReviews, completeReview } from "../services/spacedRepetition.js";
import { generateAdaptiveSuggestions, redistributeMissedTasks } from "../services/adaptiveEngine.js";

export function renderDashboardView(container, navigateTo) {
  const todayStr = new Date().toISOString().slice(0, 10);
  const tasks = getTasks();
  const sessions = getSessions();
  const topics = getTopics();
  const subjects = getSubjects();
  const attempts = getQuestionAttempts();

  const subjMap = new Map(subjects.map(s => [s.id, s]));
  const topMap = new Map(topics.map(t => [t.id, t]));

  // A. Tarefa(s) do dia
  const todayTasks = tasks.filter(t => t.scheduledDate === todayStr && t.status !== "nao_realizada");

  // B. Resumo do progresso real
  // Tempo hoje (minutos)
  const todaySessions = sessions.filter(s => s.startedAt && s.startedAt.startsWith(todayStr));
  const secondsToday = todaySessions.reduce((acc, s) => acc + (s.durationSeconds || 0), 0);
  const minutesToday = Math.round(secondsToday / 60);

  // Tempo na semana (últimos 7 dias)
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  const weekSessions = sessions.filter(s => new Date(s.startedAt) >= sevenDaysAgo);
  const secondsWeek = weekSessions.reduce((acc, s) => acc + (s.durationSeconds || 0), 0);
  const hoursWeek = (secondsWeek / 3600).toFixed(1);

  // Dias com estudo registrado
  const studyDaysSet = new Set(sessions.map(s => s.startedAt?.slice(0, 10)).filter(Boolean));
  const distinctStudyDays = studyDaysSet.size;

  // Assuntos concluídos e progresso
  const totalTopics = topics.length;
  const completedTopics = topics.filter(t => t.status === "concluido").length;
  const progressPercent = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

  // Desempenho recente em questões
  const totalAttempts = attempts.length;
  const correctAttempts = attempts.filter(a => a.isCorrect).length;
  const overallAccuracy = totalAttempts > 0 ? Math.round((correctAttempts / totalAttempts) * 100) : null;

  // C. Revisões pendentes
  const { dueToday, overdue } = getCategorizedReviews();
  const pendingReviews = [...overdue, ...dueToday];

  // D. Desempenho por matéria (apenas dados reais)
  const subjectPerformance = subjects.map(s => {
    const sTopics = topics.filter(t => t.subjectId === s.id);
    const topicIds = new Set(sTopics.map(t => t.id));
    const sAttempts = attempts.filter(a => topicIds.has(a.topicId));
    if (sAttempts.length === 0) return null;
    const correct = sAttempts.filter(a => a.isCorrect).length;
    const rate = Math.round((correct / sAttempts.length) * 100);
    return {
      subject: s,
      total: sAttempts.length,
      correct,
      rate
    };
  }).filter(Boolean);

  subjectPerformance.sort((a, b) => b.rate - a.rate);
  const bestSubject = subjectPerformance.length > 0 ? subjectPerformance[0] : null;
  const worstSubject = subjectPerformance.length > 1 ? subjectPerformance[subjectPerformance.length - 1] : null;

  // E. Próximas atividades
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().slice(0, 10);
  const upcomingTasks = tasks
    .filter(t => t.scheduledDate > todayStr && t.status === "pendente")
    .sort((a, b) => a.scheduledDate.localeCompare(b.scheduledDate))
    .slice(0, 4);

  // F. Sugestões Adaptativas
  const suggestions = generateAdaptiveSuggestions();

  container.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 24px;">

      <!-- BANNER DE SUGESTÕES ADAPTATIVAS (se houver) -->
      ${suggestions.length > 0 ? `
        <div class="suggestion-banner">
          <div class="suggestion-icon">💡</div>
          <div class="suggestion-content">
            <div class="suggestion-title">${suggestions[0].title} (${suggestions[0].subjectName})</div>
            <div class="suggestion-reason">${suggestions[0].reason}</div>
            <div style="font-size: 13px; font-weight: 600; color: #0369A1; margin-bottom: 12px;">
              Sugestão: ${suggestions[0].suggestedAction}
            </div>
            <div class="suggestion-actions">
              <button id="btn-apply-suggestion" class="btn btn-primary btn-sm">
                Aplicar recomendação
              </button>
              <button id="btn-dismiss-suggestion" class="btn btn-outline btn-sm">
                Dispensar por enquanto
              </button>
            </div>
          </div>
        </div>
      ` : ""}

      <!-- B. RESUMO DO PROGRESSO REAL -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon-wrapper stat-icon-blue">⏱️</div>
          <div class="stat-content">
            <div class="stat-value">${minutesToday} min</div>
            <div class="stat-label">Estudado Hoje</div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon-wrapper stat-icon-indigo">📅</div>
          <div class="stat-content">
            <div class="stat-value">${hoursWeek} h</div>
            <div class="stat-label">Últimos 7 Dias</div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon-wrapper stat-icon-green">🎯</div>
          <div class="stat-content">
            <div class="stat-value">${completedTopics} / ${totalTopics}</div>
            <div class="stat-label">Assuntos Concluídos (${progressPercent}%)</div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon-wrapper stat-icon-amber">📝</div>
          <div class="stat-content">
            <div class="stat-value">${overallAccuracy !== null ? `${overallAccuracy}%` : "—"}</div>
            <div class="stat-label">${totalAttempts > 0 ? `${totalAttempts} questões resolvidas` : "Nenhuma questão resolvida"}</div>
          </div>
        </div>
      </div>

      <!-- GRID PRINCIPAL: TAREFA DO DIA + REVISÕES PENDENTES -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 24px;">

        <!-- A. TAREFA DO DIA -->
        <div class="card">
          <div class="card-header">
            <div class="card-title">📌 Tarefas Programadas para Hoje</div>
            <button id="btn-add-today-task" class="btn btn-outline btn-sm">+ Nova Tarefa</button>
          </div>
          <div class="card-body">
            ${todayTasks.length === 0 ? `
              <div class="empty-state" style="padding: 24px 12px;">
                <div class="empty-state-icon">📋</div>
                <div class="empty-state-title">Nenhuma tarefa programada para hoje</div>
                <p class="empty-state-desc">Você ainda não definiu estudos para este dia. Crie uma meta agora ou inicie uma sessão livre.</p>
                <div style="display: flex; gap: 10px; justify-content: center;">
                  <button id="btn-quick-create-task" class="btn btn-primary btn-sm">Criar tarefa para hoje</button>
                  <button id="btn-start-free-timer" class="btn btn-outline btn-sm">Iniciar sessão livre</button>
                </div>
              </div>
            ` : `
              <div style="display: flex; flex-direction: column; gap: 14px;">
                ${todayTasks.map(task => {
                  const subj = subjMap.get(task.subjectId);
                  const top = topMap.get(task.topicId);
                  const isDone = task.status === "concluida";

                  return `
                    <div style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px; background: ${isDone ? "var(--border-subtle)" : "var(--bg-surface)"};">
                      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                        <div>
                          <span class="badge ${subj ? "badge-primary" : "badge-gray"}">${subj?.name || "Geral"}</span>
                          ${task.priority === "alta" ? '<span class="badge badge-danger">Alta Prioridade</span>' : ""}
                          <h4 style="font-size: 15px; margin-top: 6px; ${isDone ? "text-decoration: line-through; color: var(--text-muted);" : ""}">${top?.name || task.notes || "Sessão de Estudos"}</h4>
                        </div>
                        <span class="badge ${isDone ? "badge-success" : "badge-warning"}">${isDone ? "Concluída" : "Pendente"}</span>
                      </div>

                      <div style="font-size: 13px; color: var(--text-muted); display: flex; gap: 16px; margin-bottom: 14px;">
                        <span>⏱️ Previsto: ${task.estimatedMinutes} min</span>
                        ${task.scheduledTime ? `<span>⏰ Horário: ${task.scheduledTime}</span>` : ""}
                        ${task.actualMinutes > 0 ? `<span>✓ Realizado: ${task.actualMinutes} min</span>` : ""}
                      </div>

                      ${!isDone ? `
                        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                          <button class="btn btn-primary btn-sm btn-start-task-timer" data-task-id="${task.id}" data-subject-id="${task.subjectId || ""}" data-topic-id="${task.topicId || ""}">
                            ▶ Iniciar Sessão
                          </button>
                          <button class="btn btn-success btn-sm btn-complete-task" data-task-id="${task.id}">
                            ✓ Concluir
                          </button>
                          <button class="btn btn-outline btn-sm btn-postpone-task" data-task-id="${task.id}">
                            Adiar para amanhã
                          </button>
                        </div>
                      ` : `
                        <span style="font-size: 12px; color: var(--success-text); font-weight: 600;">✓ Tarefa concluída com sucesso!</span>
                      `}
                    </div>
                  `;
                }).join("")}
              </div>
            `}
          </div>
        </div>

        <!-- C. REVISÕES PENDENTES -->
        <div class="card">
          <div class="card-header">
            <div class="card-title">🔄 Revisões Pendentes</div>
            <button id="btn-see-all-reviews" class="btn btn-outline btn-sm">Ver todas</button>
          </div>
          <div class="card-body">
            ${pendingReviews.length === 0 ? `
              <div class="empty-state" style="padding: 24px 12px;">
                <div class="empty-state-icon">🎉</div>
                <div class="empty-state-title">Nenhuma revisão pendente para hoje!</div>
                <p class="empty-state-desc">Suas revisões programadas estão todas em dia. Ótimo trabalho de retenção de conteúdo!</p>
              </div>
            ` : `
              <div style="display: flex; flex-direction: column; gap: 12px;">
                ${pendingReviews.slice(0, 4).map(rev => {
                  const isLate = rev.dueDate < todayStr;
                  const top = topMap.get(rev.topicId);
                  const subj = subjMap.get(rev.subjectId);

                  return `
                    <div style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 14px; display: flex; justify-content: space-between; align-items: center; gap: 12px;">
                      <div>
                        <div style="display: flex; gap: 6px; align-items: center; margin-bottom: 4px;">
                          <span class="badge ${isLate ? "badge-danger" : "badge-warning"}">${isLate ? "Atrasada" : "Para Hoje"}</span>
                          <span class="badge badge-gray">Ciclo D+${rev.reviewStage === 1 ? 1 : rev.reviewStage === 2 ? 7 : 30}</span>
                        </div>
                        <div style="font-weight: 600; font-size: 14px;">${top?.name || "Assunto"}</div>
                        <div style="font-size: 12px; color: var(--text-muted);">${subj?.name || "Matéria"}</div>
                      </div>

                      <button class="btn btn-outline btn-sm btn-quick-complete-rev" data-review-id="${rev.id}">
                        ✓ Feito
                      </button>
                    </div>
                  `;
                }).join("")}
              </div>
            `}
          </div>
        </div>

      </div>

      <!-- SEGUNDA LINHA: DESEMPENHO POR MATÉRIA + PRÓXIMAS ATIVIDADES -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 24px;">

        <!-- D. DESEMPENHO POR MATÉRIA -->
        <div class="card">
          <div class="card-header">
            <div class="card-title">📊 Desempenho por Matéria</div>
            <button id="btn-see-full-performance" class="btn btn-outline btn-sm">Estatísticas</button>
          </div>
          <div class="card-body">
            ${subjectPerformance.length === 0 ? `
              <div class="empty-state" style="padding: 20px 12px;">
                <p class="empty-state-desc">Resolva questões na aba "Questões e simulados" para visualizar seu aproveitamento real por matéria.</p>
                <button id="btn-go-to-questions" class="btn btn-primary btn-sm">Resolver questões agora</button>
              </div>
            ` : `
              <div style="display: flex; flex-direction: column; gap: 14px;">
                ${bestSubject ? `
                  <div style="background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: var(--radius-md); padding: 12px 16px;">
                    <div style="font-size: 12px; color: var(--success-text); font-weight: 700;">MAIOR RENDIMENTO</div>
                    <div style="font-size: 15px; font-weight: 700; color: #065F46; margin: 2px 0;">${bestSubject.subject.name}</div>
                    <div style="font-size: 13px; color: #047857;">${bestSubject.rate}% de acertos (${bestSubject.correct} de ${bestSubject.total} questões)</div>
                  </div>
                ` : ""}

                ${worstSubject ? `
                  <div style="background: #FEF2F2; border: 1px solid #FECACA; border-radius: var(--radius-md); padding: 12px 16px;">
                    <div style="font-size: 12px; color: var(--danger-text); font-weight: 700;">PRECISA DE ATENÇÃO</div>
                    <div style="font-size: 15px; font-weight: 700; color: #991B1B; margin: 2px 0;">${worstSubject.subject.name}</div>
                    <div style="font-size: 13px; color: #B91C1C;">${worstSubject.rate}% de acertos (${worstSubject.correct} de ${worstSubject.total} questões)</div>
                  </div>
                ` : ""}
              </div>
            `}
          </div>
        </div>

        <!-- E. PRÓXIMAS ATIVIDADES -->
        <div class="card">
          <div class="card-header">
            <div class="card-title">🗓️ Próximas Atividades</div>
            <button id="btn-see-full-schedule" class="btn btn-outline btn-sm">Cronograma</button>
          </div>
          <div class="card-body">
            ${upcomingTasks.length === 0 ? `
              <div class="empty-state" style="padding: 20px 12px;">
                <p class="empty-state-desc">Nenhuma tarefa programada para os próximos dias.</p>
                <button id="btn-plan-ahead" class="btn btn-outline btn-sm">Planejar meus próximos dias</button>
              </div>
            ` : `
              <div style="display: flex; flex-direction: column; gap: 10px;">
                ${upcomingTasks.map(t => {
                  const d = new Date(t.scheduledDate + "T00:00:00");
                  const dateFormatted = d.toLocaleDateString("pt-BR", { weekday: "short", day: "2-digit", month: "short" });
                  const top = topMap.get(t.topicId);
                  const subj = subjMap.get(t.subjectId);

                  return `
                    <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; border-bottom: 1px solid var(--border-subtle);">
                      <div>
                        <div style="font-weight: 600; font-size: 13.5px;">${top?.name || t.notes || "Estudo"}</div>
                        <div style="font-size: 12px; color: var(--text-muted);">${subj?.name || "Geral"}</div>
                      </div>
                      <span class="badge badge-gray">${dateFormatted} (${t.estimatedMinutes}m)</span>
                    </div>
                  `;
                }).join("")}
              </div>
            `}
          </div>
        </div>

      </div>

    </div>
  `;

  // Attach event handlers
  attachDashboardEvents(container, navigateTo, suggestions);
}

function attachDashboardEvents(container, navigateTo, suggestions) {
  // Iniciar sessão com a tarefa pré-carregada
  container.querySelectorAll(".btn-start-task-timer").forEach(btn => {
    btn.addEventListener("click", () => {
      const subjectId = btn.getAttribute("data-subject-id");
      const topicId = btn.getAttribute("data-topic-id");
      navigateTo("timer", { subjectId, topicId });
    });
  });

  // Concluir tarefa do dia
  container.querySelectorAll(".btn-complete-task").forEach(btn => {
    btn.addEventListener("click", () => {
      const taskId = btn.getAttribute("data-task-id");
      const tasks = getTasks();
      const task = tasks.find(t => t.id === taskId);
      if (task) {
        task.status = "concluida";
        task.actualMinutes = task.actualMinutes || task.estimatedMinutes;
        saveTask(task);
        renderDashboardView(container, navigateTo);
      }
    });
  });

  // Adiar tarefa para amanhã
  container.querySelectorAll(".btn-postpone-task").forEach(btn => {
    btn.addEventListener("click", () => {
      const taskId = btn.getAttribute("data-task-id");
      const tasks = getTasks();
      const task = tasks.find(t => t.id === taskId);
      if (task) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        task.scheduledDate = tomorrow.toISOString().slice(0, 10);
        task.status = "pendente";
        saveTask(task);
        renderDashboardView(container, navigateTo);
      }
    });
  });

  // Concluir revisão rápida
  container.querySelectorAll(".btn-quick-complete-rev").forEach(btn => {
    btn.addEventListener("click", () => {
      const revId = btn.getAttribute("data-review-id");
      completeReview(revId, "realizada");
      renderDashboardView(container, navigateTo);
    });
  });

  // Aplicar recomendação adaptativa
  const applySugBtn = container.querySelector("#btn-apply-suggestion");
  if (applySugBtn && suggestions.length > 0) {
    applySugBtn.addEventListener("click", () => {
      const sug = suggestions[0];
      if (sug.type === "missed_tasks") {
        redistributeMissedTasks(sug.actionData.overdueTaskIds);
      } else if (sug.type === "low_accuracy") {
        // Cria tarefa de reforço para amanhã
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        saveTask({
          subjectId: sug.actionData.subjectId,
          topicId: sug.actionData.topicId,
          scheduledDate: tomorrow.toISOString().slice(0, 10),
          estimatedMinutes: sug.actionData.durationMinutes,
          priority: "alta",
          status: "pendente",
          notes: sug.suggestedAction
        });
      }
      renderDashboardView(container, navigateTo);
    });
  }

  // Dismiss sugestão
  container.querySelector("#btn-dismiss-suggestion")?.addEventListener("click", (e) => {
    e.target.closest(".suggestion-banner")?.remove();
  });

  // Navegações auxiliares
  container.querySelector("#btn-add-today-task")?.addEventListener("click", () => navigateTo("schedule"));
  container.querySelector("#btn-quick-create-task")?.addEventListener("click", () => navigateTo("schedule"));
  container.querySelector("#btn-start-free-timer")?.addEventListener("click", () => navigateTo("timer"));
  container.querySelector("#btn-see-all-reviews")?.addEventListener("click", () => navigateTo("reviews"));
  container.querySelector("#btn-see-full-performance")?.addEventListener("click", () => navigateTo("performance"));
  container.querySelector("#btn-go-to-questions")?.addEventListener("click", () => navigateTo("questions"));
  container.querySelector("#btn-see-full-schedule")?.addEventListener("click", () => navigateTo("schedule"));
  container.querySelector("#btn-plan-ahead")?.addEventListener("click", () => navigateTo("schedule"));
}

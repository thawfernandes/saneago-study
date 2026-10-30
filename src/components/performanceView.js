// ==============================================================================
// SANEAGO STUDY - MEU DESEMPENHO E ESTATÍSTICAS REAIS
// Gráficos e cálculos baseados 100% no histórico do usuário (Sem dados fictícios)
// ==============================================================================

import { getSessions, getTasks, getTopics, getSubjects, getQuestionAttempts, getMockExamResults, getSpacedReviews, getUserGoals } from "../services/storage.js";

export function renderPerformanceView(container, navigateTo) {
  const sessions = getSessions();
  const tasks = getTasks();
  const topics = getTopics();
  const subjects = getSubjects();
  const attempts = getQuestionAttempts();
  const mockResults = getMockExamResults();
  const reviews = getSpacedReviews();
  const goals = getUserGoals();

  const subjMap = new Map(subjects.map(s => [s.id, s]));
  const topMap = new Map(topics.map(t => [t.id, t]));

  // 1. Cálculos de tempo real estudado
  const totalStudiedSeconds = sessions.reduce((acc, s) => acc + (s.durationSeconds || 0), 0);
  const totalHours = (totalStudiedSeconds / 3600).toFixed(1);

  // Dias com estudo registrado
  const studyDaysSet = new Set(sessions.map(s => s.startedAt?.slice(0, 10)).filter(Boolean));
  const distinctDaysCount = studyDaysSet.size;

  // Tempo estudado nos últimos 7 dias (Planejado vs Realizado)
  const last7Days = [];
  const daysAbbr = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const now = new Date();

  for (let i = 6; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(now.getDate() - i);
    const dateStr = d.toISOString().slice(0, 10);
    const label = daysAbbr[d.getDay()];

    const actualMins = sessions
      .filter(s => s.startedAt && s.startedAt.startsWith(dateStr))
      .reduce((acc, s) => acc + Math.round((s.durationSeconds || 0) / 60), 0);

    const plannedMins = tasks
      .filter(t => t.scheduledDate === dateStr && t.status !== "nao_realizada")
      .reduce((acc, t) => acc + (t.estimatedMinutes || 0), 0);

    last7Days.push({ dateStr, label, actualMins, plannedMins });
  }

  const maxDailyMinutes = Math.max(120, ...last7Days.map(d => Math.max(d.actualMins, d.plannedMins)));

  // 2. Tempo por matéria
  const subjectTimeDistribution = subjects.map(s => {
    const sSessions = sessions.filter(ses => ses.subjectId === s.id);
    const sSecs = sSessions.reduce((acc, ses) => acc + (ses.durationSeconds || 0), 0);
    const sHours = parseFloat((sSecs / 3600).toFixed(1));
    return { subject: s, seconds: sSecs, hours: sHours };
  }).filter(st => st.seconds > 0);

  // 3. Taxa de acertos por matéria
  const subjectAccuracyList = subjects.map(s => {
    const sTopics = topics.filter(t => t.subjectId === s.id);
    const tIds = new Set(sTopics.map(t => t.id));
    const sAttempts = attempts.filter(a => tIds.has(a.topicId));
    if (sAttempts.length === 0) return null;
    const correct = sAttempts.filter(a => a.isCorrect).length;
    const rate = Math.round((correct / sAttempts.length) * 100);
    return { subject: s, total: sAttempts.length, correct, rate };
  }).filter(Boolean);

  // 4. Assuntos com maior dificuldade (menor taxa de acerto com min 2 questões)
  const topicDifficulties = topics.map(t => {
    const tAttempts = attempts.filter(a => a.topicId === t.id);
    if (tAttempts.length < 2) return null;
    const correct = tAttempts.filter(a => a.isCorrect).length;
    const rate = Math.round((correct / tAttempts.length) * 100);
    return { topic: t, total: tAttempts.length, correct, rate };
  }).filter(Boolean).sort((a, b) => a.rate - b.rate).slice(0, 5);

  // 5. Total de revisões concluídas
  const completedReviewsCount = reviews.filter(r => r.status === "realizada").length;

  container.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 24px;">

      <!-- CABEÇALHO -->
      <div>
        <h2 style="font-size: 22px; font-weight: 700;">Painel de Desempenho e Estatísticas Reais</h2>
        <p style="font-size: 13.5px; color: var(--text-muted);">
          Métricas calculadas exclusivamente a partir dos seus registros reais de estudo e questões resolvidas.
        </p>
      </div>

      <!-- CARDS DE RESUMO SUPERIOR -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon-wrapper stat-icon-blue">⏱️</div>
          <div class="stat-content">
            <div class="stat-value">${totalHours}h</div>
            <div class="stat-label">Total Efetivamente Estudado</div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon-wrapper stat-icon-indigo">📅</div>
          <div class="stat-content">
            <div class="stat-value">${distinctDaysCount} dias</div>
            <div class="stat-label">Com Estudo Registrado</div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon-wrapper stat-icon-green">🎯</div>
          <div class="stat-content">
            <div class="stat-value">${attempts.length > 0 ? `${Math.round((attempts.filter(a => a.isCorrect).length / attempts.length) * 100)}%` : "—"}</div>
            <div class="stat-label">Aproveitamento Geral (${attempts.length} q.)</div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon-wrapper stat-icon-amber">🔄</div>
          <div class="stat-content">
            <div class="stat-value">${completedReviewsCount}</div>
            <div class="stat-label">Revisões Concluídas</div>
          </div>
        </div>
      </div>

      <!-- LINHA 1 DE GRÁFICOS: TEMPO PLANEJADO VS REALIZADO NOS ÚLTIMOS 7 DIAS -->
      <div class="card">
        <div class="card-header">
          <div>
            <div class="card-title">📊 Tempo Planejado vs. Realizado (Últimos 7 Dias)</div>
            <p style="font-size: 12.5px; color: var(--text-muted); margin-top: 2px;">
              Linha azul: tempo realizado líquido • Linha cinza: planejado
            </p>
          </div>
        </div>
        <div class="card-body">
          <div class="chart-box" style="height: 220px; align-items: flex-end; gap: 16px;">
            ${last7Days.map(d => {
              const actualHeight = Math.max(4, Math.round((d.actualMins / maxDailyMinutes) * 160));
              const plannedHeight = Math.max(4, Math.round((d.plannedMins / maxDailyMinutes) * 160));

              return `
                <div class="bar-col">
                  ${d.actualMins > 0 ? `<div class="bar-tooltip">${d.actualMins}m</div>` : ""}
                  
                  <div style="display: flex; gap: 4px; align-items: flex-end; width: 100%; justify-content: center;">
                    <!-- Barra Planejada -->
                    <div style="height: ${plannedHeight}px; width: 16px; background: #E2E8F0; border-radius: 4px 4px 0 0;" title="Planejado: ${d.plannedMins} min"></div>
                    <!-- Barra Realizada -->
                    <div style="height: ${actualHeight}px; width: 16px; background: ${d.actualMins >= (goals.dailyStudyMinutes || 120) ? "var(--success)" : "var(--primary)"}; border-radius: 4px 4px 0 0;" title="Realizado: ${d.actualMins} min"></div>
                  </div>

                  <div class="bar-label">${d.label}</div>
                </div>
              `;
            }).join("")}
          </div>

          <div style="display: flex; justify-content: center; gap: 20px; margin-top: 12px; font-size: 12px; color: var(--text-muted);">
            <span style="display: flex; align-items: center; gap: 6px;">
              <span style="width: 12px; height: 12px; background: #E2E8F0; border-radius: 2px;"></span> Planejado
            </span>
            <span style="display: flex; align-items: center; gap: 6px;">
              <span style="width: 12px; height: 12px; background: var(--primary); border-radius: 2px;"></span> Realizado
            </span>
          </div>
        </div>
      </div>

      <!-- LINHA 2: TEMPO POR MATÉRIA + TAXA DE ACERTOS POR MATÉRIA -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 24px;">

        <!-- DISTRIBUIÇÃO DE HORAS POR MATÉRIA -->
        <div class="card">
          <div class="card-header">
            <div class="card-title">⏳ Distribuição de Horas por Matéria</div>
          </div>
          <div class="card-body">
            ${subjectTimeDistribution.length === 0 ? `
              <div class="empty-state" style="padding: 24px;">
                <p class="empty-state-desc">Nenhuma sessão de estudo registrada ainda. Use o cronômetro para acumular tempo por matéria.</p>
              </div>
            ` : `
              <div style="display: flex; flex-direction: column; gap: 14px;">
                ${subjectTimeDistribution.map(st => {
                  const percentOfTotal = totalStudiedSeconds > 0 ? Math.round((st.seconds / totalStudiedSeconds) * 100) : 0;
                  return `
                    <div>
                      <div style="display: flex; justify-content: space-between; font-size: 13.5px; font-weight: 600; margin-bottom: 4px;">
                        <span>${st.subject.name}</span>
                        <span style="color: var(--primary);">${st.hours}h (${percentOfTotal}%)</span>
                      </div>
                      <div style="height: 8px; width: 100%; background: #E2E8F0; border-radius: 4px; overflow: hidden;">
                        <div style="height: 100%; width: ${percentOfTotal}%; background: ${st.subject.color || "var(--primary)"}; border-radius: 4px;"></div>
                      </div>
                    </div>
                  `;
                }).join("")}
              </div>
            `}
          </div>
        </div>

        <!-- TAXA DE ACERTOS POR MATÉRIA -->
        <div class="card">
          <div class="card-header">
            <div class="card-title">🎯 Rendimento em Questões por Matéria</div>
          </div>
          <div class="card-body">
            ${subjectAccuracyList.length === 0 ? `
              <div class="empty-state" style="padding: 24px;">
                <p class="empty-state-desc">Resolva questões na aba "Questões e simulados" para registrar sua precisão em cada disciplina.</p>
              </div>
            ` : `
              <div style="display: flex; flex-direction: column; gap: 14px;">
                ${subjectAccuracyList.map(sa => {
                  const isGood = sa.rate >= 70;
                  return `
                    <div>
                      <div style="display: flex; justify-content: space-between; font-size: 13.5px; font-weight: 600; margin-bottom: 4px;">
                        <span>${sa.subject.name}</span>
                        <span style="color: ${isGood ? "var(--success-text)" : "var(--danger-text)"}; font-weight: 700;">
                          ${sa.rate}% (${sa.correct}/${sa.total})
                        </span>
                      </div>
                      <div style="height: 8px; width: 100%; background: #E2E8F0; border-radius: 4px; overflow: hidden;">
                        <div style="height: 100%; width: ${sa.rate}%; background: ${isGood ? "var(--success)" : "var(--danger)"}; border-radius: 4px;"></div>
                      </div>
                    </div>
                  `;
                }).join("")}
              </div>
            `}
          </div>
        </div>

      </div>

      <!-- LINHA 3: ASSUNTOS CRÍTICOS (MAIOR TAXA DE ERRO) -->
      ${topicDifficulties.length > 0 ? `
        <div class="card">
          <div class="card-header">
            <div class="card-title">⚠️ Tópicos Críticos Identificados (Menor Taxa de Acertos)</div>
          </div>
          <div class="card-body">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px;">
              ${topicDifficulties.map(td => {
                const subj = subjMap.get(td.topic.subjectId);
                return `
                  <div style="border: 1px solid #FECACA; background: #FEF2F2; border-radius: var(--radius-md); padding: 12px 16px;">
                    <span class="badge badge-danger" style="margin-bottom: 4px;">${td.rate}% de acertos</span>
                    <div style="font-weight: 700; font-size: 14px; color: #991B1B; margin: 2px 0;">${td.topic.name}</div>
                    <div style="font-size: 12px; color: #7F1D1D;">${subj?.name || "Matéria"} • (${td.correct} acertos em ${td.total} tentativas)</div>
                  </div>
                `;
              }).join("")}
            </div>
          </div>
        </div>
      ` : ""}

    </div>
  `;
}

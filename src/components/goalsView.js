// ==============================================================================
// SANEAGO STUDY - METAS E HÁBITOS DE ESTUDO
// Configuração de metas flexíveis, consistência positiva sem mensagens culpabilizadoras
// ==============================================================================

import { getUserGoals, saveUserGoals, getSessions, getQuestionAttempts, getSpacedReviews } from "../services/storage.js";

export function renderGoalsView(container, navigateTo) {
  function render() {
    const goals = getUserGoals();
    const sessions = getSessions();
    const attempts = getQuestionAttempts();
    const reviews = getSpacedReviews();

    const todayStr = new Date().toISOString().slice(0, 10);

    // Progresso de hoje
    const todaySessions = sessions.filter(s => s.startedAt && s.startedAt.startsWith(todayStr));
    const todayStudyMins = todaySessions.reduce((acc, s) => acc + Math.round((s.durationSeconds || 0) / 60), 0);
    const dailyGoalMins = goals.dailyStudyMinutes || 120;
    const dailyPercent = Math.min(100, Math.round((todayStudyMins / dailyGoalMins) * 100));

    // Questões de hoje
    const todayAttempts = attempts.filter(a => a.createdAt && a.createdAt.startsWith(todayStr));
    const todayQCount = todayAttempts.length;
    const dailyQGoal = goals.dailyQuestionsCount || 20;
    const qPercent = Math.min(100, Math.round((todayQCount / dailyQGoal) * 100));

    // Revisões concluídas esta semana
    const now = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(now.getDate() - 7);
    const weekReviews = reviews.filter(r => r.status === "realizada" && r.completedAt && new Date(r.completedAt) >= sevenDaysAgo);
    const revCount = weekReviews.length;
    const revGoal = goals.weeklyReviewsCount || 5;
    const revPercent = Math.min(100, Math.round((revCount / revGoal) * 100));

    const restDaysList = goals.restDays || ["dom"];

    container.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 24px;">

        <!-- CABEÇALHO -->
        <div>
          <h2 style="font-size: 22px; font-weight: 700;">Metas e Hábitos de Preparação</h2>
          <p style="font-size: 13.5px; color: var(--text-muted);">
            Acompanhe seu ritmo de forma sustentável e saudável, com respeito aos seus momentos de descanso.
          </p>
        </div>

        <!-- CARDS DE PROGRESSO DAS METAS -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px;">

          <!-- META 1: ESTUDO DIÁRIO -->
          <div class="card">
            <div class="card-body">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span style="font-size: 12px; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Estudo de Hoje</span>
                <span class="badge ${dailyPercent >= 100 ? "badge-success" : "badge-primary"}">${dailyPercent}%</span>
              </div>
              <div style="font-size: 24px; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">
                ${todayStudyMins} <span style="font-size: 14px; font-weight: 500; color: var(--text-muted);">/ ${dailyGoalMins} minutos</span>
              </div>
              <div style="height: 8px; width: 100%; background: #E2E8F0; border-radius: 4px; overflow: hidden;">
                <div style="height: 100%; width: ${dailyPercent}%; background: var(--primary); border-radius: 4px;"></div>
              </div>
            </div>
          </div>

          <!-- META 2: QUESTÕES DIÁRIAS -->
          <div class="card">
            <div class="card-body">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span style="font-size: 12px; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Questões de Hoje</span>
                <span class="badge ${qPercent >= 100 ? "badge-success" : "badge-info"}">${qPercent}%</span>
              </div>
              <div style="font-size: 24px; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">
                ${todayQCount} <span style="font-size: 14px; font-weight: 500; color: var(--text-muted);">/ ${dailyQGoal} questões</span>
              </div>
              <div style="height: 8px; width: 100%; background: #E2E8F0; border-radius: 4px; overflow: hidden;">
                <div style="height: 100%; width: ${qPercent}%; background: var(--info); border-radius: 4px;"></div>
              </div>
            </div>
          </div>

          <!-- META 3: REVISÕES NA SEMANA -->
          <div class="card">
            <div class="card-body">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span style="font-size: 12px; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Revisões nos Últimos 7 Dias</span>
                <span class="badge ${revPercent >= 100 ? "badge-success" : "badge-warning"}">${revPercent}%</span>
              </div>
              <div style="font-size: 24px; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">
                ${revCount} <span style="font-size: 14px; font-weight: 500; color: var(--text-muted);">/ ${revGoal} revisões</span>
              </div>
              <div style="height: 8px; width: 100%; background: #E2E8F0; border-radius: 4px; overflow: hidden;">
                <div style="height: 100%; width: ${revPercent}%; background: var(--warning); border-radius: 4px;"></div>
              </div>
            </div>
          </div>

        </div>

        <!-- FORMULÁRIO DE AJUSTE DE METAS -->
        <div class="card" style="max-width: 720px;">
          <div class="card-header">
            <div class="card-title">⚙️ Ajustar Minhas Metas e Dias de Descanso</div>
          </div>
          <div class="card-body">
            <form id="goals-form">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                <div class="form-group">
                  <label class="form-label" for="goal-daily-min">Meta diária de estudo (minutos)</label>
                  <input type="number" id="goal-daily-min" class="form-control" value="${goals.dailyStudyMinutes || 120}" min="15" max="720" step="15" required>
                  <span class="form-hint">Ex: 120 min = 2 horas líquidas</span>
                </div>

                <div class="form-group">
                  <label class="form-label" for="goal-weekly-min">Meta semanal de estudo (minutos)</label>
                  <input type="number" id="goal-weekly-min" class="form-control" value="${goals.weeklyStudyMinutes || 720}" min="60" max="4320" step="30" required>
                </div>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                <div class="form-group">
                  <label class="form-label" for="goal-questions">Quantidade de questões por dia</label>
                  <input type="number" id="goal-questions" class="form-control" value="${goals.dailyQuestionsCount || 20}" min="1" max="200" step="1" required>
                </div>

                <div class="form-group">
                  <label class="form-label" for="goal-reviews">Revisões espaçadas por semana</label>
                  <input type="number" id="goal-reviews" class="form-control" value="${goals.weeklyReviewsCount || 5}" min="1" max="50" step="1" required>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Dias programados de descanso</label>
                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                  ${[
                    { id: "dom", label: "Domingo" },
                    { id: "seg", label: "Segunda" },
                    { id: "ter", label: "Terça" },
                    { id: "qua", label: "Quarta" },
                    { id: "qui", label: "Quinta" },
                    { id: "sex", label: "Sexta" },
                    { id: "sab", label: "Sábado" }
                  ].map(d => `
                    <label style="display: flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: var(--radius-md); background: var(--bg-page); border: 1px solid var(--border); font-size: 13px; cursor: pointer;">
                      <input type="checkbox" name="rest-day-cb" value="${d.id}" ${restDaysList.includes(d.id) ? "checked" : ""}>
                      <span>${d.label}</span>
                    </label>
                  `).join("")}
                </div>
                <span class="form-hint">O descanso é parte fundamental da memorização. Você não será penalizado por descansar nos dias selecionados!</span>
              </div>

              <div style="display: flex; justify-content: flex-end; margin-top: 20px;">
                <button type="submit" class="btn btn-primary">
                  Salvar Novas Metas
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    `;

    attachGoalsEvents();
  }

  function attachGoalsEvents() {
    const form = container.querySelector("#goals-form");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const dailyStudyMinutes = parseInt(container.querySelector("#goal-daily-min").value, 10);
      const weeklyStudyMinutes = parseInt(container.querySelector("#goal-weekly-min").value, 10);
      const dailyQuestionsCount = parseInt(container.querySelector("#goal-questions").value, 10);
      const weeklyReviewsCount = parseInt(container.querySelector("#goal-reviews").value, 10);

      const checkedRestDays = Array.from(container.querySelectorAll("input[name='rest-day-cb']:checked")).map(cb => cb.value);

      saveUserGoals({
        dailyStudyMinutes,
        weeklyStudyMinutes,
        dailyQuestionsCount,
        weeklyReviewsCount,
        restDays: checkedRestDays
      });

      alert("Metas atualizadas com sucesso!");
      render();
    });
  }

  render();
}

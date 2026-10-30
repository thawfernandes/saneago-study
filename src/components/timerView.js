// ==============================================================================
// SANEAGO STUDY - CRONÔMETRO DE ESTUDOS DE ALTA PRECISÃO
// Resiliente a recarregamento de página, cálculo por timestamp real e histórico
// ==============================================================================

import { getActiveTimerState, saveActiveTimerState, saveSession, getSessions, deleteSession, getSubjects, getTopics } from "../services/storage.js";
import { scheduleReviewForTopic } from "../services/spacedRepetition.js";

let timerIntervalId = null;

export function renderTimerView(container, navigateTo, initialParams = {}) {
  const subjects = getSubjects();
  const topics = getTopics();
  let timerState = getActiveTimerState();

  // Se veio redirecionado com parâmetros de matéria/assunto e o timer não está rodando
  if (!timerState && (initialParams.subjectId || initialParams.topicId)) {
    timerState = {
      isPaused: true,
      accumulatedMs: 0,
      startedAtTimestamp: null,
      pausedAtTimestamp: Date.now(),
      pausesCount: 0,
      subjectId: initialParams.subjectId || subjects[0]?.id || "",
      topicId: initialParams.topicId || "",
      notes: "",
      sessionStartISO: new Date().toISOString()
    };
    saveActiveTimerState(timerState);
  }

  function render() {
    timerState = getActiveTimerState();
    const sessions = getSessions();
    const subjMap = new Map(subjects.map(s => [s.id, s]));
    const topMap = new Map(topics.map(t => [t.id, t]));

    const isRunning = timerState && !timerState.isPaused;
    const currentSubjId = timerState ? timerState.subjectId : subjects[0]?.id || "";
    const filteredTopics = topics.filter(t => t.subjectId === currentSubjId);

    container.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 24px;">

        <!-- CRONÔMETRO HERO -->
        <div class="timer-hero">
          <div style="font-size: 13px; text-transform: uppercase; letter-spacing: 1.5px; color: #94A3B8; font-weight: 700;">
            SESSÃO DE ESTUDO EM ANDAMENTO
          </div>

          <div id="clock-display" class="timer-clock">
            ${formatTimerDisplay(calculateElapsedMs(timerState))}
          </div>

          <div id="target-topic-badge" class="timer-target-tag">
            ${timerState && timerState.topicId ? (topMap.get(timerState.topicId)?.name || "Assunto Selecionado") : "Estudo Livre / Não Categorizado"}
          </div>

          <div class="timer-controls-row">
            ${!isRunning ? `
              <button id="btn-timer-start" class="btn btn-primary btn-lg" style="min-width: 150px; background: #0284C7; font-size: 16px;">
                ▶ ${timerState && timerState.accumulatedMs > 0 ? "Retomar" : "Iniciar Sessão"}
              </button>
            ` : `
              <button id="btn-timer-pause" class="btn btn-secondary btn-lg" style="min-width: 150px; font-size: 16px;">
                ⏸ Pausar
              </button>
            `}

            ${timerState && (timerState.accumulatedMs > 0 || isRunning) ? `
              <button id="btn-timer-finish" class="btn btn-success btn-lg" style="min-width: 150px; font-size: 16px;">
                ✓ Concluir Sessão
              </button>

              <button id="btn-timer-discard" class="btn btn-outline btn-lg" style="color: #F8FAFC; border-color: rgba(255,255,255,0.2);">
                Descartar
              </button>
            ` : ""}
          </div>
        </div>

        <!-- CONFIGURAÇÃO DA SESSÃO ATUAL -->
        <div class="card">
          <div class="card-header">
            <div class="card-title">⚙️ Configurações da Sessão</div>
            ${timerState ? `<span class="badge ${isRunning ? "badge-success" : "badge-warning"}">${isRunning ? "Cronômetro Ativo" : "Pausado"}</span>` : ""}
          </div>
          <div class="card-body">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px;">
              <div class="form-group">
                <label class="form-label" for="timer-subject">Matéria</label>
                <select id="timer-subject" class="form-select" ${isRunning ? "disabled" : ""}>
                  ${subjects.map(s => `
                    <option value="${s.id}" ${s.id === currentSubjId ? "selected" : ""}>${s.name}</option>
                  `).join("")}
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="timer-topic">Assunto</label>
                <select id="timer-topic" class="form-select" ${isRunning ? "disabled" : ""}>
                  <option value="">-- Selecione o assunto --</option>
                  ${filteredTopics.map(t => `
                    <option value="${t.id}" ${timerState && timerState.topicId === t.id ? "selected" : ""}>${t.name}</option>
                  `).join("")}
                </select>
              </div>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" for="timer-notes">Anotações da Sessão</label>
              <textarea id="timer-notes" class="form-control" rows="2" placeholder="O que você estudou nesta sessão? (Ex: Leitura dos artigos 1 a 15, resolução de 10 exercícios)">${timerState?.notes || ""}</textarea>
            </div>
          </div>
        </div>

        <!-- HISTÓRICO DE SESSÕES -->
        <div class="card">
          <div class="card-header">
            <div class="card-title">📜 Histórico de Sessões Registradas</div>
            <span class="badge badge-gray">${sessions.length} sessões</span>
          </div>
          <div class="card-body">
            ${sessions.length === 0 ? `
              <div class="empty-state">
                <div class="empty-state-icon">⏱️</div>
                <div class="empty-state-title">Nenhuma sessão registrada ainda</div>
                <p class="empty-state-desc">Quando você concluir uma sessão no cronômetro acima, o histórico detalhado aparecerá aqui.</p>
              </div>
            ` : `
              <div style="display: flex; flex-direction: column; gap: 10px;">
                ${sessions.map(s => {
                  const date = s.startedAt ? new Date(s.startedAt).toLocaleDateString("pt-BR") : "—";
                  const startHour = s.startedAt ? new Date(s.startedAt).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) : "";
                  const endHour = s.endedAt ? new Date(s.endedAt).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) : "";
                  const minutes = Math.round((s.durationSeconds || 0) / 60);
                  const subj = subjMap.get(s.subjectId);
                  const top = topMap.get(s.topicId);

                  return `
                    <div style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 14px 18px; display: flex; justify-content: space-between; align-items: center; gap: 12px; background: var(--bg-surface);">
                      <div>
                        <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 4px;">
                          <span class="badge badge-primary">${subj?.name || "Geral"}</span>
                          <span style="font-size: 13px; font-weight: 700; color: var(--text-primary);">${top?.name || "Estudo"}</span>
                        </div>
                        <div style="font-size: 12px; color: var(--text-muted);">
                          📅 ${date} • ⏰ ${startHour} às ${endHour} • ⏱️ <strong>${minutes} minutos líquidos</strong>
                          ${s.pausesCount > 0 ? `• (${s.pausesCount} pausas)` : ""}
                        </div>
                        ${s.notes ? `<div style="font-size: 12.5px; color: var(--text-secondary); margin-top: 4px; font-style: italic;">"${s.notes}"</div>` : ""}
                      </div>

                      <button class="btn btn-outline btn-sm btn-delete-session" data-session-id="${s.id}" style="color: var(--danger-text); border-color: var(--danger-light);">
                        Excluir
                      </button>
                    </div>
                  `;
                }).join("")}
              </div>
            `}
          </div>
        </div>

      </div>
    `;

    attachTimerEvents();
  }

  function calculateElapsedMs(state) {
    if (!state) return 0;
    if (state.isPaused) {
      return state.accumulatedMs || 0;
    }
    const currentInterval = Date.now() - state.startedAtTimestamp;
    return (state.accumulatedMs || 0) + currentInterval;
  }

  function formatTimerDisplay(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (n) => String(n).padStart(2, "0");
    if (hours > 0) {
      return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }
    return `${pad(minutes)}:${pad(seconds)}`;
  }

  function startLiveTick() {
    stopLiveTick();
    timerIntervalId = setInterval(() => {
      const state = getActiveTimerState();
      const clockEl = container.querySelector("#clock-display");
      if (clockEl && state && !state.isPaused) {
        clockEl.textContent = formatTimerDisplay(calculateElapsedMs(state));
      }
    }, 1000);
  }

  function stopLiveTick() {
    if (timerIntervalId) {
      clearInterval(timerIntervalId);
      timerIntervalId = null;
    }
  }

  function attachTimerEvents() {
    const subjSelect = container.querySelector("#timer-subject");
    const topSelect = container.querySelector("#timer-topic");
    const notesTextarea = container.querySelector("#timer-notes");

    // Sincroniza anotações ao digitar
    notesTextarea?.addEventListener("input", () => {
      const state = getActiveTimerState();
      if (state) {
        state.notes = notesTextarea.value;
        saveActiveTimerState(state);
      }
    });

    // Troca de matéria atualiza lista de tópicos
    subjSelect?.addEventListener("change", () => {
      const newSubjId = subjSelect.value;
      const state = getActiveTimerState() || {};
      state.subjectId = newSubjId;
      state.topicId = "";
      saveActiveTimerState(state);
      render();
    });

    topSelect?.addEventListener("change", () => {
      const state = getActiveTimerState() || {};
      state.topicId = topSelect.value;
      saveActiveTimerState(state);
      render();
    });

    // Iniciar / Retomar
    container.querySelector("#btn-timer-start")?.addEventListener("click", () => {
      let state = getActiveTimerState();
      const now = Date.now();

      if (!state) {
        state = {
          accumulatedMs: 0,
          startedAtTimestamp: now,
          isPaused: false,
          pausesCount: 0,
          subjectId: subjSelect.value,
          topicId: topSelect.value,
          notes: notesTextarea.value,
          sessionStartISO: new Date(now).toISOString()
        };
      } else {
        state.isPaused = false;
        state.startedAtTimestamp = now;
        state.subjectId = subjSelect.value;
        state.topicId = topSelect.value;
        state.notes = notesTextarea.value;
      }

      saveActiveTimerState(state);
      startLiveTick();
      render();
    });

    // Pausar
    container.querySelector("#btn-timer-pause")?.addEventListener("click", () => {
      const state = getActiveTimerState();
      if (state && !state.isPaused) {
        const now = Date.now();
        state.accumulatedMs = (state.accumulatedMs || 0) + (now - state.startedAtTimestamp);
        state.isPaused = true;
        state.pausedAtTimestamp = now;
        state.pausesCount = (state.pausesCount || 0) + 1;
        saveActiveTimerState(state);
        stopLiveTick();
        render();
      }
    });

    // Concluir Sessão
    container.querySelector("#btn-timer-finish")?.addEventListener("click", () => {
      const state = getActiveTimerState();
      if (!state) return;

      const elapsedMs = calculateElapsedMs(state);
      const durationSeconds = Math.round(elapsedMs / 1000);

      if (durationSeconds < 60) {
        if (!confirm("Esta sessão teve menos de 1 minuto. Deseja realmente salvá-la?")) {
          return;
        }
      }

      const endedAt = new Date().toISOString();
      const session = {
        subjectId: state.subjectId,
        topicId: state.topicId || null,
        startedAt: state.sessionStartISO || new Date(Date.now() - elapsedMs).toISOString(),
        endedAt,
        durationSeconds,
        pausesCount: state.pausesCount || 0,
        notes: notesTextarea.value.trim()
      };

      saveSession(session);
      saveActiveTimerState(null);
      stopLiveTick();

      // Se havia tópico selecionado, agenda revisão D+1 se ainda não tiver
      if (session.topicId && session.durationSeconds >= 600) {
        scheduleReviewForTopic(session.topicId, session.subjectId, new Date(), 0);
      }

      render();
    });

    // Descartar
    container.querySelector("#btn-timer-discard")?.addEventListener("click", () => {
      if (confirm("Deseja realmente descartar esta sessão sem contabilizar o tempo?")) {
        saveActiveTimerState(null);
        stopLiveTick();
        render();
      }
    });

    // Excluir sessão do histórico
    container.querySelectorAll(".btn-delete-session").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-session-id");
        if (confirm("Deseja excluir este registro do histórico de estudos?")) {
          deleteSession(id);
          render();
        }
      });
    });
  }

  render();
  if (timerState && !timerState.isPaused) {
    startLiveTick();
  }
}

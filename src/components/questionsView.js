// ==============================================================================
// SANEAGO STUDY - QUESTÕES E SIMULADOS COMPLETOS
// Resolução comentada, simulados cronometrados, filtros e integração com Caderno de Erros
// ==============================================================================

import { DEFAULT_QUESTIONS } from "../data/defaultQuestions.js";
import { getCustomQuestions, saveCustomQuestion, recordQuestionAttempt, getQuestionAttempts, saveMockExamResult, getMockExamResults, addErrorNotebookEntry, getSubjects, getTopics, getRolesCatalog } from "../services/storage.js";
import { generateUUID } from "../services/crypto.js";
import { ERROR_REASONS } from "../services/spacedRepetition.js";

export function renderQuestionsView(container, navigateTo) {
  let activeTab = "practice"; // 'practice' | 'mock' | 'new_question'
  let filterSubject = "all";
  let filterTopic = "all";
  let filterRole = "all";
  let filterBanca = "all";
  let filterType = "all"; // 'all' | 'official' | 'training'
  let currentPracticeIndex = 0;
  let activeMockSession = null;

  function getAllQuestions() {
    const custom = getCustomQuestions();
    return [...DEFAULT_QUESTIONS, ...custom];
  }

  function render() {
    const questions = getAllQuestions();
    const subjects = getSubjects();
    const topics = getTopics();
    const roles = getRolesCatalog();
    const attempts = getQuestionAttempts();
    const mockResults = getMockExamResults();

    container.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 20px;">

        <!-- CABEÇALHO -->
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 14px;">
          <div>
            <h2 style="font-size: 22px; font-weight: 700;">Questões e Simulados</h2>
            <p style="font-size: 13.5px; color: var(--text-muted);">Treine com questões oficiais e fundamentadas para o concurso da Saneago.</p>
          </div>

          <div style="display: flex; gap: 8px;">
            <button id="tab-practice" class="btn ${activeTab === "practice" ? "btn-primary" : "btn-outline"} btn-sm">
              📝 Praticar Questões
            </button>
            <button id="tab-mock" class="btn ${activeTab === "mock" ? "btn-primary" : "btn-outline"} btn-sm">
              ⏱️ Gerar Simulado
            </button>
            <button id="tab-new-q" class="btn ${activeTab === "new_question" ? "btn-primary" : "btn-outline"} btn-sm">
              + Cadastrar Questão
            </button>
          </div>
        </div>

        <!-- CONTEÚDO DA ABA ATIVA -->
        ${activeTab === "practice" ? renderPracticeTab(questions, subjects, topics, roles, attempts) : ""}
        ${activeTab === "mock" ? renderMockTab(questions, subjects, topics, roles, mockResults) : ""}
        ${activeTab === "new_question" ? renderNewQuestionTab(subjects, topics, roles) : ""}

      </div>

      <!-- CONTAINER PARA MODAL DO CADERNO DE ERROS -->
      <div id="error-notebook-modal-container"></div>
    `;

    attachNavTabs();
    if (activeTab === "practice") attachPracticeEvents(questions, subjects, topics, roles);
    if (activeTab === "mock") attachMockEvents(questions, subjects, roles);
    if (activeTab === "new_question") attachNewQuestionEvents(subjects, topics);
  }

  // ------------------------------------------------------------------------------
  // 1. ABA DE PRÁTICA DE QUESTÕES
  // ------------------------------------------------------------------------------
  function renderPracticeTab(allQuestions, subjects, topics, roles, attempts) {
    const subjMap = new Map(subjects.map(s => [s.id, s]));
    const topMap = new Map(topics.map(t => [t.id, t]));

    // Filtra as questões
    let filtered = allQuestions.filter(q => {
      if (filterSubject !== "all" && q.subjectId !== filterSubject) return false;
      if (filterTopic !== "all" && q.topicId !== filterTopic) return false;
      if (filterRole !== "all" && q.roleId !== filterRole) return false;
      if (filterBanca !== "all" && !q.banca?.toLowerCase().includes(filterBanca.toLowerCase())) return false;
      if (filterType === "official" && !q.isOfficial) return false;
      if (filterType === "training" && q.isOfficial) return false;
      return true;
    });

    if (currentPracticeIndex >= filtered.length) {
      currentPracticeIndex = 0;
    }

    const currentQ = filtered[currentPracticeIndex];

    // Estatísticas da sessão
    const answeredAttempts = attempts.filter(a => filtered.some(fq => fq.id === a.questionId));
    const correctCount = answeredAttempts.filter(a => a.isCorrect).length;
    const sessionRate = answeredAttempts.length > 0 ? Math.round((correctCount / answeredAttempts.length) * 100) : 0;

    return `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        
        <!-- BARRA DE FILTROS -->
        <div class="card" style="padding: 16px;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px;">
            <div>
              <label class="form-label" style="font-size: 11px;">Matéria</label>
              <select id="filter-subject" class="form-select" style="padding: 6px 10px; font-size: 13px;">
                <option value="all">Todas as matérias</option>
                ${subjects.map(s => `<option value="${s.id}" ${s.id === filterSubject ? "selected" : ""}>${s.name}</option>`).join("")}
              </select>
            </div>

            <div>
              <label class="form-label" style="font-size: 11px;">Tipo de Questão</label>
              <select id="filter-type" class="form-select" style="padding: 6px 10px; font-size: 13px;">
                <option value="all" ${filterType === "all" ? "selected" : ""}>Oficiais e Treinamento</option>
                <option value="official" ${filterType === "official" ? "selected" : ""}>Apenas Oficiais de Concurso</option>
                <option value="training" ${filterType === "training" ? "selected" : ""}>Apenas de Treinamento</option>
              </select>
            </div>

            <div>
              <label class="form-label" style="font-size: 11px;">Cargo</label>
              <select id="filter-role" class="form-select" style="padding: 6px 10px; font-size: 13px;">
                <option value="all">Todos os cargos</option>
                ${roles.map(r => `<option value="${r.id}" ${r.id === filterRole ? "selected" : ""}>${r.name}</option>`).join("")}
              </select>
            </div>

            <div style="display: flex; align-items: flex-end;">
              <div style="font-size: 13px; color: var(--text-secondary); width: 100%; text-align: right;">
                <strong>${filtered.length}</strong> questões encontradas
              </div>
            </div>
          </div>
        </div>

        <!-- CARD DA QUESTÃO ATUAL -->
        ${!currentQ ? `
          <div class="card empty-state" style="padding: 40px;">
            <div class="empty-state-icon">🔍</div>
            <div class="empty-state-title">Nenhuma questão encontrada para estes filtros</div>
            <p class="empty-state-desc">Ajuste os filtros de matéria ou tipo para encontrar mais questões.</p>
          </div>
        ` : `
          <div class="question-card" id="practice-card-${currentQ.id}">
            <!-- Metadados da questão -->
            <div class="question-meta-row">
              <span class="badge badge-primary">${subjMap.get(currentQ.subjectId)?.name || "Matéria"}</span>
              <span class="badge badge-info">${topMap.get(currentQ.topicId)?.name || "Assunto"}</span>
              <span class="badge ${currentQ.isOfficial ? "badge-success" : "badge-gray"}">
                ${currentQ.isOfficial ? "Questão Oficial de Concurso Anterior" : "Questão de Treinamento"}
              </span>
              ${currentQ.banca ? `<span class="badge badge-gray">Banca: ${currentQ.banca}</span>` : ""}
              ${currentQ.year ? `<span class="badge badge-gray">Ano: ${currentQ.year}</span>` : ""}

              <div style="margin-left: auto; display: flex; gap: 8px;">
                <button id="btn-fav-q" class="btn btn-outline btn-sm" title="Favoritar">⭐</button>
                <button id="btn-review-later-q" class="btn btn-outline btn-sm" title="Revisar mais tarde">📌</button>
              </div>
            </div>

            <!-- Enunciado -->
            <div class="question-statement">${currentQ.statement}</div>

            <!-- Alternativas A, B, C, D, E -->
            <div class="options-list" id="options-container">
              ${currentQ.options.map(opt => `
                <div class="option-item" data-letter="${opt.letter}">
                  <div class="option-letter-badge">${opt.letter}</div>
                  <div style="flex: 1;">${opt.text}</div>
                </div>
              `).join("")}
            </div>

            <!-- Ações: Responder / Navegar -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 24px; padding-top: 16px; border-top: 1px solid var(--border);">
              <button id="btn-prev-q" class="btn btn-outline btn-sm" ${currentPracticeIndex === 0 ? "disabled" : ""}>
                ◀ Questão Anterior
              </button>

              <div style="font-weight: 600; font-size: 13.5px; color: var(--text-muted);">
                Questão ${currentPracticeIndex + 1} de ${filtered.length}
              </div>

              <button id="btn-next-q" class="btn btn-outline btn-sm" ${currentPracticeIndex >= filtered.length - 1 ? "disabled" : ""}>
                Próxima Questão ▶
              </button>
            </div>

            <!-- Área de Explicação e Feedback (exibida após resposta) -->
            <div id="explanation-container" style="display: none;"></div>
          </div>
        `}

      </div>
    `;
  }

  function attachPracticeEvents(allQuestions, subjects, topics, roles) {
    const subjSelect = container.querySelector("#filter-subject");
    const typeSelect = container.querySelector("#filter-type");
    const roleSelect = container.querySelector("#filter-role");

    subjSelect?.addEventListener("change", () => {
      filterSubject = subjSelect.value;
      currentPracticeIndex = 0;
      render();
    });

    typeSelect?.addEventListener("change", () => {
      filterType = typeSelect.value;
      currentPracticeIndex = 0;
      render();
    });

    roleSelect?.addEventListener("change", () => {
      filterRole = roleSelect.value;
      currentPracticeIndex = 0;
      render();
    });

    // Navegação entre questões
    container.querySelector("#btn-prev-q")?.addEventListener("click", () => {
      if (currentPracticeIndex > 0) {
        currentPracticeIndex -= 1;
        render();
      }
    });

    container.querySelector("#btn-next-q")?.addEventListener("click", () => {
      currentPracticeIndex += 1;
      render();
    });

    // Seleção de alternativa
    let answered = false;
    const optionItems = container.querySelectorAll(".option-item");
    const explanationDiv = container.querySelector("#explanation-container");

    let filtered = allQuestions.filter(q => {
      if (filterSubject !== "all" && q.subjectId !== filterSubject) return false;
      if (filterRole !== "all" && q.roleId !== filterRole) return false;
      if (filterType === "official" && !q.isOfficial) return false;
      if (filterType === "training" && q.isOfficial) return false;
      return true;
    });

    const currentQ = filtered[currentPracticeIndex];

    optionItems.forEach(item => {
      item.addEventListener("click", () => {
        if (answered || !currentQ) return;
        answered = true;

        const chosenLetter = item.getAttribute("data-letter");
        const isCorrect = chosenLetter === currentQ.correctLetter;

        // Registra tentativa no banco de dados local
        recordQuestionAttempt({
          questionId: currentQ.id,
          topicId: currentQ.topicId,
          chosenLetter,
          isCorrect
        });

        // Atualiza estilos visuais das opções
        optionItems.forEach(opt => {
          const l = opt.getAttribute("data-letter");
          if (l === currentQ.correctLetter) {
            opt.classList.add("correct");
          } else if (l === chosenLetter) {
            opt.classList.add("wrong");
          }
        });

        // Mostra explicação fundamentada
        if (explanationDiv) {
          explanationDiv.style.display = "block";
          explanationDiv.innerHTML = `
            <div class="explanation-card ${isCorrect ? "correct" : "wrong"}">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <strong style="font-size: 15px; color: ${isCorrect ? "var(--success-text)" : "var(--danger-text)"};">
                  ${isCorrect ? "✓ Resposta Correta! Gabarito: " + currentQ.correctLetter : "✗ Resposta Incorreta. Gabarito: " + currentQ.correctLetter}
                </strong>

                ${!isCorrect ? `
                  <button id="btn-add-to-error-book" class="btn btn-danger btn-sm" style="font-size: 12px;">
                    📕 Anotar no Caderno de Erros
                  </button>
                ` : ""}
              </div>

              <div style="font-size: 13.5px; color: var(--text-primary); line-height: 1.6; white-space: pre-line;">
                ${currentQ.explanation}
              </div>
            </div>
          `;

          // Handler para enviar ao Caderno de Erros
          explanationDiv.querySelector("#btn-add-to-error-book")?.addEventListener("click", () => {
            openErrorReasonModal(currentQ, chosenLetter);
          });
        }
      });
    });
  }

  function openErrorReasonModal(question, chosenLetter) {
    const modalRoot = container.querySelector("#error-notebook-modal-container");
    modalRoot.innerHTML = `
      <div class="modal-backdrop">
        <div class="modal-container" style="max-width: 500px;">
          <div class="modal-header">
            <h3 class="modal-title">Caderno de Erros: Identificar Motivo</h3>
            <button class="modal-close-btn">&times;</button>
          </div>

          <form id="error-reason-form">
            <div class="modal-body">
              <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 16px;">
                Identificar com precisão por que você errou ajuda o sistema a sugerir as revisões adequadas.
              </p>

              <div class="form-group">
                <label class="form-label">Qual foi o motivo principal do erro?</label>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                  ${ERROR_REASONS.map((r, i) => `
                    <label style="display: flex; align-items: center; gap: 10px; padding: 10px 14px; border: 1px solid var(--border); border-radius: var(--radius-md); cursor: pointer; background: var(--bg-surface);">
                      <input type="radio" name="error-reason" value="${r.id}" ${i === 0 ? "checked" : ""}>
                      <span style="font-size: 14px; font-weight: 500;">${r.label}</span>
                    </label>
                  `).join("")}
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="error-notes">Anotação pessoal para não errar de novo</label>
                <textarea id="error-notes" class="form-control" rows="2" placeholder="Ex: Lembrar que verbo haver no sentido de existir não vai para o plural!"></textarea>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary modal-close-btn">Cancelar</button>
              <button type="submit" class="btn btn-primary">Salvar no Caderno de Erros</button>
            </div>
          </form>
        </div>
      </div>
    `;

    modalRoot.querySelectorAll(".modal-close-btn").forEach(btn => btn.addEventListener("click", () => modalRoot.innerHTML = ""));

    modalRoot.querySelector("#error-reason-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const reason = modalRoot.querySelector("input[name='error-reason']:checked").value;
      const notes = modalRoot.querySelector("#error-notes").value.trim();

      addErrorNotebookEntry({
        questionId: question.id,
        subjectId: question.subjectId,
        topicId: question.topicId,
        chosenLetter,
        correctLetter: question.correctLetter,
        explanation: question.explanation,
        errorReason: reason,
        notes
      });

      modalRoot.innerHTML = "";
      alert("Questão anotada no Caderno de Erros com sucesso!");
    });
  }

  // ------------------------------------------------------------------------------
  // 2. ABA DE SIMULADOS
  // ------------------------------------------------------------------------------
  function renderMockTab(allQuestions, subjects, topics, roles, mockResults) {
    if (activeMockSession) {
      return renderActiveMockExam(activeMockSession);
    }

    return `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 24px;">

        <!-- GERADOR DE SIMULADO -->
        <div class="card">
          <div class="card-header">
            <div class="card-title">⚙️ Configurar Novo Simulado</div>
          </div>
          <div class="card-body">
            <form id="mock-config-form">
              <div class="form-group">
                <label class="form-label" for="mock-title">Título do Simulado</label>
                <input type="text" id="mock-title" class="form-control" value="Simulado Geral Saneago" required>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
                <div class="form-group">
                  <label class="form-label" for="mock-q-count">Qtd. de Questões</label>
                  <select id="mock-q-count" class="form-select">
                    <option value="5">5 questões (Rápido)</option>
                    <option value="10" selected>10 questões</option>
                    <option value="20">20 questões</option>
                    <option value="60">60 questões (Prova Completa)</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label" for="mock-time-limit">Tempo Limite (min)</label>
                  <input type="number" id="mock-time-limit" class="form-control" value="30" min="5" max="300" step="5">
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Matérias Incluídas</label>
                <div style="max-height: 120px; overflow-y: auto; border: 1px solid var(--border); padding: 8px; border-radius: var(--radius-md); display: flex; flex-direction: column; gap: 6px;">
                  ${subjects.map(s => `
                    <label style="display: flex; align-items: center; gap: 8px; font-size: 13px; cursor: pointer;">
                      <input type="checkbox" name="mock-subj" value="${s.id}" checked>
                      <span>${s.name}</span>
                    </label>
                  `).join("")}
                </div>
              </div>

              <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">
                ⏱️ Iniciar Prova do Simulado
              </button>
            </form>
          </div>
        </div>

        <!-- HISTÓRICO DE SIMULADOS ANTERIORES -->
        <div class="card">
          <div class="card-header">
            <div class="card-title">📜 Histórico de Simulados Realizados</div>
            <span class="badge badge-gray">${mockResults.length} realizados</span>
          </div>
          <div class="card-body">
            ${mockResults.length === 0 ? `
              <div class="empty-state">
                <div class="empty-state-icon">📊</div>
                <div class="empty-state-title">Nenhum simulado registrado</div>
                <p class="empty-state-desc">Configure e realize um simulado para testar seu tempo de prova e acompanhar o histórico de evolução.</p>
              </div>
            ` : `
              <div style="display: flex; flex-direction: column; gap: 12px;">
                ${mockResults.map(mr => {
                  const total = mr.correctCount + mr.wrongCount;
                  const percent = total > 0 ? Math.round((mr.correctCount / total) * 100) : 0;
                  const date = mr.completedAt ? new Date(mr.completedAt).toLocaleDateString("pt-BR") : "";
                  const timeMins = Math.round((mr.timeSpentSeconds || 0) / 60);

                  return `
                    <div style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 14px; background: var(--bg-surface); display: flex; justify-content: space-between; align-items: center;">
                      <div>
                        <div style="font-weight: 700; font-size: 14px; margin-bottom: 2px;">Simulado Saneago</div>
                        <div style="font-size: 12px; color: var(--text-muted);">
                          📅 ${date} • ⏱️ ${timeMins} min utilizados
                        </div>
                      </div>

                      <div style="text-align: right;">
                        <span class="badge ${percent >= 70 ? "badge-success" : percent >= 50 ? "badge-warning" : "badge-danger"}" style="font-size: 14px; padding: 6px 12px;">
                          ${percent}% (${mr.correctCount}/${total})
                        </span>
                      </div>
                    </div>
                  `;
                }).join("")}
              </div>
            `}
          </div>
        </div>

      </div>
    `;
  }

  function renderActiveMockExam(session) {
    const q = session.questions[session.currentIndex];
    const userAns = session.answers[q.id];

    return `
      <div class="card" style="border: 2px solid var(--primary);">
        <div class="card-header" style="background: linear-gradient(135deg, #0F172A, #1E293B); color: white;">
          <div>
            <span style="font-size: 12px; text-transform: uppercase; color: #94A3B8;">Simulado Oficial em Andamento</span>
            <h3 style="color: white; font-size: 17px; font-weight: 700;">Questão ${session.currentIndex + 1} de ${session.questions.length}</h3>
          </div>

          <div style="display: flex; align-items: center; gap: 14px;">
            <div id="mock-timer-display" style="font-family: var(--font-heading); font-size: 20px; font-weight: 700; color: #BAE6FD;">
              ${session.timeRemainingMinutes}:00
            </div>
            <button id="btn-finish-mock" class="btn btn-success btn-sm">Finalizar Prova</button>
          </div>
        </div>

        <div class="card-body">
          <div class="question-statement" style="font-size: 16px; margin-bottom: 20px;">
            ${q.statement}
          </div>

          <div class="options-list">
            ${q.options.map(opt => `
              <div class="option-item ${userAns === opt.letter ? "selected" : ""}" data-mock-letter="${opt.letter}">
                <div class="option-letter-badge">${opt.letter}</div>
                <div style="flex: 1;">${opt.text}</div>
              </div>
            `).join("")}
          </div>

          <!-- NAVEGADOR DE QUESTÕES DO SIMULADO -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 24px; padding-top: 16px; border-top: 1px solid var(--border);">
            <button id="btn-mock-prev" class="btn btn-outline btn-sm" ${session.currentIndex === 0 ? "disabled" : ""}>
              ◀ Anterior
            </button>

            <!-- Mapa de questões -->
            <div style="display: flex; gap: 6px; flex-wrap: wrap;">
              ${session.questions.map((item, idx) => `
                <button class="btn btn-sm btn-nav-mock-q" data-idx="${idx}" style="width: 32px; height: 32px; padding: 0; border-radius: 50%; font-size: 12px; font-weight: 700; background: ${idx === session.currentIndex ? "var(--primary)" : session.answers[item.id] ? "var(--success-light)" : "var(--bg-page)"}; color: ${idx === session.currentIndex ? "white" : session.answers[item.id] ? "var(--success-text)" : "var(--text-secondary)"}; border: 1px solid var(--border);">
                  ${idx + 1}
                </button>
              `).join("")}
            </div>

            <button id="btn-mock-next" class="btn btn-outline btn-sm" ${session.currentIndex >= session.questions.length - 1 ? "disabled" : ""}>
              Próxima ▶
            </button>
          </div>
        </div>
      </div>
    `;
  }

  function attachMockEvents(allQuestions, subjects, roles) {
    if (activeMockSession) {
      // Eventos da prova em andamento
      container.querySelectorAll(".option-item[data-mock-letter]").forEach(item => {
        item.addEventListener("click", () => {
          const letter = item.getAttribute("data-mock-letter");
          const q = activeMockSession.questions[activeMockSession.currentIndex];
          activeMockSession.answers[q.id] = letter;
          render();
        });
      });

      container.querySelector("#btn-mock-prev")?.addEventListener("click", () => {
        if (activeMockSession.currentIndex > 0) {
          activeMockSession.currentIndex -= 1;
          render();
        }
      });

      container.querySelector("#btn-mock-next")?.addEventListener("click", () => {
        if (activeMockSession.currentIndex < activeMockSession.questions.length - 1) {
          activeMockSession.currentIndex += 1;
          render();
        }
      });

      container.querySelectorAll(".btn-nav-mock-q").forEach(btn => {
        btn.addEventListener("click", () => {
          activeMockSession.currentIndex = parseInt(btn.getAttribute("data-idx"), 10);
          render();
        });
      });

      container.querySelector("#btn-finish-mock")?.addEventListener("click", () => {
        finishMockExam();
      });

      return;
    }

    // Formulário de configuração de simulado
    const form = container.querySelector("#mock-config-form");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const qCount = parseInt(container.querySelector("#mock-q-count").value, 10);
      const timeLimit = parseInt(container.querySelector("#mock-time-limit").value, 10);

      const checkedSubj = Array.from(container.querySelectorAll("input[name='mock-subj']:checked")).map(cb => cb.value);

      // Embaralha e seleciona questões disponíveis
      let pool = allQuestions.filter(q => checkedSubj.includes(q.subjectId));
      if (pool.length === 0) pool = allQuestions;

      // Shuffle algoritmo Fisher-Yates
      const shuffled = [...pool];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }

      const selectedQ = shuffled.slice(0, Math.min(qCount, shuffled.length));

      activeMockSession = {
        title: container.querySelector("#mock-title").value,
        questions: selectedQ,
        answers: {},
        currentIndex: 0,
        timeLimitMinutes: timeLimit,
        timeRemainingMinutes: timeLimit,
        startedAt: Date.now()
      };

      render();
    });
  }

  function finishMockExam() {
    if (!activeMockSession) return;

    let correct = 0;
    let wrong = 0;
    const subjectBreakdown = {};

    activeMockSession.questions.forEach(q => {
      const chosen = activeMockSession.answers[q.id];
      const isRight = chosen === q.correctLetter;

      if (isRight) correct += 1;
      else wrong += 1;

      // Registra a resposta
      if (chosen) {
        recordQuestionAttempt({
          questionId: q.id,
          topicId: q.topicId,
          chosenLetter: chosen,
          isCorrect: isRight
        });
      }
    });

    const timeSpentSecs = Math.round((Date.now() - activeMockSession.startedAt) / 1000);

    saveMockExamResult({
      mockExamId: `mock_${generateUUID().slice(0, 8)}`,
      correctCount: correct,
      wrongCount: wrong,
      timeSpentSeconds: timeSpentSecs,
      subjectBreakdown
    });

    const percent = Math.round((correct / activeMockSession.questions.length) * 100);
    alert(`Simulado finalizado!\n\nAproveitamento: ${percent}%\nAcertos: ${correct}\nErros: ${wrong}\nTempo gasto: ${Math.round(timeSpentSecs / 60)} min`);

    activeMockSession = null;
    render();
  }

  // ------------------------------------------------------------------------------
  // 3. ABA DE CADASTRO MANUAL DE QUESTÃO
  // ------------------------------------------------------------------------------
  function renderNewQuestionTab(subjects, topics, roles) {
    return `
      <div class="card" style="max-width: 800px; margin: 0 auto;">
        <div class="card-header">
          <div class="card-title">📝 Cadastrar Nova Questão</div>
        </div>
        <div class="card-body">
          <form id="new-question-form">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
              <div class="form-group">
                <label class="form-label" for="q-subject-id">Matéria *</label>
                <select id="q-subject-id" class="form-select" required>
                  ${subjects.map(s => `<option value="${s.id}">${s.name}</option>`).join("")}
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="q-topic-id">Assunto</label>
                <select id="q-topic-id" class="form-select">
                  ${topics.map(t => `<option value="${t.id}">${t.name}</option>`).join("")}
                </select>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="q-statement">Enunciado da Questão *</label>
              <textarea id="q-statement" class="form-control" rows="3" placeholder="Digite o texto da questão com clareza..." required></textarea>
            </div>

            <div class="form-group">
              <label class="form-label">Alternativas (A a E) *</label>
              <div style="display: flex; flex-direction: column; gap: 8px;">
                ${["A", "B", "C", "D", "E"].map(letter => `
                  <div style="display: flex; gap: 8px; align-items: center;">
                    <span class="option-letter-badge" style="width: 32px; height: 32px;">${letter}</span>
                    <input type="text" class="form-control q-opt-input" data-letter="${letter}" placeholder="Texto da alternativa ${letter}" required>
                  </div>
                `).join("")}
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
              <div class="form-group">
                <label class="form-label" for="q-correct-letter">Gabarito Correto *</label>
                <select id="q-correct-letter" class="form-select" required>
                  <option value="A">Alternativa A</option>
                  <option value="B">Alternativa B</option>
                  <option value="C">Alternativa C</option>
                  <option value="D">Alternativa D</option>
                  <option value="E">Alternativa E</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="q-banca">Banca Organizadora / Fonte</label>
                <input type="text" id="q-banca" class="form-control" placeholder="Ex: CS-UFG / Concurso Saneago">
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="q-explanation">Explicação e Fundamentação do Gabarito *</label>
              <textarea id="q-explanation" class="form-control" rows="3" placeholder="Explique por que o gabarito é este e os erros das outras alternativas..." required></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">
              Salvar Questão no Banco
            </button>
          </form>
        </div>
      </div>
    `;
  }

  function attachNewQuestionEvents(subjects, topics) {
    const form = container.querySelector("#new-question-form");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const options = [];
      container.querySelectorAll(".q-opt-input").forEach(input => {
        options.push({
          letter: input.getAttribute("data-letter"),
          text: input.value.trim()
        });
      });

      const newQ = {
        id: `cq_${generateUUID().slice(0, 8)}`,
        subjectId: container.querySelector("#q-subject-id").value,
        topicId: container.querySelector("#q-topic-id").value,
        statement: container.querySelector("#q-statement").value.trim(),
        options,
        correctLetter: container.querySelector("#q-correct-letter").value,
        explanation: container.querySelector("#q-explanation").value.trim(),
        banca: container.querySelector("#q-banca").value.trim() || "Cadastrada pelo Usuário",
        isOfficial: false,
        year: new Date().getFullYear()
      };

      saveCustomQuestion(newQ);
      alert("Questão cadastrada com sucesso!");
      activeTab = "practice";
      render();
    });
  }

  function attachNavTabs() {
    container.querySelector("#tab-practice")?.addEventListener("click", () => {
      activeTab = "practice";
      render();
    });

    container.querySelector("#tab-mock")?.addEventListener("click", () => {
      activeTab = "mock";
      render();
    });

    container.querySelector("#tab-new-q")?.addEventListener("click", () => {
      activeTab = "new_question";
      render();
    });
  }

  render();
}

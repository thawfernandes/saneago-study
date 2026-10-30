// ==============================================================================
// SANEAGO STUDY - MATÉRIAS E TRILHAS DE APRENDIZAGEM
// Hierarquia de matérias, assuntos, trilhas do básico ao avançado e autoavaliação
// ==============================================================================

import { getSubjects, saveSubject, getTopics, saveTopic, updateTopic, getQuestionAttempts, getRolesCatalog } from "../services/storage.js";
import { generateUUID } from "../services/crypto.js";

export function renderSubjectsView(container, navigateTo) {
  let selectedSubjectId = null;
  let filterStatus = "all";

  function render() {
    const subjects = getSubjects();
    const topics = getTopics();
    const attempts = getQuestionAttempts();
    const roles = getRolesCatalog();

    if (!selectedSubjectId && subjects.length > 0) {
      selectedSubjectId = subjects[0].id;
    }

    const currentSubject = subjects.find(s => s.id === selectedSubjectId);
    let subjectTopics = topics.filter(t => t.subjectId === selectedSubjectId);

    if (filterStatus !== "all") {
      subjectTopics = subjectTopics.filter(t => t.status === filterStatus);
    }

    // Calcula estatísticas gerais da matéria
    const allSubjTopicIds = new Set(topics.filter(t => t.subjectId === selectedSubjectId).map(t => t.id));
    const subjAttempts = attempts.filter(a => allSubjTopicIds.has(a.topicId));
    const subjCorrect = subjAttempts.filter(a => a.isCorrect).length;
    const subjAccuracy = subjAttempts.length > 0 ? Math.round((subjCorrect / subjAttempts.length) * 100) : null;
    const totalTimeSecs = subjectTopics.reduce((acc, t) => acc + (t.totalStudiedSeconds || 0), 0);
    const totalTimeHours = (totalTimeSecs / 3600).toFixed(1);

    container.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 20px;">

        <!-- CABEÇALHO -->
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 14px;">
          <div>
            <h2 style="font-size: 22px; font-weight: 700;">Matérias e Trilhas de Aprendizagem</h2>
            <p style="font-size: 13.5px; color: var(--text-muted);">Acompanhe o conteúdo programático, organize sequências pedagógicas e registre seu domínio.</p>
          </div>

          <div style="display: flex; gap: 10px;">
            <button id="btn-new-topic" class="btn btn-primary btn-sm">+ Novo Assunto</button>
            <button id="btn-new-subject" class="btn btn-outline btn-sm">+ Nova Matéria</button>
          </div>
        </div>

        <!-- SELETOR DE MATÉRIAS (TABS HORIZONTAIS) -->
        <div style="display: flex; gap: 8px; overflow-x: auto; padding-bottom: 6px; border-bottom: 1px solid var(--border);">
          ${subjects.map(s => {
            const isActive = s.id === selectedSubjectId;
            const count = topics.filter(t => t.subjectId === s.id).length;
            return `
              <button class="btn btn-subject-tab" data-id="${s.id}" style="padding: 10px 16px; border-radius: var(--radius-md) var(--radius-md) 0 0; background: ${isActive ? "var(--bg-surface)" : "transparent"}; color: ${isActive ? "var(--primary)" : "var(--text-secondary)"}; font-weight: ${isActive ? "700" : "500"}; border: 1px solid ${isActive ? "var(--border)" : "transparent"}; border-bottom: ${isActive ? "2px solid var(--primary)" : "none"}; display: flex; align-items: center; gap: 8px;">
                <span style="width: 10px; height: 10px; border-radius: 50%; background: ${s.color || "var(--primary)"};"></span>
                <span>${s.name}</span>
                <span class="badge badge-gray" style="font-size: 11px;">${count}</span>
              </button>
            `;
          }).join("")}
        </div>

        <!-- DETALHES DA MATÉRIA ATIVA -->
        ${currentSubject ? `
          <div class="card" style="margin-bottom: 8px;">
            <div class="card-body" style="padding: 18px 24px; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 16px;">
              <div>
                <h3 style="font-size: 18px; font-weight: 700; color: var(--text-primary); margin-bottom: 4px;">${currentSubject.name}</h3>
                <p style="font-size: 13.5px; color: var(--text-muted);">${currentSubject.description || "Disciplina preparatória para a Saneago."}</p>
              </div>

              <div style="display: flex; gap: 20px; align-items: center; background: var(--bg-page); padding: 8px 16px; border-radius: var(--radius-md); border: 1px solid var(--border);">
                <div>
                  <div style="font-size: 11px; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Tempo Estudado</div>
                  <div style="font-size: 16px; font-weight: 700; color: var(--primary);">${totalTimeHours} horas</div>
                </div>
                <div style="width: 1px; height: 28px; background: var(--border);"></div>
                <div>
                  <div style="font-size: 11px; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Aproveitamento Real</div>
                  <div style="font-size: 16px; font-weight: 700; color: ${subjAccuracy !== null && subjAccuracy >= 70 ? "var(--success-text)" : "var(--text-primary)"};">
                    ${subjAccuracy !== null ? `${subjAccuracy}% (${subjCorrect}/${subjAttempts.length})` : "Sem questões"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ` : ""}

        <!-- FILTROS POR STATUS -->
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
          <div style="display: flex; gap: 6px;">
            <button class="btn btn-sm btn-filter-status" data-status="all" style="background: ${filterStatus === "all" ? "var(--primary)" : "var(--bg-surface)"}; color: ${filterStatus === "all" ? "white" : "var(--text-secondary)"}; border: 1px solid var(--border);">Todos (${topics.filter(t => t.subjectId === selectedSubjectId).length})</button>
            <button class="btn btn-sm btn-filter-status" data-status="nao_iniciado" style="background: ${filterStatus === "nao_iniciado" ? "var(--primary)" : "var(--bg-surface)"}; color: ${filterStatus === "nao_iniciado" ? "white" : "var(--text-secondary)"}; border: 1px solid var(--border);">Não iniciado</button>
            <button class="btn btn-sm btn-filter-status" data-status="em_andamento" style="background: ${filterStatus === "em_andamento" ? "var(--primary)" : "var(--bg-surface)"}; color: ${filterStatus === "em_andamento" ? "white" : "var(--text-secondary)"}; border: 1px solid var(--border);">Em andamento</button>
            <button class="btn btn-sm btn-filter-status" data-status="precisa_revisar" style="background: ${filterStatus === "precisa_revisar" ? "var(--primary)" : "var(--bg-surface)"}; color: ${filterStatus === "precisa_revisar" ? "white" : "var(--text-secondary)"}; border: 1px solid var(--border);">Precisa revisar</button>
            <button class="btn btn-sm btn-filter-status" data-status="concluido" style="background: ${filterStatus === "concluido" ? "var(--primary)" : "var(--bg-surface)"}; color: ${filterStatus === "concluido" ? "white" : "var(--text-secondary)"}; border: 1px solid var(--border);">Concluído</button>
          </div>

          <div style="font-size: 13px; color: var(--text-muted);">
            Trilha flexível: você pode estudar fora de ordem ou pular etapas livremente.
          </div>
        </div>

        <!-- LISTA / CARDS DOS ASSUNTOS DA TRILHA -->
        <div style="display: flex; flex-direction: column; gap: 12px;">
          ${subjectTopics.length === 0 ? `
            <div class="empty-state card" style="padding: 40px;">
              <div class="empty-state-icon">📖</div>
              <div class="empty-state-title">Nenhum assunto encontrado</div>
              <p class="empty-state-desc">Cadastre assuntos para esta matéria ou altere os filtros acima.</p>
              <button id="btn-create-first-topic" class="btn btn-primary btn-sm">+ Cadastrar Assunto</button>
            </div>
          ` : subjectTopics.map(t => {
            const topAttempts = attempts.filter(a => a.topicId === t.id);
            const topCorrect = topAttempts.filter(a => a.isCorrect).length;
            const topRate = topAttempts.length > 0 ? Math.round((topCorrect / topAttempts.length) * 100) : null;
            const timeMins = Math.round((t.totalStudiedSeconds || 0) / 60);

            return `
              <div class="card" style="border-left: 4px solid ${getStatusColor(t.status)};">
                <div class="card-body" style="padding: 18px 22px;">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; margin-bottom: 8px;">
                    <div>
                      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                        <span class="badge badge-info" style="font-size: 11px;">Etapa: ${t.trackStage || "Geral"}</span>
                        <span class="badge ${getStatusBadge(t.status)}">${formatStatus(t.status)}</span>
                        <span class="badge ${getDifficultyBadge(t.difficulty)}">Dificuldade: ${formatDifficulty(t.difficulty)}</span>
                      </div>
                      <h4 style="font-size: 16px; font-weight: 700; color: var(--text-primary);">${t.name}</h4>
                    </div>

                    <div style="display: flex; align-items: center; gap: 8px;">
                      <button class="btn btn-outline btn-sm btn-edit-topic" data-topic-id="${t.id}">✏️ Editar</button>
                      <button class="btn btn-primary btn-sm btn-study-topic" data-topic-id="${t.id}" data-subject-id="${t.subjectId}">▶ Estudar</button>
                    </div>
                  </div>

                  <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 14px; line-height: 1.5;">
                    ${t.description || "Sem descrição cadastrada."}
                  </p>

                  <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; background: var(--bg-page); padding: 10px 14px; border-radius: var(--radius-md); font-size: 12.5px; color: var(--text-muted); gap: 10px;">
                    <div style="display: flex; gap: 16px;">
                      <span>⏱️ Estudado: <strong>${timeMins} min</strong></span>
                      <span>🎯 Questões: <strong>${topRate !== null ? `${topRate}% (${topCorrect}/${topAttempts.length})` : "Nenhuma"}</strong></span>
                      ${t.lastStudiedAt ? `<span>📅 Último: ${new Date(t.lastStudiedAt).toLocaleDateString("pt-BR")}</span>` : ""}
                    </div>

                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span>Domínio percebido:</span>
                      <span style="color: #F59E0B; font-size: 15px;">${"★".repeat(t.masteryLevel || 1)}${"☆".repeat(5 - (t.masteryLevel || 1))}</span>
                    </div>
                  </div>
                </div>
              </div>
            `;
          }).join("")}
        </div>

      </div>

      <!-- CONTAINER PARA MODAL DE ASSUNTO / MATÉRIA -->
      <div id="subject-modal-container"></div>
    `;

    attachSubjectEvents(subjects, topics, roles);
  }

  function getStatusColor(status) {
    if (status === "concluido") return "var(--success)";
    if (status === "em_andamento") return "var(--primary)";
    if (status === "precisa_revisar") return "var(--warning)";
    return "#CBD5E1";
  }

  function getStatusBadge(status) {
    if (status === "concluido") return "badge-success";
    if (status === "em_andamento") return "badge-primary";
    if (status === "precisa_revisar") return "badge-warning";
    return "badge-gray";
  }

  function formatStatus(status) {
    const map = {
      nao_iniciado: "Não iniciado",
      em_andamento: "Em andamento",
      precisa_revisar: "Precisa revisar",
      concluido: "Concluído"
    };
    return map[status] || status;
  }

  function getDifficultyBadge(diff) {
    if (diff === "facil") return "badge-success";
    if (diff === "dificil") return "badge-danger";
    return "badge-warning";
  }

  function formatDifficulty(diff) {
    const map = { facil: "Fácil", medio: "Médio", dificil: "Difícil" };
    return map[diff] || diff;
  }

  function attachSubjectEvents(subjects, topics, roles) {
    // Troca de matéria
    container.querySelectorAll(".btn-subject-tab").forEach(tab => {
      tab.addEventListener("click", () => {
        selectedSubjectId = tab.getAttribute("data-id");
        render();
      });
    });

    // Filtros de status
    container.querySelectorAll(".btn-filter-status").forEach(btn => {
      btn.addEventListener("click", () => {
        filterStatus = btn.getAttribute("data-status");
        render();
      });
    });

    // Iniciar sessão de estudos no cronômetro
    container.querySelectorAll(".btn-study-topic").forEach(btn => {
      btn.addEventListener("click", () => {
        const topicId = btn.getAttribute("data-topic-id");
        const subjectId = btn.getAttribute("data-subject-id");
        navigateTo("timer", { subjectId, topicId });
      });
    });

    // Criar novo tópico
    container.querySelector("#btn-new-topic")?.addEventListener("click", () => openTopicModal(null, selectedSubjectId));
    container.querySelector("#btn-create-first-topic")?.addEventListener("click", () => openTopicModal(null, selectedSubjectId));

    // Editar tópico
    container.querySelectorAll(".btn-edit-topic").forEach(btn => {
      btn.addEventListener("click", () => {
        const topId = btn.getAttribute("data-topic-id");
        const topic = topics.find(t => t.id === topId);
        if (topic) openTopicModal(topic, topic.subjectId);
      });
    });

    // Criar nova matéria
    container.querySelector("#btn-new-subject")?.addEventListener("click", () => openSubjectModal());
  }

  function openTopicModal(topic = null, defaultSubjectId = "") {
    const subjects = getSubjects();
    const roles = getRolesCatalog();
    const modalRoot = container.querySelector("#subject-modal-container");
    const isEdit = !!topic;

    modalRoot.innerHTML = `
      <div class="modal-backdrop">
        <div class="modal-container">
          <div class="modal-header">
            <h3 class="modal-title">${isEdit ? "Editar Assunto" : "Cadastrar Novo Assunto"}</h3>
            <button class="modal-close-btn">&times;</button>
          </div>

          <form id="topic-form">
            <div class="modal-body">
              <div class="form-group">
                <label class="form-label" for="topic-subject-id">Matéria *</label>
                <select id="topic-subject-id" class="form-select" required>
                  ${subjects.map(s => `
                    <option value="${s.id}" ${s.id === (topic ? topic.subjectId : defaultSubjectId) ? "selected" : ""}>${s.name}</option>
                  `).join("")}
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="topic-name">Nome do Assunto *</label>
                <input type="text" id="topic-name" class="form-control" value="${topic?.name || ""}" placeholder="Ex: Concordância Nominal e Verbal" required>
              </div>

              <div class="form-group">
                <label class="form-label" for="topic-desc">Descrição / Subtópicos</label>
                <textarea id="topic-desc" class="form-control" rows="2" placeholder="Ex: Regras especiais de sujeito partitivo, concordância atrativa...">${topic?.description || ""}</textarea>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
                <div class="form-group">
                  <label class="form-label" for="topic-stage">Etapa da Trilha</label>
                  <select id="topic-stage" class="form-select">
                    <option value="Básico" ${topic?.trackStage === "Básico" ? "selected" : ""}>Básico</option>
                    <option value="Intermediário" ${!topic || topic?.trackStage === "Intermediário" ? "selected" : ""}>Intermediário</option>
                    <option value="Avançado" ${topic?.trackStage === "Avançado" ? "selected" : ""}>Avançado</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label" for="topic-status">Situação de Estudo</label>
                  <select id="topic-status" class="form-select">
                    <option value="nao_iniciado" ${!topic || topic?.status === "nao_iniciado" ? "selected" : ""}>Não iniciado</option>
                    <option value="em_andamento" ${topic?.status === "em_andamento" ? "selected" : ""}>Em andamento</option>
                    <option value="precisa_revisar" ${topic?.status === "precisa_revisar" ? "selected" : ""}>Precisa revisar</option>
                    <option value="concluido" ${topic?.status === "concluido" ? "selected" : ""}>Concluído</option>
                  </select>
                </div>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
                <div class="form-group">
                  <label class="form-label" for="topic-diff">Nível de Dificuldade</label>
                  <select id="topic-diff" class="form-select">
                    <option value="facil" ${topic?.difficulty === "facil" ? "selected" : ""}>Fácil</option>
                    <option value="medio" ${!topic || topic?.difficulty === "medio" ? "selected" : ""}>Médio</option>
                    <option value="dificil" ${topic?.difficulty === "dificil" ? "selected" : ""}>Difícil</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label" for="topic-mastery">Nível de Domínio (1 a 5)</label>
                  <select id="topic-mastery" class="form-select">
                    <option value="1" ${!topic || topic?.masteryLevel === 1 ? "selected" : ""}>★☆☆☆☆ (1 - Inicial)</option>
                    <option value="2" ${topic?.masteryLevel === 2 ? "selected" : ""}>★★☆☆☆ (2 - Básico)</option>
                    <option value="3" ${topic?.masteryLevel === 3 ? "selected" : ""}>★★★☆☆ (3 - Intermediário)</option>
                    <option value="4" ${topic?.masteryLevel === 4 ? "selected" : ""}>★★★★☆ (4 - Bom)</option>
                    <option value="5" ${topic?.masteryLevel === 5 ? "selected" : ""}>★★★★★ (5 - Consolidado)</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Cargos Relacionados</label>
                <div style="max-height: 120px; overflow-y: auto; border: 1px solid var(--border); padding: 8px; border-radius: var(--radius-md); display: flex; flex-direction: column; gap: 6px;">
                  ${roles.map(r => `
                    <label style="display: flex; align-items: center; gap: 8px; font-size: 13px; cursor: pointer;">
                      <input type="checkbox" name="role-rel" value="${r.id}" ${topic && topic.roleIds && topic.roleIds.includes(r.id) ? "checked" : ""}>
                      <span>${r.name} (${r.educationLevel})</span>
                    </label>
                  `).join("")}
                </div>
                <span class="form-hint">Permite compartilhar o progresso deste assunto entre múltiplos cargos selecionados.</span>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary modal-close-btn">Cancelar</button>
              <button type="submit" class="btn btn-primary">${isEdit ? "Salvar Alterações" : "Cadastrar Assunto"}</button>
            </div>
          </form>
        </div>
      </div>
    `;

    modalRoot.querySelectorAll(".modal-close-btn").forEach(btn => btn.addEventListener("click", () => modalRoot.innerHTML = ""));

    modalRoot.querySelector("#topic-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const roleCheckboxes = modalRoot.querySelectorAll("input[name='role-rel']:checked");
      const selectedRoleIds = Array.from(roleCheckboxes).map(cb => cb.value);

      const topicData = {
        id: topic ? topic.id : `top_${generateUUID().slice(0, 8)}`,
        subjectId: modalRoot.querySelector("#topic-subject-id").value,
        name: modalRoot.querySelector("#topic-name").value.trim(),
        description: modalRoot.querySelector("#topic-desc").value.trim(),
        trackStage: modalRoot.querySelector("#topic-stage").value,
        status: modalRoot.querySelector("#topic-status").value,
        difficulty: modalRoot.querySelector("#topic-diff").value,
        masteryLevel: parseInt(modalRoot.querySelector("#topic-mastery").value, 10) || 1,
        roleIds: selectedRoleIds,
        totalStudiedSeconds: topic ? topic.totalStudiedSeconds : 0,
        lastStudiedAt: topic ? topic.lastStudiedAt : null,
        nextReviewAt: topic ? topic.nextReviewAt : null
      };

      saveTopic(topicData);
      modalRoot.innerHTML = "";
      render();
    });
  }

  function openSubjectModal() {
    const modalRoot = container.querySelector("#subject-modal-container");
    modalRoot.innerHTML = `
      <div class="modal-backdrop">
        <div class="modal-container">
          <div class="modal-header">
            <h3 class="modal-title">Cadastrar Nova Matéria</h3>
            <button class="modal-close-btn">&times;</button>
          </div>

          <form id="new-subject-form">
            <div class="modal-body">
              <div class="form-group">
                <label class="form-label" for="new-subj-name">Nome da Matéria *</label>
                <input type="text" id="new-subj-name" class="form-control" placeholder="Ex: Legislação Ambiental Aplicada" required>
              </div>

              <div class="form-group">
                <label class="form-label" for="new-subj-color">Cor de Destaque</label>
                <input type="color" id="new-subj-color" class="form-control" value="#005DAA" style="height: 42px; padding: 2px;">
              </div>

              <div class="form-group">
                <label class="form-label" for="new-subj-desc">Descrição</label>
                <textarea id="new-subj-desc" class="form-control" rows="2" placeholder="Breve resumo dos conteúdos abordados..."></textarea>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary modal-close-btn">Cancelar</button>
              <button type="submit" class="btn btn-primary">Cadastrar Matéria</button>
            </div>
          </form>
        </div>
      </div>
    `;

    modalRoot.querySelectorAll(".modal-close-btn").forEach(btn => btn.addEventListener("click", () => modalRoot.innerHTML = ""));

    modalRoot.querySelector("#new-subject-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const name = modalRoot.querySelector("#new-subj-name").value.trim();
      const color = modalRoot.querySelector("#new-subj-color").value;
      const desc = modalRoot.querySelector("#new-subj-desc").value.trim();

      const newSubject = {
        id: `subj_${generateUUID().slice(0, 8)}`,
        name,
        color,
        description: desc,
        orderIndex: getSubjects().length + 1
      };

      saveSubject(newSubject);
      selectedSubjectId = newSubject.id;
      modalRoot.innerHTML = "";
      render();
    });
  }

  render();
}

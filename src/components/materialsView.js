// ==============================================================================
// SANEAGO STUDY - MATERIAIS GRATUITOS E RESUMOS / ANOTAÇÕES
// Biblioteca de recursos públicos, links verificados e editor com salvamento reativo
// ==============================================================================

import { getMaterials, saveMaterial, deleteMaterial, getNotes, saveNote, deleteNote, getSubjects, getTopics, getRolesCatalog } from "../services/storage.js";
import { generateUUID } from "../services/crypto.js";

export function renderMaterialsView(container, navigateTo) {
  let activeTab = "materials"; // 'materials' | 'notes'
  let materialFilterType = "all";
  let materialFilterSubject = "all";
  let notesSearchQuery = "";
  let currentEditingNote = null;
  let saveFeedbackTimeout = null;

  function render() {
    const materials = getMaterials();
    const notes = getNotes();
    const subjects = getSubjects();
    const topics = getTopics();
    const roles = getRolesCatalog();

    const subjMap = new Map(subjects.map(s => [s.id, s]));
    const topMap = new Map(topics.map(t => [t.id, t]));

    container.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 20px;">

        <!-- CABEÇALHO -->
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 14px;">
          <div>
            <h2 style="font-size: 22px; font-weight: 700;">Materiais Gratuitos e Resumos</h2>
            <p style="font-size: 13.5px; color: var(--text-muted);">Reúna links de legislação, videoaulas abertas, apostilas e escreva seus próprios resumos.</p>
          </div>

          <div style="display: flex; gap: 8px;">
            <button id="tab-materials" class="btn ${activeTab === "materials" ? "btn-primary" : "btn-outline"} btn-sm">
              📚 Biblioteca de Materiais (${materials.length})
            </button>
            <button id="tab-notes" class="btn ${activeTab === "notes" ? "btn-primary" : "btn-outline"} btn-sm">
              ✍️ Meus Resumos e Anotações (${notes.length})
            </button>
          </div>
        </div>

        <!-- ABA 1: BIBLIOTECA DE MATERIAIS -->
        ${activeTab === "materials" ? renderMaterialsTab(materials, subjects, topics, roles, subjMap, topMap) : ""}

        <!-- ABA 2: RESUMOS E ANOTAÇÕES -->
        ${activeTab === "notes" ? renderNotesTab(notes, subjects, topics, subjMap, topMap) : ""}

      </div>

      <!-- CONTAINER PARA MODAL DE NOVO MATERIAL -->
      <div id="material-modal-container"></div>
    `;

    attachEvents(subjects, topics, roles);
  }

  function renderMaterialsTab(materials, subjects, topics, roles, subjMap, topMap) {
    let filtered = materials.filter(m => {
      if (materialFilterType !== "all" && m.type !== materialFilterType) return false;
      if (materialFilterSubject !== "all" && m.subjectId !== materialFilterSubject) return false;
      return true;
    });

    return `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        
        <!-- BARRA DE CONTROLE E FILTROS -->
        <div class="card" style="padding: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              <select id="filter-mat-type" class="form-select" style="width: auto; padding: 6px 12px; font-size: 13px;">
                <option value="all" ${materialFilterType === "all" ? "selected" : ""}>Todos os tipos</option>
                <option value="site" ${materialFilterType === "site" ? "selected" : ""}>Legislação / Sites Oficiais</option>
                <option value="video" ${materialFilterType === "video" ? "selected" : ""}>Videoaulas Gratuitas</option>
                <option value="pdf" ${materialFilterType === "pdf" ? "selected" : ""}>PDFs / Normas Técnicas</option>
                <option value="apostila" ${materialFilterType === "apostila" ? "selected" : ""}>Apostilas</option>
              </select>

              <select id="filter-mat-subject" class="form-select" style="width: auto; padding: 6px 12px; font-size: 13px;">
                <option value="all">Todas as matérias</option>
                ${subjects.map(s => `<option value="${s.id}" ${s.id === materialFilterSubject ? "selected" : ""}>${s.name}</option>`).join("")}
              </select>
            </div>

            <button id="btn-add-material" class="btn btn-primary btn-sm">+ Adicionar Material</button>
          </div>
        </div>

        <!-- GRID DE MATERIAIS -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 16px;">
          ${filtered.length === 0 ? `
            <div class="card empty-state" style="grid-column: 1 / -1; padding: 40px;">
              <div class="empty-state-icon">📂</div>
              <div class="empty-state-title">Nenhum material encontrado com estes filtros</div>
            </div>
          ` : filtered.map(m => {
            const subj = subjMap.get(m.subjectId);
            const top = topMap.get(m.topicId);

            return `
              <div class="card" style="display: flex; flex-direction: column; justify-content: space-between;">
                <div class="card-body" style="padding: 18px;">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 8px;">
                    <span class="badge ${getMaterialTypeBadge(m.type)}">${formatMaterialType(m.type)}</span>
                    <button class="btn btn-outline btn-sm btn-fav-mat" data-id="${m.id}" style="padding: 2px 6px;">
                      ${m.isFavorite ? "⭐ Favorito" : "☆ Favoritar"}
                    </button>
                  </div>

                  <h4 style="font-size: 15px; font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">${m.title}</h4>
                  
                  <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 10px;">
                    ${subj?.name || "Geral"} ${top ? `• ${top.name}` : ""}
                  </div>

                  <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 16px;">
                    ${m.description || "Sem descrição adicional."}
                  </p>

                  <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 12px; border-top: 1px solid var(--border);">
                    ${m.url ? `
                      <a href="${m.url}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" style="font-size: 12.5px;">
                        🔗 Acessar Conteúdo Gratuito ↗
                      </a>
                    ` : `<span></span>`}

                    <button class="btn btn-outline btn-sm btn-delete-mat" data-id="${m.id}" style="color: var(--danger-text); border-color: var(--danger-light); padding: 4px 8px; font-size: 11px;">
                      Excluir
                    </button>
                  </div>
                </div>
              </div>
            `;
          }).join("")}
        </div>

      </div>
    `;
  }

  function getMaterialTypeBadge(type) {
    if (type === "video") return "badge-danger";
    if (type === "pdf") return "badge-warning";
    if (type === "site") return "badge-primary";
    return "badge-info";
  }

  function formatMaterialType(type) {
    const map = { video: "Videoaula", pdf: "PDF / Norma", site: "Legislação Oficial", apostila: "Apostila", resumo: "Resumo" };
    return map[type] || type;
  }

  function renderNotesTab(notes, subjects, topics, subjMap, topMap) {
    let filteredNotes = notes.filter(n => {
      if (!notesSearchQuery) return true;
      const q = notesSearchQuery.toLowerCase();
      return n.title.toLowerCase().includes(q) || n.content.toLowerCase().includes(q);
    });

    return `
      <div style="display: grid; grid-template-columns: 320px 1fr; gap: 20px;">
        
        <!-- COLUNA DA ESQUERDA: LISTA DE RESUMOS E BUSCA -->
        <div class="card" style="height: fit-content;">
          <div class="card-header" style="padding: 12px 16px;">
            <div class="card-title" style="font-size: 15px;">Anotações Salvas</div>
            <button id="btn-new-note" class="btn btn-primary btn-sm">+ Novo</button>
          </div>
          <div class="card-body" style="padding: 12px;">
            <input type="text" id="input-search-notes" class="form-control" placeholder="🔍 Pesquisar em resumos..." value="${notesSearchQuery}" style="font-size: 13px; padding: 6px 10px; margin-bottom: 12px;">

            <div style="display: flex; flex-direction: column; gap: 6px; max-height: 480px; overflow-y: auto;">
              ${filteredNotes.length === 0 ? `
                <div style="text-align: center; color: var(--text-muted); padding: 20px 10px; font-size: 13px;">
                  Nenhum resumo encontrado.
                </div>
              ` : filteredNotes.map(n => {
                const isActive = currentEditingNote && currentEditingNote.id === n.id;
                const subj = subjMap.get(n.subjectId);

                return `
                  <div class="btn-select-note" data-id="${n.id}" style="padding: 10px 12px; border-radius: var(--radius-md); background: ${isActive ? "var(--primary-light)" : "var(--bg-page)"}; border: 1px solid ${isActive ? "var(--primary)" : "var(--border)"}; cursor: pointer; transition: var(--transition);">
                    <div style="font-weight: 700; font-size: 13.5px; color: var(--text-primary); margin-bottom: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                      ${n.title || "Sem título"}
                    </div>
                    <div style="font-size: 11px; color: var(--text-muted);">
                      ${subj?.name || "Geral"} • ${new Date(n.updatedAt).toLocaleDateString("pt-BR")}
                    </div>
                  </div>
                `;
              }).join("")}
            </div>
          </div>
        </div>

        <!-- COLUNA DA DIREITA: EDITOR DE TEXTO -->
        <div class="card">
          <div class="card-header">
            <div class="card-title">✍️ Editor de Resumo</div>
            <div id="save-status-indicator" style="font-size: 12px; color: var(--text-muted);">
              ${currentEditingNote ? `Última alteração: ${new Date(currentEditingNote.updatedAt).toLocaleTimeString("pt-BR")}` : "Crie ou selecione uma anotação"}
            </div>
          </div>
          <div class="card-body">
            <form id="note-editor-form">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px;">
                <div class="form-group" style="margin-bottom: 0;">
                  <label class="form-label" for="note-subject">Matéria Relacionada</label>
                  <select id="note-subject" class="form-select">
                    <option value="">Geral / Sem matéria</option>
                    ${subjects.map(s => `<option value="${s.id}" ${currentEditingNote && currentEditingNote.subjectId === s.id ? "selected" : ""}>${s.name}</option>`).join("")}
                  </select>
                </div>

                <div class="form-group" style="margin-bottom: 0;">
                  <label class="form-label" for="note-topic">Assunto Específico</label>
                  <select id="note-topic" class="form-select">
                    <option value="">Geral / Sem assunto</option>
                    ${topics.map(t => `<option value="${t.id}" ${currentEditingNote && currentEditingNote.topicId === t.id ? "selected" : ""}>${t.name}</option>`).join("")}
                  </select>
                </div>
              </div>

              <div class="form-group">
                <input type="text" id="note-title-input" class="form-control" placeholder="Título do Resumo (Ex: Principais Regras da Lei 13.569/1999)" value="${currentEditingNote?.title || ""}" style="font-size: 16px; font-weight: 700;" required>
              </div>

              <div class="form-group">
                <textarea id="note-content-input" class="form-control" rows="14" placeholder="Escreva aqui seu resumo, tópicos em marcadores, macetes e palavras-chave para fixação..." style="font-family: var(--font-body); font-size: 14px; line-height: 1.7;">${currentEditingNote?.content || ""}</textarea>
              </div>

              <div style="display: flex; justify-content: space-between; align-items: center;">
                ${currentEditingNote ? `
                  <button type="button" id="btn-delete-current-note" class="btn btn-outline btn-sm" style="color: var(--danger-text); border-color: var(--danger-light);">
                    🗑️ Excluir Resumo
                  </button>
                ` : `<div></div>`}

                <button type="submit" class="btn btn-primary">
                  💾 Salvar Resumo
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    `;
  }

  function attachEvents(subjects, topics, roles) {
    container.querySelector("#tab-materials")?.addEventListener("click", () => {
      activeTab = "materials";
      render();
    });

    container.querySelector("#tab-notes")?.addEventListener("click", () => {
      activeTab = "notes";
      render();
    });

    // Filtros de materiais
    container.querySelector("#filter-mat-type")?.addEventListener("change", (e) => {
      materialFilterType = e.target.value;
      render();
    });

    container.querySelector("#filter-mat-subject")?.addEventListener("change", (e) => {
      materialFilterSubject = e.target.value;
      render();
    });

    // Excluir material
    container.querySelectorAll(".btn-delete-mat").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        if (confirm("Deseja remover este material da sua biblioteca?")) {
          deleteMaterial(id);
          render();
        }
      });
    });

    // Favoritar material
    container.querySelectorAll(".btn-fav-mat").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const mats = getMaterials();
        const m = mats.find(item => item.id === id);
        if (m) {
          m.isFavorite = !m.isFavorite;
          saveMaterial(m);
          render();
        }
      });
    });

    // Modal de Novo Material
    container.querySelector("#btn-add-material")?.addEventListener("click", () => {
      openAddMaterialModal(subjects, topics, roles);
    });

    // Busca de resumos
    const searchInput = container.querySelector("#input-search-notes");
    searchInput?.addEventListener("input", () => {
      notesSearchQuery = searchInput.value;
      render();
    });

    // Seleção de resumo da lista
    container.querySelectorAll(".btn-select-note").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const notes = getNotes();
        currentEditingNote = notes.find(n => n.id === id);
        render();
      });
    });

    // Botão novo resumo
    container.querySelector("#btn-new-note")?.addEventListener("click", () => {
      currentEditingNote = null;
      render();
    });

    // Submissão do editor de resumo
    const noteForm = container.querySelector("#note-editor-form");
    noteForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = container.querySelector("#note-title-input").value.trim();
      const content = container.querySelector("#note-content-input").value;
      const subjectId = container.querySelector("#note-subject").value || null;
      const topicId = container.querySelector("#note-topic").value || null;

      const saved = saveNote({
        id: currentEditingNote ? currentEditingNote.id : undefined,
        title,
        content,
        subjectId,
        topicId
      });

      currentEditingNote = saved;

      const indicator = container.querySelector("#save-status-indicator");
      if (indicator) {
        indicator.textContent = `✓ Salvo com sucesso às ${new Date().toLocaleTimeString("pt-BR")}`;
        indicator.style.color = "var(--success-text)";
      }

      render();
    });

    // Excluir resumo
    container.querySelector("#btn-delete-current-note")?.addEventListener("click", () => {
      if (currentEditingNote && confirm("Deseja realmente excluir este resumo?")) {
        deleteNote(currentEditingNote.id);
        currentEditingNote = null;
        render();
      }
    });
  }

  function openAddMaterialModal(subjects, topics, roles) {
    const modalRoot = container.querySelector("#material-modal-container");
    modalRoot.innerHTML = `
      <div class="modal-backdrop">
        <div class="modal-container">
          <div class="modal-header">
            <h3 class="modal-title">Adicionar Material à Biblioteca</h3>
            <button class="modal-close-btn">&times;</button>
          </div>

          <form id="material-form">
            <div class="modal-body">
              <div class="form-group">
                <label class="form-label" for="mat-title">Título do Material *</label>
                <input type="text" id="mat-title" class="form-control" placeholder="Ex: Lei 14.026/2020 - Marco Legal Anotado" required>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
                <div class="form-group">
                  <label class="form-label" for="mat-type">Tipo de Material</label>
                  <select id="mat-type" class="form-select">
                    <option value="site">Legislação / Site Oficial</option>
                    <option value="video">Videoaula do YouTube</option>
                    <option value="pdf">PDF / Documento</option>
                    <option value="apostila">Apostila</option>
                    <option value="resumo">Resumo</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label" for="mat-subj">Matéria</label>
                  <select id="mat-subj" class="form-select">
                    <option value="">Geral</option>
                    ${subjects.map(s => `<option value="${s.id}">${s.name}</option>`).join("")}
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="mat-url">Link ou Endereço Web</label>
                <input type="url" id="mat-url" class="form-control" placeholder="https://...">
              </div>

              <div class="form-group">
                <label class="form-label" for="mat-desc">Descrição / Comentários</label>
                <textarea id="mat-desc" class="form-control" rows="2" placeholder="Breve comentário sobre a relevância deste material para o concurso..."></textarea>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary modal-close-btn">Cancelar</button>
              <button type="submit" class="btn btn-primary">Adicionar Material</button>
            </div>
          </form>
        </div>
      </div>
    `;

    modalRoot.querySelectorAll(".modal-close-btn").forEach(btn => btn.addEventListener("click", () => modalRoot.innerHTML = ""));

    modalRoot.querySelector("#material-form").addEventListener("submit", (e) => {
      e.preventDefault();
      saveMaterial({
        title: modalRoot.querySelector("#mat-title").value.trim(),
        type: modalRoot.querySelector("#mat-type").value,
        subjectId: modalRoot.querySelector("#mat-subj").value || null,
        url: modalRoot.querySelector("#mat-url").value.trim(),
        description: modalRoot.querySelector("#mat-desc").value.trim()
      });

      modalRoot.innerHTML = "";
      render();
    });
  }

  render();
}

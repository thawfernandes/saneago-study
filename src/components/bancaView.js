// ==============================================================================
// SANEAGO STUDY - ESTUDO DA BANCA ORGANIZADORA
// Perfil da CS-UFG e bancas históricas, links de provas, características e táticas
// ==============================================================================

import { BANCAS_DATA } from "../data/bancasData.js";
import { getQuestionAttempts, getCustomQuestions } from "../services/storage.js";
import { DEFAULT_QUESTIONS } from "../data/defaultQuestions.js";

export function renderBancaView(container, navigateTo) {
  let selectedBancaId = "cs_ufg";

  function render() {
    const attempts = getQuestionAttempts();
    const allQuestions = [...DEFAULT_QUESTIONS, ...getCustomQuestions()];
    const currentBanca = BANCAS_DATA.find(b => b.id === selectedBancaId) || BANCAS_DATA[0];

    // Calcula desempenho real do usuário nas questões desta banca
    const bancaQuestions = allQuestions.filter(q => q.banca && q.banca.toLowerCase().includes(currentBanca.id === "cs_ufg" ? "ufg" : "fcc"));
    const bancaQuestionIds = new Set(bancaQuestions.map(q => q.id));

    const userBancaAttempts = attempts.filter(a => bancaQuestionIds.has(a.questionId));
    const userCorrect = userBancaAttempts.filter(a => a.isCorrect).length;
    const userAccuracy = userBancaAttempts.length > 0 ? Math.round((userCorrect / userBancaAttempts.length) * 100) : null;

    container.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 24px;">

        <!-- CABEÇALHO COM AVISO TRANSPARENTE -->
        <div>
          <h2 style="font-size: 22px; font-weight: 700;">Estudo da Banca Organizadora</h2>
          <p style="font-size: 13.5px; color: var(--text-muted);">
            Análise do estilo de cobrança, perfil dos enunciados e provas anteriores de bancas de referência.
          </p>
        </div>

        <div style="background: #FEF3C7; border: 1px solid #FDE68A; border-radius: var(--radius-md); padding: 14px 18px; display: flex; align-items: flex-start; gap: 12px; font-size: 13px; color: #92400E;">
          <span style="font-size: 20px;">ℹ️</span>
          <div>
            <strong>Aviso de Transparência Oficial:</strong> A organizadora do próximo concurso geral da Saneago ainda aguarda publicação de despacho oficial de contratação. As análises abaixo baseiam-se no <strong>Centro de Seleção da UFG (CS-UFG)</strong>, responsável pelo último concurso público da SANEAGO, e em bancas de perfil compatível para treino.
          </div>
        </div>

        <!-- SELETOR DE BANCAS -->
        <div style="display: flex; gap: 10px; border-bottom: 1px solid var(--border); padding-bottom: 6px;">
          ${BANCAS_DATA.map(b => {
            const isActive = b.id === selectedBancaId;
            return `
              <button class="btn btn-banca-tab" data-id="${b.id}" style="padding: 10px 18px; border-radius: var(--radius-md) var(--radius-md) 0 0; background: ${isActive ? "var(--bg-surface)" : "transparent"}; color: ${isActive ? "var(--primary)" : "var(--text-secondary)"}; font-weight: ${isActive ? "700" : "500"}; border: 1px solid ${isActive ? "var(--border)" : "transparent"}; border-bottom: ${isActive ? "2px solid var(--primary)" : "none"};">
                ${b.name}
              </button>
            `;
          }).join("")}
        </div>

        <!-- CONTEÚDO DA BANCA SELECIONADA -->
        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 24px;">

          <!-- COLUNA PRINCIPAL: PERFIL, CARACTERÍSTICAS E ESTRATÉGIAS -->
          <div style="display: flex; flex-direction: column; gap: 20px;">

            <!-- VISÃO GERAL -->
            <div class="card">
              <div class="card-header">
                <div>
                  <span class="badge ${currentBanca.isHistoricalReference ? "badge-success" : "badge-gray"}">
                    ${currentBanca.isHistoricalReference ? "Banca do Último Concurso SANEAGO" : "Banca de Referência Comparativa"}
                  </span>
                  <h3 class="card-title" style="margin-top: 4px;">${currentBanca.name}</h3>
                </div>

                <a href="${currentBanca.officialPortalUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                  Portal Oficial ↗
                </a>
              </div>
              <div class="card-body">
                <p style="font-size: 14px; color: var(--text-secondary); line-height: 1.6; margin-bottom: 16px;">
                  ${currentBanca.overview}
                </p>

                <h4 style="font-size: 14px; font-weight: 700; color: var(--text-primary); margin-bottom: 10px;">Como cada disciplina é cobrada nas provas:</h4>
                <div style="display: flex; flex-direction: column; gap: 10px;">
                  ${currentBanca.characteristics.map(c => `
                    <div style="background: var(--bg-page); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 12px 14px;">
                      <div style="font-size: 13px; font-weight: 700; color: var(--primary); margin-bottom: 2px;">${c.aspect}</div>
                      <div style="font-size: 13px; color: var(--text-secondary); line-height: 1.5;">${c.detail}</div>
                    </div>
                  `).join("")}
                </div>
              </div>
            </div>

            <!-- ESTRATÉGIAS DE RESOLUÇÃO -->
            <div class="card">
              <div class="card-header">
                <div class="card-title">💡 Estratégias Recomendadas para esta Banca</div>
              </div>
              <div class="card-body">
                <div style="display: flex; flex-direction: column; gap: 10px;">
                  ${currentBanca.tactics.map(t => `
                    <div style="display: flex; align-items: flex-start; gap: 10px; font-size: 13.5px; color: var(--text-secondary);">
                      <span style="color: var(--success); font-weight: 700; font-size: 16px;">✓</span>
                      <span>${t}</span>
                    </div>
                  `).join("")}
                </div>
              </div>
            </div>

          </div>

          <!-- COLUNA LATERAL: DESEMPENHO PESSOAL E PROVAS ANTERIORES -->
          <div style="display: flex; flex-direction: column; gap: 20px;">

            <!-- DESEMPENHO REAL DO USUÁRIO NESTA BANCA -->
            <div class="card">
              <div class="card-header">
                <div class="card-title">🎯 Seu Desempenho Real nesta Banca</div>
              </div>
              <div class="card-body" style="text-align: center;">
                <div style="font-family: var(--font-heading); font-size: 38px; font-weight: 700; color: ${userAccuracy !== null && userAccuracy >= 70 ? "var(--success)" : "var(--primary)"};">
                  ${userAccuracy !== null ? `${userAccuracy}%` : "—"}
                </div>
                <div style="font-size: 13px; color: var(--text-muted); margin-top: 4px;">
                  ${userBancaAttempts.length > 0 ? `${userCorrect} acertos em ${userBancaAttempts.length} questões resolvidas` : "Nenhuma questão desta banca respondida ainda"}
                </div>

                <button id="btn-practice-banca-q" class="btn btn-primary btn-sm" style="width: 100%; margin-top: 16px;">
                  Treinar Questões desta Banca
                </button>
              </div>
            </div>

            <!-- ACERVO DE PROVAS ANTERIORES -->
            <div class="card">
              <div class="card-header">
                <div class="card-title">📁 Provas Anteriores Catalogadas</div>
              </div>
              <div class="card-body" style="padding: 14px;">
                <div style="display: flex; flex-direction: column; gap: 10px;">
                  ${currentBanca.pastExams.map(pe => `
                    <div style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 12px; background: var(--bg-surface);">
                      <div style="font-weight: 700; font-size: 13.5px; margin-bottom: 2px;">${pe.title}</div>
                      <div style="font-size: 11.5px; color: var(--text-muted); margin-bottom: 8px;">Cargos: ${pe.roles}</div>
                      <a href="${pe.officialLink}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" style="font-size: 11.5px; width: 100%; justify-content: center;">
                        Baixar Prova e Gabarito Oficial ↗
                      </a>
                    </div>
                  `).join("")}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    `;

    attachBancaEvents();
  }

  function attachBancaEvents() {
    container.querySelectorAll(".btn-banca-tab").forEach(tab => {
      tab.addEventListener("click", () => {
        selectedBancaId = tab.getAttribute("data-id");
        render();
      });
    });

    container.querySelector("#btn-practice-banca-q")?.addEventListener("click", () => {
      navigateTo("questions");
    });
  }

  render();
}

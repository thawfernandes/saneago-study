// ==============================================================================
// SANEAGO STUDY - SISTEMA DE REVISÕES PROGRAMADAS (REPETIÇÃO ESPAÇADA)
// Ciclos padrão D+1, D+7 e D+30 com ajuste flexível
// ==============================================================================

import { getSpacedReviews, saveSpacedReview, updateTopic, getTopics } from "./storage.js";
import { generateUUID } from "./crypto.js";

export const DEFAULT_REVIEW_INTERVALS = [1, 7, 30]; // D+1, D+7, D+30 dias

export const ERROR_REASONS = [
  { id: "nao_conhecia", label: "Não conhecia o conteúdo", icon: "help-circle" },
  { id: "esqueci", label: "Esqueci o conteúdo", icon: "clock" },
  { id: "interpretei_errado", label: "Interpretei errado o enunciado", icon: "alert-triangle" },
  { id: "desatencao", label: "Errei por pura desatenção", icon: "eye-off" },
  { id: "confundi_conceitos", label: "Confundi conceitos semelhantes", icon: "shuffle" },
  { id: "calculo_incorreto", label: "Fiz um cálculo incorreto", icon: "hash" },
  { id: "outro", label: "Outro motivo", icon: "more-horizontal" }
];

/**
 * Agenda a próxima revisão espaçada para um assunto
 */
export function scheduleReviewForTopic(topicId, subjectId, baseDate = new Date(), currentStage = 0) {
  const nextStage = currentStage + 1;
  const intervalDays = DEFAULT_REVIEW_INTERVALS[currentStage] || 30;

  const dueDate = new Date(baseDate);
  dueDate.setDate(dueDate.getDate() + intervalDays);
  const dueDateStr = dueDate.toISOString().slice(0, 10);

  const review = {
    id: `rev_${generateUUID().slice(0, 8)}`,
    topicId,
    subjectId,
    reviewStage: nextStage,
    dueDate: dueDateStr,
    status: "pendente",
    completedAt: null
  };

  saveSpacedReview(review);

  // Atualiza data da próxima revisão no próprio tópico
  updateTopic(topicId, { nextReviewAt: dueDate.toISOString() });

  return review;
}

/**
 * Processa a conclusão de uma revisão
 */
export function completeReview(reviewId, statusResult = "realizada") {
  const reviews = getSpacedReviews();
  const review = reviews.find(r => r.id === reviewId);
  if (!review) return null;

  review.status = statusResult;
  review.completedAt = new Date().toISOString();
  saveSpacedReview(review);

  if (statusResult === "realizada") {
    // Agenda o próximo estágio se houver (ex.: se concluiu D+1, agenda D+7; se D+7, agenda D+30)
    if (review.reviewStage < DEFAULT_REVIEW_INTERVALS.length) {
      scheduleReviewForTopic(review.topicId, review.subjectId, new Date(), review.reviewStage);
    }
  } else if (statusResult === "preciso_estudar_novamente") {
    // Reinicia o ciclo para D+1 para consolidar
    scheduleReviewForTopic(review.topicId, review.subjectId, new Date(), 0);
  }

  return review;
}

/**
 * Classifica as revisões em Hoje, Atrasadas, Futuras e Concluídas
 */
export function getCategorizedReviews() {
  const all = getSpacedReviews();
  const todayStr = new Date().toISOString().slice(0, 10);

  const dueToday = [];
  const overdue = [];
  const upcoming = [];
  const completed = [];

  all.forEach(r => {
    if (r.status === "realizada" || r.status === "preciso_estudar_novamente") {
      completed.push(r);
    } else if (r.dueDate < todayStr) {
      overdue.push(r);
    } else if (r.dueDate === todayStr) {
      dueToday.push(r);
    } else {
      upcoming.push(r);
    }
  });

  return { dueToday, overdue, upcoming, completed };
}

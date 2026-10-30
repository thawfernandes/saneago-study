// ==============================================================================
// SANEAGO STUDY - MOTOR DE ADAPTAÇÃO DO CRONOGRAMA E ANÁLISE DE DIFICULDADES
// Algoritmo puramente baseado em regras e cálculos transparentes (Sem IA paga)
// O sistema sugere mudanças com justificativas claras; o estudante decide aplicar.
// ==============================================================================

import { getTopics, getQuestionAttempts, getTasks, saveTask, getUserGoals, getSubjects } from "./storage.js";

/**
 * Analisa o histórico real do usuário e gera sugestões adaptativas
 */
export function generateAdaptiveSuggestions() {
  const topics = getTopics();
  const attempts = getQuestionAttempts();
  const tasks = getTasks();
  const goals = getUserGoals();
  const subjects = getSubjects();

  const subjMap = new Map(subjects.map(s => [s.id, s.name]));
  const todayStr = new Date().toISOString().slice(0, 10);
  const suggestions = [];

  // Agrupa tentativas por tópico
  const topicStats = new Map();
  attempts.forEach(att => {
    // Tenta obter o topicId direto ou deduzido
    const topId = att.topicId;
    if (!topId) return;

    if (!topicStats.has(topId)) {
      topicStats.set(topId, { total: 0, correct: 0 });
    }
    const stat = topicStats.get(topId);
    stat.total += 1;
    if (att.isCorrect) stat.correct += 1;
  });

  // 1. ANÁLISE DE BAIXO DESEMPENHO EM QUESTÕES (< 60% de acertos com pelo menos 3 questões)
  topics.forEach(topic => {
    const stat = topicStats.get(topic.id);
    if (stat && stat.total >= 3) {
      const accuracy = Math.round((stat.correct / stat.total) * 100);
      if (accuracy < 60) {
        const subjectName = subjMap.get(topic.subjectId) || "Matéria";
        suggestions.push({
          id: `sug_low_acc_${topic.id}`,
          topicId: topic.id,
          type: "low_accuracy",
          priority: "alta",
          title: `Reforço em ${topic.name}`,
          subjectName,
          reason: `Você resolveu ${stat.total} questões sobre este assunto e obteve ${accuracy}% de aproveitamento (abaixo de 60%).`,
          suggestedAction: `Agendar uma sessão de revisão de 25 minutos e criar uma tarefa focada na resolução comentada de questões.`,
          actionData: {
            taskTitle: `Revisão e Questões: ${topic.name}`,
            subjectId: topic.subjectId,
            topicId: topic.id,
            durationMinutes: 25,
            priority: "alta"
          }
        });
      }
    }
  });

  // 2. DISCREPÂNCIA ENTRE AUTOAVALIAÇÃO E DESEMPENHO REAL
  topics.forEach(topic => {
    const stat = topicStats.get(topic.id);
    if (stat && stat.total >= 3) {
      const accuracy = Math.round((stat.correct / stat.total) * 100);
      if (topic.difficulty === "facil" && accuracy <= 50) {
        suggestions.push({
          id: `sug_diff_mismatch_${topic.id}`,
          topicId: topic.id,
          type: "difficulty_mismatch",
          priority: "media",
          title: `Alerta de Percepção: ${topic.name}`,
          subjectName: subjMap.get(topic.subjectId) || "Matéria",
          reason: `Você classificou este assunto como "Fácil", mas seu índice de acertos foi de apenas ${accuracy}%. Pode haver pegadinhas ou conceitos despercebidos.`,
          suggestedAction: `Reclassificar a dificuldade para "Médio" ou "Difícil" para que o cronograma dê a devida prioridade.`,
          actionData: {
            topicId: topic.id,
            newDifficulty: "medio"
          }
        });
      }
    }
  });

  // 3. TAREFAS ATRASADAS / DIAS PERDIDOS
  const overdueTasks = tasks.filter(t => t.scheduledDate < todayStr && t.status === "pendente");
  if (overdueTasks.length > 0) {
    suggestions.push({
      id: `sug_overdue_redistribute`,
      type: "missed_tasks",
      priority: "alta",
      title: `Redistribuição de ${overdueTasks.length} Tarefas Pendentes`,
      subjectName: "Planejamento Geral",
      reason: `Existem ${overdueTasks.length} tarefa(s) programada(s) para datas passadas que não foram concluídas. Em vez de acumular tudo hoje, podemos distribuí-las suavemente pelos seus próximos dias de estudo.`,
      suggestedAction: `Redistribuir automaticamente as tarefas atrasadas entre os dias úteis disponíveis, respeitando sua meta diária de ${goals.dailyStudyMinutes} min/dia.`,
      actionData: {
        overdueTaskIds: overdueTasks.map(t => t.id)
      }
    });
  }

  // 4. ASSUNTOS CONCLUÍDOS COM ALTO DESEMPENHO (> 85% de acertos)
  topics.forEach(topic => {
    const stat = topicStats.get(topic.id);
    if (stat && stat.total >= 5) {
      const accuracy = Math.round((stat.correct / stat.total) * 100);
      if (accuracy >= 85 && topic.status !== "concluido") {
        suggestions.push({
          id: `sug_mastery_${topic.id}`,
          topicId: topic.id,
          type: "mastery_promotion",
          priority: "baixa",
          title: `Domínio Consolidado: ${topic.name}`,
          subjectName: subjMap.get(topic.subjectId) || "Matéria",
          reason: `Excelente desempenho! Você acertou ${accuracy}% das ${stat.total} questões feitas deste assunto.`,
          suggestedAction: `Marcar este assunto como Concluído e programar revisões espaçadas a cada 30 dias para manutenção.`,
          actionData: {
            topicId: topic.id,
            newStatus: "concluido",
            masteryLevel: 5
          }
        });
      }
    }
  });

  return suggestions;
}

/**
 * Redistribui tarefas atrasadas pelos próximos dias disponíveis
 * sem sobrecarregar nenhum dia além do limite diário do usuário.
 */
export function redistributeMissedTasks(overdueTaskIds) {
  const allTasks = getTasks();
  const goals = getUserGoals();
  const availableDaysMap = new Set(goals.restDays ? ["seg","ter","qua","qui","sex","sab"].filter(d => !goals.restDays.includes(d)) : ["seg","ter","qua","qui","sex"]);

  const daysAbbr = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];
  const maxMinutesPerDay = goals.dailyStudyMinutes || 120;

  // Mapa de carga já planejada para os próximos 14 dias
  const futureScheduleLoad = new Map();
  const now = new Date();

  for (let i = 0; i <= 14; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    const dateStr = d.toISOString().slice(0, 10);
    const dayOfWeek = daysAbbr[d.getDay()];

    const isAvailable = availableDaysMap.has(dayOfWeek);
    const existingMinutes = allTasks
      .filter(t => t.scheduledDate === dateStr && t.status !== "nao_realizada")
      .reduce((acc, t) => acc + (t.estimatedMinutes || 45), 0);

    futureScheduleLoad.set(dateStr, {
      dateStr,
      isAvailable,
      minutesScheduled: existingMinutes
    });
  }

  // Redistribui as tarefas
  const tasksToMove = allTasks.filter(t => overdueTaskIds.includes(t.id));
  const moved = [];

  tasksToMove.forEach(task => {
    const taskMinutes = task.estimatedMinutes || 45;
    let targetDate = null;

    for (let [dateStr, info] of futureScheduleLoad.entries()) {
      if (!info.isAvailable) continue; // Pula dias de descanso
      if (info.minutesScheduled + taskMinutes <= maxMinutesPerDay) {
        targetDate = dateStr;
        info.minutesScheduled += taskMinutes;
        break;
      }
    }

    // Se todos os dias estiverem cheios, aloca no dia disponível com menor carga
    if (!targetDate) {
      let minLoad = Infinity;
      for (let [dateStr, info] of futureScheduleLoad.entries()) {
        if (!info.isAvailable) continue;
        if (info.minutesScheduled < minLoad) {
          minLoad = info.minutesScheduled;
          targetDate = dateStr;
        }
      }
    }

    if (targetDate) {
      task.scheduledDate = targetDate;
      task.notes = (task.notes ? task.notes + " | " : "") + `Redistribuído em ${new Date().toLocaleDateString("pt-BR")}`;
      saveTask(task);
      moved.push(task);
    }
  });

  return moved;
}

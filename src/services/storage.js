// ==============================================================================
// SANEAGO STUDY - SERVIÇO DE PERSISTÊNCIA LOCAL E REATIVIDADE
// Armazena dados localmente com sincronização transparente e exportação/importação
// ==============================================================================

import { DEFAULT_SUBJECTS } from "../data/defaultSubjects.js";
import { DEFAULT_MATERIALS } from "../data/defaultMaterials.js";
import { SANEAGO_ROLES } from "../data/saneagoRoles.js";
import { generateUUID } from "./crypto.js";

const STORAGE_KEYS = {
  PROFILE: "saneago_profile",
  SUBJECTS: "saneago_subjects",
  TOPICS: "saneago_topics",
  SELECTED_ROLES: "saneago_selected_roles",
  CUSTOM_ROLES: "saneago_custom_roles",
  TASKS: "saneago_tasks",
  SESSIONS: "saneago_sessions",
  ACTIVE_TIMER: "saneago_active_timer",
  MATERIALS: "saneago_materials",
  NOTES: "saneago_notes",
  CUSTOM_QUESTIONS: "saneago_custom_questions",
  ATTEMPTS: "saneago_attempts",
  MOCK_EXAMS: "saneago_mock_exams",
  MOCK_RESULTS: "saneago_mock_results",
  SPACED_REVIEWS: "saneago_spaced_reviews",
  ERROR_NOTEBOOK: "saneago_error_notebook",
  GOALS: "saneago_goals",
  SUPABASE_CONFIG: "saneago_supabase_config",
  PENDING_SYNC: "saneago_pending_sync"
};

// Sistema de eventos para atualização reativa da interface
const listeners = new Set();

export function subscribeToState(callback) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function notifyStateChanged(eventName, data) {
  listeners.forEach(cb => {
    try {
      cb(eventName, data);
    } catch (e) {
      console.error("Erro no ouvinte de estado:", e);
    }
  });
}

function getStoredJSON(key, defaultValue = null) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : defaultValue;
  } catch (e) {
    console.error(`Erro ao ler ${key} do localStorage:`, e);
    return defaultValue;
  }
}

function setStoredJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    markPendingSync();
  } catch (e) {
    console.error(`Erro ao salvar ${key} no localStorage:`, e);
  }
}

function markPendingSync() {
  localStorage.setItem(STORAGE_KEYS.PENDING_SYNC, "true");
}

export function hasPendingSync() {
  return localStorage.getItem(STORAGE_KEYS.PENDING_SYNC) === "true";
}

export function clearPendingSync() {
  localStorage.removeItem(STORAGE_KEYS.PENDING_SYNC);
}

// ------------------------------------------------------------------------------
// PERFIL
// ------------------------------------------------------------------------------
export function getProfile() {
  return getStoredJSON(STORAGE_KEYS.PROFILE, null);
}

export function saveProfile(profile) {
  setStoredJSON(STORAGE_KEYS.PROFILE, profile);
  notifyStateChanged("profile", profile);
}

// ------------------------------------------------------------------------------
// MATÉRIAS E TÓPICOS
// ------------------------------------------------------------------------------
export function getSubjects() {
  let list = getStoredJSON(STORAGE_KEYS.SUBJECTS, null);
  if (!list) {
    // Inicializa com as matérias padrão
    list = DEFAULT_SUBJECTS.map(s => ({
      id: s.id,
      name: s.name,
      color: s.color,
      description: s.description,
      orderIndex: s.orderIndex
    }));
    setStoredJSON(STORAGE_KEYS.SUBJECTS, list);
  }
  return list;
}

export function saveSubject(subject) {
  const subjects = getSubjects();
  const index = subjects.findIndex(s => s.id === subject.id);
  if (index >= 0) {
    subjects[index] = { ...subjects[index], ...subject };
  } else {
    subjects.push(subject);
  }
  setStoredJSON(STORAGE_KEYS.SUBJECTS, subjects);
  notifyStateChanged("subjects", subjects);
}

export function getTopics() {
  let list = getStoredJSON(STORAGE_KEYS.TOPICS, null);
  if (!list) {
    // Inicializa a partir das matérias padrão
    list = [];
    DEFAULT_SUBJECTS.forEach(s => {
      s.topics.forEach(t => {
        list.push({
          id: t.id,
          subjectId: s.id,
          name: t.name,
          description: t.description,
          orderIndex: t.orderIndex,
          difficulty: t.difficulty,
          masteryLevel: t.masteryLevel,
          status: t.status,
          trackStage: t.trackStage,
          roleIds: t.roleIds || [],
          totalStudiedSeconds: 0,
          lastStudiedAt: null,
          nextReviewAt: null,
          notes: ""
        });
      });
    });
    setStoredJSON(STORAGE_KEYS.TOPICS, list);
  }
  return list;
}

export function updateTopic(topicId, partialData) {
  const topics = getTopics();
  const idx = topics.findIndex(t => t.id === topicId);
  if (idx >= 0) {
    topics[idx] = { ...topics[idx], ...partialData };
    setStoredJSON(STORAGE_KEYS.TOPICS, topics);
    notifyStateChanged("topics", topics);
    return topics[idx];
  }
  return null;
}

export function saveTopic(topic) {
  const topics = getTopics();
  const idx = topics.findIndex(t => t.id === topic.id);
  if (idx >= 0) {
    topics[idx] = { ...topics[idx], ...topic };
  } else {
    topics.push(topic);
  }
  setStoredJSON(STORAGE_KEYS.TOPICS, topics);
  notifyStateChanged("topics", topics);
}

// ------------------------------------------------------------------------------
// CARGOS DA SANEAGO
// ------------------------------------------------------------------------------
export function getRolesCatalog() {
  const custom = getCustomRoles();
  return [...SANEAGO_ROLES, ...custom];
}

export function getCustomRoles() {
  return getStoredJSON(STORAGE_KEYS.CUSTOM_ROLES, []);
}

export function saveCustomRole(role) {
  const custom = getCustomRoles();
  const idx = custom.findIndex(r => r.id === role.id);
  if (idx >= 0) {
    custom[idx] = role;
  } else {
    custom.push(role);
  }
  setStoredJSON(STORAGE_KEYS.CUSTOM_ROLES, custom);
  notifyStateChanged("roles", getRolesCatalog());
}

export function getSelectedRoleIds() {
  return getStoredJSON(STORAGE_KEYS.SELECTED_ROLES, ["agente_saneamento"]);
}

export function saveSelectedRoleIds(roleIds) {
  setStoredJSON(STORAGE_KEYS.SELECTED_ROLES, roleIds);
  notifyStateChanged("selected_roles", roleIds);
}

// ------------------------------------------------------------------------------
// TAREFAS DO CRONOGRAMA
// ------------------------------------------------------------------------------
export function getTasks() {
  return getStoredJSON(STORAGE_KEYS.TASKS, []);
}

export function saveTask(task) {
  const tasks = getTasks();
  if (!task.id) task.id = `tsk_${generateUUID().slice(0, 8)}`;
  task.updatedAt = new Date().toISOString();

  const idx = tasks.findIndex(t => t.id === task.id);
  if (idx >= 0) {
    tasks[idx] = { ...tasks[idx], ...task };
  } else {
    tasks.push(task);
  }
  setStoredJSON(STORAGE_KEYS.TASKS, tasks);
  notifyStateChanged("tasks", tasks);
  return task;
}

export function deleteTask(taskId) {
  let tasks = getTasks();
  tasks = tasks.filter(t => t.id !== taskId);
  setStoredJSON(STORAGE_KEYS.TASKS, tasks);
  notifyStateChanged("tasks", tasks);
}

// ------------------------------------------------------------------------------
// SESSÕES DE ESTUDO (CRONÔMETRO)
// ------------------------------------------------------------------------------
export function getSessions() {
  return getStoredJSON(STORAGE_KEYS.SESSIONS, []);
}

export function saveSession(session) {
  const sessions = getSessions();
  if (!session.id) session.id = `ses_${generateUUID().slice(0, 8)}`;
  sessions.unshift(session);
  setStoredJSON(STORAGE_KEYS.SESSIONS, sessions);

  // Atualiza tempo estudado no tópico
  if (session.topicId && session.durationSeconds > 0) {
    const topic = getTopics().find(t => t.id === session.topicId);
    if (topic) {
      updateTopic(session.topicId, {
        totalStudiedSeconds: (topic.totalStudiedSeconds || 0) + session.durationSeconds,
        lastStudiedAt: session.endedAt,
        status: topic.status === "nao_iniciado" ? "em_andamento" : topic.status
      });
    }
  }

  notifyStateChanged("sessions", sessions);
  return session;
}

export function deleteSession(sessionId) {
  let sessions = getSessions();
  sessions = sessions.filter(s => s.id !== sessionId);
  setStoredJSON(STORAGE_KEYS.SESSIONS, sessions);
  notifyStateChanged("sessions", sessions);
}

// ------------------------------------------------------------------------------
// ESTADO DO CRONÔMETRO ATIVO (Resiliente a recarregamento da página)
// ------------------------------------------------------------------------------
export function getActiveTimerState() {
  return getStoredJSON(STORAGE_KEYS.ACTIVE_TIMER, null);
}

export function saveActiveTimerState(timerState) {
  if (!timerState) {
    localStorage.removeItem(STORAGE_KEYS.ACTIVE_TIMER);
  } else {
    localStorage.setItem(STORAGE_KEYS.ACTIVE_TIMER, JSON.stringify(timerState));
  }
}

// ------------------------------------------------------------------------------
// MATERIAIS DE ESTUDO
// ------------------------------------------------------------------------------
export function getMaterials() {
  let list = getStoredJSON(STORAGE_KEYS.MATERIALS, null);
  if (!list) {
    list = [...DEFAULT_MATERIALS];
    setStoredJSON(STORAGE_KEYS.MATERIALS, list);
  }
  return list;
}

export function saveMaterial(material) {
  const list = getMaterials();
  if (!material.id) material.id = `mat_${generateUUID().slice(0, 8)}`;
  material.updatedAt = new Date().toISOString();

  const idx = list.findIndex(m => m.id === material.id);
  if (idx >= 0) {
    list[idx] = { ...list[idx], ...material };
  } else {
    list.unshift(material);
  }
  setStoredJSON(STORAGE_KEYS.MATERIALS, list);
  notifyStateChanged("materials", list);
  return material;
}

export function deleteMaterial(materialId) {
  let list = getMaterials();
  list = list.filter(m => m.id !== materialId);
  setStoredJSON(STORAGE_KEYS.MATERIALS, list);
  notifyStateChanged("materials", list);
}

// ------------------------------------------------------------------------------
// RESUMOS E ANOTAÇÕES
// ------------------------------------------------------------------------------
export function getNotes() {
  return getStoredJSON(STORAGE_KEYS.NOTES, []);
}

export function saveNote(note) {
  const list = getNotes();
  const now = new Date().toISOString();
  if (!note.id) {
    note.id = `not_${generateUUID().slice(0, 8)}`;
    note.createdAt = now;
  }
  note.updatedAt = now;

  const idx = list.findIndex(n => n.id === note.id);
  if (idx >= 0) {
    list[idx] = { ...list[idx], ...note };
  } else {
    list.unshift(note);
  }
  setStoredJSON(STORAGE_KEYS.NOTES, list);
  notifyStateChanged("notes", list);
  return note;
}

export function deleteNote(noteId) {
  let list = getNotes();
  list = list.filter(n => n.id !== noteId);
  setStoredJSON(STORAGE_KEYS.NOTES, list);
  notifyStateChanged("notes", list);
}

// ------------------------------------------------------------------------------
// QUESTÕES E TENTATIVAS
// ------------------------------------------------------------------------------
export function getCustomQuestions() {
  return getStoredJSON(STORAGE_KEYS.CUSTOM_QUESTIONS, []);
}

export function saveCustomQuestion(q) {
  const list = getCustomQuestions();
  if (!q.id) q.id = `cq_${generateUUID().slice(0, 8)}`;
  q.createdAt = new Date().toISOString();
  list.unshift(q);
  setStoredJSON(STORAGE_KEYS.CUSTOM_QUESTIONS, list);
  notifyStateChanged("custom_questions", list);
  return q;
}

export function getQuestionAttempts() {
  return getStoredJSON(STORAGE_KEYS.ATTEMPTS, []);
}

export function recordQuestionAttempt(attempt) {
  const attempts = getQuestionAttempts();
  if (!attempt.id) attempt.id = `att_${generateUUID().slice(0, 8)}`;
  attempt.createdAt = new Date().toISOString();
  attempts.unshift(attempt);
  setStoredJSON(STORAGE_KEYS.ATTEMPTS, attempts);
  notifyStateChanged("attempts", attempts);
  return attempt;
}

// ------------------------------------------------------------------------------
// SIMULADOS
// ------------------------------------------------------------------------------
export function getMockExams() {
  return getStoredJSON(STORAGE_KEYS.MOCK_EXAMS, []);
}

export function getMockExamResults() {
  return getStoredJSON(STORAGE_KEYS.MOCK_RESULTS, []);
}

export function saveMockExamResult(result) {
  const results = getMockExamResults();
  if (!result.id) result.id = `mkr_${generateUUID().slice(0, 8)}`;
  result.completedAt = new Date().toISOString();
  results.unshift(result);
  setStoredJSON(STORAGE_KEYS.MOCK_RESULTS, results);
  notifyStateChanged("mock_results", results);
  return result;
}

// ------------------------------------------------------------------------------
// REVISÕES ESPAÇADAS
// ------------------------------------------------------------------------------
export function getSpacedReviews() {
  return getStoredJSON(STORAGE_KEYS.SPACED_REVIEWS, []);
}

export function saveSpacedReview(review) {
  const reviews = getSpacedReviews();
  if (!review.id) review.id = `rev_${generateUUID().slice(0, 8)}`;
  const idx = reviews.findIndex(r => r.id === review.id);
  if (idx >= 0) {
    reviews[idx] = { ...reviews[idx], ...review };
  } else {
    reviews.push(review);
  }
  setStoredJSON(STORAGE_KEYS.SPACED_REVIEWS, reviews);
  notifyStateChanged("spaced_reviews", reviews);
  return review;
}

// ------------------------------------------------------------------------------
// CADERNO DE ERROS
// ------------------------------------------------------------------------------
export function getErrorNotebook() {
  return getStoredJSON(STORAGE_KEYS.ERROR_NOTEBOOK, []);
}

export function addErrorNotebookEntry(entry) {
  const list = getErrorNotebook();
  if (!entry.id) entry.id = `err_${generateUUID().slice(0, 8)}`;
  entry.createdAt = new Date().toISOString();
  entry.status = entry.status || "pendente";
  list.unshift(entry);
  setStoredJSON(STORAGE_KEYS.ERROR_NOTEBOOK, list);
  notifyStateChanged("error_notebook", list);
  return entry;
}

export function updateErrorNotebookEntry(id, partial) {
  const list = getErrorNotebook();
  const idx = list.findIndex(e => e.id === id);
  if (idx >= 0) {
    list[idx] = { ...list[idx], ...partial, updatedAt: new Date().toISOString() };
    setStoredJSON(STORAGE_KEYS.ERROR_NOTEBOOK, list);
    notifyStateChanged("error_notebook", list);
    return list[idx];
  }
  return null;
}

// ------------------------------------------------------------------------------
// METAS E CONFIGURAÇÕES
// ------------------------------------------------------------------------------
export function getUserGoals() {
  return getStoredJSON(STORAGE_KEYS.GOALS, {
    dailyStudyMinutes: 120,
    weeklyStudyMinutes: 600,
    dailyQuestionsCount: 15,
    weeklyReviewsCount: 5,
    restDays: ["dom"],
    targetExamDate: null
  });
}

export function saveUserGoals(goals) {
  setStoredJSON(STORAGE_KEYS.GOALS, goals);
  notifyStateChanged("goals", goals);
}

export function getSupabaseConfig() {
  return getStoredJSON(STORAGE_KEYS.SUPABASE_CONFIG, {
    url: "",
    anonKey: "",
    isConfigured: false,
    lastSyncTime: null
  });
}

export function saveSupabaseConfig(config) {
  setStoredJSON(STORAGE_KEYS.SUPABASE_CONFIG, config);
  notifyStateChanged("supabase_config", config);
}

// ------------------------------------------------------------------------------
// BACKUP COMPLETO: EXPORTAÇÃO E IMPORTAÇÃO JSON
// ------------------------------------------------------------------------------
export function exportAllDataJSON() {
  return {
    version: "1.0",
    appName: "Saneago Study",
    exportedAt: new Date().toISOString(),
    profile: getProfile(),
    goals: getUserGoals(),
    selectedRoles: getSelectedRoleIds(),
    customRoles: getCustomRoles(),
    subjects: getSubjects(),
    topics: getTopics(),
    tasks: getTasks(),
    sessions: getSessions(),
    materials: getMaterials(),
    notes: getNotes(),
    customQuestions: getCustomQuestions(),
    attempts: getQuestionAttempts(),
    mockResults: getMockExamResults(),
    spacedReviews: getSpacedReviews(),
    errorNotebook: getErrorNotebook()
  };
}

export function validateBackupData(data) {
  if (!data || typeof data !== "object") {
    return { valid: false, error: "Arquivo JSON inválido ou vazio." };
  }
  if (!data.profile && !data.subjects && !data.tasks) {
    return { valid: false, error: "Estrutura do backup não reconhecida como dados do Saneago Study." };
  }
  return {
    valid: true,
    summary: {
      profileName: data.profile?.name || "Desconhecido",
      tasksCount: data.tasks?.length || 0,
      sessionsCount: data.sessions?.length || 0,
      notesCount: data.notes?.length || 0,
      errorsCount: data.errorNotebook?.length || 0
    }
  };
}

export function importDataJSON(data, mode = "replace") {
  const check = validateBackupData(data);
  if (!check.valid) throw new Error(check.error);

  if (mode === "replace") {
    if (data.profile) setStoredJSON(STORAGE_KEYS.PROFILE, data.profile);
    if (data.goals) setStoredJSON(STORAGE_KEYS.GOALS, data.goals);
    if (data.selectedRoles) setStoredJSON(STORAGE_KEYS.SELECTED_ROLES, data.selectedRoles);
    if (data.customRoles) setStoredJSON(STORAGE_KEYS.CUSTOM_ROLES, data.customRoles);
    if (data.subjects) setStoredJSON(STORAGE_KEYS.SUBJECTS, data.subjects);
    if (data.topics) setStoredJSON(STORAGE_KEYS.TOPICS, data.topics);
    if (data.tasks) setStoredJSON(STORAGE_KEYS.TASKS, data.tasks);
    if (data.sessions) setStoredJSON(STORAGE_KEYS.SESSIONS, data.sessions);
    if (data.materials) setStoredJSON(STORAGE_KEYS.MATERIALS, data.materials);
    if (data.notes) setStoredJSON(STORAGE_KEYS.NOTES, data.notes);
    if (data.customQuestions) setStoredJSON(STORAGE_KEYS.CUSTOM_QUESTIONS, data.customQuestions);
    if (data.attempts) setStoredJSON(STORAGE_KEYS.ATTEMPTS, data.attempts);
    if (data.mockResults) setStoredJSON(STORAGE_KEYS.MOCK_RESULTS, data.mockResults);
    if (data.spacedReviews) setStoredJSON(STORAGE_KEYS.SPACED_REVIEWS, data.spacedReviews);
    if (data.errorNotebook) setStoredJSON(STORAGE_KEYS.ERROR_NOTEBOOK, data.errorNotebook);
  } else {
    // Mode 'merge': combina itens sem duplicar IDs
    const mergeLists = (key, incomingList) => {
      if (!Array.isArray(incomingList)) return;
      const existing = getStoredJSON(key, []);
      const map = new Map(existing.map(item => [item.id, item]));
      incomingList.forEach(item => {
        if (item.id) map.set(item.id, item);
      });
      setStoredJSON(key, Array.from(map.values()));
    };

    if (data.tasks) mergeLists(STORAGE_KEYS.TASKS, data.tasks);
    if (data.sessions) mergeLists(STORAGE_KEYS.SESSIONS, data.sessions);
    if (data.materials) mergeLists(STORAGE_KEYS.MATERIALS, data.materials);
    if (data.notes) mergeLists(STORAGE_KEYS.NOTES, data.notes);
    if (data.customQuestions) mergeLists(STORAGE_KEYS.CUSTOM_QUESTIONS, data.customQuestions);
    if (data.attempts) mergeLists(STORAGE_KEYS.ATTEMPTS, data.attempts);
    if (data.mockResults) mergeLists(STORAGE_KEYS.MOCK_RESULTS, data.mockResults);
    if (data.spacedReviews) mergeLists(STORAGE_KEYS.SPACED_REVIEWS, data.spacedReviews);
    if (data.errorNotebook) mergeLists(STORAGE_KEYS.ERROR_NOTEBOOK, data.errorNotebook);
  }

  notifyStateChanged("imported", mode);
  return true;
}

// ------------------------------------------------------------------------------
// EXPORTAÇÃO CSV
// ------------------------------------------------------------------------------
export function exportStudyHistoryCSV() {
  const sessions = getSessions();
  const subjects = getSubjects();
  const topics = getTopics();

  const subjMap = new Map(subjects.map(s => [s.id, s.name]));
  const topMap = new Map(topics.map(t => [t.id, t.name]));

  let csv = "ID,Data,Inicio,Termino,Duracao_Minutos,Materia,Assunto,Observacoes\n";
  sessions.forEach(s => {
    const date = s.startedAt ? s.startedAt.slice(0, 10) : "";
    const start = s.startedAt ? s.startedAt.slice(11, 19) : "";
    const end = s.endedAt ? s.endedAt.slice(11, 19) : "";
    const minutes = Math.round((s.durationSeconds || 0) / 60);
    const subject = (subjMap.get(s.subjectId) || "").replace(/"/g, '""');
    const topic = (topMap.get(s.topicId) || "").replace(/"/g, '""');
    const notes = (s.notes || "").replace(/"/g, '""').replace(/\n/g, " ");

    csv += `"${s.id}","${date}","${start}","${end}",${minutes},"${subject}","${topic}","${notes}"\n`;
  });

  return csv;
}

export function exportErrorNotebookCSV() {
  const errors = getErrorNotebook();
  const subjects = getSubjects();
  const topics = getTopics();

  const subjMap = new Map(subjects.map(s => [s.id, s.name]));
  const topMap = new Map(topics.map(t => [t.id, t.name]));

  let csv = "ID,Data,Materia,Assunto,Alternativa_Marcada,Gabarito,Motivo_Erro,Status,Anotacoes\n";
  errors.forEach(e => {
    const date = e.createdAt ? e.createdAt.slice(0, 10) : "";
    const subject = (subjMap.get(e.subjectId) || "").replace(/"/g, '""');
    const topic = (topMap.get(e.topicId) || "").replace(/"/g, '""');
    const reason = (e.errorReason || "").replace(/"/g, '""');
    const status = (e.status || "").replace(/"/g, '""');
    const notes = (e.notes || "").replace(/"/g, '""').replace(/\n/g, " ");

    csv += `"${e.id}","${date}","${subject}","${topic}","${e.chosenLetter || ""}","${e.correctLetter || ""}","${reason}","${status}","${notes}"\n`;
  });

  return csv;
}

export function clearAllLocalData() {
  Object.values(STORAGE_KEYS).forEach(k => localStorage.removeItem(k));
  notifyStateChanged("reset", null);
}

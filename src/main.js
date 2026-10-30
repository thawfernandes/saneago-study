// ==============================================================================
// SANEAGO STUDY - ORQUESTRADOR PRINCIPAL DA APLICAÇÃO WEB
// Roteamento SPA, verificação de perfil, widgets reativos e navegação
// ==============================================================================

import { getProfile, getSupabaseConfig, getActiveTimerState, subscribeToState, getTasks } from "./services/storage.js";
import { getCategorizedReviews } from "./services/spacedRepetition.js";
import { renderAuthModal } from "./components/authModal.js";

// Importação das 12 visões principais
import { renderDashboardView } from "./components/dashboardView.js";
import { renderScheduleView } from "./components/scheduleView.js";
import { renderSubjectsView } from "./components/subjectsView.js";
import { renderTimerView } from "./components/timerView.js";
import { renderQuestionsView } from "./components/questionsView.js";
import { renderReviewsView } from "./components/reviewsView.js";
import { renderMaterialsView } from "./components/materialsView.js";
import { renderRolesView } from "./components/rolesView.js";
import { renderBancaView } from "./components/bancaView.js";
import { renderPerformanceView } from "./components/performanceView.js";
import { renderGoalsView } from "./components/goalsView.js";
import { renderProfileView } from "./components/profileView.js";

// Mapa de rotas e metadados de cabeçalho
const ROUTES = {
  dashboard: {
    hash: "#inicio",
    title: "Início",
    subtitle: "Visão geral do seu progresso, revisões e tarefas do dia",
    renderer: renderDashboardView
  },
  schedule: {
    hash: "#cronograma",
    title: "Meu Cronograma",
    subtitle: "Organização semanal e mensal da sua rotina de estudos",
    renderer: renderScheduleView
  },
  subjects: {
    hash: "#materias",
    title: "Matérias e Trilhas",
    subtitle: "Disciplinas cobradas, assuntos ordenados e autoavaliação",
    renderer: renderSubjectsView
  },
  timer: {
    hash: "#sessao",
    title: "Sessão de Estudos",
    subtitle: "Cronômetro preciso com registro de pausas e notas da sessão",
    renderer: renderTimerView
  },
  questions: {
    hash: "#questoes",
    title: "Questões e Simulados",
    subtitle: "Resolução comentada de questões oficiais e provas cronometradas",
    renderer: renderQuestionsView
  },
  reviews: {
    hash: "#revisoes",
    title: "Revisões e Caderno de Erros",
    subtitle: "Repetição espaçada (D+1, D+7, D+30) e diagnóstico de falhas",
    renderer: renderReviewsView
  },
  materials: {
    hash: "#materiais",
    title: "Materiais e Resumos",
    subtitle: "Legislação compilada, videoaulas e editor pessoal de resumos",
    renderer: renderMaterialsView
  },
  roles: {
    hash: "#cargos",
    title: "Cargos da Saneago",
    subtitle: "Catálogo de requisitos, remunerações e matérias compartilhadas",
    renderer: renderRolesView
  },
  banca: {
    hash: "#banca",
    title: "Estudo da Banca",
    subtitle: "Análise do perfil da CS-UFG e histórico de provas anteriores",
    renderer: renderBancaView
  },
  performance: {
    hash: "#desempenho",
    title: "Meu Desempenho",
    subtitle: "Estatísticas 100% reais de tempo estudado e taxas de retenção",
    renderer: renderPerformanceView
  },
  goals: {
    hash: "#metas",
    title: "Metas e Hábitos",
    subtitle: "Metas sustentáveis diárias e semanais com respeito ao descanso",
    renderer: renderGoalsView
  },
  profile: {
    hash: "#perfil",
    title: "Meu Perfil e Configurações",
    subtitle: "Código de acesso pessoal, conexão Supabase e backups de dados",
    renderer: renderProfileView
  }
};

let currentRouteKey = "dashboard";
let currentViewParams = {};

function initApp() {
  const profile = getProfile();

  // Se for a primeira visita e não houver perfil criado, exibe o modal de onboarding
  if (!profile) {
    renderAuthModal((createdProfile) => {
      updateSidebarUserInfo();
      navigateTo("dashboard");
    });
  } else {
    updateSidebarUserInfo();
  }

  setupNavigation();
  updateTopbarStatus();
  updateTopbarTimerWidget();
  setupMobileDrawer();

  // Observa mudanças de estado para atualizar widgets reativos
  subscribeToState((event, data) => {
    updateSidebarUserInfo();
    updateTopbarStatus();
    updateReviewsBadge();
  });

  // Resolve rota inicial a partir do hash da URL
  handleHashChange();
  window.addEventListener("hashchange", handleHashChange);

  // Inicia checagem periódica do widget do cronômetro
  setInterval(updateTopbarTimerWidget, 1000);
  updateReviewsBadge();
}

function handleHashChange() {
  const hash = window.location.hash || "#inicio";
  const entry = Object.entries(ROUTES).find(([key, val]) => val.hash === hash);
  const routeKey = entry ? entry[0] : "dashboard";
  navigateTo(routeKey, currentViewParams, false);
}

export function navigateTo(routeKey, params = {}, updateHash = true) {
  if (!ROUTES[routeKey]) routeKey = "dashboard";
  currentRouteKey = routeKey;
  currentViewParams = params;

  const route = ROUTES[routeKey];
  if (updateHash && window.location.hash !== route.hash) {
    window.location.hash = route.hash;
    return;
  }

  // Atualiza título e subtítulo na topbar
  const titleEl = document.getElementById("topbar-page-title");
  const subtitleEl = document.getElementById("topbar-page-subtitle");
  if (titleEl) titleEl.textContent = route.title;
  if (subtitleEl) subtitleEl.textContent = route.subtitle;

  // Atualiza menu lateral ativo
  document.querySelectorAll(".nav-item").forEach(item => {
    const r = item.getAttribute("data-route");
    if (r === routeKey) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // Fecha sidebar mobile se aberta
  closeMobileSidebar();

  // Renderiza a view correspondente
  const mainContent = document.getElementById("main-content");
  if (mainContent && typeof route.renderer === "function") {
    mainContent.innerHTML = "";
    route.renderer(mainContent, navigateTo, params);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateSidebarUserInfo() {
  const profile = getProfile();
  const nameEl = document.getElementById("sidebar-user-name");
  const avatarEl = document.getElementById("user-avatar-initials");

  if (profile) {
    if (nameEl) nameEl.textContent = profile.name || "Candidato";
    if (avatarEl) {
      const initial = (profile.name || "S").trim().charAt(0).toUpperCase();
      avatarEl.textContent = initial;
    }
  } else {
    if (nameEl) nameEl.textContent = "Criar meu perfil";
    if (avatarEl) avatarEl.textContent = "+";
  }
}

function updateTopbarStatus() {
  const config = getSupabaseConfig();
  const dot = document.getElementById("topbar-sync-dot");
  const label = document.getElementById("topbar-sync-label");

  if (config && config.isConfigured) {
    if (dot) dot.classList.add("online");
    if (label) label.textContent = "Supabase Conectado";
  } else {
    if (dot) dot.classList.remove("online");
    if (label) label.textContent = "Modo Local (Offline)";
  }
}

function updateTopbarTimerWidget() {
  const timerState = getActiveTimerState();
  const widget = document.getElementById("topbar-timer-widget");
  const text = document.getElementById("topbar-timer-text");

  if (!timerState) {
    if (widget) widget.style.display = "none";
    return;
  }

  if (widget) {
    widget.style.display = "flex";
    if (!timerState.isPaused) {
      widget.classList.add("running");
    } else {
      widget.classList.remove("running");
    }
  }

  if (text) {
    let elapsedMs = timerState.accumulatedMs || 0;
    if (!timerState.isPaused) {
      elapsedMs += (Date.now() - timerState.startedAtTimestamp);
    }
    const totalSecs = Math.floor(elapsedMs / 1000);
    const m = Math.floor(totalSecs / 60);
    const s = totalSecs % 60;
    text.textContent = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }
}

function updateReviewsBadge() {
  const { dueToday, overdue } = getCategorizedReviews();
  const total = dueToday.length + overdue.length;
  const badge = document.getElementById("nav-reviews-badge");

  if (badge) {
    if (total > 0) {
      badge.textContent = String(total);
      badge.style.display = "inline-block";
    } else {
      badge.style.display = "none";
    }
  }
}

function setupNavigation() {
  document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", (e) => {
      const routeKey = item.getAttribute("data-route");
      if (routeKey) {
        navigateTo(routeKey);
      }
    });
  });

  document.getElementById("sidebar-user-card")?.addEventListener("click", () => {
    navigateTo("profile");
  });

  document.getElementById("topbar-sync-status")?.addEventListener("click", () => {
    navigateTo("profile");
  });

  document.getElementById("topbar-timer-widget")?.addEventListener("click", () => {
    navigateTo("timer");
  });
}

function setupMobileDrawer() {
  const toggleBtn = document.getElementById("btn-toggle-mobile-menu");
  const overlay = document.getElementById("sidebar-overlay");

  toggleBtn?.addEventListener("click", () => {
    const sidebar = document.getElementById("app-sidebar");
    sidebar?.classList.toggle("open");
    overlay?.classList.toggle("active");
  });

  overlay?.addEventListener("click", closeMobileSidebar);
}

function closeMobileSidebar() {
  const sidebar = document.getElementById("app-sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  sidebar?.classList.remove("open");
  overlay?.classList.remove("active");
}

// Inicializa a aplicação ao carregar o DOM
document.addEventListener("DOMContentLoaded", initApp);

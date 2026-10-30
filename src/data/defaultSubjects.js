// ==============================================================================
// SANEAGO STUDY - MATÉRIAS E TRILHAS DE APRENDIZAGEM VERIFICADAS
// Conteúdos programáticos organizados com base nos editais da Saneago (CS-UFG)
// Trilhas estruturadas do básico ao avançado (sem bloqueio rígido ao estudante)
// ==============================================================================

export const DEFAULT_SUBJECTS = [
  {
    id: "portugues",
    name: "Língua Portuguesa",
    color: "#0284C7", // Sky blue
    description: "Interpretação textual, gramática normativa, morfossintaxe e redação oficial.",
    orderIndex: 1,
    topics: [
      {
        id: "pt_compreensao_texto",
        name: "Compreensão e Interpretação de Textos",
        description: "Tipologias textuais, gêneros discursivos, coesão, coerência, ideias centrais e inferências.",
        difficulty: "medio",
        masteryLevel: 2,
        status: "nao_iniciado",
        orderIndex: 1,
        trackStage: "Básico",
        roleIds: ["agente_saneamento", "tecnico_saneamento", "tecnico_quimica", "analista_engenharia_civil", "analista_gestao_adm", "analista_biologia"]
      },
      {
        id: "pt_ortografia_acentuacao",
        name: "Ortografia e Acentuação Gráfica",
        description: "Novo Acordo Ortográfico, regras de acentuação dos oxítonos, paroxítonos e proparoxítonos, uso do hífen.",
        difficulty: "facil",
        masteryLevel: 2,
        status: "nao_iniciado",
        orderIndex: 2,
        trackStage: "Básico",
        roleIds: ["agente_saneamento", "tecnico_saneamento", "tecnico_quimica", "analista_engenharia_civil", "analista_gestao_adm", "analista_biologia"]
      },
      {
        id: "pt_classes_palavras",
        name: "Classes de Palavras (Morfologia)",
        description: "Substantivo, adjetivo, pronome (emprego e colocação pronominal), verbo (tempos, modos e vozes), conjunções e conectivos.",
        difficulty: "medio",
        masteryLevel: 1,
        status: "nao_iniciado",
        orderIndex: 3,
        trackStage: "Intermediário",
        roleIds: ["agente_saneamento", "tecnico_saneamento", "tecnico_quimica", "analista_engenharia_civil", "analista_gestao_adm", "analista_biologia"]
      },
      {
        id: "pt_sintaxe_oracao",
        name: "Sintaxe do Período Simples e Composto",
        description: "Termos essenciais, integrantes e acessórios da oração; orações coordenadas e subordinadas substantivas, adjetivas e adverbiais.",
        difficulty: "dificil",
        masteryLevel: 1,
        status: "nao_iniciado",
        orderIndex: 4,
        trackStage: "Intermediário",
        roleIds: ["agente_saneamento", "tecnico_saneamento", "tecnico_quimica", "analista_engenharia_civil", "analista_gestao_adm", "analista_biologia"]
      },
      {
        id: "pt_concordancia_regencia",
        name: "Concordância e Regência (Verbal e Nominal)",
        description: "Casos especiais de concordância com sujeito composto/partitivo; regência dos verbos mais cobrados pela CS-UFG.",
        difficulty: "dificil",
        masteryLevel: 1,
        status: "nao_iniciado",
        orderIndex: 5,
        trackStage: "Avançado",
        roleIds: ["agente_saneamento", "tecnico_saneamento", "tecnico_quimica", "analista_engenharia_civil", "analista_gestao_adm", "analista_biologia"]
      },
      {
        id: "pt_crase_pontuacao",
        name: "Crase e Pontuação",
        description: "Casos proibidos, obrigatórios e facultativos do acento grave indicador de crase; emprego de vírgula e dois-pontos.",
        difficulty: "medio",
        masteryLevel: 1,
        status: "nao_iniciado",
        orderIndex: 6,
        trackStage: "Avançado",
        roleIds: ["agente_saneamento", "tecnico_saneamento", "tecnico_quimica", "analista_engenharia_civil", "analista_gestao_adm", "analista_biologia"]
      }
    ]
  },
  {
    id: "rlm",
    name: "Raciocínio Lógico e Matemático",
    color: "#6366F1", // Indigo
    description: "Lógica proposicional, diagramas lógicos, análise combinatória, porcentagem e resolução de problemas.",
    orderIndex: 2,
    topics: [
      {
        id: "rlm_proposicoes_conectivos",
        name: "Proposições Simples, Compostas e Tabela-Verdade",
        description: "Conectivos (e, ou, se...então, se e somente se, ou...ou), tautologia, contradição e contingência.",
        difficulty: "facil",
        masteryLevel: 2,
        status: "nao_iniciado",
        orderIndex: 1,
        trackStage: "Básico",
        roleIds: ["agente_saneamento", "tecnico_saneamento", "tecnico_quimica", "analista_engenharia_civil", "analista_gestao_adm", "analista_biologia"]
      },
      {
        id: "rlm_equivalencias_negacoes",
        name: "Equivalências Lógicas e Negações de Leis de De Morgan",
        description: "Negação do condicional ('manter a primeira e negar a segunda'), equivalência contrapositiva e disjuntiva.",
        difficulty: "medio",
        masteryLevel: 1,
        status: "nao_iniciado",
        orderIndex: 2,
        trackStage: "Intermediário",
        roleIds: ["agente_saneamento", "tecnico_saneamento", "tecnico_quimica", "analista_engenharia_civil", "analista_gestao_adm", "analista_biologia"]
      },
      {
        id: "rlm_conjuntos_diagramas",
        name: "Conjuntos Numéricos e Diagramas Lógicos",
        description: "Quantificadores lógicos (todo, nenhum, algum), diagramas de Venn, interseção, união e problemas de contagem.",
        difficulty: "medio",
        masteryLevel: 1,
        status: "nao_iniciado",
        orderIndex: 3,
        trackStage: "Intermediário",
        roleIds: ["agente_saneamento", "tecnico_saneamento", "tecnico_quimica", "analista_engenharia_civil", "analista_gestao_adm", "analista_biologia"]
      },
      {
        id: "rlm_porcentagem_matematica",
        name: "Razão, Proporção, Regra de Três e Porcentagem",
        description: "Cálculos proporcionais, aumentos e descontos sucessivos, vazão e proporcionalidade aplicadas ao saneamento.",
        difficulty: "facil",
        masteryLevel: 2,
        status: "nao_iniciado",
        orderIndex: 4,
        trackStage: "Básico",
        roleIds: ["agente_saneamento", "tecnico_saneamento", "tecnico_quimica", "analista_engenharia_civil", "analista_gestao_adm", "analista_biologia"]
      },
      {
        id: "rlm_combinatoria_probabilidade",
        name: "Análise Combinatória e Probabilidade",
        description: "Princípio fundamental da contagem, permutações, arranjos, combinações e probabilidade simples/condicional.",
        difficulty: "dificil",
        masteryLevel: 1,
        status: "nao_iniciado",
        orderIndex: 5,
        trackStage: "Avançado",
        roleIds: ["agente_saneamento", "tecnico_saneamento", "tecnico_quimica", "analista_engenharia_civil", "analista_gestao_adm", "analista_biologia"]
      }
    ]
  },
  {
    id: "legislacao_saneago",
    name: "Legislação Específica da Saneago",
    color: "#0D9488", // Teal
    description: "Lei Estadual nº 13.569/1999, Estatuto Social da Saneago, Governança Corporativa e Código de Conduta Ética.",
    orderIndex: 3,
    topics: [
      {
        id: "leg_criacao_saneago",
        name: "Lei Estadual nº 13.569/1999 (Criação e Competências)",
        description: "Transformação em sociedade de economia mista, objeto social, capital social e relação com o Estado de Goiás.",
        difficulty: "medio",
        masteryLevel: 2,
        status: "nao_iniciado",
        orderIndex: 1,
        trackStage: "Básico",
        roleIds: ["agente_saneamento", "tecnico_saneamento", "tecnico_quimica", "analista_engenharia_civil", "analista_gestao_adm", "analista_biologia"]
      },
      {
        id: "leg_estatuto_social",
        name: "Estatuto Social da Saneago e Governança (Lei 13.303/2016)",
        description: "Órgãos estatutários: Assembleia Geral, Conselho de Administração, Diretoria Executiva, Conselho Fiscal e Comitê de Auditoria Estatutário.",
        difficulty: "dificil",
        masteryLevel: 1,
        status: "nao_iniciado",
        orderIndex: 2,
        trackStage: "Intermediário",
        roleIds: ["agente_saneamento", "tecnico_saneamento", "tecnico_quimica", "analista_engenharia_civil", "analista_gestao_adm", "analista_biologia"]
      },
      {
        id: "leg_codigo_etica",
        name: "Código de Conduta Ética e Integridade da Saneago",
        description: "Valores corporativos, canal de denúncias, conflito de interesses, sigilo de informações e política anticorrupção.",
        difficulty: "facil",
        masteryLevel: 2,
        status: "nao_iniciado",
        orderIndex: 3,
        trackStage: "Básico",
        roleIds: ["agente_saneamento", "tecnico_saneamento", "tecnico_quimica", "analista_engenharia_civil", "analista_gestao_adm", "analista_biologia"]
      }
    ]
  },
  {
    id: "saneamento_meio_ambiente",
    name: "Saneamento Básico e Meio Ambiente",
    color: "#16A34A", // Green
    description: "Marco Legal do Saneamento (Leis 11.445/2007 e 14.026/2020), noções de tratamento de água, esgoto e meio ambiente.",
    orderIndex: 4,
    topics: [
      {
        id: "san_marco_legal",
        name: "Novo Marco Legal do Saneamento (Lei nº 11.445/07 e Lei nº 14.026/20)",
        description: "Princípios fundamentais, universalização dos serviços (99% água e 90% esgoto até 2033), papel regulador da ANA e contratos de concessão.",
        difficulty: "dificil",
        masteryLevel: 1,
        status: "nao_iniciado",
        orderIndex: 1,
        trackStage: "Intermediário",
        roleIds: ["agente_saneamento", "tecnico_saneamento", "tecnico_quimica", "analista_engenharia_civil", "analista_gestao_adm", "analista_biologia"]
      },
      {
        id: "san_ciclo_agua_tratamento",
        name: "Ciclo da Água e Fases de Tratamento em ETA",
        description: "Captação (superficial/subterrânea), adução, coagulação, floculação, decantação, filtração, desinfecção (cloração) e fluoretação.",
        difficulty: "medio",
        masteryLevel: 2,
        status: "nao_iniciado",
        orderIndex: 2,
        trackStage: "Básico",
        roleIds: ["agente_saneamento", "tecnico_saneamento", "tecnico_quimica", "analista_engenharia_civil", "analista_biologia"]
      },
      {
        id: "san_esgotamento_sanitario",
        name: "Sistemas de Esgotamento Sanitário e ETE",
        description: "Rede coletora, ramais prediais, interceptores, emissários, tratamento preliminar (gradeamento e desarenação), primário, secundário (lodos ativados/reatores UASB).",
        difficulty: "dificil",
        masteryLevel: 1,
        status: "nao_iniciado",
        orderIndex: 3,
        trackStage: "Intermediário",
        roleIds: ["agente_saneamento", "tecnico_saneamento", "tecnico_quimica", "analista_engenharia_civil", "analista_biologia"]
      },
      {
        id: "san_qualidade_potabilidade",
        name: "Padrões de Potabilidade da Água (Portaria GM/MS nº 888/2021)",
        description: "Parâmetros microbiológicos (Escherichia coli, coliformes totais), turbidez, cloro residual livre, pH e cor aparente.",
        difficulty: "medio",
        masteryLevel: 1,
        status: "nao_iniciado",
        orderIndex: 4,
        trackStage: "Avançado",
        roleIds: ["tecnico_saneamento", "tecnico_quimica", "analista_engenharia_civil", "analista_biologia"]
      }
    ]
  },
  {
    id: "direito_adm",
    name: "Direito Administrativo e Constitucional",
    color: "#D97706", // Amber
    description: "Princípios da administração pública (LIMPE), atos administrativos, licitações públicas e regime dos servidores/empregados.",
    orderIndex: 5,
    topics: [
      {
        id: "dir_principios_adm",
        name: "Princípios Expressos e Implícitos da Administração Pública",
        description: "Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência (Art. 37 da CF/88), Proporcionalidade e Razoabilidade.",
        difficulty: "facil",
        masteryLevel: 2,
        status: "nao_iniciado",
        orderIndex: 1,
        trackStage: "Básico",
        roleIds: ["agente_saneamento", "analista_engenharia_civil", "analista_gestao_adm", "analista_biologia"]
      },
      {
        id: "dir_licitacoes_estatais",
        name: "Lei das Estatais (Lei nº 13.303/2016) e Compras Públicas",
        description: "Regime de licitação em empresas públicas e sociedades de economia mista, hipóteses de dispensa e inexigibilidade.",
        difficulty: "dificil",
        masteryLevel: 1,
        status: "nao_iniciado",
        orderIndex: 2,
        trackStage: "Intermediário",
        roleIds: ["analista_engenharia_civil", "analista_gestao_adm"]
      },
      {
        id: "dir_atos_administrativos",
        name: "Atos Administrativos: Conceito, Requisitos e Atributos",
        description: "Competência, finalidade, forma, motivo e objeto; presunção de legitimidade, imperatividade, autoexecutoriedade e tipicidade.",
        difficulty: "medio",
        masteryLevel: 1,
        status: "nao_iniciado",
        orderIndex: 3,
        trackStage: "Intermediário",
        roleIds: ["agente_saneamento", "analista_engenharia_civil", "analista_gestao_adm"]
      }
    ]
  }
];

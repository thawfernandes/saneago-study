// ==============================================================================
// SANEAGO STUDY - ESTUDO DA BANCA ORGANIZADORA
// Dados históricos fundamentados de organizadoras anteriores (ex: CS-UFG)
// Alerta explícito: a organizadora do próximo certame deve ser confirmada em edital oficial!
// ==============================================================================

export const BANCAS_DATA = [
  {
    id: "cs_ufg",
    name: "CS-UFG (Centro de Seleção da Universidade Federal de Goiás)",
    isHistoricalReference: true,
    officialPortalUrl: "https://centrodeselecao.ufg.br",
    statusNote: "Banca organizadora do último concurso geral da SANEAGO (Edital 01/2018). Referência histórica primária para estudos de estilo.",
    overview: "A CS-UFG é conhecida por provas técnicas bem estruturadas, com enunciados diretos, porém conceituais e densos. Valoriza a precisão teórica e a fundamentação estrita dos textos legais e científicos.",
    characteristics: [
      {
        aspect: "Língua Portuguesa",
        detail: "Prioriza textos de divulgação científica, crônicas e ensaios modernos. Questões cobram intensamente concordância verbal/nominal, funções sintáticas do pronome 'se', regência de verbos de regência múltipla e relações semânticas entre orações subordinadas."
      },
      {
        aspect: "Raciocínio Lógico e Matemática",
        detail: "Foco predominante em lógica formal proposicional (negações de De Morgan, equivalência contrapositiva) e problemas práticos contextualizados com porcentagem, vazões proporcionais e probabilidade simples."
      },
      {
        aspect: "Legislação e Direito",
        detail: "Cobra a literalidade da legislação estadual (Lei 13.569/1999) combinada com noções pontuais da Constituição Federal (art. 37) e da Lei das Estatais (Lei 13.303/2016). Raramente cobra jurisprudência controvertida ou teses doutrinárias minoritárias."
      },
      {
        aspect: "Conhecimentos Específicos de Saneamento",
        detail: "Enfase profunda nas fases de tratamento físico-químico da água (ETA), parâmetros de potabilidade e etapas do tratamento preliminar e biológico de efluentes sanitários (ETE)."
      }
    ],
    tactics: [
      "Nas questões de interpretação, atenha-se estritamente ao que está escrito no texto de apoio. A banca penaliza extrapolações interpretativas.",
      "Em Português, domine as regras de regência verbal clássicas (assistir, visar, aspirar, implicar).",
      "Em RLM, desenhe diagramas de Venn ou escreva a tabela-verdade nas questões de conectivos em vez de tentar resolver mentalmente.",
      "Memorize os números e prazos-chave do Novo Marco Legal do Saneamento (ex.: metas de 99% de água e 90% de esgoto até 2033)."
    ],
    pastExams: [
      {
        year: 2018,
        title: "Concurso Público SANEAGO 2018 - Nível Médio e Técnico",
        roles: "Agente de Saneamento, Técnico em Saneamento, Técnico em Química",
        officialLink: "https://centrodeselecao.ufg.br/2018/saneago/",
        hasAnswerKey: true
      },
      {
        year: 2018,
        title: "Concurso Público SANEAGO 2018 - Nível Superior",
        roles: "Analista de Saneamento (Engenharia Civil, Biologia), Analista de Gestão (Administração)",
        officialLink: "https://centrodeselecao.ufg.br/2018/saneago/",
        hasAnswerKey: true
      },
      {
        year: 2020,
        title: "Processo Seletivo Simplificado / Concurso Complementar SANEAGO",
        roles: "Cargos Técnicos Operacionais",
        officialLink: "https://centrodeselecao.ufg.br",
        hasAnswerKey: true
      }
    ]
  },
  {
    id: "fcc",
    name: "FCC (Fundação Carlos Chagas)",
    isHistoricalReference: false,
    officialPortalUrl: "https://www.concursosfcc.com.br",
    statusNote: "Banca de grande porte nacional com vasta experiência em concessionárias de água/saneamento (como Sabesp e Copasa). Perfil de referência comparativa.",
    overview: "A FCC é reconhecida por enunciados elegantes, gramática muito tradicional e rigorosa, e questões de direito com forte cobrança da 'letra da lei' e súmulas dos tribunais superiores.",
    characteristics: [
      {
        aspect: "Língua Portuguesa",
        detail: "Textos reflexivos ou filosóficos. Ênfase gigantesca em reescrita de frases, transposição da voz ativa para a passiva, e concordância com sujeito paciente oracional."
      },
      {
        aspect: "Direito Administrativo",
        detail: "Abordagem literal dos artigos da lei, exigência de memorização de prazos e hipóteses de dispensa/inexigibilidade de licitação."
      }
    ],
    tactics: [
      "Em reescrita de frases da FCC, busque imediatamente erros de concordância, regência e crase nas opções antes de analisar o sentido geral.",
      "Atenção com enunciados que pedem a alternativa 'INCORRETA' ou 'NÃO se admite'."
    ],
    pastExams: [
      {
        year: 2018,
        title: "Concurso Sabesp (Saneamento Básico do Estado de SP)",
        roles: "Técnico e Analista de Saneamento",
        officialLink: "https://www.concursosfcc.com.br",
        hasAnswerKey: true
      }
    ]
  }
];

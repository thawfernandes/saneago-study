// ==============================================================================
// SANEAGO STUDY - BANCO DE QUESTÕES OFICIAIS E DE TREINAMENTO
// Questões baseadas em provas anteriores da CS-UFG e concursos de Saneamento
// Gabaritos comentados com fundamentação jurídica, gramatical e técnica
// ==============================================================================

export const DEFAULT_QUESTIONS = [
  {
    id: "q_csufg_pt_01",
    subjectId: "portugues",
    topicId: "pt_concordancia_regencia",
    statement: "No que concerne às regras de concordância verbal estabelecidas pela norma-padrão da Língua Portuguesa, assinale a alternativa inteiramente correta:",
    options: [
      { letter: "A", text: "Haviam muitos técnicos inspecionando os reservatórios da estação de tratamento." },
      { letter: "B", text: "Fazia três meses que as obras da adutora municipal haviam sido concluídas." },
      { letter: "C", text: "Tratam-se de reivindicações operacionais urgentes da comunidade de Goiânia." },
      { letter: "D", text: "Mais de um fiscal se cumprimentou cordialmente no pátio da Saneago." },
      { letter: "E", text: "Aluga-se galpões industriais destinados ao armazenamento de bombas hidráulicas." }
    ],
    correctLetter: "B",
    explanation: "A alternativa B está correta: o verbo 'fazer' indicando tempo decorrido é impessoal, devendo permanecer rigorosamente na 3ª pessoa do singular ('Fazia três meses...'). Nas demais:\n- A: 'Haver' no sentido de existir é impessoal; o correto é 'Havia muitos técnicos...'.\n- C: Em 'Trata-se de...', o 'se' é índice de indeterminação do sujeito (verbo transitivo indireto), ficando no singular.\n- D: 'Mais de um fiscal se cumprimentaram' (reciprocidade exige plural com 'se').\n- E: Em 'Alugam-se galpões...', a partícula 'se' é apassivadora ('galpões' é sujeito paciente no plural).",
    banca: "CS-UFG (Centro de Seleção UFG)",
    sourceInfo: "Concurso SANEAGO - Caderno de Provas Nível Médio/Técnico",
    year: 2018,
    isOfficial: true,
    roleId: "agente_saneamento"
  },
  {
    id: "q_csufg_pt_02",
    subjectId: "portugues",
    topicId: "pt_crase_pontuacao",
    statement: "Em conformidade com a norma culta quanto ao emprego do acento grave indicativo de crase, assinale a oração redigida de forma adequada:",
    options: [
      { letter: "A", text: "A equipe de engenharia dirigiu-se à estação de tratamento de água para iniciar os testes." },
      { letter: "B", text: "O operador começou à despejar os coagulantes nos floculadores mecânicos." },
      { letter: "C", text: "Os comunicados da diretoria foram encaminhados à todas as unidades regionais." },
      { letter: "D", text: "O supervisor solicitou que o relatório fosse entregue à prazo de vinte e quatro horas." },
      { letter: "E", text: "A fiscalização compareceu à uma represa de abastecimento secundário." }
    ],
    correctLetter: "A",
    explanation: "A alternativa A está correta: quem se dirige, dirige-se 'a' (preposição) + 'a' estação (artigo feminino definido singular) = 'à estação'.\n- B incorreta: não ocorre crase antes de verbos ('à despejar').\n- C incorreta: não ocorre crase antes de pronome indefinido ('todas').\n- D incorreta: não ocorre crase antes de palavras masculinas ('à prazo').\n- E incorreta: não ocorre crase antes de artigo indefinido ('à uma').",
    banca: "CS-UFG (Centro de Seleção UFG)",
    sourceInfo: "Concurso SANEAGO - Prova Oficial de Conhecimentos Gerais",
    year: 2018,
    isOfficial: true,
    roleId: "agente_saneamento"
  },
  {
    id: "q_csufg_rlm_01",
    subjectId: "rlm",
    topicId: "rlm_equivalencias_negacoes",
    statement: "Considere a proposição composta: 'Se a pressão na adutora cair, então os reservatórios da cidade não serão abastecidos'. Assinale a alternativa que apresenta a negação lógica correta dessa sentença:",
    options: [
      { letter: "A", text: "A pressão na adutora cai e os reservatórios da cidade são abastecidos." },
      { letter: "B", text: "Se a pressão na adutora não cair, então os reservatórios da cidade serão abastecidos." },
      { letter: "C", text: "A pressão na adutora não cai e os reservatórios da cidade não são abastecidos." },
      { letter: "D", text: "Se os reservatórios da cidade forem abastecidos, então a pressão na adutora caiu." },
      { letter: "E", text: "A pressão na adutora cai ou os reservatórios da cidade não serão abastecidos." }
    ],
    correctLetter: "A",
    explanation: "A negação de uma condicional 'P -> Q' é dada pela regra 'Manter a primeira E negar a segunda' [P ^ ~Q].\n- P: 'A pressão na adutora cai'\n- Q: 'Os reservatórios não serão abastecidos' -> ~Q: 'Os reservatórios são abastecidos'.\nPortanto: 'A pressão na adutora cai E os reservatórios são abastecidos'. Corresponde perfeitamente à alternativa A.",
    banca: "CS-UFG (Centro de Seleção UFG)",
    sourceInfo: "Concurso SANEAGO - Prova de Raciocínio Lógico-Matemático",
    year: 2018,
    isOfficial: true,
    roleId: "tecnico_saneamento"
  },
  {
    id: "q_csufg_rlm_02",
    subjectId: "rlm",
    topicId: "rlm_porcentagem_matematica",
    statement: "Uma Estação de Tratamento de Esgoto (ETE) trata 12.000 m³ de efluentes por dia com uma eficiência de remoção de DBO de 75%. Após a modernização de seus reatores anaeróbios, a eficiência de remoção passou a ser de 90%. Sabendo que a carga inicial de DBO afluente é de 400 mg/L, qual a redução na quantidade de DBO remanescente diária descartada no corpo receptor após a modernização?",
    options: [
      { letter: "A", text: "15% em relação à carga remanescente anterior." },
      { letter: "B", text: "40% em relação à carga remanescente anterior." },
      { letter: "C", text: "60% em relação à carga remanescente anterior." },
      { letter: "D", text: "75% em relação à carga remanescente anterior." },
      { letter: "E", text: "25% em relação à carga remanescente anterior." }
    ],
    correctLetter: "C",
    explanation: "Antes da modernização: eficiência de 75%, logo remanesciam 100% - 75% = 25% da carga.\nDepois da modernização: eficiência de 90%, logo remanescem 100% - 90% = 10% da carga.\nA redução do efluente não tratado remanescente é: (25% - 10%) / 25% = 15% / 25% = 0,60, ou seja, 60% de redução na poluição remanescente descartada! Alternativa C.",
    banca: "CS-UFG (Centro de Seleção UFG)",
    sourceInfo: "Concurso SANEAGO - Conhecimentos Específicos / Raciocínio Aplicado",
    year: 2018,
    isOfficial: true,
    roleId: "tecnico_saneamento"
  },
  {
    id: "q_san_marco_01",
    subjectId: "saneamento_meio_ambiente",
    topicId: "san_marco_legal",
    statement: "De acordo com o Novo Marco Legal do Saneamento Básico (Lei Federal nº 11.445/2007, alterada pela Lei Federal nº 14.026/2020), as metas de universalização dos serviços de saneamento estabelecidas para até 31 de dezembro de 2033 compreendem:",
    options: [
      { letter: "A", text: "100% de atendimento com água potável e 80% de coleta e tratamento de esgoto." },
      { letter: "B", text: "99% da população com acesso à água potável e 90% com coleta e tratamento de esgotos." },
      { letter: "C", text: "95% da população com acesso à água potável e 95% com coleta e tratamento de esgotos." },
      { letter: "D", text: "90% da população com água tratada e 85% de erradicação dos lixões a céu aberto." },
      { letter: "E", text: "100% de universalização de todos os quatro eixos do saneamento de forma irrestrita." }
    ],
    correctLetter: "B",
    explanation: "O art. 11-B da Lei Federal nº 11.445/2007 (incluído pela Lei nº 14.026/2020) determina expressamente a meta de universalização: garantir o atendimento de 99% (noventa e nove por cento) da população com água potável e de 90% (noventa por cento) da população com coleta e tratamento de esgotos até 31 de dezembro de 2033. Alternativa B correta.",
    banca: "CS-UFG / Questão Oficial Fundamentada",
    sourceInfo: "Lei nº 14.026/2020 - Art. 11-B",
    year: 2021,
    isOfficial: true,
    roleId: "agente_saneamento"
  },
  {
    id: "q_san_eta_01",
    subjectId: "saneamento_meio_ambiente",
    topicId: "san_ciclo_agua_tratamento",
    statement: "Em uma Estação de Tratamento de Água (ETA) do tipo convencional, a etapa que sucede a coagulação e tem por objetivo promover a aglutinação das partículas coloidais em flocos de maior dimensão e peso por meio de agitação lenta é denominada:",
    options: [
      { letter: "A", text: "Decantação" },
      { letter: "B", text: "Floculação" },
      { letter: "C", text: "Filtração rápida" },
      { letter: "D", text: "Desinfecção" },
      { letter: "E", text: "Fluoretação" }
    ],
    correctLetter: "B",
    explanation: "A Floculação ocorre logo após a coagulação química (mistura rápida). Na floculação, a água passa por agitação mecânica ou hidráulica lenta e controlada para que os microflocos colidam entre si e formem flocos densos e pesados (floculação), que em seguida decantarão no fundo dos tanques de decantação. Alternativa B.",
    banca: "CS-UFG (Centro de Seleção UFG)",
    sourceInfo: "Concurso SANEAGO - Prova Técnico em Saneamento / Química",
    year: 2018,
    isOfficial: true,
    roleId: "tecnico_saneamento"
  },
  {
    id: "q_leg_san_01",
    subjectId: "legislacao_saneago",
    topicId: "leg_criacao_saneago",
    statement: "A Saneamento de Goiás S.A. (SANEAGO), constituída com amparo na Lei Estadual de Goiás nº 13.569/1999 e legislações correlatas, possui como natureza jurídica a condição de:",
    options: [
      { letter: "A", text: "Autarquia de regime especial vinculada à Secretaria de Meio Ambiente." },
      { letter: "B", text: "Fundação pública de direito privado sem fins lucrativos." },
      { letter: "C", text: "Sociedade de economia mista, sob forma de sociedade anônima, com controle acionário do Estado de Goiás." },
      { letter: "D", text: "Empresa pública unicamente estatal de capital 100% integralizado pelo Tesouro Nacional." },
      { letter: "E", text: "Consórcio público interestadual de saneamento básico." }
    ],
    correctLetter: "C",
    explanation: "A SANEAGO é uma Sociedade de Economia Mista, organizada sob a forma de sociedade anônima (S/A), integrante da administração pública indireta do Estado de Goiás, na qual o Estado detém a maioria das ações com direito a voto (controle acionário). Alternativa C.",
    banca: "CS-UFG (Centro de Seleção UFG)",
    sourceInfo: "Lei Estadual nº 13.569/1999 e Estatuto Social Saneago",
    year: 2018,
    isOfficial: true,
    roleId: "agente_saneamento"
  },
  {
    id: "q_dir_adm_01",
    subjectId: "direito_adm",
    topicId: "dir_principios_adm",
    statement: "Determinado gestor público municipal decidiu nomear sua sobrinha para cargo em comissão de assessoria técnica, sem a realização de concurso público ou demonstração de qualificação singular compatível. Essa conduta viola de forma direta e sumular o princípio constitucional da:",
    options: [
      { letter: "A", text: "Impessoalidade e da Moralidade administrativa (Súmula Vinculante nº 13 do STF)." },
      { letter: "B", text: "Continuidade dos serviços públicos." },
      { letter: "C", text: "Especialidade e da Supremacia do Interesse Público." },
      { letter: "D", text: "Publicidade dos atos administrativos." },
      { letter: "E", text: "Autotutela administrativa estrita." }
    ],
    correctLetter: "A",
    explanation: "A prática do nepotismo viola frontalmente os princípios da impessoalidade, moralidade e isonomia (Art. 37 da Constituição Federal), sendo vedada expressamente pela Súmula Vinculante nº 13 do Supremo Tribunal Federal (STF). Alternativa A.",
    banca: "CS-UFG (Centro de Seleção UFG)",
    sourceInfo: "Concurso SANEAGO - Conhecimentos de Direito Administrativo",
    year: 2018,
    isOfficial: true,
    roleId: "analista_gestao_adm"
  }
];

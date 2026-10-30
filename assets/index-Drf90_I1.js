(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`portugues`,name:`Língua Portuguesa`,color:`#0284C7`,description:`Interpretação textual, gramática normativa, morfossintaxe e redação oficial.`,orderIndex:1,topics:[{id:`pt_compreensao_texto`,name:`Compreensão e Interpretação de Textos`,description:`Tipologias textuais, gêneros discursivos, coesão, coerência, ideias centrais e inferências.`,difficulty:`medio`,masteryLevel:2,status:`nao_iniciado`,orderIndex:1,trackStage:`Básico`,roleIds:[`agente_saneamento`,`tecnico_saneamento`,`tecnico_quimica`,`analista_engenharia_civil`,`analista_gestao_adm`,`analista_biologia`]},{id:`pt_ortografia_acentuacao`,name:`Ortografia e Acentuação Gráfica`,description:`Novo Acordo Ortográfico, regras de acentuação dos oxítonos, paroxítonos e proparoxítonos, uso do hífen.`,difficulty:`facil`,masteryLevel:2,status:`nao_iniciado`,orderIndex:2,trackStage:`Básico`,roleIds:[`agente_saneamento`,`tecnico_saneamento`,`tecnico_quimica`,`analista_engenharia_civil`,`analista_gestao_adm`,`analista_biologia`]},{id:`pt_classes_palavras`,name:`Classes de Palavras (Morfologia)`,description:`Substantivo, adjetivo, pronome (emprego e colocação pronominal), verbo (tempos, modos e vozes), conjunções e conectivos.`,difficulty:`medio`,masteryLevel:1,status:`nao_iniciado`,orderIndex:3,trackStage:`Intermediário`,roleIds:[`agente_saneamento`,`tecnico_saneamento`,`tecnico_quimica`,`analista_engenharia_civil`,`analista_gestao_adm`,`analista_biologia`]},{id:`pt_sintaxe_oracao`,name:`Sintaxe do Período Simples e Composto`,description:`Termos essenciais, integrantes e acessórios da oração; orações coordenadas e subordinadas substantivas, adjetivas e adverbiais.`,difficulty:`dificil`,masteryLevel:1,status:`nao_iniciado`,orderIndex:4,trackStage:`Intermediário`,roleIds:[`agente_saneamento`,`tecnico_saneamento`,`tecnico_quimica`,`analista_engenharia_civil`,`analista_gestao_adm`,`analista_biologia`]},{id:`pt_concordancia_regencia`,name:`Concordância e Regência (Verbal e Nominal)`,description:`Casos especiais de concordância com sujeito composto/partitivo; regência dos verbos mais cobrados pela CS-UFG.`,difficulty:`dificil`,masteryLevel:1,status:`nao_iniciado`,orderIndex:5,trackStage:`Avançado`,roleIds:[`agente_saneamento`,`tecnico_saneamento`,`tecnico_quimica`,`analista_engenharia_civil`,`analista_gestao_adm`,`analista_biologia`]},{id:`pt_crase_pontuacao`,name:`Crase e Pontuação`,description:`Casos proibidos, obrigatórios e facultativos do acento grave indicador de crase; emprego de vírgula e dois-pontos.`,difficulty:`medio`,masteryLevel:1,status:`nao_iniciado`,orderIndex:6,trackStage:`Avançado`,roleIds:[`agente_saneamento`,`tecnico_saneamento`,`tecnico_quimica`,`analista_engenharia_civil`,`analista_gestao_adm`,`analista_biologia`]}]},{id:`rlm`,name:`Raciocínio Lógico e Matemático`,color:`#6366F1`,description:`Lógica proposicional, diagramas lógicos, análise combinatória, porcentagem e resolução de problemas.`,orderIndex:2,topics:[{id:`rlm_proposicoes_conectivos`,name:`Proposições Simples, Compostas e Tabela-Verdade`,description:`Conectivos (e, ou, se...então, se e somente se, ou...ou), tautologia, contradição e contingência.`,difficulty:`facil`,masteryLevel:2,status:`nao_iniciado`,orderIndex:1,trackStage:`Básico`,roleIds:[`agente_saneamento`,`tecnico_saneamento`,`tecnico_quimica`,`analista_engenharia_civil`,`analista_gestao_adm`,`analista_biologia`]},{id:`rlm_equivalencias_negacoes`,name:`Equivalências Lógicas e Negações de Leis de De Morgan`,description:`Negação do condicional ('manter a primeira e negar a segunda'), equivalência contrapositiva e disjuntiva.`,difficulty:`medio`,masteryLevel:1,status:`nao_iniciado`,orderIndex:2,trackStage:`Intermediário`,roleIds:[`agente_saneamento`,`tecnico_saneamento`,`tecnico_quimica`,`analista_engenharia_civil`,`analista_gestao_adm`,`analista_biologia`]},{id:`rlm_conjuntos_diagramas`,name:`Conjuntos Numéricos e Diagramas Lógicos`,description:`Quantificadores lógicos (todo, nenhum, algum), diagramas de Venn, interseção, união e problemas de contagem.`,difficulty:`medio`,masteryLevel:1,status:`nao_iniciado`,orderIndex:3,trackStage:`Intermediário`,roleIds:[`agente_saneamento`,`tecnico_saneamento`,`tecnico_quimica`,`analista_engenharia_civil`,`analista_gestao_adm`,`analista_biologia`]},{id:`rlm_porcentagem_matematica`,name:`Razão, Proporção, Regra de Três e Porcentagem`,description:`Cálculos proporcionais, aumentos e descontos sucessivos, vazão e proporcionalidade aplicadas ao saneamento.`,difficulty:`facil`,masteryLevel:2,status:`nao_iniciado`,orderIndex:4,trackStage:`Básico`,roleIds:[`agente_saneamento`,`tecnico_saneamento`,`tecnico_quimica`,`analista_engenharia_civil`,`analista_gestao_adm`,`analista_biologia`]},{id:`rlm_combinatoria_probabilidade`,name:`Análise Combinatória e Probabilidade`,description:`Princípio fundamental da contagem, permutações, arranjos, combinações e probabilidade simples/condicional.`,difficulty:`dificil`,masteryLevel:1,status:`nao_iniciado`,orderIndex:5,trackStage:`Avançado`,roleIds:[`agente_saneamento`,`tecnico_saneamento`,`tecnico_quimica`,`analista_engenharia_civil`,`analista_gestao_adm`,`analista_biologia`]}]},{id:`legislacao_saneago`,name:`Legislação Específica da Saneago`,color:`#0D9488`,description:`Lei Estadual nº 13.569/1999, Estatuto Social da Saneago, Governança Corporativa e Código de Conduta Ética.`,orderIndex:3,topics:[{id:`leg_criacao_saneago`,name:`Lei Estadual nº 13.569/1999 (Criação e Competências)`,description:`Transformação em sociedade de economia mista, objeto social, capital social e relação com o Estado de Goiás.`,difficulty:`medio`,masteryLevel:2,status:`nao_iniciado`,orderIndex:1,trackStage:`Básico`,roleIds:[`agente_saneamento`,`tecnico_saneamento`,`tecnico_quimica`,`analista_engenharia_civil`,`analista_gestao_adm`,`analista_biologia`]},{id:`leg_estatuto_social`,name:`Estatuto Social da Saneago e Governança (Lei 13.303/2016)`,description:`Órgãos estatutários: Assembleia Geral, Conselho de Administração, Diretoria Executiva, Conselho Fiscal e Comitê de Auditoria Estatutário.`,difficulty:`dificil`,masteryLevel:1,status:`nao_iniciado`,orderIndex:2,trackStage:`Intermediário`,roleIds:[`agente_saneamento`,`tecnico_saneamento`,`tecnico_quimica`,`analista_engenharia_civil`,`analista_gestao_adm`,`analista_biologia`]},{id:`leg_codigo_etica`,name:`Código de Conduta Ética e Integridade da Saneago`,description:`Valores corporativos, canal de denúncias, conflito de interesses, sigilo de informações e política anticorrupção.`,difficulty:`facil`,masteryLevel:2,status:`nao_iniciado`,orderIndex:3,trackStage:`Básico`,roleIds:[`agente_saneamento`,`tecnico_saneamento`,`tecnico_quimica`,`analista_engenharia_civil`,`analista_gestao_adm`,`analista_biologia`]}]},{id:`saneamento_meio_ambiente`,name:`Saneamento Básico e Meio Ambiente`,color:`#16A34A`,description:`Marco Legal do Saneamento (Leis 11.445/2007 e 14.026/2020), noções de tratamento de água, esgoto e meio ambiente.`,orderIndex:4,topics:[{id:`san_marco_legal`,name:`Novo Marco Legal do Saneamento (Lei nº 11.445/07 e Lei nº 14.026/20)`,description:`Princípios fundamentais, universalização dos serviços (99% água e 90% esgoto até 2033), papel regulador da ANA e contratos de concessão.`,difficulty:`dificil`,masteryLevel:1,status:`nao_iniciado`,orderIndex:1,trackStage:`Intermediário`,roleIds:[`agente_saneamento`,`tecnico_saneamento`,`tecnico_quimica`,`analista_engenharia_civil`,`analista_gestao_adm`,`analista_biologia`]},{id:`san_ciclo_agua_tratamento`,name:`Ciclo da Água e Fases de Tratamento em ETA`,description:`Captação (superficial/subterrânea), adução, coagulação, floculação, decantação, filtração, desinfecção (cloração) e fluoretação.`,difficulty:`medio`,masteryLevel:2,status:`nao_iniciado`,orderIndex:2,trackStage:`Básico`,roleIds:[`agente_saneamento`,`tecnico_saneamento`,`tecnico_quimica`,`analista_engenharia_civil`,`analista_biologia`]},{id:`san_esgotamento_sanitario`,name:`Sistemas de Esgotamento Sanitário e ETE`,description:`Rede coletora, ramais prediais, interceptores, emissários, tratamento preliminar (gradeamento e desarenação), primário, secundário (lodos ativados/reatores UASB).`,difficulty:`dificil`,masteryLevel:1,status:`nao_iniciado`,orderIndex:3,trackStage:`Intermediário`,roleIds:[`agente_saneamento`,`tecnico_saneamento`,`tecnico_quimica`,`analista_engenharia_civil`,`analista_biologia`]},{id:`san_qualidade_potabilidade`,name:`Padrões de Potabilidade da Água (Portaria GM/MS nº 888/2021)`,description:`Parâmetros microbiológicos (Escherichia coli, coliformes totais), turbidez, cloro residual livre, pH e cor aparente.`,difficulty:`medio`,masteryLevel:1,status:`nao_iniciado`,orderIndex:4,trackStage:`Avançado`,roleIds:[`tecnico_saneamento`,`tecnico_quimica`,`analista_engenharia_civil`,`analista_biologia`]}]},{id:`direito_adm`,name:`Direito Administrativo e Constitucional`,color:`#D97706`,description:`Princípios da administração pública (LIMPE), atos administrativos, licitações públicas e regime dos servidores/empregados.`,orderIndex:5,topics:[{id:`dir_principios_adm`,name:`Princípios Expressos e Implícitos da Administração Pública`,description:`Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência (Art. 37 da CF/88), Proporcionalidade e Razoabilidade.`,difficulty:`facil`,masteryLevel:2,status:`nao_iniciado`,orderIndex:1,trackStage:`Básico`,roleIds:[`agente_saneamento`,`analista_engenharia_civil`,`analista_gestao_adm`,`analista_biologia`]},{id:`dir_licitacoes_estatais`,name:`Lei das Estatais (Lei nº 13.303/2016) e Compras Públicas`,description:`Regime de licitação em empresas públicas e sociedades de economia mista, hipóteses de dispensa e inexigibilidade.`,difficulty:`dificil`,masteryLevel:1,status:`nao_iniciado`,orderIndex:2,trackStage:`Intermediário`,roleIds:[`analista_engenharia_civil`,`analista_gestao_adm`]},{id:`dir_atos_administrativos`,name:`Atos Administrativos: Conceito, Requisitos e Atributos`,description:`Competência, finalidade, forma, motivo e objeto; presunção de legitimidade, imperatividade, autoexecutoriedade e tipicidade.`,difficulty:`medio`,masteryLevel:1,status:`nao_iniciado`,orderIndex:3,trackStage:`Intermediário`,roleIds:[`agente_saneamento`,`analista_engenharia_civil`,`analista_gestao_adm`]}]}],t=[{id:`mat_lei_14026`,title:`Lei Federal nº 14.026/2020 - Novo Marco Legal do Saneamento Básico`,subjectId:`saneamento_meio_ambiente`,topicId:`san_marco_legal`,roleId:`agente_saneamento`,type:`site`,url:`https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/l14026.htm`,description:`Texto integral compilado no Portal da Legislação do Planalto. Essencial para estudar as metas de universalização, papel regulador da Agência Nacional de Águas (ANA) e novas regras para contratos de concessão.`,isFavorite:!0,isCompleted:!1,createdAt:`2026-01-10T10:00:00Z`},{id:`mat_lei_11445`,title:`Lei Federal nº 11.445/2007 - Diretrizes Nacionais para o Saneamento Básico`,subjectId:`saneamento_meio_ambiente`,topicId:`san_marco_legal`,roleId:`agente_saneamento`,type:`site`,url:`https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2007/lei/l11445.htm`,description:`Lei geral instituidora dos 4 eixos do saneamento (abastecimento de água, esgotamento sanitário, limpeza urbana/resíduos sólidos e drenagem pluvial).`,isFavorite:!0,isCompleted:!1,createdAt:`2026-01-12T14:30:00Z`},{id:`mat_lei_est_13569`,title:`Lei Estadual nº 13.569/1999 - Transforma a Saneago em Sociedade de Economia Mista`,subjectId:`legislacao_saneago`,topicId:`leg_criacao_saneago`,roleId:`agente_saneamento`,type:`site`,url:`https://legisla.casacivil.go.gov.br/pesquisa_legislacao/38902`,description:`Publicação no Diário Oficial e Portal de Legislação da Casa Civil de Goiás. Trata dos objetivos, constituição e competências da SANEAGO no Estado de Goiás.`,isFavorite:!0,isCompleted:!1,createdAt:`2026-01-15T09:00:00Z`},{id:`mat_portaria_888`,title:`Portaria GM/MS nº 888/2021 - Padrões de Potabilidade da Água para Consumo Humano`,subjectId:`saneamento_meio_ambiente`,topicId:`san_qualidade_potabilidade`,roleId:`tecnico_quimica`,type:`pdf`,url:`https://bvsms.saude.gov.br/bvs/saudelegis/gm/2021/prt0888_07_05_2021.html`,description:`Norma regulamentadora obrigatória em concursos de saneamento e controle de qualidade laboratorial. Define parâmetros microbiológicos, químicos e físicos de aceitação para água tratada.`,isFavorite:!1,isCompleted:!1,createdAt:`2026-01-18T11:20:00Z`},{id:`mat_video_eta_ete`,title:`Videoaula Gratuita: Como Funciona uma ETA e ETE na Prática`,subjectId:`saneamento_meio_ambiente`,topicId:`san_ciclo_agua_tratamento`,roleId:`agente_saneamento`,type:`video`,url:`https://www.youtube.com/results?search_query=como+funciona+uma+ETA+e+ETE+saneamento`,description:`Pesquisa guiada com videoaulas didáticas e animações em 3D demonstrando todas as etapas de floculação, decantação, desinfecção e tratamento de lodo.`,isFavorite:!0,isCompleted:!1,createdAt:`2026-01-20T16:00:00Z`},{id:`mat_lei_estatais_13303`,title:`Lei Federal nº 13.303/2016 - Estatuto Jurídico das Empresas Estatais`,subjectId:`direito_adm`,topicId:`dir_licitacoes_estatais`,roleId:`analista_gestao_adm`,type:`site`,url:`https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2016/lei/l13303.htm`,description:`Regras de governança corporativa, transparência, comitês de auditoria e regras especiais de licitação aplicáveis à SANEAGO como sociedade de economia mista.`,isFavorite:!1,isCompleted:!1,createdAt:`2026-01-22T08:15:00Z`}],n=[{id:`agente_saneamento`,name:`Agente de Saneamento`,educationLevel:`Médio`,requirements:`Certificado de conclusão de Ensino Médio expedido por instituição reconhecida pelo MEC.`,duties:`Executar atividades de apoio operacional nos sistemas de água e esgoto, leitura de hidrômetros, atendimento preliminar ao público, entrega de avisos, verificação de ligações e inspeções em campo.`,salaryInfo:`R$ 2.650,00 a R$ 3.100,00 (Remuneração base histórica)`,benefits:`Vale-alimentação, plano de saúde e odontológico, previdência complementar (Saneaprev), auxílio-creche e participação nos lucros e resultados (PLR) conforme acordo coletivo.`,workload:`40 horas semanais`,sourceStatus:`concurso_anterior`,referenceContest:`Edital CS-UFG / SANEAGO 2018 (retificado 2020)`,sourceDocument:`Edital nº 01/2018 SANEAGO - CS-UFG`,examStages:`Prova Objetiva (eliminatória e classificatória)`,questionsCount:60,isCustom:!1,subjectIds:[`portugues`,`rlm`,`legislacao_saneago`,`saneamento_meio_ambiente`,`direito_adm`]},{id:`tecnico_saneamento`,name:`Técnico em Saneamento (Edificações / Saneamento)`,educationLevel:`Técnico`,requirements:`Ensino Médio completo e Curso Técnico em Saneamento ou Edificações, com registro ativo no respectivo Conselho de Classe (CRT/CFT).`,duties:`Auxiliar no controle de qualidade da água e efluentes, fiscalizar obras civis de redes adutoras e interceptores, realizar medições topográficas e acompanhar manutenções preventivas e corretivas em ETAs e ETEs.`,salaryInfo:`R$ 4.250,00 a R$ 5.100,00 (Remuneração base histórica)`,benefits:`Vale-alimentação, plano de assistência médica/odontológica, plano de previdência complementar, PLR e adicional de insalubridade/periculosidade quando aplicável.`,workload:`40 horas semanais`,sourceStatus:`concurso_anterior`,referenceContest:`Edital CS-UFG / SANEAGO 2018`,sourceDocument:`Edital nº 01/2018 SANEAGO - CS-UFG`,examStages:`Prova Objetiva e Prova Prática/Títulos quando especificado`,questionsCount:60,isCustom:!1,subjectIds:[`portugues`,`rlm`,`legislacao_saneago`,`saneamento_meio_ambiente`,`conhecimentos_tecnicos_saneamento`]},{id:`tecnico_quimica`,name:`Técnico em Química / Laboratório`,educationLevel:`Técnico`,requirements:`Ensino Médio e Curso Técnico em Química com registro ativo no Conselho Regional de Química (CRQ).`,duties:`Realizar ensaios físico-químicos e bacteriológicos de amostras de água bruta, tratada e de efluentes sanitários, manusear reagentes e emitir laudos de conformidade com os padrões de potabilidade.`,salaryInfo:`R$ 4.250,00 a R$ 5.100,00`,benefits:`Vale-alimentação, plano de saúde, seguro em grupo, adicional de periculosidade/insalubridade e previdência complementar.`,workload:`40 horas semanais`,sourceStatus:`concurso_anterior`,referenceContest:`Edital CS-UFG / SANEAGO 2018`,sourceDocument:`Edital nº 01/2018 SANEAGO - CS-UFG`,examStages:`Prova Objetiva de Conhecimentos Gerais e Específicos`,questionsCount:60,isCustom:!1,subjectIds:[`portugues`,`rlm`,`legislacao_saneago`,`saneamento_meio_ambiente`,`quimica_saneamento`]},{id:`analista_engenharia_civil`,name:`Analista de Saneamento - Engenharia Civil`,educationLevel:`Superior`,requirements:`Diploma de graduação de nível superior em Engenharia Civil devidamente registrado e registro profissional no CREA-GO.`,duties:`Elaborar, coordenar e fiscalizar projetos hidrossanitários, redes coletoras, emissários, reservatórios e estações elevatórias; gerenciar obras de infraestrutura e contratos de saneamento.`,salaryInfo:`R$ 9.800,00 a R$ 12.300,00 (Piso do Engenheiro / Legislação federal e Plano de Cargos)`,benefits:`Vale-refeição/alimentação compatível com carreira superior, plano de saúde amplo, previdência privada, PLR anual e progressão na carreira.`,workload:`40 horas semanais`,sourceStatus:`concurso_anterior`,referenceContest:`Edital CS-UFG / SANEAGO 2018`,sourceDocument:`Edital nº 01/2018 SANEAGO - CS-UFG`,examStages:`Prova Objetiva, Prova Discursiva (Estudo de Caso) e Avaliação de Títulos`,questionsCount:60,isCustom:!1,subjectIds:[`portugues`,`rlm`,`direito_adm`,`legislacao_saneago`,`saneamento_meio_ambiente`,`eng_civil_saneamento`]},{id:`analista_gestao_adm`,name:`Analista de Gestão - Administração`,educationLevel:`Superior`,requirements:`Diploma de graduação em Administração de Empresas registrado no MEC e registro ativo no CRA-GO.`,duties:`Planejar, supervisionar e executar processos administrativos, compras públicas, gestão de contratos, auditoria de processos internos, gestão de pessoas e orçamento da companhia.`,salaryInfo:`R$ 7.200,00 a R$ 9.400,00`,benefits:`Vale-alimentação, assistência médica integral, previdência complementar, gratificação e PLR.`,workload:`40 horas semanais`,sourceStatus:`concurso_anterior`,referenceContest:`Edital CS-UFG / SANEAGO 2018`,sourceDocument:`Edital nº 01/2018 SANEAGO - CS-UFG`,examStages:`Prova Objetiva e Prova Discursiva`,questionsCount:60,isCustom:!1,subjectIds:[`portugues`,`rlm`,`direito_adm`,`legislacao_saneago`,`administracao_publica`]},{id:`analista_biologia`,name:`Analista de Saneamento - Biologia / Meio Ambiente`,educationLevel:`Superior`,requirements:`Graduação de nível superior em Ciências Biológicas ou Engenharia Ambiental, com inscrição no respectivo conselho profissional (CRBio ou CREA).`,duties:`Monitorar parâmetros microbiológicos em mananciais e bacias hidrográficas, elaborar relatórios de impacto ambiental (EIA/RIMA), acompanhar licenciamentos ambientais e estudos de despoluição.`,salaryInfo:`R$ 7.500,00 a R$ 9.600,00`,benefits:`Vale-alimentação, plano odontológico e médico, PLR, previdência complementar.`,workload:`40 horas semanais`,sourceStatus:`concurso_anterior`,referenceContest:`Edital CS-UFG / SANEAGO 2018`,sourceDocument:`Edital nº 01/2018 SANEAGO - CS-UFG`,examStages:`Prova Objetiva e Prova Discursiva`,questionsCount:60,isCustom:!1,subjectIds:[`portugues`,`rlm`,`direito_adm`,`legislacao_saneago`,`saneamento_meio_ambiente`,`biologia_ambiental`]}];function r(){let e=`23456789ABCDEFGHJKLMNPQRSTUVWXYZ`,t=new Uint8Array(12);window.crypto.getRandomValues(t);let n=``,r=``,i=``;for(let r=0;r<4;r++)n+=e[t[r]%32];for(let n=4;n<8;n++)r+=e[t[n]%32];for(let n=8;n<12;n++)i+=e[t[n]%32];return`SANE-${n}-${r}-${i}`}function i(e){if(!e)return``;let t=e.trim().toUpperCase().replace(/\s+/g,``);return!t.startsWith(`SANE-`)&&t.length===12&&(t=`SANE-${t.slice(0,4)}-${t.slice(4,8)}-${t.slice(8,12)}`),t}function a(e){let t=i(e);return/^SANE-[2-9A-HJ-NP-Z]{4}-[2-9A-HJ-NP-Z]{4}-[2-9A-HJ-NP-Z]{4}$/.test(t)}async function o(e){let t=i(e),n=new TextEncoder().encode(`saneago_salt_v1_${t}`),r=await window.crypto.subtle.digest(`SHA-256`,n);return Array.from(new Uint8Array(r)).map(e=>e.toString(16).padStart(2,`0`)).join(``)}function s(){if(typeof crypto.randomUUID==`function`)return crypto.randomUUID();let e=new Uint8Array(16);window.crypto.getRandomValues(e),e[6]=e[6]&15|64,e[8]=e[8]&63|128;let t=Array.from(e).map(e=>e.toString(16).padStart(2,`0`)).join(``);return`${t.slice(0,8)}-${t.slice(8,12)}-${t.slice(12,16)}-${t.slice(16,20)}-${t.slice(20)}`}function c(){let e=`saneago_client_device_id`,t=localStorage.getItem(e);return t||(t=s(),localStorage.setItem(e,t)),t}var l={PROFILE:`saneago_profile`,SUBJECTS:`saneago_subjects`,TOPICS:`saneago_topics`,SELECTED_ROLES:`saneago_selected_roles`,CUSTOM_ROLES:`saneago_custom_roles`,TASKS:`saneago_tasks`,SESSIONS:`saneago_sessions`,ACTIVE_TIMER:`saneago_active_timer`,MATERIALS:`saneago_materials`,NOTES:`saneago_notes`,CUSTOM_QUESTIONS:`saneago_custom_questions`,ATTEMPTS:`saneago_attempts`,MOCK_EXAMS:`saneago_mock_exams`,MOCK_RESULTS:`saneago_mock_results`,SPACED_REVIEWS:`saneago_spaced_reviews`,ERROR_NOTEBOOK:`saneago_error_notebook`,GOALS:`saneago_goals`,SUPABASE_CONFIG:`saneago_supabase_config`,PENDING_SYNC:`saneago_pending_sync`},u=new Set;function d(e){return u.add(e),()=>u.delete(e)}function f(e,t){u.forEach(n=>{try{n(e,t)}catch(e){console.error(`Erro no ouvinte de estado:`,e)}})}function p(e,t=null){try{let n=localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return console.error(`Erro ao ler ${e} do localStorage:`,n),t}}function m(e,t){try{localStorage.setItem(e,JSON.stringify(t)),h()}catch(t){console.error(`Erro ao salvar ${e} no localStorage:`,t)}}function h(){localStorage.setItem(l.PENDING_SYNC,`true`)}function g(){localStorage.removeItem(l.PENDING_SYNC)}function _(){return p(l.PROFILE,null)}function v(e){m(l.PROFILE,e),f(`profile`,e)}function y(){let t=p(l.SUBJECTS,null);return t||(t=e.map(e=>({id:e.id,name:e.name,color:e.color,description:e.description,orderIndex:e.orderIndex})),m(l.SUBJECTS,t)),t}function ee(e){let t=y(),n=t.findIndex(t=>t.id===e.id);n>=0?t[n]={...t[n],...e}:t.push(e),m(l.SUBJECTS,t),f(`subjects`,t)}function b(){let t=p(l.TOPICS,null);return t||(t=[],e.forEach(e=>{e.topics.forEach(n=>{t.push({id:n.id,subjectId:e.id,name:n.name,description:n.description,orderIndex:n.orderIndex,difficulty:n.difficulty,masteryLevel:n.masteryLevel,status:n.status,trackStage:n.trackStage,roleIds:n.roleIds||[],totalStudiedSeconds:0,lastStudiedAt:null,nextReviewAt:null,notes:``})})}),m(l.TOPICS,t)),t}function te(e,t){let n=b(),r=n.findIndex(t=>t.id===e);return r>=0?(n[r]={...n[r],...t},m(l.TOPICS,n),f(`topics`,n),n[r]):null}function ne(e){let t=b(),n=t.findIndex(t=>t.id===e.id);n>=0?t[n]={...t[n],...e}:t.push(e),m(l.TOPICS,t),f(`topics`,t)}function re(){let e=ie();return[...n,...e]}function ie(){return p(l.CUSTOM_ROLES,[])}function x(e){let t=ie(),n=t.findIndex(t=>t.id===e.id);n>=0?t[n]=e:t.push(e),m(l.CUSTOM_ROLES,t),f(`roles`,re())}function ae(){return p(l.SELECTED_ROLES,[`agente_saneamento`])}function oe(e){m(l.SELECTED_ROLES,e),f(`selected_roles`,e)}function S(){return p(l.TASKS,[])}function C(e){let t=S();e.id||=`tsk_${s().slice(0,8)}`,e.updatedAt=new Date().toISOString();let n=t.findIndex(t=>t.id===e.id);return n>=0?t[n]={...t[n],...e}:t.push(e),m(l.TASKS,t),f(`tasks`,t),e}function se(e){let t=S();t=t.filter(t=>t.id!==e),m(l.TASKS,t),f(`tasks`,t)}function w(){return p(l.SESSIONS,[])}function ce(e){let t=w();if(e.id||=`ses_${s().slice(0,8)}`,t.unshift(e),m(l.SESSIONS,t),e.topicId&&e.durationSeconds>0){let t=b().find(t=>t.id===e.topicId);t&&te(e.topicId,{totalStudiedSeconds:(t.totalStudiedSeconds||0)+e.durationSeconds,lastStudiedAt:e.endedAt,status:t.status===`nao_iniciado`?`em_andamento`:t.status})}return f(`sessions`,t),e}function le(e){let t=w();t=t.filter(t=>t.id!==e),m(l.SESSIONS,t),f(`sessions`,t)}function T(){return p(l.ACTIVE_TIMER,null)}function E(e){e?localStorage.setItem(l.ACTIVE_TIMER,JSON.stringify(e)):localStorage.removeItem(l.ACTIVE_TIMER)}function ue(){let e=p(l.MATERIALS,null);return e||(e=[...t],m(l.MATERIALS,e)),e}function de(e){let t=ue();e.id||=`mat_${s().slice(0,8)}`,e.updatedAt=new Date().toISOString();let n=t.findIndex(t=>t.id===e.id);return n>=0?t[n]={...t[n],...e}:t.unshift(e),m(l.MATERIALS,t),f(`materials`,t),e}function fe(e){let t=ue();t=t.filter(t=>t.id!==e),m(l.MATERIALS,t),f(`materials`,t)}function pe(){return p(l.NOTES,[])}function me(e){let t=pe(),n=new Date().toISOString();e.id||(e.id=`not_${s().slice(0,8)}`,e.createdAt=n),e.updatedAt=n;let r=t.findIndex(t=>t.id===e.id);return r>=0?t[r]={...t[r],...e}:t.unshift(e),m(l.NOTES,t),f(`notes`,t),e}function he(e){let t=pe();t=t.filter(t=>t.id!==e),m(l.NOTES,t),f(`notes`,t)}function ge(){return p(l.CUSTOM_QUESTIONS,[])}function _e(e){let t=ge();return e.id||=`cq_${s().slice(0,8)}`,e.createdAt=new Date().toISOString(),t.unshift(e),m(l.CUSTOM_QUESTIONS,t),f(`custom_questions`,t),e}function D(){return p(l.ATTEMPTS,[])}function ve(e){let t=D();return e.id||=`att_${s().slice(0,8)}`,e.createdAt=new Date().toISOString(),t.unshift(e),m(l.ATTEMPTS,t),f(`attempts`,t),e}function ye(){return p(l.MOCK_RESULTS,[])}function be(e){let t=ye();return e.id||=`mkr_${s().slice(0,8)}`,e.completedAt=new Date().toISOString(),t.unshift(e),m(l.MOCK_RESULTS,t),f(`mock_results`,t),e}function xe(){return p(l.SPACED_REVIEWS,[])}function Se(e){let t=xe();e.id||=`rev_${s().slice(0,8)}`;let n=t.findIndex(t=>t.id===e.id);return n>=0?t[n]={...t[n],...e}:t.push(e),m(l.SPACED_REVIEWS,t),f(`spaced_reviews`,t),e}function Ce(){return p(l.ERROR_NOTEBOOK,[])}function we(e){let t=Ce();return e.id||=`err_${s().slice(0,8)}`,e.createdAt=new Date().toISOString(),e.status=e.status||`pendente`,t.unshift(e),m(l.ERROR_NOTEBOOK,t),f(`error_notebook`,t),e}function Te(e,t){let n=Ce(),r=n.findIndex(t=>t.id===e);return r>=0?(n[r]={...n[r],...t,updatedAt:new Date().toISOString()},m(l.ERROR_NOTEBOOK,n),f(`error_notebook`,n),n[r]):null}function Ee(){return p(l.GOALS,{dailyStudyMinutes:120,weeklyStudyMinutes:600,dailyQuestionsCount:15,weeklyReviewsCount:5,restDays:[`dom`],targetExamDate:null})}function De(e){m(l.GOALS,e),f(`goals`,e)}function Oe(){return p(l.SUPABASE_CONFIG,{url:``,anonKey:``,isConfigured:!1,lastSyncTime:null})}function ke(e){m(l.SUPABASE_CONFIG,e),f(`supabase_config`,e)}function Ae(){return{version:`1.0`,appName:`Saneago Study`,exportedAt:new Date().toISOString(),profile:_(),goals:Ee(),selectedRoles:ae(),customRoles:ie(),subjects:y(),topics:b(),tasks:S(),sessions:w(),materials:ue(),notes:pe(),customQuestions:ge(),attempts:D(),mockResults:ye(),spacedReviews:xe(),errorNotebook:Ce()}}function je(e){return!e||typeof e!=`object`?{valid:!1,error:`Arquivo JSON inválido ou vazio.`}:!e.profile&&!e.subjects&&!e.tasks?{valid:!1,error:`Estrutura do backup não reconhecida como dados do Saneago Study.`}:{valid:!0,summary:{profileName:e.profile?.name||`Desconhecido`,tasksCount:e.tasks?.length||0,sessionsCount:e.sessions?.length||0,notesCount:e.notes?.length||0,errorsCount:e.errorNotebook?.length||0}}}function Me(e,t=`replace`){let n=je(e);if(!n.valid)throw Error(n.error);if(t===`replace`)e.profile&&m(l.PROFILE,e.profile),e.goals&&m(l.GOALS,e.goals),e.selectedRoles&&m(l.SELECTED_ROLES,e.selectedRoles),e.customRoles&&m(l.CUSTOM_ROLES,e.customRoles),e.subjects&&m(l.SUBJECTS,e.subjects),e.topics&&m(l.TOPICS,e.topics),e.tasks&&m(l.TASKS,e.tasks),e.sessions&&m(l.SESSIONS,e.sessions),e.materials&&m(l.MATERIALS,e.materials),e.notes&&m(l.NOTES,e.notes),e.customQuestions&&m(l.CUSTOM_QUESTIONS,e.customQuestions),e.attempts&&m(l.ATTEMPTS,e.attempts),e.mockResults&&m(l.MOCK_RESULTS,e.mockResults),e.spacedReviews&&m(l.SPACED_REVIEWS,e.spacedReviews),e.errorNotebook&&m(l.ERROR_NOTEBOOK,e.errorNotebook);else{let t=(e,t)=>{if(!Array.isArray(t))return;let n=p(e,[]),r=new Map(n.map(e=>[e.id,e]));t.forEach(e=>{e.id&&r.set(e.id,e)}),m(e,Array.from(r.values()))};e.tasks&&t(l.TASKS,e.tasks),e.sessions&&t(l.SESSIONS,e.sessions),e.materials&&t(l.MATERIALS,e.materials),e.notes&&t(l.NOTES,e.notes),e.customQuestions&&t(l.CUSTOM_QUESTIONS,e.customQuestions),e.attempts&&t(l.ATTEMPTS,e.attempts),e.mockResults&&t(l.MOCK_RESULTS,e.mockResults),e.spacedReviews&&t(l.SPACED_REVIEWS,e.spacedReviews),e.errorNotebook&&t(l.ERROR_NOTEBOOK,e.errorNotebook)}return f(`imported`,t),!0}function Ne(){let e=w(),t=y(),n=b(),r=new Map(t.map(e=>[e.id,e.name])),i=new Map(n.map(e=>[e.id,e.name])),a=`ID,Data,Inicio,Termino,Duracao_Minutos,Materia,Assunto,Observacoes
`;return e.forEach(e=>{let t=e.startedAt?e.startedAt.slice(0,10):``,n=e.startedAt?e.startedAt.slice(11,19):``,o=e.endedAt?e.endedAt.slice(11,19):``,s=Math.round((e.durationSeconds||0)/60),c=(r.get(e.subjectId)||``).replace(/"/g,`""`),l=(i.get(e.topicId)||``).replace(/"/g,`""`),u=(e.notes||``).replace(/"/g,`""`).replace(/\n/g,` `);a+=`"${e.id}","${t}","${n}","${o}",${s},"${c}","${l}","${u}"\n`}),a}function Pe(){let e=Ce(),t=y(),n=b(),r=new Map(t.map(e=>[e.id,e.name])),i=new Map(n.map(e=>[e.id,e.name])),a=`ID,Data,Materia,Assunto,Alternativa_Marcada,Gabarito,Motivo_Erro,Status,Anotacoes
`;return e.forEach(e=>{let t=e.createdAt?e.createdAt.slice(0,10):``,n=(r.get(e.subjectId)||``).replace(/"/g,`""`),o=(i.get(e.topicId)||``).replace(/"/g,`""`),s=(e.errorReason||``).replace(/"/g,`""`),c=(e.status||``).replace(/"/g,`""`),l=(e.notes||``).replace(/"/g,`""`).replace(/\n/g,` `);a+=`"${e.id}","${t}","${n}","${o}","${e.chosenLetter||``}","${e.correctLetter||``}","${s}","${c}","${l}"\n`}),a}function Fe(){Object.values(l).forEach(e=>localStorage.removeItem(e)),f(`reset`,null)}var Ie=[1,7,30],Le=[{id:`nao_conhecia`,label:`Não conhecia o conteúdo`,icon:`help-circle`},{id:`esqueci`,label:`Esqueci o conteúdo`,icon:`clock`},{id:`interpretei_errado`,label:`Interpretei errado o enunciado`,icon:`alert-triangle`},{id:`desatencao`,label:`Errei por pura desatenção`,icon:`eye-off`},{id:`confundi_conceitos`,label:`Confundi conceitos semelhantes`,icon:`shuffle`},{id:`calculo_incorreto`,label:`Fiz um cálculo incorreto`,icon:`hash`},{id:`outro`,label:`Outro motivo`,icon:`more-horizontal`}];function Re(e,t,n=new Date,r=0){let i=r+1,a=Ie[r]||30,o=new Date(n);o.setDate(o.getDate()+a);let c=o.toISOString().slice(0,10),l={id:`rev_${s().slice(0,8)}`,topicId:e,subjectId:t,reviewStage:i,dueDate:c,status:`pendente`,completedAt:null};return Se(l),te(e,{nextReviewAt:o.toISOString()}),l}function ze(e,t=`realizada`){let n=xe().find(t=>t.id===e);return n?(n.status=t,n.completedAt=new Date().toISOString(),Se(n),t===`realizada`?n.reviewStage<Ie.length&&Re(n.topicId,n.subjectId,new Date,n.reviewStage):t===`preciso_estudar_novamente`&&Re(n.topicId,n.subjectId,new Date,0),n):null}function Be(){let e=xe(),t=new Date().toISOString().slice(0,10),n=[],r=[],i=[],a=[];return e.forEach(e=>{e.status===`realizada`||e.status===`preciso_estudar_novamente`?a.push(e):e.dueDate<t?r.push(e):e.dueDate===t?n.push(e):i.push(e)}),{dueToday:n,overdue:r,upcoming:i,completed:a}}var Ve=Symbol.for(`@supabase/supabase-js.traceContextExtractor`);function He(){return globalThis[Ve]}function Ue(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function We(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})}var Ge=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),Ke=class extends Error{constructor(e,t=`FunctionsError`,n){super(e),this.name=t,this.context=n}toJSON(){return{name:this.name,message:this.message,context:this.context}}},qe=class extends Ke{constructor(e){super(`Failed to send a request to the Edge Function`,`FunctionsFetchError`,e)}},Je=class extends Ke{constructor(e){super(`Relay Error invoking the Edge Function`,`FunctionsRelayError`,e)}},Ye=class extends Ke{constructor(e){super(`Edge Function returned a non-2xx status code`,`FunctionsHttpError`,e)}},Xe;(function(e){e.Any=`any`,e.ApNortheast1=`ap-northeast-1`,e.ApNortheast2=`ap-northeast-2`,e.ApSouth1=`ap-south-1`,e.ApSoutheast1=`ap-southeast-1`,e.ApSoutheast2=`ap-southeast-2`,e.CaCentral1=`ca-central-1`,e.EuCentral1=`eu-central-1`,e.EuWest1=`eu-west-1`,e.EuWest2=`eu-west-2`,e.EuWest3=`eu-west-3`,e.SaEast1=`sa-east-1`,e.UsEast1=`us-east-1`,e.UsWest1=`us-west-1`,e.UsWest2=`us-west-2`})(Xe||={});var Ze=class{constructor(e,{headers:t={},customFetch:n,region:r=Xe.Any}={}){this.url=e,this.headers=t,this.region=r,this.fetch=Ge(n)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e){return We(this,arguments,void 0,function*(e,t={}){var n;let r,i,a;try{let{headers:n,method:o,body:s,signal:c,timeout:l}=t,u={},{region:d}=t;d||=this.region;let f=new URL(`${this.url}/${e}`);d&&d!==`any`&&(u[`x-region`]=d,f.searchParams.set(`forceFunctionRegion`,d));let p,m=!!n&&Object.keys(n).some(e=>e.toLowerCase()===`content-type`);s&&!m?typeof Blob<`u`&&s instanceof Blob||s instanceof ArrayBuffer?(u[`Content-Type`]=s.type||`application/octet-stream`,p=s):typeof s==`string`?(u[`Content-Type`]=`text/plain`,p=s):typeof FormData<`u`&&s instanceof FormData?p=s:(u[`Content-Type`]=`application/json`,p=JSON.stringify(s)):p=s&&typeof s!=`string`&&!(typeof Blob<`u`&&s instanceof Blob)&&!(s instanceof ArrayBuffer)&&!(typeof FormData<`u`&&s instanceof FormData)?JSON.stringify(s):s;let h=c;l&&(i=new AbortController,r=setTimeout(()=>i.abort(),l),c?(h=i.signal,a=()=>i.abort(),c.addEventListener(`abort`,a)):h=i.signal);let g=yield this.fetch(f.toString(),{method:o||`POST`,headers:Object.assign(Object.assign(Object.assign({},u),this.headers),n),body:p,signal:h}).catch(e=>{throw new qe(e)}),_=g.headers.get(`x-relay-error`);if(_&&_===`true`)throw new Je(g);if(!g.ok)throw new Ye(g);let v=(g.headers.get(`Content-Type`)??`text/plain`).split(`;`)[0].trim().toLowerCase(),y;return y=v===`application/json`?yield g.json():v===`application/octet-stream`||v===`application/pdf`?yield g.blob():v===`text/event-stream`?g:v===`multipart/form-data`?yield g.formData():yield g.text(),{data:y,error:null,response:g}}catch(e){return{data:null,error:e,response:e instanceof Ye||e instanceof Je?e.context:void 0}}finally{r&&clearTimeout(r),a&&((n=t.signal)==null||n.removeEventListener(`abort`,a))}})}},Qe=class extends Error{constructor(e){super(e.message),this.name=`PostgrestError`,this.details=e.details,this.hint=e.hint,this.code=e.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}},$e=3,et=e=>Math.min(1e3*2**e,3e4),tt=[520,503],nt=[`GET`,`HEAD`,`OPTIONS`];function rt(e){"@babel/helpers - typeof";return rt=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},rt(e)}function it(e,t){if(rt(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(rt(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function at(e){var t=it(e,`string`);return rt(t)==`symbol`?t:t+``}function ot(e,t,n){return(t=at(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function st(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ct(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?st(Object(n),!0).forEach(function(t){ot(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):st(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function lt(e,t){return new Promise(n=>{if(t?.aborted){n();return}let r=setTimeout(()=>{t?.removeEventListener(`abort`,i),n()},e);function i(){clearTimeout(r),n()}t?.addEventListener(`abort`,i)})}function ut(e,t,n,r){return!(!r||n>=$e||!nt.includes(e)||!tt.includes(t))}async function dt(e,t,n,r){let i=0;for(;;){let a=ct({},n.headers);i>0&&(a[`X-Retry-Count`]=String(i));let o;try{o=await e(t,{method:n.method,headers:a,body:n.body,signal:n.signal})}catch(e){if(e?.name===`AbortError`||e?.code===`ABORT_ERR`||e?.name===`TimeoutError`&&n.signal?.aborted||!nt.includes(n.method))throw e;if(r&&i<$e){let e=et(i);i++,await lt(e,n.signal);continue}throw e}if(ut(n.method,o.status,i,r)){let e=o.headers?.get(`Retry-After`)??null,t=e===null?et(i):Math.max(0,parseInt(e,10)||0)*1e3;await o.text(),i++,await lt(t,n.signal)}else return o}}var ft=class{constructor(e){this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=e.method,this.url=e.url,this.headers=new Headers(e.headers),this.schema=e.schema,this.body=e.body,this.shouldThrowOnError=e.shouldThrowOnError??!1,this.signal=e.signal,this.isMaybeSingle=e.isMaybeSingle??!1,this.shouldStripNulls=e.shouldStripNulls??!1,this.urlLengthLimit=e.urlLengthLimit??8e3,this.retryEnabled=e.retry??!0,this.fetch=e.fetch?e.fetch:fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get(`Accept`)===`text/csv`)throw Error(`stripNulls() cannot be used with csv()`);return this.shouldStripNulls=!0,this}setHeader(e,t){return this.headers=new Headers(this.headers),this.headers.set(e,t),this}retry(e){return this.retryEnabled=e,this}then(e,t){var n=this;if(this.schema===void 0||([`GET`,`HEAD`].includes(this.method)?this.headers.set(`Accept-Profile`,this.schema):this.headers.set(`Content-Profile`,this.schema)),this.method!==`GET`&&this.method!==`HEAD`&&this.headers.set(`Content-Type`,`application/json`),this.shouldStripNulls){let e=this.headers.get(`Accept`);e===`application/vnd.pgrst.object+json`?this.headers.set(`Accept`,`application/vnd.pgrst.object+json;nulls=stripped`):e&&e!==`application/json`||this.headers.set(`Accept`,`application/vnd.pgrst.array+json;nulls=stripped`)}let r=this.fetch,i=(async()=>{let e={};n.headers.forEach((t,n)=>{e[n]=t});let t=await dt(r,n.url.toString(),{method:n.method,headers:e,body:JSON.stringify(n.body,(e,t)=>typeof t==`bigint`?t.toString():t),signal:n.signal},n.retryEnabled);return await n.processResponse(t)})();return this.shouldThrowOnError||(i=i.catch(e=>{let t=``,n=``,r=``,i=e?.cause;if(i){let n=i?.message??``,r=i?.code??``;t=`${e?.name??`FetchError`}: ${e?.message}`,t+=`\n\nCaused by: ${i?.name??`Error`}: ${n}`,r&&(t+=` (${r})`),i?.stack&&(t+=`\n${i.stack}`)}else t=e?.stack??``;let a=this.url.toString().length;return e?.name===`AbortError`||e?.code===`ABORT_ERR`?(r=``,n=`Request was aborted (timeout or manual cancellation)`,a>this.urlLengthLimit&&(n+=`. Note: Your request URL is ${a} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):(i?.name===`HeadersOverflowError`||i?.code===`UND_ERR_HEADERS_OVERFLOW`)&&(r=``,n=`HTTP headers exceeded server limits (typically 16KB)`,a>this.urlLengthLimit&&(n+=`. Your request URL is ${a} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${e?.name??`FetchError`}: ${e?.message}`,details:t,hint:n,code:r},data:null,count:null,status:0,statusText:``}})),i.then(e,t)}async processResponse(e){var t=this;let n=null,r=null,i=null,a=e.status,o=e.statusText;if(e.ok){if(t.method!==`HEAD`){let i=await e.text();if(i!==``){if(t.headers.get(`Accept`)===`text/csv`)r=i;else if(t.headers.get(`Accept`)&&t.headers.get(`Accept`)?.includes(`application/vnd.pgrst.plan+text`))r=i;else try{r=JSON.parse(i)}catch{if(n={message:i},r=null,t.shouldThrowOnError)throw new Qe({message:i,details:``,hint:``,code:``})}}}let s=t.headers.get(`Prefer`)?.match(/count=(exact|planned|estimated)/),c=e.headers.get(`content-range`)?.split(`/`);if(s&&c&&c.length>1&&(i=parseInt(c[1])),t.isMaybeSingle&&Array.isArray(r)){if(r.length>1){if(n={code:`PGRST116`,details:`Results contain ${r.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:`JSON object requested, multiple (or no) rows returned`},r=null,i=null,a=406,o=`Not Acceptable`,t.shouldThrowOnError)throw new Qe(ct(ct({},n),{},{hint:n.hint??``}))}else r=r.length===1?r[0]:null}}else{let i=await e.text();try{n=JSON.parse(i),Array.isArray(n)&&e.status===404&&(r=[],n=null,a=200,o=`OK`)}catch{e.status===404&&i===``?(a=204,o=`No Content`):n={message:i}}if(n&&t.shouldThrowOnError)throw new Qe(n)}return{success:n===null,error:n,data:r,count:i,status:a,statusText:o}}returns(){return this}overrideTypes(){return this}},pt=class extends ft{throwOnError(){return super.throwOnError()}select(e){let t=!1,n=(e??`*`).split(``).map(e=>/\s/.test(e)&&!t?``:(e===`"`&&(t=!t),e)).join(``);return this.url.searchParams.set(`select`,n),this.headers.append(`Prefer`,`return=representation`),this}order(e,{ascending:t=!0,nullsFirst:n,foreignTable:r,referencedTable:i=r}={}){let a=i?`${i}.order`:`order`,o=this.url.searchParams.get(a);return this.url.searchParams.set(a,`${o?`${o},`:``}${e}.${t?`asc`:`desc`}${n===void 0?``:n?`.nullsfirst`:`.nullslast`}`),this}limit(e,{foreignTable:t,referencedTable:n=t}={}){let r=n===void 0?`limit`:`${n}.limit`;return this.url.searchParams.set(r,`${e}`),this}range(e,t,{foreignTable:n,referencedTable:r=n}={}){let i=r===void 0?`offset`:`${r}.offset`,a=r===void 0?`limit`:`${r}.limit`;return this.url.searchParams.set(i,`${e}`),this.url.searchParams.set(a,`${t-e+1}`),this}abortSignal(e){return this.signal=e,this}single(){return this.headers.set(`Accept`,`application/vnd.pgrst.object+json`),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set(`Accept`,`text/csv`),this}geojson(){return this.headers.set(`Accept`,`application/geo+json`),this}explain({analyze:e=!1,verbose:t=!1,settings:n=!1,buffers:r=!1,wal:i=!1,format:a=`text`}={}){let o=[e?`analyze`:null,t?`verbose`:null,n?`settings`:null,r?`buffers`:null,i?`wal`:null].filter(Boolean).join(`|`),s=this.headers.get(`Accept`)??`application/json`;return this.headers.set(`Accept`,`application/vnd.pgrst.plan+${a}; for="${s}"; options=${o};`),this}rollback(){return this.headers.append(`Prefer`,`tx=rollback`),this}returns(){return this}maxAffected(e){return this.headers.append(`Prefer`,`handling=strict`),this.headers.append(`Prefer`,`max-affected=${e}`),this}},mt=RegExp(`[,()]`),ht=class extends pt{throwOnError(){return super.throwOnError()}eq(e,t){return this.url.searchParams.append(e,`eq.${t}`),this}neq(e,t){return this.url.searchParams.append(e,`neq.${t}`),this}gt(e,t){return this.url.searchParams.append(e,`gt.${t}`),this}gte(e,t){return this.url.searchParams.append(e,`gte.${t}`),this}lt(e,t){return this.url.searchParams.append(e,`lt.${t}`),this}lte(e,t){return this.url.searchParams.append(e,`lte.${t}`),this}like(e,t){return this.url.searchParams.append(e,`like.${t}`),this}likeAllOf(e,t){return this.url.searchParams.append(e,`like(all).{${t.join(`,`)}}`),this}likeAnyOf(e,t){return this.url.searchParams.append(e,`like(any).{${t.join(`,`)}}`),this}ilike(e,t){return this.url.searchParams.append(e,`ilike.${t}`),this}ilikeAllOf(e,t){return this.url.searchParams.append(e,`ilike(all).{${t.join(`,`)}}`),this}ilikeAnyOf(e,t){return this.url.searchParams.append(e,`ilike(any).{${t.join(`,`)}}`),this}regexMatch(e,t){return this.url.searchParams.append(e,`match.${t}`),this}regexIMatch(e,t){return this.url.searchParams.append(e,`imatch.${t}`),this}is(e,t){return this.url.searchParams.append(e,`is.${t}`),this}isDistinct(e,t){return this.url.searchParams.append(e,`isdistinct.${t}`),this}in(e,t){let n=Array.from(new Set(t)).map(e=>typeof e==`string`&&mt.test(e)?`"${e}"`:`${e}`).join(`,`);return this.url.searchParams.append(e,`in.(${n})`),this}notIn(e,t){let n=Array.from(new Set(t)).map(e=>typeof e==`string`&&mt.test(e)?`"${e}"`:`${e}`).join(`,`);return this.url.searchParams.append(e,`not.in.(${n})`),this}contains(e,t){return typeof t==`string`?this.url.searchParams.append(e,`cs.${t}`):Array.isArray(t)?this.url.searchParams.append(e,`cs.{${t.join(`,`)}}`):this.url.searchParams.append(e,`cs.${JSON.stringify(t)}`),this}containedBy(e,t){return typeof t==`string`?this.url.searchParams.append(e,`cd.${t}`):Array.isArray(t)?this.url.searchParams.append(e,`cd.{${t.join(`,`)}}`):this.url.searchParams.append(e,`cd.${JSON.stringify(t)}`),this}rangeGt(e,t){return this.url.searchParams.append(e,`sr.${t}`),this}rangeGte(e,t){return this.url.searchParams.append(e,`nxl.${t}`),this}rangeLt(e,t){return this.url.searchParams.append(e,`sl.${t}`),this}rangeLte(e,t){return this.url.searchParams.append(e,`nxr.${t}`),this}rangeAdjacent(e,t){return this.url.searchParams.append(e,`adj.${t}`),this}overlaps(e,t){return typeof t==`string`?this.url.searchParams.append(e,`ov.${t}`):this.url.searchParams.append(e,`ov.{${t.join(`,`)}}`),this}textSearch(e,t,{config:n,type:r}={}){let i=``;r===`plain`?i=`pl`:r===`phrase`?i=`ph`:r===`websearch`&&(i=`w`);let a=n===void 0?``:`(${n})`;return this.url.searchParams.append(e,`${i}fts${a}.${t}`),this}match(e){return Object.entries(e).filter(([e,t])=>t!==void 0).forEach(([e,t])=>{this.url.searchParams.append(e,`eq.${t}`)}),this}not(e,t,n){return this.url.searchParams.append(e,`not.${t}.${n}`),this}or(e,{foreignTable:t,referencedTable:n=t}={}){let r=n?`${n}.or`:`or`;return this.url.searchParams.append(r,`(${e})`),this}filter(e,t,n){return this.url.searchParams.append(e,`${t}.${n}`),this}},gt=class{constructor(e,{headers:t={},schema:n,fetch:r,urlLengthLimit:i=8e3,retry:a}){this.url=e,this.headers=new Headers(t),this.schema=n,this.fetch=r,this.urlLengthLimit=i,this.retry=a}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(e,t){let{head:n=!1,count:r}=t??{},i=n?`HEAD`:`GET`,a=!1,o=(e??`*`).split(``).map(e=>/\s/.test(e)&&!a?``:(e===`"`&&(a=!a),e)).join(``),{url:s,headers:c}=this.cloneRequestState();return s.searchParams.set(`select`,o),r&&c.append(`Prefer`,`count=${r}`),new ht({method:i,url:s,headers:c,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(e,{count:t,defaultToNull:n=!0}={}){let{url:r,headers:i}=this.cloneRequestState();if(t&&i.append(`Prefer`,`count=${t}`),n||i.append(`Prefer`,`missing=default`),Array.isArray(e)){let t=e.reduce((e,t)=>e.concat(Object.keys(t)),[]);if(t.length>0){let e=[...new Set(t)].map(e=>`"${e}"`);r.searchParams.set(`columns`,e.join(`,`))}}return new ht({method:`POST`,url:r,headers:i,schema:this.schema,body:e,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(e,{onConflict:t,ignoreDuplicates:n=!1,count:r,defaultToNull:i=!0}={}){let{url:a,headers:o}=this.cloneRequestState();if(o.append(`Prefer`,`resolution=${n?`ignore`:`merge`}-duplicates`),t!==void 0&&a.searchParams.set(`on_conflict`,t),r&&o.append(`Prefer`,`count=${r}`),i||o.append(`Prefer`,`missing=default`),Array.isArray(e)){let t=e.reduce((e,t)=>e.concat(Object.keys(t)),[]);if(t.length>0){let e=[...new Set(t)].map(e=>`"${e}"`);a.searchParams.set(`columns`,e.join(`,`))}}return new ht({method:`POST`,url:a,headers:o,schema:this.schema,body:e,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(e,{count:t}={}){let{url:n,headers:r}=this.cloneRequestState();return t&&r.append(`Prefer`,`count=${t}`),new ht({method:`PATCH`,url:n,headers:r,schema:this.schema,body:e,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:e}={}){let{url:t,headers:n}=this.cloneRequestState();return e&&n.append(`Prefer`,`count=${e}`),new ht({method:`DELETE`,url:t,headers:n,schema:this.schema,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};function _t(e,t){try{let t=JSON.parse(e);if(t&&typeof t==`object`&&!Array.isArray(t))return new Qe({message:String(t.message??e),details:t.details??``,hint:t.hint??``,code:t.code??``})}catch{}return new Qe({message:e||t,details:``,hint:``,code:``})}function vt(e,t,n){let r=e;return{success:!1,error:new Qe({message:`${r?.name??`FetchError`}: ${r?.message}`,details:``,hint:``,code:``}),data:null,count:null,status:t,statusText:n}}var yt=class e{constructor(e,{headers:t={},schema:n,fetch:r,timeout:i,urlLengthLimit:a=8e3,retry:o}={}){this.url=e,this.headers=new Headers(t),this.schemaName=n,this.urlLengthLimit=a;let s=r??globalThis.fetch;this.fetch=i!==void 0&&i>0?(e,t)=>{let n=new AbortController,r=setTimeout(()=>n.abort(),i),a=t?.signal;if(a){if(a.aborted)return clearTimeout(r),s(e,t);let i=()=>{clearTimeout(r),n.abort()};return a.addEventListener(`abort`,i,{once:!0}),s(e,ct(ct({},t),{},{signal:n.signal})).finally(()=>{clearTimeout(r),a.removeEventListener(`abort`,i)})}return s(e,ct(ct({},t),{},{signal:n.signal})).finally(()=>clearTimeout(r))}:s,this.retry=o}from(e){if(!e||typeof e!=`string`||e.trim()===``)throw Error(`Invalid relation name: relation must be a non-empty string.`);return new gt(new URL(`${this.url}/${e}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(t){return new e(this.url,{headers:this.headers,schema:t,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}async getOpenApiSpec(){var e=this;let t=new Headers(e.headers);t.set(`Accept`,`application/openapi+json`),e.schemaName&&t.set(`Accept-Profile`,e.schemaName);let n={};t.forEach((e,t)=>{n[t]=e});let r=e.fetch??globalThis.fetch,i;try{i=await dt(r,`${e.url}/`,{method:`GET`,headers:n},e.retry??!0)}catch(e){return vt(e,0,``)}let a;try{a=await i.text()}catch(e){return vt(e,i.status,i.statusText)}if(i.ok)try{return{success:!0,error:null,data:JSON.parse(a),count:null,status:i.status,statusText:i.statusText}}catch{}return{success:!1,error:_t(a,i.statusText),data:null,count:null,status:i.status,statusText:i.statusText}}rpc(e,t={},{head:n=!1,get:r=!1,count:i}={}){let a,o=new URL(`${this.url}/rpc/${e}`),s,c=e=>typeof e==`object`&&!!e&&(!Array.isArray(e)||e.some(c)),l=n&&Object.values(t).some(c);l?(a=`POST`,s=t):n||r?(a=n?`HEAD`:`GET`,Object.entries(t).filter(([e,t])=>t!==void 0).map(([e,t])=>[e,Array.isArray(t)?`{${t.join(`,`)}}`:`${t}`]).forEach(([e,t])=>{o.searchParams.append(e,t)})):(a=`POST`,s=t);let u=new Headers(this.headers);return l?u.set(`Prefer`,i?`count=${i},return=minimal`:`return=minimal`):i&&u.set(`Prefer`,`count=${i}`),new ht({method:a,url:o,headers:u,schema:this.schemaName,body:s,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}},bt=class{constructor(){}static detectEnvironment(){if(typeof WebSocket<`u`)return{type:`native`,wsConstructor:WebSocket};let e=globalThis;if(typeof globalThis<`u`&&e.WebSocket!==void 0)return{type:`native`,wsConstructor:e.WebSocket};let t=typeof global<`u`?global:void 0;if(t&&t.WebSocket!==void 0)return{type:`native`,wsConstructor:t.WebSocket};if(typeof globalThis<`u`&&e.WebSocketPair!==void 0&&globalThis.WebSocket===void 0)return{type:`cloudflare`,error:`Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.`,workaround:`Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime.`};if(typeof globalThis<`u`&&e.EdgeRuntime||typeof navigator<`u`&&navigator.userAgent?.includes(`Vercel-Edge`))return{type:`unsupported`,error:`Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.`,workaround:`Use serverless functions or a different deployment target for WebSocket functionality.`};let n=globalThis.process;if(n){let e=n.versions;if(e&&e.node)return{type:`unsupported`,error:`Node.js detected but native WebSocket not found.`,workaround:`Ensure you are running Node.js 22+ or provide a WebSocket implementation via the transport option.`}}return{type:`unsupported`,error:`Unknown JavaScript runtime without WebSocket support.`,workaround:`Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation.`}}static getWebSocketConstructor(){let e=this.detectEnvironment();if(e.wsConstructor)return e.wsConstructor;let t=e.error||`WebSocket not supported in this environment.`;throw e.workaround&&(t+=`\n\nSuggested solution: ${e.workaround}`),Error(t)}static isWebSocketSupported(){try{return this.detectEnvironment().type===`native`}catch{return!1}}},xt=`realtime-js/2.118.0`,St=`1.0.0`,Ct=`2.0.0`,wt=Ct,Tt=1e4,Et=15e3,Dt=1e4,O={closed:`closed`,errored:`errored`,joined:`joined`,joining:`joining`,leaving:`leaving`},Ot={close:`phx_close`,error:`phx_error`,join:`phx_join`,reply:`phx_reply`,leave:`phx_leave`,access_token:`access_token`},kt={connecting:`connecting`,open:`open`,closing:`closing`,closed:`closed`},At=class{constructor(e){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT=`broadcast`,this.allowedMetadataKeys=[],this.allowedMetadataKeys=e??[]}encode(e,t){if(e.event===this.BROADCAST_EVENT&&!(e.payload instanceof ArrayBuffer)&&typeof e.payload.event==`string`)return t(this._binaryEncodeUserBroadcastPush(e));let n=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(n))}_binaryEncodeUserBroadcastPush(e){return this._isArrayBuffer(e.payload?.payload)?this._encodeBinaryUserBroadcastPush(e):this._encodeJsonUserBroadcastPush(e)}_encodeBinaryUserBroadcastPush(e){let t=e.payload?.payload??new ArrayBuffer(0);return this._encodeUserBroadcastPush(e,this.BINARY_ENCODING,t)}_encodeJsonUserBroadcastPush(e){let t=e.payload?.payload??{},n=new TextEncoder().encode(JSON.stringify(t)).buffer;return this._encodeUserBroadcastPush(e,this.JSON_ENCODING,n)}_encodeUserBroadcastPush(e,t,n){let r=new TextEncoder,i=r.encode(e.topic),a=r.encode(e.ref??``),o=r.encode(e.join_ref??``),s=r.encode(e.payload.event),c=this.allowedMetadataKeys?this._pick(e.payload,this.allowedMetadataKeys):{},l=r.encode(Object.keys(c).length===0?``:JSON.stringify(c));if(o.length>255)throw Error(`joinRef length ${o.length} exceeds maximum of 255`);if(a.length>255)throw Error(`ref length ${a.length} exceeds maximum of 255`);if(i.length>255)throw Error(`topic length ${i.length} exceeds maximum of 255`);if(s.length>255)throw Error(`userEvent length ${s.length} exceeds maximum of 255`);if(l.length>255)throw Error(`metadata length ${l.length} exceeds maximum of 255`);let u=this.USER_BROADCAST_PUSH_META_LENGTH+o.length+a.length+i.length+s.length+l.length,d=new ArrayBuffer(this.HEADER_LENGTH+u),f=new DataView(d),p=new Uint8Array(d),m=0;f.setUint8(m++,this.KINDS.userBroadcastPush),f.setUint8(m++,o.length),f.setUint8(m++,a.length),f.setUint8(m++,i.length),f.setUint8(m++,s.length),f.setUint8(m++,l.length),f.setUint8(m++,t),p.set(o,m),m+=o.length,p.set(a,m),m+=a.length,p.set(i,m),m+=i.length,p.set(s,m),m+=s.length,p.set(l,m),m+=l.length;var h=new Uint8Array(d.byteLength+n.byteLength);return h.set(new Uint8Array(d),0),h.set(new Uint8Array(n),d.byteLength),h.buffer}decode(e,t){if(this._isArrayBuffer(e))return t(this._binaryDecode(e));if(typeof e==`string`){let[n,r,i,a,o]=JSON.parse(e);return t({join_ref:n,ref:r,topic:i,event:a,payload:o})}return t({})}_binaryDecode(e){let t=new DataView(e),n=t.getUint8(0),r=new TextDecoder;switch(n){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(e,t,r)}}_decodeUserBroadcast(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=t.getUint8(3),o=t.getUint8(4),s=this.HEADER_LENGTH+4,c=n.decode(e.slice(s,s+r));s+=r;let l=n.decode(e.slice(s,s+i));s+=i;let u=n.decode(e.slice(s,s+a));s+=a;let d=e.slice(s,e.byteLength),f=o===this.JSON_ENCODING?JSON.parse(n.decode(d)):d,p={type:this.BROADCAST_EVENT,event:l,payload:f};return a>0&&(p.meta=JSON.parse(u)),{join_ref:null,ref:null,topic:c,event:this.BROADCAST_EVENT,payload:p}}_isArrayBuffer(e){return e instanceof ArrayBuffer||e?.constructor?.name===`ArrayBuffer`}_pick(e,t){return!e||typeof e!=`object`?{}:Object.fromEntries(Object.entries(e).filter(([e])=>t.includes(e)))}},k;(function(e){e.abstime=`abstime`,e.bool=`bool`,e.date=`date`,e.daterange=`daterange`,e.float4=`float4`,e.float8=`float8`,e.int2=`int2`,e.int4=`int4`,e.int4range=`int4range`,e.int8=`int8`,e.int8range=`int8range`,e.json=`json`,e.jsonb=`jsonb`,e.money=`money`,e.numeric=`numeric`,e.oid=`oid`,e.reltime=`reltime`,e.text=`text`,e.time=`time`,e.timestamp=`timestamp`,e.timestamptz=`timestamptz`,e.timetz=`timetz`,e.tsrange=`tsrange`,e.tstzrange=`tstzrange`})(k||={});var jt=(e,t,n={})=>{let r=n.skipTypes??[];return t?Object.keys(t).reduce((n,i)=>(n[i]=Mt(i,e,t,r),n),{}):{}},Mt=(e,t,n,r)=>{let i=t.find(t=>t.name===e)?.type,a=n[e];return i&&!r.includes(i)?Nt(i,a):Pt(a)},Nt=(e,t)=>{if(e.charAt(0)===`_`)return Rt(t,e.slice(1,e.length));switch(e){case k.bool:return Ft(t);case k.float4:case k.float8:case k.int2:case k.int4:case k.int8:case k.numeric:case k.oid:return It(t);case k.json:case k.jsonb:return Lt(t);case k.timestamp:return zt(t);case k.abstime:case k.date:case k.daterange:case k.int4range:case k.int8range:case k.money:case k.reltime:case k.text:case k.time:case k.timestamptz:case k.timetz:case k.tsrange:case k.tstzrange:return Pt(t);default:return Pt(t)}},Pt=e=>e,Ft=e=>{switch(e){case`t`:return!0;case`f`:return!1;default:return e}},It=e=>{if(typeof e==`string`){let t=parseFloat(e);if(!Number.isNaN(t))return t}return e},Lt=e=>{if(typeof e==`string`)try{return JSON.parse(e)}catch{return e}return e},Rt=(e,t)=>{if(typeof e!=`string`)return e;let n=e.length-1,r=e[n];if(e[0]===`{`&&r===`}`){let r,i=e.slice(1,n);try{r=JSON.parse(`[`+i+`]`)}catch{r=i?i.split(`,`):[]}return r.map(e=>Nt(t,e))}return e},zt=e=>typeof e==`string`?e.replace(` `,`T`):e,Bt=e=>{let t=new URL(e);return t.protocol=t.protocol.replace(/^ws/i,`http`),t.pathname=t.pathname.replace(/\/+$/,``).replace(/\/socket\/websocket$/i,``).replace(/\/socket$/i,``).replace(/\/websocket$/i,``),t.pathname===``||t.pathname===`/`?t.pathname=`/api/broadcast`:t.pathname+=`/api/broadcast`,t.href},Vt=e=>typeof e==`function`?e:function(){return e},Ht=typeof self<`u`?self:null,Ut=typeof window<`u`?window:null,A=Ht||Ut||globalThis,Wt=`2.0.0`,Gt=1e4,Kt=1e3,qt=100,j={connecting:0,open:1,closing:2,closed:3},M={closed:`closed`,errored:`errored`,joined:`joined`,joining:`joining`,leaving:`leaving`},N={close:`phx_close`,error:`phx_error`,join:`phx_join`,reply:`phx_reply`,leave:`phx_leave`},Jt={longpoll:`longpoll`,websocket:`websocket`},Yt={complete:4},Xt=`base64url.bearer.phx.`,Zt=class{constructor(e,t,n,r){this.channel=e,this.event=t,this.payload=n||function(){return{}},this.receivedResp=null,this.timeout=r,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(e){this.timeout=e,this.reset(),this.send()}send(){this.hasReceived(`timeout`)||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(e,t){return this.hasReceived(e)&&t(this.receivedResp.response),this.recHooks.push({status:e,callback:t}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:e,response:t,_ref:n}){this.recHooks.filter(t=>t.status===e).forEach(e=>e.callback(t))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,e=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=e,this.matchReceive(e)}),this.timeoutTimer=setTimeout(()=>{this.trigger(`timeout`,{})},this.timeout)}hasReceived(e){return this.receivedResp&&this.receivedResp.status===e}trigger(e,t){this.channel.trigger(this.refEvent,{status:e,response:t})}},Qt=class{constructor(e,t){this.callback=e,this.timerCalc=t,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries+=1,this.callback()},this.timerCalc(this.tries+1))}},$t=class{constructor(e,t,n){this.state=M.closed,this.topic=e,this.params=Vt(t||{}),this.socket=n,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new Zt(this,N.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new Qt(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive(`ok`,()=>{this.state=M.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(e=>e.send()),this.pushBuffer=[]}),this.joinPush.receive(`error`,e=>{this.state=M.errored,this.socket.hasLogger()&&this.socket.log(`channel`,`error ${this.topic}`,e),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log(`channel`,`close ${this.topic}`),this.state=M.closed,this.socket.remove(this)}),this.onError(e=>{this.socket.hasLogger()&&this.socket.log(`channel`,`error ${this.topic}`,e),this.isJoining()&&this.joinPush.reset(),this.state=M.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive(`timeout`,()=>{this.socket.hasLogger()&&this.socket.log(`channel`,`timeout ${this.topic}`,this.joinPush.timeout),new Zt(this,N.leave,Vt({}),this.timeout).send(),this.state=M.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(N.reply,(e,t)=>{this.trigger(this.replyEventName(t),e)})}join(e=this.timeout){if(this.joinedOnce)throw Error(`tried to join multiple times. 'join' can only be called a single time per channel instance`);return this.timeout=e,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(e=>e.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=M.closed,this.bindings=[]}onClose(e){this.on(N.close,e)}onError(e){return this.on(N.error,t=>e(t))}on(e,t){let n=this.bindingRef++;return this.bindings.push({event:e,ref:n,callback:t}),n}off(e,t){this.bindings=this.bindings.filter(n=>n.event!==e||t!==void 0&&t!==n.ref)}canPush(){return this.socket.isConnected()&&this.isJoined()}push(e,t,n=this.timeout){if(t||={},!this.joinedOnce)throw Error(`tried to push '${e}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let r=new Zt(this,e,function(){return t},n);return this.canPush()?r.send():(r.startTimeout(),this.pushBuffer.push(r)),r}leave(e=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=M.leaving;let t=()=>{this.socket.hasLogger()&&this.socket.log(`channel`,`leave ${this.topic}`),this.trigger(N.close,`leave`)},n=new Zt(this,N.leave,Vt({}),e);return n.receive(`ok`,()=>t()).receive(`timeout`,()=>t()),n.send(),this.canPush()||n.trigger(`ok`,{}),n}onMessage(e,t,n){return t}filterBindings(e,t,n){return!0}isMember(e,t,n,r){return this.topic===e?r&&r!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log(`channel`,`dropping outdated message`,{topic:e,event:t,payload:n,joinRef:r}),!1):!0:!1}joinRef(){return this.joinPush.ref}rejoin(e=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=M.joining,this.joinPush.resend(e))}trigger(e,t,n,r){let i=this.onMessage(e,t,n,r);if(t&&!i)throw Error(`channel onMessage callbacks must return the payload, modified or unmodified`);let a=this.bindings.filter(r=>r.event===e&&this.filterBindings(r,t,n));for(let e=0;e<a.length;e++)a[e].callback(i,n,r||this.joinRef())}replyEventName(e){return`chan_reply_${e}`}isClosed(){return this.state===M.closed}isErrored(){return this.state===M.errored}isJoined(){return this.state===M.joined}isJoining(){return this.state===M.joining}isLeaving(){return this.state===M.leaving}},en=class{static request(e,t,n,r,i,a,o){if(A.XDomainRequest){let n=new A.XDomainRequest;return this.xdomainRequest(n,e,t,r,i,a,o)}if(A.XMLHttpRequest){let s=new A.XMLHttpRequest;return this.xhrRequest(s,e,t,n,r,i,a,o)}if(A.fetch&&A.AbortController)return this.fetchRequest(e,t,n,r,i,a,o);throw Error(`No suitable XMLHttpRequest implementation found`)}static fetchRequest(e,t,n,r,i,a,o){let s={method:e,headers:n,body:r},c=null;return i&&(c=new AbortController,setTimeout(()=>c.abort(),i),s.signal=c.signal),A.fetch(t,s).then(e=>e.text()).then(e=>this.parseJSON(e)).then(e=>o&&o(e)).catch(e=>{e.name===`AbortError`&&a?a():o&&o(null)}),c}static xdomainRequest(e,t,n,r,i,a,o){return e.timeout=i,e.open(t,n),e.onload=()=>{let t=this.parseJSON(e.responseText);o&&o(t)},a&&(e.ontimeout=a),e.onprogress=()=>{},e.send(r),e}static xhrRequest(e,t,n,r,i,a,o,s){e.open(t,n,!0),e.timeout=a;for(let[t,n]of Object.entries(r))e.setRequestHeader(t,n);return e.onerror=()=>s&&s(null),e.onreadystatechange=()=>{e.readyState===Yt.complete&&s&&s(this.parseJSON(e.responseText))},o&&(e.ontimeout=o),e.send(i),e}static parseJSON(e){if(!e||e===``)return null;try{return JSON.parse(e)}catch{return console&&console.log(`failed to parse JSON response`,e),null}}static serialize(e,t){let n=[];for(var r in e){if(!Object.prototype.hasOwnProperty.call(e,r))continue;let i=t?`${t}[${r}]`:r,a=e[r];typeof a==`object`?n.push(this.serialize(a,i)):n.push(encodeURIComponent(i)+`=`+encodeURIComponent(a))}return n.join(`&`)}static appendParams(e,t){return Object.keys(t).length===0?e:`${e}${e.match(/\?/)?`&`:`?`}${this.serialize(t)}`}},tn=e=>{let t=``,n=new Uint8Array(e),r=n.byteLength;for(let e=0;e<r;e++)t+=String.fromCharCode(n[e]);return btoa(t)},nn=class{constructor(e,t){t&&t.length===2&&t[1].startsWith(Xt)&&(this.authToken=atob(t[1].slice(Xt.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(e),this.readyState=j.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(e){return e.replace(`ws://`,`http://`).replace(`wss://`,`https://`).replace(RegExp(`(.*)/`+Jt.websocket),`$1/`+Jt.longpoll)}endpointURL(){return en.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(e,t,n){this.close(e,t,n),this.readyState=j.connecting}ontimeout(){this.onerror(`timeout`),this.closeAndRetry(1005,`timeout`,!1)}isActive(){return this.readyState===j.open||this.readyState===j.connecting}poll(){let e={Accept:`application/json`};this.authToken&&(e[`X-Phoenix-AuthToken`]=this.authToken),this.ajax(`GET`,e,null,()=>this.ontimeout(),e=>{if(e){var{status:t,token:n,messages:r}=e;if(t===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,`session_gone`,!1);return}this.token=n}else t=0;switch(t){case 200:r.forEach(e=>{setTimeout(()=>this.onmessage({data:e}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=j.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,`forbidden`,!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,`internal server error`,500);break;default:throw Error(`unhandled poll status ${t}`)}})}send(e){typeof e!=`string`&&(e=tn(e)),this.currentBatch?this.currentBatch.push(e):this.awaitingBatchAck?this.batchBuffer.push(e):(this.currentBatch=[e],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(e,t=0){this.awaitingBatchAck=!0;let n=t+qt,r=e.slice(t,n);this.ajax(`POST`,{"Content-Type":`application/x-ndjson`},r.join(`
`),()=>this.onerror(`timeout`),t=>{!t||t.status!==200?(this.awaitingBatchAck=!1,this.onerror(t&&t.status),this.closeAndRetry(1011,`internal server error`,!1)):n<e.length?this.batchSend(e,n):this.batchBuffer.length>0?(this.batchSend(this.batchBuffer),this.batchBuffer=[]):this.awaitingBatchAck=!1})}close(e,t,n){for(let e of this.reqs)e.abort();this.readyState=j.closed;let r=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:e,reason:t,wasClean:n});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<`u`?this.onclose(new CloseEvent(`close`,r)):this.onclose(r)}ajax(e,t,n,r,i){let a;a=en.request(e,this.endpointURL(),t,n,this.timeout,()=>{this.reqs.delete(a),r()},e=>{this.reqs.delete(a),this.isActive()&&i(e)}),this.reqs.add(a)}},rn=class e{constructor(t,n={}){let r=n.events||{state:`presence_state`,diff:`presence_diff`};this.state=Object.create(null),this.pendingDiffs=[],this.channel=t,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(r.state,t=>{let{onJoin:n,onLeave:r,onSync:i}=this.caller;this.joinRef=this.channel.joinRef(),this.state=e.syncState(this.state,t,n,r),this.pendingDiffs.forEach(t=>{this.state=e.syncDiff(this.state,t,n,r)}),this.pendingDiffs=[],i()}),this.channel.on(r.diff,t=>{let{onJoin:n,onLeave:r,onSync:i}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(t):(this.state=e.syncDiff(this.state,t,n,r),i())})}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}list(t){return e.list(this.state,t)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(e,t,n,r){let i=this.toNullProtoObj(this.clone(e));t=this.toNullProtoObj(t);let a=Object.create(null),o=Object.create(null);return this.map(i,(e,n)=>{t[e]||(o[e]=n)}),this.map(t,(e,t)=>{let n=i[e];if(n){let r=t.metas.map(e=>e.phx_ref),i=n.metas.map(e=>e.phx_ref),s=t.metas.filter(e=>i.indexOf(e.phx_ref)<0),c=n.metas.filter(e=>r.indexOf(e.phx_ref)<0);s.length>0&&(a[e]=t,a[e].metas=s),c.length>0&&(o[e]=this.clone(n),o[e].metas=c)}else a[e]=t}),this.syncDiff(i,{joins:a,leaves:o},n,r)}static syncDiff(e,t,n,r){e=this.toNullProtoObj(e);let{joins:i,leaves:a}=this.clone(t);return n||=function(){},r||=function(){},this.map(i,(t,r)=>{let i=e[t];if(e[t]=this.clone(r),i){let n=e[t].metas.map(e=>e.phx_ref),r=i.metas.filter(e=>n.indexOf(e.phx_ref)<0);e[t].metas.unshift(...r)}n(t,i,r)}),this.map(a,(t,n)=>{let i=e[t];if(!i)return;let a=n.metas.map(e=>e.phx_ref);i.metas=i.metas.filter(e=>a.indexOf(e.phx_ref)<0),r(t,i,n),i.metas.length===0&&delete e[t]}),e}static list(e,t){return t||=function(e,t){return t},this.map(e,(e,n)=>t(e,n))}static map(e,t){return Object.getOwnPropertyNames(e).map(n=>t(n,e[n]))}static toNullProtoObj(e){if(Object.getPrototypeOf(e)===null)return e;let t=Object.create(null);return Object.getOwnPropertyNames(e).forEach(n=>{t[n]=e[n]}),t}static clone(e){return JSON.parse(JSON.stringify(e))}},an={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(e,t){if(e.payload.constructor===ArrayBuffer)return t(this.binaryEncode(e));{let n=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(n))}},decode(e,t){if(e.constructor===ArrayBuffer)return t(this.binaryDecode(e));{let[n,r,i,a,o]=JSON.parse(e);return t({join_ref:n,ref:r,topic:i,event:a,payload:o})}},binaryEncode(e){let{join_ref:t,ref:n,event:r,topic:i,payload:a}=e,o=new TextEncoder,s=o.encode(t),c=o.encode(n),l=o.encode(i),u=o.encode(r);this.assertFieldSize(s.byteLength,`join_ref`),this.assertFieldSize(c.byteLength,`ref`),this.assertFieldSize(l.byteLength,`topic`),this.assertFieldSize(u.byteLength,`event`);let d=this.META_LENGTH+s.byteLength+c.byteLength+l.byteLength+u.byteLength,f=new ArrayBuffer(this.HEADER_LENGTH+d),p=new Uint8Array(f),m=new DataView(f),h=0;m.setUint8(h++,this.KINDS.push),m.setUint8(h++,s.byteLength),m.setUint8(h++,c.byteLength),m.setUint8(h++,l.byteLength),m.setUint8(h++,u.byteLength),p.set(s,h),h+=s.byteLength,p.set(c,h),h+=c.byteLength,p.set(l,h),h+=l.byteLength,p.set(u,h),h+=u.byteLength;var g=new Uint8Array(f.byteLength+a.byteLength);return g.set(p,0),g.set(new Uint8Array(a),f.byteLength),g.buffer},assertFieldSize(e,t){if(e>255)throw Error(`unable to convert ${t} to binary: must be less than or equal to 255 bytes, but is ${e} bytes`)},binaryDecode(e){let t=new DataView(e),n=t.getUint8(0),r=new TextDecoder;switch(n){case this.KINDS.push:return this.decodePush(e,t,r);case this.KINDS.reply:return this.decodeReply(e,t,r);case this.KINDS.broadcast:return this.decodeBroadcast(e,t,r)}},decodePush(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=t.getUint8(3),o=this.HEADER_LENGTH+this.META_LENGTH-1,s=n.decode(e.slice(o,o+r));o+=r;let c=n.decode(e.slice(o,o+i));o+=i;let l=n.decode(e.slice(o,o+a));return o+=a,{join_ref:s,ref:null,topic:c,event:l,payload:e.slice(o,e.byteLength)}},decodeReply(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=t.getUint8(3),o=t.getUint8(4),s=this.HEADER_LENGTH+this.META_LENGTH,c=n.decode(e.slice(s,s+r));s+=r;let l=n.decode(e.slice(s,s+i));s+=i;let u=n.decode(e.slice(s,s+a));s+=a;let d=n.decode(e.slice(s,s+o));s+=o;let f={status:d,response:e.slice(s,e.byteLength)};return{join_ref:c,ref:l,topic:u,event:N.reply,payload:f}},decodeBroadcast(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=this.HEADER_LENGTH+2,o=n.decode(e.slice(a,a+r));a+=r;let s=n.decode(e.slice(a,a+i));return a+=i,{join_ref:null,ref:null,topic:o,event:s,payload:e.slice(a,e.byteLength)}}},on=class{constructor(e,t={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=t.timeout||Gt,this.transport=t.transport||A.WebSocket||nn,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=t.longPollFallbackMs,this.fallbackTimer=null;let n=null;try{n=A&&A.sessionStorage}catch{}this.sessionStore=t.sessionStorage||n,this.establishedConnections=0,this.defaultEncoder=an.encode.bind(an),this.defaultDecoder=an.decode.bind(an),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=t.binaryType||`arraybuffer`,this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport===nn?(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder):(this.encode=t.encode||this.defaultEncoder,this.decode=t.decode||this.defaultDecoder);let r=null;Ut&&Ut.addEventListener&&(Ut.addEventListener(`pagehide`,e=>{this.conn&&(this.disconnect(),r=this.connectClock)}),Ut.addEventListener(`pageshow`,e=>{r===this.connectClock&&(r=null,this.connect())}),Ut.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=t.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=t.autoSendHeartbeat??!0,this.heartbeatCallback=t.heartbeatCallback??(()=>{}),this.rejoinAfterMs=e=>t.rejoinAfterMs?t.rejoinAfterMs(e):[1e3,2e3,5e3][e-1]||1e4,this.reconnectAfterMs=e=>t.reconnectAfterMs?t.reconnectAfterMs(e):[10,50,100,150,200,250,500,1e3,2e3][e-1]||5e3,this.logger=t.logger||null,!this.logger&&t.debug&&(this.logger=(e,t,n)=>{console.log(`${e}: ${t}`,n)}),this.longpollerTimeout=t.longpollerTimeout||2e4,this.params=Vt(t.params||{}),this.endPoint=`${e}/${Jt.websocket}`,this.vsn=t.vsn||Wt,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new Qt(()=>{this.pageHidden?(this.log(`Not reconnecting as page is hidden!`),this.teardown()):this.teardown(async()=>{t.beforeReconnect&&await t.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=t.authToken&&Vt(t.authToken)}getLongPollTransport(){return nn}replaceTransport(e){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&=(this.conn.close(),null),this.transport=e}protocol(){return location.protocol.match(/^https/)?`wss`:`ws`}endPointURL(){let e=en.appendParams(en.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return e.charAt(0)===`/`?e.charAt(1)===`/`?`${this.protocol()}:${e}`:`${this.protocol()}://${location.host}${e}`:e}disconnect(e,t,n){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,e&&e()},t,n)}connect(e){e&&(console&&console.log(`passing params to connect is deprecated. Instead pass :params to the Socket constructor`),this.params=Vt(e)),(!this.conn||this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==nn?this.connectWithFallback(nn,this.longPollFallbackMs):this.transportConnect())}log(e,t,n){this.logger&&this.logger(e,t,n)}hasLogger(){return this.logger!==null}onOpen(e){let t=this.makeRef();return this.stateChangeCallbacks.open.push([t,e]),t}onClose(e){let t=this.makeRef();return this.stateChangeCallbacks.close.push([t,e]),t}onError(e){let t=this.makeRef();return this.stateChangeCallbacks.error.push([t,e]),t}onMessage(e){let t=this.makeRef();return this.stateChangeCallbacks.message.push([t,e]),t}onHeartbeat(e){this.heartbeatCallback=e}ping(e){if(!this.isConnected())return!1;let t=this.makeRef(),n=Date.now();this.push({topic:`phoenix`,event:`heartbeat`,payload:{},ref:t});let r=this.onMessage(i=>{i.ref===t&&(this.off([r]),e(Date.now()-n))});return!0}transportName(e){switch(e){case nn:return`LongPoll`;default:return e.name}}transportConnect(){this.connectClock++,this.closeWasClean=!1;let e;this.authToken&&(e=[`phoenix`,`${Xt}${btoa(this.authToken()).replace(/=/g,``)}`]),this.conn=new this.transport(this.endPointURL(),e),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=e=>this.onConnError(e),this.conn.onmessage=e=>this.onConnMessage(e),this.conn.onclose=e=>this.onConnClose(e)}getSession(e){return this.sessionStore&&this.sessionStore.getItem(e)}storeSession(e,t){this.sessionStore&&this.sessionStore.setItem(e,t)}connectWithFallback(e,t=2500){clearTimeout(this.fallbackTimer);let n=!1,r=!0,i,a,o=this.transportName(e),s=t=>{this.log(`transport`,`falling back to ${o}...`,t),this.off([i,a]),r=!1,this.replaceTransport(e),this.transportConnect()};if(this.getSession(`phx:fallback:${o}`))return s(`memorized`);this.fallbackTimer=setTimeout(s,t),a=this.onError(e=>{this.log(`transport`,`error`,e),r&&!n&&(clearTimeout(this.fallbackTimer),s(e))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(n=!0,!r){let t=this.transportName(e);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${t}`,`true`),this.log(`transport`,`established ${t} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(s,t),this.ping(e=>{this.log(`transport`,`connected to primary after`,e),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log(`transport`,`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks(`open`)}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log(`transport`,`heartbeat timeout. Attempting to re-establish connection`);try{this.heartbeatCallback(`timeout`)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}this.triggerChanError(Error(`heartbeat timeout`)),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),Kt,`heartbeat timeout`)}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(e,t,n){if(!this.conn)return e&&e();let r=this.conn;this.waitForBufferDone(r,()=>{t?r.close(t,n||``):r.close(),this.waitForSocketClosed(r,()=>{this.conn===r&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),e&&e()})})}waitForBufferDone(e,t,n=1){n===5||!e.bufferedAmount?t():setTimeout(()=>{this.waitForBufferDone(e,t,n+1)},150*n)}waitForSocketClosed(e,t,n=1){n===5||e.readyState===j.closed?t():setTimeout(()=>{this.waitForSocketClosed(e,t,n+1)},150*n)}onConnClose(e){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log(`transport`,`close`,e),this.triggerChanError(e),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks(`close`,e)}onConnError(e){this.hasLogger()&&this.log(`transport`,`error`,e);let t=this.transport,n=this.establishedConnections;this.triggerStateCallbacks(`error`,e,t,n),(t===this.transport||n>0)&&this.triggerChanError(e)}triggerChanError(e){this.channels.forEach(t=>{t.isErrored()||t.isLeaving()||t.isClosed()||t.trigger(N.error,e)})}connectionState(){switch(this.conn&&this.conn.readyState){case j.connecting:return`connecting`;case j.open:return`open`;case j.closing:return`closing`;default:return`closed`}}isConnected(){return this.connectionState()===`open`}remove(e){this.off(e.stateChangeRefs),this.channels=this.channels.filter(t=>t!==e)}off(e){for(let t in this.stateChangeCallbacks)this.stateChangeCallbacks[t]=this.stateChangeCallbacks[t].filter(([t])=>e.indexOf(t)===-1)}channel(e,t={}){let n=new $t(e,t,this);return this.channels.push(n),n}push(e){if(this.hasLogger()){let{topic:t,event:n,payload:r,ref:i,join_ref:a}=e;this.log(`push`,`${t} ${n} (${a}, ${i})`,r)}this.isConnected()?this.encode(e,e=>this.conn.send(e)):this.sendBuffer.push(()=>this.encode(e,e=>this.conn.send(e)))}makeRef(){let e=this.ref+1;return this.ref=e===this.ref?0:e,this.ref.toString()}sendHeartbeat(){if(!this.isConnected())try{this.heartbeatCallback(`disconnected`)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}else if(this.pendingHeartbeatRef)this.heartbeatTimeout();else{this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:`phoenix`,event:`heartbeat`,payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback(`sent`)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(e=>e()),this.sendBuffer=[])}onConnMessage(e){this.decode(e.data,e=>{let{topic:t,event:n,payload:r,ref:i,join_ref:a}=e;if(i&&i===this.pendingHeartbeatRef){let e=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(r.status===`ok`?`ok`:`error`,e)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log(`receive`,`${r.status||``} ${t} ${n} ${i&&`(`+i+`)`||``}`.trim(),r);for(let e=0;e<this.channels.length;e++){let o=this.channels[e];o.isMember(t,n,r,a)&&o.trigger(n,r,i,a)}this.triggerStateCallbacks(`message`,e)})}triggerStateCallbacks(e,...t){try{this.stateChangeCallbacks[e].forEach(([n,r])=>{try{r(...t)}catch(t){this.log(`error`,`error in ${e} callback`,t)}})}catch(t){this.log(`error`,`error triggering ${e} callbacks`,t)}}leaveOpenTopic(e){let t=this.channels.find(t=>t.topic===e&&(t.isJoined()||t.isJoining()));t&&(this.hasLogger()&&this.log(`transport`,`leaving duplicate topic "${e}"`),t.leave())}},sn=class e{constructor(t,n){let r=un(n);this.presence=new rn(t.getChannel(),r),this.presence.onJoin((n,r,i)=>{let a=e.onJoinPayload(n,r,i);t.getChannel().trigger(`presence`,a)}),this.presence.onLeave((n,r,i)=>{let a=e.onLeavePayload(n,r,i);t.getChannel().trigger(`presence`,a)}),this.presence.onSync(()=>{t.getChannel().trigger(`presence`,{event:`sync`})})}get state(){return e.transformState(this.presence.state)}static transformState(e){return e=ln(e),Object.getOwnPropertyNames(e).reduce((t,n)=>{let r=e[n];return t[n]=cn(r),t},{})}static onJoinPayload(e,t,n){return{event:`join`,key:e,currentPresences:dn(t),newPresences:cn(n)}}static onLeavePayload(e,t,n){return{event:`leave`,key:e,currentPresences:dn(t),leftPresences:cn(n)}}};function cn(e){return e.metas.map(e=>{let t=Object.getOwnPropertyDescriptors(e),n=Object.defineProperties({},t);return n.presence_ref=n.phx_ref,delete n.phx_ref,delete n.phx_ref_prev,n})}function ln(e){return JSON.parse(JSON.stringify(e))}function un(e){return e?.events&&{events:e.events}}function dn(e){return e?.metas?cn(e):[]}var fn;(function(e){e.SYNC=`sync`,e.JOIN=`join`,e.LEAVE=`leave`})(fn||={});var pn=class{get state(){return this.presenceAdapter.state}constructor(e,t){this.channel=e,this.presenceAdapter=new sn(this.channel.channelAdapter,t)}};function mn(e){if(e instanceof Error)return e;if(typeof e==`string`)return Error(e);if(e&&typeof e==`object`){let t=e;if(typeof t.code==`number`){let n=typeof t.reason==`string`&&t.reason?` (${t.reason})`:``;return Error(`socket closed: ${t.code}${n}`,{cause:e})}return Error(`channel error: transport failure`,{cause:e})}return Error(`channel error: connection lost`)}var hn=class{constructor(e,t,n){let r=gn(n);this.channel=e.getSocket().channel(t,r),this.socket=e}get state(){return this.channel.state}set state(e){this.channel.state=e}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(e,t){return this.channel.on(e,t)}off(e,t){this.channel.off(e,t)}subscribe(e){return this.channel.join(e)}unsubscribe(e){return this.channel.leave(e)}teardown(){this.channel.teardown()}onClose(e){this.channel.onClose(e)}onError(e){return this.channel.onError(e)}push(e,t,n){let r;try{r=this.channel.push(e,t,n)}catch{throw Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`)}if(this.channel.pushBuffer.length>100){let e=this.channel.pushBuffer.shift();e.cancelTimeout(),this.socket.log(`channel`,`discarded push due to buffer overflow: ${e.event}`,e.payload())}return r}updateJoinPayload(e){let t=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},t),e)}canPush(){return this.socket.isConnected()&&this.state===O.joined}isJoined(){return this.state===O.joined}isJoining(){return this.state===O.joining}isClosed(){return this.state===O.closed}isLeaving(){return this.state===O.leaving}updateFilterBindings(e){this.channel.filterBindings=e}updatePayloadTransform(e){this.channel.onMessage=e}getChannel(){return this.channel}};function gn(e){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:``,enabled:!1},private:!1},e.config)}}var _n=/[,()"\\]/,vn=e=>_n.test(e)||e!==e.trim(),yn=e=>`"${e.replace(/\\/g,`\\\\`).replace(/"/g,`\\"`)}"`,bn=e=>{let t=e===null?`null`:String(e);return vn(t)?yn(t):t},xn=e=>e===null?`null`:String(e),Sn=(e,t)=>{if(e===`in`){let e=Array.isArray(t)?t:[t];if(e.length===0)throw Error("Realtime `in` filter requires at least one value.");return`in.(${Array.from(new Set(e)).map(e=>bn(e)).join(`,`)})`}return e===`is`?`is.${xn(t)}`:`${e}.${bn(t)}`},Cn=class{constructor(){this.filters=[]}add(e,t,n,r=!1){let i=r?`not.`:``;return this.filters.push(`${e}=${i}${Sn(t,n)}`),this}eq(e,t){return this.add(e,`eq`,t)}neq(e,t){return this.add(e,`neq`,t)}gt(e,t){return this.add(e,`gt`,t)}gte(e,t){return this.add(e,`gte`,t)}lt(e,t){return this.add(e,`lt`,t)}lte(e,t){return this.add(e,`lte`,t)}in(e,t){return this.add(e,`in`,t)}like(e,t){return this.add(e,`like`,t)}ilike(e,t){return this.add(e,`ilike`,t)}match(e,t){return this.add(e,`match`,t)}imatch(e,t){return this.add(e,`imatch`,t)}is(e,t){return this.add(e,`is`,t)}isDistinct(e,t){return this.add(e,`isdistinct`,t)}not(e,t,n){return this.add(e,t,n,!0)}build(){return this.filters.join(`,`)}toString(){return this.build()}},wn;(function(e){e.ALL=`*`,e.INSERT=`INSERT`,e.UPDATE=`UPDATE`,e.DELETE=`DELETE`})(wn||={});var Tn;(function(e){e.BROADCAST=`broadcast`,e.PRESENCE=`presence`,e.POSTGRES_CHANGES=`postgres_changes`,e.SYSTEM=`system`})(Tn||={});var P;(function(e){e.SUBSCRIBED=`SUBSCRIBED`,e.TIMED_OUT=`TIMED_OUT`,e.CLOSED=`CLOSED`,e.CHANNEL_ERROR=`CHANNEL_ERROR`})(P||={});var En=class e{get state(){return this.channelAdapter.state}set state(e){this.channelAdapter.state=e}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(e,t={config:{}},n){if(this.topic=e,this.params=t,this.socket=n,this.bindings={},this.subTopic=e.replace(/^realtime:/i,``),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:``,enabled:!1},private:!1},t.config),this.channelAdapter=new hn(this.socket.socketAdapter,e,this.params),this.presence=new pn(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=Bt(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&this.params.config?.broadcast?.replay)throw Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`)}subscribe(e,t=this.timeout){if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){let{config:{broadcast:n,presence:r,private:i,postgres_changes_options:a}}=this.params,o=this.bindings.postgres_changes?.map(e=>e.filter)??[],s=!!this.bindings[Tn.PRESENCE]&&this.bindings[Tn.PRESENCE].length>0||this.params.config.presence?.enabled===!0,c={},l=Object.assign({broadcast:n,presence:Object.assign(Object.assign({},r),{enabled:s}),postgres_changes:o,private:i},a?{postgres_changes_options:a}:{});this.socket.accessTokenValue&&(c.access_token=this.socket.accessTokenValue),this._onError(t=>{e?.(P.CHANNEL_ERROR,mn(t))}),this._onClose(()=>e?.(P.CLOSED)),this.updateJoinPayload(Object.assign({config:l},c)),this._updateFilterMessage();let u=a?.wait&&o.length>0?Math.max(t,(a.timeout??Et)+Dt):t;this.channelAdapter.subscribe(u).receive(`ok`,async({postgres_changes:t})=>{this.socket._isManualToken()||this.socket.setAuth(),t===void 0?e?.(P.SUBSCRIBED):this._updatePostgresBindings(t,e)}).receive(`error`,t=>{this.state=O.errored;let n=Object.values(t).join(`, `)||`error`;e?.(P.CHANNEL_ERROR,Error(n,{cause:t}))}).receive(`timeout`,()=>{e?.(P.TIMED_OUT)})}return this}_updatePostgresBindings(t,n){let r=this.bindings.postgres_changes,i=r?.length??0,a=[];for(let o=0;o<i;o++){let i=r[o],{filter:{event:s,schema:c,table:l,filter:u}}=i,d=t&&t[o];if(d&&d.event===s&&e.isFilterValueEqual(d.schema,c)&&e.isFilterValueEqual(d.table,l)&&e.isFilterValueEqual(d.filter,u))a.push(Object.assign(Object.assign({},i),{id:d.id}));else{this.unsubscribe(),this.state=O.errored,n?.(P.CHANNEL_ERROR,Error(`mismatch between server and client bindings for postgres changes`));return}}this.bindings.postgres_changes=a,this.state!=O.errored&&n&&n(P.SUBSCRIBED)}presenceState(){return this.presence.state}async track(e,t={}){return await this.send({type:`presence`,event:`track`,payload:e},t)}async untrack(e={}){return await this.send({type:`presence`,event:`untrack`},e)}on(e,t,n){let r=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),i=e===Tn.PRESENCE||e===Tn.POSTGRES_CHANGES;if(r&&i)throw this.socket.log(`channel`,`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`),Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(e,t,n)}async httpSend(e,t,n={}){if(t==null)return Promise.reject(Error(`Payload is required for httpSend()`));let r=t instanceof ArrayBuffer||ArrayBuffer.isView(t),i={apikey:this.socket.apiKey?this.socket.apiKey:``,"Content-Type":r?`application/octet-stream`:`application/json`};this.socket.accessTokenValue&&(i.Authorization=`Bearer ${this.socket.accessTokenValue}`);let a=new URL(this.broadcastEndpointURL);a.pathname+=`/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(e)}`,this.private&&a.searchParams.set(`private`,`true`);let o={method:`POST`,headers:i,body:r?t:JSON.stringify(t)},s=await this._fetchWithTimeout(a.toString(),o,n.timeout??this.timeout);if(s.status===202)return{success:!0};if(s.status===404)return Promise.reject(Error(`httpSend() requires Realtime server v2.97.0 or newer; the endpoint returned 404. Update your Supabase CLI to a recent version, or upgrade the Realtime server in your self-hosted setup. See https://github.com/supabase/supabase-js/blob/master/packages/core/realtime-js/migrations/httpsend-server-version.md`));let c=s.statusText;try{let e=await s.json();c=e.error||e.message||c}catch{}return Promise.reject(Error(c))}async send(e,t={}){if(!this.channelAdapter.canPush()&&e.type===`broadcast`){let n=`Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.`;this.socket.hasLogger()?this.socket.log(`channel`,n):console.warn(n);let{event:r,payload:i}=e,a={apikey:this.socket.apiKey?this.socket.apiKey:``,"Content-Type":`application/json`};this.socket.accessTokenValue&&(a.Authorization=`Bearer ${this.socket.accessTokenValue}`);let o={method:`POST`,headers:a,body:JSON.stringify({messages:[{topic:this.subTopic,event:r,payload:i,private:this.private}]})};try{let e=await this._fetchWithTimeout(this.broadcastEndpointURL,o,t.timeout??this.timeout);return await e.body?.cancel(),e.ok?`ok`:`error`}catch(e){return e instanceof Error&&e.name===`AbortError`?`timed out`:`error`}}return new Promise(n=>{let r=this.channelAdapter.push(e.type,e,t.timeout||this.timeout);e.type===`broadcast`&&!this.params?.config?.broadcast?.ack&&n(`ok`),r.receive(`ok`,()=>n(`ok`)),r.receive(`error`,()=>n(`error`)),r.receive(`timeout`,()=>n(`timed out`))})}updateJoinPayload(e){this.channelAdapter.updateJoinPayload(e)}async unsubscribe(e=this.timeout){return new Promise(t=>{this.channelAdapter.unsubscribe(e).receive(`ok`,()=>t(`ok`)).receive(`timeout`,()=>t(`timed out`)).receive(`error`,()=>t(`error`))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(e,t,n){let r=new AbortController,i=setTimeout(()=>r.abort(),n),a=await this.socket.fetch(e,Object.assign(Object.assign({},t),{signal:r.signal}));return clearTimeout(i),a}_on(t,n,r){let i=t.toLocaleLowerCase(),a=n?.filter;if((a instanceof Cn||typeof a==`object`&&a&&typeof a.build==`function`)&&(n=Object.assign(Object.assign({},n),{filter:a.build()})),i===Tn.POSTGRES_CHANGES&&this.bindings[i]?.find(t=>e.isSamePostgresFilter(t.filter,n)))return this.socket.log(`error`,`duplicate \`postgres_changes\` binding for ${this.topic} ignored`,n),this;let o=this.channelAdapter.on(t,r),s={type:i,filter:n,callback:r,ref:o};return this.bindings[i]?this.bindings[i].push(s):this.bindings[i]=[s],this._updateFilterMessage(),this}_onClose(e){this.channelAdapter.onClose(e)}_onError(e){this.channelAdapter.onError(e)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((e,t,n)=>{let r=e.event.toLocaleLowerCase();if(this._notThisChannelEvent(r,n))return!1;let i=this.bindings[r]?.find(t=>t.ref===e.ref);if(!i)return!0;if([`broadcast`,`presence`,`postgres_changes`].includes(r)){if(`id`in i){let e=i.id,n=i.filter?.event;return e&&t.ids?.includes(e)&&(n===`*`||n?.toLocaleLowerCase()===t.data?.type.toLocaleLowerCase())}{let e=(i?.filter?.event)?.toLocaleLowerCase();return e===`*`||e===(t?.event)?.toLocaleLowerCase()}}return i.type.toLocaleLowerCase()===r})}_notThisChannelEvent(e,t){let{close:n,error:r,leave:i,join:a}=Ot;return t&&[n,r,i,a].includes(e)&&t!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((e,t,n)=>{if(typeof t==`object`&&`ids`in t){let e=t.data,{schema:n,table:r,commit_timestamp:i,type:a,errors:o}=e;return Object.assign(Object.assign({},{schema:n,table:r,commit_timestamp:i,eventType:a,new:{},old:{},errors:o}),this._getPayloadRecords(e))}return t})}copyBindings(e){if(this.joinedOnce)throw Error(`cannot copy bindings into joined channel`);for(let t in e.bindings)for(let n of e.bindings[t])this._on(n.type,n.filter,n.callback)}static isFilterValueEqual(e,t){return(e??void 0)===(t??void 0)}static isSamePostgresFilter(t,n){let r=(t?.select)?.join()??void 0,i=(n?.select)?.join()??void 0;return t?.event===n?.event&&e.isFilterValueEqual(t?.schema,n?.schema)&&e.isFilterValueEqual(t?.table,n?.table)&&e.isFilterValueEqual(t?.filter,n?.filter)&&r===i}_getPayloadRecords(e){let t={new:{},old:{}};return(e.type===`INSERT`||e.type===`UPDATE`)&&(t.new=jt(e.columns,e.record)),(e.type===`UPDATE`||e.type===`DELETE`)&&(t.old=jt(e.columns,e.old_record)),t}},Dn=class{constructor(e,t){this.socket=new on(e,t)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(e){this.socket.heartbeatCallback=e}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(e,t,n,r=1e4){return new Promise(i=>{setTimeout(()=>i(`timeout`),r),this.socket.disconnect(()=>{e(),i(`ok`)},t,n)})}push(e){this.socket.push(e)}log(e,t,n){this.socket.log(e,t,n)}hasLogger(){return this.socket.hasLogger()}makeRef(){return this.socket.makeRef()}onOpen(e){this.socket.onOpen(e)}onClose(e){this.socket.onClose(e)}onError(e){this.socket.onError(e)}onMessage(e){this.socket.onMessage(e)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==kt.connecting}isDisconnecting(){return this.socket.connectionState()==kt.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}},On={HEARTBEAT_INTERVAL:25e3,RECONNECT_DELAY:10,HEARTBEAT_TIMEOUT_FALLBACK:100},kn=[1e3,2e3,5e3,1e4],An=1e4;function jn(){let e=new Map;return{get length(){return e.size},clear(){e.clear()},getItem(t){return e.has(t)?e.get(t):null},key(t){return Array.from(e.keys())[t]??null},removeItem(t){e.delete(t)},setItem(t,n){e.set(t,String(n))}}}function Mn(){try{if(typeof globalThis<`u`&&globalThis.sessionStorage)return globalThis.sessionStorage}catch{}return jn()}var Nn=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`,Pn=class{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(e,t){if(this.channels=[],this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint=``,this.headers={},this.params={},this.ref=0,this.serializer=new At,this._manuallySetToken=!1,this._authPromise=null,this._authGeneration=0,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._pendingDisconnectTimer=null,this._disconnectOnEmptyChannelsAfterMs=0,this._resolveFetch=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),!t?.params?.apikey)throw Error(`API key is required to connect to Realtime`);this.apiKey=t.params.apikey;let n=this._initializeOptions(t);this.socketAdapter=new Dn(e,n),this.httpEndpoint=Bt(e),this.fetch=this._resolveFetch(t?.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely(`connect`),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(e){let t=e.message;throw Error(`WebSocket not available: ${t}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(e,t){return this._cancelPendingDisconnect(),this.isDisconnecting()?`ok`:await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},e,t)}getChannels(){return this.channels}async removeChannel(e){let t=await e.unsubscribe();return t===`ok`&&e.teardown(),t}async removeAllChannels(){let e=this.channels.map(async e=>{let t=await e.unsubscribe();return e.teardown(),t}),t=await Promise.all(e);return await this.disconnect(),t}log(e,t,n){this.socketAdapter.log(e,t,n)}hasLogger(){return this.socketAdapter.hasLogger()}connectionState(){return this.socketAdapter.connectionState()||kt.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(e,t={config:{}}){let n=`realtime:${e}`,r=this.getChannels().find(e=>e.topic===n);if(r)return r;{let n=new En(`realtime:${e}`,t,this);return this._cancelPendingDisconnect(),this.channels.push(n),n}}push(e){this.socketAdapter.push(e)}async setAuth(e=null){let t=++this._authGeneration,n=this._performAuth(e,t);t===this._authGeneration&&(this._authPromise=n);try{await n}finally{this._authPromise===n&&(this._authPromise=null)}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(e){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(e)}_makeRef(){return this.socketAdapter.makeRef()}_remove(e){this.channels=this.channels.filter(t=>t.topic!==e.topic),this.channels.length===0&&(this.log(`transport`,`no channels remaining, scheduling disconnect`),this._schedulePendingDisconnect())}_schedulePendingDisconnect(){this._cancelPendingDisconnect(),this._disconnectOnEmptyChannelsAfterMs===0?(this.log(`transport`,`disconnecting immediately - no channels`),this.disconnect()):(this._pendingDisconnectTimer=setTimeout(()=>{this._pendingDisconnectTimer=null,this.channels.length===0&&(this.log(`transport`,`deferred disconnect fired - no channels, disconnecting`),this.disconnect())},this._disconnectOnEmptyChannelsAfterMs),this.log(`transport`,`deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`))}_cancelPendingDisconnect(){this._pendingDisconnectTimer!==null&&(this.log(`transport`,`pending disconnect cancelled - channel activity detected`),clearTimeout(this._pendingDisconnectTimer),this._pendingDisconnectTimer=null)}async _performAuth(e,t){let n,r=!1;if(e)n=e,r=!0;else if(this.accessToken)try{n=await this.accessToken()}catch(e){this.log(`error`,`Error fetching access token from callback`,e),n=this.accessTokenValue}else n=this.accessTokenValue;t===this._authGeneration&&(this.accessToken?this._manuallySetToken=!1:r&&(this._manuallySetToken=!0),this.accessTokenValue!=n&&(this.accessTokenValue=n,this.channels.forEach(e=>{let t={access_token:n,version:xt};e.updateJoinPayload(t),e.joinedOnce&&e.channelAdapter.isJoined()&&e.channelAdapter.push(Ot.access_token,{access_token:n})})))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e=`general`){this._isManualToken()||this.setAuth().catch(t=>{this.log(`error`,`Error setting auth in ${e}`,t)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(e=>{this.log(`error`,`error waiting for auth on connect`,e)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(e=>{e.ref&&e.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(e){return(t,n)=>{t!==`disconnected`&&(t==`sent`&&this._setAuthSafely(),e&&e(t,n))}}_startWorkerHeartbeat(){this.workerUrl?this.log(`worker`,`starting worker for from ${this.workerUrl}`):this.log(`worker`,`starting default worker`);let e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=e=>{this.log(`worker`,`worker error`,e.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=e=>{e.data.event===`keepAlive`&&this.sendHeartbeat()},this.workerRef.postMessage({event:`start`,interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&=(this.log(`worker`,`terminating worker`),this.workerRef.terminate(),void 0)}_workerObjectUrl(e){let t;if(e)t=e;else{let e=new Blob([Nn],{type:`application/javascript`});t=URL.createObjectURL(e)}return t}_initializeOptions(e){this.worker=e?.worker??!1,this.accessToken=e?.accessToken??null;let t={};t.timeout=e?.timeout??Tt,t.heartbeatIntervalMs=e?.heartbeatIntervalMs??On.HEARTBEAT_INTERVAL,this._disconnectOnEmptyChannelsAfterMs=e?.disconnectOnEmptyChannelsAfterMs??2*(e?.heartbeatIntervalMs??On.HEARTBEAT_INTERVAL),t.transport=e?.transport??bt.getWebSocketConstructor(),t.params=e?.params,t.logger=e?.logger,t.heartbeatCallback=this._wrapHeartbeatCallback(e?.heartbeatCallback),t.sessionStorage=e?.sessionStorage??Mn(),t.reconnectAfterMs=e?.reconnectAfterMs??(e=>kn[e-1]||An);let n,r,i=e?.vsn??wt;switch(i){case St:n=(e,t)=>t(JSON.stringify(e)),r=(e,t)=>t(JSON.parse(e));break;case Ct:n=this.serializer.encode.bind(this.serializer),r=this.serializer.decode.bind(this.serializer);break;default:throw Error(`Unsupported serializer version: ${t.vsn}`)}if(t.vsn=i,t.encode=e?.encode??n,t.decode=e?.decode??r,t.beforeReconnect=this._reconnectAuth.bind(this),(e?.logLevel||e?.log_level)&&(this.logLevel=e.logLevel||e.log_level,t.params=Object.assign(Object.assign({},t.params),{log_level:this.logLevel})),this.worker){if(typeof window<`u`&&!window.Worker)throw Error(`Web Worker is not supported`);this.workerUrl=e?.workerUrl,t.autoSendHeartbeat=!this.worker}return t}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}},Fn=class extends Error{constructor(e,t){super(e),this.name=`IcebergError`,this.status=t.status,this.icebergType=t.icebergType,this.icebergCode=t.icebergCode,this.details=t.details,this.isCommitStateUnknown=t.icebergType===`CommitStateUnknownException`||[500,502,504].includes(t.status)&&t.icebergType?.includes(`CommitState`)===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function In(e,t,n){let r=new URL(t,e);if(n)for(let[e,t]of Object.entries(n))t!==void 0&&r.searchParams.set(e,t);return r.toString()}async function Ln(e){return!e||e.type===`none`?{}:e.type===`bearer`?{Authorization:`Bearer ${e.token}`}:e.type===`header`?{[e.name]:e.value}:e.type===`custom`?await e.getHeaders():{}}function Rn(e){let t=e.fetchImpl??globalThis.fetch;return{async request({method:n,path:r,query:i,body:a,headers:o}){let s=In(e.baseUrl,r,i),c=await Ln(e.auth),l=await t(s,{method:n,headers:{...a?{"Content-Type":`application/json`}:{},...c,...o},body:a?JSON.stringify(a):void 0}),u=await l.text(),d=(l.headers.get(`content-type`)||``).includes(`application/json`),f=d&&u?JSON.parse(u):u;if(!l.ok){let e=d?f:void 0,t=e?.error;throw new Fn(t?.message??`Request failed with status ${l.status}`,{status:l.status,icebergType:t?.type,icebergCode:t?.code,details:e})}return{status:l.status,headers:l.headers,data:f}}}}function zn(e){return e.join(``)}var Bn=class{constructor(e,t=``){this.client=e,this.prefix=t}async listNamespaces(e){let t=e?{parent:zn(e.namespace)}:void 0;return(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces`,query:t})).data.namespaces.map(e=>({namespace:e}))}async createNamespace(e,t){let n={namespace:e.namespace,properties:t?.properties};return(await this.client.request({method:`POST`,path:`${this.prefix}/namespaces`,body:n})).data}async dropNamespace(e){await this.client.request({method:`DELETE`,path:`${this.prefix}/namespaces/${zn(e.namespace)}`})}async loadNamespaceMetadata(e){return{properties:(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces/${zn(e.namespace)}`})).data.properties}}async namespaceExists(e){try{return await this.client.request({method:`HEAD`,path:`${this.prefix}/namespaces/${zn(e.namespace)}`}),!0}catch(e){if(e instanceof Fn&&e.status===404)return!1;throw e}}async createNamespaceIfNotExists(e,t){try{return await this.createNamespace(e,t)}catch(e){if(e instanceof Fn&&e.status===409)return;throw e}}};function Vn(e){return e.join(``)}var Hn=class{constructor(e,t=``,n){this.client=e,this.prefix=t,this.accessDelegation=n}async listTables(e){return(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces/${Vn(e.namespace)}/tables`})).data.identifiers}async createTable(e,t){let n={};return this.accessDelegation&&(n[`X-Iceberg-Access-Delegation`]=this.accessDelegation),(await this.client.request({method:`POST`,path:`${this.prefix}/namespaces/${Vn(e.namespace)}/tables`,body:t,headers:n})).data.metadata}async updateTable(e,t){let n=await this.client.request({method:`POST`,path:`${this.prefix}/namespaces/${Vn(e.namespace)}/tables/${e.name}`,body:t});return{"metadata-location":n.data[`metadata-location`],metadata:n.data.metadata}}async dropTable(e,t){await this.client.request({method:`DELETE`,path:`${this.prefix}/namespaces/${Vn(e.namespace)}/tables/${e.name}`,query:{purgeRequested:String(t?.purge??!1)}})}async loadTable(e){let t={};return this.accessDelegation&&(t[`X-Iceberg-Access-Delegation`]=this.accessDelegation),(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces/${Vn(e.namespace)}/tables/${e.name}`,headers:t})).data.metadata}async tableExists(e){let t={};this.accessDelegation&&(t[`X-Iceberg-Access-Delegation`]=this.accessDelegation);try{return await this.client.request({method:`HEAD`,path:`${this.prefix}/namespaces/${Vn(e.namespace)}/tables/${e.name}`,headers:t}),!0}catch(e){if(e instanceof Fn&&e.status===404)return!1;throw e}}async createTableIfNotExists(e,t){try{return await this.createTable(e,t)}catch(n){if(n instanceof Fn&&n.status===409)return await this.loadTable({namespace:e.namespace,name:t.name});throw n}}},Un=class{constructor(e){let t=`v1`;e.catalogName&&(t+=`/${e.catalogName}`);let n=e.baseUrl.endsWith(`/`)?e.baseUrl:`${e.baseUrl}/`;this.client=Rn({baseUrl:n,auth:e.auth,fetchImpl:e.fetch}),this.accessDelegation=e.accessDelegation?.join(`,`),this.namespaceOps=new Bn(this.client,t),this.tableOps=new Hn(this.client,t,this.accessDelegation)}async listNamespaces(e){return this.namespaceOps.listNamespaces(e)}async createNamespace(e,t){return this.namespaceOps.createNamespace(e,t)}async dropNamespace(e){await this.namespaceOps.dropNamespace(e)}async loadNamespaceMetadata(e){return this.namespaceOps.loadNamespaceMetadata(e)}async listTables(e){return this.tableOps.listTables(e)}async createTable(e,t){return this.tableOps.createTable(e,t)}async updateTable(e,t){return this.tableOps.updateTable(e,t)}async dropTable(e,t){await this.tableOps.dropTable(e,t)}async loadTable(e){return this.tableOps.loadTable(e)}async namespaceExists(e){return this.namespaceOps.namespaceExists(e)}async tableExists(e){return this.tableOps.tableExists(e)}async createNamespaceIfNotExists(e,t){return this.namespaceOps.createNamespaceIfNotExists(e,t)}async createTableIfNotExists(e,t){return this.tableOps.createTableIfNotExists(e,t)}};function Wn(e){"@babel/helpers - typeof";return Wn=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Wn(e)}function Gn(e,t){if(Wn(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Wn(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Kn(e){var t=Gn(e,`string`);return Wn(t)==`symbol`?t:t+``}function qn(e,t,n){return(t=Kn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Jn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Jn(Object(n),!0).forEach(function(t){qn(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Yn=class extends Error{constructor(e,t=`storage`,n,r){super(e),this.__isStorageError=!0,this.namespace=t,this.name=t===`vectors`?`StorageVectorsError`:`StorageError`,this.status=n,this.statusCode=r}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}};function Xn(e){return typeof e==`object`&&!!e&&`__isStorageError`in e}var Zn=class extends Yn{constructor(e,t,n,r=`storage`,i){super(e,r,t,n),this.name=r===`vectors`?`StorageVectorsApiError`:`StorageApiError`,this.status=t,this.statusCode=n,this.code=i}toJSON(){return F(F({},super.toJSON()),{},{code:this.code})}},Qn=class extends Yn{constructor(e,t,n=`storage`){super(e,n),this.name=n===`vectors`?`StorageVectorsUnknownError`:`StorageUnknownError`,this.originalError=t}};function $n(e,t,n){let r=F({},e),i=t.toLowerCase();for(let e of Object.keys(r))e.toLowerCase()===i&&delete r[e];return r[i]=n,r}function er(e){let t={};for(let[n,r]of Object.entries(e))t[n.toLowerCase()]=r;return t}var tr=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),nr=e=>{if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},rr=e=>{if(Array.isArray(e))return e.map(e=>rr(e));if(typeof e==`function`||e!==Object(e))return e;let t={};return Object.entries(e).forEach(([e,n])=>{let r=e.replace(/([-_][a-z])/gi,e=>e.toUpperCase().replace(/[-_]/g,``));t[r]=rr(n)}),t},ir=e=>!e||typeof e!=`string`||e.length===0||e.length>100||e.trim()!==e||e.includes(`/`)||e.includes(`\\`)?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(e),ar=e=>e.split(`/`).map(encodeURIComponent).join(`/`),or=e=>{if(typeof e==`object`&&e){let t=e;if(typeof t.msg==`string`)return t.msg;if(typeof t.message==`string`)return t.message;if(typeof t.error_description==`string`)return t.error_description;if(typeof t.error==`string`)return t.error;if(typeof t.error==`object`&&t.error!==null){let e=t.error;if(typeof e.message==`string`)return e.message}}return JSON.stringify(e)},sr=async(e,t,n,r)=>{if(typeof e==`object`&&e&&`json`in e&&typeof e.json==`function`){let n=e,i=parseInt(String(n.status),10);Number.isFinite(i)||(i=500),n.json().then(e=>{let n=e?.statusCode||e?.code||i+``;t(new Zn(or(e),i,n,r,e?.code))}).catch(()=>{let e=i+``;t(new Zn(n.statusText||`HTTP ${i} error`,i,e,r))})}else t(new Qn(or(e),e,r))},cr=(e,t,n,r)=>{let i={method:e,headers:t?.headers||{}};if(e===`GET`||e===`HEAD`||!r)return F(F({},i),n);if(nr(r)){let e=t?.headers||{},n;for(let[t,r]of Object.entries(e))t.toLowerCase()===`content-type`&&(n=r);i.headers=$n(e,`Content-Type`,n??`application/json`),i.body=JSON.stringify(r)}else i.body=r;return t?.duplex&&(i.duplex=t.duplex),F(F({},i),n)};async function lr(e,t,n,r,i,a,o){return new Promise((s,c)=>{e(n,cr(t,r,i,a)).then(e=>{if(!e.ok)throw e;if(r?.noResolveJson)return e;if(o===`vectors`){let t=e.headers.get(`content-type`);if(e.headers.get(`content-length`)===`0`||e.status===204||!t||!t.includes(`application/json`))return{}}return e.json()}).then(e=>s(e)).catch(e=>sr(e,c,r,o))})}function ur(e=`storage`){return{get:async(t,n,r,i)=>lr(t,`GET`,n,r,i,void 0,e),post:async(t,n,r,i,a)=>lr(t,`POST`,n,i,a,r,e),put:async(t,n,r,i,a)=>lr(t,`PUT`,n,i,a,r,e),head:async(t,n,r,i)=>lr(t,`HEAD`,n,F(F({},r),{},{noResolveJson:!0}),i,void 0,e),remove:async(t,n,r,i,a)=>lr(t,`DELETE`,n,i,a,r,e)}}var{get:dr,post:I,put:fr,head:pr,remove:mr}=ur(`storage`),L=ur(`vectors`),hr=class{constructor(e,t={},n,r=`storage`){this.shouldThrowOnError=!1,this.url=e,this.headers=er(t),this.fetch=tr(n),this.namespace=r}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(e,t){return this.headers=$n(this.headers,e,t),this}async handleOperation(e){var t=this;try{return{data:await e(),error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(Xn(e))return{data:null,error:e};throw e}}},gr=Symbol.toStringTag,_r=class{constructor(e,t){this.downloadFn=e,this.shouldThrowOnError=t,this[gr]=`StreamDownloadBuilder`,this.promise=null}then(e,t){return this.getPromise().then(e,t)}catch(e){return this.getPromise().catch(e)}finally(e){return this.getPromise().finally(e)}getPromise(){return this.promise||=this.execute(),this.promise}async execute(){var e=this;try{return{data:(await e.downloadFn()).body,error:null}}catch(t){if(e.shouldThrowOnError)throw t;if(Xn(t))return{data:null,error:t};throw t}}},vr=Symbol.toStringTag,yr=class{constructor(e,t){this.downloadFn=e,this.shouldThrowOnError=t,this[vr]=`BlobDownloadBuilder`,this.promise=null}asStream(){return new _r(this.downloadFn,this.shouldThrowOnError)}then(e,t){return this.getPromise().then(e,t)}catch(e){return this.getPromise().catch(e)}finally(e){return this.getPromise().finally(e)}getPromise(){return this.promise||=this.execute(),this.promise}async execute(){var e=this;try{return{data:await(await e.downloadFn()).blob(),error:null}}catch(t){if(e.shouldThrowOnError)throw t;if(Xn(t))return{data:null,error:t};throw t}}},br={limit:100,offset:0,sortBy:{column:`name`,order:`asc`}},xr={cacheControl:`3600`,contentType:`text/plain;charset=UTF-8`,upsert:!1},Sr=class extends hr{constructor(e,t={},n,r){super(e,t,r,`storage`),this.bucketId=n}async uploadOrUpdate(e,t,n,r){var i=this;return i.handleOperation(async()=>{let a,o=F(F({},xr),r),s=F(F({},i.headers),e===`POST`&&{"x-upsert":String(o.upsert)}),c=o.metadata;if(typeof Blob<`u`&&n instanceof Blob||typeof FormData<`u`&&n instanceof FormData?a=i.prepareUploadFormData(n,o):(a=n,s[`cache-control`]=`max-age=${o.cacheControl}`,s[`content-type`]=o.contentType,o.contentEncoding&&(s[`content-encoding`]=o.contentEncoding),c&&(s[`x-metadata`]=i.toBase64(i.encodeMetadata(c))),(typeof ReadableStream<`u`&&a instanceof ReadableStream||a&&typeof a==`object`&&`pipe`in a&&typeof a.pipe==`function`)&&!o.duplex&&(o.duplex=`half`)),r?.headers)for(let[e,t]of Object.entries(r.headers))s=$n(s,e,t);let l=i._removeEmptyFolders(t),u=i._getFinalPath(l),d=await(e==`PUT`?fr:I)(i.fetch,`${i.url}/object/${u}`,a,F({headers:s},o?.duplex?{duplex:o.duplex}:{}));return{path:l,id:d.Id,fullPath:d.Key}})}async upload(e,t,n){return this.uploadOrUpdate(`POST`,e,t,n)}async uploadToSignedUrl(e,t,n,r){var i=this;let a=i._removeEmptyFolders(e),o=i._getFinalPath(a),s=new URL(i.url+`/object/upload/sign/${o}`);return s.searchParams.set(`token`,t),i.handleOperation(async()=>{let e,t=F(F({},xr),r),o=F(F({},i.headers),{"x-upsert":String(t.upsert)}),c=t.metadata;if(typeof Blob<`u`&&n instanceof Blob||typeof FormData<`u`&&n instanceof FormData?e=i.prepareUploadFormData(n,t):(e=n,o[`cache-control`]=`max-age=${t.cacheControl}`,o[`content-type`]=t.contentType,t.contentEncoding&&(o[`content-encoding`]=t.contentEncoding),c&&(o[`x-metadata`]=i.toBase64(i.encodeMetadata(c))),(typeof ReadableStream<`u`&&e instanceof ReadableStream||e&&typeof e==`object`&&`pipe`in e&&typeof e.pipe==`function`)&&!t.duplex&&(t.duplex=`half`)),r?.headers)for(let[e,t]of Object.entries(r.headers))o=$n(o,e,t);return{path:a,fullPath:(await fr(i.fetch,s.toString(),e,F({headers:o},t?.duplex?{duplex:t.duplex}:{}))).Key}})}async createSignedUploadUrl(e,t){var n=this;return n.handleOperation(async()=>{let r=n._getFinalPath(e),i=F({},n.headers);t?.upsert&&(i[`x-upsert`]=`true`);let a=await I(n.fetch,`${n.url}/object/upload/sign/${r}`,{},{headers:i}),o=new URL(n.url+a.url),s=o.searchParams.get(`token`);if(!s)throw new Yn(`No token returned by API`);return{signedUrl:o.toString(),path:e,token:s}})}async update(e,t,n){return this.uploadOrUpdate(`PUT`,e,t,n)}async move(e,t,n){var r=this;return r.handleOperation(async()=>await I(r.fetch,`${r.url}/object/move`,{bucketId:r.bucketId,sourceKey:e,destinationKey:t,destinationBucket:n?.destinationBucket,sourceVersionId:n?.sourceVersionId},{headers:r.headers}))}async copy(e,t,n){var r=this;return r.handleOperation(async()=>{let i=n;return{path:(await I(r.fetch,`${r.url}/object/copy`,{bucketId:r.bucketId,sourceKey:e,destinationKey:t,destinationBucket:n?.destinationBucket,sourceVersionId:n?.sourceVersionId,copyMetadata:typeof i?.copyMetadata==`boolean`?i.copyMetadata:void 0,metadata:i?.copyMetadata===!1?i.metadata:void 0},{headers:r.headers})).Key}})}async createSignedUrl(e,t,n){var r=this;return r.handleOperation(async()=>{let i=r._getFinalPath(e),a=typeof n?.transform==`object`&&n.transform!==null&&Object.keys(n.transform).length>0,o=await I(r.fetch,`${r.url}/object/sign/${i}`,F(F({expiresIn:t},a?{transform:n.transform}:{}),n?.versionId==null?{}:{versionId:n.versionId}),{headers:r.headers}),s=new URLSearchParams;n?.download&&s.set(`download`,n.download===!0?``:n.download),n?.cacheNonce!=null&&s.set(`cacheNonce`,String(n.cacheNonce));let c=s.toString();return{signedUrl:encodeURI(`${r.url}${o.signedURL}${c?`&${c}`:``}`)}})}async createSignedUrls(e,t,n){var r=this;return r.handleOperation(async()=>{let i=await I(r.fetch,`${r.url}/object/sign/${r.bucketId}`,{expiresIn:t,paths:e},{headers:r.headers}),a=new URLSearchParams;n?.download&&a.set(`download`,n.download===!0?``:n.download),n?.cacheNonce!=null&&a.set(`cacheNonce`,String(n.cacheNonce));let o=a.toString();return i.map(e=>F(F({},e),{},{signedUrl:e.signedURL?encodeURI(`${r.url}${e.signedURL}${o?`&${o}`:``}`):null}))})}download(e,t,n){let r=typeof t?.transform==`object`&&t.transform!==null&&Object.keys(t.transform).length>0?`render/image/authenticated`:`object`,i=new URLSearchParams;t?.transform&&this.applyTransformOptsToQuery(i,t.transform),t?.cacheNonce!=null&&i.set(`cacheNonce`,String(t.cacheNonce)),t?.versionId!=null&&i.set(`versionId`,String(t.versionId));let a=i.toString(),o=this._getFinalPath(e);return new yr(()=>dr(this.fetch,`${this.url}/${r}/${o}${a?`?${a}`:``}`,{headers:this.headers,noResolveJson:!0},n),this.shouldThrowOnError)}async info(e,t){var n=this;let r=n._getFinalPath(e),i=new URLSearchParams;t?.versionId!=null&&i.set(`versionId`,String(t.versionId));let a=i.toString();return n.handleOperation(async()=>rr(await dr(n.fetch,`${n.url}/object/info/${r}${a?`?${a}`:``}`,{headers:n.headers})))}async exists(e){var t=this;let n=t._getFinalPath(e);try{return await pr(t.fetch,`${t.url}/object/${n}`,{headers:t.headers}),{data:!0,error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(Xn(e)){let t=e instanceof Zn?e.status:e instanceof Qn?e.originalError?.status:void 0;if(t!==void 0&&[400,404].includes(t))return{data:!1,error:e}}throw e}}getPublicUrl(e,t){let n=this._getFinalPath(e),r=new URLSearchParams;t?.download&&r.set(`download`,t.download===!0?``:t.download),t?.transform&&this.applyTransformOptsToQuery(r,t.transform),t?.cacheNonce!=null&&r.set(`cacheNonce`,String(t.cacheNonce)),t?.versionId!=null&&r.set(`versionId`,String(t.versionId));let i=r.toString(),a=typeof t?.transform==`object`&&t.transform!==null&&Object.keys(t.transform).length>0?`render/image`:`object`;return{data:{publicUrl:encodeURI(`${this.url}/${a}/public/${n}`)+(i?`?${i}`:``)}}}async remove(e){var t=this;return t.handleOperation(async()=>await mr(t.fetch,`${t.url}/object/${t.bucketId}`,{prefixes:e},{headers:t.headers}))}async purgeCache(e,t,n){var r=this;return r.handleOperation(async()=>{let i=ar(r._getFinalPath(e)),a=new URLSearchParams;t?.transformations&&a.set(`transformations`,`true`);let o=a.toString();return await mr(r.fetch,`${r.url}/cdn/${i}${o?`?${o}`:``}`,{},{headers:r.headers},n)})}async list(e,t,n){var r=this;return r.handleOperation(async()=>{let i=t?.sortBy?F(F({},br.sortBy),t.sortBy):br.sortBy,a=F(F(F({},br),t),{},{sortBy:i,prefix:e||``});return await I(r.fetch,`${r.url}/object/list/${r.bucketId}`,a,{headers:r.headers},n)})}async listV2(e,t){var n=this;return n.handleOperation(async()=>{let r=F({},e);return await I(n.fetch,`${n.url}/object/list-v2/${n.bucketId}`,r,{headers:n.headers},t)})}prepareUploadFormData(e,t){let n=new FormData,r=[];e instanceof FormData?e.forEach((e,t)=>{typeof e==`string`?n.append(t,e):r.push([t,e])}):r.push([``,e]),n.has(`cacheControl`)||n.append(`cacheControl`,t.cacheControl),t.metadata&&!n.has(`metadata`)&&n.append(`metadata`,this.encodeMetadata(t.metadata)),t.contentEncoding&&!n.has(`contentEncoding`)&&n.append(`contentEncoding`,t.contentEncoding);for(let[e,t]of r)n.append(e,t);return n}encodeMetadata(e){return JSON.stringify(e)}toBase64(e){return typeof Buffer<`u`?Buffer.from(e).toString(`base64`):btoa(e)}_getFinalPath(e){return`${this.bucketId}/${e.replace(/^\/+/,``)}`}_removeEmptyFolders(e){return e.replace(/^\/|\/$/g,``).replace(/\/+/g,`/`)}applyTransformOptsToQuery(e,t){return t.width&&e.set(`width`,t.width.toString()),t.height&&e.set(`height`,t.height.toString()),t.resize&&e.set(`resize`,t.resize),t.format&&e.set(`format`,t.format),t.quality&&e.set(`quality`,t.quality.toString()),e}},Cr={"X-Client-Info":`storage-js/2.118.0`},wr=class extends hr{constructor(e,t={},n,r){let i=new URL(e);r?.useNewHostname&&/supabase\.(co|in|red)$/.test(i.hostname)&&!i.hostname.includes(`storage.supabase.`)&&(i.hostname=i.hostname.replace(`supabase.`,`storage.supabase.`));let a=i.href.replace(/\/$/,``),o=F(F({},Cr),t);super(a,o,n,`storage`)}async listBuckets(e){var t=this;return t.handleOperation(async()=>{let n=t.listBucketOptionsToQueryString(e);return await dr(t.fetch,`${t.url}/bucket${n}`,{headers:t.headers})})}async getBucket(e){var t=this;return t.handleOperation(async()=>await dr(t.fetch,`${t.url}/bucket/${e}`,{headers:t.headers}))}async createBucket(e,t={public:!1}){var n=this;return n.handleOperation(async()=>await I(n.fetch,`${n.url}/bucket`,{id:e,name:e,type:t.type,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes,versioning_status:t.versioningStatus},{headers:n.headers}))}async updateBucket(e,t){var n=this;return n.handleOperation(async()=>await fr(n.fetch,`${n.url}/bucket/${e}`,{id:e,name:e,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes,versioning_status:t.versioningStatus},{headers:n.headers}))}async emptyBucket(e){var t=this;return t.handleOperation(async()=>await I(t.fetch,`${t.url}/bucket/${e}/empty`,{},{headers:t.headers}))}async deleteBucket(e){var t=this;return t.handleOperation(async()=>await mr(t.fetch,`${t.url}/bucket/${e}`,{},{headers:t.headers}))}async getBucketLifecycle(e){var t=this;return t.handleOperation(async()=>await dr(t.fetch,t.bucketLifecycleUrl(e),{headers:t.headers}))}async updateBucketLifecycle(e,t){var n=this;return n.handleOperation(async()=>await fr(n.fetch,n.bucketLifecycleUrl(e),t,{headers:n.headers}))}async deleteBucketLifecycle(e){var t=this;return t.handleOperation(async()=>await mr(t.fetch,t.bucketLifecycleUrl(e),{},{headers:t.headers}))}async purgeBucketCache(e,t,n){var r=this;return r.handleOperation(async()=>{let i=new URLSearchParams;t?.transformations&&i.set(`transformations`,`true`);let a=i.toString();return await mr(r.fetch,`${r.url}/cdn/${ar(e)}${a?`?${a}`:``}`,{},{headers:r.headers},n)})}bucketLifecycleUrl(e){return`${this.url}/bucket/${ar(e)}/lifecycle`}listBucketOptionsToQueryString(e){let t={};return e&&(`limit`in e&&(t.limit=String(e.limit)),`offset`in e&&(t.offset=String(e.offset)),e.search&&(t.search=e.search),e.sortColumn&&(t.sortColumn=e.sortColumn),e.sortOrder&&(t.sortOrder=e.sortOrder)),Object.keys(t).length>0?`?`+new URLSearchParams(t).toString():``}},Tr=class extends hr{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=F(F({},Cr),t);super(r,i,n,`storage`)}async createBucket(e){var t=this;return t.handleOperation(async()=>await I(t.fetch,`${t.url}/bucket`,{name:e},{headers:t.headers}))}async listBuckets(e){var t=this;return t.handleOperation(async()=>{let n=new URLSearchParams;e?.limit!==void 0&&n.set(`limit`,e.limit.toString()),e?.offset!==void 0&&n.set(`offset`,e.offset.toString()),e?.sortColumn&&n.set(`sortColumn`,e.sortColumn),e?.sortOrder&&n.set(`sortOrder`,e.sortOrder),e?.search&&n.set(`search`,e.search);let r=n.toString(),i=r?`${t.url}/bucket?${r}`:`${t.url}/bucket`;return await dr(t.fetch,i,{headers:t.headers})})}async deleteBucket(e){var t=this;return t.handleOperation(async()=>await mr(t.fetch,`${t.url}/bucket/${e}`,{},{headers:t.headers}))}from(e){var t=this;if(!ir(e))throw new Yn(`Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.`);let n=new Un({baseUrl:this.url,catalogName:e,auth:{type:`custom`,getHeaders:async()=>t.headers},fetch:this.fetch}),r=this.shouldThrowOnError;return new Proxy(n,{get(e,t){let n=e[t];return typeof n==`function`?async(...t)=>{try{return{data:await n.apply(e,t),error:null}}catch(e){if(r)throw e;return{data:null,error:e}}}:n}})}},Er=class extends hr{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=F(F({},Cr),{},{"Content-Type":`application/json`},t);super(r,i,n,`vectors`)}async createIndex(e){var t=this;return t.handleOperation(async()=>await L.post(t.fetch,`${t.url}/CreateIndex`,e,{headers:t.headers})||{})}async getIndex(e,t){var n=this;return n.handleOperation(async()=>await L.post(n.fetch,`${n.url}/GetIndex`,{vectorBucketName:e,indexName:t},{headers:n.headers}))}async listIndexes(e){var t=this;return t.handleOperation(async()=>await L.post(t.fetch,`${t.url}/ListIndexes`,e,{headers:t.headers}))}async deleteIndex(e,t){var n=this;return n.handleOperation(async()=>await L.post(n.fetch,`${n.url}/DeleteIndex`,{vectorBucketName:e,indexName:t},{headers:n.headers})||{})}},Dr=class extends hr{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=F(F({},Cr),{},{"Content-Type":`application/json`},t);super(r,i,n,`vectors`)}async putVectors(e){var t=this;if(e.vectors.length<1||e.vectors.length>500)throw Error(`Vector batch size must be between 1 and 500 items`);return t.handleOperation(async()=>await L.post(t.fetch,`${t.url}/PutVectors`,e,{headers:t.headers})||{})}async getVectors(e){var t=this;return t.handleOperation(async()=>await L.post(t.fetch,`${t.url}/GetVectors`,e,{headers:t.headers}))}async listVectors(e){var t=this;if(e.segmentCount!==void 0){if(e.segmentCount<1||e.segmentCount>16)throw Error(`segmentCount must be between 1 and 16`);if(e.segmentIndex!==void 0&&(e.segmentIndex<0||e.segmentIndex>=e.segmentCount))throw Error(`segmentIndex must be between 0 and ${e.segmentCount-1}`)}return t.handleOperation(async()=>await L.post(t.fetch,`${t.url}/ListVectors`,e,{headers:t.headers}))}async queryVectors(e){var t=this;return t.handleOperation(async()=>await L.post(t.fetch,`${t.url}/QueryVectors`,e,{headers:t.headers}))}async deleteVectors(e){var t=this;if(e.keys.length<1||e.keys.length>500)throw Error(`Keys batch size must be between 1 and 500 items`);return t.handleOperation(async()=>await L.post(t.fetch,`${t.url}/DeleteVectors`,e,{headers:t.headers})||{})}},Or=class extends hr{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=F(F({},Cr),{},{"Content-Type":`application/json`},t);super(r,i,n,`vectors`)}async createBucket(e){var t=this;return t.handleOperation(async()=>await L.post(t.fetch,`${t.url}/CreateVectorBucket`,{vectorBucketName:e},{headers:t.headers})||{})}async getBucket(e){var t=this;return t.handleOperation(async()=>await L.post(t.fetch,`${t.url}/GetVectorBucket`,{vectorBucketName:e},{headers:t.headers}))}async listBuckets(e={}){var t=this;return t.handleOperation(async()=>await L.post(t.fetch,`${t.url}/ListVectorBuckets`,e,{headers:t.headers}))}async deleteBucket(e){var t=this;return t.handleOperation(async()=>await L.post(t.fetch,`${t.url}/DeleteVectorBucket`,{vectorBucketName:e},{headers:t.headers})||{})}},kr=class extends Or{constructor(e,t={}){super(e,t.headers||{},t.fetch)}from(e){return new Ar(this.url,this.headers,e,this.fetch)}async createBucket(e){var t=()=>super.createBucket,n=this;return t().call(n,e)}async getBucket(e){var t=()=>super.getBucket,n=this;return t().call(n,e)}async listBuckets(e={}){var t=()=>super.listBuckets,n=this;return t().call(n,e)}async deleteBucket(e){var t=()=>super.deleteBucket,n=this;return t().call(n,e)}},Ar=class extends Er{constructor(e,t,n,r){super(e,t,r),this.vectorBucketName=n}async createIndex(e){var t=()=>super.createIndex,n=this;return t().call(n,F(F({},e),{},{vectorBucketName:n.vectorBucketName}))}async listIndexes(e={}){var t=()=>super.listIndexes,n=this;return t().call(n,F(F({},e),{},{vectorBucketName:n.vectorBucketName}))}async getIndex(e){var t=()=>super.getIndex,n=this;return t().call(n,n.vectorBucketName,e)}async deleteIndex(e){var t=()=>super.deleteIndex,n=this;return t().call(n,n.vectorBucketName,e)}index(e){return new jr(this.url,this.headers,this.vectorBucketName,e,this.fetch)}},jr=class extends Dr{constructor(e,t,n,r,i){super(e,t,i),this.vectorBucketName=n,this.indexName=r}async putVectors(e){var t=()=>super.putVectors,n=this;return t().call(n,F(F({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async getVectors(e){var t=()=>super.getVectors,n=this;return t().call(n,F(F({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async listVectors(e={}){var t=()=>super.listVectors,n=this;return t().call(n,F(F({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async queryVectors(e){var t=()=>super.queryVectors,n=this;return t().call(n,F(F({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async deleteVectors(e){var t=()=>super.deleteVectors,n=this;return t().call(n,F(F({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}},Mr=class extends wr{constructor(e,t={},n,r){super(e,t,n,r)}from(e){return new Sr(this.url,this.headers,e,this.fetch)}get vectors(){return new kr(this.url+`/vector`,{headers:this.headers,fetch:this.fetch})}get analytics(){return new Tr(this.url+`/iceberg`,this.headers,this.fetch)}},Nr=`2.118.0`,Pr=3e4,Fr=3*Pr,Ir=2*Pr,Lr=`http://localhost:9999`,Rr=`supabase.auth.token`,zr={"X-Client-Info":`gotrue-js/${Nr}`},Br=`X-Supabase-Api-Version`,Vr={"2024-01-01":{timestamp:Date.parse(`2024-01-01T00:00:00.0Z`),name:`2024-01-01`}},Hr=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,Ur=`sb_flow_id`,Wr=class extends Error{constructor(e,t,n){super(e),this.__isAuthError=!0,this.name=`AuthError`,this.status=t,this.code=n}toJSON(){return{name:this.name,message:this.message,status:this.status,code:this.code}}};function R(e){return typeof e==`object`&&!!e&&`__isAuthError`in e}var Gr=class extends Wr{constructor(e,t,n){super(e,t,n),this.name=`AuthApiError`,this.status=t,this.code=n}};function Kr(e){return R(e)&&e.name===`AuthApiError`}var z=class extends Wr{constructor(e,t){super(e),this.name=`AuthUnknownError`,this.originalError=t}},B=class extends Wr{constructor(e,t,n,r){super(e,n,r),this.name=t,this.status=n}},V=class extends B{constructor(){super(`Auth session missing!`,`AuthSessionMissingError`,400,void 0)}};function qr(e){return R(e)&&e.name===`AuthSessionMissingError`}var Jr=class extends B{constructor(){super(`Auth session or user missing`,`AuthInvalidTokenResponseError`,500,void 0)}},Yr=class extends B{constructor(e){super(e,`AuthInvalidCredentialsError`,400,void 0)}},Xr=class extends B{constructor(e,t=null){super(e,`AuthImplicitGrantRedirectError`,500,void 0),this.details=null,this.details=t}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}};function Zr(e){return R(e)&&e.name===`AuthImplicitGrantRedirectError`}var Qr=class extends B{constructor(e,t=null){super(e,`AuthPKCEGrantCodeExchangeError`,500,void 0),this.details=null,this.details=t}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}},$r=class extends B{constructor(){super(`PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.`,`AuthPKCECodeVerifierMissingError`,400,`pkce_code_verifier_not_found`)}},ei=class extends B{constructor(e,t){super(e,`AuthRetryableFetchError`,t,void 0)}};function ti(e){return R(e)&&e.name===`AuthRetryableFetchError`}var ni=class extends B{constructor(e=`Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)`){super(e,`AuthRefreshDiscardedError`,409,void 0)}};function ri(e){return R(e)&&e.name===`AuthRefreshDiscardedError`}var ii=class extends B{constructor(e,t,n){super(e,`AuthWeakPasswordError`,t,`weak_password`),this.reasons=n}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{reasons:this.reasons})}},ai=class extends B{constructor(e){super(e,`AuthInvalidJwtError`,400,`invalid_jwt`)}},oi=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_`.split(``),si=` 	
\r=`.split(``),ci=(()=>{let e=Array(128);for(let t=0;t<e.length;t+=1)e[t]=-1;for(let t=0;t<si.length;t+=1)e[si[t].charCodeAt(0)]=-2;for(let t=0;t<oi.length;t+=1)e[oi[t].charCodeAt(0)]=t;return e})();function li(e,t,n){if(e!==null)for(t.queue=t.queue<<8|e,t.queuedBits+=8;t.queuedBits>=6;)n(oi[t.queue>>t.queuedBits-6&63]),t.queuedBits-=6;else if(t.queuedBits>0)for(t.queue<<=6-t.queuedBits,t.queuedBits=6;t.queuedBits>=6;)n(oi[t.queue>>t.queuedBits-6&63]),t.queuedBits-=6}function ui(e,t,n){let r=ci[e];if(r>-1)for(t.queue=t.queue<<6|r,t.queuedBits+=6;t.queuedBits>=8;)n(t.queue>>t.queuedBits-8&255),t.queuedBits-=8;else if(r===-2)return;else throw Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`)}function di(e){let t=[],n=e=>{t.push(String.fromCodePoint(e))},r={utf8seq:0,codepoint:0},i={queue:0,queuedBits:0},a=e=>{mi(e,r,n)};for(let t=0;t<e.length;t+=1)ui(e.charCodeAt(t),i,a);return t.join(``)}function fi(e,t){if(e<=127)t(e);else if(e<=2047)t(192|e>>6),t(128|e&63);else if(e<=65535)t(224|e>>12),t(128|e>>6&63),t(128|e&63);else if(e<=1114111)t(240|e>>18),t(128|e>>12&63),t(128|e>>6&63),t(128|e&63);else throw Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`)}function pi(e,t){for(let n=0;n<e.length;n+=1){let r=e.charCodeAt(n);if(r>55295&&r<=56319){let t=(r-55296)*1024&65535;r=(e.charCodeAt(n+1)-56320&65535|t)+65536,n+=1}fi(r,t)}}function mi(e,t,n){if(t.utf8seq===0){if(e<=127){n(e);return}for(let n=1;n<6;n+=1)if(!(e>>7-n&1)){t.utf8seq=n;break}if(t.utf8seq===2)t.codepoint=e&31;else if(t.utf8seq===3)t.codepoint=e&15;else if(t.utf8seq===4)t.codepoint=e&7;else throw Error(`Invalid UTF-8 sequence`);--t.utf8seq}else if(t.utf8seq>0){if(e<=127)throw Error(`Invalid UTF-8 sequence`);t.codepoint=t.codepoint<<6|e&63,--t.utf8seq,t.utf8seq===0&&n(t.codepoint)}}function hi(e){let t=[],n={queue:0,queuedBits:0},r=e=>{t.push(e)};for(let t=0;t<e.length;t+=1)ui(e.charCodeAt(t),n,r);return new Uint8Array(t)}function gi(e){let t=[];return pi(e,e=>t.push(e)),new Uint8Array(t)}function H(e){let t=[],n={queue:0,queuedBits:0},r=e=>{t.push(e)};return e.forEach(e=>li(e,n,r)),li(null,n,r),t.join(``)}function _i(e){return Math.round(Date.now()/1e3)+e}function vi(){return Symbol(`auth-callback`)}var U=()=>typeof window<`u`&&typeof document<`u`,yi={tested:!1,writable:!1},bi=()=>{if(!U())return!1;try{if(typeof globalThis.localStorage!=`object`)return!1}catch{return!1}if(yi.tested)return yi.writable;let e=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(e,e),globalThis.localStorage.removeItem(e),yi.tested=!0,yi.writable=!0}catch{yi.tested=!0,yi.writable=!1}return yi.writable};function xi(e){let t={},n=new URL(e);if(n.hash&&n.hash[0]===`#`)try{new URLSearchParams(n.hash.substring(1)).forEach((e,n)=>{t[n]=e})}catch{}return n.searchParams.forEach((e,n)=>{t[n]=e}),t}var Si=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),Ci=e=>typeof e==`object`&&!!e&&`status`in e&&`ok`in e&&`json`in e&&typeof e.json==`function`,W=async(e,t,n)=>{await e.setItem(t,JSON.stringify(n))},G=async(e,t)=>{let n=await e.getItem(t);if(!n)return null;try{return JSON.parse(n)}catch{return null}},K=async(e,t)=>{await e.removeItem(t)},wi=class e{constructor(){this.promise=new e.promiseConstructor((e,t)=>{this.resolve=e,this.reject=t})}};wi.promiseConstructor=Promise;function Ti(e){let t=e.split(`.`);if(t.length!==3)throw new ai(`Invalid JWT structure`);for(let e=0;e<t.length;e++)if(!Hr.test(t[e]))throw new ai(`JWT not in base64url format`);return{header:JSON.parse(di(t[0])),payload:JSON.parse(di(t[1])),signature:hi(t[2]),raw:{header:t[0],payload:t[1]}}}async function Ei(e){return await new Promise(t=>{setTimeout(()=>t(null),e)})}function Di(e,t){return new Promise((n,r)=>{(async()=>{for(let i=0;i<1/0;i++)try{let r=await e(i);if(!t(i,null,r)){n(r);return}}catch(e){if(!t(i,e)){r(e);return}}})()})}function Oi(e){return(`0`+e.toString(16)).substr(-2)}function ki(){let e=new Uint32Array(56);if(typeof crypto>`u`){let e=``;for(let t=0;t<56;t++)e+=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~`.charAt(Math.floor(Math.random()*66));return e}return crypto.getRandomValues(e),Array.from(e,Oi).join(``)}async function Ai(e){let t=new TextEncoder().encode(e),n=await crypto.subtle.digest(`SHA-256`,t),r=new Uint8Array(n);return Array.from(r).map(e=>String.fromCharCode(e)).join(``)}async function ji(e){if(typeof crypto>`u`||crypto.subtle===void 0||typeof TextEncoder>`u`)return console.warn(`WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.`),e;let t=await Ai(e);return btoa(t).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=+$/,``)}var Mi=/^[a-zA-Z0-9_-]{8,64}$/;function Ni(e){return typeof e==`string`&&Mi.test(e)?e:null}function Pi(){if(typeof crypto<`u`&&typeof crypto.getRandomValues==`function`){let e=new Uint8Array(16);return crypto.getRandomValues(e),Array.from(e,Oi).join(``)}let e=``;for(let t=0;t<32;t++)e+=Math.floor(Math.random()*16).toString(16);return e}var Fi=(e,t)=>`${e}-flow-${t}-code-verifier`,Ii=e=>`${e}-flows-code-verifier`;async function Li(e,t){let n=await G(e,Ii(t));return Array.isArray(n)?n.filter(e=>Ni(e)!==null):[]}async function Ri(e,t,n,r,i){await W(e,Fi(t,n),r);let a=(await Li(e,t)).filter(e=>e!==n);for(a.push(n);a.length>5;){let n=a.shift();await K(e,Fi(t,n)),i?.(n)}await W(e,Ii(t),a),await W(e,`${t}-code-verifier`,r)}async function zi(e,t,n){if(n){let r=await G(e,Fi(t,n));return{verifier:typeof r==`string`?r:null,flowId:n}}let r=await G(e,`${t}-code-verifier`);return{verifier:typeof r==`string`?r:null,flowId:null}}async function q(e,t,n){let r=`${t}-code-verifier`;if(!n){await K(e,r);return}let i=Fi(t,n),a=await G(e,i);await K(e,i);let o=await Li(e,t),s=o.filter(e=>e!==n);s.length!==o.length&&(s.length>0?await W(e,Ii(t),s):await K(e,Ii(t))),a!=null&&a===await G(e,r)&&await K(e,r)}async function Bi(e,t){let n=await Li(e,t);for(let r of n)await K(e,Fi(t,r));await K(e,Ii(t)),await K(e,`${t}-code-verifier`)}function Vi(e,t){let n=e.indexOf(`#`),r=n===-1?e:e.slice(0,n),i=n===-1?``:e.slice(n),a=r.indexOf(`?`);if(a!==-1){let e=r.slice(0,a),t=r.slice(a+1).split(`&`).filter(e=>e!==``&&e!==`sb_flow_id`&&!e.startsWith(`sb_flow_id=`));r=t.length>0?`${e}?${t.join(`&`)}`:e}let o=r.includes(`?`)?`&`:`?`;return`${r}${o}${Ur}=${encodeURIComponent(t)}${i}`}async function Hi(e,t,n=!1,r){let i=ki(),a=i;n&&(a+=`/recovery`);let o=Pi();await Ri(e,t,o,a,r);let s=await ji(i);return[s,i===s?`plain`:`s256`,o]}var Ui=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function Wi(e){let t=e.headers.get(Br);if(!t||!t.match(Ui))return null;try{return new Date(`${t}T00:00:00.0Z`)}catch{return null}}function Gi(e){if(!e)throw Error(`Missing exp claim`);if(e<=Math.floor(Date.now()/1e3))throw Error(`JWT has expired`)}function Ki(e){switch(e){case`RS256`:return{name:`RSASSA-PKCS1-v1_5`,hash:{name:`SHA-256`}};case`ES256`:return{name:`ECDSA`,namedCurve:`P-256`,hash:{name:`SHA-256`}};default:throw Error(`Invalid alg claim`)}}var qi=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function J(e){if(!qi.test(e))throw Error(`@supabase/auth-js: Expected parameter to be UUID but is not`)}function Ji(e){if(!e.recoveryCodes)throw Error("@supabase/auth-js: the MFA recovery codes API is experimental and disabled by default. Enable it by passing `auth: { experimental: { recoveryCodes: true } }` to createClient (or to the GoTrueClient constructor).")}function Yi(){return new Proxy({},{get:(e,t)=>{if(t===`__isUserNotAvailableProxy`)return!0;if(typeof t==`symbol`){let e=t.toString();if(e===`Symbol(Symbol.toPrimitive)`||e===`Symbol(Symbol.toStringTag)`||e===`Symbol(util.inspect.custom)`)return}throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,t)=>{throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,t)=>{throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function Xi(e,t){return new Proxy(e,{get:(e,n,r)=>{if(n===`__isInsecureUserWarningProxy`)return!0;if(typeof n==`symbol`){let t=n.toString();if(t===`Symbol(Symbol.toPrimitive)`||t===`Symbol(Symbol.toStringTag)`||t===`Symbol(util.inspect.custom)`||t===`Symbol(nodejs.util.inspect.custom)`)return Reflect.get(e,n,r)}return!t.value&&typeof n==`string`&&(console.warn(`Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.`),t.value=!0),Reflect.get(e,n,r)}})}function Zi(e){return JSON.parse(JSON.stringify(e))}var Qi=e=>{if(typeof e==`object`&&e){let t=e;if(typeof t.msg==`string`)return t.msg;if(typeof t.message==`string`)return t.message;if(typeof t.error_description==`string`)return t.error_description;if(typeof t.error==`string`)return t.error}return JSON.stringify(e)},$i=[500,501,502,503,504,520,521,522,523,524,525,526,527,528,529,530];async function ea(e){if(!Ci(e))throw new ei(Qi(e),0);let t;try{t=await e.json()}catch(t){throw $i.includes(e.status)?new ei(e.statusText||`HTTP ${e.status}`,e.status):new z(Qi(t),t)}if($i.includes(e.status))throw new ei(Qi(t),e.status);let n,r=Wi(e);if(r&&r.getTime()>=Vr[`2024-01-01`].timestamp&&typeof t==`object`&&t&&typeof t.code==`string`?n=t.code:typeof t==`object`&&t&&typeof t.error_code==`string`&&(n=t.error_code),!n){if(typeof t==`object`&&t&&typeof t.weak_password==`object`&&t.weak_password&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.reasons.reduce((e,t)=>e&&typeof t==`string`,!0))throw new ii(Qi(t),e.status,t.weak_password.reasons)}else if(n===`weak_password`)throw new ii(Qi(t),e.status,t.weak_password?.reasons||[]);else if(n===`session_not_found`)throw new V;throw new Gr(Qi(t),e.status||500,n)}var ta=(e,t,n,r)=>{let i={method:e,headers:t?.headers||{}};return e===`GET`?i:(i.headers=Object.assign({"Content-Type":`application/json;charset=UTF-8`},t?.headers),i.body=JSON.stringify(r),Object.assign(Object.assign({},i),n))};async function Y(e,t,n,r){let i=Object.assign({},r?.headers);i[`X-Supabase-Api-Version`]||(i[Br]=Vr[`2024-01-01`].name),r?.jwt&&(i.Authorization=`Bearer ${r.jwt}`);let a=r?.query??{};r?.redirectTo&&(a.redirect_to=r.redirectTo);let o=await na(e,t,n+(Object.keys(a).length?`?`+new URLSearchParams(a).toString():``),{headers:i,noResolveJson:r?.noResolveJson},{},r?.body);return r?.xform?r?.xform(o):{data:Object.assign({},o),error:null}}async function na(e,t,n,r,i,a){let o=ta(t,r,i,a),s;try{s=await e(n,Object.assign({},o))}catch(e){throw new ei(Qi(e),0)}if(s.ok||await ea(s),r?.noResolveJson)return s;try{return await s.json()}catch(e){await ea(e)}}function X(e){let t=null;sa(e)&&(t=Object.assign({},e),e.expires_at||(t.expires_at=_i(e.expires_in)));let n=e.user??(typeof e?.id==`string`?e:null);return{data:{session:t,user:n},error:null}}function ra(e){let t=X(e);return!t.error&&e.weak_password&&typeof e.weak_password==`object`&&Array.isArray(e.weak_password.reasons)&&e.weak_password.reasons.length&&e.weak_password.message&&typeof e.weak_password.message==`string`&&e.weak_password.reasons.reduce((e,t)=>e&&typeof t==`string`,!0)&&(t.data.weak_password=e.weak_password),t}function Z(e){return{data:{user:e.user??e},error:null}}function ia(e){return{data:e,error:null}}function aa(e){let{action_link:t,email_otp:n,hashed_token:r,redirect_to:i,verification_type:a}=e,o=Ue(e,[`action_link`,`email_otp`,`hashed_token`,`redirect_to`,`verification_type`]);return{data:{properties:{action_link:t,email_otp:n,hashed_token:r,redirect_to:i,verification_type:a},user:Object.assign({},o)},error:null}}function oa(e){return e}function sa(e){return!!e.access_token&&!!e.refresh_token&&!!e.expires_in}var ca=[`global`,`local`,`others`],la=class{constructor({url:e=``,headers:t={},fetch:n,experimental:r}){this.url=e,this.headers=t,this.fetch=Si(n),this.experimental=r??{},this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)},this.passkey={listPasskeys:this._adminListPasskeys.bind(this),deletePasskey:this._adminDeletePasskey.bind(this)}}async signOut(e,t=ca[0]){if(ca.indexOf(t)<0)throw Error(`@supabase/auth-js: Parameter scope must be one of ${ca.join(`, `)}`);try{return await Y(this.fetch,`POST`,`${this.url}/logout?scope=${t}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(e){if(R(e))return{data:null,error:e};throw e}}async inviteUserByEmail(e,t={}){try{return await Y(this.fetch,`POST`,`${this.url}/invite`,{body:{email:e,data:t.data},headers:this.headers,redirectTo:t.redirectTo,xform:Z})}catch(e){if(R(e))return{data:{user:null},error:e};throw e}}async generateLink(e){try{let{options:t}=e,n=Ue(e,[`options`]),r=Object.assign(Object.assign({},n),t);return`newEmail`in n&&(r.new_email=n?.newEmail,delete r.newEmail),await Y(this.fetch,`POST`,`${this.url}/admin/generate_link`,{body:r,headers:this.headers,xform:aa,redirectTo:t?.redirectTo})}catch(e){if(R(e))return{data:{properties:null,user:null},error:e};throw e}}async createUser(e){try{return await Y(this.fetch,`POST`,`${this.url}/admin/users`,{body:e,headers:this.headers,xform:Z})}catch(e){if(R(e))return{data:{user:null},error:e};throw e}}async listUsers(e){try{let t={nextPage:null,lastPage:0,total:0},n=await Y(this.fetch,`GET`,`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(e?.page)?.toString()??``,per_page:(e?.perPage)?.toString()??``},xform:oa});if(n.error)throw n.error;let r=await n.json(),i=n.headers.get(`x-total-count`)??0,a=n.headers.get(`link`)?.split(`,`)??[];return a.length>0&&(a.forEach(e=>{let n=parseInt(e.split(`;`)[0].split(`=`)[1].substring(0,1)),r=JSON.parse(e.split(`;`)[1].split(`=`)[1]);t[`${r}Page`]=n}),t.total=parseInt(i)),{data:Object.assign(Object.assign({},r),t),error:null}}catch(e){if(R(e))return{data:{users:[]},error:e};throw e}}async getUserById(e){J(e);try{return await Y(this.fetch,`GET`,`${this.url}/admin/users/${e}`,{headers:this.headers,xform:Z})}catch(e){if(R(e))return{data:{user:null},error:e};throw e}}async updateUserById(e,t){J(e);try{return await Y(this.fetch,`PUT`,`${this.url}/admin/users/${e}`,{body:t,headers:this.headers,xform:Z})}catch(e){if(R(e))return{data:{user:null},error:e};throw e}}async deleteUser(e,t=!1){J(e);try{return await Y(this.fetch,`DELETE`,`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:t},xform:Z})}catch(e){if(R(e))return{data:{user:null},error:e};throw e}}async _listFactors(e){J(e.userId);try{let{data:t,error:n}=await Y(this.fetch,`GET`,`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:e=>({data:{factors:e},error:null})});return{data:t,error:n}}catch(e){if(R(e))return{data:null,error:e};throw e}}async _deleteFactor(e){J(e.userId),J(e.id);try{return{data:await Y(this.fetch,`DELETE`,`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(e){if(R(e))return{data:null,error:e};throw e}}async _listOAuthClients(e){try{let t={nextPage:null,lastPage:0,total:0},n=await Y(this.fetch,`GET`,`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(e?.page)?.toString()??``,per_page:(e?.perPage)?.toString()??``},xform:oa});if(n.error)throw n.error;let r=await n.json(),i=n.headers.get(`x-total-count`)??0,a=n.headers.get(`link`)?.split(`,`)??[];return a.length>0&&(a.forEach(e=>{let n=parseInt(e.split(`;`)[0].split(`=`)[1].substring(0,1)),r=JSON.parse(e.split(`;`)[1].split(`=`)[1]);t[`${r}Page`]=n}),t.total=parseInt(i)),{data:Object.assign(Object.assign({},r),t),error:null}}catch(e){if(R(e))return{data:{clients:[]},error:e};throw e}}async _createOAuthClient(e){try{return await Y(this.fetch,`POST`,`${this.url}/admin/oauth/clients`,{body:e,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(R(e))return{data:null,error:e};throw e}}async _getOAuthClient(e){try{return await Y(this.fetch,`GET`,`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(R(e))return{data:null,error:e};throw e}}async _updateOAuthClient(e,t){try{return await Y(this.fetch,`PUT`,`${this.url}/admin/oauth/clients/${e}`,{body:t,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(R(e))return{data:null,error:e};throw e}}async _deleteOAuthClient(e){try{return await Y(this.fetch,`DELETE`,`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(e){if(R(e))return{data:null,error:e};throw e}}async _regenerateOAuthClientSecret(e){try{return await Y(this.fetch,`POST`,`${this.url}/admin/oauth/clients/${e}/regenerate_secret`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(R(e))return{data:null,error:e};throw e}}async _listCustomProviders(e){try{let t={};return e?.type&&(t.type=e.type),await Y(this.fetch,`GET`,`${this.url}/admin/custom-providers`,{headers:this.headers,query:t,xform:e=>({data:{providers:e?.providers??[]},error:null})})}catch(e){if(R(e))return{data:{providers:[]},error:e};throw e}}async _createCustomProvider(e){try{return await Y(this.fetch,`POST`,`${this.url}/admin/custom-providers`,{body:e,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(R(e))return{data:null,error:e};throw e}}async _getCustomProvider(e){try{return await Y(this.fetch,`GET`,`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(R(e))return{data:null,error:e};throw e}}async _updateCustomProvider(e,t){try{return await Y(this.fetch,`PUT`,`${this.url}/admin/custom-providers/${e}`,{body:t,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(R(e))return{data:null,error:e};throw e}}async _deleteCustomProvider(e){try{return await Y(this.fetch,`DELETE`,`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(e){if(R(e))return{data:null,error:e};throw e}}async _adminListPasskeys(e){J(e.userId);try{return await Y(this.fetch,`GET`,`${this.url}/admin/users/${e.userId}/passkeys`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(R(e))return{data:null,error:e};throw e}}async _adminDeletePasskey(e){J(e.userId),J(e.passkeyId);try{return await Y(this.fetch,`DELETE`,`${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(e){if(R(e))return{data:null,error:e};throw e}}};function ua(e={}){return{getItem:t=>e[t]||null,setItem:(t,n)=>{e[t]=n},removeItem:t=>{delete e[t]}}}globalThis&&bi()&&globalThis.localStorage&&globalThis.localStorage.getItem(`supabase.gotrue-js.locks.debug`);var da=class extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}};function fa(){if(typeof globalThis!=`object`)try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<`u`&&(self.globalThis=self)}}function pa(e){if(!/^0x[a-fA-F0-9]{40}$/.test(e))throw Error(`@supabase/auth-js: Address "${e}" is invalid.`);return e.toLowerCase()}function ma(e){return parseInt(e,16)}function ha(e){let t=new TextEncoder().encode(e);return`0x`+Array.from(t,e=>e.toString(16).padStart(2,`0`)).join(``)}function ga(e){let{chainId:t,domain:n,expirationTime:r,issuedAt:i=new Date,nonce:a,notBefore:o,requestId:s,resources:c,scheme:l,uri:u,version:d}=e;if(!Number.isInteger(t))throw Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${t}`);if(!n)throw Error(`@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.`);if(a&&a.length<8)throw Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);if(!u)throw Error(`@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.`);if(d!==`1`)throw Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${d}`);if(e.statement?.includes(`
`))throw Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e.statement}`);let f=pa(e.address),p=`${l?`${l}://${n}`:n} wants you to sign in with your Ethereum account:\n${f}\n\n${e.statement?`${e.statement}\n`:``}`,m=`URI: ${u}\nVersion: ${d}\nChain ID: ${t}${a?`\nNonce: ${a}`:``}\nIssued At: ${i.toISOString()}`;if(r&&(m+=`\nExpiration Time: ${r.toISOString()}`),o&&(m+=`\nNot Before: ${o.toISOString()}`),s&&(m+=`\nRequest ID: ${s}`),c){let e=`
Resources:`;for(let t of c){if(!t||typeof t!=`string`)throw Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${t}`);e+=`\n- ${t}`}m+=e}return`${p}\n${m}`}var Q=class extends Error{constructor({message:e,code:t,cause:n,name:r}){super(e,{cause:n}),this.__isWebAuthnError=!0,this.name=r??(n instanceof Error?n.name:void 0)??`Unknown Error`,this.code=t}toJSON(){return{name:this.name,message:this.message,code:this.code}}},_a=class extends Q{constructor(e,t){super({code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:t,message:e}),this.name=`WebAuthnUnknownError`,this.originalError=t}};function va({error:e,options:t}){let{publicKey:n}=t;if(!n)throw Error(`options was missing required publicKey property`);if(e.name===`AbortError`){if(t.signal instanceof AbortSignal)return new Q({message:`Registration ceremony was sent an abort signal`,code:`ERROR_CEREMONY_ABORTED`,cause:e})}else if(e.name===`ConstraintError`){if(n.authenticatorSelection?.requireResidentKey===!0)return new Q({message:`Discoverable credentials were required but no available authenticator supported it`,code:`ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT`,cause:e});if(t.mediation===`conditional`&&n.authenticatorSelection?.userVerification===`required`)return new Q({message:`User verification was required during automatic registration but it could not be performed`,code:`ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE`,cause:e});if(n.authenticatorSelection?.userVerification===`required`)return new Q({message:`User verification was required but no available authenticator supported it`,code:`ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT`,cause:e})}else if(e.name===`InvalidStateError`)return new Q({message:`The authenticator was previously registered`,code:`ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED`,cause:e});else if(e.name===`NotAllowedError`)return new Q({message:e.message,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e});else if(e.name===`NotSupportedError`)return n.pubKeyCredParams.filter(e=>e.type===`public-key`).length===0?new Q({message:`No entry in pubKeyCredParams was of type "public-key"`,code:`ERROR_MALFORMED_PUBKEYCREDPARAMS`,cause:e}):new Q({message:`No available authenticator supported any of the specified pubKeyCredParams algorithms`,code:`ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG`,cause:e});else if(e.name===`SecurityError`){let t=window.location.hostname;if(!Ta(t))return new Q({message:`${window.location.hostname} is an invalid domain`,code:`ERROR_INVALID_DOMAIN`,cause:e});if(n.rp.id!==t)return new Q({message:`The RP ID "${n.rp.id}" is invalid for this domain`,code:`ERROR_INVALID_RP_ID`,cause:e})}else if(e.name===`TypeError`){if(n.user.id.byteLength<1||n.user.id.byteLength>64)return new Q({message:`User ID was not between 1 and 64 characters`,code:`ERROR_INVALID_USER_ID_LENGTH`,cause:e})}else if(e.name===`UnknownError`)return new Q({message:`The authenticator was unable to process the specified options, or could not create a new credential`,code:`ERROR_AUTHENTICATOR_GENERAL_ERROR`,cause:e});return new Q({message:`a Non-Webauthn related error has occurred`,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e})}function ya({error:e,options:t}){let{publicKey:n}=t;if(!n)throw Error(`options was missing required publicKey property`);if(e.name===`AbortError`){if(t.signal instanceof AbortSignal)return new Q({message:`Authentication ceremony was sent an abort signal`,code:`ERROR_CEREMONY_ABORTED`,cause:e})}else if(e.name===`NotAllowedError`)return new Q({message:e.message,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e});else if(e.name===`SecurityError`){let t=window.location.hostname;if(!Ta(t))return new Q({message:`${window.location.hostname} is an invalid domain`,code:`ERROR_INVALID_DOMAIN`,cause:e});if(n.rpId!==t)return new Q({message:`The RP ID "${n.rpId}" is invalid for this domain`,code:`ERROR_INVALID_RP_ID`,cause:e})}else if(e.name===`UnknownError`)return new Q({message:`The authenticator was unable to process the specified options, or could not create a new assertion signature`,code:`ERROR_AUTHENTICATOR_GENERAL_ERROR`,cause:e});return new Q({message:`a Non-Webauthn related error has occurred`,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e})}var ba=new class{createNewAbortSignal(){if(this.controller){let e=Error(`Cancelling existing WebAuthn API call for new one`);e.name=`AbortError`,this.controller.abort(e)}let e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){let e=Error(`Manually cancelling existing WebAuthn API call`);e.name=`AbortError`,this.controller.abort(e),this.controller=void 0}}};function xa(e){if(!e)throw Error(`Credential creation options are required`);if(typeof PublicKeyCredential<`u`&&`parseCreationOptionsFromJSON`in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON==`function`)return PublicKeyCredential.parseCreationOptionsFromJSON(e);let{challenge:t,user:n,excludeCredentials:r}=e,i=Ue(e,[`challenge`,`user`,`excludeCredentials`]),a=hi(t).buffer,o=Object.assign(Object.assign({},n),{id:hi(n.id).buffer}),s=Object.assign(Object.assign({},i),{challenge:a,user:o});if(r&&r.length>0){s.excludeCredentials=Array(r.length);for(let e=0;e<r.length;e++){let t=r[e];s.excludeCredentials[e]=Object.assign(Object.assign({},t),{id:hi(t.id).buffer,type:t.type||`public-key`,transports:t.transports})}}return s}function Sa(e){if(!e)throw Error(`Credential request options are required`);if(typeof PublicKeyCredential<`u`&&`parseRequestOptionsFromJSON`in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON==`function`)return PublicKeyCredential.parseRequestOptionsFromJSON(e);let{challenge:t,allowCredentials:n}=e,r=Ue(e,[`challenge`,`allowCredentials`]),i=hi(t).buffer,a=Object.assign(Object.assign({},r),{challenge:i});if(n&&n.length>0){a.allowCredentials=Array(n.length);for(let e=0;e<n.length;e++){let t=n[e];a.allowCredentials[e]=Object.assign(Object.assign({},t),{id:hi(t.id).buffer,type:t.type||`public-key`,transports:t.transports})}}return a}function Ca(e){if(`toJSON`in e&&typeof e.toJSON==`function`)return e.toJSON();let t=e;return{id:e.id,rawId:e.id,response:{attestationObject:H(new Uint8Array(e.response.attestationObject)),clientDataJSON:H(new Uint8Array(e.response.clientDataJSON))},type:`public-key`,clientExtensionResults:e.getClientExtensionResults(),authenticatorAttachment:t.authenticatorAttachment??void 0}}function wa(e){if(`toJSON`in e&&typeof e.toJSON==`function`)return e.toJSON();let t=e,n=e.getClientExtensionResults(),r=e.response;return{id:e.id,rawId:e.id,response:{authenticatorData:H(new Uint8Array(r.authenticatorData)),clientDataJSON:H(new Uint8Array(r.clientDataJSON)),signature:H(new Uint8Array(r.signature)),userHandle:r.userHandle?H(new Uint8Array(r.userHandle)):void 0},type:`public-key`,clientExtensionResults:n,authenticatorAttachment:t.authenticatorAttachment??void 0}}function Ta(e){return e===`localhost`||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e)}function Ea(){return!!(U()&&`PublicKeyCredential`in window&&window.PublicKeyCredential&&`credentials`in navigator&&typeof(navigator==null?void 0:navigator.credentials)?.create==`function`&&typeof(navigator==null?void 0:navigator.credentials)?.get==`function`)}async function Da(e){try{let t=await navigator.credentials.create(e);return t?t instanceof PublicKeyCredential?{data:t,error:null}:{data:null,error:new _a(`Browser returned unexpected credential type`,t)}:{data:null,error:new _a(`Empty credential response`,t)}}catch(t){return{data:null,error:va({error:t,options:e})}}}async function Oa(e){try{let t=await navigator.credentials.get(e);return t?t instanceof PublicKeyCredential?{data:t,error:null}:{data:null,error:new _a(`Browser returned unexpected credential type`,t)}:{data:null,error:new _a(`Empty credential response`,t)}}catch(t){return{data:null,error:ya({error:t,options:e})}}}var ka={hints:[`security-key`],authenticatorSelection:{authenticatorAttachment:`cross-platform`,requireResidentKey:!1,userVerification:`preferred`,residentKey:`discouraged`},attestation:`direct`},Aa={userVerification:`preferred`,hints:[`security-key`],attestation:`direct`};function ja(...e){let t=e=>typeof e==`object`&&!!e&&!Array.isArray(e),n=e=>e instanceof ArrayBuffer||ArrayBuffer.isView(e),r={};for(let i of e)if(i)for(let e in i){let a=i[e];if(a!==void 0){if(Array.isArray(a))r[e]=a;else if(n(a))r[e]=a;else if(t(a)){let n=r[e];r[e]=t(n)?ja(n,a):ja(a)}else r[e]=a}}return r}function Ma(e,t){return ja(ka,e,t||{})}function Na(e,t){return ja(Aa,e,t||{})}var Pa=class{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:`webauthn`}))}async _challenge({factorId:e,webauthn:t,friendlyName:n,signal:r},i){try{let{data:a,error:o}=await this.client.mfa.challenge({factorId:e,webauthn:t});if(!a)return{data:null,error:o};let s=r??ba.createNewAbortSignal();if(a.webauthn.type===`create`){let{user:e}=a.webauthn.credential_options.publicKey;if(!e.name){let t=n;if(t)e.name=`${e.id}:${t}`;else{let t=(await this.client.getUser()).data.user,n=t?.user_metadata?.name||t?.email||t?.id||`User`;e.name=`${e.id}:${n}`}}e.displayName||=e.name}switch(a.webauthn.type){case`create`:{let{data:t,error:n}=await Da({publicKey:Ma(a.webauthn.credential_options.publicKey,i?.create),signal:s});return t?{data:{factorId:e,challengeId:a.id,webauthn:{type:a.webauthn.type,credential_response:t}},error:null}:{data:null,error:n}}case`request`:{let t=Na(a.webauthn.credential_options.publicKey,i?.request),{data:n,error:r}=await Oa(Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:t,signal:s}));return n?{data:{factorId:e,challengeId:a.id,webauthn:{type:a.webauthn.type,credential_response:n}},error:null}:{data:null,error:r}}}}catch(e){return R(e)?{data:null,error:e}:{data:null,error:new z(`Unexpected error in challenge`,e)}}}async _verify({challengeId:e,factorId:t,webauthn:n}){return this.client.mfa.verify({factorId:t,challengeId:e,webauthn:n})}async _authenticate({factorId:e,webauthn:{rpId:t=typeof window<`u`?window.location.hostname:void 0,rpOrigins:n=typeof window<`u`?[window.location.origin]:void 0,signal:r}={}},i){if(!t)return{data:null,error:new Wr(`rpId is required for WebAuthn authentication`)};try{if(!Ea())return{data:null,error:new z(`Browser does not support WebAuthn`,null)};let{data:a,error:o}=await this.challenge({factorId:e,webauthn:{rpId:t,rpOrigins:n},signal:r},{request:i});if(!a)return{data:null,error:o};let{webauthn:s}=a;return this._verify({factorId:e,challengeId:a.challengeId,webauthn:{type:s.type,rpId:t,rpOrigins:n,credential_response:s.credential_response}})}catch(e){return R(e)?{data:null,error:e}:{data:null,error:new z(`Unexpected error in authenticate`,e)}}}async _register({friendlyName:e,webauthn:{rpId:t=typeof window<`u`?window.location.hostname:void 0,rpOrigins:n=typeof window<`u`?[window.location.origin]:void 0,signal:r}={}},i){if(!t)return{data:null,error:new Wr(`rpId is required for WebAuthn registration`)};try{if(!Ea())return{data:null,error:new z(`Browser does not support WebAuthn`,null)};let{data:a,error:o}=await this._enroll({friendlyName:e});if(!a)return await this.client.mfa.listFactors().then(t=>t.data?.all.find(t=>t.factor_type===`webauthn`&&t.friendly_name===e&&t.status===`unverified`)).then(e=>e?this.client.mfa.unenroll({factorId:e?.id}):void 0),{data:null,error:o};let{data:s,error:c}=await this._challenge({factorId:a.id,friendlyName:a.friendly_name,webauthn:{rpId:t,rpOrigins:n},signal:r},{create:i});return s?this._verify({factorId:a.id,challengeId:s.challengeId,webauthn:{rpId:t,rpOrigins:n,type:s.webauthn.type,credential_response:s.webauthn.credential_response}}):{data:null,error:c}}catch(e){return R(e)?{data:null,error:e}:{data:null,error:new z(`Unexpected error in register`,e)}}}};fa();var Fa={url:Lr,storageKey:Rr,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:zr,flowType:`implicit`,debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1,experimental:{}},Ia={},La=!1,Ra=class e{get jwks(){return Ia[this.storageKey]?.jwks??{keys:[]}}set jwks(e){Ia[this.storageKey]=Object.assign(Object.assign({},Ia[this.storageKey]),{jwks:e})}get jwks_cached_at(){return Ia[this.storageKey]?.cachedAt??-(2**53-1)}set jwks_cached_at(e){Ia[this.storageKey]=Object.assign(Object.assign({},Ia[this.storageKey]),{cachedAt:e})}constructor(t){var n;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.lastRefreshFailure=null,this._sessionRemovalEpoch=0,this.initializePromise=null,this._pendingInitNotifications=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lock=null,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;let r=Object.assign(Object.assign({},Fa),t);if(this.storageKey=r.storageKey,this.instanceID=e.nextInstanceID[this.storageKey]??0,e.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!r.debug,typeof r.debug==`function`&&(this.logger=r.debug),this.instanceID>0&&U()){let e=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(e),this.logDebugMessages&&console.trace(e)}if(this.persistSession=r.persistSession,this.autoRefreshToken=r.autoRefreshToken,this.experimental=r.experimental??{},this.admin=new la({url:r.url,headers:r.headers,fetch:r.fetch,experimental:this.experimental}),this.url=r.url,this.headers=r.headers,this.fetch=Si(r.fetch),this.detectSessionInUrl=r.detectSessionInUrl,this.flowType=r.flowType,this.hasCustomAuthorizationHeader=r.hasCustomAuthorizationHeader,this.throwOnError=r.throwOnError,this.lockAcquireTimeout=r.lockAcquireTimeout,r.lock!=null&&(this.lock=r.lock,La||(La=!0,console.warn(`${this._logPrefix()} The "lock" option is deprecated and will be removed in v3. The client now coordinates session refreshes without a lock, so most apps can drop the option. See https://github.com/supabase/supabase-js/blob/master/packages/core/auth-js/migrations/lockless-coordination.md`))),this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=-(2**53-1)),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new Pa(this),recoveryCodes:{getStatus:this._getRecoveryCodesStatus.bind(this),generate:this._generateRecoveryCodes.bind(this),verify:this._verifyRecoveryCode.bind(this),regenerate:this._regenerateRecoveryCodes.bind(this),unenroll:this._unenrollRecoveryCodes.bind(this)}},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.passkey={startRegistration:this._startPasskeyRegistration.bind(this),verifyRegistration:this._verifyPasskeyRegistration.bind(this),startAuthentication:this._startPasskeyAuthentication.bind(this),verifyAuthentication:this._verifyPasskeyAuthentication.bind(this),list:this._listPasskeys.bind(this),update:this._updatePasskey.bind(this),delete:this._deletePasskey.bind(this)},this.persistSession?(r.storage?this.storage=r.storage:bi()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=ua(this.memoryStorage)),r.userStorage&&(this.userStorage=r.userStorage)):(this.memoryStorage={},this.storage=ua(this.memoryStorage)),U()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(e){console.error(`Failed to create a new BroadcastChannel, multi-tab state changes will not be available`,e)}(n=this.broadcastChannel)==null||n.addEventListener(`message`,async e=>{this._debug(`received broadcast notification from other tab or client`,e),(e.data.event===`TOKEN_REFRESHED`||e.data.event===`SIGNED_IN`)&&(this.lastRefreshFailure=null);try{await this._notifyAllSubscribers(e.data.event,e.data.session,!1)}catch(e){this._debug(`#broadcastChannel`,`error`,e)}})}r.skipAutoInitialize||this.initialize().catch(e=>{this._debug(`#initialize()`,`error`,e)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error;return e}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${Nr}) ${new Date().toISOString()}`}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}async initialize(){if(this.initializePromise)return await this.initializePromise;this._pendingInitNotifications=[],this.initializePromise=(async()=>this.lock==null?await this._initialize():await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()))();let e=await this.initializePromise,t=this._pendingInitNotifications??[];this._pendingInitNotifications=null;for(let e of t)await this._notifyAllSubscribers(e.event,e.session,e.broadcast);return e}async _initialize(){try{let e={},t=`none`;if(U()&&(e=xi(window.location.href),this._isImplicitGrantCallback(e)?t=`implicit`:await this._isPKCECallback(e)&&(t=`pkce`)),U()&&this.detectSessionInUrl&&t!==`none`){let{data:n,error:r}=await this._getSessionFromURL(e,t);if(r){if(this._debug(`#_initialize()`,`error detecting session from URL`,r),Zr(r)){let e=r.details?.code;if(e===`identity_already_exists`||e===`identity_not_found`||e===`single_identity_not_deletable`)return{error:r}}return{error:r}}let{session:i,redirectType:a}=n;return this._debug(`#_initialize()`,`detected session in URL`,i,`redirect type`,a),await this._saveSession(i),setTimeout(async()=>{a===`recovery`?await this._notifyAllSubscribers(`PASSWORD_RECOVERY`,i):await this._notifyAllSubscribers(`SIGNED_IN`,i)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(e){return R(e)?this._returnResult({error:e}):this._returnResult({error:new z(`Unexpected error during initialization`,e)})}finally{await this._handleVisibilityChange(),this._debug(`#_initialize()`,`end`)}}async signInAnonymously(e){try{let{data:t,error:n}=await Y(this.fetch,`POST`,`${this.url}/signup`,{headers:this.headers,body:{data:e?.options?.data??{},gotrue_meta_security:{captcha_token:e?.options?.captchaToken}},xform:X});if(n||!t)return this._returnResult({data:{user:null,session:null},error:n});let r=t.session,i=t.user;return t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers(`SIGNED_IN`,r)),this._returnResult({data:{user:i,session:r},error:null})}catch(e){if(R(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signUp(e){let t=null;try{let n;if(`email`in e){let{email:r,password:i,options:a}=e,o=null,s=null;this.flowType===`pkce`&&([o,s,t]=await this._getCodeChallengeAndMethod()),n=await Y(this.fetch,`POST`,`${this.url}/signup`,{headers:this.headers,redirectTo:this._maybeAppendFlowIdToRedirect(a?.emailRedirectTo,t),body:{email:r,password:i,data:a?.data??{},gotrue_meta_security:{captcha_token:a?.captchaToken},code_challenge:o,code_challenge_method:s},xform:X})}else if(`phone`in e){let{phone:t,password:r,options:i}=e;n=await Y(this.fetch,`POST`,`${this.url}/signup`,{headers:this.headers,body:{phone:t,password:r,data:i?.data??{},channel:i?.channel??`sms`,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:X})}else throw new Yr(`You must provide either an email or phone number and a password`);let{data:r,error:i}=n;if(i||!r)return await q(this.storage,this.storageKey,t),this._returnResult({data:{user:null,session:null},error:i});let a=r.session,o=r.user;return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers(`SIGNED_IN`,a)),this._returnResult({data:{user:o,session:a},error:null})}catch(e){if(await q(this.storage,this.storageKey,t),R(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithPassword(e){try{let t;if(`email`in e){let{email:n,password:r,options:i}=e;t=await Y(this.fetch,`POST`,`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:n,password:r,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:ra})}else if(`phone`in e){let{phone:n,password:r,options:i}=e;t=await Y(this.fetch,`POST`,`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:n,password:r,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:ra})}else throw new Yr(`You must provide either an email or phone number and a password`);let{data:n,error:r}=t;if(r)return this._returnResult({data:{user:null,session:null},error:r});if(!n||!n.session||!n.user){let e=new Jr;return this._returnResult({data:{user:null,session:null},error:e})}return n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers(`SIGNED_IN`,n.session)),this._returnResult({data:Object.assign({user:n.user,session:n.session},n.weak_password?{weakPassword:n.weak_password}:null),error:r})}catch(e){if(R(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithOAuth(e){return await this._handleProviderSignIn(e.provider,{redirectTo:e.options?.redirectTo,scopes:e.options?.scopes,queryParams:e.options?.queryParams,skipBrowserRedirect:e.options?.skipBrowserRedirect})}async exchangeCodeForSession(e,t){return await this.initializePromise,this.lock==null?this._exchangeCodeForSession(e,t):this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(e,t))}async signInWithWeb3(e){let{chain:t}=e;switch(t){case`ethereum`:return await this.signInWithEthereum(e);case`solana`:return await this.signInWithSolana(e);default:throw Error(`@supabase/auth-js: Unsupported chain "${t}"`)}}async signInWithEthereum(e){let t,n;if(`message`in e)t=e.message,n=e.signature;else{let{chain:r,wallet:i,statement:a,options:o}=e,s;if(!U()){if(typeof i!=`object`||!o?.url)throw Error(`@supabase/auth-js: Both wallet and url must be specified in non-browser environments.`);s=i}else if(typeof i==`object`)s=i;else{let e=window;if(`ethereum`in e&&typeof e.ethereum==`object`&&`request`in e.ethereum&&typeof e.ethereum.request==`function`)s=e.ethereum;else throw Error(`@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.`)}let c=new URL(o?.url??window.location.href),l=await s.request({method:`eth_requestAccounts`}).then(e=>e).catch(()=>{throw Error(`@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid`)});if(!l||l.length===0)throw Error(`@supabase/auth-js: No accounts available. Please ensure the wallet is connected.`);let u=pa(l[0]),d=o?.signInWithEthereum?.chainId;d||=ma(await s.request({method:`eth_chainId`})),t=ga({domain:c.host,address:u,statement:a,uri:c.href,version:`1`,chainId:d,nonce:o?.signInWithEthereum?.nonce,issuedAt:o?.signInWithEthereum?.issuedAt??new Date,expirationTime:o?.signInWithEthereum?.expirationTime,notBefore:o?.signInWithEthereum?.notBefore,requestId:o?.signInWithEthereum?.requestId,resources:o?.signInWithEthereum?.resources}),n=await s.request({method:`personal_sign`,params:[ha(t),u]})}try{let{data:r,error:i}=await Y(this.fetch,`POST`,`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:`ethereum`,message:t,signature:n},e.options?.captchaToken?{gotrue_meta_security:{captcha_token:e.options?.captchaToken}}:null),xform:X});if(i)throw i;if(!r||!r.session||!r.user){let e=new Jr;return this._returnResult({data:{user:null,session:null},error:e})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers(`SIGNED_IN`,r.session)),this._returnResult({data:Object.assign({},r),error:i})}catch(e){if(R(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithSolana(e){let t,n;if(`message`in e)t=e.message,n=e.signature;else{let{chain:r,wallet:i,statement:a,options:o}=e,s;if(!U()){if(typeof i!=`object`||!o?.url)throw Error(`@supabase/auth-js: Both wallet and url must be specified in non-browser environments.`);s=i}else if(typeof i==`object`)s=i;else{let e=window;if(`solana`in e&&typeof e.solana==`object`&&(`signIn`in e.solana&&typeof e.solana.signIn==`function`||`signMessage`in e.solana&&typeof e.solana.signMessage==`function`))s=e.solana;else throw Error(`@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.`)}let c=new URL(o?.url??window.location.href);if(`signIn`in s&&s.signIn){let e=await s.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},o?.signInWithSolana),{version:`1`,domain:c.host,uri:c.href}),a?{statement:a}:null)),r;if(Array.isArray(e)&&e[0]&&typeof e[0]==`object`)r=e[0];else if(e&&typeof e==`object`&&`signedMessage`in e&&`signature`in e)r=e;else throw Error(`@supabase/auth-js: Wallet method signIn() returned unrecognized value`);if(`signedMessage`in r&&`signature`in r&&(typeof r.signedMessage==`string`||r.signedMessage instanceof Uint8Array)&&r.signature instanceof Uint8Array)t=typeof r.signedMessage==`string`?r.signedMessage:new TextDecoder().decode(r.signedMessage),n=r.signature;else throw Error(`@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields`)}else{if(!(`signMessage`in s)||typeof s.signMessage!=`function`||!(`publicKey`in s)||typeof s!=`object`||!s.publicKey||!(`toBase58`in s.publicKey)||typeof s.publicKey.toBase58!=`function`)throw Error(`@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API`);t=[`${c.host} wants you to sign in with your Solana account:`,s.publicKey.toBase58(),...a?[``,a,``]:[``],`Version: 1`,`URI: ${c.href}`,`Issued At: ${o?.signInWithSolana?.issuedAt??new Date().toISOString()}`,...o?.signInWithSolana?.notBefore?[`Not Before: ${o.signInWithSolana.notBefore}`]:[],...o?.signInWithSolana?.expirationTime?[`Expiration Time: ${o.signInWithSolana.expirationTime}`]:[],...o?.signInWithSolana?.chainId?[`Chain ID: ${o.signInWithSolana.chainId}`]:[],...o?.signInWithSolana?.nonce?[`Nonce: ${o.signInWithSolana.nonce}`]:[],...o?.signInWithSolana?.requestId?[`Request ID: ${o.signInWithSolana.requestId}`]:[],...o?.signInWithSolana?.resources?.length?[`Resources`,...o.signInWithSolana.resources.map(e=>`- ${e}`)]:[]].join(`
`);let e=await s.signMessage(new TextEncoder().encode(t),`utf8`);if(!e||!(e instanceof Uint8Array))throw Error(`@supabase/auth-js: Wallet signMessage() API returned an recognized value`);n=e}}try{let{data:r,error:i}=await Y(this.fetch,`POST`,`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:`solana`,message:t,signature:H(n)},e.options?.captchaToken?{gotrue_meta_security:{captcha_token:e.options?.captchaToken}}:null),xform:X});if(i)throw i;if(!r||!r.session||!r.user){let e=new Jr;return this._returnResult({data:{user:null,session:null},error:e})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers(`SIGNED_IN`,r.session)),this._returnResult({data:Object.assign({},r),error:i})}catch(e){if(R(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async _exchangeCodeForSession(e,t){let n=t?.flowId!=null,r=n?Ni(t?.flowId):U()?Ni(xi(window.location.href)[Ur]):null;n&&!r&&this._debug(`#_exchangeCodeForSession()`,`provided flowId is not a valid flow id`,t?.flowId);let{verifier:i,flowId:a}=n&&!r?{verifier:null,flowId:null}:await zi(this.storage,this.storageKey,r),[o,s]=(i??``).split(`/`);try{if(!o&&this.flowType===`pkce`)throw new $r;let{data:t,error:n}=await Y(this.fetch,`POST`,`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:o},xform:X});if(await q(this.storage,this.storageKey,a),n)throw n;if(!t||!t.session||!t.user){let e=new Jr;return this._returnResult({data:{user:null,session:null,redirectType:null},error:e})}return t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers(s===`recovery`?`PASSWORD_RECOVERY`:`SIGNED_IN`,t.session)),this._returnResult({data:Object.assign(Object.assign({},t),{redirectType:s??null}),error:n})}catch(e){if(await q(this.storage,this.storageKey,a),R(e))return this._returnResult({data:{user:null,session:null,redirectType:null},error:e});throw e}}async signInWithIdToken(e){try{let{options:t,provider:n,token:r,access_token:i,nonce:a}=e,{data:o,error:s}=await Y(this.fetch,`POST`,`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:n,id_token:r,access_token:i,nonce:a,gotrue_meta_security:{captcha_token:t?.captchaToken}},xform:X});if(s)return this._returnResult({data:{user:null,session:null},error:s});if(!o||!o.session||!o.user){let e=new Jr;return this._returnResult({data:{user:null,session:null},error:e})}return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers(`SIGNED_IN`,o.session)),this._returnResult({data:o,error:s})}catch(e){if(R(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithOtp(e){let t=null;try{if(`email`in e){let{email:n,options:r}=e,i=null,a=null;this.flowType===`pkce`&&([i,a,t]=await this._getCodeChallengeAndMethod());let{error:o}=await Y(this.fetch,`POST`,`${this.url}/otp`,{headers:this.headers,body:{email:n,data:r?.data??{},create_user:r?.shouldCreateUser??!0,gotrue_meta_security:{captcha_token:r?.captchaToken},code_challenge:i,code_challenge_method:a},redirectTo:this._maybeAppendFlowIdToRedirect(r?.emailRedirectTo,t)});return this._returnResult({data:{user:null,session:null},error:o})}if(`phone`in e){let{phone:t,options:n}=e,{data:r,error:i}=await Y(this.fetch,`POST`,`${this.url}/otp`,{headers:this.headers,body:{phone:t,data:n?.data??{},create_user:n?.shouldCreateUser??!0,gotrue_meta_security:{captcha_token:n?.captchaToken},channel:n?.channel??`sms`}});return this._returnResult({data:{user:null,session:null,messageId:r?.message_id},error:i})}throw new Yr(`You must provide either an email or phone number.`)}catch(e){if(await q(this.storage,this.storageKey,t),R(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async verifyOtp(e){try{let t,n;`options`in e&&(t=e.options?.redirectTo,n=e.options?.captchaToken);let{data:r,error:i}=await Y(this.fetch,`POST`,`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:n}}),redirectTo:t,xform:X});if(i)throw i;if(!r)throw Error(`An error occurred on token verification.`);let a=r.session,o=r.user;return a?.access_token&&(await this._saveSession(a),await this._notifyAllSubscribers(e.type==`recovery`?`PASSWORD_RECOVERY`:`SIGNED_IN`,a)),this._returnResult({data:{user:o,session:a},error:null})}catch(e){if(R(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithSSO(e){let t=null;try{let n=null,r=null;this.flowType===`pkce`&&([n,r,t]=await this._getCodeChallengeAndMethod());let i=await Y(this.fetch,`POST`,`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},`providerId`in e?{provider_id:e.providerId}:null),`domain`in e?{domain:e.domain}:null),{redirect_to:this._maybeAppendFlowIdToRedirect(e.options?.redirectTo,t)}),e?.options?.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:n,code_challenge_method:r}),headers:this.headers,xform:ia});return i.data?.url&&U()&&!e.options?.skipBrowserRedirect&&window.location.assign(i.data.url),this._returnResult(i)}catch(e){if(await q(this.storage,this.storageKey,t),R(e))return this._returnResult({data:null,error:e});throw e}}async reauthenticate(){return await this.initializePromise,this.lock==null?await this._reauthenticate():await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;if(n)throw n;if(!t)throw new V;let{error:r}=await Y(this.fetch,`GET`,`${this.url}/reauthenticate`,{headers:this.headers,jwt:t.access_token});return this._returnResult({data:{user:null,session:null},error:r})})}catch(e){if(R(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async resend(e){let t=null;try{let n=`${this.url}/resend`;if(`email`in e){let{email:r,type:i,options:a}=e,o=null,s=null;this.flowType===`pkce`&&([o,s,t]=await this._getCodeChallengeAndMethod());let{error:c}=await Y(this.fetch,`POST`,n,{headers:this.headers,body:{email:r,type:i,gotrue_meta_security:{captcha_token:a?.captchaToken},code_challenge:o,code_challenge_method:s},redirectTo:this._maybeAppendFlowIdToRedirect(a?.emailRedirectTo,t)});return c&&await q(this.storage,this.storageKey,t),this._returnResult({data:{user:null,session:null},error:c})}if(`phone`in e){let{phone:t,type:r,options:i}=e,{data:a,error:o}=await Y(this.fetch,`POST`,n,{headers:this.headers,body:{phone:t,type:r,gotrue_meta_security:{captcha_token:i?.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:a?.message_id},error:o})}throw new Yr(`You must provide either an email or phone number and a type`)}catch(e){if(await q(this.storage,this.storageKey,t),R(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async getSession(){return await this.initializePromise,this.lock==null?await this._useSession(async e=>e):await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async e=>e))}async _acquireLock(e,t){this._debug(`#_acquireLock`,`begin`,e);try{if(this.lockAcquired){let e=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),n=(async()=>(await e,await t()))();return this.pendingInLock.push((async()=>{try{await n}catch{}})()),n}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug(`#_acquireLock`,`lock acquired for storage key`,this.storageKey);try{this.lockAcquired=!0;let e=t();for(this.pendingInLock.push((async()=>{try{await e}catch{}})()),await e;this.pendingInLock.length;){let e=[...this.pendingInLock];await Promise.all(e),this.pendingInLock.splice(0,e.length)}return await e}finally{this._debug(`#_acquireLock`,`lock released for storage key`,this.storageKey),this.lockAcquired=!1}})}finally{this._debug(`#_acquireLock`,`end`)}}async _useSession(e){this._debug(`#_useSession`,`begin`);try{return await e(await this.__loadSession())}finally{this._debug(`#_useSession`,`end`)}}async __loadSession(){this._debug(`#__loadSession()`,`begin`),this.lock!=null&&!this.lockAcquired&&this._debug(`#__loadSession()`,`used outside of an acquired lock!`,Error().stack);try{let e=null,t=await G(this.storage,this.storageKey);if(this._debug(`#getSession()`,`session from storage`,t),t!==null&&(this._isValidSession(t)?e=t:(this._debug(`#getSession()`,`session from storage is not valid`),await this._removeSession())),!e)return{data:{session:null},error:null};let n=e.expires_at?e.expires_at*1e3-Date.now()<Fr:!1;if(this._debug(`#__loadSession()`,`session has${n?``:` not`} expired`,`expires_at`,e.expires_at),!n)return{data:{session:await this._hydrateSessionUser(e)},error:null};let{data:r,error:i}=await this._callRefreshToken(e.refresh_token);if(i){let e=await G(this.storage,this.storageKey);return e&&this._isValidSession(e)&&e.expires_at&&e.expires_at*1e3>Date.now()?this._returnResult({data:{session:await this._hydrateSessionUser(e)},error:null}):this._returnResult({data:{session:null},error:i})}return this._returnResult({data:{session:r},error:null})}finally{this._debug(`#__loadSession()`,`end`)}}async _hydrateSessionUser(e){if(this.userStorage){let t=await G(this.userStorage,this.storageKey+`-user`);e.user=t?.user?t.user:Yi()}if(this.storage.isServer&&e.user&&!e.user.__isUserNotAvailableProxy){let t={value:this.suppressGetSessionWarning};e.user=Xi(e.user,t),t.value&&(this.suppressGetSessionWarning=!0)}return e}async getUser(e){if(e)return await this._getUser(e);await this.initializePromise;let t;return t=this.lock==null?await this._getUser():await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser()),t.data.user&&(this.suppressGetSessionWarning=!0),t}async _getUser(e){try{return e?await Y(this.fetch,`GET`,`${this.url}/user`,{headers:this.headers,jwt:e,xform:Z}):await this._useSession(async e=>{let{data:t,error:n}=e;if(n)throw n;return!t.session?.access_token&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new V}:await Y(this.fetch,`GET`,`${this.url}/user`,{headers:this.headers,jwt:t.session?.access_token??void 0,xform:Z})})}catch(e){if(R(e))return qr(e)&&await this._removeSession(),this._returnResult({data:{user:null},error:e});throw e}}async updateUser(e,t={}){return await this.initializePromise,this.lock==null?await this._updateUser(e,t):await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(e,t))}async _updateUser(e,t={}){let n=null;try{return await this._useSession(async r=>{let{data:i,error:a}=r;if(a)throw a;if(!i.session)throw new V;let o=i.session,s=null,c=null;this.flowType===`pkce`&&e.email!=null&&([s,c,n]=await this._getCodeChallengeAndMethod());let{data:l,error:u}=await Y(this.fetch,`PUT`,`${this.url}/user`,{headers:this.headers,redirectTo:this._maybeAppendFlowIdToRedirect(t?.emailRedirectTo,n),body:Object.assign(Object.assign({},e),{code_challenge:s,code_challenge_method:c}),jwt:o.access_token,xform:Z});if(u)throw u;return o.user=l.user,await this._saveSession(o),await this._notifyAllSubscribers(`USER_UPDATED`,o),this._returnResult({data:{user:o.user},error:null})})}catch(e){if(await q(this.storage,this.storageKey,n),R(e))return this._returnResult({data:{user:null},error:e});throw e}}async setSession(e){return await this.initializePromise,this.lock==null?await this._setSession(e):await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(e))}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new V;let t=Date.now()/1e3,n=t,r=!0,i=null,{payload:a}=Ti(e.access_token);if(a.exp&&(n=a.exp,r=n<=t),r){let{data:t,error:n}=await this._callRefreshToken(e.refresh_token);if(n)return this._returnResult({data:{user:null,session:null},error:n});if(!t)return{data:{user:null,session:null},error:null};i=t}else{let{data:r,error:a}=await this._getUser(e.access_token);if(a)return this._returnResult({data:{user:null,session:null},error:a});i={access_token:e.access_token,refresh_token:e.refresh_token,user:r.user,token_type:`bearer`,expires_in:n-t,expires_at:n},await this._saveSession(i),await this._notifyAllSubscribers(`SIGNED_IN`,i)}return this._returnResult({data:{user:i.user,session:i},error:null})}catch(e){if(R(e))return this._returnResult({data:{session:null,user:null},error:e});throw e}}async refreshSession(e){return await this.initializePromise,this.lock==null?await this._refreshSession(e):await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(e))}async _refreshSession(e){try{return await this._useSession(async t=>{if(!e){let{data:n,error:r}=t;if(r)throw r;e=n.session??void 0}if(!e?.refresh_token)throw new V;let{data:n,error:r}=await this._callRefreshToken(e.refresh_token);return r?this._returnResult({data:{user:null,session:null},error:r}):n?this._returnResult({data:{user:n.user,session:n},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(e){if(R(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async _getSessionFromURL(e,t){try{if(!U())throw new Xr(`No browser detected.`);if(e.error||e.error_description||e.error_code)throw new Xr(e.error_description||`Error in URL with unspecified error_description`,{error:e.error||`unspecified_error`,code:e.error_code||`unspecified_code`});switch(t){case`implicit`:if(this.flowType===`pkce`)throw new Qr(`Not a valid PKCE flow url.`);break;case`pkce`:if(this.flowType===`implicit`)throw new Xr(`Not a valid implicit grant flow url.`)}if(t===`pkce`){if(this._debug(`#_initialize()`,`begin`,`is PKCE flow`,!0),!e.code)throw new Qr(`No code detected.`);let{data:t,error:n}=await this._exchangeCodeForSession(e.code,{flowId:e[Ur]});if(n)throw n;let r=new URL(window.location.href);return r.searchParams.delete(`code`),r.searchParams.delete(Ur),window.history.replaceState(window.history.state,``,r.toString()),{data:{session:t.session,redirectType:t.redirectType??null},error:null}}let{provider_token:n,provider_refresh_token:r,access_token:i,refresh_token:a,expires_in:o,expires_at:s,token_type:c}=e;if(!i||!o||!a||!c)throw new Xr(`No session defined in URL`);let l=Math.round(Date.now()/1e3),u=parseInt(o),d=l+u;s&&(d=parseInt(s));let f=d-l;f*1e3<=3e4&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${f}s, should have been closer to ${u}s`);let p=d-u;l-p>=120?console.warn(`@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale`,p,d,l):l-p<0&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew`,p,d,l);let{data:m,error:h}=await this._getUser(i);if(h)throw h;let g={provider_token:n,provider_refresh_token:r,access_token:i,expires_in:u,expires_at:d,refresh_token:a,token_type:c,user:m.user};return window.location.hash=``,this._debug(`#_getSessionFromURL()`,`clearing window.location.hash`),this._returnResult({data:{session:g,redirectType:e.type},error:null})}catch(e){if(R(e))return this._returnResult({data:{session:null,redirectType:null},error:e});throw e}}_isImplicitGrantCallback(e){return typeof this.detectSessionInUrl==`function`?this.detectSessionInUrl(new URL(window.location.href),e):!!(e.access_token||e.error||e.error_description||e.error_code)}async _isPKCECallback(e){if(!e.code)return!1;let t=Ni(e[Ur]);return t&&await G(this.storage,Fi(this.storageKey,t))?!0:!!await G(this.storage,`${this.storageKey}-code-verifier`)}async signOut(e={scope:`global`}){return await this.initializePromise,this.lock==null?await this._signOut(e):await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(e))}async _signOut({scope:e}={scope:`global`}){return await this._useSession(async t=>{let n=async()=>{await this._removeSession()},{data:r,error:i}=t;if(i&&!qr(i))return this._returnResult({error:i});let a=r.session?.access_token;if(a){let{error:t}=await this.admin.signOut(a,e);if(t&&!(Kr(t)&&(t.status===404||t.status===401||t.status===403)||qr(t)))return e!==`others`&&await n(),this._returnResult({error:t})}return e!==`others`&&await n(),this._returnResult({error:null})})}onAuthStateChange(e){let t=vi(),n={id:t,callback:e,unsubscribe:()=>{this._debug(`#unsubscribe()`,`state change callback with id removed`,t),this.stateChangeEmitters.delete(t)}};return this._debug(`#onAuthStateChange()`,`registered callback with id`,t),this.stateChangeEmitters.set(t,n),(async()=>{await this.initializePromise,this.lock==null?await this._emitInitialSession(t):await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(t)})})(),{data:{subscription:n}}}async _emitInitialSession(e){return await this._useSession(async t=>{try{let{data:{session:n},error:r}=t;if(r)throw r;await this.stateChangeEmitters.get(e)?.callback(`INITIAL_SESSION`,n),this._debug(`INITIAL_SESSION`,`callback id`,e,`session`,n)}catch(t){if(await this.stateChangeEmitters.get(e)?.callback(`INITIAL_SESSION`,null),this._debug(`INITIAL_SESSION`,`callback id`,e,`error`,t),ri(t))return;qr(t)||ti(t)||Kr(t)&&(t.code===`refresh_token_not_found`||t.code===`refresh_token_already_used`||t.code===`session_expired`)?console.warn(t):console.error(t)}})}async resetPasswordForEmail(e,t={}){let n=null,r=null,i=null;this.flowType===`pkce`&&([n,r,i]=await this._getCodeChallengeAndMethod(!0));try{return await Y(this.fetch,`POST`,`${this.url}/recover`,{body:{email:e,code_challenge:n,code_challenge_method:r,gotrue_meta_security:{captcha_token:t.captchaToken}},headers:this.headers,redirectTo:this._maybeAppendFlowIdToRedirect(t.redirectTo,i)})}catch(e){if(await q(this.storage,this.storageKey,i),R(e))return this._returnResult({data:null,error:e});throw e}}async getUserIdentities(){try{let{data:e,error:t}=await this.getUser();if(t)throw t;return this._returnResult({data:{identities:e.user.identities??[]},error:null})}catch(e){if(R(e))return this._returnResult({data:null,error:e});throw e}}async linkIdentity(e){return`token`in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){let t=null;try{let{data:n,error:r}=await this._useSession(async n=>{let{data:r,error:i}=n;if(i)throw i;let{url:a,flowId:o}=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:e.options?.redirectTo,scopes:e.options?.scopes,queryParams:e.options?.queryParams,skipBrowserRedirect:!0});return t=o,await Y(this.fetch,`GET`,a,{headers:this.headers,jwt:r.session?.access_token??void 0})});if(r)throw r;return U()&&!e.options?.skipBrowserRedirect&&window.location.assign(n?.url),this._returnResult({data:{provider:e.provider,url:n?.url,flowId:t},error:null})}catch(n){if(R(n))return this._returnResult({data:{provider:e.provider,url:null,flowId:t},error:n});throw n}}async linkIdentityIdToken(e){return await this._useSession(async t=>{try{let{error:n,data:{session:r}}=t;if(n)throw n;let{options:i,provider:a,token:o,access_token:s,nonce:c}=e,{data:l,error:u}=await Y(this.fetch,`POST`,`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:r?.access_token??void 0,body:{provider:a,id_token:o,access_token:s,nonce:c,link_identity:!0,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:X});return u?this._returnResult({data:{user:null,session:null},error:u}):!l||!l.session||!l.user?this._returnResult({data:{user:null,session:null},error:new Jr}):(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers(`USER_UPDATED`,l.session)),this._returnResult({data:l,error:u}))}catch(e){if(await q(this.storage,this.storageKey,null),R(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}})}async unlinkIdentity(e){try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)throw r;return await Y(this.fetch,`DELETE`,`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:n.session?.access_token??void 0})})}catch(e){if(R(e))return this._returnResult({data:null,error:e});throw e}}async _refreshAccessToken(e){let t=`#_refreshAccessToken()`;this._debug(t,`begin`);try{let n=Date.now();return await Di(async n=>(n>0&&await Ei(200*2**(n-1)),this._debug(t,`refreshing attempt`,n),await Y(this.fetch,`POST`,`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:X})),(e,t)=>{let r=200*2**e;return t&&ti(t)&&Date.now()+r-n<3e4})}catch(e){if(this._debug(t,`error`,e),R(e))return this._returnResult({data:{session:null,user:null},error:e});throw e}finally{this._debug(t,`end`)}}_isValidSession(e){return typeof e==`object`&&!!e&&`access_token`in e&&`refresh_token`in e&&`expires_at`in e}async _handleProviderSignIn(e,t){let{url:n,flowId:r}=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:t.redirectTo,scopes:t.scopes,queryParams:t.queryParams});return this._debug(`#_handleProviderSignIn()`,`provider`,e,`options`,t,`url`,n),U()&&!t.skipBrowserRedirect&&window.location.assign(n),{data:{provider:e,url:n,flowId:r},error:null}}async _recoverAndRefresh(){let e=`#_recoverAndRefresh()`;this._debug(e,`begin`);try{let t=await G(this.storage,this.storageKey);if(t&&this.userStorage){let e=await G(this.userStorage,this.storageKey+`-user`);!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!e&&(e={user:t.user},await W(this.userStorage,this.storageKey+`-user`,e)),t.user=e?.user??Yi()}else if(t&&!t.user&&!t.user){let e=await G(this.storage,this.storageKey+`-user`);e&&e?.user?(t.user=e.user,await K(this.storage,this.storageKey+`-user`),await W(this.storage,this.storageKey,t)):t.user=Yi()}if(this._debug(e,`session from storage`,t),!this._isValidSession(t)){this._debug(e,`session is not valid`),t!==null&&await this._removeSession();return}let n=(t.expires_at??1/0)*1e3-Date.now()<Fr;if(this._debug(e,`session has${n?``:` not`} expired with margin of ${Fr}s`),n){if(this.autoRefreshToken&&t.refresh_token){let{error:n}=await this._callRefreshToken(t.refresh_token);n&&(ri(n)?this._debug(e,`refresh discarded by commit guard`,n):this._debug(e,`refresh failed`,n))}}else if(t.user&&t.user.__isUserNotAvailableProxy===!0)try{let{data:n,error:r}=await this._getUser(t.access_token);!r&&n?.user?(t.user=n.user,await this._saveSession(t),await this._notifyAllSubscribers(`SIGNED_IN`,t)):this._debug(e,`could not get user data, skipping SIGNED_IN notification`)}catch(t){console.error(`Error getting user data:`,t),this._debug(e,`error getting user data, skipping SIGNED_IN notification`,t)}else await this._notifyAllSubscribers(`SIGNED_IN`,t)}catch(t){this._debug(e,`error`,t),ti(t)?console.warn(t):console.error(t);return}finally{this._debug(e,`end`)}}async _callRefreshToken(e){var t,n;if(!e)throw new V;if(this.refreshingDeferred)return this.refreshingDeferred.promise;if(this.lastRefreshFailure&&this.lastRefreshFailure.refreshToken===e&&Date.now()<this.lastRefreshFailure.expiresAt)return this._debug(`#_callRefreshToken()`,`returning cached failure (cooldown active)`),this.lastRefreshFailure.result;let r=`#_callRefreshToken()`;this._debug(r,`begin`);try{this.refreshingDeferred=new wi,this.refreshingDeferred.promise.then(void 0,()=>{});let t=await G(this.storage,this.storageKey),{data:n,error:i}=await this._refreshAccessToken(e);if(i)throw i;if(!n.session)throw new V;let a=await G(this.storage,this.storageKey);if(t!==null&&(a===null||a.refresh_token!==t.refresh_token)){this._debug(r,`commit guard: storage changed since refresh started, discarding rotated tokens`,{startedWith:`present`,nowHolds:a?`replaced`:`cleared`});let e={data:null,error:new ni};return this.refreshingDeferred.resolve(e),e}let o=this._sessionRemovalEpoch;if(await this._saveSession(n.session),this._sessionRemovalEpoch!==o){this._debug(r,`commit guard (post-save): _removeSession ran during _saveSession, undoing write`),await K(this.storage,this.storageKey),this.userStorage&&await K(this.userStorage,this.storageKey+`-user`);let e={data:null,error:new ni};return this.refreshingDeferred.resolve(e),e}await this._notifyAllSubscribers(`TOKEN_REFRESHED`,n.session);let s={data:n.session,error:null};return this.lastRefreshFailure=null,this.refreshingDeferred.resolve(s),s}catch(i){if(this._debug(r,`error`,i),R(i)){let n={data:null,error:i};if(!ti(i)){let e=await G(this.storage,this.storageKey);e?.expires_at&&e.expires_at*1e3>Date.now()?this._debug(r,`proactive refresh failed, access token still valid — preserving session`):await this._removeSession()}return this.lastRefreshFailure={refreshToken:e,result:n,expiresAt:Date.now()+Ir},(t=this.refreshingDeferred)==null||t.resolve(n),n}throw(n=this.refreshingDeferred)==null||n.reject(i),i}finally{this.refreshingDeferred=null,this._debug(r,`end`)}}async _notifyAllSubscribers(e,t,n=!0){if(this._pendingInitNotifications!==null&&n){this._pendingInitNotifications.push({event:e,session:t,broadcast:n});return}let r=`#_notifyAllSubscribers(${e})`;this._debug(r,`begin`,t,`broadcast = ${n}`);try{this.broadcastChannel&&n&&this.broadcastChannel.postMessage({event:e,session:t});let r=[],i=Array.from(this.stateChangeEmitters.values()).map(async n=>{try{await n.callback(e,t)}catch(e){r.push(e)}});if(await Promise.all(i),r.length>0){for(let e=0;e<r.length;e+=1)console.error(r[e]);throw r[0]}}finally{this._debug(r,`end`)}}async _saveSession(e){this._debug(`#_saveSession()`,e),this.suppressGetSessionWarning=!0;let t=Object.assign({},e),n=t.user&&t.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!n&&t.user&&await W(this.userStorage,this.storageKey+`-user`,{user:t.user});let e=Object.assign({},t);delete e.user;let r=Zi(e);await W(this.storage,this.storageKey,r)}else{let e=Zi(t);await W(this.storage,this.storageKey,e)}}async _removeSession(){this._sessionRemovalEpoch+=1,this._debug(`#_removeSession()`),this.lastRefreshFailure=null,this.suppressGetSessionWarning=!1,await K(this.storage,this.storageKey),await Bi(this.storage,this.storageKey),await K(this.storage,this.storageKey+`-user`),this.userStorage&&await K(this.userStorage,this.storageKey+`-user`),await this._notifyAllSubscribers(`SIGNED_OUT`,null)}_removeVisibilityChangedCallback(){this._debug(`#_removeVisibilityChangedCallback()`);let e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&U()&&window!=null&&window.removeEventListener&&window.removeEventListener(`visibilitychange`,e)}catch(e){console.error(`removing visibilitychange callback failed`,e)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug(`#_startAutoRefresh()`);let e=setInterval(()=>this._autoRefreshTokenTick(),Pr);this.autoRefreshTicker=e,e&&typeof e==`object`&&typeof e.unref==`function`?e.unref():typeof Deno<`u`&&typeof Deno.unrefTimer==`function`&&Deno.unrefTimer(e);let t=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=t,t&&typeof t==`object`&&typeof t.unref==`function`?t.unref():typeof Deno<`u`&&typeof Deno.unrefTimer==`function`&&Deno.unrefTimer(t)}async _stopAutoRefresh(){this._debug(`#_stopAutoRefresh()`);let e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e);let t=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,t&&clearTimeout(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async dispose(){var e;this._removeVisibilityChangedCallback(),await this._stopAutoRefresh(),(e=this.broadcastChannel)==null||e.close(),this.broadcastChannel=null,this.stateChangeEmitters.clear()}async _autoRefreshTokenTick(){if(this._debug(`#_autoRefreshTokenTick()`,`begin`),this.lock!=null)try{await this._acquireLock(0,async()=>{try{let e=Date.now();try{return await this._useSession(async t=>{let{data:{session:n}}=t;if(!n||!n.refresh_token||!n.expires_at){this._debug(`#_autoRefreshTokenTick()`,`no session`);return}let r=Math.floor((n.expires_at*1e3-e)/Pr);this._debug(`#_autoRefreshTokenTick()`,`access token expires in ${r} ticks, a tick lasts ${Pr}ms, refresh threshold is 3 ticks`),r<=3&&await this._callRefreshToken(n.refresh_token)})}catch(e){console.error(`Auto refresh tick failed with error. This is likely a transient error.`,e)}}finally{this._debug(`#_autoRefreshTokenTick()`,`end`)}})}catch(e){if(e instanceof da)this._debug(`auto refresh token tick lock not available`);else throw e}else if(this.refreshingDeferred!==null)this._debug(`#_autoRefreshTokenTick()`,`refresh already in flight, skipping`);else try{let e=Date.now();try{await this._useSession(async t=>{let{data:{session:n}}=t;if(!n||!n.refresh_token||!n.expires_at){this._debug(`#_autoRefreshTokenTick()`,`no session`);return}let r=Math.floor((n.expires_at*1e3-e)/Pr);this._debug(`#_autoRefreshTokenTick()`,`access token expires in ${r} ticks, a tick lasts ${Pr}ms, refresh threshold is 3 ticks`),r<=3&&await this._callRefreshToken(n.refresh_token)})}catch(e){console.error(`Auto refresh tick failed with error. This is likely a transient error.`,e)}}finally{this._debug(`#_autoRefreshTokenTick()`,`end`)}}async _handleVisibilityChange(){if(this._debug(`#_handleVisibilityChange()`),!U()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(e){this._debug(`#visibilityChangedCallback`,`error`,e)}},window==null||window.addEventListener(`visibilitychange`,this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error(`_handleVisibilityChange`,e)}}async _onVisibilityChanged(e){let t=`#_onVisibilityChanged(${e})`;if(this._debug(t,`visibilityState`,document.visibilityState),document.visibilityState===`visible`){if(this.autoRefreshToken&&this._startAutoRefresh(),!e){if(await this.initializePromise,this.lock!=null)await this._acquireLock(this.lockAcquireTimeout,async()=>{document.visibilityState===`visible`?await this._recoverAndRefresh():this._debug(t,`acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting`)});else{if(document.visibilityState!==`visible`){this._debug(t,`visibilityState is no longer visible, skipping recovery`);return}await this._recoverAndRefresh()}}}else document.visibilityState===`hidden`&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,t,n){let r=n?.redirectTo,i=null,a=null,o=null;this.flowType===`pkce`&&([i,a,o]=await this._getCodeChallengeAndMethod(),r=this._maybeAppendFlowIdToRedirect(r,o));let s=[`provider=${encodeURIComponent(t)}`];if(r&&s.push(`redirect_to=${encodeURIComponent(r)}`),n?.scopes&&s.push(`scopes=${encodeURIComponent(n.scopes)}`),i!=null&&a!=null){let e=new URLSearchParams({code_challenge:`${encodeURIComponent(i)}`,code_challenge_method:`${encodeURIComponent(a)}`});s.push(e.toString())}if(n?.queryParams){let e=new URLSearchParams(n.queryParams);s.push(e.toString())}return n?.skipBrowserRedirect&&s.push(`skip_http_redirect=${n.skipBrowserRedirect}`),{url:`${e}?${s.join(`&`)}`,flowId:o}}_maybeAppendFlowIdToRedirect(e,t){return!e||!t||!this.experimental.appendPkceFlowIdToRedirects?e??void 0:Vi(e,t)}async _getCodeChallengeAndMethod(e=!1){return Hi(this.storage,this.storageKey,e,e=>this._debug(`#_getCodeChallengeAndMethod()`,`evicted oldest pending PKCE verifier slot`,e))}async _unenroll(e){try{return await this._useSession(async t=>{let{data:n,error:r}=t;return r?this._returnResult({data:null,error:r}):await Y(this.fetch,`DELETE`,`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:n?.session?.access_token})})}catch(e){if(R(e))return this._returnResult({data:null,error:e});throw e}}async _enroll(e){try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let i=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType===`phone`?{phone:e.phone}:e.factorType===`totp`?{issuer:e.issuer}:{}),{data:a,error:o}=await Y(this.fetch,`POST`,`${this.url}/factors`,{body:i,headers:this.headers,jwt:n?.session?.access_token});return o?this._returnResult({data:null,error:o}):(e.factorType===`totp`&&a.type===`totp`&&a?.totp?.qr_code&&(a.totp.qr_code=`data:image/svg+xml;utf-8,${a.totp.qr_code}`),this._returnResult({data:a,error:null}))})}catch(e){if(R(e))return this._returnResult({data:null,error:e});throw e}}async _verify(e){let t=async()=>{try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let i=Object.assign({challenge_id:e.challengeId},`webauthn`in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type===`create`?Ca(e.webauthn.credential_response):wa(e.webauthn.credential_response)})}:{code:e.code}),{data:a,error:o}=await Y(this.fetch,`POST`,`${this.url}/factors/${e.factorId}/verify`,{body:i,headers:this.headers,jwt:n?.session?.access_token});return o?this._returnResult({data:null,error:o}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+a.expires_in},a)),await this._notifyAllSubscribers(`MFA_CHALLENGE_VERIFIED`,a),this._returnResult({data:a,error:o}))})}catch(e){if(R(e))return this._returnResult({data:null,error:e});throw e}};return this.lock==null?t():this._acquireLock(this.lockAcquireTimeout,t)}async _challenge(e){let t=async()=>{try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let i=await Y(this.fetch,`POST`,`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:n?.session?.access_token});if(i.error)return i;let{data:a}=i;if(a.type!==`webauthn`)return{data:a,error:null};switch(a.webauthn.type){case`create`:return{data:Object.assign(Object.assign({},a),{webauthn:Object.assign(Object.assign({},a.webauthn),{credential_options:Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:xa(a.webauthn.credential_options.publicKey)})})}),error:null};case`request`:return{data:Object.assign(Object.assign({},a),{webauthn:Object.assign(Object.assign({},a.webauthn),{credential_options:Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:Sa(a.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(e){if(R(e))return this._returnResult({data:null,error:e});throw e}};return this.lock==null?t():this._acquireLock(this.lockAcquireTimeout,t)}async _challengeAndVerify(e){let{data:t,error:n}=await this._challenge({factorId:e.factorId});return n?this._returnResult({data:null,error:n}):await this._verify({factorId:e.factorId,challengeId:t.id,code:e.code})}async _listFactors(){let{data:{user:e},error:t}=await this.getUser();if(t)return{data:null,error:t};let n={all:[],phone:[],totp:[],webauthn:[],recovery_code:[]};for(let t of e?.factors??[])n.all.push(t),t.status===`verified`&&t.factor_type in n&&Array.isArray(n[t.factor_type])&&n[t.factor_type].push(t);return{data:n,error:null}}async _getAuthenticatorAssuranceLevel(e){if(e)try{let{payload:t}=Ti(e),n=null;t.aal&&(n=t.aal);let r=n,{data:{user:i},error:a}=await this.getUser(e);if(a)return this._returnResult({data:null,error:a});((i?.factors)?.filter(e=>e.status===`verified`)??[]).length>0&&(r=`aal2`);let o=t.amr||[];return{data:{currentLevel:n,nextLevel:r,currentAuthenticationMethods:o},error:null}}catch(e){if(R(e))return this._returnResult({data:null,error:e});throw e}let{data:{session:t},error:n}=await this.getSession();if(n)return this._returnResult({data:null,error:n});if(!t)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};let{payload:r}=Ti(t.access_token),i=null;r.aal&&(i=r.aal);let a=i;(t.user.factors?.filter(e=>e.status===`verified`)??[]).length>0&&(a=`aal2`);let o=r.amr||[];return{data:{currentLevel:i,nextLevel:a,currentAuthenticationMethods:o},error:null}}async _getRecoveryCodesStatus(){Ji(this.experimental);try{return await this._useSession(async e=>{let{data:t,error:n}=e;if(n)return this._returnResult({data:null,error:n});let{data:r,error:i}=await Y(this.fetch,`GET`,`${this.url}/factors/recovery-codes`,{headers:this.headers,jwt:t?.session?.access_token});return i?this._returnResult({data:null,error:i}):this._returnResult({data:r,error:null})})}catch(e){if(R(e))return this._returnResult({data:null,error:e});throw e}}async _generateRecoveryCodes(e){Ji(this.experimental);try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let{data:i,error:a}=await Y(this.fetch,`POST`,`${this.url}/factors/recovery-codes`,{body:e?.friendlyName?{friendly_name:e.friendlyName}:void 0,headers:this.headers,jwt:n?.session?.access_token});return a?this._returnResult({data:null,error:a}):this._returnResult({data:i,error:null})})}catch(e){if(R(e))return this._returnResult({data:null,error:e});throw e}}async _verifyRecoveryCode(e){Ji(this.experimental);let t=async()=>{try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let{data:i,error:a}=await Y(this.fetch,`POST`,`${this.url}/factors/recovery-codes/verify`,{body:{code:e.code},headers:this.headers,jwt:n?.session?.access_token});if(a)return this._returnResult({data:null,error:a});let o=Object.assign({expires_at:_i(i.expires_in)},i);return await this._saveSession(o),await this._notifyAllSubscribers(`MFA_CHALLENGE_VERIFIED`,o),this._returnResult({data:i,error:null})})}catch(e){if(R(e))return this._returnResult({data:null,error:e});throw e}};return this.lock==null?t():this._acquireLock(this.lockAcquireTimeout,t)}async _regenerateRecoveryCodes(){Ji(this.experimental);try{return await this._useSession(async e=>{let{data:t,error:n}=e;if(n)return this._returnResult({data:null,error:n});let{data:r,error:i}=await Y(this.fetch,`POST`,`${this.url}/factors/recovery-codes/regenerate`,{headers:this.headers,jwt:t?.session?.access_token});return i?this._returnResult({data:null,error:i}):this._returnResult({data:r,error:null})})}catch(e){if(R(e))return this._returnResult({data:null,error:e});throw e}}async _unenrollRecoveryCodes(){Ji(this.experimental);try{return await this._useSession(async e=>{let{data:t,error:n}=e;if(n)return this._returnResult({data:null,error:n});let{data:r,error:i}=await Y(this.fetch,`DELETE`,`${this.url}/factors/recovery-codes`,{headers:this.headers,jwt:t?.session?.access_token});return i?this._returnResult({data:null,error:i}):this._returnResult({data:r,error:null})})}catch(e){if(R(e))return this._returnResult({data:null,error:e});throw e}}async _getAuthorizationDetails(e){try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;return r?this._returnResult({data:null,error:r}):n?await Y(this.fetch,`GET`,`${this.url}/oauth/authorizations/${e}`,{headers:this.headers,jwt:n.access_token,xform:e=>({data:e,error:null})}):this._returnResult({data:null,error:new V})})}catch(e){if(R(e))return this._returnResult({data:null,error:e});throw e}}async _approveAuthorization(e,t){try{return await this._useSession(async n=>{let{data:{session:r},error:i}=n;if(i)return this._returnResult({data:null,error:i});if(!r)return this._returnResult({data:null,error:new V});let a=await Y(this.fetch,`POST`,`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:r.access_token,body:{action:`approve`},xform:e=>({data:e,error:null})});return a.data&&a.data.redirect_url&&U()&&!t?.skipBrowserRedirect&&window.location.assign(a.data.redirect_url),a})}catch(e){if(R(e))return this._returnResult({data:null,error:e});throw e}}async _denyAuthorization(e,t){try{return await this._useSession(async n=>{let{data:{session:r},error:i}=n;if(i)return this._returnResult({data:null,error:i});if(!r)return this._returnResult({data:null,error:new V});let a=await Y(this.fetch,`POST`,`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:r.access_token,body:{action:`deny`},xform:e=>({data:e,error:null})});return a.data&&a.data.redirect_url&&U()&&!t?.skipBrowserRedirect&&window.location.assign(a.data.redirect_url),a})}catch(e){if(R(e))return this._returnResult({data:null,error:e});throw e}}async _listOAuthGrants(){try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;return n?this._returnResult({data:null,error:n}):t?await Y(this.fetch,`GET`,`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:t.access_token,xform:e=>({data:e,error:null})}):this._returnResult({data:null,error:new V})})}catch(e){if(R(e))return this._returnResult({data:null,error:e});throw e}}async _revokeOAuthGrant(e){try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;return r?this._returnResult({data:null,error:r}):n?(await Y(this.fetch,`DELETE`,`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:n.access_token,query:{client_id:e.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new V})})}catch(e){if(R(e))return this._returnResult({data:null,error:e});throw e}}async fetchJwk(e,t={keys:[]}){let n=t.keys.find(t=>t.kid===e);if(n)return n;let r=Date.now();if(n=this.jwks.keys.find(t=>t.kid===e),n&&this.jwks_cached_at+6e5>r)return n;let{data:i,error:a}=await Y(this.fetch,`GET`,`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(a)throw a;return!i.keys||i.keys.length===0||(this.jwks=i,this.jwks_cached_at=r,n=i.keys.find(t=>t.kid===e),!n)?null:n}async getClaims(e,t={}){try{let n=e;if(!n){let{data:e,error:t}=await this.getSession();if(t||!e.session)return this._returnResult({data:null,error:t});n=e.session.access_token}let{header:r,payload:i,signature:a,raw:{header:o,payload:s}}=Ti(n);if(!t?.allowExpired)try{Gi(i.exp)}catch(e){throw new ai(e instanceof Error?e.message:`JWT validation failed`)}let c=!r.alg||r.alg.startsWith(`HS`)||!r.kid||!(`crypto`in globalThis&&`subtle`in globalThis.crypto)?null:await this.fetchJwk(r.kid,t?.keys?{keys:t.keys}:t?.jwks);if(!c){let{error:e}=await this.getUser(n);if(e)throw e;return{data:{claims:i,header:r,signature:a},error:null}}let l=Ki(r.alg),u=await crypto.subtle.importKey(`jwk`,c,l,!0,[`verify`]);if(!await crypto.subtle.verify(l,u,a,gi(`${o}.${s}`)))throw new ai(`Invalid JWT signature`);return{data:{claims:i,header:r,signature:a},error:null}}catch(e){if(R(e))return this._returnResult({data:null,error:e});throw e}}async signInWithPasskey(e){try{if(!Ea())return this._returnResult({data:null,error:new z(`Browser does not support WebAuthn`,null)});let{data:t,error:n}=await this._startPasskeyAuthentication({options:{captchaToken:e?.options?.captchaToken}});if(n||!t)return this._returnResult({data:null,error:n});let{data:r,error:i}=await Oa({publicKey:Sa(t.options),signal:e?.options?.signal??ba.createNewAbortSignal(),mediation:e?.options?.mediation});if(i||!r)return this._returnResult({data:null,error:i??new z(`WebAuthn ceremony failed`,null)});let a=wa(r);return this._verifyPasskeyAuthentication({challengeId:t.challenge_id,credential:a})}catch(e){if(R(e))return this._returnResult({data:null,error:e});throw e}}async registerPasskey(e){try{if(!Ea())return this._returnResult({data:null,error:new z(`Browser does not support WebAuthn`,null)});let{data:t,error:n}=await this._startPasskeyRegistration();if(n||!t)return this._returnResult({data:null,error:n});let{data:r,error:i}=await Da({publicKey:xa(t.options),signal:e?.options?.signal??ba.createNewAbortSignal()});if(i||!r)return this._returnResult({data:null,error:i??new z(`WebAuthn ceremony failed`,null)});let a=Ca(r);return this._verifyPasskeyRegistration({challengeId:t.challenge_id,credential:a})}catch(e){if(R(e))return this._returnResult({data:null,error:e});throw e}}async _startPasskeyRegistration(){try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;if(n)return this._returnResult({data:null,error:n});if(!t)return this._returnResult({data:null,error:new V});let{data:r,error:i}=await Y(this.fetch,`POST`,`${this.url}/passkeys/registration/options`,{headers:this.headers,jwt:t.access_token,body:{}});return i?this._returnResult({data:null,error:i}):this._returnResult({data:r,error:null})})}catch(e){if(R(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyRegistration(e){try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!n)return this._returnResult({data:null,error:new V});let{data:i,error:a}=await Y(this.fetch,`POST`,`${this.url}/passkeys/registration/verify`,{headers:this.headers,jwt:n.access_token,body:{challenge_id:e.challengeId,credential:e.credential}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:i,error:null})})}catch(e){if(R(e))return this._returnResult({data:null,error:e});throw e}}async _startPasskeyAuthentication(e){try{let{data:t,error:n}=await Y(this.fetch,`POST`,`${this.url}/passkeys/authentication/options`,{headers:this.headers,body:{gotrue_meta_security:{captcha_token:e?.options?.captchaToken}}});return n?this._returnResult({data:null,error:n}):this._returnResult({data:t,error:null})}catch(e){if(R(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyAuthentication(e){try{let{data:t,error:n}=await Y(this.fetch,`POST`,`${this.url}/passkeys/authentication/verify`,{headers:this.headers,body:{challenge_id:e.challengeId,credential:e.credential},xform:X});return n?this._returnResult({data:null,error:n}):(t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers(`SIGNED_IN`,t.session)),this._returnResult({data:t,error:null}))}catch(e){if(R(e))return this._returnResult({data:null,error:e});throw e}}async _listPasskeys(){try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;if(n)return this._returnResult({data:null,error:n});if(!t)return this._returnResult({data:null,error:new V});let{data:r,error:i}=await Y(this.fetch,`GET`,`${this.url}/passkeys`,{headers:this.headers,jwt:t.access_token,xform:e=>({data:e,error:null})});return i?this._returnResult({data:null,error:i}):this._returnResult({data:r,error:null})})}catch(e){if(R(e))return this._returnResult({data:null,error:e});throw e}}async _updatePasskey(e){try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!n)return this._returnResult({data:null,error:new V});let{data:i,error:a}=await Y(this.fetch,`PATCH`,`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:n.access_token,body:{friendly_name:e.friendlyName}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:i,error:null})})}catch(e){if(R(e))return this._returnResult({data:null,error:e});throw e}}async _deletePasskey(e){try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!n)return this._returnResult({data:null,error:new V});let{error:i}=await Y(this.fetch,`DELETE`,`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:n.access_token,noResolveJson:!0});return i?this._returnResult({data:null,error:i}):this._returnResult({data:null,error:null})})}catch(e){if(R(e))return this._returnResult({data:null,error:e});throw e}}};Ra.nextInstanceID={};var za=Ra,Ba=`2.118.0`,Va=``,Ha;if(typeof Deno<`u`)Va=`deno`,Ha=Deno.version?.deno;else if(typeof document<`u`)Va=`web`;else if(typeof navigator<`u`&&navigator.product===`ReactNative`)Va=`react-native`;else{var Ua;Va=`node`;let e=globalThis.process;Ha=e==null||(Ua=e.version)==null?void 0:Ua.replace(/^v/,``)}var Wa=[`runtime=${Va}`];Ha&&Wa.push(`runtime-version=${Ha}`);var Ga={headers:{"X-Client-Info":`supabase-js/${Ba}; ${Wa.join(`; `)}`}},Ka={schema:`public`},qa={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:`implicit`},Ja={},Ya={enabled:!1,respectSamplingDecision:!0};function Xa(e){if(!e||typeof e!=`string`)return null;let t=e.split(`-`);if(t.length!==4)return null;let[n,r,i,a]=t;if(n.length!==2||r.length!==32||i.length!==16||a.length!==2)return null;let o=/^[0-9a-f]+$/i;return!o.test(n)||!o.test(r)||!o.test(i)||!o.test(a)||r===`00000000000000000000000000000000`||i===`0000000000000000`?null:{version:n,traceId:r,parentId:i,traceFlags:a,isSampled:(parseInt(a,16)&1)==1}}function Za(e,t){if(!e||!t||t.length===0)return!1;let n;if(e instanceof URL)n=e;else try{n=new URL(e)}catch{return!1}for(let e of t)try{if(typeof e==`string`){if(Qa(n.hostname,e))return!0}else if(e instanceof RegExp){if(e.test(n.hostname))return!0}else if(typeof e==`function`&&e(n))return!0}catch{continue}return!1}function Qa(e,t){if(t===e)return!0;if(t.startsWith(`*.`)){let n=t.slice(2);if(e.endsWith(n)&&(e===n||e.endsWith(`.`+n)))return!0}return!1}function $a(e){let t=[];try{let n=new URL(e);t.push(n.hostname)}catch{}return t.push(`*.supabase.co`,`*.supabase.in`),t.push(`localhost`,`127.0.0.1`,`[::1]`),t}function eo(e){"@babel/helpers - typeof";return eo=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},eo(e)}function to(e,t){if(eo(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(eo(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function no(e){var t=to(e,`string`);return eo(t)==`symbol`?t:t+``}function ro(e,t,n){return(t=no(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function io(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?io(Object(n),!0).forEach(function(t){ro(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):io(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var ao=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),oo=()=>Headers,so=e=>e.startsWith(`sb_publishable_`)||e.startsWith(`sb_secret_`),co=`sb_temp_`,lo=new Set,uo=e=>{if(!e.startsWith(`sb_`)||so(e)||e.startsWith(co))return;let t=e.match(/^sb_[a-zA-Z0-9]+_/)?.[0]??`unknown`;lo.has(t)||(lo.add(t),console.warn(`@supabase/supabase-js: Unrecognized Supabase API key format. The client will proceed and send this key as-is; if you see authentication errors you may need to upgrade @supabase/supabase-js to a version that recognizes this key type.`))},fo=(e,t,n,r,i,a)=>{let o=ao(r),s=oo(),c=i?.enabled===!0,l=i?.respectSamplingDecision!==!1,u=c?$a(t):null,d=!(a?.omitApiKeyAsBearer&&so(e));return async(t,r)=>{let i=await n(),a=new s(r?.headers);if(a.has(`apikey`)||a.set(`apikey`,e),!a.has(`Authorization`)){let t=i??(d?e:null);t&&a.set(`Authorization`,`Bearer ${t}`)}if(u){let e=ho(t,u,l);e&&(e.traceparent&&!a.has(`traceparent`)&&a.set(`traceparent`,e.traceparent),e.tracestate&&!a.has(`tracestate`)&&a.set(`tracestate`,e.tracestate),e.baggage&&!a.has(`baggage`)&&a.set(`baggage`,e.baggage))}return o(t,$($({},r),{},{headers:a}))}},po=!1,mo=!1;function ho(e,t,n){let r=He();if(!r)return po||(po=!0,console.warn("@supabase/supabase-js: tracePropagation is enabled but the tracing runtime is not loaded, so trace headers will not be attached. Add `import '@supabase/supabase-js/tracing'` at your application entry point (requires the OpenTelemetry API package to be installed). The CDN/UMD build does not support trace propagation.")),null;if(!Za(typeof e==`string`||e instanceof URL?e:e.url,t))return null;let i=r();if(!i||!i.traceparent){var a;if(i!=null&&(a=i.carrierKeys)!=null&&a.length&&!mo){mo=!0;let e=i.carrierKeys.includes(`sentry-trace`)?" Sentry detected: set `propagateTraceparent: true` in Sentry.init() to emit it.":` Configure your tracing SDK to emit W3C trace context on outgoing requests.`;console.warn(`@supabase/supabase-js: tracePropagation is enabled and a tracing SDK is active, but its propagator wrote [${i.carrierKeys.join(`, `)}] and no W3C traceparent header, so trace headers will not be attached.`+e)}return null}if(n){let e=Xa(i.traceparent);if(e&&!e.isSampled)return{traceparent:i.traceparent}}return i}function go(e){return typeof e==`boolean`?{enabled:e}:e}function _o(e){return e.endsWith(`/`)?e:e+`/`}var vo=!1;function yo(e){vo||typeof e==`object`&&e&&`schema`in e&&e.schema!==void 0&&(vo=!0,console.warn(`@supabase/supabase-js: The "schema" option must be nested under "db", e.g. createClient(url, key, { db: { schema: 'myschema' } }). A top-level "schema" is ignored and queries go to the default schema.`))}function bo(e,t){let{db:n,auth:r,realtime:i,global:a}=e,{db:o,auth:s,realtime:c,global:l}=t,u=go(e.tracePropagation),d=go(t.tracePropagation),f={db:$($({},o),n),auth:$($({},s),r),realtime:$($({},c),i),storage:{},global:$($($({},l),a),{},{headers:$($({},l?.headers??{}),a?.headers??{})}),tracePropagation:{enabled:u?.enabled??d?.enabled??!1,respectSamplingDecision:u?.respectSamplingDecision??d?.respectSamplingDecision??!0},accessToken:async()=>``};return e.accessToken?f.accessToken=e.accessToken:delete f.accessToken,f}function xo(e){let t=e?.trim();if(!t)throw Error(`supabaseUrl is required.`);if(!t.match(/^https?:\/\//i))throw Error(`Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.`);try{return new URL(_o(t))}catch{throw Error(`Invalid supabaseUrl: Provided URL is malformed.`)}}var So=class extends za{constructor(e){super(e)}},Co=class{constructor(e,t,n){this.supabaseUrl=e,this.supabaseKey=t;let r=xo(e);if(!t)throw Error(`supabaseKey is required.`);uo(t),yo(n),this.realtimeUrl=new URL(`realtime/v1`,r),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace(`http`,`ws`),this.authUrl=new URL(`auth/v1`,r),this.storageUrl=new URL(`storage/v1`,r),this.functionsUrl=new URL(`functions/v1`,r);let i=`sb-${r.hostname.split(`.`)[0]}-auth-token`,a={db:Ka,realtime:Ja,auth:$($({},qa),{},{storageKey:i}),global:Ga,tracePropagation:Ya},o=bo(n??{},a);this.settings=o,this.storageKey=o.auth.storageKey??``,this.headers=o.global.headers??{},o.accessToken?(this.accessToken=o.accessToken,this.auth=new Proxy({},{get:(e,t)=>{throw Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(t)} is not possible`)}})):this.auth=this._initSupabaseAuthClient(o.auth??{},this.headers,o.global.fetch),this.fetch=fo(t,e,this._getSessionToken.bind(this),o.global.fetch,o.tracePropagation),this.functionsFetch=fo(t,e,this._getSessionToken.bind(this),o.global.fetch,o.tracePropagation,{omitApiKeyAsBearer:!0}),this.realtime=this._initRealtimeClient($({headers:this.headers,accessToken:this._getAccessToken.bind(this),fetch:this.fetch},o.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(e=>this.realtime.setAuth(e)).catch(e=>console.warn(`Failed to set initial Realtime auth token:`,e)),this.rest=new yt(new URL(`rest/v1`,r).href,{headers:this.headers,schema:o.db.schema,fetch:this.fetch,timeout:o.db.timeout,urlLengthLimit:o.db.urlLengthLimit,retry:o.db.retry}),this.storage=new Mr(this.storageUrl.href,this.headers,this.fetch,n?.storage),o.accessToken||this._listenForAuthEvents()}get functions(){return new Ze(this.functionsUrl.href,{headers:this.headers,customFetch:this.functionsFetch})}from(e){return this.rest.from(e)}schema(e){return this.rest.schema(e)}getOpenApiSpec(){return this.rest.getOpenApiSpec()}rpc(e,t={},n={head:!1,get:!1,count:void 0}){return this.rest.rpc(e,t,n)}channel(e,t={config:{}}){return this.realtime.channel(e,t)}getChannels(){return this.realtime.getChannels()}removeChannel(e){return this.realtime.removeChannel(e)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getSessionToken(){var e=this;if(e.accessToken)return await e.accessToken();let{data:t}=await e.auth.getSession();return t.session?.access_token??null}async _getAccessToken(){var e=this;return await e._getSessionToken()??e.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:e,persistSession:t,detectSessionInUrl:n,storage:r,userStorage:i,storageKey:a,flowType:o,lock:s,debug:c,throwOnError:l,experimental:u,lockAcquireTimeout:d,skipAutoInitialize:f},p,m){let h={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new So({url:this.authUrl.href,headers:$($({},h),p),storageKey:a,autoRefreshToken:e,persistSession:t,detectSessionInUrl:n,storage:r,userStorage:i,flowType:o,lock:s,debug:c,throwOnError:l,experimental:u,fetch:m,lockAcquireTimeout:d,skipAutoInitialize:f,hasCustomAuthorizationHeader:Object.keys(this.headers).some(e=>e.toLowerCase()===`authorization`)})}_initRealtimeClient(e){return new Pn(this.realtimeUrl.href,$($({},e),{},{params:$($({},{apikey:this.supabaseKey}),e?.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((e,t)=>{this._handleTokenChanged(e,`CLIENT`,t?.access_token)})}_handleTokenChanged(e,t,n){(e===`TOKEN_REFRESHED`||e===`SIGNED_IN`||e===`INITIAL_SESSION`)&&this.changedAccessToken!==n?(this.changedAccessToken=n,this.realtime.setAuth(n)):e===`SIGNED_OUT`&&(this.realtime.setAuth(),t==`STORAGE`&&this.auth.signOut(),this.changedAccessToken=void 0)}},wo=(e,t,n)=>new Co(e,t,n);function To(){if(typeof window<`u`||globalThis.Deno!==void 0)return!1;let e=globalThis.process;if(!e)return!1;let t=e.version;if(t==null)return!1;let n=t.match(/^v(\d+)\./);return n?parseInt(n[1],10)<=20:!1}To()&&console.warn(`⚠️  Node.js 20 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 22 or later. For more information, visit: https://github.com/orgs/supabase/discussions/45715`);var Eo=null;function Do(){let e=Oe();return!e.url||!e.anonKey?null:(Eo||=wo(e.url,e.anonKey,{auth:{persistSession:!1,autoRefreshToken:!1}}),Eo)}async function Oo(e,t){try{let n=wo(e,t,{auth:{persistSession:!1}}),r=performance.now(),{data:i,error:a}=await n.from(`questions`).select(`id`).limit(1),o=Math.round(performance.now()-r);return a&&a.code!==`PGRST116`&&!a.message.includes(`relation`)?a.message.includes(`does not exist`)||a.code===`42P01`?{success:!0,latency:o,needsSchema:!0,message:`Conectado ao Supabase! As tabelas ainda não foram criadas. Execute o script supabase_schema.sql no SQL Editor do Supabase.`}:{success:!1,error:a.message}:{success:!0,latency:o,needsSchema:!1,message:`Conexão estabelecida com sucesso (${o}ms)!`}}catch(e){return{success:!1,error:e.message||`Não foi possível conectar ao Supabase.`}}}async function ko(e,t){let n=Do();if(!n)return{success:!1,localOnly:!0,message:`Supabase não configurado. Perfil salvo localmente.`};try{let{data:r,error:i}=await n.rpc(`rpc_create_profile`,{p_name:e.name,p_access_code_hash:t,p_daily_goal_minutes:e.dailyGoalMinutes||120,p_daily_available_hours:e.dailyAvailableHours||2,p_available_days:e.availableDays||[`seg`,`ter`,`qua`,`qui`,`sex`],p_preferred_roles:e.preferredRoles||[]});return i?i.message.includes(`rpc_create_profile`)||i.code===`42883`?{success:!1,needsSchema:!0,error:`A função rpc_create_profile não existe no Supabase. Execute o arquivo supabase_schema.sql no SQL Editor do projeto.`}:{success:!1,error:i.message}:r}catch(e){return{success:!1,error:e.message}}}async function Ao(e){let t=Do();if(!t)return{success:!1,localOnly:!0,error:`Configure a URL e a Chave Anon do Supabase para acessar perfis sincronizados.`};try{let n=c(),{data:r,error:i}=await t.rpc(`rpc_authenticate_profile`,{p_access_code_hash:e,p_client_id:n});return i?i.message.includes(`rpc_authenticate_profile`)||i.code===`42883`?{success:!1,needsSchema:!0,error:`Função de autenticação não encontrada no banco. Execute o arquivo supabase_schema.sql no Supabase.`}:{success:!1,error:i.message}:r}catch(e){return{success:!1,error:e.message}}}async function jo(e,t,n){let r=Do();if(!r||!e||!t)return{success:!1,skipped:!0};try{let{data:i,error:a}=await r.rpc(`rpc_sync_push`,{p_profile_id:e,p_session_token:t,p_payload:n});if(a)throw a;g();let o=Oe();return o.lastSyncTime=new Date().toISOString(),ke(o),{success:!0,syncedAt:o.lastSyncTime}}catch(e){return console.warn(`Falha no push sync com Supabase:`,e.message),{success:!1,error:e.message}}}function Mo(e){let t=document.getElementById(`auth-modal-root`);t&&t.remove();let c=document.createElement(`div`);c.id=`auth-modal-root`,c.className=`modal-backdrop`;let l=`create`;function u(){c.innerHTML=`
      <div class="modal-container" style="max-width: 540px;">
        <div class="modal-header" style="background: linear-gradient(135deg, #0F172A, #1E293B); color: white; border-bottom: none;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 38px; height: 38px; border-radius: 8px; background: #0284C7; display: flex; align-items: center; justify-content: center; font-size: 20px;">💧</div>
            <div>
              <h3 style="color: white; font-size: 19px; font-weight: 700;">Saneago Study</h3>
              <p style="color: #94A3B8; font-size: 12px;">Plataforma Pessoal de Preparação para Concursos</p>
            </div>
          </div>
        </div>

        <div style="display: flex; border-bottom: 1px solid var(--border); background: var(--bg-surface);">
          <button id="tab-btn-create" class="btn" style="flex: 1; border-radius: 0; padding: 14px; font-weight: 600; border-bottom: 2px solid ${l===`create`?`var(--primary)`:`transparent`}; color: ${l===`create`?`var(--primary)`:`var(--text-muted)`};">
            Criar meu perfil
          </button>
          <button id="tab-btn-login" class="btn" style="flex: 1; border-radius: 0; padding: 14px; font-weight: 600; border-bottom: 2px solid ${l===`login`?`var(--primary)`:`transparent`}; color: ${l===`login`?`var(--primary)`:`var(--text-muted)`};">
            Acessar com meu código
          </button>
        </div>

        <div class="modal-body" style="padding: 24px;">
          ${l===`create`?d():f()}
        </div>
      </div>
    `,c.querySelector(`#tab-btn-create`)?.addEventListener(`click`,()=>{l=`create`,u()}),c.querySelector(`#tab-btn-login`)?.addEventListener(`click`,()=>{l=`login`,u()}),p()}function d(){return`
      <form id="create-profile-form">
        <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 18px;">
          Sem e-mail e sem senha tradicional. Você receberá um <strong>Código Pessoal Seguro</strong> para acessar seus dados em qualquer dispositivo.
        </p>

        <div class="form-group">
          <label class="form-label" for="user-name">Nome ou apelido *</label>
          <input type="text" id="user-name" class="form-control" placeholder="Ex: Roberto Lima" required minlength="2" autofocus>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div class="form-group">
            <label class="form-label" for="daily-goal">Meta diária (minutos)</label>
            <input type="number" id="daily-goal" class="form-control" value="120" min="15" max="720" step="15">
            <span class="form-hint">Ex: 120 min = 2 horas</span>
          </div>

          <div class="form-group">
            <label class="form-label" for="daily-hours">Tempo disponível (h/dia)</label>
            <input type="number" id="daily-hours" class="form-control" value="2" min="0.5" max="14" step="0.5">
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Dias disponíveis para estudar</label>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            ${[`seg`,`ter`,`qua`,`qui`,`sex`,`sab`,`dom`].map(e=>`
              <label style="display: flex; align-items: center; gap: 4px; font-size: 12.5px; background: var(--bg-page); padding: 5px 10px; border-radius: var(--radius-sm); border: 1px solid var(--border); cursor: pointer;">
                <input type="checkbox" name="avail-day" value="${e}" ${e===`dom`?``:`checked`}>
                ${e.toUpperCase()}
              </label>
            `).join(``)}
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="initial-role">Cargo de interesse principal</label>
          <select id="initial-role" class="form-select">
            ${n.map(e=>`
              <option value="${e.id}">${e.name} (${e.educationLevel})</option>
            `).join(``)}
          </select>
        </div>

        <div id="create-error" style="display: none; color: var(--danger); font-size: 13px; margin-bottom: 14px;"></div>

        <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">
          Gerar meu código e começar
        </button>
      </form>
    `}function f(){return`
      <form id="login-profile-form">
        <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 18px;">
          Informe o seu <strong>Código Pessoal</strong> gerado anteriormente para carregar seus estudos neste navegador.
        </p>

        <div class="form-group">
          <label class="form-label" for="access-code-input">Código de acesso pessoal</label>
          <input type="text" id="access-code-input" class="form-control" placeholder="SANE-XXXX-XXXX-XXXX" style="font-family: monospace; font-size: 16px; letter-spacing: 1.5px; text-transform: uppercase;" required autofocus>
          <span class="form-hint">Formato de 16 caracteres: SANE-XXXX-XXXX-XXXX</span>
        </div>

        <div id="login-error" style="display: none; color: var(--danger); font-size: 13px; margin-bottom: 14px;"></div>

        <button type="submit" id="btn-login-submit" class="btn btn-primary btn-lg" style="width: 100%;">
          Entrar e recuperar meus dados
        </button>
      </form>
    `}function p(){let t=c.querySelector(`#create-profile-form`);t&&t.addEventListener(`submit`,async e=>{e.preventDefault();let t=c.querySelector(`#user-name`).value.trim(),n=parseInt(c.querySelector(`#daily-goal`).value,10)||120,i=parseFloat(c.querySelector(`#daily-hours`).value)||2,a=c.querySelector(`#initial-role`).value,l=c.querySelectorAll(`input[name='avail-day']:checked`),u=Array.from(l).map(e=>e.value);if(!t)return;let d=r(),f=await o(d),p={id:s(),name:t,accessCode:d,accessCodeHash:f,dailyGoalMinutes:n,dailyAvailableHours:i,availableDays:u,preferredRoles:[a],createdAt:new Date().toISOString()};v(p),oe([a]),De({dailyStudyMinutes:n,weeklyStudyMinutes:n*u.length,dailyQuestionsCount:20,weeklyReviewsCount:5,restDays:[`dom`].filter(e=>!u.includes(e)),targetExamDate:null}),ko(p,f).catch(console.warn),m(d,t)});let n=c.querySelector(`#login-profile-form`);n&&n.addEventListener(`submit`,async t=>{t.preventDefault();let n=c.querySelector(`#access-code-input`),r=c.querySelector(`#login-error`),s=c.querySelector(`#btn-login-submit`),l=n.value,u=i(l);if(!a(u))r.textContent=`Código inválido. Digite no formato correto: SANE-XXXX-XXXX-XXXX.`,r.style.display=`block`;else{s.disabled=!0,s.textContent=`Validando código...`,r.style.display=`none`;try{let t=await o(u),n=_();if(n&&(n.accessCodeHash===t||n.accessCode===u)){c.remove(),e&&e(n);return}let i=await Ao(t);if(i&&i.success&&i.profile){let n={...i.profile,accessCode:u,accessCodeHash:t,sessionToken:i.session_token};v(n),c.remove(),e&&e(n)}else r.textContent=i?.error||`Código de acesso não encontrado. Verifique se o digitou corretamente.`,r.style.display=`block`,s.disabled=!1,s.textContent=`Entrar e recuperar meus dados`}catch(e){r.textContent=e.message||`Erro ao validar código.`,r.style.display=`block`,s.disabled=!1,s.textContent=`Entrar e recuperar meus dados`}}})}function m(t,n){c.innerHTML=`
      <div class="modal-container" style="max-width: 520px; text-align: center;">
        <div class="modal-body" style="padding: 32px 28px;">
          <div style="width: 56px; height: 56px; border-radius: 50%; background: #D1FAE5; color: #10B981; font-size: 28px; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">
            ✓
          </div>
          <h3 style="font-size: 22px; font-weight: 700; margin-bottom: 8px;">Perfil criado com sucesso!</h3>
          <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 24px;">
            Olá, <strong>${n}</strong>! Este é o seu <strong>Código Pessoal de Acesso</strong>. Você precisará dele para acessar seus dados em outros computadores ou celulares.
          </p>

          <div style="background: var(--bg-page); border: 2px dashed var(--accent); border-radius: var(--radius-md); padding: 18px; margin-bottom: 20px;">
            <div id="code-text" style="font-family: monospace; font-size: 22px; font-weight: 700; color: var(--primary); letter-spacing: 2px;">
              ${t}
            </div>
          </div>

          <button id="btn-copy-code" class="btn btn-outline" style="width: 100%; margin-bottom: 14px; gap: 8px;">
            📋 Copiar código de acesso
          </button>

          <div style="background: #FEF3C7; border: 1px solid #FDE68A; border-radius: var(--radius-md); padding: 12px 16px; text-align: left; margin-bottom: 24px; font-size: 12.5px; color: #92400E; display: flex; gap: 10px;">
            <span>⚠️</span>
            <span><strong>Atenção:</strong> Guarde este código em local seguro (bloco de notas, gerenciador de senhas). Sem ele, não será possível recuperar seus dados se trocar de navegador!</span>
          </div>

          <button id="btn-start-dashboard" class="btn btn-primary btn-lg" style="width: 100%;">
            Entrar no Meu Painel de Estudos
          </button>
        </div>
      </div>
    `;let r=c.querySelector(`#btn-copy-code`);r.addEventListener(`click`,()=>{navigator.clipboard.writeText(t).then(()=>{r.textContent=`✓ Código copiado com sucesso!`,r.style.color=`var(--success)`}).catch(()=>{r.textContent=`Selecione e copie o código acima manualmente.`})}),c.querySelector(`#btn-start-dashboard`).addEventListener(`click`,()=>{c.remove(),e&&e(_())})}document.body.appendChild(c),u()}function No(){let e=b(),t=D(),n=S(),r=Ee(),i=y(),a=new Map(i.map(e=>[e.id,e.name])),o=new Date().toISOString().slice(0,10),s=[],c=new Map;t.forEach(e=>{let t=e.topicId;if(!t)return;c.has(t)||c.set(t,{total:0,correct:0});let n=c.get(t);n.total+=1,e.isCorrect&&(n.correct+=1)}),e.forEach(e=>{let t=c.get(e.id);if(t&&t.total>=3){let n=Math.round(t.correct/t.total*100);if(n<60){let r=a.get(e.subjectId)||`Matéria`;s.push({id:`sug_low_acc_${e.id}`,topicId:e.id,type:`low_accuracy`,priority:`alta`,title:`Reforço em ${e.name}`,subjectName:r,reason:`Você resolveu ${t.total} questões sobre este assunto e obteve ${n}% de aproveitamento (abaixo de 60%).`,suggestedAction:`Agendar uma sessão de revisão de 25 minutos e criar uma tarefa focada na resolução comentada de questões.`,actionData:{taskTitle:`Revisão e Questões: ${e.name}`,subjectId:e.subjectId,topicId:e.id,durationMinutes:25,priority:`alta`}})}}}),e.forEach(e=>{let t=c.get(e.id);if(t&&t.total>=3){let n=Math.round(t.correct/t.total*100);e.difficulty===`facil`&&n<=50&&s.push({id:`sug_diff_mismatch_${e.id}`,topicId:e.id,type:`difficulty_mismatch`,priority:`media`,title:`Alerta de Percepção: ${e.name}`,subjectName:a.get(e.subjectId)||`Matéria`,reason:`Você classificou este assunto como "Fácil", mas seu índice de acertos foi de apenas ${n}%. Pode haver pegadinhas ou conceitos despercebidos.`,suggestedAction:`Reclassificar a dificuldade para "Médio" ou "Difícil" para que o cronograma dê a devida prioridade.`,actionData:{topicId:e.id,newDifficulty:`medio`}})}});let l=n.filter(e=>e.scheduledDate<o&&e.status===`pendente`);return l.length>0&&s.push({id:`sug_overdue_redistribute`,type:`missed_tasks`,priority:`alta`,title:`Redistribuição de ${l.length} Tarefas Pendentes`,subjectName:`Planejamento Geral`,reason:`Existem ${l.length} tarefa(s) programada(s) para datas passadas que não foram concluídas. Em vez de acumular tudo hoje, podemos distribuí-las suavemente pelos seus próximos dias de estudo.`,suggestedAction:`Redistribuir automaticamente as tarefas atrasadas entre os dias úteis disponíveis, respeitando sua meta diária de ${r.dailyStudyMinutes} min/dia.`,actionData:{overdueTaskIds:l.map(e=>e.id)}}),e.forEach(e=>{let t=c.get(e.id);if(t&&t.total>=5){let n=Math.round(t.correct/t.total*100);n>=85&&e.status!==`concluido`&&s.push({id:`sug_mastery_${e.id}`,topicId:e.id,type:`mastery_promotion`,priority:`baixa`,title:`Domínio Consolidado: ${e.name}`,subjectName:a.get(e.subjectId)||`Matéria`,reason:`Excelente desempenho! Você acertou ${n}% das ${t.total} questões feitas deste assunto.`,suggestedAction:`Marcar este assunto como Concluído e programar revisões espaçadas a cada 30 dias para manutenção.`,actionData:{topicId:e.id,newStatus:`concluido`,masteryLevel:5}})}}),s}function Po(e){let t=S(),n=Ee(),r=new Set(n.restDays?[`seg`,`ter`,`qua`,`qui`,`sex`,`sab`].filter(e=>!n.restDays.includes(e)):[`seg`,`ter`,`qua`,`qui`,`sex`]),i=[`dom`,`seg`,`ter`,`qua`,`qui`,`sex`,`sab`],a=n.dailyStudyMinutes||120,o=new Map,s=new Date;for(let e=0;e<=14;e++){let n=new Date(s);n.setDate(s.getDate()+e);let a=n.toISOString().slice(0,10),c=i[n.getDay()],l=r.has(c),u=t.filter(e=>e.scheduledDate===a&&e.status!==`nao_realizada`).reduce((e,t)=>e+(t.estimatedMinutes||45),0);o.set(a,{dateStr:a,isAvailable:l,minutesScheduled:u})}let c=t.filter(t=>e.includes(t.id)),l=[];return c.forEach(e=>{let t=e.estimatedMinutes||45,n=null;for(let[e,r]of o.entries())if(r.isAvailable&&r.minutesScheduled+t<=a){n=e,r.minutesScheduled+=t;break}if(!n){let e=1/0;for(let[t,r]of o.entries())r.isAvailable&&r.minutesScheduled<e&&(e=r.minutesScheduled,n=t)}n&&(e.scheduledDate=n,e.notes=(e.notes?e.notes+` | `:``)+`Redistribuído em ${new Date().toLocaleDateString(`pt-BR`)}`,C(e),l.push(e))}),l}function Fo(e,t){let n=new Date().toISOString().slice(0,10),r=S(),i=w(),a=b(),o=y(),s=D(),c=new Map(o.map(e=>[e.id,e])),l=new Map(a.map(e=>[e.id,e])),u=r.filter(e=>e.scheduledDate===n&&e.status!==`nao_realizada`),d=i.filter(e=>e.startedAt&&e.startedAt.startsWith(n)).reduce((e,t)=>e+(t.durationSeconds||0),0),f=Math.round(d/60),p=new Date;p.setDate(p.getDate()-7);let m=(i.filter(e=>new Date(e.startedAt)>=p).reduce((e,t)=>e+(t.durationSeconds||0),0)/3600).toFixed(1);new Set(i.map(e=>e.startedAt?.slice(0,10)).filter(Boolean)).size;let h=a.length,g=a.filter(e=>e.status===`concluido`).length,_=h>0?Math.round(g/h*100):0,v=s.length,ee=s.filter(e=>e.isCorrect).length,te=v>0?Math.round(ee/v*100):null,{dueToday:ne,overdue:re}=Be(),ie=[...re,...ne],x=o.map(e=>{let t=a.filter(t=>t.subjectId===e.id),n=new Set(t.map(e=>e.id)),r=s.filter(e=>n.has(e.topicId));if(r.length===0)return null;let i=r.filter(e=>e.isCorrect).length,o=Math.round(i/r.length*100);return{subject:e,total:r.length,correct:i,rate:o}}).filter(Boolean);x.sort((e,t)=>t.rate-e.rate);let ae=x.length>0?x[0]:null,oe=x.length>1?x[x.length-1]:null,C=new Date;C.setDate(C.getDate()+1),C.toISOString().slice(0,10);let se=r.filter(e=>e.scheduledDate>n&&e.status===`pendente`).sort((e,t)=>e.scheduledDate.localeCompare(t.scheduledDate)).slice(0,4),ce=No();e.innerHTML=`
    <div style="display: flex; flex-direction: column; gap: 24px;">

      <!-- BANNER DE SUGESTÕES ADAPTATIVAS (se houver) -->
      ${ce.length>0?`
        <div class="suggestion-banner">
          <div class="suggestion-icon">💡</div>
          <div class="suggestion-content">
            <div class="suggestion-title">${ce[0].title} (${ce[0].subjectName})</div>
            <div class="suggestion-reason">${ce[0].reason}</div>
            <div style="font-size: 13px; font-weight: 600; color: #0369A1; margin-bottom: 12px;">
              Sugestão: ${ce[0].suggestedAction}
            </div>
            <div class="suggestion-actions">
              <button id="btn-apply-suggestion" class="btn btn-primary btn-sm">
                Aplicar recomendação
              </button>
              <button id="btn-dismiss-suggestion" class="btn btn-outline btn-sm">
                Dispensar por enquanto
              </button>
            </div>
          </div>
        </div>
      `:``}

      <!-- B. RESUMO DO PROGRESSO REAL -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon-wrapper stat-icon-blue">⏱️</div>
          <div class="stat-content">
            <div class="stat-value">${f} min</div>
            <div class="stat-label">Estudado Hoje</div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon-wrapper stat-icon-indigo">📅</div>
          <div class="stat-content">
            <div class="stat-value">${m} h</div>
            <div class="stat-label">Últimos 7 Dias</div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon-wrapper stat-icon-green">🎯</div>
          <div class="stat-content">
            <div class="stat-value">${g} / ${h}</div>
            <div class="stat-label">Assuntos Concluídos (${_}%)</div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon-wrapper stat-icon-amber">📝</div>
          <div class="stat-content">
            <div class="stat-value">${te===null?`—`:`${te}%`}</div>
            <div class="stat-label">${v>0?`${v} questões resolvidas`:`Nenhuma questão resolvida`}</div>
          </div>
        </div>
      </div>

      <!-- GRID PRINCIPAL: TAREFA DO DIA + REVISÕES PENDENTES -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 24px;">

        <!-- A. TAREFA DO DIA -->
        <div class="card">
          <div class="card-header">
            <div class="card-title">📌 Tarefas Programadas para Hoje</div>
            <button id="btn-add-today-task" class="btn btn-outline btn-sm">+ Nova Tarefa</button>
          </div>
          <div class="card-body">
            ${u.length===0?`
              <div class="empty-state" style="padding: 24px 12px;">
                <div class="empty-state-icon">📋</div>
                <div class="empty-state-title">Nenhuma tarefa programada para hoje</div>
                <p class="empty-state-desc">Você ainda não definiu estudos para este dia. Crie uma meta agora ou inicie uma sessão livre.</p>
                <div style="display: flex; gap: 10px; justify-content: center;">
                  <button id="btn-quick-create-task" class="btn btn-primary btn-sm">Criar tarefa para hoje</button>
                  <button id="btn-start-free-timer" class="btn btn-outline btn-sm">Iniciar sessão livre</button>
                </div>
              </div>
            `:`
              <div style="display: flex; flex-direction: column; gap: 14px;">
                ${u.map(e=>{let t=c.get(e.subjectId),n=l.get(e.topicId),r=e.status===`concluida`;return`
                    <div style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px; background: ${r?`var(--border-subtle)`:`var(--bg-surface)`};">
                      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                        <div>
                          <span class="badge ${t?`badge-primary`:`badge-gray`}">${t?.name||`Geral`}</span>
                          ${e.priority===`alta`?`<span class="badge badge-danger">Alta Prioridade</span>`:``}
                          <h4 style="font-size: 15px; margin-top: 6px; ${r?`text-decoration: line-through; color: var(--text-muted);`:``}">${n?.name||e.notes||`Sessão de Estudos`}</h4>
                        </div>
                        <span class="badge ${r?`badge-success`:`badge-warning`}">${r?`Concluída`:`Pendente`}</span>
                      </div>

                      <div style="font-size: 13px; color: var(--text-muted); display: flex; gap: 16px; margin-bottom: 14px;">
                        <span>⏱️ Previsto: ${e.estimatedMinutes} min</span>
                        ${e.scheduledTime?`<span>⏰ Horário: ${e.scheduledTime}</span>`:``}
                        ${e.actualMinutes>0?`<span>✓ Realizado: ${e.actualMinutes} min</span>`:``}
                      </div>

                      ${r?`
                        <span style="font-size: 12px; color: var(--success-text); font-weight: 600;">✓ Tarefa concluída com sucesso!</span>
                      `:`
                        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                          <button class="btn btn-primary btn-sm btn-start-task-timer" data-task-id="${e.id}" data-subject-id="${e.subjectId||``}" data-topic-id="${e.topicId||``}">
                            ▶ Iniciar Sessão
                          </button>
                          <button class="btn btn-success btn-sm btn-complete-task" data-task-id="${e.id}">
                            ✓ Concluir
                          </button>
                          <button class="btn btn-outline btn-sm btn-postpone-task" data-task-id="${e.id}">
                            Adiar para amanhã
                          </button>
                        </div>
                      `}
                    </div>
                  `}).join(``)}
              </div>
            `}
          </div>
        </div>

        <!-- C. REVISÕES PENDENTES -->
        <div class="card">
          <div class="card-header">
            <div class="card-title">🔄 Revisões Pendentes</div>
            <button id="btn-see-all-reviews" class="btn btn-outline btn-sm">Ver todas</button>
          </div>
          <div class="card-body">
            ${ie.length===0?`
              <div class="empty-state" style="padding: 24px 12px;">
                <div class="empty-state-icon">🎉</div>
                <div class="empty-state-title">Nenhuma revisão pendente para hoje!</div>
                <p class="empty-state-desc">Suas revisões programadas estão todas em dia. Ótimo trabalho de retenção de conteúdo!</p>
              </div>
            `:`
              <div style="display: flex; flex-direction: column; gap: 12px;">
                ${ie.slice(0,4).map(e=>{let t=e.dueDate<n,r=l.get(e.topicId),i=c.get(e.subjectId);return`
                    <div style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 14px; display: flex; justify-content: space-between; align-items: center; gap: 12px;">
                      <div>
                        <div style="display: flex; gap: 6px; align-items: center; margin-bottom: 4px;">
                          <span class="badge ${t?`badge-danger`:`badge-warning`}">${t?`Atrasada`:`Para Hoje`}</span>
                          <span class="badge badge-gray">Ciclo D+${e.reviewStage===1?1:e.reviewStage===2?7:30}</span>
                        </div>
                        <div style="font-weight: 600; font-size: 14px;">${r?.name||`Assunto`}</div>
                        <div style="font-size: 12px; color: var(--text-muted);">${i?.name||`Matéria`}</div>
                      </div>

                      <button class="btn btn-outline btn-sm btn-quick-complete-rev" data-review-id="${e.id}">
                        ✓ Feito
                      </button>
                    </div>
                  `}).join(``)}
              </div>
            `}
          </div>
        </div>

      </div>

      <!-- SEGUNDA LINHA: DESEMPENHO POR MATÉRIA + PRÓXIMAS ATIVIDADES -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 24px;">

        <!-- D. DESEMPENHO POR MATÉRIA -->
        <div class="card">
          <div class="card-header">
            <div class="card-title">📊 Desempenho por Matéria</div>
            <button id="btn-see-full-performance" class="btn btn-outline btn-sm">Estatísticas</button>
          </div>
          <div class="card-body">
            ${x.length===0?`
              <div class="empty-state" style="padding: 20px 12px;">
                <p class="empty-state-desc">Resolva questões na aba "Questões e simulados" para visualizar seu aproveitamento real por matéria.</p>
                <button id="btn-go-to-questions" class="btn btn-primary btn-sm">Resolver questões agora</button>
              </div>
            `:`
              <div style="display: flex; flex-direction: column; gap: 14px;">
                ${ae?`
                  <div style="background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: var(--radius-md); padding: 12px 16px;">
                    <div style="font-size: 12px; color: var(--success-text); font-weight: 700;">MAIOR RENDIMENTO</div>
                    <div style="font-size: 15px; font-weight: 700; color: #065F46; margin: 2px 0;">${ae.subject.name}</div>
                    <div style="font-size: 13px; color: #047857;">${ae.rate}% de acertos (${ae.correct} de ${ae.total} questões)</div>
                  </div>
                `:``}

                ${oe?`
                  <div style="background: #FEF2F2; border: 1px solid #FECACA; border-radius: var(--radius-md); padding: 12px 16px;">
                    <div style="font-size: 12px; color: var(--danger-text); font-weight: 700;">PRECISA DE ATENÇÃO</div>
                    <div style="font-size: 15px; font-weight: 700; color: #991B1B; margin: 2px 0;">${oe.subject.name}</div>
                    <div style="font-size: 13px; color: #B91C1C;">${oe.rate}% de acertos (${oe.correct} de ${oe.total} questões)</div>
                  </div>
                `:``}
              </div>
            `}
          </div>
        </div>

        <!-- E. PRÓXIMAS ATIVIDADES -->
        <div class="card">
          <div class="card-header">
            <div class="card-title">🗓️ Próximas Atividades</div>
            <button id="btn-see-full-schedule" class="btn btn-outline btn-sm">Cronograma</button>
          </div>
          <div class="card-body">
            ${se.length===0?`
              <div class="empty-state" style="padding: 20px 12px;">
                <p class="empty-state-desc">Nenhuma tarefa programada para os próximos dias.</p>
                <button id="btn-plan-ahead" class="btn btn-outline btn-sm">Planejar meus próximos dias</button>
              </div>
            `:`
              <div style="display: flex; flex-direction: column; gap: 10px;">
                ${se.map(e=>{let t=new Date(e.scheduledDate+`T00:00:00`).toLocaleDateString(`pt-BR`,{weekday:`short`,day:`2-digit`,month:`short`}),n=l.get(e.topicId),r=c.get(e.subjectId);return`
                    <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; border-bottom: 1px solid var(--border-subtle);">
                      <div>
                        <div style="font-weight: 600; font-size: 13.5px;">${n?.name||e.notes||`Estudo`}</div>
                        <div style="font-size: 12px; color: var(--text-muted);">${r?.name||`Geral`}</div>
                      </div>
                      <span class="badge badge-gray">${t} (${e.estimatedMinutes}m)</span>
                    </div>
                  `}).join(``)}
              </div>
            `}
          </div>
        </div>

      </div>

    </div>
  `,Io(e,t,ce)}function Io(e,t,n){e.querySelectorAll(`.btn-start-task-timer`).forEach(e=>{e.addEventListener(`click`,()=>{t(`timer`,{subjectId:e.getAttribute(`data-subject-id`),topicId:e.getAttribute(`data-topic-id`)})})}),e.querySelectorAll(`.btn-complete-task`).forEach(n=>{n.addEventListener(`click`,()=>{let r=n.getAttribute(`data-task-id`),i=S().find(e=>e.id===r);i&&(i.status=`concluida`,i.actualMinutes=i.actualMinutes||i.estimatedMinutes,C(i),Fo(e,t))})}),e.querySelectorAll(`.btn-postpone-task`).forEach(n=>{n.addEventListener(`click`,()=>{let r=n.getAttribute(`data-task-id`),i=S().find(e=>e.id===r);if(i){let n=new Date;n.setDate(n.getDate()+1),i.scheduledDate=n.toISOString().slice(0,10),i.status=`pendente`,C(i),Fo(e,t)}})}),e.querySelectorAll(`.btn-quick-complete-rev`).forEach(n=>{n.addEventListener(`click`,()=>{ze(n.getAttribute(`data-review-id`),`realizada`),Fo(e,t)})});let r=e.querySelector(`#btn-apply-suggestion`);r&&n.length>0&&r.addEventListener(`click`,()=>{let r=n[0];if(r.type===`missed_tasks`)Po(r.actionData.overdueTaskIds);else if(r.type===`low_accuracy`){let e=new Date;e.setDate(e.getDate()+1),C({subjectId:r.actionData.subjectId,topicId:r.actionData.topicId,scheduledDate:e.toISOString().slice(0,10),estimatedMinutes:r.actionData.durationMinutes,priority:`alta`,status:`pendente`,notes:r.suggestedAction})}Fo(e,t)}),e.querySelector(`#btn-dismiss-suggestion`)?.addEventListener(`click`,e=>{e.target.closest(`.suggestion-banner`)?.remove()}),e.querySelector(`#btn-add-today-task`)?.addEventListener(`click`,()=>t(`schedule`)),e.querySelector(`#btn-quick-create-task`)?.addEventListener(`click`,()=>t(`schedule`)),e.querySelector(`#btn-start-free-timer`)?.addEventListener(`click`,()=>t(`timer`)),e.querySelector(`#btn-see-all-reviews`)?.addEventListener(`click`,()=>t(`reviews`)),e.querySelector(`#btn-see-full-performance`)?.addEventListener(`click`,()=>t(`performance`)),e.querySelector(`#btn-go-to-questions`)?.addEventListener(`click`,()=>t(`questions`)),e.querySelector(`#btn-see-full-schedule`)?.addEventListener(`click`,()=>t(`schedule`)),e.querySelector(`#btn-plan-ahead`)?.addEventListener(`click`,()=>t(`schedule`))}function Lo(e,t){let n=`week`,r=new Date;function i(){let t=S(),i=y(),o=b();Ee();let u=No(),d=new Map(i.map(e=>[e.id,e])),f=new Map(o.map(e=>[e.id,e]));e.innerHTML=`
      <div style="display: flex; flex-direction: column; gap: 20px;">
        
        <!-- CABEÇALHO DO CRONOGRAMA & CONTROLES -->
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 14px;">
          <div>
            <h2 style="font-size: 22px; font-weight: 700;">Meu Cronograma de Estudos</h2>
            <p style="font-size: 13.5px; color: var(--text-muted);">Organize sua rotina, ajuste horários e compare o tempo planejado com o realizado.</p>
          </div>

          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="display: flex; background: var(--bg-surface); border: 1px solid var(--border); border-radius: var(--radius-md); overflow: hidden;">
              <button id="btn-view-week" class="btn btn-sm" style="background: ${n===`week`?`var(--primary)`:`transparent`}; color: ${n===`week`?`white`:`var(--text-secondary)`}; border-radius: 0;">
                Visão Semanal
              </button>
              <button id="btn-view-month" class="btn btn-sm" style="background: ${n===`month`?`var(--primary)`:`transparent`}; color: ${n===`month`?`white`:`var(--text-secondary)`}; border-radius: 0;">
                Visão Mensal
              </button>
            </div>

            <button id="btn-open-new-task-modal" class="btn btn-primary btn-sm">
              + Nova Tarefa
            </button>
          </div>
        </div>

        <!-- SUGESTÕES ADAPTATIVAS DO CRONOGRAMA -->
        ${u.length>0?`
          <div class="suggestion-banner" style="margin-bottom: 0;">
            <div class="suggestion-icon">⚡</div>
            <div class="suggestion-content">
              <div class="suggestion-title">${u[0].title}</div>
              <div class="suggestion-reason">${u[0].reason}</div>
              <div style="display: flex; gap: 8px;">
                <button id="btn-apply-sched-sug" class="btn btn-primary btn-sm">Aplicar ajuste sugerido</button>
                <button id="btn-dismiss-sched-sug" class="btn btn-outline btn-sm">Ignorar</button>
              </div>
            </div>
          </div>
        `:``}

        <!-- NAVEGAÇÃO DE DATAS -->
        <div style="display: flex; justify-content: space-between; align-items: center; background: var(--bg-surface); padding: 12px 20px; border-radius: var(--radius-md); border: 1px solid var(--border);">
          <button id="btn-prev-period" class="btn btn-outline btn-sm">◀ Anterior</button>
          <div id="period-label" style="font-family: var(--font-heading); font-weight: 700; font-size: 16px;">
            ${a(r,n)}
          </div>
          <button id="btn-next-period" class="btn btn-outline btn-sm">Próximo ▶</button>
        </div>

        <!-- CORPO DO CALENDÁRIO -->
        <div id="calendar-container">
          ${n===`week`?s(t,d,f):c(t,d,f)}
        </div>

      </div>

      <!-- MODAL DE CRIAR / EDITAR TAREFA -->
      <div id="task-modal-container"></div>

      <!-- MODAL DE CONFIRMAÇÃO DE EXCLUSÃO -->
      <div id="confirm-modal-container"></div>
    `,l(t,d,f,u)}function a(e,t){if(t===`week`){let t=o(e),n=new Date(t);return n.setDate(n.getDate()+6),`${t.toLocaleDateString(`pt-BR`,{day:`2-digit`,month:`short`})} a ${n.toLocaleDateString(`pt-BR`,{day:`2-digit`,month:`short`,year:`numeric`})}`}return e.toLocaleDateString(`pt-BR`,{month:`long`,year:`numeric`}).toUpperCase()}function o(e){let t=new Date(e),n=t.getDay(),r=t.getDate()-n+(n===0?-6:1);return new Date(t.setDate(r))}function s(e,t,n){let i=o(r),a=[];for(let e=0;e<7;e++){let t=new Date(i);t.setDate(t.getDate()+e),a.push(t)}let s=new Date().toISOString().slice(0,10);return`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 12px;">
        ${a.map(r=>{let i=r.toISOString().slice(0,10),a=i===s,o=e.filter(e=>e.scheduledDate===i),c=o.reduce((e,t)=>e+(t.estimatedMinutes||0),0),l=o.reduce((e,t)=>e+(t.actualMinutes||0),0);return`
            <div style="background: var(--bg-surface); border: ${a?`2px solid var(--accent)`:`1px solid var(--border)`}; border-radius: var(--radius-lg); padding: 14px; min-height: 280px; display: flex; flex-direction: column;">
              <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 6px;">
                <div>
                  <div style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: ${a?`var(--accent)`:`var(--text-muted)`};">
                    ${r.toLocaleDateString(`pt-BR`,{weekday:`short`})}
                  </div>
                  <div style="font-size: 17px; font-weight: 700;">
                    ${r.getDate()}
                  </div>
                </div>

                <div style="text-align: right; font-size: 11px; color: var(--text-muted);">
                  <div>Plan: ${c}m</div>
                  ${l>0?`<div style="color: var(--success-text); font-weight: 700;">Feito: ${l}m</div>`:``}
                </div>
              </div>

              <!-- Lista de tarefas do dia -->
              <div style="flex: 1; display: flex; flex-direction: column; gap: 8px;">
                ${o.map(e=>{let r=t.get(e.subjectId),i=n.get(e.topicId),a=e.status===`concluida`,o=e.status===`nao_realizada`;return`
                    <div style="background: ${a?`#F0FDF4`:o?`#FEF2F2`:`var(--bg-page)`}; border: 1px solid ${a?`#BBF7D0`:o?`#FECACA`:`var(--border)`}; border-radius: var(--radius-sm); padding: 8px; font-size: 12px; cursor: pointer;" class="task-card-item" data-task-id="${e.id}">
                      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                        <span style="font-weight: 700; color: ${r?.color||`var(--primary)`};">${r?.name?.slice(0,14)||`Geral`}...</span>
                        <span style="font-size: 10px; font-weight: 700; color: ${a?`var(--success-text)`:o?`var(--danger-text)`:`var(--text-muted)`};">
                          ${a?`✓ Feito`:o?`✗ Não feito`:`${e.estimatedMinutes}m`}
                        </span>
                      </div>
                      <div style="font-weight: 500; color: var(--text-primary); ${a?`text-decoration: line-through;`:``}">
                        ${i?.name||e.notes||`Estudo programado`}
                      </div>
                    </div>
                  `}).join(``)}

                <button class="btn btn-outline btn-sm btn-add-day-task" data-date="${i}" style="margin-top: auto; width: 100%; border-style: dashed; padding: 4px; font-size: 11px;">
                  + Adicionar
                </button>
              </div>
            </div>
          `}).join(``)}
      </div>
    `}function c(e,t,n){let i=r.getFullYear(),a=r.getMonth(),o=new Date(i,a,1),s=new Date(i,a+1,0),c=[],l=o.getDay(),u=l===0?6:l-1;for(let e=u;e>0;e--){let t=new Date(i,a,1-e);c.push({date:t,isCurrentMonth:!1})}for(let e=1;e<=s.getDate();e++)c.push({date:new Date(i,a,e),isCurrentMonth:!0});let d=new Date().toISOString().slice(0,10);return`
      <div style="background: var(--bg-surface); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden;">
        <div style="display: grid; grid-template-columns: repeat(7, 1fr); background: var(--bg-page); border-bottom: 1px solid var(--border); text-align: center; font-weight: 700; font-size: 12px; padding: 10px 0; color: var(--text-muted);">
          <div>SEG</div><div>TER</div><div>QUA</div><div>QUI</div><div>SEX</div><div>SÁB</div><div>DOM</div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 1px; background: var(--border);">
          ${c.map(({date:n,isCurrentMonth:r})=>{let i=n.toISOString().slice(0,10),a=i===d,o=e.filter(e=>e.scheduledDate===i);return`
              <div style="background: ${r?`var(--bg-surface)`:`var(--bg-page)`}; min-height: 100px; padding: 8px; opacity: ${r?`1`:`0.5`};" class="month-day-cell" data-date="${i}">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                  <span style="font-size: 13px; font-weight: ${a?`700`:`500`}; ${a?`background: var(--accent); color: white; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center;`:``}">
                    ${n.getDate()}
                  </span>
                  ${o.length>0?`<span style="font-size: 10px; font-weight: 700; color: var(--primary);">${o.length} tarefas</span>`:``}
                </div>

                <div style="display: flex; flex-direction: column; gap: 3px;">
                  ${o.slice(0,2).map(e=>{let n=e.status===`concluida`,r=t.get(e.subjectId);return`
                      <div class="task-card-item" data-task-id="${e.id}" style="background: ${n?`#DCFCE7`:`var(--primary-light)`}; font-size: 10.5px; border-radius: 3px; padding: 2px 4px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; cursor: pointer;">
                        ${r?.name||`Estudo`}
                      </div>
                    `}).join(``)}
                  ${o.length>2?`<span style="font-size: 10px; color: var(--text-muted);">+ ${o.length-2} mais...</span>`:``}
                </div>
              </div>
            `}).join(``)}
        </div>
      </div>
    `}function l(t,a,o,s){e.querySelector(`#btn-view-week`)?.addEventListener(`click`,()=>{n=`week`,i()}),e.querySelector(`#btn-view-month`)?.addEventListener(`click`,()=>{n=`month`,i()}),e.querySelector(`#btn-prev-period`)?.addEventListener(`click`,()=>{n===`week`?r.setDate(r.getDate()-7):r.setMonth(r.getMonth()-1),i()}),e.querySelector(`#btn-next-period`)?.addEventListener(`click`,()=>{n===`week`?r.setDate(r.getDate()+7):r.setMonth(r.getMonth()+1),i()}),e.querySelector(`#btn-open-new-task-modal`)?.addEventListener(`click`,()=>{u(null,new Date().toISOString().slice(0,10))}),e.querySelectorAll(`.btn-add-day-task`).forEach(e=>{e.addEventListener(`click`,()=>{u(null,e.getAttribute(`data-date`))})}),e.querySelectorAll(`.task-card-item`).forEach(e=>{e.addEventListener(`click`,n=>{n.stopPropagation();let r=e.getAttribute(`data-task-id`),i=t.find(e=>e.id===r);i&&u(i)})}),e.querySelector(`#btn-apply-sched-sug`)?.addEventListener(`click`,()=>{if(s.length>0){let e=s[0];e.type===`missed_tasks`&&Po(e.actionData.overdueTaskIds),i()}}),e.querySelector(`#btn-dismiss-sched-sug`)?.addEventListener(`click`,e=>{e.target.closest(`.suggestion-banner`)?.remove()})}function u(t=null,n=null){let r=y(),a=b(),o=e.querySelector(`#task-modal-container`),s=!!t,c=t?t.scheduledDate:n||new Date().toISOString().slice(0,10),l=t?t.subjectId:r[0]?.id||``;o.innerHTML=`
      <div class="modal-backdrop">
        <div class="modal-container">
          <div class="modal-header">
            <h3 class="modal-title">${s?`Editar Tarefa de Estudo`:`Criar Nova Tarefa`}</h3>
            <button class="modal-close-btn">&times;</button>
          </div>

          <form id="task-edit-form">
            <div class="modal-body">
              <div class="form-group">
                <label class="form-label" for="task-subject-select">Matéria *</label>
                <select id="task-subject-select" class="form-select" required>
                  ${r.map(e=>`
                    <option value="${e.id}" ${e.id===l?`selected`:``}>${e.name}</option>
                  `).join(``)}
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="task-topic-select">Assunto / Conteúdo</label>
                <select id="task-topic-select" class="form-select">
                  <!-- Carregado dinamicamente -->
                </select>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
                <div class="form-group">
                  <label class="form-label" for="task-date">Data Programada *</label>
                  <input type="date" id="task-date" class="form-control" value="${c}" required>
                </div>

                <div class="form-group">
                  <label class="form-label" for="task-time">Horário (Opcional)</label>
                  <input type="time" id="task-time" class="form-control" value="${t?.scheduledTime||``}">
                </div>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
                <div class="form-group">
                  <label class="form-label" for="task-estimated">Tempo Estimado (min)</label>
                  <input type="number" id="task-estimated" class="form-control" value="${t?.estimatedMinutes||45}" min="10" max="480" step="5">
                </div>

                <div class="form-group">
                  <label class="form-label" for="task-actual">Tempo Realizado (min)</label>
                  <input type="number" id="task-actual" class="form-control" value="${t?.actualMinutes||0}" min="0" max="600" step="5">
                  <span class="form-hint">Diferenciado do planejado</span>
                </div>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
                <div class="form-group">
                  <label class="form-label" for="task-priority">Prioridade</label>
                  <select id="task-priority" class="form-select">
                    <option value="alta" ${t?.priority===`alta`?`selected`:``}>Alta Prioridade</option>
                    <option value="media" ${!t||t?.priority===`media`?`selected`:``}>Média Prioridade</option>
                    <option value="baixa" ${t?.priority===`baixa`?`selected`:``}>Baixa Prioridade</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label" for="task-status">Situação</label>
                  <select id="task-status" class="form-select">
                    <option value="pendente" ${!t||t?.status===`pendente`?`selected`:``}>Pendente</option>
                    <option value="concluida" ${t?.status===`concluida`?`selected`:``}>Concluída</option>
                    <option value="adiada" ${t?.status===`adiada`?`selected`:``}>Adiada</option>
                    <option value="nao_realizada" ${t?.status===`nao_realizada`?`selected`:``}>Não realizada</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="task-notes">Observações ou metas da sessão</label>
                <textarea id="task-notes" class="form-control" rows="2" placeholder="Ex: Resolver 15 questões e ler resumo de concordância">${t?.notes||``}</textarea>
              </div>
            </div>

            <div class="modal-footer" style="display: flex; justify-content: space-between;">
              ${s?`
                <button type="button" id="btn-delete-task" class="btn btn-danger btn-sm">
                  🗑️ Excluir Tarefa
                </button>
              `:`<div></div>`}

              <div style="display: flex; gap: 10px;">
                <button type="button" class="btn btn-secondary modal-close-btn">Cancelar</button>
                <button type="submit" class="btn btn-primary">
                  ${s?`Salvar Alterações`:`Criar Tarefa`}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    `;let u=o.querySelector(`#task-subject-select`),d=o.querySelector(`#task-topic-select`);function f(e){let n=a.filter(t=>t.subjectId===e);d.innerHTML=`
        <option value="">-- Selecione o Assunto ou deixe geral --</option>
        ${n.map(e=>`
          <option value="${e.id}" ${t&&t.topicId===e.id?`selected`:``}>${e.name}</option>
        `).join(``)}
      `}f(u.value),u.addEventListener(`change`,()=>f(u.value)),o.querySelectorAll(`.modal-close-btn`).forEach(e=>{e.addEventListener(`click`,()=>o.innerHTML=``)}),o.querySelector(`#task-edit-form`).addEventListener(`submit`,e=>{e.preventDefault(),C({id:t?t.id:void 0,subjectId:u.value,topicId:d.value||null,scheduledDate:o.querySelector(`#task-date`).value,scheduledTime:o.querySelector(`#task-time`).value||null,estimatedMinutes:parseInt(o.querySelector(`#task-estimated`).value,10)||45,actualMinutes:parseInt(o.querySelector(`#task-actual`).value,10)||0,priority:o.querySelector(`#task-priority`).value,status:o.querySelector(`#task-status`).value,notes:o.querySelector(`#task-notes`).value.trim()}),o.innerHTML=``,i()}),s&&o.querySelector(`#btn-delete-task`).addEventListener(`click`,()=>{confirm(`Deseja realmente excluir esta tarefa do cronograma? Esta operação não pode ser desfeita.`)&&(se(t.id),o.innerHTML=``,i())})}i()}function Ro(e,t){let n=null,r=`all`;function i(){let t=y(),i=b(),s=D(),f=re();!n&&t.length>0&&(n=t[0].id);let p=t.find(e=>e.id===n),m=i.filter(e=>e.subjectId===n);r!==`all`&&(m=m.filter(e=>e.status===r));let h=new Set(i.filter(e=>e.subjectId===n).map(e=>e.id)),g=s.filter(e=>h.has(e.topicId)),_=g.filter(e=>e.isCorrect).length,v=g.length>0?Math.round(_/g.length*100):null,ee=(m.reduce((e,t)=>e+(t.totalStudiedSeconds||0),0)/3600).toFixed(1);e.innerHTML=`
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
          ${t.map(e=>{let t=e.id===n,r=i.filter(t=>t.subjectId===e.id).length;return`
              <button class="btn btn-subject-tab" data-id="${e.id}" style="padding: 10px 16px; border-radius: var(--radius-md) var(--radius-md) 0 0; background: ${t?`var(--bg-surface)`:`transparent`}; color: ${t?`var(--primary)`:`var(--text-secondary)`}; font-weight: ${t?`700`:`500`}; border: 1px solid ${t?`var(--border)`:`transparent`}; border-bottom: ${t?`2px solid var(--primary)`:`none`}; display: flex; align-items: center; gap: 8px;">
                <span style="width: 10px; height: 10px; border-radius: 50%; background: ${e.color||`var(--primary)`};"></span>
                <span>${e.name}</span>
                <span class="badge badge-gray" style="font-size: 11px;">${r}</span>
              </button>
            `}).join(``)}
        </div>

        <!-- DETALHES DA MATÉRIA ATIVA -->
        ${p?`
          <div class="card" style="margin-bottom: 8px;">
            <div class="card-body" style="padding: 18px 24px; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 16px;">
              <div>
                <h3 style="font-size: 18px; font-weight: 700; color: var(--text-primary); margin-bottom: 4px;">${p.name}</h3>
                <p style="font-size: 13.5px; color: var(--text-muted);">${p.description||`Disciplina preparatória para a Saneago.`}</p>
              </div>

              <div style="display: flex; gap: 20px; align-items: center; background: var(--bg-page); padding: 8px 16px; border-radius: var(--radius-md); border: 1px solid var(--border);">
                <div>
                  <div style="font-size: 11px; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Tempo Estudado</div>
                  <div style="font-size: 16px; font-weight: 700; color: var(--primary);">${ee} horas</div>
                </div>
                <div style="width: 1px; height: 28px; background: var(--border);"></div>
                <div>
                  <div style="font-size: 11px; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Aproveitamento Real</div>
                  <div style="font-size: 16px; font-weight: 700; color: ${v!==null&&v>=70?`var(--success-text)`:`var(--text-primary)`};">
                    ${v===null?`Sem questões`:`${v}% (${_}/${g.length})`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        `:``}

        <!-- FILTROS POR STATUS -->
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
          <div style="display: flex; gap: 6px;">
            <button class="btn btn-sm btn-filter-status" data-status="all" style="background: ${r===`all`?`var(--primary)`:`var(--bg-surface)`}; color: ${r===`all`?`white`:`var(--text-secondary)`}; border: 1px solid var(--border);">Todos (${i.filter(e=>e.subjectId===n).length})</button>
            <button class="btn btn-sm btn-filter-status" data-status="nao_iniciado" style="background: ${r===`nao_iniciado`?`var(--primary)`:`var(--bg-surface)`}; color: ${r===`nao_iniciado`?`white`:`var(--text-secondary)`}; border: 1px solid var(--border);">Não iniciado</button>
            <button class="btn btn-sm btn-filter-status" data-status="em_andamento" style="background: ${r===`em_andamento`?`var(--primary)`:`var(--bg-surface)`}; color: ${r===`em_andamento`?`white`:`var(--text-secondary)`}; border: 1px solid var(--border);">Em andamento</button>
            <button class="btn btn-sm btn-filter-status" data-status="precisa_revisar" style="background: ${r===`precisa_revisar`?`var(--primary)`:`var(--bg-surface)`}; color: ${r===`precisa_revisar`?`white`:`var(--text-secondary)`}; border: 1px solid var(--border);">Precisa revisar</button>
            <button class="btn btn-sm btn-filter-status" data-status="concluido" style="background: ${r===`concluido`?`var(--primary)`:`var(--bg-surface)`}; color: ${r===`concluido`?`white`:`var(--text-secondary)`}; border: 1px solid var(--border);">Concluído</button>
          </div>

          <div style="font-size: 13px; color: var(--text-muted);">
            Trilha flexível: você pode estudar fora de ordem ou pular etapas livremente.
          </div>
        </div>

        <!-- LISTA / CARDS DOS ASSUNTOS DA TRILHA -->
        <div style="display: flex; flex-direction: column; gap: 12px;">
          ${m.length===0?`
            <div class="empty-state card" style="padding: 40px;">
              <div class="empty-state-icon">📖</div>
              <div class="empty-state-title">Nenhum assunto encontrado</div>
              <p class="empty-state-desc">Cadastre assuntos para esta matéria ou altere os filtros acima.</p>
              <button id="btn-create-first-topic" class="btn btn-primary btn-sm">+ Cadastrar Assunto</button>
            </div>
          `:m.map(e=>{let t=s.filter(t=>t.topicId===e.id),n=t.filter(e=>e.isCorrect).length,r=t.length>0?Math.round(n/t.length*100):null,i=Math.round((e.totalStudiedSeconds||0)/60);return`
              <div class="card" style="border-left: 4px solid ${a(e.status)};">
                <div class="card-body" style="padding: 18px 22px;">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; margin-bottom: 8px;">
                    <div>
                      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                        <span class="badge badge-info" style="font-size: 11px;">Etapa: ${e.trackStage||`Geral`}</span>
                        <span class="badge ${o(e.status)}">${c(e.status)}</span>
                        <span class="badge ${l(e.difficulty)}">Dificuldade: ${u(e.difficulty)}</span>
                      </div>
                      <h4 style="font-size: 16px; font-weight: 700; color: var(--text-primary);">${e.name}</h4>
                    </div>

                    <div style="display: flex; align-items: center; gap: 8px;">
                      <button class="btn btn-outline btn-sm btn-edit-topic" data-topic-id="${e.id}">✏️ Editar</button>
                      <button class="btn btn-primary btn-sm btn-study-topic" data-topic-id="${e.id}" data-subject-id="${e.subjectId}">▶ Estudar</button>
                    </div>
                  </div>

                  <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 14px; line-height: 1.5;">
                    ${e.description||`Sem descrição cadastrada.`}
                  </p>

                  <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; background: var(--bg-page); padding: 10px 14px; border-radius: var(--radius-md); font-size: 12.5px; color: var(--text-muted); gap: 10px;">
                    <div style="display: flex; gap: 16px;">
                      <span>⏱️ Estudado: <strong>${i} min</strong></span>
                      <span>🎯 Questões: <strong>${r===null?`Nenhuma`:`${r}% (${n}/${t.length})`}</strong></span>
                      ${e.lastStudiedAt?`<span>📅 Último: ${new Date(e.lastStudiedAt).toLocaleDateString(`pt-BR`)}</span>`:``}
                    </div>

                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span>Domínio percebido:</span>
                      <span style="color: #F59E0B; font-size: 15px;">${`★`.repeat(e.masteryLevel||1)}${`☆`.repeat(5-(e.masteryLevel||1))}</span>
                    </div>
                  </div>
                </div>
              </div>
            `}).join(``)}
        </div>

      </div>

      <!-- CONTAINER PARA MODAL DE ASSUNTO / MATÉRIA -->
      <div id="subject-modal-container"></div>
    `,d(t,i,f)}function a(e){return e===`concluido`?`var(--success)`:e===`em_andamento`?`var(--primary)`:e===`precisa_revisar`?`var(--warning)`:`#CBD5E1`}function o(e){return e===`concluido`?`badge-success`:e===`em_andamento`?`badge-primary`:e===`precisa_revisar`?`badge-warning`:`badge-gray`}function c(e){return{nao_iniciado:`Não iniciado`,em_andamento:`Em andamento`,precisa_revisar:`Precisa revisar`,concluido:`Concluído`}[e]||e}function l(e){return e===`facil`?`badge-success`:e===`dificil`?`badge-danger`:`badge-warning`}function u(e){return{facil:`Fácil`,medio:`Médio`,dificil:`Difícil`}[e]||e}function d(a,o,s){e.querySelectorAll(`.btn-subject-tab`).forEach(e=>{e.addEventListener(`click`,()=>{n=e.getAttribute(`data-id`),i()})}),e.querySelectorAll(`.btn-filter-status`).forEach(e=>{e.addEventListener(`click`,()=>{r=e.getAttribute(`data-status`),i()})}),e.querySelectorAll(`.btn-study-topic`).forEach(e=>{e.addEventListener(`click`,()=>{let n=e.getAttribute(`data-topic-id`);t(`timer`,{subjectId:e.getAttribute(`data-subject-id`),topicId:n})})}),e.querySelector(`#btn-new-topic`)?.addEventListener(`click`,()=>f(null,n)),e.querySelector(`#btn-create-first-topic`)?.addEventListener(`click`,()=>f(null,n)),e.querySelectorAll(`.btn-edit-topic`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-topic-id`),n=o.find(e=>e.id===t);n&&f(n,n.subjectId)})}),e.querySelector(`#btn-new-subject`)?.addEventListener(`click`,()=>p())}function f(t=null,n=``){let r=y(),a=re(),o=e.querySelector(`#subject-modal-container`),c=!!t;o.innerHTML=`
      <div class="modal-backdrop">
        <div class="modal-container">
          <div class="modal-header">
            <h3 class="modal-title">${c?`Editar Assunto`:`Cadastrar Novo Assunto`}</h3>
            <button class="modal-close-btn">&times;</button>
          </div>

          <form id="topic-form">
            <div class="modal-body">
              <div class="form-group">
                <label class="form-label" for="topic-subject-id">Matéria *</label>
                <select id="topic-subject-id" class="form-select" required>
                  ${r.map(e=>`
                    <option value="${e.id}" ${e.id===(t?t.subjectId:n)?`selected`:``}>${e.name}</option>
                  `).join(``)}
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="topic-name">Nome do Assunto *</label>
                <input type="text" id="topic-name" class="form-control" value="${t?.name||``}" placeholder="Ex: Concordância Nominal e Verbal" required>
              </div>

              <div class="form-group">
                <label class="form-label" for="topic-desc">Descrição / Subtópicos</label>
                <textarea id="topic-desc" class="form-control" rows="2" placeholder="Ex: Regras especiais de sujeito partitivo, concordância atrativa...">${t?.description||``}</textarea>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
                <div class="form-group">
                  <label class="form-label" for="topic-stage">Etapa da Trilha</label>
                  <select id="topic-stage" class="form-select">
                    <option value="Básico" ${t?.trackStage===`Básico`?`selected`:``}>Básico</option>
                    <option value="Intermediário" ${!t||t?.trackStage===`Intermediário`?`selected`:``}>Intermediário</option>
                    <option value="Avançado" ${t?.trackStage===`Avançado`?`selected`:``}>Avançado</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label" for="topic-status">Situação de Estudo</label>
                  <select id="topic-status" class="form-select">
                    <option value="nao_iniciado" ${!t||t?.status===`nao_iniciado`?`selected`:``}>Não iniciado</option>
                    <option value="em_andamento" ${t?.status===`em_andamento`?`selected`:``}>Em andamento</option>
                    <option value="precisa_revisar" ${t?.status===`precisa_revisar`?`selected`:``}>Precisa revisar</option>
                    <option value="concluido" ${t?.status===`concluido`?`selected`:``}>Concluído</option>
                  </select>
                </div>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
                <div class="form-group">
                  <label class="form-label" for="topic-diff">Nível de Dificuldade</label>
                  <select id="topic-diff" class="form-select">
                    <option value="facil" ${t?.difficulty===`facil`?`selected`:``}>Fácil</option>
                    <option value="medio" ${!t||t?.difficulty===`medio`?`selected`:``}>Médio</option>
                    <option value="dificil" ${t?.difficulty===`dificil`?`selected`:``}>Difícil</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label" for="topic-mastery">Nível de Domínio (1 a 5)</label>
                  <select id="topic-mastery" class="form-select">
                    <option value="1" ${!t||t?.masteryLevel===1?`selected`:``}>★☆☆☆☆ (1 - Inicial)</option>
                    <option value="2" ${t?.masteryLevel===2?`selected`:``}>★★☆☆☆ (2 - Básico)</option>
                    <option value="3" ${t?.masteryLevel===3?`selected`:``}>★★★☆☆ (3 - Intermediário)</option>
                    <option value="4" ${t?.masteryLevel===4?`selected`:``}>★★★★☆ (4 - Bom)</option>
                    <option value="5" ${t?.masteryLevel===5?`selected`:``}>★★★★★ (5 - Consolidado)</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Cargos Relacionados</label>
                <div style="max-height: 120px; overflow-y: auto; border: 1px solid var(--border); padding: 8px; border-radius: var(--radius-md); display: flex; flex-direction: column; gap: 6px;">
                  ${a.map(e=>`
                    <label style="display: flex; align-items: center; gap: 8px; font-size: 13px; cursor: pointer;">
                      <input type="checkbox" name="role-rel" value="${e.id}" ${t&&t.roleIds&&t.roleIds.includes(e.id)?`checked`:``}>
                      <span>${e.name} (${e.educationLevel})</span>
                    </label>
                  `).join(``)}
                </div>
                <span class="form-hint">Permite compartilhar o progresso deste assunto entre múltiplos cargos selecionados.</span>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary modal-close-btn">Cancelar</button>
              <button type="submit" class="btn btn-primary">${c?`Salvar Alterações`:`Cadastrar Assunto`}</button>
            </div>
          </form>
        </div>
      </div>
    `,o.querySelectorAll(`.modal-close-btn`).forEach(e=>e.addEventListener(`click`,()=>o.innerHTML=``)),o.querySelector(`#topic-form`).addEventListener(`submit`,e=>{e.preventDefault();let n=o.querySelectorAll(`input[name='role-rel']:checked`),r=Array.from(n).map(e=>e.value);ne({id:t?t.id:`top_${s().slice(0,8)}`,subjectId:o.querySelector(`#topic-subject-id`).value,name:o.querySelector(`#topic-name`).value.trim(),description:o.querySelector(`#topic-desc`).value.trim(),trackStage:o.querySelector(`#topic-stage`).value,status:o.querySelector(`#topic-status`).value,difficulty:o.querySelector(`#topic-diff`).value,masteryLevel:parseInt(o.querySelector(`#topic-mastery`).value,10)||1,roleIds:r,totalStudiedSeconds:t?t.totalStudiedSeconds:0,lastStudiedAt:t?t.lastStudiedAt:null,nextReviewAt:t?t.nextReviewAt:null}),o.innerHTML=``,i()})}function p(){let t=e.querySelector(`#subject-modal-container`);t.innerHTML=`
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
    `,t.querySelectorAll(`.modal-close-btn`).forEach(e=>e.addEventListener(`click`,()=>t.innerHTML=``)),t.querySelector(`#new-subject-form`).addEventListener(`submit`,e=>{e.preventDefault();let r=t.querySelector(`#new-subj-name`).value.trim(),a=t.querySelector(`#new-subj-color`).value,o=t.querySelector(`#new-subj-desc`).value.trim(),c={id:`subj_${s().slice(0,8)}`,name:r,color:a,description:o,orderIndex:y().length+1};ee(c),n=c.id,t.innerHTML=``,i()})}i()}var zo=null;function Bo(e,t,n={}){let r=y(),i=b(),a=T();!a&&(n.subjectId||n.topicId)&&(a={isPaused:!0,accumulatedMs:0,startedAtTimestamp:null,pausedAtTimestamp:Date.now(),pausesCount:0,subjectId:n.subjectId||r[0]?.id||``,topicId:n.topicId||``,notes:``,sessionStartISO:new Date().toISOString()},E(a));function o(){a=T();let t=w(),n=new Map(r.map(e=>[e.id,e])),o=new Map(i.map(e=>[e.id,e])),l=a&&!a.isPaused,u=a?a.subjectId:r[0]?.id||``,f=i.filter(e=>e.subjectId===u);e.innerHTML=`
      <div style="display: flex; flex-direction: column; gap: 24px;">

        <!-- CRONÔMETRO HERO -->
        <div class="timer-hero">
          <div style="font-size: 13px; text-transform: uppercase; letter-spacing: 1.5px; color: #94A3B8; font-weight: 700;">
            SESSÃO DE ESTUDO EM ANDAMENTO
          </div>

          <div id="clock-display" class="timer-clock">
            ${c(s(a))}
          </div>

          <div id="target-topic-badge" class="timer-target-tag">
            ${a&&a.topicId?o.get(a.topicId)?.name||`Assunto Selecionado`:`Estudo Livre / Não Categorizado`}
          </div>

          <div class="timer-controls-row">
            ${l?`
              <button id="btn-timer-pause" class="btn btn-secondary btn-lg" style="min-width: 150px; font-size: 16px;">
                ⏸ Pausar
              </button>
            `:`
              <button id="btn-timer-start" class="btn btn-primary btn-lg" style="min-width: 150px; background: #0284C7; font-size: 16px;">
                ▶ ${a&&a.accumulatedMs>0?`Retomar`:`Iniciar Sessão`}
              </button>
            `}

            ${a&&(a.accumulatedMs>0||l)?`
              <button id="btn-timer-finish" class="btn btn-success btn-lg" style="min-width: 150px; font-size: 16px;">
                ✓ Concluir Sessão
              </button>

              <button id="btn-timer-discard" class="btn btn-outline btn-lg" style="color: #F8FAFC; border-color: rgba(255,255,255,0.2);">
                Descartar
              </button>
            `:``}
          </div>
        </div>

        <!-- CONFIGURAÇÃO DA SESSÃO ATUAL -->
        <div class="card">
          <div class="card-header">
            <div class="card-title">⚙️ Configurações da Sessão</div>
            ${a?`<span class="badge ${l?`badge-success`:`badge-warning`}">${l?`Cronômetro Ativo`:`Pausado`}</span>`:``}
          </div>
          <div class="card-body">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px;">
              <div class="form-group">
                <label class="form-label" for="timer-subject">Matéria</label>
                <select id="timer-subject" class="form-select" ${l?`disabled`:``}>
                  ${r.map(e=>`
                    <option value="${e.id}" ${e.id===u?`selected`:``}>${e.name}</option>
                  `).join(``)}
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="timer-topic">Assunto</label>
                <select id="timer-topic" class="form-select" ${l?`disabled`:``}>
                  <option value="">-- Selecione o assunto --</option>
                  ${f.map(e=>`
                    <option value="${e.id}" ${a&&a.topicId===e.id?`selected`:``}>${e.name}</option>
                  `).join(``)}
                </select>
              </div>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" for="timer-notes">Anotações da Sessão</label>
              <textarea id="timer-notes" class="form-control" rows="2" placeholder="O que você estudou nesta sessão? (Ex: Leitura dos artigos 1 a 15, resolução de 10 exercícios)">${a?.notes||``}</textarea>
            </div>
          </div>
        </div>

        <!-- HISTÓRICO DE SESSÕES -->
        <div class="card">
          <div class="card-header">
            <div class="card-title">📜 Histórico de Sessões Registradas</div>
            <span class="badge badge-gray">${t.length} sessões</span>
          </div>
          <div class="card-body">
            ${t.length===0?`
              <div class="empty-state">
                <div class="empty-state-icon">⏱️</div>
                <div class="empty-state-title">Nenhuma sessão registrada ainda</div>
                <p class="empty-state-desc">Quando você concluir uma sessão no cronômetro acima, o histórico detalhado aparecerá aqui.</p>
              </div>
            `:`
              <div style="display: flex; flex-direction: column; gap: 10px;">
                ${t.map(e=>{let t=e.startedAt?new Date(e.startedAt).toLocaleDateString(`pt-BR`):`—`,r=e.startedAt?new Date(e.startedAt).toLocaleTimeString(`pt-BR`,{hour:`2-digit`,minute:`2-digit`}):``,i=e.endedAt?new Date(e.endedAt).toLocaleTimeString(`pt-BR`,{hour:`2-digit`,minute:`2-digit`}):``,a=Math.round((e.durationSeconds||0)/60),s=n.get(e.subjectId),c=o.get(e.topicId);return`
                    <div style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 14px 18px; display: flex; justify-content: space-between; align-items: center; gap: 12px; background: var(--bg-surface);">
                      <div>
                        <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 4px;">
                          <span class="badge badge-primary">${s?.name||`Geral`}</span>
                          <span style="font-size: 13px; font-weight: 700; color: var(--text-primary);">${c?.name||`Estudo`}</span>
                        </div>
                        <div style="font-size: 12px; color: var(--text-muted);">
                          📅 ${t} • ⏰ ${r} às ${i} • ⏱️ <strong>${a} minutos líquidos</strong>
                          ${e.pausesCount>0?`• (${e.pausesCount} pausas)`:``}
                        </div>
                        ${e.notes?`<div style="font-size: 12.5px; color: var(--text-secondary); margin-top: 4px; font-style: italic;">"${e.notes}"</div>`:``}
                      </div>

                      <button class="btn btn-outline btn-sm btn-delete-session" data-session-id="${e.id}" style="color: var(--danger-text); border-color: var(--danger-light);">
                        Excluir
                      </button>
                    </div>
                  `}).join(``)}
              </div>
            `}
          </div>
        </div>

      </div>
    `,d()}function s(e){if(!e)return 0;if(e.isPaused)return e.accumulatedMs||0;let t=Date.now()-e.startedAtTimestamp;return(e.accumulatedMs||0)+t}function c(e){let t=Math.floor(e/1e3),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60,a=e=>String(e).padStart(2,`0`);return n>0?`${a(n)}:${a(r)}:${a(i)}`:`${a(r)}:${a(i)}`}function l(){u(),zo=setInterval(()=>{let t=T(),n=e.querySelector(`#clock-display`);n&&t&&!t.isPaused&&(n.textContent=c(s(t)))},1e3)}function u(){zo&&=(clearInterval(zo),null)}function d(){let t=e.querySelector(`#timer-subject`),n=e.querySelector(`#timer-topic`),r=e.querySelector(`#timer-notes`);r?.addEventListener(`input`,()=>{let e=T();e&&(e.notes=r.value,E(e))}),t?.addEventListener(`change`,()=>{let e=t.value,n=T()||{};n.subjectId=e,n.topicId=``,E(n),o()}),n?.addEventListener(`change`,()=>{let e=T()||{};e.topicId=n.value,E(e),o()}),e.querySelector(`#btn-timer-start`)?.addEventListener(`click`,()=>{let e=T(),i=Date.now();e?(e.isPaused=!1,e.startedAtTimestamp=i,e.subjectId=t.value,e.topicId=n.value,e.notes=r.value):e={accumulatedMs:0,startedAtTimestamp:i,isPaused:!1,pausesCount:0,subjectId:t.value,topicId:n.value,notes:r.value,sessionStartISO:new Date(i).toISOString()},E(e),l(),o()}),e.querySelector(`#btn-timer-pause`)?.addEventListener(`click`,()=>{let e=T();if(e&&!e.isPaused){let t=Date.now();e.accumulatedMs=(e.accumulatedMs||0)+(t-e.startedAtTimestamp),e.isPaused=!0,e.pausedAtTimestamp=t,e.pausesCount=(e.pausesCount||0)+1,E(e),u(),o()}}),e.querySelector(`#btn-timer-finish`)?.addEventListener(`click`,()=>{let e=T();if(!e)return;let t=s(e),n=Math.round(t/1e3);if(n<60&&!confirm(`Esta sessão teve menos de 1 minuto. Deseja realmente salvá-la?`))return;let i=new Date().toISOString(),a={subjectId:e.subjectId,topicId:e.topicId||null,startedAt:e.sessionStartISO||new Date(Date.now()-t).toISOString(),endedAt:i,durationSeconds:n,pausesCount:e.pausesCount||0,notes:r.value.trim()};ce(a),E(null),u(),a.topicId&&a.durationSeconds>=600&&Re(a.topicId,a.subjectId,new Date,0),o()}),e.querySelector(`#btn-timer-discard`)?.addEventListener(`click`,()=>{confirm(`Deseja realmente descartar esta sessão sem contabilizar o tempo?`)&&(E(null),u(),o())}),e.querySelectorAll(`.btn-delete-session`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-session-id`);confirm(`Deseja excluir este registro do histórico de estudos?`)&&(le(t),o())})})}o(),a&&!a.isPaused&&l()}var Vo=[{id:`q_csufg_pt_01`,subjectId:`portugues`,topicId:`pt_concordancia_regencia`,statement:`No que concerne às regras de concordância verbal estabelecidas pela norma-padrão da Língua Portuguesa, assinale a alternativa inteiramente correta:`,options:[{letter:`A`,text:`Haviam muitos técnicos inspecionando os reservatórios da estação de tratamento.`},{letter:`B`,text:`Fazia três meses que as obras da adutora municipal haviam sido concluídas.`},{letter:`C`,text:`Tratam-se de reivindicações operacionais urgentes da comunidade de Goiânia.`},{letter:`D`,text:`Mais de um fiscal se cumprimentou cordialmente no pátio da Saneago.`},{letter:`E`,text:`Aluga-se galpões industriais destinados ao armazenamento de bombas hidráulicas.`}],correctLetter:`B`,explanation:`A alternativa B está correta: o verbo 'fazer' indicando tempo decorrido é impessoal, devendo permanecer rigorosamente na 3ª pessoa do singular ('Fazia três meses...'). Nas demais:
- A: 'Haver' no sentido de existir é impessoal; o correto é 'Havia muitos técnicos...'.
- C: Em 'Trata-se de...', o 'se' é índice de indeterminação do sujeito (verbo transitivo indireto), ficando no singular.
- D: 'Mais de um fiscal se cumprimentaram' (reciprocidade exige plural com 'se').
- E: Em 'Alugam-se galpões...', a partícula 'se' é apassivadora ('galpões' é sujeito paciente no plural).`,banca:`CS-UFG (Centro de Seleção UFG)`,sourceInfo:`Concurso SANEAGO - Caderno de Provas Nível Médio/Técnico`,year:2018,isOfficial:!0,roleId:`agente_saneamento`},{id:`q_csufg_pt_02`,subjectId:`portugues`,topicId:`pt_crase_pontuacao`,statement:`Em conformidade com a norma culta quanto ao emprego do acento grave indicativo de crase, assinale a oração redigida de forma adequada:`,options:[{letter:`A`,text:`A equipe de engenharia dirigiu-se à estação de tratamento de água para iniciar os testes.`},{letter:`B`,text:`O operador começou à despejar os coagulantes nos floculadores mecânicos.`},{letter:`C`,text:`Os comunicados da diretoria foram encaminhados à todas as unidades regionais.`},{letter:`D`,text:`O supervisor solicitou que o relatório fosse entregue à prazo de vinte e quatro horas.`},{letter:`E`,text:`A fiscalização compareceu à uma represa de abastecimento secundário.`}],correctLetter:`A`,explanation:`A alternativa A está correta: quem se dirige, dirige-se 'a' (preposição) + 'a' estação (artigo feminino definido singular) = 'à estação'.
- B incorreta: não ocorre crase antes de verbos ('à despejar').
- C incorreta: não ocorre crase antes de pronome indefinido ('todas').
- D incorreta: não ocorre crase antes de palavras masculinas ('à prazo').
- E incorreta: não ocorre crase antes de artigo indefinido ('à uma').`,banca:`CS-UFG (Centro de Seleção UFG)`,sourceInfo:`Concurso SANEAGO - Prova Oficial de Conhecimentos Gerais`,year:2018,isOfficial:!0,roleId:`agente_saneamento`},{id:`q_csufg_rlm_01`,subjectId:`rlm`,topicId:`rlm_equivalencias_negacoes`,statement:`Considere a proposição composta: 'Se a pressão na adutora cair, então os reservatórios da cidade não serão abastecidos'. Assinale a alternativa que apresenta a negação lógica correta dessa sentença:`,options:[{letter:`A`,text:`A pressão na adutora cai e os reservatórios da cidade são abastecidos.`},{letter:`B`,text:`Se a pressão na adutora não cair, então os reservatórios da cidade serão abastecidos.`},{letter:`C`,text:`A pressão na adutora não cai e os reservatórios da cidade não são abastecidos.`},{letter:`D`,text:`Se os reservatórios da cidade forem abastecidos, então a pressão na adutora caiu.`},{letter:`E`,text:`A pressão na adutora cai ou os reservatórios da cidade não serão abastecidos.`}],correctLetter:`A`,explanation:`A negação de uma condicional 'P -> Q' é dada pela regra 'Manter a primeira E negar a segunda' [P ^ ~Q].
- P: 'A pressão na adutora cai'
- Q: 'Os reservatórios não serão abastecidos' -> ~Q: 'Os reservatórios são abastecidos'.
Portanto: 'A pressão na adutora cai E os reservatórios são abastecidos'. Corresponde perfeitamente à alternativa A.`,banca:`CS-UFG (Centro de Seleção UFG)`,sourceInfo:`Concurso SANEAGO - Prova de Raciocínio Lógico-Matemático`,year:2018,isOfficial:!0,roleId:`tecnico_saneamento`},{id:`q_csufg_rlm_02`,subjectId:`rlm`,topicId:`rlm_porcentagem_matematica`,statement:`Uma Estação de Tratamento de Esgoto (ETE) trata 12.000 m³ de efluentes por dia com uma eficiência de remoção de DBO de 75%. Após a modernização de seus reatores anaeróbios, a eficiência de remoção passou a ser de 90%. Sabendo que a carga inicial de DBO afluente é de 400 mg/L, qual a redução na quantidade de DBO remanescente diária descartada no corpo receptor após a modernização?`,options:[{letter:`A`,text:`15% em relação à carga remanescente anterior.`},{letter:`B`,text:`40% em relação à carga remanescente anterior.`},{letter:`C`,text:`60% em relação à carga remanescente anterior.`},{letter:`D`,text:`75% em relação à carga remanescente anterior.`},{letter:`E`,text:`25% em relação à carga remanescente anterior.`}],correctLetter:`C`,explanation:`Antes da modernização: eficiência de 75%, logo remanesciam 100% - 75% = 25% da carga.
Depois da modernização: eficiência de 90%, logo remanescem 100% - 90% = 10% da carga.
A redução do efluente não tratado remanescente é: (25% - 10%) / 25% = 15% / 25% = 0,60, ou seja, 60% de redução na poluição remanescente descartada! Alternativa C.`,banca:`CS-UFG (Centro de Seleção UFG)`,sourceInfo:`Concurso SANEAGO - Conhecimentos Específicos / Raciocínio Aplicado`,year:2018,isOfficial:!0,roleId:`tecnico_saneamento`},{id:`q_san_marco_01`,subjectId:`saneamento_meio_ambiente`,topicId:`san_marco_legal`,statement:`De acordo com o Novo Marco Legal do Saneamento Básico (Lei Federal nº 11.445/2007, alterada pela Lei Federal nº 14.026/2020), as metas de universalização dos serviços de saneamento estabelecidas para até 31 de dezembro de 2033 compreendem:`,options:[{letter:`A`,text:`100% de atendimento com água potável e 80% de coleta e tratamento de esgoto.`},{letter:`B`,text:`99% da população com acesso à água potável e 90% com coleta e tratamento de esgotos.`},{letter:`C`,text:`95% da população com acesso à água potável e 95% com coleta e tratamento de esgotos.`},{letter:`D`,text:`90% da população com água tratada e 85% de erradicação dos lixões a céu aberto.`},{letter:`E`,text:`100% de universalização de todos os quatro eixos do saneamento de forma irrestrita.`}],correctLetter:`B`,explanation:`O art. 11-B da Lei Federal nº 11.445/2007 (incluído pela Lei nº 14.026/2020) determina expressamente a meta de universalização: garantir o atendimento de 99% (noventa e nove por cento) da população com água potável e de 90% (noventa por cento) da população com coleta e tratamento de esgotos até 31 de dezembro de 2033. Alternativa B correta.`,banca:`CS-UFG / Questão Oficial Fundamentada`,sourceInfo:`Lei nº 14.026/2020 - Art. 11-B`,year:2021,isOfficial:!0,roleId:`agente_saneamento`},{id:`q_san_eta_01`,subjectId:`saneamento_meio_ambiente`,topicId:`san_ciclo_agua_tratamento`,statement:`Em uma Estação de Tratamento de Água (ETA) do tipo convencional, a etapa que sucede a coagulação e tem por objetivo promover a aglutinação das partículas coloidais em flocos de maior dimensão e peso por meio de agitação lenta é denominada:`,options:[{letter:`A`,text:`Decantação`},{letter:`B`,text:`Floculação`},{letter:`C`,text:`Filtração rápida`},{letter:`D`,text:`Desinfecção`},{letter:`E`,text:`Fluoretação`}],correctLetter:`B`,explanation:`A Floculação ocorre logo após a coagulação química (mistura rápida). Na floculação, a água passa por agitação mecânica ou hidráulica lenta e controlada para que os microflocos colidam entre si e formem flocos densos e pesados (floculação), que em seguida decantarão no fundo dos tanques de decantação. Alternativa B.`,banca:`CS-UFG (Centro de Seleção UFG)`,sourceInfo:`Concurso SANEAGO - Prova Técnico em Saneamento / Química`,year:2018,isOfficial:!0,roleId:`tecnico_saneamento`},{id:`q_leg_san_01`,subjectId:`legislacao_saneago`,topicId:`leg_criacao_saneago`,statement:`A Saneamento de Goiás S.A. (SANEAGO), constituída com amparo na Lei Estadual de Goiás nº 13.569/1999 e legislações correlatas, possui como natureza jurídica a condição de:`,options:[{letter:`A`,text:`Autarquia de regime especial vinculada à Secretaria de Meio Ambiente.`},{letter:`B`,text:`Fundação pública de direito privado sem fins lucrativos.`},{letter:`C`,text:`Sociedade de economia mista, sob forma de sociedade anônima, com controle acionário do Estado de Goiás.`},{letter:`D`,text:`Empresa pública unicamente estatal de capital 100% integralizado pelo Tesouro Nacional.`},{letter:`E`,text:`Consórcio público interestadual de saneamento básico.`}],correctLetter:`C`,explanation:`A SANEAGO é uma Sociedade de Economia Mista, organizada sob a forma de sociedade anônima (S/A), integrante da administração pública indireta do Estado de Goiás, na qual o Estado detém a maioria das ações com direito a voto (controle acionário). Alternativa C.`,banca:`CS-UFG (Centro de Seleção UFG)`,sourceInfo:`Lei Estadual nº 13.569/1999 e Estatuto Social Saneago`,year:2018,isOfficial:!0,roleId:`agente_saneamento`},{id:`q_dir_adm_01`,subjectId:`direito_adm`,topicId:`dir_principios_adm`,statement:`Determinado gestor público municipal decidiu nomear sua sobrinha para cargo em comissão de assessoria técnica, sem a realização de concurso público ou demonstração de qualificação singular compatível. Essa conduta viola de forma direta e sumular o princípio constitucional da:`,options:[{letter:`A`,text:`Impessoalidade e da Moralidade administrativa (Súmula Vinculante nº 13 do STF).`},{letter:`B`,text:`Continuidade dos serviços públicos.`},{letter:`C`,text:`Especialidade e da Supremacia do Interesse Público.`},{letter:`D`,text:`Publicidade dos atos administrativos.`},{letter:`E`,text:`Autotutela administrativa estrita.`}],correctLetter:`A`,explanation:`A prática do nepotismo viola frontalmente os princípios da impessoalidade, moralidade e isonomia (Art. 37 da Constituição Federal), sendo vedada expressamente pela Súmula Vinculante nº 13 do Supremo Tribunal Federal (STF). Alternativa A.`,banca:`CS-UFG (Centro de Seleção UFG)`,sourceInfo:`Concurso SANEAGO - Conhecimentos de Direito Administrativo`,year:2018,isOfficial:!0,roleId:`analista_gestao_adm`}];function Ho(e,t){let n=`practice`,r=`all`,i=`all`,a=`all`,o=0,c=null;function l(){let e=ge();return[...Vo,...e]}function u(){let t=l(),r=y(),i=b(),a=re(),o=D(),s=ye();e.innerHTML=`
      <div style="display: flex; flex-direction: column; gap: 20px;">

        <!-- CABEÇALHO -->
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 14px;">
          <div>
            <h2 style="font-size: 22px; font-weight: 700;">Questões e Simulados</h2>
            <p style="font-size: 13.5px; color: var(--text-muted);">Treine com questões oficiais e fundamentadas para o concurso da Saneago.</p>
          </div>

          <div style="display: flex; gap: 8px;">
            <button id="tab-practice" class="btn ${n===`practice`?`btn-primary`:`btn-outline`} btn-sm">
              📝 Praticar Questões
            </button>
            <button id="tab-mock" class="btn ${n===`mock`?`btn-primary`:`btn-outline`} btn-sm">
              ⏱️ Gerar Simulado
            </button>
            <button id="tab-new-q" class="btn ${n===`new_question`?`btn-primary`:`btn-outline`} btn-sm">
              + Cadastrar Questão
            </button>
          </div>
        </div>

        <!-- CONTEÚDO DA ABA ATIVA -->
        ${n===`practice`?d(t,r,i,a,o):``}
        ${n===`mock`?m(t,r,i,a,s):``}
        ${n===`new_question`?v(r,i,a):``}

      </div>

      <!-- CONTAINER PARA MODAL DO CADERNO DE ERROS -->
      <div id="error-notebook-modal-container"></div>
    `,te(),n===`practice`&&f(t,r,i,a),n===`mock`&&g(t,r,a),n===`new_question`&&ee(r,i)}function d(e,t,n,s,c){let l=new Map(t.map(e=>[e.id,e])),u=new Map(n.map(e=>[e.id,e])),d=e.filter(e=>!(r!==`all`&&e.subjectId!==r||i!==`all`&&e.roleId!==i||a===`official`&&!e.isOfficial||a===`training`&&e.isOfficial));o>=d.length&&(o=0);let f=d[o],p=c.filter(e=>d.some(t=>t.id===e.questionId)),m=p.filter(e=>e.isCorrect).length;return p.length>0&&Math.round(m/p.length*100),`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        
        <!-- BARRA DE FILTROS -->
        <div class="card" style="padding: 16px;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px;">
            <div>
              <label class="form-label" style="font-size: 11px;">Matéria</label>
              <select id="filter-subject" class="form-select" style="padding: 6px 10px; font-size: 13px;">
                <option value="all">Todas as matérias</option>
                ${t.map(e=>`<option value="${e.id}" ${e.id===r?`selected`:``}>${e.name}</option>`).join(``)}
              </select>
            </div>

            <div>
              <label class="form-label" style="font-size: 11px;">Tipo de Questão</label>
              <select id="filter-type" class="form-select" style="padding: 6px 10px; font-size: 13px;">
                <option value="all" ${a===`all`?`selected`:``}>Oficiais e Treinamento</option>
                <option value="official" ${a===`official`?`selected`:``}>Apenas Oficiais de Concurso</option>
                <option value="training" ${a===`training`?`selected`:``}>Apenas de Treinamento</option>
              </select>
            </div>

            <div>
              <label class="form-label" style="font-size: 11px;">Cargo</label>
              <select id="filter-role" class="form-select" style="padding: 6px 10px; font-size: 13px;">
                <option value="all">Todos os cargos</option>
                ${s.map(e=>`<option value="${e.id}" ${e.id===i?`selected`:``}>${e.name}</option>`).join(``)}
              </select>
            </div>

            <div style="display: flex; align-items: flex-end;">
              <div style="font-size: 13px; color: var(--text-secondary); width: 100%; text-align: right;">
                <strong>${d.length}</strong> questões encontradas
              </div>
            </div>
          </div>
        </div>

        <!-- CARD DA QUESTÃO ATUAL -->
        ${f?`
          <div class="question-card" id="practice-card-${f.id}">
            <!-- Metadados da questão -->
            <div class="question-meta-row">
              <span class="badge badge-primary">${l.get(f.subjectId)?.name||`Matéria`}</span>
              <span class="badge badge-info">${u.get(f.topicId)?.name||`Assunto`}</span>
              <span class="badge ${f.isOfficial?`badge-success`:`badge-gray`}">
                ${f.isOfficial?`Questão Oficial de Concurso Anterior`:`Questão de Treinamento`}
              </span>
              ${f.banca?`<span class="badge badge-gray">Banca: ${f.banca}</span>`:``}
              ${f.year?`<span class="badge badge-gray">Ano: ${f.year}</span>`:``}

              <div style="margin-left: auto; display: flex; gap: 8px;">
                <button id="btn-fav-q" class="btn btn-outline btn-sm" title="Favoritar">⭐</button>
                <button id="btn-review-later-q" class="btn btn-outline btn-sm" title="Revisar mais tarde">📌</button>
              </div>
            </div>

            <!-- Enunciado -->
            <div class="question-statement">${f.statement}</div>

            <!-- Alternativas A, B, C, D, E -->
            <div class="options-list" id="options-container">
              ${f.options.map(e=>`
                <div class="option-item" data-letter="${e.letter}">
                  <div class="option-letter-badge">${e.letter}</div>
                  <div style="flex: 1;">${e.text}</div>
                </div>
              `).join(``)}
            </div>

            <!-- Ações: Responder / Navegar -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 24px; padding-top: 16px; border-top: 1px solid var(--border);">
              <button id="btn-prev-q" class="btn btn-outline btn-sm" ${o===0?`disabled`:``}>
                ◀ Questão Anterior
              </button>

              <div style="font-weight: 600; font-size: 13.5px; color: var(--text-muted);">
                Questão ${o+1} de ${d.length}
              </div>

              <button id="btn-next-q" class="btn btn-outline btn-sm" ${o>=d.length-1?`disabled`:``}>
                Próxima Questão ▶
              </button>
            </div>

            <!-- Área de Explicação e Feedback (exibida após resposta) -->
            <div id="explanation-container" style="display: none;"></div>
          </div>
        `:`
          <div class="card empty-state" style="padding: 40px;">
            <div class="empty-state-icon">🔍</div>
            <div class="empty-state-title">Nenhuma questão encontrada para estes filtros</div>
            <p class="empty-state-desc">Ajuste os filtros de matéria ou tipo para encontrar mais questões.</p>
          </div>
        `}

      </div>
    `}function f(t,n,s,c){let l=e.querySelector(`#filter-subject`),d=e.querySelector(`#filter-type`),f=e.querySelector(`#filter-role`);l?.addEventListener(`change`,()=>{r=l.value,o=0,u()}),d?.addEventListener(`change`,()=>{a=d.value,o=0,u()}),f?.addEventListener(`change`,()=>{i=f.value,o=0,u()}),e.querySelector(`#btn-prev-q`)?.addEventListener(`click`,()=>{o>0&&(--o,u())}),e.querySelector(`#btn-next-q`)?.addEventListener(`click`,()=>{o+=1,u()});let m=!1,h=e.querySelectorAll(`.option-item`),g=e.querySelector(`#explanation-container`),_=t.filter(e=>!(r!==`all`&&e.subjectId!==r||i!==`all`&&e.roleId!==i||a===`official`&&!e.isOfficial||a===`training`&&e.isOfficial))[o];h.forEach(e=>{e.addEventListener(`click`,()=>{if(m||!_)return;m=!0;let t=e.getAttribute(`data-letter`),n=t===_.correctLetter;ve({questionId:_.id,topicId:_.topicId,chosenLetter:t,isCorrect:n}),h.forEach(e=>{let n=e.getAttribute(`data-letter`);n===_.correctLetter?e.classList.add(`correct`):n===t&&e.classList.add(`wrong`)}),g&&(g.style.display=`block`,g.innerHTML=`
            <div class="explanation-card ${n?`correct`:`wrong`}">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <strong style="font-size: 15px; color: ${n?`var(--success-text)`:`var(--danger-text)`};">
                  ${n?`✓ Resposta Correta! Gabarito: `+_.correctLetter:`✗ Resposta Incorreta. Gabarito: `+_.correctLetter}
                </strong>

                ${n?``:`
                  <button id="btn-add-to-error-book" class="btn btn-danger btn-sm" style="font-size: 12px;">
                    📕 Anotar no Caderno de Erros
                  </button>
                `}
              </div>

              <div style="font-size: 13.5px; color: var(--text-primary); line-height: 1.6; white-space: pre-line;">
                ${_.explanation}
              </div>
            </div>
          `,g.querySelector(`#btn-add-to-error-book`)?.addEventListener(`click`,()=>{p(_,t)}))})})}function p(t,n){let r=e.querySelector(`#error-notebook-modal-container`);r.innerHTML=`
      <div class="modal-backdrop">
        <div class="modal-container" style="max-width: 500px;">
          <div class="modal-header">
            <h3 class="modal-title">Caderno de Erros: Identificar Motivo</h3>
            <button class="modal-close-btn">&times;</button>
          </div>

          <form id="error-reason-form">
            <div class="modal-body">
              <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 16px;">
                Identificar com precisão por que você errou ajuda o sistema a sugerir as revisões adequadas.
              </p>

              <div class="form-group">
                <label class="form-label">Qual foi o motivo principal do erro?</label>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                  ${Le.map((e,t)=>`
                    <label style="display: flex; align-items: center; gap: 10px; padding: 10px 14px; border: 1px solid var(--border); border-radius: var(--radius-md); cursor: pointer; background: var(--bg-surface);">
                      <input type="radio" name="error-reason" value="${e.id}" ${t===0?`checked`:``}>
                      <span style="font-size: 14px; font-weight: 500;">${e.label}</span>
                    </label>
                  `).join(``)}
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="error-notes">Anotação pessoal para não errar de novo</label>
                <textarea id="error-notes" class="form-control" rows="2" placeholder="Ex: Lembrar que verbo haver no sentido de existir não vai para o plural!"></textarea>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary modal-close-btn">Cancelar</button>
              <button type="submit" class="btn btn-primary">Salvar no Caderno de Erros</button>
            </div>
          </form>
        </div>
      </div>
    `,r.querySelectorAll(`.modal-close-btn`).forEach(e=>e.addEventListener(`click`,()=>r.innerHTML=``)),r.querySelector(`#error-reason-form`).addEventListener(`submit`,e=>{e.preventDefault();let i=r.querySelector(`input[name='error-reason']:checked`).value,a=r.querySelector(`#error-notes`).value.trim();we({questionId:t.id,subjectId:t.subjectId,topicId:t.topicId,chosenLetter:n,correctLetter:t.correctLetter,explanation:t.explanation,errorReason:i,notes:a}),r.innerHTML=``,alert(`Questão anotada no Caderno de Erros com sucesso!`)})}function m(e,t,n,r,i){return c?h(c):`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 24px;">

        <!-- GERADOR DE SIMULADO -->
        <div class="card">
          <div class="card-header">
            <div class="card-title">⚙️ Configurar Novo Simulado</div>
          </div>
          <div class="card-body">
            <form id="mock-config-form">
              <div class="form-group">
                <label class="form-label" for="mock-title">Título do Simulado</label>
                <input type="text" id="mock-title" class="form-control" value="Simulado Geral Saneago" required>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
                <div class="form-group">
                  <label class="form-label" for="mock-q-count">Qtd. de Questões</label>
                  <select id="mock-q-count" class="form-select">
                    <option value="5">5 questões (Rápido)</option>
                    <option value="10" selected>10 questões</option>
                    <option value="20">20 questões</option>
                    <option value="60">60 questões (Prova Completa)</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label" for="mock-time-limit">Tempo Limite (min)</label>
                  <input type="number" id="mock-time-limit" class="form-control" value="30" min="5" max="300" step="5">
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Matérias Incluídas</label>
                <div style="max-height: 120px; overflow-y: auto; border: 1px solid var(--border); padding: 8px; border-radius: var(--radius-md); display: flex; flex-direction: column; gap: 6px;">
                  ${t.map(e=>`
                    <label style="display: flex; align-items: center; gap: 8px; font-size: 13px; cursor: pointer;">
                      <input type="checkbox" name="mock-subj" value="${e.id}" checked>
                      <span>${e.name}</span>
                    </label>
                  `).join(``)}
                </div>
              </div>

              <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">
                ⏱️ Iniciar Prova do Simulado
              </button>
            </form>
          </div>
        </div>

        <!-- HISTÓRICO DE SIMULADOS ANTERIORES -->
        <div class="card">
          <div class="card-header">
            <div class="card-title">📜 Histórico de Simulados Realizados</div>
            <span class="badge badge-gray">${i.length} realizados</span>
          </div>
          <div class="card-body">
            ${i.length===0?`
              <div class="empty-state">
                <div class="empty-state-icon">📊</div>
                <div class="empty-state-title">Nenhum simulado registrado</div>
                <p class="empty-state-desc">Configure e realize um simulado para testar seu tempo de prova e acompanhar o histórico de evolução.</p>
              </div>
            `:`
              <div style="display: flex; flex-direction: column; gap: 12px;">
                ${i.map(e=>{let t=e.correctCount+e.wrongCount,n=t>0?Math.round(e.correctCount/t*100):0;return`
                    <div style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 14px; background: var(--bg-surface); display: flex; justify-content: space-between; align-items: center;">
                      <div>
                        <div style="font-weight: 700; font-size: 14px; margin-bottom: 2px;">Simulado Saneago</div>
                        <div style="font-size: 12px; color: var(--text-muted);">
                          📅 ${e.completedAt?new Date(e.completedAt).toLocaleDateString(`pt-BR`):``} • ⏱️ ${Math.round((e.timeSpentSeconds||0)/60)} min utilizados
                        </div>
                      </div>

                      <div style="text-align: right;">
                        <span class="badge ${n>=70?`badge-success`:n>=50?`badge-warning`:`badge-danger`}" style="font-size: 14px; padding: 6px 12px;">
                          ${n}% (${e.correctCount}/${t})
                        </span>
                      </div>
                    </div>
                  `}).join(``)}
              </div>
            `}
          </div>
        </div>

      </div>
    `}function h(e){let t=e.questions[e.currentIndex],n=e.answers[t.id];return`
      <div class="card" style="border: 2px solid var(--primary);">
        <div class="card-header" style="background: linear-gradient(135deg, #0F172A, #1E293B); color: white;">
          <div>
            <span style="font-size: 12px; text-transform: uppercase; color: #94A3B8;">Simulado Oficial em Andamento</span>
            <h3 style="color: white; font-size: 17px; font-weight: 700;">Questão ${e.currentIndex+1} de ${e.questions.length}</h3>
          </div>

          <div style="display: flex; align-items: center; gap: 14px;">
            <div id="mock-timer-display" style="font-family: var(--font-heading); font-size: 20px; font-weight: 700; color: #BAE6FD;">
              ${e.timeRemainingMinutes}:00
            </div>
            <button id="btn-finish-mock" class="btn btn-success btn-sm">Finalizar Prova</button>
          </div>
        </div>

        <div class="card-body">
          <div class="question-statement" style="font-size: 16px; margin-bottom: 20px;">
            ${t.statement}
          </div>

          <div class="options-list">
            ${t.options.map(e=>`
              <div class="option-item ${n===e.letter?`selected`:``}" data-mock-letter="${e.letter}">
                <div class="option-letter-badge">${e.letter}</div>
                <div style="flex: 1;">${e.text}</div>
              </div>
            `).join(``)}
          </div>

          <!-- NAVEGADOR DE QUESTÕES DO SIMULADO -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 24px; padding-top: 16px; border-top: 1px solid var(--border);">
            <button id="btn-mock-prev" class="btn btn-outline btn-sm" ${e.currentIndex===0?`disabled`:``}>
              ◀ Anterior
            </button>

            <!-- Mapa de questões -->
            <div style="display: flex; gap: 6px; flex-wrap: wrap;">
              ${e.questions.map((t,n)=>`
                <button class="btn btn-sm btn-nav-mock-q" data-idx="${n}" style="width: 32px; height: 32px; padding: 0; border-radius: 50%; font-size: 12px; font-weight: 700; background: ${n===e.currentIndex?`var(--primary)`:e.answers[t.id]?`var(--success-light)`:`var(--bg-page)`}; color: ${n===e.currentIndex?`white`:e.answers[t.id]?`var(--success-text)`:`var(--text-secondary)`}; border: 1px solid var(--border);">
                  ${n+1}
                </button>
              `).join(``)}
            </div>

            <button id="btn-mock-next" class="btn btn-outline btn-sm" ${e.currentIndex>=e.questions.length-1?`disabled`:``}>
              Próxima ▶
            </button>
          </div>
        </div>
      </div>
    `}function g(t,n,r){c?(e.querySelectorAll(`.option-item[data-mock-letter]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-mock-letter`),n=c.questions[c.currentIndex];c.answers[n.id]=t,u()})}),e.querySelector(`#btn-mock-prev`)?.addEventListener(`click`,()=>{c.currentIndex>0&&(--c.currentIndex,u())}),e.querySelector(`#btn-mock-next`)?.addEventListener(`click`,()=>{c.currentIndex<c.questions.length-1&&(c.currentIndex+=1,u())}),e.querySelectorAll(`.btn-nav-mock-q`).forEach(e=>{e.addEventListener(`click`,()=>{c.currentIndex=parseInt(e.getAttribute(`data-idx`),10),u()})}),e.querySelector(`#btn-finish-mock`)?.addEventListener(`click`,()=>{_()})):e.querySelector(`#mock-config-form`)?.addEventListener(`submit`,n=>{n.preventDefault();let r=parseInt(e.querySelector(`#mock-q-count`).value,10),i=parseInt(e.querySelector(`#mock-time-limit`).value,10),a=Array.from(e.querySelectorAll(`input[name='mock-subj']:checked`)).map(e=>e.value),o=t.filter(e=>a.includes(e.subjectId));o.length===0&&(o=t);let s=[...o];for(let e=s.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[s[e],s[t]]=[s[t],s[e]]}let l=s.slice(0,Math.min(r,s.length));c={title:e.querySelector(`#mock-title`).value,questions:l,answers:{},currentIndex:0,timeLimitMinutes:i,timeRemainingMinutes:i,startedAt:Date.now()},u()})}function _(){if(!c)return;let e=0,t=0,n={};c.questions.forEach(n=>{let r=c.answers[n.id],i=r===n.correctLetter;i?e+=1:t+=1,r&&ve({questionId:n.id,topicId:n.topicId,chosenLetter:r,isCorrect:i})});let r=Math.round((Date.now()-c.startedAt)/1e3);be({mockExamId:`mock_${s().slice(0,8)}`,correctCount:e,wrongCount:t,timeSpentSeconds:r,subjectBreakdown:n});let i=Math.round(e/c.questions.length*100);alert(`Simulado finalizado!\n\nAproveitamento: ${i}%\nAcertos: ${e}\nErros: ${t}\nTempo gasto: ${Math.round(r/60)} min`),c=null,u()}function v(e,t,n){return`
      <div class="card" style="max-width: 800px; margin: 0 auto;">
        <div class="card-header">
          <div class="card-title">📝 Cadastrar Nova Questão</div>
        </div>
        <div class="card-body">
          <form id="new-question-form">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
              <div class="form-group">
                <label class="form-label" for="q-subject-id">Matéria *</label>
                <select id="q-subject-id" class="form-select" required>
                  ${e.map(e=>`<option value="${e.id}">${e.name}</option>`).join(``)}
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="q-topic-id">Assunto</label>
                <select id="q-topic-id" class="form-select">
                  ${t.map(e=>`<option value="${e.id}">${e.name}</option>`).join(``)}
                </select>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="q-statement">Enunciado da Questão *</label>
              <textarea id="q-statement" class="form-control" rows="3" placeholder="Digite o texto da questão com clareza..." required></textarea>
            </div>

            <div class="form-group">
              <label class="form-label">Alternativas (A a E) *</label>
              <div style="display: flex; flex-direction: column; gap: 8px;">
                ${[`A`,`B`,`C`,`D`,`E`].map(e=>`
                  <div style="display: flex; gap: 8px; align-items: center;">
                    <span class="option-letter-badge" style="width: 32px; height: 32px;">${e}</span>
                    <input type="text" class="form-control q-opt-input" data-letter="${e}" placeholder="Texto da alternativa ${e}" required>
                  </div>
                `).join(``)}
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
              <div class="form-group">
                <label class="form-label" for="q-correct-letter">Gabarito Correto *</label>
                <select id="q-correct-letter" class="form-select" required>
                  <option value="A">Alternativa A</option>
                  <option value="B">Alternativa B</option>
                  <option value="C">Alternativa C</option>
                  <option value="D">Alternativa D</option>
                  <option value="E">Alternativa E</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="q-banca">Banca Organizadora / Fonte</label>
                <input type="text" id="q-banca" class="form-control" placeholder="Ex: CS-UFG / Concurso Saneago">
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="q-explanation">Explicação e Fundamentação do Gabarito *</label>
              <textarea id="q-explanation" class="form-control" rows="3" placeholder="Explique por que o gabarito é este e os erros das outras alternativas..." required></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">
              Salvar Questão no Banco
            </button>
          </form>
        </div>
      </div>
    `}function ee(t,r){e.querySelector(`#new-question-form`)?.addEventListener(`submit`,t=>{t.preventDefault();let r=[];e.querySelectorAll(`.q-opt-input`).forEach(e=>{r.push({letter:e.getAttribute(`data-letter`),text:e.value.trim()})}),_e({id:`cq_${s().slice(0,8)}`,subjectId:e.querySelector(`#q-subject-id`).value,topicId:e.querySelector(`#q-topic-id`).value,statement:e.querySelector(`#q-statement`).value.trim(),options:r,correctLetter:e.querySelector(`#q-correct-letter`).value,explanation:e.querySelector(`#q-explanation`).value.trim(),banca:e.querySelector(`#q-banca`).value.trim()||`Cadastrada pelo Usuário`,isOfficial:!1,year:new Date().getFullYear()}),alert(`Questão cadastrada com sucesso!`),n=`practice`,u()})}function te(){e.querySelector(`#tab-practice`)?.addEventListener(`click`,()=>{n=`practice`,u()}),e.querySelector(`#tab-mock`)?.addEventListener(`click`,()=>{n=`mock`,u()}),e.querySelector(`#tab-new-q`)?.addEventListener(`click`,()=>{n=`new_question`,u()})}u()}function Uo(e,t){let n=`spaced`;function r(){let{dueToday:t,overdue:r,upcoming:o,completed:s}=Be(),c=Ce(),l=y(),u=b(),d=new Map(l.map(e=>[e.id,e])),f=new Map(u.map(e=>[e.id,e])),p={};Le.forEach(e=>p[e.id]=0),c.forEach(e=>{p[e.errorReason]!==void 0&&(p[e.errorReason]+=1)}),e.innerHTML=`
      <div style="display: flex; flex-direction: column; gap: 20px;">

        <!-- CABEÇALHO -->
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 14px;">
          <div>
            <h2 style="font-size: 22px; font-weight: 700;">Revisões e Caderno de Erros</h2>
            <p style="font-size: 13.5px; color: var(--text-muted);">Consolide sua memória de longo prazo e ataque as causas reais dos seus erros.</p>
          </div>

          <div style="display: flex; gap: 8px;">
            <button id="tab-spaced" class="btn ${n===`spaced`?`btn-primary`:`btn-outline`} btn-sm">
              🔄 Revisões Espaçadas (${t.length+r.length} pendentes)
            </button>
            <button id="tab-errors" class="btn ${n===`errors`?`btn-primary`:`btn-outline`} btn-sm">
              📕 Caderno de Erros (${c.length})
            </button>
          </div>
        </div>

        <!-- ABA DE REVISÕES ESPAÇADAS -->
        ${n===`spaced`?`
          <div style="display: flex; flex-direction: column; gap: 24px;">

            <!-- CARDS DE HOJE E ATRASADAS -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 24px;">

              <!-- REVISÕES ATRASADAS -->
              <div class="card" style="border-top: 4px solid var(--danger);">
                <div class="card-header">
                  <div class="card-title" style="color: var(--danger-text);">⚠️ Atrasadas (${r.length})</div>
                </div>
                <div class="card-body">
                  ${r.length===0?`
                    <div class="empty-state" style="padding: 24px 12px;">
                      <div style="font-size: 24px; color: var(--success); margin-bottom: 6px;">✓</div>
                      <div style="font-size: 14px; font-weight: 600;">Nenhuma revisão atrasada!</div>
                    </div>
                  `:`
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                      ${r.map(e=>i(e,d,f,!0)).join(``)}
                    </div>
                  `}
                </div>
              </div>

              <!-- REVISÕES DE HOJE -->
              <div class="card" style="border-top: 4px solid var(--warning);">
                <div class="card-header">
                  <div class="card-title" style="color: var(--warning-text);">📅 Para Revisar Hoje (${t.length})</div>
                </div>
                <div class="card-body">
                  ${t.length===0?`
                    <div class="empty-state" style="padding: 24px 12px;">
                      <div style="font-size: 24px; color: var(--success); margin-bottom: 6px;">✓</div>
                      <div style="font-size: 14px; font-weight: 600;">Tudo em dia para hoje!</div>
                    </div>
                  `:`
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                      ${t.map(e=>i(e,d,f,!1)).join(``)}
                    </div>
                  `}
                </div>
              </div>

            </div>

            <!-- PRÓXIMAS REVISÕES (CICLOS D+7 E D+30) -->
            <div class="card">
              <div class="card-header">
                <div class="card-title">🗓️ Próximas Revisões Programadas (${o.length})</div>
              </div>
              <div class="card-body">
                ${o.length===0?`
                  <p style="font-size: 13.5px; color: var(--text-muted);">Conclua sessões de estudo para que novos ciclos espaçados apareçam aqui.</p>
                `:`
                  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px;">
                    ${o.slice(0,8).map(e=>{let t=f.get(e.topicId),n=d.get(e.subjectId),r=new Date(e.dueDate+`T00:00:00`).toLocaleDateString(`pt-BR`,{day:`2-digit`,month:`short`});return`
                        <div style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 12px; background: var(--bg-surface);">
                          <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                            <span class="badge badge-gray">Ciclo D+${e.reviewStage===1?1:e.reviewStage===2?7:30}</span>
                            <span style="font-size: 12px; font-weight: 700; color: var(--primary);">${r}</span>
                          </div>
                          <div style="font-weight: 600; font-size: 13.5px;">${t?.name||`Assunto`}</div>
                          <div style="font-size: 12px; color: var(--text-muted);">${n?.name||`Matéria`}</div>
                        </div>
                      `}).join(``)}
                  </div>
                `}
              </div>
            </div>

          </div>
        `:`
          <!-- ABA DO CADERNO DE ERROS -->
          <div style="display: flex; flex-direction: column; gap: 24px;">

            <!-- GRÁFICO E ANÁLISE DOS MOTIVOS DE ERRO -->
            <div class="card">
              <div class="card-header">
                <div class="card-title">🔍 Diagnóstico de Erros Recorrentes</div>
              </div>
              <div class="card-body">
                ${c.length===0?`
                  <div class="empty-state">
                    <div class="empty-state-icon">🎉</div>
                    <div class="empty-state-title">Seu caderno de erros está limpo!</div>
                    <p class="empty-state-desc">Ao errar uma questão na aba "Questões e simulados", clique em "Anotar no Caderno de Erros" para catalogá-la aqui.</p>
                  </div>
                `:`
                  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 20px;">
                    ${Le.map(e=>{let t=p[e.id]||0,n=c.length>0?Math.round(t/c.length*100):0;return`
                        <div style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 12px; background: var(--bg-surface);">
                          <div style="font-size: 12px; font-weight: 600; color: var(--text-muted); margin-bottom: 4px;">${e.label}</div>
                          <div style="font-size: 20px; font-weight: 700; color: ${t>0?`var(--danger)`:`var(--text-primary)`};">
                            ${t} <span style="font-size: 12px; font-weight: 500; color: var(--text-muted);">(${n}%)</span>
                          </div>
                        </div>
                      `}).join(``)}
                  </div>
                `}
              </div>
            </div>

            <!-- LISTAGEM DAS QUESTÕES ERRADAS -->
            <div class="card">
              <div class="card-header">
                <div class="card-title">📝 Registros do Caderno de Erros (${c.length})</div>
              </div>
              <div class="card-body">
                <div style="display: flex; flex-direction: column; gap: 14px;">
                  ${c.map(e=>{let t=d.get(e.subjectId),n=f.get(e.topicId),r=Le.find(t=>t.id===e.errorReason),i=e.createdAt?new Date(e.createdAt).toLocaleDateString(`pt-BR`):``;return`
                      <div class="error-item">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 12px;">
                          <div>
                            <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 6px;">
                              <span class="badge badge-primary">${t?.name||`Matéria`}</span>
                              <span class="badge badge-info">${n?.name||`Assunto`}</span>
                              <span class="badge badge-danger">${r?.label||e.errorReason}</span>
                              <span style="font-size: 12px; color: var(--text-muted);">Data: ${i}</span>
                            </div>
                            <div style="font-size: 13.5px; font-weight: 600; margin-bottom: 4px;">
                              Você marcou: <span style="color: var(--danger); font-weight: 700;">${e.chosenLetter||`?`}</span> | Gabarito Correto: <span style="color: var(--success); font-weight: 700;">${e.correctLetter||`?`}</span>
                            </div>
                          </div>

                          <div style="display: flex; gap: 6px;">
                            <button class="btn btn-outline btn-sm btn-mark-error-status" data-id="${e.id}" data-status="dominado">
                              ${e.status===`dominado`?`✓ Dominado`:`Marcar como Dominado`}
                            </button>
                          </div>
                        </div>

                        ${e.explanation?`
                          <div style="font-size: 13px; color: var(--text-secondary); background: var(--bg-page); padding: 10px 14px; border-radius: var(--radius-sm); border: 1px solid var(--border);">
                            <strong>Explicação:</strong> ${e.explanation}
                          </div>
                        `:``}

                        ${e.notes?`
                          <div style="font-size: 12.5px; color: #92400E; background: #FEF3C7; padding: 6px 12px; border-radius: var(--radius-sm);">
                            💡 <strong>Sua anotação preventiva:</strong> "${e.notes}"
                          </div>
                        `:``}
                      </div>
                    `}).join(``)}
                </div>
              </div>
            </div>

          </div>
        `}

      </div>
    `,a()}function i(e,t,n,r){let i=n.get(e.topicId),a=t.get(e.subjectId);return`
      <div style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 12px; background: var(--bg-surface); display: flex; flex-direction: column; gap: 8px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div>
            <div style="font-weight: 700; font-size: 14px;">${i?.name||`Assunto`}</div>
            <div style="font-size: 12px; color: var(--text-muted);">${a?.name||`Matéria`} • Ciclo D+${e.reviewStage===1?1:e.reviewStage===2?7:30}</div>
          </div>
          <span class="badge ${r?`badge-danger`:`badge-warning`}">${r?`Atrasada`:`Hoje`}</span>
        </div>

        <div style="display: flex; gap: 6px; margin-top: 4px;">
          <button class="btn btn-success btn-sm btn-action-review" data-id="${e.id}" data-status="realizada" style="flex: 1;">
            ✓ Realizada
          </button>
          <button class="btn btn-warning btn-sm btn-action-review" data-id="${e.id}" data-status="precisa_estudar_novamente" style="flex: 1;">
            ⚠️ Rever Novamente
          </button>
          <button class="btn btn-outline btn-sm btn-action-review" data-id="${e.id}" data-status="nao_realizada">
            Não feita
          </button>
        </div>
      </div>
    `}function a(){e.querySelector(`#tab-spaced`)?.addEventListener(`click`,()=>{n=`spaced`,r()}),e.querySelector(`#tab-errors`)?.addEventListener(`click`,()=>{n=`errors`,r()}),e.querySelectorAll(`.btn-action-review`).forEach(e=>{e.addEventListener(`click`,()=>{ze(e.getAttribute(`data-id`),e.getAttribute(`data-status`)),r()})}),e.querySelectorAll(`.btn-mark-error-status`).forEach(e=>{e.addEventListener(`click`,()=>{Te(e.getAttribute(`data-id`),{status:e.getAttribute(`data-status`)}),r()})})}r()}function Wo(e,t){let n=`materials`,r=`all`,i=`all`,a=``,o=null;function s(){let t=ue(),r=pe(),i=y(),a=b(),o=re(),s=new Map(i.map(e=>[e.id,e])),l=new Map(a.map(e=>[e.id,e]));e.innerHTML=`
      <div style="display: flex; flex-direction: column; gap: 20px;">

        <!-- CABEÇALHO -->
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 14px;">
          <div>
            <h2 style="font-size: 22px; font-weight: 700;">Materiais Gratuitos e Resumos</h2>
            <p style="font-size: 13.5px; color: var(--text-muted);">Reúna links de legislação, videoaulas abertas, apostilas e escreva seus próprios resumos.</p>
          </div>

          <div style="display: flex; gap: 8px;">
            <button id="tab-materials" class="btn ${n===`materials`?`btn-primary`:`btn-outline`} btn-sm">
              📚 Biblioteca de Materiais (${t.length})
            </button>
            <button id="tab-notes" class="btn ${n===`notes`?`btn-primary`:`btn-outline`} btn-sm">
              ✍️ Meus Resumos e Anotações (${r.length})
            </button>
          </div>
        </div>

        <!-- ABA 1: BIBLIOTECA DE MATERIAIS -->
        ${n===`materials`?c(t,i,a,o,s,l):``}

        <!-- ABA 2: RESUMOS E ANOTAÇÕES -->
        ${n===`notes`?d(r,i,a,s,l):``}

      </div>

      <!-- CONTAINER PARA MODAL DE NOVO MATERIAL -->
      <div id="material-modal-container"></div>
    `,f(i,a,o)}function c(e,t,n,a,o,s){let c=e.filter(e=>!(r!==`all`&&e.type!==r||i!==`all`&&e.subjectId!==i));return`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        
        <!-- BARRA DE CONTROLE E FILTROS -->
        <div class="card" style="padding: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              <select id="filter-mat-type" class="form-select" style="width: auto; padding: 6px 12px; font-size: 13px;">
                <option value="all" ${r===`all`?`selected`:``}>Todos os tipos</option>
                <option value="site" ${r===`site`?`selected`:``}>Legislação / Sites Oficiais</option>
                <option value="video" ${r===`video`?`selected`:``}>Videoaulas Gratuitas</option>
                <option value="pdf" ${r===`pdf`?`selected`:``}>PDFs / Normas Técnicas</option>
                <option value="apostila" ${r===`apostila`?`selected`:``}>Apostilas</option>
              </select>

              <select id="filter-mat-subject" class="form-select" style="width: auto; padding: 6px 12px; font-size: 13px;">
                <option value="all">Todas as matérias</option>
                ${t.map(e=>`<option value="${e.id}" ${e.id===i?`selected`:``}>${e.name}</option>`).join(``)}
              </select>
            </div>

            <button id="btn-add-material" class="btn btn-primary btn-sm">+ Adicionar Material</button>
          </div>
        </div>

        <!-- GRID DE MATERIAIS -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 16px;">
          ${c.length===0?`
            <div class="card empty-state" style="grid-column: 1 / -1; padding: 40px;">
              <div class="empty-state-icon">📂</div>
              <div class="empty-state-title">Nenhum material encontrado com estes filtros</div>
            </div>
          `:c.map(e=>{let t=o.get(e.subjectId),n=s.get(e.topicId);return`
              <div class="card" style="display: flex; flex-direction: column; justify-content: space-between;">
                <div class="card-body" style="padding: 18px;">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 8px;">
                    <span class="badge ${l(e.type)}">${u(e.type)}</span>
                    <button class="btn btn-outline btn-sm btn-fav-mat" data-id="${e.id}" style="padding: 2px 6px;">
                      ${e.isFavorite?`⭐ Favorito`:`☆ Favoritar`}
                    </button>
                  </div>

                  <h4 style="font-size: 15px; font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">${e.title}</h4>
                  
                  <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 10px;">
                    ${t?.name||`Geral`} ${n?`• ${n.name}`:``}
                  </div>

                  <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 16px;">
                    ${e.description||`Sem descrição adicional.`}
                  </p>

                  <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 12px; border-top: 1px solid var(--border);">
                    ${e.url?`
                      <a href="${e.url}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" style="font-size: 12.5px;">
                        🔗 Acessar Conteúdo Gratuito ↗
                      </a>
                    `:`<span></span>`}

                    <button class="btn btn-outline btn-sm btn-delete-mat" data-id="${e.id}" style="color: var(--danger-text); border-color: var(--danger-light); padding: 4px 8px; font-size: 11px;">
                      Excluir
                    </button>
                  </div>
                </div>
              </div>
            `}).join(``)}
        </div>

      </div>
    `}function l(e){return e===`video`?`badge-danger`:e===`pdf`?`badge-warning`:e===`site`?`badge-primary`:`badge-info`}function u(e){return{video:`Videoaula`,pdf:`PDF / Norma`,site:`Legislação Oficial`,apostila:`Apostila`,resumo:`Resumo`}[e]||e}function d(e,t,n,r,i){let s=e.filter(e=>{if(!a)return!0;let t=a.toLowerCase();return e.title.toLowerCase().includes(t)||e.content.toLowerCase().includes(t)});return`
      <div style="display: grid; grid-template-columns: 320px 1fr; gap: 20px;">
        
        <!-- COLUNA DA ESQUERDA: LISTA DE RESUMOS E BUSCA -->
        <div class="card" style="height: fit-content;">
          <div class="card-header" style="padding: 12px 16px;">
            <div class="card-title" style="font-size: 15px;">Anotações Salvas</div>
            <button id="btn-new-note" class="btn btn-primary btn-sm">+ Novo</button>
          </div>
          <div class="card-body" style="padding: 12px;">
            <input type="text" id="input-search-notes" class="form-control" placeholder="🔍 Pesquisar em resumos..." value="${a}" style="font-size: 13px; padding: 6px 10px; margin-bottom: 12px;">

            <div style="display: flex; flex-direction: column; gap: 6px; max-height: 480px; overflow-y: auto;">
              ${s.length===0?`
                <div style="text-align: center; color: var(--text-muted); padding: 20px 10px; font-size: 13px;">
                  Nenhum resumo encontrado.
                </div>
              `:s.map(e=>{let t=o&&o.id===e.id,n=r.get(e.subjectId);return`
                  <div class="btn-select-note" data-id="${e.id}" style="padding: 10px 12px; border-radius: var(--radius-md); background: ${t?`var(--primary-light)`:`var(--bg-page)`}; border: 1px solid ${t?`var(--primary)`:`var(--border)`}; cursor: pointer; transition: var(--transition);">
                    <div style="font-weight: 700; font-size: 13.5px; color: var(--text-primary); margin-bottom: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                      ${e.title||`Sem título`}
                    </div>
                    <div style="font-size: 11px; color: var(--text-muted);">
                      ${n?.name||`Geral`} • ${new Date(e.updatedAt).toLocaleDateString(`pt-BR`)}
                    </div>
                  </div>
                `}).join(``)}
            </div>
          </div>
        </div>

        <!-- COLUNA DA DIREITA: EDITOR DE TEXTO -->
        <div class="card">
          <div class="card-header">
            <div class="card-title">✍️ Editor de Resumo</div>
            <div id="save-status-indicator" style="font-size: 12px; color: var(--text-muted);">
              ${o?`Última alteração: ${new Date(o.updatedAt).toLocaleTimeString(`pt-BR`)}`:`Crie ou selecione uma anotação`}
            </div>
          </div>
          <div class="card-body">
            <form id="note-editor-form">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px;">
                <div class="form-group" style="margin-bottom: 0;">
                  <label class="form-label" for="note-subject">Matéria Relacionada</label>
                  <select id="note-subject" class="form-select">
                    <option value="">Geral / Sem matéria</option>
                    ${t.map(e=>`<option value="${e.id}" ${o&&o.subjectId===e.id?`selected`:``}>${e.name}</option>`).join(``)}
                  </select>
                </div>

                <div class="form-group" style="margin-bottom: 0;">
                  <label class="form-label" for="note-topic">Assunto Específico</label>
                  <select id="note-topic" class="form-select">
                    <option value="">Geral / Sem assunto</option>
                    ${n.map(e=>`<option value="${e.id}" ${o&&o.topicId===e.id?`selected`:``}>${e.name}</option>`).join(``)}
                  </select>
                </div>
              </div>

              <div class="form-group">
                <input type="text" id="note-title-input" class="form-control" placeholder="Título do Resumo (Ex: Principais Regras da Lei 13.569/1999)" value="${o?.title||``}" style="font-size: 16px; font-weight: 700;" required>
              </div>

              <div class="form-group">
                <textarea id="note-content-input" class="form-control" rows="14" placeholder="Escreva aqui seu resumo, tópicos em marcadores, macetes e palavras-chave para fixação..." style="font-family: var(--font-body); font-size: 14px; line-height: 1.7;">${o?.content||``}</textarea>
              </div>

              <div style="display: flex; justify-content: space-between; align-items: center;">
                ${o?`
                  <button type="button" id="btn-delete-current-note" class="btn btn-outline btn-sm" style="color: var(--danger-text); border-color: var(--danger-light);">
                    🗑️ Excluir Resumo
                  </button>
                `:`<div></div>`}

                <button type="submit" class="btn btn-primary">
                  💾 Salvar Resumo
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    `}function f(t,c,l){e.querySelector(`#tab-materials`)?.addEventListener(`click`,()=>{n=`materials`,s()}),e.querySelector(`#tab-notes`)?.addEventListener(`click`,()=>{n=`notes`,s()}),e.querySelector(`#filter-mat-type`)?.addEventListener(`change`,e=>{r=e.target.value,s()}),e.querySelector(`#filter-mat-subject`)?.addEventListener(`change`,e=>{i=e.target.value,s()}),e.querySelectorAll(`.btn-delete-mat`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-id`);confirm(`Deseja remover este material da sua biblioteca?`)&&(fe(t),s())})}),e.querySelectorAll(`.btn-fav-mat`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-id`),n=ue().find(e=>e.id===t);n&&(n.isFavorite=!n.isFavorite,de(n),s())})}),e.querySelector(`#btn-add-material`)?.addEventListener(`click`,()=>{p(t,c,l)});let u=e.querySelector(`#input-search-notes`);u?.addEventListener(`input`,()=>{a=u.value,s()}),e.querySelectorAll(`.btn-select-note`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-id`);o=pe().find(e=>e.id===t),s()})}),e.querySelector(`#btn-new-note`)?.addEventListener(`click`,()=>{o=null,s()}),e.querySelector(`#note-editor-form`)?.addEventListener(`submit`,t=>{t.preventDefault();let n=e.querySelector(`#note-title-input`).value.trim(),r=e.querySelector(`#note-content-input`).value,i=e.querySelector(`#note-subject`).value||null,a=e.querySelector(`#note-topic`).value||null;o=me({id:o?o.id:void 0,title:n,content:r,subjectId:i,topicId:a});let c=e.querySelector(`#save-status-indicator`);c&&(c.textContent=`✓ Salvo com sucesso às ${new Date().toLocaleTimeString(`pt-BR`)}`,c.style.color=`var(--success-text)`),s()}),e.querySelector(`#btn-delete-current-note`)?.addEventListener(`click`,()=>{o&&confirm(`Deseja realmente excluir este resumo?`)&&(he(o.id),o=null,s())})}function p(t,n,r){let i=e.querySelector(`#material-modal-container`);i.innerHTML=`
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
                    ${t.map(e=>`<option value="${e.id}">${e.name}</option>`).join(``)}
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
    `,i.querySelectorAll(`.modal-close-btn`).forEach(e=>e.addEventListener(`click`,()=>i.innerHTML=``)),i.querySelector(`#material-form`).addEventListener(`submit`,e=>{e.preventDefault(),de({title:i.querySelector(`#mat-title`).value.trim(),type:i.querySelector(`#mat-type`).value,subjectId:i.querySelector(`#mat-subj`).value||null,url:i.querySelector(`#mat-url`).value.trim(),description:i.querySelector(`#mat-desc`).value.trim()}),i.innerHTML=``,s()})}s()}function Go(e,t){let n=null;function r(){let t=re(),r=ae(),s=b(),c=y(),l=D();new Map(c.map(e=>[e.id,e])),!n&&r.length>0?n=r[0]:!n&&t.length>0&&(n=t[0].id);let u=t.find(e=>e.id===n),d=s.filter(e=>e.roleIds&&e.roleIds.includes(u?.id)),f=d.filter(e=>e.status===`concluido`).length,p=d.length>0?Math.round(f/d.length*100):0,m=new Set(d.map(e=>e.id)),h=l.filter(e=>m.has(e.topicId)),g=h.filter(e=>e.isCorrect).length,_=h.length>0?Math.round(g/h.length*100):null;e.innerHTML=`
      <div style="display: flex; flex-direction: column; gap: 24px;">

        <!-- CABEÇALHO -->
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 14px;">
          <div>
            <h2 style="font-size: 22px; font-weight: 700;">Cargos da Saneago e Frentes de Preparação</h2>
            <p style="font-size: 13.5px; color: var(--text-muted);">
              Consulte os requisitos oficiais de editais anteriores, selecione os cargos de interesse e compartilhe matérias comuns.
            </p>
          </div>

          <button id="btn-add-custom-role" class="btn btn-outline btn-sm">+ Cadastrar Cargo Personalizado</button>
        </div>

        <!-- SELEÇÃO MÚLTIPLA DE CARGOS DO ESTUDANTE -->
        <div class="card" style="border: 2px solid #BAE6FD; background: #F0F9FF;">
          <div class="card-body" style="padding: 18px 22px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
              <div>
                <h4 style="font-size: 15px; font-weight: 700; color: #0369A1;">Minha Preparação: Cargos Selecionados</h4>
                <p style="font-size: 12.5px; color: #0284C7;">Você pode estudar para mais de um cargo. Matérias compartilhadas têm progresso unificado.</p>
              </div>
              <span class="badge badge-primary">${r.length} cargo(s) selecionado(s)</span>
            </div>

            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              ${t.map(e=>{let t=r.includes(e.id);return`
                  <label style="display: flex; align-items: center; gap: 8px; padding: 8px 14px; border-radius: var(--radius-md); background: ${t?`var(--bg-surface)`:`transparent`}; border: 1px solid ${t?`var(--primary)`:`#CBD5E1`}; cursor: pointer; transition: var(--transition);">
                    <input type="checkbox" class="role-selector-checkbox" value="${e.id}" ${t?`checked`:``}>
                    <span style="font-size: 13.5px; font-weight: ${t?`700`:`500`}; color: ${t?`var(--primary)`:`var(--text-secondary)`};">
                      ${e.name} (${e.educationLevel})
                    </span>
                  </label>
                `}).join(``)}
            </div>
          </div>
        </div>

        <!-- ABAS DOS CARGOS PARA VISUALIZAÇÃO DETALHADA -->
        <div style="display: flex; gap: 8px; overflow-x: auto; padding-bottom: 4px; border-bottom: 1px solid var(--border);">
          ${t.map(e=>{let t=e.id===n,i=r.includes(e.id);return`
              <button class="btn btn-role-tab" data-id="${e.id}" style="padding: 10px 16px; border-radius: var(--radius-md) var(--radius-md) 0 0; background: ${t?`var(--bg-surface)`:`transparent`}; color: ${t?`var(--primary)`:`var(--text-secondary)`}; font-weight: ${t?`700`:`500`}; border: 1px solid ${t?`var(--border)`:`transparent`}; border-bottom: ${t?`2px solid var(--primary)`:`none`}; display: flex; align-items: center; gap: 8px;">
                <span>${e.name}</span>
                ${i?`<span class="badge badge-success" style="font-size: 10px; padding: 2px 6px;">Alvo</span>`:``}
              </button>
            `}).join(``)}
        </div>

        <!-- DETALHES DO CARGO SELECIONADO -->
        ${u?`
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 24px;">

            <!-- COLUNA 1: FICHA TÉCNICA E REQUISITOS -->
            <div class="card">
              <div class="card-header">
                <div>
                  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                    <span class="badge badge-primary">${u.educationLevel}</span>
                    <span class="badge ${i(u.sourceStatus)}">
                      ${a(u.sourceStatus)}
                    </span>
                  </div>
                  <h3 class="card-title">${u.name}</h3>
                </div>
              </div>

              <div class="card-body" style="display: flex; flex-direction: column; gap: 16px;">
                <div>
                  <div style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: var(--text-muted); margin-bottom: 2px;">Requisitos Oficiais</div>
                  <div style="font-size: 13.5px; color: var(--text-primary);">${u.requirements}</div>
                </div>

                <div>
                  <div style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: var(--text-muted); margin-bottom: 2px;">Atribuições do Cargo</div>
                  <div style="font-size: 13.5px; color: var(--text-secondary); line-height: 1.5;">${u.duties}</div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; background: var(--bg-page); padding: 12px; border-radius: var(--radius-md); border: 1px solid var(--border);">
                  <div>
                    <div style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: var(--text-muted);">Remuneração Base</div>
                    <div style="font-size: 14px; font-weight: 700; color: var(--primary);">${u.salaryInfo}</div>
                  </div>
                  <div>
                    <div style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: var(--text-muted);">Jornada</div>
                    <div style="font-size: 14px; font-weight: 700;">${u.workload}</div>
                  </div>
                </div>

                <div>
                  <div style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: var(--text-muted); margin-bottom: 2px;">Benefícios Corporativos</div>
                  <div style="font-size: 13px; color: var(--text-secondary);">${u.benefits||`Vale-alimentação, plano de saúde e odontológico, PLR, Saneaprev.`}</div>
                </div>

                <div style="font-size: 12px; color: var(--text-muted); border-top: 1px solid var(--border-subtle); padding-top: 10px;">
                  Fonte: <strong>${u.sourceDocument||u.referenceContest||`Documentação Oficial`}</strong>
                </div>
              </div>
            </div>

            <!-- COLUNA 2: CONTEÚDOS EXIGIDOS E PROGRESSO DO CARGO -->
            <div class="card">
              <div class="card-header">
                <div class="card-title">🎯 Progresso Específico para este Cargo</div>
                <span class="badge ${p>=70?`badge-success`:`badge-warning`}">${p}% Concluído</span>
              </div>

              <div class="card-body">
                <!-- Métricas reais do cargo -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 20px;">
                  <div style="background: var(--bg-page); padding: 12px; border-radius: var(--radius-md); text-align: center; border: 1px solid var(--border);">
                    <div style="font-size: 22px; font-weight: 700; color: var(--primary);">${f} / ${d.length}</div>
                    <div style="font-size: 12px; color: var(--text-muted);">Assuntos Concluídos</div>
                  </div>

                  <div style="background: var(--bg-page); padding: 12px; border-radius: var(--radius-md); text-align: center; border: 1px solid var(--border);">
                    <div style="font-size: 22px; font-weight: 700; color: ${_!==null&&_>=70?`var(--success)`:`var(--primary)`};">
                      ${_===null?`—`:`${_}%`}
                    </div>
                    <div style="font-size: 12px; color: var(--text-muted);">Taxa de Acertos (${h.length} q.)</div>
                  </div>
                </div>

                <h4 style="font-size: 14px; font-weight: 700; margin-bottom: 10px;">Disciplinas Vinculadas a este Cargo:</h4>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                  ${d.map(e=>{let t=e.status===`concluido`,n=(e.roleIds?.length||0)>1;return`
                      <div style="padding: 10px 12px; border-radius: var(--radius-md); border: 1px solid var(--border); background: ${t?`#F0FDF4`:`var(--bg-surface)`}; display: flex; justify-content: space-between; align-items: center;">
                        <div>
                          <div style="font-weight: 600; font-size: 13.5px; ${t?`text-decoration: line-through; color: var(--text-muted);`:``}">${e.name}</div>
                          ${n?`<span class="badge badge-info" style="font-size: 10.5px; margin-top: 3px;">🔗 Compartilhado com +${e.roleIds.length-1} cargo(s)</span>`:``}
                        </div>

                        <span class="badge ${t?`badge-success`:`badge-gray`}" style="font-size: 11px;">
                          ${t?`Concluído`:`Pendente`}
                        </span>
                      </div>
                    `}).join(``)}
                </div>
              </div>
            </div>

          </div>
        `:``}

      </div>

      <!-- MODAL DE CARGO PERSONALIZADO -->
      <div id="custom-role-modal-container"></div>
    `,o(t)}function i(e){return e===`confirmado_oficial`?`badge-success`:e===`concurso_anterior`?`badge-primary`:`badge-warning`}function a(e){return{confirmado_oficial:`Confirmado em Documento Oficial`,concurso_anterior:`Informação de Concurso Anterior (CS-UFG)`,estimativa:`Estimativa / Não Confirmado`,pendente_confirmacao:`Pendente de Confirmação no Novo Edital`}[e]||e}function o(t){e.querySelectorAll(`.btn-role-tab`).forEach(e=>{e.addEventListener(`click`,()=>{n=e.getAttribute(`data-id`),r()})}),e.querySelectorAll(`.role-selector-checkbox`).forEach(t=>{t.addEventListener(`change`,()=>{let n=Array.from(e.querySelectorAll(`.role-selector-checkbox:checked`)).map(e=>e.value);n.length===0?(alert(`Mantenha ao menos 1 cargo selecionado para o seu plano de estudos.`),t.checked=!0):(oe(n),r())})}),e.querySelector(`#btn-add-custom-role`)?.addEventListener(`click`,()=>{c()})}function c(){let t=e.querySelector(`#custom-role-modal-container`);t.innerHTML=`
      <div class="modal-backdrop">
        <div class="modal-container">
          <div class="modal-header">
            <h3 class="modal-title">Cadastrar Cargo Personalizado</h3>
            <button class="modal-close-btn">&times;</button>
          </div>

          <form id="custom-role-form">
            <div class="modal-body">
              <div class="form-group">
                <label class="form-label" for="cr-name">Nome do Cargo *</label>
                <input type="text" id="cr-name" class="form-control" placeholder="Ex: Técnico em Agrimensura" required>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
                <div class="form-group">
                  <label class="form-label" for="cr-level">Escolaridade</label>
                  <select id="cr-level" class="form-select">
                    <option value="Fundamental">Nível Fundamental</option>
                    <option value="Médio">Nível Médio</option>
                    <option value="Técnico" selected>Nível Técnico</option>
                    <option value="Superior">Nível Superior</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label" for="cr-salary">Remuneração Estimada</label>
                  <input type="text" id="cr-salary" class="form-control" placeholder="Ex: R$ 4.500,00">
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="cr-reqs">Requisitos</label>
                <textarea id="cr-reqs" class="form-control" rows="2" placeholder="Curso técnico exigido, conselho de classe..."></textarea>
              </div>

              <div class="form-group">
                <label class="form-label" for="cr-duties">Atribuições Principais</label>
                <textarea id="cr-duties" class="form-control" rows="2" placeholder="Principais atividades executadas..."></textarea>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary modal-close-btn">Cancelar</button>
              <button type="submit" class="btn btn-primary">Salvar Cargo Personalizado</button>
            </div>
          </form>
        </div>
      </div>
    `,t.querySelectorAll(`.modal-close-btn`).forEach(e=>e.addEventListener(`click`,()=>t.innerHTML=``)),t.querySelector(`#custom-role-form`).addEventListener(`submit`,e=>{e.preventDefault(),x({id:`custom_${s().slice(0,8)}`,name:t.querySelector(`#cr-name`).value.trim(),educationLevel:t.querySelector(`#cr-level`).value,salaryInfo:t.querySelector(`#cr-salary`).value.trim()||`Pendente de confirmação`,requirements:t.querySelector(`#cr-reqs`).value.trim()||`Pendente de confirmação`,duties:t.querySelector(`#cr-duties`).value.trim()||`Pendente de confirmação`,workload:`40 horas semanais`,sourceStatus:`pendente_confirmacao`,isCustom:!0}),t.innerHTML=``,r()})}r()}var Ko=[{id:`cs_ufg`,name:`CS-UFG (Centro de Seleção da Universidade Federal de Goiás)`,isHistoricalReference:!0,officialPortalUrl:`https://centrodeselecao.ufg.br`,statusNote:`Banca organizadora do último concurso geral da SANEAGO (Edital 01/2018). Referência histórica primária para estudos de estilo.`,overview:`A CS-UFG é conhecida por provas técnicas bem estruturadas, com enunciados diretos, porém conceituais e densos. Valoriza a precisão teórica e a fundamentação estrita dos textos legais e científicos.`,characteristics:[{aspect:`Língua Portuguesa`,detail:`Prioriza textos de divulgação científica, crônicas e ensaios modernos. Questões cobram intensamente concordância verbal/nominal, funções sintáticas do pronome 'se', regência de verbos de regência múltipla e relações semânticas entre orações subordinadas.`},{aspect:`Raciocínio Lógico e Matemática`,detail:`Foco predominante em lógica formal proposicional (negações de De Morgan, equivalência contrapositiva) e problemas práticos contextualizados com porcentagem, vazões proporcionais e probabilidade simples.`},{aspect:`Legislação e Direito`,detail:`Cobra a literalidade da legislação estadual (Lei 13.569/1999) combinada com noções pontuais da Constituição Federal (art. 37) e da Lei das Estatais (Lei 13.303/2016). Raramente cobra jurisprudência controvertida ou teses doutrinárias minoritárias.`},{aspect:`Conhecimentos Específicos de Saneamento`,detail:`Enfase profunda nas fases de tratamento físico-químico da água (ETA), parâmetros de potabilidade e etapas do tratamento preliminar e biológico de efluentes sanitários (ETE).`}],tactics:[`Nas questões de interpretação, atenha-se estritamente ao que está escrito no texto de apoio. A banca penaliza extrapolações interpretativas.`,`Em Português, domine as regras de regência verbal clássicas (assistir, visar, aspirar, implicar).`,`Em RLM, desenhe diagramas de Venn ou escreva a tabela-verdade nas questões de conectivos em vez de tentar resolver mentalmente.`,`Memorize os números e prazos-chave do Novo Marco Legal do Saneamento (ex.: metas de 99% de água e 90% de esgoto até 2033).`],pastExams:[{year:2018,title:`Concurso Público SANEAGO 2018 - Nível Médio e Técnico`,roles:`Agente de Saneamento, Técnico em Saneamento, Técnico em Química`,officialLink:`https://centrodeselecao.ufg.br/2018/saneago/`,hasAnswerKey:!0},{year:2018,title:`Concurso Público SANEAGO 2018 - Nível Superior`,roles:`Analista de Saneamento (Engenharia Civil, Biologia), Analista de Gestão (Administração)`,officialLink:`https://centrodeselecao.ufg.br/2018/saneago/`,hasAnswerKey:!0},{year:2020,title:`Processo Seletivo Simplificado / Concurso Complementar SANEAGO`,roles:`Cargos Técnicos Operacionais`,officialLink:`https://centrodeselecao.ufg.br`,hasAnswerKey:!0}]},{id:`fcc`,name:`FCC (Fundação Carlos Chagas)`,isHistoricalReference:!1,officialPortalUrl:`https://www.concursosfcc.com.br`,statusNote:`Banca de grande porte nacional com vasta experiência em concessionárias de água/saneamento (como Sabesp e Copasa). Perfil de referência comparativa.`,overview:`A FCC é reconhecida por enunciados elegantes, gramática muito tradicional e rigorosa, e questões de direito com forte cobrança da 'letra da lei' e súmulas dos tribunais superiores.`,characteristics:[{aspect:`Língua Portuguesa`,detail:`Textos reflexivos ou filosóficos. Ênfase gigantesca em reescrita de frases, transposição da voz ativa para a passiva, e concordância com sujeito paciente oracional.`},{aspect:`Direito Administrativo`,detail:`Abordagem literal dos artigos da lei, exigência de memorização de prazos e hipóteses de dispensa/inexigibilidade de licitação.`}],tactics:[`Em reescrita de frases da FCC, busque imediatamente erros de concordância, regência e crase nas opções antes de analisar o sentido geral.`,`Atenção com enunciados que pedem a alternativa 'INCORRETA' ou 'NÃO se admite'.`],pastExams:[{year:2018,title:`Concurso Sabesp (Saneamento Básico do Estado de SP)`,roles:`Técnico e Analista de Saneamento`,officialLink:`https://www.concursosfcc.com.br`,hasAnswerKey:!0}]}];function qo(e,t){let n=`cs_ufg`;function r(){let t=D(),r=[...Vo,...ge()],a=Ko.find(e=>e.id===n)||Ko[0],o=r.filter(e=>e.banca&&e.banca.toLowerCase().includes(a.id===`cs_ufg`?`ufg`:`fcc`)),s=new Set(o.map(e=>e.id)),c=t.filter(e=>s.has(e.questionId)),l=c.filter(e=>e.isCorrect).length,u=c.length>0?Math.round(l/c.length*100):null;e.innerHTML=`
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
          ${Ko.map(e=>{let t=e.id===n;return`
              <button class="btn btn-banca-tab" data-id="${e.id}" style="padding: 10px 18px; border-radius: var(--radius-md) var(--radius-md) 0 0; background: ${t?`var(--bg-surface)`:`transparent`}; color: ${t?`var(--primary)`:`var(--text-secondary)`}; font-weight: ${t?`700`:`500`}; border: 1px solid ${t?`var(--border)`:`transparent`}; border-bottom: ${t?`2px solid var(--primary)`:`none`};">
                ${e.name}
              </button>
            `}).join(``)}
        </div>

        <!-- CONTEÚDO DA BANCA SELECIONADA -->
        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 24px;">

          <!-- COLUNA PRINCIPAL: PERFIL, CARACTERÍSTICAS E ESTRATÉGIAS -->
          <div style="display: flex; flex-direction: column; gap: 20px;">

            <!-- VISÃO GERAL -->
            <div class="card">
              <div class="card-header">
                <div>
                  <span class="badge ${a.isHistoricalReference?`badge-success`:`badge-gray`}">
                    ${a.isHistoricalReference?`Banca do Último Concurso SANEAGO`:`Banca de Referência Comparativa`}
                  </span>
                  <h3 class="card-title" style="margin-top: 4px;">${a.name}</h3>
                </div>

                <a href="${a.officialPortalUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                  Portal Oficial ↗
                </a>
              </div>
              <div class="card-body">
                <p style="font-size: 14px; color: var(--text-secondary); line-height: 1.6; margin-bottom: 16px;">
                  ${a.overview}
                </p>

                <h4 style="font-size: 14px; font-weight: 700; color: var(--text-primary); margin-bottom: 10px;">Como cada disciplina é cobrada nas provas:</h4>
                <div style="display: flex; flex-direction: column; gap: 10px;">
                  ${a.characteristics.map(e=>`
                    <div style="background: var(--bg-page); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 12px 14px;">
                      <div style="font-size: 13px; font-weight: 700; color: var(--primary); margin-bottom: 2px;">${e.aspect}</div>
                      <div style="font-size: 13px; color: var(--text-secondary); line-height: 1.5;">${e.detail}</div>
                    </div>
                  `).join(``)}
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
                  ${a.tactics.map(e=>`
                    <div style="display: flex; align-items: flex-start; gap: 10px; font-size: 13.5px; color: var(--text-secondary);">
                      <span style="color: var(--success); font-weight: 700; font-size: 16px;">✓</span>
                      <span>${e}</span>
                    </div>
                  `).join(``)}
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
                <div style="font-family: var(--font-heading); font-size: 38px; font-weight: 700; color: ${u!==null&&u>=70?`var(--success)`:`var(--primary)`};">
                  ${u===null?`—`:`${u}%`}
                </div>
                <div style="font-size: 13px; color: var(--text-muted); margin-top: 4px;">
                  ${c.length>0?`${l} acertos em ${c.length} questões resolvidas`:`Nenhuma questão desta banca respondida ainda`}
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
                  ${a.pastExams.map(e=>`
                    <div style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 12px; background: var(--bg-surface);">
                      <div style="font-weight: 700; font-size: 13.5px; margin-bottom: 2px;">${e.title}</div>
                      <div style="font-size: 11.5px; color: var(--text-muted); margin-bottom: 8px;">Cargos: ${e.roles}</div>
                      <a href="${e.officialLink}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" style="font-size: 11.5px; width: 100%; justify-content: center;">
                        Baixar Prova e Gabarito Oficial ↗
                      </a>
                    </div>
                  `).join(``)}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    `,i()}function i(){e.querySelectorAll(`.btn-banca-tab`).forEach(e=>{e.addEventListener(`click`,()=>{n=e.getAttribute(`data-id`),r()})}),e.querySelector(`#btn-practice-banca-q`)?.addEventListener(`click`,()=>{t(`questions`)})}r()}function Jo(e,t){let n=w(),r=S(),i=b(),a=y(),o=D();ye();let s=xe(),c=Ee(),l=new Map(a.map(e=>[e.id,e]));new Map(i.map(e=>[e.id,e]));let u=n.reduce((e,t)=>e+(t.durationSeconds||0),0),d=(u/3600).toFixed(1),f=new Set(n.map(e=>e.startedAt?.slice(0,10)).filter(Boolean)).size,p=[],m=[`Dom`,`Seg`,`Ter`,`Qua`,`Qui`,`Sex`,`Sáb`],h=new Date;for(let e=6;e>=0;e--){let t=new Date(h);t.setDate(h.getDate()-e);let i=t.toISOString().slice(0,10),a=m[t.getDay()],o=n.filter(e=>e.startedAt&&e.startedAt.startsWith(i)).reduce((e,t)=>e+Math.round((t.durationSeconds||0)/60),0),s=r.filter(e=>e.scheduledDate===i&&e.status!==`nao_realizada`).reduce((e,t)=>e+(t.estimatedMinutes||0),0);p.push({dateStr:i,label:a,actualMins:o,plannedMins:s})}let g=Math.max(120,...p.map(e=>Math.max(e.actualMins,e.plannedMins))),_=a.map(e=>{let t=n.filter(t=>t.subjectId===e.id).reduce((e,t)=>e+(t.durationSeconds||0),0);return{subject:e,seconds:t,hours:parseFloat((t/3600).toFixed(1))}}).filter(e=>e.seconds>0),v=a.map(e=>{let t=i.filter(t=>t.subjectId===e.id),n=new Set(t.map(e=>e.id)),r=o.filter(e=>n.has(e.topicId));if(r.length===0)return null;let a=r.filter(e=>e.isCorrect).length,s=Math.round(a/r.length*100);return{subject:e,total:r.length,correct:a,rate:s}}).filter(Boolean),ee=i.map(e=>{let t=o.filter(t=>t.topicId===e.id);if(t.length<2)return null;let n=t.filter(e=>e.isCorrect).length,r=Math.round(n/t.length*100);return{topic:e,total:t.length,correct:n,rate:r}}).filter(Boolean).sort((e,t)=>e.rate-t.rate).slice(0,5),te=s.filter(e=>e.status===`realizada`).length;e.innerHTML=`
    <div style="display: flex; flex-direction: column; gap: 24px;">

      <!-- CABEÇALHO -->
      <div>
        <h2 style="font-size: 22px; font-weight: 700;">Painel de Desempenho e Estatísticas Reais</h2>
        <p style="font-size: 13.5px; color: var(--text-muted);">
          Métricas calculadas exclusivamente a partir dos seus registros reais de estudo e questões resolvidas.
        </p>
      </div>

      <!-- CARDS DE RESUMO SUPERIOR -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon-wrapper stat-icon-blue">⏱️</div>
          <div class="stat-content">
            <div class="stat-value">${d}h</div>
            <div class="stat-label">Total Efetivamente Estudado</div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon-wrapper stat-icon-indigo">📅</div>
          <div class="stat-content">
            <div class="stat-value">${f} dias</div>
            <div class="stat-label">Com Estudo Registrado</div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon-wrapper stat-icon-green">🎯</div>
          <div class="stat-content">
            <div class="stat-value">${o.length>0?`${Math.round(o.filter(e=>e.isCorrect).length/o.length*100)}%`:`—`}</div>
            <div class="stat-label">Aproveitamento Geral (${o.length} q.)</div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon-wrapper stat-icon-amber">🔄</div>
          <div class="stat-content">
            <div class="stat-value">${te}</div>
            <div class="stat-label">Revisões Concluídas</div>
          </div>
        </div>
      </div>

      <!-- LINHA 1 DE GRÁFICOS: TEMPO PLANEJADO VS REALIZADO NOS ÚLTIMOS 7 DIAS -->
      <div class="card">
        <div class="card-header">
          <div>
            <div class="card-title">📊 Tempo Planejado vs. Realizado (Últimos 7 Dias)</div>
            <p style="font-size: 12.5px; color: var(--text-muted); margin-top: 2px;">
              Linha azul: tempo realizado líquido • Linha cinza: planejado
            </p>
          </div>
        </div>
        <div class="card-body">
          <div class="chart-box" style="height: 220px; align-items: flex-end; gap: 16px;">
            ${p.map(e=>{let t=Math.max(4,Math.round(e.actualMins/g*160)),n=Math.max(4,Math.round(e.plannedMins/g*160));return`
                <div class="bar-col">
                  ${e.actualMins>0?`<div class="bar-tooltip">${e.actualMins}m</div>`:``}
                  
                  <div style="display: flex; gap: 4px; align-items: flex-end; width: 100%; justify-content: center;">
                    <!-- Barra Planejada -->
                    <div style="height: ${n}px; width: 16px; background: #E2E8F0; border-radius: 4px 4px 0 0;" title="Planejado: ${e.plannedMins} min"></div>
                    <!-- Barra Realizada -->
                    <div style="height: ${t}px; width: 16px; background: ${e.actualMins>=(c.dailyStudyMinutes||120)?`var(--success)`:`var(--primary)`}; border-radius: 4px 4px 0 0;" title="Realizado: ${e.actualMins} min"></div>
                  </div>

                  <div class="bar-label">${e.label}</div>
                </div>
              `}).join(``)}
          </div>

          <div style="display: flex; justify-content: center; gap: 20px; margin-top: 12px; font-size: 12px; color: var(--text-muted);">
            <span style="display: flex; align-items: center; gap: 6px;">
              <span style="width: 12px; height: 12px; background: #E2E8F0; border-radius: 2px;"></span> Planejado
            </span>
            <span style="display: flex; align-items: center; gap: 6px;">
              <span style="width: 12px; height: 12px; background: var(--primary); border-radius: 2px;"></span> Realizado
            </span>
          </div>
        </div>
      </div>

      <!-- LINHA 2: TEMPO POR MATÉRIA + TAXA DE ACERTOS POR MATÉRIA -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 24px;">

        <!-- DISTRIBUIÇÃO DE HORAS POR MATÉRIA -->
        <div class="card">
          <div class="card-header">
            <div class="card-title">⏳ Distribuição de Horas por Matéria</div>
          </div>
          <div class="card-body">
            ${_.length===0?`
              <div class="empty-state" style="padding: 24px;">
                <p class="empty-state-desc">Nenhuma sessão de estudo registrada ainda. Use o cronômetro para acumular tempo por matéria.</p>
              </div>
            `:`
              <div style="display: flex; flex-direction: column; gap: 14px;">
                ${_.map(e=>{let t=u>0?Math.round(e.seconds/u*100):0;return`
                    <div>
                      <div style="display: flex; justify-content: space-between; font-size: 13.5px; font-weight: 600; margin-bottom: 4px;">
                        <span>${e.subject.name}</span>
                        <span style="color: var(--primary);">${e.hours}h (${t}%)</span>
                      </div>
                      <div style="height: 8px; width: 100%; background: #E2E8F0; border-radius: 4px; overflow: hidden;">
                        <div style="height: 100%; width: ${t}%; background: ${e.subject.color||`var(--primary)`}; border-radius: 4px;"></div>
                      </div>
                    </div>
                  `}).join(``)}
              </div>
            `}
          </div>
        </div>

        <!-- TAXA DE ACERTOS POR MATÉRIA -->
        <div class="card">
          <div class="card-header">
            <div class="card-title">🎯 Rendimento em Questões por Matéria</div>
          </div>
          <div class="card-body">
            ${v.length===0?`
              <div class="empty-state" style="padding: 24px;">
                <p class="empty-state-desc">Resolva questões na aba "Questões e simulados" para registrar sua precisão em cada disciplina.</p>
              </div>
            `:`
              <div style="display: flex; flex-direction: column; gap: 14px;">
                ${v.map(e=>{let t=e.rate>=70;return`
                    <div>
                      <div style="display: flex; justify-content: space-between; font-size: 13.5px; font-weight: 600; margin-bottom: 4px;">
                        <span>${e.subject.name}</span>
                        <span style="color: ${t?`var(--success-text)`:`var(--danger-text)`}; font-weight: 700;">
                          ${e.rate}% (${e.correct}/${e.total})
                        </span>
                      </div>
                      <div style="height: 8px; width: 100%; background: #E2E8F0; border-radius: 4px; overflow: hidden;">
                        <div style="height: 100%; width: ${e.rate}%; background: ${t?`var(--success)`:`var(--danger)`}; border-radius: 4px;"></div>
                      </div>
                    </div>
                  `}).join(``)}
              </div>
            `}
          </div>
        </div>

      </div>

      <!-- LINHA 3: ASSUNTOS CRÍTICOS (MAIOR TAXA DE ERRO) -->
      ${ee.length>0?`
        <div class="card">
          <div class="card-header">
            <div class="card-title">⚠️ Tópicos Críticos Identificados (Menor Taxa de Acertos)</div>
          </div>
          <div class="card-body">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px;">
              ${ee.map(e=>{let t=l.get(e.topic.subjectId);return`
                  <div style="border: 1px solid #FECACA; background: #FEF2F2; border-radius: var(--radius-md); padding: 12px 16px;">
                    <span class="badge badge-danger" style="margin-bottom: 4px;">${e.rate}% de acertos</span>
                    <div style="font-weight: 700; font-size: 14px; color: #991B1B; margin: 2px 0;">${e.topic.name}</div>
                    <div style="font-size: 12px; color: #7F1D1D;">${t?.name||`Matéria`} • (${e.correct} acertos em ${e.total} tentativas)</div>
                  </div>
                `}).join(``)}
            </div>
          </div>
        </div>
      `:``}

    </div>
  `}function Yo(e,t){function n(){let t=Ee(),n=w(),i=D(),a=xe(),o=new Date().toISOString().slice(0,10),s=n.filter(e=>e.startedAt&&e.startedAt.startsWith(o)).reduce((e,t)=>e+Math.round((t.durationSeconds||0)/60),0),c=t.dailyStudyMinutes||120,l=Math.min(100,Math.round(s/c*100)),u=i.filter(e=>e.createdAt&&e.createdAt.startsWith(o)).length,d=t.dailyQuestionsCount||20,f=Math.min(100,Math.round(u/d*100)),p=new Date,m=new Date;m.setDate(p.getDate()-7);let h=a.filter(e=>e.status===`realizada`&&e.completedAt&&new Date(e.completedAt)>=m).length,g=t.weeklyReviewsCount||5,_=Math.min(100,Math.round(h/g*100)),v=t.restDays||[`dom`];e.innerHTML=`
      <div style="display: flex; flex-direction: column; gap: 24px;">

        <!-- CABEÇALHO -->
        <div>
          <h2 style="font-size: 22px; font-weight: 700;">Metas e Hábitos de Preparação</h2>
          <p style="font-size: 13.5px; color: var(--text-muted);">
            Acompanhe seu ritmo de forma sustentável e saudável, com respeito aos seus momentos de descanso.
          </p>
        </div>

        <!-- CARDS DE PROGRESSO DAS METAS -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px;">

          <!-- META 1: ESTUDO DIÁRIO -->
          <div class="card">
            <div class="card-body">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span style="font-size: 12px; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Estudo de Hoje</span>
                <span class="badge ${l>=100?`badge-success`:`badge-primary`}">${l}%</span>
              </div>
              <div style="font-size: 24px; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">
                ${s} <span style="font-size: 14px; font-weight: 500; color: var(--text-muted);">/ ${c} minutos</span>
              </div>
              <div style="height: 8px; width: 100%; background: #E2E8F0; border-radius: 4px; overflow: hidden;">
                <div style="height: 100%; width: ${l}%; background: var(--primary); border-radius: 4px;"></div>
              </div>
            </div>
          </div>

          <!-- META 2: QUESTÕES DIÁRIAS -->
          <div class="card">
            <div class="card-body">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span style="font-size: 12px; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Questões de Hoje</span>
                <span class="badge ${f>=100?`badge-success`:`badge-info`}">${f}%</span>
              </div>
              <div style="font-size: 24px; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">
                ${u} <span style="font-size: 14px; font-weight: 500; color: var(--text-muted);">/ ${d} questões</span>
              </div>
              <div style="height: 8px; width: 100%; background: #E2E8F0; border-radius: 4px; overflow: hidden;">
                <div style="height: 100%; width: ${f}%; background: var(--info); border-radius: 4px;"></div>
              </div>
            </div>
          </div>

          <!-- META 3: REVISÕES NA SEMANA -->
          <div class="card">
            <div class="card-body">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span style="font-size: 12px; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Revisões nos Últimos 7 Dias</span>
                <span class="badge ${_>=100?`badge-success`:`badge-warning`}">${_}%</span>
              </div>
              <div style="font-size: 24px; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">
                ${h} <span style="font-size: 14px; font-weight: 500; color: var(--text-muted);">/ ${g} revisões</span>
              </div>
              <div style="height: 8px; width: 100%; background: #E2E8F0; border-radius: 4px; overflow: hidden;">
                <div style="height: 100%; width: ${_}%; background: var(--warning); border-radius: 4px;"></div>
              </div>
            </div>
          </div>

        </div>

        <!-- FORMULÁRIO DE AJUSTE DE METAS -->
        <div class="card" style="max-width: 720px;">
          <div class="card-header">
            <div class="card-title">⚙️ Ajustar Minhas Metas e Dias de Descanso</div>
          </div>
          <div class="card-body">
            <form id="goals-form">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                <div class="form-group">
                  <label class="form-label" for="goal-daily-min">Meta diária de estudo (minutos)</label>
                  <input type="number" id="goal-daily-min" class="form-control" value="${t.dailyStudyMinutes||120}" min="15" max="720" step="15" required>
                  <span class="form-hint">Ex: 120 min = 2 horas líquidas</span>
                </div>

                <div class="form-group">
                  <label class="form-label" for="goal-weekly-min">Meta semanal de estudo (minutos)</label>
                  <input type="number" id="goal-weekly-min" class="form-control" value="${t.weeklyStudyMinutes||720}" min="60" max="4320" step="30" required>
                </div>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                <div class="form-group">
                  <label class="form-label" for="goal-questions">Quantidade de questões por dia</label>
                  <input type="number" id="goal-questions" class="form-control" value="${t.dailyQuestionsCount||20}" min="1" max="200" step="1" required>
                </div>

                <div class="form-group">
                  <label class="form-label" for="goal-reviews">Revisões espaçadas por semana</label>
                  <input type="number" id="goal-reviews" class="form-control" value="${t.weeklyReviewsCount||5}" min="1" max="50" step="1" required>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Dias programados de descanso</label>
                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                  ${[{id:`dom`,label:`Domingo`},{id:`seg`,label:`Segunda`},{id:`ter`,label:`Terça`},{id:`qua`,label:`Quarta`},{id:`qui`,label:`Quinta`},{id:`sex`,label:`Sexta`},{id:`sab`,label:`Sábado`}].map(e=>`
                    <label style="display: flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: var(--radius-md); background: var(--bg-page); border: 1px solid var(--border); font-size: 13px; cursor: pointer;">
                      <input type="checkbox" name="rest-day-cb" value="${e.id}" ${v.includes(e.id)?`checked`:``}>
                      <span>${e.label}</span>
                    </label>
                  `).join(``)}
                </div>
                <span class="form-hint">O descanso é parte fundamental da memorização. Você não será penalizado por descansar nos dias selecionados!</span>
              </div>

              <div style="display: flex; justify-content: flex-end; margin-top: 20px;">
                <button type="submit" class="btn btn-primary">
                  Salvar Novas Metas
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    `,r()}function r(){e.querySelector(`#goals-form`)?.addEventListener(`submit`,t=>{t.preventDefault(),De({dailyStudyMinutes:parseInt(e.querySelector(`#goal-daily-min`).value,10),weeklyStudyMinutes:parseInt(e.querySelector(`#goal-weekly-min`).value,10),dailyQuestionsCount:parseInt(e.querySelector(`#goal-questions`).value,10),weeklyReviewsCount:parseInt(e.querySelector(`#goal-reviews`).value,10),restDays:Array.from(e.querySelectorAll(`input[name='rest-day-cb']:checked`)).map(e=>e.value)}),alert(`Metas atualizadas com sucesso!`),n()})}n()}function Xo(e,t){function n(){let t=_(),n=Oe();e.innerHTML=`
      <div style="display: flex; flex-direction: column; gap: 24px; max-width: 900px;">

        <!-- CABEÇALHO -->
        <div>
          <h2 style="font-size: 22px; font-weight: 700;">Meu Perfil e Configurações do Sistema</h2>
          <p style="font-size: 13.5px; color: var(--text-muted);">
            Gerencie seu código de acesso pessoal, configure a sincronização na nuvem e exporte seus backups.
          </p>
        </div>

        <!-- CARD 1: CÓDIGO PESSOAL DE ACESSO E RECUPERAÇÃO -->
        <div class="card" style="border: 2px solid var(--accent); background: linear-gradient(135deg, #F0F9FF, #FFFFFF);">
          <div class="card-header">
            <div class="card-title" style="color: var(--primary);">🔑 Seu Código Pessoal de Acesso</div>
            <span class="badge badge-success">Ativo</span>
          </div>
          <div class="card-body">
            <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 16px;">
              Este código substitui login e senha tradicionais. Utilize-o para carregar seus estudos em outro celular ou computador:
            </p>

            <div style="display: flex; align-items: center; gap: 12px; background: var(--bg-surface); border: 2px dashed var(--accent); border-radius: var(--radius-md); padding: 14px 20px; margin-bottom: 14px;">
              <div id="user-access-code" style="font-family: monospace; font-size: 20px; font-weight: 700; color: var(--primary); letter-spacing: 2px; flex: 1;">
                ${t?.accessCode||`CÓDIGO PROTEGIDO LOCALMENTE`}
              </div>

              <button id="btn-copy-profile-code" class="btn btn-primary btn-sm">
                📋 Copiar Código
              </button>
            </div>

            <div style="font-size: 12.5px; color: #92400E; background: #FEF3C7; padding: 10px 14px; border-radius: var(--radius-sm); border: 1px solid #FDE68A;">
              🔒 <strong>Segurança:</strong> O código de recuperação é validado no servidor utilizando funções criptográficas seguras (hashes). Nunca compartilhe seu código com terceiros.
            </div>
          </div>
        </div>

        <!-- CARD 2: DADOS PESSOAIS DO ESTUDANTE -->
        <div class="card">
          <div class="card-header">
            <div class="card-title">👤 Informações do Perfil</div>
          </div>
          <div class="card-body">
            <form id="profile-info-form">
              <div class="form-group">
                <label class="form-label" for="profile-name">Nome ou Apelido</label>
                <input type="text" id="profile-name" class="form-control" value="${t?.name||``}" required>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                <div class="form-group">
                  <label class="form-label" for="profile-daily-goal">Meta Diária (minutos)</label>
                  <input type="number" id="profile-daily-goal" class="form-control" value="${t?.dailyGoalMinutes||120}" min="15" max="720" step="15">
                </div>

                <div class="form-group">
                  <label class="form-label" for="profile-avail-hours">Tempo Disponível (horas/dia)</label>
                  <input type="number" id="profile-avail-hours" class="form-control" value="${t?.dailyAvailableHours||2}" min="0.5" max="14" step="0.5">
                </div>
              </div>

              <button type="submit" class="btn btn-primary btn-sm">
                Salvar Dados do Perfil
              </button>
            </form>
          </div>
        </div>

        <!-- CARD 3: SINCRONIZAÇÃO EM NUVEM VIA SUPABASE -->
        <div class="card">
          <div class="card-header">
            <div class="card-title">☁️ Sincronização em Nuvem (Supabase Gratuito)</div>
            <span class="badge ${n.isConfigured?`badge-success`:`badge-gray`}">
              ${n.isConfigured?`Conectado ao Supabase`:`Modo Local (Offline)`}
            </span>
          </div>
          <div class="card-body">
            <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 16px;">
              O Saneago Study utiliza o plano gratuito do <strong>Supabase</strong> para sincronizar seus dados entre celular e computador com isolamento via Row Level Security (RLS).
            </p>

            <form id="supabase-config-form">
              <div class="form-group">
                <label class="form-label" for="sb-url">URL do Projeto no Supabase</label>
                <input type="url" id="sb-url" class="form-control" placeholder="https://xyzcompany.supabase.co" value="${n.url||``}">
                <span class="form-hint">Encontrada em Project Settings > API no painel do Supabase.</span>
              </div>

              <div class="form-group">
                <label class="form-label" for="sb-key">Chave Pública Anônima (anon public key)</label>
                <input type="password" id="sb-key" class="form-control" placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." value="${n.anonKey||``}">
                <span class="form-hint"><strong>Atenção:</strong> NUNCA insira a chave <em>service_role</em>! Apenas a chave pública <em>anon</em> deve ser utilizada no navegador.</span>
              </div>

              <div id="sb-test-status" style="margin-bottom: 14px; display: none; font-size: 13px;"></div>

              <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                <button type="button" id="btn-test-supabase" class="btn btn-outline btn-sm">
                  ⚡ Testar Conexão
                </button>
                <button type="submit" class="btn btn-primary btn-sm">
                  Salvar Configuração do Supabase
                </button>
                ${n.isConfigured?`
                  <button type="button" id="btn-manual-sync" class="btn btn-success btn-sm">
                    🔄 Sincronizar Agora
                  </button>
                `:``}
              </div>
            </form>
          </div>
        </div>

        <!-- CARD 4: BACKUP E PORTABILIDADE DE DADOS (SEÇÃO 18) -->
        <div class="card">
          <div class="card-header">
            <div class="card-title">📦 Backup e Portabilidade de Dados</div>
          </div>
          <div class="card-body">
            <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 16px;">
              Exporte seus dados pessoais para ter controle total sobre seus resumos, histórico de estudos e questões resolvidas.
            </p>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px; margin-bottom: 24px;">
              <button id="btn-export-json" class="btn btn-outline" style="justify-content: flex-start; padding: 14px;">
                <span style="font-size: 20px;">📄</span>
                <div style="text-align: left;">
                  <div style="font-weight: 700; font-size: 13.5px;">Exportar Backup Completo (JSON)</div>
                  <div style="font-size: 11px; color: var(--text-muted);">Inclui tarefas, resumos, metas e histórico</div>
                </div>
              </button>

              <button id="btn-export-sessions-csv" class="btn btn-outline" style="justify-content: flex-start; padding: 14px;">
                <span style="font-size: 20px;">📊</span>
                <div style="text-align: left;">
                  <div style="font-weight: 700; font-size: 13.5px;">Exportar Horas de Estudo (CSV)</div>
                  <div style="font-size: 11px; color: var(--text-muted);">Compatível com Excel e Google Sheets</div>
                </div>
              </button>

              <button id="btn-export-errors-csv" class="btn btn-outline" style="justify-content: flex-start; padding: 14px;">
                <span style="font-size: 20px;">📕</span>
                <div style="text-align: left;">
                  <div style="font-weight: 700; font-size: 13.5px;">Exportar Caderno de Erros (CSV)</div>
                  <div style="font-size: 11px; color: var(--text-muted);">Planilha de motivos e correções</div>
                </div>
              </button>
            </div>

            <!-- RESTAURAÇÃO DE BACKUP COM VALIDAÇÃO -->
            <div style="border-top: 1px solid var(--border); padding-top: 18px;">
              <h4 style="font-size: 14px; font-weight: 700; margin-bottom: 6px;">Restaurar Dados a partir de Backup JSON</h4>
              <p style="font-size: 12.5px; color: var(--text-secondary); margin-bottom: 12px;">
                O arquivo será validado antes de qualquer alteração. Você poderá escolher se deseja substituir ou combinar com os dados existentes.
              </p>

              <input type="file" id="file-import-json" accept=".json" style="display: none;">
              <button id="btn-trigger-import" class="btn btn-outline btn-sm">
                📥 Selecionar Arquivo JSON para Restaurar
              </button>
            </div>
          </div>
        </div>

        <!-- CARD 5: GESTÃO DE CONTA E LOGOUT -->
        <div class="card" style="border: 1px solid #FECACA;">
          <div class="card-header" style="background: #FEF2F2;">
            <div class="card-title" style="color: #991B1B;">⚠️ Gestão de Perfil e Dispositivo</div>
          </div>
          <div class="card-body">
            <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 16px;">
              Caso deseje acessar outro perfil ou limpar os dados locais deste navegador:
            </p>

            <div style="display: flex; gap: 12px; flex-wrap: wrap;">
              <button id="btn-switch-account" class="btn btn-secondary btn-sm">
                🚪 Trocar de Perfil / Acessar Outro Código
              </button>

              <button id="btn-clear-all" class="btn btn-danger btn-sm">
                🗑️ Redefinir Dados Locais deste Navegador
              </button>
            </div>
          </div>
        </div>

      </div>

      <!-- MODAL DE CONFIRMAÇÃO DE IMPORTAÇÃO -->
      <div id="import-modal-container"></div>
    `,r(t,n)}function r(t,r){let a=e.querySelector(`#btn-copy-profile-code`);a?.addEventListener(`click`,()=>{t?.accessCode&&navigator.clipboard.writeText(t.accessCode).then(()=>{a.textContent=`✓ Copiado!`,setTimeout(()=>a.textContent=`📋 Copiar Código`,2e3)})}),e.querySelector(`#profile-info-form`)?.addEventListener(`submit`,r=>{r.preventDefault(),v({...t,name:e.querySelector(`#profile-name`).value.trim(),dailyGoalMinutes:parseInt(e.querySelector(`#profile-daily-goal`).value,10),dailyAvailableHours:parseFloat(e.querySelector(`#profile-avail-hours`).value)}),alert(`Dados do perfil atualizados com sucesso!`),n()}),e.querySelector(`#supabase-config-form`)?.addEventListener(`submit`,t=>{t.preventDefault();let i=e.querySelector(`#sb-url`).value.trim(),a=e.querySelector(`#sb-key`).value.trim();ke({url:i,anonKey:a,isConfigured:!!(i&&a),lastSyncTime:r.lastSyncTime}),alert(`Configuração do Supabase salva com sucesso!`),n()}),e.querySelector(`#btn-test-supabase`)?.addEventListener(`click`,async()=>{let t=e.querySelector(`#sb-url`).value.trim(),n=e.querySelector(`#sb-key`).value.trim(),r=e.querySelector(`#sb-test-status`);if(!t||!n){alert(`Preencha a URL e a Chave Anon antes de testar a conexão.`);return}r.style.display=`block`,r.style.color=`var(--primary)`,r.textContent=`Conectando ao Supabase...`;let i=await Oo(t,n);i.success?(r.style.color=`var(--success-text)`,r.textContent=i.message):(r.style.color=`var(--danger-text)`,r.textContent=`Falha na conexão: ${i.error}`)}),e.querySelector(`#btn-manual-sync`)?.addEventListener(`click`,async()=>{let r=e.querySelector(`#btn-manual-sync`);r.disabled=!0,r.textContent=`Sincronizando...`;let i=Ae(),a=await jo(t.id,t.sessionToken,i);a.success?alert(`Sincronização concluída com sucesso às ${new Date().toLocaleTimeString(`pt-BR`)}!`):alert(`Aviso: Os dados permanecem salvos localmente. Sincronização em nuvem pendente (${a.error||`Serviço indisponível`}).`),r.disabled=!1,r.textContent=`🔄 Sincronizar Agora`,n()}),e.querySelector(`#btn-export-json`)?.addEventListener(`click`,()=>{let e=Ae(),t=new Blob([JSON.stringify(e,null,2)],{type:`application/json`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`saneago_study_backup_${new Date().toISOString().slice(0,10)}.json`,r.click(),URL.revokeObjectURL(n)}),e.querySelector(`#btn-export-sessions-csv`)?.addEventListener(`click`,()=>{let e=Ne(),t=new Blob([`﻿`+e],{type:`text/csv;charset=utf-8;`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`saneago_horas_estudo_${new Date().toISOString().slice(0,10)}.csv`,r.click(),URL.revokeObjectURL(n)}),e.querySelector(`#btn-export-errors-csv`)?.addEventListener(`click`,()=>{let e=Pe(),t=new Blob([`﻿`+e],{type:`text/csv;charset=utf-8;`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`saneago_caderno_erros_${new Date().toISOString().slice(0,10)}.csv`,r.click(),URL.revokeObjectURL(n)});let o=e.querySelector(`#file-import-json`);e.querySelector(`#btn-trigger-import`)?.addEventListener(`click`,()=>{o.click()}),o?.addEventListener(`change`,e=>{let t=e.target.files?.[0];if(!t)return;let n=new FileReader;n.onload=e=>{try{i(JSON.parse(e.target.result))}catch{alert(`Arquivo JSON inválido. Verifique o arquivo selecionado.`)}},n.readAsText(t)}),e.querySelector(`#btn-switch-account`)?.addEventListener(`click`,()=>{confirm(`Deseja sair deste perfil? Certifique-se de que guardou seu Código de Acesso para retornar futuramente!`)&&Mo(()=>{n()})}),e.querySelector(`#btn-clear-all`)?.addEventListener(`click`,()=>{confirm(`ATENÇÃO: Deseja apagar todos os dados salvos neste navegador? Esta operação é irreversível a menos que você possua um backup JSON!`)&&(Fe(),Mo(()=>{n()}))})}function i(t){let r=e.querySelector(`#import-modal-container`);r.innerHTML=`
      <div class="modal-backdrop">
        <div class="modal-container">
          <div class="modal-header">
            <h3 class="modal-title">Confirmar Restauração de Dados</h3>
            <button class="modal-close-btn">&times;</button>
          </div>

          <div class="modal-body">
            <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 14px;">
              O arquivo foi analisado e contém dados de <strong>${t.profile?.name||`Estudante`}</strong>.
            </p>

            <div style="background: var(--bg-page); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 12px; font-size: 13px; margin-bottom: 16px;">
              <div>• Tarefas: <strong>${t.tasks?.length||0}</strong></div>
              <div>• Sessões de Estudo: <strong>${t.sessions?.length||0}</strong></div>
              <div>• Resumos: <strong>${t.notes?.length||0}</strong></div>
              <div>• Caderno de Erros: <strong>${t.errorNotebook?.length||0}</strong></div>
            </div>

            <p style="font-weight: 600; font-size: 13.5px; margin-bottom: 8px;">Como deseja importar?</p>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <label style="display: flex; align-items: flex-start; gap: 10px; padding: 10px; border: 1px solid var(--border); border-radius: var(--radius-md); cursor: pointer;">
                <input type="radio" name="import-mode" value="merge" checked>
                <div>
                  <div style="font-weight: 600; font-size: 13px;">Combinar com os dados atuais (Recomendado)</div>
                  <div style="font-size: 12px; color: var(--text-muted);">Acrescenta os itens do arquivo sem apagar seus dados já registrados.</div>
                </div>
              </label>

              <label style="display: flex; align-items: flex-start; gap: 10px; padding: 10px; border: 1px solid var(--border); border-radius: var(--radius-md); cursor: pointer;">
                <input type="radio" name="import-mode" value="replace">
                <div>
                  <div style="font-weight: 600; font-size: 13px; color: var(--danger-text);">Substituir completamente todos os dados atuais</div>
                  <div style="font-size: 12px; color: var(--text-muted);">Sobrescreve o perfil e todo o histórico deste dispositivo.</div>
                </div>
              </label>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary modal-close-btn">Cancelar</button>
            <button type="button" id="btn-confirm-import-execute" class="btn btn-primary">Executar Importação</button>
          </div>
        </div>
      </div>
    `,r.querySelectorAll(`.modal-close-btn`).forEach(e=>e.addEventListener(`click`,()=>r.innerHTML=``)),r.querySelector(`#btn-confirm-import-execute`)?.addEventListener(`click`,()=>{let e=r.querySelector(`input[name='import-mode']:checked`).value;try{Me(t,e),r.innerHTML=``,alert(`Dados importados com sucesso!`),n()}catch(e){alert(`Erro na importação: ${e.message}`)}})}n()}var Zo={dashboard:{hash:`#inicio`,title:`Início`,subtitle:`Visão geral do seu progresso, revisões e tarefas do dia`,renderer:Fo},schedule:{hash:`#cronograma`,title:`Meu Cronograma`,subtitle:`Organização semanal e mensal da sua rotina de estudos`,renderer:Lo},subjects:{hash:`#materias`,title:`Matérias e Trilhas`,subtitle:`Disciplinas cobradas, assuntos ordenados e autoavaliação`,renderer:Ro},timer:{hash:`#sessao`,title:`Sessão de Estudos`,subtitle:`Cronômetro preciso com registro de pausas e notas da sessão`,renderer:Bo},questions:{hash:`#questoes`,title:`Questões e Simulados`,subtitle:`Resolução comentada de questões oficiais e provas cronometradas`,renderer:Ho},reviews:{hash:`#revisoes`,title:`Revisões e Caderno de Erros`,subtitle:`Repetição espaçada (D+1, D+7, D+30) e diagnóstico de falhas`,renderer:Uo},materials:{hash:`#materiais`,title:`Materiais e Resumos`,subtitle:`Legislação compilada, videoaulas e editor pessoal de resumos`,renderer:Wo},roles:{hash:`#cargos`,title:`Cargos da Saneago`,subtitle:`Catálogo de requisitos, remunerações e matérias compartilhadas`,renderer:Go},banca:{hash:`#banca`,title:`Estudo da Banca`,subtitle:`Análise do perfil da CS-UFG e histórico de provas anteriores`,renderer:qo},performance:{hash:`#desempenho`,title:`Meu Desempenho`,subtitle:`Estatísticas 100% reais de tempo estudado e taxas de retenção`,renderer:Jo},goals:{hash:`#metas`,title:`Metas e Hábitos`,subtitle:`Metas sustentáveis diárias e semanais com respeito ao descanso`,renderer:Yo},profile:{hash:`#perfil`,title:`Meu Perfil e Configurações`,subtitle:`Código de acesso pessoal, conexão Supabase e backups de dados`,renderer:Xo}},Qo={};function $o(){_()?ns():Mo(e=>{ns(),ts(`dashboard`)}),os(),rs(),is(),ss(),d((e,t)=>{ns(),rs(),as()}),es(),window.addEventListener(`hashchange`,es),setInterval(is,1e3),as()}function es(){let e=window.location.hash||`#inicio`,t=Object.entries(Zo).find(([t,n])=>n.hash===e);ts(t?t[0]:`dashboard`,Qo,!1)}function ts(e,t={},n=!0){Zo[e]||(e=`dashboard`),Qo=t;let r=Zo[e];if(n&&window.location.hash!==r.hash){window.location.hash=r.hash;return}let i=document.getElementById(`topbar-page-title`),a=document.getElementById(`topbar-page-subtitle`);i&&(i.textContent=r.title),a&&(a.textContent=r.subtitle),document.querySelectorAll(`.nav-item`).forEach(t=>{t.getAttribute(`data-route`)===e?t.classList.add(`active`):t.classList.remove(`active`)}),cs();let o=document.getElementById(`main-content`);o&&typeof r.renderer==`function`&&(o.innerHTML=``,r.renderer(o,ts,t)),window.scrollTo({top:0,behavior:`smooth`})}function ns(){let e=_(),t=document.getElementById(`sidebar-user-name`),n=document.getElementById(`user-avatar-initials`);e?(t&&(t.textContent=e.name||`Candidato`),n&&(n.textContent=(e.name||`S`).trim().charAt(0).toUpperCase())):(t&&(t.textContent=`Criar meu perfil`),n&&(n.textContent=`+`))}function rs(){let e=Oe(),t=document.getElementById(`topbar-sync-dot`),n=document.getElementById(`topbar-sync-label`);e&&e.isConfigured?(t&&t.classList.add(`online`),n&&(n.textContent=`Supabase Conectado`)):(t&&t.classList.remove(`online`),n&&(n.textContent=`Modo Local (Offline)`))}function is(){let e=T(),t=document.getElementById(`topbar-timer-widget`),n=document.getElementById(`topbar-timer-text`);if(!e)t&&(t.style.display=`none`);else if(t&&(t.style.display=`flex`,e.isPaused?t.classList.remove(`running`):t.classList.add(`running`)),n){let t=e.accumulatedMs||0;e.isPaused||(t+=Date.now()-e.startedAtTimestamp);let r=Math.floor(t/1e3),i=Math.floor(r/60),a=r%60;n.textContent=`${String(i).padStart(2,`0`)}:${String(a).padStart(2,`0`)}`}}function as(){let{dueToday:e,overdue:t}=Be(),n=e.length+t.length,r=document.getElementById(`nav-reviews-badge`);r&&(n>0?(r.textContent=String(n),r.style.display=`inline-block`):r.style.display=`none`)}function os(){document.querySelectorAll(`.nav-item`).forEach(e=>{e.addEventListener(`click`,t=>{let n=e.getAttribute(`data-route`);n&&ts(n)})}),document.getElementById(`sidebar-user-card`)?.addEventListener(`click`,()=>{ts(`profile`)}),document.getElementById(`topbar-sync-status`)?.addEventListener(`click`,()=>{ts(`profile`)}),document.getElementById(`topbar-timer-widget`)?.addEventListener(`click`,()=>{ts(`timer`)})}function ss(){let e=document.getElementById(`btn-toggle-mobile-menu`),t=document.getElementById(`sidebar-overlay`);e?.addEventListener(`click`,()=>{document.getElementById(`app-sidebar`)?.classList.toggle(`open`),t?.classList.toggle(`active`)}),t?.addEventListener(`click`,cs)}function cs(){let e=document.getElementById(`app-sidebar`),t=document.getElementById(`sidebar-overlay`);e?.classList.remove(`open`),t?.classList.remove(`active`)}document.addEventListener(`DOMContentLoaded`,$o);
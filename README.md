# Saneago Study

> **Plataforma pessoal de preparação para concursos públicos da SANEAGO**  
> Desenvolvida com HTML5, CSS3, JavaScript moderno e integração opcional com Supabase (plano gratuito).  
> **Sem e-mail, sem senha tradicional e sem dependência de serviços pagos de Inteligência Artificial.**

---

## 📋 Sumário
1. [Visão Geral](#1-visão-geral)
2. [Arquitetura e Segurança](#2-arquitetura-e-segurança)
3. [Estrutura do Projeto](#3-estrutura-do-projeto)
4. [Como Executar Localmente](#4-como-executar-localmente)
5. [Configuração do Supabase (Banco de Dados e Sincronização)](#5-configuração-do-supabase)
6. [As 12 Seções da Plataforma](#6-as-12-seções-da-plataforma)
7. [Testes Realizados](#7-testes-realizados)

---

## 1. Visão Geral

O **Saneago Study** é uma aplicação web completa projetada para candidatos que se preparam para concursos da Saneamento de Goiás S.A. (SANEAGO).

A aplicação foi concebida para funcionar em dois modos integrados:
- **Modo Local (Offline First):** Funciona imediatamente no navegador, sem necessidade de cadastro, gravando o perfil, as sessões de estudo, o cronograma, as anotações e os simulados com persistência reativa local.
- **Modo Nuvem (Supabase):** Quando o estudante conecta sua URL e chave pública anônima do Supabase, os dados sincronizam entre diferentes dispositivos utilizando um **Código Pessoal de Acesso**.

---

## 2. Arquitetura e Segurança

### Autenticação por Código de Acesso Único
- Ao criar o perfil, a aplicação gera um **Código Pessoal de Acesso** com alta entropia criptográfica (`crypto.getRandomValues`) no formato:  
  `SANE-XXXX-XXXX-XXXX` (ex: `SANE-7B92-K4W8-M9PX`).
- O código em texto plano **nunca** é gravado em tabelas públicas ou exposto desprotegido.
- A aplicação gera o hash criptográfico **SHA-256** do código no cliente via Web Crypto API nativa antes do armazenamento ou validação.
- No Supabase, o banco de dados armazena apenas o hash (`access_code_hash`).
- A autenticação é protegida por **Rate Limiting** via tabela `auth_rate_limits`, bloqueando tentativas sucessivas incorretas (proteção contra força bruta).

### Proteção de Chaves
- O frontend no navegador utiliza **apenas a chave pública `anon`**. A chave administrativa `service_role` **jamais** é exposta.
- O acesso aos dados no Supabase é protegido por **Row Level Security (RLS)** e por funções seguras com `SECURITY DEFINER` (`rpc_create_profile`, `rpc_authenticate_profile`, `rpc_sync_pull`, `rpc_sync_push`).

---

## 3. Estrutura do Projeto

```text
Studya/
├── index.html                   # Ponto de entrada SPA com layout responsivo
├── package.json                 # Dependências (Vite, @supabase/supabase-js)
├── supabase_schema.sql          # Script SQL completo de tabelas, RLS e RPCs
├── README.md                    # Documentação técnica e instruções
├── supabase/
│   └── functions/
│       └── auth-code/
│           └── index.ts         # Edge Function para autenticação no Deno
└── src/
    ├── main.js                  # Orquestrador da aplicação e roteador SPA
    ├── styles/
    │   ├── index.css            # Design system, tokens e layout
    │   └── components.css       # Estilos dos componentes visuais
    ├── services/
    │   ├── crypto.js            # Gerador de códigos e hashing SHA-256
    │   ├── storage.js           # Camada de persistência local, exportação JSON/CSV
    │   ├── supabaseClient.js    # Conector Supabase e sincronização push/pull
    │   ├── adaptiveEngine.js    # Motor de adaptação baseado em regras (Sem IA paga)
    │   └── spacedRepetition.js  # Sistema de repetição espaçada (D+1, D+7, D+30)
    ├── data/
    │   ├── saneagoRoles.js      # Catálogo de cargos oficiais de editais anteriores
    │   ├── defaultSubjects.js   # Disciplinas, tópicos e trilhas de aprendizagem
    │   ├── defaultQuestions.js  # Questões comentadas de concursos anteriores
    │   ├── defaultMaterials.js  # Biblioteca de legislação e materiais públicos
    │   └── bancasData.js        # Estudo da banca CS-UFG e perfil de provas
    └── components/
        ├── authModal.js         # Modal de primeiro acesso e recuperação por código
        ├── dashboardView.js     # 1. Início (Meu Painel)
        ├── scheduleView.js      # 2. Meu cronograma (Semanal e Mensal)
        ├── subjectsView.js      # 3. Matérias e trilhas
        ├── timerView.js         # 4. Sessão de estudos (Cronômetro preciso)
        ├── questionsView.js     # 5. Questões e simulados
        ├── reviewsView.js       # 6. Revisões e caderno de erros
        ├── materialsView.js     # 7. Materiais e resumos
        ├── rolesView.js         # 8. Cargos da Saneago
        ├── bancaView.js         # 9. Estudo da banca
        ├── performanceView.js   # 10. Meu desempenho
        ├── goalsView.js         # 11. Metas
        └── profileView.js       # 12. Meu perfil e configurações
```

---

## 4. Como Executar Localmente

### Pré-requisitos
- Node.js instalado (v18 ou superior).

### Passo a Passo
1. Abra o terminal na pasta do projeto:
   ```bash
   cd "c:\Users\thawa\OneDrive\Área de Trabalho\Studya"
   ```
2. Instale as dependências (caso ainda não tenha instalado):
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse no navegador:
   ```text
   http://localhost:5173/
   ```

---

## 5. Configuração do Supabase (Opcional para Nuvem)

Para sincronizar seus dados entre diferentes dispositivos (ex: celular e notebook), siga os passos abaixo:

1. Acesse [supabase.com](https://supabase.com) e crie uma conta gratuita.
2. Crie um novo projeto (ex: `saneago-study`).
3. No menu lateral do painel Supabase, acesse **SQL Editor**.
4. Clique em **New query**.
5. Abra o arquivo `supabase_schema.sql` deste projeto, copie todo o conteúdo, cole no SQL Editor do Supabase e clique em **RUN**.
6. No menu lateral do Supabase, acesse **Project Settings > API**.
7. Copie:
   - **Project URL** (ex: `https://xxxxxx.supabase.co`)
   - **Project API Keys > anon public** (chave pública)
8. Na aplicação Saneago Study, acesse a aba **Meu perfil e configurações**:
   - Cole a URL e a chave `anon`.
   - Clique em **Testar Conexão**.
   - Clique em **Salvar Configuração**.

Pronto! Seus dados agora sincronizam automaticamente com a nuvem mantendo criptografia e proteção por código.

---

## 6. As 12 Seções da Plataforma

1. **Início (Meu Painel):**
   - Tarefas programadas para hoje com botões de início imediato da sessão, conclusão ou adiamento.
   - Resumo real do progresso (tempo hoje, semana, assuntos concluídos e % de progresso).
   - Revisões pendentes priorizando atrasadas.
   - Matérias com maior e menor rendimento em questões.
   - Banner de sugestões adaptativas inteligentes (com opção de aplicar com 1 clique).

2. **Meu Cronograma:**
   - Visualizações semanal e mensal.
   - CRUD completo de tarefas: criar, editar, reagendar, concluir, marcar não realizada, excluir com confirmação.
   - Comparação transparente entre tempo planejado e tempo realizado.
   - Algoritmo de redistribuição suave de tarefas acumuladas pelos próximos dias úteis.

3. **Matérias e Trilhas:**
   - Árvore de matérias oficiais (Língua Portuguesa, Raciocínio Lógico-Matemático, Noções de Direito, Legislação da Saneago, Saneamento Básico e Meio Ambiente).
   - Trilhas pedagógicas divididas em etapas (*Básico*, *Intermediário*, *Avançado*), permitindo que o estudante estude fora de ordem sem bloqueio artificial.
   - Classificação de dificuldade percebida (*Fácil*, *Médio*, *Difícil*) e nível de domínio (1 a 5 estrelas).

4. **Sessão de Estudos (Cronômetro):**
   - Cronômetro de alta precisão temporal baseado no relógio real (`Date.now()`), imune a perda de tempo em segundo plano ou ao recarregar a aba (`F5`).
   - Controles de iniciar, pausar, retomar, finalizar e registrar pausas.
   - Associação à matéria e assunto com campo de anotações da sessão.
   - Histórico de sessões com duração líquida e opção de exclusão.

5. **Questões e Simulados:**
   - Banco de questões oficiais de concursos anteriores da CS-UFG e questões de treinamento com fundamentação pedagógica detalhada.
   - Alternativas interativas (A a E) com feedback imediato de acerto/erro.
   - Botão direto para enviar questões erradas para o **Caderno de Erros**.
   - Gerador de simulados configuráveis (quantidade de questões, tempo limite, matérias).
   - Histórico de simulados com percentual de aproveitamento e tempo utilizado.
   - Cadastro manual de novas questões.

6. **Revisões e Caderno de Erros:**
   - Sistema de repetição espaçada com ciclos D+1, D+7 e D+30.
   - Categorização em *Atrasadas*, *Para Hoje*, *Próximas* e *Concluídas*.
   - Caderno de erros com diagnóstico das causas do erro (*Não conhecia o conteúdo*, *Esqueci*, *Interpretei errado*, *Desatenção*, *Confundi conceitos*, *Cálculo incorreto*, *Outro*).
   - Gráfico de diagnóstico dos motivos recorrentes de erro.

7. **Materiais e Resumos:**
   - Biblioteca de recursos gratuitos com links verificados para Leis (Marco Legal 14.026/2020, Lei Estadual 13.569/1999, Portaria MS 888/2021) e videoaulas públicas.
   - Editor pessoal de resumos e anotações com pesquisa em tempo real e salvamento persistente.

8. **Cargos da Saneago:**
   - Catálogo estruturado com base em editais oficiais (Agente de Saneamento, Técnico em Saneamento, Técnico em Química, Analista de Saneamento - Engenharia Civil, Biologia, Administração).
   - Classificação estrita da origem das informações (*Informação de concurso anterior*, *Confirmado*, *Estimativa*).
   - Multi-seleção de cargos com **compartilhamento de progresso de matérias comuns**.
   - Opção de cadastrar cargo personalizado.

9. **Estudo da Banca:**
   - Análise detalhada do perfil de cobrança da **CS-UFG (Centro de Seleção UFG)**.
   - Dicas estratégicas para Português, RLM, Legislação e Saneamento.
   - Desempenho do próprio usuário nas questões daquela banca.
   - Links para download de cadernos de prova e gabaritos oficiais.

10. **Meu Desempenho:**
    - Gráficos em SVG puro alimentados 100% por registros reais do usuário (sem dados falsos).
    - Tempo estudado por dia (planejado vs. realizado).
    - Distribuição de horas por disciplina.
    - Taxa de acertos por matéria.
    - Destaque dos tópicos críticos com maior incidência de erro.

11. **Metas:**
    - Metas de minutos diários e semanais, questões/dia e revisões/semana.
    - Dias programados de descanso (sem tom culpabilizador nem mensagens punitivas).

12. **Meu Perfil e Configurações:**
    - Exibição segura do Código Pessoal de Acesso com botão de cópia com um clique.
    - Configuração de sincronização com o Supabase.
    - Backup completo: Exportação em JSON, exportação do histórico de sessões em CSV e exportação do caderno de erros em CSV.
    - Importação de backup JSON com validação de esquema e opção de combinar ou substituir.
    - Troca de perfil ou redefinição dos dados locais.

---

## 7. Testes Realizados

A aplicação foi executada e testada no ambiente de navegador Chromium automatizado:
- **Fluxo Inicial:** Criação de perfil com validação, geração de código de acesso no padrão `SANE-XXXX-XXXX-XXXX` e cópia.
- **Tarefas e Calendário:** Criação de tarefa para hoje, alternância entre visão semanal e mensal, e reagendamento.
- **Cronômetro:** Sessão iniciada, pausada, registrada com anotações e salva no histórico com cálculo preciso de segundos.
- **Questões e Caderno de Erros:** Resolução de questão de concurso com fundamentação comentada, envio da resposta errada para o Caderno de Erros e verificação do gráfico de diagnósticos.
- **Resumos:** Criação de anotação no editor, verificação do status de salvamento e pesquisa instantânea.
- **Cargos e Matérias:** Seleção simultânea de cargos com reflexo unificado do progresso de matérias compartilhadas.
- **Backup e Portabilidade:** Geração e download do arquivo JSON completo e CSVs tabulares.
- **Responsividade:** Layout adaptado com menu lateral no desktop e menu drawer com overlay para telas menores.

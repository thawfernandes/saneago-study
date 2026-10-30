-- ==============================================================================
-- SANEAGO STUDY - SCHEMA SQL DO SUPABASE
-- Plataforma pessoal de preparação para concursos da Saneago
-- ==============================================================================
-- Instruções:
-- 1. Abra o painel do seu projeto no Supabase (https://app.supabase.com).
-- 2. No menu lateral, acesse "SQL Editor".
-- 3. Crie uma "New Query", cole todo o conteúdo deste arquivo e clique em "RUN".
-- ==============================================================================

-- Habilita extensões necessárias para UUIDs e criptografia segura
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ------------------------------------------------------------------------------
-- 1. TABELA DE PERFIS (profiles)
-- Armazena o perfil do estudante identificado pelo hash do código de acesso
-- NUNCA armazena o código de acesso em texto plano!
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    access_code_hash TEXT NOT NULL UNIQUE,
    daily_goal_minutes INT NOT NULL DEFAULT 120,
    daily_available_hours NUMERIC(4,2) NOT NULL DEFAULT 2.0,
    available_days JSONB NOT NULL DEFAULT '["seg","ter","qua","qui","sex"]'::jsonb,
    preferred_roles JSONB NOT NULL DEFAULT '[]'::jsonb,
    session_token TEXT,
    session_expires_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Índice para busca rápida e segura por hash do código de acesso
CREATE INDEX IF NOT EXISTS idx_profiles_access_code_hash ON public.profiles(access_code_hash);

-- ------------------------------------------------------------------------------
-- 2. TABELA DE LIMITAÇÃO DE TENTATIVAS (auth_rate_limits)
-- Protege contra adivinhação de códigos e ataques de força bruta
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.auth_rate_limits (
    client_identifier TEXT PRIMARY KEY,
    failed_attempts INT NOT NULL DEFAULT 0,
    locked_until TIMESTAMPTZ,
    last_attempt TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ------------------------------------------------------------------------------
-- 3. TABELA DE CARGOS DA SANEAGO (roles_catalog)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.roles_catalog (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    education_level TEXT NOT NULL, -- 'Fundamental', 'Médio', 'Técnico', 'Superior'
    requirements TEXT NOT NULL,
    duties TEXT NOT NULL,
    salary_info TEXT NOT NULL,
    benefits TEXT,
    workload TEXT NOT NULL,
    source_status TEXT NOT NULL DEFAULT 'concurso_anterior', -- 'confirmado_oficial', 'concurso_anterior', 'estimativa', 'pendente_confirmacao'
    reference_contest TEXT,
    source_document TEXT,
    exam_stages TEXT,
    questions_count INT,
    is_custom BOOLEAN NOT NULL DEFAULT false,
    profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_roles_profile_id ON public.roles_catalog(profile_id);

-- ------------------------------------------------------------------------------
-- 4. CARGOS SELECIONADOS PELO USUÁRIO (user_selected_roles)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.user_selected_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    profile_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    role_id TEXT NOT NULL,
    shared_subjects_enabled BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE(profile_id, role_id)
);

CREATE INDEX IF NOT EXISTS idx_selected_roles_profile ON public.user_selected_roles(profile_id);

-- ------------------------------------------------------------------------------
-- 5. MATÉRIAS (subjects)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.subjects (
    id TEXT PRIMARY KEY,
    profile_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    color TEXT DEFAULT '#005DAA',
    description TEXT,
    order_index INT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_subjects_profile ON public.subjects(profile_id);

-- ------------------------------------------------------------------------------
-- 6. ASSUNTOS / TÓPICOS (topics)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.topics (
    id TEXT PRIMARY KEY,
    profile_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    subject_id TEXT NOT NULL REFERENCES public.subjects(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    order_index INT NOT NULL DEFAULT 0,
    difficulty TEXT NOT NULL DEFAULT 'medio', -- 'facil', 'medio', 'dificil'
    mastery_level INT NOT NULL DEFAULT 1,     -- 1 a 5
    status TEXT NOT NULL DEFAULT 'nao_iniciado', -- 'nao_iniciado', 'em_andamento', 'precisa_revisar', 'concluido'
    total_studied_seconds INT NOT NULL DEFAULT 0,
    last_studied_at TIMESTAMPTZ,
    next_review_at TIMESTAMPTZ,
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_topics_profile ON public.topics(profile_id);
CREATE INDEX IF NOT EXISTS idx_topics_subject ON public.topics(subject_id);

-- ------------------------------------------------------------------------------
-- 7. VÍNCULO ENTRE ASSUNTOS E CARGOS (topic_role_relations)
-- Permite que um mesmo assunto seja compartilhado entre vários cargos
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.topic_role_relations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    profile_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    topic_id TEXT NOT NULL REFERENCES public.topics(id) ON DELETE CASCADE,
    role_id TEXT NOT NULL,
    is_confirmed BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE(profile_id, topic_id, role_id)
);

-- ------------------------------------------------------------------------------
-- 8. TAREFAS DE ESTUDO NO CRONOGRAMA (study_tasks)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.study_tasks (
    id TEXT PRIMARY KEY,
    profile_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    subject_id TEXT REFERENCES public.subjects(id) ON DELETE SET NULL,
    topic_id TEXT REFERENCES public.topics(id) ON DELETE SET NULL,
    scheduled_date DATE NOT NULL,
    scheduled_time TIME,
    estimated_minutes INT NOT NULL DEFAULT 45,
    actual_minutes INT NOT NULL DEFAULT 0,
    priority TEXT NOT NULL DEFAULT 'media', -- 'alta', 'media', 'baixa'
    status TEXT NOT NULL DEFAULT 'pendente', -- 'pendente', 'concluida', 'adiada', 'nao_realizada'
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_tasks_profile_date ON public.study_tasks(profile_id, scheduled_date);

-- ------------------------------------------------------------------------------
-- 9. SESSÕES DE ESTUDO / CRONÔMETRO (study_sessions)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.study_sessions (
    id TEXT PRIMARY KEY,
    profile_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    subject_id TEXT REFERENCES public.subjects(id) ON DELETE SET NULL,
    topic_id TEXT REFERENCES public.topics(id) ON DELETE SET NULL,
    started_at TIMESTAMPTZ NOT NULL,
    ended_at TIMESTAMPTZ NOT NULL,
    duration_seconds INT NOT NULL,
    pauses_count INT NOT NULL DEFAULT 0,
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_sessions_profile ON public.study_sessions(profile_id);

-- ------------------------------------------------------------------------------
-- 10. MATERIAIS DE ESTUDO (materials)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.materials (
    id TEXT PRIMARY KEY,
    profile_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    subject_id TEXT REFERENCES public.subjects(id) ON DELETE SET NULL,
    topic_id TEXT REFERENCES public.topics(id) ON DELETE SET NULL,
    role_id TEXT,
    type TEXT NOT NULL DEFAULT 'site', -- 'video', 'pdf', 'apostila', 'site', 'resumo', 'outro'
    url TEXT,
    description TEXT,
    is_favorite BOOLEAN NOT NULL DEFAULT false,
    is_completed BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_materials_profile ON public.materials(profile_id);

-- ------------------------------------------------------------------------------
-- 11. RESUMOS E ANOTAÇÕES (notes)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.notes (
    id TEXT PRIMARY KEY,
    profile_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    subject_id TEXT REFERENCES public.subjects(id) ON DELETE SET NULL,
    topic_id TEXT REFERENCES public.topics(id) ON DELETE SET NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL DEFAULT '',
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_notes_profile ON public.notes(profile_id);

-- ------------------------------------------------------------------------------
-- 12. BANCO DE QUESTÕES (questions)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.questions (
    id TEXT PRIMARY KEY,
    profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE, -- NULL se for do banco padrão
    subject_id TEXT,
    topic_id TEXT,
    role_id TEXT,
    statement TEXT NOT NULL,
    options JSONB NOT NULL, -- [{"letter": "A", "text": "..."}, ...]
    correct_letter TEXT NOT NULL,
    explanation TEXT NOT NULL,
    banca TEXT,
    source_info TEXT,
    is_official BOOLEAN NOT NULL DEFAULT true,
    year INT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_questions_profile ON public.questions(profile_id);
CREATE INDEX IF NOT EXISTS idx_questions_subject ON public.questions(subject_id);

-- ------------------------------------------------------------------------------
-- 13. TENTATIVAS / RESPOSTAS DE QUESTÕES (question_attempts)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.question_attempts (
    id TEXT PRIMARY KEY,
    profile_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    question_id TEXT NOT NULL REFERENCES public.questions(id) ON DELETE CASCADE,
    chosen_letter TEXT NOT NULL,
    is_correct BOOLEAN NOT NULL,
    is_favorite BOOLEAN NOT NULL DEFAULT false,
    is_marked_for_review BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_attempts_profile ON public.question_attempts(profile_id);

-- ------------------------------------------------------------------------------
-- 14. SIMULADOS E RESULTADOS (mock_exams e mock_exam_results)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.mock_exams (
    id TEXT PRIMARY KEY,
    profile_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    total_questions INT NOT NULL,
    time_limit_minutes INT,
    filters JSONB,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.mock_exam_results (
    id TEXT PRIMARY KEY,
    mock_exam_id TEXT REFERENCES public.mock_exams(id) ON DELETE CASCADE,
    profile_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    correct_count INT NOT NULL,
    wrong_count INT NOT NULL,
    time_spent_seconds INT NOT NULL,
    subject_breakdown JSONB,
    completed_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_mock_results_profile ON public.mock_exam_results(profile_id);

-- ------------------------------------------------------------------------------
-- 15. REVISÕES PROGRAMADAS (spaced_reviews)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.spaced_reviews (
    id TEXT PRIMARY KEY,
    profile_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    topic_id TEXT REFERENCES public.topics(id) ON DELETE CASCADE,
    subject_id TEXT REFERENCES public.subjects(id) ON DELETE CASCADE,
    review_stage INT NOT NULL DEFAULT 1, -- 1=D+1, 2=D+7, 3=D+30
    due_date DATE NOT NULL,
    status TEXT NOT NULL DEFAULT 'pendente', -- 'pendente', 'realizada', 'precisa_estudar_novamente', 'atrasada'
    completed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_reviews_profile_due ON public.spaced_reviews(profile_id, due_date);

-- ------------------------------------------------------------------------------
-- 16. CADERNO DE ERROS (error_notebook)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.error_notebook (
    id TEXT PRIMARY KEY,
    profile_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    question_id TEXT REFERENCES public.questions(id) ON DELETE SET NULL,
    subject_id TEXT,
    topic_id TEXT,
    chosen_letter TEXT,
    correct_letter TEXT,
    explanation TEXT,
    error_reason TEXT NOT NULL, -- 'nao_conhecia', 'esqueci', 'interpretei_errado', 'desatencao', 'confundi_conceitos', 'calculo_incorreto', 'outro'
    notes TEXT,
    status TEXT NOT NULL DEFAULT 'pendente', -- 'pendente', 'revisado', 'dominado'
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_errors_profile ON public.error_notebook(profile_id);

-- ------------------------------------------------------------------------------
-- 17. METAS E HÁBITOS (user_goals)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.user_goals (
    profile_id UUID PRIMARY KEY REFERENCES public.profiles(id) ON DELETE CASCADE,
    daily_study_minutes INT NOT NULL DEFAULT 120,
    weekly_study_minutes INT NOT NULL DEFAULT 720,
    daily_questions_count INT NOT NULL DEFAULT 20,
    weekly_reviews_count INT NOT NULL DEFAULT 5,
    rest_days JSONB NOT NULL DEFAULT '["dom"]'::jsonb,
    target_exam_date DATE,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) E POLÍTICAS DE ACESSO
-- ==============================================================================
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.roles_catalog ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_selected_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subjects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.topic_role_relations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.study_tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.study_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.materials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.question_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mock_exams ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mock_exam_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.spaced_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.error_notebook ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_goals ENABLE ROW LEVEL SECURITY;

-- Questões públicas do banco padrão (profile_id IS NULL) são visíveis para leitura pública
CREATE POLICY "Public questions are readable by everyone"
ON public.questions FOR SELECT USING (profile_id IS NULL);

-- Cargos públicos do catálogo padrão (profile_id IS NULL) são visíveis para leitura pública
CREATE POLICY "Public roles are readable by everyone"
ON public.roles_catalog FOR SELECT USING (profile_id IS NULL);

-- ==============================================================================
-- FUNÇÕES RPC SEGURAS (SECURITY DEFINER)
-- Validam os códigos no servidor com proteção de taxa de requisições e hash
-- ==============================================================================

-- 1. CRIAR NOVO PERFIL
CREATE OR REPLACE FUNCTION public.rpc_create_profile(
    p_name TEXT,
    p_access_code_hash TEXT,
    p_daily_goal_minutes INT,
    p_daily_available_hours NUMERIC,
    p_available_days JSONB,
    p_preferred_roles JSONB
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    v_profile_id UUID;
    v_session_token TEXT;
    v_expires_at TIMESTAMPTZ;
BEGIN
    IF length(p_name) < 2 THEN
        RETURN jsonb_build_object('success', false, 'error', 'O nome deve conter pelo menos 2 caracteres.');
    END IF;

    IF length(p_access_code_hash) < 32 THEN
        RETURN jsonb_build_object('success', false, 'error', 'Hash de segurança do código inválido.');
    END IF;

    IF EXISTS (SELECT 1 FROM public.profiles WHERE access_code_hash = p_access_code_hash) THEN
        RETURN jsonb_build_object('success', false, 'error', 'Este código de acesso já está em uso.');
    END IF;

    v_session_token := encode(gen_random_bytes(32), 'hex');
    v_expires_at := now() + INTERVAL '90 days';

    INSERT INTO public.profiles (
        name,
        access_code_hash,
        daily_goal_minutes,
        daily_available_hours,
        available_days,
        preferred_roles,
        session_token,
        session_expires_at
    ) VALUES (
        p_name,
        p_access_code_hash,
        COALESCE(p_daily_goal_minutes, 120),
        COALESCE(p_daily_available_hours, 2.0),
        COALESCE(p_available_days, '["seg","ter","qua","qui","sex"]'::jsonb),
        COALESCE(p_preferred_roles, '[]'::jsonb),
        v_session_token,
        v_expires_at
    )
    RETURNING id INTO v_profile_id;

    INSERT INTO public.user_goals (
        profile_id,
        daily_study_minutes,
        weekly_study_minutes,
        daily_questions_count,
        weekly_reviews_count,
        rest_days
    ) VALUES (
        v_profile_id,
        COALESCE(p_daily_goal_minutes, 120),
        COALESCE(p_daily_goal_minutes, 120) * 5,
        20,
        5,
        '["dom"]'::jsonb
    );

    RETURN jsonb_build_object(
        'success', true,
        'profile', jsonb_build_object(
            'id', v_profile_id,
            'name', p_name,
            'daily_goal_minutes', p_daily_goal_minutes,
            'daily_available_hours', p_daily_available_hours,
            'available_days', p_available_days,
            'preferred_roles', p_preferred_roles
        ),
        'session_token', v_session_token,
        'expires_at', v_expires_at
    );
END;
$$;

-- 2. AUTENTICAR PERFIL EXISTENTE (com rate-limiting)
CREATE OR REPLACE FUNCTION public.rpc_authenticate_profile(
    p_access_code_hash TEXT,
    p_client_id TEXT
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    v_profile RECORD;
    v_rate RECORD;
    v_session_token TEXT;
    v_expires_at TIMESTAMPTZ;
BEGIN
    SELECT * INTO v_rate FROM public.auth_rate_limits WHERE client_identifier = p_client_id;
    
    IF FOUND AND v_rate.locked_until IS NOT NULL AND v_rate.locked_until > now() THEN
        RETURN jsonb_build_object(
            'success', false, 
            'error', 'Muitas tentativas incorretas. Aguarde alguns minutos antes de tentar novamente.'
        );
    END IF;

    SELECT * INTO v_profile 
    FROM public.profiles 
    WHERE access_code_hash = p_access_code_hash;

    IF NOT FOUND THEN
        INSERT INTO public.auth_rate_limits (client_identifier, failed_attempts, locked_until, last_attempt)
        VALUES (p_client_id, 1, NULL, now())
        ON CONFLICT (client_identifier) DO UPDATE
        SET failed_attempts = auth_rate_limits.failed_attempts + 1,
            locked_until = CASE 
                WHEN auth_rate_limits.failed_attempts + 1 >= 5 THEN now() + INTERVAL '10 minutes'
                ELSE NULL 
            END,
            last_attempt = now();

        RETURN jsonb_build_object('success', false, 'error', 'Código de acesso incorreto ou perfil não encontrado.');
    END IF;

    DELETE FROM public.auth_rate_limits WHERE client_identifier = p_client_id;

    v_session_token := encode(gen_random_bytes(32), 'hex');
    v_expires_at := now() + INTERVAL '90 days';

    UPDATE public.profiles
    SET session_token = v_session_token,
        session_expires_at = v_expires_at,
        updated_at = now()
    WHERE id = v_profile.id;

    RETURN jsonb_build_object(
        'success', true,
        'profile', jsonb_build_object(
            'id', v_profile.id,
            'name', v_profile.name,
            'daily_goal_minutes', v_profile.daily_goal_minutes,
            'daily_available_hours', v_profile.daily_available_hours,
            'available_days', v_profile.available_days,
            'preferred_roles', v_profile.preferred_roles
        ),
        'session_token', v_session_token,
        'expires_at', v_expires_at
    );
END;
$$;

-- 3. SINCRONIZAÇÃO COMPLETA: PULL DOS DADOS DO USUÁRIO
CREATE OR REPLACE FUNCTION public.rpc_sync_pull(
    p_profile_id UUID,
    p_session_token TEXT
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    v_valid BOOLEAN;
    v_result JSONB;
BEGIN
    SELECT (session_token = p_session_token AND session_expires_at > now())
    INTO v_valid
    FROM public.profiles
    WHERE id = p_profile_id;

    IF v_valid IS NOT TRUE THEN
        RETURN jsonb_build_object('success', false, 'error', 'Sessão inválida ou expirada. Reinsira o código de acesso.');
    END IF;

    SELECT jsonb_build_object(
        'success', true,
        'profile', (SELECT row_to_json(p) FROM public.profiles p WHERE p.id = p_profile_id),
        'selected_roles', COALESCE((SELECT jsonb_agg(r) FROM public.user_selected_roles r WHERE r.profile_id = p_profile_id), '[]'::jsonb),
        'subjects', COALESCE((SELECT jsonb_agg(s) FROM public.subjects s WHERE s.profile_id = p_profile_id), '[]'::jsonb),
        'topics', COALESCE((SELECT jsonb_agg(t) FROM public.topics t WHERE t.profile_id = p_profile_id), '[]'::jsonb),
        'topic_role_relations', COALESCE((SELECT jsonb_agg(tr) FROM public.topic_role_relations tr WHERE tr.profile_id = p_profile_id), '[]'::jsonb),
        'study_tasks', COALESCE((SELECT jsonb_agg(tk) FROM public.study_tasks tk WHERE tk.profile_id = p_profile_id), '[]'::jsonb),
        'study_sessions', COALESCE((SELECT jsonb_agg(ss) FROM public.study_sessions ss WHERE ss.profile_id = p_profile_id), '[]'::jsonb),
        'materials', COALESCE((SELECT jsonb_agg(m) FROM public.materials m WHERE m.profile_id = p_profile_id), '[]'::jsonb),
        'notes', COALESCE((SELECT jsonb_agg(n) FROM public.notes n WHERE n.profile_id = p_profile_id), '[]'::jsonb),
        'questions_custom', COALESCE((SELECT jsonb_agg(q) FROM public.questions q WHERE q.profile_id = p_profile_id), '[]'::jsonb),
        'question_attempts', COALESCE((SELECT jsonb_agg(qa) FROM public.question_attempts qa WHERE qa.profile_id = p_profile_id), '[]'::jsonb),
        'mock_exams', COALESCE((SELECT jsonb_agg(me) FROM public.mock_exams me WHERE me.profile_id = p_profile_id), '[]'::jsonb),
        'mock_exam_results', COALESCE((SELECT jsonb_agg(mer) FROM public.mock_exam_results mer WHERE mer.profile_id = p_profile_id), '[]'::jsonb),
        'spaced_reviews', COALESCE((SELECT jsonb_agg(sr) FROM public.spaced_reviews sr WHERE sr.profile_id = p_profile_id), '[]'::jsonb),
        'error_notebook', COALESCE((SELECT jsonb_agg(en) FROM public.error_notebook en WHERE en.profile_id = p_profile_id), '[]'::jsonb),
        'user_goals', (SELECT row_to_json(ug) FROM public.user_goals ug WHERE ug.profile_id = p_profile_id)
    ) INTO v_result;

    RETURN v_result;
END;
$$;

-- 4. SINCRONIZAÇÃO COMPLETA: PUSH DOS DADOS DO USUÁRIO
CREATE OR REPLACE FUNCTION public.rpc_sync_push(
    p_profile_id UUID,
    p_session_token TEXT,
    p_payload JSONB
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    v_valid BOOLEAN;
    v_item JSONB;
BEGIN
    SELECT (session_token = p_session_token AND session_expires_at > now())
    INTO v_valid
    FROM public.profiles
    WHERE id = p_profile_id;

    IF v_valid IS NOT TRUE THEN
        RETURN jsonb_build_object('success', false, 'error', 'Sessão inválida ou expirada.');
    END IF;

    IF p_payload ? 'profile' THEN
        UPDATE public.profiles
        SET name = COALESCE(p_payload->'profile'->>'name', name),
            daily_goal_minutes = COALESCE((p_payload->'profile'->>'daily_goal_minutes')::int, daily_goal_minutes),
            daily_available_hours = COALESCE((p_payload->'profile'->>'daily_available_hours')::numeric, daily_available_hours),
            available_days = COALESCE(p_payload->'profile'->'available_days', available_days),
            preferred_roles = COALESCE(p_payload->'profile'->'preferred_roles', preferred_roles),
            updated_at = now()
        WHERE id = p_profile_id;
    END IF;

    IF p_payload ? 'user_goals' THEN
        INSERT INTO public.user_goals (
            profile_id,
            daily_study_minutes,
            weekly_study_minutes,
            daily_questions_count,
            weekly_reviews_count,
            rest_days,
            target_exam_date,
            updated_at
        ) VALUES (
            p_profile_id,
            COALESCE((p_payload->'user_goals'->>'daily_study_minutes')::int, 120),
            COALESCE((p_payload->'user_goals'->>'weekly_study_minutes')::int, 720),
            COALESCE((p_payload->'user_goals'->>'daily_questions_count')::int, 20),
            COALESCE((p_payload->'user_goals'->>'weekly_reviews_count')::int, 5),
            COALESCE(p_payload->'user_goals'->'rest_days', '["dom"]'::jsonb),
            (p_payload->'user_goals'->>'target_exam_date')::date,
            now()
        )
        ON CONFLICT (profile_id) DO UPDATE
        SET daily_study_minutes = EXCLUDED.daily_study_minutes,
            weekly_study_minutes = EXCLUDED.weekly_study_minutes,
            daily_questions_count = EXCLUDED.daily_questions_count,
            weekly_reviews_count = EXCLUDED.weekly_reviews_count,
            rest_days = EXCLUDED.rest_days,
            target_exam_date = EXCLUDED.target_exam_date,
            updated_at = now();
    END IF;

    IF p_payload ? 'subjects' THEN
        FOR v_item IN SELECT * FROM jsonb_array_elements(p_payload->'subjects')
        LOOP
            INSERT INTO public.subjects (id, profile_id, name, color, description, order_index, updated_at)
            VALUES (
                v_item->>'id',
                p_profile_id,
                v_item->>'name',
                COALESCE(v_item->>'color', '#005DAA'),
                v_item->>'description',
                COALESCE((v_item->>'order_index')::int, 0),
                now()
            )
            ON CONFLICT (id) DO UPDATE
            SET name = EXCLUDED.name,
                color = EXCLUDED.color,
                description = EXCLUDED.description,
                order_index = EXCLUDED.order_index,
                updated_at = now()
            WHERE subjects.profile_id = p_profile_id;
        END LOOP;
    END IF;

    IF p_payload ? 'topics' THEN
        FOR v_item IN SELECT * FROM jsonb_array_elements(p_payload->'topics')
        LOOP
            INSERT INTO public.topics (
                id, profile_id, subject_id, name, description, order_index,
                difficulty, mastery_level, status, total_studied_seconds,
                last_studied_at, next_review_at, notes, updated_at
            )
            VALUES (
                v_item->>'id',
                p_profile_id,
                v_item->>'subject_id',
                v_item->>'name',
                v_item->>'description',
                COALESCE((v_item->>'order_index')::int, 0),
                COALESCE(v_item->>'difficulty', 'medio'),
                COALESCE((v_item->>'mastery_level')::int, 1),
                COALESCE(v_item->>'status', 'nao_iniciado'),
                COALESCE((v_item->>'total_studied_seconds')::int, 0),
                (v_item->>'last_studied_at')::timestamptz,
                (v_item->>'next_review_at')::timestamptz,
                v_item->>'notes',
                now()
            )
            ON CONFLICT (id) DO UPDATE
            SET name = EXCLUDED.name,
                description = EXCLUDED.description,
                order_index = EXCLUDED.order_index,
                difficulty = EXCLUDED.difficulty,
                mastery_level = EXCLUDED.mastery_level,
                status = EXCLUDED.status,
                total_studied_seconds = EXCLUDED.total_studied_seconds,
                last_studied_at = EXCLUDED.last_studied_at,
                next_review_at = EXCLUDED.next_review_at,
                notes = EXCLUDED.notes,
                updated_at = now()
            WHERE topics.profile_id = p_profile_id;
        END LOOP;
    END IF;

    IF p_payload ? 'study_tasks' THEN
        FOR v_item IN SELECT * FROM jsonb_array_elements(p_payload->'study_tasks')
        LOOP
            INSERT INTO public.study_tasks (
                id, profile_id, subject_id, topic_id, scheduled_date, scheduled_time,
                estimated_minutes, actual_minutes, priority, status, notes, updated_at
            )
            VALUES (
                v_item->>'id',
                p_profile_id,
                v_item->>'subject_id',
                v_item->>'topic_id',
                (v_item->>'scheduled_date')::date,
                (v_item->>'scheduled_time')::time,
                COALESCE((v_item->>'estimated_minutes')::int, 45),
                COALESCE((v_item->>'actual_minutes')::int, 0),
                COALESCE(v_item->>'priority', 'media'),
                COALESCE(v_item->>'status', 'pendente'),
                v_item->>'notes',
                now()
            )
            ON CONFLICT (id) DO UPDATE
            SET subject_id = EXCLUDED.subject_id,
                topic_id = EXCLUDED.topic_id,
                scheduled_date = EXCLUDED.scheduled_date,
                scheduled_time = EXCLUDED.scheduled_time,
                estimated_minutes = EXCLUDED.estimated_minutes,
                actual_minutes = EXCLUDED.actual_minutes,
                priority = EXCLUDED.priority,
                status = EXCLUDED.status,
                notes = EXCLUDED.notes,
                updated_at = now()
            WHERE study_tasks.profile_id = p_profile_id;
        END LOOP;
    END IF;

    IF p_payload ? 'study_sessions' THEN
        FOR v_item IN SELECT * FROM jsonb_array_elements(p_payload->'study_sessions')
        LOOP
            INSERT INTO public.study_sessions (
                id, profile_id, subject_id, topic_id, started_at, ended_at,
                duration_seconds, pauses_count, notes
            )
            VALUES (
                v_item->>'id',
                p_profile_id,
                v_item->>'subject_id',
                v_item->>'topic_id',
                (v_item->>'started_at')::timestamptz,
                (v_item->>'ended_at')::timestamptz,
                COALESCE((v_item->>'duration_seconds')::int, 0),
                COALESCE((v_item->>'pauses_count')::int, 0),
                v_item->>'notes'
            )
            ON CONFLICT (id) DO NOTHING;
        END LOOP;
    END IF;

    IF p_payload ? 'notes' THEN
        FOR v_item IN SELECT * FROM jsonb_array_elements(p_payload->'notes')
        LOOP
            INSERT INTO public.notes (
                id, profile_id, subject_id, topic_id, title, content, updated_at
            )
            VALUES (
                v_item->>'id',
                p_profile_id,
                v_item->>'subject_id',
                v_item->>'topic_id',
                v_item->>'title',
                COALESCE(v_item->>'content', ''),
                now()
            )
            ON CONFLICT (id) DO UPDATE
            SET title = EXCLUDED.title,
                content = EXCLUDED.content,
                subject_id = EXCLUDED.subject_id,
                topic_id = EXCLUDED.topic_id,
                updated_at = now()
            WHERE notes.profile_id = p_profile_id;
        END LOOP;
    END IF;

    IF p_payload ? 'spaced_reviews' THEN
        FOR v_item IN SELECT * FROM jsonb_array_elements(p_payload->'spaced_reviews')
        LOOP
            INSERT INTO public.spaced_reviews (
                id, profile_id, topic_id, subject_id, review_stage, due_date, status, completed_at
            )
            VALUES (
                v_item->>'id',
                p_profile_id,
                v_item->>'topic_id',
                v_item->>'subject_id',
                COALESCE((v_item->>'review_stage')::int, 1),
                (v_item->>'due_date')::date,
                COALESCE(v_item->>'status', 'pendente'),
                (v_item->>'completed_at')::timestamptz
            )
            ON CONFLICT (id) DO UPDATE
            SET status = EXCLUDED.status,
                completed_at = EXCLUDED.completed_at
            WHERE spaced_reviews.profile_id = p_profile_id;
        END LOOP;
    END IF;

    IF p_payload ? 'error_notebook' THEN
        FOR v_item IN SELECT * FROM jsonb_array_elements(p_payload->'error_notebook')
        LOOP
            INSERT INTO public.error_notebook (
                id, profile_id, question_id, subject_id, topic_id, chosen_letter,
                correct_letter, explanation, error_reason, notes, status, updated_at
            )
            VALUES (
                v_item->>'id',
                p_profile_id,
                v_item->>'question_id',
                v_item->>'subject_id',
                v_item->>'topic_id',
                v_item->>'chosen_letter',
                v_item->>'correct_letter',
                v_item->>'explanation',
                v_item->>'error_reason',
                v_item->>'notes',
                COALESCE(v_item->>'status', 'pendente'),
                now()
            )
            ON CONFLICT (id) DO UPDATE
            SET error_reason = EXCLUDED.error_reason,
                notes = EXCLUDED.notes,
                status = EXCLUDED.status,
                updated_at = now()
            WHERE error_notebook.profile_id = p_profile_id;
        END LOOP;
    END IF;

    IF p_payload ? 'materials' THEN
        FOR v_item IN SELECT * FROM jsonb_array_elements(p_payload->'materials')
        LOOP
            INSERT INTO public.materials (
                id, profile_id, title, subject_id, topic_id, role_id, type, url, description, is_favorite, is_completed, updated_at
            )
            VALUES (
                v_item->>'id',
                p_profile_id,
                v_item->>'title',
                v_item->>'subject_id',
                v_item->>'topic_id',
                v_item->>'role_id',
                COALESCE(v_item->>'type', 'site'),
                v_item->>'url',
                v_item->>'description',
                COALESCE((v_item->>'is_favorite')::boolean, false),
                COALESCE((v_item->>'is_completed')::boolean, false),
                now()
            )
            ON CONFLICT (id) DO UPDATE
            SET title = EXCLUDED.title,
                url = EXCLUDED.url,
                description = EXCLUDED.description,
                is_favorite = EXCLUDED.is_favorite,
                is_completed = EXCLUDED.is_completed,
                updated_at = now()
            WHERE materials.profile_id = p_profile_id;
        END LOOP;
    END IF;

    RETURN jsonb_build_object('success', true, 'synced_at', now());
END;
$$;

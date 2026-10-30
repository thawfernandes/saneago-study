// ==============================================================================
// SANEAGO STUDY - CLIENTE DE SINCRONIZAÇÃO SEGURA DO SUPABASE
// Utiliza a chave pública anon e RPCs com SECURITY DEFINER no banco
// NUNCA expõe a chave service_role no navegador!
// ==============================================================================

import { createClient } from "@supabase/supabase-js";
import { getSupabaseConfig, saveSupabaseConfig, clearPendingSync } from "./storage.js";
import { getOrCreateClientId } from "./crypto.js";

let supabaseInstance = null;

export function getClient() {
  const config = getSupabaseConfig();
  if (!config.url || !config.anonKey) {
    return null;
  }
  if (!supabaseInstance) {
    supabaseInstance = createClient(config.url, config.anonKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false
      }
    });
  }
  return supabaseInstance;
}

export function resetClient() {
  supabaseInstance = null;
}

/**
 * Testa a conexão com o Supabase
 */
export async function testSupabaseConnection(url, anonKey) {
  try {
    const testClient = createClient(url, anonKey, {
      auth: { persistSession: false }
    });
    const start = performance.now();
    // Consulta tabela pública de questões ou chama rpc
    const { data, error } = await testClient.from("questions").select("id").limit(1);
    const latency = Math.round(performance.now() - start);

    if (error && error.code !== "PGRST116" && !error.message.includes("relation")) {
      // Se a tabela não existir ainda, orientamos a rodar o script SQL
      if (error.message.includes("does not exist") || error.code === "42P01") {
        return {
          success: true,
          latency,
          needsSchema: true,
          message: "Conectado ao Supabase! As tabelas ainda não foram criadas. Execute o script supabase_schema.sql no SQL Editor do Supabase."
        };
      }
      return { success: false, error: error.message };
    }

    return {
      success: true,
      latency,
      needsSchema: false,
      message: `Conexão estabelecida com sucesso (${latency}ms)!`
    };
  } catch (err) {
    return { success: false, error: err.message || "Não foi possível conectar ao Supabase." };
  }
}

/**
 * Cria perfil seguro no Supabase via RPC
 */
export async function remoteCreateProfile(profileData, accessCodeHash) {
  const client = getClient();
  if (!client) {
    return { success: false, localOnly: true, message: "Supabase não configurado. Perfil salvo localmente." };
  }

  try {
    const { data, error } = await client.rpc("rpc_create_profile", {
      p_name: profileData.name,
      p_access_code_hash: accessCodeHash,
      p_daily_goal_minutes: profileData.dailyGoalMinutes || 120,
      p_daily_available_hours: profileData.dailyAvailableHours || 2.0,
      p_available_days: profileData.availableDays || ["seg", "ter", "qua", "qui", "sex"],
      p_preferred_roles: profileData.preferredRoles || []
    });

    if (error) {
      // Se a RPC não foi criada ainda no Supabase
      if (error.message.includes("rpc_create_profile") || error.code === "42883") {
        return {
          success: false,
          needsSchema: true,
          error: "A função rpc_create_profile não existe no Supabase. Execute o arquivo supabase_schema.sql no SQL Editor do projeto."
        };
      }
      return { success: false, error: error.message };
    }

    return data;
  } catch (e) {
    return { success: false, error: e.message };
  }
}

/**
 * Autentica perfil existente no Supabase via código de acesso pessoal
 */
export async function remoteAuthenticateProfile(accessCodeHash) {
  const client = getClient();
  if (!client) {
    return { success: false, localOnly: true, error: "Configure a URL e a Chave Anon do Supabase para acessar perfis sincronizados." };
  }

  try {
    const clientId = getOrCreateClientId();
    const { data, error } = await client.rpc("rpc_authenticate_profile", {
      p_access_code_hash: accessCodeHash,
      p_client_id: clientId
    });

    if (error) {
      if (error.message.includes("rpc_authenticate_profile") || error.code === "42883") {
        return {
          success: false,
          needsSchema: true,
          error: "Função de autenticação não encontrada no banco. Execute o arquivo supabase_schema.sql no Supabase."
        };
      }
      return { success: false, error: error.message };
    }

    return data;
  } catch (e) {
    return { success: false, error: e.message };
  }
}

/**
 * Envia dados locais para o Supabase (Push Sync)
 */
export async function syncPush(profileId, sessionToken, localPayload) {
  const client = getClient();
  if (!client || !profileId || !sessionToken) return { success: false, skipped: true };

  try {
    const { data, error } = await client.rpc("rpc_sync_push", {
      p_profile_id: profileId,
      p_session_token: sessionToken,
      p_payload: localPayload
    });

    if (error) throw error;
    clearPendingSync();
    
    // Atualiza data do último sync
    const config = getSupabaseConfig();
    config.lastSyncTime = new Date().toISOString();
    saveSupabaseConfig(config);

    return { success: true, syncedAt: config.lastSyncTime };
  } catch (e) {
    console.warn("Falha no push sync com Supabase:", e.message);
    return { success: false, error: e.message };
  }
}

/**
 * Baixa dados da nuvem para o dispositivo (Pull Sync)
 */
export async function syncPull(profileId, sessionToken) {
  const client = getClient();
  if (!client || !profileId || !sessionToken) return { success: false, skipped: true };

  try {
    const { data, error } = await client.rpc("rpc_sync_pull", {
      p_profile_id: profileId,
      p_session_token: sessionToken
    });

    if (error) throw error;
    return data;
  } catch (e) {
    console.warn("Falha no pull sync com Supabase:", e.message);
    return { success: false, error: e.message };
  }
}

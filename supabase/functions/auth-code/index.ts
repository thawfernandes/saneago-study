// Supabase Edge Function: auth-code
// Valida o código de acesso pessoal no servidor com proteção contra força bruta
// e emite o token de sessão do Saneago Study.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { action, access_code_hash, profile_data, client_id } = await req.json();

    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    if (action === "create") {
      const { data, error } = await supabaseAdmin.rpc("rpc_create_profile", {
        p_name: profile_data.name,
        p_access_code_hash: access_code_hash,
        p_daily_goal_minutes: profile_data.daily_goal_minutes || 120,
        p_daily_available_hours: profile_data.daily_available_hours || 2.0,
        p_available_days: profile_data.available_days || ["seg", "ter", "qua", "qui", "sex"],
        p_preferred_roles: profile_data.preferred_roles || [],
      });

      if (error) throw error;
      return new Response(JSON.stringify(data), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (action === "authenticate") {
      const { data, error } = await supabaseAdmin.rpc("rpc_authenticate_profile", {
        p_access_code_hash: access_code_hash,
        p_client_id: client_id || "anonymous",
      });

      if (error) throw error;
      return new Response(JSON.stringify(data), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({ success: false, error: "Ação não suportada." }),
      { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ success: false, error: err.message || "Erro no servidor de autenticação." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

// ==============================================================================
// SANEAGO STUDY - SERVIÇO DE CRIPTOGRAFIA E CÓDIGOS DE ACESSO
// Geração de códigos de acesso com alta entropia (sem login convencional)
// Hashing com SHA-256 via Web Crypto API nativa do navegador
// ==============================================================================

/**
 * Gera um código de acesso pessoal forte e seguro no formato SANE-XXXX-XXXX-XXXX
 * Utiliza crypto.getRandomValues para alta entropia criptográfica.
 */
export function generatePersonalAccessCode() {
  const chars = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ"; // Sem 0, 1, I, O para evitar confusão visual
  const randomValues = new Uint8Array(12);
  window.crypto.getRandomValues(randomValues);

  let part1 = "";
  let part2 = "";
  let part3 = "";

  for (let i = 0; i < 4; i++) part1 += chars[randomValues[i] % chars.length];
  for (let i = 4; i < 8; i++) part2 += chars[randomValues[i] % chars.length];
  for (let i = 8; i < 12; i++) part3 += chars[randomValues[i] % chars.length];

  return `SANE-${part1}-${part2}-${part3}`;
}

/**
 * Normaliza e valida o formato do código de acesso
 */
export function normalizeAccessCode(code) {
  if (!code) return "";
  let clean = code.trim().toUpperCase().replace(/\s+/g, "");
  if (!clean.startsWith("SANE-") && clean.length === 12) {
    clean = `SANE-${clean.slice(0, 4)}-${clean.slice(4, 8)}-${clean.slice(8, 12)}`;
  }
  return clean;
}

export function isValidAccessCode(code) {
  const normalized = normalizeAccessCode(code);
  const regex = /^SANE-[2-9A-HJ-NP-Z]{4}-[2-9A-HJ-NP-Z]{4}-[2-9A-HJ-NP-Z]{4}$/;
  return regex.test(normalized);
}

/**
 * Calcula o hash SHA-256 do código de acesso usando a Web Crypto API nativa.
 * O código em texto plano JAMAIS é transmitido de forma desprotegida ou salvo em tabelas públicas.
 */
export async function hashAccessCode(code) {
  const normalized = normalizeAccessCode(code);
  const encoder = new TextEncoder();
  const data = encoder.encode(`saneago_salt_v1_${normalized}`);
  const hashBuffer = await window.crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
  return hashHex;
}

/**
 * Gera um identificador único seguro (UUID v4)
 */
export function generateUUID() {
  if (typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  // Fallback seguro usando getRandomValues
  const buf = new Uint8Array(16);
  window.crypto.getRandomValues(buf);
  buf[6] = (buf[6] & 0x0f) | 0x40; // versão 4
  buf[8] = (buf[8] & 0x3f) | 0x80; // variante 10
  const hex = Array.from(buf).map(b => b.toString(16).padStart(2, "0")).join("");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

/**
 * Gera um identificador único de dispositivo/cliente anônimo para proteção contra força bruta
 */
export function getOrCreateClientId() {
  const key = "saneago_client_device_id";
  let id = localStorage.getItem(key);
  if (!id) {
    id = generateUUID();
    localStorage.setItem(key, id);
  }
  return id;
}

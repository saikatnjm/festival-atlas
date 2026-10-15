// Owner login for /admin: a static username + password from environment variables and a signed,
// expiring session cookie (HMAC-SHA256 via Web Crypto). Pure; no imports (unit-tested).

export const ADMIN_COOKIE = "pg_admin";
export const SESSION_TTL_MS = 12 * 60 * 60 * 1000;
/** Shorter passwords are refused at configuration time: the login form is reachable by anyone. */
export const PASSWORD_MIN = 10;

const enc = new TextEncoder();
const hex = (buf: ArrayBuffer) => Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, "0")).join("");

/** Compares two strings without leaking where they differ (time depends only on the longer length). */
export function constantTimeEqual(a: string, b: string): boolean {
  const ab = enc.encode(a);
  const bb = enc.encode(b);
  let diff = ab.length ^ bb.length;
  const n = Math.max(ab.length, bb.length, 1);
  for (let i = 0; i < n; i++) diff |= (ab[i] ?? 0) ^ (bb[i] ?? 0);
  return diff === 0;
}

async function hmac(secret: string, payload: string): Promise<string> {
  const key = await crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return hex(await crypto.subtle.sign("HMAC", key, enc.encode(payload)));
}

/** "expiryMillis.signature": the cookie value. */
export async function makeSession(secret: string, now = Date.now(), ttl = SESSION_TTL_MS): Promise<string> {
  const exp = String(now + ttl);
  return `${exp}.${await hmac(secret, `admin:${exp}`)}`;
}

export async function verifySession(secret: string, token: unknown, now = Date.now()): Promise<boolean> {
  if (!secret || typeof token !== "string") return false;
  const m = /^(\d{10,16})\.([0-9a-f]{64})$/.exec(token);
  if (!m || Number(m[1]) <= now) return false;
  return constantTimeEqual(m[2], await hmac(secret, `admin:${m[1]}`));
}

/** Both fields are always compared, so timing does not reveal which one was wrong. */
export function checkCredentials(user: unknown, pass: unknown, envUser: string, envPass: string): boolean {
  if (typeof user !== "string" || typeof pass !== "string" || !envUser || envPass.length < PASSWORD_MIN) return false;
  const u = constantTimeEqual(user, envUser);
  const p = constantTimeEqual(pass, envPass);
  return u && p;
}

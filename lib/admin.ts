// Server-only admin helpers: who is logged in, and owner-level reads/deletes on Supabase with the
// service-role key (SUPABASE_SERVICE_ROLE_KEY, never NEXT_PUBLIC_, never sent to the browser).
// Used by app/[lang]/admin/page.tsx and app/api/admin/route.ts only.

import { cookies } from "next/headers";
import { ADMIN_COOKIE, PASSWORD_MIN, verifySession } from "./admin-shared";

export * from "./admin-shared";

export function adminEnv() {
  const user = process.env.ADMIN_USER ?? "";
  const pass = process.env.ADMIN_PASSWORD ?? "";
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/+$/, "") ?? "";
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";
  // Sessions are signed with a secret derived from the credentials, so changing the password logs everyone out.
  const secret = process.env.ADMIN_SESSION_SECRET || (user && pass ? `${user}:${pass}` : "");
  return { user, pass, url, key, secret };
}

export const adminConfigured = (): boolean => {
  const e = adminEnv();
  return Boolean(e.user && e.pass.length >= PASSWORD_MIN);
};

export const adminDbConfigured = (): boolean => {
  const e = adminEnv();
  return Boolean(e.url && e.key);
};

/** True when the request carries a valid, unexpired admin session cookie. */
export async function isAdmin(): Promise<boolean> {
  if (!adminConfigured()) return false;
  const token = (await cookies()).get(ADMIN_COOKIE)?.value;
  return verifySession(adminEnv().secret, token);
}

function headers(): Record<string, string> {
  const { key } = adminEnv();
  return { apikey: key, "Content-Type": "application/json", ...(key.startsWith("eyJ") ? { Authorization: `Bearer ${key}` } : {}) };
}

async function sb(path: string, init: RequestInit = {}, extra: Record<string, string> = {}): Promise<Response> {
  const { url } = adminEnv();
  if (!adminDbConfigured()) throw new Error("admin db not configured");
  const res = await fetch(`${url}/rest/v1/${path}`, { ...init, headers: { ...headers(), ...extra }, cache: "no-store" });
  if (!res.ok) throw new Error(`${path.split("?")[0]} ${res.status}`);
  return res;
}

export interface FeedbackEntry {
  id: number;
  created_at: string;
  topic: string;
  contact: string | null;
  message: string;
  page: string | null;
  lang: string;
}

export interface NickRow {
  id: number;
  created_at: string;
  game: string;
  score: number;
  nickname: string;
}

export async function listFeedback(limit = 200): Promise<FeedbackEntry[]> {
  const res = await sb(`feedback?select=id,created_at,topic,contact,message,page,lang&order=created_at.desc&limit=${limit}`);
  return (await res.json()) as FeedbackEntry[];
}

/** Row count via PostgREST's Content-Range ("0-0/123"); `filter` is a raw query fragment such as `created_at=gte.…`. */
export async function countRows(table: string, filter = ""): Promise<number> {
  const res = await sb(`${table}?select=created_at&limit=1${filter ? `&${filter}` : ""}`, {}, { Prefer: "count=exact" });
  const n = Number((res.headers.get("content-range") ?? "").split("/")[1]);
  return Number.isFinite(n) ? n : 0;
}

export async function recentNicknames(limit = 60): Promise<NickRow[]> {
  const res = await sb(`plays?select=id,created_at,game,score,nickname&nickname=not.is.null&order=created_at.desc&limit=${limit}`);
  return (await res.json()) as NickRow[];
}

export interface PlaceRow {
  id: number;
  created_at: string;
  name: string;
  area: string | null;
  city: string;
  country: string;
  lat: number;
  lng: number;
  note: string | null;
  lang: string;
  status: string;
}

export type PlaceStatus = "pending" | "approved" | "rejected";

export async function listPlaces(status: PlaceStatus, limit = 100): Promise<PlaceRow[]> {
  const res = await sb(`places?select=id,created_at,name,area,city,country,lat,lng,note,lang,status&status=eq.${status}&order=created_at.desc&limit=${limit}`);
  return (await res.json()) as PlaceRow[];
}

export async function setPlaceStatus(id: number, status: PlaceStatus): Promise<void> {
  await sb(`places?id=eq.${id}`, { method: "PATCH", body: JSON.stringify({ status }) }, { Prefer: "return=minimal" });
}

export async function deleteFeedback(id: number): Promise<void> {
  await sb(`feedback?id=eq.${id}`, { method: "DELETE" });
}

export async function deleteNickname(nickname: string): Promise<void> {
  await sb(`plays?nickname=eq.${encodeURIComponent(nickname)}`, { method: "DELETE" });
}

/** Removes signals older than `days` (the live board only looks back 36 hours anyway). */
export async function purgeSignals(days: number): Promise<void> {
  const iso = new Date(Date.now() - days * 86_400_000).toISOString();
  await sb(`signals?created_at=lt.${encodeURIComponent(iso)}`, { method: "DELETE" });
}

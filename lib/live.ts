// Live crowd/check-in/love signals via Supabase's REST API (no SDK: two fetch calls).
// Server-side only (used by app/api/live/route.ts). Shared types/helpers live in live-shared.ts.

import type { LiveBoard, SignalKind } from "./live-shared";

export * from "./live-shared";

function config(): { url: string; key: string } | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/+$/, "");
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return url && key ? { url, key } : null;
}

export const liveConfigured = (): boolean => config() !== null;

function headers(key: string): Record<string, string> {
  // Legacy anon keys are JWTs and go in both headers; the newer sb_publishable_ keys use apikey only.
  return { apikey: key, "Content-Type": "application/json", ...(key.startsWith("eyJ") ? { Authorization: `Bearer ${key}` } : {}) };
}

/** Aggregated board from the live_board() SQL function. */
export async function fetchBoard(): Promise<LiveBoard> {
  const c = config();
  if (!c) return {};
  const res = await fetch(`${c.url}/rest/v1/rpc/live_board`, { method: "POST", headers: headers(c.key), body: "{}", cache: "no-store" });
  if (!res.ok) throw new Error(`live_board ${res.status}`);
  const rows = (await res.json()) as { pandal_id: string; crowd_n: number; crowd_avg: string | number | null; here_n: number; love_today: number }[];
  const board: LiveBoard = {};
  for (const r of rows) {
    board[r.pandal_id] = { crowd_n: r.crowd_n, crowd_avg: r.crowd_avg === null ? null : Number(r.crowd_avg), here_n: r.here_n, love_today: r.love_today };
  }
  return board;
}

/**
 * Inserts one signal. A duplicate (same device + pandal + kind + bucket) hits the primary key and
 * comes back as 409, which counts as success: the first report in a bucket wins. A plain insert is
 * used on purpose: ON CONFLICT would need SELECT rights under row-level security.
 */
export async function upsertSignal(row: { device: string; pandal_id: string; kind: SignalKind; value: number; bucket: string }): Promise<void> {
  const c = config();
  if (!c) throw new Error("live not configured");
  const res = await fetch(`${c.url}/rest/v1/signals`, {
    method: "POST",
    headers: { ...headers(c.key), Prefer: "return=minimal" },
    body: JSON.stringify(row), // created_at comes from the database default
    cache: "no-store",
  });
  if (res.status === 409) return;
  if (!res.ok) throw new Error(`signals ${res.status}`);
}

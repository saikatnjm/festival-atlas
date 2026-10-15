// Live crowd/check-in/love signals via Supabase's REST API (no SDK: two fetch calls).
// Server-side only (used by app/api/live/route.ts). Shared types/helpers live in live-shared.ts.

import { isTimingKind, type LiveBoard, type SignalKind, type TimingKind, type Timings } from "./live-shared";

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
  const rows = (await res.json()) as {
    pandal_id: string;
    crowd_n: number;
    crowd_avg: string | number | null;
    here_n: number;
    love_today: number;
    wait_n?: number;
    wait_med?: string | number | null;
  }[];
  const board: LiveBoard = Object.create(null);
  for (const r of rows) {
    if (!/^[a-z0-9-]{3,80}$/.test(r.pandal_id)) continue;
    board[r.pandal_id] = {
      crowd_n: r.crowd_n,
      crowd_avg: r.crowd_avg === null ? null : Number(r.crowd_avg),
      here_n: r.here_n,
      love_today: r.love_today,
      wait_n: r.wait_n ?? 0,
      wait_med: r.wait_med === null || r.wait_med === undefined ? null : Number(r.wait_med),
    };
  }
  return board;
}

/** Today's most-reported anjali/bhog times from the timings_today() SQL function. */
export async function fetchTimings(): Promise<Timings> {
  const c = config();
  if (!c) return {};
  const res = await fetch(`${c.url}/rest/v1/rpc/timings_today`, { method: "POST", headers: headers(c.key), body: "{}", cache: "no-store" });
  if (!res.ok) throw new Error(`timings_today ${res.status}`);
  const rows = (await res.json()) as { pandal_id: string; kind: string; minutes: number; n: number }[];
  const out: Timings = Object.create(null);
  for (const r of rows) {
    if (!/^[a-z0-9-]{3,80}$/.test(r.pandal_id) || !isTimingKind(r.kind)) continue;
    (out[r.pandal_id] ??= {})[r.kind] = { minutes: r.minutes, n: r.n };
  }
  return out;
}

/** Inserts one timing report; a duplicate for the same day is a 409 and counts as "already". */
export async function insertTiming(row: { device: string; pandal_id: string; kind: TimingKind; minutes: number; day: string }): Promise<void> {
  const c = config();
  if (!c) throw new Error("live not configured");
  const res = await fetch(`${c.url}/rest/v1/timings`, { method: "POST", headers: { ...headers(c.key), Prefer: "return=minimal" }, body: JSON.stringify(row), cache: "no-store" });
  if (res.status === 409) return;
  if (!res.ok) throw new Error(`timings ${res.status}`);
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

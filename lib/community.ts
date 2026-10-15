// Server-side access to the plays table and its functions (Supabase REST, no SDK). See supabase/schema.sql.

import { EMPTY_COMMUNITY, LEADERBOARD_GAMES, isGame, isResult, type ActivityRow, type Community, type LeaderRow } from "./community-shared";

export * from "./community-shared";

function config(): { url: string; key: string } | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/+$/, "");
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return url && key ? { url, key } : null;
}

export const communityConfigured = (): boolean => config() !== null;

function headers(key: string): Record<string, string> {
  return { apikey: key, "Content-Type": "application/json", ...(key.startsWith("eyJ") ? { Authorization: `Bearer ${key}` } : {}) };
}

async function rpc<T>(c: { url: string; key: string }, fn: string, args: Record<string, unknown> = {}): Promise<T> {
  const res = await fetch(`${c.url}/rest/v1/rpc/${fn}`, { method: "POST", headers: headers(c.key), body: JSON.stringify(args), cache: "no-store" });
  if (!res.ok) throw new Error(`${fn} ${res.status}`);
  return (await res.json()) as T;
}

/** Stats, leaderboards and the activity feed in one call (the API caches the result at the edge). */
export async function fetchCommunity(): Promise<Community> {
  const c = config();
  if (!c) return EMPTY_COMMUNITY;
  const [statRows, activity, boards] = await Promise.all([
    rpc<{ game: string; result: string; players: number }[]>(c, "community_stats"),
    rpc<ActivityRow[]>(c, "recent_activity", { p_limit: 15 }),
    Promise.all(LEADERBOARD_GAMES.map((g) => rpc<LeaderRow[]>(c, "leaderboard", { p_game: g, p_limit: 20 }))),
  ]);
  // Null-prototype maps: keys come from the database (anyone with the public key can insert rows),
  // so "constructor" or "__proto__" must stay plain data.
  const stats: Community["stats"] = Object.create(null);
  for (const r of statRows) {
    if (!isGame(r.game) || !isResult(r.result)) continue;
    const g = (stats[r.game] ??= Object.create(null));
    g[r.result] = r.players;
  }
  const leaderboard: Community["leaderboard"] = {};
  LEADERBOARD_GAMES.forEach((g, i) => (leaderboard[g] = boards[i].filter((row) => typeof row.nickname === "string" && Number.isFinite(row.score))));
  return { stats, leaderboard, activity: activity.filter((a) => (a.pandal_id === null || isResult(a.pandal_id)) && (a.result === null || isResult(a.result))) };
}

export async function recordPlay(row: { device: string; game: string; result: string | null; score: number; nickname: string | null }): Promise<void> {
  const c = config();
  if (!c) throw new Error("community not configured");
  const res = await fetch(`${c.url}/rest/v1/plays`, { method: "POST", headers: { ...headers(c.key), Prefer: "return=minimal" }, body: JSON.stringify(row), cache: "no-store" });
  if (!res.ok) throw new Error(`plays ${res.status}`);
}

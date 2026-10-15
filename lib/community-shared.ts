// Types and pure helpers for community data (plays, leaderboard, activity). No env, no fetch.

export interface LeaderRow {
  nickname: string;
  score: number;
  at: string;
}

export interface ActivityRow {
  kind: "play" | "here" | "love";
  game: string | null;
  result: string | null;
  pandal_id: string | null;
  nickname: string | null;
  at: string;
}

export interface Community {
  /** players per game → result (distinct devices, last 30 days) */
  stats: Record<string, Record<string, number>>;
  leaderboard: Record<string, LeaderRow[]>;
  activity: ActivityRow[];
}

export const EMPTY_COMMUNITY: Community = { stats: {}, leaderboard: {}, activity: [] };

/** Games whose leaderboards the site shows (score = pandals visited). */
export const LEADERBOARD_GAMES = ["passport"] as const;

export const NICK_MAX = 24;
export const isGame = (v: unknown): v is string => typeof v === "string" && /^[a-z0-9-]{3,40}$/.test(v);
export const isResult = (v: unknown): v is string => typeof v === "string" && /^[a-z0-9-]{1,80}$/.test(v);

/** Nickname for the public board: letters, digits, spaces and a few marks only; trimmed; capped. */
export function cleanNick(raw: unknown): string {
  if (typeof raw !== "string") return "";
  const s = raw
    .replace(/[^\p{L}\p{M}\p{N} .'’-]/gu, "")
    .replace(/\s+/g, " ")
    .trim();
  return Array.from(s).slice(0, NICK_MAX).join("").replace(/্+$/, "").trim();
}

/** Own-property lookup: keys may come from the database, so inherited names like "constructor" never match. */
export function own<T>(map: Record<string, T>, key: string): T | undefined {
  return Object.prototype.hasOwnProperty.call(map, key) ? map[key] : undefined;
}

/** "You and 123 others" numbers for one result: players with this result and their share of the game. */
export function resultShare(stats: Community["stats"], game: string, result: string): { n: number; pct: number } | null {
  const g = own(stats, game);
  if (!g) return null;
  const n = own(g, result) ?? 0;
  const total = Object.values(g).reduce((a, b) => a + b, 0);
  if (!total || !n) return null;
  return { n, pct: Math.round((n / total) * 100) };
}

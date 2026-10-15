// Types and pure helpers for the live board, shared by the API route and the browser. No env, no fetch.

export type SignalKind = "crowd" | "here" | "love";
export const KINDS: SignalKind[] = ["crowd", "here", "love"];

export interface LiveStats {
  crowd_n: number;
  crowd_avg: number | null;
  here_n: number;
  love_today: number;
}
export type LiveBoard = Record<string, LiveStats>;

/** Bucket for a signal: the UTC hour for crowd/here, the Kolkata day for love. */
export function bucketFor(kind: SignalKind, now = new Date()): string {
  if (kind === "love") return new Date(now.getTime() + 330 * 60_000).toISOString().slice(0, 10);
  return now.toISOString().slice(0, 13); // "2026-10-18T14"
}

export const isDevice = (v: unknown): v is string => typeof v === "string" && /^[A-Za-z0-9_-]{16,64}$/.test(v);
export const isPandalId = (v: unknown): v is string => typeof v === "string" && /^[a-z0-9-]{3,80}$/.test(v);

/** 1 quiet, 2 busy, 3 packed, from the average; null when no reports. */
export function crowdLevel(avg: number | null | undefined): 1 | 2 | 3 | null {
  if (avg === null || avg === undefined || Number.isNaN(avg)) return null;
  return avg < 1.5 ? 1 : avg < 2.5 ? 2 : 3;
}

/** "Happening now" ranking: people here, then love today, then crowd reports. */
export function rankBoard(board: LiveBoard, limit = 5): { id: string; stats: LiveStats }[] {
  return Object.entries(board)
    .map(([id, stats]) => ({ id, stats, score: stats.here_n * 3 + stats.love_today + stats.crowd_n }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || a.id.localeCompare(b.id))
    .slice(0, limit)
    .map(({ id, stats }) => ({ id, stats }));
}

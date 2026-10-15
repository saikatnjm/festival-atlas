// Types and pure helpers for the live board, shared by the API route and the browser. No env, no fetch.

export type SignalKind = "crowd" | "here" | "love" | "wait";
export const KINDS: SignalKind[] = ["crowd", "here", "love", "wait"];

/** Queue-wait buckets (value 1–4) in minutes; the last one means "an hour or more". */
export const WAIT_MINUTES = [5, 15, 30, 60] as const;

export type TimingKind = "anjali" | "bhog";
export const TIMING_KINDS: TimingKind[] = ["anjali", "bhog"];

export interface LiveStats {
  crowd_n: number;
  crowd_avg: number | null;
  here_n: number;
  love_today: number;
  wait_n: number;
  /** Median wait bucket (1–4), or null. */
  wait_med: number | null;
}
export type LiveBoard = Record<string, LiveStats>;

export interface TimingStat {
  minutes: number;
  n: number;
}
/** pandal id → kind → most-reported time today */
export type Timings = Record<string, Partial<Record<TimingKind, TimingStat>>>;

/** Calendar day in Kolkata (UTC+5:30), used for one-per-day rules. */
export function kolkataDay(now = new Date()): string {
  return new Date(now.getTime() + 330 * 60_000).toISOString().slice(0, 10);
}

/** Median wait bucket → minutes label, e.g. 2.5 → "15–30". */
export function waitLabel(med: number | null | undefined): string | null {
  if (med === null || med === undefined || Number.isNaN(med)) return null;
  const lo = WAIT_MINUTES[Math.max(0, Math.min(3, Math.floor(med) - 1))];
  const hi = WAIT_MINUTES[Math.max(0, Math.min(3, Math.ceil(med) - 1))];
  if (lo === hi) return lo === 60 ? "60+" : `~${lo}`;
  return `${lo}–${hi}`;
}

/** Minutes after midnight → "9:00 am" / "সকাল ৯:০০". */
export function fmtClock(minutes: number, lang: "bn" | "en"): string {
  const m = Math.max(0, Math.min(1439, Math.round(minutes)));
  const h24 = Math.floor(m / 60);
  const mm = String(m % 60).padStart(2, "0");
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  if (lang === "en") return `${h12}:${mm} ${h24 < 12 ? "am" : "pm"}`;
  const part = h24 < 4 ? "রাত" : h24 < 12 ? "সকাল" : h24 < 16 ? "দুপুর" : h24 < 18 ? "বিকেল" : h24 < 20 ? "সন্ধে" : "রাত";
  const bn = (s: string) => s.replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[Number(d)]);
  return `${part} ${bn(`${h12}:${mm}`)}`;
}

export const isTimingKind = (v: unknown): v is TimingKind => v === "anjali" || v === "bhog";

/** Bucket for a signal: the UTC hour for crowd/here/wait, the Kolkata day for love. */
export function bucketFor(kind: SignalKind, now = new Date()): string {
  if (kind === "love") return kolkataDay(now);
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

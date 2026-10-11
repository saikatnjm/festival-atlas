// Pure, dependency-free helpers for the activities (unit-tested in tests/).

/** Small deterministic PRNG (mulberry32): same seed, same sequence. */
export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Fisher-Yates shuffle that always gives the same order for the same seed. */
export function shuffleSeeded<T>(items: readonly T[], seed: number): T[] {
  const rand = mulberry32(seed);
  const out = items.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    const tmp = out[i];
    out[i] = out[j];
    out[j] = tmp;
  }
  return out;
}

/** Number of completed rows, columns and the two diagonals on a size x size card. */
export function countLines(marked: readonly boolean[], size: number): number {
  let lines = 0;
  for (let r = 0; r < size; r++) {
    let full = true;
    for (let c = 0; c < size; c++) if (!marked[r * size + c]) full = false;
    if (full) lines++;
  }
  for (let c = 0; c < size; c++) {
    let full = true;
    for (let r = 0; r < size; r++) if (!marked[r * size + c]) full = false;
    if (full) lines++;
  }
  let d1 = true;
  let d2 = true;
  for (let i = 0; i < size; i++) {
    if (!marked[i * size + i]) d1 = false;
    if (!marked[i * size + (size - 1 - i)]) d2 = false;
  }
  return lines + (d1 ? 1 : 0) + (d2 ? 1 : 0);
}

/** Adds up weighted points per key; the highest total wins and ties go to whichever comes first in `order`. */
export function scoreWeighted<K extends string>(picks: readonly Partial<Record<K, number>>[], order: readonly K[]): K {
  let best = order[0];
  let bestTotal = -1;
  for (const key of order) {
    let total = 0;
    for (const pick of picks) total += pick[key] ?? 0;
    if (total > bestTotal) {
      best = key;
      bestTotal = total;
    }
  }
  return best;
}

/** All keys, best first. Same tie-break as scoreWeighted (earlier in `order` wins), so ranking[0] is the winner. */
export function rankWeighted<K extends string>(picks: readonly Partial<Record<K, number>>[], order: readonly K[]): K[] {
  const totals = order.map((k, i) => ({ k, i, t: picks.reduce((sum, p) => sum + (p[k] ?? 0), 0) }));
  totals.sort((a, b) => b.t - a.t || a.i - b.i);
  return totals.map((x) => x.k);
}

export interface Meters {
  legs: number;
  mood: number;
  battery: number;
}

export const METER_MAX = 5;
export const METER_START = 3;

const clampMeter = (n: number) => Math.max(0, Math.min(METER_MAX, n));

/** Applies a choice's effects, keeping every meter between 0 and METER_MAX. */
export function applyMeters(m: Meters, d: Partial<Meters>): Meters {
  return {
    legs: clampMeter(m.legs + (d.legs ?? 0)),
    mood: clampMeter(m.mood + (d.mood ?? 0)),
    battery: clampMeter(m.battery + (d.battery ?? 0)),
  };
}

export type PathOutcome = "route-master" | "bhog-hero" | "dead-phone" | "tired-legs" | "lost-friends";

/** A meter at zero decides the ending (lowest wins; ties: battery, legs, mood). Otherwise the total decides. */
export function pathOutcome(m: Meters): PathOutcome {
  const zeroes: [PathOutcome, number][] = [
    ["dead-phone", m.battery],
    ["tired-legs", m.legs],
    ["lost-friends", m.mood],
  ];
  let worst: [PathOutcome, number] | null = null;
  for (const z of zeroes) if (z[1] <= 0 && (worst === null || z[1] < worst[1])) worst = z;
  if (worst) return worst[0];
  return m.legs + m.mood + m.battery >= 10 ? "route-master" : "bhog-hero";
}

/** Bangla digits, so numbers match the surrounding text. */
export const bn = (n: number): string => String(n).replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[Number(d)]);

export type BingoTier = "one-line" | "few-lines" | "bingo-boss";

/** Returns null until at least one line is complete. */
export function bingoTier(lines: number): BingoTier | null {
  if (lines >= 4) return "bingo-boss";
  if (lines >= 2) return "few-lines";
  if (lines >= 1) return "one-line";
  return null;
}

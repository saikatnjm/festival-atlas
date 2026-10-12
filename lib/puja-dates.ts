// Durga Puja 2026 day calendar (same sources as data/events/events.ts) and the "Puja mode" window.
// Pure; no "@/" value imports (used by tests and by the inline theme script).

import type { Region } from "../data/events/events";

export interface PujaDay {
  id: "panchami" | "shashthi" | "saptami" | "ashtami" | "navami" | "dashami";
  bn: string;
  en: string;
}

export const PUJA_DAYS: PujaDay[] = [
  { id: "panchami", bn: "পঞ্চমী", en: "Panchami" },
  { id: "shashthi", bn: "ষষ্ঠী", en: "Shashthi" },
  { id: "saptami", bn: "সপ্তমী", en: "Saptami" },
  { id: "ashtami", bn: "অষ্টমী", en: "Ashtami" },
  { id: "navami", bn: "নবমী", en: "Navami" },
  { id: "dashami", bn: "দশমী", en: "Dashami" },
];

/**
 * Date of each day per region. WB follows a Drik Panchang-based report ("reported").
 * BD: Shashthi 16 Oct and Dashami 21 Oct (News On AIR), Mahanabami 20 Oct (government holiday
 * notification); Saptami/Ashtami in between are estimated (see ESTIMATED).
 */
export const PUJA_2026: Record<Region, Record<PujaDay["id"], string>> = {
  wb: { panchami: "2026-10-16", shashthi: "2026-10-17", saptami: "2026-10-18", ashtami: "2026-10-19", navami: "2026-10-20", dashami: "2026-10-21" },
  bd: { panchami: "2026-10-15", shashthi: "2026-10-16", saptami: "2026-10-17", ashtami: "2026-10-18", navami: "2026-10-20", dashami: "2026-10-21" },
};

/** Days whose date is inferred rather than taken from a source. */
export const ESTIMATED: Record<Region, PujaDay["id"][]> = { wb: [], bd: ["panchami", "saptami", "ashtami"] };

/** Puja mode (red-and-gold theme by default) runs from Mahalaya to Dashami. */
export const PUJA_MODE_WINDOW = { start: "2026-10-10", end: "2026-10-21" };

const OFFSET: Record<Region, number> = { wb: 330, bd: 360 };

/** Today's calendar date (YYYY-MM-DD) in the region's time zone. */
export function localDate(now: Date, region: Region): string {
  const d = new Date(now.getTime() + OFFSET[region] * 60_000);
  return d.toISOString().slice(0, 10);
}

function dayDiff(a: string, b: string): number {
  return Math.round((Date.parse(`${b}T00:00:00Z`) - Date.parse(`${a}T00:00:00Z`)) / 86_400_000);
}

export type PujaPhase = { kind: "before"; days: number; day: PujaDay } | { kind: "during"; day: PujaDay } | { kind: "after"; days: number };

/** Where today sits in the Puja calendar: counting down to Shashthi, a Puja day, or after Dashami. */
export function pujaPhase(now: Date, region: Region): PujaPhase {
  const today = localDate(now, region);
  const cal = PUJA_2026[region];
  const shashthi = PUJA_DAYS[1];
  if (today < cal.shashthi) return { kind: "before", days: dayDiff(today, cal.shashthi), day: shashthi };
  if (today > cal.dashami) return { kind: "after", days: dayDiff(cal.dashami, today) };
  // Between Shashthi and Dashami: the latest day whose date is <= today (a tithi can span two days).
  let current: PujaDay = shashthi;
  for (const d of PUJA_DAYS) if (cal[d.id] <= today) current = d;
  return { kind: "during", day: current };
}

export function inPujaMode(today: string): boolean {
  return today >= PUJA_MODE_WINDOW.start && today <= PUJA_MODE_WINDOW.end;
}

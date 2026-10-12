// Pure helpers for the curated event list (data/events/events.ts). No "@/" value imports (tested directly).

import type { FestEvent, Region } from "../data/events/events";

export type EventStatus = "upcoming" | "live" | "past" | "unconfirmed";

/** UTC offset in minutes for each region's local calendar dates. */
const OFFSET: Record<Region, number> = { wb: 330, bd: 360 };

function localMidnight(date: string, region: Region, addDays = 0): number {
  const [y, m, d] = date.split("-").map(Number);
  return Date.UTC(y, m - 1, d + addDays) - OFFSET[region] * 60_000;
}

/** Upcoming, live or past, judged in the event's own time zone. Unconfirmed events never show as live. */
export function eventStatus(e: FestEvent, now: Date): EventStatus {
  if (e.confidence === "unconfirmed") return "unconfirmed";
  const t = now.getTime();
  if (t < localMidnight(e.start, e.region)) return "upcoming";
  if (t < localMidnight(e.end ?? e.start, e.region, 1)) return "live";
  return "past";
}

/** Whole days until the start (0 when live or past). */
export function daysUntil(e: FestEvent, now: Date): number {
  const ms = localMidnight(e.start, e.region) - now.getTime();
  return ms > 0 ? Math.ceil(ms / 86_400_000) : 0;
}

const RANK: Record<EventStatus, number> = { live: 0, upcoming: 1, unconfirmed: 2, past: 3 };

/**
 * "What's happening now": live first, then soonest upcoming, then unconfirmed, then most recent past.
 * Pandal highlights are grouped after the main news so one region's long list doesn't crowd out the other.
 */
export function trending(list: readonly FestEvent[], now: Date, region?: Region, limit = 6): FestEvent[] {
  const pool = list.filter((e) => !region || e.region === region);
  const key = (e: FestEvent) => {
    const s = eventStatus(e, now);
    const t = localMidnight(e.start, e.region);
    // A long-running notice (e.g. "no carnival this year") shouldn't sit above the next real happening.
    const rank = s === "live" && e.kind === "notice" ? RANK.upcoming + 0.5 : RANK[s];
    return { s: rank, k: e.kind === "pandal" ? 1 : 0, t: s === "past" ? -t : t };
  };
  return pool
    .map((e) => ({ e, k: key(e) }))
    .sort((a, b) => a.k.s - b.k.s || a.k.k - b.k.k || a.k.t - b.k.t || a.e.id.localeCompare(b.e.id))
    .slice(0, limit)
    .map((x) => x.e);
}

/** Validation used by tests: every rule from the data file's header. Returns a list of problems. */
export function checkEvents(list: readonly FestEvent[]): string[] {
  const problems: string[] = [];
  const ids = new Set<string>();
  const iso = /^\d{4}-\d{2}-\d{2}$/;
  for (const e of list) {
    if (ids.has(e.id)) problems.push(`${e.id}: duplicate id`);
    ids.add(e.id);
    if (!iso.test(e.start) || (e.end && !iso.test(e.end))) problems.push(`${e.id}: bad date`);
    if (e.end && e.end < e.start) problems.push(`${e.id}: end before start`);
    if (!iso.test(e.lastVerified)) problems.push(`${e.id}: bad lastVerified`);
    if (!e.title.bn || !e.title.en || !e.summary.bn || !e.summary.en) problems.push(`${e.id}: missing text`);
    if (e.sources.length === 0) problems.push(`${e.id}: no source`);
    for (const s of e.sources) {
      if (!/^https:\/\//.test(s.url)) problems.push(`${e.id}: source must be https`);
      if (!iso.test(s.date)) problems.push(`${e.id}: source date missing`);
      if (s.date > e.lastVerified) problems.push(`${e.id}: source newer than lastVerified`);
    }
  }
  return problems;
}

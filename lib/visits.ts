// "ঘুরেছি" ticks: which pandals the player has visited this year. Stored only in this browser
// (localStorage); travels in a passport link only when the player shares one. Pure helpers are
// exported for tests; no "@/" value imports.

export interface Visit {
  id: string;
  /** ISO date (YYYY-MM-DD) of the tick, in the device's local time. */
  on: string;
}

export const VISITS_KEY = "fa:visited";
export const VISITS_MAX = 120;

// In-memory copy so ticks still work for this page view when storage is blocked.
let memory: Visit[] | null = null;

const ID_RE = /^[a-z0-9-]{3,80}$/;

export function todayLocal(now = new Date()): string {
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

/** Validates anything (stored JSON, URL input) into a clean, de-duplicated visit list. */
export function toVisits(v: unknown): Visit[] {
  if (!Array.isArray(v)) return [];
  const seen = new Set<string>();
  const out: Visit[] = [];
  for (const x of v) {
    const id = typeof x === "string" ? x : x && typeof x === "object" ? (x as { id?: unknown }).id : undefined;
    const on = x && typeof x === "object" ? (x as { on?: unknown }).on : undefined;
    if (typeof id !== "string" || !ID_RE.test(id) || seen.has(id)) continue;
    seen.add(id);
    out.push({ id, on: typeof on === "string" && /^\d{4}-\d{2}-\d{2}$/.test(on) ? on : todayLocal() });
    if (out.length >= VISITS_MAX) break;
  }
  return out;
}

export function toggleVisit(list: readonly Visit[], id: string, on = todayLocal()): Visit[] {
  if (!ID_RE.test(id)) return [...list];
  return list.some((v) => v.id === id) ? list.filter((v) => v.id !== id) : [...list, { id, on }].slice(-VISITS_MAX);
}

/** Compact form for links: "id1,id2" (dates are dropped; the recipient sees the same ticks). */
export function visitsToQuery(list: readonly Visit[]): string {
  return list.map((v) => v.id).join(",");
}
export function visitsFromQuery(q: string | null): Visit[] {
  return toVisits((q ?? "").split(",").filter(Boolean));
}

export function loadVisits(): Visit[] {
  try {
    const raw = window.localStorage.getItem(VISITS_KEY);
    return raw ? toVisits(JSON.parse(raw)) : (memory ?? []);
  } catch {
    return memory ?? [];
  }
}

export function saveVisits(list: readonly Visit[]): void {
  const clean = toVisits(list);
  memory = clean;
  try {
    window.localStorage.setItem(VISITS_KEY, JSON.stringify(clean));
  } catch {
    // Storage blocked: the in-memory copy is used instead.
  } finally {
    window.dispatchEvent(new Event("fa:visits"));
  }
}

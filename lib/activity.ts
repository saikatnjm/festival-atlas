// On-device activity log ("my Puja"): postcards made, pandals ticked, games played, reports sent.
// localStorage only; nothing here is ever sent anywhere. Pure helpers (unit-tested) + a tiny store.

export type ActivityKind = "postcard" | "visit" | "play" | "report" | "greeting";

export interface ActivityEvent {
  kind: ActivityKind;
  /** Pandal id, game id or greeting day, when there is one. */
  id?: string;
  /** Short human label captured at the time (result title, report kind…). */
  label?: string;
  /** Epoch milliseconds. */
  at: number;
}

export const ACTIVITY_KEY = "fa:log";
export const ACTIVITY_MAX = 300;

const KINDS: readonly ActivityKind[] = ["postcard", "visit", "play", "report", "greeting"];
const isKind = (v: unknown): v is ActivityKind => typeof v === "string" && (KINDS as readonly string[]).includes(v);

/** Validates stored JSON into a clean list (newest last), dropping anything malformed. */
export function toActivity(v: unknown): ActivityEvent[] {
  if (!Array.isArray(v)) return [];
  const out: ActivityEvent[] = [];
  for (const x of v) {
    if (!x || typeof x !== "object") continue;
    const e = x as Record<string, unknown>;
    if (!isKind(e.kind) || typeof e.at !== "number" || !Number.isFinite(e.at)) continue;
    const ev: ActivityEvent = { kind: e.kind, at: e.at };
    if (typeof e.id === "string" && e.id.length <= 80) ev.id = e.id;
    if (typeof e.label === "string" && e.label.length <= 120) ev.label = e.label;
    out.push(ev);
  }
  return out.slice(-ACTIVITY_MAX);
}

export function loadActivity(): ActivityEvent[] {
  try {
    return toActivity(JSON.parse(window.localStorage.getItem(ACTIVITY_KEY) ?? "[]"));
  } catch {
    return [];
  }
}

export function logActivity(e: Omit<ActivityEvent, "at">): void {
  try {
    const list = [...loadActivity(), { ...e, at: Date.now() }].slice(-ACTIVITY_MAX);
    window.localStorage.setItem(ACTIVITY_KEY, JSON.stringify(list));
  } catch {
    // Private mode or storage full: the log is a convenience, not a requirement.
  }
}

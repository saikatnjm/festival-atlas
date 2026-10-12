// Optional player profile (name/nickname and a few fun details). Stored only in this browser
// (localStorage) and never sent anywhere. Pure helpers are exported for tests; no "@/" value imports.

import type { Lang } from "./i18n";

export const ACTIVITY_IDS = ["hopping", "bhog", "adda", "anjali", "photos", "dhak"] as const;
export const ROLE_IDS = ["leader", "planner", "lost", "foodie", "late", "photographer"] as const;
export const MOOD_IDS = ["hype", "chill", "sentimental", "sleepy"] as const;
export type ActivityId = (typeof ACTIVITY_IDS)[number];
export type RoleId = (typeof ROLE_IDS)[number];
export type MoodId = (typeof MOOD_IDS)[number];

export interface Profile {
  name?: string;
  city?: string;
  activity?: ActivityId;
  role?: RoleId;
  mood?: MoodId;
}

export const NAME_MAX = 24;
export const CITY_MAX = 28;
const STORE_KEY = "fa:me";

/** Splits into user-perceived characters so Bangla vowel signs are never cut off. */
function graphemes(s: string): string[] {
  const Seg = (Intl as unknown as { Segmenter?: new (l?: string, o?: { granularity: string }) => { segment(t: string): Iterable<{ segment: string }> } }).Segmenter;
  if (Seg) return Array.from(new Seg(undefined, { granularity: "grapheme" }).segment(s), (x) => x.segment);
  return Array.from(s);
}

/** Trims, collapses spaces, removes markup/control characters and limits the length. */
export function cleanText(raw: unknown, max: number): string {
  if (typeof raw !== "string") return "";
  const s = raw
    .replace(/[\u0000-\u001f\u007f<>{}"`\\]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  const g = graphemes(s);
  // Older ICU splits conjuncts at the virama; never leave a dangling one after cutting.
  return (g.length > max ? g.slice(0, max).join("").replace(/্+$/, "") : s).trim();
}

export const cleanName = (raw: unknown) => cleanText(raw, NAME_MAX);

const BN_VOWEL_END = /[অ-ঔা-ৌৗ]$/; // independent vowels and vowel signs
const BN_SCRIPT = /[ঀ-৿]/;

/**
 * Possessive form: "তন্ময়ের", "পিয়ার", "Rini-র", "Pintu’s", "James’".
 * Without a name: "তোমার" / "Your".
 */
export function possessive(name: string | undefined, lang: Lang): string {
  const n = cleanName(name);
  if (!n) return lang === "bn" ? "তোমার" : "Your";
  if (lang === "en") return /s$/i.test(n) ? `${n}’` : `${n}’s`;
  if (BN_SCRIPT.test(n.slice(-1))) {
    if (BN_VOWEL_END.test(n)) return `${n}র`;
    if (n.endsWith("ৎ")) return `${n.slice(0, -1)}তের`; // বিশ্বজিৎ → বিশ্বজিতের
    if (/[ঀ-ঃ্]$/.test(n)) return `${n}-এর`; // ends in a sign that can't take a vowel sign
    return `${n}ের`;
  }
  return /[aeiouy]$/i.test(n) ? `${n}-র` : `${n}-এর`;
}

/** The name, or a friendly stand-in when skipped. */
export function nameOr(name: string | undefined, lang: Lang): string {
  return cleanName(name) || (lang === "bn" ? "বন্ধু" : "friend");
}

/** Small deterministic hash (FNV-1a) used for seeds. */
export function hashString(s: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

function oneOf<T extends string>(list: readonly T[], v: unknown): T | undefined {
  return typeof v === "string" && (list as readonly string[]).includes(v) ? (v as T) : undefined;
}

/** Validates anything (stored JSON, URL input) into a safe profile. */
export function toProfile(v: unknown): Profile {
  if (!v || typeof v !== "object") return {};
  const o = v as Record<string, unknown>;
  const p: Profile = {};
  const name = cleanName(o.name);
  const city = cleanText(o.city, CITY_MAX);
  if (name) p.name = name;
  if (city) p.city = city;
  const a = oneOf(ACTIVITY_IDS, o.activity);
  const r = oneOf(ROLE_IDS, o.role);
  const m = oneOf(MOOD_IDS, o.mood);
  if (a) p.activity = a;
  if (r) p.role = r;
  if (m) p.mood = m;
  return p;
}

// In-memory copy, so personalisation still works for this page view when storage is blocked.
let memory: Profile | null = null;

export function loadProfile(): Profile {
  try {
    const raw = window.localStorage.getItem(STORE_KEY);
    return raw ? toProfile(JSON.parse(raw)) : (memory ?? {});
  } catch {
    return memory ?? {};
  }
}

export function saveProfile(p: Profile): void {
  const clean = toProfile(p);
  memory = clean;
  try {
    if (Object.keys(clean).length === 0) window.localStorage.removeItem(STORE_KEY);
    else window.localStorage.setItem(STORE_KEY, JSON.stringify(clean));
  } catch {
    // Storage blocked (private mode): the in-memory copy is used instead.
  } finally {
    window.dispatchEvent(new Event("fa:profile"));
  }
}

/** Marks that the player answered or skipped the name prompt in this tab, so it isn't asked again. */
export function markAsked(): void {
  try {
    window.sessionStorage.setItem("fa:asked", "1");
  } catch {
    // ignore
  }
}
export function wasAsked(): boolean {
  try {
    return window.sessionStorage.getItem("fa:asked") === "1";
  } catch {
    return false;
  }
}

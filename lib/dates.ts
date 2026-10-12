import type { Lang } from "./i18n";

// Local digit helper (same as lib/i18n num): keeps this file free of value imports so tests can load it.
const BN_DIGITS = "০১২৩৪৫৬৭৮৯";
const num = (n: number, lang: Lang): string => (lang === "bn" ? String(n).replace(/\d/g, (d) => BN_DIGITS[Number(d)]) : String(n));

// Own month names (not Intl), so server and browser always print the same text (no hydration mismatch).
const MONTHS: Record<Lang, string[]> = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  bn: ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"],
};

const WEEKDAYS: Record<Lang, string[]> = {
  en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  bn: ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"],
};

function parts(iso: string): { d: number; m: number } {
  const [, m, d] = iso.split("-").map(Number);
  return { d, m: m - 1 };
}

/** "Saturday, 17 Oct" / "শনিবার, ১৭ অক্টোবর". */
export function fmtDateWithDay(iso: string, lang: Lang): string {
  const [y, m, d] = iso.split("-").map(Number);
  const wd = new Date(Date.UTC(y, m - 1, d)).getUTCDay();
  return `${WEEKDAYS[lang][wd]}, ${fmtDate(iso, lang)}`;
}

/** "17 Oct" / "১৭ অক্টোবর"; a range when `end` differs: "17–21 Oct". */
export function fmtDate(start: string, lang: Lang, end?: string): string {
  const a = parts(start);
  const one = (x: { d: number; m: number }) => `${num(x.d, lang)} ${MONTHS[lang][x.m]}`;
  if (!end || end === start) return one(a);
  const b = parts(end);
  if (a.m === b.m) return `${num(a.d, lang)}–${one(b)}`;
  return `${one(a)} – ${one(b)}`;
}

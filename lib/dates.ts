import { num, type Lang } from "./i18n";

// Own month names (not Intl), so server and browser always print the same text (no hydration mismatch).
const MONTHS: Record<Lang, string[]> = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  bn: ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"],
};

function parts(iso: string): { d: number; m: number } {
  const [, m, d] = iso.split("-").map(Number);
  return { d, m: m - 1 };
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

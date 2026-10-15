// The "Pujo menu": Durga Puja is live; the rest are planned sections. Each entry carries only a
// seasonal hint (lunar month / rough Gregorian window), never a specific date we have not sourced.

import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

export interface PujaEntry {
  id: string;
  icon: string;
  name: L;
  /** When it falls, roughly. */
  when: L;
}

// Only the two pujas that follow Durga Puja are announced for now; add more here when their sections are planned.
export const UPCOMING_PUJAS: readonly PujaEntry[] = [
  { id: "lakshmi", icon: "🌕", name: l("কোজাগরী লক্ষ্মীপুজো", "Kojagori Lakshmi Puja"), when: l("দশমীর পরের পূর্ণিমা, অক্টোবর", "The full moon after Dashami, October") },
  { id: "kali", icon: "🕯️", name: l("কালীপুজো ও দীপাবলি", "Kali Puja & Diwali"), when: l("কার্তিক অমাবস্যা, নভেম্বর", "Kartik new moon, November") },
];

export const isPujaId = (v: unknown): v is string => typeof v === "string" && UPCOMING_PUJAS.some((p) => p.id === v);

// The "Pujo menu": Durga Puja is live; entries with `href` have their own page, the rest are planned
// sections. Each planned entry carries only a seasonal hint, never a specific date we have not sourced.

import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

export interface PujaEntry {
  id: string;
  icon: string;
  name: L;
  /** When it falls, roughly. */
  when: L;
  /** Set once the puja has its own page; the menu then links to it as live. */
  href?: string;
}

// Pujas after Durga Puja, in calendar order; add more here when their sections are planned.
export const UPCOMING_PUJAS: readonly PujaEntry[] = [
  { id: "kali", icon: "🕯️", name: l("কালীপুজো ও দীপাবলি", "Kali Puja & Diwali"), when: l("কার্তিক অমাবস্যা, নভেম্বর", "Kartik new moon, November"), href: "/kali-puja-2026" },
  { id: "jagaddhatri", icon: "🏮", name: l("জগদ্ধাত্রী পুজো", "Jagaddhatri Puja"), when: l("কার্তিক শুক্লা নবমী, নভেম্বর", "Kartik shukla Navami, November") },
];

export const isPujaId = (v: unknown): v is string => typeof v === "string" && UPCOMING_PUJAS.some((p) => p.id === v);

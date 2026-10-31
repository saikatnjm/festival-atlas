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
  { id: "jagaddhatri", icon: "🏮", name: l("জগদ্ধাত্রী পুজো", "Jagaddhatri Puja"), when: l("কার্তিক শুক্লা নবমী, নভেম্বর", "Kartik shukla Navami, November"), href: "/jagaddhatri-puja-2026" },
  { id: "calendar", icon: "📅", name: l("পুজোর ক্যালেন্ডার ২০২৭", "Festival calendar 2027"), when: l("সারা বছর", "All year"), href: "/calendar-2027" },
  { id: "ekadashi", icon: "🪔", name: l("একাদশী ২০২৭", "Ekadashi 2027"), when: l("মাসে দু’বার", "Twice a month"), href: "/ekadashi-2027" },
  { id: "saraswati", icon: "📚", name: l("সরস্বতী পুজো", "Saraswati Puja"), when: l("মাঘ শুক্লা পঞ্চমী, ফেব্রুয়ারি", "Magh shukla Panchami, February"), href: "/saraswati-puja-2027" },
  { id: "shivratri", icon: "🔱", name: l("শিবরাত্রি", "Shivratri"), when: l("ফাল্গুন, মার্চ", "Phalgun, March"), href: "/shivratri-2027" },
  { id: "dol", icon: "🎨", name: l("দোলযাত্রা", "Dol Jatra"), when: l("ফাল্গুনী পূর্ণিমা, মার্চ", "Falgun full moon, March"), href: "/dol-purnima-2027" },
  { id: "noboborsho", icon: "🎉", name: l("পয়লা বৈশাখ", "Poila Boishakh"), when: l("এপ্রিলের মাঝামাঝি", "Mid-April"), href: "/poila-boishakh-2027" },
];

export const isPujaId = (v: unknown): v is string => typeof v === "string" && UPCOMING_PUJAS.some((p) => p.id === v);

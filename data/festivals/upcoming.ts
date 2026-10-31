// The main festivals after Durga Puja 2026, in date order, for the home countdown and the "Coming up"
// strip. Every date is the one on our sourced festival pages (Drik Panchang, Kolkata; see each page and
// data/festivals/calendar-2027.ts). Data-free (type imports only) so client components can use it.

import type { L } from "@/lib/i18n";

export interface Upcoming {
  /** ISO date (West Bengal); `end` for multi-day festivals. */
  date: string;
  end?: string;
  icon: string;
  name: L;
  href: string;
}

const l = (bn: string, en: string): L => ({ bn, en });

export const UPCOMING: Upcoming[] = [
  { date: "2026-11-08", icon: "🌑", name: l("কালীপুজো", "Kali Puja"), href: "/kali-puja-2026" },
  { date: "2026-11-11", icon: "🧿", name: l("ভাইফোঁটা", "Bhai Phota"), href: "/greetings/bhaiphota" },
  { date: "2026-11-19", icon: "🏮", name: l("জগদ্ধাত্রী পুজো", "Jagaddhatri Puja"), href: "/jagaddhatri-puja-2026" },
  { date: "2027-02-11", icon: "📚", name: l("সরস্বতী পুজো", "Saraswati Puja"), href: "/saraswati-puja-2027" },
  { date: "2027-03-06", icon: "🔱", name: l("শিবরাত্রি", "Shivratri"), href: "/shivratri-2027" },
  { date: "2027-03-22", icon: "🎨", name: l("দোল", "Dol"), href: "/dol-purnima-2027" },
  { date: "2027-04-15", icon: "🎉", name: l("পয়লা বৈশাখ", "Poila Boishakh"), href: "/poila-boishakh-2027" },
  { date: "2027-07-05", icon: "🛕", name: l("রথযাত্রা", "Rath Yatra"), href: "/calendar-2027" },
  { date: "2027-08-25", icon: "🪈", name: l("জন্মাষ্টমী", "Janmashtami"), href: "/calendar-2027" },
  { date: "2027-09-29", icon: "🌅", name: l("মহালয়া", "Mahalaya"), href: "/durga-puja-2027" },
  { date: "2027-10-05", end: "2027-10-10", icon: "🥁", name: l("দুর্গাপুজো", "Durga Puja"), href: "/durga-puja-2027" },
  { date: "2027-10-14", icon: "🪷", name: l("কোজাগরী লক্ষ্মীপুজো", "Kojagori Lakshmi Puja"), href: "/calendar-2027" },
  { date: "2027-10-28", icon: "🌑", name: l("কালীপুজো", "Kali Puja"), href: "/calendar-2027" },
];

/** The next `n` entries that haven't ended by `today` (YYYY-MM-DD), from a date-sorted list. */
export function nextUp<T extends { date: string; end?: string }>(list: readonly T[], today: string, n: number): T[] {
  return list.filter((u) => (u.end ?? u.date) >= today).slice(0, n);
}

/** Whole days from `today` to `date` (both YYYY-MM-DD; calendar arithmetic only). */
export function daysUntil(today: string, date: string): number {
  return Math.round((Date.parse(`${date}T00:00:00Z`) - Date.parse(`${today}T00:00:00Z`)) / 86_400_000);
}

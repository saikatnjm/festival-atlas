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

export const UPCOMING_PUJAS: readonly PujaEntry[] = [
  { id: "lakshmi", icon: "🌕", name: l("কোজাগরী লক্ষ্মীপুজো", "Kojagori Lakshmi Puja"), when: l("দশমীর পরের পূর্ণিমা, অক্টোবর", "The full moon after Dashami, October") },
  { id: "kali", icon: "🕯️", name: l("কালীপুজো ও দীপাবলি", "Kali Puja & Diwali"), when: l("কার্তিক অমাবস্যা, নভেম্বর", "Kartik new moon, November") },
  { id: "jagaddhatri", icon: "🦁", name: l("জগদ্ধাত্রী পুজো", "Jagaddhatri Puja"), when: l("কার্তিক শুক্লা নবমী, নভেম্বর (চন্দননগর!)", "Kartik Shukla Navami, November (Chandannagar!)") },
  { id: "saraswati", icon: "📚", name: l("সরস্বতী পুজো", "Saraswati Puja"), when: l("বসন্ত পঞ্চমী, জানুয়ারি–ফেব্রুয়ারি", "Basant Panchami, January–February") },
  { id: "shivratri", icon: "🔱", name: l("শিবরাত্রি", "Shivratri"), when: l("ফাল্গুন, ফেব্রুয়ারি–মার্চ", "Phalgun, February–March") },
  { id: "dol", icon: "🎨", name: l("দোল ও হোলি", "Dol & Holi"), when: l("ফাল্গুনী পূর্ণিমা, মার্চ", "Phalgun full moon, March") },
  { id: "poila-boishakh", icon: "🌾", name: l("পয়লা বৈশাখ", "Pohela Boishakh"), when: l("১৪–১৫ এপ্রিল", "14–15 April") },
  { id: "rath", icon: "🛞", name: l("রথযাত্রা", "Rath Yatra"), when: l("আষাঢ় শুক্লা দ্বিতীয়া, জুন–জুলাই", "Ashadha Shukla Dwitiya, June–July") },
  { id: "janmashtami", icon: "🦚", name: l("জন্মাষ্টমী", "Janmashtami"), when: l("ভাদ্র, আগস্ট–সেপ্টেম্বর", "Bhadra, August–September") },
  { id: "ekadashi", icon: "🌙", name: l("একাদশী", "Ekadashi"), when: l("প্রতি পক্ষের একাদশ তিথি, উপবাসের দিন", "The eleventh tithi of every fortnight, a fasting day") },
  { id: "purnima", icon: "🌝", name: l("পূর্ণিমা ও অমাবস্যা", "Purnima & Amavasya"), when: l("মাসের তিথি-ক্যালেন্ডার", "The month's tithi calendar") },
];

export const isPujaId = (v: unknown): v is string => typeof v === "string" && UPCOMING_PUJAS.some((p) => p.id === v);

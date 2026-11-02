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
  { date: "2026-11-06", icon: "🪙", name: l("ধনতেরাস", "Dhanteras"), href: "/dhanteras-2026" },
  { date: "2026-11-08", icon: "🌑", name: l("কালীপুজো", "Kali Puja"), href: "/kali-puja-2026" },
  { date: "2026-11-11", icon: "🧿", name: l("ভাইফোঁটা", "Bhai Phota"), href: "/greetings/bhaiphota" },
  { date: "2026-11-15", icon: "🌅", name: l("ছট পুজো", "Chhath Puja"), href: "/blog/chhath-puja-2026-kolkata" },
  { date: "2026-11-16", icon: "🦚", name: l("কার্তিক পুজো", "Kartik Puja"), href: "/kartik-puja-2026" },
  { date: "2026-11-19", icon: "🏮", name: l("জগদ্ধাত্রী পুজো", "Jagaddhatri Puja"), href: "/jagaddhatri-puja-2026" },
  { date: "2026-11-21", icon: "🌿", name: l("তুলসী বিবাহ", "Tulsi Vivah"), href: "/tulsi-vivah-2026" },
  { date: "2026-11-24", icon: "🪷", name: l("রাস পূর্ণিমা", "Rash Purnima"), href: "/rash-purnima-2026" },
  { date: "2026-12-14", icon: "💐", name: l("বিবাহ পঞ্চমী", "Vivah Panchami"), href: "/vivah-panchami-2026" },
  { date: "2026-12-20", icon: "📜", name: l("গীতা জয়ন্তী", "Gita Jayanti"), href: "/gita-jayanti-2026" },
  { date: "2027-01-15", icon: "🍘", name: l("পৌষ সংক্রান্তি", "Poush Sankranti"), href: "/poush-sankranti-2027" },
  { date: "2027-01-22", end: "2027-02-03", icon: "📖", name: l("কলকাতা বইমেলা", "Kolkata Book Fair"), href: "/blog/kolkata-book-fair-2027" },
  { date: "2027-02-11", icon: "📚", name: l("সরস্বতী পুজো", "Saraswati Puja"), href: "/saraswati-puja-2027" },
  { date: "2027-03-06", icon: "🔱", name: l("শিবরাত্রি", "Shivratri"), href: "/shivratri-2027" },
  { date: "2027-03-21", icon: "🔥", name: l("হোলিকা দহন", "Holika Dahan"), href: "/holi-2027" },
  { date: "2027-03-22", icon: "🎨", name: l("দোল", "Dol"), href: "/dol-purnima-2027" },
  { date: "2027-04-07", icon: "🪔", name: l("চৈত্র নবরাত্রি", "Chaitra Navratri"), href: "/navratri-2027" },
  { date: "2027-04-15", icon: "🏹", name: l("রামনবমী", "Ram Navami"), href: "/ram-navami-2027" },
  { date: "2027-04-15", icon: "🎉", name: l("পয়লা বৈশাখ", "Poila Boishakh"), href: "/poila-boishakh-2027" },
  { date: "2027-04-20", icon: "🐒", name: l("হনুমান জয়ন্তী", "Hanuman Jayanti"), href: "/hanuman-jayanti-2027" },
  { date: "2027-05-09", icon: "🪙", name: l("অক্ষয় তৃতীয়া", "Akshaya Tritiya"), href: "/akshaya-tritiya-2027" },
  { date: "2027-05-20", icon: "☸️", name: l("বুদ্ধ পূর্ণিমা", "Buddha Purnima"), href: "/buddha-purnima-2027" },
  { date: "2027-06-10", icon: "🥭", name: l("জামাইষষ্ঠী", "Jamai Shashthi"), href: "/jamai-shashthi-2027" },
  { date: "2027-06-18", icon: "💧", name: l("স্নানযাত্রা", "Snana Yatra"), href: "/snana-yatra-2027" },
  { date: "2027-07-05", icon: "🛕", name: l("রথযাত্রা", "Rath Yatra"), href: "/rath-yatra-2027" },
  { date: "2027-07-18", icon: "🙏", name: l("গুরু পূর্ণিমা", "Guru Purnima"), href: "/guru-purnima-2027" },
  { date: "2027-08-02", icon: "🌘", name: l("সূর্যগ্রহণ", "Solar eclipse"), href: "/grahan-2027" },
  { date: "2027-08-06", icon: "🐍", name: l("নাগপঞ্চমী, মনসা পুজো", "Nag Panchami, Manasa Puja"), href: "/manasa-puja-2027" },
  { date: "2027-08-17", icon: "🧵", name: l("রাখি পূর্ণিমা", "Raksha Bandhan"), href: "/raksha-bandhan-2027" },
  { date: "2027-08-25", icon: "🪈", name: l("জন্মাষ্টমী", "Janmashtami"), href: "/janmashtami-2027" },
  { date: "2027-09-04", icon: "🐘", name: l("গণেশ চতুর্থী", "Ganesh Chaturthi"), href: "/ganesh-chaturthi-2027" },
  { date: "2027-09-08", icon: "🌸", name: l("রাধাষ্টমী", "Radhashtami"), href: "/radhashtami-2027" },
  { date: "2027-09-16", icon: "🕯️", name: l("পিতৃপক্ষ শুরু", "Pitru Paksha begins"), href: "/pitru-paksha-2027" },
  { date: "2027-09-17", icon: "🪁", name: l("বিশ্বকর্মা পুজো", "Vishwakarma Puja"), href: "/vishwakarma-puja-2027" },
  { date: "2027-09-29", icon: "🌅", name: l("মহালয়া", "Mahalaya"), href: "/mahalaya-2027" },
  { date: "2027-10-05", end: "2027-10-10", icon: "🥁", name: l("দুর্গাপুজো", "Durga Puja"), href: "/durga-puja-2027" },
  { date: "2027-10-14", icon: "🪷", name: l("কোজাগরী লক্ষ্মীপুজো", "Kojagori Lakshmi Puja"), href: "/lakshmi-puja-2027" },
  { date: "2027-10-27", icon: "🪙", name: l("ধনতেরাস", "Dhanteras"), href: "/dhanteras-2027" },
  { date: "2027-10-28", icon: "🌑", name: l("কালীপুজো", "Kali Puja"), href: "/kali-puja-2027" },
  { date: "2027-10-31", icon: "🧿", name: l("ভাইফোঁটা", "Bhai Phota"), href: "/bhai-phota-2027" },
  { date: "2027-11-02", icon: "🌅", name: l("ছট পুজো", "Chhath Puja"), href: "/chhath-puja-2027" },
  { date: "2027-11-07", icon: "🏮", name: l("জগদ্ধাত্রী পুজো", "Jagaddhatri Puja"), href: "/jagaddhatri-puja-2027" },
  { date: "2027-11-14", icon: "🪷", name: l("রাস পূর্ণিমা", "Rash Purnima"), href: "/rash-purnima-2027" },
];

/** The next `n` entries that haven't ended by `today` (YYYY-MM-DD), from a date-sorted list. */
export function nextUp<T extends { date: string; end?: string }>(list: readonly T[], today: string, n: number): T[] {
  return list.filter((u) => (u.end ?? u.date) >= today).slice(0, n);
}

/** Whole days from `today` to `date` (both YYYY-MM-DD; calendar arithmetic only). */
export function daysUntil(today: string, date: string): number {
  return Math.round((Date.parse(`${date}T00:00:00Z`) - Date.parse(`${today}T00:00:00Z`)) / 86_400_000);
}

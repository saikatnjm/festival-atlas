// Blog: Bhoot Chaturdashi. Facts come from pages fetched on 31 Oct 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI_BHOOT = { title: "Wikipedia, Naraka Chaturdashi (Bhoot Chaturdashi)", url: "https://en.wikipedia.org/wiki/Bhoot_Chaturdashi" };
const DRIK_CHAUDAS = { title: "Drik Panchang, Kali Chaudas 2026 (Kolkata)", url: "https://www.drikpanchang.com/diwali/kali-chaudas/kali-chaudas-date-time.html?geoname-id=1275004&year=2026" };
const DRIK_KALI = { title: "Drik Panchang, Kali Puja 2026 date and time (Kolkata)", url: "https://www.drikpanchang.com/diwali/kali-puja/bengal-kalipuja-date-time.html?geoname-id=1275004&year=2026" };

export const BHOOT_CHATURDASHI: Article = {
  slug: "bhoot-chaturdashi-2026",
  published: "2026-10-31",
  updated: "2026-10-31",
  title: l("ভূত চতুর্দশী ২০২৬: চোদ্দ প্রদীপ আর পূর্বপুরুষ", "Bhoot Chaturdashi 2026: 14 Lamps and Ancestors"),
  description: l(
    "ভূত চতুর্দশী ২০২৬ শনিবার ৭ নভেম্বর: চতুর্দশী তিথির সময়, কেন চোদ্দ প্রদীপ, পূর্বপুরুষের গল্প আর নরক চতুর্দশীর সঙ্গে যোগ।",
    "Bhoot Chaturdashi 2026 is Saturday 7 November: Chaturdashi tithi times, why 14 lamps are lit, the ancestor lore and the Naraka Chaturdashi link.",
  ),
  h1: l("ভূত চতুর্দশী: কালীপুজোর আগের রাত", "Bhoot Chaturdashi: the night before Kali Puja"),
  lead: l(
    "কালীপুজোর আগের দিন বাংলায় ভূত চতুর্দশী। চোদ্দটি প্রদীপ, পূর্বপুরুষদের ফিরে আসার বিশ্বাস, আর একটু গা-ছমছমে গল্প।",
    "The day before Kali Puja is Bhoot Chaturdashi in Bengal: fourteen lamps, the belief that ancestors visit, and a little spooky lore.",
  ),
  icon: "🪔",
  body: [
    { kind: "h2", text: l("ভূত চতুর্দশী কী", "What is Bhoot Chaturdashi") },
    {
      kind: "p",
      text: l(
        "কৃষ্ণপক্ষের চতুর্দশী তিথি, মানে অমাবস্যার আগের তিথি, দীপাবলির পাঁচ দিনের উৎসবের দ্বিতীয় দিন। এই দিনের আরেক নাম নরক চতুর্দশী, কালী চৌদশও বলা হয়।",
        "It falls on Chaturdashi, the 14th day of the waning fortnight, and is the second day of the five-day Diwali festival. The same day is also called Naraka Chaturdashi or Kali Chaudas.",
      ),
      source: WIKI_BHOOT,
    },
    {
      kind: "p",
      text: l(
        "বাংলা আর বাংলাদেশে কালীপুজোর আগের দিনটাকে ভূত চতুর্দশী বলা হয়।",
        "In Bengal and Bangladesh, the day before Kali Puja is observed as Bhoot Chaturdashi.",
      ),
      source: WIKI_BHOOT,
    },
    {
      kind: "p",
      text: l(
        "২০২৬-এ ভূত চতুর্দশী (দ্রিক পঞ্চাঙ্গে ‘কালী চৌদশ’, যার আরেক নাম ভূত চতুর্দশী) শনিবার ৭ নভেম্বর। কলকাতায় চতুর্দশী তিথি ৭ নভেম্বর সকাল ১০:৪৭ থেকে ৮ নভেম্বর সকাল ১১:২৭।",
        "In 2026 Bhoot Chaturdashi (listed by Drik Panchang as Kali Chaudas, 'also known as Bhut Chaturdashi') is Saturday 7 November. In Kolkata the Chaturdashi tithi runs from 10:47 am on 7 November to 11:27 am on 8 November.",
      ),
      source: DRIK_CHAUDAS,
    },
    {
      kind: "p",
      text: l(
        "পরদিন রবিবার ৮ নভেম্বর কালীপুজো; অমাবস্যা তিথি ৮ নভেম্বর সকাল ১১:২৭ থেকে ৯ নভেম্বর দুপুর ১২:৩১।",
        "Kali Puja follows on Sunday 8 November; the Amavasya tithi runs from 11:27 am on 8 November to 12:31 pm on 9 November.",
      ),
      source: DRIK_KALI,
    },
    { kind: "h2", text: l("চোদ্দ প্রদীপ আর পূর্বপুরুষ", "Fourteen lamps and the ancestors") },
    {
      kind: "p",
      text: l(
        "এই উপলক্ষে চোদ্দটি প্রদীপ জ্বালানো হয়। বিশ্বাস, পরিবারের চোদ্দ পূর্বপুরুষ এই সময় জীবিত আত্মীয়দের দেখতে আসেন, আর বাড়ির চারপাশে রাখা প্রদীপ তাঁদের ঘরে ফেরার পথ দেখায়।",
        "Fourteen lamps (pradips or diyas) are lit on this occasion. The belief is that the 14 forefathers of a family visit their living relatives, and lamps placed all around the house guide them homewards.",
      ),
      source: WIKI_BHOOT,
    },
    {
      kind: "tip",
      text: l(
        "ঘরে প্রদীপ বা মোমবাতি জ্বালালে খেয়াল রাখো যেন পর্দা, কাগজ আর বাচ্চাদের হাতের নাগালে না থাকে। ঘুমোতে যাওয়ার আগে সব নিভিয়ে দিও।",
        "If you light lamps or candles at home, keep them away from curtains, paper and small children, and put them all out before you sleep.",
      ),
    },
    { kind: "h2", text: l("ভূতের গল্প", "The ghost lore") },
    {
      kind: "p",
      text: l(
        "নামে ভূত থাকলেও মূল ভাবনাটা ভয়ের নয়। কথিত আছে, অন্ধকার রাতের আগের সন্ধ্যায় প্রয়াতদের আত্মা পৃথিবীতে প্রিয়জনদের দেখতে নেমে আসে।",
        "Despite the name, the idea is not really about fear. The belief is that on the eve of the dark night the souls of the deceased come down to earth to visit their dear ones.",
      ),
      source: WIKI_BHOOT,
    },
    {
      kind: "tip",
      text: l(
        "চোদ্দ শাক খাওয়ার রীতি অনেক বাড়িতে শোনা যায়। কিন্তু যে পাতাগুলো আমরা ঘেঁটেছি তাতে এর উল্লেখ পাইনি, তাই নিশ্চিত করে কিছু বলছি না। তোমার বাড়ির নিয়ম বড়দের কাছে জেনে নাও।",
        "Many homes talk of eating fourteen greens (choddo shaak). None of the pages we checked mention it, so we make no claim; ask the elders at home about your family's custom.",
      ),
    },
    { kind: "h2", text: l("নরক চতুর্দশীর সঙ্গে যোগ", "The Naraka Chaturdashi link") },
    {
      kind: "p",
      text: l(
        "হিন্দু শাস্ত্রকথায় এই দিনেই কৃষ্ণ আর সত্যভামা নরকাসুরকে বধ করেছিলেন বলে বলা হয়। তাই একই তিথি উত্তর ভারতে নরক চতুর্দশী নামে পরিচিত।",
        "Hindu literature says Narakasura was killed on this day by Krishna and Satyabhama, which is why the same tithi is known as Naraka Chaturdashi elsewhere in India.",
      ),
      source: WIKI_BHOOT,
    },
    {
      kind: "p",
      text: l(
        "পঞ্জিকা পদ্ধতিতে এটি আশ্বিনের ২৯ তারিখ (অমান্ত) বা কার্তিকের ১৪ তারিখ (পূর্ণিমান্ত) বলে ধরা হয়।",
        "By calendar tradition it is counted as 29 Ashvin in the amanta system or 14 Kartika in the purnimanta system.",
      ),
      source: WIKI_BHOOT,
    },
    {
      kind: "list",
      items: [
        l("ভূত চতুর্দশী: কালীপুজোর আগের দিন, চোদ্দ প্রদীপ আর পূর্বপুরুষ।", "Bhoot Chaturdashi: the day before Kali Puja, with 14 lamps and the ancestors."),
        l("কালীপুজো: অমাবস্যার রাতে মা কালীর আরাধনা।", "Kali Puja: worship of Maa Kali on the amavasya night."),
        l("নরক চতুর্দশী: একই তিথির অন্য অঞ্চলের নাম।", "Naraka Chaturdashi: the same tithi under its name elsewhere."),
      ],
      source: WIKI_BHOOT,
    },
  ],
  faq: [
    {
      q: l("২০২৬-এ ভূত চতুর্দশী কবে?", "When is Bhoot Chaturdashi in 2026?"),
      a: l("শনিবার ৭ নভেম্বর ২০২৬; কলকাতায় চতুর্দশী তিথি ৭ নভেম্বর সকাল ১০:৪৭ থেকে ৮ নভেম্বর সকাল ১১:২৭ (দ্রিক পঞ্চাঙ্গ)।", "Saturday 7 November 2026; in Kolkata the Chaturdashi tithi runs from 10:47 am on 7 November to 11:27 am on 8 November (Drik Panchang)."),
    },
    {
      q: l("ভূত চতুর্দশী কী?", "What is Bhoot Chaturdashi?"),
      a: l("কালীপুজোর আগের দিনের চতুর্দশী তিথি, দীপাবলির দ্বিতীয় দিন, যেদিন চোদ্দ প্রদীপ জ্বালানো হয়।", "The Chaturdashi tithi the day before Kali Puja, the second day of Diwali, when 14 lamps are lit."),
    },
    {
      q: l("ভূত চতুর্দশীতে কেন চোদ্দটি প্রদীপ জ্বালানো হয়?", "Why are 14 lamps lit on Bhoot Chaturdashi?"),
      a: l("বিশ্বাস, পরিবারের চোদ্দ পূর্বপুরুষ এই সময় আসেন, আর প্রদীপ তাঁদের ঘরে ফেরার পথ দেখায়।", "The belief is that a family's 14 forefathers visit at this time and the lamps guide them home."),
    },
    {
      q: l("ভূত চতুর্দশী আর নরক চতুর্দশী কি একই?", "Are Bhoot Chaturdashi and Naraka Chaturdashi the same?"),
      a: l("হ্যাঁ, একই চতুর্দশী তিথি। বাংলায় নাম ভূত চতুর্দশী, অন্যত্র নরক চতুর্দশী বা কালী চৌদশ।", "Yes, it is the same Chaturdashi tithi: Bhoot Chaturdashi in Bengal, Naraka Chaturdashi or Kali Chaudas elsewhere."),
    },
    {
      q: l("২০২৬-এ কালীপুজো কবে?", "When is Kali Puja in 2026?"),
      a: l("কলকাতার হিসেবে রবিবার, ৮ নভেম্বর ২০২৬ (দ্রিক পঞ্চাঙ্গ)। ভূত চতুর্দশী তার আগের দিন।", "Sunday, 8 November 2026 by the Kolkata listing (Drik Panchang). Bhoot Chaturdashi is the day before."),
    },
    {
      q: l("ভূত চতুর্দশীতে কি চোদ্দ শাক খেতে হয়?", "Do you eat 14 greens on Bhoot Chaturdashi?"),
      a: l("অনেক বাড়িতে এমন রীতি শোনা যায়, কিন্তু আমরা কোনও সূত্রে নিশ্চিত হইনি। পরিবারের বড়দের কাছে জেনে নাও।", "Many homes follow this custom, but we could not confirm it from a source. Ask the elders in your family."),
    },
  ],
  related: [
    { href: "/kali-puja-2026", label: l("কালীপুজো ২০২৬", "Kali Puja 2026") },
    { href: "/greetings/kali", label: l("কালীপুজোর শুভেচ্ছা কার্ড", "Kali Puja greeting cards") },
    { href: "/blog/kali-puja-and-diwali", label: l("কালীপুজো আর দীপাবলি", "Kali Puja and Diwali") },
  ],
  sources: [DRIK_CHAUDAS, WIKI_BHOOT, DRIK_KALI],
};

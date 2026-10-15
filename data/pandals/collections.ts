// Landing-page collections of the directory: Kolkata & West Bengal, Dhaka & Bangladesh, and the
// Bengali diaspora. Each is a static, indexable page (/puja/<slug>) with its own title, intro, FAQ
// and sourced 2026 facts. Text is {bn, en}. Only type imports besides the pandal type guard.

import type { L } from "@/lib/i18n";
import type { Region } from "@/data/events/events";
import type { Pandal } from "./index";

const l = (bn: string, en: string): L => ({ bn, en });

export type CollectionSlug = "kolkata" | "dhaka" | "abroad";

export interface Collection {
  slug: CollectionSlug;
  /** Region whose events/highlights are shown; none for abroad. */
  region?: Region;
  /** Which listings belong here. */
  match: (p: Pandal) => boolean;
  /** Map link that shows the same set. */
  mapQuery: string;
  title: L;
  h1: L;
  lead: L;
  description: L;
  /** Group listings by this field. */
  groupBy: "area" | "city" | "country";
  /**
   * When set, only this city's listings are grouped by `groupBy`; the rest of the region goes into one
   * trailing group titled `othersLabel` (Siliguri on the Kolkata page, Satkhira on the Dhaka page…).
   */
  primaryCity?: string;
  othersLabel?: L;
  faq: { q: L; a: L }[];
}

export const collections: Collection[] = [
  {
    slug: "kolkata",
    region: "wb",
    match: (p) => p.country === "IN",
    mapQuery: "?country=IN",
    primaryCity: "Kolkata",
    othersLabel: l("পশ্চিমবঙ্গের অন্যত্র", "Elsewhere in West Bengal"),
    title: l("কলকাতার দুর্গাপুজো ২০২৬: প্যান্ডেল, থিম ও ম্যাপ", "Kolkata Durga Puja 2026: Pandals, Themes & Map"),
    h1: l("কলকাতার দুর্গাপুজো ২০২৬: প্যান্ডেল, থিম আর ম্যাপ", "Kolkata Durga Puja 2026: pandals, themes and a map"),
    lead: l(
      "খবরে আসা ২০২৬-এর থিম, সূত্রসহ প্যান্ডেলের তালিকা, মেট্রোর রাত-জাগা সময়সূচি, আর তোমার নিজের প্যান্ডেল-হপিং রুট। সব তথ্যে সূত্র আর শেষ যাচাইয়ের তারিখ আছে।",
      "Reported 2026 themes, a sourced list of pandals, overnight Metro timings and your own pandal-hopping route. Every fact shows its source and when we last checked it.",
    ),
    description: l(
      "কলকাতা ও পশ্চিমবঙ্গের দুর্গাপুজো ২০২৬: শ্রীভূমি, একডালিয়া, সন্তোষ মিত্র স্কোয়্যার সহ সূত্রসহ প্যান্ডেলের তালিকা, থিম, তারিখ, মেট্রো ও রুট প্ল্যানার।",
      "Kolkata & West Bengal Durga Puja 2026: sourced pandal directory with Sreebhumi, Ekdalia, Santosh Mitra Square, 2026 themes, dates, Metro timings and a route planner.",
    ),
    groupBy: "area",
    faq: [
      {
        q: l("২০২৬-এ কলকাতার দুর্গাপুজো কবে?", "When is Durga Puja 2026 in Kolkata?"),
        a: l(
          "খবর অনুযায়ী ষষ্ঠী ১৭ অক্টোবর, সপ্তমী ১৮, অষ্টমী ১৯, নবমী ২০ আর বিজয়া দশমী ২১ অক্টোবর ২০২৬। মহালয়া ১০ অক্টোবর। কোনো কোনো পঞ্জিকায় এক দিনের তফাত আছে, তাই নিজের পঞ্জিকা মিলিয়ে নাও।",
          "As reported: Shashthi 17 Oct, Saptami 18, Ashtami 19, Navami 20 and Bijoya Dashami 21 Oct 2026, with Mahalaya on 10 Oct. Some calendars differ by a day, so check your own panjika.",
        ),
      },
      {
        q: l("পুজোয় কলকাতা মেট্রো কতক্ষণ চলবে?", "How late does the Kolkata Metro run during Puja?"),
        a: l(
          "ঘোষণা অনুযায়ী সপ্তমী থেকে নবমী (১৭–২০ অক্টোবর) ব্লু লাইন দুপুর ১টা থেকে ভোর ৪টে আর গ্রিন লাইন দুপুর দেড়টা থেকে ভোর ৩:৫৯ পর্যন্ত; দশমীতে ব্লু লাইন দুপুর ১টা থেকে রাত সাড়ে ১০টা। সূত্র এই পাতার খবরের অংশে।",
          "As announced, from Saptami to Navami (17–20 Oct) the Blue Line runs 1 pm to 4 am and the Green Line 1:30 pm to 3:59 am; on Dashami the Blue Line runs 1 pm to 10:30 pm. The source is in the news section on this page.",
        ),
      },
      {
        q: l("২০২৬-এ কলকাতার সেরা থিম প্যান্ডেল কোনগুলো?", "Which are the best theme pandals in Kolkata in 2026?"),
        a: l(
          "খবরে আসা ২০২৬-এর থিমের মধ্যে আছে শ্রীভূমির হাওয়া মহল, একডালিয়ার সোমনাথ মন্দির, সন্তোষ মিত্র স্কোয়্যারের ‘বন্দে মাতরম’, বালিগঞ্জ সমাজ সেবী সংঘের উত্তমকুমার-শ্রদ্ধার্ঘ্য, কুমোরটুলি পার্কের গঙ্গার যাত্রা আর চালতাবাগান লোহাপট্টির ‘নিশান’। সবগুলোই ‘খবর অনুযায়ী’; আয়োজকদের ঘোষণাই চূড়ান্ত।",
          "Reported 2026 themes include Sreebhumi's Hawa Mahal, Ekdalia's Somnath Temple, Santosh Mitra Square's 'Vande Mataram', Ballygunge Samaj Sebi Sangha's Uttam Kumar tribute, Kumartuli Park's journey of the Ganga and Chaltabagan Lohapatty's 'Nishan'. All are 'as reported'; the organisers' announcements are final.",
        ),
      },
      {
        q: l("এক রাতে কীভাবে প্যান্ডেল-হপিং প্ল্যান করব?", "How do I plan a night of pandal-hopping?"),
        a: l(
          "‘আমার পুজো’ পাতায় কোথা থেকে বেরোচ্ছ, মুড আর সময় বেছে নিলে ২০ সেকেন্ডে একটা রুট তৈরি হয়; সেটা প্ল্যান কার্ড বানিয়ে বন্ধুদের পাঠানো যায়। উত্তর (কুমোরটুলি, শ্যামবাজার) আর দক্ষিণ (বালিগঞ্জ, রাসবিহারী) এক রাতে মেলানো কঠিন, একটা দিক বেছে নাও।",
          "On the Local Puja page, pick where you're starting, a vibe and a time, and a route appears in 20 seconds; you can turn it into a plan card for friends. North (Kumartuli, Shyambazar) and south (Ballygunge, Rashbehari) are hard to combine in one night, so pick a side.",
        ),
      },
      {
        q: l("ম্যাপের পিনগুলো কতটা ঠিক?", "How accurate are the map pins?"),
        a: l(
          "পিনগুলো এলাকা বা শহর পর্যায়ের, প্যান্ডেলের ঠিক জায়গা নয়; প্রতিটি পিনে তার সূত্র লেখা আছে। প্রতিটি প্যান্ডেলের পাতায় ‘পথ দেখাও’ বোতাম নাম আর ঠিকানা দিয়ে Google Maps খোলে, সেটা বেশি নিখুঁত।",
          "Pins are at area or city level, not the exact spot, and each shows its source. The Get-directions button on every pandal page opens Google Maps by name and address, which is more precise.",
        ),
      },
    ],
  },
  {
    slug: "dhaka",
    region: "bd",
    match: (p) => p.country === "BD",
    mapQuery: "?country=BD",
    // Counts only: the page keeps its per-city groups (groupBy "city"), so no trailing group is needed.
    primaryCity: "Dhaka",
    title: l("ঢাকা ও বাংলাদেশের দুর্গাপুজো ২০২৬: মণ্ডপ, ঢাকেশ্বরী ও ছুটি", "Dhaka & Bangladesh Durga Puja 2026: Mandaps, Dhakeshwari & Holidays"),
    h1: l("ঢাকা ও বাংলাদেশের দুর্গাপুজো ২০২৬", "Dhaka & Bangladesh Durga Puja 2026"),
    lead: l(
      "ঢাকেশ্বরী জাতীয় মন্দির থেকে শাঁখারীবাজার, রমনা কালীমন্দির, বনানী, আর ঢাকার বাইরে সাতক্ষীরা, সীতাকুণ্ড ও বগুড়া: সূত্রসহ মণ্ডপের তালিকা, ২০২৬-এর তারিখ ও সরকারি ছুটি।",
      "From Dhakeshwari National Temple to Shankhari Bazar, Ramna Kali Mandir and Banani, and beyond Dhaka to Satkhira, Sitakunda and Bogura: a sourced list of mandaps, 2026 dates and the public holidays.",
    ),
    description: l(
      "বাংলাদেশের দুর্গাপুজো ২০২৬: ঢাকার প্রধান মণ্ডপ (ঢাকেশ্বরী, রামকৃষ্ণ মিশন, শাঁখারীবাজার, বনানী), তারিখ ১৬–২১ অক্টোবর, ২০–২৪ অক্টোবরের ছুটি, সূত্রসহ।",
      "Durga Puja 2026 in Bangladesh: Dhaka's main mandaps (Dhakeshwari, Ramakrishna Mission, Shankhari Bazar, Banani), dates 16–21 Oct, 20–24 Oct holidays, with sources.",
    ),
    groupBy: "city",
    faq: [
      {
        q: l("২০২৬-এ বাংলাদেশে দুর্গাপুজো কবে?", "When is Durga Puja 2026 in Bangladesh?"),
        a: l(
          "মহাষষ্ঠী ১৬ অক্টোবর থেকে বিজয়া দশমী ও প্রতিমা বিসর্জন ২১ অক্টোবর ২০২৬ (সূত্র: News On AIR, ১০ অক্টোবর)। মহালয়া পালিত হয়েছে ১০ অক্টোবর।",
          "From Maha Shashthi on 16 Oct to Bijoya Dashami and immersion on 21 Oct 2026 (source: News On AIR, 10 Oct). Mahalaya was observed on 10 Oct.",
        ),
      },
      {
        q: l("পুজোয় বাংলাদেশে সরকারি ছুটি কবে?", "What are the Puja public holidays in Bangladesh?"),
        a: l(
          "২০ অক্টোবর (মহানবমী) নির্বাহী আদেশে ছুটি, ২১ অক্টোবর (বিজয়া দশমী) সাধারণ ছুটি আর ২২ অক্টোবর অতিরিক্ত ছুটি; সাপ্তাহিক ছুটি মিলিয়ে ২০–২৪ অক্টোবর টানা পাঁচ দিন (সূত্র: Jagonews24, ৭ অক্টোবর)। ১৭ অক্টোবর শনিবার অফিস খোলা।",
          "20 Oct (Mahanabami) is an executive-order holiday, 21 Oct (Bijoya Dashami) a public holiday and 22 Oct an added holiday; with the weekend that makes 20–24 Oct off (source: Jagonews24, 7 Oct). Offices are open on Saturday 17 Oct.",
        ),
      },
      {
        q: l("ঢাকায় কোথায় পুজো দেখব?", "Where should I see Puja in Dhaka?"),
        a: l(
          "ঢাকেশ্বরী জাতীয় মন্দির শহরের পুজোর কেন্দ্র; কাছেই শাঁখারীবাজারের সরু গলিতে পরপর মণ্ডপ আর জয়কালী মন্দির। রমনা কালীমন্দির, ঢাকা বিশ্ববিদ্যালয়ের জগন্নাথ হল, ফার্মগেটের কৃষিবিদ ইনস্টিটিউট, কলাবাগান আর বনানীর মণ্ডপ এক সন্ধ্যায় ঘোরা যায়। ‘আমার পুজো’ পাতায় রুট বানাও।",
          "Dhakeshwari National Temple is the heart of the city's Puja; nearby, Shankhari Bazar's narrow lanes have mandap after mandap, plus Joykali Mandir. Ramna Kali Mandir, Jagannath Hall at Dhaka University, Krishibid Institute at Farmgate, Kalabagan and Banani can be done in one evening. Build a route on the Local Puja page.",
        ),
      },
      {
        q: l("বাংলাদেশে মোট কত মণ্ডপে পুজো হয়?", "How many mandaps are there in Bangladesh?"),
        a: l(
          "২০২৫-এ পুজো উদযাপন পরিষদের হিসেবে ৩৩,৩৫৫টি মণ্ডপ ছিল (সূত্র: প্রথম আলো, ২৭ সেপ্টেম্বর ২০২৫)। ২০২৬-এর চূড়ান্ত সংখ্যা এখনও সূত্রসহ পাওয়া যায়নি।",
          "In 2025 the Puja Udjapan Parishad counted 33,355 mandaps (source: Prothom Alo, 27 Sep 2025). A sourced final figure for 2026 is not yet available.",
        ),
      },
    ],
  },
  {
    slug: "abroad",
    match: (p) => p.country !== "IN" && p.country !== "BD",
    mapQuery: "?all=1",
    title: l("প্রবাসে দুর্গাপুজো ২০২৬: লন্ডন, নিউ ইয়র্ক, টরন্টো, সিডনি, দুবাই", "Durga Puja Abroad 2026: London, New York, Toronto, Sydney, Dubai"),
    h1: l("প্রবাসে দুর্গাপুজো: বিশ্বজুড়ে বাঙালির পুজো", "Durga Puja abroad: Bengali pujas around the world"),
    lead: l(
      "লন্ডন থেকে সিঙ্গাপুর, টরন্টো থেকে দুবাই: প্রবাসী বাঙালি সংগঠনের পুজোর সূত্রসহ তালিকা। সব এন্ট্রিতে সাল আর অবস্থা লেখা আছে; অনেকগুলো আগের বছরের তথ্য, তাই যাওয়ার আগে সংগঠনের পাতায় ২০২৬-এর তারিখ দেখে নাও।",
      "From London to Singapore, Toronto to Dubai: a sourced list of pujas run by Bengali associations abroad. Every entry shows its year and status; many are from earlier editions, so check the association's page for 2026 dates before you go.",
    ),
    description: l(
      "প্রবাসে দুর্গাপুজো ২০২৬: যুক্তরাজ্য, যুক্তরাষ্ট্র, কানাডা, অস্ট্রেলিয়া, সিঙ্গাপুর, জার্মানি, সুইডেন, লুক্সেমবার্গ ও সংযুক্ত আরব আমিরাতের বাঙালি সংগঠনের পুজো, সূত্রসহ।",
      "Durga Puja abroad 2026: Bengali association pujas in the UK, USA, Canada, Australia, Singapore, Germany, Sweden, Luxembourg and the UAE, with sources.",
    ),
    groupBy: "country",
    faq: [
      {
        q: l("প্রবাসে পুজো কি একই তারিখে হয়?", "Is Puja abroad held on the same dates?"),
        a: l(
          "অনেক প্রবাসী পুজো তিথি মেনে একই সপ্তাহে হয়, তবে কিছু সংগঠন কাছের সপ্তাহান্তে সরিয়ে নেয়। এই তালিকার প্রতিটি এন্ট্রিতে সাল আর সূত্র আছে; ২০২৬-এর তারিখ সংগঠনের নিজস্ব ঘোষণায় দেখো।",
          "Many diaspora pujas follow the tithi in the same week, but some associations move to the nearest weekend. Every entry here shows its year and source; check the association's own announcement for 2026 dates.",
        ),
      },
      {
        q: l("আমার শহরের পুজো তালিকায় নেই কেন?", "Why isn't my city's puja listed?"),
        a: l(
          "তালিকাটা বাছাই করা শুরুর সংগ্রহ, সূত্র পাওয়া গেলেই এন্ট্রি যোগ হয়। আন্দাজে কিছু লেখা হয় না।",
          "The list is a curated starting set; entries are added only when they can be sourced. Nothing is added by guesswork.",
        ),
      },
    ],
  },
];

export const getCollection = (slug: string): Collection | undefined => collections.find((c) => c.slug === slug);

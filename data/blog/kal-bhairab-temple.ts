// Blog: Kal Bhairab Temple, Brahmanbaria. Facts from Wikipedia fetched 2 Nov 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI = { title: "Wikipedia, Kal Bhairab Temple", url: "https://en.wikipedia.org/wiki/Kal_Bhairab_Temple" };

export const KAL_BHAIRAB_TEMPLE: Article = {
  slug: "kal-bhairab-temple-brahmanbaria",
  published: "2026-11-02",
  updated: "2026-11-02",
  title: l("কালভৈরব মন্দির, ব্রাহ্মণবাড়িয়া: বিশাল শিবমূর্তি", "Kal Bhairab Temple, Brahmanbaria"),
  description: l(
    "ব্রাহ্মণবাড়িয়ার মেড্ডায় কালভৈরব মন্দিরের বিশাল শিবমূর্তি, স্বপ্নাদেশের কাহিনি, ১৯৭১ সালের ক্ষতি আর পুনর্নির্মাণ।",
    "Kal Bhairab Temple in Medda, Brahmanbaria: the giant Shiva statue, the dream story, damage in 1971 and the rebuilding.",
  ),
  h1: l("কালভৈরব মন্দির, ব্রাহ্মণবাড়িয়া", "Kal Bhairab Temple, Brahmanbaria"),
  lead: l(
    "মেড্ডার এই মন্দিরে কালভৈরব রূপে শিবের বিশাল মূর্তি পুজো পান। বাংলাদেশের শৈবদের একটি বড় তীর্থ।",
    "At Medda, Shiva is worshipped as Kal Bhairab in a very large statue. It is a major pilgrimage site for Shaivites in Bangladesh.",
  ),
  icon: "🔱",
  body: [
    { kind: "h2", text: l("কোথায়, কার মন্দির", "Where and whose") },
    {
      kind: "p",
      text: l(
        "মন্দিরটি ব্রাহ্মণবাড়িয়া জেলার মেড্ডায়। ব্রাহ্মণবাড়িয়া শহর গড়ে ওঠার আগে মেড্ডা ছিল তিতাস নদীর তীরের একটি বাজার, যার বয়স প্রায় ৩০০ বছর বলে লেখা আছে।",
        "The temple is at Medda in Brahmanbaria district. Before Brahmanbaria city grew, Medda was a market beside the Titas river, described as about 300 years old.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "মন্দির শিবের, তিনি এখানে কালভৈরব, আর এটাই প্রধান আকর্ষণ। কালভৈরবের ডানে দেবী কালীর মূর্তি, বাঁয়ে পার্বতীর। বাংলাদেশের শৈবদের একটি বড় তীর্থ এটি।",
        "The temple is dedicated to Shiva as Kal Bhairab, the main attraction. Goddess Kali's statue stands to his right and Parvati's to his left. It is a major pilgrimage site for Shaivites in Bangladesh.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("স্বপ্নাদেশের কাহিনি", "The dream story") },
    {
      kind: "p",
      text: l(
        "প্রায় ২০০ বছর আগে দুর্গাচরণ আচার্জি নামে এক ভাস্কর স্বপ্ন দেখেন বলে বলা হয়, আর সেই স্বপ্নে তিনি মাটি দিয়ে মূর্তি গড়েন। প্রথমে নদীর তীরে গড়েন। সরাইলের জমিদার নূর মুহাম্মদ জমি দান করেন। ১৯৭১ সাল পর্যন্ত স্থানীয় ভক্তরা নিয়মিত প্রার্থনা করতেন।",
        "About 200 years ago a sculptor named Durgacharan Acharjee reportedly had a dream and built the statue from soil, first on the riverbank. Noor Muhammad, a landlord of Sarail, donated the land. Local devotees held regular prayers there until 1971.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("১৯৭১ ও পুনর্নির্মাণ", "1971 and the rebuilding") },
    {
      kind: "p",
      text: l(
        "মুক্তিযুদ্ধের সময় পাকিস্তানি সেনারা এই মন্দিরসহ বহু হিন্দু মন্দির ভাঙচুর ও লুট করে। মূর্তির কিছু অংশে তারা ডিনামাইট ব্যবহার করে।",
        "During the Liberation War Pakistani soldiers damaged and looted many Hindu temples including this one. They used dynamite on parts of the statue.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "পুনর্নির্মাণে চার বছর লাগে, নতুন মূর্তির উচ্চতা ২৪ ফুট। এখনকার মূর্তি পাথরের। উইকিপিডিয়া আগের মূর্তিকে ২৮ ফুট বলে 'বিশ্বের সবচেয়ে বড় বলে ধরে নেওয়া' হয়েছে লিখেছে।",
        "Rebuilding took four years and the restored statue is 24 feet. The present statue is made of stone. Wikipedia describes a 28-foot Shiva statue as 'assumed to be the largest in the world'.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("পুজো ও দেখাশোনা", "Worship and upkeep") },
    {
      kind: "p",
      text: l(
        "নিয়মিত ও বার্ষিক প্রার্থনা হয়, নানা অঞ্চল থেকে মানুষ আসেন। ব্রাহ্মণবাড়িয়ার একটি পর্যটন আকর্ষণও এটি। ব্যবস্থাপনা কমিটি মন্দির দেখাশোনা করে, আর রক্ষণাবেক্ষণের খরচ দেয় বাংলাদেশ সরকার। বিশাল শিবমূর্তি সাধারণত রক্ষণাবেক্ষণের জন্য তালাবন্ধ থাকে।",
        "Regular and annual prayers are held and people travel from various regions. It is a tourist attraction in Brahmanbaria. Management committees look after the temple and the Government of Bangladesh covers maintenance costs. The giant Shiva statue is usually kept locked for maintenance.",
      ),
      source: WIKI,
    },
    {
      kind: "tip",
      text: l(
        "মূর্তি সাধারণত তালাবন্ধ থাকে, তাই যাওয়ার আগে স্থানীয় ব্যবস্থাপনা কমিটির সঙ্গে যোগাযোগ করে নাও।",
        "The statue is usually locked, so contact the local management committee before you go.",
      ),
    },
    {
      kind: "tip",
      text: l(
        "মন্দিরে ঢোকার আগে জুতো খুলে রেখো, আর ছবি তোলার আগে অনুমতি চেয়ে নিও।",
        "Take off your shoes before entering, and ask before taking photos.",
      ),
    },
  ],
  faq: [
    {
      q: l("কালভৈরব মন্দির কোথায়", "Where is Kal Bhairab Temple?"),
      a: l("ব্রাহ্মণবাড়িয়া জেলার মেড্ডায়, তিতাস নদীর তীরের এলাকায়।", "At Medda in Brahmanbaria district, in an area by the Titas river."),
    },
    {
      q: l("কালভৈরব মন্দিরের মূর্তি কত বড়", "How tall is the Kal Bhairab statue?"),
      a: l(
        "পুনর্নির্মিত পাথরের মূর্তি ২৪ ফুট। আগের মূর্তি ২৮ ফুটের বলে উইকিপিডিয়ায় আছে।",
        "The rebuilt stone statue is 24 feet. Wikipedia describes the earlier one as 28 feet.",
      ),
    },
    {
      q: l("কালভৈরব মন্দির কে বানিয়েছিলেন", "Who built Kal Bhairab Temple?"),
      a: l(
        "বলা হয় প্রায় ২০০ বছর আগে ভাস্কর দুর্গাচরণ আচার্জি স্বপ্ন দেখে মাটি দিয়ে মূর্তি গড়েন। জমি দেন সরাইলের জমিদার নূর মুহাম্মদ।",
        "It is said that about 200 years ago the sculptor Durgacharan Acharjee had a dream and built the statue from soil. Noor Muhammad, a landlord of Sarail, gave the land.",
      ),
    },
    {
      q: l("১৯৭১ সালে কালভৈরব মন্দিরের কী হয়েছিল", "What happened to Kal Bhairab Temple in 1971?"),
      a: l(
        "পাকিস্তানি সেনারা মূর্তির কিছু অংশে ডিনামাইট ব্যবহার করে। পুনর্নির্মাণে চার বছর লাগে।",
        "Pakistani soldiers used dynamite on parts of the statue. Rebuilding took four years.",
      ),
    },
  ],
  related: [
    { href: "/shivratri-2027", label: l("শিবরাত্রি ২০২৭", "Shivratri 2027") },
    { href: "/masik-shivratri-2027", label: l("মাসিক শিবরাত্রি ২০২৭", "Masik Shivratri 2027") },
    { href: "/blog/chandranath-temple-sitakunda", label: l("চন্দ্রনাথ মন্দির, সীতাকুণ্ড", "Chandranath Temple, Sitakunda") },
    { href: "/blog/dhakeshwari-temple-dhaka", label: l("ঢাকেশ্বরী মন্দির", "Dhakeshwari Temple") },
  ],
  sources: [WIKI],
};

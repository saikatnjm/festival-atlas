// Blog: Kantajew Temple, Dinajpur. Facts from Wikipedia fetched 2 Nov 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI = { title: "Wikipedia, Kantajew Temple", url: "https://en.wikipedia.org/wiki/Kantajew_Temple" };

export const KANTAJEW_TEMPLE: Article = {
  slug: "kantajew-temple-dinajpur",
  published: "2026-11-02",
  updated: "2026-11-02",
  title: l("কান্তজিউ মন্দির, দিনাজপুর: টেরাকোটার মন্দির", "Kantajew Temple, Dinajpur: Terracotta Temple"),
  description: l(
    "দিনাজপুরের কান্তজিউ বা কান্তনগর মন্দির: কে গড়েছিলেন, কবে, টেরাকোটার কাজ, নবরত্ন স্থাপত্য আর রাস মেলা।",
    "Kantajew (Kantanagar) Temple in Dinajpur: who built it and when, the terracotta work, the navaratna style and the Rash mela.",
  ),
  h1: l("কান্তজিউ মন্দির, দিনাজপুর", "Kantajew Temple, Dinajpur"),
  lead: l(
    "বাংলাদেশের টেরাকোটা স্থাপত্যের এক নামী উদাহরণ। দেবতা কৃষ্ণ ও রুক্মিণী।",
    "A well-known example of terracotta architecture in Bangladesh. The deities are Krishna and Rukmini.",
  ),
  icon: "🧱",
  body: [
    { kind: "h2", text: l("কোথায়", "Where it is") },
    {
      kind: "p",
      text: l(
        "মন্দিরটি রংপুর বিভাগের দিনাজপুর জেলার কান্তনগরে, হাজী মোহাম্মদ দানেশ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় থেকে প্রায় ১২ কিলোমিটার দূরে।",
        "The temple is at Kantanagar in Dinajpur District, Rangpur Division, about 12 km from Hajee Mohammed Danesh Science and Technology University.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("ইতিহাস", "History") },
    {
      kind: "p",
      text: l(
        "মহারাজা প্রাণনাথ ১৭০৪ সালে নির্মাণ শুরু করেন, তাঁর ছেলে রাজা রামনাথ ১৭৫২ সালে শেষ করেন। উইকিপিডিয়ার তথ্যছকে সমাপ্তির বছর ১৭২২ লেখা, যা লেখাটির মূল অংশের সঙ্গে মেলে না।",
        "Maharaja Pran Nath started construction in 1704 CE and his son Raja Ramnath completed it in 1752 CE. The infobox lists 1722 as the completion year, which conflicts with the article text.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "মন্দিরে কৃষ্ণ (কান্তজিউ) ও তাঁর স্ত্রী রুক্মিণীর পুজো হয়। বাংলার রুক্মিণী-কৃষ্ণ ভক্তদের কাছে এটি বিশেষ জনপ্রিয়।",
        "The deities are Krishna (Kantaji) and his wife Rukmini. It is especially popular with Rukmini-Krishna devotees in Bengal.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("স্থাপত্য ও টেরাকোটা", "Architecture and terracotta") },
    {
      kind: "p",
      text: l(
        "এটি নবরত্ন বা নয় চূড়ার মন্দির। স্থাপত্যে আছে বহু খাঁজের খিলান, অষ্টভুজ ড্রামের উপর গম্বুজ আর কোণের মিনার। ১৮৯৭ সালের ভূমিকম্পে নয়টি চূড়াই ভেঙে যায়।",
        "It is a navaratna (nine-spired) temple, with multi-cusped arches, domes on octagonal drums and corner towers. An 1897 earthquake destroyed all nine spires.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "বাংলাদেশের টেরাকোটা স্থাপত্যের উদাহরণ হিসেবে এটি পরিচিত। প্রবেশপথের কাছের থামে আর বাইরের দেয়ালে টেরাকোটার নকশা আছে।",
        "It is cited as an example of terracotta architecture in Bangladesh. Terracotta designs appear on the columns near the entrance and on the exterior.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("রাস মেলা", "Rash mela") },
    {
      kind: "p",
      text: l(
        "উইকিপিডিয়া এই মন্দিরের উৎসব হিসেবে রাস মেলার নাম করেছে। মেলার তারিখ বা আয়োজনের বিবরণ সেখানে নেই।",
        "Wikipedia names the Rash mela as the festival of this temple. It gives no dates or details of the fair.",
      ),
      source: WIKI,
    },
    {
      kind: "tip",
      text: l(
        "রাস মেলার সময় আর মন্দিরে ঢোকার নিয়ম আমরা কোনও সূত্রে পাইনি, তাই যাওয়ার আগে স্থানীয়ভাবে জেনে নাও।",
        "We found no source for the fair dates or entry rules, so check locally before you go.",
      ),
    },
    {
      kind: "tip",
      text: l(
        "টেরাকোটার নকশা কাছ থেকে দেখো, তবে হাত দিয়ে ছুঁয়ো না, ওগুলো পুরোনো আর ভঙ্গুর।",
        "Look closely at the terracotta, but do not touch it. It is old and delicate.",
      ),
    },
  ],
  faq: [
    {
      q: l("কান্তজিউ মন্দির কোথায়", "Where is Kantajew temple?"),
      a: l("বাংলাদেশের দিনাজপুর জেলার কান্তনগরে।", "At Kantanagar in Dinajpur District, Bangladesh."),
    },
    {
      q: l("কান্তজিউ মন্দির কে তৈরি করেছিলেন", "Who built Kantajew temple?"),
      a: l("মহারাজা প্রাণনাথ ১৭০৪ সালে শুরু করেন, রাজা রামনাথ ১৭৫২ সালে শেষ করেন।", "Maharaja Pran Nath began it in 1704 and Raja Ramnath completed it in 1752."),
    },
    {
      q: l("কান্তজিউ মন্দিরের দেবতা কে", "Which deity is worshipped at Kantajew temple?"),
      a: l("কৃষ্ণ (কান্তজিউ) ও রুক্মিণী।", "Krishna (Kantaji) and Rukmini."),
    },
  ],
  related: [
    { href: "/blog/puthia-temple-complex-rajshahi", label: l("পুঠিয়া মন্দির চত্বর", "Puthia Temple Complex") },
    { href: "/blog/dhakeshwari-temple-dhaka", label: l("ঢাকেশ্বরী মন্দির", "Dhakeshwari Temple") },
    { href: "/blog/shyama-puja-bangladesh", label: l("বাংলাদেশে শ্যামাপুজো", "Shyama Puja in Bangladesh") },
    { href: "/calendar-2027", label: l("ক্যালেন্ডার ২০২৭", "Calendar 2027") },
  ],
  sources: [WIKI],
};

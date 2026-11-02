// Blog: Nabapatrika (Kola Bou). Facts from Wikipedia "Durga Puja" and Drik Panchang, fetched 2 Nov 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI_DP = { title: "Wikipedia, Durga Puja", url: "https://en.wikipedia.org/wiki/Durga_Puja" };
const DRIK = { title: "Drik Panchang, Durga Puja 2027 calendar (Kolkata)", url: "https://www.drikpanchang.com/navratri/durga-puja/durga-puja-calendar.html?year=2027&geoname-id=1275004" };

export const NABAPATRIKA_KOLA_BOU: Article = {
  slug: "nabapatrika-kola-bou",
  published: "2026-11-02",
  updated: "2026-11-02",
  title: l("নবপত্রিকা বা কলা বউ: নয় গাছ, সপ্তমীর স্নান", "Nabapatrika (Kola Bou): Nine Plants, Saptami Bath"),
  description: l(
    "নবপত্রিকা কী, কোন নয়টি গাছ দিয়ে তৈরি, সপ্তমীতে কী হয়, আর কলা বউ নামটা নিয়ে একটা কথা। ২০২৭ সালের তারিখসহ।",
    "What Nabapatrika is, the nine plants in it, what happens on Saptami, and a note on the name Kola Bou. With the 2027 date.",
  ),
  h1: l("নবপত্রিকা: সপ্তমীর সকালের কলা বউ স্নান", "Nabapatrika: the Saptami morning bath of the Kola Bou"),
  lead: l(
    "দুর্গাপুজোর সপ্তমীতে গণেশের পাশে যে শাড়ি-পরা কলাগাছের আঁটি দেখা যায়, সেটাই নবপত্রিকা। জেনে নাও এতে কী কী আছে।",
    "The bundle of plants you see on Saptami, dressed in a saree beside Ganesha, is the Nabapatrika. Here is what it holds.",
  ),
  icon: "🌿",
  body: [
    { kind: "h2", text: l("নবপত্রিকা কী", "What is Nabapatrika") },
    {
      kind: "p",
      text: l(
        "নবপত্রিকা মানে নয়টি গাছের একটি আঁটি। প্রতিটি গাছকে দেবীর নয়টি রূপের একটির প্রতীক হিসেবে প্রতিষ্ঠা করা হয়, যেমন ব্রাহ্মণী, কালিকা, দুর্গা আর চামুণ্ডা।",
        "Nabapatrika is a bundle of nine plants. Each plant is consecrated as an embodiment of one of the nine forms of the goddess, such as Brahmani, Kalika, Durga and Chamunda.",
      ),
      source: WIKI_DP,
    },
    { kind: "h2", text: l("নয়টি গাছ", "The nine plants") },
    {
      kind: "list",
      items: [
        l("কলা", "Banana"),
        l("হলুদ", "Turmeric"),
        l("বেল", "Wood apple"),
        l("ডালিম", "Pomegranate"),
        l("অশোক", "Ashoka"),
        l("কচু", "Arum"),
        l("মানকচু", "Colacassia"),
        l("যব বা ধান", "Barley or rice"),
        l("মানক", "Manaka"),
      ],
      source: WIKI_DP,
    },
    { kind: "h2", text: l("কলা বউ নামটা", "The name Kola Bou") },
    {
      kind: "p",
      text: l(
        "অনেকে নবপত্রিকাকে ভুল করে কলা বউ বলেন, মানে কলাগাছের বধূ। উইকিপিডিয়া বলছে, এটি কোনো লোকায়ত ফসলের দেবী নয়।",
        "Many people call the Nabapatrika Kola Bou, the banana bride, by mistake. Wikipedia says it is not a folk harvest deity.",
      ),
      source: WIKI_DP,
    },
    { kind: "h2", text: l("সপ্তমীর স্নান", "The Saptami bath") },
    {
      kind: "p",
      text: l(
        "নবপত্রিকার স্নান, অর্থাৎ নবপত্রিকা স্নান, হয় সপ্তমীর দিনে।",
        "The bathing of the Nabapatrika, Nabapatrika snan, takes place on the seventh day, Saptami.",
      ),
      source: WIKI_DP,
    },
    {
      kind: "p",
      text: l(
        "দ্রিক পঞ্চাঙ্গের কলকাতার তালিকায় ২০২৭ সালে সপ্তমী বুধবার, ৬ অক্টোবর, আর সেদিন নবপত্রিকা (কলাবউ) পুজো।",
        "In Drik Panchang's Kolkata list for 2027, Saptami is Wednesday, 6 October, with Kolabou (Navapatrika) Puja that day.",
      ),
      source: DRIK,
    },
    {
      kind: "tip",
      text: l(
        "সপ্তমীর সকালে কোনো বড় পুজোয় গেলে স্নানের সময় আগে থেকে মণ্ডপের কমিটিকে জিজ্ঞেস করে নিও, জায়গায় জায়গায় সময় আলাদা হয়।",
        "If you plan to watch the bath at a big pandal, ask the committee for the time beforehand, as it differs from place to place.",
      ),
    },
  ],
  faq: [
    {
      q: l("কলা বউ কী?", "What is Kola Bou?"),
      a: l("সাধারণ নাম কলা বউ, আসলে নবপত্রিকা: নয়টি গাছের আঁটি, যার প্রতিটি দেবীর একটি রূপ। উইকিপিডিয়ার মতে নামটি ভুল করে চালু।", "Kola Bou is the common name for the Nabapatrika, a bundle of nine plants, each a form of the goddess. Wikipedia says the name is a mistaken one."),
    },
    {
      q: l("নবপত্রিকার নয়টি গাছ কোনগুলো?", "Which are the nine plants of Nabapatrika?"),
      a: l("কলা, হলুদ, বেল, ডালিম, অশোক, কচু, মানকচু, যব বা ধান আর মানক।", "Banana, turmeric, wood apple, pomegranate, Ashoka, arum, colacassia, barley or rice, and manaka."),
    },
    {
      q: l("নবপত্রিকা স্নান কোন দিন হয়?", "On which day is the Nabapatrika bath?"),
      a: l("সপ্তমীতে। ২০২৭ সালে সপ্তমী ৬ অক্টোবর (দ্রিক পঞ্চাঙ্গ, কলকাতা)।", "On Saptami. In 2027 Saptami is 6 October (Drik Panchang, Kolkata)."),
    },
  ],
  related: [
    { href: "/durga-puja-2027", label: l("দুর্গাপুজো ২০২৭", "Durga Puja 2027") },
    { href: "/durga-puja-2026", label: l("দুর্গাপুজো ২০২৬", "Durga Puja 2026") },
    { href: "/blog/akal-bodhon-durga-puja-story", label: l("অকালবোধনের গল্প", "The Akal Bodhon story") },
    { href: "/blog/sandhi-puja-108-lamps", label: l("সন্ধিপুজো", "Sandhi Puja") },
    { href: "/mahalaya-2027", label: l("মহালয়া ২০২৭", "Mahalaya 2027") },
  ],
  sources: [WIKI_DP, DRIK],
};

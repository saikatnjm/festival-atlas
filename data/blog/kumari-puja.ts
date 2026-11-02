// Blog: Kumari Puja. Facts from Wikipedia "Durga Puja", "Belur Math" and Drik Panchang, fetched 2 Nov 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI_DP = { title: "Wikipedia, Durga Puja", url: "https://en.wikipedia.org/wiki/Durga_Puja" };
const DRIK = { title: "Drik Panchang, Durga Puja 2027 calendar (Kolkata)", url: "https://www.drikpanchang.com/navratri/durga-puja/durga-puja-calendar.html?year=2027&geoname-id=1275004" };
const WIKI_MATH = { title: "Wikipedia, Belur Math", url: "https://en.wikipedia.org/wiki/Belur_Math" };

export const KUMARI_PUJA: Article = {
  slug: "kumari-puja-belur-math",
  published: "2026-11-02",
  updated: "2026-11-02",
  title: l("কুমারী পুজো: দুর্গাপুজোয় আর বেলুড় মঠে", "Kumari Puja: In Durga Puja and at Belur Math"),
  description: l(
    "কুমারী পুজো কী, দুর্গাপুজোর কোন দিনে হয়, বেলুড় মঠের কুমারী পুজোর ইতিহাস আর ২০২৭ সালের তারিখ।",
    "What Kumari Puja is, when it falls in Durga Puja, the Belur Math tradition and the 2027 date.",
  ),
  h1: l("কুমারী পুজো: দুর্গাপুজোর এক বিশেষ আচার", "Kumari Puja: a special rite of Durga Puja"),
  lead: l(
    "কুমারী পুজো দুর্গাপুজোর অন্যতম আকর্ষণ, বিশেষ করে বেলুড় মঠে। এখানে জানা তথ্যগুলো সাজিয়ে দিলাম।",
    "Kumari Puja is a highlight of Durga Puja, especially at Belur Math. Here are the facts we could confirm.",
  ),
  icon: "👧",
  body: [
    { kind: "h2", text: l("কুমারী পুজো কী", "What is Kumari Puja") },
    {
      kind: "p",
      text: l(
        "কুমারী দেবীকে দুর্গার একটি রূপ হিসেবে বর্ণনা করা হয়; তিনি উর্বরতার দেবী। কুমারী পুজো হল সেই রূপের আরাধনা।",
        "Kumari is described as a manifestation of the goddess Durga, a goddess of fertility. Kumari Puja is the worship of this form.",
      ),
      source: WIKI_DP,
    },
    { kind: "h2", text: l("কোন দিনে হয়", "On which day") },
    {
      kind: "p",
      text: l(
        "উইকিপিডিয়া জানাচ্ছে, কোনো কোনো জায়গায় নবমীতে হোম আর ভোগের সঙ্গে কুমারী পুজো হয়।",
        "Wikipedia says some places perform Kumari Puja on the ninth day, alongside the homa and bhog rites.",
      ),
      source: WIKI_DP,
    },
    {
      kind: "p",
      text: l(
        "দ্রিক পঞ্চাঙ্গের কলকাতার তালিকায় ২০২৭ সালে কুমারী পুজো দুর্গাষ্টমীর, অর্থাৎ বৃহস্পতিবার ৭ অক্টোবরের, তালিকায় আছে।",
        "In Drik Panchang's Kolkata list for 2027, Kumari Puja is listed under Durga Ashtami, Thursday 7 October.",
      ),
      source: DRIK,
    },
    {
      kind: "p",
      text: l(
        "তাই কোন দিনে হবে তা জায়গা ভেদে আলাদা হতে পারে।",
        "So the day can differ from place to place.",
      ),
    },
    { kind: "h2", text: l("বেলুড় মঠের ঐতিহ্য", "The Belur Math tradition") },
    {
      kind: "p",
      text: l(
        "উইকিপিডিয়ার বেলুড় মঠ নিবন্ধ অনুযায়ী বেলুড় মঠের কুমারী পুজোর ঐতিহ্য বিবেকানন্দ ১৯০১ সালে শুরু করেন।",
        "According to Wikipedia's Belur Math article, Vivekananda started the Kumari Puja tradition there in 1901.",
      ),
      source: WIKI_MATH,
    },
    {
      kind: "tip",
      text: l(
        "বেলুড় মঠে পুজোর দিনগুলোতে ভিড় বেশি হয়। যেতে চাইলে আগে থেকে মঠের ঘোষণা দেখে নাও আর সকাল সকাল পৌঁছাও।",
        "Belur Math is crowded on puja days. Check the Math's announcements beforehand and go early.",
      ),
    },
  ],
  faq: [
    {
      q: l("কুমারী পুজো কী?", "What is Kumari Puja?"),
      a: l("দুর্গার কুমারী রূপের আরাধনা, দুর্গাপুজোর একটি আচার।", "The worship of the Kumari form of Durga, a rite within Durga Puja."),
    },
    {
      q: l("কুমারী পুজো ২০২৭ কবে?", "When is Kumari Puja in 2027?"),
      a: l("দ্রিক পঞ্চাঙ্গের কলকাতার তালিকায় বৃহস্পতিবার ৭ অক্টোবর ২০২৭, দুর্গাষ্টমীর দিন।", "Thursday, 7 October 2027, Durga Ashtami, in Drik Panchang's Kolkata list."),
    },
    {
      q: l("বেলুড় মঠে কুমারী পুজো কবে শুরু হয়?", "When did Kumari Puja at Belur Math start?"),
      a: l("উইকিপিডিয়া অনুযায়ী বিবেকানন্দ ১৯০১ সালে এই ঐতিহ্য শুরু করেন।", "Per Wikipedia, Vivekananda started the tradition in 1901."),
    },
  ],
  related: [
    { href: "/durga-puja-2027", label: l("দুর্গাপুজো ২০২৭", "Durga Puja 2027") },
    { href: "/durga-puja-2026", label: l("দুর্গাপুজো ২০২৬", "Durga Puja 2026") },
    { href: "/blog/belur-math-guide", label: l("বেলুড় মঠ গাইড", "Belur Math guide") },
    { href: "/blog/sandhi-puja-108-lamps", label: l("সন্ধিপুজো", "Sandhi Puja") },
    { href: "/navratri-2027", label: l("নবরাত্রি ২০২৭", "Navratri 2027") },
  ],
  sources: [WIKI_DP, WIKI_MATH, DRIK],
};

// Blog: Satyanarayan Puja. Facts from Wikipedia "Satyanarayana" and "Satya Pir", fetched 2 Nov 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI = { title: "Wikipedia, Satyanarayana", url: "https://en.wikipedia.org/wiki/Satyanarayana" };
const WIKI_P = { title: "Wikipedia, Satya Pir", url: "https://en.wikipedia.org/wiki/Satya_Pir" };

export const SATYANARAYAN_PUJA: Article = {
  slug: "satyanarayan-puja-purnima",
  published: "2026-11-02",
  updated: "2026-11-02",
  title: l("সত্যনারায়ণ পুজো: কথা, নিবেদন, সত্যপীর", "Satyanarayan Puja: Katha, Offerings, Satya Pir"),
  description: l(
    "সত্যনারায়ণ পুজো কী, ব্রতকথায় কী বলা আছে, কী নিবেদন করা হয়, আর বাংলার সত্যপীরের সঙ্গে যোগ।",
    "What Satyanarayan Puja is, what the vrata katha tells, what is offered, and the link to Bengal's Satya Pir.",
  ),
  h1: l("সত্যনারায়ণ পুজো: ব্রতকথা আর রীতি", "Satyanarayan Puja: the vrata katha and customs"),
  lead: l(
    "ঘরে ঘরে হওয়া সত্যনারায়ণ পুজোর কেন্দ্রে আছে ব্রতকথা পাঠ। পূর্ণিমার তারিখ আমাদের আলাদা পাতায় পাবে।",
    "At the heart of the home Satyanarayan Puja is the reading of the vrata katha. Purnima dates are on our own page.",
  ),
  icon: "🌕",
  body: [
    { kind: "h2", text: l("সত্যনারায়ণ পুজো কী", "What is Satyanarayan Puja") },
    {
      kind: "p",
      text: l(
        "এটি সত্যনারায়ণের পুজো, যাঁকে কলিযুগে বিষ্ণুর অবতার বলা হয়। ভবিষ্য পুরাণের প্রতিসর্গপর্ব আর স্কন্দ পুরাণের রেবাখণ্ডে এর উল্লেখ মেলে, যদিও এই অংশগুলো কত পুরোনো ও খাঁটি, তা নিয়ে পণ্ডিতরা একমত নন।",
        "It is the worship of Satyanarayana, identified as an avatar of Vishnu in the Kali Yuga. The Pratisargaparvan of the Bhavishya Purana and the Reva Khanda of the Skanda Purana are cited, though scholars disagree about how old and authentic these passages are.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("ব্রতকথা", "The vrata katha") },
    {
      kind: "p",
      text: l(
        "পুজোর কেন্দ্রে ব্রতকথা পাঠ: এক গরিব ব্রাহ্মণ, এক কাঠুরে, এক সওদাগর ও তাঁর পরিবার, আর কখনও এক রাজার গল্প। শিক্ষা হলো, যে ভক্ত পুজোর মানত রাখে সে সমৃদ্ধি পায়, আর যে মানত ভাঙে তার দুর্ভাগ্য ঘটে।",
        "The rite centres on reciting the vrata katha, tales of a poor brahmin, a woodcutter, a sea-merchant and his family, and sometimes a king. The stories teach that a worshipper who keeps a vow to perform the puja gains prosperity, while those who break it face misfortune.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("কী নিবেদন করা হয়", "What is offered") },
    {
      kind: "p",
      text: l(
        "একটি বিবরণে নিবেদনের তালিকায় কলা, ঘি, দুধ, গমের আটা আর গুড়। আগের রূপ সত্যপীরের নিবেদন ছিল শিরনি বা সিন্নি, চাল, চিনি, কলা, দুধ আর আটার মিশ্রণ।",
        "One account lists plantains, ghee, milk, wheat flour and jaggery. For Satya Pir, the earlier form, the offering was shirni or sinni, a mixture of rice, sugar, banana, milk and flour.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("বাংলার সত্যপীর", "Satya Pir in Bengal") },
    {
      kind: "p",
      text: l(
        "পণ্ডিতরা সাধারণত সত্যনারায়ণকে সত্যপীরের মিশ্র বা সংস্কৃতায়িত রূপ বলেন; সত্যপীর বাংলায় হিন্দু আর মুসলমান দুই সম্প্রদায়েই পূজিত। প্রায় এক শতাব্দী আগে বাংলায় মূলত হিন্দু মহিলারা এই পুজো করতেন, যাকে সত্যপীরের পুজো বা সত্যনারায়ণের পুজো বলা হতো; কিছু মুসলমানও করতেন।",
        "Scholars generally describe Satyanarayana as a syncretic or Sanskritised form of Satya Pir, venerated in Bengal by both Hindus and Muslims. About a century ago, Hindu women in Bengal mainly performed the puja, called either Satya Pir Puja or Satyanarayan Puja, and some Muslims also performed it.",
      ),
      source: WIKI_P,
    },
    {
      kind: "tip",
      text: l(
        "পুজোর দিন আর সময় পুরোহিতের কাছে জেনে নাও। পূর্ণিমার তারিখ দেখতে আমাদের পূর্ণিমা ২০২৭ পাতা খোলো।",
        "Ask your priest for the day and time. For full-moon dates, open our Purnima 2027 page.",
      ),
    },
  ],
  faq: [
    {
      q: l("সত্যনারায়ণ পুজো কী", "What is Satyanarayan Puja"),
      a: l("বিষ্ণুর অবতার সত্যনারায়ণের পুজো, যার কেন্দ্রে ব্রতকথা পাঠ।", "Worship of Satyanarayana, an avatar of Vishnu, centred on reciting the vrata katha."),
    },
    {
      q: l("সত্যনারায়ণ পুজোয় কী কী লাগে", "Satyanarayan Puja offerings"),
      a: l("একটি বিবরণে কলা, ঘি, দুধ, গমের আটা আর গুড়।", "One account lists plantains, ghee, milk, wheat flour and jaggery."),
    },
    {
      q: l("সত্যপীর কে", "Who is Satya Pir"),
      a: l("বাংলায় হিন্দু ও মুসলমান দুই সম্প্রদায়ের পূজিত চরিত্র; সত্যনারায়ণকে তাঁর মিশ্র রূপ বলা হয়।", "A figure venerated in Bengal by Hindus and Muslims; Satyanarayana is described as a syncretic form of him."),
    },
    {
      q: l("সত্যনারায়ণ ব্রতকথায় কী আছে", "What is in the Satyanarayan katha"),
      a: l("গরিব ব্রাহ্মণ, কাঠুরে, সওদাগর ও রাজার গল্প, যেখানে মানত রাখলে সমৃদ্ধি আর ভাঙলে দুর্ভাগ্য।", "Tales of a poor brahmin, woodcutter, merchant and king: prosperity for keeping the vow, misfortune for breaking it."),
    },
  ],
  related: [
    { href: "/purnima-2027", label: l("পূর্ণিমা ২০২৭", "Purnima 2027") },
    { href: "/ekadashi-2027", label: l("একাদশী ২০২৭", "Ekadashi 2027") },
    { href: "/blog/ekadashi-fasting", label: l("একাদশীর উপবাস", "Ekadashi fasting") },
    { href: "/blog/shraddha-rituals-bengali", label: l("শ্রাদ্ধের রীতি", "Shraddha rituals") },
  ],
  sources: [WIKI, WIKI_P],
};

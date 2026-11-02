// Blog: Sandhi Puja. Facts from Wikipedia "Durga Puja" and Drik Panchang, fetched 2 Nov 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI_DP = { title: "Wikipedia, Durga Puja", url: "https://en.wikipedia.org/wiki/Durga_Puja" };
const DRIK = { title: "Drik Panchang, Durga Puja 2027 calendar (Kolkata)", url: "https://www.drikpanchang.com/navratri/durga-puja/durga-puja-calendar.html?year=2027&geoname-id=1275004" };

export const SANDHI_PUJA: Article = {
  slug: "sandhi-puja-108-lamps",
  published: "2026-11-02",
  updated: "2026-11-02",
  title: l("সন্ধিপুজো: ১০৮ প্রদীপ, ১০৮ পদ্ম আর চামুণ্ডা", "Sandhi Puja: 108 Lamps, 108 Lotuses, Chamunda"),
  description: l(
    "সন্ধিপুজো কী, অষ্টমী-নবমীর মিলনক্ষণে ১০৮ প্রদীপ আর পদ্ম কেন, চামুণ্ডার কাহিনি, আর ২০২৭ সালের তারিখ।",
    "What Sandhi Puja is, why 108 lamps and lotuses at the Ashtami-Navami junction, the Chamunda story, and the 2027 date.",
  ),
  h1: l("সন্ধিপুজো: অষ্টমী আর নবমীর মিলনক্ষণ", "Sandhi Puja: the junction of Ashtami and Navami"),
  lead: l(
    "দুর্গাপুজোর সবচেয়ে গুরুত্বপূর্ণ মুহূর্তগুলোর একটি এই সন্ধিপুজো। কখন হয়, কী হয়, সংক্ষেপে বলছি।",
    "Sandhi Puja is one of the most important moments of Durga Puja. Here is when it happens and what is done.",
  ),
  icon: "🪔",
  body: [
    { kind: "h2", text: l("সন্ধিপুজো কী", "What is Sandhi Puja") },
    {
      kind: "p",
      text: l(
        "অষ্টমী আর নবমীর সন্ধিক্ষণে এই পুজো হয়। এই মুহূর্তটিকে মহিষাসুর এবং চণ্ড-মুণ্ড অসুরদের সঙ্গে দুর্গার ভয়ংকর যুদ্ধের সঙ্গে জোড়া হয়।",
        "It is performed at the junction of Ashtami and Navami, the moment linked with Durga's fierce battle against Mahishasura and the demons Chanda and Munda.",
      ),
      source: WIKI_DP,
    },
    { kind: "h2", text: l("চামুণ্ডার কাহিনি", "The Chamunda story") },
    {
      kind: "p",
      text: l(
        "কথিত আছে, ঠিক এই মুহূর্তে দুর্গার তৃতীয় নয়ন থেকে চামুণ্ডা বেরিয়ে এসে চণ্ড আর মুণ্ডকে বধ করেন।",
        "It is said that at this moment Chamunda emerged from Durga's third eye and killed Chanda and Munda.",
      ),
      source: WIKI_DP,
    },
    { kind: "h2", text: l("১০৮ প্রদীপ, ১০৮ পদ্ম", "108 lamps, 108 lotuses") },
    {
      kind: "p",
      text: l(
        "পুজোয় ১০৮টি পদ্ম নিবেদন করা হয় আর ১০৮টি প্রদীপ জ্বালানো হয়। পুজো চলে ৪৮ মিনিট: অষ্টমীর শেষ ২৪ মিনিট আর নবমীর প্রথম ২৪ মিনিট।",
        "108 lotuses are offered and 108 lamps are lit. The rite lasts 48 minutes: the last 24 of Ashtami and the first 24 of Navami.",
      ),
      source: WIKI_DP,
    },
    {
      kind: "p",
      text: l(
        "কোনো কোনো অঞ্চলে পশুবলি হয়, তবে অনেক জায়গায় প্রতীকী বলি দেওয়া হয়: সিঁদুর মাখানো ময়দার একটি মূর্তি রক্তের প্রতীক।",
        "Some regions perform an animal sacrifice, but many use a symbolic one: a flour effigy smeared with vermilion stands for blood.",
      ),
      source: WIKI_DP,
    },
    { kind: "h2", text: l("২০২৭ সালে সন্ধিপুজো", "Sandhi Puja in 2027") },
    {
      kind: "p",
      text: l(
        "দ্রিক পঞ্চাঙ্গের কলকাতার তালিকায় ২০২৭ সালে অষ্টমী বৃহস্পতিবার, ৭ অক্টোবর, আর সন্ধিপুজো শুক্রবার, ৮ অক্টোবর। ঘড়ির সময় এখনও প্রকাশিত হয়নি; ঘোষণা হলে আমাদের পাতায় যোগ হবে।",
        "In Drik Panchang's Kolkata list for 2027, Ashtami is Thursday, 7 October, and Sandhi Puja is on Friday, 8 October. Clock times are not yet published; they will be added to our page once announced.",
      ),
      source: DRIK,
    },
    {
      kind: "tip",
      text: l(
        "সন্ধিপুজোর সঠিক সময় পাঁজি আর মণ্ডপ কমিটির ঘোষণা দেখে ঠিক করো, আর অন্তত আধঘণ্টা আগে পৌঁছে যেও।",
        "Check the panjika and the pandal committee for the exact time, and arrive at least half an hour early.",
      ),
    },
  ],
  faq: [
    {
      q: l("সন্ধিপুজো কী?", "What is Sandhi Puja?"),
      a: l("অষ্টমী আর নবমীর সন্ধিক্ষণের পুজো, যাতে ১০৮ প্রদীপ আর ১০৮ পদ্ম লাগে।", "The puja at the junction of Ashtami and Navami, with 108 lamps and 108 lotuses."),
    },
    {
      q: l("সন্ধিপুজো কত সময় ধরে চলে?", "How long does Sandhi Puja last?"),
      a: l("৪৮ মিনিট: অষ্টমীর শেষ ২৪ আর নবমীর প্রথম ২৪ মিনিট।", "48 minutes: the last 24 of Ashtami and the first 24 of Navami."),
    },
    {
      q: l("সন্ধিপুজোর সময় ২০২৭", "Sandhi Puja time 2027"),
      a: l("২০২৭ সালে সন্ধিপুজো ৮ অক্টোবর (শুক্রবার)। ঘড়ির সময় এখনও প্রকাশিত হয়নি; দুর্গাপুজো ২০২৭ পাতায় দেখো।", "Sandhi Puja falls on 8 October 2027 (Friday). Clock times are not out yet; see our Durga Puja 2027 page."),
    },
    {
      q: l("সন্ধিপুজোয় চামুণ্ডা কে?", "Who is Chamunda in Sandhi Puja?"),
      a: l("কথিত আছে দুর্গার তৃতীয় নয়ন থেকে বেরিয়ে তিনি চণ্ড ও মুণ্ডকে বধ করেন।", "She is said to have emerged from Durga's third eye and killed Chanda and Munda."),
    },
  ],
  related: [
    { href: "/durga-puja-2027", label: l("দুর্গাপুজো ২০২৭", "Durga Puja 2027") },
    { href: "/durga-puja-2026", label: l("দুর্গাপুজো ২০২৬", "Durga Puja 2026") },
    { href: "/blog/kumari-puja-belur-math", label: l("কুমারী পুজো", "Kumari Puja") },
    { href: "/blog/nabapatrika-kola-bou", label: l("নবপত্রিকা", "Nabapatrika") },
    { href: "/navratri-2027", label: l("নবরাত্রি ২০২৭", "Navratri 2027") },
  ],
  sources: [WIKI_DP, DRIK],
};

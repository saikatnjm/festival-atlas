// Blog: Sindoor Khela. Facts from Wikipedia "Sindur Khela" and "Durga Puja", Drik Panchang, fetched 2 Nov 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const DRIK = { title: "Drik Panchang, Durga Puja 2027 calendar (Kolkata)", url: "https://www.drikpanchang.com/navratri/durga-puja/durga-puja-calendar.html?year=2027&geoname-id=1275004" };
const WIKI_SINDUR = { title: "Wikipedia, Sindur Khela", url: "https://en.wikipedia.org/wiki/Sindoor_Khela" };

export const SINDOOR_KHELA: Article = {
  slug: "sindoor-khela-bijoya-dashami",
  published: "2026-11-02",
  updated: "2026-11-02",
  title: l("সিঁদুর খেলা: বিজয়া দশমীর সিঁদুর উৎসব", "Sindoor Khela: The Vijaya Dashami Vermilion Ritual"),
  description: l(
    "সিঁদুর খেলা কী, কারা খেলেন, কখন, কী কী করা হয়, মিষ্টি আর ২০২৭ সালের তারিখ। বিজয়ার শুভেচ্ছা পাতার লিংকসহ।",
    "What Sindoor Khela is, who plays it, when, what is done, the sweets, and the 2027 date. With a link to Bijoya greetings.",
  ),
  h1: l("সিঁদুর খেলা: দশমীর বিদায়বেলার আচার", "Sindoor Khela: the farewell ritual of Dashami"),
  lead: l(
    "দুর্গাপুজোর শেষ দিনে মণ্ডপে লাল সিঁদুরের রং ছড়িয়ে পড়ে। এই আচার নিয়ে জরুরি তথ্য রইল।",
    "On the last day of Durga Puja the pandals fill with red vermilion. Here are the key facts about this ritual.",
  ),
  icon: "🔴",
  body: [
    { kind: "h2", text: l("সিঁদুর খেলা কী", "What is Sindoor Khela") },
    {
      kind: "p",
      text: l(
        "সিঁদুর খেলা, মোটামুটি সিঁদুর নিয়ে খেলা, একটি বাঙালি হিন্দু ঐতিহ্য। এটি হয় বিজয়া দশমীতে, বিসর্জনের পুজোর পরে।",
        "Sindoor Khela, roughly the vermilion game, is a Bengali Hindu tradition. It is held on Vijaya Dashami, after the Visarjan Puja.",
      ),
      source: WIKI_SINDUR,
    },
    { kind: "h2", text: l("কী করা হয়", "What is done") },
    {
      kind: "p",
      text: l(
        "মহিলারা দেবীর কপালে আর পায়ে সিঁদুর দেন, মিষ্টি আর পান নিবেদন করেন। তারপর একে অপরের কপালে, শাঁখা, পলা ও লোহার চুড়িতে, আর মুখে সিঁদুর মাখিয়ে দেন।",
        "Women apply sindoor to the goddess's forehead and feet and offer her sweets and betel leaves. They then smear sindoor on each other's foreheads, on their conch-shell, coral and iron bangles, and on their faces.",
      ),
      source: WIKI_SINDUR,
    },
    {
      kind: "p",
      text: l(
        "দেবীকে নিবেদিত মিষ্টি প্রসাদ হিসেবে মহিলাদের মধ্যে ভাগ করে নেওয়া হয়।",
        "Sweets offered to the goddess are then shared between the women as prasad.",
      ),
      source: WIKI_SINDUR,
    },
    { kind: "h2", text: l("কারা খেলেন", "Who takes part") },
    {
      kind: "p",
      text: l(
        "ঐতিহ্যগতভাবে বিবাহিত বাঙালি হিন্দু মহিলারা এটি খেলেন; অবিবাহিত আর বিধবাদের নিষেধ ছিল। কলকাতা টাইমসের একটি প্রচারে সব মহিলাকে অংশ নিতে উৎসাহ দেওয়া হয়েছিল।",
        "It is played by married Bengali Hindu women; unmarried women and widows were traditionally barred. A Calcutta Times campaign encouraged participation by all women.",
      ),
      source: WIKI_SINDUR,
    },
    {
      kind: "p",
      text: l(
        "পশ্চিমবঙ্গের কিছু জায়গায় আচারটি আরও আগে হয়, যেমন দুবরাজপুরে মহাসপ্তমীতে আর বিজড়ায় মহাষ্টমীতে।",
        "In some parts of West Bengal it is held earlier, such as on Mahasaptami in Dubrajpur or Mahashtami in Bijra.",
      ),
      source: WIKI_SINDUR,
    },
    { kind: "h2", text: l("২০২৭ সালে", "In 2027") },
    {
      kind: "p",
      text: l(
        "দ্রিক পঞ্চাঙ্গের কলকাতার তালিকায় ২০২৭ সালে বিজয়া দশমী, সিঁদুর খেলা আর দুর্গা বিসর্জন রবিবার, ১০ অক্টোবর।",
        "In Drik Panchang's Kolkata list for 2027, Vijaya Dashami, Sindoor Khela and Durga Visarjan fall on Sunday, 10 October.",
      ),
      source: DRIK,
    },
    {
      kind: "tip",
      text: l(
        "সিঁদুরের রং জামাকাপড়ে লেগে যায়, তাই যে পোশাকে দাগ লাগলে আপত্তি নেই সেটা পরে যেও। বিজয়ার শুভেচ্ছা পাঠাতে আমাদের কার্ডগুলো কাজে লাগবে।",
        "Vermilion stains clothes, so wear something you do not mind staining. Our greeting cards are handy for sending Bijoya wishes.",
      ),
    },
  ],
  faq: [
    {
      q: l("সিঁদুর খেলা কী?", "What is Sindoor Khela?"),
      a: l("বিজয়া দশমীতে মহিলাদের দেবীকে সিঁদুর দেওয়া আর একে অপরের গায়ে সিঁদুর মাখানোর আচার।", "A Vijaya Dashami ritual in which women apply vermilion to the goddess and to each other."),
    },
    {
      q: l("সিঁদুর খেলা কবে ২০২৭?", "When is Sindoor Khela in 2027?"),
      a: l("রবিবার, ১০ অক্টোবর ২০২৭, বিজয়া দশমীর দিন (দ্রিক পঞ্চাঙ্গ, কলকাতা)।", "Sunday, 10 October 2027, Vijaya Dashami (Drik Panchang, Kolkata)."),
    },
    {
      q: l("সিঁদুর খেলা কারা খেলতে পারেন?", "Who can play Sindoor Khela?"),
      a: l("ঐতিহ্যগতভাবে বিবাহিত মহিলারা; এখন সব মহিলাকে অংশ নিতে উৎসাহ দেওয়ার প্রচারও হয়েছে।", "Traditionally married women; a campaign has encouraged all women to take part."),
    },
  ],
  related: [
    { href: "/greetings/bijoya", label: l("বিজয়ার শুভেচ্ছা কার্ড", "Bijoya greeting cards") },
    { href: "/durga-puja-2027", label: l("দুর্গাপুজো ২০২৭", "Durga Puja 2027") },
    { href: "/durga-puja-2026", label: l("দুর্গাপুজো ২০২৬", "Durga Puja 2026") },
    { href: "/blog/dhunuchi-naach-dhak", label: l("ধুনুচি নাচ ও ঢাক", "Dhunuchi naach and dhak") },
    { href: "/blog/bhai-phota-rituals", label: l("ভাইফোঁটা", "Bhai Phota rituals") },
  ],
  sources: [WIKI_SINDUR, DRIK],
};

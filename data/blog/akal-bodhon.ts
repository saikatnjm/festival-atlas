// Blog: Akal Bodhon. Facts from Wikipedia "Durga Puja" and Drik Panchang, fetched 2 Nov 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI_DP = { title: "Wikipedia, Durga Puja", url: "https://en.wikipedia.org/wiki/Durga_Puja" };
const DRIK = { title: "Drik Panchang, Durga Puja 2027 calendar (Kolkata)", url: "https://www.drikpanchang.com/navratri/durga-puja/durga-puja-calendar.html?year=2027&geoname-id=1275004" };

export const AKAL_BODHON: Article = {
  slug: "akal-bodhon-durga-puja-story",
  published: "2026-11-02",
  updated: "2026-11-02",
  title: l("অকালবোধন: রামের দুর্গাপুজো আর ষষ্ঠীর বোধন", "Akal Bodhon: Rama's Durga Puja and the Shashthi Bodhon"),
  description: l(
    "অকালবোধন কী, কৃত্তিবাসী রামায়ণে রামের দুর্গাপুজো, ১০৮ পদ্ম আর চোখের কাহিনি, ষষ্ঠীর বোধন আর ২০২৭ সালের তারিখ।",
    "What Akal Bodhon means, Rama's Durga worship in the Krittivasi Ramayana, the 108 lotuses and the eye, the Shashthi Bodhon, 2027 date.",
  ),
  h1: l("অকালবোধন: অসময়ে দেবীকে জাগানোর গল্প", "Akal Bodhon: the story of waking the goddess out of season"),
  lead: l(
    "শরতে দুর্গাপুজো হয় বলেই এর নাম অকালবোধন। এর পেছনের গল্প আর ষষ্ঠীর আচার এখানে রইল।",
    "Durga Puja falls in autumn, which is why the rite is called Akal Bodhon. Here is the story and the Shashthi rite.",
  ),
  icon: "🏹",
  body: [
    { kind: "h2", text: l("অকালবোধন মানে কী", "What Akal Bodhon means") },
    {
      kind: "p",
      text: l(
        "অকালবোধন কথাটির আক্ষরিক মানে দেবী দুর্গার অসময়ের জাগরণ। বিশ্বাস, শরৎকালে দেবতারা ঘুমিয়ে থাকেন, তাই দেবীকে জাগানোর এই আচারকে অকালবোধনও বলা হয়।",
        "Akal Bodhon literally means the untimely awakening of Durga. The gods are believed to sleep during autumn, so the rite that awakens the goddess is also called akalabodhana.",
      ),
      source: WIKI_DP,
    },
    { kind: "h2", text: l("কৃত্তিবাসী রামায়ণের গল্প", "The Krittivasi Ramayana story") },
    {
      kind: "p",
      text: l(
        "উত্তর, পশ্চিম আর দক্ষিণ ভারতের রামায়ণে রাবণের সঙ্গে যুদ্ধের আগে রাম সূর্যকে স্মরণ করেন। পঞ্চদশ শতকের বাংলা কৃত্তিবাসী রামায়ণে কিন্তু রাম দুর্গার পুজো করেন।",
        "In Ramayana versions from the north, west and south, Rama remembers Surya before his battle with Ravana. The 15th-century Bengali Krittivasi Ramayana, by Krittivasa, instead has Rama worshipping Durga.",
      ),
      source: WIKI_DP,
    },
    {
      kind: "p",
      text: l(
        "কাহিনি অনুযায়ী দুর্গা ১০৮টি পদ্মের একটি লুকিয়ে রাখেন। রাম তার বদলে নিজের একটি চোখ নিবেদন করেন। তখন দুর্গা আবির্ভূত হয়ে তাঁকে আশীর্বাদ করেন, রামের ভক্তিতে তুষ্ট হন।",
        "In the legend, Durga hid one of the 108 lotuses. Rama offered one of his eyes in its place. Durga then appeared, blessed him, and was satisfied with his devotion.",
      ),
      source: WIKI_DP,
    },
    { kind: "h2", text: l("ষষ্ঠীর বোধন", "Bodhon on Shashthi") },
    {
      kind: "p",
      text: l(
        "ষষ্ঠী ষষ্ঠ দিন। এদিন ভক্তরা দেবীকে অতিথি হিসেবে বরণ করেন, আর বড় উৎসব শুরু হয়। ঘটস্থাপনে ঘটে দেবীর উপস্থিতি প্রতিষ্ঠা করা হয়, আর প্রাণপ্রতিষ্ঠায় প্রতিমায়। অধিবাসে প্রতীকী উপচার দিয়ে দেবীকে অভিষিক্ত করা হয়।",
        "Shashthi is the sixth day, when devotees welcome the goddess and the major festivities begin. The ghatasthapana consecrates her presence in a ghata and the pranapratistha consecrates the idol. In adhivasa she is anointed with symbolic offerings.",
      ),
      source: WIKI_DP,
    },
    {
      kind: "p",
      text: l(
        "দ্রিক পঞ্চাঙ্গের কলকাতার তালিকায় ২০২৭ সালে ষষ্ঠী মঙ্গলবার, ৫ অক্টোবর, আর সেদিনের আচারের মধ্যে অকালবোধন আছে।",
        "In Drik Panchang's Kolkata list for 2027, Shashthi is Tuesday, 5 October, and Akal Bodhon is among that day's rites.",
      ),
      source: DRIK,
    },
    {
      kind: "tip",
      text: l(
        "ষষ্ঠীর সন্ধ্যায় মণ্ডপে গেলে বোধন আর অধিবাসের আচার দেখতে পাবে। সময় নিয়ে নিও, কারণ এটি জায়গা ভেদে আলাদা হয়।",
        "Visit a pandal on Shashthi evening to see the bodhon and adhivasa. Confirm the time first, as it varies by pandal.",
      ),
    },
  ],
  faq: [
    {
      q: l("অকালবোধন কী?", "What is Akal Bodhon?"),
      a: l("অসময়ে, অর্থাৎ শরতে, দেবী দুর্গাকে জাগানোর আচার।", "The rite of awakening Durga out of season, in autumn."),
    },
    {
      q: l("রাম কি দুর্গাপুজো করেছিলেন?", "Did Rama worship Durga?"),
      a: l("বাংলার কৃত্তিবাসী রামায়ণে হ্যাঁ: রাবণের সঙ্গে যুদ্ধের আগে তিনি দুর্গার আরাধনা করেন। অন্য অঞ্চলের রামায়ণে তিনি সূর্যকে স্মরণ করেন।", "In the Bengali Krittivasi Ramayana, yes, before the battle with Ravana. In other regional versions he remembers Surya."),
    },
    {
      q: l("১০৮ পদ্ম আর রামের চোখের গল্প কী?", "What is the 108 lotuses and Rama's eye story?"),
      a: l("দুর্গা একটি পদ্ম লুকিয়ে রাখলে রাম তার বদলে নিজের একটি চোখ নিবেদন করেন; দুর্গা তুষ্ট হয়ে আবির্ভূত হন।", "Durga hid one lotus, Rama offered an eye in its place, and Durga appeared, satisfied."),
    },
    {
      q: l("বোধন কবে হয় ২০২৭?", "When is Bodhon in 2027?"),
      a: l("ষষ্ঠীতে, মঙ্গলবার ৫ অক্টোবর ২০২৭ (দ্রিক পঞ্চাঙ্গ, কলকাতা)।", "On Shashthi, Tuesday 5 October 2027 (Drik Panchang, Kolkata)."),
    },
  ],
  related: [
    { href: "/durga-puja-2027", label: l("দুর্গাপুজো ২০২৭", "Durga Puja 2027") },
    { href: "/durga-puja-2026", label: l("দুর্গাপুজো ২০২৬", "Durga Puja 2026") },
    { href: "/mahalaya-2027", label: l("মহালয়া ২০২৭", "Mahalaya 2027") },
    { href: "/blog/nabapatrika-kola-bou", label: l("নবপত্রিকা", "Nabapatrika") },
    { href: "/blog/sandhi-puja-108-lamps", label: l("সন্ধিপুজো", "Sandhi Puja") },
  ],
  sources: [WIKI_DP, DRIK],
};

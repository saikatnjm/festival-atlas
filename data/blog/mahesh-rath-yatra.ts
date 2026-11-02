// Blog: Mahesh Rath Yatra. Facts from Wikipedia "Ratha Yatra" and "Snana Yatra", fetched 2 Nov 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI_RATH = { title: "Wikipedia, Ratha Yatra", url: "https://en.wikipedia.org/wiki/Ratha_Yatra" };
const WIKI_SNANA = { title: "Wikipedia, Snana Yatra", url: "https://en.wikipedia.org/wiki/Snana_Yatra" };

export const MAHESH_RATH_YATRA: Article = {
  slug: "mahesh-rath-yatra-serampore",
  published: "2026-11-02",
  updated: "2026-11-02",
  title: l("মাহেশের রথযাত্রা: বাংলার সবচেয়ে পুরোনো রথ", "Mahesh Rath Yatra: Bengal's Oldest Chariot Festival"),
  description: l(
    "শ্রীরামপুরের মাহেশের রথ ১৩৯৬ খ্রিস্টাব্দ থেকে, মাসব্যাপী মেলা, গুন্ডিচাবাড়ি যাত্রা আর স্নানযাত্রা।",
    "Mahesh's Rath Yatra in Serampore, celebrated since 1396 CE: the month-long fair, the trip to Gundicha Bari and Snana Yatra.",
  ),
  h1: l("মাহেশের রথযাত্রা, শ্রীরামপুর", "Rath Yatra of Mahesh, Serampore"),
  lead: l(
    "পুরীর পর ভারতের দ্বিতীয় প্রাচীনতম রথ বলা হয় একে। জেনে নাও কী হয় সেখানে।",
    "It is called the second oldest chariot festival in India after Puri. Here is what happens.",
  ),
  icon: "🛕",
  body: [
    { kind: "h2", text: l("কতটা পুরোনো", "How old it is") },
    {
      kind: "p",
      text: l(
        "মাহেশের রথকে পুরীর রথযাত্রার পর ভারতের দ্বিতীয় প্রাচীনতম বলা হয়, আর বাংলার সবচেয়ে পুরোনো; এটি ১৩৯৬ খ্রিস্টাব্দ থেকে পালিত হচ্ছে।",
        "It is described as the second oldest chariot festival in India after Puri's, and the oldest in Bengal, celebrated since 1396 CE.",
      ),
      source: WIKI_RATH,
    },
    { kind: "h2", text: l("মাসব্যাপী উৎসব আর মেলা", "A month-long fair") },
    {
      kind: "p",
      text: l(
        "শ্রীরামপুরের মাহেশে উৎসব চলে প্রায় একমাস, তখন বড় মেলা বসে।",
        "At Mahesh in Serampore the festival lasts about a month, with a grand fair at that time.",
      ),
      source: WIKI_RATH,
    },
    { kind: "h2", text: l("রথ টানা", "Pulling the chariots") },
    {
      kind: "p",
      text: l(
        "ভক্তরা জগন্নাথ, বলরাম আর সুভদ্রার রথের দড়ি টানেন, মন্দির থেকে গুন্ডিচাবাড়ি যাওয়া আর ফেরার পথে।",
        "Devotees pull the ropes of the chariots of Jagannath, Balarama and Subhadra, on the way from the temple to Gundicha Bari and back.",
      ),
      source: WIKI_RATH,
    },
    { kind: "h2", text: l("আগে স্নানযাত্রা", "Snana Yatra first") },
    {
      kind: "p",
      text: l(
        "মাহেশের স্নানযাত্রা পুরীর বাইরের সবচেয়ে পুরোনোগুলোর একটি, চতুর্দশ শতকের বলে মনে করা হয়। স্নানযাত্রা জ্যৈষ্ঠ পূর্ণিমায়, জগন্নাথের জন্মদিন হিসেবেও ধরা হয়।",
        "The Mahesh Snana Yatra is one of the oldest outside Puri, believed to date to the 14th century. Snana Yatra is on Jyeshtha Purnima and is taken as Jagannath's birthday.",
      ),
      source: WIKI_SNANA,
    },
    {
      kind: "tip",
      text: l(
        "রথের দিন ভিড় বেশি; সকাল সকাল যাও, ট্রেনে শ্রীরামপুর বা কাছের স্টেশনের সময় আগে দেখে নিও।",
        "Rath day is crowded; go early and check train timings to Serampore beforehand.",
      ),
    },
  ],
  faq: [
    {
      q: l("মাহেশের রথ কত বছরের পুরোনো?", "How old is the Mahesh Rath Yatra?"),
      a: l("১৩৯৬ খ্রিস্টাব্দ থেকে পালিত হচ্ছে বলা হয়।", "It is said to be celebrated since 1396 CE."),
    },
    {
      q: l("মাহেশের রথ কোথায় হয়?", "Where is the Mahesh Rath Yatra held?"),
      a: l("পশ্চিমবঙ্গের শ্রীরামপুরের মাহেশে।", "At Mahesh in Serampore, West Bengal."),
    },
    {
      q: l("রথযাত্রা ২০২৭ কবে?", "When is Rath Yatra 2027?"),
      a: l("সোমবার ৫ জুলাই; তিথির সময় আমাদের রথযাত্রা ২০২৭ পাতায়।", "Monday 5 July; tithi times are on our Rath Yatra 2027 page."),
    },
    {
      q: l("মাহেশের রথ কয় দিন চলে?", "How long does the Mahesh festival last?"),
      a: l("প্রায় একমাস, মেলাসহ।", "About a month, with a fair."),
    },
  ],
  related: [
    { href: "/rath-yatra-2027", label: l("রথযাত্রা ২০২৭", "Rath Yatra 2027") },
    { href: "/snana-yatra-2027", label: l("স্নানযাত্রা ২০২৭", "Snana Yatra 2027") },
    { href: "/blog/mayapur-iskcon-chandrodaya-temple", label: l("মায়াপুর ইসকন", "Mayapur ISKCON") },
    { href: "/blog/jhulan-yatra-radha-krishna", label: l("ঝুলন যাত্রা", "Jhulan Yatra") },
  ],
  sources: [WIKI_RATH, WIKI_SNANA],
};

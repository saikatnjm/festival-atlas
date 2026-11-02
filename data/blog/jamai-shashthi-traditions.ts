// Blog: Jamai Shashthi. Facts from Wikipedia "Jamai Sasthi", fetched 2 Nov 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI = { title: "Wikipedia, Jamai Sasthi", url: "https://en.wikipedia.org/wiki/Jamai_Sasthi" };

export const JAMAI_SHASHTHI: Article = {
  slug: "jamai-shashthi-traditions",
  published: "2026-11-02",
  updated: "2026-11-02",
  title: l("জামাইষষ্ঠী: রীতি, গল্প আর ভোজ", "Jamai Shashthi: Rituals, Legend and Feast"),
  description: l(
    "জামাইষষ্ঠী কবে হয়, শ্বশুরবাড়িতে জামাইয়ের আপ্যায়ন, ষষ্ঠী দেবীর পুজো আর বিড়ালের গল্প।",
    "When Jamai Shashthi falls, the son-in-law's feast, Shashthi Puja and the legend of the cat.",
  ),
  h1: l("জামাইষষ্ঠী: জামাইয়ের আদরের দিন", "Jamai Shashthi: the son-in-law's day"),
  lead: l(
    "জ্যৈষ্ঠের এক দিনে জামাই ফেরেন শ্বশুরবাড়ি, পাতে পড়ে ভূরিভোজ। রীতিটা কোথা থেকে এল, জেনে নাও।",
    "On one day of Joishtho the son-in-law returns to his in-laws' home for a big meal. Here is where the custom comes from.",
  ),
  icon: "🍽️",
  body: [
    { kind: "h2", text: l("কবে হয়", "When it is held") },
    {
      kind: "p",
      text: l(
        "জ্যৈষ্ঠ মাসের শুক্লপক্ষের ষষ্ঠী তিথিতে, বছরে একদিন। বাংলাদেশ আর ভারতে পালিত হয়।",
        "On the sixth tithi (Shashthi) of the bright fortnight of the month of Joishtho, one day a year. It is observed in Bangladesh and India.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("পুজো আর আপ্যায়ন", "Puja and hospitality") },
    {
      kind: "p",
      text: l(
        "শাশুড়ি ষষ্ঠী দেবীর পুজো করেন, মেয়ে-জামাইয়ের জন্য আশীর্বাদ চেয়ে। জামাইকে মেয়ের বাপের বাড়িতে নিমন্ত্রণ করে আপ্যায়ন করা হয়; দিনটিকে পারিবারিক মিলনের দিন বলা হয়, যখন পুরো পরিবার একসঙ্গে খায়।",
        "The mother-in-law performs Shashthi Puja to please the goddess and seek blessings for her daughters and sons-in-law. The son-in-law is invited to the bride's family home and entertained; the day is called a family reunion day, when the whole family eats together.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "শাশুড়ির রান্না করা নিরামিষ আর আমিষ দুই ধরনের ভূরিভোজ জামাইকে খাওয়ানো হয়।",
        "The son-in-law is served a sumptuous feast of vegetarian and non-vegetarian food prepared by the mother-in-law.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("ষষ্ঠী আর বিড়ালের গল্প", "Shashthi and the cat") },
    {
      kind: "p",
      text: l(
        "ষষ্ঠী দেবীর বাহন বিড়াল। গল্পে এক লোভী বউ খাবার চুরি করে দোষ দেয় বিড়ালের ওপর; রেগে ষষ্ঠী তার সন্তানের প্রাণ নেন। পরে বুড়ির বেশে এসে ভুল মনে করিয়ে দেন, আর বউ ক্ষমা চাইলে সন্তানকে বাঁচিয়ে দেন।",
        "Shashthi's vehicle is the cat. In the tale, a greedy wife steals food and blames the cat; in anger Shashthi takes her child's life. She later appears as an old woman, reminds her of the fault, and revives the child after the wife apologises.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("রীতির পেছনের কারণ", "The social reason") },
    {
      kind: "p",
      text: l(
        "মেয়েদের প্রায়ই দূরে বিয়ে হত, আর লম্বা যাত্রা ছিল খরচের ও ক্লান্তিকর। এই রীতিতে মেয়ে-জামাই কয়েক দিন এসে থাকতেন, বড় পরিবারও তাঁদের সঙ্গে দেখা করতে পারত। পুজোটি সুস্থ সন্তানের কামনার সঙ্গেও জড়িত।",
        "Girls were often married far away, and long travel was costly and tiring. The custom let the couple visit for a few days so the wider family could meet them. The puja is also linked to a wish for healthy children.",
      ),
      source: WIKI,
    },
    {
      kind: "tip",
      text: l(
        "জামাইষষ্ঠীর তারিখ ষষ্ঠী তিথির ওপর নির্ভর করে; আগে পাঁজি দেখে নিমন্ত্রণ সেরে রেখো।",
        "The date depends on the Shashthi tithi; check the panjika and send the invitation early.",
      ),
    },
  ],
  faq: [
    {
      q: l("জামাইষষ্ঠী কবে হয়?", "When is Jamai Shashthi?"),
      a: l("জ্যৈষ্ঠের শুক্লপক্ষের ষষ্ঠী তিথিতে। ২০২৭-এর তারিখ আমাদের জামাইষষ্ঠী ২০২৭ পাতায়।", "On Shashthi of the bright fortnight of Joishtho. The 2027 date is on our Jamai Shashthi 2027 page."),
    },
    {
      q: l("জামাইষষ্ঠী কেন পালন করা হয়?", "Why is Jamai Shashthi celebrated?"),
      a: l("ষষ্ঠী দেবীর পুজো করে মেয়ে-জামাইয়ের জন্য আশীর্বাদ চাওয়া হয়, আর জামাইকে আপ্যায়ন করে পরিবার মিলিত হয়।", "Shashthi is worshipped for blessings on daughters and sons-in-law, and the family reunites around the son-in-law."),
    },
    {
      q: l("জামাইষষ্ঠীতে ষষ্ঠী দেবীর বাহন কী?", "What is Shashthi's vehicle?"),
      a: l("বিড়াল।", "The cat."),
    },
  ],
  related: [
    { href: "/jamai-shashthi-2027", label: l("জামাইষষ্ঠী ২০২৭", "Jamai Shashthi 2027") },
    { href: "/blog/bhai-phota-rituals", label: l("ভাইফোঁটা", "Bhai Phota") },
    { href: "/blog/poila-boishakh-traditions", label: l("পয়লা বৈশাখের রীতি", "Poila Boishakh traditions") },
    { href: "/calendar-2027", label: l("২০২৭-এর ক্যালেন্ডার", "2027 calendar") },
  ],
  sources: [WIKI],
};

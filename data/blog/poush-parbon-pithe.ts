// Blog: Poush Parbon and pithe. Facts from Wikipedia "Pitha" and "Makar Sankranti", fetched 2 Nov 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI_PITHA = { title: "Wikipedia, Pitha", url: "https://en.wikipedia.org/wiki/Pitha" };
const WIKI_SANK = { title: "Wikipedia, Makar Sankranti", url: "https://en.wikipedia.org/wiki/Makar_Sankranti" };

export const POUSH_PARBON_PITHE: Article = {
  slug: "poush-parbon-pithe-puli",
  published: "2026-11-02",
  updated: "2026-11-02",
  title: l("পৌষ পার্বণ আর পিঠে: পুলি, পাটিসাপটা", "Poush Parbon and Pithe: Puli, Patishapta"),
  description: l(
    "পৌষ পার্বণ বা পৌষ সংক্রান্তিতে কোন পিঠে হয়: পাটিসাপটা, পুলি, পাকন আর ভাপা পিঠের পরিচয়।",
    "Which pithe belong to Poush Parbon or Poush Sankranti: patishapta, puli, pakon and bhapa pitha explained.",
  ),
  h1: l("পৌষ পার্বণ আর পিঠে", "Poush Parbon and pithe"),
  lead: l(
    "ফসল তোলার উৎসবে পিঠের স্বাদ ছাড়া বাঙালির পৌষ অসম্পূর্ণ। কোন পিঠে কেমন, জেনে নাও।",
    "A Bengali Poush feels incomplete without pithe at the harvest festival. Here is what each one is.",
  ),
  icon: "🥞",
  body: [
    { kind: "h2", text: l("পৌষ সংক্রান্তি", "Poush Sankranti") },
    {
      kind: "p",
      text: l(
        "পশ্চিমবঙ্গে মকর সংক্রান্তির নাম পৌষ সংক্রান্তি বা মকর সংক্রান্তি (মোকর সোংক্রান্তি)।",
        "West Bengal's name for the festival is Poush Sankranti or Mokor Sonkranti.",
      ),
      source: WIKI_SANK,
    },
    {
      kind: "p",
      text: l(
        "কিছু বিশেষ পিঠে ফসল তোলার উৎসবের সঙ্গে গভীরভাবে জড়িত; পৌষ পার্বণ বা মকর সংক্রান্তি, যা ১৪ জানুয়ারি পালিত হয়, তার উদাহরণ।",
        "Some pitha are strongly tied to harvest festivals; Poush parbon or Makar Sankranti, celebrated on 14 January, is an example.",
      ),
      source: WIKI_PITHA,
    },
    { kind: "h2", text: l("পাটিসাপটা", "Patishapta") },
    {
      kind: "p",
      text: l(
        "গুড় আর নারকেল বা ক্ষীরের পুর ভরা পাতলা চাপাটির মতো পিঠে।",
        "A thin crepe stuffed with jaggery and coconut or kheer.",
      ),
      source: WIKI_PITHA,
    },
    { kind: "h2", text: l("পুলি", "Puli") },
    {
      kind: "p",
      text: l(
        "নারকেলের পুর বা ক্ষীর ভরা পুলি দেখতে অনেকটা ডাম্পলিংয়ের মতো; ভাজা বা ভাপানো দুভাবেই হয়।",
        "Puli is a dumpling-like pitha stuffed with a coconut mixture or kheer, and can be fried or steamed.",
      ),
      source: WIKI_PITHA,
    },
    { kind: "h2", text: l("পাকন আর ভাপা পিঠে", "Pakon and bhapa pitha") },
    {
      kind: "p",
      text: l(
        "পাকন পিঠে বিশেষ খামিরের ছোট টুকরো, নকশা কাটা, ভেজে এলাচ দেওয়া চিনির শিরায় ভেজানো। ভাপা পিঠে ভাপানো চালের কেক।",
        "Pakon pitha is a small piece of special dough with decorative patterns, fried and soaked in shira, a cardamom-flavoured sugar syrup. Bhapa pitha is a steamed rice cake.",
      ),
      source: WIKI_PITHA,
    },
    { kind: "h2", text: l("উপকরণ আর সঙ্গী", "Ingredients and accompaniments") },
    {
      kind: "p",
      text: l(
        "চালের গুঁড়ো, দুধ, নারকেল আর গুড় পিঠের সাধারণ উপকরণ। পিঠের সঙ্গে খেজুরের গুড়ও পরিবেশন করা হয়।",
        "Rice flour, milk, coconut and jaggery are common in pithe. Date tree molasses is among the sweet syrups served with them.",
      ),
      source: WIKI_PITHA,
    },
    {
      kind: "tip",
      text: l(
        "পিঠে ভাজার সময় তেল গরম থাকে; বাচ্চাদের উনুনের থেকে দূরে রেখো।",
        "Oil is hot when frying pithe; keep children away from the stove.",
      ),
    },
  ],
  faq: [
    {
      q: l("পৌষ পার্বণে কী কী পিঠে হয়?", "Which pithe are made for Poush Parbon?"),
      a: l("পাটিসাপটা, পুলি, পাকন আর ভাপা পিঠে-সহ নানা পিঠে হয়।", "Patishapta, puli, pakon and bhapa pitha among others."),
    },
    {
      q: l("পাটিসাপটা কী দিয়ে বানায়?", "What is patishapta filled with?"),
      a: l("গুড় আর নারকেল বা ক্ষীরের পুর ভরা পাতলা চাপাটি।", "A thin crepe filled with jaggery and coconut or kheer."),
    },
    {
      q: l("পৌষ সংক্রান্তি ২০২৭ কবে?", "When is Poush Sankranti 2027?"),
      a: l("তারিখ আর সংক্রান্তির সময় আমাদের পৌষ সংক্রান্তি ২০২৭ পাতায়।", "The date and Sankranti time are on our Poush Sankranti 2027 page."),
    },
    {
      q: l("পুলি পিঠে কীভাবে হয়?", "How is puli pitha made?"),
      a: l("নারকেলের পুর বা ক্ষীর ভরে ভেজে বা ভাপিয়ে।", "Stuffed with coconut or kheer, then fried or steamed."),
    },
  ],
  related: [
    { href: "/poush-sankranti-2027", label: l("পৌষ সংক্রান্তি ২০২৭", "Poush Sankranti 2027") },
    { href: "/sankranti-2027", label: l("সংক্রান্তি ২০২৭", "Sankranti 2027") },
    { href: "/blog/poush-mela-shantiniketan", label: l("পৌষ মেলা", "Poush Mela") },
    { href: "/blog/nabanna-festival", label: l("নবান্ন", "Nabanna") },
  ],
  sources: [WIKI_PITHA, WIKI_SANK],
};

// Blog: Poush Mela, Shantiniketan. Facts come from pages fetched on 31 Oct 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI = { title: "Wikipedia, Poush Mela", url: "https://en.wikipedia.org/wiki/Poush_Mela" };
const ETV = { title: "ETV Bharat, Visva-Bharati's historic Poush Mela returns with anti-pollution measures (12 Dec 2025)", url: "https://www.etvbharat.com/en/bharat/visva-bharatis-historic-poush-mela-returns-with-anti-pollution-measures-enn25121205630" };
const STATION = { title: "Wikipedia, Bolpur Shantiniketan railway station", url: "https://en.wikipedia.org/wiki/Bolpur_Shantiniketan_railway_station" };

export const POUSH_MELA: Article = {
  slug: "poush-mela-shantiniketan",
  published: "2026-10-31",
  updated: "2026-10-31",
  title: l("পৌষ মেলা শান্তিনিকেতন: ইতিহাস আর যাওয়ার পথ", "Poush Mela Shantiniketan: History and How to Go"),
  description: l(
    "শান্তিনিকেতনের পৌষ মেলা ৭ পৌষ থেকে, ১৮৯৪ থেকে চলছে। বাউল, কীর্তন, স্টল, ২০২৫-এর তারিখ আর বোলপুর স্টেশনে যাওয়ার পথ।",
    "Shantiniketan's Poush Mela starts on 7 Poush and has run since 1894. Baul, kirtan, stalls, the 2025 dates and how to reach Bolpur Shantiniketan station.",
  ),
  h1: l("পৌষ মেলা: শান্তিনিকেতনের শীতের মেলা", "Poush Mela: Shantiniketan's winter fair"),
  lead: l(
    "পৌষের শুরুতে শান্তিনিকেতনে বসে মেলা। কেমন তার ইতিহাস, কী কী দেখবে, আর কীভাবে যাবে।",
    "Early in Poush, Shantiniketan hosts its famous fair. A look at its history, what to see, and how to get there.",
  ),
  icon: "🎶",
  body: [
    { kind: "h2", text: l("পৌষ মেলার ইতিহাস", "History of Poush Mela") },
    {
      kind: "p",
      text: l(
        "মেলা শুরু হয় পৌষ মাসের সাত তারিখে। উইকিপিডিয়া অনুযায়ী ১৮৯৪ সাল থেকে এটি প্রতি বছর হয়ে আসছে। এটি বীরভূম জেলার শান্তিনিকেতনে বসে, ফসল তোলার সময়ের কাছাকাছি।",
        "The fair opens on the seventh day of the month of Poush. Wikipedia says it has been held every year from 1894 onwards. It takes place in Santiniketan in Birbhum district, around the harvest period.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "মেলা তিন বার বন্ধ ছিল: ১৯৪৩-এর মন্বন্তরে, ১৯৪৬-এর ডাইরেক্ট অ্যাকশন ডে-তে, আর কোভিড অতিমারির সময়। উইকিপিডিয়া বলছে, সরকারিভাবে তিন দিনের হলেও ২০১৭ থেকে এটি ছয় দিন চলেছে।",
        "It was halted three times: during the Bengal Famine of 1943, on Direct Action Day in 1946, and during the COVID-19 pandemic. Wikipedia notes it officially runs three days, though from 2017 it ran six.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("মেলায় কী হয়", "What happens at the fair") },
    {
      kind: "p",
      text: l(
        "মেলার পরিচয় বাংলার লোকসংগীতের জীবন্ত অনুষ্ঠানে: বাউল, কীর্তন আর কবিগান। উইকিপিডিয়া অনুযায়ী প্রায় দেড় হাজার স্টল বসে।",
        "The fair is known for live Bengali folk music such as baul, kirtan and kobigan. Wikipedia says some 1,500 stalls take part.",
      ),
      source: WIKI,
    },
    {
      kind: "tip",
      text: l(
        "বাউলের গান শুনতে চাইলে আর স্টলে ঘুরতে হলে হাতে পুরো একটা দিন রাখো। ভিড়ে দলছুট হলে দেখা করার জায়গা আগে ঠিক করে নাও, আর নগদ আর ফোন সামলে রেখো।",
        "If you want to hear baul singers and browse the stalls, set aside a full day. Agree a meeting point in case you get separated in the crowd, and keep cash and phone safe.",
      ),
    },
    { kind: "h2", text: l("২০২৫ আর ২০২৬", "2025 and 2026") },
    {
      kind: "p",
      text: l(
        "২০২৫ সালে ইটিভি ভারতের ১২ ডিসেম্বরের খবর অনুযায়ী মেলা শুরু হওয়ার কথা ২৩ ডিসেম্বর, শান্তিনিকেতনের পূর্বপল্লী মাঠে, চলবে ২৮ ডিসেম্বর পর্যন্ত। দূষণ আটকাতে বিশেষ ব্যবস্থার কথা বলা হয়েছিল। খবরে লেখা, মেলা ২০২৪ থেকে আবার শুরু হয়েছে বিশ্বভারতীর তত্ত্বাবধানে।",
        "ETV Bharat's report of 12 December 2025 said the 2025 fair would begin on 23 December at the Purba Palli ground of Santiniketan and run to 28 December. It spoke of special measures to prevent pollution, and said the fair started again from 2024 under the supervision of Visva-Bharati.",
      ),
      source: ETV,
    },
    {
      kind: "p",
      text: l(
        "৩১ অক্টোবর ২০২৬ পর্যন্ত আমরা ২০২৬ সালের মেলার তারিখের কোনও ঘোষণা পাইনি। তারিখ ঘোষণা হলে এই লেখা হালনাগাদ করা হবে।",
        "As of 31 October 2026 we have found no announcement of the 2026 fair dates. This article will be updated once they are announced.",
      ),
    },
    { kind: "h2", text: l("কীভাবে যাবে", "Getting there") },
    {
      kind: "p",
      text: l(
        "বোলপুর শান্তিনিকেতন স্টেশন বীরভূম জেলায়, বর্ধমান–রামপুরহাট শাখায়। হাওড়া–নিউ জলপাইগুড়ি মেইন লাইনও স্টেশনের তালিকায় আছে। স্টেশন কোড BHP, ইস্টার্ন রেলওয়ের হাওড়া ডিভিশন।",
        "Bolpur Shantiniketan station is in Birbhum district on the Bardhaman–Rampurhat section, and its listing also names the Howrah–New Jalpaiguri main line. Its station code is BHP, under Eastern Railway's Howrah division.",
      ),
      source: STATION,
    },
    {
      kind: "tip",
      text: l(
        "মেলার সময় ট্রেন আর যাতায়াতের ভিড় বাড়ে। টিকিট আগে কেটে রাখো, আর মেলার মাঠে প্রবেশ বা অনলাইন বুকিংয়ের নিয়ম আছে কি না বিশ্বভারতীর ঘোষণায় দেখে নাও। ২০২৫-এর খবরে অনলাইন বুকিং সাইটের কথা ছিল।",
        "Trains and local transport get busier during the fair. Book tickets early, and check Visva-Bharati's announcements for entry or online booking rules. The 2025 report mentioned an online booking site.",
      ),
    },
  ],
  faq: [
    {
      q: l("পৌষ মেলা কবে শুরু হয়?", "When does Poush Mela start?"),
      a: l("পৌষ মাসের সাত তারিখে, ৭ পৌষ।", "On the seventh day of the month of Poush, 7 Poush."),
    },
    {
      q: l("পৌষ মেলা কত সাল থেকে চলছে?", "Since when has Poush Mela been held?"),
      a: l("উইকিপিডিয়া অনুযায়ী ১৮৯৪ সাল থেকে প্রতি বছর, মাঝে তিন বার বন্ধ ছিল।", "Per Wikipedia, every year from 1894, apart from three halts."),
    },
    {
      q: l("২০২৬ সালে পৌষ মেলা কবে?", "When is Poush Mela 2026?"),
      a: l("৩১ অক্টোবর ২০২৬ পর্যন্ত তারিখ ঘোষণা আমরা পাইনি। ২০২৫-এ ছিল ২৩ থেকে ২৮ ডিসেম্বর।", "We have not found announced dates as of 31 October 2026. In 2025 it ran 23 to 28 December."),
    },
    {
      q: l("পৌষ মেলা শান্তিনিকেতনের কোথায় হয়?", "Where is Poush Mela held in Shantiniketan?"),
      a: l("২০২৫-এ পূর্বপল্লী মাঠে হয়েছিল, ইটিভি ভারতের খবর অনুযায়ী।", "In 2025 it was at the Purba Palli ground, according to ETV Bharat."),
    },
    {
      q: l("কলকাতা থেকে পৌষ মেলায় কীভাবে যাব?", "How do I get to Poush Mela from Kolkata?"),
      a: l("ট্রেনে বোলপুর শান্তিনিকেতন স্টেশন (BHP), যা হাওড়া–নিউ জলপাইগুড়ি মেইন লাইনের তালিকায় আছে।", "By train to Bolpur Shantiniketan station (BHP), listed on the Howrah–New Jalpaiguri main line."),
    },
  ],
  related: [
    { href: "/poush-sankranti-2027", label: l("পৌষ সংক্রান্তি ২০২৭", "Poush Sankranti 2027") },
    { href: "/greetings/poush", label: l("পৌষের শুভেচ্ছা কার্ড", "Poush greeting cards") },
    { href: "/blog/poila-boishakh-traditions", label: l("পয়লা বৈশাখের রীতি", "Poila Boishakh traditions") },
  ],
  sources: [WIKI, ETV, STATION],
};

// Blog: Tarapith and Kali Puja. Facts come from pages fetched on 31 Oct 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI_TARAPITH = { title: "Wikipedia, Tarapith", url: "https://en.wikipedia.org/wiki/Tarapith" };
const WIKI_BAMAKHEPA = { title: "Wikipedia, Bamakhepa", url: "https://en.wikipedia.org/wiki/Bamakhepa" };
const WIKI_STATION = { title: "Wikipedia, Rampurhat Junction railway station", url: "https://en.wikipedia.org/wiki/Rampurhat_Junction_railway_station" };
const DRIK = { title: "Drik Panchang, Kali Puja 2026 date and time (Kolkata)", url: "https://www.drikpanchang.com/diwali/kali-puja/bengal-kalipuja-date-time.html?geoname-id=1275004&year=2026" };

export const TARAPITH_KALI_PUJA: Article = {
  slug: "tarapith-kali-puja",
  published: "2026-10-31",
  updated: "2026-10-31",
  title: l("তারাপীঠে কালীপুজো: মন্দির, বামাক্ষ্যাপা, যাওয়ার পথ", "Tarapith Kali Puja: Temple, Bamakhepa, How to Go"),
  description: l(
    "তারাপীঠ মন্দির, মা তারা, সাধক বামাক্ষ্যাপা, শ্মশান, রামপুরহাট থেকে যাওয়ার পথ আর ২০২৬-এর কালীপুজোর দিনক্ষণ এক জায়গায়।",
    "Tarapith temple, Tara Maa, the saint Bamakhepa, the cremation ground, getting there from Rampurhat, and the 2026 Kali Puja date in one place.",
  ),
  h1: l("তারাপীঠ আর কালীপুজো: যা জানা দরকার", "Tarapith and Kali Puja: what to know"),
  lead: l(
    "বীরভূমের তারাপীঠ তন্ত্রসাধনার তীর্থ। কালীপুজোর রাতে সেখানে যেতে চাইলে আগে এই কথাগুলো জেনে নাও।",
    "Tarapith in Birbhum is a pilgrimage town of tantric worship. If you plan to go on Kali Puja night, here is what to know first.",
  ),
  icon: "🔱",
  body: [
    { kind: "h2", text: l("তারাপীঠ আর মা তারা", "Tarapith and Tara Maa") },
    {
      kind: "p",
      text: l(
        "তারাপীঠ পশ্চিমবঙ্গের বীরভূম জেলার রামপুরহাট মহকুমার একটি শহর। এখানকার তান্ত্রিক হিন্দু মন্দির দেবী তারার, আর রোজ হাজার হাজার তীর্থযাত্রী আসেন। মন্দিরের গায়েই আছে হিন্দুদের শ্মশান।",
        "Tarapith is a town in the Rampurhat subdivision of Birbhum district, West Bengal. Its tantric Hindu temple is dedicated to the goddess Tara, and thousands of pilgrims visit every day. A Hindu cremation ground lies right next to the temple.",
      ),
      source: WIKI_TARAPITH,
    },
    {
      kind: "p",
      text: l(
        "রামপুরহাট জংশনের পাতার বর্ণনা অনুযায়ী মা তারার মন্দির ভারতের বায়ান্নটি শক্তিপীঠের একটি।",
        "The Rampurhat Junction page describes the Maa Tara temple as one of the 52 Shakti Peethams of India.",
      ),
      source: WIKI_STATION,
    },
    { kind: "h2", text: l("সাধক বামাক্ষ্যাপা আর শ্মশান", "Bamakhepa and the cremation ground") },
    {
      kind: "p",
      text: l(
        "তন্ত্রসাধক বামাক্ষ্যাপার আসল নাম বামাচরণ চট্টোপাধ্যায়, জন্ম বীরভূমের আটলা গ্রামে, দেহত্যাগ তারাপীঠে। তিনি মন্দিরের কাছে থাকতেন আর শ্মশানে ধ্যান করতেন।",
        "The tantric saint Bamakhepa was born Bamacharan Chattopadhyay in Atla village, Birbhum, and died at Tarapith. He lived near the temple and meditated in the cremation grounds.",
      ),
      source: WIKI_BAMAKHEPA,
    },
    {
      kind: "p",
      text: l(
        "বিশ্বাস, শ্মশানেই দেবী তারা তাঁকে উগ্র রূপে দেখা দিয়েছিলেন। তাঁর সমাধি বা মন্দির তারাপীঠ মন্দিরের কাছেই।",
        "It is believed that Goddess Tara appeared to him in her fierce form in the cremation grounds. His shrine stands near the Tarapith temple.",
      ),
      source: WIKI_BAMAKHEPA,
    },
    { kind: "h2", text: l("২০২৬-এর কালীপুজো", "Kali Puja in 2026") },
    {
      kind: "p",
      text: l(
        "২০২৬ সালে কালীপুজো রবিবার ৮ নভেম্বর। দ্রিক পঞ্চাঙ্গের কলকাতার হিসেবে নিশীথ কাল রাত ১০টা ৫৫ থেকে ১১টা ৪৬, অমাবস্যা ৮ নভেম্বর সকাল ১১টা ২৭ থেকে ৯ নভেম্বর দুপুর ১২টা ৩১। এগুলো কলকাতার সময়; তারাপীঠে পুজোর সময় মন্দির বা স্থানীয় সূত্রে মিলিয়ে নাও।",
        "Kali Puja in 2026 is on Sunday 8 November. Drik Panchang's Kolkata listing gives Nishita time as 10:55 pm to 11:46 pm, and Amavasya from 11:27 am on 8 November to 12:31 pm on 9 November. These are Kolkata timings; confirm the puja schedule at Tarapith with the temple or local sources.",
      ),
      source: DRIK,
    },
    {
      kind: "tip",
      text: l(
        "তারাপীঠের কালীপুজোর রাতের বিশেষ রীতি নিয়ে আমরা এমন কোনও সূত্র পাইনি যা পড়ে দেখা গেছে, তাই এখানে কিছু লিখছি না। যাওয়ার আগে মন্দির কমিটি বা স্থানীয় খবর দেখে নাও।",
        "We did not find a source we could read that describes Tarapith's Kali Puja night rituals, so we are not guessing here. Check with the temple committee or local news before you go.",
      ),
    },
    { kind: "h2", text: l("কীভাবে যাবে", "Getting there") },
    {
      kind: "p",
      text: l(
        "নিকটতম রেল স্টেশন রামপুরহাট আর তারাপীঠ রোড। রামপুরহাট জংশন হাওড়া বিভাগের পূর্ব রেলের স্টেশন, কোড RPH, হাওড়া–নিউ জলপাইগুড়ি মেইন লাইনে। পাতা অনুযায়ী তারাপীঠ রামপুরহাট স্টেশন থেকে ৯ কিমি, আর হাওড়া জংশন থেকে সবচেয়ে ছোট পথে ২০৭ কিমি।",
        "The nearest railway stations are Rampurhat and Tarapith Road. Rampurhat Junction is an Eastern Railway station in the Howrah division, code RPH, on the Howrah–New Jalpaiguri main line. The page says Tarapith is 9 km from Rampurhat station, and Howrah Junction is 207 km away by the shortest route.",
      ),
      source: WIKI_STATION,
    },
    {
      kind: "tip",
      text: l(
        "কালীপুজোর সময় ভিড় বাড়ে ধরে নিয়ে আগে থেকে ট্রেনের টিকিট কেটে রাখো। রামপুরহাট থেকে মন্দির পর্যন্ত কীসে যাবে, ফেরার গাড়ি কখন, তা আগেভাগে জেনে নাও। পারলে রাত কাটানোর জায়গা আগে বুক করো।",
        "Expect crowds around Kali Puja, so book train tickets early. Work out how you will get from Rampurhat to the temple and when your return transport runs. If you can, book a place to stay in advance.",
      ),
    },
    {
      kind: "tip",
      text: l(
        "ভিড়ে দলের সবাই একসঙ্গে থেকো, মিলনস্থল ঠিক করে রাখো, দামি জিনিস আর বেশি টাকা সঙ্গে নিও না। মন্দিরের নিয়ম আর পুলিশ-স্বেচ্ছাসেবকদের নির্দেশ মেনে চলো।",
        "Stay together in the crowd, agree a meeting point, and leave valuables and extra cash behind. Follow the temple's rules and the instructions of police and volunteers.",
      ),
    },
  ],
  faq: [
    {
      q: l("তারাপীঠ মন্দির কোথায়?", "Where is Tarapith temple?"),
      a: l("পশ্চিমবঙ্গের বীরভূম জেলার রামপুরহাট মহকুমায়।", "In the Rampurhat subdivision of Birbhum district, West Bengal."),
    },
    {
      q: l("তারাপীঠে কীভাবে যাব?", "How do I get to Tarapith?"),
      a: l("ট্রেনে রামপুরহাট (কোড RPH) বা তারাপীঠ রোড স্টেশন; রামপুরহাট স্টেশন থেকে তারাপীঠ ৯ কিমি বলে লেখা আছে।", "By train to Rampurhat (code RPH) or Tarapith Road station; Tarapith is stated to be 9 km from Rampurhat station."),
    },
    {
      q: l("বামাক্ষ্যাপা কে ছিলেন?", "Who was Bamakhepa?"),
      a: l("তারাপীঠের তন্ত্রসাধক, আসল নাম বামাচরণ চট্টোপাধ্যায়; শ্মশানে ধ্যান করতেন।", "A tantric saint of Tarapith, born Bamacharan Chattopadhyay, who meditated in the cremation grounds."),
    },
    {
      q: l("২০২৬ সালে কালীপুজো কবে?", "When is Kali Puja in 2026?"),
      a: l("রবিবার ৮ নভেম্বর ২০২৬। কলকাতায় নিশীথ কাল রাত ১০টা ৫৫ থেকে ১১টা ৪৬।", "Sunday 8 November 2026. In Kolkata the Nishita time is 10:55 pm to 11:46 pm."),
    },
    {
      q: l("তারাপীঠ কি শক্তিপীঠ?", "Is Tarapith a Shakti Peeth?"),
      a: l("রামপুরহাট জংশনের পাতায় মা তারার মন্দিরকে ভারতের ৫২ শক্তিপীঠের একটি বলা হয়েছে।", "The Rampurhat Junction page calls the Maa Tara temple one of India's 52 Shakti Peethams."),
    },
  ],
  related: [
    { href: "/kali-puja-2026", label: l("কালীপুজো ২০২৬", "Kali Puja 2026") },
    { href: "/greetings/kali", label: l("কালীপুজোর শুভেচ্ছা কার্ড", "Kali Puja greeting cards") },
    { href: "/blog/kali-puja-and-diwali", label: l("কালীপুজো আর দীপাবলি", "Kali Puja and Diwali") },
    { href: "/blog/bhoot-chaturdashi-2026", label: l("ভূত চতুর্দশী ২০২৬", "Bhoot Chaturdashi 2026") },
    { href: "/calendar-2027", label: l("২০২৭-এর ক্যালেন্ডার", "2027 calendar") },
  ],
  sources: [WIKI_TARAPITH, WIKI_BAMAKHEPA, WIKI_STATION, DRIK],
};

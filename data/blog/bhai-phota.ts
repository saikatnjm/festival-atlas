// Blog: Bhai Phota rituals. Facts come from pages fetched on 31 Oct 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const HINDUTONE = { title: "Hindutone, Bhai Phonta 2026 (Bengal date, citing Drik Panchang)", url: "https://hindutone.com/festivals/bhai-phonta-2026-bengal-date/" };
const WIKI_DOOJ = { title: "Wikipedia, Bhai Dooj", url: "https://en.wikipedia.org/wiki/Bhai_Dooj" };

export const BHAI_PHOTA: Article = {
  slug: "bhai-phota-rituals",
  published: "2026-10-31",
  updated: "2026-10-31",
  title: l("ভাইফোঁটা ২০২৬: তারিখ, নিয়ম আর যমের গল্প", "Bhai Phota 2026: Date, Rituals and the Yama Story"),
  description: l(
    "ভাইফোঁটা ২০২৬ বুধবার ১১ নভেম্বর। ফোঁটা কীভাবে দেয়, ছড়া, যম–যমুনার গল্প, আর ভাইদুজ ও ভাউবীজের সঙ্গে মিল-অমিল।",
    "Bhai Phota 2026 is on Wed 11 Nov. How the phota is given, the rhyme, the Yama and Yamuna story, and how it relates to Bhai Dooj and Bhau Beej.",
  ),
  h1: l("ভাইফোঁটা ২০২৬: কবে, কীভাবে", "Bhai Phota 2026: when and how"),
  lead: l(
    "কালীপুজোর পর বোনেরা ভাইয়ের কপালে ফোঁটা দেয়। দিন, নিয়ম আর গল্পটা সহজ করে বলছি।",
    "After Kali Puja, sisters put the phota on their brothers' foreheads. Here are the date, the steps and the story behind it.",
  ),
  icon: "🪔",
  body: [
    { kind: "h2", text: l("২০২৬-এ কবে", "The date in 2026") },
    {
      kind: "p",
      text: l(
        "Drik Panchang-এর হিসেব অনুযায়ী ভাইফোঁটা ২০২৬-এ বুধবার ১১ নভেম্বর। কার্তিক শুক্লা দ্বিতীয়া তিথি পড়ছে ১০ নভেম্বর মঙ্গলবার দুপুর ২:০০ থেকে ১১ নভেম্বর বুধবার বিকেল ৩:৫৩ পর্যন্ত। ভারতের বাইরে তারিখ একদিন এদিক-ওদিক হতে পারে।",
        "By Drik Panchang's reckoning, Bhai Phota in 2026 is Wednesday 11 November. Kartik Shukla Dwitiya runs from 2:00 pm on Tuesday 10 November to 3:53 pm on Wednesday 11 November. Outside India the date can shift by a day.",
      ),
      source: HINDUTONE,
    },
    {
      kind: "tip",
      text: l(
        "কিছু পঞ্জিকায় তারিখে তফাত থাকতে পারে, তাই নিজের বাড়ির পঞ্জিকা মিলিয়ে নিও।",
        "Some panjikas may differ on the date, so check the one at home.",
      ),
    },
    { kind: "h2", text: l("ফোঁটা দেওয়ার নিয়ম", "How the phota is given") },
    {
      kind: "p",
      text: l(
        "ভাইয়ের কপালে চন্দন, কাজল আর দইয়ের ফোঁটা দেওয়া হয়। থালায় থাকে চন্দনবাটা, কাজল, দই, প্রদীপ, ধান-দুর্বা আর মিষ্টি; অনেক সময় একটা ছোট উপহারও।",
        "A phota of sandalwood, kajal and curd goes on the brother's forehead. The plate holds sandalwood paste, kajal, curd, a lamp, paddy and durba grass, and sweets, and sometimes a small gift.",
      ),
      source: HINDUTONE,
    },
    {
      kind: "p",
      text: l(
        "ফোঁটার সময় ছড়া বলা হয়: “ভাইয়ের কপালে দিলাম ফোঁটা, যমের দুয়ারে পড়ল কাঁটা।” ছড়ার পরের লাইনগুলো পরিবার ভেদে আলাদা।",
        "A rhyme goes with it: “Bhaiyer kopale dilam phota, Jomer duare porlo kanta” (I mark my brother's forehead, and thorns fall at Yama's door). The lines that follow differ from family to family.",
      ),
      source: HINDUTONE,
    },
    {
      kind: "tip",
      text: l(
        "ভাই দূরে থাকলে ভিডিও কলে ফোঁটার থালা দেখিয়ে ছড়াটা বলে দাও, আর ফোঁটার কার্ড পাঠাও। মনটাই আসল।",
        "If your brother lives far away, show him the plate on a video call, say the rhyme, and send a greeting card. The thought is what counts.",
      ),
    },
    { kind: "h2", text: l("যম আর যমুনার গল্প", "The story of Yama and Yamuna") },
    {
      kind: "p",
      text: l(
        "প্রচলিত গল্পে যমুনা অনেক দিন ধরে ভাই যমকে নেমন্তন্ন করছিলেন। যম এলে বোন তাঁকে তিলক, প্রদীপ আর খাবার দিয়ে বরণ করলেন। খুশি হয়ে যম বললেন, এই দিনে যে ভাই বোনের হাতে ফোঁটা নেবে, অকালমৃত্যু তাকে ছোঁবে না।",
        "In the commonly told version, Yamuna had long invited her brother Yama. When he came, she welcomed him with a tilak, a lamp and a meal. Pleased, Yama declared that any brother who receives a tilak from his sister on this day will be protected from untimely death.",
      ),
      source: HINDUTONE,
    },
    {
      kind: "p",
      text: l(
        "পুরাণের এই সাক্ষাৎ মৃত্যুর দেবতা যম আর তাঁর বোন যমুনা নদীর মধ্যে, অমাবস্যার পর দ্বিতীয় তিথিতে।",
        "The legendary meeting is between Yama, the god of death, and his sister Yamuna, the river, on the second lunar day after the new moon.",
      ),
      source: WIKI_DOOJ,
    },
    { kind: "h2", text: l("ভাইদুজ, ভাউবীজ আর ভাইফোঁটা", "Bhai Dooj, Bhau Beej and Bhai Phota") },
    {
      kind: "p",
      text: l(
        "একই উৎসবের নাম এক এক জায়গায় এক রকম। পশ্চিমবঙ্গ, ত্রিপুরা আর বাংলাদেশে ভাইফোঁটা; মারাঠি, গুজরাটি আর কোঙ্কনিদের মধ্যে ভাউবীজ; নেপালে ভাই টিকা, যেটা তিহারের পঞ্চম দিন। তিথি সব জায়গায় কার্তিকের শুক্লা দ্বিতীয়া।",
        "The same festival has different names. It is Bhai Phota in West Bengal, Tripura and Bangladesh; Bhau Beej among Marathi, Gujarati and Konkani speakers; and Bhai Tika in Nepal, where it is the fifth day of Tihar. The tithi is the second day of the bright fortnight of Kartik everywhere.",
      ),
      source: WIKI_DOOJ,
    },
    {
      kind: "p",
      text: l(
        "বাংলায় এটা প্রতি বছর কালীপুজোর পর দ্বিতীয় দিনে হয়, আর ভাইদের জন্য বড় ভোজের আয়োজন থাকে।",
        "In Bengal it is held each year on the second day after Kali Puja, with a grand feast for the brothers.",
      ),
      source: WIKI_DOOJ,
    },
  ],
  faq: [
    {
      q: l("ভাইফোঁটা ২০২৬ কত তারিখে?", "What is the date of Bhai Phota 2026?"),
      a: l("বুধবার ১১ নভেম্বর ২০২৬ (Drik Panchang অনুযায়ী); কিছু পঞ্জিকায় তফাত থাকতে পারে।", "Wednesday 11 November 2026 per Drik Panchang; some panjikas may differ."),
    },
    {
      q: l("ভাইফোঁটার ফোঁটা কী দিয়ে দেয়?", "What is used for the Bhai Phota tilak?"),
      a: l("চন্দন, কাজল আর দই; সঙ্গে ধান-দুর্বা, প্রদীপ আর মিষ্টি।", "Sandalwood, kajal and curd, along with paddy and durba, a lamp and sweets."),
    },
    {
      q: l("ভাইফোঁটার ছড়াটা কী?", "What is the Bhai Phota rhyme?"),
      a: l("“ভাইয়ের কপালে দিলাম ফোঁটা, যমের দুয়ারে পড়ল কাঁটা।”", "“Bhaiyer kopale dilam phota, Jomer duare porlo kanta.”"),
    },
    {
      q: l("ভাইফোঁটা আর ভাইদুজ কি একই?", "Are Bhai Phota and Bhai Dooj the same?"),
      a: l("হ্যাঁ, একই তিথির উৎসব, শুধু নাম আর আচার অঞ্চলভেদে আলাদা।", "Yes, same tithi; the name and customs vary by region."),
    },
    {
      q: l("ভাইফোঁটায় যমের গল্প কেন?", "Why is Yama in the Bhai Phota story?"),
      a: l("গল্পে যম বোন যমুনার হাতে তিলক নিয়ে বর দেন, যে ভাই এদিনে বোনের হাতে ফোঁটা নেবে সে অকালমৃত্যু থেকে রক্ষা পাবে।", "In the story Yama, after receiving a tilak from his sister Yamuna, promises protection from untimely death to brothers who receive one on this day."),
    },
  ],
  related: [
    { href: "/greetings/bhaiphota", label: l("ভাইফোঁটার শুভেচ্ছা কার্ড", "Bhai Phota greeting cards") },
    { href: "/kali-puja-2026", label: l("কালীপুজো ২০২৬", "Kali Puja 2026") },
    { href: "/calendar-2027", label: l("২০২৭ সালের ক্যালেন্ডার", "2027 festival calendar") },
  ],
  sources: [HINDUTONE, WIKI_DOOJ],
};

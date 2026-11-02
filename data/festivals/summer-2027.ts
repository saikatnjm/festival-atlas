// Buddha Purnima, Snana Yatra, Ulto Rath, Radhashtami and the twelve Sankrantis of 2027. Dates and times are copied from
// Drik Panchang for Kolkata (IST) and Dhaka (BST), fetched 2 Nov 2026: Buddha Purnima (festivals/buddha-purnima/buddha-purnima-date-time.html),
// Jyeshtha Purnima (purnima/jyeshtha/jyeshtha-purnima-date-time.html, used for Snana Yatra because Drik has no Snana Yatra date page),
// Ratha Yatra (festivals/ratha-yatra/jagannatha-rathayatra-date-time.html, which prints Bahuda Yatra only as a rule, not a date),
// Radha Ashtami (festivals/radha-ashtami/radha-ashtami-date-time.html) and sankranti/sankranti.html. Background from Wikipedia.
// Type imports only. Times are written "HH:MM" (24 h) and only formatted here, never computed.

import type { L, Lang } from "@/lib/i18n";
import type { FestivalPage, FestivalTable } from "./types";

const l = (bn: string, en: string): L => ({ bn, en });
const KOL = "1275004";
const DHAKA = "1185241";
const drik = (path: string, geo: string) => `https://www.drikpanchang.com/${path}?geoname-id=${geo}&year=2027`;
const place = { name: "Kolkata", locality: "Kolkata", region: "West Bengal", country: "IN" as const };

const MONTHS: Record<Lang, string[]> = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  bn: ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"],
};
const DAYS: Record<Lang, string[]> = { en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], bn: ["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহস্পতি", "শুক্র", "শনি"] };
const BN_DIGITS = "০১২৩৪৫৬৭৮৯";
const bnNum = (s: string) => s.replace(/\d/g, (d) => BN_DIGITS[Number(d)]);
const dayLabel = (iso: string, lang: Lang): string => {
  const [y, m, d] = iso.split("-").map(Number);
  const s = `${DAYS[lang][new Date(Date.UTC(y, m - 1, d)).getUTCDay()]} ${d} ${MONTHS[lang][m - 1]}`;
  return lang === "bn" ? bnNum(s) : s;
};
const day = (iso: string): L => ({ bn: dayLabel(iso, "bn"), en: dayLabel(iso, "en") });
const bnPeriod = (h: number) => (h < 4 ? "রাত" : h < 6 ? "ভোর" : h < 12 ? "সকাল" : h < 15 ? "দুপুর" : h < 18 ? "বিকেল" : h < 19 ? "সন্ধে" : "রাত");
const clockOf = (h: number, min: number, lang: Lang): string => {
  const c = `${h % 12 === 0 ? 12 : h % 12}:${String(min).padStart(2, "0")}`;
  return lang === "bn" ? bnNum(`${bnPeriod(h)} ${c}`) : `${c} ${h < 12 ? "am" : "pm"}`;
};
/** "2027-05-19 16:02" → "19 May 4:02 pm" / "১৯ মে বিকেল ৪:০২". */
const stamp = (s: string, lang: Lang): string => {
  const [date, time] = s.split(" ");
  const [, m, d] = date.split("-").map(Number);
  const [h, min] = time.split(":").map(Number);
  return `${lang === "bn" ? bnNum(String(d)) : d} ${MONTHS[lang][m - 1]} ${clockOf(h, min, lang)}`;
};
const range = (a: string, b: string): L => ({ bn: `${stamp(a, "bn")} থেকে ${stamp(b, "bn")}`, en: `${stamp(a, "en")} to ${stamp(b, "en")}` });
const win = (a: string, b: string): L => {
  const [x, y] = [a, b].map((t) => t.split(":").map(Number));
  return { bn: `${clockOf(x[0], x[1], "bn")} থেকে ${clockOf(y[0], y[1], "bn")}`, en: `${clockOf(x[0], x[1], "en")} to ${clockOf(y[0], y[1], "en")}` };
};

const CAL = { href: "/calendar-2027", label: l("📅 পুজোর ক্যালেন্ডার ২০২৭", "📅 Festival calendar 2027") };
const PURNIMA_LINK = { href: "/purnima-2027", label: l("🌕 পূর্ণিমা ২০২৭", "🌕 Purnima 2027") };
const RATH_LINK = { href: "/rath-yatra-2027", label: l("রথযাত্রা ২০২৭", "Rath Yatra 2027") };
const PANJIKA_NOTE = l("বাড়ির পঞ্জিকা (বিশুদ্ধ সিদ্ধান্ত বা গুপ্তপ্রেস) মানলে মিলিয়ে নিও; কোনো কোনো দিন আলাদা হতে পারে।", "If you go by a printed panjika (Bishuddha Siddhanta or Gupta Press), check it: some days may differ.");

// ---- Buddha Purnima (/buddha-purnima-2027) ----

const BUDDHA = (g: string, city: string) => ({ title: `Drik Panchang, Buddha Purnima 2027 (${city})`, url: drik("festivals/buddha-purnima/buddha-purnima-date-time.html", g) });
const WIKI_VESAK = { title: "Wikipedia, Vesak", url: "https://en.wikipedia.org/wiki/Vesak" };

export const BUDDHA_PURNIMA_2027: FestivalPage = {
  path: "/buddha-purnima-2027",
  title: l("বুদ্ধ পূর্ণিমা ২০২৭: তারিখ, পূর্ণিমা তিথির সময়", "Buddha Purnima 2027: Date, Purnima Tithi Time"),
  description: l(
    "বুদ্ধ পূর্ণিমা ২০২৭ বৃহস্পতিবার ২০ মে। কলকাতা আর ঢাকার পূর্ণিমা তিথি শুরু ও শেষের সময়, ভারত ও বাংলাদেশে ছুটির খবর, সূত্রসহ।",
    "Buddha Purnima 2027 is Thursday 20 May. Purnima tithi start and end times for Kolkata and Dhaka, and the public holiday note for India and Bangladesh, sourced.",
  ),
  h1: l("বুদ্ধ পূর্ণিমা ২০২৭: কবে, কখন", "Buddha Purnima 2027: when and what time"),
  lead: l(
    "বুদ্ধ পূর্ণিমা ২০২৭-এ বৃহস্পতিবার ২০ মে, কলকাতা আর ঢাকা দু’জায়গাতেই; বৈশাখী পূর্ণিমা তিথি ১৯ মে বিকেল থেকে ২০ মে বিকেল পর্যন্ত।",
    "Buddha Purnima 2027 is Thursday 20 May in both Kolkata and Dhaka; the Vaishakha Purnima tithi runs from the afternoon of 19 May to the afternoon of 20 May.",
  ),
  timings: {
    h2: l("তারিখ আর পূর্ণিমা তিথি", "Date and Purnima tithi"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST। দ্রিক এই পাতায় আর কোনো সময় দেয়নি।", "Kolkata times are IST, Dhaka times BST. Drik prints no other times on this page."),
    rows: {
      wb: [{ day: day("2027-05-20"), what: l("পূর্ণিমা তিথি", "Purnima tithi"), when: range("2027-05-19 16:02", "2027-05-20 16:28"), source: BUDDHA(KOL, "Kolkata") }],
      bd: [{ day: day("2027-05-20"), what: l("পূর্ণিমা তিথি", "Purnima tithi"), when: range("2027-05-19 16:32", "2027-05-20 16:58"), source: BUDDHA(DHAKA, "Dhaka") }],
    },
    note: PANJIKA_NOTE,
  },
  sections: [
    {
      id: "about",
      h2: l("বুদ্ধ পূর্ণিমা কী", "What is Buddha Purnima"),
      paras: [
        {
          text: l(
            "বুদ্ধ পূর্ণিমা (ভেসাক) গৌতম বুদ্ধের জন্ম, বুদ্ধত্বলাভ আর পরিনির্বাণের স্মরণের উৎসব। ভারতে হিন্দু পঞ্জিকার বৈশাখ মাসের পূর্ণিমাকে বুদ্ধ পূর্ণিমা বলা হয়।",
            "Buddha Purnima (Vesak) commemorates the birth, enlightenment and passing away (parinirvana) of Gautama Buddha. In India, the full moon day of the Hindu month of Vaisakha is celebrated as Buddha Purnima.",
          ),
          source: WIKI_VESAK,
        },
        {
          text: l(
            "উইকিপিডিয়া অনুযায়ী দিনটি ভারত আর বাংলাদেশ দু’দেশেই সরকারি ছুটি। ২০২৭ সালের বাংলাদেশের সরকারি ছুটির তালিকা এখনও আমরা পাইনি; প্রকাশ হলে মিলিয়ে নিও।",
            "Wikipedia says the day is a public holiday in both India and Bangladesh. We have not found Bangladesh's official 2027 holiday list yet; check it once it is published.",
          ),
          source: WIKI_VESAK,
        },
        { text: l("এই পাতার তারিখ বৈশাখী পূর্ণিমার তারিখের সঙ্গে মেলে; আমাদের পূর্ণিমা পাতায় ২০ মে-ই আছে।", "The date matches Vaishakha Purnima on our Purnima page, which also lists 20 May."), source: BUDDHA(KOL, "Kolkata") },
      ],
    },
  ],
  faq: [
    { q: l("২০২৭-এ বুদ্ধ পূর্ণিমা কবে?", "When is Buddha Purnima in 2027?"), a: l("বৃহস্পতিবার ২০ মে ২০২৭, কলকাতা আর ঢাকায় (দ্রিক পঞ্চাঙ্গ)।", "Thursday 20 May 2027 in Kolkata and Dhaka (Drik Panchang).") },
    { q: l("বুদ্ধ পূর্ণিমার পূর্ণিমা তিথি কখন?", "What time is the Purnima tithi on Buddha Purnima 2027?"), a: l("কলকাতায় ১৯ মে বিকেল ৪:০২ থেকে ২০ মে বিকেল ৪:২৮; ঢাকায় ১৯ মে বিকেল ৪:৩২ থেকে ২০ মে বিকেল ৪:৫৮।", "Kolkata: 19 May 4:02 pm to 20 May 4:28 pm. Dhaka: 19 May 4:32 pm to 20 May 4:58 pm.") },
    { q: l("বুদ্ধ পূর্ণিমায় কি ছুটি থাকে?", "Is Buddha Purnima a public holiday?"), a: l("উইকিপিডিয়া অনুযায়ী ভারত আর বাংলাদেশে সরকারি ছুটি। ২০২৭-এর বাংলাদেশের তালিকা এখনও আমরা পাইনি।", "Per Wikipedia it is a public holiday in India and Bangladesh. We have not found Bangladesh's 2027 list yet.") },
  ],
  events: [{ name: l("বুদ্ধ পূর্ণিমা ২০২৭", "Buddha Purnima 2027"), start: "2027-05-20", place }],
  links: [CAL, PURNIMA_LINK, { href: "/bengali-calendar-1433", label: l("বাংলা ক্যালেন্ডার ১৪৩৩", "Bengali calendar 1433") }],
  lastChecked: "2026-11-02",
};

// ---- Snana Yatra (/snana-yatra-2027) ----

const JYESHTHA = (g: string, city: string) => ({ title: `Drik Panchang, Jyeshtha Purnima 2027 (${city})`, url: drik("purnima/jyeshtha/jyeshtha-purnima-date-time.html", g) });
const RATH_DRIK = { title: "Drik Panchang, Ratha Yatra 2027 (Kolkata)", url: drik("festivals/ratha-yatra/jagannatha-rathayatra-date-time.html", KOL) };
const WIKI_SNANA = { title: "Wikipedia, Snana Yatra", url: "https://en.wikipedia.org/wiki/Snana_Yatra" };

export const SNANA_YATRA_2027: FestivalPage = {
  path: "/snana-yatra-2027",
  title: l("স্নানযাত্রা ২০২৭: তারিখ, জ্যৈষ্ঠ পূর্ণিমা, মাহেশ", "Snana Yatra 2027: Date, Jyeshtha Purnima & Mahesh"),
  description: l(
    "স্নানযাত্রা ২০২৭ জ্যৈষ্ঠ পূর্ণিমায়, শুক্রবার ১৮ জুন। কলকাতা আর ঢাকার পূর্ণিমা তিথির সময়, শ্রীরামপুরের মাহেশের স্নানযাত্রা, সূত্রসহ।",
    "Snana Yatra 2027 falls on Jyeshtha Purnima, Friday 18 June. Purnima tithi times for Kolkata and Dhaka and Mahesh in Serampore, sourced.",
  ),
  h1: l("স্নানযাত্রা ২০২৭: কবে, কখন", "Snana Yatra 2027: when and what time"),
  lead: l(
    "স্নানযাত্রা জ্যৈষ্ঠের পূর্ণিমায়; ২০২৭-এ সেই পূর্ণিমা শুক্রবার ১৮ জুন, কলকাতা আর ঢাকায়। এর পর রথযাত্রা ৫ জুলাই।",
    "Snana Yatra is held on the full moon of Jyeshtha; in 2027 that Purnima is Friday 18 June in both Kolkata and Dhaka. Rath Yatra follows on 5 July.",
  ),
  timings: {
    h2: l("তারিখ আর পূর্ণিমা তিথি", "Date and Purnima tithi"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST। সময়গুলো দ্রিকের জ্যৈষ্ঠ পূর্ণিমার পাতা থেকে, কারণ দ্রিকের আলাদা স্নানযাত্রার পাতা পাইনি।", "Kolkata times are IST, Dhaka times BST. The times are from Drik's Jyeshtha Purnima page, as we found no separate Snana Yatra page on Drik."),
    rows: {
      wb: [{ day: day("2027-06-18"), what: l("জ্যৈষ্ঠ পূর্ণিমা তিথি", "Jyeshtha Purnima tithi"), when: range("2027-06-18 04:34", "2027-06-19 06:13"), source: JYESHTHA(KOL, "Kolkata") }],
      bd: [{ day: day("2027-06-18"), what: l("জ্যৈষ্ঠ পূর্ণিমা তিথি", "Jyeshtha Purnima tithi"), when: range("2027-06-18 05:04", "2027-06-19 06:43"), source: JYESHTHA(DHAKA, "Dhaka") }],
    },
    note: l("পুরীর জগন্নাথ মন্দির বা মাহেশের মন্দিরের নিজস্ব সময় আলাদা হতে পারে; মন্দিরের ঘোষণা আর বাড়ির পঞ্জিকা দেখে নিও।", "Puri and Mahesh temples may fix their own timings; check the temple's announcement and your panjika."),
  },
  sections: [
    {
      id: "about",
      h2: l("স্নানযাত্রা কী", "What is Snana Yatra"),
      paras: [
        {
          text: l(
            "স্নানযাত্রা দেবতাদের স্নানের উৎসব, জ্যৈষ্ঠের পূর্ণিমায়; জগন্নাথের জন্মদিন হিসেবেও ধরা হয়। মন্দিরের উত্তরের কুয়ো থেকে তোলা ১০৮ কলস জলে বিগ্রহদের স্নান করানো হয়। তার পর প্রায় পনেরো দিন বিগ্রহরা ‘অসুস্থ’ থাকেন, এই সময়টাকে অনবসর বলে; ভক্তরা তখন দর্শন পান না।",
            "Snana Yatra is the bathing festival of the deities, held on the full moon of Jyeshtha, and is taken as the birthday of Jagannath. The deities are bathed with 108 pots of water drawn from the temple's northern well. Afterwards they are believed to fall ill and rest for about a fortnight, a period called Anasara, when devotees cannot see them.",
          ),
          source: WIKI_SNANA,
        },
        {
          text: l(
            "পশ্চিমবঙ্গের শ্রীরামপুরের মাহেশের স্নানযাত্রা পুরীর বাইরের সবচেয়ে পুরোনোগুলোর একটি, চতুর্দশ শতকের বলে মনে করা হয়।",
            "The Mahesh celebration in Serampore, West Bengal, is one of the oldest outside Puri, believed to date back to the 14th century.",
          ),
          source: WIKI_SNANA,
        },
        { text: l("দ্রিকের রথযাত্রার পাতা বলছে স্নানযাত্রা রথের প্রায় ১৮ দিন আগে, জ্যৈষ্ঠ পূর্ণিমায়; রথ ২০২৭-এ সোমবার ৫ জুলাই।", "Drik's Ratha Yatra page says Snana Yatra comes about 18 days before Rath Yatra, on Jyeshtha Purnima; Rath Yatra 2027 is Monday 5 July."), source: RATH_DRIK },
        { text: PANJIKA_NOTE },
      ],
    },
  ],
  faq: [
    { q: l("২০২৭-এ স্নানযাত্রা কবে?", "When is Snana Yatra in 2027?"), a: l("জ্যৈষ্ঠ পূর্ণিমায়, শুক্রবার ১৮ জুন ২০২৭ (দ্রিক পঞ্চাঙ্গের জ্যৈষ্ঠ পূর্ণিমার তারিখ)।", "On Jyeshtha Purnima, Friday 18 June 2027 (the Jyeshtha Purnima date on Drik Panchang).") },
    { q: l("স্নানযাত্রার পূর্ণিমা তিথি কখন?", "What time is the Purnima tithi for Snana Yatra 2027?"), a: l("কলকাতায় ১৮ জুন ভোর ৪:৩৪ থেকে ১৯ জুন ভোর ৬:১৩; ঢাকায় ভোর ৫:০৪ থেকে ভোর ৬:৪৩।", "Kolkata: 18 Jun 4:34 am to 19 Jun 6:13 am. Dhaka: 5:04 am to 6:43 am.") },
    { q: l("মাহেশের স্নানযাত্রা কোথায় হয়?", "Where is the Mahesh Snan Yatra held?"), a: l("পশ্চিমবঙ্গের শ্রীরামপুরের মাহেশে।", "At Mahesh in Serampore, West Bengal.") },
  ],
  events: [{ name: l("স্নানযাত্রা ২০২৭", "Snana Yatra 2027"), start: "2027-06-18", place: { name: "Mahesh, Serampore", locality: "Serampore", region: "West Bengal", country: "IN" } }],
  links: [CAL, RATH_LINK, PURNIMA_LINK],
  lastChecked: "2026-11-02",
};

// ---- Radhashtami (/radhashtami-2027) ----

const RADHA = (g: string, city: string) => ({ title: `Drik Panchang, Radha Ashtami 2027 (${city})`, url: drik("festivals/radha-ashtami/radha-ashtami-date-time.html", g) });
const WIKI_RADHA = { title: "Wikipedia, Radha", url: "https://en.wikipedia.org/wiki/Radha" };

export const RADHASHTAMI_2027: FestivalPage = {
  path: "/radhashtami-2027",
  title: l("রাধাষ্টমী ২০২৭: তারিখ, মধ্যাহ্ন সময়, অষ্টমী তিথি", "Radhashtami 2027: Date, Madhyahna Time, Ashtami"),
  description: l(
    "রাধাষ্টমী ২০২৭ বুধবার ৮ সেপ্টেম্বর। কলকাতা আর ঢাকার মধ্যাহ্ন পুজোর সময় আর অষ্টমী তিথি শুরু ও শেষের সময়, সূত্রসহ।",
    "Radhashtami 2027 is Wednesday 8 September. Madhyahna time and Ashtami tithi start and end times for Kolkata and Dhaka, sourced.",
  ),
  h1: l("রাধাষ্টমী ২০২৭: কবে, কখন", "Radhashtami 2027: when and what time"),
  lead: l(
    "রাধাষ্টমী ২০২৭-এ বুধবার ৮ সেপ্টেম্বর, কলকাতা আর ঢাকায়। কলকাতায় মধ্যাহ্ন সময় সকাল ১০:২০ থেকে দুপুর ১২:৪৯।",
    "Radhashtami 2027 is Wednesday 8 September in Kolkata and Dhaka. In Kolkata the Madhyahna time is 10:20 am to 12:49 pm.",
  ),
  timings: {
    h2: l("মধ্যাহ্ন সময় আর অষ্টমী তিথি", "Madhyahna time and Ashtami tithi"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [
        { day: day("2027-09-08"), what: l("মধ্যাহ্ন সময়", "Madhyahna time"), when: win("10:20", "12:49"), source: RADHA(KOL, "Kolkata") },
        { day: day("2027-09-08"), what: l("অষ্টমী তিথি", "Ashtami tithi"), when: range("2027-09-07 11:28", "2027-09-08 12:44"), source: RADHA(KOL, "Kolkata") },
      ],
      bd: [
        { day: day("2027-09-08"), what: l("মধ্যাহ্ন সময়", "Madhyahna time"), when: win("10:41", "13:11"), source: RADHA(DHAKA, "Dhaka") },
        { day: day("2027-09-08"), what: l("অষ্টমী তিথি", "Ashtami tithi"), when: range("2027-09-07 11:58", "2027-09-08 13:14"), source: RADHA(DHAKA, "Dhaka") },
      ],
    },
    note: PANJIKA_NOTE,
  },
  sections: [
    {
      id: "about",
      h2: l("রাধাষ্টমী কী", "What is Radhashtami"),
      paras: [
        { text: l("রাধাষ্টমীতে রাধার জন্মদিন পালিত হয়।", "Radhashtami is the celebration of Radha's birthday."), source: WIKI_RADHA },
        { text: l("কৃষ্ণের জন্মোৎসব নিয়ে আমাদের জন্মাষ্টমী পাতাটিও দেখতে পারো; ২০২৭-এ জন্মাষ্টমী বুধবার ২৫ আগস্ট।", "See our Janmashtami page for Krishna's birth festival; Janmashtami 2027 is Wednesday 25 August."), source: RADHA(KOL, "Kolkata") },
      ],
    },
  ],
  faq: [
    { q: l("২০২৭-এ রাধাষ্টমী কবে?", "When is Radhashtami in 2027?"), a: l("বুধবার ৮ সেপ্টেম্বর ২০২৭, কলকাতা আর ঢাকায় (দ্রিক পঞ্চাঙ্গ)।", "Wednesday 8 September 2027 in Kolkata and Dhaka (Drik Panchang).") },
    { q: l("রাধাষ্টমীর মধ্যাহ্ন পুজোর সময় কখন?", "What is the Madhyahna time for Radhashtami 2027?"), a: l("কলকাতায় সকাল ১০:২০ থেকে দুপুর ১২:৪৯; ঢাকায় সকাল ১০:৪১ থেকে দুপুর ১:১১।", "Kolkata 10:20 am to 12:49 pm; Dhaka 10:41 am to 1:11 pm.") },
    { q: l("রাধাষ্টমীর অষ্টমী তিথি কখন?", "When does Ashtami tithi start and end for Radhashtami 2027?"), a: l("কলকাতায় ৭ সেপ্টেম্বর সকাল ১১:২৮ থেকে ৮ সেপ্টেম্বর দুপুর ১২:৪৪; ঢাকায় ৭ সেপ্টেম্বর সকাল ১১:৫৮ থেকে ৮ সেপ্টেম্বর দুপুর ১:১৪।", "Kolkata: 7 Sep 11:28 am to 8 Sep 12:44 pm. Dhaka: 7 Sep 11:58 am to 8 Sep 1:14 pm.") },
  ],
  events: [{ name: l("রাধাষ্টমী ২০২৭", "Radhashtami 2027"), start: "2027-09-08", place }],
  links: [CAL, { href: "/janmashtami-2027", label: l("জন্মাষ্টমী ২০২৭", "Janmashtami 2027") }],
  lastChecked: "2026-11-02",
};

// ---- Sankranti (/sankranti-2027) ----

const SANK = (g: string, city: string) => ({ title: `Drik Panchang, Sankranti 2027 (${city})`, url: `https://www.drikpanchang.com/sankranti/sankranti.html?geoname-id=${g}&year=2027` });
const WIKI_SANKRANTI = { title: "Wikipedia, Sankranti", url: "https://en.wikipedia.org/wiki/Sankranti" };
const WIKI_BENGALI_CAL = { title: "Wikipedia, Bengali calendars", url: "https://en.wikipedia.org/wiki/Bengali_calendars" };

/** [Sankranti, Bengali month it closes, date, Kolkata time, Dhaka time, Drik's time-day offset: time falls on the day before]. */
const SANKRANTI_ROWS: [L, L, string, string, string, boolean, L?][] = [
  [l("মকর সংক্রান্তি", "Makara Sankranti"), l("পৌষ সংক্রান্তি", "Poush Sankranti"), "2027-01-15", "21:14", "21:44", true],
  [l("কুম্ভ সংক্রান্তি", "Kumbha Sankranti"), l("মাঘ সংক্রান্তি", "Magh Sankranti"), "2027-02-13", "10:13", "10:43", false],
  [l("মীন সংক্রান্তি", "Meena Sankranti"), l("ফাল্গুন সংক্রান্তি", "Falgun Sankranti"), "2027-03-15", "07:04", "07:34", false],
  [l("মেষ সংক্রান্তি", "Mesha Sankranti"), l("চৈত্র সংক্রান্তি", "Choitro Sankranti"), "2027-04-14", "15:33", "16:03", false],
  [l("বৃষ সংক্রান্তি", "Vrishabha Sankranti"), l("বৈশাখ সংক্রান্তি", "Boishakh Sankranti"), "2027-05-15", "12:24", "12:54", false],
  [l("মিথুন সংক্রান্তি", "Mithuna Sankranti"), l("জ্যৈষ্ঠ সংক্রান্তি", "Joishtho Sankranti"), "2027-06-15", "19:00", "19:30", false],
  [l("কর্কট সংক্রান্তি", "Karka Sankranti"), l("আষাঢ় সংক্রান্তি", "Asharh Sankranti"), "2027-07-17", "05:52", "06:22", false],
  [l("সিংহ সংক্রান্তি", "Simha Sankranti"), l("শ্রাবণ সংক্রান্তি", "Shrabon Sankranti"), "2027-08-17", "14:16", "14:46", false],
  [l("কন্যা সংক্রান্তি", "Kanya Sankranti"), l("ভাদ্র সংক্রান্তি", "Bhadro Sankranti"), "2027-09-17", "14:14", "14:44", false],
  [l("তুলা সংক্রান্তি", "Tula Sankranti"), l("আশ্বিন সংক্রান্তি", "Ashshin Sankranti"), "2027-10-18", "02:12", "02:42", false],
  [l("বৃশ্চিক সংক্রান্তি", "Vrishchika Sankranti"), l("কার্তিক সংক্রান্তি", "Kartik Sankranti"), "2027-11-17", "02:02", "02:32", false],
  [l("ধনু সংক্রান্তি", "Dhanu Sankranti"), l("অগ্রহায়ণ সংক্রান্তি", "Ogrohayon Sankranti"), "2027-12-16", "16:42", "17:12", false],
];

const momentCell = (date: string, kol: string, dhaka: string, prev: boolean): L => {
  const [, m, d] = date.split("-").map(Number);
  const dd = prev ? d - 1 : d; // Drik prints "09:14 PM, Jan 14" for the 15 Jan row
  const one = (t: string, lang: Lang) => {
    const [h, min] = t.split(":").map(Number);
    const c = clockOf(h, min, lang);
    return prev ? `${lang === "bn" ? bnNum(`${dd} ${MONTHS.bn[m - 1]}`) : `${dd} ${MONTHS.en[m - 1]}`} ${c}` : c;
  };
  return { bn: `কলকাতা ${one(kol, "bn")}; ঢাকা ${one(dhaka, "bn")}`, en: `Kolkata ${one(kol, "en")}; Dhaka ${one(dhaka, "en")}` };
};

const sankrantiTable: FestivalTable = {
  id: "sankranti-dates",
  h2: l("২০২৭-এর বারোটি সংক্রান্তি", "The twelve Sankrantis of 2027"),
  lead: l("তারিখ দ্রিক পঞ্চাঙ্গের কলকাতা পাতা অনুযায়ী; কলকাতার সময় IST, ঢাকার সময় BST। সংক্রান্তির ক্ষণ দ্রিক যেমন ছেপেছে তেমনই দেওয়া।", "Dates follow Drik Panchang's Kolkata page; Kolkata times are IST, Dhaka times BST. Each Sankranti moment is as Drik prints it."),
  caption: l("২০২৭-এর সংক্রান্তি: তারিখ আর ক্ষণ", "Sankrantis in 2027: date and moment"),
  columns: [l("সংক্রান্তি", "Sankranti"), l("বাংলা মাসের শেষ", "Bengali month it closes"), l("তারিখ", "Date"), l("সংক্রান্তির ক্ষণ", "Sankranti moment")],
  rows: SANKRANTI_ROWS.map(([name, month, date, kol, dhaka, prev]) => ({
    cells: [name, month, day(date), momentCell(date, kol, dhaka, prev)],
    source: SANK(KOL, "Kolkata"),
  })),
  note: l(
    "‘বাংলা মাসের শেষ’ কলামটা উইকিপিডিয়ার নিয়ম (সংক্রান্তিতে মাস শেষ, পরদিন নতুন মাস) আর সূর্যের রাশি-মাস মিলিয়ে করা; ঢাকার সময় দ্রিকের ঢাকা পাতা থেকে। মকর সংক্রান্তির ক্ষণ ১৪ জানুয়ারি রাতে, দিন ১৫ জানুয়ারি। বাড়ির পঞ্জিকা মিলিয়ে নিও।",
    "The 'Bengali month it closes' column combines Wikipedia's rule (a Sankranti ends a month, the next day begins the new one) with the sun-sign month names; Dhaka times are from Drik's Dhaka page. Makara Sankranti's moment is on the night of 14 January, listed under 15 January. Check your panjika.",
  ),
};

export const SANKRANTI_2027: FestivalPage = {
  path: "/sankranti-2027",
  title: l("সংক্রান্তি ২০২৭: সব ১২টি তারিখ ও ক্ষণ", "Sankranti 2027: All 12 Dates and Times"),
  description: l(
    "সংক্রান্তি ২০২৭-এর বারোটি তারিখ, মকর সংক্রান্তি শুক্রবার ১৫ জানুয়ারি থেকে ধনু সংক্রান্তি ১৬ ডিসেম্বর, কলকাতা আর ঢাকার ক্ষণসহ, সূত্রসহ।",
    "All 12 Sankranti dates for 2027, from Makara Sankranti on Friday 15 January to Dhanu Sankranti on 16 December, with Kolkata and Dhaka times, sourced.",
  ),
  h1: l("সংক্রান্তি ২০২৭: কবে, কখন", "Sankranti 2027: when and what time"),
  lead: l(
    "২০২৭-এ বারোটি সংক্রান্তি: প্রথমটা মকর সংক্রান্তি শুক্রবার ১৫ জানুয়ারি, শেষটা ধনু সংক্রান্তি বৃহস্পতিবার ১৬ ডিসেম্বর। কলকাতা আর ঢাকার ক্ষণ নীচের তালিকায়।",
    "There are twelve Sankrantis in 2027: the first is Makara Sankranti on Friday 15 January, the last Dhanu Sankranti on Thursday 16 December. Kolkata and Dhaka times are in the table below.",
  ),
  tables: [sankrantiTable],
  sections: [
    {
      id: "what",
      h2: l("সংক্রান্তি কী, আর বাংলা মাসের সঙ্গে সম্পর্ক", "What Sankranti is and how it ties to Bengali months"),
      paras: [
        {
          text: l(
            "সংক্রান্তি মানে সূর্যের এক রাশি থেকে পরের রাশিতে যাওয়া; বছরে বারোটি।",
            "Sankranti is the sun's move from one zodiac sign to the next; there are twelve in a year.",
          ),
          source: WIKI_SANKRANTI,
        },
        {
          text: l(
            "সৌর বাংলা পঞ্জিকায় সংক্রান্তি মাসের শেষ চিহ্নিত করে, পরদিন নতুন মাসের শুরু; মেষ সংক্রান্তির পরদিন পয়লা বৈশাখ। তাই চৈত্র সংক্রান্তি, পৌষ সংক্রান্তির মতো নামগুলো প্রতিটি বাংলা মাসের শেষ দিন।",
            "In the sidereal solar Bengali calendar a Sankranti marks the end of a month and the next day begins a new one; the day after Mesha Sankranti is Pohela Boishakh. That is why we speak of Choitro Sankranti and Poush Sankranti, the last day of each Bengali month.",
          ),
          source: WIKI_SANKRANTI,
        },
        {
          text: l(
            "ভারতের রাজ্যগুলোর বর্তমান বাংলা পঞ্জিকা সূর্য সিদ্ধান্তের ওপর ভিত্তি করে, আর হিন্দু বাঙালির উৎসব ঠিক করতে ওই পঞ্জিকাই চলে।",
            "The current Bengali calendar in the Indian states is based on the Surya Siddhanta and is used to set Bengali Hindu festivals.",
          ),
          source: WIKI_BENGALI_CAL,
        },
        { text: l("মাসের নামের সঙ্গে সংক্রান্তির মিল আমাদের নিজের সাজানো; ঠিক দিন জানতে বাড়ির পঞ্জিকা দেখো।", "Matching each Sankranti to a month name is our own arrangement; for the exact day, check your panjika.") },
      ],
    },
    {
      id: "special",
      h2: l("বিশেষ সংক্রান্তির দিন", "Sankrantis with their own pages"),
      paras: [
        { text: l("কন্যা সংক্রান্তি ১৭ সেপ্টেম্বর; দ্রিকের একই পাতায় বিশ্বকর্মা পুজোও এই দিনে দেখানো।", "Kanya Sankranti is on 17 September; Drik's page shows Vishwakarma Puja on the same date."), source: SANK(KOL, "Kolkata") },
        { text: l("মকর সংক্রান্তির তারিখ ১৫ জানুয়ারি, ক্ষণ ১৪ জানুয়ারি রাত; পৌষ সংক্রান্তির পাতায় বিস্তারিত।", "Makara Sankranti is listed on 15 January with its moment on the night of 14 January; see the Poush Sankranti page for detail."), source: SANK(KOL, "Kolkata") },
        { text: PANJIKA_NOTE },
      ],
    },
    {
      id: "sources",
      h2: l("সূত্র", "Sources"),
      paras: [
        { text: l("২০২৭, কলকাতা।", "2027, Kolkata."), source: SANK(KOL, "Kolkata") },
        { text: l("২০২৭, ঢাকা।", "2027, Dhaka."), source: SANK(DHAKA, "Dhaka") },
      ],
    },
  ],
  faq: [
    { q: l("২০২৭-এ মকর সংক্রান্তি কবে?", "When is Makara Sankranti in 2027?"), a: l("শুক্রবার ১৫ জানুয়ারি ২০২৭; সংক্রান্তির ক্ষণ ১৪ জানুয়ারি রাত ৯:১৪ (কলকাতা), ৯:৪৪ (ঢাকা) (দ্রিক পঞ্চাঙ্গ)।", "Friday 15 January 2027; the Sankranti moment is 9:14 pm on 14 January in Kolkata and 9:44 pm in Dhaka (Drik Panchang).") },
    { q: l("চৈত্র সংক্রান্তি ২০২৭-এ কবে?", "When is Choitro Sankranti in 2027?"), a: l("মেষ সংক্রান্তির দিন, বুধবার ১৪ এপ্রিল ২০২৭; ক্ষণ কলকাতায় বিকেল ৩:৩৩, ঢাকায় বিকেল ৪:০৩ (দ্রিক পঞ্চাঙ্গ)।", "On Mesha Sankranti, Wednesday 14 April 2027; the moment is 3:33 pm in Kolkata and 4:03 pm in Dhaka (Drik Panchang).") },
    { q: l("সংক্রান্তি কাকে বলে?", "What is Sankranti?"), a: l("সূর্যের এক রাশি থেকে পরের রাশিতে যাওয়া; বছরে বারোটি।", "The sun's move from one zodiac sign to the next; twelve a year.") },
    { q: l("২০২৭-এ বছরে কতগুলো সংক্রান্তি?", "How many Sankrantis are there in 2027?"), a: l("বারোটি, ১৫ জানুয়ারি থেকে ১৬ ডিসেম্বর।", "Twelve, from 15 January to 16 December.") },
  ],
  events: SANKRANTI_ROWS.map(([name, , date]) => ({ name: { bn: `${name.bn} ২০২৭`, en: `${name.en} 2027` }, start: date, place })),
  links: [
    CAL,
    { href: "/bengali-calendar-1433", label: l("বাংলা ক্যালেন্ডার ১৪৩৩", "Bengali calendar 1433") },
    { href: "/poush-sankranti-2027", label: l("পৌষ সংক্রান্তি ২০২৭", "Poush Sankranti 2027") },
    { href: "/vishwakarma-puja-2027", label: l("বিশ্বকর্মা পুজো ২০২৭", "Vishwakarma Puja 2027") },
    { href: "/kartik-puja-2027", label: l("কার্তিক পুজো ২০২৭", "Kartik Puja 2027") },
  ],
  lastChecked: "2026-11-02",
};

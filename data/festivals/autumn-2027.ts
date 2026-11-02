// Dhanteras, Kali Puja, Bhai Phota and Chhath Puja 2027. Dates and times copied from Drik Panchang pages for
// Kolkata and Dhaka (fetched 2 Nov 2026); background from Wikipedia. Type imports only.

import type { L } from "@/lib/i18n";
import type { FestivalPage } from "./types";

const l = (bn: string, en: string): L => ({ bn, en });
const drik = (path: string, geo: string) => `https://www.drikpanchang.com/${path}?geoname-id=${geo}&year=2027`;
const KOL = "1275004";
const DHAKA = "1185241";

const KALI = (g: string, city: string) => ({ title: `Drik Panchang, Bengal Kali Puja 2027 (${city})`, url: drik("diwali/kali-puja/bengal-kalipuja-date-time.html", g) });
const DHAN = (g: string, city: string) => ({ title: `Drik Panchang, Dhanteras 2027 (${city})`, url: drik("festivals/dhanteras/festivals-dhanteras-puja-timings.html", g) });
const BHAI = (g: string, city: string) => ({ title: `Drik Panchang, Bhai Dooj 2027 (${city})`, url: drik("festivals/bhai-dooj/bhai-dooj-date-time.html", g) });
const CHHATH = (g: string, city: string) => ({ title: `Drik Panchang, Chhath Puja calendar 2027 (${city})`, url: drik("chhath/chhath-puja-calendar.html", g) });
const CHHATH_DAY = (g: string, city: string) => ({ title: `Drik Panchang, Chhath Puja 2027 (${city})`, url: drik("festivals/chhath-puja/chhath-puja-date-time.html", g) });
const WIKI_KALI = { title: "Wikipedia, Kali Puja", url: "https://en.wikipedia.org/wiki/Kali_Puja" };
const WIKI_BHAI = { title: "Wikipedia, Bhai Dooj", url: "https://en.wikipedia.org/wiki/Bhai_Dooj" };
const WIKI_DHAN = { title: "Wikipedia, Dhanteras", url: "https://en.wikipedia.org/wiki/Dhanteras" };
const WIKI_CHHATH = { title: "Wikipedia, Chhath", url: "https://en.wikipedia.org/wiki/Chhath" };
const CAL = { href: "/calendar-2027", label: l("📅 পুজোর ক্যালেন্ডার ২০২৭", "📅 Festival calendar 2027") };
const PLACE_KOL = { name: "Kolkata", locality: "Kolkata", region: "West Bengal", country: "IN" as const };

export const KALI_PUJA_2027: FestivalPage = {
  path: "/kali-puja-2027",
  title: l("কালীপুজো ২০২৭: তারিখ, নিশীথ পুজোর শুভ সময়", "Kali Puja 2027: Date, Nishita Puja Time in Kolkata"),
  description: l(
    "কালীপুজো ২০২৭ বৃহস্পতিবার ২৮ অক্টোবর। কলকাতায় নিশীথ পুজো রাত ১০:৫৫ থেকে ১১:৪৬, অমাবস্যা তিথির সময়, ঢাকার সময়ও, সূত্রসহ।",
    "Kali Puja 2027 is Thursday 28 October. Kolkata Nishita puja 10:55 to 11:46 pm, Amavasya tithi times, plus Dhaka, all sourced.",
  ),
  h1: l("কালীপুজো ২০২৭: কবে, কখন", "Kali Puja 2027: when and what time"),
  lead: l(
    "বাংলার শ্যামাপুজো ২০২৭-এ বৃহস্পতিবার ২৮ অক্টোবর রাতে; কলকাতায় নিশীথ কাল রাত ১০:৫৫ থেকে ১১:৪৬। পরদিন দীপাবলি।",
    "Bengal's Shyama Puja falls on the night of Thursday 28 October 2027; in Kolkata the Nishita time is 10:55 to 11:46 pm. Diwali follows the next day.",
  ),
  timings: {
    h2: l("নিশীথ কাল আর অমাবস্যা তিথি", "Nishita time and Amavasya tithi"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [
        { day: l("বৃহস্পতি ২৮ অক্টোবর রাত", "Thu 28 Oct night"), what: l("কালীপুজোর নিশীথ কাল", "Kali Puja Nishita time"), when: l("রাত ১০:৫৫ থেকে ১১:৪৬", "10:55 pm to 11:46 pm"), source: KALI(KOL, "Kolkata") },
        { day: l("২৮–২৯ অক্টোবর", "28–29 Oct"), what: l("অমাবস্যা তিথি", "Amavasya tithi"), when: l("২৮ অক্টোবর রাত ৮:৪৭ থেকে ২৯ অক্টোবর সন্ধে ৭:০৫", "28 Oct 8:47 pm to 29 Oct 7:05 pm"), source: KALI(KOL, "Kolkata") },
      ],
      bd: [
        { day: l("বৃহস্পতি ২৮ অক্টোবর রাত", "Thu 28 Oct night"), what: l("কালীপুজোর নিশীথ কাল", "Kali Puja Nishita time"), when: l("রাত ১১:১৭ থেকে ১২:০৮ (২৯ অক্টোবর)", "11:17 pm to 12:08 am (29 Oct)"), source: KALI(DHAKA, "Dhaka") },
        { day: l("২৮–২৯ অক্টোবর", "28–29 Oct"), what: l("অমাবস্যা তিথি", "Amavasya tithi"), when: l("২৮ অক্টোবর রাত ৯:১৭ থেকে ২৯ অক্টোবর সন্ধে ৭:৩৫", "28 Oct 9:17 pm to 29 Oct 7:35 pm"), source: KALI(DHAKA, "Dhaka") },
      ],
    },
    note: l("বাংলার পঞ্জিকা (গুপ্তপ্রেস, বিশুদ্ধ সিদ্ধান্ত) কখনো দ্রিকের থেকে আলাদা হতে পারে; নিজের পঞ্জিকা মিলিয়ে নিও।", "Bengali panjikas (Gupta Press, Bisuddha Siddhanta) can differ from Drik; check your own panjika."),
  },
  sections: [
    {
      id: "shyama-puja",
      h2: l("বাংলায় শ্যামাপুজো", "Shyama Puja in Bengal"),
      paras: [
        {
          text: l(
            "বাংলা, ওড়িশা আর আসামে কার্তিকের অমাবস্যার রাতে দেবী কালীর পুজো হয়; একে শ্যামাপুজোও বলে। বাকি ভারতে ওই রাতে লক্ষ্মীপুজো করে দীপাবলি পালিত হয়।",
            "In Bengal, Odisha and Assam, Goddess Kali is worshipped on the new-moon night of Kartik; it is also called Shyama Puja. Much of the rest of India marks the same night as Diwali with Lakshmi worship.",
          ),
          source: WIKI_KALI,
        },
      ],
      tips: [l("পুজো মূলত মাঝরাতে, তাই ফেরার পথের গাড়ির ব্যবস্থা আগে থেকে করে রেখো।", "The main puja is near midnight, so plan your ride home in advance.")],
    },
    {
      id: "diwali",
      h2: l("পরদিন দীপাবলি", "Diwali the next day"),
      paras: [
        {
          text: l(
            "দ্রিকের এই পাতায় কালীপুজো ২৮ অক্টোবর, কিন্তু অমাবস্যা ২৯ অক্টোবর সন্ধে পর্যন্ত চলে। দীপাবলির দিন আর লক্ষ্মীপুজোর সময় আমাদের আলাদা পাতায় দেওয়া আছে।",
            "On this Drik page Kali Puja is 28 October, while Amavasya runs until the evening of 29 October. Diwali's date and Lakshmi puja times are on our separate Diwali page.",
          ),
          source: KALI(KOL, "Kolkata"),
        },
      ],
    },
    {
      id: "temples",
      h2: l("তারাপীঠ, দক্ষিণেশ্বর আর কালীঘাট", "Tarapith, Dakshineswar and Kalighat"),
      paras: [
        {
          text: l(
            "কালীপুজোর রাতে বাংলার বড় তিন কালীক্ষেত্র তারাপীঠ, দক্ষিণেশ্বর আর কালীঘাটে ভিড় হয়। প্রতিটি মন্দিরের ইতিহাস আর যাওয়ার টিপস আমাদের ব্লগে আছে।",
            "On Kali Puja night Bengal's three great Kali temples, Tarapith, Dakshineswar and Kalighat, draw big crowds. Our blog covers each temple's history and visiting tips.",
          ),
        },
      ],
    },
  ],
  faq: [
    { q: l("২০২৭-এ কালীপুজো কবে?", "When is Kali Puja in 2027?"), a: l("বৃহস্পতিবার ২৮ অক্টোবর ২০২৭ রাতে (দ্রিক পঞ্চাঙ্গ, কলকাতা ও ঢাকা)।", "On the night of Thursday 28 October 2027 (Drik Panchang, Kolkata and Dhaka).") },
    { q: l("কালীপুজোর নিশীথ পুজো কখন?", "What is the Kali Puja 2027 Nishita time in Kolkata?"), a: l("কলকাতায় রাত ১০:৫৫ থেকে ১১:৪৬; ঢাকায় রাত ১১:১৭ থেকে ১২:০৮।", "Kolkata 10:55 to 11:46 pm; Dhaka 11:17 pm to 12:08 am.") },
    { q: l("২০২৭-এ অমাবস্যা কখন শুরু আর শেষ?", "When does Amavasya begin and end for Kali Puja 2027?"), a: l("কলকাতায় ২৮ অক্টোবর রাত ৮:৪৭ থেকে ২৯ অক্টোবর সন্ধে ৭:০৫।", "Kolkata: 28 Oct 8:47 pm to 29 Oct 7:05 pm.") },
  ],
  events: [{ name: l("কালীপুজো ২০২৭", "Kali Puja 2027"), start: "2027-10-28", place: PLACE_KOL }],
  links: [
    CAL,
    { href: "/diwali-2027", label: l("🪔 দীপাবলি ২০২৭", "🪔 Diwali 2027"), primary: true },
    { href: "/kali-puja-2026", label: l("কালীপুজো ২০২৬", "Kali Puja 2026") },
    { href: "/dhanteras-2027", label: l("ধনতেরাস ২০২৭", "Dhanteras 2027") },
    { href: "/bhai-phota-2027", label: l("ভাইফোঁটা ২০২৭", "Bhai Phota 2027") },
    { href: "/blog/tarapith-kali-puja", label: l("তারাপীঠে কালীপুজো", "Kali Puja at Tarapith") },
    { href: "/blog/dakshineswar-kali-temple-guide", label: l("দক্ষিণেশ্বর কালীমন্দির গাইড", "Dakshineswar Kali Temple guide") },
    { href: "/blog/kalighat-kali-temple-guide", label: l("কালীঘাট মন্দির গাইড", "Kalighat Temple guide") },
  ],
  lastChecked: "2026-11-02",
};

export const BHAI_PHOTA_2027: FestivalPage = {
  path: "/bhai-phota-2027",
  title: l("ভাইফোঁটা ২০২৭: তারিখ, দ্বিতীয়া তিথি, ফোঁটার সময়", "Bhai Phota 2027: Date, Dwitiya Tithi & Tika Time"),
  description: l(
    "ভাইফোঁটা ২০২৭ রবিবার ৩১ অক্টোবর। কলকাতায় ফোঁটার সময় দুপুর ১২:২৮ থেকে ২:৪৪, দ্বিতীয়া তিথির সময়, ঢাকার সময়ও, সূত্রসহ।",
    "Bhai Phota 2027 is Sunday 31 October. Kolkata tika time 12:28 to 2:44 pm, Dwitiya tithi times, plus Dhaka, all sourced.",
  ),
  h1: l("ভাইফোঁটা ২০২৭: কবে, কখন", "Bhai Phota 2027: when and what time"),
  lead: l(
    "কালীপুজোর দু’দিন পরে ভাইফোঁটা; ২০২৭-এ রবিবার ৩১ অক্টোবর, কলকাতা আর ঢাকা দু’জায়গাতেই (দ্রিক পঞ্চাঙ্গে ভাইদুজ)।",
    "Bhai Phota comes two days after Kali Puja; in 2027 it is Sunday 31 October in both Kolkata and Dhaka (Bhai Dooj on Drik Panchang).",
  ),
  timings: {
    h2: l("ফোঁটার সময় আর দ্বিতীয়া তিথি", "Tika time and Dwitiya tithi"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [
        { day: l("রবি ৩১ অক্টোবর", "Sun 31 Oct"), what: l("ভাইদুজ অপরাহ্ন (ফোঁটার সময়)", "Bhai Dooj Aparahna tika time"), when: l("দুপুর ১২:২৮ থেকে ২:৪৪", "12:28 pm to 2:44 pm"), source: BHAI(KOL, "Kolkata") },
        { day: l("৩০–৩১ অক্টোবর", "30–31 Oct"), what: l("দ্বিতীয়া তিথি", "Dwitiya tithi"), when: l("৩০ অক্টোবর সন্ধে ৫:৫১ থেকে ৩১ অক্টোবর বিকেল ৫:১২", "30 Oct 5:51 pm to 31 Oct 5:12 pm"), source: BHAI(KOL, "Kolkata") },
      ],
      bd: [
        { day: l("রবি ৩১ অক্টোবর", "Sun 31 Oct"), what: l("ভাইদুজ অপরাহ্ন (ফোঁটার সময়)", "Bhai Dooj Aparahna tika time"), when: l("দুপুর ১২:৫০ থেকে ৩:০৫", "12:50 pm to 3:05 pm"), source: BHAI(DHAKA, "Dhaka") },
        { day: l("৩০–৩১ অক্টোবর", "30–31 Oct"), what: l("দ্বিতীয়া তিথি", "Dwitiya tithi"), when: l("৩০ অক্টোবর সন্ধে ৬:২১ থেকে ৩১ অক্টোবর বিকেল ৫:৪২", "30 Oct 6:21 pm to 31 Oct 5:42 pm"), source: BHAI(DHAKA, "Dhaka") },
      ],
    },
    note: l("বাংলার পঞ্জিকা (গুপ্তপ্রেস, বিশুদ্ধ সিদ্ধান্ত) দ্রিকের থেকে আলাদা হলে ফোঁটার দিন নিজের পঞ্জিকা মিলিয়ে নিও; এখানে কোনো আলাদা দিনের সূত্র আমরা পাইনি।", "If your Bengali panjika (Gupta Press, Bisuddha Siddhanta) differs from Drik, follow it for the day; we found no source giving a different day."),
  },
  sections: [
    {
      id: "about",
      h2: l("ভাইফোঁটা কী", "What is Bhai Phota"),
      paras: [
        {
          text: l(
            "কার্তিকের শুক্লা দ্বিতীয়ায় বোনেরা ভাইয়ের কপালে ফোঁটা দিয়ে দীর্ঘ জীবন কামনা করে, ভাই উপহার দেয়। বাংলায় একে ভাইফোঁটা, উত্তর ভারতে ভাইদুজ বলে।",
            "On the bright Dwitiya of Kartik, sisters apply a tika on their brothers' foreheads and pray for their long life, and brothers give gifts. Bengal calls it Bhai Phota; north India calls it Bhai Dooj.",
          ),
          source: WIKI_BHAI,
        },
      ],
      tips: [l("ফোঁটা দেওয়ার সময়সীমার মধ্যে বসার জন্য আগে থেকে দিন ঠিক করে রেখো।", "Fix the visit in advance so the tika falls within the tika window.")],
    },
    {
      id: "rituals",
      h2: l("নিয়ম আর আচার", "Rituals and customs"),
      paras: [{ text: l("ফোঁটার রীতি, মন্ত্র আর খাবারদাবারের কথা আমাদের ব্লগে বিস্তারিত আছে।", "Our blog covers the rituals, the mantra and the food in detail.") }],
    },
  ],
  faq: [
    { q: l("২০২৭-এ ভাইফোঁটা কবে?", "When is Bhai Phota in 2027?"), a: l("রবিবার ৩১ অক্টোবর ২০২৭, কলকাতা আর ঢাকায় (দ্রিক পঞ্চাঙ্গ)।", "Sunday 31 October 2027, in Kolkata and Dhaka (Drik Panchang).") },
    { q: l("ভাইফোঁটার ফোঁটা দেওয়ার সময় কখন?", "What is the Bhai Phota 2027 tika time in Kolkata?"), a: l("কলকাতায় দুপুর ১২:২৮ থেকে ২:৪৪; ঢাকায় দুপুর ১২:৫০ থেকে ৩:০৫।", "Kolkata 12:28 to 2:44 pm; Dhaka 12:50 to 3:05 pm.") },
    { q: l("২০২৭-এ দ্বিতীয়া তিথি কখন?", "When is Dwitiya tithi for Bhai Phota 2027?"), a: l("কলকাতায় ৩০ অক্টোবর সন্ধে ৫:৫১ থেকে ৩১ অক্টোবর বিকেল ৫:১২।", "Kolkata: 30 Oct 5:51 pm to 31 Oct 5:12 pm.") },
  ],
  events: [{ name: l("ভাইফোঁটা ২০২৭", "Bhai Phota 2027"), start: "2027-10-31", place: PLACE_KOL }],
  links: [
    CAL,
    { href: "/blog/bhai-phota-rituals", label: l("ভাইফোঁটার নিয়ম", "Bhai Phota rituals"), primary: true },
    { href: "/greetings/bhaiphota", label: l("ভাইফোঁটার শুভেচ্ছা", "Bhai Phota greetings") },
    { href: "/kali-puja-2027", label: l("কালীপুজো ২০২৭", "Kali Puja 2027") },
    { href: "/diwali-2027", label: l("🪔 দীপাবলি ২০২৭", "🪔 Diwali 2027") },
  ],
  lastChecked: "2026-11-02",
};

export const DHANTERAS_2027: FestivalPage = {
  path: "/dhanteras-2027",
  title: l("ধনতেরাস ২০২৭: তারিখ, পুজোর শুভ সময়", "Dhanteras 2027: Date, Puja Muhurat & Time"),
  description: l(
    "ধনতেরাস ২০২৭ বুধবার ২৭ অক্টোবর। কলকাতায় পুজোর শুভ সময় সন্ধে ৬:০৮ থেকে ৭:৩৪, প্রদোষ কাল আর ত্রয়োদশী তিথি, ঢাকার সময়ও, সূত্রসহ।",
    "Dhanteras 2027 is Wednesday 27 October. Kolkata puja muhurat 6:08 to 7:34 pm, Pradosh Kaal and Trayodashi tithi, plus Dhaka times, all sourced.",
  ),
  h1: l("ধনতেরাস ২০২৭: কবে, কখন", "Dhanteras 2027: when and what time"),
  lead: l(
    "দীপাবলির প্রথম দিন ধনতেরাস (ধনত্রয়োদশী); ২০২৭-এ বুধবার ২৭ অক্টোবর, কলকাতা আর ঢাকা দু’জায়গাতেই। কালীপুজো বৃহস্পতিবার ২৮ অক্টোবর।",
    "Dhanteras (Dhantrayodashi) opens Diwali; in 2027 it is Wednesday 27 October, in both Kolkata and Dhaka. Kali Puja follows on Thursday 28 October.",
  ),
  timings: {
    h2: l("ধনতেরাসের পুজোর শুভ সময়, প্রদোষ কাল আর ত্রয়োদশী", "Puja muhurat, Pradosh Kaal and Trayodashi"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [
        { day: l("বুধ ২৭ অক্টোবর", "Wed 27 Oct"), what: l("ধনতেরাসের পুজোর শুভ সময়", "Dhanteras puja muhurat"), when: l("সন্ধে ৬:০৮ থেকে ৭:৩৪", "6:08 pm to 7:34 pm"), source: DHAN(KOL, "Kolkata") },
        { day: l("বুধ ২৭ অক্টোবর", "Wed 27 Oct"), what: l("প্রদোষ কাল", "Pradosh Kaal"), when: l("বিকেল ৫:০২ থেকে সন্ধে ৭:৩৪", "5:02 pm to 7:34 pm"), source: DHAN(KOL, "Kolkata") },
        { day: l("বুধ ২৭ অক্টোবর", "Wed 27 Oct"), what: l("ত্রয়োদশী তিথি", "Trayodashi tithi"), when: l("২৭ অক্টোবর রাত ১:০৩ থেকে রাত ১০:৪৯", "27 Oct 1:03 am to 10:49 pm"), source: DHAN(KOL, "Kolkata") },
      ],
      bd: [
        { day: l("বুধ ২৭ অক্টোবর", "Wed 27 Oct"), what: l("ধনতেরাসের পুজোর শুভ সময়", "Dhanteras puja muhurat"), when: l("সন্ধে ৬:২৮ থেকে ৭:৫৫", "6:28 pm to 7:55 pm"), source: DHAN(DHAKA, "Dhaka") },
        { day: l("বুধ ২৭ অক্টোবর", "Wed 27 Oct"), what: l("প্রদোষ কাল", "Pradosh Kaal"), when: l("বিকেল ৫:২৩ থেকে সন্ধে ৭:৫৫", "5:23 pm to 7:55 pm"), source: DHAN(DHAKA, "Dhaka") },
        { day: l("বুধ ২৭ অক্টোবর", "Wed 27 Oct"), what: l("ত্রয়োদশী তিথি", "Trayodashi tithi"), when: l("২৭ অক্টোবর রাত ১:৩৩ থেকে রাত ১১:১৯", "27 Oct 1:33 am to 11:19 pm"), source: DHAN(DHAKA, "Dhaka") },
      ],
    },
  },
  sections: [
    {
      id: "about",
      h2: l("ধনতেরাস কী", "What is Dhanteras"),
      paras: [
        {
          text: l(
            "কার্তিক কৃষ্ণপক্ষের ত্রয়োদশীতে ধনতেরাস। এদিন লক্ষ্মী আর ধন্বন্তরীর পুজো হয়, আর অনেকে সোনা, রুপো বা বাসন কেনেন।",
            "Dhanteras falls on the Trayodashi of Kartik's dark fortnight. People worship Lakshmi and Dhanvantari, and many buy gold, silver or utensils.",
          ),
          source: WIKI_DHAN,
        },
      ],
      tips: [l("বড় কেনাকাটা করার আগে বাজেট ঠিক করে নিও।", "Set a budget before any big purchase.")],
    },
  ],
  faq: [
    { q: l("২০২৭-এ ধনতেরাস কবে?", "When is Dhanteras in 2027?"), a: l("বুধবার ২৭ অক্টোবর ২০২৭, কলকাতা আর ঢাকায় (দ্রিক পঞ্চাঙ্গ)।", "Wednesday 27 October 2027, in Kolkata and Dhaka (Drik Panchang).") },
    { q: l("ধনতেরাসের পুজোর শুভ সময় কখন?", "What is the Dhanteras 2027 puja muhurat in Kolkata?"), a: l("কলকাতায় সন্ধে ৬:০৮ থেকে ৭:৩৪; ঢাকায় সন্ধে ৬:২৮ থেকে ৭:৫৫।", "Kolkata 6:08 to 7:34 pm; Dhaka 6:28 to 7:55 pm.") },
    { q: l("২০২৭-এ ত্রয়োদশী তিথি কখন?", "When is Trayodashi tithi for Dhanteras 2027?"), a: l("কলকাতায় ২৭ অক্টোবর রাত ১:০৩ থেকে রাত ১০:৪৯।", "Kolkata: 27 Oct 1:03 am to 10:49 pm.") },
  ],
  events: [{ name: l("ধনতেরাস ২০২৭", "Dhanteras 2027"), start: "2027-10-27", place: PLACE_KOL }],
  links: [
    CAL,
    { href: "/kali-puja-2027", label: l("কালীপুজো ২০২৭", "Kali Puja 2027"), primary: true },
    { href: "/diwali-2027", label: l("🪔 দীপাবলি ২০২৭", "🪔 Diwali 2027") },
    { href: "/dhanteras-2026", label: l("ধনতেরাস ২০২৬", "Dhanteras 2026") },
    { href: "/bhai-phota-2027", label: l("ভাইফোঁটা ২০২৭", "Bhai Phota 2027") },
  ],
  lastChecked: "2026-11-02",
};

const CH_NOTE = l("সূর্যোদয় আর সূর্যাস্ত দ্রিকের ছট পুজো ক্যালেন্ডার থেকে নেওয়া; অর্ঘ্যের আলাদা ঘড়ির সময় সেখানে ছাপা নেই।", "Sunrise and sunset come from Drik's Chhath calendar; it prints no separate clock time for the arghya.");

export const CHHATH_2027: FestivalPage = {
  path: "/chhath-puja-2027",
  title: l("ছট পুজো ২০২৭: তারিখ, সন্ধ্যা ও ঊষা অর্ঘ্যের সময়", "Chhath Puja 2027: Date, Sunset & Sunrise Arghya Time"),
  description: l(
    "ছট পুজো ২০২৭ মঙ্গলবার ২ নভেম্বর থেকে শুক্রবার ৫ নভেম্বর। কলকাতায় সন্ধ্যা অর্ঘ্য ৪ নভেম্বর, সূর্যাস্ত বিকেল ৪:৫৮; ঢাকার সময়ও, সূত্রসহ।",
    "Chhath Puja 2027 runs Tuesday 2 to Friday 5 November. Kolkata sunset on Sandhya Arghya day (4 Nov) is 4:58 pm; Dhaka times too, all sourced.",
  ),
  h1: l("ছট পুজো ২০২৭: কবে, কখন", "Chhath Puja 2027: when and what time"),
  lead: l(
    "ছট পুজো ২০২৭-এ চার দিন, মঙ্গলবার ২ নভেম্বর থেকে শুক্রবার ৫ নভেম্বর। সন্ধ্যা অর্ঘ্য বৃহস্পতিবার ৪ নভেম্বর, ঊষা অর্ঘ্য শুক্রবার ৫ নভেম্বর।",
    "Chhath Puja 2027 lasts four days, Tuesday 2 to Friday 5 November. Sandhya Arghya is on Thursday 4 November and Usha Arghya on Friday 5 November.",
  ),
  timings: {
    h2: l("চার দিনের তারিখ, সূর্যোদয় আর সূর্যাস্ত", "Four days with sunrise and sunset"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST। সন্ধ্যা অর্ঘ্য সূর্যাস্তের সময়, ঊষা অর্ঘ্য সূর্যোদয়ের সময়।", "Kolkata times are IST, Dhaka times BST. Sandhya Arghya is offered at sunset, Usha Arghya at sunrise."),
    rows: {
      wb: [
        { day: l("মঙ্গল ২ নভেম্বর", "Tue 2 Nov"), what: l("নাহায়-খায়", "Nahay Khay"), when: l("সূর্যোদয় ভোর ৫:৪১, সূর্যাস্ত বিকেল ৪:৫৯", "Sunrise 5:41 am, sunset 4:59 pm"), source: CHHATH(KOL, "Kolkata") },
        { day: l("বুধ ৩ নভেম্বর", "Wed 3 Nov"), what: l("খরনা (লোহান্ডা)", "Kharna (Lohanda)"), when: l("সূর্যোদয় ভোর ৫:৪২, সূর্যাস্ত বিকেল ৪:৫৮", "Sunrise 5:42 am, sunset 4:58 pm"), source: CHHATH(KOL, "Kolkata") },
        { day: l("বৃহস্পতি ৪ নভেম্বর", "Thu 4 Nov"), what: l("সন্ধ্যা অর্ঘ্য", "Sandhya Arghya"), when: l("সূর্যাস্ত বিকেল ৪:৫৮", "Sunset 4:58 pm"), source: CHHATH(KOL, "Kolkata") },
        { day: l("শুক্র ৫ নভেম্বর", "Fri 5 Nov"), what: l("ঊষা অর্ঘ্য", "Usha Arghya"), when: l("সূর্যোদয় ভোর ৫:৪৩", "Sunrise 5:43 am"), source: CHHATH(KOL, "Kolkata") },
        { day: l("৩–৪ নভেম্বর", "3–4 Nov"), what: l("ষষ্ঠী তিথি", "Shashthi tithi"), when: l("৩ নভেম্বর সন্ধে ৭:৩১ থেকে ৪ নভেম্বর রাত ৯:৩৭", "3 Nov 7:31 pm to 4 Nov 9:37 pm"), source: CHHATH_DAY(KOL, "Kolkata") },
      ],
      bd: [
        { day: l("মঙ্গল ২ নভেম্বর", "Tue 2 Nov"), what: l("নাহায়-খায়", "Nahay Khay"), when: l("সূর্যোদয় ভোর ৬:০৪, সূর্যাস্ত বিকেল ৫:১৯", "Sunrise 6:04 am, sunset 5:19 pm"), source: CHHATH(DHAKA, "Dhaka") },
        { day: l("বুধ ৩ নভেম্বর", "Wed 3 Nov"), what: l("খরনা (লোহান্ডা)", "Kharna (Lohanda)"), when: l("সূর্যোদয় ভোর ৬:০৫, সূর্যাস্ত বিকেল ৫:১৯", "Sunrise 6:05 am, sunset 5:19 pm"), source: CHHATH(DHAKA, "Dhaka") },
        { day: l("বৃহস্পতি ৪ নভেম্বর", "Thu 4 Nov"), what: l("সন্ধ্যা অর্ঘ্য", "Sandhya Arghya"), when: l("সূর্যাস্ত বিকেল ৫:১৮", "Sunset 5:18 pm"), source: CHHATH(DHAKA, "Dhaka") },
        { day: l("শুক্র ৫ নভেম্বর", "Fri 5 Nov"), what: l("ঊষা অর্ঘ্য", "Usha Arghya"), when: l("সূর্যোদয় ভোর ৬:০৬", "Sunrise 6:06 am"), source: CHHATH(DHAKA, "Dhaka") },
      ],
    },
    note: CH_NOTE,
  },
  sections: [
    {
      id: "four-days",
      h2: l("চার দিনের ধাপ", "The four days"),
      paras: [
        {
          text: l(
            "প্রথম দিন নাহায়-খায়: স্নান করে নিরামিষ খাবার। দ্বিতীয় দিন খরনা: সারা দিন উপোসের পর সন্ধেয় গুড়ের পায়েস। তৃতীয় দিন অস্তগামী সূর্যকে সন্ধ্যা অর্ঘ্য, চতুর্থ দিন ভোরে উদীয়মান সূর্যকে ঊষা অর্ঘ্য দিয়ে ব্রত শেষ হয়।",
            "Day one is Nahay Khay: a bath and a vegetarian meal. Day two is Kharna: a day-long fast broken in the evening with jaggery kheer. On day three the setting sun gets Sandhya Arghya, and on day four the rising sun gets Usha Arghya, which ends the vow.",
          ),
          source: WIKI_CHHATH,
        },
      ],
      tips: [l("ঘাটে সূর্যাস্তের অন্তত আধ ঘণ্টা আগে পৌঁছোনোই ভালো; ভিড় আর ঠান্ডা দুটোই থাকে।", "Reach the ghat at least half an hour before sunset; expect crowds and a chill.")],
    },
    {
      id: "kolkata",
      h2: l("কলকাতায় ছট", "Chhath in Kolkata"),
      paras: [{ text: l("গঙ্গার ঘাট আর পুকুরপাড়ে কোথায় কী ব্যবস্থা, আমাদের ব্লগে ২০২৬-এর অভিজ্ঞতা থেকে লেখা আছে।", "Our blog describes the ghats and ponds in Kolkata, written from the 2026 season.") }],
    },
  ],
  faq: [
    { q: l("২০২৭-এ ছট পুজো কবে?", "When is Chhath Puja in 2027?"), a: l("মঙ্গলবার ২ নভেম্বর থেকে শুক্রবার ৫ নভেম্বর ২০২৭ (দ্রিক পঞ্চাঙ্গ)।", "Tuesday 2 to Friday 5 November 2027 (Drik Panchang).") },
    { q: l("সন্ধ্যা অর্ঘ্যের সময় কখন, কলকাতায়?", "What is the Sandhya Arghya time in Kolkata in 2027?"), a: l("৪ নভেম্বর কলকাতায় সূর্যাস্ত বিকেল ৪:৫৮; ঢাকায় বিকেল ৫:১৮।", "On 4 Nov Kolkata sunset is 4:58 pm; Dhaka sunset is 5:18 pm.") },
    { q: l("ঊষা অর্ঘ্য কখন দিতে হয়?", "When is Usha Arghya in 2027?"), a: l("শুক্রবার ৫ নভেম্বর সূর্যোদয়ের সময়: কলকাতায় ভোর ৫:৪৩, ঢাকায় ভোর ৬:০৬।", "Friday 5 November at sunrise: 5:43 am in Kolkata, 6:06 am in Dhaka.") },
  ],
  events: [{ name: l("ছট পুজো ২০২৭", "Chhath Puja 2027"), start: "2027-11-02", end: "2027-11-05", place: PLACE_KOL }],
  links: [
    CAL,
    { href: "/blog/chhath-puja-2026-kolkata", label: l("কলকাতায় ছট পুজো", "Chhath Puja in Kolkata"), primary: true },
    { href: "/kali-puja-2027", label: l("কালীপুজো ২০২৭", "Kali Puja 2027") },
    { href: "/diwali-2027", label: l("🪔 দীপাবলি ২০২৭", "🪔 Diwali 2027") },
  ],
  lastChecked: "2026-11-02",
};

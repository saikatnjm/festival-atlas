// Rath Yatra, Janmashtami and Kojagori Lakshmi Puja 2027. Dates and times copied from Drik Panchang's
// festival pages for Kolkata and Dhaka (fetched 31 Oct 2026); background from Wikipedia. Type imports only.

import type { L } from "@/lib/i18n";
import type { FestivalPage } from "./types";

const l = (bn: string, en: string): L => ({ bn, en });
const drik = (path: string, geo: string) => `https://www.drikpanchang.com/${path}?geoname-id=${geo}&year=2027`;
const KOL = "1275004";
const DHAKA = "1185241";

const RATH = (g: string, city: string) => ({ title: `Drik Panchang, Ratha Yatra 2027 (${city})`, url: drik("festivals/ratha-yatra/jagannatha-rathayatra-date-time.html", g) });
const JANMA = (g: string, city: string) => ({ title: `Drik Panchang, Krishna Janmashtami 2027 (${city})`, url: drik("dashavatara/lord-krishna/krishna-janmashtami-date-time.html", g) });
const JANMA_ISKCON = { title: "Drik Panchang, ISKCON Krishna Janmashtami 2027 (Kolkata)", url: drik("iskcon/lord/krishna-janmashtami-date-time.html", KOL) };
const KOJA = (g: string, city: string) => ({ title: `Drik Panchang, Kojagara Puja 2027 (${city})`, url: drik("festivals/kojagara/kojagara-puja-date-time.html", g) });
const WIKI_RATH = { title: "Wikipedia, Ratha Yatra", url: "https://en.wikipedia.org/wiki/Ratha_Yatra" };
const WIKI_JANMA = { title: "Wikipedia, Krishna Janmashtami", url: "https://en.wikipedia.org/wiki/Krishna_Janmashtami" };
const WIKI_LAKSHMI = { title: "Wikipedia, Lakshmi Puja", url: "https://en.wikipedia.org/wiki/Lakshmi_Puja" };
const CAL = { href: "/calendar-2027", label: l("📅 পুজোর ক্যালেন্ডার ২০২৭", "📅 Festival calendar 2027") };

export const RATH_2027: FestivalPage = {
  path: "/rath-yatra-2027",
  title: l("রথযাত্রা ২০২৭: তারিখ, দ্বিতীয়া তিথি, মাহেশের রথ", "Rath Yatra 2027: Date, Dwitiya Tithi, Mahesh & Dhamrai"),
  description: l(
    "রথযাত্রা ২০২৭ সোমবার ৫ জুলাই। কলকাতা আর ঢাকার দ্বিতীয়া তিথির সময়, শ্রীরামপুরের মাহেশের রথ আর বাংলাদেশের ধামরাইয়ের রথ, সূত্রসহ।",
    "Rath Yatra 2027 is Monday 5 July. Dwitiya tithi times for Kolkata and Dhaka, the Mahesh Rath in Serampore and Dhamrai's Rath in Bangladesh, sourced.",
  ),
  h1: l("রথযাত্রা ২০২৭: কবে, কখন", "Rath Yatra 2027: when and what time"),
  lead: l(
    "আষাঢ়ের শুক্লা দ্বিতীয়ায় রথ; ২০২৭-এ সোমবার ৫ জুলাই, কলকাতা আর ঢাকা দু’জায়গাতেই। বাংলায় সবচেয়ে পুরোনো রথ শ্রীরামপুরের মাহেশে।",
    "Rath Yatra falls on the bright Dwitiya of Asharh; in 2027 that is Monday 5 July, in both Kolkata and Dhaka. Bengal's oldest Rath is at Mahesh in Serampore.",
  ),
  timings: {
    h2: l("তারিখ আর দ্বিতীয়া তিথি", "Date and Dwitiya tithi"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [{ day: l("সোম ৫ জুলাই", "Mon 5 Jul"), what: l("দ্বিতীয়া তিথি", "Dwitiya tithi"), when: l("৫ জুলাই ভোর ৪:৫০ থেকে ৬ জুলাই রাত ১:১৩", "5 Jul 4:50 am to 6 Jul 1:13 am"), source: RATH(KOL, "Kolkata") }],
      bd: [{ day: l("সোম ৫ জুলাই", "Mon 5 Jul"), what: l("দ্বিতীয়া তিথি", "Dwitiya tithi"), when: l("৫ জুলাই ভোর ৫:২০ থেকে ৬ জুলাই রাত ১:৪৩", "5 Jul 5:20 am to 6 Jul 1:43 am"), source: RATH(DHAKA, "Dhaka") }],
    },
    note: l("উল্টোরথের দিন দ্রিকের এই পাতায় নেই; পঞ্জিকা মিলিয়ে নিও।", "Drik's page doesn't give the Ulto Rath (return) day; check your panjika."),
  },
  sections: [
    {
      id: "bengal",
      h2: l("বাংলার রথ", "Rath Yatra in Bengal"),
      paras: [
        {
          text: l(
            "শ্রীরামপুরের মাহেশের রথ বাংলার সবচেয়ে পুরোনো, ১৩৯৬ খ্রিস্টাব্দ থেকে পালিত হচ্ছে; উৎসব চলে মাসখানেক। বাংলাদেশে ধামরাইয়ের রথযাত্রা হিন্দু সম্প্রদায়ের সবচেয়ে গুরুত্বপূর্ণ উৎসবগুলোর একটি।",
            "The Mahesh Rath in Serampore is the oldest in Bengal, celebrated since 1396 CE, and runs as a month-long festival. In Bangladesh, the Dhamrai Rath Yatra is one of the most important events for the Hindu community.",
          ),
          source: WIKI_RATH,
        },
      ],
      tips: [l("রথের দিন জিলিপি-পাঁপড় আর মেলার ভিড়; বাচ্চাদের হাত ধরে রেখো।", "Rath day means jilipi, papad and fair crowds; keep children's hands in yours.")],
    },
  ],
  faq: [
    { q: l("২০২৭-এ রথযাত্রা কবে?", "When is Rath Yatra in 2027?"), a: l("সোমবার ৫ জুলাই ২০২৭, কলকাতা আর ঢাকায় (দ্রিক পঞ্চাঙ্গ)।", "Monday 5 July 2027, in Kolkata and Dhaka (Drik Panchang).") },
    { q: l("রথের দ্বিতীয়া তিথি কখন?", "When is the Dwitiya tithi for Rath Yatra 2027?"), a: l("কলকাতায় ৫ জুলাই ভোর ৪:৫০ থেকে ৬ জুলাই রাত ১:১৩; ঢাকায় ভোর ৫:২০ থেকে রাত ১:৪৩।", "Kolkata: 5 Jul 4:50 am to 6 Jul 1:13 am. Dhaka: 5:20 am to 1:43 am.") },
    { q: l("বাংলার সবচেয়ে পুরোনো রথ কোনটা?", "Which is the oldest Rath Yatra in Bengal?"), a: l("শ্রীরামপুরের মাহেশের রথ, ১৩৯৬ খ্রিস্টাব্দ থেকে।", "The Mahesh Rath in Serampore, since 1396 CE.") },
  ],
  events: [{ name: l("রথযাত্রা ২০২৭", "Rath Yatra 2027"), start: "2027-07-05", place: { name: "Mahesh, Serampore", locality: "Serampore", region: "West Bengal", country: "IN" } }],
  links: [CAL, { href: "/janmashtami-2027", label: l("জন্মাষ্টমী ২০২৭", "Janmashtami 2027") }, { href: "/purnima-2027", label: l("🌕 পূর্ণিমা ২০২৭", "🌕 Purnima 2027") }],
  lastChecked: "2026-10-31",
};

export const JANMASHTAMI_2027: FestivalPage = {
  path: "/janmashtami-2027",
  title: l("জন্মাষ্টমী ২০২৭: তারিখ, নিশীথ পুজো আর পারণের সময়", "Janmashtami 2027: Date, Nishita Puja & Parana Time"),
  description: l(
    "জন্মাষ্টমী ২০২৭ বুধবার ২৫ আগস্ট। কলকাতায় নিশীথ পুজো রাত ১১:১৬ থেকে ১২:০১, অষ্টমী তিথি, রোহিণী নক্ষত্র আর পারণের সময়, ঢাকার সময়ও, সূত্রসহ।",
    "Janmashtami 2027 is Wed 25 August. Kolkata Nishita puja 11:16 pm to 12:01 am, Ashtami tithi, Rohini nakshatra and parana times, plus Dhaka, sourced.",
  ),
  h1: l("জন্মাষ্টমী ২০২৭: কবে, কখন", "Janmashtami 2027: when and what time"),
  lead: l(
    "শ্রীকৃষ্ণের জন্মতিথি ২০২৭-এ বুধবার ২৫ আগস্ট, কলকাতা আর ঢাকায়; দ্রিক পঞ্চাঙ্গ স্মার্ত আর ইসকন দুই মতেই একই দিন দেখায়। পরদিন নন্দোৎসব।",
    "Krishna's birth is celebrated on Wednesday 25 August 2027 in Kolkata and Dhaka; Drik Panchang gives the same day for both Smarta and ISKCON. Nanda Utsav follows the next day.",
  ),
  timings: {
    h2: l("অষ্টমী, রোহিণী, নিশীথ পুজো আর পারণ", "Ashtami, Rohini, Nishita puja and parana"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST। পারণের তিনটে সময় তিন রকম রীতির।", "Kolkata times are IST, Dhaka times BST. The three parana times follow three different practices."),
    rows: {
      wb: [
        { day: l("২৪–২৫ আগস্ট", "24–25 Aug"), what: l("অষ্টমী তিথি", "Ashtami tithi"), when: l("২৪ আগস্ট রাত ৮:২৪ থেকে ২৫ আগস্ট সন্ধে ৭:১৯", "24 Aug 8:24 pm to 25 Aug 7:19 pm"), source: JANMA(KOL, "Kolkata") },
        { day: l("২৫–২৬ আগস্ট", "25–26 Aug"), what: l("রোহিণী নক্ষত্র", "Rohini nakshatra"), when: l("২৫ আগস্ট দুপুর ১২:২৭ থেকে ২৬ আগস্ট সকাল ১১:৪২", "25 Aug 12:27 pm to 26 Aug 11:42 am"), source: JANMA(KOL, "Kolkata") },
        { day: l("বুধ ২৫ আগস্ট রাত", "Wed 25 Aug night"), what: l("নিশীথ পুজো", "Nishita puja"), when: l("রাত ১১:১৬ থেকে ১২:০১", "11:16 pm to 12:01 am"), source: JANMA(KOL, "Kolkata") },
        { day: l("বৃহস্পতি ২৬ আগস্ট", "Thu 26 Aug"), what: l("পারণ (ধর্মশাস্ত্র মতে / ইসকন)", "Parana (Dharma Shastra / ISKCON)"), when: l("সকাল ১১:৪২-এর পর", "after 11:42 am"), source: JANMA_ISKCON },
        { day: l("বৃহস্পতি ২৬ আগস্ট", "Thu 26 Aug"), what: l("পারণ (প্রচলিত রীতি)", "Parana (modern practice)"), when: l("রাত ১২:০১-এর পর", "after 12:01 am"), source: JANMA(KOL, "Kolkata") },
      ],
      bd: [
        { day: l("২৪–২৫ আগস্ট", "24–25 Aug"), what: l("অষ্টমী তিথি", "Ashtami tithi"), when: l("২৪ আগস্ট রাত ৮:৫৪ থেকে ২৫ আগস্ট সন্ধে ৭:৪৯", "24 Aug 8:54 pm to 25 Aug 7:49 pm"), source: JANMA(DHAKA, "Dhaka") },
        { day: l("বুধ ২৫ আগস্ট রাত", "Wed 25 Aug night"), what: l("নিশীথ পুজো", "Nishita puja"), when: l("রাত ১১:৩৮ থেকে ১২:২৩", "11:38 pm to 12:23 am"), source: JANMA(DHAKA, "Dhaka") },
        { day: l("বৃহস্পতি ২৬ আগস্ট", "Thu 26 Aug"), what: l("পারণ (ধর্মশাস্ত্র মতে / ইসকন)", "Parana (Dharma Shastra / ISKCON)"), when: l("দুপুর ১২:১২-এর পর", "after 12:12 pm"), source: JANMA(DHAKA, "Dhaka") },
      ],
    },
  },
  sections: [
    {
      id: "bengal",
      h2: l("বাংলায় জন্মাষ্টমী", "Janmashtami in Bengal"),
      paras: [
        {
          text: l(
            "নবদ্বীপে উৎসবটাকে শ্রীকৃষ্ণ জয়ন্তীও বলা হয়। পরের দিন নন্দোৎসব, কৃষ্ণের পালক বাবা-মা নন্দ আর যশোদার আনন্দের উৎসব; সেদিনই দই-হাঁড়ি।",
            "In Nabadwip the festival is also called Sri Krishna Jayanti. The next day is Nanda Utsav, the celebration of Krishna's foster parents Nanda and Yashoda, and Dahi Handi follows then too.",
          ),
          source: WIKI_JANMA,
        },
      ],
      tips: [l("উপোস করলে দিনে জল খেও আর বিশ্রাম নিও; শরীর খারাপ লাগলে উপোস ভেঙো।", "If you fast, drink water and rest in the day; break the fast if you feel unwell.")],
    },
  ],
  faq: [
    { q: l("২০২৭-এ জন্মাষ্টমী কবে?", "When is Janmashtami in 2027?"), a: l("বুধবার ২৫ আগস্ট ২০২৭, কলকাতা আর ঢাকায় (দ্রিক পঞ্চাঙ্গ, স্মার্ত ও ইসকন দুই মতেই)।", "Wednesday 25 August 2027 in Kolkata and Dhaka (Drik Panchang, both Smarta and ISKCON).") },
    { q: l("জন্মাষ্টমীর নিশীথ পুজো কখন?", "What is the Nishita puja time for Janmashtami 2027?"), a: l("কলকাতায় রাত ১১:১৬ থেকে ১২:০১; ঢাকায় রাত ১১:৩৮ থেকে ১২:২৩।", "Kolkata 11:16 pm to 12:01 am; Dhaka 11:38 pm to 12:23 am.") },
    { q: l("জন্মাষ্টমীর উপোস কখন ভাঙব?", "When is the Janmashtami 2027 parana?"), a: l("কলকাতায় ধর্মশাস্ত্র (ও ইসকন) মতে ২৬ আগস্ট সকাল ১১:৪২-এর পর; প্রচলিত রীতিতে রাত ১২:০১-এর পর।", "Kolkata: after 11:42 am on 26 Aug per Dharma Shastra (and ISKCON); in modern practice, after 12:01 am.") },
    { q: l("২০২৭-এ দই-হাঁড়ি কবে?", "When is Dahi Handi in 2027?"), a: l("বৃহস্পতিবার ২৬ আগস্ট ২০২৭।", "Thursday 26 August 2027.") },
  ],
  events: [{ name: l("জন্মাষ্টমী ২০২৭", "Janmashtami 2027"), start: "2027-08-25", place: { name: "Kolkata", locality: "Kolkata", region: "West Bengal", country: "IN" } }],
  links: [CAL, { href: "/rath-yatra-2027", label: l("রথযাত্রা ২০২৭", "Rath Yatra 2027") }, { href: "/ekadashi-2027", label: l("🪔 একাদশী ২০২৭", "🪔 Ekadashi 2027") }],
  lastChecked: "2026-10-31",
};

export const LAKSHMI_2027: FestivalPage = {
  path: "/lakshmi-puja-2027",
  title: l("কোজাগরী লক্ষ্মীপুজো ২০২৭: তারিখ, নিশীথ কাল, পূর্ণিমা", "Kojagori Lakshmi Puja 2027: Date, Nishita Time, Purnima"),
  description: l(
    "কোজাগরী লক্ষ্মীপুজো ২০২৭ বৃহস্পতিবার ১৪ অক্টোবর। কলকাতায় নিশীথ কাল রাত ১০:৫৮ থেকে ১১:৪৭, পূর্ণিমা তিথি আর চাঁদ ওঠার সময়, ঢাকার সময়ও, সূত্রসহ।",
    "Kojagori Lakshmi Puja 2027 is Thu 14 October. Kolkata Nishita time 10:58 to 11:47 pm, Purnima tithi and moonrise, plus Dhaka times, sourced.",
  ),
  h1: l("কোজাগরী লক্ষ্মীপুজো ২০২৭: কবে, কখন", "Kojagori Lakshmi Puja 2027: when and what time"),
  lead: l(
    "দুর্গাপুজোর পাঁচ দিন পরে আশ্বিন পূর্ণিমায় বাঙালির ঘরে ঘরে লক্ষ্মীপুজো; ২০২৭-এ বৃহস্পতিবার ১৪ অক্টোবর, কলকাতা আর ঢাকায়।",
    "Five days after Vijaya Dashami, on the Ashwin full moon, Bengali homes worship Lakshmi; in 2027 that is Thursday 14 October, in Kolkata and Dhaka.",
  ),
  timings: {
    h2: l("নিশীথ কাল, পূর্ণিমা আর চাঁদ ওঠা", "Nishita time, Purnima and moonrise"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [
        { day: l("বৃহস্পতি ১৪ অক্টোবর", "Thu 14 Oct"), what: l("কোজাগরী পুজোর নিশীথ কাল", "Kojagara Nishita time"), when: l("রাত ১০:৫৮ থেকে ১১:৪৭", "10:58 pm to 11:47 pm"), source: KOJA(KOL, "Kolkata") },
        { day: l("১৪–১৫ অক্টোবর", "14–15 Oct"), what: l("পূর্ণিমা তিথি", "Purnima tithi"), when: l("১৪ অক্টোবর সন্ধে ৬:৪৯ থেকে ১৫ অক্টোবর সন্ধে ৭:১৬", "14 Oct 6:49 pm to 15 Oct 7:16 pm"), source: KOJA(KOL, "Kolkata") },
        { day: l("বৃহস্পতি ১৪ অক্টোবর", "Thu 14 Oct"), what: l("চাঁদ ওঠা", "Moonrise"), when: l("বিকেল ৪:১৯", "4:19 pm"), source: KOJA(KOL, "Kolkata") },
      ],
      bd: [
        { day: l("বৃহস্পতি ১৪ অক্টোবর", "Thu 14 Oct"), what: l("কোজাগরী পুজোর নিশীথ কাল", "Kojagara Nishita time"), when: l("রাত ১১:২০ থেকে ১২:০৯", "11:20 pm to 12:09 am"), source: KOJA(DHAKA, "Dhaka") },
        { day: l("১৪–১৫ অক্টোবর", "14–15 Oct"), what: l("পূর্ণিমা তিথি", "Purnima tithi"), when: l("১৪ অক্টোবর সন্ধে ৭:১৯ থেকে ১৫ অক্টোবর সন্ধে ৭:৪৬", "14 Oct 7:19 pm to 15 Oct 7:46 pm"), source: KOJA(DHAKA, "Dhaka") },
        { day: l("বৃহস্পতি ১৪ অক্টোবর", "Thu 14 Oct"), what: l("চাঁদ ওঠা", "Moonrise"), when: l("বিকেল ৪:৪০", "4:40 pm"), source: KOJA(DHAKA, "Dhaka") },
      ],
    },
  },
  sections: [
    {
      id: "about",
      h2: l("কোজাগরী লক্ষ্মীপুজো", "Kojagori Lakshmi Puja"),
      paras: [
        {
          text: l(
            "বাংলা, অসম আর ওড়িশায় লক্ষ্মীপুজো হয় আশ্বিন পূর্ণিমায়; বাংলায় এর নাম কোজাগরী লক্ষ্মীপুজো, বিজয়া দশমীর পাঁচ দিন পরে।",
            "In Bengal, Assam and Odisha, Lakshmi Puja is performed on Ashwin Purnima; in Bengal it is known as Kojagori Lokkhi Pujo and falls five days after Vijaya Dashami.",
          ),
          source: WIKI_LAKSHMI,
        },
      ],
      tips: [
        l("আলপনা, ধানের ছড়া আর লক্ষ্মীর পাঁচালি: বাড়ির রীতি বড়দের কাছে জেনে নাও।", "Alpana, sheaves of paddy and the Lakshmi panchali: ask the elders about your family's way."),
        l("ভোগে খিচুড়ি, লাবড়া, নারকেল নাড়ু: যা তোমাদের বাড়িতে হয়।", "Khichuri, labra, coconut naru for bhog: whatever your home makes."),
      ],
    },
  ],
  faq: [
    { q: l("২০২৭-এ কোজাগরী লক্ষ্মীপুজো কবে?", "When is Kojagori Lakshmi Puja in 2027?"), a: l("বৃহস্পতিবার ১৪ অক্টোবর ২০২৭, কলকাতা আর ঢাকায় (দ্রিক পঞ্চাঙ্গ)।", "Thursday 14 October 2027, in Kolkata and Dhaka (Drik Panchang).") },
    { q: l("লক্ষ্মীপুজোর নিশীথ কাল কখন?", "What is the Nishita time for Lakshmi Puja 2027?"), a: l("কলকাতায় রাত ১০:৫৮ থেকে ১১:৪৭; ঢাকায় রাত ১১:২০ থেকে ১২:০৯।", "Kolkata 10:58 pm to 11:47 pm; Dhaka 11:20 pm to 12:09 am.") },
    { q: l("পূর্ণিমা তিথি কখন শুরু?", "When does the Purnima tithi begin for Lakshmi Puja 2027?"), a: l("কলকাতায় ১৪ অক্টোবর সন্ধে ৬:৪৯, শেষ ১৫ অক্টোবর সন্ধে ৭:১৬।", "In Kolkata it begins at 6:49 pm on 14 October and ends at 7:16 pm on 15 October.") },
  ],
  events: [{ name: l("কোজাগরী লক্ষ্মীপুজো ২০২৭", "Kojagori Lakshmi Puja 2027"), start: "2027-10-14", place: { name: "Kolkata", locality: "Kolkata", region: "West Bengal", country: "IN" } }],
  links: [{ href: "/durga-puja-2027", label: l("🥁 দুর্গাপুজো ২০২৭", "🥁 Durga Puja 2027"), primary: true }, CAL, { href: "/purnima-2027", label: l("🌕 পূর্ণিমা ২০২৭", "🌕 Purnima 2027") }],
  lastChecked: "2026-10-31",
};

// Karwa Chauth, Hartalika Teej, Vat Savitri, Govardhan Puja, Ganga Dussehra and Dev Deepawali 2027. Dates and
// times copied from Drik Panchang's festival pages for Kolkata (IST) and Dhaka (BST), fetched 2 Nov 2026; Dev
// Deepawali's Drik page is fixed to Varanasi. Background from Wikipedia. Type imports only.

import type { L } from "@/lib/i18n";
import type { FestivalPage } from "./types";

const l = (bn: string, en: string): L => ({ bn, en });
const drik = (path: string, geo: string) => `https://www.drikpanchang.com/${path}?geoname-id=${geo}&year=2027`;
const KOL = "1275004";
const DHAKA = "1185241";
const CAL = { href: "/calendar-2027", label: l("📅 পুজোর ক্যালেন্ডার ২০২৭", "📅 Festival calendar 2027") };
const IN = "IN" as const;
const KOLKATA_PLACE = { name: "Kolkata", locality: "Kolkata", region: "West Bengal", country: IN };

const KARWA = (g: string, city: string) => ({ title: `Drik Panchang, Karwa Chauth 2027 (${city})`, url: drik("festivals/karwa-chauth/karwa-chauth-date-time.html", g) });
const HARTA = (g: string, city: string) => ({ title: `Drik Panchang, Hartalika Teej 2027 (${city})`, url: drik("festivals/teej/hartalika-teej-date-time.html", g) });
const VATS = (g: string, city: string) => ({ title: `Drik Panchang, Vat Savitri Vrat 2027 (${city})`, url: drik("festivals/savitri/vat-savitri-date-time.html", g) });
const VATP = (g: string, city: string) => ({ title: `Drik Panchang, Vat Purnima Vrat 2027 (${city})`, url: drik("festivals/savitri/vat-purnima-date-time.html", g) });
const GOVAR = (g: string, city: string) => ({ title: `Drik Panchang, Govardhan Puja 2027 (${city})`, url: drik("festivals/govardhan-puja/govardhan-puja-date-time.html", g) });
const GANGA = (g: string, city: string) => ({ title: `Drik Panchang, Ganga Dussehra 2027 (${city})`, url: drik("festivals/ganga-dussehra/ganga-dussehra-date-time.html", g) });
const DEV = { title: "Drik Panchang, Dev Deepavali 2027 (Varanasi)", url: "https://www.drikpanchang.com/diwali/dev-diwali/dev-deepawali-date-time.html?year=2027" };

const WIKI_KARVA = { title: "Wikipedia, Karva Chauth", url: "https://en.wikipedia.org/wiki/Karva_Chauth" };
const WIKI_TEEJ = { title: "Wikipedia, Teej", url: "https://en.wikipedia.org/wiki/Teej" };
const WIKI_VAT = { title: "Wikipedia, Vata Purnima", url: "https://en.wikipedia.org/wiki/Vata_Purnima" };
const WIKI_GOVAR = { title: "Wikipedia, Govardhan Puja", url: "https://en.wikipedia.org/wiki/Govardhan_Puja" };
const WIKI_GANGA = { title: "Wikipedia, Ganga Dussehra", url: "https://en.wikipedia.org/wiki/Ganga_Dussehra" };
const WIKI_KARTIKA = { title: "Wikipedia, Kartika Purnima", url: "https://en.wikipedia.org/wiki/Kartika_Purnima" };

export const KARWA_CHAUTH_2027: FestivalPage = {
  path: "/karwa-chauth-2027",
  title: l("করওয়া চৌথ ২০২৭: তারিখ, পুজোর সময় আর চাঁদ ওঠা", "Karwa Chauth 2027: Date, Puja Muhurat & Moonrise Time"),
  description: l(
    "করওয়া চৌথ ২০২৭ সোমবার ১৮ অক্টোবর। কলকাতায় পুজোর মুহূর্ত বিকেল ৫:০৯ থেকে সন্ধে ৬:২৪, চাঁদ ওঠে সন্ধে ৭:০৩; চতুর্থী তিথি, ঢাকার সময়ও, সূত্রসহ।",
    "Karwa Chauth 2027 is Monday 18 October. Kolkata puja muhurat 5:09 to 6:24 pm, moonrise 7:03 pm, Chaturthi tithi, plus Dhaka times, sourced.",
  ),
  h1: l("করওয়া চৌথ ২০২৭: কবে, কখন", "Karwa Chauth 2027: when and what time"),
  lead: l(
    "করওয়া চৌথ ২০২৭-এ সোমবার ১৮ অক্টোবর, কলকাতা আর ঢাকা দু’জায়গাতেই। কলকাতায় চাঁদ ওঠে সন্ধে ৭:০৩-এ, ঢাকায় ৭:২২-এ।",
    "Karwa Chauth falls on Monday 18 October 2027, in Kolkata and Dhaka alike. Moonrise is at 7:03 pm in Kolkata and 7:22 pm in Dhaka.",
  ),
  timings: {
    h2: l("পুজোর মুহূর্ত, চাঁদ ওঠা আর চতুর্থী তিথি", "Puja muhurat, moonrise and Chaturthi tithi"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [
        { day: l("সোম ১৮ অক্টোবর", "Mon 18 Oct"), what: l("করওয়া চৌথের পুজোর মুহূর্ত", "Karwa Chauth puja muhurat"), when: l("বিকেল ৫:০৯ থেকে সন্ধে ৬:২৪", "5:09 pm to 6:24 pm"), source: KARWA(KOL, "Kolkata") },
        { day: l("সোম ১৮ অক্টোবর", "Mon 18 Oct"), what: l("উপবাসের সময়", "Upavasa time"), when: l("ভোর ৫:৩৪ থেকে সন্ধে ৭:০৩", "5:34 am to 7:03 pm"), source: KARWA(KOL, "Kolkata") },
        { day: l("সোম ১৮ অক্টোবর", "Mon 18 Oct"), what: l("চাঁদ ওঠা", "Moonrise"), when: l("সন্ধে ৭:০৩", "7:03 pm"), source: KARWA(KOL, "Kolkata") },
        { day: l("১৮–১৯ অক্টোবর", "18–19 Oct"), what: l("চতুর্থী তিথি", "Chaturthi tithi"), when: l("১৮ অক্টোবর সন্ধে ৫:৫১ থেকে ১৯ অক্টোবর বিকেল ৪:৪২", "18 Oct 5:51 pm to 19 Oct 4:42 pm"), source: KARWA(KOL, "Kolkata") },
      ],
      bd: [
        { day: l("সোম ১৮ অক্টোবর", "Mon 18 Oct"), what: l("করওয়া চৌথের পুজোর মুহূর্ত", "Karwa Chauth puja muhurat"), when: l("বিকেল ৫:৩০ থেকে সন্ধে ৬:৪৫", "5:30 pm to 6:45 pm"), source: KARWA(DHAKA, "Dhaka") },
        { day: l("সোম ১৮ অক্টোবর", "Mon 18 Oct"), what: l("উপবাসের সময়", "Upavasa time"), when: l("ভোর ৫:৫৭ থেকে সন্ধে ৭:২২", "5:57 am to 7:22 pm"), source: KARWA(DHAKA, "Dhaka") },
        { day: l("সোম ১৮ অক্টোবর", "Mon 18 Oct"), what: l("চাঁদ ওঠা", "Moonrise"), when: l("সন্ধে ৭:২২", "7:22 pm"), source: KARWA(DHAKA, "Dhaka") },
        { day: l("১৮–১৯ অক্টোবর", "18–19 Oct"), what: l("চতুর্থী তিথি", "Chaturthi tithi"), when: l("১৮ অক্টোবর সন্ধে ৬:২১ থেকে ১৯ অক্টোবর সন্ধে ৫:১২", "18 Oct 6:21 pm to 19 Oct 5:12 pm"), source: KARWA(DHAKA, "Dhaka") },
      ],
    },
    note: l("বাংলার পঞ্জিকায় তিথির সময় একটু আলাদা হতে পারে; নিজের পঞ্জিকা মিলিয়ে নিও।", "Bengali panjikas can differ slightly on tithi times; check your own panjika."),
  },
  sections: [
    {
      id: "about",
      h2: l("করওয়া চৌথ কী", "What is Karwa Chauth"),
      paras: [
        {
          text: l(
            "করওয়া চৌথ উত্তর ভারত, পশ্চিম ভারত আর নেপালের হিন্দু মহিলাদের উৎসব; কার্তিক মাসে কৃষ্ণপক্ষের চতুর্থী তিথিতে পালিত হয়।",
            "Karva Chauth is a festival of Hindu women in northern and western India and Nepal, observed in Kartika on the fourth day of the waning moon.",
          ),
          source: WIKI_KARVA,
        },
      ],
      tips: [l("চাঁদ দেখার আগে মুহূর্ত আর চাঁদ ওঠার সময় একবার মিলিয়ে নিও; আবহাওয়ায় চাঁদ দেরিতে দেখা যেতে পারে।", "Check the muhurat and moonrise once more on the day; clouds can delay the moon sighting.")],
    },
  ],
  faq: [
    { q: l("২০২৭-এ করওয়া চৌথ কবে?", "When is Karwa Chauth in 2027?"), a: l("সোমবার ১৮ অক্টোবর ২০২৭, কলকাতা আর ঢাকায় (দ্রিক পঞ্চাঙ্গ)।", "Monday 18 October 2027, in Kolkata and Dhaka (Drik Panchang).") },
    { q: l("করওয়া চৌথে চাঁদ ওঠে কখন?", "What time is moonrise on Karwa Chauth 2027 in Kolkata?"), a: l("কলকাতায় সন্ধে ৭:০৩; ঢাকায় সন্ধে ৭:২২।", "Kolkata 7:03 pm; Dhaka 7:22 pm.") },
    { q: l("করওয়া চৌথের পুজোর সময় কখন?", "What is the Karwa Chauth 2027 puja muhurat?"), a: l("কলকাতায় বিকেল ৫:০৯ থেকে সন্ধে ৬:২৪; ঢাকায় বিকেল ৫:৩০ থেকে সন্ধে ৬:৪৫।", "Kolkata 5:09 pm to 6:24 pm; Dhaka 5:30 pm to 6:45 pm.") },
    { q: l("চতুর্থী তিথি কখন শুরু আর শেষ?", "When does the Chaturthi tithi begin and end?"), a: l("কলকাতায় ১৮ অক্টোবর সন্ধে ৫:৫১ থেকে ১৯ অক্টোবর বিকেল ৪:৪২।", "In Kolkata from 5:51 pm on 18 October to 4:42 pm on 19 October.") },
  ],
  events: [{ name: l("করওয়া চৌথ ২০২৭", "Karwa Chauth 2027"), start: "2027-10-18", place: KOLKATA_PLACE }],
  links: [CAL, { href: "/diwali-2027", label: l("🪔 দীপাবলি ২০২৭", "🪔 Diwali 2027") }, { href: "/govardhan-puja-2027", label: l("গোবর্ধন পুজো ২০২৭", "Govardhan Puja 2027") }, { href: "/kali-puja-2027", label: l("কালীপুজো ২০২৭", "Kali Puja 2027") }],
  lastChecked: "2026-11-02",
};

export const HARTALIKA_TEEJ_2027: FestivalPage = {
  path: "/hartalika-teej-2027",
  title: l("হরতালিকা তিজ ২০২৭: তারিখ, প্রাতঃকাল পুজোর সময়", "Hartalika Teej 2027: Date, Puja Muhurat & Tritiya Tithi"),
  description: l(
    "হরতালিকা তিজ ২০২৭ শুক্রবার ৩ সেপ্টেম্বর। কলকাতায় প্রাতঃকাল পুজোর মুহূর্ত ভোর ৫:২০ থেকে সকাল ৭:৫০, তৃতীয়া তিথি, ঢাকার সময়ও, সূত্রসহ।",
    "Hartalika Teej 2027 is Friday 3 September. Kolkata Pratahkala puja muhurat 5:20 to 7:50 am, Tritiya tithi, plus Dhaka times, sourced.",
  ),
  h1: l("হরতালিকা তিজ ২০২৭: কবে, কখন", "Hartalika Teej 2027: when and what time"),
  lead: l(
    "হরতালিকা তিজ ২০২৭-এ শুক্রবার ৩ সেপ্টেম্বর, কলকাতা আর ঢাকায়। প্রাতঃকালের পুজোর মুহূর্ত কলকাতায় ভোর ৫:২০ থেকে সকাল ৭:৫০।",
    "Hartalika Teej falls on Friday 3 September 2027 in Kolkata and Dhaka. The Pratahkala puja muhurat in Kolkata is 5:20 am to 7:50 am.",
  ),
  timings: {
    h2: l("প্রাতঃকাল পুজোর মুহূর্ত আর তৃতীয়া তিথি", "Pratahkala puja muhurat and Tritiya tithi"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [
        { day: l("শুক্র ৩ সেপ্টেম্বর", "Fri 3 Sep"), what: l("প্রাতঃকাল হরতালিকা পুজোর মুহূর্ত", "Pratahkala Hartalika puja muhurat"), when: l("ভোর ৫:২০ থেকে সকাল ৭:৫০", "5:20 am to 7:50 am"), source: HARTA(KOL, "Kolkata") },
        { day: l("২–৩ সেপ্টেম্বর", "2–3 Sep"), what: l("তৃতীয়া তিথি", "Tritiya tithi"), when: l("২ সেপ্টেম্বর বিকেল ৪:৪৯ থেকে ৩ সেপ্টেম্বর দুপুর ২:১৮", "2 Sep 4:49 pm to 3 Sep 2:18 pm"), source: HARTA(KOL, "Kolkata") },
      ],
      bd: [
        { day: l("শুক্র ৩ সেপ্টেম্বর", "Fri 3 Sep"), what: l("প্রাতঃকাল হরতালিকা পুজোর মুহূর্ত", "Pratahkala Hartalika puja muhurat"), when: l("ভোর ৫:৪১ থেকে সকাল ৮:১১", "5:41 am to 8:11 am"), source: HARTA(DHAKA, "Dhaka") },
        { day: l("২–৩ সেপ্টেম্বর", "2–3 Sep"), what: l("তৃতীয়া তিথি", "Tritiya tithi"), when: l("২ সেপ্টেম্বর বিকেল ৫:১৯ থেকে ৩ সেপ্টেম্বর দুপুর ২:৪৮", "2 Sep 5:19 pm to 3 Sep 2:48 pm"), source: HARTA(DHAKA, "Dhaka") },
      ],
    },
    note: l("বাংলার পঞ্জিকায় তিথির সময় একটু আলাদা হতে পারে; নিজের পঞ্জিকা মিলিয়ে নিও।", "Bengali panjikas can differ slightly on tithi times; check your own panjika."),
  },
  sections: [
    {
      id: "about",
      h2: l("তিজ উৎসব", "The Teej festivals"),
      paras: [
        {
          text: l(
            "তিজ তিনটি উৎসবের সমষ্টি, দেবী পার্বতী আর শিবের উদ্দেশে; মূলত বিবাহিত মহিলারা আর অবিবাহিত মেয়েরা পালন করেন, উপবাস আর পুজো সহ। হরতালিকা তিজ পড়ে ভাদ্রপদ মাসে।",
            "Teej is a collective term for three festivals dedicated to Parvati and Shiva, mainly celebrated by married women and unmarried girls with fasting and puja. Hartalika Teej falls in Bhadrapada.",
          ),
          source: WIKI_TEEJ,
        },
      ],
    },
  ],
  faq: [
    { q: l("২০২৭-এ হরতালিকা তিজ কবে?", "When is Hartalika Teej in 2027?"), a: l("শুক্রবার ৩ সেপ্টেম্বর ২০২৭, কলকাতা আর ঢাকায় (দ্রিক পঞ্চাঙ্গ)।", "Friday 3 September 2027, in Kolkata and Dhaka (Drik Panchang).") },
    { q: l("হরতালিকা তিজের পুজোর সময় কখন?", "What is the Hartalika Teej 2027 puja muhurat in Kolkata?"), a: l("প্রাতঃকালে ভোর ৫:২০ থেকে সকাল ৭:৫০; ঢাকায় ভোর ৫:৪১ থেকে সকাল ৮:১১।", "Pratahkala 5:20 am to 7:50 am; Dhaka 5:41 am to 8:11 am.") },
    { q: l("হরতালিকা তিজের তৃতীয়া তিথি কখন?", "When is the Tritiya tithi for Hartalika Teej 2027?"), a: l("কলকাতায় ২ সেপ্টেম্বর বিকেল ৪:৪৯ থেকে ৩ সেপ্টেম্বর দুপুর ২:১৮।", "Kolkata: 2 Sep 4:49 pm to 3 Sep 2:18 pm.") },
  ],
  events: [{ name: l("হরতালিকা তিজ ২০২৭", "Hartalika Teej 2027"), start: "2027-09-03", place: KOLKATA_PLACE }],
  links: [CAL, { href: "/ganesh-chaturthi-2027", label: l("গণেশ চতুর্থী ২০২৭", "Ganesh Chaturthi 2027") }, { href: "/karwa-chauth-2027", label: l("করওয়া চৌথ ২০২৭", "Karwa Chauth 2027") }, { href: "/amavasya-2027", label: l("অমাবস্যা ২০২৭", "Amavasya 2027") }],
  lastChecked: "2026-11-02",
};

export const VAT_SAVITRI_2027: FestivalPage = {
  path: "/vat-savitri-2027",
  title: l("বট সাবিত্রী ব্রত ২০২৭: তারিখ আর অমাবস্যা তিথি", "Vat Savitri Vrat 2027: Date & Amavasya Tithi Time"),
  description: l(
    "বট সাবিত্রী ব্রত (অমাবস্যা) ২০২৭ শুক্রবার ৪ জুন; অমাবস্যা তিথি ভোর ৪:০৫ থেকে। বট পূর্ণিমা ১৮ জুন। কলকাতা আর ঢাকার সময়, সূত্রসহ।",
    "Vat Savitri Vrat (Amavasya) 2027 is Friday 4 June; Amavasya tithi from 4:05 am. Vat Purnima is 18 June. Kolkata and Dhaka times, sourced.",
  ),
  h1: l("বট সাবিত্রী ব্রত ২০২৭: কবে, কখন", "Vat Savitri Vrat 2027: when and what time"),
  lead: l(
    "বট সাবিত্রী ব্রত (অমাবস্যা মতে) ২০২৭-এ শুক্রবার ৪ জুন; বট পূর্ণিমা মতে শুক্রবার ১৮ জুন। দু’দিনই কলকাতা আর ঢাকায় একই।",
    "Vat Savitri Vrat by the Amavasya reckoning is Friday 4 June 2027; by the Purnima reckoning (Vat Purnima) it is Friday 18 June. Both dates are the same in Kolkata and Dhaka.",
  ),
  timings: {
    h2: l("অমাবস্যা আর পূর্ণিমা তিথি", "Amavasya and Purnima tithi"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [
        { day: l("৪–৫ জুন", "4–5 Jun"), what: l("অমাবস্যা তিথি (বট সাবিত্রী ব্রত)", "Amavasya tithi (Vat Savitri Vrat)"), when: l("৪ জুন ভোর ৪:০৫ থেকে ৫ জুন রাত ১:০৯", "4 Jun 4:05 am to 5 Jun 1:09 am"), source: VATS(KOL, "Kolkata") },
        { day: l("১৮–১৯ জুন", "18–19 Jun"), what: l("পূর্ণিমা তিথি (বট পূর্ণিমা)", "Purnima tithi (Vat Purnima)"), when: l("১৮ জুন ভোর ৪:৩৪ থেকে ১৯ জুন সকাল ৬:১৩", "18 Jun 4:34 am to 19 Jun 6:13 am"), source: VATP(KOL, "Kolkata") },
      ],
      bd: [
        { day: l("৪–৫ জুন", "4–5 Jun"), what: l("অমাবস্যা তিথি (বট সাবিত্রী ব্রত)", "Amavasya tithi (Vat Savitri Vrat)"), when: l("৪ জুন ভোর ৪:৩৫ থেকে ৫ জুন রাত ১:৩৯", "4 Jun 4:35 am to 5 Jun 1:39 am"), source: VATS(DHAKA, "Dhaka") },
        { day: l("১৮–১৯ জুন", "18–19 Jun"), what: l("পূর্ণিমা তিথি (বট পূর্ণিমা)", "Purnima tithi (Vat Purnima)"), when: l("১৮ জুন ভোর ৫:০৪ থেকে ১৯ জুন সকাল ৬:৪৩", "18 Jun 5:04 am to 19 Jun 6:43 am"), source: VATP(DHAKA, "Dhaka") },
      ],
    },
    note: l("বাংলার পঞ্জিকায় তিথির সময় একটু আলাদা হতে পারে; নিজের পঞ্জিকা মিলিয়ে নিও।", "Bengali panjikas can differ slightly on tithi times; check your own panjika."),
  },
  sections: [
    {
      id: "about",
      h2: l("বট সাবিত্রী ব্রত", "About Vat Savitri"),
      paras: [
        {
          text: l(
            "বিবাহিত মহিলারা জ্যৈষ্ঠ মাসে স্বামীর প্রতি ভালোবাসার প্রতীক হিসেবে বটগাছে পবিত্র সুতো জড়ান। উৎসবের ভিত্তি মহাভারতের সাবিত্রী আর সত্যবানের কাহিনি।",
            "In the month of Jyeshtha, married women tie a ceremonial thread around a banyan tree as a mark of love for their husbands. The festival is based on the legend of Savitri and Satyavan in the Mahabharata.",
          ),
          source: WIKI_VAT,
        },
      ],
    },
  ],
  faq: [
    { q: l("২০২৭-এ বট সাবিত্রী ব্রত কবে?", "When is Vat Savitri Vrat in 2027?"), a: l("অমাবস্যা মতে শুক্রবার ৪ জুন ২০২৭; বট পূর্ণিমা মতে শুক্রবার ১৮ জুন (দ্রিক পঞ্চাঙ্গ)।", "Friday 4 June 2027 by the Amavasya reckoning; Friday 18 June for Vat Purnima (Drik Panchang).") },
    { q: l("বট সাবিত্রীর অমাবস্যা তিথি কখন?", "When is the Amavasya tithi for Vat Savitri 2027?"), a: l("কলকাতায় ৪ জুন ভোর ৪:০৫ থেকে ৫ জুন রাত ১:০৯; ঢাকায় ভোর ৪:৩৫ থেকে রাত ১:৩৯।", "Kolkata: 4 Jun 4:05 am to 5 Jun 1:09 am. Dhaka: 4:35 am to 1:39 am.") },
    { q: l("বট পূর্ণিমা ২০২৭ কবে?", "When is Vat Purnima in 2027?"), a: l("শুক্রবার ১৮ জুন ২০২৭; কলকাতায় পূর্ণিমা তিথি ভোর ৪:৩৪ থেকে পরদিন সকাল ৬:১৩।", "Friday 18 June 2027; in Kolkata the Purnima tithi runs 4:34 am to 6:13 am the next day.") },
  ],
  events: [
    { name: l("বট সাবিত্রী ব্রত (অমাবস্যা) ২০২৭", "Vat Savitri Vrat (Amavasya) 2027"), start: "2027-06-04", place: KOLKATA_PLACE },
    { name: l("বট পূর্ণিমা ২০২৭", "Vat Purnima 2027"), start: "2027-06-18", place: KOLKATA_PLACE },
  ],
  links: [CAL, { href: "/amavasya-2027", label: l("অমাবস্যা ২০২৭", "Amavasya 2027") }, { href: "/purnima-2027", label: l("🌕 পূর্ণিমা ২০২৭", "🌕 Purnima 2027") }, { href: "/ganga-dussehra-2027", label: l("গঙ্গা দশেরা ২০২৭", "Ganga Dussehra 2027") }],
  lastChecked: "2026-11-02",
};

export const GOVARDHAN_2027: FestivalPage = {
  path: "/govardhan-puja-2027",
  title: l("গোবর্ধন পুজো ২০২৭: তারিখ, অন্নকূট, প্রতিপদ তিথি", "Govardhan Puja 2027: Date, Annakut Muhurat & Tithi"),
  description: l(
    "গোবর্ধন পুজো ২০২৭ শনিবার ৩০ অক্টোবর। কলকাতায় প্রাতঃকাল মুহূর্ত ভোর ৫:৪০ থেকে সকাল ৭:৫৬, প্রতিপদ তিথি, অন্নকূট, ঢাকার সময়ও, সূত্রসহ।",
    "Govardhan Puja (Annakut) 2027 is Sat 30 October. Kolkata Pratahkala muhurat 5:40 to 7:56 am, Pratipada tithi, plus Dhaka times, sourced.",
  ),
  h1: l("গোবর্ধন পুজো ২০২৭: কবে, কখন", "Govardhan Puja 2027: when and what time"),
  lead: l(
    "গোবর্ধন পুজো বা অন্নকূট ২০২৭-এ শনিবার ৩০ অক্টোবর, কলকাতা আর ঢাকায়; দীপাবলির চতুর্থ দিন, লক্ষ্মীপুজোর পরদিন।",
    "Govardhan Puja, or Annakut, falls on Saturday 30 October 2027 in Kolkata and Dhaka, the fourth day of Diwali.",
  ),
  timings: {
    h2: l("প্রাতঃকাল, সায়ংকাল মুহূর্ত আর প্রতিপদ তিথি", "Pratahkala, Sayankala muhurat and Pratipada tithi"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [
        { day: l("শনি ৩০ অক্টোবর", "Sat 30 Oct"), what: l("গোবর্ধন পুজো, প্রাতঃকাল মুহূর্ত", "Govardhan Puja, Pratahkala muhurat"), when: l("ভোর ৫:৪০ থেকে সকাল ৭:৫৬", "5:40 am to 7:56 am"), source: GOVAR(KOL, "Kolkata") },
        { day: l("শনি ৩০ অক্টোবর", "Sat 30 Oct"), what: l("গোবর্ধন পুজো, সায়ংকাল মুহূর্ত", "Govardhan Puja, Sayankala muhurat"), when: l("বিকেল ২:৪৪ থেকে ৫:০০", "2:44 pm to 5:00 pm"), source: GOVAR(KOL, "Kolkata") },
        { day: l("২৯–৩০ অক্টোবর", "29–30 Oct"), what: l("প্রতিপদ তিথি", "Pratipada tithi"), when: l("২৯ অক্টোবর সন্ধে ৭:০৫ থেকে ৩০ অক্টোবর সন্ধে ৫:৫১", "29 Oct 7:05 pm to 30 Oct 5:51 pm"), source: GOVAR(KOL, "Kolkata") },
      ],
      bd: [
        { day: l("শনি ৩০ অক্টোবর", "Sat 30 Oct"), what: l("গোবর্ধন পুজো, প্রাতঃকাল মুহূর্ত", "Govardhan Puja, Pratahkala muhurat"), when: l("সকাল ৬:০৩ থেকে ৮:১৮", "6:03 am to 8:18 am"), source: GOVAR(DHAKA, "Dhaka") },
        { day: l("শনি ৩০ অক্টোবর", "Sat 30 Oct"), what: l("গোবর্ধন পুজো, সায়ংকাল মুহূর্ত", "Govardhan Puja, Sayankala muhurat"), when: l("বিকেল ৩:০৫ থেকে ৫:২১", "3:05 pm to 5:21 pm"), source: GOVAR(DHAKA, "Dhaka") },
        { day: l("২৯–৩০ অক্টোবর", "29–30 Oct"), what: l("প্রতিপদ তিথি", "Pratipada tithi"), when: l("২৯ অক্টোবর সন্ধে ৭:৩৫ থেকে ৩০ অক্টোবর সন্ধে ৬:২১", "29 Oct 7:35 pm to 30 Oct 6:21 pm"), source: GOVAR(DHAKA, "Dhaka") },
      ],
    },
    note: l("বাংলার পঞ্জিকায় তিথির সময় একটু আলাদা হতে পারে; নিজের পঞ্জিকা মিলিয়ে নিও।", "Bengali panjikas can differ slightly on tithi times; check your own panjika."),
  },
  sections: [
    {
      id: "about",
      h2: l("গোবর্ধন পুজো আর অন্নকূট", "Govardhan Puja and Annakut"),
      paras: [
        {
          text: l(
            "কার্তিক মাসের শুক্লপক্ষের প্রতিপদে, দীপাবলির চতুর্থ দিনে গোবর্ধন পুজো বা অন্নকূট। ভক্তেরা গোবরে গোবর্ধন পাহাড় গড়ে পুজো করেন আর কৃষ্ণকে নানা নিরামিষ খাবার নিবেদন করেন। ভাগবত পুরাণ অনুসারে কৃষ্ণ বৃন্দাবনের গ্রামবাসীদের বৃষ্টি থেকে বাঁচাতে গোবর্ধন পাহাড় তুলেছিলেন।",
            "Govardhan Puja, or Annakut, falls on the first lunar day of the bright fortnight of Kartika, the fourth day of Diwali. Devotees worship an image of Govardhan Hill made of cow dung and offer a variety of vegetarian food to Krishna. In the Bhagavata Purana, Krishna lifts Govardhan Hill to shelter the villagers of Vrindavan from torrential rain.",
          ),
          source: WIKI_GOVAR,
        },
      ],
    },
  ],
  faq: [
    { q: l("২০২৭-এ গোবর্ধন পুজো কবে?", "When is Govardhan Puja in 2027?"), a: l("শনিবার ৩০ অক্টোবর ২০২৭, কলকাতা আর ঢাকায় (দ্রিক পঞ্চাঙ্গ)।", "Saturday 30 October 2027, in Kolkata and Dhaka (Drik Panchang).") },
    { q: l("গোবর্ধন পুজোর সময় কখন?", "What is the Govardhan Puja 2027 muhurat in Kolkata?"), a: l("প্রাতঃকাল ভোর ৫:৪০ থেকে সকাল ৭:৫৬; সায়ংকাল বিকেল ২:৪৪ থেকে ৫:০০।", "Pratahkala 5:40 am to 7:56 am; Sayankala 2:44 pm to 5:00 pm.") },
    { q: l("প্রতিপদ তিথি কখন শুরু আর শেষ?", "When does the Pratipada tithi begin and end?"), a: l("কলকাতায় ২৯ অক্টোবর সন্ধে ৭:০৫ থেকে ৩০ অক্টোবর সন্ধে ৫:৫১।", "In Kolkata from 7:05 pm on 29 October to 5:51 pm on 30 October.") },
    { q: l("অন্নকূট কী?", "What is Annakut?"), a: l("গোবর্ধন পুজোরই আরেক নাম; দেবতাকে নানা রকম খাবার নিবেদন।", "Another name for Govardhan Puja: an offering of a wide variety of food to the deity.") },
  ],
  events: [{ name: l("গোবর্ধন পুজো ২০২৭", "Govardhan Puja 2027"), start: "2027-10-30", place: KOLKATA_PLACE }],
  links: [{ href: "/diwali-2027", label: l("🪔 দীপাবলি ২০২৭", "🪔 Diwali 2027"), primary: true }, CAL, { href: "/kali-puja-2027", label: l("কালীপুজো ২০২৭", "Kali Puja 2027") }, { href: "/karwa-chauth-2027", label: l("করওয়া চৌথ ২০২৭", "Karwa Chauth 2027") }, { href: "/dev-deepawali-2027", label: l("দেব দীপাবলি ২০২৭", "Dev Deepawali 2027") }],
  lastChecked: "2026-11-02",
};

export const GANGA_DUSSEHRA_2027: FestivalPage = {
  path: "/ganga-dussehra-2027",
  title: l("গঙ্গা দশেরা ২০২৭: তারিখ, দশমী তিথি আর হস্তা নক্ষত্র", "Ganga Dussehra 2027: Date, Dashami Tithi & Hasta Time"),
  description: l(
    "গঙ্গা দশেরা ২০২৭ রবিবার ১৩ জুন। কলকাতায় দশমী তিথি ভোর ২:৪৩ থেকে, হস্তা নক্ষত্র ১২ জুন বিকেল ৪:৫৯ থেকে ১৩ জুন বিকেল ৪:৫৯; ঢাকার সময়ও, সূত্রসহ।",
    "Ganga Dussehra 2027 is Sunday 13 June. Kolkata Dashami tithi from 2:43 am, Hasta nakshatra 12 Jun 4:59 pm to 13 Jun 4:59 pm; Dhaka times too, sourced.",
  ),
  h1: l("গঙ্গা দশেরা ২০২৭: কবে, কখন", "Ganga Dussehra 2027: when and what time"),
  lead: l(
    "গঙ্গা দশেরা ২০২৭-এ রবিবার ১৩ জুন, কলকাতা আর ঢাকায়। জ্যৈষ্ঠের শুক্লা দশমীতে গঙ্গার অবতরণ স্মরণ করা হয়।",
    "Ganga Dussehra falls on Sunday 13 June 2027, in Kolkata and Dhaka. It marks the descent of the Ganges on the bright Dashami of Jyeshtha.",
  ),
  timings: {
    h2: l("দশমী তিথি আর হস্তা নক্ষত্র", "Dashami tithi and Hasta nakshatra"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [
        { day: l("১৩–১৪ জুন", "13–14 Jun"), what: l("দশমী তিথি", "Dashami tithi"), when: l("১৩ জুন ভোর ২:৪৩ থেকে ১৪ জুন ভোর ২:১১", "13 Jun 2:43 am to 14 Jun 2:11 am"), source: GANGA(KOL, "Kolkata") },
        { day: l("১২–১৩ জুন", "12–13 Jun"), what: l("হস্তা নক্ষত্র", "Hasta nakshatra"), when: l("১২ জুন বিকেল ৪:৫৯ থেকে ১৩ জুন বিকেল ৪:৫৯", "12 Jun 4:59 pm to 13 Jun 4:59 pm"), source: GANGA(KOL, "Kolkata") },
      ],
      bd: [
        { day: l("১৩–১৪ জুন", "13–14 Jun"), what: l("দশমী তিথি", "Dashami tithi"), when: l("১৩ জুন ভোর ৩:১৩ থেকে ১৪ জুন ভোর ২:৪১", "13 Jun 3:13 am to 14 Jun 2:41 am"), source: GANGA(DHAKA, "Dhaka") },
        { day: l("১২–১৩ জুন", "12–13 Jun"), what: l("হস্তা নক্ষত্র", "Hasta nakshatra"), when: l("১২ জুন বিকেল ৫:২৯ থেকে ১৩ জুন বিকেল ৫:২৯", "12 Jun 5:29 pm to 13 Jun 5:29 pm"), source: GANGA(DHAKA, "Dhaka") },
      ],
    },
    note: l("বাংলার পঞ্জিকায় তিথির সময় একটু আলাদা হতে পারে; নিজের পঞ্জিকা মিলিয়ে নিও।", "Bengali panjikas can differ slightly on tithi times; check your own panjika."),
  },
  sections: [
    {
      id: "about",
      h2: l("গঙ্গা দশেরা কী", "What is Ganga Dussehra"),
      paras: [
        {
          text: l(
            "গঙ্গা দশেরা, গঙ্গাবতরণ নামেও পরিচিত, গঙ্গা নদীর স্বর্গ থেকে পৃথিবীতে নেমে আসার উৎসব। জ্যৈষ্ঠ মাসের শুক্লপক্ষের দশমীতে পালিত হয়; উৎসব চলে দশ দিন, আগের নয় দিন সহ।",
            "Ganga Dussehra, also known as Gangavataran, celebrates the descent of the Ganges from heaven to earth. It falls on Dashami of the waxing moon of Jyeshtha, and the celebration lasts ten days, including the nine days before.",
          ),
          source: WIKI_GANGA,
        },
      ],
    },
  ],
  faq: [
    { q: l("২০২৭-এ গঙ্গা দশেরা কবে?", "When is Ganga Dussehra in 2027?"), a: l("রবিবার ১৩ জুন ২০২৭, কলকাতা আর ঢাকায় (দ্রিক পঞ্চাঙ্গ)।", "Sunday 13 June 2027, in Kolkata and Dhaka (Drik Panchang).") },
    { q: l("গঙ্গা দশেরার দশমী তিথি কখন?", "When is the Dashami tithi for Ganga Dussehra 2027?"), a: l("কলকাতায় ১৩ জুন ভোর ২:৪৩ থেকে ১৪ জুন ভোর ২:১১; ঢাকায় ভোর ৩:১৩ থেকে ভোর ২:৪১।", "Kolkata: 13 Jun 2:43 am to 14 Jun 2:11 am. Dhaka: 3:13 am to 2:41 am.") },
    { q: l("হস্তা নক্ষত্র কখন?", "When is the Hasta nakshatra on Ganga Dussehra 2027?"), a: l("কলকাতায় ১২ জুন বিকেল ৪:৫৯ থেকে ১৩ জুন বিকেল ৪:৫৯।", "In Kolkata from 4:59 pm on 12 June to 4:59 pm on 13 June.") },
  ],
  events: [{ name: l("গঙ্গা দশেরা ২০২৭", "Ganga Dussehra 2027"), start: "2027-06-13", place: KOLKATA_PLACE }],
  links: [CAL, { href: "/vat-savitri-2027", label: l("বট সাবিত্রী ২০২৭", "Vat Savitri 2027") }, { href: "/purnima-2027", label: l("🌕 পূর্ণিমা ২০২৭", "🌕 Purnima 2027") }, { href: "/ekadashi-2027", label: l("🪔 একাদশী ২০২৭", "🪔 Ekadashi 2027") }],
  lastChecked: "2026-11-02",
};

export const DEV_DEEPAWALI_2027: FestivalPage = {
  path: "/dev-deepawali-2027",
  title: l("দেব দীপাবলি ২০২৭: তারিখ, প্রদোষকাল মুহূর্ত, পূর্ণিমা", "Dev Deepawali 2027: Date, Pradosh Muhurat & Purnima"),
  description: l(
    "দেব দীপাবলি ২০২৭ শনিবার ১৩ নভেম্বর। বারাণসীতে প্রদোষকাল মুহূর্ত বিকেল ৫:১১ থেকে সন্ধে ৭:৪৮, পূর্ণিমা তিথি আর বারাণসীর গঙ্গাস্নানের পটভূমি, সূত্রসহ।",
    "Dev Deepawali 2027 is Saturday 13 November. Varanasi Pradosh muhurat 5:11 to 7:48 pm, Purnima tithi, and the Ganga bath at Varanasi, sourced.",
  ),
  h1: l("দেব দীপাবলি ২০২৭: কবে, কখন", "Dev Deepawali 2027: when and what time"),
  lead: l(
    "দেব দীপাবলি ২০২৭-এ শনিবার ১৩ নভেম্বর। দ্রিকের এই পাতা বারাণসীর জন্য; প্রদোষকাল মুহূর্ত বিকেল ৫:১১ থেকে সন্ধে ৭:৪৮।",
    "Dev Deepawali falls on Saturday 13 November 2027. Drik's page is for Varanasi; the Pradosh muhurat runs 5:11 pm to 7:48 pm.",
  ),
  timings: {
    h2: l("প্রদোষকাল মুহূর্ত আর পূর্ণিমা তিথি (বারাণসী)", "Pradosh muhurat and Purnima tithi (Varanasi)"),
    lead: l("সময় বারাণসীর, IST।", "Times are for Varanasi, IST."),
    rows: {
      wb: [
        { day: l("শনি ১৩ নভেম্বর", "Sat 13 Nov"), what: l("প্রদোষকাল দেব দীপাবলি মুহূর্ত (বারাণসী)", "Pradoshakal Dev Deepavali muhurat (Varanasi)"), when: l("বিকেল ৫:১১ থেকে সন্ধে ৭:৪৮", "5:11 pm to 7:48 pm"), source: DEV },
        { day: l("১৩–১৪ নভেম্বর", "13–14 Nov"), what: l("পূর্ণিমা তিথি (বারাণসী)", "Purnima tithi (Varanasi)"), when: l("১৩ নভেম্বর সকাল ৯:৫৫ থেকে ১৪ নভেম্বর সকাল ৮:৫৫", "13 Nov 9:55 am to 14 Nov 8:55 am"), source: DEV },
      ],
    },
    note: l("দ্রিকের দেব দীপাবলির পাতা শুধু বারাণসীর সময় দেখায়; কলকাতা বা ঢাকার জন্য আলাদা সময় এখানে দেওয়া হয়নি।", "Drik's Dev Deepavali page gives Varanasi times only; separate Kolkata and Dhaka times are not given here."),
  },
  sections: [
    {
      id: "varanasi",
      h2: l("বারাণসীর দেব দীপাবলি", "Dev Deepawali and Varanasi"),
      paras: [
        {
          text: l(
            "কার্তিক পূর্ণিমা দেব-দীপাবলি বা দেবতাদের আলোর উৎসব নামেও পরিচিত; দীপাবলির প্রায় পনেরো দিন পরে আসে। গঙ্গায় পবিত্র স্নান, বিশেষ করে বারাণসীতে, সবচেয়ে শুভ মনে করা হয়, আর বারাণসীতেই এদিন গঙ্গাস্নানের ভিড় সবচেয়ে বেশি।",
            "Kartika Purnima is also known as Deva-Deepavali, the gods' festival of lights, and follows Diwali by about 15 days. A holy bath in the Ganges, especially at Varanasi, is deemed most auspicious, and it is the most popular day for bathing in the Ganges there.",
          ),
          source: WIKI_KARTIKA,
        },
      ],
    },
  ],
  faq: [
    { q: l("২০২৭-এ দেব দীপাবলি কবে?", "When is Dev Deepawali in 2027?"), a: l("শনিবার ১৩ নভেম্বর ২০২৭ (দ্রিক পঞ্চাঙ্গ, বারাণসী)।", "Saturday 13 November 2027 (Drik Panchang, Varanasi).") },
    { q: l("দেব দীপাবলির প্রদোষকাল মুহূর্ত কখন?", "What is the Dev Deepawali 2027 Pradosh muhurat?"), a: l("বারাণসীতে বিকেল ৫:১১ থেকে সন্ধে ৭:৪৮।", "In Varanasi, 5:11 pm to 7:48 pm.") },
    { q: l("পূর্ণিমা তিথি কখন শুরু আর শেষ?", "When does the Purnima tithi begin and end?"), a: l("বারাণসীতে ১৩ নভেম্বর সকাল ৯:৫৫ থেকে ১৪ নভেম্বর সকাল ৮:৫৫।", "In Varanasi from 9:55 am on 13 November to 8:55 am on 14 November.") },
    { q: l("রাস পূর্ণিমা কবে?", "When is Rash Purnima in 2027?"), a: l("কার্তিক পূর্ণিমার একই তিথিতে; বিস্তারিত রাস পূর্ণিমার পাতায়।", "On the same Kartika Purnima tithi; see the Rash Purnima page for details.") },
  ],
  events: [{ name: l("দেব দীপাবলি ২০২৭", "Dev Deepawali 2027"), start: "2027-11-13", place: { name: "Varanasi", locality: "Varanasi", region: "Uttar Pradesh", country: IN } }],
  links: [CAL, { href: "/rash-purnima-2027", label: l("রাস পূর্ণিমা ২০২৭", "Rash Purnima 2027"), primary: true }, { href: "/purnima-2027", label: l("🌕 পূর্ণিমা ২০২৭", "🌕 Purnima 2027") }, { href: "/diwali-2027", label: l("🪔 দীপাবলি ২০২৭", "🪔 Diwali 2027") }, { href: "/govardhan-puja-2027", label: l("গোবর্ধন পুজো ২০২৭", "Govardhan Puja 2027") }],
  lastChecked: "2026-11-02",
};

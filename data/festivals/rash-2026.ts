// Rash Purnima 2026 (/rash-purnima-2026): Nabadwip, Shantipur, Cooch Behar. The Purnima date and tithi
// times come from Drik Panchang's 2026 Purnima lists for Kolkata and Dhaka (Kartika Purnima); the
// Nabadwip–Shantipur window from Incredible India; background from Wikipedia. Fetched 31 Oct 2026.

import type { L } from "@/lib/i18n";
import type { FestivalPage } from "./types";

const l = (bn: string, en: string): L => ({ bn, en });

const PURNIMA_KOL = { title: "Drik Panchang, 2026 Purnima dates for Kolkata", url: "https://www.drikpanchang.com/vrats/purnimasidates.html?year=2026&geoname-id=1275004" };
const PURNIMA_DHAKA = { title: "Drik Panchang, 2026 Purnima dates for Dhaka", url: "https://www.drikpanchang.com/vrats/purnimasidates.html?year=2026&geoname-id=1185241" };
const INCREDIBLE = { title: "Incredible India, Santipur and Nabadwip Raas Utsav", url: "https://www.incredibleindia.gov.in/en/festivals-and-events/west-bengal/santipur-and-nabadwip-raas-utsav" };
const WIKI_SHAKTA = { title: "Wikipedia, Shakta Rash", url: "https://en.wikipedia.org/wiki/Shakta_Rash" };
const WIKI_COOCH = { title: "Wikipedia, Cooch Behar Rash Mela", url: "https://en.wikipedia.org/wiki/Cooch_Behar_Rash_Mela" };
const WIKI_NABADWIP_STN = { title: "Wikipedia, Nabadwip Dham railway station", url: "https://en.wikipedia.org/wiki/Nabadwip_Dham_railway_station" };
const WIKI_SHANTIPUR_STN = { title: "Wikipedia, Shantipur Junction railway station", url: "https://en.wikipedia.org/wiki/Shantipur_Junction_railway_station" };

export const RASH_2026: FestivalPage = {
  path: "/rash-purnima-2026",
  title: l("রাস পূর্ণিমা ২০২৬: নবদ্বীপ, শান্তিপুর, কোচবিহার রাস", "Rash Purnima 2026: Nabadwip, Shantipur, Cooch Behar"),
  description: l(
    "রাস পূর্ণিমা ২০২৬ মঙ্গলবার ২৪ নভেম্বর। নবদ্বীপের শাক্ত রাস, শান্তিপুরের রাস, কোচবিহারের রাসমেলা, পূর্ণিমা তিথির সময় আর কীভাবে যাবে, সূত্রসহ।",
    "Rash Purnima 2026 is Tue 24 Nov. Nabadwip's Shakta Rash, Shantipur's Rash, the Cooch Behar Rash Mela, Purnima tithi times and how to get there.",
  ),
  h1: l("রাস পূর্ণিমা ২০২৬: কবে, কোথায়", "Rash Purnima 2026: when and where"),
  lead: l(
    "কার্তিক পূর্ণিমায় রাস; ২০২৬-এ মঙ্গলবার ২৪ নভেম্বর। নবদ্বীপ আর শান্তিপুরের রাস উৎসব চলবে ২৪ থেকে ২৭ নভেম্বর।",
    "Rash falls on Kartik Purnima; in 2026 that is Tuesday 24 November. The Nabadwip and Shantipur Raas Utsav runs from 24 to 27 November.",
  ),
  timings: {
    h2: l("তারিখ আর পূর্ণিমা তিথি", "Date and Purnima tithi"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [
        { day: l("মঙ্গল ২৪ নভেম্বর", "Tue 24 Nov"), what: l("কার্তিক (রাস) পূর্ণিমা", "Kartika (Rash) Purnima"), when: l("২৩ নভেম্বর রাত ১১:৪২ থেকে ২৪ নভেম্বর রাত ৮:২৩", "23 Nov 11:42 pm to 24 Nov 8:23 pm"), source: PURNIMA_KOL },
        { day: l("২৪–২৭ নভেম্বর", "24–27 Nov"), what: l("নবদ্বীপ-শান্তিপুর রাস উৎসব", "Nabadwip–Santipur Raas Utsav"), when: l("চার দিন", "Four days"), source: INCREDIBLE },
      ],
      bd: [
        { day: l("মঙ্গল ২৪ নভেম্বর", "Tue 24 Nov"), what: l("কার্তিক (রাস) পূর্ণিমা", "Kartika (Rash) Purnima"), when: l("২৪ নভেম্বর রাত ১২:১২ থেকে রাত ৮:৫৩", "24 Nov 12:12 am to 8:53 pm"), source: PURNIMA_DHAKA },
      ],
    },
    note: l(
      "কোচবিহারের রাসমেলার ২০২৬-এর দিন ৩১ অক্টোবর পর্যন্ত জেলা প্রশাসনের সাইটে বেরোয়নি।",
      "The 2026 dates of the Cooch Behar Rash Mela had not been posted on the district website as of 31 October.",
    ),
  },
  sections: [
    {
      id: "nabadwip",
      h2: l("নবদ্বীপের শাক্ত রাস", "Nabadwip's Shakta Rash"),
      paras: [
        {
          text: l(
            "নবদ্বীপে রাস মানে শাক্ত রাস: দুর্গা, কালী, লক্ষ্মীর মতো শক্তির বিশাল মাটির প্রতিমা। প্রতিমা বিরাট হলেও হালকা; উনিশ শতকের এক লেখক লিখেছিলেন, পাঁচ-ছ’জন মিলে কাঁধে তুলে নিতে পারে। উৎসব শেষ হয় ‘আড়ং’ নামের বিসর্জন শোভাযাত্রায়।",
            "In Nabadwip, Rash means Shakta Rash: enormous clay idols of Shakti, such as Durga, Kali and Lakshmi. Huge as they are, they are light; a 19th-century writer noted that five or six people can carry one on their shoulders. The festival ends with the immersion procession called Arong.",
          ),
          source: WIKI_SHAKTA,
        },
        {
          text: l(
            "শুরুটা চৈতন্যের সময়ের বৈষ্ণব রাসযাত্রা থেকে। শাক্তরা প্রথমে আঁকা পটে পুজো করতেন, তাই রাস পূর্ণিমাকে বলা হত ‘পট পূর্ণিমা’; পরে মহারাজা কৃষ্ণচন্দ্রের পৃষ্ঠপোষকতায় কুমোররা নবদ্বীপে বসতি গড়লে মাটির প্রতিমা আসে।",
            "It grew out of the Vaishnava Rash Yatra of Chaitanya's time. Shaktas first worshipped painted scrolls, so Raas Purnima was known as 'Pot Purnima'; clay idols came later, when potters settled in Nabadwip under Maharaja Krishnachandra's patronage.",
          ),
          source: WIKI_SHAKTA,
        },
      ],
    },
    {
      id: "shantipur",
      h2: l("শান্তিপুরের রাস", "Shantipur's Rash"),
      paras: [
        {
          text: l(
            "শান্তিপুরের রাস মূলত বৈষ্ণব: ভক্তিগীতি, বাজনা আর কৃষ্ণলীলার দৃশ্য নিয়ে শোভাযাত্রা। ‘রাই রাজা’ শোভাযাত্রায় একটি ছোট মেয়েকে রাধা সাজিয়ে রাজবেশে নিয়ে যাওয়া হয়।",
            "Shantipur's Rash is mainly Vaishnava: devotional songs, music and processions showing scenes from Krishna's life. In the 'Rai Raja' procession a young girl, dressed in regal attire, represents Radha.",
          ),
          source: INCREDIBLE,
        },
      ],
    },
    {
      id: "cooch-behar",
      h2: l("কোচবিহারের রাসমেলা", "The Cooch Behar Rash Mela"),
      paras: [
        {
          text: l(
            "কোচবিহারে মূল পুজো মদনমোহন মন্দিরে, যেখানে রাসচক্র থাকে; রাতে কীর্তন আর যাত্রা। মেলা সাধারণত ১৫-২০ দিন চলে। ধরা হয় কোচবিহারের ১৭তম রাজার আমলে এর শুরু; ১৯১২ থেকে মেলা বসে রাসমেলার মাঠে।",
            "In Cooch Behar the main worship is at the Madan Mohan temple, home of the Rash Chakra, with kirtan and jatra at night. The fair usually lasts 15 to 20 days. It is widely held to have begun under the 17th king of Koch Bihar; since 1912 it has been held at the Rash Mela Ground.",
          ),
          source: WIKI_COOCH,
        },
      ],
    },
    {
      id: "travel",
      h2: l("কীভাবে যাবে", "Getting there"),
      paras: [
        { text: l("নবদ্বীপ ধাম স্টেশন ব্যান্ডেল–কাটোয়া লাইনে, হাওড়া থেকে প্রায় ১০৩ কিমি।", "Nabadwip Dham station is on the Bandel–Katwa line, about 103 km from Howrah."), source: WIKI_NABADWIP_STN },
        { text: l("শান্তিপুর জংশন রানাঘাট–শান্তিপুর লাইনে (শিয়ালদা ডিভিশন)।", "Shantipur Junction is on the Ranaghat–Shantipur line (Sealdah division)."), source: WIKI_SHANTIPUR_STN },
      ],
      tips: [
        l("আড়ং আর শোভাযাত্রার রাতে প্রচণ্ড ভিড় হয়; বাচ্চা আর বয়স্কদের নিয়ে গেলে আগের দিন ঘুরে নাও।", "Arong and the procession nights are very crowded; with children or elders, visit a day earlier."),
        l("ফেরার শেষ ট্রেনের সময় আগে দেখে রাখো।", "Check the time of the last train back before you set out."),
      ],
    },
  ],
  faq: [
    {
      q: l("২০২৬-এ রাস পূর্ণিমা কবে?", "When is Rash Purnima in 2026?"),
      a: l("মঙ্গলবার ২৪ নভেম্বর ২০২৬ (কার্তিক পূর্ণিমা, দ্রিক পঞ্চাঙ্গ)।", "Tuesday 24 November 2026 (Kartika Purnima, Drik Panchang)."),
    },
    {
      q: l("নবদ্বীপের রাস উৎসব ২০২৬ কবে থেকে কবে?", "What are the dates of the Nabadwip Rash Utsav 2026?"),
      a: l("২৪ থেকে ২৭ নভেম্বর ২০২৬, ইনক্রেডিবল ইন্ডিয়ার তালিকা অনুযায়ী।", "24 to 27 November 2026, as listed by Incredible India."),
    },
    {
      q: l("রাস পূর্ণিমার তিথি কখন?", "When is the Purnima tithi for Rash 2026?"),
      a: l("কলকাতায় ২৩ নভেম্বর রাত ১১:৪২ থেকে ২৪ নভেম্বর রাত ৮:২৩; ঢাকায় ২৪ নভেম্বর রাত ১২:১২ থেকে রাত ৮:৫৩।", "Kolkata: 23 Nov 11:42 pm to 24 Nov 8:23 pm. Dhaka: 24 Nov 12:12 am to 8:53 pm."),
    },
    {
      q: l("শাক্ত রাস কী?", "What is Shakta Rash?"),
      a: l("নবদ্বীপের রাস, যেখানে কৃষ্ণের বদলে শক্তির (দুর্গা, কালী, লক্ষ্মী) বিশাল মাটির প্রতিমার পুজো হয়।", "Nabadwip's form of Rash, where giant clay idols of Shakti (Durga, Kali, Lakshmi) are worshipped."),
    },
    {
      q: l("কলকাতা থেকে নবদ্বীপ কীভাবে যাব?", "How do I get to Nabadwip from Kolkata?"),
      a: l("হাওড়া থেকে কাটোয়াগামী লোকাল ট্রেনে নবদ্বীপ ধাম, প্রায় ১০৩ কিমি।", "Take a Katwa-bound local from Howrah to Nabadwip Dham, about 103 km."),
    },
  ],
  events: [
    { name: l("নবদ্বীপ-শান্তিপুর রাস উৎসব ২০২৬", "Nabadwip–Santipur Raas Utsav 2026"), start: "2026-11-24", end: "2026-11-27", place: { name: "Nabadwip", locality: "Nabadwip", region: "West Bengal", country: "IN" } },
  ],
  links: [
    { href: "/greetings/rash", label: l("🪷 রাস পূর্ণিমার শুভেচ্ছা", "🪷 Rash Purnima wishes"), primary: true },
    { href: "/purnima-2027", label: l("🌕 পূর্ণিমা ২০২৭", "🌕 Purnima 2027") },
    { href: "/jagaddhatri-puja-2026", label: l("জগদ্ধাত্রী পুজো ২০২৬", "Jagaddhatri Puja 2026") },
    { href: "/calendar-2027", label: l("📅 পুজোর ক্যালেন্ডার ২০২৭", "📅 Festival calendar 2027") },
  ],
  lastChecked: "2026-10-31",
};

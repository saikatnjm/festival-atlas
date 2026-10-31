// Poush Sankranti 2027 (/poush-sankranti-2027): Bengal's Makar Sankranti, pithe-puli, Shakrain, Gangasagar.
// Date and times from Drik Panchang's Makar Sankranti 2027 pages for Kolkata and Dhaka; background from
// Wikipedia. Fetched 31 Oct 2026. Gangasagar Mela 2027 dates were not announced.

import type { L } from "@/lib/i18n";
import type { FestivalPage } from "./types";

const l = (bn: string, en: string): L => ({ bn, en });

const DRIK = (geo: string) => `https://www.drikpanchang.com/sankranti/makar-sankranti-date-time.html?geoname-id=${geo}&year=2027`;
const DRIK_KOL = { title: "Drik Panchang, Makar Sankranti 2027 (Kolkata)", url: DRIK("1275004") };
const DRIK_DHAKA = { title: "Drik Panchang, Makar Sankranti 2027 (Dhaka)", url: DRIK("1185241") };
const WIKI_PITHA = { title: "Wikipedia, Pitha", url: "https://en.wikipedia.org/wiki/Pitha" };
const WIKI_SHAKRAIN = { title: "Wikipedia, Shakrain", url: "https://en.wikipedia.org/wiki/Shakrain" };
const WIKI_SAGAR = { title: "Wikipedia, Gangasagar Mela", url: "https://en.wikipedia.org/wiki/Gangasagar_Mela" };

export const POUSH_SANKRANTI_2027: FestivalPage = {
  path: "/poush-sankranti-2027",
  title: l("পৌষ সংক্রান্তি ২০২৭: মকর সংক্রান্তি কবে, পুণ্যকাল", "Poush Sankranti 2027: Makar Sankranti Date & Punya Kaal"),
  description: l(
    "পৌষ সংক্রান্তি (মকর সংক্রান্তি) ২০২৭ শুক্রবার ১৫ জানুয়ারি। সংক্রান্তির মুহূর্ত, পুণ্যকাল, পিঠে-পুলি, পুরান ঢাকার সাকরাইন আর গঙ্গাসাগর মেলা, সূত্রসহ।",
    "Poush Sankranti (Makar Sankranti) 2027 is Fri 15 Jan. Sankranti moment, punya kaal, pithe-puli, Old Dhaka's Shakrain and the Gangasagar Mela, sourced.",
  ),
  h1: l("পৌষ সংক্রান্তি ২০২৭: কবে, কখন", "Poush Sankranti 2027: when and what time"),
  lead: l(
    "দ্রিক পঞ্চাঙ্গে মকর সংক্রান্তি ২০২৭ শুক্রবার ১৫ জানুয়ারি, কলকাতা আর ঢাকা দু’জায়গাতেই; সূর্যের মকরে প্রবেশ তার আগের রাতে, ১৪ জানুয়ারি। পিঠে-পুলির দিন।",
    "Drik Panchang puts Makar Sankranti 2027 on Friday 15 January, in both Kolkata and Dhaka; the Sun enters Makara the night before, on 14 January. It's the day for pithe-puli.",
  ),
  timings: {
    h2: l("সংক্রান্তির মুহূর্ত আর পুণ্যকাল", "Sankranti moment and punya kaal"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [
        { day: l("বৃহস্পতি ১৪ জানুয়ারি", "Thu 14 Jan"), what: l("সংক্রান্তির মুহূর্ত", "Sankranti moment"), when: l("রাত ৯:১৪", "9:14 pm"), source: DRIK_KOL },
        { day: l("শুক্র ১৫ জানুয়ারি", "Fri 15 Jan"), what: l("পুণ্যকাল", "Punya kaal"), when: l("সকাল ৬:১৯ থেকে বিকেল ৫:১৩", "6:19 am to 5:13 pm"), source: DRIK_KOL },
        { day: l("শুক্র ১৫ জানুয়ারি", "Fri 15 Jan"), what: l("মহাপুণ্যকাল", "Maha punya kaal"), when: l("সকাল ৬:১৯ থেকে ৮:০৮", "6:19 am to 8:08 am"), source: DRIK_KOL },
      ],
      bd: [
        { day: l("বৃহস্পতি ১৪ জানুয়ারি", "Thu 14 Jan"), what: l("সংক্রান্তির মুহূর্ত", "Sankranti moment"), when: l("রাত ৯:৪৪", "9:44 pm"), source: DRIK_DHAKA },
        { day: l("শুক্র ১৫ জানুয়ারি", "Fri 15 Jan"), what: l("পুণ্যকাল", "Punya kaal"), when: l("সকাল ৬:৪৩ থেকে বিকেল ৫:৩৩", "6:43 am to 5:33 pm"), source: DRIK_DHAKA },
        { day: l("শুক্র ১৫ জানুয়ারি", "Fri 15 Jan"), what: l("মহাপুণ্যকাল", "Maha punya kaal"), when: l("সকাল ৬:৪৩ থেকে ৮:৩১", "6:43 am to 8:31 am"), source: DRIK_DHAKA },
      ],
    },
    note: l(
      "অনেক তালিকায় মকর সংক্রান্তি ১৪ জানুয়ারি লেখা থাকে; ২০২৭-এ সংক্রান্তির মুহূর্ত ১৪ জানুয়ারি রাতে বলে দ্রিক দিনটা ১৫ জানুয়ারি দেখায়। বাড়ির পঞ্জিকা মিলিয়ে নিও।",
      "Many lists give 14 January for Makar Sankranti; in 2027 the Sankranti moment is on the night of 14 January, and Drik shows the day as 15 January. Check the panjika at home.",
    ),
  },
  sections: [
    {
      id: "pithe",
      h2: l("পিঠে-পুলি", "Pithe-puli"),
      paras: [
        {
          text: l(
            "পিঠে চালের গুঁড়ো, দুধ, নারকেল আর গুড়ে তৈরি; নবান্নের মতো ফসলের উৎসবের সঙ্গে এর যোগ। পাটিসাপটা হল গুড়-নারকেল বা ক্ষীরের পুর দেওয়া পাতলা রোল, পুলি নারকেলের পুর ভরা পুঁটলির মতো, আর ভাপা পিঠে ভাপে সেদ্ধ। সঙ্গে প্রায়ই খেজুর গুড়ের রস।",
            "Pitha is made with rice flour, milk, coconut and jaggery, and is tied to harvest festivals like Nabanna. Patishapta is a thin crepe filled with jaggery and coconut or kheer, puli a dumpling with a coconut filling, and bhapa pitha is steamed. Date-palm molasses is the usual accompaniment.",
          ),
          source: WIKI_PITHA,
        },
      ],
    },
    {
      id: "shakrain",
      h2: l("পুরান ঢাকার সাকরাইন", "Old Dhaka's Shakrain"),
      paras: [
        {
          text: l(
            "পৌষের শেষ দিনে পুরান ঢাকায় সাকরাইন: দুপুর থেকে ছাদে ছাদে রঙিন ঘুড়ি আর ঘুড়ির কাটাকাটি, রাতে আতশবাজি। এটা পৌষ সংক্রান্তির সঙ্গেই পালিত হয়।",
            "On the last day of Poush, Old Dhaka celebrates Shakrain: colourful kites from every rooftop in the afternoon, kite fights, and fireworks at night. It coincides with Poush Sankranti.",
          ),
          source: WIKI_SHAKRAIN,
        },
      ],
    },
    {
      id: "gangasagar",
      h2: l("গঙ্গাসাগর মেলা", "Gangasagar Mela"),
      paras: [
        {
          text: l(
            "মকর সংক্রান্তিতে সাগরদ্বীপে, যেখানে গঙ্গা বঙ্গোপসাগরে মেশে, পুণ্যস্নান; মেলা হয় কপিল মুনির আশ্রম ঘিরে। মেলার সময় কাকদ্বীপ থেকে কচুবেড়িয়া ফেরি চলে; মুড়িগঙ্গা পারাপার জোয়ার-ভাটার ওপর নির্ভর করে।",
            "On Makar Sankranti pilgrims bathe at Sagar Island, where the Ganga meets the Bay of Bengal; the fair is held around Kapil Muni's ashram. During the fair, ferries run from Kakdwip to Kachuberia, and crossing the Muri Ganga depends on the tide.",
          ),
          source: WIKI_SAGAR,
        },
        {
          text: l(
            "২০২৭-এর মেলার সরকারি তারিখ আর ব্যবস্থা ৩১ অক্টোবর ২০২৬ পর্যন্ত ঘোষণা হয়নি; বেরোলে এখানে যোগ হবে।",
            "Official 2027 fair dates and arrangements had not been announced as of 31 October 2026; they will be added here when they are.",
          ),
        },
      ],
    },
  ],
  faq: [
    {
      q: l("২০২৭-এ পৌষ সংক্রান্তি কবে?", "When is Poush Sankranti in 2027?"),
      a: l("দ্রিক পঞ্চাঙ্গে শুক্রবার ১৫ জানুয়ারি ২০২৭, কলকাতা আর ঢাকায়; সংক্রান্তির মুহূর্ত ১৪ জানুয়ারি রাতে।", "Friday 15 January 2027 on Drik Panchang, for Kolkata and Dhaka; the Sankranti moment is on the night of 14 January."),
    },
    {
      q: l("মকর সংক্রান্তি ২০২৭ কি ১৪ না ১৫ জানুয়ারি?", "Is Makar Sankranti 2027 on 14 or 15 January?"),
      a: l(
        "সংক্রান্তির মুহূর্ত বৃহস্পতিবার ১৪ জানুয়ারি রাত ৯:১৪ (কলকাতা); দ্রিক পঞ্চাঙ্গ পুণ্যকাল আর দিনটা শুক্রবার ১৫ জানুয়ারি দেখায়।",
        "The Sankranti moment is Thursday 14 January at 9:14 pm (Kolkata); Drik Panchang puts the punya kaal and the day itself on Friday 15 January.",
      ),
    },
    {
      q: l("মকর সংক্রান্তির পুণ্যকাল কখন?", "What is the Makar Sankranti punya kaal in 2027?"),
      a: l("কলকাতায় সকাল ৬:১৯ থেকে বিকেল ৫:১৩, মহাপুণ্যকাল সকাল ৬:১৯ থেকে ৮:০৮; ঢাকায় সকাল ৬:৪৩ থেকে বিকেল ৫:৩৩।", "Kolkata 6:19 am to 5:13 pm, maha punya kaal 6:19 to 8:08 am; Dhaka 6:43 am to 5:33 pm."),
    },
    {
      q: l("২০২৭-এ গঙ্গাসাগর মেলা কবে?", "When is Gangasagar Mela 2027?"),
      a: l("সরকারি তারিখ এখনও ঘোষণা হয়নি; মূল স্নান মকর সংক্রান্তিতে।", "The official dates haven't been announced yet; the main bath is on Makar Sankranti."),
    },
  ],
  events: [],
  links: [
    { href: "/greetings/poush", label: l("🍘 পৌষ সংক্রান্তির শুভেচ্ছা", "🍘 Poush Sankranti wishes"), primary: true },
    { href: "/saraswati-puja-2027", label: l("সরস্বতী পুজো ২০২৭", "Saraswati Puja 2027") },
    { href: "/calendar-2027", label: l("📅 পুজোর ক্যালেন্ডার ২০২৭", "📅 Festival calendar 2027") },
  ],
  lastChecked: "2026-10-31",
};

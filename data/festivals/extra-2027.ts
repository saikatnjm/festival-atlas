// Gita Jayanti and Vivah Panchami 2026, eclipses (grahan) 2027, Manasa Puja / Nag Panchami 2027.
// Dates and times copied from Drik Panchang pages for Kolkata and Dhaka (fetched 1 Nov 2026); eclipse local
// times for 2 Aug 2027 from Orbital Radar and Bangla Date Today (timeanddate.com returned HTTP 403, Drik's
// eclipse pages for the August and July 2027 eclipses could not be read); background from Wikipedia and NASA.
// Type imports only.

import type { L } from "@/lib/i18n";
import type { FestivalPage } from "./types";

const l = (bn: string, en: string): L => ({ bn, en });
const KOL = "1275004";
const DHAKA = "1185241";
const city = (g: string) => (g === KOL ? "Kolkata" : "Dhaka");
const CAL = { href: "/calendar-2027", label: l("📅 পুজোর ক্যালেন্ডার ২০২৭", "📅 Festival calendar 2027") };
const PURNIMA = { href: "/purnima-2027", label: l("🌕 পূর্ণিমা ২০২৭", "🌕 Purnima 2027") };
const AMAVASYA = { href: "/amavasya-2027", label: l("🌑 অমাবস্যা ২০২৭", "🌑 Amavasya 2027") };

const GITA = (g: string) => ({ title: `Drik Panchang, Gita Jayanti 2026 (${city(g)})`, url: `https://www.drikpanchang.com/festivals/gita-jayanti/gita-jayanti-date-time.html?geoname-id=${g}&year=2026` });
const MOKSHADA_LIST = (g: string) => ({ title: `Drik Panchang, 2026 Ekadashi dates for ${city(g)}`, url: `https://www.drikpanchang.com/vrats/ekadashidates.html?geoname-id=${g}&year=2026` });
const VIVAH = (g: string) => ({ title: `Drik Panchang, Vivah Panchami 2026 (${city(g)})`, url: `https://www.drikpanchang.com/festivals/vivah-panchami/vivah-panchami-date-time.html?geoname-id=${g}&year=2026` });
const NAG = (g: string) => ({ title: `Drik Panchang, Nag Panchami 2027 (${city(g)})`, url: `https://www.drikpanchang.com/festivals/nag-panchami/nag-panchami-date-time.html?geoname-id=${g}&year=2027` });
const SIMHA = (g: string) => ({ title: `Drik Panchang, Simha Sankranti 2027 (${city(g)})`, url: `https://www.drikpanchang.com/sankranti/simha-sankranti-date-time.html?geoname-id=${g}&year=2027` });
const SOLAR_DRIK = (g: string) => ({ title: `Drik Panchang, solar eclipse of 6 Feb 2027 (${city(g)})`, url: `https://www.drikpanchang.com/eclipse/solar-eclipse-date-time-duration.html?geoname-id=${g}&date=06/02/2027` });
const LUNAR_DRIK = (g: string) => ({ title: `Drik Panchang, lunar eclipse of 21 Feb 2027 (${city(g)})`, url: `https://www.drikpanchang.com/eclipse/lunar-eclipse-date-time-duration.html?geoname-id=${g}&date=20/02/2027` });
const DRIK_ECLIPSES = { title: "Drik Panchang, eclipses in 2027", url: "https://www.drikpanchang.com/eclipse/eclipse-date-time.html?year=2027" };
const ORBITAL_KOL = { title: "Orbital Radar, 2 Aug 2027 eclipse from Kolkata", url: "https://orbitalradar.com/eclipse/2027-august-2/kolkata" };
const ORBITAL_DHAKA = { title: "Orbital Radar, 2 Aug 2027 eclipse from Dhaka", url: "https://orbitalradar.com/eclipse/2027-august-2/dhaka" };
const BDT = { title: "Bangla Date Today, Solar and Lunar Eclipses 2027 (Dhaka)", url: "https://www.bangladatetoday.com/eclipses/2027" };
const NASA_LUNAR = { title: "NASA Eclipse Web Site, lunar eclipses", url: "https://eclipse.gsfc.nasa.gov/lunar.html" };
const NASA_SAFETY = { title: "NASA, Eclipse safety", url: "https://science.nasa.gov/eclipses/safety/" };
const WIKI_AUG = { title: "Wikipedia, Solar eclipse of August 2, 2027", url: "https://en.wikipedia.org/wiki/Solar_eclipse_of_August_2,_2027" };
const WIKI_SOLAR21 = { title: "Wikipedia, List of solar eclipses in the 21st century", url: "https://en.wikipedia.org/wiki/List_of_solar_eclipses_in_the_21st_century" };
const WIKI_GITA = { title: "Wikipedia, Gita Jayanti", url: "https://en.wikipedia.org/wiki/Gita_Jayanti" };
const WIKI_MANASA = { title: "Wikipedia, Manasa", url: "https://en.wikipedia.org/wiki/Manasa" };

export const GITA_JAYANTI_2026: FestivalPage = {
  path: "/gita-jayanti-2026",
  title: l("গীতা জয়ন্তী ২০২৬: তারিখ আর একাদশী তিথির সময়", "Gita Jayanti 2026: Date and Ekadashi Tithi Time"),
  description: l(
    "গীতা জয়ন্তী ২০২৬ রবিবার ২০ ডিসেম্বর, মোক্ষদা একাদশীর দিনেই। কলকাতা আর ঢাকার একাদশী তিথির সময়, গীতা জয়ন্তীর পরিচয়, সূত্রসহ।",
    "Gita Jayanti 2026 is Sunday 20 December, the day of Mokshada Ekadashi. Ekadashi tithi times for Kolkata and Dhaka, and what the day marks, sourced.",
  ),
  h1: l("গীতা জয়ন্তী ২০২৬: কবে, কখন", "Gita Jayanti 2026: when and what time"),
  lead: l(
    "মার্গশীর্ষের শুক্লা একাদশীতে গীতা জয়ন্তী; ২০২৬-এ রবিবার ২০ ডিসেম্বর, কলকাতা আর ঢাকা দু’জায়গাতেই। সেদিনই মোক্ষদা একাদশী।",
    "Gita Jayanti falls on the bright Ekadashi of Margashirsha; in 2026 that is Sunday 20 December, in both Kolkata and Dhaka. It is also Mokshada Ekadashi.",
  ),
  timings: {
    h2: l("তারিখ আর একাদশী তিথি", "Date and Ekadashi tithi"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [{ day: l("১৯–২০ ডিসেম্বর", "19–20 Dec"), what: l("একাদশী তিথি", "Ekadashi tithi"), when: l("১৯ ডিসেম্বর রাত ১০:০৯ থেকে ২০ ডিসেম্বর রাত ৮:১৪", "19 Dec 10:09 pm to 20 Dec 8:14 pm"), source: GITA(KOL) }],
      bd: [{ day: l("১৯–২০ ডিসেম্বর", "19–20 Dec"), what: l("একাদশী তিথি", "Ekadashi tithi"), when: l("১৯ ডিসেম্বর রাত ১০:৩৯ থেকে ২০ ডিসেম্বর রাত ৮:৪৪", "19 Dec 10:39 pm to 20 Dec 8:44 pm"), source: GITA(DHAKA) }],
    },
    note: l(
      "দ্রিকের এই পাতায় পারণের সময় নেই, আর ইসকন (বৈষ্ণব) মতে মোক্ষদা একাদশী আলাদা দিনে পড়ে কি না তা আমরা মিলিয়ে দেখিনি; উপোস রাখলে পঞ্জিকা দেখে নিও।",
      "Drik's page prints no parana time, and we have not checked whether the ISKCON (Vaishnava) Mokshada Ekadashi falls on a different day. If you fast, check your panjika.",
    ),
  },
  sections: [
    {
      id: "about",
      h2: l("গীতা জয়ন্তী কী", "What Gita Jayanti is"),
      paras: [
        {
          text: l(
            "কুরুক্ষেত্রের যুদ্ধক্ষেত্রে অর্জুন আর শ্রীকৃষ্ণের কথোপকথন, অর্থাৎ ভগবদ্গীতার উৎস, যেদিনের বলে ধরা হয়, সেই দিনটিই গীতা জয়ন্তী। এটি মার্গশীর্ষ মাসের শুক্লা একাদশীতে পড়ে, যে একাদশীর আরেক নাম মোক্ষদা একাদশী। হরিয়ানার কুরুক্ষেত্রে এই উপলক্ষে বড় অনুষ্ঠান হয়।",
            "Gita Jayanti marks the day the dialogue between Arjuna and Krishna, the Bhagavad Gita, took place on the Kurukshetra battlefield. It falls on the Shukla Ekadashi of Margashirsha, which is also called Mokshada Ekadashi. Large celebrations are held at Kurukshetra in Haryana.",
          ),
          source: WIKI_GITA,
        },
        {
          text: l(
            "দ্রিক পঞ্চাঙ্গ ২০২৬-এর গীতা জয়ন্তীকে গীতার ৫১৬৩তম বার্ষিকী লিখেছে।",
            "Drik Panchang calls the 2026 observance the 5163rd anniversary of the Gita.",
          ),
          source: GITA(KOL),
        },
      ],
      tips: [l("গীতার একটা অধ্যায় পড়ে বা শুনে দিনটা শুরু করা যায়; যেমন বাড়িতে চলে।", "You can start the day by reading or listening to a chapter of the Gita, as your home prefers.")],
    },
  ],
  faq: [
    { q: l("২০২৬-এ গীতা জয়ন্তী কবে?", "When is Gita Jayanti in 2026?"), a: l("রবিবার ২০ ডিসেম্বর ২০২৬, কলকাতা আর ঢাকায় (দ্রিক পঞ্চাঙ্গ)।", "Sunday 20 December 2026, in Kolkata and Dhaka (Drik Panchang).") },
    { q: l("গীতা জয়ন্তীর একাদশী তিথি কখন?", "What time is the Ekadashi tithi on Gita Jayanti 2026?"), a: l("কলকাতায় ১৯ ডিসেম্বর রাত ১০:০৯ থেকে ২০ ডিসেম্বর রাত ৮:১৪; ঢাকায় রাত ১০:৩৯ থেকে পরদিন রাত ৮:৪৪।", "Kolkata: 19 Dec 10:09 pm to 20 Dec 8:14 pm. Dhaka: 10:39 pm to 8:44 pm the next day.") },
    { q: l("গীতা জয়ন্তী আর মোক্ষদা একাদশী কি একই দিন?", "Is Gita Jayanti the same day as Mokshada Ekadashi?"), a: l("হ্যাঁ, ২০২৬-এ দুটোই রবিবার ২০ ডিসেম্বর; গীতা জয়ন্তী মোক্ষদা একাদশীর দিনেই পালিত হয়।", "Yes. Gita Jayanti is observed on Mokshada Ekadashi, and in 2026 both fall on Sunday 20 December.") },
  ],
  events: [{ name: l("গীতা জয়ন্তী ২০২৬", "Gita Jayanti 2026"), start: "2026-12-20", place: { name: "Kolkata", locality: "Kolkata", region: "West Bengal", country: "IN" } }],
  links: [{ href: "/ekadashi-2027", label: l("🪔 একাদশী ২০২৭: পুরো তালিকা", "🪔 Ekadashi: the full list"), primary: true }, { href: "/vivah-panchami-2026", label: l("বিবাহ পঞ্চমী ২০২৬", "Vivah Panchami 2026") }, CAL],
  lastChecked: "2026-11-01",
};

export const VIVAH_PANCHAMI_2026: FestivalPage = {
  path: "/vivah-panchami-2026",
  title: l("বিবাহ পঞ্চমী ২০২৬: তারিখ আর পঞ্চমী তিথির সময়", "Vivah Panchami 2026: Date and Panchami Tithi Time"),
  description: l(
    "বিবাহ পঞ্চমী ২০২৬ সোমবার ১৪ ডিসেম্বর, রাম-সীতার বিয়ের তিথি। কলকাতা আর ঢাকার পঞ্চমী তিথির সময়, সূত্রসহ। বিয়ের শুভ দিনের জন্য আলাদা পাতা দেখো।",
    "Vivah Panchami 2026 is Monday 14 December, the Ram–Sita wedding tithi. Panchami tithi times for Kolkata and Dhaka, sourced, with a link to 2027 wedding dates.",
  ),
  h1: l("বিবাহ পঞ্চমী ২০২৬: কবে, কখন", "Vivah Panchami 2026: when and what time"),
  lead: l(
    "মার্গশীর্ষের শুক্লা পঞ্চমীতে রাম-সীতার বিবাহ বার্ষিকী; ২০২৬-এ সোমবার ১৪ ডিসেম্বর, কলকাতা আর ঢাকায়।",
    "Vivah Panchami, the wedding anniversary of Ram and Sita, falls on the bright Panchami of Margashirsha; in 2026 that is Monday 14 December, in Kolkata and Dhaka.",
  ),
  timings: {
    h2: l("তারিখ আর পঞ্চমী তিথি", "Date and Panchami tithi"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [{ day: l("১৩–১৪ ডিসেম্বর", "13–14 Dec"), what: l("পঞ্চমী তিথি", "Panchami tithi"), when: l("১৩ ডিসেম্বর বিকেল ৪:৪৭ থেকে ১৪ ডিসেম্বর সন্ধে ৭:১৫", "13 Dec 4:47 pm to 14 Dec 7:15 pm"), source: VIVAH(KOL) }],
      bd: [{ day: l("১৩–১৪ ডিসেম্বর", "13–14 Dec"), what: l("পঞ্চমী তিথি", "Panchami tithi"), when: l("১৩ ডিসেম্বর বিকেল ৫:১৭ থেকে ১৪ ডিসেম্বর সন্ধে ৭:৪৫", "13 Dec 5:17 pm to 14 Dec 7:45 pm"), source: VIVAH(DHAKA) }],
    },
    note: l("দ্রিকের এই পাতায় আলাদা পুজোর মুহূর্ত নেই; বাড়ির বা মন্দিরের পঞ্জিকা মিলিয়ে নিও।", "Drik's page lists no separate puja muhurat; check your family's or temple's panjika."),
  },
  sections: [
    {
      id: "about",
      h2: l("বিবাহ পঞ্চমী", "About Vivah Panchami"),
      paras: [
        {
          text: l(
            "দ্রিক পঞ্চাঙ্গের পাতায় ২০২৬-এর বিবাহ পঞ্চমী সোমবার ১৪ ডিসেম্বর, কলকাতা আর ঢাকা দু’জায়গাতেই। পঞ্চমী তিথি আগের দিন বিকেলে শুরু হয়ে ১৪ তারিখ সন্ধেয় শেষ হয়।",
            "Drik Panchang gives Vivah Panchami 2026 as Monday 14 December in both Kolkata and Dhaka. The Panchami tithi begins the previous afternoon and ends on the evening of the 14th.",
          ),
          source: VIVAH(KOL),
        },
        {
          text: l(
            "বিবাহ পঞ্চমী রাম আর সীতার বিয়ের দিন, অগ্রহায়ণ মাসের শুক্লা পঞ্চমীতে। নেপালের জনকপুরধামে দিনটা খুব গুরুত্বপূর্ণ, সেখানে প্রতীকী বিয়ের অনুষ্ঠান হয়; মিথিলা অঞ্চল আর অযোধ্যার রামমন্দিরগুলোতেও পালিত হয়।",
            "Vivah Panchami celebrates the wedding of Rama and Sita, on the bright Panchami of Agrahayan (Margashirsha). It matters most in Janakpurdham, Nepal, where a symbolic wedding is held; it is also kept in Rama temples across Mithila and in Ayodhya.",
          ),
          source: { title: "Wikipedia, Vivaha Panchami", url: "https://en.wikipedia.org/wiki/Vivaha_Panchami" },
        },
      ],
      tips: [l("এই দিনে বিয়ে নিয়ে পরিবারভেদে রীতি আলাদা; বড়দের কাছে জেনে নাও। বিয়ের দিনের তালিকা আমাদের আলাদা পাতায়।", "Customs about weddings on this day differ between families; ask the elders. Wedding dates are on our separate page.")],
    },
  ],
  faq: [
    { q: l("২০২৬-এ বিবাহ পঞ্চমী কবে?", "When is Vivah Panchami in 2026?"), a: l("সোমবার ১৪ ডিসেম্বর ২০২৬, কলকাতা আর ঢাকায় (দ্রিক পঞ্চাঙ্গ)।", "Monday 14 December 2026, in Kolkata and Dhaka (Drik Panchang).") },
    { q: l("বিবাহ পঞ্চমীর পঞ্চমী তিথি কখন?", "What time is the Panchami tithi on Vivah Panchami 2026?"), a: l("কলকাতায় ১৩ ডিসেম্বর বিকেল ৪:৪৭ থেকে ১৪ ডিসেম্বর সন্ধে ৭:১৫; ঢাকায় বিকেল ৫:১৭ থেকে সন্ধে ৭:৪৫।", "Kolkata: 13 Dec 4:47 pm to 14 Dec 7:15 pm. Dhaka: 5:17 pm to 7:45 pm.") },
    { q: l("বিবাহ পঞ্চমী কী?", "What is Vivah Panchami?"), a: l("রাম আর সীতার বিয়ের দিন, অগ্রহায়ণ শুক্লা পঞ্চমীতে; জনকপুরধাম আর অযোধ্যায় সবচেয়ে বড় করে পালিত হয় (উইকিপিডিয়া)।", "The wedding day of Rama and Sita, on Agrahayan Shukla Panchami; celebrated most in Janakpurdham and Ayodhya (Wikipedia).") },
  ],
  events: [{ name: l("বিবাহ পঞ্চমী ২০২৬", "Vivah Panchami 2026"), start: "2026-12-14", place: { name: "Kolkata", locality: "Kolkata", region: "West Bengal", country: "IN" } }],
  links: [{ href: "/vivah-dates-2027", label: l("💍 বিয়ের শুভ দিন ২০২৭", "💍 Wedding dates 2027"), primary: true }, { href: "/gita-jayanti-2026", label: l("গীতা জয়ন্তী ২০২৬", "Gita Jayanti 2026") }, CAL],
  lastChecked: "2026-11-01",
};

const row = (cells: [string, string, string, string, string, string, string, string], source: { title: string; url: string }) => ({
  cells: [l(cells[0], cells[1]), l(cells[2], cells[3]), l(cells[4], cells[5]), l(cells[6], cells[7])],
  source,
});

export const GRAHAN_2027: FestivalPage = {
  path: "/grahan-2027",
  title: l("সূর্যগ্রহণ ও চন্দ্রগ্রহণ ২০২৭: কলকাতা-ঢাকায় দেখা যাবে?", "Eclipses 2027: Surya & Chandra Grahan, Kolkata & Dhaka"),
  description: l(
    "২০২৭-এ পাঁচটা গ্রহণ। ২ আগস্টের পূর্ণ সূর্যগ্রহণ কলকাতা-ঢাকায় শুধু আংশিক (প্রায় ৬% আর ৩%), বিকেলে। কোনটা দেখা যাবে, কখন, সূত্রসহ।",
    "Five eclipses in 2027. The 2 Aug total solar eclipse is only partial from Kolkata and Dhaka (about 6% and 3%), in the afternoon. What is visible, when, sourced.",
  ),
  h1: l("সূর্যগ্রহণ ও চন্দ্রগ্রহণ ২০২৭: কবে, কখন", "Eclipses 2027: when and what time"),
  lead: l(
    "২০২৭-এ দুটো সূর্যগ্রহণ আর তিনটে চন্দ্রগ্রহণ। কলকাতা বা ঢাকা থেকে একমাত্র সূর্যগ্রহণ ২ আগস্ট সোমবার বিকেলে, আংশিক; সূর্যের খুব সামান্য অংশ ঢাকা পড়বে।",
    "There are two solar and three lunar eclipses in 2027. The only solar eclipse you can see from Kolkata or Dhaka is on Monday 2 August in the afternoon, and only partly: a small slice of the Sun is covered.",
  ),
  tables: [
    {
      id: "list-2027",
      h2: l("২০২৭-এর সব গ্রহণ", "Every eclipse of 2027"),
      lead: l("কলকাতার সময় IST, ঢাকার সময় BST। যেখানে কলকাতার সময় আমরা পাইনি, সেখানে তাই লেখা।", "Kolkata times are IST, Dhaka times BST. Where we could not get Kolkata times, the cell says so."),
      caption: l("২০২৭-এর সূর্য আর চন্দ্রগ্রহণ, কলকাতা আর ঢাকা থেকে", "Solar and lunar eclipses of 2027, as seen from Kolkata and Dhaka"),
      columns: [l("তারিখ ও ধরন", "Date and type"), l("গ্রহণ কেমন", "What happens"), l("কলকাতা", "Kolkata"), l("ঢাকা", "Dhaka")],
      rows: [
        row(["শনি ৬ ফেব্রুয়ারি: বলয়গ্রাস সূর্যগ্রহণ", "Sat 6 Feb: annular solar", "দক্ষিণ আমেরিকা আর আটলান্টিক থেকে (উইকিপিডিয়া)", "From South America and the Atlantic (Wikipedia)", "দেখা যাবে না", "Not visible", "দেখা যাবে না", "Not visible"], SOLAR_DRIK(KOL)),
        row(["রবি ২১ ফেব্রুয়ারি: উপচ্ছায়া চন্দ্রগ্রহণ", "Sun 21 Feb: penumbral lunar", "উপচ্ছায়া, মান ০.৯১ (দ্রিক)", "Penumbral, magnitude 0.91 (Drik)", "খালি চোখে দেখা যাবে না; ভোর ২:৪৩ থেকে ৬:৪২, মধ্যগ্রাস ৪:৪৩, চাঁদ ডোবে ৬:০২", "Not visible to the naked eye; 2:43 to 6:42 am, maximum 4:43, moonset 6:02", "খালি চোখে দেখা যাবে না; ভোর ৩:১৩ থেকে ৭:১২, মধ্যগ্রাস ৫:১৩, চাঁদ ডোবে ৬:২৫", "Not visible to the naked eye; 3:13 to 7:12 am, maximum 5:13, moonset 6:25"], LUNAR_DRIK(KOL)),
        row(["রবি ১৮ জুলাই: উপচ্ছায়া চন্দ্রগ্রহণ", "Sun 18 Jul: penumbral lunar", "উপচ্ছায়া; পূর্ব আফ্রিকা, এশিয়া, অস্ট্রেলিয়া আর প্রশান্ত মহাসাগর থেকে (নাসা)", "Penumbral; from eastern Africa, Asia, Australia and the Pacific (NASA)", "দ্রিকের কলকাতা পাতা পড়তে পারিনি, তাই সময় দিলাম না", "Drik's Kolkata page was not readable, so no time given", "রাত ৯:৫০ থেকে ১০:১৫, মধ্যগ্রাস ১০:০২; তালিকায় ‘দৃশ্যমান’", "9:50 to 10:15 pm, maximum 10:02; listed as 'visible'"], BDT),
        row(["সোম ২ আগস্ট: পূর্ণ সূর্যগ্রহণ", "Mon 2 Aug: total solar", "পূর্ণগ্রাস স্পেন থেকে সোমালিয়া (উইকিপিডিয়া)", "Totality from Spain to Somalia (Wikipedia)", "আংশিক, সূর্যের প্রায় ৬%; বিকেল ৪:১৪ থেকে ৫:১১, মধ্যগ্রাস ৪:৪৩", "Partial, about 6% of the Sun; 4:14 to 5:11 pm, maximum 4:43", "আংশিক, সূর্যের প্রায় ৩%; বিকেল ৪:৪৯ থেকে ৫:৩৫, মধ্যগ্রাস ৫:১২", "Partial, about 3% of the Sun; 4:49 to 5:35 pm, maximum 5:12"], ORBITAL_DHAKA),
        row(["মঙ্গল ১৭ আগস্ট: উপচ্ছায়া চন্দ্রগ্রহণ", "Tue 17 Aug: penumbral lunar", "উপচ্ছায়া; প্রশান্ত মহাসাগর আর আমেরিকা থেকে (নাসা)", "Penumbral; from the Pacific and the Americas (NASA)", "মিলিয়ে দেখিনি", "Not checked", "দেখা যাবে না", "Not visible"], BDT),
      ],
      note: l(
        "২ আগস্টের সারির ঢাকার তথ্য Orbital Radar আর Bangla Date Today-র, কলকাতার তথ্য Orbital Radar-এর কলকাতা পাতার (নিচে ‘২ আগস্ট’ অংশে)। টাইম অ্যান্ড ডেট ডট কম আমাদের এখান থেকে খোলেনি, তাই ওই সাইটের সংখ্যা এখানে নেই।",
        "In the 2 Aug row, Dhaka figures are from Orbital Radar and Bangla Date Today, and Kolkata's from Orbital Radar's Kolkata page (see the '2 August' section). timeanddate.com would not open for us, so none of its figures are here.",
      ),
    },
  ],
  sections: [
    {
      id: "aug-2",
      h2: l("২ আগস্ট ২০২৭: পূর্ণ সূর্যগ্রহণ, কলকাতা-ঢাকায় আংশিক", "2 August 2027: total eclipse, partial in Kolkata and Dhaka"),
      paras: [
        {
          text: l(
            "পূর্ণগ্রাসের পথ স্পেন, মরক্কো, আলজেরিয়া, তিউনিসিয়া, লিবিয়া, মিশর, সৌদি আরব, ইয়েমেন আর সোমালিয়ার ওপর দিয়ে গেছে; সর্বোচ্চ সময় ৬ মিনিট ২২ সেকেন্ড, মিশরের নিউ ভ্যালি গভর্নরেটে। আংশিক গ্রহণ দেখা যাবে দক্ষিণ আর দক্ষিণ-পূর্ব এশিয়া থেকেও।",
            "The path of totality crosses Spain, Morocco, Algeria, Tunisia, Libya, Egypt, Saudi Arabia, Yemen and Somalia. The longest totality is 6 minutes 22 seconds, in Egypt's New Valley Governorate. The partial eclipse is visible from South and Southeast Asia too.",
          ),
          source: WIKI_AUG,
        },
        {
          text: l(
            "কলকাতায় সূর্যের প্রায় ৬% ঢাকা পড়বে: শুরু বিকেল ৪:১৪, মধ্যগ্রাস ৪:৪৩, শেষ ৫:১১; তখন সূর্য পশ্চিমে আকাশে প্রায় ২০° উঁচুতে। পূর্ণগ্রাস কলকাতা থেকে দেখা যাবে না।",
            "In Kolkata about 6% of the Sun is covered: begins 4:14 pm, maximum 4:43 pm, ends 5:11 pm, with the Sun about 20° up in the west. Totality is not visible from Kolkata.",
          ),
          source: ORBITAL_KOL,
        },
        {
          text: l(
            "ঢাকায় প্রায় ৩%: শুরু বিকেল ৪:৪৯, মধ্যগ্রাস ৫:১২, শেষ ৫:৩৫; সূর্য প্রায় ১৯° উঁচুতে। Bangla Date Today-র তালিকাতেও একই সময়।",
            "In Dhaka about 3%: begins 4:49 pm, maximum 5:12 pm, ends 5:35 pm, Sun about 19° up. Bangla Date Today's list gives the same times.",
          ),
          source: ORBITAL_DHAKA,
        },
      ],
    },
    {
      id: "other",
      h2: l("বাকি গ্রহণগুলো", "The other eclipses"),
      paras: [
        {
          text: l(
            "২০২৭-এর দুটো সূর্যগ্রহণ ৬ ফেব্রুয়ারি (বলয়গ্রাস) আর ২ আগস্ট (পূর্ণ); দ্রিক পঞ্চাঙ্গ ৬ ফেব্রুয়ারির গ্রহণ কলকাতা আর ঢাকা দু’জায়গাতেই ‘দেখা যাবে না’ লিখেছে, সুতক প্রযোজ্য নয়।",
            "The two solar eclipses of 2027 are 6 February (annular) and 2 August (total). Drik Panchang says the 6 February eclipse is not visible in either Kolkata or Dhaka, and sutak does not apply.",
          ),
          source: SOLAR_DRIK(KOL),
        },
        {
          text: l(
            "তিনটে চন্দ্রগ্রহণই উপচ্ছায়া: ফেব্রুয়ারি, ১৮ জুলাই আর ১৭ আগস্ট। ২১ ফেব্রুয়ারির গ্রহণ দ্রিক খালি চোখে ‘দেখা যাবে না’ লিখেছে, সুতক প্রযোজ্য নয়; দ্রিকের তালিকায় ২০ ফেব্রুয়ারি (আন্তর্জাতিক সময়), কলকাতা-ঢাকায় ২১ তারিখ ভোর।",
            "All three lunar eclipses are penumbral: February, 18 July and 17 August. Drik says the 21 February eclipse is not visible to the naked eye and sutak does not apply. NASA lists it on 20 February (universal time); in Kolkata and Dhaka it falls in the early hours of the 21st.",
          ),
          source: NASA_LUNAR,
        },
        {
          text: l(
            "সুতক নিয়ে: ২ আগস্টের সূর্যগ্রহণে কলকাতা-ঢাকার জন্য দ্রিক পঞ্চাঙ্গের সুতকের সময় আমরা পড়তে পারিনি, তাই লিখলাম না। সুতক মানলে নিজের পঞ্জিকা বা দ্রিকের গ্রহণ পাতা দেখো।",
            "On sutak: we could not read Drik Panchang's sutak times for Kolkata or Dhaka for the 2 August eclipse, so none are given. If you observe sutak, check your panjika or Drik's eclipse page.",
          ),
          source: DRIK_ECLIPSES,
        },
        {
          text: l(
            "উইকিপিডিয়ার একবিংশ শতকের সূর্যগ্রহণের তালিকাতেও ২০২৭-এ দুটো: ৬ ফেব্রুয়ারি বলয়গ্রাস, ২ আগস্ট পূর্ণ।",
            "Wikipedia's list of 21st-century solar eclipses also shows two in 2027: annular on 6 February, total on 2 August.",
          ),
          source: WIKI_SOLAR21,
        },
      ],
    },
    {
      id: "safety",
      h2: l("চোখের সুরক্ষা", "Protect your eyes"),
      paras: [
        {
          text: l(
            "নাসা বলছে, আংশিক বা বলয়গ্রাস সূর্যগ্রহণে প্রত্যক্ষ করতে হলে সবসময় আন্তর্জাতিক মানের (আইএসও ১২৩১২-২) গ্রহণ-চশমা পরতে হয়; সাধারণ রোদচশমা যত কালোই হোক, নিরাপদ নয়। গ্রহণ-চশমা পরে ক্যামেরা, দুরবিন বা টেলিস্কোপে তাকানো চলবে না। পিনহোল প্রজেক্টরে সূর্যকে পিছনে রেখে ছবি দেখা নিরাপদ।",
            "NASA says viewing a partial or annular solar eclipse always needs eclipse glasses that meet the ISO 12312-2 standard; regular sunglasses, however dark, are not safe. Do not look through a camera, binoculars or telescope while wearing eclipse glasses. A pinhole projector, with the Sun behind you, is a safe way to see the projected image.",
          ),
          source: NASA_SAFETY,
        },
      ],
      tips: [l("২ আগস্ট ঢাকা পড়বে সূর্যের খুব সামান্য অংশ; তবু খালি চোখে সূর্যের দিকে তাকিও না।", "Only a sliver of the Sun is covered on 2 August, but still never look at the Sun with bare eyes.")],
    },
    {
      id: "check",
      h2: l("পঞ্জিকা মিলিয়ে নিও", "Check your panjika"),
      paras: [
        {
          text: l(
            "গ্রহণের সময় আর সুতক বাংলা পঞ্জিকায় (গুপ্তপ্রেস বা বিশুদ্ধ সিদ্ধান্ত) একটু আলাদা হতে পারে; ধর্মীয় নিয়ম মানলে নিজের পঞ্জিকা দেখো।",
            "Eclipse times and sutak can differ a little in Bengali panjikas (Gupta Press or Bishuddha Siddhanta). If you follow religious rules, go by your own panjika.",
          ),
        },
      ],
    },
  ],
  faq: [
    { q: l("সূর্যগ্রহণ ২০২৭ কলকাতা থেকে দেখা যাবে?", "Will the 2027 solar eclipse be visible from Kolkata?"), a: l("৬ ফেব্রুয়ারির গ্রহণ দেখা যাবে না। ২ আগস্টের পূর্ণ সূর্যগ্রহণ কলকাতায় আংশিক: প্রায় ৬%, বিকেল ৪:১৪ থেকে ৫:১১, মধ্যগ্রাস ৪:৪৩ (Orbital Radar)।", "The 6 February eclipse is not visible. The 2 August total eclipse is partial in Kolkata: about 6%, 4:14 to 5:11 pm, maximum 4:43 pm (Orbital Radar).") },
    { q: l("২০২৭-এ ঢাকা থেকে সূর্যগ্রহণ দেখা যাবে?", "Can the 2027 solar eclipse be seen from Dhaka?"), a: l("২ আগস্ট আংশিক, প্রায় ৩%, বিকেল ৪:৪৯ থেকে ৫:৩৫, মধ্যগ্রাস ৫:১২; ৬ ফেব্রুয়ারির গ্রহণ ঢাকা থেকে দেখা যাবে না (দ্রিক পঞ্চাঙ্গ)।", "On 2 August, partly: about 3%, 4:49 to 5:35 pm, maximum 5:12 pm. The 6 February eclipse is not visible from Dhaka (Drik Panchang).") },
    { q: l("২০২৭-এ কখন চন্দ্রগ্রহণ?", "When are the lunar eclipses in 2027?"), a: l("২১ ফেব্রুয়ারি, ১৮ জুলাই আর ১৭ আগস্ট; তিনটেই উপচ্ছায়া, যেগুলোতে চাঁদের চেহারা প্রায় বদলায় না (নাসা)।", "21 February, 18 July and 17 August 2027. All three are penumbral, where the Moon's look barely changes (NASA).") },
    { q: l("২ আগস্ট ২০২৭-এর পূর্ণ সূর্যগ্রহণ কোথা থেকে দেখা যাবে?", "Where is the 2 August 2027 total eclipse visible?"), a: l("স্পেন, মরক্কো, আলজেরিয়া, তিউনিসিয়া, লিবিয়া, মিশর, সৌদি আরব, ইয়েমেন আর সোমালিয়া থেকে (উইকিপিডিয়া)। ভারত বা বাংলাদেশ থেকে পূর্ণগ্রাস দেখা যাবে না।", "From Spain, Morocco, Algeria, Tunisia, Libya, Egypt, Saudi Arabia, Yemen and Somalia (Wikipedia). Totality is not visible from India or Bangladesh.") },
    { q: l("সূর্যগ্রহণ খালি চোখে দেখা কি নিরাপদ?", "Is it safe to watch a solar eclipse with the naked eye?"), a: l("না। আইএসও ১২৩১২-২ মানের গ্রহণ-চশমা ছাড়া সূর্যের দিকে তাকিও না; রোদচশমা নিরাপদ নয় (নাসা)।", "No. Use eclipse glasses that meet ISO 12312-2; regular sunglasses are not safe (NASA).") },
  ],
  events: [{ name: l("আংশিক সূর্যগ্রহণ ২০২৭ (২ আগস্ট)", "Partial solar eclipse from Kolkata, 2 Aug 2027"), start: "2027-08-02", place: { name: "Kolkata", locality: "Kolkata", region: "West Bengal", country: "IN" } }],
  links: [CAL, PURNIMA, AMAVASYA, { href: "/manasa-puja-2027", label: l("মনসা পুজো ২০২৭", "Manasa Puja 2027") }],
  lastChecked: "2026-11-01",
};

export const MANASA_2027: FestivalPage = {
  path: "/manasa-puja-2027",
  title: l("মনসা পুজো ২০২৭: নাগপঞ্চমী ও সংক্রান্তির তারিখ", "Manasa Puja 2027: Nag Panchami Date & Muhurat"),
  description: l(
    "নাগপঞ্চমী ২০২৭ শুক্রবার ৬ আগস্ট; কলকাতায় পুজোর মুহূর্ত সকাল ৫:১০ থেকে ৭:৪৭। সিংহ সংক্রান্তি ১৭ আগস্ট। কোন দিন মনসা পুজো, পঞ্জিকা দেখে নিও।",
    "Nag Panchami 2027 is Friday 6 August; Kolkata puja muhurat 5:10 am to 7:47 am. Simha Sankranti is 17 August. Which day Manasa Puja is kept: check your panjika.",
  ),
  h1: l("মনসা পুজো ২০২৭: কবে, কখন", "Manasa Puja 2027: when and what time"),
  lead: l(
    "দ্রিক পঞ্চাঙ্গে নাগপঞ্চমী ২০২৭-এ শুক্রবার ৬ আগস্ট, কলকাতা আর ঢাকায়। বাংলায় মনসা পুজো কোন দিন হবে তা পরিবার আর অঞ্চলভেদে আলাদা; সিংহ সংক্রান্তি মঙ্গলবার ১৭ আগস্ট।",
    "Drik Panchang puts Nag Panchami 2027 on Friday 6 August, in Kolkata and Dhaka. In Bengal the day for Manasa Puja varies by family and region; Simha Sankranti is Tuesday 17 August.",
  ),
  timings: {
    h2: l("নাগপঞ্চমী আর সিংহ সংক্রান্তি", "Nag Panchami and Simha Sankranti"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [
        { day: l("শুক্র ৬ আগস্ট", "Fri 6 Aug"), what: l("নাগপঞ্চমী পুজোর মুহূর্ত", "Nag Panchami puja muhurat"), when: l("সকাল ৫:১০ থেকে ৭:৪৭", "5:10 am to 7:47 am"), source: NAG(KOL) },
        { day: l("৬–৭ আগস্ট", "6–7 Aug"), what: l("পঞ্চমী তিথি", "Panchami tithi"), when: l("৬ আগস্ট ভোর ২:২৭ থেকে ৭ আগস্ট রাত ১২:২২", "6 Aug 2:27 am to 7 Aug 12:22 am"), source: NAG(KOL) },
        { day: l("মঙ্গল ১৭ আগস্ট", "Tue 17 Aug"), what: l("সিংহ সংক্রান্তি (সংক্রান্তির ক্ষণ)", "Simha Sankranti moment"), when: l("দুপুর ২:১৬", "2:16 pm"), source: SIMHA(KOL) },
      ],
      bd: [
        { day: l("শুক্র ৬ আগস্ট", "Fri 6 Aug"), what: l("নাগপঞ্চমী পুজোর মুহূর্ত", "Nag Panchami puja muhurat"), when: l("সকাল ৫:৩০ থেকে ৮:০৮", "5:30 am to 8:08 am"), source: NAG(DHAKA) },
        { day: l("৬–৭ আগস্ট", "6–7 Aug"), what: l("পঞ্চমী তিথি", "Panchami tithi"), when: l("৬ আগস্ট ভোর ২:৫৭ থেকে ৭ আগস্ট রাত ১২:৫২", "6 Aug 2:57 am to 7 Aug 12:52 am"), source: NAG(DHAKA) },
        { day: l("মঙ্গল ১৭ আগস্ট", "Tue 17 Aug"), what: l("সিংহ সংক্রান্তি (সংক্রান্তির ক্ষণ)", "Simha Sankranti moment"), when: l("দুপুর ২:৪৬", "2:46 pm"), source: SIMHA(DHAKA) },
      ],
    },
    note: l(
      "দ্রিক নাগপঞ্চমী দেখায় শ্রাবণ শুক্লা পঞ্চমীতে; মনসা পুজো কোন দিন রাখা হবে তা পরিবারে পরিবারে আলাদা, তাই বাড়ির পঞ্জিকা (গুপ্তপ্রেস বা বিশুদ্ধ সিদ্ধান্ত) মিলিয়ে নিও। দ্রিকের আগস্ট ২০২৭-এর তালিকায় ‘মনসা পুজো’ নামে আলাদা দিন নেই।",
      "Drik shows Nag Panchami on Shravana Shukla Panchami; the day a family keeps Manasa Puja varies, so check your panjika (Gupta Press or Bishuddha Siddhanta). Drik's August 2027 list has no separate 'Manasa Puja' entry.",
    ),
  },
  sections: [
    {
      id: "about",
      h2: l("বাংলার মনসা পুজো", "Manasa worship in Bengal"),
      paras: [
        {
          text: l(
            "সর্পদেবী মনসাকে নাগপঞ্চমীতে পুজো করা হয়, শ্রাবণ মাসের সাপ-পুজোর উৎসবে; বর্ষাকালে, বিশেষ করে শ্রাবণ আর ভাদ্রে, তাঁর পুজো সবচেয়ে বেশি। মহিলারা ব্রত রাখেন আর সাপের গর্তে দুধ দেন।",
            "The snake goddess Manasa is worshipped on Nag Panchami, a snake-worship festival in the month of Shravan, and especially in the rainy months of Shravan and Bhadra. Women fast and offer milk at snake holes.",
          ),
          source: WIKI_MANASA,
        },
        {
          text: l(
            "সাধারণত মূর্তি ছাড়া পুজো হয়: সিজ গাছের ডাল, মাটির ঘট বা মাটির সাপ দেবীর প্রতীক। বাংলার বেশিরভাগ হিন্দু বাড়িতে সিজ ডাল (মনসা) আর তুলসী গাছ (বিষ্ণু) জোড়ায় পূজিত হয়। পূর্ববঙ্গে, অর্থাৎ বর্তমান বাংলাদেশে, নিম্নবর্ণের হিন্দুরা ধুমধাম করে তাঁর পুজো করেন।",
            "Worship is generally without an image: a cactus branch, an earthen pot or an earthen snake stands for the goddess. Most Bengali Hindu households keep a shrine pairing a cactus branch (Manasa) with a tulsi tree (Vishnu). In East Bengal, now Bangladesh, lower-caste Hindus worship her with great pomp.",
          ),
          source: WIKI_MANASA,
        },
      ],
      tips: [
        l("কোন দিন মনসা পুজো, কী রান্না আর কী নিয়ম: বাড়ির বড়দের কাছে জেনে নাও।", "Which day, what is cooked and which rules apply: ask the elders of your home."),
        l("সাপের ভয় থাকলে মাটির সাপ বা ছবিতেই পুজো করো; জ্যান্ত সাপের কাছে যেও না।", "If you are afraid of snakes, worship with the earthen snake or a picture; keep away from live snakes."),
      ],
    },
    {
      id: "sankranti",
      h2: l("শ্রাবণের শেষ আর সিংহ সংক্রান্তি", "End of Shravan and Simha Sankranti"),
      paras: [
        {
          text: l(
            "দ্রিক পঞ্চাঙ্গ ২০২৭-এর সিংহ সংক্রান্তি দেখায় মঙ্গলবার ১৭ আগস্ট: কলকাতায় সংক্রান্তির ক্ষণ দুপুর ২:১৬, পুণ্যকাল সকাল ৭:২৪ থেকে দুপুর ২:১৬; ঢাকায় দুপুর ২:৪৬। যাঁরা শ্রাবণ সংক্রান্তিতে মনসা পুজো করেন, তাঁরা বাংলা পঞ্জিকায় মাসের শেষ দিনটা দেখে নিও।",
            "Drik Panchang gives Simha Sankranti 2027 on Tuesday 17 August: in Kolkata the sankranti moment is 2:16 pm with punya kaal from 7:24 am to 2:16 pm; in Dhaka 2:46 pm. If your family keeps Manasa Puja on the Shravan Sankranti, check the last day of the month in a Bengali panjika.",
          ),
          source: SIMHA(KOL),
        },
      ],
    },
  ],
  faq: [
    { q: l("২০২৭-এ নাগপঞ্চমী কবে?", "When is Nag Panchami in 2027?"), a: l("শুক্রবার ৬ আগস্ট ২০২৭, কলকাতা আর ঢাকায় (দ্রিক পঞ্চাঙ্গ)।", "Friday 6 August 2027, in Kolkata and Dhaka (Drik Panchang).") },
    { q: l("মনসা পুজো ২০২৭ কবে?", "Manasa Puja 2027 date"), a: l("দ্রিকের নাগপঞ্চমী শুক্রবার ৬ আগস্ট; তবে কোন দিন মনসা পুজো হবে তা পরিবার আর অঞ্চলভেদে আলাদা, তাই পঞ্জিকা দেখে নিও।", "Drik's Nag Panchami is Friday 6 August; the day for Manasa Puja varies by family and region, so check your panjika.") },
    { q: l("নাগপঞ্চমীর পুজোর সময় কখন?", "What is the Nag Panchami 2027 puja muhurat in Kolkata?"), a: l("কলকাতায় সকাল ৫:১০ থেকে ৭:৪৭; ঢাকায় সকাল ৫:৩০ থেকে ৮:০৮।", "Kolkata 5:10 am to 7:47 am; Dhaka 5:30 am to 8:08 am.") },
    { q: l("২০২৭-এ সিংহ সংক্রান্তি কবে?", "When is Simha Sankranti in 2027?"), a: l("মঙ্গলবার ১৭ আগস্ট ২০২৭; কলকাতায় সংক্রান্তির ক্ষণ দুপুর ২:১৬, ঢাকায় ২:৪৬।", "Tuesday 17 August 2027; the moment is 2:16 pm in Kolkata and 2:46 pm in Dhaka.") },
  ],
  events: [{ name: l("নাগপঞ্চমী ২০২৭", "Nag Panchami 2027"), start: "2027-08-06", place: { name: "Kolkata", locality: "Kolkata", region: "West Bengal", country: "IN" } }],
  links: [CAL, PURNIMA, AMAVASYA, { href: "/grahan-2027", label: l("গ্রহণ ২০২৭", "Eclipses 2027") }],
  lastChecked: "2026-11-01",
};

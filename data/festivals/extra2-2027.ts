// Pitru Paksha, Mauni Amavasya, Magha Purnima, Pausha Purnima, Sheetala Ashtami and Narasimha Jayanti 2027.
// Dates and times copied from Drik Panchang's festival pages for Kolkata and Dhaka (fetched 2 Nov 2026);
// background from Wikipedia. Type imports only.

import type { L } from "@/lib/i18n";
import type { FestivalPage, FestivalTable } from "./types";

const l = (bn: string, en: string): L => ({ bn, en });
const KOL = "1275004";
const DHAKA = "1185241";
const drik = (path: string, geo: string) => `https://www.drikpanchang.com/${path}?geoname-id=${geo}&year=2027`;
const src = (title: string, path: string, geo: string, city: string) => ({ title: `Drik Panchang, ${title} 2027 (${city})`, url: drik(path, geo) });

const place = { name: "Kolkata", locality: "Kolkata", region: "West Bengal", country: "IN" as const };
const CAL = { href: "/calendar-2027", label: l("📅 পুজোর ক্যালেন্ডার ২০২৭", "📅 Festival calendar 2027") };
const PURNIMA_LINK = { href: "/purnima-2027", label: l("🌕 পূর্ণিমা ২০২৭", "🌕 Purnima 2027") };
const AMAVASYA_LINK = { href: "/amavasya-2027", label: l("🌑 অমাবস্যা ২০২৭", "🌑 Amavasya 2027") };
const PANJIKA = l("বাংলা পঞ্জিকা আর দ্রিকের হিসেবে তিথির সময় কিছুটা আলাদা হতে পারে; বাড়ির পঞ্জিকা মিলিয়ে নিও।", "Bengali panjikas and Drik Panchang can differ slightly on tithi times; check your own panjika.");

// ---------- Pitru Paksha ----------
const PITRU_PATH = "shraddha/pitru-paksha-shraddha-dates.html";
const PITRU = (g: string, city: string) => ({ title: `Drik Panchang, Pitru Paksha Shraddha dates 2027 (${city})`, url: drik(PITRU_PATH, g) });
const PITRU_MONTH = { title: "Drik Panchang, September 2027 festivals (Kolkata)", url: `https://www.drikpanchang.com/festivals/month/festivals-september.html?year=2027&geoname-id=${KOL}` };
const WIKI_PITRU = { title: "Wikipedia, Pitru Paksha", url: "https://en.wikipedia.org/wiki/Pitru_Paksha" };

const BN_DIGITS = "০১২৩৪৫৬৭৮৯";
const bn = (n: number) => String(n).split("").map((d) => BN_DIGITS[Number(d)]).join("");
const WD: [string, string][] = [["রবি", "Sun"], ["সোম", "Mon"], ["মঙ্গল", "Tue"], ["বুধ", "Wed"], ["বৃহস্পতি", "Thu"], ["শুক্র", "Fri"], ["শনি", "Sat"]];
const sepDay = (d: number): L => {
  const w = WD[new Date(Date.UTC(2027, 8, d)).getUTCDay()];
  return l(`${w[0]} ${bn(d)} সেপ্টেম্বর`, `${w[1]} ${d} Sep`);
};

// [bn name, en name, day of September, bn tithi, en tithi] as printed by Drik (Kolkata and Dhaka agree).
const PITRU_ROWS: [string, string, number, string, string][] = [
  ["পূর্ণিমা শ্রাদ্ধ", "Purnima Shraddha", 15, "ভাদ্র শুক্লা পূর্ণিমা", "Bhadrapada, Shukla Purnima"],
  ["প্রতিপদ শ্রাদ্ধ", "Pratipada Shraddha", 16, "আশ্বিন কৃষ্ণা প্রতিপদ", "Ashwina, Krishna Pratipada"],
  ["দ্বিতীয়া শ্রাদ্ধ", "Dwitiya Shraddha", 17, "আশ্বিন কৃষ্ণা দ্বিতীয়া", "Ashwina, Krishna Dwitiya"],
  ["তৃতীয়া শ্রাদ্ধ", "Tritiya Shraddha", 18, "আশ্বিন কৃষ্ণা তৃতীয়া", "Ashwina, Krishna Tritiya"],
  ["চতুর্থী শ্রাদ্ধ", "Chaturthi Shraddha", 19, "আশ্বিন কৃষ্ণা চতুর্থী", "Ashwina, Krishna Chaturthi"],
  ["পঞ্চমী শ্রাদ্ধ", "Panchami Shraddha", 20, "আশ্বিন কৃষ্ণা পঞ্চমী", "Ashwina, Krishna Panchami"],
  ["মহাভরণী", "Maha Bharani", 20, "আশ্বিন, ভরণী নক্ষত্র", "Ashwina, Bharani Nakshatra"],
  ["ষষ্ঠী শ্রাদ্ধ", "Shashthi Shraddha", 21, "আশ্বিন কৃষ্ণা ষষ্ঠী", "Ashwina, Krishna Shashthi"],
  ["সপ্তমী শ্রাদ্ধ", "Saptami Shraddha", 22, "আশ্বিন কৃষ্ণা সপ্তমী", "Ashwina, Krishna Saptami"],
  ["অষ্টমী শ্রাদ্ধ", "Ashtami Shraddha", 23, "আশ্বিন কৃষ্ণা অষ্টমী", "Ashwina, Krishna Ashtami"],
  ["নবমী শ্রাদ্ধ", "Navami Shraddha", 24, "আশ্বিন কৃষ্ণা নবমী", "Ashwina, Krishna Navami"],
  ["দশমী শ্রাদ্ধ", "Dashami Shraddha", 25, "আশ্বিন কৃষ্ণা দশমী", "Ashwina, Krishna Dashami"],
  ["একাদশী শ্রাদ্ধ", "Ekadashi Shraddha", 26, "আশ্বিন কৃষ্ণা একাদশী", "Ashwina, Krishna Ekadashi"],
  ["দ্বাদশী শ্রাদ্ধ", "Dwadashi Shraddha", 27, "আশ্বিন কৃষ্ণা দ্বাদশী", "Ashwina, Krishna Dwadashi"],
  ["মঘা শ্রাদ্ধ", "Magha Shraddha", 27, "আশ্বিন, মঘা নক্ষত্র", "Ashwina, Magha Nakshatra"],
  ["ত্রয়োদশী শ্রাদ্ধ", "Trayodashi Shraddha", 28, "আশ্বিন কৃষ্ণা ত্রয়োদশী", "Ashwina, Krishna Trayodashi"],
  ["চতুর্দশী শ্রাদ্ধ", "Chaturdashi Shraddha", 28, "আশ্বিন কৃষ্ণা চতুর্দশী", "Ashwina, Krishna Chaturdashi"],
  ["সর্ব পিতৃ অমাবস্যা", "Sarva Pitru Amavasya", 29, "আশ্বিন কৃষ্ণা অমাবস্যা", "Ashwina, Krishna Amavasya"],
];

const pitruTable: FestivalTable = {
  id: "shraddha-days",
  h2: l("পিতৃপক্ষ ২০২৭: প্রতিটি শ্রাদ্ধের দিন", "Pitru Paksha 2027: every Shraddha day"),
  lead: l("পূর্ণিমা শ্রাদ্ধ থেকে সর্ব পিতৃ অমাবস্যা পর্যন্ত দ্রিক পঞ্চাঙ্গের তালিকা; কলকাতা আর ঢাকায় তারিখ একই।", "Drik Panchang's list from Purnima Shraddha to Sarva Pitru Amavasya; the dates are the same in Kolkata and Dhaka."),
  caption: l("শ্রাদ্ধের দিন, সেপ্টেম্বর ২০২৭", "Shraddha days, September 2027"),
  columns: [l("শ্রাদ্ধ", "Shraddha"), l("তারিখ", "Date"), l("তিথি", "Tithi")],
  rows: PITRU_ROWS.map(([nb, ne, d, tb, te]) => ({ cells: [l(nb, ne), sepDay(d), l(tb, te)], source: PITRU(KOL, "Kolkata"), ...(d === 29 && ne.startsWith("Sarva") ? { href: "/mahalaya-2027" } : {}) })),
  note: l("মহাভরণী আর মঘা শ্রাদ্ধ নক্ষত্র ধরে, তিথি ধরে নয়। দ্রিকের ঢাকা পাতাতেও একই তারিখ। " + PANJIKA.bn, "Maha Bharani and Magha Shraddha go by nakshatra, not tithi. Drik's Dhaka page gives the same dates. " + PANJIKA.en),
};

export const PITRU_PAKSHA_2027: FestivalPage = {
  path: "/pitru-paksha-2027",
  title: l("পিতৃপক্ষ ২০২৭: শুরু, শেষ আর সব শ্রাদ্ধের তারিখ", "Pitru Paksha 2027: Dates and All Shraddha Tithis"),
  description: l(
    "পিতৃপক্ষ ২০২৭ শুরু বৃহস্পতিবার ১৬ সেপ্টেম্বর, শেষ বুধবার ২৯ সেপ্টেম্বর (সর্ব পিতৃ অমাবস্যা)। প্রতিটি শ্রাদ্ধের তারিখ আর তিথি, সূত্রসহ।",
    "Pitru Paksha 2027 runs from Thursday 16 September to Sarva Pitru Amavasya on Wednesday 29 September. Every Shraddha date and tithi, sourced.",
  ),
  h1: l("পিতৃপক্ষ ২০২৭: কবে শুরু, কবে শেষ", "Pitru Paksha 2027: when it starts and ends"),
  lead: l(
    "দ্রিক পঞ্চাঙ্গ অনুযায়ী ২০২৭-এ পিতৃপক্ষ শুরু বৃহস্পতিবার ১৬ সেপ্টেম্বর (আশ্বিন কৃষ্ণা প্রতিপদ), শেষ বুধবার ২৯ সেপ্টেম্বর, সর্ব পিতৃ অমাবস্যায়; তার আগের দিন ১৫ সেপ্টেম্বর পূর্ণিমা শ্রাদ্ধ।",
    "Per Drik Panchang, Pitru Paksha 2027 begins on Thursday 16 September (Ashwina, Krishna Pratipada) and ends on Wednesday 29 September with Sarva Pitru Amavasya; Purnima Shraddha falls the day before, on 15 September.",
  ),
  tables: [pitruTable],
  sections: [
    {
      id: "what",
      h2: l("পিতৃপক্ষ কী", "What is Pitru Paksha"),
      paras: [
        {
          text: l(
            "পিতৃপক্ষ ষোলো তিথির সময়, যখন হিন্দুরা পূর্বপুরুষদের স্মরণ করেন, প্রধানত অন্নদানের মাধ্যমে। শেষ অমাবস্যাটা সব পূর্বপুরুষের জন্য; সেদিন ভুলে যাওয়া শ্রাদ্ধও করা যায়।",
            "Pitru Paksha is a period of sixteen lunar days when Hindus honour their ancestors, mainly through food offerings. The closing new moon is meant for all ancestors, and forgotten shraddhas can be performed then.",
          ),
          source: WIKI_PITRU,
        },
        {
          text: l(
            "জল দিয়ে তর্পণ আর ভাত-তিল-ঘিয়ের পিণ্ডদান এই সময়ের প্রধান রীতি। বাংলায় মহালয়া দুর্গাপুজোর আনুষ্ঠানিক সূচনা, আর বহু বাঙালি পরিবার ভোরে উঠে চণ্ডীপাঠ শোনে।",
            "Offering water (tarpana) and rice-and-sesame pinda are the main rites. In Bengal, Mahalaya marks the formal start of Durga Puja, and many families wake at dawn to hear the Chandi recitation.",
          ),
          source: WIKI_PITRU,
        },
        {
          text: l(
            "দ্রিক পঞ্চাঙ্গ লিখেছে, কোনো পঞ্জিকায় পিতৃপক্ষ পূর্ণিমায়, কোনোটায় তার পরদিন শুরু; তাই এখানে পূর্ণিমা শ্রাদ্ধ (১৫ সেপ্টেম্বর) আর প্রতিপদ (১৬ সেপ্টেম্বর) দুটোই দেখানো।",
            "Drik notes that some calendars start Pitru Paksha on the full moon and others the day after, so both Purnima Shraddha (15 Sep) and Pratipada (16 Sep) are shown here.",
          ),
          source: PITRU(KOL, "Kolkata"),
        },
        { text: l("আমাদের নিজের তালিকায় আশ্বিনের অমাবস্যা ৩০ সেপ্টেম্বর, কিন্তু শ্রাদ্ধের দিন ২৯ সেপ্টেম্বর; দ্রিক শ্রাদ্ধের জন্য আগের দিনটা ধরে। মহালয়ার পাতায় বিস্তারিত।", "Our Amavasya list shows Ashwina Amavasya on 30 September, while the Shraddha day is 29 September; the two follow different rules. See the Mahalaya page for detail."), source: PITRU(KOL, "Kolkata") },
        { text: PANJIKA },
      ],
    },
    {
      id: "sources",
      h2: l("সূত্র", "Sources"),
      paras: [
        { text: l("শ্রাদ্ধের তারিখ, কলকাতা।", "Shraddha dates, Kolkata."), source: PITRU(KOL, "Kolkata") },
        { text: l("শ্রাদ্ধের তারিখ, ঢাকা।", "Shraddha dates, Dhaka."), source: PITRU(DHAKA, "Dhaka") },
        { text: l("সেপ্টেম্বর ২০২৭-এর উৎসব তালিকা (পিতৃপক্ষ শুরু)।", "September 2027 festival list (Pitrupaksha begins)."), source: PITRU_MONTH },
      ],
    },
  ],
  faq: [
    { q: l("২০২৭-এ পিতৃপক্ষ কবে শুরু?", "When does Pitru Paksha 2027 start?"), a: l("বৃহস্পতিবার ১৬ সেপ্টেম্বর ২০২৭ (প্রতিপদ); পূর্ণিমা শ্রাদ্ধ ১৫ সেপ্টেম্বর (দ্রিক পঞ্চাঙ্গ)।", "Thursday 16 September 2027 (Pratipada); Purnima Shraddha is on 15 September (Drik Panchang).") },
    { q: l("২০২৭-এ পিতৃপক্ষ কবে শেষ?", "When does Pitru Paksha 2027 end?"), a: l("বুধবার ২৯ সেপ্টেম্বর ২০২৭, সর্ব পিতৃ অমাবস্যায়, কলকাতা আর ঢাকায়।", "Wednesday 29 September 2027, on Sarva Pitru Amavasya, in Kolkata and Dhaka.") },
    { q: l("২০২৭-এ মহালয়া কবে?", "When is Mahalaya 2027?"), a: l("সর্ব পিতৃ অমাবস্যা বুধবার ২৯ সেপ্টেম্বর; মহালয়ার পাতায় আরও।", "Sarva Pitru Amavasya, Wednesday 29 September; see our Mahalaya page for more.") },
    { q: l("২০২৭-এ অষ্টমী শ্রাদ্ধ কবে?", "When is Ashtami Shraddha in 2027?"), a: l("বৃহস্পতিবার ২৩ সেপ্টেম্বর ২০২৭ (আশ্বিন কৃষ্ণা অষ্টমী)।", "Thursday 23 September 2027 (Ashwina, Krishna Ashtami).") },
  ],
  events: [{ name: l("পিতৃপক্ষ ২০২৭", "Pitru Paksha 2027"), start: "2027-09-16", end: "2027-09-29", place }],
  links: [CAL, { href: "/mahalaya-2027", label: l("মহালয়া ২০২৭", "Mahalaya 2027"), primary: true }, { href: "/durga-puja-2027", label: l("দুর্গাপুজো ২০২৭", "Durga Puja 2027") }, AMAVASYA_LINK],
  lastChecked: "2026-11-02",
};

// ---------- Mauni Amavasya ----------
const MAUNI = (g: string, city: string) => src("Mauni Amavasya", "amavasya/maghi/mauni-amavasya-date-time.html", g, city);
const WIKI_MAGH = { title: "Wikipedia, Magh Mela", url: "https://en.wikipedia.org/wiki/Magh_Mela" };

export const MAUNI_AMAVASYA_2027: FestivalPage = {
  path: "/mauni-amavasya-2027",
  title: l("মৌনী অমাবস্যা ২০২৭: তারিখ আর অমাবস্যা তিথির সময়", "Mauni Amavasya 2027: Date and Amavasya Tithi Time"),
  description: l(
    "মৌনী অমাবস্যা ২০২৭ শনিবার ৬ ফেব্রুয়ারি। কলকাতা আর ঢাকায় অমাবস্যা তিথি কখন শুরু ও শেষ, মাঘ মাসের স্নানের রীতি, সূত্রসহ।",
    "Mauni Amavasya 2027 is Saturday 6 February. Amavasya tithi start and end times for Kolkata and Dhaka, and the Magha bathing tradition, sourced.",
  ),
  h1: l("মৌনী অমাবস্যা ২০২৭: কবে, কখন", "Mauni Amavasya 2027: when and what time"),
  lead: l(
    "মৌনী অমাবস্যা ২০২৭-এ শনিবার ৬ ফেব্রুয়ারি, কলকাতা আর ঢাকা দু’জায়গাতেই; দ্রিক পঞ্চাঙ্গ একে মাঘ কৃষ্ণা অমাবস্যা বলেছে।",
    "Mauni Amavasya in 2027 is Saturday 6 February, in both Kolkata and Dhaka; Drik Panchang lists it as Magha, Krishna Amavasya.",
  ),
  timings: {
    h2: l("তারিখ আর অমাবস্যা তিথি", "Date and Amavasya tithi"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [{ day: l("শনি ৬ ফেব্রুয়ারি", "Sat 6 Feb"), what: l("অমাবস্যা তিথি", "Amavasya tithi"), when: l("৫ ফেব্রুয়ারি সন্ধে ৭:০৫ থেকে ৬ ফেব্রুয়ারি রাত ৯:২৫", "5 Feb 7:05 pm to 6 Feb 9:25 pm"), source: MAUNI(KOL, "Kolkata") }],
      bd: [{ day: l("শনি ৬ ফেব্রুয়ারি", "Sat 6 Feb"), what: l("অমাবস্যা তিথি", "Amavasya tithi"), when: l("৫ ফেব্রুয়ারি সন্ধে ৭:৩৫ থেকে ৬ ফেব্রুয়ারি রাত ৯:৫৫", "5 Feb 7:35 pm to 6 Feb 9:55 pm"), source: MAUNI(DHAKA, "Dhaka") }],
    },
    note: l("দ্রিকের এই পাতায় স্নানের আলাদা শুভ সময় দেওয়া নেই। " + PANJIKA.bn, "Drik's page gives no separate bathing muhurat. " + PANJIKA.en),
  },
  sections: [
    {
      id: "magha",
      h2: l("মাঘ মাসের স্নান আর অমাবস্যা", "Magha bathing and the new moon"),
      paras: [
        {
          text: l(
            "মাঘ মাসে নদী বা পবিত্র জলাশয়ের ধারে মাঘ মেলা বসে, আর মূল আচার জলে ডুব দেওয়া। অমাবস্যা আর মকর সংক্রান্তিতে ভিড় সবচেয়ে বেশি।",
            "In the month of Magha, Magh Mela fairs are held beside rivers and sacred tanks, and the central ritual is a dip in the water. Amavasya and Makar Sankranti draw the biggest crowds.",
          ),
          source: WIKI_MAGH,
        },
        {
          text: l(
            "দ্রিক পঞ্চাঙ্গ লিখেছে, মাঘ জুড়ে ভোরে গঙ্গা-যমুনায় স্নান চলে, পৌষ পূর্ণিমায় শুরু হয়ে মাঘ পূর্ণিমায় শেষ।",
            "Drik Panchang says early-morning baths in the Ganga or Yamuna continue through Magha, beginning on Paush Purnima and ending on Magha Purnima.",
          ),
          source: src("Paush Purnima", "purnima/paush/paush-purnima-date-time.html", KOL, "Kolkata"),
        },
        { text: l("আমাদের তালিকায় এটা মাঘের অমাবস্যা, ৬ ফেব্রুয়ারি; সম্পূর্ণ তালিকা অমাবস্যার পাতায়।", "In our list this is the Magha Amavasya, 6 February; the full list is on the Amavasya page."), source: MAUNI(KOL, "Kolkata") },
        { text: PANJIKA },
      ],
    },
    {
      id: "sources",
      h2: l("সূত্র", "Sources"),
      paras: [
        { text: l("২০২৭, কলকাতা।", "2027, Kolkata."), source: MAUNI(KOL, "Kolkata") },
        { text: l("২০২৭, ঢাকা।", "2027, Dhaka."), source: MAUNI(DHAKA, "Dhaka") },
      ],
    },
  ],
  faq: [
    { q: l("২০২৭-এ মৌনী অমাবস্যা কবে?", "When is Mauni Amavasya in 2027?"), a: l("শনিবার ৬ ফেব্রুয়ারি ২০২৭, কলকাতা আর ঢাকায় (দ্রিক পঞ্চাঙ্গ)।", "Saturday 6 February 2027, in Kolkata and Dhaka (Drik Panchang).") },
    { q: l("মৌনী অমাবস্যার তিথি কখন শুরু আর শেষ?", "What time does Amavasya tithi start and end on Mauni Amavasya 2027?"), a: l("কলকাতায় ৫ ফেব্রুয়ারি সন্ধে ৭:০৫ থেকে ৬ ফেব্রুয়ারি রাত ৯:২৫; ঢাকায় সন্ধে ৭:৩৫ থেকে রাত ৯:৫৫।", "Kolkata: 5 Feb 7:05 pm to 6 Feb 9:25 pm. Dhaka: 7:35 pm to 9:55 pm.") },
    { q: l("মৌনী অমাবস্যা কোন মাসে?", "Which month is Mauni Amavasya in?"), a: l("দ্রিক পঞ্চাঙ্গ অনুযায়ী মাঘ কৃষ্ণা অমাবস্যা।", "Per Drik Panchang, Magha Krishna Amavasya.") },
  ],
  events: [{ name: l("মৌনী অমাবস্যা ২০২৭", "Mauni Amavasya 2027"), start: "2027-02-06", place }],
  links: [CAL, { ...AMAVASYA_LINK, primary: true }, { href: "/magha-purnima-2027", label: l("মাঘী পূর্ণিমা ২০২৭", "Magha Purnima 2027") }, PURNIMA_LINK],
  lastChecked: "2026-11-02",
};

// ---------- Magha Purnima ----------
const MAGHA_P = (g: string, city: string) => src("Magha Purnima", "purnima/magha/magha-purnima-date-time.html", g, city);

export const MAGHA_PURNIMA_2027: FestivalPage = {
  path: "/magha-purnima-2027",
  title: l("মাঘী পূর্ণিমা ২০২৭: তারিখ আর পূর্ণিমা তিথির সময়", "Magha Purnima 2027: Date and Purnima Tithi Time"),
  description: l(
    "মাঘী পূর্ণিমা ২০২৭ শনিবার ২০ ফেব্রুয়ারি। কলকাতা আর ঢাকায় পূর্ণিমা তিথি কখন শুরু ও শেষ, চাঁদ ওঠার সময় আর মাঘ স্নানের শেষ দিন, সূত্রসহ।",
    "Magha Purnima 2027 is Saturday 20 February. Purnima tithi start and end for Kolkata and Dhaka, moonrise, and the last day of Magha bathing, sourced.",
  ),
  h1: l("মাঘী পূর্ণিমা ২০২৭: কবে, কখন", "Magha Purnima 2027: when and what time"),
  lead: l(
    "মাঘী (মাঘ) পূর্ণিমা ২০২৭-এ শনিবার ২০ ফেব্রুয়ারি, কলকাতা আর ঢাকায়। দ্রিক পঞ্চাঙ্গে এটা মাঘ শুক্লা পূর্ণিমা।",
    "Magha Purnima in 2027 is Saturday 20 February, in Kolkata and Dhaka. Drik Panchang lists it as Magha, Shukla Purnima.",
  ),
  timings: {
    h2: l("তারিখ আর পূর্ণিমা তিথি", "Date and Purnima tithi"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [
        { day: l("শনি ২০ ফেব্রুয়ারি", "Sat 20 Feb"), what: l("পূর্ণিমা তিথি", "Purnima tithi"), when: l("২০ ফেব্রুয়ারি সকাল ৭:৫৯ থেকে ২১ ফেব্রুয়ারি ভোর ৪:৫২", "20 Feb 7:59 am to 21 Feb 4:52 am"), source: MAGHA_P(KOL, "Kolkata") },
        { day: l("শনি ২০ ফেব্রুয়ারি", "Sat 20 Feb"), what: l("পূর্ণিমায় চাঁদ ওঠা", "Moonrise on Purnima"), when: l("বিকেল ৫:০৭", "5:07 pm"), source: MAGHA_P(KOL, "Kolkata") },
      ],
      bd: [{ day: l("শনি ২০ ফেব্রুয়ারি", "Sat 20 Feb"), what: l("পূর্ণিমা তিথি", "Purnima tithi"), when: l("২০ ফেব্রুয়ারি সকাল ৮:২৯ থেকে ২১ ফেব্রুয়ারি ভোর ৫:২২", "20 Feb 8:29 am to 21 Feb 5:22 am"), source: MAGHA_P(DHAKA, "Dhaka") }],
    },
    note: l(PANJIKA.bn, PANJIKA.en),
  },
  sections: [
    {
      id: "magha",
      h2: l("মাঘ স্নানের শেষ দিন", "End of the Magha bathing month"),
      paras: [
        {
          text: l(
            "দ্রিক পঞ্চাঙ্গ অনুযায়ী মাঘ জুড়ে ভোরে গঙ্গা বা যমুনায় স্নান চলে; পৌষ পূর্ণিমায় শুরু হয়ে মাঘ পূর্ণিমায় শেষ। এই সময় দান বিশেষ ফলদায়ী ধরা হয়।",
            "Drik Panchang says early-morning baths in the Ganga or Yamuna run through Magha, starting on Paush Purnima and ending on Magha Purnima, and charity in this period is considered especially fruitful.",
          ),
          source: src("Paush Purnima", "purnima/paush/paush-purnima-date-time.html", KOL, "Kolkata"),
        },
        {
          text: l(
            "মাঘ মাসে নদী বা পবিত্র জলাশয়ের ধারে মাঘ মেলা বসে; মূল আচার জলে ডুব দেওয়া।",
            "In the month of Magha, Magh Mela fairs are held beside rivers and sacred tanks, with a ritual dip in the water at the centre.",
          ),
          source: WIKI_MAGH,
        },
        { text: l("আমাদের পূর্ণিমার তালিকায় এটা ২০ ফেব্রুয়ারির সারিতে আছে।", "It appears on the 20 February row of our Purnima list."), source: MAGHA_P(KOL, "Kolkata") },
      ],
    },
    {
      id: "sources",
      h2: l("সূত্র", "Sources"),
      paras: [
        { text: l("২০২৭, কলকাতা।", "2027, Kolkata."), source: MAGHA_P(KOL, "Kolkata") },
        { text: l("২০২৭, ঢাকা।", "2027, Dhaka."), source: MAGHA_P(DHAKA, "Dhaka") },
      ],
    },
  ],
  faq: [
    { q: l("২০২৭-এ মাঘী পূর্ণিমা কবে?", "When is Magha Purnima in 2027?"), a: l("শনিবার ২০ ফেব্রুয়ারি ২০২৭, কলকাতা আর ঢাকায় (দ্রিক পঞ্চাঙ্গ)।", "Saturday 20 February 2027, in Kolkata and Dhaka (Drik Panchang).") },
    { q: l("মাঘী পূর্ণিমার তিথি কখন?", "What time is Purnima tithi on Magha Purnima 2027?"), a: l("কলকাতায় ২০ ফেব্রুয়ারি সকাল ৭:৫৯ থেকে ২১ ফেব্রুয়ারি ভোর ৪:৫২; ঢাকায় সকাল ৮:২৯ থেকে ভোর ৫:২২।", "Kolkata: 20 Feb 7:59 am to 21 Feb 4:52 am. Dhaka: 8:29 am to 5:22 am.") },
    { q: l("কলকাতায় মাঘী পূর্ণিমায় চাঁদ কখন ওঠে?", "What time is moonrise on Magha Purnima 2027 in Kolkata?"), a: l("বিকেল ৫:০৭ (দ্রিক পঞ্চাঙ্গ)।", "5:07 pm (Drik Panchang).") },
  ],
  events: [{ name: l("মাঘী পূর্ণিমা ২০২৭", "Magha Purnima 2027"), start: "2027-02-20", place }],
  links: [CAL, { ...PURNIMA_LINK, primary: true }, { href: "/pausha-purnima-2027", label: l("পৌষ পূর্ণিমা ২০২৭", "Pausha Purnima 2027") }, { href: "/mauni-amavasya-2027", label: l("মৌনী অমাবস্যা ২০২৭", "Mauni Amavasya 2027") }, { href: "/dol-purnima-2027", label: l("দোলপূর্ণিমা ২০২৭", "Dol Purnima 2027") }],
  lastChecked: "2026-11-02",
};

// ---------- Pausha Purnima ----------
const PAUSHA_P = (g: string, city: string) => src("Paush Purnima", "purnima/paush/paush-purnima-date-time.html", g, city);
const SHAKAMBHARI = src("Shakambhari Purnima", "navratri/shakambari/shakambari-purnima-date-time.html", KOL, "Kolkata");

export const PAUSHA_PURNIMA_2027: FestivalPage = {
  path: "/pausha-purnima-2027",
  title: l("পৌষ পূর্ণিমা ২০২৭: তারিখ আর পূর্ণিমা তিথির সময়", "Pausha Purnima 2027: Date and Purnima Tithi Time"),
  description: l(
    "পৌষ পূর্ণিমা ২০২৭ শুক্রবার ২২ জানুয়ারি, শাকম্ভরী পূর্ণিমাও সেদিন। কলকাতা আর ঢাকায় পূর্ণিমা তিথি কখন শুরু ও শেষ, সূত্রসহ।",
    "Pausha Purnima 2027 is Friday 22 January, also Shakambhari Purnima. Purnima tithi start and end for Kolkata and Dhaka, with moonrise, sourced.",
  ),
  h1: l("পৌষ পূর্ণিমা ২০২৭: কবে, কখন", "Pausha Purnima 2027: when and what time"),
  lead: l(
    "পৌষ পূর্ণিমা ২০২৭-এ শুক্রবার ২২ জানুয়ারি, কলকাতা আর ঢাকায়; দ্রিক পঞ্চাঙ্গ একই দিনে শাকম্ভরী পূর্ণিমা দেখিয়েছে।",
    "Pausha (Paush) Purnima in 2027 is Friday 22 January, in Kolkata and Dhaka; Drik Panchang lists Shakambhari Purnima on the same day.",
  ),
  timings: {
    h2: l("তারিখ আর পূর্ণিমা তিথি", "Date and Purnima tithi"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [
        { day: l("শুক্র ২২ জানুয়ারি", "Fri 22 Jan"), what: l("পূর্ণিমা তিথি", "Purnima tithi"), when: l("২১ জানুয়ারি রাত ৯:২৯ থেকে ২২ জানুয়ারি সন্ধে ৫:৪৬", "21 Jan 9:29 pm to 22 Jan 5:46 pm"), source: PAUSHA_P(KOL, "Kolkata") },
        { day: l("শুক্র ২২ জানুয়ারি", "Fri 22 Jan"), what: l("পূর্ণিমায় চাঁদ ওঠা", "Moonrise on Purnima"), when: l("বিকেল ৫:১৬", "5:16 pm"), source: PAUSHA_P(KOL, "Kolkata") },
      ],
      bd: [{ day: l("শুক্র ২২ জানুয়ারি", "Fri 22 Jan"), what: l("পূর্ণিমা তিথি", "Purnima tithi"), when: l("২১ জানুয়ারি রাত ৯:৫৯ থেকে ২২ জানুয়ারি সন্ধে ৬:১৬", "21 Jan 9:59 pm to 22 Jan 6:16 pm"), source: PAUSHA_P(DHAKA, "Dhaka") }],
    },
    note: l(PANJIKA.bn, PANJIKA.en),
  },
  sections: [
    {
      id: "snan",
      h2: l("স্নান আর দান", "Bathing and charity"),
      paras: [
        {
          text: l(
            "দ্রিক পঞ্চাঙ্গ লিখেছে, মাঘ মাস জুড়ে ভোরে গঙ্গা বা যমুনায় স্নানের রীতি; দৈনিক স্নান পৌষ পূর্ণিমায় শুরু হয়ে মাঘ পূর্ণিমা পর্যন্ত চলে। সাধ্যমতো দান করার কথাও বলা আছে।",
            "Drik Panchang says devotees bathe in the Ganga or Yamuna in the early morning throughout Magha; the daily bathing begins on Paush Purnima and continues to Magha Purnima, and people give charity as they can.",
          ),
          source: PAUSHA_P(KOL, "Kolkata"),
        },
        {
          text: l(
            "একই দিনটা দ্রিকের তালিকায় শাকম্ভরী পূর্ণিমা নামেও আছে, তিথির সময় একই।",
            "Drik also lists the same day as Shakambhari Purnima, with the same tithi times.",
          ),
          source: SHAKAMBHARI,
        },
      ],
    },
    {
      id: "sources",
      h2: l("সূত্র", "Sources"),
      paras: [
        { text: l("২০২৭, কলকাতা।", "2027, Kolkata."), source: PAUSHA_P(KOL, "Kolkata") },
        { text: l("২০২৭, ঢাকা।", "2027, Dhaka."), source: PAUSHA_P(DHAKA, "Dhaka") },
      ],
    },
  ],
  faq: [
    { q: l("২০২৭-এ পৌষ পূর্ণিমা কবে?", "When is Pausha Purnima in 2027?"), a: l("শুক্রবার ২২ জানুয়ারি ২০২৭, কলকাতা আর ঢাকায় (দ্রিক পঞ্চাঙ্গ)।", "Friday 22 January 2027, in Kolkata and Dhaka (Drik Panchang).") },
    { q: l("পৌষ পূর্ণিমার তিথি কখন?", "What time is Purnima tithi on Pausha Purnima 2027?"), a: l("কলকাতায় ২১ জানুয়ারি রাত ৯:২৯ থেকে ২২ জানুয়ারি সন্ধে ৫:৪৬; ঢাকায় রাত ৯:৫৯ থেকে সন্ধে ৬:১৬।", "Kolkata: 21 Jan 9:29 pm to 22 Jan 5:46 pm. Dhaka: 9:59 pm to 6:16 pm.") },
    { q: l("২০২৭-এ শাকম্ভরী পূর্ণিমা কবে?", "When is Shakambhari Purnima 2027?"), a: l("শুক্রবার ২২ জানুয়ারি ২০২৭, পৌষ পূর্ণিমার দিনেই (দ্রিক পঞ্চাঙ্গ)।", "Friday 22 January 2027, the same day as Pausha Purnima (Drik Panchang).") },
  ],
  events: [{ name: l("পৌষ পূর্ণিমা ২০২৭", "Pausha Purnima 2027"), start: "2027-01-22", place }],
  links: [CAL, { ...PURNIMA_LINK, primary: true }, { href: "/magha-purnima-2027", label: l("মাঘী পূর্ণিমা ২০২৭", "Magha Purnima 2027") }, { href: "/poush-sankranti-2027", label: l("পৌষ সংক্রান্তি ২০২৭", "Poush Sankranti 2027") }],
  lastChecked: "2026-11-02",
};

// ---------- Sheetala Ashtami ----------
const SHEETALA = (g: string, city: string) => src("Sheetala Ashtami", "festivals/sheetala-ashtami/sheetala-ashtami-puja-date.html", g, city);
const WIKI_SHITALA = { title: "Wikipedia, Shitala", url: "https://en.wikipedia.org/wiki/Shitala" };

export const SHITALA_ASHTAMI_2027: FestivalPage = {
  path: "/shitala-ashtami-2027",
  title: l("শীতলা অষ্টমী ২০২৭: তারিখ, পুজোর সময়, অষ্টমী তিথি", "Sheetala Ashtami 2027: Date, Puja Muhurat, Tithi"),
  description: l(
    "শীতলা অষ্টমী (বাসোড়া) ২০২৭ মঙ্গলবার ৩০ মার্চ। কলকাতায় পুজোর সময় ভোর ৫:৩২ থেকে সন্ধে ৫:৫১, অষ্টমী তিথি, ঢাকার সময়ও, সূত্রসহ।",
    "Sheetala Ashtami (Basoda) 2027 is Tuesday 30 March. Kolkata puja muhurat 5:32 am to 5:51 pm, Ashtami tithi, plus Dhaka times, sourced.",
  ),
  h1: l("শীতলা অষ্টমী ২০২৭: কবে, কখন", "Sheetala Ashtami 2027: when and what time"),
  lead: l(
    "শীতলা অষ্টমী (বাসোড়া) ২০২৭-এ মঙ্গলবার ৩০ মার্চ, কলকাতা আর ঢাকায়; দ্রিক পঞ্চাঙ্গে এটা চৈত্র কৃষ্ণা অষ্টমী।",
    "Sheetala Ashtami (Basoda) in 2027 is Tuesday 30 March, in Kolkata and Dhaka; Drik Panchang lists it as Chaitra, Krishna Ashtami.",
  ),
  timings: {
    h2: l("পুজোর সময় আর অষ্টমী তিথি", "Puja muhurat and Ashtami tithi"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [
        { day: l("মঙ্গল ৩০ মার্চ", "Tue 30 Mar"), what: l("পুজোর শুভ সময়", "Puja muhurat"), when: l("ভোর ৫:৩২ থেকে সন্ধে ৫:৫১", "5:32 am to 5:51 pm"), source: SHEETALA(KOL, "Kolkata") },
        { day: l("২৯–৩০ মার্চ", "29–30 Mar"), what: l("অষ্টমী তিথি", "Ashtami tithi"), when: l("২৯ মার্চ বিকেল ৫:১০ থেকে ৩০ মার্চ সন্ধে ৭:৩৯", "29 Mar 5:10 pm to 30 Mar 7:39 pm"), source: SHEETALA(KOL, "Kolkata") },
      ],
      bd: [
        { day: l("মঙ্গল ৩০ মার্চ", "Tue 30 Mar"), what: l("পুজোর শুভ সময়", "Puja muhurat"), when: l("ভোর ৫:৫৩ থেকে সন্ধে ৬:১৩", "5:53 am to 6:13 pm"), source: SHEETALA(DHAKA, "Dhaka") },
        { day: l("২৯–৩০ মার্চ", "29–30 Mar"), what: l("অষ্টমী তিথি", "Ashtami tithi"), when: l("২৯ মার্চ বিকেল ৫:৪০ থেকে ৩০ মার্চ রাত ৮:০৯", "29 Mar 5:40 pm to 30 Mar 8:09 pm"), source: SHEETALA(DHAKA, "Dhaka") },
      ],
    },
    note: l(PANJIKA.bn, PANJIKA.en),
  },
  sections: [
    {
      id: "who",
      h2: l("শীতলা কে, আর বাংলায় তাঁর পুজো", "Who Shitala is, and her worship in Bengal"),
      paras: [
        {
          text: l(
            "শীতলা এক হিন্দু দেবী, মূলত উত্তর ভারতে পূজিত; তাঁকে পার্বতীর অবতার মানা হয় আর বসন্ত রোগের সঙ্গে তাঁর সরাসরি যোগ। নামের মানে ‘যিনি শীতল করেন’।",
            "Shitala is a Hindu goddess worshipped mainly in North India, regarded as an incarnation of Parvati and most directly linked with smallpox. Her name means “the one who cools”.",
          ),
          source: WIKI_SHITALA,
        },
        {
          text: l(
            "প্রধান বার্ষিক পুজো চৈত্র মাসে, হোলির পরে। অনেক পরিবার সেদিন উনুন জ্বালে না, আগের রাতে রান্না করা ঠান্ডা খাবার প্রসাদ হিসেবে খায়।",
            "The main yearly worship is in Chaitra, after Holi. Many families do not light their stoves on these days and eat cold food cooked the night before as prasada.",
          ),
          source: WIKI_SHITALA,
        },
        {
          text: l(
            "বাংলায় শীতলার পুজোর দীর্ঘ ঐতিহ্য আছে; বাংলা ভাষায় তাঁর সবচেয়ে পুরোনো কাব্য ১৬৯০ সালে সপ্তগ্রামে লেখা, আর মেদিনীপুরে অষ্টাদশ শতকের রচনা তাঁর প্রতিপত্তি বাড়ায়। বাংলায় তাঁর সঙ্গে ঘেঁটুদেবতা, রক্তবতী আর ওলাদেবীরও পুজো হয়।",
            "Bengal has a long tradition of Shitala worship: the earliest Bengali poems on her were composed in Saptagram in 1690, and 18th-century works from Midnapore added to her prominence. Ghentu-devata, Raktavati and Oladevi are often worshipped alongside her there.",
          ),
          source: WIKI_SHITALA,
        },
      ],
    },
    {
      id: "sources",
      h2: l("সূত্র", "Sources"),
      paras: [
        { text: l("২০২৭, কলকাতা।", "2027, Kolkata."), source: SHEETALA(KOL, "Kolkata") },
        { text: l("২০২৭, ঢাকা।", "2027, Dhaka."), source: SHEETALA(DHAKA, "Dhaka") },
      ],
    },
  ],
  faq: [
    { q: l("২০২৭-এ শীতলা অষ্টমী কবে?", "When is Sheetala Ashtami in 2027?"), a: l("মঙ্গলবার ৩০ মার্চ ২০২৭, কলকাতা আর ঢাকায় (দ্রিক পঞ্চাঙ্গ)।", "Tuesday 30 March 2027, in Kolkata and Dhaka (Drik Panchang).") },
    { q: l("শীতলা অষ্টমীর পুজোর সময় কখন, কলকাতায়?", "What is the Sheetala Ashtami puja time in Kolkata 2027?"), a: l("ভোর ৫:৩২ থেকে সন্ধে ৫:৫১; ঢাকায় ভোর ৫:৫৩ থেকে সন্ধে ৬:১৩।", "5:32 am to 5:51 pm; in Dhaka 5:53 am to 6:13 pm.") },
    { q: l("২০২৭-এ বাসোড়া কবে?", "When is Basoda in 2027?"), a: l("শীতলা অষ্টমীর দিনেই, মঙ্গলবার ৩০ মার্চ ২০২৭ (দ্রিক পঞ্চাঙ্গ)।", "On the same day as Sheetala Ashtami, Tuesday 30 March 2027 (Drik Panchang).") },
    { q: l("শীতলা অষ্টমীতে ঠান্ডা খাবার খায় কেন?", "Why is cold food eaten on Sheetala Ashtami?"), a: l("অনেক পরিবার আগের রাতে রান্না করা খাবার প্রসাদ হিসেবে খায়, কারণ গ্রীষ্ম আসছে বলে গরম খাবার এড়ানোর ধারণা আছে (উইকিপিডিয়া)।", "Many families eat food cooked the night before as prasada, based on the idea that hot food is best avoided as summer approaches (Wikipedia).") },
  ],
  events: [{ name: l("শীতলা অষ্টমী ২০২৭", "Sheetala Ashtami 2027"), start: "2027-03-30", place }],
  links: [CAL, { href: "/dol-purnima-2027", label: l("দোলপূর্ণিমা ২০২৭", "Dol Purnima 2027") }, { href: "/ram-navami-2027", label: l("রামনবমী ২০২৭", "Ram Navami 2027") }, { href: "/amavasya-2027", label: l("🌑 অমাবস্যা ২০২৭", "🌑 Amavasya 2027") }],
  lastChecked: "2026-11-02",
};

// ---------- Narasimha Jayanti ----------
const NARASIMHA = (g: string, city: string) => src("Narasimha Jayanti", "dashavatara/narasimha/narasimha-jayanti-date-time.html", g, city);
const WIKI_NARASIMHA = { title: "Wikipedia, Narasimha", url: "https://en.wikipedia.org/wiki/Narasimha" };

export const NARASIMHA_JAYANTI_2027: FestivalPage = {
  path: "/narasimha-jayanti-2027",
  title: l("নরসিংহ জয়ন্তী ২০২৭: তারিখ, সায়ংকালীন পুজোর সময়", "Narasimha Jayanti 2027: Date, Puja Time, Tithi"),
  description: l(
    "নরসিংহ জয়ন্তী ২০২৭ মঙ্গলবার ১৮ মে। কলকাতায় সায়ংকালের পুজো বিকেল ৩:৩২ থেকে সন্ধে ৬:১১, চতুর্দশী তিথি, ঢাকার সময়ও, সূত্রসহ।",
    "Narasimha Jayanti 2027 is Tuesday 18 May. Kolkata Sayankala puja 3:32 pm to 6:11 pm, Chaturdashi tithi, plus Dhaka times, sourced.",
  ),
  h1: l("নরসিংহ জয়ন্তী ২০২৭: কবে, কখন", "Narasimha Jayanti 2027: when and what time"),
  lead: l(
    "নরসিংহ জয়ন্তী ২০২৭-এ মঙ্গলবার ১৮ মে, কলকাতা আর ঢাকায়; দ্রিক পঞ্চাঙ্গে এটা বৈশাখ শুক্লা চতুর্দশী।",
    "Narasimha Jayanti in 2027 is Tuesday 18 May, in Kolkata and Dhaka; Drik Panchang lists it as Vaishakha, Shukla Chaturdashi.",
  ),
  timings: {
    h2: l("সায়ংকালের পুজো আর চতুর্দশী তিথি", "Sayankala puja and Chaturdashi tithi"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [
        { day: l("মঙ্গল ১৮ মে", "Tue 18 May"), what: l("সায়ংকালের পুজো", "Sayankala puja"), when: l("বিকেল ৩:৩২ থেকে সন্ধে ৬:১১", "3:32 pm to 6:11 pm"), source: NARASIMHA(KOL, "Kolkata") },
        { day: l("১৮–১৯ মে", "18–19 May"), what: l("চতুর্দশী তিথি", "Chaturdashi tithi"), when: l("১৮ মে বিকেল ৪:০৩ থেকে ১৯ মে বিকেল ৪:০২", "18 May 4:03 pm to 19 May 4:02 pm"), source: NARASIMHA(KOL, "Kolkata") },
      ],
      bd: [
        { day: l("মঙ্গল ১৮ মে", "Tue 18 May"), what: l("সায়ংকালের পুজো", "Sayankala puja"), when: l("বিকেল ৩:৫৫ থেকে সন্ধে ৬:৩৫", "3:55 pm to 6:35 pm"), source: NARASIMHA(DHAKA, "Dhaka") },
        { day: l("১৮–১৯ মে", "18–19 May"), what: l("চতুর্দশী তিথি", "Chaturdashi tithi"), when: l("১৮ মে বিকেল ৪:৩৩ থেকে ১৯ মে বিকেল ৪:৩২", "18 May 4:33 pm to 19 May 4:32 pm"), source: NARASIMHA(DHAKA, "Dhaka") },
      ],
    },
    note: l(PANJIKA.bn, PANJIKA.en),
  },
  sections: [
    {
      id: "story",
      h2: l("নরসিংহ আর প্রহ্লাদের কাহিনি", "Narasimha and the story of Prahlada"),
      paras: [
        {
          text: l(
            "নরসিংহ বিষ্ণুর নর-সিংহ রূপ, দশাবতারের চতুর্থ। অসুর রাজা হিরণ্যকশিপু ব্রহ্মার বরে প্রায় অজেয় হয়ে ওঠেন, আর নিজের ছেলে প্রহ্লাদ সহ বিষ্ণুভক্তদের ওপর অত্যাচার করেন।",
            "Narasimha is the man-lion form of Vishnu and the fourth of the ten avatars. The demon king Hiranyakashipu won a boon from Brahma that made him nearly invulnerable and persecuted Vishnu's devotees, including his own son Prahlada.",
          ),
          source: WIKI_NARASIMHA,
        },
        {
          text: l(
            "বরের শর্ত মানতে নরসিংহ স্তম্ভ ফুঁড়ে বেরিয়ে গোধূলিতে, দিনও নয় রাতও নয়, নখ দিয়ে হিরণ্যকশিপুকে বধ করেন। জয়ন্তী পড়ে বৈশাখ মাসের চতুর্দশীতে।",
            "To fit the boon, Narasimha emerged from a pillar and killed Hiranyakashipu with his claws at twilight, neither day nor night. The Jayanti falls on the 14th day of the month of Vaishakha.",
          ),
          source: WIKI_NARASIMHA,
        },
        { text: l("এই দিনের পুজো সায়ংকালে, তাই কলকাতা আর ঢাকার সময় ওপরের সারণিতে আলাদা দেওয়া।", "The puja is held in the evening (Sayankala), which is why Kolkata and Dhaka times are listed separately in the table above."), source: NARASIMHA(KOL, "Kolkata") },
      ],
    },
    {
      id: "sources",
      h2: l("সূত্র", "Sources"),
      paras: [
        { text: l("২০২৭, কলকাতা।", "2027, Kolkata."), source: NARASIMHA(KOL, "Kolkata") },
        { text: l("২০২৭, ঢাকা।", "2027, Dhaka."), source: NARASIMHA(DHAKA, "Dhaka") },
      ],
    },
  ],
  faq: [
    { q: l("২০২৭-এ নরসিংহ জয়ন্তী কবে?", "When is Narasimha Jayanti in 2027?"), a: l("মঙ্গলবার ১৮ মে ২০২৭, কলকাতা আর ঢাকায় (দ্রিক পঞ্চাঙ্গ)।", "Tuesday 18 May 2027, in Kolkata and Dhaka (Drik Panchang).") },
    { q: l("নরসিংহ জয়ন্তীর পুজোর সময় কখন?", "What is the Narasimha Jayanti 2027 puja time in Kolkata?"), a: l("সায়ংকালের পুজো বিকেল ৩:৩২ থেকে সন্ধে ৬:১১; ঢাকায় বিকেল ৩:৫৫ থেকে সন্ধে ৬:৩৫।", "Sayankala puja 3:32 pm to 6:11 pm; in Dhaka 3:55 pm to 6:35 pm.") },
    { q: l("নরসিংহ জয়ন্তীর চতুর্দশী তিথি কখন?", "When is Chaturdashi tithi on Narasimha Jayanti 2027?"), a: l("কলকাতায় ১৮ মে বিকেল ৪:০৩ থেকে ১৯ মে বিকেল ৪:০২; ঢাকায় ৪:৩৩ থেকে ৪:৩২।", "Kolkata: 18 May 4:03 pm to 19 May 4:02 pm. Dhaka: 4:33 pm to 4:32 pm.") },
  ],
  events: [{ name: l("নরসিংহ জয়ন্তী ২০২৭", "Narasimha Jayanti 2027"), start: "2027-05-18", place }],
  links: [CAL, { href: "/purnima-2027", label: l("🌕 পূর্ণিমা ২০২৭", "🌕 Purnima 2027") }, { href: "/buddha-purnima-2027", label: l("বুদ্ধ পূর্ণিমা ২০২৭", "Buddha Purnima 2027") }, { href: "/ekadashi-2027", label: l("🪔 একাদশী ২০২৭", "🪔 Ekadashi 2027") }],
  lastChecked: "2026-11-02",
};

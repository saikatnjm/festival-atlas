// Jagaddhatri Puja, Kartik Puja, Rash Purnima, Holi and Mahalaya 2027. Dates and times copied from Drik Panchang
// pages for Kolkata and Dhaka (fetched 2 Nov 2026): Jagaddhatri festival page, Sankranti list, Purnima list,
// Holika Dahan page, Amavasya Shraddha page, Bengali calendar. Chandannagar, Krishnanagar, Nabadwip, Shantipur
// and Katwa background reused from the 2026 pages (ETV Bharat, Incredible India, The Statesman, Wikipedia).
// Type imports only.

import type { L } from "@/lib/i18n";
import type { FestivalPage } from "./types";

const l = (bn: string, en: string): L => ({ bn, en });
const KOL = "1275004";
const DHAKA = "1185241";
const drik = (path: string, geo: string) => `https://www.drikpanchang.com/${path}?geoname-id=${geo}&year=2027`;

const JAGA = (g: string, city: string) => ({ title: `Drik Panchang, Jagaddhatri Puja 2027 (${city})`, url: drik("festivals/jagaddhatri-puja/jagaddhatri-puja-date-time.html", g) });
const SANKRANTI = (g: string, city: string) => ({ title: `Drik Panchang, Sankranti 2027 (${city})`, url: drik("sankranti/sankranti.html", g) });
const PURNIMA = (g: string, city: string) => ({ title: `Drik Panchang, Purnima dates 2027 (${city})`, url: `https://www.drikpanchang.com/vrats/purnimasidates.html?year=2027&geoname-id=${g}` });
const HOLIKA = (g: string, city: string) => ({ title: `Drik Panchang, Holika Dahan 2027 (${city})`, url: drik("festivals/holi/festivals-holika-dahan-timings.html", g) });
const HOLI_KOL = { title: "Drik Panchang, Rangwali Holi 2027 (Kolkata)", url: drik("festivals/holi/festivals-holi-rangwali.html", KOL) };
const SHRADDHA = (g: string, city: string) => ({ title: `Drik Panchang, Amavasya Shraddha 2027 (${city})`, url: drik("shraddha/tithi/amavasya-shraddha-date-time.html", g) });
const BENGALI_KOL = { title: "Drik Panchang, Bengali calendar 2027 (Kolkata)", url: drik("bengali/calendar/bengali-calendar.html", KOL) };
const DOL_PAGE_KOL = { title: "Drik Panchang, Purnima dates 2027 (Kolkata)", url: `https://www.drikpanchang.com/vrats/purnimasidates.html?year=2027&geoname-id=${KOL}` };
const ETV_2025 = { title: "ETV Bharat, Chandannagar set to worship tallest Jagadhatri idol (26 Oct 2025)", url: "https://www.etvbharat.com/en/state/bengals-chandannagar-set-to-worship-tallest-jagadhatri-idol-enn25102603013" };
const ETV_2024 = { title: "ETV Bharat, Chandannagar Jagaddhatri Puja lighting (9 Nov 2024)", url: "https://www.etvbharat.com/en/!state/west-bengal-chandannagar-jagaddhatri-puja-lighting-puja-pandal-enn24110901801" };
const WIKI_CHANDANNAGAR = { title: "Wikipedia, Chandannagar", url: "https://en.wikipedia.org/wiki/Chandannagar" };
const WIKI_JAGADDHATRI = { title: "Wikipedia, Jagaddhatri Puja", url: "https://en.wikipedia.org/wiki/Jagaddhatri_Puja" };
const WIKI_CGR_STATION = { title: "Wikipedia, Chandannagar railway station", url: "https://en.wikipedia.org/wiki/Chandannagar_railway_station" };
const WIKI_KNJ_STATION = { title: "Wikipedia, Krishnanagar City Junction railway station", url: "https://en.wikipedia.org/wiki/Krishnanagar_City_Junction_railway_station" };
const WIKI_KARTIKEYA = { title: "Wikipedia, Kartikeya", url: "https://en.wikipedia.org/wiki/Kartikeya" };
const STATESMAN = { title: "The Statesman, Excitement of Kartik duel grips Burdwan (copy on bengalinfo.com)", url: "https://bengalinfo.com/newsdetail.php?newsid=342351" };
const INCREDIBLE = { title: "Incredible India, Santipur and Nabadwip Raas Utsav", url: "https://www.incredibleindia.gov.in/en/festivals-and-events/west-bengal/santipur-and-nabadwip-raas-utsav" };
const WIKI_SHAKTA = { title: "Wikipedia, Shakta Rash", url: "https://en.wikipedia.org/wiki/Shakta_Rash" };
const WIKI_NABADWIP_STN = { title: "Wikipedia, Nabadwip Dham railway station", url: "https://en.wikipedia.org/wiki/Nabadwip_Dham_railway_station" };
const WIKI_SHANTIPUR_STN = { title: "Wikipedia, Shantipur Junction railway station", url: "https://en.wikipedia.org/wiki/Shantipur_Junction_railway_station" };
const WIKI_HOLI = { title: "Wikipedia, Holi", url: "https://en.wikipedia.org/wiki/Holi" };
const WIKI_MAHALAYA = { title: "Wikipedia, Mahalaya", url: "https://en.wikipedia.org/wiki/Mahalaya" };
const WIKI_DURGA = { title: "Wikipedia, Durga Puja", url: "https://en.wikipedia.org/wiki/Durga_Puja" };
const CAL = { href: "/calendar-2027", label: l("📅 পুজোর ক্যালেন্ডার ২০২৭", "📅 Festival calendar 2027") };

export const JAGADDHATRI_2027: FestivalPage = {
  path: "/jagaddhatri-puja-2027",
  title: l("জগদ্ধাত্রী পুজো ২০২৭: তারিখ, নবমী তিথি, চন্দননগর", "Jagaddhatri Puja 2027: Date, Navami Time, Chandannagar"),
  description: l(
    "জগদ্ধাত্রী পুজো ২০২৭ রবিবার ৭ নভেম্বর। নবমী তিথি কলকাতায় ৭ নভেম্বর ভোর ২:৪৯ থেকে ৮ নভেম্বর ভোর ৫:২৩। চন্দননগর আর কৃষ্ণনগরের পুজো, সূত্রসহ।",
    "Jagaddhatri Puja 2027 is Sun 7 Nov. Kolkata Navami tithi: 7 Nov 2:49 am to 8 Nov 5:23 am. Chandannagar and Krishnanagar pujas, Dhaka times, sourced.",
  ),
  h1: l("জগদ্ধাত্রী পুজো ২০২৭: কবে, কোথায়", "Jagaddhatri Puja 2027: when and where"),
  lead: l(
    "কার্তিক মাসের শুক্লা নবমীতে জগদ্ধাত্রী পুজো; ২০২৭-এ রবিবার ৭ নভেম্বর, কলকাতা আর ঢাকা দু’জায়গাতেই। সবচেয়ে বড় উৎসব চন্দননগর আর কৃষ্ণনগরে।",
    "Jagaddhatri Puja falls on the Navami of the bright fortnight of Kartik; in 2027 that is Sunday 7 November, in both Kolkata and Dhaka. The biggest celebrations are in Chandannagar and Krishnanagar.",
  ),
  timings: {
    h2: l("তারিখ আর নবমী তিথি", "Date and Navami tithi"),
    lead: l(
      "কলকাতার সময় IST, ঢাকার সময় BST। চন্দননগরের পুজো কয়েক দিন ধরে চলে; কমিটির সূচি মিলিয়ে নাও।",
      "Kolkata times are IST, Dhaka times BST. Chandannagar's pujas run over several days; check the committees' schedule.",
    ),
    rows: {
      wb: [
        { day: l("রবি ৭ নভেম্বর", "Sun 7 Nov"), what: l("জগদ্ধাত্রী পুজো", "Jagaddhatri Puja"), when: l("নবমীর দিন", "Navami day"), source: JAGA(KOL, "Kolkata") },
        { day: l("৭–৮ নভেম্বর", "7–8 Nov"), what: l("নবমী তিথি", "Navami tithi"), when: l("৭ নভেম্বর ভোর ২:৪৯ থেকে ৮ নভেম্বর ভোর ৫:২৩", "7 Nov 2:49 am to 8 Nov 5:23 am"), source: JAGA(KOL, "Kolkata") },
        { day: l("রবি ৭ নভেম্বর", "Sun 7 Nov"), what: l("জগদ্ধাত্রী পুজো (বাংলা ক্যালেন্ডার)", "Jagaddhatri Puja (Bengali calendar)"), when: l("কার্তিক, শুক্লা নবমী", "Kartik, Shukla Nabami"), source: BENGALI_KOL },
      ],
      bd: [
        { day: l("রবি ৭ নভেম্বর", "Sun 7 Nov"), what: l("জগদ্ধাত্রী পুজো", "Jagaddhatri Puja"), when: l("নবমীর দিন", "Navami day"), source: JAGA(DHAKA, "Dhaka") },
        { day: l("৭–৮ নভেম্বর", "7–8 Nov"), what: l("নবমী তিথি", "Navami tithi"), when: l("৭ নভেম্বর ভোর ৩:১৯ থেকে ৮ নভেম্বর ভোর ৫:৫৩", "7 Nov 3:19 am to 8 Nov 5:53 am"), source: JAGA(DHAKA, "Dhaka") },
      ],
    },
    note: l(
      "নবমী তিথি শুরু হয় রবিবার ভোররাতে আর শেষ হয় সোমবার ভোরে। কোন দিনের পুজো মানবে, তা বাড়ির পঞ্জিকা আর স্থানীয় কমিটির সঙ্গে মিলিয়ে নাও।",
      "The Navami tithi starts in the small hours of Sunday and ends in the early hours of Monday. Check your panjika and the local committee for the day they follow.",
    ),
  },
  sections: [
    {
      id: "chandannagar",
      h2: l("চন্দননগরের জগদ্ধাত্রী পুজো", "Chandannagar's Jagaddhatri Puja"),
      paras: [
        {
          text: l(
            "চন্দননগরের সর্বজনীন জগদ্ধাত্রী পুজো মোটামুটি ১৭৯০ সাল থেকে; এখানকার প্রতিমা কলকাতার দুর্গাপ্রতিমার চেয়ে অনেক উঁচু হয়। লক্ষ্মীগঞ্জের চাউলপট্টির পুজোকে প্রথম দিকের সর্বজনীন পুজোগুলোর একটি ধরা হয়।",
            "Chandannagar's community Jagaddhatri pujas go back to about 1790, and the idols are far taller than Kolkata's Durga idols. The Chaulpatty puja in Lakshmiganj is thought to be one of the earliest community pujas.",
          ),
          source: WIKI_CHANDANNAGAR,
        },
        {
          text: l(
            "২০২৫-এ কেন্দ্রীয় কমিটির হিসেবে ১৮০টা পুজো কমিটি ছিল; সবচেয়ে উঁচু প্রতিমা কানাইলাল পল্লীর, ৭৫ ফুট, তাদের ৫২তম বছরে। সব প্রতিমার বিসর্জন হয়েছিল একাদশীর দিন।",
            "In 2025 the Central Committee counted 180 puja committees; the tallest idol was Kanailal Pally's at 75 feet, in its 52nd year. All idols were immersed on Ekadashi.",
          ),
          source: ETV_2025,
        },
        {
          text: l(
            "আলোর শহর: বাগবাজারের কমিটিই প্রথম চন্দননগরে টুনি বাল্ব আনে, ১৯৮৮ সালে আসে এলইডি। ২০২৪-এ বিসর্জনের শোভাযাত্রা চলেছিল ১১ নভেম্বর সন্ধে থেকে ১২ নভেম্বর ভোর পর্যন্ত।",
            "The city of lights: Bagbazar's committee was the first to bring string bulbs to Chandannagar, and LEDs arrived in 1988. In 2024 the immersion procession ran from the evening of 11 November into the early hours of 12 November.",
          ),
          source: ETV_2024,
        },
        {
          text: l(
            "২০২৭-এর পুজোর সংখ্যা, শোভাযাত্রার দিন আর বিশেষ ট্রেনের খবর এখনও আসেনি। ওপরের তথ্য ২০২৫ আর ২০২৪ সালের।",
            "The 2027 committee count, procession date and any special trains are not out yet. The details above are from 2025 and 2024.",
          ),
        },
      ],
    },
    {
      id: "krishnanagar",
      h2: l("কৃষ্ণনগরের জগদ্ধাত্রী পুজো", "Krishnanagar's Jagaddhatri Puja"),
      paras: [
        {
          text: l(
            "প্রচলিত গল্পে নদিয়ার মহারাজা কৃষ্ণচন্দ্র এই পুজো শুরু করেন। কৃষ্ণনগরে সবচেয়ে জনপ্রিয় চাষাপাড়ার ‘বুড়িমা’, যার শুরু ১৭৭২ সালে বলে ধরা হয়; আছে ছোট মা (কাঁঠালপোতা বারোয়ারি), মেজো মা (কলেজ স্ট্রিট বারোয়ারি) আর মা জলেশ্বরী (মালোপাড়া বারোয়ারি)।",
            "The popular account credits Maharaja Krishnachandra of Nadia with starting the worship. Krishnanagar's most popular puja is Chashapara's 'Burima', said to date from 1772; others include Choto Maa (Kathalpota Barowari), Mejo Maa (College Street Barowari) and Maa Jaleswari (Malopara Barowari).",
          ),
          source: WIKI_JAGADDHATRI,
        },
      ],
    },
    {
      id: "travel",
      h2: l("কীভাবে যাবে, ভিড় সামলাবে", "Getting there and handling the crowd"),
      paras: [
        { text: l("চন্দননগর স্টেশন হাওড়া–ব্যান্ডেল শাখায়, হাওড়া থেকে ৩৩ কিমি।", "Chandannagar station is on the Howrah–Bandel stretch, 33 km from Howrah."), source: WIKI_CGR_STATION },
        { text: l("কৃষ্ণনগর সিটি জংশন রানাঘাট–কৃষ্ণনগর লাইনে, শিয়ালদা থেকে ১০০.২ কিমি।", "Krishnanagar City Junction is on the Ranaghat–Krishnanagar line, 100.2 km from Sealdah."), source: WIKI_KNJ_STATION },
      ],
      tips: [
        l("ফেরার শেষ লোকাল ট্রেনের সময় আগে দেখে নাও; রাতের দিকে প্ল্যাটফর্মে খুব ভিড় হয়।", "Check the last local train back before you set out; platforms get very crowded late at night."),
        l("বাচ্চা আর বয়স্কদের নিয়ে গেলে সন্ধের আগে ঘুরে নাও; দলের সবার সঙ্গে একটা দেখা করার জায়গা ঠিক করে রাখো।", "With children or elders, go before the evening rush, and fix a meeting point for the group."),
        l("ঠেলাঠেলি দেখলে দাঁড়িয়ে না থেকে সরে এসো; পুলিশ আর ভলান্টিয়ারদের কথা শোনো।", "If the crowd starts pushing, step out rather than wait, and follow police and volunteers."),
      ],
    },
  ],
  pandals: {
    puja: "jagaddhatri",
    h2: l("জগদ্ধাত্রী পুজোর প্যান্ডেল: চন্দননগর, কৃষ্ণনগর", "Jagaddhatri pujas: Chandannagar and Krishnanagar"),
    lead: l(
      "প্রতিটা পুজোর পাতায় সূত্র, ম্যাপ, ভিড়ের খবর আর পাসপোর্টের টিক। ২০২৭-এর তথ্য বেরোলে যোগ হবে।",
      "Each puja's page has its sources, a map pin, live crowd reports and a passport tick. 2027 details will be added as they come out.",
    ),
    map: l("🗺️ ম্যাপে জগদ্ধাত্রী পুজো", "🗺️ Jagaddhatri pujas on the map"),
  },
  faq: [
    { q: l("২০২৭-এ জগদ্ধাত্রী পুজো কবে?", "When is Jagaddhatri Puja in 2027?"), a: l("রবিবার ৭ নভেম্বর ২০২৭, কলকাতা আর ঢাকা দু’জায়গাতেই (দ্রিক পঞ্চাঙ্গ)।", "Sunday 7 November 2027, in both Kolkata and Dhaka (Drik Panchang).") },
    {
      q: l("জগদ্ধাত্রী পুজোর নবমী তিথি কখন?", "When is the Navami tithi for Jagaddhatri Puja 2027?"),
      a: l(
        "কলকাতায় ৭ নভেম্বর ভোর ২:৪৯ থেকে ৮ নভেম্বর ভোর ৫:২৩; ঢাকায় ৭ নভেম্বর ভোর ৩:১৯ থেকে ৮ নভেম্বর ভোর ৫:৫৩।",
        "Kolkata: 7 Nov 2:49 am to 8 Nov 5:23 am. Dhaka: 7 Nov 3:19 am to 8 Nov 5:53 am.",
      ),
    },
    { q: l("কলকাতা থেকে চন্দননগর কীভাবে যাব?", "How do I get to Chandannagar from Kolkata?"), a: l("হাওড়া থেকে ব্যান্ডেলগামী লোকাল ট্রেনে চন্দননগর স্টেশন, প্রায় ৩৩ কিমি।", "Take a Bandel-bound local from Howrah to Chandannagar station, about 33 km.") },
    { q: l("২০২৭-এ চন্দননগরের বিসর্জনের শোভাযাত্রা কবে?", "When is Chandannagar's immersion procession in 2027?"), a: l("এখনও ঘোষণা হয়নি। ২০২৫-এ সব প্রতিমার বিসর্জন হয়েছিল একাদশীর দিন; ২০২৪-এ শোভাযাত্রা চলেছিল সারারাত।", "Not announced yet. In 2025 all idols were immersed on Ekadashi; in 2024 the procession ran through the night.") },
  ],
  events: [
    { name: l("জগদ্ধাত্রী পুজো ২০২৭, চন্দননগর", "Jagaddhatri Puja 2027, Chandannagar"), start: "2027-11-07", place: { name: "Chandannagar", locality: "Chandannagar", region: "West Bengal", country: "IN" } },
    { name: l("জগদ্ধাত্রী পুজো ২০২৭, কৃষ্ণনগর", "Jagaddhatri Puja 2027, Krishnanagar"), start: "2027-11-07", place: { name: "Krishnanagar", locality: "Krishnanagar", region: "West Bengal", country: "IN" } },
  ],
  links: [
    { href: "/greetings/jagaddhatri", label: l("🏮 জগদ্ধাত্রী পুজোর শুভেচ্ছা কার্ড", "🏮 Jagaddhatri Puja greeting card"), primary: true },
    { href: "/jagaddhatri-puja-2026", label: l("জগদ্ধাত্রী পুজো ২০২৬", "Jagaddhatri Puja 2026") },
    { href: "/blog/krishnanagar-jagaddhatri-puja", label: l("📖 কৃষ্ণনগরের জগদ্ধাত্রী পুজো", "📖 Krishnanagar's Jagaddhatri Puja") },
    { href: "/blog/chandannagar-jagaddhatri-lights", label: l("📖 চন্দননগরের আলোর গল্প", "📖 Chandannagar's lights: the story") },
    CAL,
  ],
  lastChecked: "2026-11-02",
};

export const KARTIK_PUJA_2027: FestivalPage = {
  path: "/kartik-puja-2027",
  title: l("কার্তিক পুজো ২০২৭: তারিখ, কার্তিক সংক্রান্তি, কাটোয়া", "Kartik Puja 2027: Date, Kartik Sankranti & Katwa"),
  description: l(
    "কার্তিক পুজো ২০২৭ কার্তিক সংক্রান্তিতে। বৃশ্চিক সংক্রান্তি বুধবার ১৭ নভেম্বর ভোর ২:০২ (কলকাতা), ২:৩২ (ঢাকা)। কাটোয়ার কার্তিক লড়াই, সূত্রসহ।",
    "Kartik Puja 2027 follows Kartik Sankranti. Vrishchika Sankranti: Wed 17 Nov, 2:02 am Kolkata, 2:32 am Dhaka. Katwa's Kartik Larai, sourced.",
  ),
  h1: l("কার্তিক পুজো ২০২৭: কবে, কখন", "Kartik Puja 2027: when and what time"),
  lead: l(
    "বাংলায় কার্তিক পুজো হয় কার্তিক মাসের শেষ দিনে, সূর্যের বৃশ্চিক রাশিতে ঢোকার দিনে। দ্রিকের হিসেবে বৃশ্চিক সংক্রান্তি বুধবার ১৭ নভেম্বর ২০২৭ ভোর ২:০২ (কলকাতা)।",
    "In Bengal, Kartik Puja is held on the last day of the month of Kartik, when the Sun enters Vrishchika. Drik Panchang prints Vrishchika Sankranti at 2:02 am on Wednesday 17 November 2027 (Kolkata).",
  ),
  timings: {
    h2: l("বৃশ্চিক সংক্রান্তির সময়", "Vrishchika Sankranti time"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [
        { day: l("বুধ ১৭ নভেম্বর", "Wed 17 Nov"), what: l("বৃশ্চিক সংক্রান্তি", "Vrishchika Sankranti"), when: l("ভোর ২:০২", "2:02 am"), source: SANKRANTI(KOL, "Kolkata") },
        { day: l("বুধ ১৭ নভেম্বর", "Wed 17 Nov"), what: l("বৃশ্চিক সংক্রান্তি (বাংলা ক্যালেন্ডার)", "Vrishchika Sankranti (Bengali calendar)"), when: l("তুলা থেকে বৃশ্চিকে সূর্যের গমন", "Sun moves from Tula to Vrishchika"), source: BENGALI_KOL },
      ],
      bd: [
        { day: l("বুধ ১৭ নভেম্বর", "Wed 17 Nov"), what: l("বৃশ্চিক সংক্রান্তি", "Vrishchika Sankranti"), when: l("ভোর ২:৩২", "2:32 am"), source: SANKRANTI(DHAKA, "Dhaka") },
      ],
    },
    note: l(
      "কার্তিক পুজো চান্দ্র তিথিতে নয়, সংক্রান্তিতে। এবার সংক্রান্তি মাঝরাতের পরে পড়ছে, তাই দ্রিক আর বাংলার পঞ্জিকা (গুপ্তপ্রেস, বিশুদ্ধ সিদ্ধান্ত) পুজোর দিন আলাদা ধরতে পারে; কোনও সূত্র থেকে আমরা অন্য দিনটা পাইনি। দ্রিকের পাতায় কার্তিক পুজোর আলাদা সময় নেই। নিজের পঞ্জিকা মিলিয়ে নিও।",
      "Kartik Puja follows the Sankranti, not a lunar tithi. This year the Sankranti falls after midnight, so Drik and Bengali panjikas (Gupta Press, Bisuddha Siddhanta) may fix the puja day differently; we found no source giving another day. Drik's page gives no separate Kartik Puja time. Check your own panjika.",
    ),
  },
  sections: [
    {
      id: "day",
      h2: l("কোন দিন কার্তিক পুজো", "Which day is Kartik Puja"),
      paras: [
        {
          text: l(
            "দ্রিক পঞ্চাঙ্গের বাংলা ক্যালেন্ডারে বৃশ্চিক সংক্রান্তি বুধবার ১৭ নভেম্বর ২০২৭, কার্তিক ঠাকুরের পুজোর আলাদা কোনো সময় সেখানে নেই। সংক্রান্তি ভোর ২:০২-এ, তাই আগের সন্ধ্যা মঙ্গলবার ১৬ নভেম্বর।",
            "Drik Panchang's Bengali calendar lists Vrishchika Sankranti on Wednesday 17 November 2027, with no separate Kartik Puja time. The Sankranti is at 2:02 am, so the evening before is Tuesday 16 November.",
          ),
          source: BENGALI_KOL,
        },
      ],
    },
    {
      id: "kartikeya",
      h2: l("বাংলায় কার্তিক ঠাকুর", "Kartikeya in Bengal"),
      paras: [
        {
          text: l(
            "পূর্ব ভারতে কার্তিকের মাটির মূর্তি কার্তিক মাসের শেষ দিনে সদ্য বিয়ে হওয়া দম্পতির বাড়ির দরজায় বন্ধুরা রেখে আসে বলে লেখা আছে; পরদিন সন্ধেয় পুজো হয় আর খেলনা নিবেদন করা হয়। পশ্চিমবঙ্গে কার্তিককে সন্তানলাভের সঙ্গেও জড়ানো হয়।",
            "In East India, a clay model of the deity is placed before the door of a newlywed couple's house, usually by their friends, on the last day of Kartik; it is worshipped the next evening and offered toys. In West Bengal Kartikeya is also associated with childbirth.",
          ),
          source: WIKI_KARTIKEYA,
        },
      ],
    },
    {
      id: "katwa",
      h2: l("কাটোয়ার কার্তিক লড়াই", "Katwa's Kartik Larai"),
      paras: [
        {
          text: l(
            "কাটোয়ার কার্তিক পুজো কার্তিক লড়াই নামে বিখ্যাত। ইতিহাসবিদ স্বপন কুমার ঠাকুরের মতে অষ্টাদশ শতকে কাটোয়ার তাঁতিরা ছোট কার্তিক মূর্তি আর তিনকোনা বাঁশের ‘থাক’ চালু করেন; একেকটা থাকে ৩১টি পর্যন্ত মূর্তি থাকে। প্রায় ৩০০ বছর ধরে এই ধারা চলছে।",
            "Katwa's Kartik Puja is famous as Kartik Larai. Historian Swapan Kumar Thakur says weavers of 18th-century Katwa introduced small Kartik idols and triangular bamboo galleries called Thaka, each holding up to 31 idols; the tradition has run for nearly 300 years.",
          ),
          source: STATESMAN,
        },
      ],
      tips: [l("শোভাযাত্রার রাতে কাটোয়ায় ভিড় প্রচুর; ফেরার ট্রেন-বাসের সময় আগে দেখে নিও।", "Katwa is very crowded on procession nights; check your return train or bus beforehand.")],
    },
  ],
  faq: [
    { q: l("২০২৭-এ কার্তিক পুজো কবে?", "When is Kartik Puja in 2027?"), a: l("কার্তিক সংক্রান্তিতে। দ্রিকের হিসেবে সংক্রান্তি বুধবার ১৭ নভেম্বর ভোর ২:০২ (কলকাতা), তাই পুজোর সন্ধ্যা মঙ্গলবার ১৬ না বুধবার, নিজের পঞ্জিকা দেখে নিও।", "On Kartik Sankranti. Drik prints the Sankranti at 2:02 am on Wednesday 17 November (Kolkata), so check your panjika for whether the puja evening is Tuesday 16 or Wednesday 17.") },
    { q: l("কার্তিক সংক্রান্তি কখন, কলকাতায়?", "What time is Kartik Sankranti in Kolkata in 2027?"), a: l("১৭ নভেম্বর ভোর ২:০২ (দ্রিক পঞ্চাঙ্গ)।", "2:02 am on 17 November (Drik Panchang).") },
    { q: l("ঢাকায় বৃশ্চিক সংক্রান্তি কখন?", "What time is Vrishchika Sankranti in Dhaka in 2027?"), a: l("১৭ নভেম্বর ভোর ২:৩২ (দ্রিক পঞ্চাঙ্গ)।", "2:32 am on 17 November (Drik Panchang).") },
    { q: l("কাটোয়ার কার্তিক লড়াই কী?", "What is Katwa's Kartik Larai?"), a: l("কাটোয়ার বিখ্যাত কার্তিক পুজোর শোভাযাত্রা, যেখানে তাঁতিদের চালু করা ‘থাক’-এ সাজানো কার্তিক মূর্তি নিয়ে যাওয়া হয়; প্রায় ৩০০ বছরের ধারা (দ্য স্টেটসম্যান)।", "Katwa's famous Kartik Puja procession, with Kartik idols arranged on Thaka galleries introduced by weavers; a tradition of nearly 300 years (The Statesman).") },
  ],
  events: [{ name: l("কার্তিক পুজো ২০২৭", "Kartik Puja 2027"), start: "2027-11-16", end: "2027-11-17", place: { name: "Katwa", locality: "Katwa", region: "West Bengal", country: "IN" } }],
  links: [
    { href: "/kartik-puja-2026", label: l("কার্তিক পুজো ২০২৬", "Kartik Puja 2026"), primary: true },
    { href: "/jagaddhatri-puja-2027", label: l("জগদ্ধাত্রী পুজো ২০২৭", "Jagaddhatri Puja 2027") },
    { href: "/rash-purnima-2027", label: l("রাস পূর্ণিমা ২০২৭", "Rash Purnima 2027") },
    CAL,
  ],
  lastChecked: "2026-11-02",
};

export const RASH_2027: FestivalPage = {
  path: "/rash-purnima-2027",
  title: l("রাস পূর্ণিমা ২০২৭: নবদ্বীপ, শান্তিপুর, কোচবিহার রাস", "Rash Purnima 2027: Nabadwip, Shantipur, Cooch Behar"),
  description: l(
    "রাস পূর্ণিমা ২০২৭: কার্তিক পূর্ণিমা তিথি শনিবার ১৩ নভেম্বর সকাল ৯:৫৫ থেকে রবিবার ১৪ নভেম্বর সকাল ৮:৫৫ (কলকাতা)। নবদ্বীপ, শান্তিপুরের রাস, সূত্রসহ।",
    "Rash Purnima 2027: Kartika Purnima tithi runs Sat 13 Nov 9:55 am to Sun 14 Nov 8:55 am (Kolkata). Nabadwip and Shantipur Rash, Dhaka times, sourced.",
  ),
  h1: l("রাস পূর্ণিমা ২০২৭: কবে, কোথায়", "Rash Purnima 2027: when and where"),
  lead: l(
    "কার্তিক পূর্ণিমায় রাস। ২০২৭-এ পূর্ণিমা তিথি শনিবার ১৩ নভেম্বর সকাল ৯:৫৫ থেকে রবিবার ১৪ নভেম্বর সকাল ৮:৫৫ (কলকাতা); দ্রিক দুটো দিনই কার্তিক পূর্ণিমা হিসেবে দেখায়।",
    "Rash falls on Kartik Purnima. In 2027 the Purnima tithi runs from 9:55 am on Saturday 13 November to 8:55 am on Sunday 14 November (Kolkata); Drik lists both days as Kartika Purnima.",
  ),
  timings: {
    h2: l("তারিখ আর পূর্ণিমা তিথি", "Date and Purnima tithi"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [
        { day: l("শনি ১৩ নভেম্বর", "Sat 13 Nov"), what: l("কার্তিক পূর্ণিমা ব্রত", "Kartika Purnima Vrat"), when: l("১৩ নভেম্বর সকাল ৯:৫৫ থেকে ১৪ নভেম্বর সকাল ৮:৫৫", "13 Nov 9:55 am to 14 Nov 8:55 am"), source: PURNIMA(KOL, "Kolkata") },
        { day: l("রবি ১৪ নভেম্বর", "Sun 14 Nov"), what: l("কার্তিক পূর্ণিমা", "Kartika Purnima"), when: l("একই তিথি", "Same tithi"), source: PURNIMA(KOL, "Kolkata") },
      ],
      bd: [
        { day: l("শনি ১৩ নভেম্বর", "Sat 13 Nov"), what: l("কার্তিক পূর্ণিমা ব্রত", "Kartika Purnima Vrat"), when: l("১৩ নভেম্বর সকাল ১০:২৫ থেকে ১৪ নভেম্বর সকাল ৯:২৫", "13 Nov 10:25 am to 14 Nov 9:25 am"), source: PURNIMA(DHAKA, "Dhaka") },
        { day: l("রবি ১৪ নভেম্বর", "Sun 14 Nov"), what: l("কার্তিক পূর্ণিমা", "Kartika Purnima"), when: l("একই তিথি", "Same tithi"), source: PURNIMA(DHAKA, "Dhaka") },
      ],
    },
    note: l(
      "দ্রিকের তালিকা শনিবার ১৩ নভেম্বর (ব্রত) আর রবিবার ১৪ নভেম্বর (পূর্ণিমা) দুটোই দেখায়। রাসযাত্রার দিন আর নবদ্বীপ-শান্তিপুর উৎসবের ২০২৭-এর তারিখ আমরা এখনও কোনও সূত্রে পাইনি; নিজের পঞ্জিকা আর স্থানীয় কমিটির সূচি মিলিয়ে নিও।",
      "Drik's list shows both Saturday 13 November (vrat) and Sunday 14 November (Purnima). We have not yet found a source for the exact Rash days or the 2027 Nabadwip–Shantipur festival dates; check your panjika and the local committees.",
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
    { q: l("২০২৭-এ রাস পূর্ণিমা কবে?", "When is Rash Purnima in 2027?"), a: l("কার্তিক পূর্ণিমা তিথি শনিবার ১৩ নভেম্বর সকাল ৯:৫৫ থেকে রবিবার ১৪ নভেম্বর সকাল ৮:৫৫ (কলকাতা); দ্রিক দুটো দিনই দেখায়।", "The Kartika Purnima tithi runs from 9:55 am on Saturday 13 November to 8:55 am on Sunday 14 November (Kolkata); Drik lists both days.") },
    { q: l("রাস পূর্ণিমার তিথি কখন, ঢাকায়?", "When is the Purnima tithi for Rash 2027 in Dhaka?"), a: l("১৩ নভেম্বর সকাল ১০:২৫ থেকে ১৪ নভেম্বর সকাল ৯:২৫ (দ্রিক পঞ্চাঙ্গ)।", "13 Nov 10:25 am to 14 Nov 9:25 am (Drik Panchang).") },
    { q: l("শাক্ত রাস কী?", "What is Shakta Rash?"), a: l("নবদ্বীপের রাস, যেখানে কৃষ্ণের বদলে শক্তির (দুর্গা, কালী, লক্ষ্মী) বিশাল মাটির প্রতিমার পুজো হয়।", "Nabadwip's form of Rash, where giant clay idols of Shakti (Durga, Kali, Lakshmi) are worshipped.") },
    { q: l("কলকাতা থেকে নবদ্বীপ কীভাবে যাব?", "How do I get to Nabadwip from Kolkata?"), a: l("হাওড়া থেকে কাটোয়াগামী লোকাল ট্রেনে নবদ্বীপ ধাম, প্রায় ১০৩ কিমি।", "Take a Katwa-bound local from Howrah to Nabadwip Dham, about 103 km.") },
  ],
  events: [{ name: l("কার্তিক পূর্ণিমা (রাস) ২০২৭", "Kartika (Rash) Purnima 2027"), start: "2027-11-13", end: "2027-11-14", place: { name: "Nabadwip", locality: "Nabadwip", region: "West Bengal", country: "IN" } }],
  links: [
    { href: "/greetings/rash", label: l("🪷 রাস পূর্ণিমার শুভেচ্ছা", "🪷 Rash Purnima wishes"), primary: true },
    { href: "/rash-purnima-2026", label: l("রাস পূর্ণিমা ২০২৬", "Rash Purnima 2026") },
    { href: "/purnima-2027", label: l("🌕 পূর্ণিমা ২০২৭", "🌕 Purnima 2027") },
    CAL,
  ],
  lastChecked: "2026-11-02",
};

export const HOLI_2027: FestivalPage = {
  path: "/holi-2027",
  title: l("হোলি ২০২৭: হোলিকা দহনের সময়, রঙের হোলি কবে", "Holi 2027: Holika Dahan Muhurat & Date, Dol Purnima"),
  description: l(
    "হোলিকা দহন ২০২৭ রবিবার ২১ মার্চ, কলকাতায় সন্ধে ৬:২১ থেকে রাত ৮:১০। হোলি সোমবার ২২ মার্চ। ঢাকার সময়, দোলপূর্ণিমার সঙ্গে সম্পর্ক, সূত্রসহ।",
    "Holika Dahan 2027: Sun 21 Mar, Kolkata muhurat 6:21 pm to 8:10 pm. Holi is Mon 22 Mar, same day as Dol Purnima. Dhaka times and sources.",
  ),
  h1: l("হোলি ২০২৭: কবে, কখন", "Holi 2027: when and what time"),
  lead: l(
    "কলকাতার হিসেবে হোলিকা দহন রবিবার ২১ মার্চ ২০২৭, মুহূর্ত সন্ধে ৬:২১ থেকে রাত ৮:১০; রঙের হোলি সোমবার ২২ মার্চ। বাংলার দোলপূর্ণিমাও সেদিনই। ঢাকার দ্রিক-পাতা অন্য দিন দেখায়, নিচে দেখো।",
    "For Kolkata, Holika Dahan is Sunday 21 March 2027, muhurat 6:21 pm to 8:10 pm, and Rangwali Holi is Monday 22 March, the same day as Bengal's Dol Purnima. Drik's Dhaka page shows different days; see below.",
  ),
  timings: {
    h2: l("হোলিকা দহন, হোলি আর পূর্ণিমা তিথি", "Holika Dahan, Holi and Purnima tithi"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [
        { day: l("রবি ২১ মার্চ", "Sun 21 Mar"), what: l("হোলিকা দহন মুহূর্ত", "Holika Dahan muhurat"), when: l("সন্ধে ৬:২১ থেকে রাত ৮:১০", "6:21 pm to 8:10 pm"), source: HOLIKA(KOL, "Kolkata") },
        { day: l("সোম ২২ মার্চ", "Mon 22 Mar"), what: l("বিকল্প মুহূর্ত (হিন্দু মধ্যরাতের পর)", "Alternate muhurat (after Hindu midnight)"), when: l("ভোর ৫:১৪ থেকে ৫:৩৯", "5:14 am to 5:39 am"), source: HOLIKA(KOL, "Kolkata") },
        { day: l("সোম ২২ মার্চ", "Mon 22 Mar"), what: l("ভদ্রা পুচ্ছ আর মুখ (এড়াতে হবে)", "Bhadra Punchha and Mukha (avoid)"), when: l("ভোর ১:২৬ থেকে ২:৩১ আর ২:৩১ থেকে ৪:২০", "1:26 am to 2:31 am and 2:31 am to 4:20 am"), source: HOLIKA(KOL, "Kolkata") },
        { day: l("২১–২২ মার্চ", "21–22 Mar"), what: l("পূর্ণিমা তিথি", "Purnima tithi"), when: l("২১ মার্চ সন্ধে ৬:২১ থেকে ২২ মার্চ বিকেল ৪:১৩", "21 Mar 6:21 pm to 22 Mar 4:13 pm"), source: HOLIKA(KOL, "Kolkata") },
        { day: l("সোম ২২ মার্চ", "Mon 22 Mar"), what: l("রঙের হোলি (রাংওয়ালি)", "Rangwali Holi"), when: l("পুরো দিন", "All day"), source: HOLI_KOL },
        { day: l("সোম ২২ মার্চ", "Mon 22 Mar"), what: l("দোলপূর্ণিমা (বাংলা ক্যালেন্ডার)", "Dol Purnima (Bengali calendar)"), when: l("ফাল্গুন, শুক্লা পূর্ণিমা", "Falgun, Shukla Purnima"), source: BENGALI_KOL },
      ],
      bd: [
        { day: l("সোম ২২ মার্চ", "Mon 22 Mar"), what: l("হোলিকা দহন মুহূর্ত", "Holika Dahan muhurat"), when: l("সন্ধে ৬:১০ থেকে রাত ৮:৩২", "6:10 pm to 8:32 pm"), source: HOLIKA(DHAKA, "Dhaka") },
        { day: l("২১–২২ মার্চ", "21–22 Mar"), what: l("পূর্ণিমা তিথি", "Purnima tithi"), when: l("২১ মার্চ সন্ধে ৬:৫১ থেকে ২২ মার্চ বিকেল ৪:৪৩", "21 Mar 6:51 pm to 22 Mar 4:43 pm"), source: HOLIKA(DHAKA, "Dhaka") },
        { day: l("মঙ্গল ২৩ মার্চ", "Tue 23 Mar"), what: l("রঙের হোলি (রাংওয়ালি)", "Rangwali Holi"), when: l("পুরো দিন", "All day"), source: HOLIKA(DHAKA, "Dhaka") },
      ],
    },
    note: l(
      "দ্রিক ঢাকার জন্য হোলিকা দহন সোমবার ২২ মার্চ আর হোলি মঙ্গলবার ২৩ মার্চ দেখায়, অথচ সেখানেও পূর্ণিমা তিথি ২২ মার্চ বিকেল ৪:৪৩-এ শেষ; এটা দ্রিকের নিজস্ব নিয়মে ছাপা, আমরা বদলাইনি। আমাদের দোলযাত্রা পাতায় ঢাকার দোলপূর্ণিমা ২২ মার্চ। বাংলাদেশে কোন দিন মানা হবে, স্থানীয় ক্যালেন্ডার দেখে নিও। দ্রিকের হোলি পাতায় দোল শব্দটা নেই।",
      "For Dhaka, Drik prints Holika Dahan on Monday 22 March and Holi on Tuesday 23 March, even though its Purnima tithi there ends at 4:43 pm on 22 March; that is Drik's own rule and we have not changed it. Our Dol Purnima page gives Dhaka's Dol Purnima as 22 March. Check a local Bangladesh calendar for the day observed. Drik's Holi pages do not use the word Dol.",
    ),
  },
  sections: [
    {
      id: "dol",
      h2: l("দোলপূর্ণিমা আর হোলি: কলকাতায় একই দিন", "Dol Purnima and Holi: the same day in Kolkata"),
      paras: [
        {
          text: l(
            "দ্রিকের বাংলা ক্যালেন্ডারে দোলপূর্ণিমা সোমবার ২২ মার্চ ২০২৭ (ফাল্গুন, শুক্লা পূর্ণিমা); দ্রিকের কলকাতার হোলি পাতাতেও হোলি সোমবার ২২ মার্চ। তাই কলকাতার হিসেবে ২০২৭-এ দোল আর রঙের হোলি একই দিনে।",
            "Drik Panchang's Bengali calendar lists Dol Purnima on Monday 22 March 2027 (Falgun, Shukla Purnima), and its Kolkata Holi page also gives Holi on Monday 22 March. So by the Kolkata reckoning, Dol and the colour Holi fall on the same day in 2027.",
          ),
          source: BENGALI_KOL,
        },
        {
          text: l(
            "পূর্ণিমার আগের রাতটাকে বলে হোলিকা দহন বা ‘ছোটি হোলি’, যখন আগুন জ্বালিয়ে মানুষ ঘিরে দাঁড়ায়। বাংলায় উৎসবটা ‘দোল যাত্রা’ (দোলনার উৎসব) আর ‘বসন্ত উৎসব’ নামেও পরিচিত।",
            "The night before Holi is called Holika Dahan or 'Chhoti Holi', when people gather around a lit bonfire. In Bengal the festival is also known as Dol Jatra (swing festival) and Basanta Utsav (spring festival).",
          ),
          source: WIKI_HOLI,
        },
        { text: l("আমাদের দোলযাত্রা পাতায় তিথির সময় আর চৈতন্য মহাপ্রভুর জন্মতিথির তথ্য আছে।", "Our Dol Purnima page has the tithi times and Chaitanya Mahaprabhu's birth anniversary."), source: DOL_PAGE_KOL },
      ],
    },
    {
      id: "dahan",
      h2: l("হোলিকা দহনের নিয়ম", "How the Holika Dahan time is chosen"),
      paras: [
        {
          text: l(
            "দ্রিকের পাতা বলে, হোলিকা দহন হবে প্রদোষ আর মধ্যরাতের মধ্যে, ভদ্রা মুখ এড়িয়ে; আর হোলি পড়ে দহনের পরের দিন। কলকাতার জন্য ভদ্রা পুচ্ছ ভোর ১:২৬ থেকে ২:৩১ আর ভদ্রা মুখ ২:৩১ থেকে ৪:২০।",
            "Drik's page says Holika Dahan should fall between Pradosh and midnight, avoiding Bhadra Mukha, and that Holi is always the day after Holika Dahan. For Kolkata, Bhadra Punchha is 1:26 am to 2:31 am and Bhadra Mukha 2:31 am to 4:20 am.",
          ),
          source: HOLIKA(KOL, "Kolkata"),
        },
      ],
      tips: [l("খোলা জায়গায়, ছোটদের আগুন থেকে দূরে রেখে দহনের আয়োজন করো।", "Light the fire in an open space, and keep children well away from it.")],
    },
  ],
  faq: [
    { q: l("২০২৭-এ হোলি কবে?", "When is Holi in 2027?"), a: l("কলকাতার হিসেবে সোমবার ২২ মার্চ ২০২৭; ঢাকার দ্রিক-পাতায় মঙ্গলবার ২৩ মার্চ (দ্রিক পঞ্চাঙ্গ)।", "Monday 22 March 2027 for Kolkata; Drik's Dhaka page shows Tuesday 23 March (Drik Panchang).") },
    { q: l("হোলিকা দহনের শুভ সময় কলকাতায় কখন?", "What is the Holika Dahan muhurat in Kolkata in 2027?"), a: l("রবিবার ২১ মার্চ সন্ধে ৬:২১ থেকে রাত ৮:১০ (দ্রিক পঞ্চাঙ্গ)।", "Sunday 21 March, 6:21 pm to 8:10 pm (Drik Panchang).") },
    { q: l("ঢাকায় হোলিকা দহনের সময় কখন?", "What is the Holika Dahan time in Dhaka in 2027?"), a: l("দ্রিকের ঢাকার পাতায় সোমবার ২২ মার্চ সন্ধে ৬:১০ থেকে রাত ৮:৩২।", "Drik's Dhaka page gives Monday 22 March, 6:10 pm to 8:32 pm.") },
    { q: l("দোল আর হোলি কি একই দিন ২০২৭-এ?", "Are Dol and Holi on the same day in 2027?"), a: l("কলকাতার হিসেবে হ্যাঁ: দ্রিক দোলপূর্ণিমা আর হোলি দুটোই সোমবার ২২ মার্চ দেখায়।", "By the Kolkata reckoning, yes: Drik lists both Dol Purnima and Holi on Monday 22 March.") },
  ],
  events: [
    { name: l("হোলিকা দহন ২০২৭, কলকাতা", "Holika Dahan 2027, Kolkata"), start: "2027-03-21", place: { name: "Kolkata", locality: "Kolkata", region: "West Bengal", country: "IN" } },
    { name: l("হোলি ও দোলযাত্রা ২০২৭, কলকাতা", "Holi and Dol Purnima 2027, Kolkata"), start: "2027-03-22", place: { name: "Kolkata", locality: "Kolkata", region: "West Bengal", country: "IN" } },
    { name: l("হোলি ২০২৭, ঢাকা (দ্রিকের হিসেবে)", "Holi 2027, Dhaka (per Drik)"), start: "2027-03-23", place: { name: "Dhaka", locality: "Dhaka", country: "BD" } },
  ],
  links: [
    { href: "/dol-purnima-2027", label: l("দোলযাত্রা ২০২৭", "Dol Purnima 2027"), primary: true },
    { href: "/purnima-2027", label: l("🌕 পূর্ণিমা ২০২৭", "🌕 Purnima 2027") },
    { href: "/poila-boishakh-2027", label: l("পয়লা বৈশাখ ১৪৩৪", "Poila Boishakh 1434") },
    CAL,
  ],
  lastChecked: "2026-11-02",
};

export const MAHALAYA_2027: FestivalPage = {
  path: "/mahalaya-2027",
  title: l("মহালয়া ২০২৭: তারিখ, তর্পণের শুভ সময়, অমাবস্যা", "Mahalaya 2027: Date, Tarpan Time, Amavasya Tithi"),
  description: l(
    "মহালয়া ২০২৭ বুধবার ২৯ সেপ্টেম্বর। কলকাতায় অমাবস্যা সকাল ১০:৫৪ থেকে, কুতুপ মুহূর্ত ১১:০৩–১১:৫১। ঢাকার সময়, মহিষাসুরমর্দিনী, সূত্রসহ।",
    "Mahalaya 2027 is Wed 29 Sep. Kolkata Amavasya from 10:54 am, Kutup muhurat 11:03 am to 11:51 am. Dhaka times, Mahishasura Mardini, sourced.",
  ),
  h1: l("মহালয়া ২০২৭: কবে, কখন", "Mahalaya 2027: when and what time"),
  lead: l(
    "মহালয়া ২০২৭-এ বুধবার ২৯ সেপ্টেম্বর, ভাদ্র মাসের কৃষ্ণ অমাবস্যা; কলকাতা আর ঢাকা দু’জায়গাতেই। এই দিনই সর্বপিতৃ অমাবস্যার তর্পণ।",
    "Mahalaya 2027 is Wednesday 29 September, the Krishna Amavasya of Bhadro, in both Kolkata and Dhaka. It is also the day of Sarva Pitru Amavasya tarpan.",
  ),
  timings: {
    h2: l("অমাবস্যা তিথি আর তর্পণের মুহূর্ত", "Amavasya tithi and tarpan muhurat"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [
        { day: l("বুধ ২৯ সেপ্টেম্বর", "Wed 29 Sep"), what: l("মহালয়া", "Mahalaya"), when: l("ভাদ্র, কৃষ্ণ অমাবস্যা", "Bhadro, Krishna Amabasya"), source: BENGALI_KOL },
        { day: l("২৯–৩০ সেপ্টেম্বর", "29–30 Sep"), what: l("অমাবস্যা তিথি", "Amavasya tithi"), when: l("২৯ সেপ্টেম্বর সকাল ১০:৫৪ থেকে ৩০ সেপ্টেম্বর সকাল ৮:০৫", "29 Sep 10:54 am to 30 Sep 8:05 am"), source: SHRADDHA(KOL, "Kolkata") },
        { day: l("বুধ ২৯ সেপ্টেম্বর", "Wed 29 Sep"), what: l("কুতুপ মুহূর্ত", "Kutup muhurat"), when: l("সকাল ১১:০৩ থেকে ১১:৫১", "11:03 am to 11:51 am"), source: SHRADDHA(KOL, "Kolkata") },
        { day: l("বুধ ২৯ সেপ্টেম্বর", "Wed 29 Sep"), what: l("রোহিণ মুহূর্ত", "Rohina muhurat"), when: l("১১:৫১ থেকে দুপুর ১২:৩৯", "11:51 am to 12:39 pm"), source: SHRADDHA(KOL, "Kolkata") },
        { day: l("বুধ ২৯ সেপ্টেম্বর", "Wed 29 Sep"), what: l("অপরাহ্ন কাল", "Aparahna Kaal"), when: l("দুপুর ১২:৩৯ থেকে বিকেল ৩:০৩", "12:39 pm to 3:03 pm"), source: SHRADDHA(KOL, "Kolkata") },
      ],
      bd: [
        { day: l("২৯–৩০ সেপ্টেম্বর", "29–30 Sep"), what: l("অমাবস্যা তিথি", "Amavasya tithi"), when: l("২৯ সেপ্টেম্বর সকাল ১১:২৪ থেকে ৩০ সেপ্টেম্বর সকাল ৮:৩৫", "29 Sep 11:24 am to 30 Sep 8:35 am"), source: SHRADDHA(DHAKA, "Dhaka") },
        { day: l("বুধ ২৯ সেপ্টেম্বর", "Wed 29 Sep"), what: l("কুতুপ মুহূর্ত", "Kutup muhurat"), when: l("সকাল ১১:২৫ থেকে দুপুর ১২:১৩", "11:25 am to 12:13 pm"), source: SHRADDHA(DHAKA, "Dhaka") },
        { day: l("বুধ ২৯ সেপ্টেম্বর", "Wed 29 Sep"), what: l("রোহিণ মুহূর্ত", "Rohina muhurat"), when: l("দুপুর ১২:১৩ থেকে ১:০১", "12:13 pm to 1:01 pm"), source: SHRADDHA(DHAKA, "Dhaka") },
        { day: l("বুধ ২৯ সেপ্টেম্বর", "Wed 29 Sep"), what: l("অপরাহ্ন কাল", "Aparahna Kaal"), when: l("দুপুর ১:০১ থেকে বিকেল ৩:২৪", "1:01 pm to 3:24 pm"), source: SHRADDHA(DHAKA, "Dhaka") },
      ],
    },
    note: l(
      "এই সময়গুলো দ্রিকের অমাবস্যা শ্রাদ্ধ (সর্বপিতৃ) পাতা থেকে। ঢাকার জন্য দ্রিকের বাংলা ক্যালেন্ডার আমরা আলাদা করে দেখিনি। তর্পণের সময় বাড়ির পুরোহিত আর পঞ্জিকা মিলিয়ে নিও।",
      "These times are from Drik's Amavasya Shraddha (Sarva Pitru) page. We did not check Drik's Bengali calendar separately for Dhaka. Confirm the tarpan time with your family priest and panjika.",
    ),
  },
  sections: [
    {
      id: "meaning",
      h2: l("মহালয়া কী", "What Mahalaya is"),
      paras: [
        {
          text: l(
            "মহালয়া পিতৃপক্ষের শেষ দিন, সর্বপিতৃ অমাবস্যা বা মহালয়া অমাবস্যা। সব পূর্বপুরুষের জন্য এই দিনটা, মৃত্যুতিথি যে দিনেই হোক। বাংলায় সাধারণত দুর্গাপুজোর উৎসবের শুরুও এখান থেকে; বিশ্বাস, এই দিনে দেবী দুর্গা পৃথিবীতে নেমেছিলেন।",
            "Mahalaya is the last day of Pitri Paksha, the no-moon day known as Sarva Pitru Amavasya or Mahalaya Amavasya. It is intended for all ancestors, whatever the lunar day they died. In Bengal it usually marks the start of Durga Puja festivities; the goddess is believed to have descended to Earth on this day.",
          ),
          source: WIKI_MAHALAYA,
        },
        {
          text: l(
            "মহালয়ায় পিতৃপক্ষ শেষ হয়, শুরু হয় দেবীপক্ষ। কুমোররা প্রথা অনুযায়ী এই সময়ে প্রতিমার চোখ আঁকেন, যাকে বলে চক্ষুদান।",
            "Mahalaya marks the transition between the fortnight of ancestors (Pitru Paksha) and the fortnight of the goddess (Devi Paksha). Artisans traditionally perform Chokkhu Daan, the ritual painting of the eyes, around this period.",
          ),
          source: WIKI_DURGA,
        },
      ],
    },
    {
      id: "radio",
      h2: l("মহিষাসুরমর্দিনী", "Mahishasura Mardini"),
      paras: [
        {
          text: l(
            "বাঙালি এখন মহালয়া শুরু করে ভোর ৪টেয় বীরেন্দ্রকৃষ্ণ ভদ্রের মহিষাসুরমর্দিনী দিয়ে। কবে শুরু, কারা গড়েছেন, আর ১৯৭৬-এ কী হয়েছিল, আমাদের ব্লগে পড়ো।",
            "Bengalis now start their Mahalaya at 4:00 am with Mahishasuramardini by Birendra Krishna Bhadra. Read when it began, who made it and what happened in 1976 on our blog.",
          ),
          source: WIKI_DURGA,
        },
      ],
      tips: [l("ভোরে শুনতে চাইলে আগের রাতে রেডিও বা অ্যাপ ঠিক করে রেখো।", "To listen at dawn, set up your radio or app the night before.")],
    },
  ],
  faq: [
    { q: l("২০২৭-এ মহালয়া কবে?", "When is Mahalaya in 2027?"), a: l("বুধবার ২৯ সেপ্টেম্বর ২০২৭, ভাদ্র কৃষ্ণ অমাবস্যা (দ্রিক পঞ্চাঙ্গ)।", "Wednesday 29 September 2027, Bhadro Krishna Amavasya (Drik Panchang).") },
    { q: l("মহালয়ায় তর্পণের সময় কখন, কলকাতায়?", "What is the Mahalaya tarpan time in Kolkata in 2027?"), a: l("কুতুপ মুহূর্ত সকাল ১১:০৩ থেকে ১১:৫১, রোহিণ ১১:৫১ থেকে ১২:৩৯, অপরাহ্ন কাল ১২:৩৯ থেকে বিকেল ৩:০৩ (দ্রিক পঞ্চাঙ্গ)।", "Kutup muhurat 11:03 am to 11:51 am, Rohina 11:51 am to 12:39 pm, Aparahna Kaal 12:39 pm to 3:03 pm (Drik Panchang).") },
    { q: l("ঢাকায় মহালয়ার তর্পণের সময় কখন?", "What is the Mahalaya tarpan time in Dhaka in 2027?"), a: l("কুতুপ মুহূর্ত সকাল ১১:২৫ থেকে দুপুর ১২:১৩, রোহিণ ১২:১৩ থেকে ১:০১, অপরাহ্ন কাল ১:০১ থেকে বিকেল ৩:২৪।", "Kutup muhurat 11:25 am to 12:13 pm, Rohina 12:13 pm to 1:01 pm, Aparahna Kaal 1:01 pm to 3:24 pm.") },
    { q: l("মহালয়ার অমাবস্যা তিথি কখন?", "When is the Amavasya tithi for Mahalaya 2027?"), a: l("কলকাতায় ২৯ সেপ্টেম্বর সকাল ১০:৫৪ থেকে ৩০ সেপ্টেম্বর সকাল ৮:০৫; ঢাকায় ২৯ সেপ্টেম্বর সকাল ১১:২৪ থেকে ৩০ সেপ্টেম্বর সকাল ৮:৩৫।", "Kolkata: 29 Sep 10:54 am to 30 Sep 8:05 am. Dhaka: 29 Sep 11:24 am to 30 Sep 8:35 am.") },
  ],
  events: [
    { name: l("মহালয়া ২০২৭, কলকাতা", "Mahalaya 2027, Kolkata"), start: "2027-09-29", place: { name: "Kolkata", locality: "Kolkata", region: "West Bengal", country: "IN" } },
    { name: l("মহালয়া ২০২৭, ঢাকা", "Mahalaya 2027, Dhaka"), start: "2027-09-29", place: { name: "Dhaka", locality: "Dhaka", country: "BD" } },
  ],
  links: [
    { href: "/durga-puja-2027", label: l("🪔 দুর্গাপুজো ২০২৭", "🪔 Durga Puja 2027"), primary: true },
    { href: "/blog/mahishasura-mardini-radio", label: l("📻 মহিষাসুরমর্দিনী: ভোরের বেতার অনুষ্ঠান", "📻 Mahishasura Mardini: the dawn radio show") },
    { href: "/amavasya-2027", label: l("🌑 অমাবস্যা ২০২৭", "🌑 Amavasya 2027") },
    CAL,
  ],
  lastChecked: "2026-11-02",
};

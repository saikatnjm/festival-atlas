// Jagaddhatri Puja 2026 (/jagaddhatri-puja-2026). Every date and time is copied from a fetched page
// (checked 31 Oct 2026); 2026 Chandannagar arrangements were not out yet, so older years are labelled.

import type { L } from "@/lib/i18n";
import type { FestivalPage } from "./types";

const l = (bn: string, en: string): L => ({ bn, en });

const DRIK = (geo: string) => `https://www.drikpanchang.com/festivals/jagaddhatri-puja/jagaddhatri-puja-date-time.html?geoname-id=${geo}&year=2026`;
const DRIK_KOL = { title: "Drik Panchang, Jagaddhatri Puja 2026 (Kolkata)", url: DRIK("1275004") };
const DRIK_DHAKA = { title: "Drik Panchang, Jagaddhatri Puja 2026 (Dhaka)", url: DRIK("1185241") };
const ETV_2025 = { title: "ETV Bharat, Chandannagar set to worship tallest Jagadhatri idol (26 Oct 2025)", url: "https://www.etvbharat.com/en/state/bengals-chandannagar-set-to-worship-tallest-jagadhatri-idol-enn25102603013" };
const ETV_2024 = { title: "ETV Bharat, Chandannagar Jagaddhatri Puja lighting (9 Nov 2024)", url: "https://www.etvbharat.com/en/!state/west-bengal-chandannagar-jagaddhatri-puja-lighting-puja-pandal-enn24110901801" };
const WIKI_CHANDANNAGAR = { title: "Wikipedia, Chandannagar", url: "https://en.wikipedia.org/wiki/Chandannagar" };
const WIKI_JAGADDHATRI = { title: "Wikipedia, Jagaddhatri Puja", url: "https://en.wikipedia.org/wiki/Jagaddhatri_Puja" };
const WIKI_CGR_STATION = { title: "Wikipedia, Chandannagar railway station", url: "https://en.wikipedia.org/wiki/Chandannagar_railway_station" };
const WIKI_KNJ_STATION = { title: "Wikipedia, Krishnanagar City Junction railway station", url: "https://en.wikipedia.org/wiki/Krishnanagar_City_Junction_railway_station" };

export const JAGADDHATRI_2026: FestivalPage = {
  path: "/jagaddhatri-puja-2026",
  title: l("জগদ্ধাত্রী পুজো ২০২৬: তারিখ, নবমী তিথি, চন্দননগর", "Jagaddhatri Puja 2026: Date, Navami Time, Chandannagar"),
  description: l(
    "জগদ্ধাত্রী পুজো ২০২৬ বৃহস্পতিবার ১৯ নভেম্বর। নবমী তিথি কলকাতায় ১৮ নভেম্বর সকাল ৬:০৪ থেকে ১৯ নভেম্বর সকাল ৭:০৫। চন্দননগর আর কৃষ্ণনগরের পুজো, আলো, ট্রেন, সূত্রসহ।",
    "Jagaddhatri Puja 2026 is Thu 19 Nov. Kolkata Navami tithi: 18 Nov 6:04 am to 19 Nov 7:05 am. Chandannagar and Krishnanagar pujas, lights, trains.",
  ),
  h1: l("জগদ্ধাত্রী পুজো ২০২৬: কবে, কোথায়", "Jagaddhatri Puja 2026: when and where"),
  lead: l(
    "কার্তিক মাসের শুক্লা নবমীতে জগদ্ধাত্রী পুজো; ২০২৬-এ বৃহস্পতিবার ১৯ নভেম্বর, কলকাতা আর ঢাকা দু’জায়গাতেই। সবচেয়ে বড় উৎসব চন্দননগর আর কৃষ্ণনগরে।",
    "Jagaddhatri Puja falls on the Navami of the bright fortnight of Kartik; in 2026 that is Thursday 19 November, in both Kolkata and Dhaka. The biggest celebrations are in Chandannagar and Krishnanagar.",
  ),
  timings: {
    h2: l("তারিখ আর নবমী তিথি", "Date and Navami tithi"),
    lead: l(
      "কলকাতার সময় IST, ঢাকার সময় BST। চন্দননগরের পুজো কয়েক দিন ধরে চলে; সপ্তমী থেকে দশমীর দিন কমিটির সূচি মিলিয়ে নাও।",
      "Kolkata times are IST, Dhaka times BST. Chandannagar's pujas run over several days; check the committees' schedule for the Saptami to Dashami days.",
    ),
    rows: {
      wb: [
        { day: l("বৃহস্পতি ১৯ নভেম্বর", "Thu 19 Nov"), what: l("জগদ্ধাত্রী পুজো", "Jagaddhatri Puja"), when: l("নবমীর দিন", "Navami day"), source: DRIK_KOL },
        { day: l("১৮–১৯ নভেম্বর", "18–19 Nov"), what: l("নবমী তিথি", "Navami tithi"), when: l("১৮ নভেম্বর সকাল ৬:০৪ থেকে ১৯ নভেম্বর সকাল ৭:০৫", "18 Nov 6:04 am to 19 Nov 7:05 am"), source: DRIK_KOL },
      ],
      bd: [
        { day: l("বৃহস্পতি ১৯ নভেম্বর", "Thu 19 Nov"), what: l("জগদ্ধাত্রী পুজো", "Jagaddhatri Puja"), when: l("নবমীর দিন", "Navami day"), source: DRIK_DHAKA },
        { day: l("১৮–১৯ নভেম্বর", "18–19 Nov"), what: l("নবমী তিথি", "Navami tithi"), when: l("১৮ নভেম্বর সকাল ৬:৩৪ থেকে ১৯ নভেম্বর সকাল ৭:৩৫", "18 Nov 6:34 am to 19 Nov 7:35 am"), source: DRIK_DHAKA },
      ],
    },
    note: l(
      "দিল্লির সময়ে বানানো তালিকায় ১৮ নভেম্বর দেখায়; কলকাতা আর ঢাকার হিসেবে ১৯ নভেম্বর। বাড়ির পঞ্জিকার সঙ্গে মিলিয়ে নাও।",
      "Listings set to Delhi time show 18 November; for Kolkata and Dhaka it is 19 November. Check against the panjika at home.",
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
            "২০২৬-এর পুজোর সংখ্যা, শোভাযাত্রার দিন আর বিশেষ ট্রেন ৩১ অক্টোবর পর্যন্ত ঘোষণা হয়নি। বেরোলেই এখানে যোগ হবে।",
            "The 2026 committee count, procession date and any special trains had not been announced as of 31 October. They will be added here when they are.",
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
        {
          text: l("চন্দননগর স্টেশন হাওড়া–ব্যান্ডেল শাখায়, হাওড়া থেকে ৩৩ কিমি।", "Chandannagar station is on the Howrah–Bandel stretch, 33 km from Howrah."),
          source: WIKI_CGR_STATION,
        },
        {
          text: l("কৃষ্ণনগর সিটি জংশন রানাঘাট–কৃষ্ণনগর লাইনে, শিয়ালদা থেকে ১০০.২ কিমি।", "Krishnanagar City Junction is on the Ranaghat–Krishnanagar line, 100.2 km from Sealdah."),
          source: WIKI_KNJ_STATION,
        },
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
      "প্রতিটা পুজোর পাতায় সূত্র, ম্যাপ, ভিড়ের খবর আর পাসপোর্টের টিক। ২০২৬-এর তথ্য বেরোলে যোগ হবে।",
      "Each puja's page has its sources, a map pin, live crowd reports and a passport tick. 2026 details will be added as they come out.",
    ),
    map: l("🗺️ ম্যাপে জগদ্ধাত্রী পুজো", "🗺️ Jagaddhatri pujas on the map"),
  },
  faq: [
    {
      q: l("২০২৬-এ জগদ্ধাত্রী পুজো কবে?", "When is Jagaddhatri Puja in 2026?"),
      a: l("বৃহস্পতিবার ১৯ নভেম্বর ২০২৬, কলকাতা আর ঢাকা দু’জায়গাতেই (দ্রিক পঞ্চাঙ্গ)।", "Thursday 19 November 2026, in both Kolkata and Dhaka (Drik Panchang)."),
    },
    {
      q: l("জগদ্ধাত্রী পুজোর নবমী তিথি কখন?", "When is the Navami tithi for Jagaddhatri Puja 2026?"),
      a: l(
        "কলকাতায় ১৮ নভেম্বর সকাল ৬:০৪ থেকে ১৯ নভেম্বর সকাল ৭:০৫; ঢাকায় ১৮ নভেম্বর সকাল ৬:৩৪ থেকে ১৯ নভেম্বর সকাল ৭:৩৫।",
        "Kolkata: 18 Nov 6:04 am to 19 Nov 7:05 am. Dhaka: 18 Nov 6:34 am to 19 Nov 7:35 am.",
      ),
    },
    {
      q: l("কোনো ক্যালেন্ডারে ১৮ নভেম্বর লেখা কেন?", "Why do some calendars say 18 November?"),
      a: l(
        "দিল্লির সময়ে বানানো তালিকায় ১৮ নভেম্বর দেখায়। দ্রিক পঞ্চাঙ্গে কলকাতা আর ঢাকা বেছে নিলে পুজো ১৯ নভেম্বর।",
        "Listings set to Delhi time show 18 November. Drik Panchang set to Kolkata or Dhaka gives 19 November.",
      ),
    },
    {
      q: l("কলকাতা থেকে চন্দননগর কীভাবে যাব?", "How do I get to Chandannagar from Kolkata?"),
      a: l("হাওড়া থেকে ব্যান্ডেলগামী লোকাল ট্রেনে চন্দননগর স্টেশন, প্রায় ৩৩ কিমি।", "Take a Bandel-bound local from Howrah to Chandannagar station, about 33 km."),
    },
    {
      q: l("২০২৬-এ চন্দননগরের বিসর্জনের শোভাযাত্রা কবে?", "When is Chandannagar's immersion procession in 2026?"),
      a: l(
        "৩১ অক্টোবর পর্যন্ত ঘোষণা হয়নি। ২০২৫-এ সব প্রতিমার বিসর্জন হয়েছিল একাদশীর দিন; ২০২৪-এ শোভাযাত্রা চলেছিল সারারাত।",
        "Not announced as of 31 October. In 2025 all idols were immersed on Ekadashi; in 2024 the procession ran through the night.",
      ),
    },
  ],
  events: [
    { name: l("জগদ্ধাত্রী পুজো ২০২৬, চন্দননগর", "Jagaddhatri Puja 2026, Chandannagar"), start: "2026-11-19", place: { name: "Chandannagar", locality: "Chandannagar", region: "West Bengal", country: "IN" } },
    { name: l("জগদ্ধাত্রী পুজো ২০২৬, কৃষ্ণনগর", "Jagaddhatri Puja 2026, Krishnanagar"), start: "2026-11-19", place: { name: "Krishnanagar", locality: "Krishnanagar", region: "West Bengal", country: "IN" } },
  ],
  links: [
    { href: "/greetings?d=jagaddhatri", label: l("🏮 জগদ্ধাত্রী পুজোর শুভেচ্ছা কার্ড", "🏮 Jagaddhatri Puja greeting card"), primary: true },
    { href: "/kali-puja-2026", label: l("কালীপুজো ২০২৬", "Kali Puja 2026") },
    { href: "/durga-puja-2026", label: l("দুর্গাপুজো ২০২৬-এর তারিখ", "Durga Puja 2026 dates") },
    { href: "/calendar-2027", label: l("📅 পুজোর ক্যালেন্ডার ২০২৭", "📅 Festival calendar 2027") },
  ],
  lastChecked: "2026-10-31",
};

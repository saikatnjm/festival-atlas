// Bengali festival calendar 2027 (/calendar-2027): every row's date and tithi is copied from Drik Panchang's
// Bengali calendar for Kolkata (fetched and checked row by row, 31 Oct 2026); Raksha Bandhan from Drik's
// August festivals page. Bangladesh's Poila Boishakh from Wikipedia (fixed 14 April). Rows link to our
// own page where one exists.

import type { L } from "@/lib/i18n";
import type { FestivalPage } from "./types";

const l = (bn: string, en: string): L => ({ bn, en });

const BENGALI_KOL = { title: "Drik Panchang, Bengali calendar 2027 (Kolkata)", url: "https://www.drikpanchang.com/bengali/calendar/bengali-calendar.html?geoname-id=1275004&year=2027" };
const AUGUST_KOL = { title: "Drik Panchang, August 2027 festivals (Kolkata)", url: "https://www.drikpanchang.com/festivals/month/festivals-august.html?year=2027&geoname-id=1275004" };
const DURGA_KOL = { title: "Drik Panchang, Durga Puja 2027 calendar (Kolkata)", url: "https://www.drikpanchang.com/navratri/durga-puja/durga-puja-calendar.html?year=2027&geoname-id=1275004" };
const SANKRANTI_KOL = { title: "Drik Panchang, Makar Sankranti 2027 (Kolkata)", url: "https://www.drikpanchang.com/sankranti/makar-sankranti-date-time.html?geoname-id=1275004&year=2027" };
const WIKI_PB = { title: "Wikipedia, Pohela Boishakh", url: "https://en.wikipedia.org/wiki/Pohela_Boishakh" };

const row = (name: L, date: L, tithi: L, source = BENGALI_KOL, href?: string) => ({ cells: [name, date, tithi], source, ...(href ? { href } : {}) });

export const CALENDAR_2027: FestivalPage = {
  path: "/calendar-2027",
  title: l("পুজো-পার্বণের ক্যালেন্ডার ২০২৭: দুর্গাপুজো, কালীপুজো কবে", "Bengali Festival Calendar 2027: Durga Puja, Kali Puja Dates"),
  description: l(
    "২০২৭-এর বাঙালি পুজো-পার্বণের তারিখ: সরস্বতী পুজো ১১ ফেব্রুয়ারি, দোল ২২ মার্চ, দুর্গাপুজো ৫–১০ অক্টোবর, কালীপুজো ২৮ অক্টোবর, তিথিসহ, সূত্রসহ।",
    "Bengali festival dates for 2027: Saraswati Puja 11 Feb, Dol 22 Mar, Durga Puja 5–10 Oct, Kali Puja 28 Oct, Jagaddhatri 7 Nov, with tithis and sources.",
  ),
  h1: l("পুজো-পার্বণের ক্যালেন্ডার ২০২৭", "Bengali festival calendar 2027"),
  lead: l(
    "সরস্বতী পুজো থেকে জগদ্ধাত্রী পুজো: ২০২৭-এর প্রতিটা বড় বাঙালি উৎসবের দিন আর তিথি, পশ্চিমবঙ্গের পঞ্জিকা অনুযায়ী (দ্রিক পঞ্চাঙ্গ, কলকাতা)। যেগুলোর আলাদা পাতা আছে, নাম চাপলেই সময়সহ সব পাবে।",
    "From Saraswati Puja to Jagaddhatri Puja: the day and tithi of every major Bengali festival in 2027, by the West Bengal reckoning (Drik Panchang, Kolkata). Tap a name with its own page for the full timings.",
  ),
  tables: [
    {
      id: "festivals",
      h2: l("২০২৭-এর পুজো আর উৎসব", "Festivals in 2027"),
      caption: l("পশ্চিমবঙ্গ (কলকাতা) · ২০২৭", "West Bengal (Kolkata) · 2027"),
      columns: [l("উৎসব", "Festival"), l("তারিখ", "Date"), l("তিথি", "Tithi")],
      rows: [
        row(l("পৌষ সংক্রান্তি (মকর সংক্রান্তি)", "Poush Sankranti (Makar Sankranti)"), l("শুক্র ১৫ জানুয়ারি", "Fri 15 Jan"), l("সূর্যের মকরে প্রবেশ, ১৪ জানুয়ারি রাতে", "Sun enters Makara, night of 14 Jan"), SANKRANTI_KOL, "/poush-sankranti-2027"),
        row(l("সরস্বতী পুজো", "Saraswati Puja"), l("বৃহস্পতি ১১ ফেব্রুয়ারি", "Thu 11 Feb"), l("মাঘ শুক্লা পঞ্চমী", "Magh, Shukla Panchami"), BENGALI_KOL, "/saraswati-puja-2027"),
        row(l("শিবরাত্রি", "Maha Shivratri"), l("শনি ৬ মার্চ", "Sat 6 Mar"), l("মাঘ কৃষ্ণা চতুর্দশী", "Magh, Krishna Chaturdashi"), BENGALI_KOL, "/shivratri-2027"),
        row(l("দোলপূর্ণিমা", "Dol Purnima"), l("সোম ২২ মার্চ", "Mon 22 Mar"), l("ফাল্গুন শুক্লা পূর্ণিমা", "Falgun, Shukla Purnima"), BENGALI_KOL, "/dol-purnima-2027"),
        row(l("পয়লা বৈশাখ ১৪৩৪", "Poila Boishakh 1434"), l("বৃহস্পতি ১৫ এপ্রিল", "Thu 15 Apr"), l("বাংলা বছরের প্রথম দিন", "First day of the Bengali year"), BENGALI_KOL, "/poila-boishakh-2027"),
        row(l("রথযাত্রা", "Rath Yatra"), l("সোম ৫ জুলাই", "Mon 5 Jul"), l("আষাঢ় শুক্লা দ্বিতীয়া", "Asharh, Shukla Dwitiya"), BENGALI_KOL, "/rath-yatra-2027"),
        row(l("রাখিবন্ধন", "Raksha Bandhan"), l("মঙ্গল ১৭ আগস্ট", "Tue 17 Aug"), l("শ্রাবণ শুক্লা পূর্ণিমা", "Shravana, Shukla Purnima"), AUGUST_KOL),
        row(l("জন্মাষ্টমী", "Janmashtami"), l("বুধ ২৫ আগস্ট", "Wed 25 Aug"), l("শ্রাবণ কৃষ্ণা অষ্টমী", "Srabon, Krishna Ashtami"), BENGALI_KOL, "/janmashtami-2027"),
        row(l("মহালয়া", "Mahalaya"), l("বুধ ২৯ সেপ্টেম্বর", "Wed 29 Sep"), l("ভাদ্র কৃষ্ণা অমাবস্যা", "Bhadro, Krishna Amavasya"), BENGALI_KOL, "/durga-puja-2027"),
        row(l("দুর্গাপুজো: ষষ্ঠী (বোধন)", "Durga Puja: Shashthi (Bodhon)"), l("মঙ্গল ৫ অক্টোবর", "Tue 5 Oct"), l("আশ্বিন শুক্লা ষষ্ঠী", "Ashwin, Shukla Shashthi"), BENGALI_KOL, "/durga-puja-2027"),
        row(l("দুর্গাপুজো: সপ্তমী", "Durga Puja: Saptami"), l("বুধ ৬ অক্টোবর", "Wed 6 Oct"), l("আশ্বিন শুক্লা সপ্তমী", "Ashwin, Shukla Saptami"), BENGALI_KOL, "/durga-puja-2027"),
        row(l("দুর্গাপুজো: অষ্টমী", "Durga Puja: Ashtami"), l("বৃহস্পতি ৭ অক্টোবর", "Thu 7 Oct"), l("আশ্বিন শুক্লা অষ্টমী", "Ashwin, Shukla Ashtami"), BENGALI_KOL, "/durga-puja-2027"),
        row(l("দুর্গাপুজো: নবমী", "Durga Puja: Navami"), l("শনি ৯ অক্টোবর", "Sat 9 Oct"), l("আশ্বিন শুক্লা নবমী", "Ashwin, Shukla Navami"), BENGALI_KOL, "/durga-puja-2027"),
        row(l("বিজয়া দশমী", "Vijaya Dashami"), l("রবি ১০ অক্টোবর", "Sun 10 Oct"), l("আশ্বিন শুক্লা দশমী", "Ashwin, Shukla Dashami"), BENGALI_KOL, "/durga-puja-2027"),
        row(l("কোজাগরী লক্ষ্মীপুজো", "Kojagori Lakshmi Puja"), l("বৃহস্পতি ১৪ অক্টোবর", "Thu 14 Oct"), l("আশ্বিন শুক্লা পূর্ণিমা", "Ashwin, Shukla Purnima"), BENGALI_KOL, "/lakshmi-puja-2027"),
        row(l("কালীপুজো", "Kali Puja"), l("বৃহস্পতি ২৮ অক্টোবর", "Thu 28 Oct"), l("আশ্বিন কৃষ্ণা অমাবস্যা", "Ashwin, Krishna Amavasya")),
        row(l("দীপাবলি", "Diwali"), l("শুক্র ২৯ অক্টোবর", "Fri 29 Oct"), l("আশ্বিন কৃষ্ণা অমাবস্যা", "Ashwin, Krishna Amavasya")),
        row(l("ভাইফোঁটা", "Bhai Phota"), l("রবি ৩১ অক্টোবর", "Sun 31 Oct"), l("কার্তিক শুক্লা দ্বিতীয়া", "Kartik, Shukla Dwitiya")),
        row(l("জগদ্ধাত্রী পুজো", "Jagaddhatri Puja"), l("রবি ৭ নভেম্বর", "Sun 7 Nov"), l("কার্তিক শুক্লা নবমী", "Kartik, Shukla Navami")),
      ],
      note: l(
        "অষ্টমী (৭ অক্টোবর) আর নবমীর (৯ অক্টোবর) মাঝের শুক্রবার ৮ অক্টোবর দ্রিকের দুর্গাপুজো ক্যালেন্ডারে সন্ধিপুজো। একাদশীগুলো আলাদা পাতায়। বাংলাদেশে দিন আলাদা হতে পারে; পয়লা বৈশাখ সেখানে ১৪ এপ্রিল।",
        "Friday 8 October, between Ashtami (7 Oct) and Navami (9 Oct), is Sandhi Puja on Drik's Durga Puja calendar. Ekadashis have their own page. Days can differ in Bangladesh; Pohela Boishakh there is 14 April.",
      ),
    },
  ],
  sections: [
    {
      id: "notes",
      h2: l("কোথা থেকে এই তারিখ", "Where these dates come from"),
      paras: [
        { text: l("সব তারিখ আর তিথি দ্রিক পঞ্চাঙ্গের কলকাতার বাংলা ক্যালেন্ডার থেকে, এক এক করে মেলানো।", "Every date and tithi is from Drik Panchang's Bengali calendar for Kolkata, checked row by row."), source: BENGALI_KOL },
        { text: l("দুর্গাপুজোর দিনগুলো (সন্ধিপুজো ৮ অক্টোবর সহ) দ্রিকের দুর্গাপুজো ক্যালেন্ডারেও একই।", "The Durga Puja days (with Sandhi Puja on 8 October) match Drik's Durga Puja calendar too."), source: DURGA_KOL },
        { text: l("বাংলাদেশের পহেলা বৈশাখ সংশোধিত ক্যালেন্ডারে প্রতি বছর ১৪ এপ্রিল।", "Bangladesh's revised calendar fixes Pohela Boishakh on 14 April every year."), source: WIKI_PB },
        {
          text: l(
            "বিশুদ্ধ সিদ্ধান্ত আর গুপ্তপ্রেস পঞ্জিকায় কোনো কোনো দিন এক দিন আগে-পরে হতে পারে; ২০২৭-এর পঞ্জিকা বেরোলে মিলিয়ে এখানে জানাব।",
            "The Bishuddha Siddhanta and Gupta Press panjikas can differ by a day for some festivals; we'll compare once the 2027 panjikas are out.",
          ),
        },
      ],
    },
  ],
  faq: [
    {
      q: l("২০২৭-এ দুর্গাপুজো কবে?", "When is Durga Puja in 2027?"),
      a: l("ষষ্ঠী মঙ্গলবার ৫ অক্টোবর থেকে বিজয়া দশমী রবিবার ১০ অক্টোবর ২০২৭; মহালয়া বুধবার ২৯ সেপ্টেম্বর (দ্রিক পঞ্চাঙ্গ, কলকাতা)।", "From Shashthi on Tuesday 5 October to Vijaya Dashami on Sunday 10 October 2027; Mahalaya is Wednesday 29 September (Drik Panchang, Kolkata)."),
    },
    {
      q: l("২০২৭-এ কালীপুজো কবে?", "When is Kali Puja in 2027?"),
      a: l("বৃহস্পতিবার ২৮ অক্টোবর ২০২৭; দীপাবলি পরদিন ২৯ অক্টোবর, ভাইফোঁটা ৩১ অক্টোবর।", "Thursday 28 October 2027; Diwali is the next day, 29 October, and Bhai Phota is 31 October."),
    },
    {
      q: l("২০২৭-এ দোল কবে?", "When is Dol in 2027?"),
      a: l("দোলপূর্ণিমা সোমবার ২২ মার্চ ২০২৭।", "Dol Purnima is Monday 22 March 2027."),
    },
    {
      q: l("২০২৭-এ লক্ষ্মীপুজো কবে?", "When is Lakshmi Puja in 2027?"),
      a: l("কোজাগরী লক্ষ্মীপুজো বৃহস্পতিবার ১৪ অক্টোবর ২০২৭।", "Kojagori Lakshmi Puja is Thursday 14 October 2027."),
    },
    {
      q: l("২০২৭-এ রথযাত্রা আর জন্মাষ্টমী কবে?", "When are Rath Yatra and Janmashtami in 2027?"),
      a: l("রথযাত্রা সোমবার ৫ জুলাই, জন্মাষ্টমী বুধবার ২৫ আগস্ট ২০২৭।", "Rath Yatra is Monday 5 July and Janmashtami Wednesday 25 August 2027."),
    },
  ],
  events: [
    { name: l("দুর্গাপুজো ২০২৭, কলকাতা", "Durga Puja 2027, Kolkata"), start: "2027-10-05", end: "2027-10-10", place: { name: "Kolkata", locality: "Kolkata", region: "West Bengal", country: "IN" } },
    { name: l("কালীপুজো ২০২৭, কলকাতা", "Kali Puja 2027, Kolkata"), start: "2027-10-28", place: { name: "Kolkata", locality: "Kolkata", region: "West Bengal", country: "IN" } },
  ],
  links: [
    { href: "/durga-puja-2027", label: l("🥁 দুর্গাপুজো ২০২৭", "🥁 Durga Puja 2027"), primary: true },
    { href: "/ekadashi-2027", label: l("🪔 একাদশী ২০২৭", "🪔 Ekadashi 2027") },
    { href: "/bengali-calendar-1433", label: l("🗓️ বাংলা ক্যালেন্ডার ১৪৩৩", "🗓️ Bengali calendar 1433") },
    { href: "/greetings", label: l("শুভেচ্ছা কার্ড", "Greeting cards") },
    { href: "/durga-puja-2026", label: l("দুর্গাপুজো ২০২৬", "Durga Puja 2026") },
  ],
  lastChecked: "2026-10-31",
};

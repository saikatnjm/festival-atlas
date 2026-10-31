// Durga Puja 2027 (/durga-puja-2027). Days and rituals copied from Drik Panchang's Durga Puja calendar for
// Kolkata and for Dhaka (both fetched 31 Oct 2026; the two print the same six days); Mahalaya from Drik's
// Bengali calendar. Drik prints no clock times yet; they get added when panjika timings are published.

import type { L } from "@/lib/i18n";
import type { FestivalPage } from "./types";

const l = (bn: string, en: string): L => ({ bn, en });

const DURGA = (geo: string) => `https://www.drikpanchang.com/navratri/durga-puja/durga-puja-calendar.html?year=2027&geoname-id=${geo}`;
const DURGA_KOL = { title: "Drik Panchang, Durga Puja 2027 calendar (Kolkata)", url: DURGA("1275004") };
const DURGA_DHAKA = { title: "Drik Panchang, Durga Puja 2027 calendar (Dhaka)", url: DURGA("1185241") };
const BENGALI_KOL = { title: "Drik Panchang, Bengali calendar 2027 (Kolkata)", url: "https://www.drikpanchang.com/bengali/calendar/bengali-calendar.html?geoname-id=1275004&year=2027" };

type Src = { title: string; url: string };
const days = (src: Src) => [
  { day: l("বুধ ২৯ সেপ্টেম্বর", "Wed 29 Sep"), what: l("মহালয়া", "Mahalaya"), when: l("ভাদ্র কৃষ্ণা অমাবস্যা", "Bhadro, Krishna Amavasya"), source: BENGALI_KOL },
  { day: l("মঙ্গল ৫ অক্টোবর", "Tue 5 Oct"), what: l("ষষ্ঠী", "Shashthi"), when: l("বিল্বনিমন্ত্রণ, কল্পারম্ভ, অকালবোধন, আমন্ত্রণ ও অধিবাস", "Bilva Nimantran, Kalparambha, Akal Bodhon, Amantran and Adhivas"), source: src },
  { day: l("বুধ ৬ অক্টোবর", "Wed 6 Oct"), what: l("সপ্তমী", "Saptami"), when: l("নবপত্রিকা (কলাবউ) পুজো", "Kolabou (Navapatrika) Puja"), source: src },
  { day: l("বৃহস্পতি ৭ অক্টোবর", "Thu 7 Oct"), what: l("অষ্টমী", "Ashtami"), when: l("দুর্গাষ্টমী, কুমারী পুজো", "Durga Ashtami, Kumari Puja"), source: src },
  { day: l("শুক্র ৮ অক্টোবর", "Fri 8 Oct"), what: l("অষ্টমী → নবমী", "Ashtami → Navami"), when: l("সন্ধিপুজো; দ্রিক এদিনও মহানবমী লেখে", "Sandhi Puja; Drik also lists Maha Navami this day"), source: src },
  { day: l("শনি ৯ অক্টোবর", "Sat 9 Oct"), what: l("নবমী", "Navami"), when: l("মহানবমী, বলিদান, নবমী হোম", "Maha Navami, Durga Balidan, Navami Homa"), source: src },
  { day: l("রবি ১০ অক্টোবর", "Sun 10 Oct"), what: l("দশমী", "Dashami"), when: l("বিজয়া দশমী, সিঁদুর খেলা, বিসর্জন", "Vijaya Dashami, Sindoor Khela, Durga Visarjan"), source: src },
];

export const DURGA_2027: FestivalPage = {
  path: "/durga-puja-2027",
  title: l("দুর্গাপুজো ২০২৭ কবে: ষষ্ঠী থেকে দশমী, কলকাতা ও ঢাকা", "Durga Puja 2027 Date: Shashthi to Dashami, Kolkata & Dhaka"),
  description: l(
    "দুর্গাপুজো ২০২৭: মহালয়া ২৯ সেপ্টেম্বর, ষষ্ঠী মঙ্গলবার ৫ অক্টোবর, অষ্টমী ৭, সন্ধিপুজো ৮, নবমী ৯, বিজয়া দশমী রবিবার ১০ অক্টোবর। কলকাতা আর ঢাকা, সূত্রসহ।",
    "Durga Puja 2027: Mahalaya 29 Sep, Shashthi Tue 5 Oct, Ashtami 7 Oct, Sandhi Puja 8 Oct, Navami 9 Oct, Vijaya Dashami Sun 10 Oct. Kolkata and Dhaka, sourced.",
  ),
  h1: l("দুর্গাপুজো ২০২৭: কবে কোন দিন", "Durga Puja 2027: which day is which"),
  lead: l(
    "পরের দুর্গাপুজো ২০২৬-এর চেয়ে ১২ দিন আগে: ষষ্ঠী মঙ্গলবার ৫ অক্টোবর, বিজয়া দশমী রবিবার ১০ অক্টোবর ২০২৭। কলকাতা আর ঢাকায় দ্রিক পঞ্চাঙ্গ একই দিন দেখায়।",
    "The next Durga Puja comes 12 days earlier than 2026's: Shashthi on Tuesday 5 October, Vijaya Dashami on Sunday 10 October 2027. Drik Panchang gives the same days for Kolkata and Dhaka.",
  ),
  timings: {
    h2: l("দিন অনুযায়ী পুজো", "Day by day"),
    lead: l(
      "তিথির ঘড়ির সময় (সন্ধিপুজো, অঞ্জলি) এখনও বেরোয়নি; পঞ্জিকা প্রকাশ হলে যোগ হবে।",
      "Clock times (Sandhi Puja, anjali) aren't out yet; they'll be added when the panjikas publish them.",
    ),
    rows: { wb: days(DURGA_KOL), bd: days(DURGA_DHAKA) },
    note: l(
      "বাংলাদেশে ২০২৭-এর সরকারি ছুটির তালিকা ৩১ অক্টোবর ২০২৬ পর্যন্ত বেরোয়নি। বিশুদ্ধ সিদ্ধান্ত আর গুপ্তপ্রেস পঞ্জিকায় কোনো দিন আলাদা হলে এখানে দুটোই দেখাব।",
      "Bangladesh's 2027 government holiday list had not been published as of 31 October 2026. If the Bishuddha Siddhanta and Gupta Press panjikas differ on any day, both will be shown here.",
    ),
  },
  sections: [
    {
      id: "plan",
      h2: l("এখন থেকেই যা প্ল্যান করা যায়", "What you can plan now"),
      paras: [
        {
          text: l(
            "ছুটি: ষষ্ঠী মঙ্গলবার, দশমী রবিবার। ২০২৭-এর সরকারি ছুটির তালিকা এখনও বেরোয়নি, তাই অফিসে ছুটির আবেদনের আগে মিলিয়ে নিও। বাড়ি ফেরার টিকিট: পুজোর ট্রেন-প্লেনের টিকিট তাড়াতাড়ি ফুরোয়, বুকিং খুললেই দেখে নিও।",
            "Leave: Shashthi is a Tuesday and Dashami a Sunday. The 2027 government holiday lists aren't out yet, so check them before you apply for leave. Tickets home: Puja trains and flights sell out early, so look as soon as bookings open.",
          ),
        },
      ],
    },
  ],
  faq: [
    {
      q: l("২০২৭-এ দুর্গাপুজো কবে?", "When is Durga Puja in 2027?"),
      a: l("ষষ্ঠী মঙ্গলবার ৫ অক্টোবর থেকে বিজয়া দশমী রবিবার ১০ অক্টোবর ২০২৭, কলকাতা আর ঢাকা দু’জায়গাতেই (দ্রিক পঞ্চাঙ্গ)।", "From Shashthi on Tuesday 5 October to Vijaya Dashami on Sunday 10 October 2027, in both Kolkata and Dhaka (Drik Panchang)."),
    },
    {
      q: l("২০২৭-এ মহালয়া কবে?", "When is Mahalaya in 2027?"),
      a: l("বুধবার ২৯ সেপ্টেম্বর ২০২৭ (দ্রিক পঞ্চাঙ্গ, কলকাতা)।", "Wednesday 29 September 2027 (Drik Panchang, Kolkata)."),
    },
    {
      q: l("২০২৭-এ অষ্টমী আর নবমী কবে?", "When are Ashtami and Navami in 2027?"),
      a: l(
        "অষ্টমী বৃহস্পতিবার ৭ অক্টোবর, সন্ধিপুজো শুক্রবার ৮ অক্টোবর, নবমী শনিবার ৯ অক্টোবর। দ্রিকের দুর্গাপুজো ক্যালেন্ডার ৮ অক্টোবরেও ‘মহানবমী’ লেখে।",
        "Ashtami is Thursday 7 October, Sandhi Puja Friday 8 October and Navami Saturday 9 October. Drik's Durga Puja calendar also writes 'Maha Navami' against 8 October.",
      ),
    },
    {
      q: l("২০২৭-এ সিঁদুর খেলা আর বিসর্জন কবে?", "When are Sindoor Khela and immersion in 2027?"),
      a: l("রবিবার ১০ অক্টোবর, বিজয়া দশমীর দিন।", "Sunday 10 October, on Vijaya Dashami."),
    },
  ],
  events: [
    { name: l("দুর্গাপুজো ২০২৭, কলকাতা", "Durga Puja 2027, Kolkata"), start: "2027-10-05", end: "2027-10-10", place: { name: "Kolkata", locality: "Kolkata", region: "West Bengal", country: "IN" } },
    { name: l("দুর্গাপুজো ২০২৭, বাংলাদেশ", "Durga Puja 2027, Bangladesh"), start: "2027-10-05", end: "2027-10-10", place: { name: "Dhaka", locality: "Dhaka", country: "BD" } },
  ],
  links: [
    { href: "/calendar-2027", label: l("📅 পুজোর ক্যালেন্ডার ২০২৭", "📅 Festival calendar 2027"), primary: true },
    { href: "/durga-puja-2026", label: l("দুর্গাপুজো ২০২৬", "Durga Puja 2026") },
    { href: "/puja/kolkata", label: l("কলকাতার প্যান্ডেল", "Kolkata pandals") },
  ],
  lastChecked: "2026-10-31",
};

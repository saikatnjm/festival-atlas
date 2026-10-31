// Blog: Chhath Puja 2026 in Kolkata. Facts come from pages fetched on 31 Oct 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const DRIK_CAL = { title: "Drik Panchang, Bengali calendar 2026 (Kolkata)", url: "https://www.drikpanchang.com/bengali/calendar/bengali-calendar.html?geoname-id=1275004&year=2026" };
const DRIK_CHHATH = { title: "Drik Panchang, Chhath Puja 2026 date and time (Kolkata)", url: "https://www.drikpanchang.com/festivals/chhath-puja/chhath-puja-date-time.html?geoname-id=1275004&year=2026" };
const WIKI = { title: "Wikipedia, Chhath", url: "https://en.wikipedia.org/wiki/Chhath" };
const BLOOMS = { title: "IndiaBlooms, Kali Puja: Kolkata Police restrict firecracker use to two hours (17 Oct 2025)", url: "https://www.indiablooms.com/news/kali-puja-kolkata-police-restrict-firecracker-use-to-two-hours/details" };

export const CHHATH_PUJA_KOLKATA: Article = {
  slug: "chhath-puja-2026-kolkata",
  published: "2026-10-31",
  updated: "2026-10-31",
  title: l("ছট পুজো ২০২৬ কলকাতা: তারিখ, অর্ঘ্যের সময়", "Chhath Puja 2026 Kolkata: Date and Arghya Time"),
  description: l(
    "ছট পুজো ২০২৬ কলকাতায় ১৫ নভেম্বর রবিবার। সূর্যোদয়, সূর্যাস্তের সময়, চার দিনের নাম, সূর্য আর ছটি মাইয়া, আর ঘাটে যাওয়ার টিপস।",
    "Chhath Puja 2026 in Kolkata is Sunday 15 November. Sunrise and sunset times, the four days, Surya and Chhathi Maiya, and tips for visiting a ghat.",
  ),
  h1: l("ছট পুজো ২০২৬: কলকাতার তারিখ আর সময়", "Chhath Puja 2026: Kolkata date and timings"),
  lead: l(
    "কালীপুজো আর ভাইফোঁটার পর আসে ছট। কবে, কী নিয়ে এই পুজো, আর কলকাতার হিসেবে সূর্যোদয়-সূর্যাস্ত কখন।",
    "Chhath comes soon after Kali Puja and Bhai Phota. When it falls, what it is about, and the sunrise and sunset times for Kolkata.",
  ),
  icon: "🌅",
  body: [
    { kind: "h2", text: l("কবে ছট পুজো", "When is Chhath Puja") },
    {
      kind: "p",
      text: l(
        "দৃকপঞ্চাঙ্গের কলকাতার বাংলা ক্যালেন্ডার অনুযায়ী ছট পুজো ২০২৬ সালে ১৫ নভেম্বর, রবিবার। তিথি লেখা আছে কার্তিক, শুক্ল ষষ্ঠী।",
        "Drik Panchang's Bengali calendar for Kolkata lists Chhath Puja on 15 November 2026, Sunday, with the tithi given as Kartik, Shukla Shashthi.",
      ),
      source: DRIK_CAL,
    },
    {
      kind: "p",
      text: l(
        "দৃকপঞ্চাঙ্গের ছট পাতা অনুযায়ী কলকাতায় ছটের দিন সূর্যোদয় ভোর ৫টা ৪৯ আর সূর্যাস্ত বিকেল ৪টা ৫৩। ওই পাতায় ষষ্ঠী তিথি শুরু ১৪ নভেম্বর রাত ১১টা ২৩, শেষ ১৬ নভেম্বর রাত ২টো।",
        "Drik Panchang's Chhath page gives, for Kolkata, sunrise on Chhath day at 05:49 AM and sunset at 04:53 PM. It lists Shashthi tithi as beginning at 11:23 PM on 14 November 2026 and ending at 02:00 AM on 16 November 2026.",
      ),
      source: DRIK_CHHATH,
    },
    {
      kind: "tip",
      text: l(
        "ঘাটে যাওয়ার আগে নিজের এলাকার পুজো কমিটি বা পরিবারের কাছ থেকে অর্ঘ্যের সময় একবার মিলিয়ে নাও। পাঁজি আর স্থানীয় আয়োজনে কয়েক মিনিটের তফাত হতে পারে।",
        "Before heading to a ghat, confirm the arghya time with your local organisers or the family you are joining. Panchangs and local arrangements can differ by a few minutes.",
      ),
    },
    { kind: "h2", text: l("ছট কী, কার পুজো", "What Chhath is") },
    {
      kind: "p",
      text: l(
        "এই পুজো সূর্য দেবতার উদ্দেশে, সঙ্গে পূজিত হন সূর্যের বোন ছটি মাইয়া। উৎসবটি মূলত বিহার, ঝাড়খণ্ড আর পূর্ব উত্তরপ্রদেশে পালিত হয়, নেপালের কিছু প্রদেশেও হয়।",
        "The prayers are offered to the solar deity Surya, and Chhathi Maiya, described as Surya's sister, is worshipped too. It is celebrated mainly in Bihar, Jharkhand and eastern Uttar Pradesh, and in some provinces of Nepal.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "উৎসব চলে চার দিন, কার্তিক শুক্ল চতুর্থী থেকে সপ্তমী পর্যন্ত।",
        "The festival lasts four days, from Kartik Shukla Chaturthi to Kartik Shukla Saptami.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("চার দিনের নাম", "The four days") },
    {
      kind: "list",
      items: [
        l("প্রথম দিন: নাহায় খায়", "Day 1: Nahay Khay"),
        l("দ্বিতীয় দিন: খরনা (রসিয়াও-রোটি বা লোহান্ডা নামেও পরিচিত)। এই দিন ব্রতীরা জলও খান না।", "Day 2: Kharna (also called Rasiaav-roti or Lohanda). Devotees do not drink even water on this day."),
        l("তৃতীয় দিন: সন্ধ্যা অর্ঘ্য", "Day 3: Sandhya Arghya"),
        l("চতুর্থ দিন: ঊষা অর্ঘ্য", "Day 4: Usha Arghya"),
      ],
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "দৃকপঞ্চাঙ্গের কলকাতার পাতায় শুধু প্রধান ছটের দিনের তারিখ আর সূর্যোদয়-সূর্যাস্ত দেওয়া আছে। চার দিনের আলাদা তারিখ ওই পাতায় নেই, তাই এখানে লিখলাম না।",
        "Drik Panchang's Kolkata page gives only the main Chhath day with its sunrise and sunset. It does not list separate dates for each of the four days, so we have not guessed them.",
      ),
      source: DRIK_CHHATH,
    },
    { kind: "h2", text: l("কলকাতায় ঘাট আর আতশবাজি", "Ghats and crackers in Kolkata") },
    {
      kind: "p",
      text: l(
        "২০২৫ সালের কথা: কলকাতা পুলিশের বিজ্ঞপ্তিতে ২৮ অক্টোবর ছট পুজো উপলক্ষে সকাল ৬টা থেকে ৮টা পর্যন্ত বাজি পোড়ানোর অনুমতি ছিল। কালীপুজো আর দীপাবলিতে সময় ছিল রাত ৮টা থেকে ১০টা। এটা গত বছরের নিয়ম; ২০২৬-এর বিজ্ঞপ্তি আলাদা করে দেখে নাও।",
        "For 2025: the Kolkata Police notification allowed crackers between 6 am and 8 am on 28 October for Chhath Puja, and between 8 pm and 10 pm for Kali Puja and Diwali. That was last year's rule, so check the 2026 notification separately.",
      ),
      source: BLOOMS,
    },
    {
      kind: "tip",
      text: l(
        "কোন ঘাটে যাবে তা আগে ঠিক করো। আমরা কোনও ঘাটের নাম বা নিয়ম এখানে দিইনি, কারণ ২০২৬-এর তারিখসহ কোনও সূত্র পাইনি। পুজো কমিটি আর স্থানীয় প্রশাসনের ঘোষণা দেখে নাও। জলের ধারে ভিড় আর পিচ্ছিল জায়গায় বাচ্চা আর বয়স্কদের সঙ্গে সতর্ক থেকো।",
        "Decide which ghat you will go to in advance. We have not named any ghat or restriction because we found no dated 2026 source. Check announcements from organisers and local authorities. Be careful with children and elders on crowded, slippery steps by the water.",
      ),
    },
    {
      kind: "tip",
      text: l(
        "ঊষা অর্ঘ্যের জন্য অন্ধকার থাকতে পৌঁছতে হয়, তাই টর্চ, গরম জামা আর ফেরার ব্যবস্থা সঙ্গে রাখো। ব্রতীদের পুজোর জায়গা আটকে না দাঁড়িয়ে একটু দূরে থেকে দেখো।",
        "Arghya at sunrise means arriving while it is still dark, so carry a torch, a warm layer and a plan to get home. Watch from a little distance rather than blocking the space of those fasting.",
      ),
    },
  ],
  faq: [
    {
      q: l("২০২৬ সালে ছট পুজো কবে?", "When is Chhath Puja in 2026?"),
      a: l("কলকাতার দৃকপঞ্চাঙ্গ অনুযায়ী ১৫ নভেম্বর ২০২৬, রবিবার, তিথি কার্তিক শুক্ল ষষ্ঠী।", "15 November 2026, Sunday, per Drik Panchang for Kolkata, tithi Kartik Shukla Shashthi."),
    },
    {
      q: l("ছট পুজোর দিন কলকাতায় সূর্যোদয় কখন?", "What time is sunrise in Kolkata on Chhath Puja 2026?"),
      a: l("দৃকপঞ্চাঙ্গ অনুযায়ী ভোর ৫টা ৪৯।", "05:49 AM, according to Drik Panchang."),
    },
    {
      q: l("ছট পুজোর দিন কলকাতায় সূর্যাস্ত কখন?", "What time is sunset in Kolkata on Chhath Puja 2026?"),
      a: l("দৃকপঞ্চাঙ্গ অনুযায়ী বিকেল ৪টা ৫৩।", "04:53 PM, according to Drik Panchang."),
    },
    {
      q: l("ছট পুজো কয় দিনের, আর কোন কোন দিন কী?", "How many days is Chhath Puja and what are they called?"),
      a: l("চার দিনের: নাহায় খায়, খরনা, সন্ধ্যা অর্ঘ্য আর ঊষা অর্ঘ্য।", "Four days: Nahay Khay, Kharna, Sandhya Arghya and Usha Arghya."),
    },
    {
      q: l("ছট পুজোয় কার পুজো হয়?", "Who is worshipped in Chhath Puja?"),
      a: l("সূর্য দেবতা, আর সঙ্গে সূর্যের বোন ছটি মাইয়া।", "The sun god Surya, along with Chhathi Maiya, described as Surya's sister."),
    },
  ],
  related: [
    { href: "/kali-puja-2026", label: l("কালীপুজো ২০২৬", "Kali Puja 2026") },
    { href: "/rash-purnima-2026", label: l("রাস পূর্ণিমা ২০২৬", "Rash Purnima 2026") },
    { href: "/calendar-2027", label: l("২০২৭-এর ক্যালেন্ডার", "2027 calendar") },
  ],
  sources: [DRIK_CAL, DRIK_CHHATH, WIKI, BLOOMS],
};

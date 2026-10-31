// Blog: 50th International Kolkata Book Fair. Facts come from pages fetched on 31 Oct 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const UNI = { title: "UNI, Kolkata Book Fair 2027 dates and theme (7 Sep 2026)", url: "https://www.uniindia.com/east-india/event-wb-kolkata-book-fair/172097" };
const DRIK_SARASWATI = { title: "Drik Panchang, Vasant Panchami / Saraswati Puja 2027 (Kolkata)", url: "https://www.drikpanchang.com/festivals/vasant-panchami/vasant-panchami-puja-date-time.html?geoname-id=1275004&year=2027" };
const WIKI = { title: "Wikipedia, International Kolkata Book Fair", url: "https://en.wikipedia.org/wiki/International_Kolkata_Book_Fair" };

export const KOLKATA_BOOK_FAIR: Article = {
  slug: "kolkata-book-fair-2027",
  published: "2026-10-31",
  updated: "2026-10-31",
  title: l("কলকাতা বইমেলা ২০২৭: তারিখ, থিম, ইতিহাস", "Kolkata Book Fair 2027: Dates, Theme, History"),
  description: l(
    "৫০তম আন্তর্জাতিক কলকাতা বইমেলা ২২ জানুয়ারি থেকে ৩ ফেব্রুয়ারি ২০২৭। থিম, ইতিহাস, কোথায় হয়েছে আগে, আর ঘোরার টিপস।",
    "The 50th International Kolkata Book Fair runs 22 January to 3 February 2027. Theme, history, past venues and tips for visiting.",
  ),
  h1: l("কলকাতা বইমেলা ২০২৭: ৫০তম বছরের খবর", "Kolkata Book Fair 2027: the 50th year"),
  lead: l(
    "শীতের কলকাতার বড় আড্ডার জায়গা বইমেলা। ২০২৭-এর মেলা নিয়ে এ পর্যন্ত কী জানা গেছে, আর মেলার ইতিহাস।",
    "The book fair is a fixture of Kolkata's winter. What is known so far about the 2027 edition, and a little history.",
  ),
  icon: "📚",
  body: [
    { kind: "h2", text: l("২০২৭-এর বইমেলা", "The 2027 fair") },
    {
      kind: "p",
      text: l(
        "ইউএনআইয়ের ৭ সেপ্টেম্বর ২০২৬-এর খবর অনুযায়ী মেলা হওয়ার কথা ২২ জানুয়ারি থেকে ৩ ফেব্রুয়ারি ২০২৭। ২০২৭ সালে মেলা ৫০তম বছরে পা দেবে। মূল থিম বন্দে মাতরমের ১৫০ বছর।",
        "According to UNI's report of 7 September 2026, the fair is scheduled from 22 January to 3 February 2027. It will enter its 50th year in 2027, and the central theme is the 150th anniversary of Vande Mataram.",
      ),
      source: UNI,
    },
    {
      kind: "p",
      text: l(
        "থিম দেশ হিসেবে ইসরায়েলের নাম বিবেচনায় আছে, কিন্তু সেই প্রস্তাব এখনও কেন্দ্রীয় সরকারের চূড়ান্ত অনুমোদন পায়নি। মেলা দেখাশোনায় রাজ্য সরকার ২৪ জনের একটি কমিটি গড়েছে। ওই খবরে মেলার মাঠের নাম পাইনি, তাই আমরা তা লিখিনি।",
        "Israel is under consideration as theme country, but the proposal is yet to receive final government approval. The state government has formed a 24-member committee to oversee the fair. The report we read did not name the venue, so we have not stated one.",
      ),
      source: UNI,
    },
    { kind: "h2", text: l("বইমেলার ইতিহাস", "A short history") },
    {
      kind: "p",
      text: l(
        "পাবলিশার্স অ্যান্ড বুকসেলার্স গিল্ড, কলকাতা ১৯৭৬ সালে ছোট আকারে মেলাটি শুরু করে। এক সময় এটি ময়দানে, পার্ক স্ট্রিটের দিকে বসত, কারণ সেখানে সড়ক আর রেলের যোগাযোগ ভালো।",
        "The Kolkata Publishers and Booksellers Guild started the fair on a small scale in 1976. It was once held on the Maidan at the Park Street end, chosen for its better road and rail network.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "২০০৭ সালে ময়দানে মেলা করার বিরুদ্ধে আদালতের রায়ের পর মেলা সায়েন্স সিটির কাছে মিলন মেলায় সরে যায়। ২০১৮ থেকে মেলা বসছে সল্টলেকের করুণাময়ী মাঠে (সেন্ট্রাল পার্ক)।",
        "After a 2007 court ruling against holding fairs on the Maidan, it moved to Milan Mela near Science City. From 2018 it has been held at the Salt Lake Karunamoyee grounds (Central Park).",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "উইকিপিডিয়ার মতে দর্শকসংখ্যার হিসেবে এটি বিশ্বের বৃহত্তম বইমেলা, মোট ২০ লাখের বেশি দর্শক। প্রতি বছর একটি থিম দেশ থাকে; ২০২৫-এর থিম দেশ ছিল জার্মানি।",
        "Wikipedia calls it the world's largest book fair by attendance, with a total footfall of over 2 million. Each year has a focal theme country; for 2025 it was Germany.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("ঘোরার টিপস", "Visiting tips") },
    {
      kind: "tip",
      text: l(
        "ছুটির দিনে ভিড় বেশি হয়, তাই পারলে কাজের দিনে যাও। কী কী বই কিনবে তার একটা তালিকা ফোনে রাখো, আর আগে থেকে মেলার মাঠ আর প্রবেশের নিয়ম আয়োজকদের ঘোষণায় দেখে নাও।",
        "Holidays are crowded, so go on a weekday if you can. Keep a list of the books you want on your phone, and check the organisers' announcements for the venue and entry rules ahead of time.",
      ),
    },
    {
      kind: "tip",
      text: l(
        "বড় ব্যাগ নিয়ে ঘুরলে ক্লান্ত হবে, তাই হালকা ব্যাগ নাও আর জল সঙ্গে রাখো। পরিবারের সঙ্গে গেলে দেখা করার জায়গা ঠিক করে নাও।",
        "A heavy bag tires you out, so travel light and carry water. If you go with family, agree a meeting spot.",
      ),
    },
    {
      kind: "p",
      text: l(
        "বইমেলার পরেই আসছে সরস্বতী পুজো, ১১ ফেব্রুয়ারি ২০২৭। তার জন্য আমাদের আলাদা পাতা দেখে নিতে পারো।",
        "Saraswati Puja follows soon after, on 11 February 2027. See our dedicated page for it.",
      ),
      source: DRIK_SARASWATI,
    },
  ],
  faq: [
    {
      q: l("কলকাতা বইমেলা ২০২৭ কবে শুরু হবে?", "When does Kolkata Book Fair 2027 start?"),
      a: l("ইউএনআইয়ের খবর অনুযায়ী ২২ জানুয়ারি ২০২৭, শেষ ৩ ফেব্রুয়ারি।", "22 January 2027, ending 3 February, per UNI."),
    },
    {
      q: l("এটা কততম কলকাতা বইমেলা?", "Which edition is the 2027 Kolkata Book Fair?"),
      a: l("ইউএনআইয়ের খবর অনুযায়ী মেলা ২০২৭ সালে ৫০তম বছরে পা দেবে।", "UNI says the fair enters its 50th year in 2027."),
    },
    {
      q: l("কলকাতা বইমেলা ২০২৭-এর থিম কী?", "What is the theme of Kolkata Book Fair 2027?"),
      a: l("বন্দে মাতরমের ১৫০ বছর। থিম দেশ হিসেবে ইসরায়েল বিবেচনায়, চূড়ান্ত অনুমোদন বাকি।", "The 150th anniversary of Vande Mataram. Israel is under consideration as theme country, pending final approval."),
    },
    {
      q: l("কলকাতা বইমেলা কবে শুরু হয়েছিল?", "When did the Kolkata Book Fair begin?"),
      a: l("১৯৭৬ সালে, পাবলিশার্স অ্যান্ড বুকসেলার্স গিল্ড, কলকাতার হাতে।", "In 1976, by the Kolkata Publishers and Booksellers Guild."),
    },
    {
      q: l("কলকাতা বইমেলা এখন কোথায় হয়?", "Where is the Kolkata Book Fair held now?"),
      a: l("উইকিপিডিয়া অনুযায়ী ২০১৮ থেকে সল্টলেকের করুণাময়ী মাঠে (সেন্ট্রাল পার্ক)। ২০২৭-এর মাঠ আমরা নিশ্চিত করিনি।", "Per Wikipedia, since 2018 at the Salt Lake Karunamoyee grounds (Central Park). We have not confirmed the 2027 venue."),
    },
  ],
  related: [
    { href: "/saraswati-puja-2027", label: l("সরস্বতী পুজো ২০২৭", "Saraswati Puja 2027") },
    { href: "/calendar-2027", label: l("২০২৭-এর ক্যালেন্ডার", "2027 calendar") },
    { href: "/blog/poila-boishakh-traditions", label: l("পয়লা বৈশাখের রীতি", "Poila Boishakh traditions") },
  ],
  sources: [UNI, WIKI, DRIK_SARASWATI],
};

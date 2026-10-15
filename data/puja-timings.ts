// Durga Puja 2026 clock times (tithi, Sandhi Puja, anjali, bisarjan) for Kolkata and Bangladesh.
// Every row is copied from a fetched source (URL kept); nothing here is computed or guessed.
// Two panjika traditions give different times: Bishuddha Siddhanta (Belur Math, Drik Panchang)
// and the traditional Gupta Press / Beni Madhab Sil panjika. Both are shown where found.

import type { Region } from "./events/events";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

export interface TimingRow {
  day: L;
  what: L;
  when: L;
  source: { title: string; url: string };
  /** "secondary" marks a source that reports another body's schedule rather than publishing it. */
  grade?: "secondary";
}

const DRIK = (slug: string) => `https://www.drikpanchang.com/navratri/${slug}?geoname-id=1275004&year=2026`;
const BELUR = { title: "Belur Math, Durga Puja 2026 programme", url: "https://media.belurmath.org/sri-sri-durga-puja-2026-programme-details-25017/" };
const BENI = { title: "Beni Madhab Sil Panjika, Durga Puja 2026", url: "https://benimadhabsilpanjika.com/durga-puja-2026/" };
const PRATIDIN = { title: "Sangbad Pratidin, 21 Sep 2026", url: "https://m.sangbadpratidin.in/article/religion/durga-puja-2026-know-the-time-for-ashtami-anjali-and-sandhi-puja/pid/1350148" };
const PALO_BN = { title: "Prothom Alo, 14 Oct 2026", url: "https://www.prothomalo.com/bangladesh/capital/nu4dfnzsde" };
const PALO_EN = { title: "Prothom Alo English, 15 Oct 2026", url: "https://en.prothomalo.com/bangladesh/vjo6ctddnk" };
const GAZETTE = { title: "Prothom Alo English, holiday gazette", url: "https://en.prothomalo.com/bangladesh/government/6u29ikn0r3" };
const MANDIRBD = { title: "mandir.bd, Durga Puja 2026 schedule (secondary)", url: "https://mandir.bd/en/blog/durga-puja-2026-schedule-bangladesh" };

export const TIMINGS: Record<Region, TimingRow[]> = {
  wb: [
    {
      day: l("মহালয়া, শনি ১০ অক্টোবর", "Mahalaya, Sat 10 Oct"),
      what: l("অমাবস্যা", "Amavasya"),
      when: l("৯ অক্টোবর রাত ৮:৫৯ থেকে ১০ অক্টোবর রাত ৮:৩৪", "9 Oct 8:59 pm to 10 Oct 8:34 pm"),
      source: { title: "Beni Madhab Sil Panjika, Mahalaya 2026", url: "https://benimadhabsilpanjika.com/mahalaya-amavasya-2026-timing/" },
    },
    {
      day: l("ষষ্ঠী, শুক্র ১৬ – শনি ১৭ অক্টোবর", "Shashthi, Fri 16 – Sat 17 Oct"),
      what: l("ষষ্ঠী তিথি · বিল্ব নিমন্ত্রণ", "Shashthi tithi · Bilva Nimantran"),
      when: l("তিথি ১৬ অক্টোবর ভোর ৩:২৫ থেকে ১৭ অক্টোবর সকাল ৫:৫৪; বিল্ব নিমন্ত্রণ ১৬ অক্টোবর দুপুর ২:৫১–৫:১১", "Tithi 16 Oct 3:25 am to 17 Oct 5:54 am; Bilva Nimantran 16 Oct 2:51–5:11 pm"),
      source: { title: "Drik Panchang, Bilva Nimantran (Kolkata)", url: DRIK("durga-puja/bilva-nimantran-date-time.html") },
    },
    {
      day: l("ষষ্ঠী", "Shashthi"),
      what: l("বোধন · আমন্ত্রণ ও অধিবাস (বেলুড় মঠ)", "Bodhon · Amantran & Adhibas (Belur Math)"),
      when: l("বোধন ১৬ অক্টোবর সন্ধে ৬:১৫; আমন্ত্রণ-অধিবাস ১৭ অক্টোবর সন্ধে ৬:১৫", "Bodhon 16 Oct 6:15 pm; Amantran-Adhibas 17 Oct 6:15 pm"),
      source: BELUR,
    },
    {
      day: l("সপ্তমী, রবি ১৮ অক্টোবর", "Saptami, Sun 18 Oct"),
      what: l("সপ্তমী তিথি · পুজো শুরু", "Saptami tithi · puja begins"),
      when: l("তিথি ১৭ অক্টোবর সকাল ৫:৫৪ থেকে ১৮ অক্টোবর সকাল ৮:২৭ (দ্রিক); বেণীমাধব পঞ্জিকায় ১৮ অক্টোবর সকাল ৫:৫৩ পর্যন্ত। বেলুড় মঠে পুজো শুরু ভোর ৫:৪০", "Tithi 17 Oct 5:54 am to 18 Oct 8:27 am (Drik); Beni Madhab panjika: until 18 Oct 5:53 am. Belur Math puja from 5:40 am"),
      source: { title: "Drik Panchang, Navpatrika Puja (Kolkata)", url: DRIK("durga-puja/navpatrika-puja-date-time.html") },
    },
    {
      day: l("অষ্টমী, সোম ১৯ অক্টোবর", "Ashtami, Mon 19 Oct"),
      what: l("অষ্টমী তিথি · সন্ধিপুজো (বিশুদ্ধ সিদ্ধান্ত)", "Ashtami tithi · Sandhi Puja (Bishuddha Siddhanta)"),
      when: l("তিথি ১৮ অক্টোবর সকাল ৮:২৭ থেকে ১৯ অক্টোবর সকাল ১০:৫১; সন্ধিপুজো ১৯ অক্টোবর সকাল ১০:২৭–১১:১৫ (দ্রিক), বেলুড় মঠে ১০:২৮–১১:১৬; কুমারী পুজো সকাল ৯টা", "Tithi 18 Oct 8:27 am to 19 Oct 10:51 am; Sandhi Puja 19 Oct 10:27–11:15 am (Drik), Belur Math 10:28–11:16 am; Kumari Puja 9:00 am"),
      source: { title: "Drik Panchang, Sandhi Puja (Kolkata)", url: DRIK("shardiya-navratri-sandhipuja.html") },
    },
    {
      day: l("অষ্টমী, সোম ১৯ অক্টোবর", "Ashtami, Mon 19 Oct"),
      what: l("অঞ্জলি ও সন্ধিপুজো (গুপ্তপ্রেস বনাম বিশুদ্ধ সিদ্ধান্ত)", "Anjali & Sandhi Puja (Gupta Press vs Bishuddha Siddhanta)"),
      when: l("গুপ্তপ্রেস: সন্ধিপুজো সকাল ৭:২৫:১৫–৮:১৩:১৫, পুষ্পাঞ্জলি সকাল ৭:১৫-র আগে; বিশুদ্ধ সিদ্ধান্ত: সন্ধিপুজো ১০:২৮–১১:১৬, অঞ্জলি ৯:৩০–১০:১৫", "Gupta Press: Sandhi Puja 7:25:15–8:13:15 am, pushpanjali before 7:15 am; Bishuddha Siddhanta: Sandhi Puja 10:28–11:16 am, anjali 9:30–10:15 am"),
      source: PRATIDIN,
    },
    {
      day: l("নবমী, মঙ্গল ২০ অক্টোবর", "Navami, Tue 20 Oct"),
      what: l("নবমী তিথি", "Navami tithi"),
      when: l("১৯ অক্টোবর সকাল ১০:৫১ থেকে ২০ অক্টোবর দুপুর ১২:৫০ (দ্রিক); বেণীমাধব পঞ্জিকায় ২০ অক্টোবর সকাল ৯:৩১ পর্যন্ত", "19 Oct 10:51 am to 20 Oct 12:50 pm (Drik); Beni Madhab panjika: until 20 Oct 9:31 am"),
      source: { title: "Drik Panchang, Maha Navami, Bengal (Kolkata)", url: DRIK("durga-puja/bengal/maha-navami-date-time.html") },
    },
    {
      day: l("দশমী, বুধ ২১ অক্টোবর", "Dashami, Wed 21 Oct"),
      what: l("দশমী তিথি · দর্পণ বিসর্জন", "Dashami tithi · darpan bisarjan"),
      when: l("তিথি ২০ অক্টোবর দুপুর ১২:৫০ থেকে ২১ অক্টোবর দুপুর ২:১১ (দ্রিক); বেলুড় মঠে দশমী পুজো সকাল ৬:৩০, দর্পণ বিসর্জন সকাল ৮:৩০-র মধ্যে; বেণীমাধব পঞ্জিকায় বিসর্জন সকাল ৮:৩১-র মধ্যে", "Tithi 20 Oct 12:50 pm to 21 Oct 2:11 pm (Drik); Belur Math Dashami puja 6:30 am, darpan bisarjan within 8:30 am; Beni Madhab panjika: bisarjan within 8:31 am"),
      source: { title: "Drik Panchang, Durga Visarjan, Bengal (Kolkata)", url: DRIK("durga-puja/bengal/durga-visarjan-date-time.html") },
    },
    {
      day: l("ষষ্ঠী থেকে দশমী", "Shashthi to Dashami"),
      what: l("তিথি শেষ (বেণীমাধব শীল পঞ্জিকা)", "Tithi ends (Beni Madhab Sil panjika)"),
      when: l("ষষ্ঠী রাত ৩:৪৭ (১৬-র রাত); সপ্তমী ১৮ অক্টোবর সকাল ৫:৫৩; অষ্টমী ১৯ অক্টোবর সকাল ৭:৫০; নবমী ২০ অক্টোবর সকাল ৯:৩১; দশমী ২১ অক্টোবর সকাল ১০:৪৭", "Shashthi 3:47 at night (night of the 16th); Saptami 18 Oct 5:53 am; Ashtami 19 Oct 7:50 am; Navami 20 Oct 9:31 am; Dashami 21 Oct 10:47 am"),
      source: BENI,
    },
  ],
  bd: [
    {
      day: l("ষষ্ঠী থেকে দশমী", "Shashthi to Dashami"),
      what: l("দিনগুলো", "The days"),
      when: l("ষষ্ঠী ১৬, মহাসপ্তমী ১৭ ও ১৮, মহাষ্টমী ১৯, মহানবমী ২০, বিজয়া দশমী ২১ অক্টোবর", "Shashthi 16, Maha Saptami 17 and 18, Maha Ashtami 19, Mahanabami 20, Bijoya Dashami 21 Oct"),
      source: PALO_BN,
    },
    {
      day: l("বোধন, বৃহস্পতি ১৫ অক্টোবর", "Bodhon, Thu 15 Oct"),
      what: l("বোধন · অধিবাস", "Bodhon · adhibas"),
      when: l("বোধন বৃহস্পতিবার ১৫ অক্টোবর (প্রথম আলো); ঢাকেশ্বরী মন্দিরে বোধন ১৫-র সন্ধেয়, অধিবাস ১৬-র সন্ধেয় (mandir.bd)", "Bodhon on Thursday 15 Oct (Prothom Alo); Dhakeshwari temple: bodhon evening of the 15th, adhibas evening of the 16th (mandir.bd)"),
      source: PALO_EN,
    },
    {
      day: l("অষ্টমী, সোম ১৯ অক্টোবর", "Ashtami, Mon 19 Oct"),
      what: l("সন্ধিপুজো", "Sandhi Puja"),
      when: l("বিশুদ্ধ সিদ্ধান্ত মতে সকাল ১০:৫৮–১১:৪৬; গুপ্তপ্রেস মতে সকাল ৭:৫৫–৮:৪৩", "Bishuddha Siddhanta: 10:58–11:46 am; Gupta Press: 7:55–8:43 am"),
      source: MANDIRBD,
      grade: "secondary",
    },
    {
      day: l("নবমী ২০ ও দশমী ২১ অক্টোবর", "Navami 20 and Dashami 21 Oct"),
      what: l("নবমী পুজো · দশমী পুজো ও দর্পণ বিসর্জন", "Navami puja · Dashami puja and darpan bisarjan"),
      when: l("গুপ্তপ্রেস: দুটোই সকাল ৯:৫৭-র মধ্যে; বিশুদ্ধ সিদ্ধান্ত: নবমী দুপুর ১:২০-র মধ্যে, দর্পণ বিসর্জন দুপুর ২:৪১-র মধ্যে; ঢাকেশ্বরীতে দেবীর বরণ ২১ অক্টোবর সকাল ১১:৩০", "Gupta Press: both by 9:57 am; Bishuddha Siddhanta: Navami by 1:20 pm, darpan bisarjan by 2:41 pm; Dhakeshwari: Devi's boron 21 Oct 11:30 am"),
      source: MANDIRBD,
      grade: "secondary",
    },
    {
      day: l("দশমী, বুধ ২১ অক্টোবর", "Dashami, Wed 21 Oct"),
      what: l("ঢাকায় বিজয়া শোভাযাত্রা ও বিসর্জন", "Dhaka Bijoya procession and immersion"),
      when: l("শোভাযাত্রা বিকেল ৩টে, তারপর প্রতিমা বিসর্জন", "Procession at 3 pm, then idol immersion"),
      source: PALO_EN,
    },
    {
      day: l("ছুটি", "Holidays"),
      what: l("সরকারি ছুটি (গেজেট ৭ অক্টোবর)", "Public holidays (gazette, 7 Oct)"),
      when: l("২০–২২ অক্টোবর (২০ ও ২২ নির্বাহী আদেশে, ২১ সাধারণ ছুটি); শনিবার ১৭ অক্টোবর অফিস খোলা", "20–22 Oct (20 and 22 by executive order, 21 a public holiday); Saturday 17 Oct is a working day"),
      source: GAZETTE,
    },
  ],
};

export const TIMINGS_TEXT = {
  h2: l("পুজোর সময়: তিথি, সন্ধিপুজো, অঞ্জলি, বিসর্জন", "Puja timings: tithi, Sandhi Puja, anjali, bisarjan"),
  lead: l(
    "কলকাতার সময় IST, বাংলাদেশের সময় BST। দুই ধারার পঞ্জিকায় সময় আলাদা: বিশুদ্ধ সিদ্ধান্ত (বেলুড় মঠ, দ্রিক পঞ্চাঙ্গ) আর গুপ্তপ্রেস/বেণীমাধব শীল। তোমার পাড়ার পুজো কোন পঞ্জিকা মানে, কমিটিকে জিজ্ঞেস করো।",
    "Kolkata times are IST, Bangladesh times BST. Two panjika traditions differ: Bishuddha Siddhanta (Belur Math, Drik Panchang) and Gupta Press / Beni Madhab Sil. Ask your para committee which one your puja follows.",
  ),
  colDay: l("দিন", "Day"),
  colWhat: l("কী", "What"),
  colWhen: l("কখন", "When"),
  source: l("সূত্র", "Source"),
  secondary: l("দ্বিতীয় হাতের সূত্র; পরিষদ বা মন্দিরের সূচি মিলিয়ে নাও", "second-hand source; check the Parishad or temple schedule"),
  bdNote: l(
    "বাংলাদেশ পুজা উদযাপন পরিষদ বা ঢাকেশ্বরী মন্দিরের ঘড়ির সময় (সপ্তমী, অষ্টমী, নবমীর পুজো শুরু, কুমারী পুজো) খবরে পাওয়া যায়নি; পেলে যোগ হবে।",
    "Clock times published by the Bangladesh Puja Udjapan Parishad or Dhakeshwari temple (Saptami, Ashtami and Navami puja starts, Kumari Puja) were not found in the news; they will be added when found.",
  ),
};

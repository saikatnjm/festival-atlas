// Kali Puja 2026 (and the week around it): dates and clock times for Kolkata and Bangladesh,
// cracker rules and crowd notes. Every row is copied from a fetched source (URL kept, checked
// 31 Oct 2026); nothing is computed or guessed. Unknowns are said to be unknown.

import type { Region } from "./events/events";
import type { TimingRow } from "./puja-timings";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const DRIK_KALI = (geo: string) => `https://www.drikpanchang.com/diwali/kali-puja/bengal-kalipuja-date-time.html?geoname-id=${geo}&year=2026`;
const DRIK_KOL = { title: "Drik Panchang, Bengal Kali Puja 2026 (Kolkata)", url: DRIK_KALI("1275004") };
const DRIK_DHAKA = { title: "Drik Panchang, Bengal Kali Puja 2026 (Dhaka)", url: DRIK_KALI("1185241") };
const HT_PHONTA = { title: "HinduTone, Bhai Phonta 2026, 6 Oct 2026", url: "https://hindutone.com/festivals/bhai-phonta-2026-bengal-date/" };
const DRIK_JAGA = { title: "Drik Panchang, Jagaddhatri Puja 2026 (Kolkata)", url: "https://www.drikpanchang.com/festivals/jagaddhatri-puja/jagaddhatri-puja-date-time.html?geoname-id=1275004&year=2026" };
const HT_CRACKERS = { title: "HinduTone, Kolkata firecracker rules 2026, 25 Oct 2026", url: "https://hindutone.com/festivals/diwali-2026/kolkata-firecracker-rules-timings-2026/" };
const UNI_BOROMAA = { title: "UNI, 25 Oct 2026", url: "https://www.uniindia.com/east-india/security-wb-boro-maa-vip-gate/225195" };

/** ISO dates used by JSON-LD and the date formatter. */
export const KALI_2026 = { kali: "2026-11-08", bhaiPhota: "2026-11-11", jagaddhatriNavami: "2026-11-19" } as const;

export const KALI_TIMINGS: Record<Region, TimingRow[]> = {
  wb: [
    {
      day: l("কালীপুজো, রবি ৮ নভেম্বর", "Kali Puja, Sun 8 Nov"),
      what: l("অমাবস্যা তিথি", "Amavasya tithi"),
      when: l("৮ নভেম্বর সকাল ১১:২৭ থেকে ৯ নভেম্বর দুপুর ১২:৩১", "8 Nov 11:27 am to 9 Nov 12:31 pm"),
      source: DRIK_KOL,
    },
    {
      day: l("কালীপুজো, রবি ৮ নভেম্বর", "Kali Puja, Sun 8 Nov"),
      what: l("নিশীথ কাল (মূল পুজো)", "Nishita kaal (the main puja)"),
      when: l("রাত ১০:৫৫ থেকে ১১:৪৬", "10:55 pm to 11:46 pm"),
      source: DRIK_KOL,
    },
  ],
  bd: [
    {
      day: l("শ্যামাপুজো, রবি ৮ নভেম্বর", "Shyama Puja, Sun 8 Nov"),
      what: l("অমাবস্যা তিথি", "Amavasya tithi"),
      when: l("৮ নভেম্বর সকাল ১১:৫৭ থেকে ৯ নভেম্বর দুপুর ১:০১", "8 Nov 11:57 am to 9 Nov 1:01 pm"),
      source: DRIK_DHAKA,
    },
    {
      day: l("শ্যামাপুজো, রবি ৮ নভেম্বর", "Shyama Puja, Sun 8 Nov"),
      what: l("নিশীথ কাল (মূল পুজো)", "Nishita kaal (the main puja)"),
      when: l("রাত ১১:১৬ থেকে ৯ নভেম্বর রাত ১২:০৮", "11:16 pm to 12:08 am (9 Nov)"),
      source: DRIK_DHAKA,
    },
  ],
};

/** The festivals right after Kali Puja, with the date each source gives. */
export const KALI_WEEK: { what: L; when: L; note?: L; source: { title: string; url: string } }[] = [
  {
    what: l("ভাইফোঁটা", "Bhai Phota"),
    when: l("বুধবার ১১ নভেম্বর", "Wednesday 11 November"),
    note: l("দ্রিক পঞ্চাঙ্গ অনুযায়ী; কোনো কোনো পঞ্জিকায় দিন আলাদা হতে পারে, বাড়ির পঞ্জিকা মিলিয়ে নাও।", "Per Drik Panchang; some panjikas may differ, so check the one at home."),
    source: HT_PHONTA,
  },
  {
    what: l("জগদ্ধাত্রী পুজো (নবমী)", "Jagaddhatri Puja (Navami)"),
    when: l("বৃহস্পতিবার ১৯ নভেম্বর (কলকাতা)", "Thursday 19 November (Kolkata)"),
    note: l("নবমী তিথি ১৮ নভেম্বর সকাল ৬:০৪ থেকে ১৯ নভেম্বর সকাল ৭:০৫। দিল্লির হিসেবে ১৮ নভেম্বর দেখায়।", "Navami tithi 18 Nov 6:04 am to 19 Nov 7:05 am. Listings set to Delhi show 18 November."),
    source: DRIK_JAGA,
  },
];

export const CRACKERS = {
  h2: l("বাজি পোড়ানোর নিয়ম", "Firecracker rules"),
  status: l(
    "২০২৬-এর সরকারি নির্দেশিকা (কলকাতা পুলিশ / দূষণ নিয়ন্ত্রণ পর্ষদ) ২৫ অক্টোবর পর্যন্ত বেরোয়নি। বেরোলেই এখানে যোগ হবে।",
    "The 2026 order (Kolkata Police / Pollution Control Board) had not been published as of 25 October. It will be added here when it is.",
  ),
  last: l(
    "গতবছর (২০২৫) কালীপুজো ও দীপাবলির রাতে শুধু রাত ৮টা থেকে ১০টা, শুধু QR কোডওয়ালা সবুজ বাজি (Times of India, ১৮ অক্টোবর ২০২৫)। এবারও এমন হবে, ধরে নিও না।",
    "Last year (2025): only 8 pm to 10 pm on Kali Puja and Diwali night, green crackers with a QR code only (Times of India, 18 Oct 2025). Don't assume this year will be the same.",
  ),
  source: HT_CRACKERS,
};

export const CROWD = {
  h2: l("ভিড় আর নিরাপত্তা", "Crowds and safety"),
  boroMaa: l(
    "নৈহাটির বড়মা: লক্ষ লক্ষ মানুষের ভিড়ের প্রস্তুতি চলছে; চোরবাগানের দুর্ঘটনার পর রাজ্য সরকার এবছর কোনো ভিআইপি গেট রাখছে না।",
    "Naihati's Boro Maa: lakhs of visitors are expected; after the Chorebagan tragedy the state government decided against a VIP gate this year.",
  ),
  boroMaaSource: UNI_BOROMAA,
  tips: [
    l("ভিড়ের সময় (নিশীথ কালের আশপাশে) বাচ্চা আর বয়স্কদের নিয়ে গেলে আগে বা পরে যাও।", "With children or elders, go before or after the peak around Nishita kaal."),
    l("বেরোনোর পথ আগে দেখে নাও; ঠেলাঠেলি দেখলে দাঁড়িয়ে না থেকে সরে এসো।", "Note the exit before you go in; if the crowd starts pushing, step out rather than wait."),
    l("পুলিশ আর ভলান্টিয়ারদের নির্দেশ মেনে চলো; গুজবে কান দিও না।", "Follow police and volunteers, and don't act on rumours."),
  ],
};

export const KALI_TEXT = {
  title: l("কালীপুজো ২০২৬: তারিখ, অমাবস্যা ও নিশীথ কালের সময় (কলকাতা ও বাংলাদেশ)", "Kali Puja 2026: Date, Amavasya & Nishita Time (Kolkata & Bangladesh)"),
  description: l(
    "কালীপুজো ২০২৬ রবিবার ৮ নভেম্বর। কলকাতায় নিশীথ কাল রাত ১০:৫৫–১১:৪৬, ঢাকায় ১১:১৬–১২:০৮। অমাবস্যার সময়, ভাইফোঁটা, বাজির নিয়ম, ভিড়ের খবর, সূত্রসহ।",
    "Kali Puja 2026 is Sunday 8 November. Nishita kaal: Kolkata 10:55–11:46 pm, Dhaka 11:16 pm–12:08 am. Amavasya times, Bhai Phota, firecracker rules and crowd news, with sources.",
  ),
  h1: l("কালীপুজো ২০২৬: কবে, কখন", "Kali Puja 2026: when and what time"),
  lead: l(
    "কালীপুজো আর দীপাবলি রবিবার ৮ নভেম্বর ২০২৬, কার্তিক অমাবস্যার রাতে। কলকাতা আর বাংলাদেশের সময় আলাদা; নিচে দুটোই, সঙ্গে সূত্র।",
    "Kali Puja and Diwali fall on Sunday 8 November 2026, the Kartik new-moon night. Kolkata and Bangladesh times differ; both are below, with sources.",
  ),
  timingsH2: l("অমাবস্যা আর নিশীথ কাল", "Amavasya and Nishita kaal"),
  timingsLead: l(
    "কলকাতার সময় IST, ঢাকার সময় BST। যে রাতে মাঝরাতে অমাবস্যা থাকে, সেই রাতেই কালীপুজো। তোমার পাড়ার পুজোর সময় কমিটির সূচি মিলিয়ে নাও।",
    "Kolkata times are IST, Dhaka times BST. Kali Puja is held on the night when Amavasya prevails at midnight. Check your para committee's schedule for your local puja.",
  ),
  weekH2: l("এরপর কী", "What comes next"),
  bdHoliday: l(
    "বাংলাদেশে শ্যামাপুজোয় ছুটি আছে কি না, সরকারি প্রজ্ঞাপনে নিশ্চিত হতে পারিনি।",
    "We could not confirm from an official notice whether Shyama Puja is a holiday in Bangladesh.",
  ),
  faqH2: l("প্রশ্নোত্তর", "Questions"),
  faq: [
    {
      q: l("২০২৬-এ কালীপুজো কবে?", "When is Kali Puja in 2026?"),
      a: l("রবিবার ৮ নভেম্বর ২০২৬, দীপাবলির রাতে; কলকাতা আর বাংলাদেশ দু’জায়গাতেই (দ্রিক পঞ্চাঙ্গ)।", "Sunday 8 November 2026, on Diwali night, in both Kolkata and Bangladesh (Drik Panchang)."),
    },
    {
      q: l("কালীপুজোর নিশীথ কাল কখন?", "What is the Nishita time for Kali Puja 2026?"),
      a: l("কলকাতায় রাত ১০:৫৫ থেকে ১১:৪৬, ঢাকায় রাত ১১:১৬ থেকে ১২:০৮ (দ্রিক পঞ্চাঙ্গ)।", "Kolkata 10:55 pm to 11:46 pm; Dhaka 11:16 pm to 12:08 am (Drik Panchang)."),
    },
    {
      q: l("অমাবস্যা কখন শুরু, কখন শেষ?", "When does Amavasya begin and end?"),
      a: l("কলকাতায় ৮ নভেম্বর সকাল ১১:২৭ থেকে ৯ নভেম্বর দুপুর ১২:৩১; ঢাকায় ৮ নভেম্বর সকাল ১১:৫৭ থেকে ৯ নভেম্বর দুপুর ১:০১।", "Kolkata: 8 Nov 11:27 am to 9 Nov 12:31 pm. Dhaka: 8 Nov 11:57 am to 9 Nov 1:01 pm."),
    },
    {
      q: l("২০২৬-এ ভাইফোঁটা কবে?", "When is Bhai Phota in 2026?"),
      a: l("বুধবার ১১ নভেম্বর, দ্রিক পঞ্চাঙ্গ অনুযায়ী। কোনো কোনো পঞ্জিকায় দিন আলাদা হতে পারে।", "Wednesday 11 November, per Drik Panchang. Some panjikas may differ."),
    },
    {
      q: l("কালীপুজোয় কলকাতায় কখন বাজি পোড়ানো যাবে?", "When can firecrackers be burst in Kolkata on Kali Puja?"),
      a: l("২০২৬-এর নির্দেশিকা ২৫ অক্টোবর পর্যন্ত বেরোয়নি। গতবছর ছিল রাত ৮টা থেকে ১০টা, শুধু সবুজ বাজি।", "The 2026 order had not been published as of 25 October. Last year it was 8 pm to 10 pm, green crackers only."),
    },
  ],
  sources: l("সূত্র", "Source"),
};

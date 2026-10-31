// Blog: Kali Puja and Diwali. Facts come from pages fetched on 31 Oct 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const DRIK_KOL = { title: "Drik Panchang, Kali Puja 2026 (Kolkata)", url: "https://www.drikpanchang.com/diwali/kali-puja/bengal-kalipuja-date-time.html?geoname-id=1275004&year=2026" };
const DRIK_DHAKA = { title: "Drik Panchang, Kali Puja 2026 (Dhaka)", url: "https://www.drikpanchang.com/diwali/kali-puja/bengal-kalipuja-date-time.html?geoname-id=1185241&year=2026" };
const WIKI_KALI = { title: "Wikipedia, Kali Puja", url: "https://en.wikipedia.org/wiki/Kali_Puja" };
const WIKI_BHOOT = { title: "Wikipedia, Bhoot Chaturdashi", url: "https://en.wikipedia.org/wiki/Bhoot_Chaturdashi" };

export const KALI_PUJA_DIWALI: Article = {
  slug: "kali-puja-and-diwali",
  published: "2026-10-31",
  updated: "2026-10-31",
  title: l("কালীপুজো আর দীপাবলি: বাংলায় কেন কালী?", "Kali Puja and Diwali: Why Bengal Worships Kali"),
  description: l(
    "কালীপুজো আর দীপাবলি একই রাতে। অমাবস্যা, নিশীথ কাল আর ভূত চতুর্দশীর কথা, সঙ্গে কালীপুজো ২০২৬-এর তারিখ ও সময়, কলকাতা আর ঢাকার।",
    "Kali Puja and Diwali fall on the same night. Why Bengal worships Kali at Nishita kaal, plus Kali Puja 2026 date and times for Kolkata and Dhaka.",
  ),
  h1: l("কালীপুজো আর দীপাবলি: একই রাত, দুই রকম পুজো", "Kali Puja and Diwali: one night, two ways to celebrate"),
  lead: l(
    "দেশের বেশিরভাগ জায়গায় যে রাতে লক্ষ্মীপুজো, বাংলায় সেই রাতেই কালী। কেন, আর ২০২৬-এ কবে, এক জায়গায় গুছিয়ে দিলাম।",
    "On the night much of India worships Lakshmi, Bengal worships Kali. Here is how the two fit together and when it falls in 2026.",
  ),
  icon: "🪔",
  body: [
    { kind: "h2", text: l("একই রাত, আলাদা দেবী", "Same night, different goddess") },
    {
      kind: "p",
      text: l(
        "কালীপুজো হয় অমাবস্যার রাতে, মানে অশ্বিন বা কার্তিকের (পঞ্জিকা অনুযায়ী) অন্ধকারতম রাতে। আর সেটা পড়ে ঠিক দীপাবলির রাতেই। উত্তর ভারতে ওই রাতে ঘরে ঘরে প্রদীপ জ্বালিয়ে লক্ষ্মী আর গণেশের পুজো; বাংলায় প্রদীপ জ্বলে একই, কিন্তু পুজোটা শ্যামা মায়ের।",
        "Kali Puja is held on the new-moon night, the darkest night of Ashwin or Kartik depending on which calendar you follow. That is the same night as Diwali. Across much of north India homes light lamps and worship Lakshmi and Ganesha; in Bengal the lamps burn just the same, but the worship is of Shyama Ma.",
      ),
      source: WIKI_KALI,
    },
    {
      kind: "p",
      text: l(
        "শুধু বাংলা নয়, অসম, ওড়িশা, ত্রিপুরা, ঝাড়খণ্ড আর বিহারের কিছু অংশেও কালীপুজো হয়। প্রতিবেশী বাংলাদেশেও এ পুজো পালিত হয়।",
        "It is not only Bengal. Assam, Odisha, Tripura, Jharkhand and parts of Bihar also hold Kali Puja, and it is celebrated in neighbouring Bangladesh too.",
      ),
      source: WIKI_KALI,
    },
    { kind: "h2", text: l("নিশীথ কাল, মাঝরাতের পুজো", "Nishita kaal, the midnight puja") },
    {
      kind: "p",
      text: l(
        "অনেক জায়গায় মাকে পুজো করা হয় রাতে, তন্ত্রমতে মন্ত্র পড়ে, আর ভক্তরা ভোর পর্যন্ত জেগে ধ্যান করেন। আবার অনেক বাড়ি আর মণ্ডপে তন্ত্র ছাড়া ব্রাহ্মণ্য রীতিতে পুজো হয়, সেখানে পশুবলি নেই। মায়ের প্রিয় নৈবেদ্য লাল জবা, মিষ্টি, চাল আর ডাল।",
        "In many places the goddess is worshipped at night with tantric rites and mantras, and devotees stay awake meditating until dawn. Many homes and pandals instead follow the non-tantric Brahmanical rites, which have no animal sacrifice. The offerings prescribed for her are red hibiscus, sweets, rice and lentils.",
      ),
      source: WIKI_KALI,
    },
    {
      kind: "tip",
      text: l(
        "নিশীথ কাল মানে মধ্যরাতের আশপাশের সময়টুকু, আর সেটা শহর ধরে একটু বদলায়। নিজের শহরের সময়টা নিচের তালিকা থেকে দেখে নাও, আর বাড়ির পঞ্জিকাও একবার মিলিয়ে নিও।",
        "Nishita kaal is the window around midnight and it shifts a little by city. Check your own city's time in the next section, and compare with the panjika at home.",
      ),
    },
    { kind: "h2", text: l("আগের রাতে ভূত চতুর্দশী", "Bhoot Chaturdashi, the night before") },
    {
      kind: "p",
      text: l(
        "পশ্চিমবঙ্গ আর বাংলাদেশে কালীপুজোর আগের দিনটা ভূত চতুর্দশী। ঘরের প্রতিটা অন্ধকার কোণে আলো দেওয়া হয়, আর চোদ্দোটা প্রদীপ জ্বালানো হয়। বিশ্বাস, ওই রাতে বংশের চোদ্দো পুরুষ জীবিত আত্মীয়দের দেখতে আসেন, তাঁদের পথ দেখাতেই এই চোদ্দো প্রদীপ।",
        "In West Bengal and Bangladesh the day before Kali Puja is Bhoot Chaturdashi. Every dark corner of the house is lit and fourteen lamps are set out. The belief is that the fourteen forefathers of a family visit their living relatives that night, and the lamps light their way.",
      ),
      source: WIKI_BHOOT,
    },
    { kind: "h2", text: l("২০২৬: কবে, কখন", "2026: date and times") },
    {
      kind: "list",
      items: [
        l("কলকাতা: রবিবার ৮ নভেম্বর ২০২৬। নিশীথ কাল রাত ১০:৫৫ থেকে ১১:৪৬। অমাবস্যা ৮ নভেম্বর সকাল ১১:২৭ থেকে ৯ নভেম্বর দুপুর ১২:৩১।", "Kolkata: Sunday 8 November 2026. Nishita time 10:55 pm to 11:46 pm. Amavasya from 11:27 am on 8 Nov to 12:31 pm on 9 Nov."),
      ],
      source: DRIK_KOL,
    },
    {
      kind: "list",
      items: [
        l("ঢাকা: রবিবার ৮ নভেম্বর ২০২৬। নিশীথ কাল রাত ১১:১৬ থেকে ৯ নভেম্বর রাত ১২:০৮। অমাবস্যা ৮ নভেম্বর বেলা ১১:৫৭ থেকে ৯ নভেম্বর দুপুর ১:০১।", "Dhaka: Sunday 8 November 2026. Nishita time 11:16 pm to 12:08 am (9 Nov). Amavasya from 11:57 am on 8 Nov to 1:01 pm on 9 Nov."),
      ],
      source: DRIK_DHAKA,
    },
    {
      kind: "tip",
      text: l(
        "ঠিক কোন সময়ে পুজো, সেটা সব সময় পাড়ার কমিটি বা বাড়ির পুরোহিতের সঙ্গে মিলিয়ে নেওয়াই ভালো; পঞ্জিকাভেদে সামান্য তফাত হতে পারে।",
        "Always confirm the exact puja time with your para committee or family priest; panjikas can differ slightly.",
      ),
    },
  ],
  faq: [
    {
      q: l("কালীপুজো আর দীপাবলি কি একই দিনে?", "Are Kali Puja and Diwali on the same day?"),
      a: l("হ্যাঁ, একই অমাবস্যার রাতে পড়ে। ২০২৬-এ কলকাতা আর ঢাকা দু’জায়গাতেই কালীপুজো রবিবার ৮ নভেম্বর।", "Yes, they fall on the same new-moon night. In 2026 Kali Puja is Sunday 8 November in both Kolkata and Dhaka."),
    },
    {
      q: l("কালীপুজো ২০২৬ কত তারিখে?", "What is the date of Kali Puja 2026?"),
      a: l("রবিবার ৮ নভেম্বর ২০২৬ (Drik Panchang অনুযায়ী, কলকাতা ও ঢাকা)।", "Sunday 8 November 2026, per Drik Panchang for Kolkata and Dhaka."),
    },
    {
      q: l("কালীপুজোর নিশীথ কাল কখন?", "What time is Nishita kaal for Kali Puja 2026?"),
      a: l("কলকাতায় রাত ১০:৫৫ থেকে ১১:৪৬, ঢাকায় রাত ১১:১৬ থেকে ১২:০৮।", "Kolkata 10:55 pm to 11:46 pm; Dhaka 11:16 pm to 12:08 am."),
    },
    {
      q: l("ভূত চতুর্দশী কবে, কেন পালন করা হয়?", "When is Bhoot Chaturdashi and why is it observed?"),
      a: l("কালীপুজোর আগের দিন। চোদ্দো প্রদীপ জ্বালিয়ে চোদ্দো পুরুষের আত্মাকে পথ দেখানো হয়, এই বিশ্বাসে।", "It is the day before Kali Puja. Fourteen lamps are lit to guide the fourteen ancestors, as the belief goes."),
    },
    {
      q: l("বাংলাদেশে কি কালীপুজো হয়?", "Is Kali Puja celebrated in Bangladesh?"),
      a: l("হ্যাঁ, বাংলাদেশেও পালিত হয়; ঢাকার নিশীথ কালের সময় ওপরে দেওয়া আছে।", "Yes, it is celebrated in Bangladesh too; Dhaka's Nishita time is given above."),
    },
  ],
  related: [
    { href: "/kali-puja-2026", label: l("কালীপুজো ২০২৬", "Kali Puja 2026") },
    { href: "/greetings/kali", label: l("কালীপুজোর শুভেচ্ছা কার্ড", "Kali Puja greeting cards") },
    { href: "/calendar-2027", label: l("২০২৭ সালের ক্যালেন্ডার", "2027 festival calendar") },
  ],
  sources: [DRIK_KOL, DRIK_DHAKA, WIKI_KALI, WIKI_BHOOT],
};

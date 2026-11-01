// Diwali / Kali Puja, Ganesh Chaturthi, Raksha Bandhan and Navratri 2027. Dates and times copied from Drik Panchang's
// festival pages for Kolkata and Dhaka (fetched 1 Nov 2026); background from Wikipedia. Type imports only.

import type { L } from "@/lib/i18n";
import type { FestivalPage } from "./types";

const l = (bn: string, en: string): L => ({ bn, en });
const drik = (path: string, geo: string, extra = "") => `https://www.drikpanchang.com/${path}?geoname-id=${geo}${extra}&year=2027`;
const KOL = "1275004";
const DHAKA = "1185241";

const KALI = (g: string, city: string) => ({ title: `Drik Panchang, Bengal Kali Puja 2027 (${city})`, url: drik("diwali/kali-puja/bengal-kalipuja-date-time.html", g) });
const LAKSHMI = (g: string, city: string) => ({ title: `Drik Panchang, Lakshmi Puja 2027 (${city})`, url: drik("festivals/lakshmipuja/festivals-lakshmipuja-timings.html", g) });
const DIWALI_CAL = (g: string, city: string) => ({ title: `Drik Panchang, Diwali Puja Calendar 2027 (${city})`, url: drik("diwali/diwali-puja-calendar.html", g) });
const GANESH = (g: string, city: string) => ({ title: `Drik Panchang, Ganesh Chaturthi 2027 (${city})`, url: drik("festivals/ganesh-chaturthi/ganesh-chaturthi-date-time.html", g) });
const RAKHI = (g: string, city: string) => ({ title: `Drik Panchang, Raksha Bandhan 2027 (${city})`, url: drik("festivals/raksha-bandhan/raksha-bandhan-date-time.html", g) });
const CHAITRA = (g: string, city: string) => ({ title: `Drik Panchang, Chaitra Navratri 2027 (${city})`, url: drik("navratri/chaitra-vasant-navratri-dates.html", g) });
const CHAITRA_GHATA = (g: string, city: string) => ({ title: `Drik Panchang, Chaitra Navratri Ghatasthapana 2027 (${city})`, url: drik("navratri/chaitra-navratri-ghatasthapana.html", g) });
const SHARAD = (g: string, city: string) => ({ title: `Drik Panchang, Shardiya Navratri 2027 (${city})`, url: drik("navratri/ashwin-shardiya-navratri-dates.html", g) });
const SHARAD_GHATA = (g: string, city: string) => ({ title: `Drik Panchang, Shardiya Navratri Ghatasthapana 2027 (${city})`, url: drik("navratri/shardiya-navratri-ghatasthapana.html", g) });

const WIKI_KALI = { title: "Wikipedia, Kali Puja", url: "https://en.wikipedia.org/wiki/Kali_Puja" };
const WIKI_GANESH = { title: "Wikipedia, Ganesh Chaturthi", url: "https://en.wikipedia.org/wiki/Ganesh_Chaturthi" };
const WIKI_RAKHI = { title: "Wikipedia, Raksha Bandhan", url: "https://en.wikipedia.org/wiki/Raksha_Bandhan" };
const WIKI_JHULAN = { title: "Wikipedia, Jhulan Yatra", url: "https://en.wikipedia.org/wiki/Jhulan_Yatra" };
const WIKI_NAVARATRI = { title: "Wikipedia, Navaratri", url: "https://en.wikipedia.org/wiki/Navaratri" };
const WIKI_CHAITRA = { title: "Wikipedia, Chaitra", url: "https://en.wikipedia.org/wiki/Chaitra" };
const CAL = { href: "/calendar-2027", label: l("📅 পুজোর ক্যালেন্ডার ২০২৭", "📅 Festival calendar 2027") };
const KOLKATA = { name: "Kolkata", locality: "Kolkata", region: "West Bengal", country: "IN" as const };

export const DIWALI_2027: FestivalPage = {
  path: "/diwali-2027",
  title: l("দীপাবলি ২০২৭: তারিখ, লক্ষ্মীপুজোর শুভ সময়", "Diwali 2027: Date, Lakshmi Puja Muhurat & Kali Puja"),
  description: l(
    "দীপাবলি ২০২৭ শুক্রবার ২৯ অক্টোবর; কলকাতায় লক্ষ্মীপুজোর মুহূর্ত সন্ধে ৬:০০ থেকে ৭:০৫। কালীপুজো বৃহস্পতিবার ২৮ অক্টোবর, নিশীথ সময়, ঢাকাও।",
    "Diwali 2027 is Fri 29 October; Kolkata Lakshmi Puja muhurat 6:00 to 7:05 pm. Kali Puja is Thu 28 October, with Nishita time and Dhaka times.",
  ),
  h1: l("দীপাবলি ২০২৭: কবে, কখন", "Diwali 2027: when and what time"),
  lead: l(
    "দ্রিক পঞ্চাঙ্গে ২০২৭-এ দীপাবলির লক্ষ্মীপুজো শুক্রবার ২৯ অক্টোবর, কলকাতা আর ঢাকায়। বাংলায় অমাবস্যার রাতে কালীপুজো, দ্রিকের বঙ্গীয় কালীপুজোর পাতায় তা বৃহস্পতিবার ২৮ অক্টোবর।",
    "Drik Panchang puts the Diwali Lakshmi Puja on Friday 29 October 2027 in Kolkata and Dhaka. In Bengal the Amavasya night is Kali Puja, which Drik's Bengal Kali Puja page lists on Thursday 28 October.",
  ),
  timings: {
    h2: l("লক্ষ্মীপুজো, কালীপুজো আর অমাবস্যা তিথি", "Lakshmi Puja, Kali Puja and Amavasya tithi"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [
        { day: l("শুক্র ২৯ অক্টোবর", "Fri 29 Oct"), what: l("লক্ষ্মীপুজোর মুহূর্ত (প্রদোষ কাল)", "Lakshmi Puja muhurat (Pradosh Kaal)"), when: l("সন্ধে ৬:০০ থেকে ৭:০৫", "6:00 pm to 7:05 pm"), source: LAKSHMI(KOL, "Kolkata") },
        { day: l("২৮–২৯ অক্টোবর", "28–29 Oct"), what: l("অমাবস্যা তিথি", "Amavasya tithi"), when: l("২৮ অক্টোবর রাত ৮:৪৭ থেকে ২৯ অক্টোবর সন্ধে ৭:০৫", "28 Oct 8:47 pm to 29 Oct 7:05 pm"), source: LAKSHMI(KOL, "Kolkata") },
        { day: l("বৃহস্পতি ২৮ অক্টোবর রাত", "Thu 28 Oct night"), what: l("কালীপুজো: নিশীথ কাল", "Kali Puja: Nishita Kaal"), when: l("রাত ১০:৫৫ থেকে ১১:৪৬", "10:55 pm to 11:46 pm"), source: KALI(KOL, "Kolkata") },
      ],
      bd: [
        { day: l("শুক্র ২৯ অক্টোবর", "Fri 29 Oct"), what: l("লক্ষ্মীপুজোর মুহূর্ত", "Lakshmi Puja muhurat"), when: l("সন্ধে ৬:২০ থেকে ৭:৩৫", "6:20 pm to 7:35 pm"), source: LAKSHMI(DHAKA, "Dhaka") },
        { day: l("২৮–২৯ অক্টোবর", "28–29 Oct"), what: l("অমাবস্যা তিথি", "Amavasya tithi"), when: l("২৮ অক্টোবর রাত ৯:১৭ থেকে ২৯ অক্টোবর সন্ধে ৭:৩৫", "28 Oct 9:17 pm to 29 Oct 7:35 pm"), source: LAKSHMI(DHAKA, "Dhaka") },
        { day: l("বৃহস্পতি ২৮ অক্টোবর রাত", "Thu 28 Oct night"), what: l("কালীপুজো: নিশীথ কাল", "Kali Puja: Nishita Kaal"), when: l("রাত ১১:১৭ থেকে ১২:০৮ (২৯ অক্টোবর)", "11:17 pm to 12:08 am (29 Oct)"), source: KALI(DHAKA, "Dhaka") },
      ],
    },
    note: l(
      "কালীপুজো আর দীপাবলির লক্ষ্মীপুজো দ্রিকে দুই দিনে পড়েছে, কারণ অমাবস্যা ২৮ তারিখ রাতে শুরু আর ২৯ তারিখ সন্ধেয় শেষ। বাংলার পঞ্জিকায় তারিখ আলাদা হতে পারে; তোমার পঞ্জিকা মিলিয়ে নিও।",
      "Drik lists Kali Puja and the Diwali Lakshmi Puja on two days because Amavasya begins on the night of the 28th and ends on the evening of the 29th. Bengali panjikas may differ; check your panjika.",
    ),
  },
  sections: [
    {
      id: "five-days",
      h2: l("দীপাবলির পাঁচ দিন", "The five days of Diwali"),
      paras: [
        {
          text: l(
            "দ্রিক পঞ্চাঙ্গের দীপাবলি ক্যালেন্ডারে কলকাতা আর ঢাকা দু’জায়গাতেই: ধনতেরস বুধবার ২৭ অক্টোবর, নরক চতুর্দশী বৃহস্পতিবার ২৮ অক্টোবর, লক্ষ্মীপুজো শুক্রবার ২৯ অক্টোবর, গোবর্ধন পুজো শনিবার ৩০ অক্টোবর আর ভাইদুজ (দ্রিকের বানানে ভাইয়া দুজ) রবিবার ৩১ অক্টোবর। বাংলায় ভূত চতুর্দশী নরক চতুর্দশীর দিনেই পড়ে, তবে দ্রিকের পাতায় এই নাম নেই; আর ভাইফোঁটার দিন নিজের পঞ্জিকায় দেখে নিও।",
            "In Drik Panchang's Diwali calendar, for both Kolkata and Dhaka: Dhanteras is Wednesday 27 October, Naraka Chaturdashi Thursday 28 October, Lakshmi Puja Friday 29 October, Govardhan Puja Saturday 30 October and Bhaiya Dooj Sunday 31 October. Drik does not use the name Bhoot Chaturdashi, and its Bhaiya Dooj is what Bengalis call Bhai Phota; check your panjika for both.",
          ),
          source: DIWALI_CAL(KOL, "Kolkata"),
        },
      ],
    },
    {
      id: "kali-puja",
      h2: l("বাংলায় দীপাবলির রাত মানে কালীপুজো", "In Bengal, the Diwali night is Kali Puja"),
      paras: [
        {
          text: l(
            "কালীপুজো, শ্যামাপুজো বা মহানিশা পুজো পশ্চিমবঙ্গে বিশেষ জনপ্রিয়; অমাবস্যায়, দীপাবলির রাতেই, বেশিরভাগ পুজো হয় রাতে। কলকাতার কালীঘাট আর দক্ষিণেশ্বর মন্দির বিখ্যাত।",
            "Kali Puja, also called Shyama Puja or Mahanisha Puja, is especially prominent in West Bengal. It falls on the new moon, coinciding with Diwali night, and is mostly worshipped at night. Kalighat and Dakshineswar in Kolkata are prominent sites.",
          ),
          source: WIKI_KALI,
        },
      ],
      tips: [l("পটকা ফাটানোর সময় পাড়ার নিয়ম মেনো; পোষ্যদের ঘরের ভেতরে রেখো।", "Follow local rules on firecrackers and keep pets indoors.")],
    },
  ],
  faq: [
    { q: l("দীপাবলি ২০২৭ কবে", "When is Diwali 2027?"), a: l("দ্রিক পঞ্চাঙ্গে দীপাবলির লক্ষ্মীপুজো শুক্রবার ২৯ অক্টোবর ২০২৭। বাংলার কালীপুজো দ্রিকে বৃহস্পতিবার ২৮ অক্টোবর।", "Drik Panchang lists the Diwali Lakshmi Puja on Friday 29 October 2027, and Bengal Kali Puja on Thursday 28 October.") },
    { q: l("দীপাবলির লক্ষ্মীপুজো কখন করব", "Diwali 2027 Lakshmi Puja time Kolkata"), a: l("কলকাতায় ২৯ অক্টোবর সন্ধে ৬:০০ থেকে ৭:০৫ (প্রদোষ কাল)। ঢাকায় সন্ধে ৬:২০ থেকে ৭:৩৫।", "Kolkata: 29 October, 6:00 pm to 7:05 pm (Pradosh Kaal). Dhaka: 6:20 pm to 7:35 pm.") },
    { q: l("কালীপুজো ২০২৭ কবে, নিশীথ সময় কখন", "When is Kali Puja 2027 and what is the Nishita time?"), a: l("বৃহস্পতিবার ২৮ অক্টোবর; কলকাতায় নিশীথ কাল রাত ১০:৫৫ থেকে ১১:৪৬, ঢাকায় রাত ১১:১৭ থেকে ১২:০৮।", "Thursday 28 October; Nishita Kaal is 10:55 pm to 11:46 pm in Kolkata and 11:17 pm to 12:08 am in Dhaka.") },
    { q: l("২০২৭-এ অমাবস্যা কখন শুরু", "When does Amavasya begin for Diwali 2027?"), a: l("কলকাতায় ২৮ অক্টোবর রাত ৮:৪৭, শেষ ২৯ অক্টোবর সন্ধে ৭:০৫।", "In Kolkata it begins at 8:47 pm on 28 October and ends at 7:05 pm on 29 October.") },
  ],
  events: [
    { name: l("কালীপুজো ২০২৭", "Kali Puja 2027"), start: "2027-10-28", place: KOLKATA },
    { name: l("দীপাবলি ২০২৭", "Diwali 2027"), start: "2027-10-29", place: KOLKATA },
  ],
  links: [{ href: "/kali-puja-2026", label: l("কালীপুজো ২০২৬", "Kali Puja 2026"), primary: true }, { href: "/dhanteras-2026", label: l("ধনতেরস ২০২৬", "Dhanteras 2026") }, CAL, { href: "/amavasya-2027", label: l("অমাবস্যা ২০২৭", "Amavasya 2027") }],
  lastChecked: "2026-11-01",
};

export const GANESH_2027: FestivalPage = {
  path: "/ganesh-chaturthi-2027",
  title: l("গণেশ চতুর্থী ২০২৭: তারিখ, পুজোর শুভ সময়", "Ganesh Chaturthi 2027: Date, Puja Muhurat & Time"),
  description: l(
    "গণেশ চতুর্থী ২০২৭ শনিবার ৪ সেপ্টেম্বর; কলকাতায় মধ্যাহ্ন পুজোর মুহূর্ত সকাল ১০:২০ থেকে দুপুর ১২:২৫। চতুর্থী তিথি, অনন্ত চতুর্দশী, ঢাকার সময়ও।",
    "Ganesh Chaturthi 2027 is Sat 4 September; Kolkata Madhyahna puja muhurat 10:20 am to 12:25 pm. Chaturthi tithi, Anant Chaturdashi and Dhaka times.",
  ),
  h1: l("গণেশ চতুর্থী ২০২৭: কবে, কখন", "Ganesh Chaturthi 2027: when and what time"),
  lead: l(
    "ভাদ্র মাসের চতুর্থীতে গণেশ চতুর্থী; ২০২৭-এ শনিবার ৪ সেপ্টেম্বর, কলকাতা আর ঢাকায়। উৎসব শেষ অনন্ত চতুর্দশীতে, মঙ্গলবার ১৪ সেপ্টেম্বর।",
    "Ganesh Chaturthi falls on the Chaturthi of Bhadrapada; in 2027 that is Saturday 4 September, in Kolkata and Dhaka. The festival ends on Anant Chaturdashi, Tuesday 14 September.",
  ),
  timings: {
    h2: l("মধ্যাহ্ন পুজোর মুহূর্ত আর চতুর্থী তিথি", "Madhyahna puja muhurat and Chaturthi tithi"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [
        { day: l("শনি ৪ সেপ্টেম্বর", "Sat 4 Sep"), what: l("মধ্যাহ্ন গণেশ পুজোর মুহূর্ত", "Madhyahna Ganesha Puja muhurat"), when: l("সকাল ১০:২০ থেকে দুপুর ১২:২৫", "10:20 am to 12:25 pm"), source: GANESH(KOL, "Kolkata") },
        { day: l("৩–৪ সেপ্টেম্বর", "3–4 Sep"), what: l("চতুর্থী তিথি", "Chaturthi tithi"), when: l("৩ সেপ্টেম্বর দুপুর ২:১৮ থেকে ৪ সেপ্টেম্বর দুপুর ১২:২৫", "3 Sep 2:18 pm to 4 Sep 12:25 pm"), source: GANESH(KOL, "Kolkata") },
        { day: l("শুক্র ৩ সেপ্টেম্বর", "Fri 3 Sep"), what: l("চাঁদ না দেখার সময় (আগের দিন)", "Time to avoid moon sighting (previous day)"), when: l("দুপুর ২:১৮ থেকে সন্ধে ৭:২৭", "2:18 pm to 7:27 pm"), source: GANESH(KOL, "Kolkata") },
      ],
      bd: [
        { day: l("শনি ৪ সেপ্টেম্বর", "Sat 4 Sep"), what: l("মধ্যাহ্ন গণেশ পুজোর মুহূর্ত", "Madhyahna Ganesha Puja muhurat"), when: l("সকাল ১০:৪২ থেকে দুপুর ১২:৫৫", "10:42 am to 12:55 pm"), source: GANESH(DHAKA, "Dhaka") },
        { day: l("৩–৪ সেপ্টেম্বর", "3–4 Sep"), what: l("চতুর্থী তিথি", "Chaturthi tithi"), when: l("৩ সেপ্টেম্বর দুপুর ২:৪৮ থেকে ৪ সেপ্টেম্বর দুপুর ১২:৫৫", "3 Sep 2:48 pm to 4 Sep 12:55 pm"), source: GANESH(DHAKA, "Dhaka") },
        { day: l("শুক্র ৩ সেপ্টেম্বর", "Fri 3 Sep"), what: l("চাঁদ না দেখার সময় (আগের দিন)", "Time to avoid moon sighting (previous day)"), when: l("দুপুর ২:৪৮ থেকে সন্ধে ৭:৪৭", "2:48 pm to 7:47 pm"), source: GANESH(DHAKA, "Dhaka") },
        { day: l("মঙ্গল ১৪ সেপ্টেম্বর", "Tue 14 Sep"), what: l("গণেশ বিসর্জন (অনন্ত চতুর্দশী)", "Ganesh Visarjan (Anant Chaturdashi)"), when: l("সারা দিন", "all day"), source: GANESH(DHAKA, "Dhaka") },
      ],
    },
    note: l(
      "দ্রিকের পাতায় ৪ সেপ্টেম্বরের জন্য আরও একটি ‘চাঁদ না দেখার’ সময় আছে, কিন্তু তাতে তারিখের উল্লেখ নেই; তাই এখানে দিলাম না। অনন্ত চতুর্দশীর দিন কলকাতার পাতায় সরাসরি শুধু বিসর্জনের তারিখ হিসেবে ছাপা।",
      "Drik's page prints a second 'time to avoid moon sighting' for 4 September with no date label, so it is not reproduced here. For Kolkata the page gives the visarjan date (14 September) as the Anant Chaturdashi day.",
    ),
  },
  sections: [
    {
      id: "about",
      h2: l("গণেশ চতুর্থী কী", "About Ganesh Chaturthi"),
      paras: [
        {
          text: l(
            "ভাদ্রপদ মাসের চতুর্থী তিথিতে গণেশ চতুর্থী; উইকিপিডিয়া অনুযায়ী মূর্তি অনন্ত চতুর্দশীর দিন শোভাযাত্রা করে নদী, সাগর বা জলাশয়ে বিসর্জন দেওয়া হয়। পশ্চিমবঙ্গ উৎসবটি পালনের রাজ্যগুলোর মধ্যে আছে।",
            "Ganesh Chaturthi falls on the Chaturthi of the month of Bhadrapada. Per Wikipedia, the idol is carried in procession and immersed in a river, the sea or another water body on Anant Chaturdashi. West Bengal is among the states where it is observed.",
          ),
          source: WIKI_GANESH,
        },
      ],
      tips: [l("চতুর্থীর চাঁদ না দেখার সময়টা মনে রেখো; আকাশে চোখ পড়ে গেলে ঘাবড়িও না, বড়দের কাছে রীতি জেনে নাও।", "Note the moon-avoid window; if you glimpse the moon, ask the elders what your family does.")],
    },
  ],
  faq: [
    { q: l("গণেশ চতুর্থী ২০২৭ কবে", "Ganesh Chaturthi 2027 date"), a: l("শনিবার ৪ সেপ্টেম্বর ২০২৭, কলকাতা আর ঢাকায় (দ্রিক পঞ্চাঙ্গ)।", "Saturday 4 September 2027 in Kolkata and Dhaka (Drik Panchang).") },
    { q: l("গণেশ পুজোর শুভ সময় কখন", "What is the Ganesh Chaturthi 2027 puja time in Kolkata?"), a: l("কলকাতায় মধ্যাহ্ন মুহূর্ত সকাল ১০:২০ থেকে দুপুর ১২:২৫; ঢাকায় সকাল ১০:৪২ থেকে দুপুর ১২:৫৫।", "Kolkata Madhyahna muhurat is 10:20 am to 12:25 pm; Dhaka 10:42 am to 12:55 pm.") },
    { q: l("চতুর্থী তিথি কখন শুরু", "When does Chaturthi tithi start for Ganesh Chaturthi 2027?"), a: l("কলকাতায় ৩ সেপ্টেম্বর দুপুর ২:১৮, শেষ ৪ সেপ্টেম্বর দুপুর ১২:২৫।", "In Kolkata it begins at 2:18 pm on 3 September and ends at 12:25 pm on 4 September.") },
    { q: l("গণেশ বিসর্জন কবে", "When is Ganesh Visarjan (Anant Chaturdashi) in 2027?"), a: l("মঙ্গলবার ১৪ সেপ্টেম্বর ২০২৭ (দ্রিক পঞ্চাঙ্গ)।", "Tuesday 14 September 2027 (Drik Panchang).") },
  ],
  events: [
    { name: l("গণেশ চতুর্থী ২০২৭", "Ganesh Chaturthi 2027"), start: "2027-09-04", place: KOLKATA },
    { name: l("অনন্ত চতুর্দশী, গণেশ বিসর্জন ২০২৭", "Anant Chaturdashi, Ganesh Visarjan 2027"), start: "2027-09-14", place: KOLKATA },
  ],
  links: [CAL, { href: "/janmashtami-2027", label: l("জন্মাষ্টমী ২০২৭", "Janmashtami 2027") }, { href: "/raksha-bandhan-2027", label: l("রাখি বন্ধন ২০২৭", "Raksha Bandhan 2027") }, { href: "/durga-puja-2027", label: l("🥁 দুর্গাপুজো ২০২৭", "🥁 Durga Puja 2027") }],
  lastChecked: "2026-11-01",
};

export const RAKHI_2027: FestivalPage = {
  path: "/raksha-bandhan-2027",
  title: l("রাখি পূর্ণিমা ২০২৭: তারিখ, রাখি বাঁধার সময়", "Raksha Bandhan 2027: Date, Rakhi Time & Jhulan"),
  description: l(
    "রাখি বন্ধন ২০২৭ মঙ্গলবার ১৭ আগস্ট; কলকাতায় রাখি বাঁধার সময় সকাল ৫:১৪ থেকে দুপুর ১২:৫৮। পূর্ণিমা তিথি, ঝুলন, ঢাকার সময়ও, সূত্রসহ।",
    "Raksha Bandhan 2027 is Tue 17 August; Kolkata rakhi-tying time 5:14 am to 12:58 pm. Purnima tithi, Jhulan in Bengal and Dhaka times, sourced.",
  ),
  h1: l("রাখি পূর্ণিমা ২০২৭: কবে, কখন", "Raksha Bandhan 2027: when and what time"),
  lead: l(
    "শ্রাবণ পূর্ণিমায় রাখি বন্ধন; ২০২৭-এ মঙ্গলবার ১৭ আগস্ট, কলকাতা আর ঢাকায়। দ্রিকের পাতা বলছে ভদ্রা সূর্যোদয়ের আগেই শেষ, তাই সকাল থেকেই রাখি বাঁধা যাবে।",
    "Raksha Bandhan falls on the Shravana full moon; in 2027 that is Tuesday 17 August, in Kolkata and Dhaka. Drik says Bhadra is over before sunrise, so rakhi can be tied from early morning.",
  ),
  timings: {
    h2: l("রাখি বাঁধার সময় আর পূর্ণিমা তিথি", "Rakhi-tying time and Purnima tithi"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [
        { day: l("মঙ্গল ১৭ আগস্ট", "Tue 17 Aug"), what: l("রাখি বাঁধার সময়", "Rakhi-tying time"), when: l("সকাল ৫:১৪ থেকে দুপুর ১২:৫৮", "5:14 am to 12:58 pm"), source: RAKHI(KOL, "Kolkata") },
        { day: l("১৬–১৭ আগস্ট", "16–17 Aug"), what: l("পূর্ণিমা তিথি", "Purnima tithi"), when: l("১৬ আগস্ট সকাল ১০:২৮ থেকে ১৭ আগস্ট দুপুর ১২:৫৮", "16 Aug 10:28 am to 17 Aug 12:58 pm"), source: RAKHI(KOL, "Kolkata") },
      ],
      bd: [
        { day: l("মঙ্গল ১৭ আগস্ট", "Tue 17 Aug"), what: l("রাখি বাঁধার সময়", "Rakhi-tying time"), when: l("সকাল ৫:৩৪ থেকে দুপুর ১:২৮", "5:34 am to 1:28 pm"), source: RAKHI(DHAKA, "Dhaka") },
        { day: l("১৬–১৭ আগস্ট", "16–17 Aug"), what: l("পূর্ণিমা তিথি", "Purnima tithi"), when: l("১৬ আগস্ট সকাল ১০:৫৮ থেকে ১৭ আগস্ট দুপুর ১:২৮", "16 Aug 10:58 am to 17 Aug 1:28 pm"), source: RAKHI(DHAKA, "Dhaka") },
      ],
    },
    note: l(
      "ভদ্রা শেষের নির্দিষ্ট সময় দ্রিক ছাপেনি; শুধু লিখেছে ভদ্রা সূর্যোদয়ের আগে শেষ। বাংলার পঞ্জিকা আলাদা বললে সেটাই মেনো।",
      "Drik prints no exact Bhadra end time, only that Bhadra is over before sunrise. If your panjika differs, follow it.",
    ),
  },
  sections: [
    {
      id: "rakhi",
      h2: l("রাখি বন্ধন", "Raksha Bandhan"),
      paras: [
        {
          text: l(
            "শ্রাবণ মাসের শুক্ল পূর্ণিমায় বোনেরা ভাইয়ের হাতে রাখি বাঁধেন, ভাই উপহার দেন। উইকিপিডিয়া অনুযায়ী পশ্চিমবঙ্গে এই দিনটিকে ঝুলন পূর্ণিমাও বলে; তখন রাধা-কৃষ্ণের পুজো হয়, আর বোনেরা রাখিও বাঁধেন।",
            "On the Shukla Purnima of Shravana, sisters tie a rakhi on their brothers' wrists and receive a gift in return. Per Wikipedia, in West Bengal the day is also called Jhulan Purnima, with prayers to Krishna and Radha alongside the rakhi.",
          ),
          source: WIKI_RAKHI,
        },
        {
          text: l(
            "ঝুলন যাত্রায় সাজানো দোলনায় রাধা-কৃষ্ণের বিগ্রহ বসানো হয়, গান-নাচ চলে। ঝুলন শ্রাবণ পূর্ণিমায় শেষ হয়; পশ্চিমবঙ্গে মায়াপুর বিখ্যাত কেন্দ্র।",
            "In Jhulan Yatra, Radha and Krishna's deities sit on decorated swings with song and dance. It ends on Shravana Purnima, and Mayapur in West Bengal is among its most famous centres.",
          ),
          source: WIKI_JHULAN,
        },
      ],
      tips: [l("পূর্ণিমা তিথি দুপুরে শেষ, তাই সকালেই রাখি বেঁধে নিও।", "The Purnima tithi ends around noon, so tie the rakhi in the morning.")],
    },
  ],
  faq: [
    { q: l("রাখি পূর্ণিমা ২০২৭ কবে", "When is Raksha Bandhan in 2027?"), a: l("মঙ্গলবার ১৭ আগস্ট ২০২৭, কলকাতা আর ঢাকায় (দ্রিক পঞ্চাঙ্গ)।", "Tuesday 17 August 2027, in Kolkata and Dhaka (Drik Panchang).") },
    { q: l("রাখি বাঁধার শুভ সময় কখন", "What is the rakhi-tying time in Kolkata in 2027?"), a: l("কলকাতায় ১৭ আগস্ট সকাল ৫:১৪ থেকে দুপুর ১২:৫৮; ঢাকায় সকাল ৫:৩৪ থেকে দুপুর ১:২৮।", "Kolkata: 17 August, 5:14 am to 12:58 pm. Dhaka: 5:34 am to 1:28 pm.") },
    { q: l("রাখির দিন ভদ্রা কখন", "Is there Bhadra on Raksha Bandhan 2027?"), a: l("দ্রিকের পাতায় ভদ্রা সূর্যোদয়ের আগেই শেষ; নির্দিষ্ট সময় ছাপা নেই।", "Drik says Bhadra is over before sunrise; no exact time is printed.") },
    { q: l("ঝুলন পূর্ণিমা কি রাখির দিনেই", "Is Jhulan Purnima the same day as Raksha Bandhan?"), a: l("উইকিপিডিয়া বলছে পশ্চিমবঙ্গে রাখির দিনটিকে ঝুলন পূর্ণিমাও বলে; ২০২৭-এ দ্রিকে পূর্ণিমা ১৭ আগস্ট দুপুর পর্যন্ত। ঝুলনের দিন পঞ্জিকায় মিলিয়ে নিও।", "Wikipedia says the day is also called Jhulan Purnima in West Bengal; in 2027 Drik's Purnima runs to midday on 17 August. Check your panjika for the Jhulan days.") },
  ],
  events: [{ name: l("রাখি বন্ধন ২০২৭", "Raksha Bandhan 2027"), start: "2027-08-17", place: KOLKATA }],
  links: [CAL, { href: "/purnima-2027", label: l("🌕 পূর্ণিমা ২০২৭", "🌕 Purnima 2027") }, { href: "/janmashtami-2027", label: l("জন্মাষ্টমী ২০২৭", "Janmashtami 2027") }, { href: "/ganesh-chaturthi-2027", label: l("গণেশ চতুর্থী ২০২৭", "Ganesh Chaturthi 2027") }],
  lastChecked: "2026-11-01",
};

export const NAVRATRI_2027: FestivalPage = {
  path: "/navratri-2027",
  title: l("নবরাত্রি ২০২৭: তারিখ, ঘটস্থাপনা মুহূর্ত", "Navratri 2027: Dates & Ghatasthapana Muhurat"),
  description: l(
    "চৈত্র নবরাত্রি ২০২৭ ৭ থেকে ১৫ এপ্রিল, শারদীয়া নবরাত্রি শুরু ৩০ সেপ্টেম্বর। কলকাতা আর ঢাকার ঘটস্থাপনা মুহূর্ত, সূত্রসহ।",
    "Chaitra Navratri 2027 runs 7 to 15 April; Sharad Navratri from 30 September. Kolkata and Dhaka Ghatasthapana muhurat times, sourced.",
  ),
  h1: l("নবরাত্রি ২০২৭: কবে, কখন", "Navratri 2027: when and what time"),
  lead: l(
    "২০২৭-এ চৈত্র নবরাত্রি বুধবার ৭ এপ্রিল থেকে বৃহস্পতিবার ১৫ এপ্রিল (রামনবমী), আর শারদীয়া নবরাত্রি বৃহস্পতিবার ৩০ সেপ্টেম্বর থেকে; দ্রিকের নবরাত্রি তালিকায় বিজয়াদশমী শনিবার ৯ অক্টোবর। বাংলায় শারদীয়া নবরাত্রিই দুর্গাপুজো, আর দ্রিকের বাংলার ক্যালেন্ডারে বিজয়া দশমী রবিবার ১০ অক্টোবর।",
    "In 2027 Chaitra Navratri runs from Wednesday 7 April to Thursday 15 April (Ram Navami), and Sharad Navratri starts on Thursday 30 September; Drik's Navratri list puts Vijayadashami on Saturday 9 October. In Bengal, Sharad Navratri is Durga Puja, and Drik's Bengal calendar has Vijaya Dashami on Sunday 10 October.",
  ),
  timings: {
    h2: l("দুই নবরাত্রির ঘটস্থাপনা", "Ghatasthapana for both Navratris"),
    lead: l("কলকাতার সময় IST, ঢাকার সময় BST।", "Kolkata times are IST, Dhaka times BST."),
    rows: {
      wb: [
        { day: l("বুধ ৭ এপ্রিল", "Wed 7 Apr"), what: l("চৈত্র নবরাত্রি: ঘটস্থাপনা মুহূর্ত", "Chaitra Navratri: Ghatasthapana muhurat"), when: l("সকাল ৫:২৪ থেকে ৭:২৬", "5:24 am to 7:26 am"), source: CHAITRA_GHATA(KOL, "Kolkata") },
        { day: l("৭–৮ এপ্রিল", "7–8 Apr"), what: l("চৈত্র: প্রতিপদ তিথি", "Chaitra: Pratipada tithi"), when: l("৭ এপ্রিল ভোর ৫:২০ থেকে ৮ এপ্রিল ভোর ৪:২৮", "7 Apr 5:20 am to 8 Apr 4:28 am"), source: CHAITRA_GHATA(KOL, "Kolkata") },
        { day: l("বৃহস্পতি ১৫ এপ্রিল", "Thu 15 Apr"), what: l("চৈত্র নবরাত্রির নবম দিন (রামনবমী)", "Chaitra Navratri day 9 (Ram Navami)"), when: l("তারিখ", "date"), source: CHAITRA(KOL, "Kolkata") },
        { day: l("বৃহস্পতি ৩০ সেপ্টেম্বর", "Thu 30 Sep"), what: l("শারদীয়া নবরাত্রি: ঘটস্থাপনা মুহূর্ত", "Sharad Navratri: Ghatasthapana muhurat"), when: l("সকাল ৮:০৫ থেকে ৯:২৭", "8:05 am to 9:27 am"), source: SHARAD_GHATA(KOL, "Kolkata") },
        { day: l("৩০ সেপ্টেম্বর–১ অক্টোবর", "30 Sep–1 Oct"), what: l("শারদীয়া: প্রতিপদ তিথি", "Sharad: Pratipada tithi"), when: l("৩০ সেপ্টেম্বর সকাল ৮:০৫ থেকে ১ অক্টোবর ভোর ৫:৩৪", "30 Sep 8:05 am to 1 Oct 5:34 am"), source: SHARAD_GHATA(KOL, "Kolkata") },
        { day: l("শুক্র ৮ অক্টোবর", "Fri 8 Oct"), what: l("মহানবমী (নবম দিন)", "Maha Navami (day 9)"), when: l("তারিখ", "date"), source: SHARAD(KOL, "Kolkata") },
        { day: l("শনি ৯ অক্টোবর", "Sat 9 Oct"), what: l("বিজয়াদশমী", "Vijayadashami"), when: l("তারিখ", "date"), source: SHARAD(KOL, "Kolkata") },
      ],
      bd: [
        { day: l("বুধ ৭ এপ্রিল", "Wed 7 Apr"), what: l("চৈত্র নবরাত্রি: ঘটস্থাপনা মুহূর্ত", "Chaitra Navratri: Ghatasthapana muhurat"), when: l("সকাল ৫:৫০ থেকে ৭:৫৬", "5:50 am to 7:56 am"), source: CHAITRA_GHATA(DHAKA, "Dhaka") },
        { day: l("৭–৮ এপ্রিল", "7–8 Apr"), what: l("চৈত্র: প্রতিপদ তিথি", "Chaitra: Pratipada tithi"), when: l("৭ এপ্রিল ভোর ৫:৫০ থেকে ৮ এপ্রিল ভোর ৪:৫৮", "7 Apr 5:50 am to 8 Apr 4:58 am"), source: CHAITRA_GHATA(DHAKA, "Dhaka") },
        { day: l("বৃহস্পতি ৩০ সেপ্টেম্বর", "Thu 30 Sep"), what: l("শারদীয়া নবরাত্রি: ঘটস্থাপনা মুহূর্ত", "Sharad Navratri: Ghatasthapana muhurat"), when: l("সকাল ৮:৩৫ থেকে ৯:৪৯", "8:35 am to 9:49 am"), source: SHARAD_GHATA(DHAKA, "Dhaka") },
        { day: l("৩০ সেপ্টেম্বর–১ অক্টোবর", "30 Sep–1 Oct"), what: l("শারদীয়া: প্রতিপদ তিথি", "Sharad: Pratipada tithi"), when: l("৩০ সেপ্টেম্বর সকাল ৮:৩৫ থেকে ১ অক্টোবর ভোর ৬:০৪", "30 Sep 8:35 am to 1 Oct 6:04 am"), source: SHARAD_GHATA(DHAKA, "Dhaka") },
      ],
    },
    note: l(
      "দ্রিকের কলকাতা পাতায় শারদীয়ার ঘটস্থাপনা মুহূর্ত লেখা আছে ‘প্রতিপদ মুহূর্ত না থাকায় অমাবস্যা তিথিতে’। শারদীয়ার নবমী-দশমীর তারিখ শুধু কলকাতার পাতা থেকে। দ্রিকের বাংলার দুর্গাপুজোর ক্যালেন্ডারে কিন্তু মহানবমী শনিবার ৯ অক্টোবর আর বিজয়া দশমী রবিবার ১০ অক্টোবর; আমাদের দুর্গাপুজো ২০২৭ পাতা দেখো, আর পঞ্জিকা মিলিয়ে নিও।",
      "Drik's Kolkata page says the Sharad Ghatasthapana muhurat 'falls on Amavasya Tithi due to non availability of Pratipada Muhurta'. The Sharad Navami and Dashami dates come from the Kolkata page only. Drik's Bengal Durga Puja calendar, though, has Maha Navami on Saturday 9 October and Vijaya Dashami on Sunday 10 October; see our Durga Puja 2027 page, and check your panjika.",
    ),
  },
  sections: [
    {
      id: "bengal",
      h2: l("বাংলায় নবরাত্রি", "Navratri in Bengal"),
      paras: [
        {
          text: l(
            "শারদীয়া নবরাত্রি আশ্বিন মাসের শুক্লপক্ষের প্রথম দিনে শুরু হয়ে নয় রাত চলে, দশমীতে শেষ। বাঙালি হিন্দুরা এই নবরাত্রিকেই দুর্গাপুজো হিসেবে পালন করেন; এটি তাঁদের সবচেয়ে গুরুত্বপূর্ণ বার্ষিক উৎসব। চৈত্র (বসন্ত) নবরাত্রির শেষ দিন রামনবমী।",
            "Sharad Navratri begins on the first day of the bright fortnight of Ashvin, lasts nine nights and ends with Vijayadashami. Bengali Hindus celebrate this Navratri as Durga Puja, their most important annual festival. The last day of Chaitra (Vasanta) Navratri is Rama Navami.",
          ),
          source: WIKI_NAVARATRI,
        },
        {
          text: l(
            "পশ্চিমবঙ্গে চৈত্র মাসে বাসন্তী পুজো, অন্নপূর্ণা পুজো আর রামনবমী পরপর হয়। বাসন্তী পুজো চৈত্র মাসে হয়; দ্রিকের চৈত্র নবরাত্রির পাতায় ‘বাসন্তী পুজো’ নামে আলাদা তালিকা নেই।",
            "In West Bengal, Basanti Puja, Annapurna Puja and Ram Navami follow one another in Chaitra. Basanti Puja thus falls in the month of Chaitra; Drik's Chaitra Navratri page has no separate 'Basanti Puja' listing.",
          ),
          source: WIKI_CHAITRA,
        },
      ],
    },
  ],
  faq: [
    { q: l("শারদীয়া নবরাত্রি ২০২৭ কবে", "When does Sharad Navratri 2027 start?"), a: l("বৃহস্পতিবার ৩০ সেপ্টেম্বর ২০২৭; কলকাতায় ঘটস্থাপনা সকাল ৮:০৫ থেকে ৯:২৭ (দ্রিক পঞ্চাঙ্গ)।", "Thursday 30 September 2027; Kolkata Ghatasthapana 8:05 am to 9:27 am (Drik Panchang).") },
    { q: l("চৈত্র নবরাত্রি ২০২৭ কবে", "When is Chaitra Navratri 2027?"), a: l("বুধবার ৭ এপ্রিল থেকে বৃহস্পতিবার ১৫ এপ্রিল ২০২৭; কলকাতায় ঘটস্থাপনা সকাল ৫:২৪ থেকে ৭:২৬।", "Wednesday 7 April to Thursday 15 April 2027; Kolkata Ghatasthapana 5:24 am to 7:26 am.") },
    { q: l("ঢাকায় ঘটস্থাপনার সময় কখন", "What is the Ghatasthapana time in Dhaka in 2027?"), a: l("চৈত্রে ৭ এপ্রিল সকাল ৫:৫০ থেকে ৭:৫৬; শারদীয়ায় ৩০ সেপ্টেম্বর সকাল ৮:৩৫ থেকে ৯:৪৯।", "Chaitra: 7 April, 5:50 am to 7:56 am. Sharad: 30 September, 8:35 am to 9:49 am.") },
    { q: l("বাংলায় নবরাত্রি আর দুর্গাপুজো কি এক", "Is Navratri the same as Durga Puja in Bengal?"), a: l("উইকিপিডিয়া অনুযায়ী বাঙালি হিন্দুরা শারদীয়া নবরাত্রিকেই দুর্গাপুজো হিসেবে পালন করেন।", "Per Wikipedia, Bengali Hindus celebrate Sharad Navratri as Durga Puja.") },
  ],
  events: [
    { name: l("চৈত্র নবরাত্রি ২০২৭", "Chaitra Navratri 2027"), start: "2027-04-07", end: "2027-04-15", place: KOLKATA },
    { name: l("শারদীয়া নবরাত্রি ২০২৭", "Sharad Navratri 2027"), start: "2027-09-30", end: "2027-10-09", place: KOLKATA },
  ],
  links: [{ href: "/durga-puja-2027", label: l("🥁 দুর্গাপুজো ২০২৭", "🥁 Durga Puja 2027"), primary: true }, { href: "/ram-navami-2027", label: l("রামনবমী ২০২৭", "Ram Navami 2027") }, CAL, { href: "/poila-boishakh-2027", label: l("🎉 পয়লা বৈশাখ ১৪৩৪", "🎉 Poila Boishakh 1434") }],
  lastChecked: "2026-11-01",
};

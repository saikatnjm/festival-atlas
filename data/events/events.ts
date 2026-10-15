// Curated, sourced Puja events and highlights for West Bengal and Bangladesh.
//
// HOW TO UPDATE (no database, no API):
// 1. Add or edit an entry below. Dates are local calendar dates (YYYY-MM-DD); `end` is inclusive.
// 2. Every entry needs at least one source with its publish date, and `lastVerified` (the day you checked).
// 3. `confidence`: "confirmed" = stated plainly by the source; "reported" = the source says
//    "reportedly"/a secondary calendar; "unconfirmed" = not yet backed by a source you trust
//    (shown as unconfirmed and never as live). Never add an event without a source.
// 4. Upcoming / live / past is worked out from the dates in the visitor's browser, so nothing
//    goes stale when the date passes. Run `npm test` (tests/events.test.mjs checks the rules).

import type { L } from "@/lib/i18n";

export type Region = "wb" | "bd";
export type EventKind = "dates" | "ritual" | "pandal" | "transport" | "notice" | "holiday";
export type Confidence = "confirmed" | "reported" | "unconfirmed";

export interface EventSource {
  title: string;
  url: string;
  /** Publish date of the source (YYYY-MM-DD). */
  date: string;
}

export interface FestEvent {
  id: string;
  region: Region;
  kind: EventKind;
  title: L;
  summary: L;
  /** Venue or area. */
  place?: L;
  start: string;
  end?: string;
  confidence: Confidence;
  /** Matching directory entry (/puja/<id>), when there is one. */
  pandalId?: string;
  sources: EventSource[];
  lastVerified: string;
}

const l = (bn: string, en: string): L => ({ bn, en });

const FEDERAL: EventSource = {
  title: "The Federal: Kolkata Durga Puja 2026 top 10 theme pandals",
  url: "https://thefederal.com/category/features/top-10-theme-pandals-kolkata-durga-puja-2026-258758",
  date: "2026-10-07",
};
const WEEK: EventSource = {
  title: "The Week: No more carnival, no alcohol on Maha Ashtami, no DJ in puja pandals",
  url: "https://www.theweek.in/news/india/2026/09/07/durga-puja-west-bengal-changes.html",
  date: "2026-09-07",
};
const AIR_MAHALAYA: EventSource = {
  title: "News On AIR: Mahalaya being observed across Bangladesh",
  url: "https://newsonair.gov.in/mahalaya-being-observed-across-bangladesh-with-religious-rituals-devotional-programmes/",
  date: "2026-10-10",
};
const PUJA_DAYS_WB = { start: "2026-10-17", end: "2026-10-21" };
const VERIFIED = "2026-10-10";

/** Kolkata 2026 theme highlights, as reported (themes are the organisers’ to confirm). */
function pandal(id: string, name: L, place: L, theme: L, pandalId?: string, source: EventSource = FEDERAL): FestEvent {
  return {
    id,
    region: "wb",
    kind: "pandal",
    title: name,
    summary: theme,
    place,
    ...PUJA_DAYS_WB,
    confidence: "reported",
    pandalId,
    sources: [source],
    lastVerified: source === FEDERAL ? VERIFIED : "2026-10-12",
  };
}

export const events: FestEvent[] = [
  // ---------------- West Bengal / Kolkata ----------------
  {
    id: "wb-mahalaya-2026",
    region: "wb",
    kind: "ritual",
    title: l("মহালয়া", "Mahalaya"),
    summary: l(
      "দেবীপক্ষের শুরু। রাজ্যের পুজো-উদ্বোধনের অনুষ্ঠান ইডেন গার্ডেন্সে, ড্রোন শো সহ (ঘোষণা অনুযায়ী)।",
      "Devi Paksha begins. The state’s Puja inauguration is planned at Eden Gardens with a drone show (as announced).",
    ),
    place: l("কলকাতা · ইডেন গার্ডেন্স", "Kolkata · Eden Gardens"),
    start: "2026-10-10",
    confidence: "confirmed",
    sources: [WEEK, { title: "Hindutone: Durga Puja 2026 dates (Kolkata, per Drik Panchang)", url: "https://hindutone.com/festivals/navratri/durga-puja-2026-dates-kolkata-mahalaya-to-sindoor-khela/", date: "2026-10-06" }],
    lastVerified: VERIFIED,
  },
  {
    id: "wb-durga-puja-2026",
    region: "wb",
    kind: "dates",
    title: l("দুর্গাপুজো ২০২৬: ষষ্ঠী থেকে দশমী", "Durga Puja 2026: Shashthi to Dashami"),
    summary: l(
      "ষষ্ঠী ১৭ অক্টোবর, সপ্তমী ১৮, অষ্টমী ১৯, নবমী ২০, বিজয়া দশমী ২১ অক্টোবর। কোনো কোনো পঞ্জিকায় এক দিনের তফাত আছে।",
      "Shashthi 17 Oct, Saptami 18, Ashtami 19, Navami 20, Bijoya Dashami 21 Oct. Some calendars differ by a day.",
    ),
    place: l("পশ্চিমবঙ্গ", "West Bengal"),
    ...PUJA_DAYS_WB,
    confidence: "reported",
    sources: [{ title: "Hindutone: Durga Puja 2026 dates (Kolkata, per Drik Panchang)", url: "https://hindutone.com/festivals/navratri/durga-puja-2026-dates-kolkata-mahalaya-to-sindoor-khela/", date: "2026-10-06" }],
    lastVerified: VERIFIED,
  },
  {
    id: "wb-metro-2026",
    region: "wb",
    kind: "transport",
    title: l("পুজোয় মেট্রো চলবে সারা রাত", "Kolkata Metro runs overnight for Puja"),
    summary: l(
      "সপ্তমী থেকে নবমী (১৭–২০ অক্টোবর) ব্লু লাইন দুপুর ১টা থেকে ভোর ৪টে, গ্রিন লাইন দুপুর দেড়টা থেকে ভোর ৩:৫৯ পর্যন্ত। দশমীতে ব্লু লাইন দুপুর ১টা থেকে রাত সাড়ে ১০টা।",
      "Saptami to Navami (17–20 Oct): Blue Line 1 pm to 4 am, Green Line 1:30 pm to 3:59 am. Dashami: Blue Line 1 pm to 10:30 pm.",
    ),
    place: l("কলকাতা মেট্রো", "Kolkata Metro"),
    start: "2026-10-15",
    end: "2026-10-21",
    confidence: "confirmed",
    sources: [
      {
        title: "India TV: Kolkata Metro to run special services on five corridors during Durga Puja",
        url: "https://www.indiatvnews.com/west-bengal/kolkata-kolkata-metro-to-run-special-train-services-on-five-corridors-during-durga-puja-check-date-timing-2026-10-08-1056474",
        date: "2026-10-08",
      },
    ],
    lastVerified: VERIFIED,
  },
  {
    id: "wb-no-carnival-2026",
    region: "wb",
    kind: "notice",
    title: l("এবছর রেড রোডে কার্নিভাল নেই", "No Red Road carnival this year"),
    summary: l(
      "রাজ্যের ঘোষণা: দশমীর পরের কার্নিভাল হবে না, অষ্টমীতে দোকানে মদ বিক্রি বন্ধ, প্যান্ডেল ও বিসর্জনে ডিজে নয়, বিসর্জনে ক্রেন নয়।",
      "State announcement: no post-Dashami carnival, no alcohol sales at shops on Ashtami, no DJs at pandals or immersions, no cranes at immersion.",
    ),
    place: l("পশ্চিমবঙ্গ", "West Bengal"),
    start: "2026-09-07",
    end: "2026-10-21",
    confidence: "confirmed",
    sources: [WEEK],
    lastVerified: VERIFIED,
  },
  pandal("wb-santosh-mitra-2026", l("সন্তোষ মিত্র স্কোয়্যার", "Santosh Mitra Square"), l("লেবুতলা, শিয়ালদহ", "Lebutala, Sealdah"), l("থিম: ‘বন্দে মাতরম’-এর ১৫০ বছর; প্রথমবার লাইট-অ্যান্ড-সাউন্ড শো", "Theme: 150 years of ‘Vande Mataram’; first light-and-sound show"), "santosh-mitra-square"),
  pandal("wb-alipore-2026", l("আলিপুর সর্বজনীন", "Alipore Sarbojanin"), l("আলিপুর", "Alipore"), l("থিম: ‘রামায়ণ: অ্যান এপিক ওভেন ইন টাইম’", "Theme: ‘Ramayana: An Epic Woven in Time’"), "alipore-sarbojanin"),
  pandal("wb-chorebagan-2026", l("চোরবাগান সর্বজনীন", "Chorebagan Sarbojanin"), l("উত্তর কলকাতা", "North Kolkata"), l("থিম: ‘অকালবোধন’", "Theme: ‘Akal Bodhon’"), "chorebagan-sarbojanin"),
  pandal("wb-chaltabagan-lohapatty-2026", l("চালতাবাগান লোহাপট্টি", "Chaltabagan Lohapatty"), l("মানিকতলা", "Manicktala"), l("থিম: ‘নিশান’, রামনামী সমাজকে শ্রদ্ধা", "Theme: ‘Nishan – The Mark’, honouring the Ramnami Samaj"), "chaltabagan-lohapatty"),
  pandal("wb-sreebhumi-2026", l("শ্রীভূমি স্পোর্টিং ক্লাব", "Sreebhumi Sporting Club"), l("লেক টাউন, উত্তর-পূর্ব কলকাতা", "Lake Town, north-east Kolkata"), l("থিম: জয়পুরের হাওয়া মহল", "Theme: Jaipur’s Hawa Mahal"), "sreebhumi-sporting-club"),
  pandal("wb-ekdalia-2026", l("একডালিয়া এভারগ্রিন ক্লাব", "Ekdalia Evergreen Club"), l("দক্ষিণ কলকাতা", "South Kolkata"), l("থিম: সোমনাথ মন্দির", "Theme: Somnath Temple"), "ekdalia-evergreen"),
  pandal("wb-ballygunge-ssss-2026", l("বালিগঞ্জ সমাজ সেবী সংঘ", "Ballygunge Samaj Sebi Sangha"), l("দক্ষিণ কলকাতা", "South Kolkata"), l("থিম: ‘মহাপুজোয় মহানায়ক’, উত্তমকুমারের জন্মশতবর্ষ", "Theme: ‘Mahapujay Mahanayak’, Uttam Kumar centenary"), "ballygunge-samaj-sebi-sangha"),
  pandal("wb-kumartuli-park-2026", l("কুমোরটুলি পার্ক সর্বজনীন", "Kumartuli Park Sarbojanin"), l("উত্তর কলকাতা", "North Kolkata"), l("থিম: গঙ্গোত্রী থেকে সাগর, গঙ্গার যাত্রা", "Theme: the Ganga’s journey from Gangotri to the sea"), "kumartuli-park"),
  pandal("wb-jagat-mukherjee-2026", l("জগৎ মুখার্জি পার্ক", "Jagat Mukherjee Park"), l("যতীন্দ্রমোহন অ্যাভিনিউ, উত্তর কলকাতা", "Jatindra Mohan Avenue, north Kolkata"), l("থিম: উদয়শঙ্করকে শ্রদ্ধা", "Theme: tribute to Uday Shankar"), "jagat-mukherjee-park"),
  pandal("wb-shibmandir-2026", l("শিবমন্দির সর্বজনীন", "Shibmandir Sarbojanin"), l("রবীন্দ্র সরোবরের কাছে", "Near Rabindra Sarobar"), l("থিম: ‘পরব’, রাজস্থানের গণগৌর উৎসব", "Theme: ‘Porob’, Rajasthan’s Gangaur festival"), "shibmandir-sarbojanin"),
  pandal("wb-siliguri-rabindra-2026", l("রবীন্দ্র সংঘ, শিলিগুড়ি", "Rabindra Sangha, Siliguri"), l("শিলিগুড়ি", "Siliguri"), l("থিম: ‘আমি’, বাবা-মায়ের বিচ্ছেদে সন্তানের কথা", "Theme: ‘Aami’, on children and parental separation"), "rabindra-sangha-siliguri", { title: "ANI: Rabindra Sangha's Durga Puja pandal in Siliguri (10 Oct 2026)", url: "https://www.aninews.in/news/national/general-news/west-bengal-rabindra-sangha8217s-durga-puja-pandal-in-siliguri-highlights-impact-of-parental-separation-on-children20261010084019/", date: "2026-10-10" }),

  // ---------------- Bangladesh ----------------
  {
    id: "bd-parishad-meeting-2026",
    region: "bd",
    kind: "notice",
    title: l("পুজো উদযাপন পরিষদের প্রস্তুতি সভা", "Puja Udjapan Parishad preparation meeting"),
    summary: l(
      "ঢাকেশ্বরী জাতীয় মন্দিরে প্রায় ৭০টি জেলা ও মহানগর কমিটির প্রস্তুতি সভা, সভাপতিত্বে বাসুদেব ধর।",
      "About 70 district and metropolitan committees met at Dhakeshwari National Temple, chaired by Bashudeb Dhar.",
    ),
    place: l("ঢাকেশ্বরী জাতীয় মন্দির, ঢাকা", "Dhakeshwari National Temple, Dhaka"),
    start: "2026-09-26",
    confidence: "confirmed",
    pandalId: "dhakeshwari-national-temple",
    sources: [{ title: "News On AIR: Durga Puja preparations gain momentum across Bangladesh", url: "https://newsonair.gov.in/durga-puja-preparations-gain-momentum-across-bangladesh/", date: "2026-09-26" }],
    lastVerified: VERIFIED,
  },
  {
    id: "bd-mahalaya-2026",
    region: "bd",
    kind: "ritual",
    title: l("মহালয়া: ঢাকেশ্বরীতে প্রার্থনা ও তর্পণ", "Mahalaya: prayers and tarpan at Dhakeshwari"),
    summary: l(
      "ঢাকেশ্বরী জাতীয় মন্দিরে মহালয়ার প্রার্থনা ও তিল-তর্পণ; রমনা কালীমন্দিরেও মহালয়া পালন।",
      "Mahalaya prayers and til-tarpan at Dhakeshwari National Temple; Ramna Kali Mandir also marked the day.",
    ),
    place: l("ঢাকা", "Dhaka"),
    start: "2026-10-10",
    confidence: "confirmed",
    pandalId: "dhakeshwari-national-temple",
    sources: [AIR_MAHALAYA],
    lastVerified: VERIFIED,
  },
  {
    id: "bd-durga-puja-2026",
    region: "bd",
    kind: "dates",
    title: l("শারদীয় দুর্গোৎসব ২০২৬", "Durga Puja 2026 in Bangladesh"),
    summary: l(
      "মহাষষ্ঠী ১৬ অক্টোবর, মহাসপ্তমী ১৭ ও ১৮, মহাষ্টমী ১৯, মহানবমী ২০, বিজয়া দশমী ও প্রতিমা বিসর্জন ২১ অক্টোবর; ঢাকায় বিজয়া শোভাযাত্রা বিকেল ৩টেয়।",
      "Maha Shashthi 16 Oct, Maha Saptami 17 and 18, Maha Ashtami 19, Mahanabami 20, Bijoya Dashami and immersion 21 Oct; Dhaka's Bijoya procession starts at 3 pm.",
    ),
    place: l("বাংলাদেশ", "Bangladesh"),
    start: "2026-10-16",
    end: "2026-10-21",
    confidence: "confirmed",
    sources: [
      AIR_MAHALAYA,
      { title: "Prothom Alo: শারদীয় দুর্গোৎসবের সূচি", url: "https://www.prothomalo.com/bangladesh/capital/nu4dfnzsde", date: "2026-10-14" },
      { title: "Prothom Alo English: Durga Puja begins with Bodhan", url: "https://en.prothomalo.com/bangladesh/vjo6ctddnk", date: "2026-10-15" },
    ],
    lastVerified: "2026-10-15",
  },
  {
    id: "bd-satkhira-matchstick-2026",
    region: "bd",
    kind: "pandal",
    title: l("দেড় লাখ দেশলাই কাঠির দুর্গা, সাতক্ষীরা", "A Durga of 150,000 matchsticks, Satkhira"),
    summary: l(
      "ব্রহ্মরাজপুর সর্বজনীন দুর্গামন্দিরে এবারের প্রতিমা দেড় লাখের বেশি দেশলাই কাঠি দিয়ে তৈরি; গত বছর ছিল ১০০ কেজি চিনিগুঁড়া চালের প্রতিমা।",
      "This year's idol at Brahmarajpur Sarbojanin Durga Mandir is made of more than 150,000 matchsticks; last year's was 100 kg of Chinigura rice.",
    ),
    place: l("ধুলিহর-ব্রহ্মরাজপুর, সাতক্ষীরা সদর", "Dhulihar-Brahmarajpur, Satkhira Sadar"),
    start: "2026-10-16",
    end: "2026-10-21",
    confidence: "confirmed",
    pandalId: "brahmarajpur-durga-mandir-satkhira",
    sources: [{ title: "Dhaka Tribune: Durga idol made with 1.5 lakh matchsticks draws crowds in Satkhira", url: "https://www.dhakatribune.com/bangladesh/nation/421874/durga-idol-made-with-1.5-lakh-matchsticks-draws", date: "2026-10-11" }],
    lastVerified: "2026-10-12",
  },
  {
    id: "bd-holidays-2026",
    region: "bd",
    kind: "holiday",
    title: l("পুজোর ছুটি: ২০–২৪ অক্টোবর", "Puja holidays: 20–24 Oct"),
    summary: l(
      "২০ অক্টোবর (মহানবমী) নির্বাহী আদেশে ছুটি, ২১ অক্টোবর (বিজয়া দশমী) সাধারণ ছুটি, ২২ অক্টোবর অতিরিক্ত ছুটি; সঙ্গে সাপ্তাহিক ছুটি মিলিয়ে টানা পাঁচ দিন।",
      "20 Oct (Mahanabami) is an executive-order holiday, 21 Oct (Bijoya Dashami) a public holiday and 22 Oct an added holiday; with the weekend that makes five days off.",
    ),
    place: l("বাংলাদেশ", "Bangladesh"),
    start: "2026-10-20",
    end: "2026-10-24",
    confidence: "confirmed",
    sources: [{ title: "Jagonews24: Durga Puja holiday notification", url: "https://www.jagonews24.com/en/national/news/96867", date: "2026-10-07" }],
    lastVerified: VERIFIED,
  },
];

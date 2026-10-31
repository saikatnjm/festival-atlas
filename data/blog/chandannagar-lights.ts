// Blog: Chandannagar Jagaddhatri Puja and its lights. Facts come from pages fetched on 31 Oct 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI_CITY = { title: "Wikipedia, Chandannagar", url: "https://en.wikipedia.org/wiki/Chandannagar" };
const WIKI_PUJA = { title: "Wikipedia, Jagaddhatri Puja", url: "https://en.wikipedia.org/wiki/Jagaddhatri_Puja" };
const WIKI_STATION = { title: "Wikipedia, Chandannagar railway station", url: "https://en.wikipedia.org/wiki/Chandannagar_railway_station" };
const ETV24 = { title: "ETV Bharat, Chandannagar Jagaddhatri Puja lighting (9 Nov 2024)", url: "https://www.etvbharat.com/en/!state/west-bengal-chandannagar-jagaddhatri-puja-lighting-puja-pandal-enn24110901801" };
const ETV25 = { title: "ETV Bharat, Chandannagar set to worship tallest Jagadhatri idol (2025)", url: "https://www.etvbharat.com/en/state/bengals-chandannagar-set-to-worship-tallest-jagadhatri-idol-enn25102603013" };
const DRIK = { title: "Drik Panchang, Jagaddhatri Puja 2026 (Kolkata)", url: "https://www.drikpanchang.com/festivals/jagaddhatri-puja/jagaddhatri-puja-date-time.html?geoname-id=1275004&year=2026" };

export const CHANDANNAGAR_LIGHTS: Article = {
  slug: "chandannagar-jagaddhatri-lights",
  published: "2026-10-31",
  updated: "2026-10-31",
  title: l("চন্দননগরের জগদ্ধাত্রী পুজো আর আলো", "Chandannagar Jagaddhatri Puja Lights: A Guide"),
  description: l(
    "চন্দননগর জগদ্ধাত্রী পুজোর ইতিহাস, বিখ্যাত আলোর কাজ, আলোকশিল্পী, বিসর্জনের শোভাযাত্রা আর ২০২৬-এ যাওয়ার পথ।",
    "Chandannagar Jagaddhatri Puja lights explained: history, the light artisans, how big it is, the immersion procession and how to visit in 2026.",
  ),
  h1: l("চন্দননগরের জগদ্ধাত্রী: আলোর শহরের গল্প", "Chandannagar's Jagaddhatri: the story of the city of lights"),
  lead: l(
    "জগদ্ধাত্রী পুজোর সময় চন্দননগর আলোয় সেজে ওঠে। কীভাবে এই আলোর ঐতিহ্য গড়ে উঠল, পুজো কত বড়, আর কীভাবে যাবে।",
    "Chandannagar lights up for Jagaddhatri Puja. Here is how that tradition grew, how big the pujas are, and how to get there.",
  ),
  icon: "💡",
  body: [
    { kind: "h2", text: l("পুজোর ইতিহাস", "A short history") },
    {
      kind: "p",
      text: l(
        "চন্দননগরে পাড়ার সার্বজনীন জগদ্ধাত্রী পুজোর সাল হিসেবে উইকিপিডিয়ায় ১৭৯০ লেখা আছে। একই লেখা বলছে, চন্দননগরে জগদ্ধাত্রী পুজোর একদম শুরুর ইতিহাস অজানা।",
        "Wikipedia gives 1790 as the date of the community Jagaddhatri Puja in Chandannagar. The same page also says the earliest history of the puja in the town is unknown.",
      ),
      source: WIKI_CITY,
    },
    { kind: "h2", text: l("আলোর কাজ আর আলোকশিল্পী", "The lights and the artisans") },
    {
      kind: "p",
      text: l(
        "উইকিপিডিয়া অনুযায়ী পঞ্চমী থেকে দশমী পর্যন্ত পুরো এলাকা স্থানীয় কারিগরদের তৈরি আলোয় সাজে। এই আলো এখন মূলত বিদ্যালঙ্কা এলাকার শিল্পীরা বানান, আর তা বাংলা, ভারত ও বিদেশের নানা উৎসবে যায়। শ্রীধর দাসের মতো শিল্পীদের নাম করা হয়েছে, যাঁদের এলইডি প্যানেলে গল্প চলে, ছবি নড়ে।",
        "Wikipedia says that from Panchami to Dashami the whole area is decked in lights made by local manufacturers. Today the work is mostly done by artisans in the Bidyalanka area, and the lights go to festivals across Bengal, India and abroad. It names maestros such as Sridhar Das, whose LED panels tell animated stories.",
      ),
      source: WIKI_CITY,
    },
    {
      kind: "p",
      text: l(
        "২০২৪-এর ইটিভি ভারতের প্রতিবেদন বলছে, প্রথম বাল্ব-আলো সরবরাহ করেছিল হাওড়ার মহাকালী ইলেকট্রিক, আর বাগবাজার জগদ্ধাত্রী পুজো কমিটি প্রথম সেটা ব্যবহার করে। তার আগে গ্যাসের আলো আর ডে-লাইট ছিল। শিল্পী অসীম দে বলেছেন, তিনি ১৯৮৮ সালে এখানে এলইডি এনেছিলেন। এ ছাড়া শ্রীধর দাস, তারক শেঠ আর বাবু পালের নামও জনপ্রিয় শিল্পী হিসেবে এসেছে।",
        "A 2024 ETV Bharat report says the first bulb lights were supplied by Mahakali Electric of Howrah and first used by the Bagbazar Jagaddhatri Puja Committee; before that came gas lights and daylights. Artist Ashim Dey says he introduced LED lights here in 1988. Sridhar Das, Tarak Sheth, Babu Pal and Ashim Dey are named as well-known local artists.",
      ),
      source: ETV24,
    },
    {
      kind: "p",
      text: l(
        "২০২৪-এর একই প্রতিবেদন জানায়, বিদ্যুৎ বিভ্রাট ঠেকাতে মাটির নীচে বিদ্যুতের তার বসানোর জন্য ১০৬ কোটি টাকা মঞ্জুর হয়েছিল।",
        "The same 2024 report says Rs 106 crore was sanctioned for laying underground electric cables to prevent power outages.",
      ),
      source: ETV24,
    },
    { kind: "h2", text: l("পুজো কত বড়, আর শোভাযাত্রা", "How big it is, and the procession") },
    {
      kind: "p",
      text: l(
        "২০২৫-এর প্রতিবেদনে কেন্দ্রীয় কমিটির তালিকায় ১৮০টি পুজো কমিটির কথা আছে, বেশিরভাগই পুরনো রীতি মেনে চলে। ওই বছর পুজো চলে পাঁচ দিন, আর সব প্রতিমা একাদশীতে বিসর্জন হওয়ার কথা ছিল।",
        "A 2025 report lists 180 puja committees on the central committee's roll, most keeping older traditions. That year the puja ran five days, with all idols due to be immersed on Ekadashi.",
      ),
      source: ETV25,
    },
    {
      kind: "p",
      text: l(
        "২০২৫-এ কানাইলাল পল্লির প্রতিমা ছিল প্রায় ৭৫ ফুট উঁচু, বাঁশের কাঠামোয় ফাইবারের। ওই পাড়ার আগের সবচেয়ে উঁচু জগদ্ধাত্রী ছিল ২৬ ফুটের। উইকিপিডিয়া বলছে, এখানকার প্রতিমা কলকাতার দুর্গাপুজোর প্রতিমার প্রায় তিন গুণ উঁচু।",
        "In 2025 the Kanailal Pally idol stood about 75 feet, made of fibre on a bamboo frame; the locality's previous tallest Jagaddhatri was 26 feet. Wikipedia says the idols here are almost three times taller than Kolkata's Durga Puja idols.",
      ),
      source: ETV25,
    },
    {
      kind: "p",
      text: l(
        "বিসর্জনের রাতে বড় বড় কমিটি আলো আর থিম সাজানো প্রতিমা নিয়ে শোভাযাত্রায় বেরোয়; ২০২৪-এ শোভাযাত্রা চলেছিল ১১ নভেম্বর সন্ধে থেকে ১২ নভেম্বরের ভোর পর্যন্ত।",
        "On immersion night the big committees take their lit-up, themed idols out in a procession; in 2024 it ran from the evening of 11 November into the early hours of 12 November.",
      ),
      source: ETV24,
    },
    { kind: "h2", text: l("কীভাবে যাবে", "How to visit") },
    {
      kind: "p",
      text: l(
        "চন্দননগর স্টেশন (কোড CGR) হাওড়া থেকে ৩৩ কিমি দূরে, হাওড়া–ব্যান্ডেল অংশে। উইকিপিডিয়া লিখেছে স্টেশনটি জগদ্ধাত্রী পুজোর জন্য বিখ্যাত।",
        "Chandannagar station (code CGR) is 33 km from Howrah, on the Howrah–Bandel stretch. Wikipedia notes the station is greatly known for Jagaddhatri Puja.",
      ),
      source: WIKI_STATION,
    },
    {
      kind: "p",
      text: l(
        "দৃক পঞ্চাঙ্গ অনুযায়ী কলকাতার জন্য ২০২৬-এর জগদ্ধাত্রী পুজো বৃহস্পতিবার, ১৯ নভেম্বর। নবমী তিথি ১৮ নভেম্বর সকাল ৬টা ০৪ থেকে ১৯ নভেম্বর সকাল ৭টা ০৫ পর্যন্ত।",
        "Drik Panchang lists Jagaddhatri Puja 2026 for Kolkata on Thursday, 19 November. Navami tithi runs from 06:04 am on 18 November to 07:05 am on 19 November.",
      ),
      source: DRIK,
    },
    {
      kind: "tip",
      text: l(
        "পুজোর রাতগুলোয় স্টেশন আর রাস্তায় প্রচণ্ড ভিড় হয়। সন্ধের আগেই পৌঁছে যাও, ফেরার ট্রেনের সময় আগে থেকে দেখে রাখো, দলের সঙ্গে দেখা করার জায়গা ঠিক করো, আর বাচ্চা-বয়স্কদের হাত ধরে রাখো। আলো দেখতে হাঁটতে হয়, তাই আরামের জুতো পরো।",
        "Station and streets get very crowded on the main nights. Arrive before dusk, check your return train beforehand, agree a meeting spot with your group, and keep children and elders close. You will walk a lot to see the lights, so wear comfortable shoes.",
      ),
    },
  ],
  faq: [
    {
      q: l("চন্দননগরের জগদ্ধাত্রী পুজো কবে শুরু হয়?", "When did Chandannagar Jagaddhatri Puja start?"),
      a: l("উইকিপিডিয়ায় পাড়ার সার্বজনীন পুজোর সাল ১৭৯০ লেখা আছে, তবে একদম শুরুর ইতিহাস অজানা বলা হয়েছে।", "Wikipedia gives 1790 for the community puja, though it says the earliest history is unknown."),
    },
    {
      q: l("চন্দননগরের জগদ্ধাত্রী পুজো ২০২৬-এ কবে?", "When is Chandannagar Jagaddhatri Puja in 2026?"),
      a: l("দৃক পঞ্চাঙ্গ অনুযায়ী বৃহস্পতিবার, ১৯ নভেম্বর ২০২৬ (নবমী)।", "Thursday, 19 November 2026 (Navami), per Drik Panchang."),
    },
    {
      q: l("হাওড়া থেকে চন্দননগর কত দূর?", "How far is Chandannagar from Howrah?"),
      a: l("চন্দননগর স্টেশন হাওড়া থেকে ৩৩ কিমি, হাওড়া–ব্যান্ডেল অংশে।", "Chandannagar station is 33 km from Howrah, on the Howrah–Bandel stretch."),
    },
    {
      q: l("চন্দননগরে কতগুলো জগদ্ধাত্রী পুজো হয়?", "How many Jagaddhatri pujas are there in Chandannagar?"),
      a: l("২০২৫-এর প্রতিবেদনে কেন্দ্রীয় কমিটির তালিকায় ১৮০টি পুজো কমিটির কথা আছে।", "A 2025 report lists 180 puja committees on the central committee's roll."),
    },
    {
      q: l("চন্দননগরের আলো কারা বানান?", "Who makes the Chandannagar lights?"),
      a: l("স্থানীয় কারিগররা, এখন মূলত বিদ্যালঙ্কা এলাকার। শ্রীধর দাস, তারক শেঠ, বাবু পাল আর অসীম দে-র নাম শিল্পী হিসেবে এসেছে।", "Local artisans, now mostly in the Bidyalanka area. Sridhar Das, Tarak Sheth, Babu Pal and Ashim Dey are named as artists."),
    },
  ],
  related: [
    { href: "/jagaddhatri-puja-2026", label: l("জগদ্ধাত্রী পুজো ২০২৬", "Jagaddhatri Puja 2026") },
    { href: "/greetings/jagaddhatri", label: l("জগদ্ধাত্রী পুজোর শুভেচ্ছা কার্ড", "Jagaddhatri greeting cards") },
    { href: "/puja/kanailal-pally-chandannagar", label: l("কানাইলাল পল্লি, চন্দননগর", "Kanailal Pally, Chandannagar") },
  ],
  sources: [WIKI_CITY, WIKI_PUJA, WIKI_STATION, ETV24, ETV25, DRIK],
};

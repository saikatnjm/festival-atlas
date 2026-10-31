// Greeting cards: one per Puja day (Mahalaya → Bijoya), Kali Puja / Diwali / Bhai Phota, plus an everyday one. Each day has a
// character, a headline and several lines (warm, funny, nostalgic) so the same day can be sent to
// the family group and the friends' group with a different flavour. Only type imports (tested).

import type { L } from "@/lib/i18n";
import type { CharId, Mood } from "./types";

const l = (bn: string, en: string): L => ({ bn, en });

export type GreetingDay =
  | "mahalaya"
  | "panchami"
  | "shashthi"
  | "saptami"
  | "ashtami"
  | "navami"
  | "dashami"
  | "bijoya"
  | "anytime"
  | "kali"
  | "diwali"
  | "bhaiphota"
  | "jagaddhatri"
  | "saraswati"
  | "shivratri"
  | "noboborsho"
  | "dol";

export type GreetingSeason = "durga" | "kali" | "spring";

/** Chip groups, current season first. */
export const GREETING_SEASONS: { id: GreetingSeason; name: L }[] = [
  { id: "kali", name: l("কালীপুজো থেকে জগদ্ধাত্রী", "Kali Puja to Jagaddhatri") },
  { id: "durga", name: l("দুর্গাপুজো", "Durga Puja") },
  { id: "spring", name: l("সরস্বতী পুজো থেকে নববর্ষ", "Saraswati Puja to New Year") },
];

export interface Greeting {
  id: GreetingDay;
  icon: string;
  name: L;
  /** The big line on the card. */
  headline: L;
  char: CharId;
  mood: Mood;
  /** Lines to pick from (index travels in the share link). */
  lines: L[];
  /** Short hashtag-style tags for the share text (Latin, so they work on every app). */
  tags: string[];
  /** Defaults to "durga". */
  season?: GreetingSeason;
  /** Postcard postmark when it should differ from `name`. */
  stamp?: L;
  /** false: don't append the Durga pandal-hopping pool (COMMON_LINES). */
  pool?: boolean;
  /** Placeholder for the "to whom?" field when the default one doesn't fit (Bhai Phota: siblings). */
  toPh?: L;
}

export const GREETINGS: Greeting[] = [
  {
    id: "mahalaya",
    icon: "🌅",
    name: l("মহালয়া", "Mahalaya"),
    headline: l("শুভ মহালয়া!", "Shubho Mahalaya!"),
    char: "sleepy",
    mood: "wow",
    lines: [
      l("ভোর ৪টে, রেডিওতে ‘আশ্বিনের শারদপ্রাতে’, চোখে ঘুম, মনে পুজো। এল মা!", "4 a.m., the radio, sleepy eyes, Puja in the heart. Maa is coming!"),
      l("যে ভোরে ঘুম ভাঙে না, সেই ভোরেই বছরে একদিন সবাই জেগে ওঠে। শুভ মহালয়া!", "The one dawn a year the whole house wakes up on its own. Shubho Mahalaya!"),
      l("দেবীপক্ষ শুরু। প্ল্যান, জামা, আর ছুটির হিসেব: সব এবার ফাইনাল!", "Devi Paksha begins. Plans, clothes and leave applications: all final now!"),
      l("মহালয়া মানে: অ্যালার্ম না দিলেও ঠিক ভোরে ঘুম ভেঙে যায়।", "Mahalaya: the one morning you wake before the alarm."),
      l("‘যা দেবী সর্বভূতেষু’ শুনে গায়ে কাঁটা, মনে মা। শুভ মহালয়া!", "Goosebumps at ‘Ya Devi Sarvabhuteshu’, Maa in the heart. Shubho Mahalaya!"),
      l("আকাশে পেঁজা তুলো, মাঠে কাশফুল, বুকে ঢাকের শব্দ। শুভ মহালয়া!", "Cotton clouds, kash in the fields, the dhak in the chest. Shubho Mahalaya!"),
      l("তর্পণ, রেডিও, চায়ের কাপ: পুজোর আগে সবচেয়ে শান্ত ভোর। শুভ মহালয়া!", "Tarpan, the radio, a cup of tea: the calmest dawn before Puja. Shubho Mahalaya!"),
      l("আজ থেকে কাউন্টডাউন। ক’দিন পরেই প্রথম ঢাকের বাড়ি! শুভ মহালয়া!", "The countdown starts today. Just days to the first dhak! Shubho Mahalaya!"),
      l("ঘুমচোখে মহালয়া শোনা, তারপর আরেক রাউন্ড ঘুম: এটাও ঐতিহ্য। শুভ মহালয়া!", "Mahalaya half-asleep, then another round of sleep: also a tradition. Shubho Mahalaya!"),
    ],
    tags: ["ShubhoMahalaya", "DurgaPuja2026"],
  },
  {
    id: "panchami",
    icon: "🪔",
    name: l("পঞ্চমী", "Panchami"),
    headline: l("শুভ পঞ্চমী!", "Shubho Panchami!"),
    char: "selfie",
    mood: "happy",
    lines: [
      l("আলো জ্বলে উঠল, প্যান্ডেল খুলল, আর আমাদের পা আর ঘরে থাকছে না।", "The lights are on, the pandals are open, and our feet won't stay home."),
      l("পঞ্চমী মানে ‘একটু ঘুরে আসি’ বলে রাত একটায় ফেরা।", "Panchami: ‘just a quick look’ and home at 1 a.m."),
      l("পঞ্চমীর সন্ধে: আলোর গেট দেখা, ভিড় মাপা, আর ‘কাল আসল ঘোরা’। শুভ পঞ্চমী!", "Panchami evening: lights, crowd-checking, and ‘the real hopping is tomorrow’. Shubho Panchami!"),
      l("আজ প্যান্ডেল ফাঁকা, কাল থেকে কাঁধে কাঁধ। পঞ্চমীতেই ঘুরে নাও!", "Pandals are empty today, shoulder-to-shoulder from tomorrow. Hop now!"),
      l("নতুন জামা ইস্ত্রি হল, জুতো বেরোল, গলি সেজে উঠল। শুভ পঞ্চমী!", "The new clothes are ironed, the shoes are out, the lane is dressed. Shubho Panchami!"),
      l("পঞ্চমী: পুজোর ট্রেলার। সিনেমা শুরু কাল। শুভ পঞ্চমী!", "Panchami: the trailer. The film starts tomorrow. Shubho Panchami!"),
      l("উদ্বোধনের ফিতে কাটা হচ্ছে চারদিকে, আমরা শুধু রুট ঠিক করছি। শুভ পঞ্চমী!", "Ribbons are being cut all over town; we're just fixing the route. Shubho Panchami!"),
      l("ঢাকিরা এসে গেছে, মাইক টেস্টিং চলছে, পাড়া জেগে উঠল। শুভ পঞ্চমী!", "The dhakis have arrived, the mic is being tested, the para is awake. Shubho Panchami!"),
      l("পঞ্চমীর শুভেচ্ছা! আজ থেকে ঘড়ি আর ক্যালেন্ডার, দুটোই ছুটিতে।", "Shubho Panchami! From today the clock and the calendar are both on leave."),
    ],
    tags: ["ShubhoPanchami", "DurgaPuja2026"],
  },
  {
    id: "shashthi",
    icon: "🥁",
    name: l("ষষ্ঠী", "Shashthi"),
    headline: l("শুভ ষষ্ঠী!", "Shubho Shashthi!"),
    char: "detective",
    mood: "proud",
    lines: [
      l("বোধন হল, ঢাক বাজল, মা এলেন। পুজো শুরু!", "The bodhon is done, the dhak is playing, Maa is here. Puja begins!"),
      l("ষষ্ঠী থেকে দশমী: ছুটি, ভোগ, আড্ডা আর একটু বেশি ঘুমের লোভ। শুভ ষষ্ঠী!", "Shashthi to Dashami: holidays, bhog, adda and a little extra sleep. Shubho Shashthi!"),
      l("নতুন জামার ট্যাগ কাটার দিন আজ। শুভ ষষ্ঠী!", "Tag-cutting day for the new clothes. Shubho Shashthi!"),
      l("ষষ্ঠীর সন্ধেয় বোধন, আর আমাদের মনে উৎসবের সুইচ অন। শুভ ষষ্ঠী!", "Bodhon this evening, and the festival switch flips on inside us. Shubho Shashthi!"),
      l("মায়ের মুখের ঢাকা খুলল, আর শহরের মুখে হাসি ফুটল। শুভ ষষ্ঠী!", "The veil comes off Maa's face, and the city breaks into a smile. Shubho Shashthi!"),
      l("ষষ্ঠী মানে বেলতলায় মায়ের আমন্ত্রণ, আর আমাদের ঘোরার আমন্ত্রণ।", "Shashthi: Maa is invited under the bel tree, and we're invited to roam."),
      l("প্রথম ঢাকের বাড়ি শুনে বুকটা যে কেমন করে ওঠে, সেটাই পুজো। শুভ ষষ্ঠী!", "That lurch in the chest at the first dhak beat: that's Puja. Shubho Shashthi!"),
      l("আজ থেকে চারটে দিন পায়ের, পেটের আর মনের। শুভ ষষ্ঠী!", "Four days from today for the feet, the stomach and the heart. Shubho Shashthi!"),
      l("শুভ ষষ্ঠী! প্ল্যান ‘A’ হারিয়ে গেছে, প্ল্যান ‘B’ হল ভিড়ের সঙ্গে ভেসে যাওয়া।", "Shubho Shashthi! Plan A is lost; plan B is drifting with the crowd."),
      l("বোধনের শাঁখ, আরতির আলো, আর প্রথম প্যান্ডেলের সেলফি। শুভ ষষ্ঠী!", "The conch at bodhon, the arati lights, the first pandal selfie. Shubho Shashthi!"),
    ],
    tags: ["ShubhoShashthi", "DurgaPuja2026"],
  },
  {
    id: "saptami",
    icon: "🍛",
    name: l("সপ্তমী", "Saptami"),
    headline: l("শুভ সপ্তমী!", "Shubho Saptami!"),
    char: "bhog",
    mood: "happy",
    lines: [
      l("নবপত্রিকা স্নান সকালে, খিচুড়ি দুপুরে, প্যান্ডেল রাতে। পারফেক্ট দিন।", "Nabapatrika at dawn, khichuri at noon, pandals at night. A perfect day."),
      l("সপ্তমীর শুভেচ্ছা! ভোগের লাইনে দেখা হবে, দ্বিতীয় প্লেটের পাশে।", "Shubho Saptami! See you in the bhog queue, next to the second plate."),
      l("আজ থেকে পা ব্যথা শুরু, মন ভালো হওয়াও। শুভ সপ্তমী!", "From today the feet ache and the heart is light. Shubho Saptami!"),
      l("কলাবউ স্নান দেখতে ভোরে ওঠা, তারপর সারাদিন ‘একটু ঘুমিয়ে নিই’। শুভ সপ্তমী!", "Up at dawn for the kolabou snan, then ‘a little nap’ all day. Shubho Saptami!"),
      l("সপ্তমীতে পুজো জমে গেল: প্যান্ডেলে ভিড়, রাস্তায় আলো, পেটে খিচুড়ি।", "Saptami and Puja is in full swing: crowds, lights, khichuri."),
      l("আজ দ্বিতীয় দিন, পায়ের ব্যথা দ্বিতীয় রাউন্ড, মন তবু প্রথম দিনের মতো। শুভ সপ্তমী!", "Day two, round two of sore feet, the heart still on day one. Shubho Saptami!"),
      l("সপ্তমীর রাতে উত্তর থেকে দক্ষিণ: একটা ম্যাপ, একটা দল, অগুনতি প্যান্ডেল।", "Saptami night, north to south: one map, one gang, countless pandals."),
      l("ধুনুচি নাচের রিহার্সাল আজ, ফাইনাল অষ্টমীতে। শুভ সপ্তমী!", "Dhunuchi dance rehearsal today, the final on Ashtami. Shubho Saptami!"),
      l("শুভ সপ্তমী! ফোনের গ্যালারি ভরছে, চার্জ কমছে, মন ভরছে।", "Shubho Saptami! The gallery fills, the battery drains, the heart fills."),
    ],
    tags: ["ShubhoSaptami", "DurgaPuja2026"],
  },
  {
    id: "ashtami",
    icon: "🌼",
    name: l("অষ্টমী", "Ashtami"),
    headline: l("শুভ অষ্টমী!", "Shubho Ashtami!"),
    char: "bagha",
    mood: "proud",
    lines: [
      l("অঞ্জলির ফুল, ধুনুচির ধোঁয়া, ঢাকের তাল: আজ মন ভরে থাকার দিন। শুভ অষ্টমী!", "Anjali flowers, dhunuchi smoke, the dhak: a day to fill the heart. Shubho Ashtami!"),
      l("‘কটার অঞ্জলি?’ পাড়ার সবচেয়ে জরুরি প্রশ্ন আজ। শুভ অষ্টমী!", "‘What time is anjali?’ The neighbourhood's most urgent question today. Shubho Ashtami!"),
      l("লুচি-আলুর দম সকালে, সন্ধিপুজো সন্ধেয়, আর মাঝখানে নতুন শাড়ি। শুভ অষ্টমী!", "Luchi and aloo dum in the morning, Sandhi Puja at dusk, and a new saree in between. Shubho Ashtami!"),
      l("অষ্টমীর অঞ্জলি: খালি পেটে ফুল হাতে লাইন, আর শেষে লুচির গন্ধ। শুভ অষ্টমী!", "Ashtami anjali: flowers in hand on an empty stomach, and luchi at the end. Shubho Ashtami!"),
      l("সন্ধিপুজোর ১০৮ প্রদীপ জ্বলে উঠলে পুরো পাড়া চুপ। ওই মুহূর্তটার জন্য। শুভ অষ্টমী!", "When the 108 lamps of Sandhi Puja light up, the whole para falls silent. For that moment. Shubho Ashtami!"),
      l("আজ নতুন শাড়ি-পাঞ্জাবির ফাইনাল। ফটোগ্রাফার বন্ধু, তৈরি থাকো। শুভ অষ্টমী!", "The big day for the new saree and panjabi. Photographer friend, be ready. Shubho Ashtami!"),
      l("মহাষ্টমীর শুভেচ্ছা! আজ পুজো, আজ ভোগ, আজ সারারাত। ঘুম কাল।", "Shubho Maha Ashtami! Today is puja, bhog and all night. Sleep is for tomorrow."),
      l("ধুনুচির ধোঁয়ায় চোখ জ্বলছে, তবু নাচ থামছে না। শুভ অষ্টমী!", "Eyes stinging in the dhunuchi smoke, and the dance still doesn't stop. Shubho Ashtami!"),
      l("অষ্টমীর সকাল: পাড়ার মাইকে ‘অঞ্জলি শুরু হচ্ছে’, বাড়িতে ‘জলদি চল’। শুভ অষ্টমী!", "Ashtami morning: ‘anjali is starting’ on the para mic, ‘hurry up’ at home. Shubho Ashtami!"),
      l("মায়ের পায়ে ফুল, মনে একটাই চাওয়া: সবাই ভালো থাকুক। শুভ অষ্টমী!", "Flowers at Maa's feet, one wish in the heart: may everyone be well. Shubho Ashtami!"),
    ],
    tags: ["ShubhoAshtami", "DurgaPuja2026", "MahaAshtami"],
  },
  {
    id: "navami",
    icon: "🌙",
    name: l("নবমী", "Navami"),
    headline: l("শুভ নবমী!", "Shubho Navami!"),
    char: "excuse",
    mood: "panic",
    lines: [
      l("নবমী নিশি, যেও না চলে! আজকের রাতটা একটু লম্বা হোক।", "Navami night, don't go! Let tonight run a little longer."),
      l("শেষ রাতের হপিং, শেষ ফুচকা, শেষ ‘আর একটা প্যান্ডেল’। শুভ নবমী!", "The last night of hopping, the last phuchka, the last ‘one more pandal’. Shubho Navami!"),
      l("মন বলছে ‘আরও একদিন’, ক্যালেন্ডার বলছে ‘কাল দশমী’। শুভ নবমী!", "The heart says ‘one more day’, the calendar says ‘Dashami tomorrow’. Shubho Navami!"),
      l("নবমীর সন্ধেয় ঢাকের শব্দটা একটু বেশি জোরে, একটু বেশি কাছে। শুভ নবমী!", "On Navami evening the dhak sounds a little louder, a little closer. Shubho Navami!"),
      l("মাংস-ভাতের নবমী, আড্ডার নবমী, ‘আর একটা দিন থাক না’ নবমী।", "Mutton-and-rice Navami, adda Navami, ‘stay one more day, please’ Navami."),
      l("আজ রাতে ঘুম নেই: শেষ প্যান্ডেল, শেষ আরতি, শেষ ফুচকার ঝাল। শুভ নবমী!", "No sleep tonight: the last pandal, the last arati, the last fiery phuchka. Shubho Navami!"),
      l("নবমীর রাত বড্ড ছোট। ফোন ফুল চার্জ, মন হাফ। শুভ নবমী!", "Navami night is far too short. Phone fully charged, heart only half. Shubho Navami!"),
      l("যত রাত বাড়ে, তত আলো, তত মানুষ, তত মন খারাপের আগাম আভাস। শুভ নবমী!", "The later it gets, the more lights, the more people, the first hint of the blues. Shubho Navami!"),
      l("শুভ নবমী! আজ হোমের আগুন, কাল বিদায়ের জল।", "Shubho Navami! Today the fire of the homa, tomorrow the water of farewell."),
    ],
    tags: ["ShubhoNavami", "DurgaPuja2026"],
  },
  {
    id: "dashami",
    icon: "🔴",
    name: l("দশমী", "Dashami"),
    headline: l("শুভ দশমী!", "Shubho Dashami!"),
    char: "bhog",
    mood: "sleepy",
    lines: [
      l("সিঁদুর খেলা, মিষ্টিমুখ, আর ‘আসছে বছর আবার হবে’। শুভ দশমী!", "Sindoor khela, sweets, and ‘asche bochor abar hobe’. Shubho Dashami!"),
      l("মা চললেন, মন একটু খারাপ, মিষ্টির বাক্স একটু ভারী। শুভ দশমী!", "Maa is leaving, the heart is a little heavy, the sweet box a little heavier. Shubho Dashami!"),
      l("বরণের থালায় পান-মিষ্টি, চোখে জল, গালে সিঁদুর। শুভ দশমী!", "Paan and sweets on the boron plate, tears in the eyes, sindoor on the cheeks. Shubho Dashami!"),
      l("‘বলো দুর্গা মাই কি, জয়!’ ট্রাকে চেপে মা চললেন, আমরা হাত নাড়লাম। শুভ দশমী!", "‘Bolo Durga Mai ki, jai!’ Maa rides off on the truck, we wave. Shubho Dashami!"),
      l("দশমীর সিঁদুরে সবার গাল লাল, মন একটু ফ্যাকাশে। আসছে বছর আবার হবে!", "Dashami sindoor reddens every cheek, the heart goes a little pale. Asche bochor abar hobe!"),
      l("বিসর্জনের ঘাটে ঢাক বাজছে, মা হাসছেন, আমরা গুনছি: আর ৩৬০ দিন।", "The dhak at the ghat, Maa smiling, us counting: 360 days to go."),
      l("শুভ দশমী! প্যান্ডেল খুলছে, কিন্তু গল্পগুলো থেকে যাচ্ছে।", "Shubho Dashami! The pandal is coming down, the stories are staying."),
      l("ধুনুচি, সিঁদুর, নিমকি: দশমীর তিন মিষ্টি দুঃখ। শুভ দশমী!", "Dhunuchi, sindoor, nimki: Dashami's three sweet sorrows. Shubho Dashami!"),
      l("মা বাপের বাড়ি থেকে ফিরে গেলেন; আমরাও কাল থেকে অফিস-বাড়ি। শুভ দশমী!", "Maa heads back from her parents' home; from tomorrow we're back to office-and-home too. Shubho Dashami!"),
    ],
    tags: ["ShubhoDashami", "DurgaPuja2026", "SindoorKhela"],
  },
  {
    id: "bijoya",
    icon: "🤗",
    name: l("বিজয়া", "Bijoya"),
    headline: l("শুভ বিজয়া!", "Shubho Bijoya!"),
    char: "gopal",
    mood: "happy",
    lines: [
      l("শুভ বিজয়া! বড়দের প্রণাম, ছোটদের ভালোবাসা, আর সবার জন্য একটা নাড়ু।", "Shubho Bijoya! Pronam to the elders, love to the little ones, and a naru for everyone."),
      l("বিজয়ার কোলাকুলি, নিমকি আর নারকেল নাড়ু: মন ভরে থাকুক সারা বছর।", "Bijoya hugs, nimki and coconut naru: may the heart stay full all year."),
      l("পুজো শেষ, গল্প শুরু। আসছে বছর আবার হবে! শুভ বিজয়া।", "Puja is over, the stories begin. Asche bochor abar hobe! Shubho Bijoya."),
      l("শুভ বিজয়া! ডায়েট আবার কাল থেকে, আজ নাড়ুর দিন।", "Shubho Bijoya! The diet restarts tomorrow; today is for naru."),
      l("বিজয়ার প্রণাম নিও, আশীর্বাদ দিও, আর নাড়ুর ঠোঙাটা ভরে দিও।", "Accept my Bijoya pronam, give your blessings, and fill the naru bag."),
      l("ফোনে ‘শুভ বিজয়া’ লিখছি, মনে মনে পায়ে হাত। ভালো থেকো।", "Typing ‘Shubho Bijoya’ on the phone, touching your feet in my mind. Stay well."),
      l("বিজয়ার শুভেচ্ছা! ঘুগনি-নিমকি-নাড়ু: এই ত্রিভুজে সারা বছরের ভালোবাসা।", "Shubho Bijoya! Ghugni, nimki, naru: a year's worth of love in this triangle."),
      l("শুভ বিজয়া! কোলাকুলি হল তিনবার, মিষ্টি হল অনেকবার।", "Shubho Bijoya! Three hugs each, sweets uncounted."),
      l("পুজো গেল, রইল ছবি, গল্প আর বিজয়ার মিষ্টি। শুভ বিজয়া!", "Puja is gone; the photos, the stories and the Bijoya sweets remain. Shubho Bijoya!"),
    ],
    tags: ["ShubhoBijoya", "SubhoBijoya", "DurgaPuja2026"],
  },
  {
    id: "anytime",
    icon: "✨",
    name: l("শারদীয়া", "Sharodiya"),
    headline: l("শুভ শারদীয়া!", "Shubho Sharodiya!"),
    char: "hansjaru",
    mood: "wow",
    lines: [
      l("কাশফুল, শিউলি, ঢাকের বোল আর তোমার জন্য অনেক ভালোবাসা। শুভ শারদীয়া!", "Kash flowers, shiuli, the dhak, and lots of love for you. Shubho Sharodiya!"),
      l("পুজো মানে বাড়ি ফেরা, পুজো মানে তুমি। শুভ শারদীয়া!", "Puja means coming home. Puja means you. Shubho Sharodiya!"),
      l("শিউলির গন্ধে ঘুম ভাঙা সকাল: পুজো আর দূরে নয়। শুভ শারদীয়া!", "A morning that smells of shiuli: Puja isn't far. Shubho Sharodiya!"),
      l("ঢাকের বোল, ধুনোর গন্ধ, নতুন জামা: তোমার পুজো ভালো কাটুক। শুভ শারদীয়া!", "The dhak, the smell of dhuno, new clothes: have a lovely Puja. Shubho Sharodiya!"),
      l("দূরে থাকলেও পুজো মনের মধ্যে। শুভ শারদীয়া, যেখানেই থাকো!", "Even far away, Puja lives inside. Shubho Sharodiya, wherever you are!"),
      l("ভালো খেও, ভালো ঘুরো, ফোনটা চার্জ দিও। শুভ শারদীয়া!", "Eat well, roam well, charge the phone. Shubho Sharodiya!"),
      l("পুজোর ক’টা দিন পৃথিবীটা একটু নরম হয়ে যায়। শুভ শারদীয়া!", "For a few Puja days the world goes a little soft. Shubho Sharodiya!"),
      l("মা আসছেন, আর তোমার জন্য আমার আদর। শুভ শারদীয়া!", "Maa is coming, and so is my love for you. Shubho Sharodiya!"),
    ],
    tags: ["ShubhoSharodiya", "DurgaPuja2026"],
  },
  {
    id: "kali",
    icon: "🌑",
    name: l("কালীপুজো", "Kali Puja"),
    headline: l("শুভ কালীপুজো!", "Shubho Kali Puja!"),
    stamp: l("শ্যামাপুজো", "Shyama Puja"),
    char: "bagha",
    mood: "wow",
    season: "kali",
    lines: [
      l("অমাবস্যার রাত, প্রদীপের সারি, আর মায়ের জবাফুল। শুভ কালীপুজো!", "A moonless night, rows of lamps, and red hibiscus for Maa. Shubho Kali Puja!"),
      l("নিশুতি রাতে পুজো, ভোরে খিচুড়ি: এই রাতটা জেগে থাকার জন্যই। শুভ কালীপুজো!", "Puja deep in the night, khichuri at dawn: a night made for staying up. Shubho Kali Puja!"),
      l("মা কালী সব অন্ধকার দূর করুন, ঘরে আলো থাকুক সারা বছর।", "May Maa Kali chase away every darkness and keep the home lit all year."),
      l("চোদ্দ প্রদীপ জ্বলল, চোদ্দ শাক খাওয়া হল, এবার অমাবস্যার রাত। শুভ কালীপুজো!", "Fourteen lamps lit, fourteen greens eaten, now the moonless night. Shubho Kali Puja!"),
      l("ছাদে মোমবাতি, বারান্দায় প্রদীপ, পাড়ায় ঢাক। শুভ শ্যামাপুজো!", "Candles on the roof, lamps on the balcony, the dhak in the para. Shubho Shyama Puja!"),
      l("বাজি পোড়াও নিয়ম মেনে, সময় মেনে; পাড়ার কুকুর-বেড়াল আর দাদু-দিদাও তোমার পাড়ার লোক।", "Crackers only by the rules and the hours; the para's dogs, cats and grandparents are neighbours too."),
      l("মায়ের হাতে খাঁড়া, আমাদের হাতে প্রদীপ: আঁধার আজ হার মানবে। শুভ কালীপুজো!", "A sword in Maa's hand, a lamp in ours: the dark loses tonight. Shubho Kali Puja!"),
      l("দুর্গাপুজোর ক্লান্তি কাটল, আবার প্যান্ডেলের ডাক। শুভ কালীপুজো!", "The Durga Puja tiredness has worn off, and the pandals are calling again. Shubho Kali Puja!"),
      l("জয় মা কালী! ভয় দূর হোক, সাহস থাকুক, ঘর ভরে থাকুক।", "Jai Maa Kali! May fear go, courage stay, and the home stay full."),
    ],
    tags: ["ShubhoKaliPuja", "KaliPuja2026", "ShyamaPuja"],
  },
  {
    id: "diwali",
    icon: "🪔",
    name: l("দীপাবলি", "Diwali"),
    headline: l("শুভ দীপাবলি!", "Happy Diwali!"),
    char: "selfie",
    mood: "happy",
    season: "kali",
    pool: false,
    lines: [
      l("প্রদীপের আলো, মিষ্টির বাক্স আর প্রিয় মানুষগুলো পাশে। শুভ দীপাবলি!", "Lamplight, a box of sweets and your favourite people close by. Happy Diwali!"),
      l("এক প্রদীপ থেকে আরেক প্রদীপ: আলো ভাগ করলে বাড়ে। শুভ দীপাবলি!", "One lamp lights the next: light grows when you share it. Happy Diwali!"),
      l("ঘর ঝকঝকে, বারান্দায় আলপনা, জানলায় টুনি। শুভ দীপাবলি!", "A spotless home, alpana on the balcony, fairy lights in the window. Happy Diwali!"),
      l("এবারের দীপাবলিতে কম ধোঁয়া, বেশি আলো, অনেক বেশি হাসি।", "This Diwali: less smoke, more light, a lot more laughter."),
      l("তোমার ঘরে আলো, মনে শান্তি, পকেটে একটু বাড়তি মিষ্টি থাকুক। শুভ দীপাবলি!", "Light in your home, peace in your heart, and a few extra sweets in your pocket. Happy Diwali!"),
      l("মোমবাতি গুনতে গুনতে রাত কাবার, ছবি তুলতে তুলতে চার্জ শেষ। শুভ দীপাবলি!", "Counting candles all night, the battery gone from all the photos. Happy Diwali!"),
      l("দূরে থাকলেও ভিডিও কলে একটা প্রদীপ জ্বেলে দেখাও। শুভ দীপাবলি!", "Far away? Light one lamp on the video call. Happy Diwali!"),
      l("আলোর উৎসবে তোমার জন্য অনেক শুভেচ্ছা, আর একটা কাজু বরফি।", "Lots of good wishes for the festival of lights, and one kaju barfi."),
    ],
    tags: ["HappyDiwali", "Diwali2026", "ShubhoDipaboli"],
  },
  {
    id: "bhaiphota",
    icon: "🧿",
    name: l("ভাইফোঁটা", "Bhai Phota"),
    headline: l("শুভ ভাইফোঁটা!", "Shubho Bhai Phota!"),
    char: "bhog",
    mood: "happy",
    season: "kali",
    pool: false,
    toPh: l("যেমন: দাদা, ভাই, দিদি, বোন", "e.g. Dada, Bhai, Didi, my sister"),
    lines: [
      l("ভাইয়ের কপালে দিলাম ফোঁটা, যমের দুয়ারে পড়ল কাঁটা। শুভ ভাইফোঁটা!", "A phota on my brother's forehead, thorns at Yama's door. Shubho Bhai Phota!"),
      l("চন্দন, দই, কাজলের ফোঁটা, ধান-দূর্বার আশীর্বাদ, আর থালাভরা মিষ্টি।", "A phota of sandalwood, curd and kajal, blessings of paddy and durba, and a plate of sweets."),
      l("সারা বছর ঝগড়া, আজ একদিন ফোঁটা আর প্রণাম। শুভ ভাইফোঁটা!", "Fighting all year, and today a phota and a pronam. Shubho Bhai Phota!"),
      l("উপহারটা এবার একটু বড় চাই, ভাই। শুভ ভাইফোঁটা!", "The gift had better be bigger this year, brother. Shubho Bhai Phota!"),
      l("দিদির হাতের ফোঁটা, মায়ের হাতের রান্না: বছরের সেরা দুপুর।", "A phota from didi, lunch from Ma: the best afternoon of the year."),
      l("দূরে আছি, তাই ফোনেই ফোঁটা দিলাম। ভালো থাকিস, ভাই।", "Too far away, so here's a phota over the phone. Take care, brother."),
      l("ভাইফোঁটার থালা: প্রদীপ, ধান-দূর্বা, চন্দন, আর ভাইয়ের পছন্দের রসগোল্লা।", "The Bhai Phota plate: a lamp, paddy and durba, sandalwood, and his favourite rosogolla."),
      l("যত বড়ই হই, আজকের দিনে আবার ছোট ভাইবোন। শুভ ভাইফোঁটা!", "However grown-up we are, today we're the little siblings again. Shubho Bhai Phota!"),
    ],
    tags: ["ShubhoBhaiPhota", "BhaiPhota2026", "BhaiDooj"],
  },
  {
    id: "jagaddhatri",
    icon: "🏮",
    name: l("জগদ্ধাত্রী পুজো", "Jagaddhatri Puja"),
    headline: l("শুভ জগদ্ধাত্রী পুজো!", "Shubho Jagaddhatri Puja!"),
    char: "bagha",
    mood: "proud",
    season: "kali",
    lines: [
      l("সিংহবাহিনী মা এলেন, চন্দননগর আলোয় ভাসল। শুভ জগদ্ধাত্রী পুজো!", "Maa arrives on her lion and Chandannagar floats in light. Shubho Jagaddhatri Puja!"),
      l("দুর্গাপুজো গেল, কালীপুজো গেল, তবু পুজো ফুরোয়নি: এবার জগদ্ধাত্রী।", "Durga Puja done, Kali Puja done, and still more Puja: now Jagaddhatri."),
      l("ব্যান্ডেল লোকালে ভিড়, চোখে আলোর গেট, মনে মা। শুভ জগদ্ধাত্রী পুজো!", "A packed Bandel local, gates of light, Maa in the heart. Shubho Jagaddhatri Puja!"),
      l("জগতের ধাত্রী মা সবাইকে ধরে রাখুন, ভালো রাখুন। শুভ জগদ্ধাত্রী পুজো!", "May the Mother who holds the world hold us all and keep us well. Shubho Jagaddhatri Puja!"),
      l("কৃষ্ণনগরের বুড়িমা, চন্দননগরের আলো: এক রাতে দুটো হবে না, বেছে নাও!", "Krishnanagar's Burima or Chandannagar's lights: you can't do both in one night, pick one!"),
      l("আকাশছোঁয়া প্রতিমা, আলোর ময়ূর, আর গঙ্গার হাওয়া। শুভ জগদ্ধাত্রী পুজো!", "Sky-high idols, peacocks made of light, and the breeze off the Ganga. Shubho Jagaddhatri Puja!"),
      l("শীত পড়ার আগে শেষ বড় পুজো; জামাটা গায়ে চাপিয়েই বেরিয়ে পড়ো।", "The last big puja before winter; throw on a jacket and go."),
      l("নবমীর সকালে অঞ্জলি, রাতে আলোর শহর। শুভ জগদ্ধাত্রী পুজো!", "Anjali on Navami morning, a city of lights by night. Shubho Jagaddhatri Puja!"),
    ],
    tags: ["ShubhoJagaddhatriPuja", "JagaddhatriPuja2026", "Chandannagar"],
  },
  {
    id: "saraswati",
    icon: "📚",
    name: l("সরস্বতী পুজো", "Saraswati Puja"),
    headline: l("শুভ সরস্বতী পুজো!", "Shubho Saraswati Puja!"),
    char: "detective",
    mood: "happy",
    season: "spring",
    pool: false,
    lines: [
      l("হলুদ শাড়ি, হলুদ পাঞ্জাবি, আর মায়ের পায়ে খাতা-পেন। শুভ সরস্বতী পুজো!", "Yellow saris, yellow panjabis, and books and pens at Maa's feet. Shubho Saraswati Puja!"),
      l("আজ পড়াশোনা ছুটিতে, বইগুলো মায়ের কাছে। কাল থেকে আবার!", "Studies are on leave today; the books are with Maa. Back to it tomorrow!"),
      l("অঞ্জলির পর খিচুড়ি, তারপর স্কুল থেকে স্কুলে ঘোরা। শুভ সরস্বতী পুজো!", "Khichuri after anjali, then hopping from school to school. Shubho Saraswati Puja!"),
      l("মা সরস্বতী তোমার পরীক্ষা, গান, লেখা, সব ভালো করুন।", "May Maa Saraswati bless your exams, your songs and your writing."),
      l("ছোটবেলার প্রথম হাতেখড়ি মনে পড়ে? আজ সেই দিন। শুভ সরস্বতী পুজো!", "Remember your first letters as a child? Today is that day. Shubho Saraswati Puja!"),
      l("কুল খাওয়া আজ থেকে শুরু, মায়ের পুজোর পর। শুভ সরস্বতী পুজো!", "Today the kul berries are finally allowed, after the puja. Shubho Saraswati Puja!"),
      l("শীতের শেষ, বসন্তের শুরু, আর মনে একটু প্রেম প্রেম ভাব। শুভ বসন্ত পঞ্চমী!", "Winter ending, spring beginning, and a little romance in the air. Happy Vasant Panchami!"),
      l("বীণাপাণি মায়ের আশীর্বাদে বিদ্যা, বুদ্ধি আর সুর থাকুক সারা বছর।", "With the blessings of the goddess of the veena, may learning, wisdom and music stay all year."),
    ],
    tags: ["ShubhoSaraswatiPuja", "SaraswatiPuja2027", "VasantPanchami"],
  },
  {
    id: "shivratri",
    icon: "🔱",
    name: l("শিবরাত্রি", "Shivratri"),
    headline: l("শুভ শিবরাত্রি!", "Happy Maha Shivratri!"),
    char: "sleepy",
    mood: "wow",
    season: "spring",
    pool: false,
    lines: [
      l("রাতভর জাগরণ, মাথায় জল, হাতে বেলপাতা। শুভ শিবরাত্রি!", "A night-long vigil, water on the lingam, bel leaves in hand. Happy Maha Shivratri!"),
      l("উপোসের পেট, ভক্তির মন, আর চার প্রহরের পুজো। হর হর মহাদেব!", "An empty stomach, a full heart, and four prahars of puja. Har Har Mahadev!"),
      l("ভোলা মহেশ্বর সবার মঙ্গল করুন। শুভ শিবরাত্রি!", "May Bhola Maheshwar bless everyone. Happy Maha Shivratri!"),
      l("আজ রাতে ঘুম নেই, শুধু ‘ওঁ নমঃ শিবায়’। শুভ শিবরাত্রি!", "No sleep tonight, only 'Om Namah Shivaya'. Happy Maha Shivratri!"),
      l("মন্দিরের লাইনে দাঁড়িয়ে ভোর হয়ে গেল, তবু মনে শান্তি।", "Dawn broke while I stood in the temple queue, and still the heart is at peace."),
      l("শিবের মতো শান্ত থাকো, আর দরকারে তাণ্ডবটাও জেনো।", "Stay calm like Shiva, and know the tandava for when it's needed."),
      l("দুধ, জল, মধু আর বেলপাতা: সরল পুজো, গভীর ভক্তি। শুভ শিবরাত্রি!", "Milk, water, honey and bel leaves: a simple puja, a deep devotion. Happy Maha Shivratri!"),
      l("কাল সকালে পারণ, আজ রাতে মহাদেব। শুভ শিবরাত্রি!", "Tomorrow morning the fast ends; tonight is for Mahadev. Happy Maha Shivratri!"),
    ],
    tags: ["MahaShivratri", "Shivratri2027", "HarHarMahadev"],
  },
  {
    id: "dol",
    icon: "🎨",
    name: l("দোল", "Dol"),
    headline: l("শুভ দোলযাত্রা!", "Happy Dol Jatra!"),
    char: "selfie",
    mood: "happy",
    season: "spring",
    pool: false,
    lines: [
      l("আবিরে লাল গাল, পিচকারিতে সবুজ জামা। শুভ দোলযাত্রা!", "Cheeks red with abir, a shirt gone green from the pichkari. Happy Dol Jatra!"),
      l("রাধাকৃষ্ণের দোলনা দুলছে, আমাদের মন রঙে রঙিন। শুভ দোল!", "Radha and Krishna's swing is rocking, and our hearts are full of colour. Happy Dol!"),
      l("ওরে গৃহবাসী, খোল দ্বার খোল, লাগল যে দোল! শুভ বসন্ত উৎসব।", "Open the doors, the Dol has come! Happy Basanta Utsav."),
      l("মালপোয়া, ঠান্ডাই আর এক মুঠো আবির। শুভ দোলযাত্রা!", "Malpua, thandai and a fistful of abir. Happy Dol Jatra!"),
      l("রং যত গাঢ়, বন্ধুত্ব তত পাকা। শুভ দোল!", "The deeper the colour, the stronger the friendship. Happy Dol!"),
      l("পুরোনো মনখারাপ রঙে ধুয়ে যাক। শুভ দোলপূর্ণিমা!", "May the colours wash the old sadness away. Happy Dol Purnima!"),
      l("শুকনো আবির, নরম হাত, আর অনেক হাসি: এভাবেই দোল খেলো।", "Dry abir, gentle hands and lots of laughter: that's how to play Dol."),
      l("আজ মহাপ্রভুর জন্মতিথিও; হরিনাম আর রঙে ভরে উঠুক দিন। শুভ দোল!", "It's Mahaprabhu's birth anniversary too; may the day fill with Harinaam and colour. Happy Dol!"),
    ],
    tags: ["HappyDol", "DolJatra2027", "HappyHoli"],
  },
  {
    id: "noboborsho",
    icon: "🎉",
    name: l("পয়লা বৈশাখ", "Poila Boishakh"),
    headline: l("শুভ নববর্ষ!", "Shubho Noboborsho!"),
    char: "gopal",
    mood: "happy",
    season: "spring",
    pool: false,
    lines: [
      l("নতুন বছর, নতুন জামা, নতুন হালখাতা। শুভ নববর্ষ ১৪৩৪!", "A new year, new clothes, a new ledger. Shubho Noboborsho 1434!"),
      l("পুরোনো দুঃখ ধুয়ে যাক, নতুন বছরে আসুক আলো। শুভ নববর্ষ!", "May the old sorrows wash away and the new year bring light. Shubho Noboborsho!"),
      l("দোকানে মিষ্টির বাক্স, ক্যালেন্ডার, আর ‘আবার আসবেন’। শুভ নববর্ষ!", "A box of sweets at the shop, a calendar, and 'come again'. Shubho Noboborsho!"),
      l("ভোরে প্রভাতফেরি, দুপুরে ভাত-মাছ-মিষ্টি, সন্ধেয় আড্ডা। শুভ নববর্ষ!", "Prabhat pheri at dawn, rice-fish-sweets at noon, adda in the evening. Shubho Noboborsho!"),
      l("এসো হে বৈশাখ, এসো এসো! তোমার জন্য শুভকামনা।", "Esho he Boishakh, esho esho! Every good wish to you."),
      l("দুই বাংলায় দুই দিন, কিন্তু শুভেচ্ছা একটাই। শুভ নববর্ষ!", "Two Bengals, two days, one wish. Shubho Noboborsho!"),
      l("পান্তা-ইলিশ না হোক, ভালোবাসাটা যেন থাকে। শুভ নববর্ষ!", "Panta-ilish or not, may the love stay. Shubho Noboborsho!"),
      l("নতুন বছরে নতুন স্বপ্ন, পুরোনো বন্ধুরা পাশে। শুভ নববর্ষ!", "New dreams for a new year, old friends by your side. Shubho Noboborsho!"),
    ],
    tags: ["ShubhoNoboborsho", "PoilaBoishakh", "BengaliNewYear1434"],
  },
];

/** The everyday card; also the fallback for an unknown id. */
export const DEFAULT_GREETING = GREETINGS.find((g) => g.id === "anytime") as Greeting;

export const seasonOf = (g: Greeting): GreetingSeason => g.season ?? "durga";

/** Lines that fit any day (pandal-hopping life); appended to every day's own lines. */
export const COMMON_LINES: L[] = [
  l("‘আর একটা প্যান্ডেল দেখব না’ বলে আরও পাঁচটা দেখা হল।", "Swore off ‘one more pandal’ and saw five more."),
  l("পায়ের ব্যথার চেয়ে মনের আনন্দ বড়, ফুচকার চেয়ে ঘুগনি।", "Joy beats sore feet, and ghugni beats phuchka."),
  l("ভিড়ে হারিয়ে গেলাম, ঢাকের শব্দ শুনে ফিরে এলাম।", "Lost in the crowd, found by the dhak."),
  l("এই লাইনে দাঁড়িয়েই অর্ধেক পুজো কেটে গেল। দারুণ কাটল।", "Half of Puja spent in this queue. Worth every minute."),
  l("ফোনে ৩% চার্জ, মনে ১০০%।", "Phone at 3%, heart at 100%."),
  l("আলো, থিম, ভিড়, ভোগ: পুরো প্যাকেজ এক রাতে।", "Lights, theme, crowd, bhog: the full package in one night."),
  l("ম্যাপ বলছে ২ কিমি, পা বলছে ২০।", "The map says 2 km, the feet say 20."),
  l("দাদু দেখেছেন, বাবা দেখেছেন, আজ আমি। একই পাড়া, একই মা।", "Dadu saw it, Baba saw it, today it's me. Same para, same Maa."),
  l("ঢাকের বাড়ি শুনলেই পা আপনি চলে।", "The feet move on their own when the dhak plays."),
  l("আড্ডা, চা, আরতি, আবার আড্ডা। রাত কেটে গেল।", "Adda, tea, arati, more adda. The night just went."),
  l("প্রতিমার মুখটা দেখে সব ক্লান্তি উধাও।", "One look at Maa's face and the tiredness is gone."),
  l("ঠাকুর দেখা শেষ, এবার পেটপুজো।", "Pandals done; now the puja of the stomach."),
];

/** A day's own lines followed by the shared pool (unless `pool: false`). Index positions are stable, so share links keep working. */
export const linesFor = (g: Greeting): L[] => (g.pool === false ? g.lines : [...g.lines, ...COMMON_LINES]);

/** A random index into `linesFor(g)` that differs from `current` (when there is more than one line). */
export function anotherLine(total: number, current: number, random = Math.random): number {
  if (total <= 1) return 0;
  const step = 1 + Math.floor(random() * (total - 1));
  return (current + step) % total;
}

export const getGreeting = (id: string): Greeting | undefined => GREETINGS.find((g) => g.id === id);

/** Which greeting fits today: the Puja day during the festival, Bijoya after it, Sharodiya otherwise. */
export function greetingForPhase(phase: { kind: "before"; days: number } | { kind: "during"; day: { id: string } } | { kind: "after"; days: number }): GreetingDay {
  if (phase.kind === "during") {
    const id = phase.day.id;
    return (GREETINGS.some((g) => g.id === id) ? id : "anytime") as GreetingDay;
  }
  if (phase.kind === "after") return phase.days <= 10 ? "bijoya" : "anytime";
  return phase.days <= 1 ? "panchami" : "anytime";
}

/**
 * Kali Puja week (same dates as data/kali-puja.ts KALI_2026, from Drik Panchang; a test keeps them equal):
 * Kali Puja Sun 8 Nov (Amavasya runs into 9 Nov), Bhai Phota Wed 11 Nov, Jagaddhatri Puja (Navami) Thu 19 Nov;
 * the Jagaddhatri card shows from the day after Bhai Phota until the day after Navami.
 */
export const KALI_WEEK_2026 = { from: "2026-11-01", kali: "2026-11-08", kaliEnd: "2026-11-09", bhaiPhota: "2026-11-11", jagaddhatri: "2026-11-19", jagaddhatriEnd: "2026-11-20" } as const;

/**
 * Spring 2027 (same dates as data/festivals/*-2027.ts, from Drik Panchang; a test keeps them equal): Saraswati
 * Puja Thu 11 Feb, Maha Shivratri Sat 6 Mar, Dol Purnima Mon 22 Mar, Poila Boishakh 15 Apr in West Bengal (14 Apr in Bangladesh).
 * Each card shows from about a week before until the day after.
 */
export const SPRING_2027 = { saraswati: "2027-02-11", shivratri: "2027-03-06", dol: "2027-03-22", noboborshoBd: "2027-04-14", noboborsho: "2027-04-15" } as const;
const SPRING_WINDOWS: [GreetingDay, string, string][] = [
  ["saraswati", "2027-02-05", "2027-02-12"],
  ["shivratri", "2027-03-01", "2027-03-07"],
  ["dol", "2027-03-16", "2027-03-23"],
  ["noboborsho", "2027-04-08", "2027-04-16"],
];

/** Today's card from the local date (YYYY-MM-DD): Kali Puja week, spring festivals, else the Durga Puja calendar. */
export function greetingFor(today: string, phase: Parameters<typeof greetingForPhase>[0]): GreetingDay {
  const k = KALI_WEEK_2026;
  if (today >= k.from && today <= k.kaliEnd) return "kali";
  if (today > k.kaliEnd && today <= k.bhaiPhota) return "bhaiphota";
  if (today > k.bhaiPhota && today <= k.jagaddhatriEnd) return "jagaddhatri";
  for (const [id, from, to] of SPRING_WINDOWS) if (today >= from && today <= to) return id;
  return greetingForPhase(phase);
}

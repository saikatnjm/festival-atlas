// Greeting cards: one per Puja day (Mahalaya → Bijoya) plus a few everyday ones. Each day has a
// character, a headline and several lines (warm, funny, nostalgic) so the same day can be sent to
// the family group and the friends' group with a different flavour. Only type imports (tested).

import type { L } from "@/lib/i18n";
import type { CharId, Mood } from "./types";

const l = (bn: string, en: string): L => ({ bn, en });

export type GreetingDay = "mahalaya" | "panchami" | "shashthi" | "saptami" | "ashtami" | "navami" | "dashami" | "bijoya" | "anytime";

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
];

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

/** A day's own lines followed by the shared pool. Index positions are stable, so share links keep working. */
export const linesFor = (g: Greeting): L[] => [...g.lines, ...COMMON_LINES];

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

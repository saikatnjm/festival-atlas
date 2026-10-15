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
    ],
    tags: ["ShubhoSharodiya", "DurgaPuja2026"],
  },
];

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

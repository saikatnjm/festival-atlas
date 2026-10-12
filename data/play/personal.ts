// Personalisation content and pure helpers: badge titles, choice-driven traits, verdicts,
// friend-duo lines and squad (group) roles. Only type imports, so tests can load this file directly.
// Placeholders: {of} = possessive ("পিন্টুর" / "Rini’s" / "তোমার"), {name}, {a}, {b}.

import type { L } from "@/lib/i18n";
import type { ActivityId, MoodId, Profile, RoleId } from "@/lib/profile";
import type { CharId } from "./types";

const l = (bn: string, en: string): L => ({ bn, en });

/** One emoji per character, for share texts ("🍛 I'm Bhog-er Bumba!"). */
export const CHAR_EMOJI: Record<CharId, string> = {
  detective: "🕵️",
  bhog: "🍛",
  selfie: "📸",
  broke: "💸",
  excuse: "⏰",
  sleepy: "😴",
  gopal: "🎭",
  bagha: "🥁",
  hansjaru: "🦆",
};

/** Licence/permit-style card titles, two per character. Picked by the player's choices (seed). */
export const BADGES: Record<CharId, L[]> = {
  detective: [l("{of} প্যান্ডেল-হপিং পারমিট", "{of} Pandal-Hopping Permit"), l("{of} থিম-গোয়েন্দা আইডি কার্ড", "{of} Theme Detective ID Card")],
  bhog: [l("{of} ভোগ খাওয়ার সরকারি লাইসেন্স", "{of} Official Bhog-Eating Licence"), l("{of} খিচুড়ি-লাইন ভিআইপি পাস", "{of} Khichuri Queue VIP Pass")],
  selfie: [l("{of} পুজো-রিল প্রেস কার্ড", "{of} Puja Reels Press Card"), l("{of} প্যান্ডেল-সেলফি পাসপোর্ট", "{of} Pandal Selfie Passport")],
  broke: [l("{of} ‘পরে দেব’ ক্রেডিট কার্ড", "{of} ‘Pay-You-Later’ Credit Card"), l("{of} ফুচকা-ধারের খাতা", "{of} Phuchka Tab Book")],
  excuse: [l("{of} ‘পাঁচ মিনিটে আসছি’ সার্টিফিকেট", "{of} ‘Coming in 5’ Certificate"), l("{of} হারিয়ে যাওয়া পুজো-GPS", "{of} Lost Puja GPS")],
  sleepy: [l("{of} ‘বাড়ি চল’ ঘোষণাপত্র", "{of} ‘Let’s Go Home’ Charter"), l("{of} প্যান্ডেল-পাশে ঘুমের পারমিট", "{of} Nap-by-the-Pandal Permit")],
  gopal: [l("{of} রসিক-রাজসভার নিয়োগপত্র", "{of} Royal Court of Wit Appointment"), l("{of} উপস্থিত-বুদ্ধির সোনার মেডেল", "{of} Gold Medal for Quick Wit")],
  bagha: [l("{of} ঢাক-বাহিনীর সদস্যপদ", "{of} Dhak Brigade Membership"), l("{of} অষ্টমীর নাচের লাইসেন্স", "{of} Ashtami Dance Licence")],
  hansjaru: [l("{of} আজব-মিশেল সার্টিফিকেট", "{of} Certified Odd Mix"), l("{of} ‘হাঁসজারু’ ফ্যান ক্লাব কার্ড", "{of} ‘Hansjaru’ Fan Club Card")],
};

/** Short traits earned by each choice: the character an answer leans to adds one of its traits. */
export const TRAITS: Record<CharId, L[]> = {
  detective: [l("থিম না বুঝে নড়ে না", "Won’t leave till the theme makes sense"), l("রুট-ম্যাপ মুখস্থ", "Route map memorised"), l("লাইনেও নোট নেয়", "Takes notes in the queue")],
  bhog: [l("খিচুড়ি-রাডার চালু", "Khichuri radar: ON"), l("দ্বিতীয় হাতা নিশ্চিত", "Second helping guaranteed"), l("প্রতিটা মিষ্টির দোকান চেনে", "Knows every sweet shop")],
  selfie: [l("৪৩টা ছবি, ১টা পোস্ট", "43 photos, 1 post"), l("আলো দেখলেই পোজ", "Poses at the first fairy light"), l("ক্যাপশন সবসময় রেডি", "Caption always ready")],
  broke: [l("“পরে দেব” স্পেশালিস্ট", "“I’ll pay later” specialist"), l("ফ্রি-তে মজা খুঁজে বার করে", "Finds the free fun"), l("ফুচকায় ধারের খাতা", "Runs a phuchka tab")],
  excuse: [l("“এই তো, পৌঁছে গেছি”", "“Almost there!”"), l("সব দোষ জ্যামের", "Blames the traffic"), l("দেরিতে, কিন্তু দারুণ এন্ট্রি", "Late, but a grand entry")],
  sleepy: [l("রাত দশটায় হাই", "Yawning by 10 pm"), l("বাড়ির রাস্তা সবচেয়ে ভালো চেনে", "Knows the way home best"), l("বসার জায়গা ঠিক খুঁজে নেয়", "Always finds a seat")],
  gopal: [l("এক কথায় বাজিমাত", "Wins with one line"), l("রাজাকেও হাসায়", "Makes even kings laugh"), l("উপস্থিত বুদ্ধি ফুল চার্জ", "Quick wit: fully charged")],
  bagha: [l("ঢাকের তালে পা নাচে", "Feet dance to every dhak beat"), l("ভিড়েও তাল ঠিক", "Keeps rhythm in any crowd"), l("এনার্জি অফুরান", "Energy: unlimited")],
  hansjaru: [l("দুই মুডের মিশেল", "Two moods in one"), l("অদ্ভুত আইডিয়ার কারখানা", "Odd-idea factory"), l("নিয়ম? সে আবার কী!", "Rules? Never heard of them")],
};

/** One personal line per character, addressed to the player. */
export const VERDICTS: Record<CharId, L> = {
  detective: l("{name}, এবার থিম বোঝাতে কমিটি তোমাকেই ডাকবে!", "{name}, the committee will call you to explain the theme!"),
  bhog: l("{name}, ভোগের লাইনে তোমার জায়গা রাখা আছে।", "{name}, your spot in the bhog queue is saved."),
  selfie: l("{name}, এবারের পুজোর সেরা রিলটা তোমারই।", "{name}, this Puja’s best reel is yours."),
  broke: l("{name}, ফুচকাওয়ালা কাকু খাতা খুলে বসে আছেন।", "{name}, the phuchka kaku has your tab open."),
  excuse: l("{name}, সবাই ষষ্ঠী থেকে তোমার অপেক্ষায়!", "{name}, everyone has been waiting for you since Shashthi!"),
  sleepy: l("{name}, নবমীর রাতে তোমায় জাগিয়ে রাখাই এবারের চ্যালেঞ্জ।", "{name}, keeping you awake on Navami night is this year’s challenge."),
  gopal: l("{name}, রাজসভায় তোমার জন্য একটা চেয়ার খালি।", "{name}, there’s an empty chair for you in the royal court."),
  bagha: l("{name}, ঢাকিরা তোমার এনার্জি দেখে কাঠি এগিয়ে দিচ্ছেন।", "{name}, the dhakis are handing you the sticks."),
  hansjaru: l("{name}, তুমি একাই দু’জনের সমান মজা।", "{name}, you’re twice the fun on your own."),
};

export interface OptionInfo {
  icon: string;
  label: L;
  /** Line added to the card when chosen. */
  trait: L;
}

export const ACTIVITY_INFO: Record<ActivityId, OptionInfo> = {
  hopping: { icon: "🚶", label: l("প্যান্ডেল-হপিং", "Pandal-hopping"), trait: l("পায়ে চাকা লাগানো", "Wheels for feet") },
  bhog: { icon: "🍛", label: l("ভোগ", "Bhog"), trait: l("ভোগের লাইনে সবার আগে", "First in the bhog queue") },
  adda: { icon: "☕", label: l("আড্ডা", "Adda"), trait: l("আড্ডা কমিটি সভাপতি", "Adda Committee President") },
  anjali: { icon: "🌼", label: l("অঞ্জলি", "Anjali"), trait: l("অঞ্জলির ফুল হাতে রেডি", "Anjali flowers at the ready") },
  photos: { icon: "📸", label: l("ছবি তোলা", "Photos"), trait: l("ফোনের স্টোরেজ ফুল", "Phone storage: full") },
  dhak: { icon: "🥁", label: l("ঢাকের তাল", "Dhak beats"), trait: l("ঢাকের তালে কোমর দোলে", "Hips sway to the dhak") },
};

export const ROLE_INFO: Record<RoleId, OptionInfo> = {
  leader: { icon: "👑", label: l("আসল নেতা", "The real leader"), trait: l("বন্ধুদের গ্রুপের আসল নেতা", "The group’s real leader") },
  planner: { icon: "🗺️", label: l("প্ল্যান-মাস্টার", "Plan master"), trait: l("দলের প্ল্যান-মাস্টার", "The group’s plan master") },
  lost: { icon: "🧭", label: l("হারিয়ে যাই", "Always lost"), trait: l("পুজোর হারিয়ে যাওয়া GPS", "The Puja’s lost GPS") },
  foodie: { icon: "🌙", label: l("ফুচকা-প্রেমী", "Phuchka lover"), trait: l("রাত ৩টের ফুচকা বাহিনী", "3 a.m. Phuchka Squad") },
  late: { icon: "⏰", label: l("সবসময় লেট", "Always late"), trait: l("“পাঁচ মিনিটে আসছি”", "“Coming in 5”") },
  photographer: { icon: "📷", label: l("ফটোগ্রাফার", "Photographer"), trait: l("দলের অফিসিয়াল ফটোগ্রাফার", "Official group photographer") },
};

export const MOOD_INFO: Record<MoodId, OptionInfo> = {
  hype: { icon: "🎉", label: l("ফুল জোশ", "Full hype"), trait: l("মুড: ফুল জোশ", "Mood: full hype") },
  chill: { icon: "🍵", label: l("ঠান্ডা মাথা", "Chill"), trait: l("ঠান্ডা মাথা, গরম চা", "Cool head, hot tea") },
  sentimental: { icon: "🥹", label: l("নস্টালজিক", "Nostalgic"), trait: l("নস্টালজিয়া মোড অন", "Nostalgia mode: on") },
  sleepy: { icon: "😴", label: l("ঘুম-ঘুম", "Sleepy"), trait: l("ঘুম-ঘুম উৎসব মোড", "Sleepy festival mode") },
};

/** Fills {placeholders}; unknown keys stay as they are. */
export function fill(template: string, vars: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (m, k: string) => (k in vars ? vars[k] : m));
}

/** The character an answer leans to most (first on ties, in object order). */
export function dominantChar(score: Partial<Record<CharId, number>>): CharId | null {
  let best: CharId | null = null;
  let top = 0;
  for (const [k, v] of Object.entries(score) as [CharId, number][]) {
    if (v > top) {
      top = v;
      best = k;
    }
  }
  return best;
}

/** Badge choice depends on the choices (seed), so different answers can earn different titles. */
export function pickBadge(char: CharId, seed: number): L {
  const list = BADGES[char];
  return list[Math.abs(seed) % list.length];
}

/**
 * Traits from the player's choices (in play order), then from optional profile details.
 * Each time a character appears it contributes its next trait; duplicates are dropped.
 */
export function traitsFor(main: CharId, chars: readonly CharId[], profile: Pick<Profile, "activity" | "role" | "mood">, max = 4): L[] {
  const seen = new Map<CharId, number>();
  const out: L[] = [];
  const push = (t: L) => {
    if (!out.some((x) => x.en === t.en)) out.push(t);
  };
  const source = chars.length ? chars : [main, main];
  for (const c of source) {
    const k = seen.get(c) ?? 0;
    seen.set(c, k + 1);
    push(TRAITS[c][k % TRAITS[c].length]);
    if (out.length >= 2) break;
  }
  if (profile.role) push(ROLE_INFO[profile.role].trait);
  if (profile.activity) push(ACTIVITY_INFO[profile.activity].trait);
  if (profile.mood) push(MOOD_INFO[profile.mood].trait);
  return out.slice(0, max);
}

// ---- Friend duo -------------------------------------------------------------------------

const DUO_SAME = l("{a} আর {b}, তোমরা তো পুজোর যমজ!", "{a} and {b}, you’re Puja twins!");
const DUO: L[] = [
  l("{a} আর {b} এক প্যান্ডেলে ঢুকলে বেরোতে রাত কাবার।", "{a} and {b} enter one pandal together and the night is gone."),
  l("{a} লাইনে দাঁড়াবে, {b} ফুচকা আনবে। ডিল?", "{a} holds the queue, {b} fetches phuchka. Deal?"),
  l("{a} + {b} = আড্ডা কমিটির জরুরি মিটিং।", "{a} + {b} = emergency adda committee meeting."),
  l("{a} ম্যাপ ধরবে, {b} রাস্তা হারাবে। পুজো জমে ক্ষীর!", "{a} holds the map, {b} gets lost. Perfect Puja!"),
];

/** A deterministic line about two players' results. */
export function duoLine(a: CharId, b: CharId): L {
  if (a === b) return DUO_SAME;
  const key = [a, b].sort().join("|");
  let h = 0;
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
  return DUO[h % DUO.length];
}

// ---- Squad (group card) -----------------------------------------------------------------

export const SQUAD_TITLES: L[] = [
  l("👑 বন্ধুদের গ্রুপের আসল নেতা", "👑 The group’s real leader"),
  l("🌙 রাত ৩টের ফুচকা বাহিনী প্রধান", "🌙 Chief of the 3 a.m. Phuchka Squad"),
  l("🧭 পুজোর হারিয়ে যাওয়া GPS", "🧭 The Puja’s lost GPS"),
  l("☕ আড্ডা কমিটি সভাপতি", "☕ Adda Committee President"),
  l("🍛 ভোগ-লাইনের ক্যাপ্টেন", "🍛 Bhog Queue Captain"),
  l("📸 গ্রুপের অফিসিয়াল ফটোগ্রাফার", "📸 Official group photographer"),
  l("⏰ ‘পাঁচ মিনিটে আসছি’ মন্ত্রী", "⏰ Minister of ‘Coming in 5’"),
  l("💸 ‘পরে দেব’ কোষাধ্যক্ষ", "💸 ‘Pay-you-later’ treasurer"),
  l("🥁 ঢাক-নাচের ব্র্যান্ড অ্যাম্বাসাডর", "🥁 Dhak-dance brand ambassador"),
  l("😴 ‘বাড়ি চল’ ঘোষক", "😴 Chief announcer of ‘Let’s go home’"),
];

export const SQUAD_NAMES: L[] = [
  l("ফুচকা ফেডারেশন", "The Phuchka Federation"),
  l("অষ্টমী এক্সপ্রেস", "The Ashtami Express"),
  l("টিম ঢাকের তাল", "Team Dhak Beat"),
  l("নবমী-রাতের প্যাঁচা", "The Navami Night Owls"),
  l("প্যান্ডেল-পাগল পার্টি", "The Pandal-Crazy Party"),
];

export const SQUAD_LINES: L[] = [
  l("এই দল একসঙ্গে থাকলে কেউ হারাবে না… GPS-টা ছাড়া।", "Nobody gets lost with this squad… except the GPS."),
  l("পুজোর রিপোর্ট: আড্ডা ১০০%, প্ল্যান মানা ১২%।", "Puja report: adda 100%, sticking to the plan 12%."),
  l("লাইনে দাঁড়ানো, ভোগ খাওয়া, ছবি তোলা: সব দায়িত্ব ভাগ করা হয়ে গেছে।", "Queueing, bhog, photos: every job is assigned."),
];

export const SQUAD_MIN = 2;
export const SQUAD_MAX = 6;

function seededShuffle<T>(items: readonly T[], seed: number): T[] {
  let a = seed >>> 0;
  const rnd = () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const out = items.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function seedOf(names: readonly string[], salt: number): number {
  const key = `${names.join("\u0001")}#${salt}`;
  let h = 0x811c9dc5;
  for (let i = 0; i < key.length; i++) {
    h ^= key.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

export interface Squad {
  name: L;
  line: L;
  members: { name: string; title: L }[];
}

/**
 * Gives every friend a unique role. Same names (in the same order) and the same `salt` always give
 * the same squad, so a shared link shows recipients exactly the same card.
 */
export function assignSquad(names: readonly string[], salt = 0): Squad {
  const seed = seedOf(names, salt);
  const titles = seededShuffle(SQUAD_TITLES, seed);
  return {
    name: SQUAD_NAMES[seed % SQUAD_NAMES.length],
    line: SQUAD_LINES[(seed >>> 8) % SQUAD_LINES.length],
    members: names.map((name, i) => ({ name, title: titles[i % titles.length] })),
  };
}

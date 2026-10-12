// Route maker: starting neighbourhood + vibe + time of night -> an ordered pandal-hopping route.
// Zones are rough city areas for ordering only (not distances). Jokes are jokes; dated facts link to
// a sourced event in data/events/events.ts. Only type imports, so tests can load this file directly.

import type { L } from "@/lib/i18n";
import type { Region } from "@/data/events/events";

const l = (bn: string, en: string): L => ({ bn, en });

export type Zone = "north" | "central" | "south" | "east" | "west" | "old";
export type VibeId = "heritage" | "theme" | "food" | "lazy";
export type SlotId = "afternoon" | "evening" | "night" | "dawn";
type Tag = "heritage" | "theme";

export interface StartPlace {
  id: string;
  region: Region;
  icon: string;
  name: L;
  zone: Zone;
  joke: L;
}

export const START_PLACES: StartPlace[] = [
  { id: "behala", region: "wb", icon: "🏘️", name: l("বেহালা", "Behala"), zone: "south", joke: l("বেহালা থেকে উত্তরে যাওয়া মানে ছোটখাটো ট্রেক। টিফিন নিয়ে বেরিও!", "From Behala, going north is a mini trek. Pack a tiffin!") },
  { id: "gariahat", region: "wb", icon: "🛍️", name: l("গড়িয়াহাট", "Gariahat"), zone: "south", joke: l("পুজোর আগে শপিং, পুজোয় হপিং: গড়িয়াহাটের দুই অবতার।", "Shopping before Puja, hopping during it: Gariahat’s two avatars.") },
  { id: "tollygunge", region: "wb", icon: "🎬", name: l("টালিগঞ্জ", "Tollygunge"), zone: "south", joke: l("টালিগঞ্জ থেকে বেরোলে নিজেকে একটু হিরো-হিরো লাগে। ভিড়ে সেটা দশ মিনিট টেকে।", "Leaving Tollygunge you feel like a film hero. In the crowd that lasts ten minutes.") },
  { id: "shyambazar", region: "wb", icon: "🐎", name: l("শ্যামবাজার", "Shyambazar"), zone: "north", joke: l("পাঁচমাথার মোড়ে দাঁড়িয়ে যেদিকে তাকাও, প্যান্ডেল।", "Stand at Five-Point Crossing and every road leads to a pandal.") },
  { id: "dumdum", region: "wb", icon: "🚇", name: l("দমদম", "Dum Dum"), zone: "north", joke: l("দমদম থেকে মেট্রোয় উঠলেই উত্তর-দক্ষিণ হাতের মুঠোয়। বসার জায়গা? স্বপ্নে।", "Board the Metro at Dum Dum and the whole city opens up. A seat? Dream on.") },
  { id: "saltlake", region: "wb", icon: "🧩", name: l("সল্টলেক", "Salt Lake"), zone: "east", joke: l("ব্লকের গোলকধাঁধা থেকে বেরোতে পারলেই অর্ধেক জয়।", "Escape the block maze and you’ve already won half the night.") },
  { id: "newtown", region: "wb", icon: "🏙️", name: l("নিউটাউন", "New Town"), zone: "east", joke: l("নিউটাউন থেকে বেরোনোর আগে প্ল্যান লাগে, আর ক্যাবের ভাড়া দেখে একটু সাহস।", "Leaving New Town needs a plan, and some courage when you see the cab fare.") },
  { id: "howrah", region: "wb", icon: "🌉", name: l("হাওড়া", "Howrah"), zone: "west", joke: l("ব্রিজ পেরোলেই কলকাতার পুজো। ফেরার ট্রেনের সময়টা মনে রেখো!", "Cross the bridge and Kolkata’s Puja begins. Remember your train home!") },
  { id: "olddhaka", region: "bd", icon: "🏮", name: l("পুরান ঢাকা", "Old Dhaka"), zone: "old", joke: l("নিজের পাড়াতেই সেরা মণ্ডপ। জুতো পরো, হাঁটা শুরু!", "The best mandaps are on your doorstep. Shoes on, start walking!") },
  { id: "motijheel", region: "bd", icon: "🏦", name: l("মতিঝিল", "Motijheel"), zone: "old", joke: l("অফিস-পাড়া থেকে পুরান ঢাকা এক দৌড়। টাই খুলে পকেটে!", "From the office district it’s a quick dash to Old Dhaka. Tie in the pocket!") },
  { id: "dhanmondi", region: "bd", icon: "🌳", name: l("ধানমন্ডি", "Dhanmondi"), zone: "central", joke: l("লেকের ধারে আড্ডা দিয়ে শুরু, তারপর মণ্ডপ। আড্ডাটা লম্বা হলে দোষ লেকের।", "Start with adda by the lake, then mandaps. If the adda runs long, blame the lake.") },
  { id: "mirpur", region: "bd", icon: "🚝", name: l("মিরপুর", "Mirpur"), zone: "north", joke: l("মিরপুর থেকে পুরান ঢাকা? জ্যামের সঙ্গে আড্ডাও পুজোর অংশ।", "Mirpur to Old Dhaka? Chatting with the traffic jam is part of Puja.") },
  { id: "uttara", region: "bd", icon: "✈️", name: l("উত্তরা", "Uttara"), zone: "north", joke: l("উত্তরা থেকে বেরোলে রাস্তাই অর্ধেক পুজো।", "From Uttara, the journey is half the Puja.") },
  { id: "gulshan", region: "bd", icon: "🏢", name: l("গুলশান–বনানী", "Gulshan–Banani"), zone: "north", joke: l("বনানীর মণ্ডপ কাছেই, বাকিটা জ্যাম-ভাগ্য।", "Banani’s mandap is close; the rest is traffic luck.") },
];

export interface Vibe {
  id: VibeId;
  icon: string;
  name: L;
  /** How many pandals the route gets. */
  count: number;
  verdict: L;
}

export const VIBES: Vibe[] = [
  { id: "heritage", icon: "🏛️", name: l("ঐতিহ্য-শিকারি", "Heritage hunter"), count: 5, verdict: l("পুরনো পাড়া, পুরনো পুজো, আর ‘আমাদের সময়ে…’ গল্প ফ্রি।", "Old neighbourhoods, old pujas and free ‘in our day…’ stories.") },
  { id: "theme", icon: "🎨", name: l("থিম-পাগল", "Theme-crazy"), count: 5, verdict: l("প্রতিটা প্যান্ডেলের পরে ‘এটাই সেরা!’ গ্যারান্টি।", "‘This one’s the best!’ after every pandal, guaranteed.") },
  { id: "food", icon: "🍢", name: l("শুধু খাব", "Just here to eat"), count: 4, verdict: l("প্যান্ডেল তো বাহানা, আসল গন্তব্য স্টল।", "The pandals are an excuse; the stalls are the destination.") },
  { id: "lazy", icon: "🛋️", name: l("কম হাঁটব", "Walk less"), count: 3, verdict: l("কাছাকাছি তিনটে, তারপর বাড়ি। পা দুটো ধন্যবাদ দেবে।", "Three close by, then home. Your feet will thank you.") },
];

export interface Slot {
  id: SlotId;
  icon: string;
  name: L;
  line: L;
}

export const SLOTS: Slot[] = [
  { id: "afternoon", icon: "🌤️", name: l("বিকেল ৪–৭", "4–7 pm"), line: l("আলো ভালো, ছবি ঝকঝকে। লাইন তুলনায় একটু ছোট হওয়ার আশা রাখা যায়।", "Good light, crisp photos, and some hope of shorter queues.") },
  { id: "evening", icon: "🪔", name: l("সন্ধ্যা ৭–১০", "7–10 pm"), line: l("আলো জ্বলে উঠেছে, ঢাক বাজছে, লাইনও লম্বা হয়েছে।", "Lights on, dhak playing, and the queue has grown too.") },
  { id: "night", icon: "🌙", name: l("রাত ১০–১", "10 pm–1 am"), line: l("আড্ডার পিক টাইম। ফুচকাওয়ালা কাকুও এখন ফুল ফর্মে।", "Peak adda time. The phuchka kaku is in full form too.") },
  { id: "dawn", icon: "🌅", name: l("ভোররাত ১–৪", "1–4 am"), line: l("ঘুম-ঘুম চোখ, ফাঁকা রাস্তা, আর নিজেকে বীর মনে হওয়া।", "Sleepy eyes, emptier roads and feeling like a hero.") },
];

/** Region facts with a sourced event id (shown with its source). */
export const FACTS: Record<Region, { text: L; eventId: string }> = {
  wb: { text: l("সপ্তমী থেকে নবমী মেট্রোর ব্লু লাইন দুপুর ১টা থেকে ভোর ৪টে পর্যন্ত চলবে।", "Saptami to Navami, the Metro Blue Line runs from 1 pm to 4 am."), eventId: "wb-metro-2026" },
  bd: { text: l("২০ থেকে ২৪ অক্টোবর টানা পুজোর ছুটি।", "Puja holidays run from 20 to 24 Oct."), eventId: "bd-holidays-2026" },
};

const BREAKS: Record<Region, L[]> = {
  wb: [l("🍢 ফুচকা-বিরতি", "🍢 Phuchka break"), l("🌯 রোল-বিরতি", "🌯 Roll break"), l("☕ ভাঁড়ের চা-বিরতি", "☕ Clay-cup tea break")],
  bd: [l("🍬 মিষ্টি-বিরতি", "🍬 Sweets break"), l("🥟 সিঙাড়া-বিরতি", "🥟 Singara break"), l("☕ চা-বিরতি", "☕ Tea break")],
};

/** Rough area and vibe tags for stops (directory ids, or event ids for 2026 highlights without a listing). */
export const STOP_META: Record<string, { region: Region; zone: Zone; tags: Tag[] }> = {
  // Kolkata directory (ids in data/pandals/entries.json)
  "kumartuli-park": { region: "wb", zone: "north", tags: ["heritage", "theme"] },
  "jagat-mukherjee-park": { region: "wb", zone: "north", tags: ["heritage", "theme"] },
  "chorebagan-sarbojanin": { region: "wb", zone: "north", tags: ["heritage"] },
  "chaltabagan-lohapatty": { region: "wb", zone: "north", tags: ["theme"] },
  "lalabagan-nabankur": { region: "wb", zone: "north", tags: ["theme"] },
  "simla-sporting-club": { region: "wb", zone: "north", tags: ["theme"] },
  "sreebhumi-sporting-club": { region: "wb", zone: "east", tags: ["theme"] },
  "ekdalia-evergreen": { region: "wb", zone: "south", tags: ["theme"] },
  "ballygunge-samaj-sebi-sangha": { region: "wb", zone: "south", tags: ["theme"] },
  "singhi-park": { region: "wb", zone: "south", tags: ["heritage"] },
  "shibmandir-sarbojanin": { region: "wb", zone: "south", tags: ["theme"] },
  "deshapriya-park": { region: "wb", zone: "south", tags: ["heritage", "theme"] },
  "tridhara-sammilani": { region: "wb", zone: "south", tags: ["heritage", "theme"] },
  "66-pally": { region: "wb", zone: "south", tags: ["theme"] },
  "64-pally": { region: "wb", zone: "south", tags: ["theme"] },
  "college-square": { region: "wb", zone: "central", tags: ["heritage", "theme"] },
  "mohammad-ali-park": { region: "wb", zone: "central", tags: ["heritage", "theme"] },
  "santosh-mitra-square": { region: "wb", zone: "central", tags: ["heritage", "theme"] },
  "alipore-sarbojanin": { region: "wb", zone: "south", tags: ["theme"] },
  "chaltabagan-sarbojanin": { region: "wb", zone: "north", tags: ["heritage"] },
  "hatibagan-sarbojanin-durgotsav": { region: "wb", zone: "north", tags: ["heritage"] },
  "kashi-bose-lane": { region: "wb", zone: "north", tags: ["theme"] },
  "tala-prattoy": { region: "wb", zone: "north", tags: ["theme"] },
  "dum-dum-park-tarun-sangha": { region: "wb", zone: "north", tags: ["theme"] },
  "beliaghata-33-palli": { region: "wb", zone: "east", tags: ["theme"] },
  "behala-nutan-dal": { region: "wb", zone: "south", tags: ["theme"] },
  "barisha-club": { region: "wb", zone: "south", tags: ["theme"] },
  "samajsebi-sangha": { region: "wb", zone: "south", tags: ["theme"] },
  "haridevpur-41-pally": { region: "wb", zone: "south", tags: ["theme"] },
  "hindusthan-park-durgotsav": { region: "wb", zone: "south", tags: ["theme"] },
  // Dhaka directory
  "dhakeshwari-national-temple": { region: "bd", zone: "old", tags: ["heritage"] },
  "shankhari-bazar": { region: "bd", zone: "old", tags: ["heritage"] },
  "joykali-mandir": { region: "bd", zone: "old", tags: ["heritage"] },
  "ramakrishna-math-mission-dhaka": { region: "bd", zone: "old", tags: ["heritage"] },
  "azimpur-government-colony-puja-mandap": { region: "bd", zone: "old", tags: ["theme"] },
  "siddheshwari-kali-mandir": { region: "bd", zone: "central", tags: ["heritage"] },
  "ramna-kali-mandir": { region: "bd", zone: "central", tags: ["heritage"] },
  "jagannath-hall-du-puja": { region: "bd", zone: "central", tags: ["theme"] },
  "krishibid-institute-ground-farmgate": { region: "bd", zone: "central", tags: ["theme"] },
  "kalabagan-puja": { region: "bd", zone: "central", tags: ["theme"] },
  "banani-puja-mandap": { region: "bd", zone: "north", tags: ["theme"] },
};

/** Which areas to visit first from each starting area (nearest first, roughly). */
const ZONE_ORDER: Record<Zone, Zone[]> = {
  north: ["north", "central", "east", "south", "old"],
  central: ["central", "north", "south", "east", "old"],
  south: ["south", "central", "north", "east"],
  east: ["east", "north", "central", "south"],
  west: ["central", "north", "south", "east"],
  old: ["old", "central", "north"],
};
const BD_NORTH: Zone[] = ["north", "central", "old"];

function tieBreak(id: string, variant: number): number {
  let h = 2166136261 ^ variant;
  for (let i = 0; i < id.length; i++) h = Math.imul(h ^ id.charCodeAt(i), 16777619);
  return (h >>> 0) / 4294967296;
}

export interface Route {
  /** Stop ids in visiting order. */
  stops: string[];
  /** Break after the stop at each of these indices. */
  breaks: { after: number; label: L }[];
}

/**
 * Builds a route: nearest areas first; a vibe match can beat being one area closer; "walk less"
 * sticks strictly to the nearest areas. `variant` reshuffles equally good choices ("another route").
 */
export function buildRoute(region: Region, startId: string, vibeId: VibeId, available: ReadonlySet<string>, variant = 0): Route {
  const start = START_PLACES.find((p) => p.id === startId && p.region === region);
  const vibe = VIBES.find((v) => v.id === vibeId);
  if (!start || !vibe) return { stops: [], breaks: [] };
  const order = region === "bd" && start.zone === "north" ? BD_NORTH : ZONE_ORDER[start.zone];
  const want: Tag | null = vibeId === "heritage" || vibeId === "theme" ? vibeId : null;
  const rank = (z: Zone) => {
    const i = order.indexOf(z);
    return i < 0 ? order.length : i;
  };
  const score = (id: string) => {
    const m = STOP_META[id];
    const zr = rank(m.zone);
    if (vibeId === "lazy") return zr * 3 + tieBreak(id, variant);
    // A vibe match beats being one area closer, but not two.
    const miss = want && !m.tags.includes(want) ? 2 : 0;
    return zr + miss + tieBreak(id, variant) * 0.9;
  };
  const picked = Object.keys(STOP_META)
    .filter((id) => STOP_META[id].region === region && available.has(id))
    .sort((a, b) => score(a) - score(b))
    .slice(0, vibe.count)
    // Visit in area order, starting near home.
    .sort((a, b) => rank(STOP_META[a].zone) - rank(STOP_META[b].zone) || score(a) - score(b));

  const labels = BREAKS[region];
  const breaks: Route["breaks"] = [];
  const last = picked.length - 1;
  if (vibeId === "food") for (let i = 0; i < last; i++) breaks.push({ after: i, label: labels[(i + variant) % labels.length] });
  else if (last >= 1) breaks.push({ after: Math.max(0, Math.floor(picked.length / 2) - 1), label: labels[variant % labels.length] });
  return { stops: picked, breaks };
}

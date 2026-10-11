import type { SceneKind } from "@/components/play/art/Scene";
import type { L } from "@/lib/i18n";
import type { Meters } from "@/lib/play-logic";
import type { ActivityMeta, PlayResult } from "./types";

export const notice: L = {
  bn: "এটা একটা কাল্পনিক খেলা। পুজোপুর, রাস্তা আর মণ্ডপ সব বানানো, আসল কোনো জায়গা নয়।",
  en: "This is a fictional game. Pujopur, its roads and its pandals are made up, not real places.",
};

export const meta: ActivityMeta = {
  slug: "pandal-challenge",
  kind: "challenge",
  title: { bn: "পুজোপুরে প্যান্ডেল-হপিং", en: "Pandal-hopping in Pujopur" },
  tagline: {
    bn: "কাল্পনিক শহর পুজোপুরে পাঁচটা বিপদ, পাঁচটা সিদ্ধান্ত। রাত শেষে কে কেমন থাকবে?",
    en: "Five mishaps, five decisions in the imaginary city of Pujopur. Who'll be in what state by the end of the night?",
  },
  kicker: { bn: "পুজোপুরের রাত", en: "Night in Pujopur" },
  note: notice,
  description: {
    bn: "কাল্পনিক শহর পুজোপুরে প্যান্ডেল-হপিংয়ের রাত: ভিড়, ক্ষুধার্ত বন্ধু, বৃষ্টি, ফোনের ব্যাটারি আর “আরও একটা মণ্ডপ!”। পাঁচটা সিদ্ধান্ত নাও, দেখো রাত শেষে তুমি কোথায়।",
    en: "A pandal-hopping night in the imaginary city of Pujopur: crowds, rain, a hungry friend and a dying phone. Make five choices and see where you end up.",
  },
  chars: ["detective", "sleepy", "selfie"],
};

export interface ChallengeOption {
  icon: string;
  label: L;
  react: L;
  /** Effect on the three meters. */
  d: Partial<Meters>;
}

export interface ChallengeRound {
  scene: SceneKind;
  prompt: L;
  options: ChallengeOption[];
}

/** Meter labels, in display order. */
export const meterInfo: { key: keyof Meters; icon: string; label: L }[] = [
  { key: "legs", icon: "🦶", label: { bn: "পায়ের জোর", en: "Leg power" } },
  { key: "mood", icon: "😄", label: { bn: "দলের মেজাজ", en: "Group mood" } },
  { key: "battery", icon: "🔋", label: { bn: "ফোনের চার্জ", en: "Phone charge" } },
];

export const rounds: ChallengeRound[] = [
  {
    scene: "queue",
    prompt: {
      bn: "পুজোপুরের বড় মণ্ডপে মহা-ভিড়! সামনে তিনটে পথ।",
      en: "Mega-crowd at Pujopur's big pandal! Three paths ahead.",
    },
    options: [
      {
        icon: "💪",
        label: { bn: "ভিড় ঠেলে সোজা ঢুকি", en: "Push straight through the crowd" },
        react: {
          bn: "ঠেলাঠেলিতে একটা চটি হারাল, কিন্তু সাহস বাড়ল।",
          en: "One slipper lost in the shoving, but courage gained.",
        },
        d: { legs: -1 },
      },
      {
        icon: "🌀",
        label: { bn: "ঘুরপথে গলি ধরি", en: "Take a detour through the lanes" },
        react: {
          bn: "গলিতে কাকিমা বললেন, “এখান থেকে ঠাকুর দেখা যায় না, মিষ্টি যায়।”",
          en: "In the lane, an aunty says, “You can't see the idol from here, but sweets reach you.”",
        },
        d: { legs: -1, mood: 2 },
      },
      {
        icon: "🍵",
        label: { bn: "ভিড় কমা পর্যন্ত চায়ের দোকানে বসি", en: "Sit at a tea stall until the crowd thins" },
        react: {
          bn: "চা ভালো, গল্প আরও ভালো। শুধু ঠাকুর অপেক্ষা করছেন।",
          en: "Great tea, even better gossip. Only the idol is waiting.",
        },
        d: { legs: 1, mood: 1 },
      },
    ],
  },
  {
    scene: "food",
    prompt: {
      bn: "বন্ধু পেট চেপে বলল, “পেটে ছুঁচো ডন দিচ্ছে!”",
      en: "A friend clutches their stomach: “Rats are doing push-ups in my tummy!”",
    },
    options: [
      {
        icon: "🍛",
        label: { bn: "এখনই ভোগের লাইনে", en: "Straight to the bhog queue" },
        react: {
          bn: "খিচুড়ি এল, হাসি ফিরল। শুধু আধ ঘণ্টা গেল।",
          en: "Khichuri arrived, smiles returned. Only half an hour gone.",
        },
        d: { legs: 1, mood: 2 },
      },
      {
        icon: "🥟",
        label: { bn: "রাস্তার ফুচকা, ঝটপট", en: "Quick street fuchka" },
        react: {
          bn: "পাঁচ প্লেট! বন্ধু এখন ফুচকা-ধ্যানে মগ্ন।",
          en: "Five plates! Your friend is now deep in fuchka meditation.",
        },
        d: { mood: 2 },
      },
      {
        icon: "🙈",
        label: { bn: "“পরের মণ্ডপেই খাব” বলে এড়াই", en: "Dodge with “I'll eat at the next pandal”" },
        react: {
          bn: "পরের মণ্ডপে ভোগ ফুরিয়ে গেছে। ইতিহাস ক্ষমা করবে না।",
          en: "The bhog at the next pandal was finished. History will not forgive you.",
        },
        d: { legs: -1, mood: -2 },
      },
    ],
  },
  {
    scene: "rain",
    prompt: { bn: "আকাশ কালো! হঠাৎ ঝমঝম বৃষ্টি।", en: "Black sky! Sudden heavy rain." },
    options: [
      {
        icon: "☂️",
        label: { bn: "সবাই এক ছাতার নিচে", en: "Everyone under one umbrella" },
        react: {
          bn: "ছাতায় চারজন, ভিজল আটজনের মতো। তবে দাঁড়িয়ে একটু জিরোনো গেল।",
          en: "Four under one umbrella, soaked like eight. But at least you got to stand and rest.",
        },
        d: { legs: 1 },
      },
      {
        icon: "🏃",
        label: { bn: "দৌড়ে সামনের মণ্ডপে ঢুকি", en: "Run into the nearest pandal" },
        react: {
          bn: "ভিজে গেলাম, তবু প্রতিমার সামনে একদম প্রথম সারি!",
          en: "Got drenched, yet landed in the front row before the idol!",
        },
        d: { legs: -1, mood: 2 },
      },
      {
        icon: "🛍️",
        label: { bn: "প্লাস্টিক কিনে মাথায় চাপাই", en: "Buy plastic sheets and wear them" },
        react: {
          bn: "প্লাস্টিক-ফ্যাশন হিট! ছবি তুলতে গিয়ে ফোন ভিজল।",
          en: "Plastic fashion is a hit! The phone got wet during the photo.",
        },
        d: { mood: 1, battery: -1 },
      },
    ],
  },
  {
    scene: "battery",
    prompt: {
      bn: "ফোনে ২% চার্জ। ম্যাপ, ছবি, ক্যাব সব ওর ভেতরেই!",
      en: "2% phone charge. Map, photos, cab: everything is in there!",
    },
    options: [
      {
        icon: "🔌",
        label: { bn: "দোকানে চার্জ দিই", en: "Charge at a shop" },
        react: {
          bn: "দোকানদার বললেন, “দশ টাকা!” পাশে আরও বিশজনের লাইন।",
          en: "Shopkeeper: “Ten rupees!” Twenty others already queueing beside you.",
        },
        d: { legs: -1, mood: -1, battery: 3 },
      },
      {
        icon: "🌙",
        label: { bn: "ফোন বন্ধ! নিজের চোখে দেখি", en: "Phone off! See with your own eyes" },
        react: {
          bn: "প্রথমবার দেখলাম, ঠাকুরের চোখ কত বড়!",
          en: "First time noticing how big the idol's eyes are!",
        },
        d: { mood: 1, battery: -2 },
      },
      {
        icon: "🪫",
        label: { bn: "লো-পাওয়ার মোডে সব চালাই", en: "Run everything on low-power mode" },
        react: { bn: "পর্দা ঝাপসা, আত্মবিশ্বাস ঝকঝকে।", en: "Screen blurry, confidence sparkling." },
        d: { battery: -1 },
      },
    ],
  },
  {
    scene: "night",
    prompt: {
      bn: "রাত ১১টা। কে যেন চেঁচাল, “আরও একটা মণ্ডপ!”",
      en: "11 PM. Someone shouted, “One more pandal!”",
    },
    options: [
      {
        icon: "🎉",
        label: { bn: "চল চল!", en: "Let's go!" },
        react: { bn: "পা বলছে “না”, মুখ বলছে “হ্যাঁ”।", en: "Legs say “no”, mouth says “yes”." },
        d: { legs: -2, mood: 2, battery: -1 },
      },
      {
        icon: "🛺",
        label: { bn: "অটোতে যাই", en: "Take an auto" },
        react: {
          bn: "অটোওয়ালা তিন গুণ ভাড়া বলল। তবু উঠে পড়লাম!",
          en: "The auto driver quoted triple the fare. You hopped in anyway!",
        },
        d: { legs: 1, mood: 1 },
      },
      {
        icon: "🏠",
        label: { bn: "আজ এই পর্যন্ত, কাল আবার!", en: "That's enough for tonight, again tomorrow!" },
        react: {
          bn: "বিছানা ভাবল, “তুমি আমাকে ভোলোনি!”",
          en: "Your bed thought, “You haven't forgotten me!”",
        },
        d: { legs: 2, mood: -1 },
      },
    ],
  },
];

export const results: PlayResult[] = [
  {
    id: "route-master",
    char: "detective",
    mood: "proud",
    title: { bn: "পুজোপুরের পথের রাজা", en: "King of the Pujopur Route" },
    punchline: {
      bn: "“সব দেখলাম, সব বুঝলাম, রাস্তাও মনে আছে!”",
      en: "“Saw it all, got it all, and I remember the way too!”",
    },
    blurb: {
      bn: "পা, ফোন আর বন্ধু, তিনটেই সামলে রাতটা জিতে নিলেন। আজ থেকে দলের ম্যাপ আপনার কাঁধে।",
      en: "You handled legs, phone and friends and won the night. From now on the group map is on your shoulders.",
    },
    stat: { label: { bn: "পুজোপুর-দক্ষতা", en: "Pujopur skills" }, value: 94 },
  },
  {
    id: "bhog-hero",
    char: "bhog",
    mood: "happy",
    title: { bn: "ভোগ-বিরতির বীর", en: "Hero of the Bhog Break" },
    punchline: { bn: "“প্রতিমা দেখেছি, ভোগও দেখেছি!”", en: "“Saw the idol, saw the bhog too!”" },
    blurb: {
      bn: "সবকিছু একটু একটু ঠিক রেখে রাত পার করলেন, আর মাঝখানে অন্তত তিনবার কিছু খেয়েছেন।",
      en: "You kept everything a little bit in order all night, and ate something at least three times along the way.",
    },
    stat: { label: { bn: "খাবারের বিরতি", en: "Food breaks" }, value: 80 },
  },
  {
    id: "dead-phone",
    char: "selfie",
    mood: "panic",
    title: { bn: "০%-চার্জের রানি", en: "Queen of Zero Percent" },
    punchline: { bn: "“ছবিগুলো মনে মনে তুলে রাখলাম!”", en: "“I took the photos in my mind!”" },
    blurb: {
      bn: "ফোন নিভল, কিন্তু মেজাজ জ্বলজ্বল। আজ রাতের সব স্মৃতি শুধু আপনার চোখে। কেউ প্রমাণ চাইলে হেসে দিন।",
      en: "The phone died but your mood stayed bright. Tonight's memories live only in your eyes. If anyone asks for proof, just smile.",
    },
    stat: { label: { bn: "ফোনের চার্জ", en: "Phone charge" }, value: 0 },
  },
  {
    id: "tired-legs",
    char: "sleepy",
    mood: "sleepy",
    title: { bn: "পা-বন্ধ পথিক", en: "The Wanderer with Retired Legs" },
    punchline: { bn: "“আর এক পাও না, চল বেঞ্চে বসি!”", en: "“Not one more step, let's sit on the bench!”" },
    blurb: {
      bn: "পুজোর রাতে সবচেয়ে সত্যি কথাটা বলল আপনার পা। বাড়ি ফেরার ক্যাব না মিললে ঢাকের তালেই ঘুমিয়ে পড়বেন।",
      en: "On a Puja night, your legs said the truest thing. If no cab home turns up, you'll fall asleep to the beat of the dhak.",
    },
    stat: { label: { bn: "পায়ের জোর", en: "Leg power" }, value: 4 },
  },
  {
    id: "lost-friends",
    char: "excuse",
    mood: "wow",
    title: { bn: "দলছুট অজুহাতাচার্য", en: "The Lost-Friends Excuse Master" },
    punchline: {
      bn: "“আমি তো এখানেই ছিলাম, ওরাই হারিয়ে গেল!”",
      en: "“I was right here, they're the ones who got lost!”",
    },
    blurb: {
      bn: "ভিড়ের মাঝে বন্ধুরা কোথায় যেন মিলিয়ে গেল। তবে ফিরে বলার মতো দুর্দান্ত একটা অজুহাত আপনার তৈরি।",
      en: "Your friends vanished somewhere in the crowd. But you've already got a brilliant excuse ready for when they return.",
    },
    stat: { label: { bn: "দল ধরে রাখা", en: "Keeping the group" }, value: 8 },
  },
];

import type { SceneKind } from "@/components/play/art/Scene";
import type { L } from "@/lib/i18n";
import type { ActivityMeta, CharId, PlayResult } from "./types";

export const meta: ActivityMeta = {
  slug: "puja-personality",
  kind: "quiz",
  title: { bn: "পুজোর কোন চরিত্র তুমি?", en: "Which Puja character are you?" },
  tagline: {
    bn: "চারটে মজার দৃশ্য, চারটে সিদ্ধান্ত। শেষে পাবে তোমার নিজের পুজো-চরিত্র।",
    en: "Four funny scenes, four decisions. In the end you get your very own Puja character.",
  },
  kicker: { bn: "তোমার পুজো-চরিত্র", en: "Your Puja character" },
  description: {
    bn: "চারটে হাস্যকর পুজোর দৃশ্য, ছ’টা কার্টুন চরিত্র: তুমি কি থিম-দা, ভোগের বুম্বা, রিল-রিনি নাকি পাঁচ-মিনিট পিয়া? কুইজ খেলে কার্ড শেয়ার করো।",
    en: "Four ridiculous Puja scenes, six cartoon characters: are you Theme-da, Bhog-er Bumba, Reel-Rini or Paanch-Minit Pia? Take the quiz and share your card.",
  },
  chars: ["detective", "bhog", "selfie"],
};

export interface QuizOption {
  icon: string;
  label: L;
  /** Funny reaction shown right after choosing. */
  react: L;
  /** Points towards characters. */
  score: Partial<Record<CharId, number>>;
}

export interface QuizScene {
  scene: SceneKind;
  prompt: L;
  options: QuizOption[];
}

export const scenes: QuizScene[] = [
  {
    scene: "queue",
    prompt: {
      bn: "সপ্তমীর সন্ধ্যা। মণ্ডপের লাইন যেন শেষই হয় না!",
      en: "It's Saptami evening. The pandal queue just won't end!",
    },
    options: [
      {
        icon: "🔍",
        label: { bn: "পাশের গলি দিয়ে ঢোকার রাস্তা খুঁজি", en: "Hunt for a side lane to sneak in" },
        react: {
          bn: "গলিটা আসলে কারও রান্নাঘরের দরজা। তবে গন্ধটা দারুণ!",
          en: "The lane turns out to be someone's kitchen door. The smell, though, is amazing!",
        },
        score: { detective: 2, excuse: 1 },
      },
      {
        icon: "🍛",
        label: { bn: "ভোগের গন্ধ ধরে এগোই", en: "Follow the smell of bhog" },
        react: {
          bn: "নাক বলছে খিচুড়ি, লাইন বলছে দুই ঘণ্টা।",
          en: "Your nose says khichuri, the queue says two hours.",
        },
        score: { bhog: 2, broke: 1 },
      },
      {
        icon: "🤳",
        label: { bn: "লাইনেই ছবি তুলি", en: "Take photos right in the queue" },
        react: {
          bn: "পেছনের কাকু ফ্রেমে ঢুকে গেছেন। ছবি হিট!",
          en: "The uncle behind you photobombed. The pic is a hit!",
        },
        score: { selfie: 2, excuse: 1 },
      },
      {
        icon: "😴",
        label: { bn: "লাইন দেখেই হাই! বাড়ি ফিরি?", en: "Yawn at the sight of the queue. Head home?" },
        react: {
          bn: "চোখ বুজতেই লাইন একধাপ এগোল। কপাল ভালো!",
          en: "The moment you shut your eyes, the queue moves one step. Lucky you!",
        },
        score: { sleepy: 2, broke: 1 },
      },
    ],
  },
  {
    scene: "food",
    prompt: {
      bn: "ভোগের কাউন্টারে এসে দেখি, খিচুড়ি প্রায় শেষ!",
      en: "At the bhog counter, the khichuri is almost gone!",
    },
    options: [
      {
        icon: "🥄",
        label: { bn: "দুই প্লেট! বিবেক পরে দেখা যাবে", en: "Two plates! Conscience can wait" },
        react: {
          bn: "হাতা-দাদু হেসে বললেন, “তুমি তো বাঁধা খদ্দের!”",
          en: "The ladle-uncle laughs, “You're a regular!”",
        },
        score: { bhog: 2, sleepy: 1 },
      },
      {
        icon: "🧭",
        label: { bn: "আগে খুঁজি, আসল কাউন্টার কোনটা", en: "First, find out which one is the real counter" },
        react: {
          bn: "ঠিক খুঁজে পেলে! তবে ততক্ষণে পাতিলটা খালি।",
          en: "Found it! But by then the pot is empty.",
        },
        score: { detective: 2, broke: 1 },
      },
      {
        icon: "📸",
        label: { bn: "প্লেট হাতে ছবি তুলি, তারপর খাব", en: "Take a photo with the plate first, eat later" },
        react: { bn: "খিচুড়ি ঠান্ডা, লাইক গরম।", en: "Khichuri gone cold, likes running hot." },
        score: { selfie: 2, bhog: 1 },
      },
      {
        icon: "🙋",
        label: { bn: "বলি, “আমি তো শুধু পাশ দিয়ে যাচ্ছিলাম”", en: "Say, “I was just passing by”" },
        react: {
          bn: "পাশ দিয়ে যেতে যেতে প্লেট ভর্তি! দারুণ গল্প।",
          en: "Just passing by, and somehow a full plate! Great story.",
        },
        score: { excuse: 2, sleepy: 1 },
      },
    ],
  },
  {
    scene: "wallet",
    prompt: {
      bn: "ফুচকার দোকানে এসে দেখি, ব্যাগে ওয়ালেট নেই!",
      en: "At the fuchka stall you realise your wallet isn't in your bag!",
    },
    options: [
      {
        icon: "🤝",
        label: { bn: "হেসে বলি, “আজ তুই দে, পরের বার আমি!”", en: "Smile and say, “You pay today, I'll get the next one!”" },
        react: {
          bn: "এই “পরের বার” গত তিন বছর ধরে চলছে।",
          en: "That “next time” has been running for three years.",
        },
        score: { broke: 2, excuse: 1 },
      },
      {
        icon: "🧘",
        label: { bn: "বলি, “ইচ্ছে করেই রেখে এসেছি, মিনিমালিজম!”", en: "Say, “Left it behind on purpose. Minimalism!”" },
        react: {
          bn: "দোকানদার বললেন, “ফুচকাও মিনিমাল দেব?”",
          en: "The vendor asks, “Shall I serve minimalist fuchka too?”",
        },
        score: { excuse: 2, selfie: 1 },
      },
      {
        icon: "🛏️",
        label: { bn: "ফুচকার চেয়ে বিছানা ভালো, বাড়ি চল", en: "A bed beats fuchka. Let's go home" },
        react: {
          bn: "ফুচকা না খেয়েই বাড়ি? এ কাজ বাবাই ছাড়া কেউ পারে না।",
          en: "Going home without fuchka? Only Babai can pull that off.",
        },
        score: { sleepy: 2, detective: 1 },
      },
      {
        icon: "🕵️",
        label: { bn: "পকেট, ব্যাগ, জুতো, সবখানে তল্লাশি!", en: "Search pockets, bag, shoes, everywhere!" },
        react: {
          bn: "জুতোর ভেতরে দশ টাকা! গোয়েন্দাগিরি সার্থক।",
          en: "Ten rupees inside the shoe! Detective work pays off.",
        },
        score: { detective: 2, bhog: 1 },
      },
    ],
  },
  {
    scene: "night",
    prompt: {
      bn: "রাত ১১টা। বন্ধুরা চেঁচাচ্ছে, “আরও একটা মণ্ডপ!”",
      en: "11 PM. Friends are yelling, “One more pandal!”",
    },
    options: [
      {
        icon: "🌟",
        label: { bn: "চল চল! নতুন ব্যাকগ্রাউন্ড ডাকছে", en: "Let's go! A new backdrop is calling" },
        react: { bn: "ফোনে ১% ব্যাটারি, উৎসাহ ১০০%!", en: "1% battery, 100% enthusiasm!" },
        score: { selfie: 2, bhog: 1 },
      },
      {
        icon: "🍢",
        label: {
          bn: "যাব, তবে রাস্তায় রোল-মিষ্টি-ফুচকা শর্ত",
          en: "I'll come, but roll, sweets and fuchka on the way are the condition",
        },
        react: {
          bn: "শর্ত মঞ্জুর। পথে আরও চারটে শর্ত জুড়ল।",
          en: "Condition accepted. Four more conditions joined on the way.",
        },
        score: { bhog: 2, broke: 1 },
      },
      {
        icon: "🚕",
        label: { bn: "চল! …ক্যাব ভাড়াটা কে দিচ্ছে যেন?", en: "Let's go! …Who's paying for the cab again?" },
        react: {
          bn: "সবাই হঠাৎ জুতোর ফিতে বাঁধতে বসে গেল।",
          en: "Everyone suddenly got busy tying their shoelaces.",
        },
        score: { broke: 2, excuse: 1 },
      },
      {
        icon: "🪑",
        label: { bn: "তোরা যা, আমি বেঞ্চে একটু চোখ বুজি", en: "You go, I'll rest my eyes on the bench" },
        react: {
          bn: "ঢাকের তালে ঘুম, এ তো ঘুমপাড়ানি গান!",
          en: "Sleeping to the beat of the dhak: a lullaby!",
        },
        score: { sleepy: 2, selfie: 1 },
      },
    ],
  },
];

export const results: PlayResult[] = [
  {
    id: "pandal-detective",
    char: "detective",
    mood: "smug",
    title: { bn: "থিম-দা তন্ময়", en: "Theme-da Tanmoy" },
    punchline: { bn: "“আসলে এই প্যান্ডেলের থিমটা হল…”", en: "“Actually, the theme of this pandal is…”" },
    blurb: {
      bn: "মণ্ডপে ঢুকেই আপনি থিমের মানে বুঝে ফেলেন, আর না জিজ্ঞেস করলেও সবাইকে বুঝিয়ে দেন। বন্ধুরা ততক্ষণে ফুচকার লাইনে।",
      en: "The moment you enter a pandal you decode the theme, and explain it to everyone who didn't ask. Your friends are already in the fuchka queue.",
    },
    stat: { label: { bn: "থিম-ব্যাখ্যার দৈর্ঘ্য", en: "Theme-explainer length" }, value: 97 },
  },
  {
    id: "bhog-samrat",
    char: "bhog",
    mood: "happy",
    title: { bn: "ভোগের বুম্বা", en: "Bhog-er Bumba" },
    punchline: { bn: "“লাইনটা তেমন লম্বা না, চল!”", en: "“This queue isn't that long, come on!”" },
    blurb: {
      bn: "আপনার কাছে ঠাকুর দেখার সেরা সময় ভোগের আগের আধ ঘণ্টা। খিচুড়ি-লাবড়া-পায়েস, তিনটেই চাই, দ্বিতীয় প্লেটসহ।",
      en: "To you the best time for darshan is the half hour before bhog. Khichuri, labra, payesh: all three, second plate included.",
    },
    stat: { label: { bn: "দ্বিতীয় প্লেটের সম্ভাবনা", en: "Second-plate chance" }, value: 99 },
  },
  {
    id: "selfie-queen",
    char: "selfie",
    mood: "proud",
    title: { bn: "রিল-রিনি", en: "Reel-Rini" },
    punchline: { bn: "“দাঁড়া, আর একটা টেক!”", en: "“Wait, one more take!”" },
    blurb: {
      bn: "নতুন শাড়ি বা পাঞ্জাবি, ঠিকঠাক আলো, ট্রেন্ডিং গান। ঠাকুর দেখা পরে হবে, আগে রিলটা পোস্ট হোক।",
      en: "New outfit, perfect light, trending audio. The idol can wait; the reel goes up first.",
    },
    stat: { label: { bn: "টেক-এর সংখ্যা", en: "Number of takes" }, value: 98 },
  },
  {
    id: "empty-pocket",
    char: "broke",
    mood: "panic",
    title: { bn: "পরে-দেব পিন্টু", en: "Pore-Debo Pintu" },
    punchline: { bn: "“পরে বিকাশ/UPI করে দিচ্ছি!”", en: "“I'll send it on bKash/UPI later!”" },
    blurb: {
      bn: "আপনার সঙ্গে ঘোরা মানে অঢেল মজা, শুধু বিলের সময় আপনার নেটওয়ার্ক চলে যায়। ‘পরে’ আর আসে না।",
      en: "Hanging out with you is endless fun, except your network vanishes when the bill arrives. “Later” never comes.",
    },
    stat: { label: { bn: "‘পরে দেব’ বলার হার", en: "“Will pay later” rate" }, value: 97 },
  },
  {
    id: "excuse-expert",
    char: "excuse",
    mood: "wow",
    title: { bn: "পাঁচ-মিনিট পিয়া", en: "Paanch-Minit Pia" },
    punchline: { bn: "“এই তো মোড়ে চলে এসেছি!”", en: "“I'm just at the crossing!”" },
    blurb: {
      bn: "আপনি সব সময় ‘এসে গেছি’, অথচ আসলে এখনও শাড়ির কুঁচি ঠিক করছেন। গ্রুপে লোকেশন চাইলে সিগন্যাল চলে যায়।",
      en: "You are always “almost there” while still fixing your outfit at home. Ask for your live location and the signal conveniently drops.",
    },
    stat: { label: { bn: "‘পাঁচ মিনিট’-এর আসল সময় (মিনিট)", en: "Real length of “five minutes” (min)" }, value: 45 },
  },
  {
    id: "sleepy-friend",
    char: "sleepy",
    mood: "sleepy",
    title: { bn: "বাড়ি-চল বাবাই", en: "Bari-Chol Babai" },
    punchline: { bn: "“আর কতটা হাঁটবি? বাড়ি চল!”", en: "“How much more walking? Let's go home!”" },
    blurb: {
      bn: "তিনটে মণ্ডপের পর আপনার পা বলে, ‘আজ এইটুকুই’। ভিড়ের মধ্যে একটা বেঞ্চ পেলেই আপনি সুখী।",
      en: "After three pandals your feet announce, “that's enough for today”. One free bench in the crowd and you are happy.",
    },
    stat: { label: { bn: "পা-ব্যথার হার", en: "Sore-feet rate" }, value: 95 },
  },
];

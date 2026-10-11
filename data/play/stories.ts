// Four extra quick quizzes. All situations, lines and characters are original.
// Literary and mythological references are commentary or reading tips only (see each meta.note).
import type { SceneKind } from "@/components/play/art/Scene";
import type { L } from "@/lib/i18n";
import type { QuizData } from "./quizzes";
import type { QuizOption, QuizScene } from "./quiz";
import type { ActivityMeta, CharId, Mood, PlayResult } from "./types";

type Score = QuizOption["score"];

/** option(icon, [bn, en] label, [bn, en] reaction, score) */
const o = (icon: string, label: [string, string], react: [string, string], score: Score): QuizOption => ({
  icon,
  label: { bn: label[0], en: label[1] },
  react: { bn: react[0], en: react[1] },
  score,
});

const scene = (kind: SceneKind, prompt: [string, string], options: QuizOption[]): QuizScene => ({
  scene: kind,
  prompt: { bn: prompt[0], en: prompt[1] },
  options,
});

/** result(id, char, mood, [bn, en] title, punchline, blurb, statLabel, statValue) */
const r = (
  id: string,
  char: CharId,
  mood: Mood,
  title: [string, string],
  punchline: [string, string],
  blurb: [string, string],
  stat: [string, string],
  value: number,
): PlayResult => ({
  id,
  char,
  mood,
  title: { bn: title[0], en: title[1] },
  punchline: { bn: punchline[0], en: punchline[1] },
  blurb: { bn: blurb[0], en: blurb[1] },
  stat: { label: { bn: stat[0], en: stat[1] } as L, value },
});

// ---------------------------------------------------------------- family chaos
const familyMeta: ActivityMeta = {
  slug: "puja-family",
  kind: "quiz",
  title: { bn: "পুজোর বাড়িতে তোমার ভূমিকা কী?", en: "What's Your Role in the Puja Household?" },
  tagline: {
    bn: "ষষ্ঠী থেকে দশমী: তিনটে হইচইয়ের দৃশ্য, তিনটে সিদ্ধান্ত। দেখি পরিবারে তুমি কে!",
    en: "Shashthi to Dashami: three chaotic scenes, three choices. Let's see who you are in the family!",
  },
  kicker: { bn: "তোমার পরিবারের ভূমিকা", en: "Your family role" },
  intro: {
    bn: "ঠাম্মা, কাকিমা, ছোটকা আর একগাদা আত্মীয়। তিনটে দৃশ্যে বলে দেব, এই হইচইয়ে তুমি কে!",
    en: "Thamma, Kakima, Chhotoka and a houseful of relatives. In three scenes I'll tell you who you are!",
  },
  share: { bn: "পুজোর বাড়িতে আমি “{title}”! তুমি কে?", en: "In my Puja household I'm “{title}”! Who are you?" },
  description: {
    bn: "অঞ্জলি, ভোগ, ঢাক আর আত্মীয়দের হইচই: তিনটে মজার দৃশ্যে জেনে নাও পুজোর বাড়িতে তোমার ভূমিকা। কার্ড শেয়ার করো।",
    en: "Anjali, bhog, dhak and a houseful of relatives: three funny scenes reveal your role in the Puja household. Share your card.",
  },
  chars: ["sleepy", "selfie", "detective"],
};

export const family: QuizData = {
  meta: familyMeta,
  order: ["detective", "bhog", "selfie", "sleepy"],
  scenes: [
    scene(
      "dhak",
      ["ষষ্ঠীর সকাল। বাড়ি আত্মীয়ে গিজগিজ, ঠাম্মা হাঁক দিলেন: “সবাই তৈরি?”", "Shashthi morning. The house is bursting with relatives and Thamma calls out: “Is everyone ready?”"],
      [
        o("📋", ["হাতে লিস্ট নিয়ে সবার নাম ডাকি", "Grab a list and call out names"], ["দু’মিনিটেই ধরা পড়ল, লিস্টে ছোটকার নামটাই নেই!", "Two minutes later: Chhotoka's name isn't on the list!"], { detective: 2, bhog: 1 }),
        o("🍳", ["সোজা রান্নাঘরে, আগে ভোগের খবর নিই", "Straight to the kitchen to check on the bhog"], ["মা বললেন “আগে স্নান!”, কিন্তু একটা নাড়ু ততক্ষণে পকেটে।", "Ma says “Bathe first!” A naru is already in your pocket."], { bhog: 2, detective: 1 }),
        o("📸", ["নতুন জামাকাপড়ে সবাইকে গ্রুপ-ছবির জন্য দাঁড় করাই", "Line everyone up for a group photo in new clothes"], ["“আরেকটা!” বলতে বলতে ছবি হল ৪৩টা। হাসি আর টেকে না।", "“One more!” and suddenly there are 43 photos. Nobody can smile anymore."], { selfie: 2, detective: 1 }),
        o("😴", ["আর পাঁচ মিনিট… কম্বলের তলাতেই থাকি", "Five more minutes… stay under the blanket"], ["পাঁচ মিনিট পরে ঢাক বেজে উঠল। ঘুম তো কবেই পগারপার।", "Five minutes later the dhak starts. Sleep is long gone."], { sleepy: 2, bhog: 1 }),
      ],
    ),
    scene(
      "queue",
      ["অষ্টমীর অঞ্জলি। হাতে ফুল, আর ঠিক তখনই কাকিমা জিজ্ঞেস করলেন: “রেজাল্ট কেমন হল?”", "Ashtami anjali. Flowers in hand, and right then Kakima asks: “So, how were the results?”"],
      [
        o("🙏", ["মন্ত্রে মন দিই, প্রশ্ন শুনিইনি ভাব করি", "Focus on the mantra, pretend not to hear"], ["পুরোহিতমশাই মাথা নাড়লেন। কাকিমার মুখে হার-না-মানা হাসি।", "The priest nods. Kakima smiles, unbeaten."], { detective: 2, sleepy: 1 }),
        o("🥘", ["হেসে বলি: “কাকিমা, আজ ভোগে কী?”", "Smile and ask: “Kakima, what's for bhog today?”"], ["কাকিমার চোখ জ্বলজ্বল: “খিচুড়ি, বেগুনি আর পায়েস!” রেজাল্ট বেমালুম উধাও।", "Kakima's eyes light up: “Khichuri, beguni and payesh!” The results question vanishes."], { bhog: 2, selfie: 1 }),
        o("🤳", ["কাকিমাকে নিয়ে সেলফি তুলি, প্রশ্ন চাপা পড়ুক", "Pull Kakima into a selfie, bury the question"], ["ছবিতে কাকিমা দারুণ, আপনিও দারুণ। রেজাল্ট? কোন রেজাল্ট?", "Kakima looks great, so do you. Results? What results?"], { selfie: 2, bhog: 1 }),
        o("😅", ["“পরে বলব!” বলে ফুল-সমেত লাইন থেকে সটকাই", "Say “later!” and slip out of the line, flowers and all"], ["অঞ্জলির ফুল গিয়ে পড়ল সোজা মাসির মাথায়।", "The anjali flowers land straight on Mashi's head."], { sleepy: 2, selfie: 1 }),
      ],
    ),
    scene(
      "night",
      ["দশমীর রাত। বাড়ি ফিরে সবাই ক্লান্ত। এখন কী করবে?", "Dashami night. Home at last, everyone exhausted. Now what?"],
      [
        o("🗒️", ["ঘুমের আগে খরচের হিসেব আর কালকের প্ল্যান", "Tally expenses and plan tomorrow before bed"], ["সবাই ঘুমে, আপনি খাতায়। পুজো শেষ, হিসেব শেষ হয় না।", "Everyone's asleep, you're with the ledger. Puja ends, accounts don't."], { detective: 2, bhog: 1 }),
        o("🥘", ["ফ্রিজ খুলে বাসি লুচি-আলুর দম খুঁজি", "Raid the fridge for leftover luchi and aloor dom"], ["রাত একটায় ঠান্ডা আলুর দম: সারা সপ্তাহের সেরা ভোগ!", "1 a.m. cold aloor dom: the best bhog of the week!"], { bhog: 2, sleepy: 1 }),
        o("🖼️", ["সপ্তাহের সেরা ছবি বেছে ফ্যামিলি গ্রুপে পাঠাই", "Pick the week's best photos for the family group"], ["ছবি পড়তেই গ্রুপে হাহাকার: “এটা কে তুলেছে? আমার চোখ বোজা!”", "The group erupts: “Who took this? My eyes are shut!”"], { selfie: 2, detective: 1 }),
        o("🛌", ["যেখানে জায়গা পাই সেখানেই ঢলে পড়ি", "Collapse wherever there's space"], ["ঘুমের মধ্যেও কানে ঢাক বাজছে। “আসছে বছর আবার হবে”, স্বপ্নেও।", "The dhak still plays in your sleep. “Next year again”, even in dreams."], { sleepy: 2, bhog: 1 }),
      ],
    ),
  ],
  results: [
    r("family-manager", "detective", "proud", ["পরিবারের প্রজেক্ট ম্যানেজার", "The Family Project Manager"], ["“লিস্ট মিলিয়ে নাও, কেউ বাদ পড়েনি তো?”", "“Check the list. Did anyone get left behind?”"], ["পুজোর বাড়ির আসল কন্ট্রোল রুম আপনি। লিস্ট, সময়, হিসেব সব আপনার হাতে। শুধু একটাই সমস্যা: কেউ আপনার লিস্ট মানে না।", "You are the control room of the Puja house: lists, timings, accounts. The only problem: nobody follows your list."], ["লিস্ট মেলানোর ক্ষমতা", "List-checking power"], 96),
    r("feast-captain", "bhog", "happy", ["ভোজের ক্যাপ্টেন", "The Feast Captain"], ["“আগে ভোগ, তারপর বাকি সব।”", "“Bhog first, everything else later.”"], ["ভোগের লাইনে কে আগে, কার পাতে আর একটু খিচুড়ি লাগবে, আপনি সব জানেন। বাড়িতে আপনার ডাকনাম: “আরেকটু দিই?”", "You know who's next in the bhog queue and whose plate needs more khichuri. Your family nickname: “Shall I serve a bit more?”"], ["পাতে আরেকটু দেওয়ার হার", "Second-helping rate"], 99),
    r("photo-cousin", "selfie", "wow", ["ফোটোগ্রাফার কাজিন", "The Photographer Cousin"], ["“এক্ষুনি হাসো, আলোটা এখন দারুণ!”", "“Smile now, the light is perfect!”"], ["পুজোর প্রতিটা মুহূর্ত আপনার গ্যালারিতে। সবাইকে দাঁড় করিয়ে ছবি তোলেন, আর নিজে থাকেন শুধু একটা কোণের ঘাড়ে।", "Every Puja moment lives in your gallery. You line everyone up for photos and appear only as the corner of a neck."], ["গ্রুপ-ফোটোর জেদ", "Group-photo stubbornness"], 92),
    r("sleepy-chhotoka", "sleepy", "sleepy", ["ঘুমন্ত ছোটকা", "Sleepy Chhotoka"], ["“ঢাকের আওয়াজেও ঘুম? হ্যাঁ, পারি!”", "“Sleeping through the dhak? Yes, I can!”"], ["পুজোর সব হইচইয়ে আপনিই একমাত্র শান্ত মানুষ। সবাই খাটছে, আপনি সোফায় ঘুমে। তবু ভোগের সময় ঠিক সবার আগে হাজির।", "In all the Puja chaos you are the one calm soul. Everyone works, you nap on the sofa, yet you turn up first when the bhog is served."], ["আর-পাঁচ-মিনিটের ক্ষমতা", "Five-more-minutes power"], 98),
  ],
};

// ------------------------------------------------------------------ Gopal-style wit
const witMeta: ActivityMeta = {
  slug: "gopal-wit",
  kind: "quiz",
  title: { bn: "দরবারি বুদ্ধি: তোমার জবাব কত চটপটে?", en: "Court-Jester Wit: How Quick Is Your Comeback?" },
  tagline: {
    bn: "পাড়ার কমিটি, ভোগের পাত আর হঠাৎ বৃষ্টি। তিনটে মুহূর্তে বুদ্ধির পরীক্ষা।",
    en: "The para committee, the bhog line and a sudden shower: three moments to test your wit.",
  },
  kicker: { bn: "তোমার বুদ্ধির ঘরানা", en: "Your brand of wit" },
  note: {
    bn: "গোপাল ভাঁড় লোককথার চরিত্র, বাঘা উপেন্দ্রকিশোর রায়চৌধুরীর জনসাধারণের সম্পদ গুপী-বাঘার গল্পের; ছবি, পরিস্থিতি আর সংলাপ আমাদের নিজেদের।",
    en: "Gopal Bhar is a folk-tale figure and Bagha comes from Upendrakishore Ray Chowdhury's public-domain Goopy–Bagha tales; the drawings, situations and lines here are our own.",
  },
  intro: {
    bn: "রাজসভা নেই, আছে পাড়ার পুজো কমিটি। দেখি তোমার মুখের জবাব কতটা ধারালো!",
    en: "No royal court, just the para Puja committee. Let's see how sharp your tongue is!",
  },
  share: { bn: "আমার বুদ্ধির ঘরানা: “{title}”! তোমারটা কী?", en: "My brand of wit: “{title}”! What's yours?" },
  description: {
    bn: "গোপাল ভাঁড়ের লোককথার ঢঙে তিনটে মজার পরিস্থিতি: পুজো কমিটির চাঁদা, ভোগের পাত আর বৃষ্টি। দেখো তোমার জবাব কেমন।",
    en: "Three funny moments in the spirit of Gopal Bhar folk tales: Puja subscriptions, the bhog line and rain. Find out how sharp your comeback is.",
  },
  chars: ["gopal", "detective", "bagha"],
};

export const wit: QuizData = {
  meta: witMeta,
  order: ["gopal", "detective", "bhog", "bagha"],
  scenes: [
    scene(
      "queue",
      ["পাড়ার পুজো কমিটির সেক্রেটারি এসে বললেন: “এবার চাঁদা ডবল!”", "The para Puja committee secretary arrives: “This year the subscription is double!”"],
      [
        o("🧮", ["হিসেব চেয়ে বসি: “ডবল কীসে, ঢাকে না ভোগে?”", "Ask for the accounts: “Double for what, dhak or bhog?”"], ["সেক্রেটারি দু’পাতা হিসেব আনতে ছুটলেন। আপনি ততক্ষণে পগার পার।", "The secretary runs to fetch two pages of accounts. You're long gone."], { detective: 2, gopal: 1 }),
        o("🍲", ["হেসে বলি: “ডবল ভোগ হলে ডবল চাঁদা, রাজি!”", "Grin: “Double bhog, double subscription, deal!”"], ["সেক্রেটারি ঢোক গিললেন: “ডবল ভোগ?” পাড়ায় রটে গেল কথাটা আপনিই দিয়েছেন।", "The secretary gulps: “Double bhog?” The para now thinks you promised it."], { bhog: 2, bagha: 1 }),
        o("🎭", ["নাটক করে পকেট উল্টে বলি: “মনে-মনে পুরোটাই দিলাম!”", "Turn out your pockets: “I paid all of it in my heart!”"], ["সবাই হেসে গড়াগড়ি। চাঁদা মাফ হল না, তবে চা-টা ফ্রি।", "Everyone's in splits. Subscription not waived, but tea is on the house."], { bagha: 2, gopal: 1 }),
        o("🧐", ["গম্ভীর মুখে বলি: “আগে গত বছরের বকেয়া হিসেবটা…?”", "Look grave: “First, last year's pending accounts…?”"], ["সেক্রেটারির মুখ চুপসে গেল। এখন উনিই আপনাকে চা খাওয়াচ্ছেন।", "The secretary deflates. Now he's the one buying you tea."], { gopal: 2, detective: 1 }),
      ],
    ),
    scene(
      "food",
      ["ভোগের পাতে বসে কমিটির বড়কর্তা ঘোষণা করলেন: “যে সবচেয়ে মজার কথা বলবে, সে বেগুনি ফ্রি পাবে!”", "Seated at the bhog, the committee head announces: “Whoever says the funniest thing gets free beguni!”"],
      [
        o("🤔", ["চুপচাপ সবার কথা শুনে শেষে একটা লাইন ছাড়ি", "Listen to everyone, then land one line at the end"], ["বাকিরা একে একে ফেল, আর আপনার এক লাইনে পুরো সারি ফাটল।", "Everyone else fizzles out; your one line has the whole row in stitches."], { detective: 2, gopal: 1 }),
        o("😋", ["বলি: “বেগুনির চেয়ে মজার কথা আর কী আছে?”", "Say: “What's funnier than beguni itself?”"], ["জবাব সেরা না হোক, বেগুনি এখন আপনার পাতে। যুক্তি অকাট্য!", "Maybe not the best line, but the beguni is on your plate. Airtight logic!"], { bhog: 2, bagha: 1 }),
        o("🎤", ["উঠে দাঁড়িয়ে গোটা মজলিস মাতিয়ে দিই", "Stand up and take over the whole gathering"], ["হাততালিতে মণ্ডপ কাঁপছে। বেগুনি ঠান্ডা হচ্ছে, তাতে কী!", "The pandal shakes with applause. The beguni goes cold, who cares!"], { bagha: 2, bhog: 1 }),
        o("🙈", ["বলি: “মজার কথা এখন মনে পড়ছে না… পরে বলব!”", "Say: “Can't think of a funny line now… later!”"], ["“পরে”-তে আপনার সুনাম আছে, তবু বেগুনিটা ভাগে এল।", "Your “later” has a reputation, yet a beguni still lands on your plate."], { gopal: 2, bhog: 1 }),
      ],
    ),
    scene(
      "rain",
      ["ফেরার পথে হঠাৎ বৃষ্টি, ছাতা নেই। পাড়ার দাদা হাঁক দিলেন: “ভিজে গেলি যে!”", "Sudden rain on the way home, no umbrella. The para dada shouts: “You're soaked!”"],
      [
        o("☂️", ["বলি: “ভিজিনি, মেঘকে শুধু আমার সঙ্গে হাঁটতে দিলাম!”", "Say: “I'm not wet, I just let the cloud walk with me!”"], ["দাদা হেসে নিজের ছাতা এগিয়ে দিলেন। আজ বুদ্ধিই ছাতা।", "Dada laughs and hands over his umbrella. Today wit is your umbrella."], { gopal: 2, bagha: 1 }),
        o("🗺️", ["আগে থেকেই ঠিক করা: পাশের চায়ের দোকানের শেড", "Already planned: the tea stall's shed next door"], ["আপনি শুকনো, দাদা ভিজে। প্ল্যান ছিল বলেই মিলে গেল।", "You're dry, Dada is wet. It worked because you had a plan."], { detective: 2, bhog: 1 }),
        o("🍵", ["ছুটে চায়ের দোকানে: “ভিজেছি, তাই গরম চা প্রাপ্য!”", "Dash to the tea stall: “I'm soaked, so hot tea is my due!”"], ["চা-ওয়ালা মাথা নাড়লেন: “এ যুক্তি হারানো শক্ত।”", "The tea seller nods: “Hard to argue with that.”"], { bhog: 2, gopal: 1 }),
        o("💃", ["বৃষ্টিতেই নাচ জুড়ে দিই, যে পারে ভিডিও করুক", "Start dancing in the rain, let them film it"], ["ভিডিও ভাইরাল পাড়ার গ্রুপে। “নাচিয়ে-ভিজে” ডাকনাম পাকা।", "The clip goes viral in the para group. Your new nickname is sealed."], { bagha: 2, bhog: 1 }),
      ],
    ),
  ],
  results: [
    r("quick-retort", "gopal", "smug", ["চটপট জবাবের ওস্তাদ", "The Quick-Retort Master"], ["“আমি দেরি করিনি, সময়ই আমার জন্য অপেক্ষা করল।”", "“I wasn't late. Time simply waited for me.”"], ["চাপের মুখে আপনার মুখে হাসি আর পকেটে তৈরি জবাব। আপনার কথা এতই মজার যে কেউ রাগ করার সময়ই পায় না।", "Under pressure you smile with a reply ready in your pocket. Your comebacks are so funny nobody gets time to be angry."], ["জবাব তৈরির গতি", "Comeback speed"], 97),
    r("quiet-mastermind", "detective", "smug", ["চুপচাপ মাস্টারমাইন্ড", "The Quiet Mastermind"], ["“সব ভেবে রেখেছি, শুধু বলিনি।”", "“I've thought of everything, just haven't said so.”"], ["আপনি কম বলেন, কিন্তু যা বলেন তাতে সভা চুপ। আগে থেকে ভেবে রাখেন বলেই ঠিক সময়ে ঠিক কথাটা বেরোয়।", "You say little, but when you speak the room goes quiet. You think ahead, so the right line lands at the right moment."], ["আগে থেকে ভেবে রাখা", "Thinking ahead"], 94),
    r("belly-logic", "bhog", "happy", ["ভুঁড়ির যুক্তিবিদ", "The Belly-Logic Philosopher"], ["“খাওয়ার যুক্তিতে আমি কখনও হারিনি।”", "“I've never lost an argument about food.”"], ["আপনার প্রতিটা যুক্তির শেষে একটাই সিদ্ধান্ত: কিছু একটা খাওয়া যাক। মজার কথা, প্রতিবার কেউ না কেউ রাজি হয়ে যায়।", "Every argument of yours ends in one conclusion: let's eat something. Funny thing is, someone always agrees."], ["যুক্তির শেষে খাবার", "Arguments ending in food"], 99),
    r("gathering-star", "bagha", "proud", ["মজলিসের মধ্যমণি", "The Life of the Gathering"], ["“এবার আমার পালা, সবাই মন দিয়ে শোনো!”", "“My turn now. Everybody, listen up!”"], ["আপনি ঢুকলেই আড্ডা জমে যায়। আপনার গল্পে সত্যি, মিথ্যে আর আন্দাজ মিলে এমন কিছু হয়, যা কেউ ভোলে না।", "The adda lights up the moment you walk in. Your stories mix truth, fiction and guesswork into something nobody forgets."], ["আড্ডা জমানোর ক্ষমতা", "Adda-brightening power"], 95),
  ],
};

// ------------------------------------------------------------------ epic adda
const epicMeta: ActivityMeta = {
  slug: "epic-adda",
  kind: "quiz",
  title: { bn: "পুজোর আড্ডায় তুমি মহাভারতের কোন ধাঁচ?", en: "Which Mahabharata Type Are You at the Puja Adda?" },
  tagline: {
    bn: "পুজোর আড্ডা, শেষ প্লেট খিচুড়ি আর লোডশেডিং। তিনটে সিদ্ধান্তেই ধরা পড়বে তোমার ধাঁচ।",
    en: "Puja adda, the last plate of khichuri and a power cut. Three choices reveal your type.",
  },
  kicker: { bn: "তোমার আড্ডা-ধাঁচ", en: "Your adda type" },
  note: {
    bn: "মহাভারতের চরিত্র-ধাঁচ নিয়ে হালকা মজা। ছবি আর সংলাপ সবই আমাদের নিজস্ব।",
    en: "Light-hearted riffs on Mahabharata character types. All art and dialogue here are our own.",
  },
  intro: {
    bn: "কেউ রণকৌশলী, কেউ ভোজনবীর, কেউ অব্যর্থ লক্ষ্যভেদী, কেউ দাতা। আড্ডায় তুমি কোনটা?",
    en: "Some are strategists, some mighty eaters, some sharp shooters, some givers. Which are you at the adda?",
  },
  share: { bn: "পুজোর আড্ডায় আমি “{title}”! তুমি?", en: "At the Puja adda I'm “{title}”! And you?" },
  description: {
    bn: "মহাভারতের চরিত্র-ধাঁচের ঢঙে পুজোর আড্ডায় তিনটে মজার পরিস্থিতি। তুমি কি রণকৌশলী, ভোজনবীর, লক্ষ্যভেদী নাকি দাতা?",
    en: "Three funny Puja adda moments in the spirit of Mahabharata character types. Strategist, mighty eater, sharp shooter or giver?",
  },
  chars: ["broke", "bhog", "detective"],
};

export const epic: QuizData = {
  meta: epicMeta,
  order: ["detective", "bhog", "selfie", "broke"],
  scenes: [
    scene(
      "queue",
      ["পুজোর আড্ডায় প্রশ্ন উঠল: “কাল কোন মণ্ডপে যাব?” সবার মত আলাদা।", "At the Puja adda someone asks: “Which pandal tomorrow?” Everyone has a different view."],
      [
        o("🧩", ["সবার কথা শুনে ঠান্ডা মাথায় একটা রুট বানাই", "Listen to all and calmly draw up one route"], ["দেখা গেল সবার পছন্দই আপনার রুটে পড়ছে। কূটনীতি একেই বলে!", "Turns out everyone's pick fits your route. That's diplomacy!"], { detective: 2, broke: 1 }),
        o("🍛", ["যেখানে ভোগ ভালো সেখানেই যাব, ব্যস", "Wherever the bhog is good, end of story"], ["সবাই চুপ। ভোগের যুক্তির ওপর কথা চলে না।", "Everyone goes quiet. Nobody argues with bhog logic."], { bhog: 2, detective: 1 }),
        o("🎯", ["একটাই মণ্ডপ, কিন্তু সেরা ছবিটা সেখানেই হবে", "Just one pandal, but it'll give the best photo"], ["চোখ শুধু লক্ষ্যে। আপনার ফোনের ফোকাস আর কারও নেই।", "Eyes only on the target. Nobody has your focus, or your phone's."], { selfie: 2, detective: 1 }),
        o("🎁", ["“যেখানে যাবে, আমিও যাব। টাকা লাগলে বোলো”", "“I'll go wherever you go. Tell me if you need cash”"], ["খরচ আপনার, হাসি সবার। পকেট হালকা, মন ভরা।", "The expense is yours, the smiles are everyone's. Light pocket, full heart."], { broke: 2, bhog: 1 }),
      ],
    ),
    scene(
      "food",
      ["ভোগের লাইনে শেষ প্লেট খিচুড়ি পড়ে আছে, ওদিকে ছোট্ট ভাইপোও দাঁড়িয়ে।", "One last plate of khichuri is left in the bhog line, and your little nephew is standing right there."],
      [
        o("🥄", ["আগে ভাইপোকে ডেকে দু’জনে ভাগ করি", "Call the nephew and split it between you"], ["দু’জনে ভাগ করে খেলেন, ভাইপো আপনাকে হিরো ভাবছে। জয় আপনারই।", "You split it and the nephew thinks you're a hero. Victory is yours."], { detective: 2, broke: 1 }),
        o("😤", ["আগে নিজের পাতে নিই, তারপর ভাবব", "Take it for myself first, think later"], ["পেটের জোর সবার আগে। ভাইপো অভিমান করল, তবে লুচি দিতেই ঠিক।", "Appetite first. The nephew sulks, but a luchi fixes everything."], { bhog: 2, selfie: 1 }),
        o("📷", ["দু’জনকে খিচুড়ি-সমেত ছবি তুলে দিই আগে", "First, take a photo of both of us with the khichuri"], ["ছবি দারুণ, খিচুড়ি ঠান্ডা। তাতে কী, স্মৃতি তো গরম!", "Great photo, cold khichuri. Who cares, the memory is warm!"], { selfie: 2, detective: 1 }),
        o("🤲", ["পুরোটা ভাইপোকে তুলে দিই: “নাও, আমার খিদে নেই”", "Hand it all to the nephew: “Take it, I'm not hungry”"], ["আপনার পেটে ইঁদুর ডন দিচ্ছে, তবু মুখে হাসি। মহান ত্যাগ!", "Mice are doing push-ups in your stomach, yet you smile. A noble sacrifice!"], { broke: 2, bhog: 1 }),
      ],
    ),
    scene(
      "night",
      ["রাত বারোটা। ঠাকুরদালানে হঠাৎ আলো চলে গেল।", "Midnight. The lights suddenly go out in the thakurdalan."],
      [
        o("🔦", ["ফোনের টর্চ জ্বেলে সবাইকে এক জায়গায় জড়ো করি", "Switch on the phone torch and gather everyone"], ["মুহূর্তে সব সামলে ফেললেন। অন্ধকারও আপনার প্ল্যানের অংশ মনে হচ্ছে।", "You sort it out in seconds. Even the dark seems part of your plan."], { detective: 2, selfie: 1 }),
        o("🍬", ["প্রসাদের থালা বাঁচাই, বাকিটা পরে দেখা যাবে", "Rescue the prasad plate, the rest can wait"], ["ঘুটঘুটে অন্ধকারে একমাত্র নিরাপদ থালা আপনার হাতে। দারুণ অগ্রাধিকার!", "In pitch darkness the only safe plate is in your hands. Excellent priorities!"], { bhog: 2, broke: 1 }),
        o("🌟", ["ফ্ল্যাশ জ্বেলে “অন্ধকারে পুজো” নামে ছবি তুলি", "Use the flash for a photo titled “Puja in the dark”"], ["ছবিটা সত্যিই দারুণ! আলো নেই বলেই অন্য মাত্রা এসেছে।", "The photo is genuinely stunning. No light, hence a different dimension."], { selfie: 2, detective: 1 }),
        o("🕯️", ["নিজের ফোনের টর্চ আর ব্যাটারি সবাইকে ভাগ করে দিই", "Share my torch and battery with everyone"], ["সবার ফোন জ্বলছে, আপনার চার্জ ৩%। দানবীর যাকে বলে!", "Everyone's phones glow; yours is at 3%. A true philanthropist!"], { broke: 2, detective: 1 }),
      ],
    ),
  ],
  results: [
    r("adda-strategist", "detective", "smug", ["আড্ডার রণকৌশলী", "The Adda Strategist"], ["“চাল আগে থেকেই সাজানো।”", "“The moves are already set.”"], ["পুজোর পরিকল্পনা আপনার কাছে চালের খেলা: কোন গলি, কোন লাইন, কখন কোথায়। সবাই ভরসা করে, তবু মাঝে মাঝে বলে: “একটু কম প্ল্যান করো!”", "To you Puja planning is a game of moves: which lane, which queue, when. The group trusts you, but sometimes begs: “Plan a little less!”"], ["চাল সাজানোর ধার", "Strategy sharpness"], 95),
    r("mighty-eater", "bhog", "happy", ["ভোজনবীর", "The Mighty Eater"], ["“পাতে আরেকটু!”", "“A little more on the plate!”"], ["ভোগ আর লুচিই আপনার শক্তির উৎস। যে কোনো লাইনে আপনি পাহাড়ের মতো অটল, আর রান্নার গন্ধ পেলে সবার আগে হাজির।", "Bhog and luchi are your source of power. In any queue you stand like a mountain, and the scent of cooking brings you first to the spot."], ["পেটের জোর", "Belly strength"], 99),
    r("sharp-shooter", "selfie", "proud", ["অব্যর্থ লক্ষ্যভেদী", "The Sharp-Focus Shooter"], ["“এই একটা শটেই সব হবে।”", "“This one shot will do it all.”"], ["ভিড়ের মধ্যেও আপনার চোখ ঠিক সেরা ফ্রেমটা খুঁজে নেয়। অন্যরা হাঁপিয়ে গেলেও আপনি তখনও একটা ছবির জন্য আলো মাপছেন।", "Even in the crowd your eye finds the best frame. While others tire out, you're still measuring the light for one perfect shot."], ["লক্ষ্যে মনোযোগ", "Focus on target"], 97),
    r("big-hearted-giver", "broke", "wow", ["দরাজ-হৃদয় দাতা", "The Big-Hearted Giver"], ["“নাও না, আমার তো লাগবে না।”", "“Take it, I don't need it.”"], ["আপনার পকেট প্রায়ই খালি, কিন্তু মন সবসময় ভরা। নিজে না খেয়েও অন্যকে খাওয়াতে ভালোবাসেন, তাই আড্ডার সবাই আপনাকে ভালোবাসে।", "Your pocket is often empty but your heart is always full. You love feeding others before yourself, which is why the whole adda adores you."], ["দরাজ মনের মাত্রা", "Generosity level"], 98),
  ],
};

// ------------------------------------------------------------------ book mood
const booksMeta: ActivityMeta = {
  slug: "book-mood",
  kind: "quiz",
  title: { bn: "বইয়ের তাকে তোমার মেজাজ কোনটা?", en: "What's Your Bengali Bookshelf Mood?" },
  tagline: {
    bn: "বৃষ্টির দুপুর, বইমেলার ভিড় আর বন্ধুর সঙ্গে আড্ডা। দেখি কোন তাকে তোমার জায়গা।",
    en: "A rainy afternoon, a crowded book fair and a chat with a friend. Let's find your shelf.",
  },
  kicker: { bn: "তোমার বই-মেজাজ", en: "Your book mood" },
  note: {
    bn: "লেখকদের নাম শুধু পড়ার সুপারিশ। সত্যজিৎ রায় বা হুমায়ূন আহমেদের কপিরাইটযুক্ত লেখা, চরিত্র বা ছবি এখানে নেই। সুকুমার রায়ের লেখা সর্বজনীন, তবু এখানে কিছু নকল করা হয়নি।",
    en: "Author names are reading tips only. No copyrighted text, characters or art by Satyajit Ray or Humayun Ahmed appear here. Sukumar Ray's works are public domain, yet nothing is copied here either.",
  },
  intro: {
    bn: "তিনটে ছোট দৃশ্য। শেষে বলে দেব তোমার মেজাজ কোন ধরনের বইয়ের সঙ্গে মেলে।",
    en: "Three tiny scenes. At the end I'll tell you which kind of book matches your mood.",
  },
  share: { bn: "আমার বই-মেজাজ: “{title}”! তোমারটা কী?", en: "My book mood: “{title}”! What's yours?" },
  description: {
    bn: "বৃষ্টির দুপুর, বইমেলা আর আড্ডা: তিনটে দৃশ্যে জেনে নাও তোমার বই-মেজাজ, সঙ্গে পড়ার সুপারিশ। কার্ড শেয়ার করো।",
    en: "A rainy afternoon, the book fair and an adda: three scenes reveal your Bengali book mood, with reading tips. Share your card.",
  },
  chars: ["sleepy", "hansjaru", "detective"],
};

export const books: QuizData = {
  meta: booksMeta,
  order: ["detective", "sleepy", "hansjaru", "bhog"],
  scenes: [
    scene(
      "rain",
      ["বৃষ্টির দুপুর। হাতে বই, কোলে চায়ের কাপ। কেমন গল্প চাই?", "A rainy afternoon. A book in hand, tea in your lap. What kind of story do you want?"],
      [
        o("🔎", ["রহস্য আর ধাঁধা: শেষ পাতায় সূত্র মেলাব", "Mystery and puzzles: match the clues on the last page"], ["শেষ পাতায় এসে চেঁচিয়ে উঠলেন: “জানতাম!” (আসলে জানতেন না)", "On the last page you shout “I knew it!” (you didn't)"], { detective: 2, hansjaru: 1 }),
        o("🌧️", ["মন-কেমন-করা গল্প, জানলার বাইরে বৃষ্টি", "A wistful story, rain outside the window"], ["চা ঠান্ডা হয়ে গেছে, তবু উঠতে ইচ্ছে করছে না।", "The tea went cold, but you don't feel like moving."], { sleepy: 2, bhog: 1 }),
        o("🤪", ["উদ্ভট ছড়া আর হাসির কাণ্ড, যুক্তি বাদ", "Wacky rhymes and laughs, logic not invited"], ["পাতায় এমন এক প্রাণী, যার নাম উচ্চারণ করতেই হাসি পাচ্ছে।", "The page holds a creature whose name makes you laugh just to say it."], { hansjaru: 2, sleepy: 1 }),
        o("⚔️", ["বিরাট গল্প: যুদ্ধ, মহাকাব্য আর জমকালো ভোজসভা", "A grand tale: wars, epics and lavish feasts"], ["বইটা এত মোটা যে বালিশ হিসেবেও দিব্যি চলে।", "The book is so thick it doubles as a pillow."], { bhog: 2, detective: 1 }),
      ],
    ),
    scene(
      "night",
      ["বইমেলায় পৌঁছে দেখলে ভিড়! কোন স্টলে আগে ঢুকবে?", "You reach the book fair and it's packed! Which stall first?"],
      [
        o("🕵️", ["গোয়েন্দা আর বিজ্ঞান-কল্পকাহিনির স্টল", "The detective and sci-fi stall"], ["ঢুকেই চোখ আটকে গেল এক পুরনো মলাটে। আর বেরোনো নেই।", "You walk in and an old cover catches your eye. No exit now."], { detective: 2, hansjaru: 1 }),
        o("☕", ["কফিহাউসের কোণে ছোট প্রকাশনার স্টল", "A small-press stall near the coffee corner"], ["ছোট দোকানে বড় বড় গল্প। ব্যাগ ভারী, মন হালকা।", "Small shop, big stories. Heavy bag, light heart."], { sleepy: 2, bhog: 1 }),
        o("🎪", ["ছোটদের ছড়া আর আজগুবি গল্পের স্টল", "The children's rhymes and tall-tales stall"], ["পাতায় পাতায় এমন সব প্রাণী, যাদের চিড়িয়াখানায় থাকার কথাই নয়!", "Page after page of creatures that don't belong in any zoo!"], { hansjaru: 2, detective: 1 }),
        o("🍢", ["আগে ঘুগনি-ফুচকার স্টল, বই পরে", "Ghugni-phuchka stall first, books later"], ["ঘুগনির গন্ধে বইয়ের পাতাও সুগন্ধি হয়ে গেল।", "The ghugni aroma has perfumed even the books."], { bhog: 2, sleepy: 1 }),
      ],
    ),
    scene(
      "battery",
      ["সন্ধে হল, বই কেনা শেষ। এবার বন্ধুকে কী বলবে?", "Evening falls, books bought. What do you tell your friend?"],
      [
        o("📚", ["“বইটার শেষটা কিন্তু বলব না!”", "“I won't tell you how the book ends!”"], ["বন্ধু অস্থির হয়ে কিনেই ফেলল। আপনার মুখে রহস্যময় হাসি।", "Your friend, desperate, buys it. You wear a mysterious smile."], { detective: 2, bhog: 1 }),
        o("🌙", ["“চল, এক কাপ চা নিয়ে গল্প করি, বই না হয় পরে”", "“Let's chat over a cup of tea, books can wait”"], ["বইয়ের কথা গড়িয়ে জীবনের কথায় পৌঁছল। আড্ডার সেরা সন্ধে।", "Book talk drifted into life talk. The best kind of adda."], { sleepy: 2, hansjaru: 1 }),
        o("🎭", ["সঙ্গে সঙ্গে একটা উদ্ভট ছড়া বানিয়ে শোনাই", "Make up a nonsense rhyme on the spot"], ["বন্ধু হাসতে হাসতে জিজ্ঞেস করল “কোন বইয়ের?” আপনি বললেন “এখনও লেখা হয়নি!”", "Your friend laughs, “Which book is that from?” You: “Not written yet!”"], { hansjaru: 2, sleepy: 1 }),
        o("🍽️", ["“এই বইয়ের রান্নার বর্ণনাগুলো দারুণ, চল রেঁধে দেখি!”", "“The cooking scenes in this book are great, let's try them!”"], ["পাতা উল্টে উল্টে রান্না চলছে, রান্নাঘরে হুলুস্থুল।", "Cooking page by page, with an uproar in the kitchen."], { bhog: 2, detective: 1 }),
      ],
    ),
  ],
  results: [
    r("puzzle-hunter", "detective", "smug", ["ধাঁধা-শিকারি", "The Puzzle Hunter"], ["“ক্লু আছে, তাই আমি আছি।”", "“Where there's a clue, there I am.”"], ["আপনার মেজাজ গোয়েন্দা-গল্পের সঙ্গে মেলে। সত্যজিৎ রায়ের রহস্য-গল্প পড়ে দেখতে পারেন, মিলবে লাইব্রেরি বা বইয়ের দোকানে।", "Your mood matches detective stories. Try the mystery tales of Satyajit Ray, found in libraries and bookshops."], ["ক্লু খোঁজার নেশা", "Clue addiction"], 96),
    r("rainy-dreamer", "sleepy", "sleepy", ["বৃষ্টি-দিনের স্বপ্নবিলাসী", "The Rainy-Day Dreamer"], ["“বৃষ্টি আর চা, আর কী চাই?”", "“Rain and tea, what more do I need?”"], ["জানলার ধারে বসে মনের কথা শোনা আপনার শখ। হুমায়ূন আহমেদের উপন্যাস আপনার ভালো লাগতে পারে, মিলবে বইয়ের দোকানে।", "Sitting by the window listening to your thoughts is your hobby. You may enjoy Humayun Ahmed's novels, found in bookshops."], ["জানলার ধারে থাকার সময়", "Window-seat hours"], 94),
    r("nonsense-fan", "hansjaru", "wow", ["আবোল-তাবোলের সমঝদার", "The Nonsense Connoisseur"], ["“যুক্তি? ওটা তো ছুটিতে গেছে!”", "“Logic? It's on holiday!”"], ["যুক্তিছাড়া হাসির দুনিয়ায় আপনি স্বচ্ছন্দ। সুকুমার রায়ের ছড়া-গল্পের সঙ্গে আপনার মেজাজ মেলে, সেসব এখন সর্বজনীন, সহজেই পাবেন।", "You feel at home in a world of logic-free laughter. Your mood fits Sukumar Ray's rhymes and stories; they are public domain, so easy to find."], ["যুক্তি-ছুটির মাত্রা", "Logic-holiday level"], 97),
    r("epic-feaster", "bhog", "happy", ["মহাকাব্যের ভোজরসিক", "The Epic Feast Lover"], ["“গল্প যত বড়, ভোজ তত জমকালো।”", "“The bigger the tale, the grander the feast.”"], ["মহাভারত আর রামায়ণের মতো বড় গল্প আপনাকে টানে। এসব মহাকাব্য আর লোককথা সর্বজনীন, নিশ্চিন্তে পড়ুন, পাতে ভোজ থাকলে তো কথাই নেই।", "Big tales like the Mahabharata and Ramayana pull you in. These epics and folk tales are public heritage, so read freely; a feast on the page is a bonus."], ["ভোজসভার প্রতি টান", "Pull of the feast"], 93),
  ],
};

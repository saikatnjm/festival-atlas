// Blog: Bengali Hindu wedding rituals. Facts from Wikipedia "Bengali Hindu wedding", fetched 2 Nov 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI = { title: "Wikipedia, Bengali Hindu wedding", url: "https://en.wikipedia.org/wiki/Bengali_Hindu_wedding" };

export const BENGALI_HINDU_WEDDING: Article = {
  slug: "bengali-hindu-wedding-rituals",
  published: "2026-11-02",
  updated: "2026-11-02",
  title: l("বাঙালি হিন্দু বিয়ের নিয়ম: ক্রমানুসারে", "Bengali Hindu Wedding Rituals in Order"),
  description: l(
    "আইবুড়ো ভাত, গায়ে হলুদ, মালাবদল, সাত পাক, সিঁদুর দান থেকে বউভাত পর্যন্ত বাঙালি বিয়ের রীতি একে একে।",
    "Bengali Hindu wedding rituals in order: Aiburobhaat, Gaye Holud, Mala Badal, Saat Paak, Sindoor Daan, Bou Boron and Bou Bhaat.",
  ),
  h1: l("বাঙালি হিন্দু বিয়ের রীতি, এক এক করে", "Bengali Hindu wedding rituals, one by one"),
  lead: l(
    "বিয়ের আগে, বিয়ের দিনে আর বিয়ের পরে কোন রীতির পর কোনটি আসে, সহজ করে সাজিয়ে দিলাম।",
    "Which ritual comes after which: before, during and after the wedding, laid out simply.",
  ),
  icon: "💍",
  body: [
    { kind: "h2", text: l("বিয়ের আগে: আইবুড়ো ভাত", "Before the wedding: Aiburobhaat") },
    {
      kind: "p",
      text: l(
        "আইবুড়ো ভাতে পাত্র বা পাত্রী বিয়ের আগে শেষবার মা-বাবা আর আত্মীয়দের তৈরি ভোজে ভাত খায়। পাতে থাকে দই মাছ, মাছের ঝোলের মতো মাছের পদ। মাছের মুড়ো পাত্র বা পাত্রীকে দেওয়া হয়; সে এক কামড় খেয়ে ভাইবোনকে দেয়, যাতে সেও শিগগির সঙ্গী পায়।",
        "At Aiburobhaat the bride or groom eats a last rice meal before marriage, at a feast prepared by parents and relatives. Fish dishes such as doi maach and maacher jhol are served. The fish head goes to the bride or groom, who takes a small bite and passes it to a sibling, in the hope that the sibling will soon find a partner.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("গায়ে হলুদ", "Gaye Holud") },
    {
      kind: "p",
      text: l(
        "গায়ে হলুদ মানে শরীরে হলুদ মাখানো। বিয়ের সকালে বরপক্ষ কনের বাড়ি যায়। দুই পরিবারই হলুদ বাটা মাখায়, যা শুদ্ধতার প্রতীক।",
        "Gaye Holud means applying turmeric to the body. The groom's family visits the bride's house on the morning of the wedding. Both families apply turmeric paste, which symbolises purification.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("বিয়ের দিন: মালাবদল, সাত পাক, সিঁদুর দান", "Wedding day: Mala Badal, Saat Paak, Sindoor Daan") },
    {
      kind: "list",
      items: [
        l("মালাবদল: বর-কনে ফুলের মালা বদল করে। প্রথাগতভাবে এই প্রথম তারা পরস্পরকে দেখে; এটি পরস্পরকে মেনে নেওয়ার প্রতীক।", "Mala Badal: the couple exchange flower garlands. Traditionally this is the first time they see each other, symbolising acceptance."),
        l("সাত পাক: নিচু কাঠের পিঁড়িতে বসা কনেকে ভাইয়েরা তুলে বরের চারপাশে সাতবার ঘোরায়। এরপর দুজন পবিত্র আগুনের চারপাশে সাত পাক ঘোরে, প্রতিটি পাক এক একটি প্রতিশ্রুতি।", "Saat Paak: the bride, seated on a low wooden stool, is lifted by her brothers and carried seven times around the groom. The couple then takes seven rounds around the sacred fire, each a promise."),
        l("খই পোড়ানো: সপ্তপদীর পর কনের ভাই কনের হাতে খই দেয়। দুজনে সেই খই আগুনে অর্পণ করে, সমৃদ্ধি আর যৌথ অঙ্গীকারের প্রতীক হিসেবে।", "Khoi Porano: after Saptapadi the bride's brother places puffed rice in her hands. The couple offers it into the sacred fire, for prosperity and shared commitment."),
        l("সিঁদুর দান: বর কনের সিঁথিতে সিঁদুর দেয় আর মাথায় নতুন শাড়ি টেনে দেয়। এতে বিয়ের অনুষ্ঠান শেষ হয়।", "Sindoor Daan: the groom applies sindoor to the bride's hair parting and drapes a new saree over her head. This concludes the wedding."),
      ],
      source: WIKI,
    },
    { kind: "h2", text: l("বিয়ের পরে: বউবরণ, ভাত-কাপড়, বউভাত", "After the wedding: Bou Boron, Bhat Kapor, Bou Bhaat") },
    {
      kind: "p",
      text: l(
        "বরের বাড়িতে পৌঁছলে দম্পতিকে বরণ করা হয়। কলসি থেকে জল ঢালা হয়, মাটির পাত্রে দুধ ফোটানো হয়। বর জাঁতি দিয়ে ফোটা দুধ নামায়, একে দুধ-উথলানো বলে। বরণের সময় কনে কলসি দিয়ে জ্যান্ত মাছ ধরে। সাদা কাপড়ে আলতায় কনের পায়ের ছাপ লক্ষ্মীর আগমনের প্রতীক।",
        "On arrival at the groom's house the couple is welcomed. Water is poured from a brass pitcher (kolshi) and milk is boiled in an earthen pot. The groom turns down the boiling milk with a betel nut cracker (janti), the Dudh-uthlano rite. During Baran the bride catches a live fish with the kolshi. Her alta footprints on white cloth symbolise the arrival of Goddess Lakshmi.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "বিয়ের পরদিন ভাত-কাপড়ে বর কনেকে শাড়ি, সিঁদুর, অন্যান্য প্রয়োজনীয় জিনিস আর এক থালা বাঙালি খাবার দেয়। সন্ধ্যায় বরের পরিবার বউভাতের অনুষ্ঠান করে, আত্মীয় ও প্রতিবেশীদের সঙ্গে কনের পরিচয় করাতে। কনের বাড়ির লোক উপহার (ফুলসজ্জার তত্ত্ব) নিয়ে শোভাযাত্রা করে আসে। অতিথিরা চলে গেলে দম্পতি বরের পরিবারের সঙ্গে খায়।",
        "The day after the wedding, at Bhat Kapor, the groom gives the bride a saree, sindoor, other essentials and a plate of Bengali food. In the evening the groom's family hosts the Bou Bhaat reception to introduce the bride to relatives and neighbours. The bride's family arrives in a procession (Kone Jatri) with gifts called Phul Sajjar Tatwa. After the guests leave, the couple eats with the groom's family.",
      ),
      source: WIKI,
    },
    {
      kind: "tip",
      text: l(
        "প্রতিটি পরিবারের রীতি একটু আলাদা হতে পারে, তাই পুরোহিত আর বাড়ির বড়দের সঙ্গে আগে কথা বলে নাও। বিয়ের শুভ দিন আমাদের বিবাহ ২০২৭ পাতায় দেখো।",
        "Family customs can differ a little, so talk to the priest and elders first. See auspicious wedding dates on our Vivah 2027 page.",
      ),
    },
  ],
  faq: [
    {
      q: l("বাঙালি বিয়ের নিয়ম কী কী", "Bengali wedding rituals list"),
      a: l("আইবুড়ো ভাত, গায়ে হলুদ, মালাবদল, সাত পাক, খই পোড়ানো, সিঁদুর দান, বউবরণ, ভাত-কাপড় আর বউভাত।", "Aiburobhaat, Gaye Holud, Mala Badal, Saat Paak, Khoi Porano, Sindoor Daan, Bou Boron, Bhat Kapor and Bou Bhaat."),
    },
    {
      q: l("আইবুড়ো ভাত কী", "What is Aiburobhaat"),
      a: l("বিয়ের আগে পাত্র বা পাত্রীর শেষ ভাত খাওয়ার ভোজ, যেখানে মাছের পদ থাকে।", "The feast of the last rice meal before marriage, with fish dishes."),
    },
    {
      q: l("মালাবদল কী", "What is Mala Badal"),
      a: l("বর-কনের ফুলের মালা বদল, পরস্পরকে মেনে নেওয়ার প্রতীক।", "The exchange of flower garlands, symbolising acceptance of each other."),
    },
    {
      q: l("বউভাত কখন হয়", "When is Bou Bhaat held"),
      a: l("বিয়ের পরদিন সন্ধ্যায়, বরের পরিবারের আয়োজনে।", "On the evening after the wedding, hosted by the groom's family."),
    },
  ],
  related: [
    { href: "/vivah-dates-2027", label: l("বিবাহের শুভ দিন ২০২৭", "Vivah dates 2027") },
    { href: "/blog/gaye-holud-turmeric-ceremony", label: l("গায়ে হলুদ", "Gaye Holud") },
    { href: "/blog/annaprashan-mukhe-bhaat", label: l("অন্নপ্রাশন", "Annaprashan") },
    { href: "/griha-pravesh-dates-2027", label: l("গৃহপ্রবেশের দিন ২০২৭", "Griha Pravesh dates 2027") },
  ],
  sources: [WIKI],
};

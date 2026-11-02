// Blog: Gaye Holud. Facts from Wikipedia "Gaye holud" and "Bengali Hindu wedding", fetched 2 Nov 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI = { title: "Wikipedia, Gaye holud", url: "https://en.wikipedia.org/wiki/Gaye_holud" };
const WIKI_W = { title: "Wikipedia, Bengali Hindu wedding", url: "https://en.wikipedia.org/wiki/Bengali_Hindu_wedding" };

export const GAYE_HOLUD: Article = {
  slug: "gaye-holud-turmeric-ceremony",
  published: "2026-11-02",
  updated: "2026-11-02",
  title: l("গায়ে হলুদ: বাংলার হলুদ মাখার অনুষ্ঠান", "Gaye Holud: the Bengali Turmeric Ceremony"),
  description: l(
    "গায়ে হলুদ কী, কখন হয়, পশ্চিমবঙ্গ আর বাংলাদেশে কীভাবে পালিত হয়, হলুদ, মিষ্টি আর ইলিশের উপহার।",
    "What Gaye Holud is, when it happens, and how it is held in West Bengal and Bangladesh, with turmeric, sweets and ilish gifts.",
  ),
  h1: l("গায়ে হলুদ: বিয়ের আগের রঙিন অনুষ্ঠান", "Gaye Holud: the colourful pre-wedding ceremony"),
  lead: l(
    "বাঙালি বিয়ের আগে বর-কনের গায়ে হলুদ মাখানো হয়। হিন্দু আর মুসলমান, দুই সমাজেই এই রীতি আছে।",
    "Before a Bengali wedding, turmeric is applied to the bride and groom. Both Hindu and Muslim Bengalis observe it.",
  ),
  icon: "🌼",
  body: [
    { kind: "h2", text: l("গায়ে হলুদ কী", "What is Gaye Holud") },
    {
      kind: "p",
      text: l(
        "গায়ে হলুদ (গাত্রহরিদ্রা নামেও পরিচিত) মানে শরীরে হলুদ। এটি বাঙালিদের বিয়ের আগের অনুষ্ঠান, যেখানে বর-কনের গায়ে হলুদ-ভিত্তিক বাটা মাখানো হয়। হিন্দু ও মুসলমান বাঙালি দুই সমাজেই এটি পালিত হয়।",
        "Gaye Holud, also called gatro-horidra, means turmeric on the body. It is a pre-wedding ceremony among Bengalis in which a turmeric-based paste is applied to the bride and groom. Both Bengali Hindus and Bengali Muslims observe it.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "এই অনুষ্ঠানে বিয়ে সম্পন্ন হয় না, তাই এর পরও তারা বিবাহিত বলে গণ্য হয় না। এটি বিয়ের চেয়ে কম আনুষ্ঠানিক, আর অতিথিরা সাদামাটা পোশাকে আসেন। হলুদ সাধারণত বরের বাড়ি থেকে আসে।",
        "The couple is not married afterwards, since no legal marriage takes place. It is less formal than the wedding, and guests dress more simply. The turmeric typically comes from the groom's home.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("বাংলাদেশে", "In Bangladesh") },
    {
      kind: "p",
      text: l(
        "কনে মঞ্চে বসে, অতিথিরা তার মুখে ও শরীরে হলুদ মাখান। সব অতিথি আর সঙ্গীরা তাকে একটি একটি করে মিষ্টি খাওয়ান। কোনো কোনো পরিবার কনের হাতে-পায়ে মেহেদি দেয়। দুই পরিবারের মধ্যে উপহার আদানপ্রদান হয়, যাতে প্রায়ই থাকে মাছ (বিশেষ করে ইলিশ), মিষ্টি আর পোশাক। অনুষ্ঠানটি ধর্মনিরপেক্ষ আর প্রাণবন্ত, গান, নাচ আর সাজসজ্জায় ভরা।",
        "The bride sits on a dais while guests apply the paste to her face and body. All guests and attendants feed her sweets, one piece at a time. Some families use henna on her hands and feet. Families exchange gifts that often include fish (especially ilish), sweets and clothing. The event is described as secular and high-spirited, with music, dance and decorations.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("পশ্চিমবঙ্গে", "In West Bengal") },
    {
      kind: "p",
      text: l(
        "হিন্দুদের ক্ষেত্রে গায়ে হলুদ কখনও বড় হিন্দু রীতির অংশ, আর আধ্যাত্মিক প্রস্তুতির সঙ্গে যুক্ত। এই অনুষ্ঠানে ছোঁয়ানো হলুদকে অত্যন্ত শুভ মনে করা হয়।",
        "For Hindus the ceremony is sometimes part of broader Hindu rituals and is linked to spiritual preparation. The turmeric touched in the ritual is considered highly auspicious.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "হিন্দু বাঙালি বিয়ের বর্ণনায় বলা আছে, বিয়ের সকালে বরপক্ষ কনের বাড়ি যায় আর দুই পরিবারই হলুদ বাটা মাখায়, যা শুদ্ধতার প্রতীক।",
        "In the account of the Bengali Hindu wedding, the groom's family visits the bride's house on the morning of the wedding and both families apply turmeric paste, which symbolises purification.",
      ),
      source: WIKI_W,
    },
    {
      kind: "tip",
      text: l(
        "হলুদ মাখার আগে ত্বকে অ্যালার্জি আছে কি না ভেবে নাও, আর পোশাক এমন রাখো যাতে দাগ লাগলে চিন্তা নেই। বিয়ের দিন দেখতে আমাদের বিবাহ ২০২৭ পাতা খোলো।",
        "Think about skin allergies before the paste goes on, and wear clothes you do not mind staining. Check wedding dates on our Vivah 2027 page.",
      ),
    },
  ],
  faq: [
    {
      q: l("গায়ে হলুদ কী", "What is Gaye Holud"),
      a: l("বিয়ের আগে বর-কনের গায়ে হলুদ বাটা মাখানোর অনুষ্ঠান।", "A pre-wedding ceremony where turmeric paste is applied to the bride and groom."),
    },
    {
      q: l("গায়ে হলুদে কী কী উপহার দেওয়া হয়", "Gaye Holud gifts Bangladesh"),
      a: l("বাংলাদেশে প্রায়ই মাছ (বিশেষ করে ইলিশ), মিষ্টি আর পোশাক।", "In Bangladesh, often fish (especially ilish), sweets and clothing."),
    },
    {
      q: l("গায়ে হলুদের হলুদ কোথা থেকে আসে", "Where does the Gaye Holud turmeric come from"),
      a: l("সাধারণত বরের বাড়ি থেকে।", "Typically from the groom's home."),
    },
    {
      q: l("গায়ে হলুদ কি হিন্দুদের একার অনুষ্ঠান", "Is Gaye Holud only Hindu"),
      a: l("না, হিন্দু আর মুসলমান বাঙালি, দুই সমাজেই এটি পালিত হয়।", "No, both Bengali Hindus and Bengali Muslims observe it."),
    },
  ],
  related: [
    { href: "/vivah-dates-2027", label: l("বিবাহের শুভ দিন ২০২৭", "Vivah dates 2027") },
    { href: "/blog/bengali-hindu-wedding-rituals", label: l("বাঙালি বিয়ের রীতি", "Bengali wedding rituals") },
    { href: "/blog/annaprashan-mukhe-bhaat", label: l("অন্নপ্রাশন", "Annaprashan") },
  ],
  sources: [WIKI, WIKI_W],
};

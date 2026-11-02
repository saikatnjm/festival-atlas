// Blog: Charak Puja and Gajan. Facts from Wikipedia "Charak Puja", fetched 2 Nov 2026 (AGENTS.md rule 1).

import type { Article } from "./types";
import type { L } from "@/lib/i18n";

const l = (bn: string, en: string): L => ({ bn, en });

const WIKI = { title: "Wikipedia, Charak Puja", url: "https://en.wikipedia.org/wiki/Charak_Puja" };

export const CHARAK_GAJAN: Article = {
  slug: "charak-puja-gajan-festival",
  published: "2026-11-02",
  updated: "2026-11-02",
  title: l("চড়ক পুজো আর গাজন: শিবের লোকউৎসব", "Charak Puja and Gajan: Shiva's Folk Festival"),
  description: l(
    "গাজন কী, চড়ক পুজো কোন দেবতার, কী কী কৃচ্ছ্রসাধন হয়, পশ্চিমবঙ্গ আর বাংলাদেশের কোথায় হয়।",
    "What Gajan is, whose festival Charak Puja is, the austerities performed, and where it is held in West Bengal and Bangladesh.",
  ),
  h1: l("চড়ক পুজো আর গাজন", "Charak Puja and Gajan"),
  lead: l(
    "বাঙালি হিন্দুদের এক প্রাচীন লোকউৎসব, যার শেষ পর্বই চড়ক। সংক্ষেপে জেনে নাও।",
    "A Bengali Hindu folk festival whose last act is Charak. A short guide.",
  ),
  icon: "🔱",
  body: [
    { kind: "h2", text: l("গাজন কী", "What is Gajan") },
    {
      kind: "p",
      text: l(
        "চড়ক পুজো বাঙালি হিন্দুদের লোকউৎসব গাজনের অংশ, যা শিব বা ধর্মঠাকুরের সম্মানে পালিত হয়। এর অন্য নামও আছে: পাঁচামারা মেলা, চড়ক, নীল পুজো, হাজরা পুজো।",
        "Charak Puja is part of Gajan, the Bengali Hindu folk festival held in honour of Shiva or Dharmathakur. It also goes by other names, including Pachamara Mela, Chadak, Nil Puja and Hajrha Puja.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("সংক্রান্তির মধ্যরাত", "Sankranti midnight") },
    {
      kind: "p",
      text: l(
        "সংক্রান্তির মধ্যরাতে ভক্তরা জড়ো হয়ে সাফল্যের জন্য শিব আর মা দুর্গার পুজো করেন।",
        "At midnight of Sankranti, worshippers gather to worship Shiva and Ma Durga for success.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("কৃচ্ছ্রসাধন আর চড়ক", "Austerities and Charak") },
    {
      kind: "p",
      text: l(
        "গাজনে জ্বলন্ত কয়লার ওপর হাঁটা আর শরীরে ধাতব শলাকা বেঁধানোর মতো কৃচ্ছ্রসাধন হয়। চড়ক হল বঁড়শি দিয়ে ঝোলার প্রথা, যা সাধারণত উৎসবের শেষ কৃচ্ছ্রসাধন।",
        "Gajan includes austerities such as walking on hot coals and piercing the body with metal rods. Charak is the practice of hook-swinging, generally the last penance of the festival.",
      ),
      source: WIKI,
    },
    {
      kind: "p",
      text: l(
        "প্রস্তুতি সাধারণত এক মাস আগে শুরু হয়; গ্রামে গ্রামে ঘুরে ধান, তেল, চিনি, নুন, মধু আর টাকা সংগ্রহ করা হয়। পুজোর পর প্রসাদ বিতরণ হয়।",
        "Preparation usually begins a month ahead, collecting paddy, oil, sugar, salt, honey and money from village to village. Prasad is distributed after the puja.",
      ),
      source: WIKI,
    },
    { kind: "h2", text: l("কোথায় হয়", "Where it is held") },
    {
      kind: "p",
      text: l(
        "পশ্চিমবঙ্গ, অসমের কিছু অংশ আর বাংলাদেশে। বাংলাদেশে মৌলভীবাজার, ঠাকুরগাঁও জেলা আর পটুয়াখালীর গলাচিপা উপজেলায় এটি প্রায়ই হয়।",
        "In West Bengal, parts of Assam and Bangladesh. In Bangladesh it is often held in Moulvibazar, Thakurgaon district and Galachipa Upazila of Patuakhali district.",
      ),
      source: WIKI,
    },
    {
      kind: "tip",
      text: l(
        "মেলা দেখতে গেলে ভিড়ে বাচ্চাদের হাত ছেড়ো না, আর কৃচ্ছ্রসাধনের জায়গা থেকে নিরাপদ দূরত্বে দাঁড়িও।",
        "At the fair, keep children close in the crowd and stand at a safe distance from the austerity areas.",
      ),
    },
  ],
  faq: [
    {
      q: l("চড়ক পুজো কোন দেবতার?", "Whose festival is Charak Puja?"),
      a: l("গাজনের অংশ হিসেবে শিব বা ধর্মঠাকুরের সম্মানে পালিত হয়।", "As part of Gajan, it honours Shiva or Dharmathakur."),
    },
    {
      q: l("গাজন আর চড়কের তফাত কী?", "What is the difference between Gajan and Charak?"),
      a: l("গাজন পুরো উৎসব; চড়ক তার বঁড়শিতে ঝোলার প্রথা, সাধারণত শেষ কৃচ্ছ্রসাধন।", "Gajan is the whole festival; Charak is its hook-swinging, generally the last penance."),
    },
    {
      q: l("চড়ক পুজো কবে?", "When is Charak Puja?"),
      a: l("সংক্রান্তির মধ্যরাতে পুজো হয়। সংক্রান্তির তারিখ আমাদের সংক্রান্তি ২০২৭ পাতায় আছে।", "The puja is at Sankranti midnight. Sankranti dates are on our Sankranti 2027 page."),
    },
    {
      q: l("বাংলাদেশে কোথায় চড়ক হয়?", "Where is Charak held in Bangladesh?"),
      a: l("মৌলভীবাজার, ঠাকুরগাঁও আর পটুয়াখালীর গলাচিপায় প্রায়ই হয়।", "Often in Moulvibazar, Thakurgaon and Galachipa in Patuakhali."),
    },
  ],
  related: [
    { href: "/sankranti-2027", label: l("সংক্রান্তি ২০২৭", "Sankranti 2027") },
    { href: "/poila-boishakh-2027", label: l("পয়লা বৈশাখ ২০২৭", "Poila Boishakh 2027") },
    { href: "/blog/poila-boishakh-traditions", label: l("পয়লা বৈশাখের রীতি", "Poila Boishakh traditions") },
    { href: "/shivratri-2027", label: l("শিবরাত্রি ২০২৭", "Shivratri 2027") },
  ],
  sources: [WIKI],
};

import { ogImage } from "@/lib/og";

export const alt = "Pujo Guide games: Puja quizzes, bingo, squad cards and personality tests in Bangla and English";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "PUJA GAMES · BANGLA & ENGLISH",
    title: "Who are you at Puja?",
    subtitle: "Quizzes, bingo, squad role cards and more. 30 seconds each, with a card to share.",
    art: [
      { id: "bhog", mood: "happy" },
      { id: "selfie", mood: "wow" },
      { id: "gopal", mood: "smug" },
    ],
  });
}

import { ogImage } from "@/lib/og";

export const alt = "Puja passport: tick the pandals you visited and share your card";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "PANDAL PASSPORT",
    title: "How many pandals did you see?",
    subtitle: "Tick every pandal you visit, join the leaderboard and share your passport card.",
    art: [
      { id: "detective", mood: "proud" },
      { id: "bagha", mood: "happy" },
    ],
  });
}

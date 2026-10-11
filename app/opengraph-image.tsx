import { ogImage } from "@/lib/og";

export const alt = "Festival Atlas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Default share image for every page that does not have its own.
export default function Image() {
  return ogImage({
    kicker: "PANDAL MAP · PUJA GAMES",
    title: "Festival Atlas",
    subtitle: "A sourced world map of Durga Puja pandals, plus a cartoon Puja universe to play and share.",
    art: [
      { id: "detective", mood: "smug" },
      { id: "bhog", mood: "happy" },
      { id: "selfie", mood: "proud" },
    ],
  });
}

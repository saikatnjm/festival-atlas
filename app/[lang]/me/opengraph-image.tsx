import { ogImage } from "@/lib/og";

export const alt = "My Puja: your pandals, days out, postcards and games on Pujo Guide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "MY PUJA 2026",
    title: "Your Puja, day by day",
    subtitle: "Pandals, days out, postcards and games, kept on your own phone.",
    art: [
      { id: "sleepy", mood: "happy" },
      { id: "bhog", mood: "proud" },
    ],
  });
}

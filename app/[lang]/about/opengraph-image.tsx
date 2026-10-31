import { ogImage } from "@/lib/og";

export const alt = "About Pujo Guide: how the bilingual Durga Puja guide works, its sources and privacy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "ABOUT PUJO GUIDE",
    title: "Sourced, bilingual, free",
    subtitle: "How the pandal directory, live crowd reports and games work, and what stays on your phone.",
    art: [
      { id: "detective", mood: "smug" },
      { id: "bagha", mood: "proud" },
    ],
  });
}

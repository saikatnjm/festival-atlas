import { ogImage } from "@/lib/og";

export const alt = "Kolkata Durga Puja 2026: pandals, themes and a map on Pujo Guide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "KOLKATA · DURGA PUJA 2026",
    title: "Kolkata pandals 2026",
    subtitle: "Reported themes, a sourced directory, Metro timings and a route planner.",
    art: [
      { id: "detective", mood: "smug" },
      { id: "bagha", mood: "happy" },
    ],
  });
}

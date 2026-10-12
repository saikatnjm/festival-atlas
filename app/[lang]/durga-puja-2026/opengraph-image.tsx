import { ogImage } from "@/lib/og";

export const alt = "Durga Puja 2026 dates: Kolkata 17 to 21 October, Bangladesh 16 to 21 October, Mahalaya 10 October";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "DURGA PUJA 2026 · DATES",
    title: "17–21 October 2026",
    subtitle: "Kolkata: Shashthi 17 to Dashami 21 Oct. Bangladesh: 16 to 21 Oct. Mahalaya 10 Oct.",
    art: [
      { id: "bagha", mood: "happy" },
      { id: "sleepy", mood: "wow" },
    ],
  });
}

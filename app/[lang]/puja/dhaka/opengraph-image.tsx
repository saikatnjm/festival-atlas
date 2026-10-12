import { ogImage } from "@/lib/og";

export const alt = "Dhaka and Bangladesh Durga Puja 2026: mandaps, Dhakeshwari and holidays on Festival Atlas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "DHAKA & BANGLADESH · DURGA PUJA 2026",
    title: "Dhaka mandaps 2026",
    subtitle: "Dhakeshwari, Shankhari Bazar, Ramna, Banani and beyond, with dates and holidays.",
    art: [
      { id: "bagha", mood: "proud" },
      { id: "bhog", mood: "happy" },
    ],
  });
}

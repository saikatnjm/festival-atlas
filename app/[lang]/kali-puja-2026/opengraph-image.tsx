import { ogImage } from "@/lib/og";

export const alt = "Kali Puja 2026: Sunday 8 November. Nishita time Kolkata 10:55 to 11:46 pm, Dhaka 11:16 pm to 12:08 am";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "KALI PUJA 2026 · DATE & TIME",
    title: "Sunday 8 November 2026",
    subtitle: "Nishita kaal: Kolkata 10:55–11:46 pm, Dhaka 11:16 pm–12:08 am. Bhai Phota 11 Nov.",
    art: [
      { id: "bagha", mood: "wow" },
      { id: "sleepy", mood: "happy" },
    ],
  });
}

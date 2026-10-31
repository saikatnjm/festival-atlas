import { ogImage } from "@/lib/og";

export const alt = "Rash Purnima 2026: Tuesday 24 November. Nabadwip and Santipur Raas Utsav 24 to 27 November";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "RASH PURNIMA 2026 · NABADWIP · SHANTIPUR",
    title: "Tuesday 24 November 2026",
    subtitle: "Nabadwip and Santipur Raas Utsav 24–27 Nov. Shakta Rash, Arong, Cooch Behar Rash Mela.",
    art: [{ id: "gopal", mood: "wow" }, { id: "sleepy", mood: "happy" }],
  });
}

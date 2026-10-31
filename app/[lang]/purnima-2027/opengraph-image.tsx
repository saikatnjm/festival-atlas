import { ogImage } from "@/lib/og";

export const alt = "Purnima 2027: every full moon date with tithi times for Kolkata and Dhaka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "PURNIMA 2027 · ALL DATES",
    title: "12 full moons in 2027",
    subtitle: "Kolkata and Dhaka tithi times, vrat days, Dol (22 Mar) and Kojagori Lakshmi Puja (14 Oct).",
    art: [
      { id: "sleepy", mood: "wow" },
      { id: "hansjaru", mood: "happy" },
    ],
  });
}

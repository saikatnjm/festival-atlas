import { ogImage } from "@/lib/og";

export const alt = "Amavasya 2027: every new moon date with tithi times for Kolkata and Dhaka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "AMAVASYA 2027 · ALL DATES",
    title: "Every new moon in 2027",
    subtitle: "Kolkata and Dhaka tithi times, Darsha days, Mahalaya (29 Sep) and Kali Puja (28 Oct).",
    art: [
      { id: "sleepy", mood: "wow" },
      { id: "detective", mood: "smug" },
    ],
  });
}

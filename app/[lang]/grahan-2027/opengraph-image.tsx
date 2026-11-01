import { ogImage } from "@/lib/og";

export const alt = "Eclipses 2027: every solar and lunar eclipse, and what Kolkata and Dhaka will see";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "GRAHAN 2027 · SOLAR & LUNAR ECLIPSES",
    title: "Five eclipses in 2027",
    subtitle: "2 August total solar eclipse: only a small partial eclipse from Kolkata and Dhaka.",
    art: [{ id: "detective", mood: "happy" }, { id: "sleepy", mood: "smug" }],
  });
}

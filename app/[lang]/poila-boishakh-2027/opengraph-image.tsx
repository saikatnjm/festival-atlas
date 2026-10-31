import { ogImage } from "@/lib/og";

export const alt = "Poila Boishakh 1434: Thursday 15 April 2027 in West Bengal, Wednesday 14 April in Bangladesh";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "POILA BOISHAKH 1434 · BENGALI NEW YEAR",
    title: "15 April 2027 (WB) · 14 April (BD)",
    subtitle: "Bengali year 1434 begins on different days in the two Bengals. Why, and the customs.",
    art: [{ id: "gopal", mood: "happy" }, { id: "hansjaru", mood: "wow" }],
  });
}

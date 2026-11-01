import { ogImage } from "@/lib/og";

export const alt = "Griha Pravesh dates 2027 for Kolkata: 45 shubh days with nakshatra and tithi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "GRIHA PRAVESH 2027 · HOUSEWARMING",
    title: "45 shubh days in 2027",
    subtitle: "Kolkata list from Drik Panchang, 1 January to 22 December. None from July to October.",
    art: [{ id: "bhog", mood: "happy" }, { id: "detective", mood: "smug" }],
  });
}

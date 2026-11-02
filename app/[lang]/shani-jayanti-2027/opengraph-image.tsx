import { ogImage } from "@/lib/og";

export const alt = "Shani Jayanti 2027: Friday 4 June; Jyeshtha Amavasya tithi (Kolkata)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "SHANI JAYANTI 2027",
    title: "Friday 4 June 2027",
    subtitle: "Amavasya 4 Jun 4:05 am to 5 Jun 1:09 am (Kolkata). Same day as Vat Savitri.",
    art: [{ id: "detective", mood: "happy" }, { id: "sleepy", mood: "smug" }],
  });
}

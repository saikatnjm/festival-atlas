import { ogImage } from "@/lib/og";

export const alt = "Sankranti 2027: all 12 Sankrantis with the exact moment for Kolkata and Dhaka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "SANKRANTI 2027 · ALL 12",
    title: "Every Sankranti of 2027",
    subtitle: "The Sun's entry into each sign, Kolkata and Dhaka: the last day of each Bengali month.",
    art: [{ id: "detective", mood: "happy" }, { id: "bhog", mood: "smug" }],
  });
}

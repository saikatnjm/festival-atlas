import { ogImage } from "@/lib/og";

export const alt = "Kartik Puja 2027: Kartik Sankranti, Vrishchika Sankranti 17 November 2:02 am (Kolkata)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "KARTIK PUJA 2027 · KARTIK SANKRANTI",
    title: "Mid-November 2027",
    subtitle: "Vrishchika Sankranti Wed 17 Nov 2:02 am (Kolkata). Check your panjika for the puja day.",
    art: [{ id: "bagha", mood: "happy" }, { id: "gopal", mood: "smug" }],
  });
}

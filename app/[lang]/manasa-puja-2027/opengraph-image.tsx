import { ogImage } from "@/lib/og";

export const alt = "Manasa Puja 2027: Nag Panchami Friday 6 August; Shravan Sankranti Tuesday 17 August";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "MANASA PUJA 2027 · NAG PANCHAMI",
    title: "Nag Panchami Friday 6 August 2027",
    subtitle: "Kolkata puja muhurat 5:10–7:47 am. Shravan Sankranti Tue 17 Aug 2:16 pm.",
    art: [{ id: "bagha", mood: "happy" }, { id: "bhog", mood: "smug" }],
  });
}

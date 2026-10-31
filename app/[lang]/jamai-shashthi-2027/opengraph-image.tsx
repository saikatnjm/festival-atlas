import { ogImage } from "@/lib/og";

export const alt = "Jamai Shashthi 2027: Thursday 10 June; Shashthi tithi 9 Jun 9:35 am to 10 Jun 7:11 am (Kolkata)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "JAMAI SHASHTHI 2027",
    title: "Thursday 10 June 2027",
    subtitle: "Shashthi tithi (Kolkata) 9 Jun 9:35 am to 10 Jun 7:11 am. Mangoes, hilsa and a feast.",
    art: [{ id: "bhog", mood: "happy" }, { id: "gopal", mood: "smug" }],
  });
}

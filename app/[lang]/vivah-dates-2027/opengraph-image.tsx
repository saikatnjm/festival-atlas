import { ogImage } from "@/lib/og";

export const alt = "Marriage dates 2027 for Kolkata: every shubh vivah date with nakshatra and tithi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "MARRIAGE DATES 2027 · SHUBH VIVAH",
    title: "Every shubh vivah date of 2027",
    subtitle: "Kolkata list from Drik Panchang: January to mid-March, mid-April to July, November and December.",
    art: [{ id: "selfie", mood: "happy" }, { id: "gopal", mood: "smug" }],
  });
}

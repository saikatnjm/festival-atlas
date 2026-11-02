import { ogImage } from "@/lib/og";

export const alt = "Karwa Chauth 2027: Monday 18 October; Kolkata moonrise 7:03 pm, puja 5:09 to 6:24 pm";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "KARWA CHAUTH 2027",
    title: "Monday 18 October 2027",
    subtitle: "Kolkata puja 5:09–6:24 pm, moonrise 7:03 pm. Dhaka moonrise 7:22 pm.",
    art: [{ id: "selfie", mood: "happy" }, { id: "sleepy", mood: "smug" }],
  });
}

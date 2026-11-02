import { ogImage } from "@/lib/og";

export const alt = "Pausha Purnima 2027: Friday 22 January, Shakambhari Purnima; tithi times";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "PAUSHA PURNIMA 2027 · SHAKAMBHARI",
    title: "Friday 22 January 2027",
    subtitle: "Purnima Kolkata 21 Jan 9:29 pm to 22 Jan 5:46 pm. Dhaka 9:59 pm to 6:16 pm.",
    art: [{ id: "gopal", mood: "happy" }, { id: "sleepy", mood: "smug" }],
  });
}

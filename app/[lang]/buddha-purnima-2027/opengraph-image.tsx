import { ogImage } from "@/lib/og";

export const alt = "Buddha Purnima 2027: Thursday 20 May; Purnima tithi for Kolkata and Dhaka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "BUDDHA PURNIMA 2027 · VESAK",
    title: "Thursday 20 May 2027",
    subtitle: "Purnima tithi Kolkata 19 May 4:02 pm to 20 May 4:28 pm. Dhaka 4:32 pm to 4:58 pm.",
    art: [{ id: "gopal", mood: "happy" }, { id: "sleepy", mood: "smug" }],
  });
}

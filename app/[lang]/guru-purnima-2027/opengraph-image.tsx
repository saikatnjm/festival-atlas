import { ogImage } from "@/lib/og";

export const alt = "Guru Purnima 2027: Sunday 18 July; Purnima tithi times for Kolkata and Dhaka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "GURU PURNIMA 2027 · VYASA PURNIMA",
    title: "Sunday 18 July 2027",
    subtitle: "Purnima: Kolkata 17 Jul 6:48 pm to 18 Jul 9:14 pm. Dhaka 7:18 pm to 9:44 pm.",
    art: [{ id: "sleepy", mood: "happy" }, { id: "gopal", mood: "smug" }],
  });
}

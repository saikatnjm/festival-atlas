import { ogImage } from "@/lib/og";

export const alt = "Dattatreya Jayanti 2027: Monday 13 December; Purnima tithi (Kolkata)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "DATTATREYA JAYANTI 2027",
    title: "Monday 13 December 2027",
    subtitle: "Margashirsha Purnima: 12 Dec 11:54 pm to 13 Dec 9:38 pm (Kolkata).",
    art: [{ id: "gopal", mood: "happy" }, { id: "sleepy", mood: "smug" }],
  });
}

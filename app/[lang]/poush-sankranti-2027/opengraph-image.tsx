import { ogImage } from "@/lib/og";

export const alt = "Poush Sankranti 2027: Friday 15 January; Sankranti moment 14 January 9:14 pm (Kolkata)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "POUSH SANKRANTI 2027 · MAKAR SANKRANTI",
    title: "Friday 15 January 2027",
    subtitle: "Sankranti moment 14 Jan 9:14 pm (Kolkata). Punya kaal 6:19 am–5:13 pm. Pithe-puli, Shakrain, Gangasagar.",
    art: [{ id: "bhog", mood: "happy" }, { id: "gopal", mood: "smug" }],
  });
}

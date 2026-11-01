import { ogImage } from "@/lib/og";

export const alt = "Raksha Bandhan 2027: Tuesday 17 August; Kolkata rakhi time 5:14 am to 12:58 pm";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "RAKSHA BANDHAN 2027 · RAKHI PURNIMA",
    title: "Tuesday 17 August 2027",
    subtitle: "Kolkata rakhi time 5:14 am–12:58 pm. Jhulan Purnima in Bengal.",
    art: [{ id: "selfie", mood: "happy" }, { id: "gopal", mood: "smug" }],
  });
}

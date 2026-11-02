import { ogImage } from "@/lib/og";

export const alt = "Rash Purnima 2027: Kartika Purnima 13–14 November; tithi for Kolkata and Dhaka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "RASH PURNIMA 2027",
    title: "13–14 November 2027",
    subtitle: "Purnima tithi Kolkata 13 Nov 9:55 am to 14 Nov 8:55 am. Nabadwip and Shantipur Rash.",
    art: [{ id: "gopal", mood: "happy" }, { id: "selfie", mood: "smug" }],
  });
}

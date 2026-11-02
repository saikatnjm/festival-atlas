import { ogImage } from "@/lib/og";

export const alt = "Magha Purnima 2027: Saturday 20 February; Purnima tithi and moonrise (Kolkata)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "MAGHA PURNIMA 2027",
    title: "Saturday 20 February 2027",
    subtitle: "Purnima Kolkata 20 Feb 7:59 am to 21 Feb 4:52 am, moonrise 5:07 pm.",
    art: [{ id: "gopal", mood: "happy" }, { id: "bhog", mood: "smug" }],
  });
}

import { ogImage } from "@/lib/og";

export const alt = "Hanuman Jayanti 2027: Tuesday 20 April; Purnima tithi times for Kolkata and Dhaka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "HANUMAN JAYANTI 2027",
    title: "Tuesday 20 April 2027",
    subtitle: "Chaitra Purnima: Kolkata 20 Apr 4:51 am to 21 Apr 3:56 am.",
    art: [{ id: "bagha", mood: "happy" }, { id: "gopal", mood: "smug" }],
  });
}

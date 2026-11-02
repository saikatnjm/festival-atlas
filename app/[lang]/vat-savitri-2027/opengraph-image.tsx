import { ogImage } from "@/lib/og";

export const alt = "Vat Savitri 2027: Friday 4 June (Amavasya); Vat Purnima Friday 18 June";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "VAT SAVITRI 2027",
    title: "Friday 4 June 2027",
    subtitle: "Amavasya tithi Kolkata 4 Jun 4:05 am to 5 Jun 1:09 am. Vat Purnima Fri 18 Jun.",
    art: [{ id: "gopal", mood: "happy" }, { id: "sleepy", mood: "smug" }],
  });
}

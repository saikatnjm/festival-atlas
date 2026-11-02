import { ogImage } from "@/lib/og";

export const alt = "Ganga Dussehra 2027: Sunday 13 June; Dashami tithi and Hasta nakshatra times";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "GANGA DUSSEHRA 2027",
    title: "Sunday 13 June 2027",
    subtitle: "Dashami Kolkata 13 Jun 2:43 am to 14 Jun 2:11 am. Hasta nakshatra times.",
    art: [{ id: "sleepy", mood: "happy" }, { id: "bhog", mood: "smug" }],
  });
}

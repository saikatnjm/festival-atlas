import { ogImage } from "@/lib/og";

export const alt = "Akshaya Navami 2027: Sunday 7 November; Purvahna muhurat 5:44 to 11:20 am (Kolkata)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "AKSHAYA NAVAMI 2027",
    title: "Sunday 7 November 2027",
    subtitle: "Purvahna 5:44–11:20 am Kolkata. Kartika Shukla Navami, the Jagaddhatri Puja day.",
    art: [{ id: "bhog", mood: "happy" }, { id: "bagha", mood: "smug" }],
  });
}

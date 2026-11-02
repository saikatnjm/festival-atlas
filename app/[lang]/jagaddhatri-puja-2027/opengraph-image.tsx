import { ogImage } from "@/lib/og";

export const alt = "Jagaddhatri Puja 2027: Sunday 7 November; Navami tithi for Kolkata and Dhaka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "JAGADDHATRI PUJA 2027",
    title: "Sunday 7 November 2027",
    subtitle: "Navami tithi Kolkata 7 Nov 2:49 am to 8 Nov 5:23 am. Chandannagar and Krishnanagar.",
    art: [{ id: "bagha", mood: "happy" }, { id: "bhog", mood: "smug" }],
  });
}

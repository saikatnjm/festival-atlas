import { ogImage } from "@/lib/og";

export const alt = "Hartalika Teej 2027: Friday 3 September; morning puja 5:20 to 7:50 am (Kolkata)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "HARTALIKA TEEJ 2027",
    title: "Friday 3 September 2027",
    subtitle: "Pratahkala puja 5:20–7:50 am Kolkata. Tritiya tithi for Kolkata and Dhaka.",
    art: [{ id: "selfie", mood: "happy" }, { id: "bhog", mood: "smug" }],
  });
}

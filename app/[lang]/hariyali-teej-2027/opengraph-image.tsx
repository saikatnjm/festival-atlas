import { ogImage } from "@/lib/og";

export const alt = "Hariyali Teej 2027: Wednesday 4 August; Tritiya tithi (Kolkata)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "HARIYALI TEEJ 2027",
    title: "Wednesday 4 August 2027",
    subtitle: "Shravana Shukla Tritiya: 4 Aug 8:19 am to 5 Aug 5:08 am (Kolkata).",
    art: [{ id: "selfie", mood: "happy" }, { id: "gopal", mood: "smug" }],
  });
}

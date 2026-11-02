import { ogImage } from "@/lib/og";

export const alt = "Bhai Phota 2027: Sunday 31 October; Kolkata tika time 12:28 to 2:44 pm";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "BHAI PHOTA 2027 · BHAI DOOJ",
    title: "Sunday 31 October 2027",
    subtitle: "Kolkata tika time 12:28–2:44 pm. Dwitiya tithi for Kolkata and Dhaka.",
    art: [{ id: "selfie", mood: "happy" }, { id: "gopal", mood: "smug" }],
  });
}

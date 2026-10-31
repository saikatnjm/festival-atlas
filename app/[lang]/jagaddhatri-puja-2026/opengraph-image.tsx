import { ogImage } from "@/lib/og";

export const alt = "Jagaddhatri Puja 2026: Thursday 19 November. Navami tithi Kolkata 18 Nov 6:04 am to 19 Nov 7:05 am. Chandannagar and Krishnanagar";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "JAGADDHATRI PUJA 2026 · DATE & TIME",
    title: "Thursday 19 November 2026",
    subtitle: "Navami tithi (Kolkata): 18 Nov 6:04 am to 19 Nov 7:05 am. Chandannagar and Krishnanagar guide.",
    art: [
      { id: "bagha", mood: "proud" },
      { id: "selfie", mood: "wow" },
    ],
  });
}

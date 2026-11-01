import { ogImage } from "@/lib/og";

export const alt = "Vishwakarma Puja 2027: Friday 17 September; Kanya Sankranti 2:14 pm (Kolkata)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "VISHWAKARMA PUJA 2027",
    title: "Friday 17 September 2027",
    subtitle: "Kanya Sankranti 2:14 pm Kolkata, 2:44 pm Dhaka. Kites over Kolkata.",
    art: [{ id: "bagha", mood: "happy" }, { id: "selfie", mood: "smug" }],
  });
}

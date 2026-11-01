import { ogImage } from "@/lib/og";

export const alt = "Vivah Panchami 2026: Monday 14 December; Panchami tithi times for Kolkata and Dhaka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "VIVAH PANCHAMI 2026",
    title: "Monday 14 December 2026",
    subtitle: "Ram and Sita's wedding day. Panchami tithi Kolkata 13 Dec 4:47 pm to 14 Dec 7:15 pm.",
    art: [{ id: "selfie", mood: "happy" }, { id: "gopal", mood: "smug" }],
  });
}

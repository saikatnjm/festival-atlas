import { ogImage } from "@/lib/og";

export const alt = "Durga Puja 2026 greeting cards with your name: Shubho Shashthi to Shubho Bijoya, on Pujo Guide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "GREETING CARDS · DURGA PUJA 2026",
    title: "Shubho Bijoya, with your name",
    subtitle: "Shashthi to Bijoya: a card for every day, in Bangla and English. Send it in one tap.",
    art: [
      { id: "gopal", mood: "happy" },
      { id: "bagha", mood: "proud" },
    ],
  });
}

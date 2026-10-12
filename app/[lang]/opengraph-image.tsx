import { ogImage } from "@/lib/og";

// Homepage share image for /en and /bn (also the fallback for pages under them without their own).
// Latin text only: OG rendering can't be relied on for Bangla shaping (see PROJECT_STATUS.md).
export const alt = "Pujo Guide: Durga Puja 2026 games, a local guide for Kolkata and Dhaka, and a pandal map";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "PUJA GAMES · LOCAL GUIDE · PANDAL MAP",
    title: "Pujo Guide",
    subtitle: "Who are you at Puja? Find out in 30 seconds, then plan pandal-hopping in Kolkata and Dhaka.",
    art: [
      { id: "selfie", mood: "proud" },
      { id: "bhog", mood: "happy" },
      { id: "detective", mood: "smug" },
    ],
  });
}

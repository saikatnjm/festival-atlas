import { ogImage } from "@/lib/og";

export const alt = "Pujo Guide: Durga Puja games, a Kolkata and Dhaka guide, and a pandal map";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Default share image for every page that does not have its own.
export default function Image() {
  return ogImage({
    kicker: "PUJA GAMES · LOCAL GUIDE · PANDAL MAP",
    title: "Pujo Guide",
    subtitle: "Who are you at Puja? Play, plan your pandal-hopping, and share your card.",
    art: [
      { id: "detective", mood: "smug" },
      { id: "bhog", mood: "happy" },
      { id: "selfie", mood: "proud" },
    ],
  });
}

import { ogImage } from "@/lib/og";

export const alt = "Puja postcard: turn your pandal photo into a postcard with the day's tithi and a map pin";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "PHOTO POSTCARD",
    title: "Your pandal photo, as a postcard",
    subtitle: "Tithi postmark, pandal name and a map pin. Made on your phone; nothing is uploaded.",
    art: [
      { id: "selfie", mood: "proud" },
      { id: "hansjaru", mood: "happy" },
    ],
  });
}

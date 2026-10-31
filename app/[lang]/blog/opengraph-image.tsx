import { ogImage } from "@/lib/og";

export const alt = "Puja stories: Bengali festival history, rituals and guides on Pujo Guide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "PUJO GUIDE · STORIES",
    title: "Bengali festivals, explained",
    subtitle: "History, rituals and visiting guides for Kali Puja, Bhai Phota, Jagaddhatri and more. With sources.",
    art: [
      { id: "detective", mood: "smug" },
      { id: "gopal", mood: "happy" },
    ],
  });
}

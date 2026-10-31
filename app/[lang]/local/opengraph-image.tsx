import { ogImage } from "@/lib/og";

export const alt = "Kolkata and Dhaka Durga Puja guide: news, routes, Metro timings and plans, with sources";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "LOCAL GUIDE · KOLKATA & DHAKA",
    title: "What's on, where, and how to get there",
    subtitle: "Sourced news, Metro timings, holidays and pandal-hopping routes for Kolkata and Bangladesh.",
    art: [
      { id: "detective", mood: "smug" },
      { id: "selfie", mood: "happy" },
    ],
  });
}

import { ogImage } from "@/lib/og";

export const alt = "Durga Puja pandal map and directory";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "DURGA PUJA PANDAL MAP",
    title: "Pandal map & directory",
    subtitle: "Sourced listings from Kolkata and Dhaka to Bengali communities worldwide.",
  });
}

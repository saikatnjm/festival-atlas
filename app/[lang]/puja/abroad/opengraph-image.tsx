import { ogImage } from "@/lib/og";

export const alt = "Durga Puja abroad: Bengali pujas in London, New York, Toronto, Sydney and Dubai on Pujo Guide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "DURGA PUJA ABROAD",
    title: "Bengali pujas worldwide",
    subtitle: "London to Singapore, Toronto to Dubai: sourced listings from the diaspora.",
    art: [
      { id: "selfie", mood: "proud" },
      { id: "excuse", mood: "happy" },
    ],
  });
}

import { ogImage } from "@/lib/og";

export const alt = "Shitala Ashtami 2027: Tuesday 30 March; puja muhurat for Kolkata and Dhaka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "SHITALA ASHTAMI 2027 · BASODA",
    title: "Tuesday 30 March 2027",
    subtitle: "Kolkata puja 5:32 am–5:51 pm. Ashtami tithi 29 Mar 5:10 pm to 30 Mar 7:39 pm.",
    art: [{ id: "bhog", mood: "happy" }, { id: "selfie", mood: "smug" }],
  });
}

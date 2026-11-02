import { ogImage } from "@/lib/og";

export const alt = "Radhashtami 2027: Wednesday 8 September; Madhyahna puja 10:20 am to 12:49 pm (Kolkata)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "RADHASHTAMI 2027",
    title: "Wednesday 8 September 2027",
    subtitle: "Kolkata Madhyahna 10:20 am–12:49 pm, Dhaka 10:41 am–1:11 pm. Ashtami tithi.",
    art: [{ id: "selfie", mood: "happy" }, { id: "gopal", mood: "smug" }],
  });
}

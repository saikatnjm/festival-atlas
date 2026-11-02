import { ogImage } from "@/lib/og";

export const alt = "Dev Deepawali 2027: Saturday 13 November; Varanasi Pradosh muhurat 5:11 to 7:48 pm";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "DEV DEEPAWALI 2027 · VARANASI",
    title: "Saturday 13 November 2027",
    subtitle: "Pradosh muhurat 5:11–7:48 pm (Varanasi). Kartika Purnima, the gods' festival of lights.",
    art: [{ id: "bhog", mood: "happy" }, { id: "selfie", mood: "smug" }],
  });
}

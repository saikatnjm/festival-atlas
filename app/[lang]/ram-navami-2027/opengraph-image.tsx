import { ogImage } from "@/lib/og";

export const alt = "Ram Navami 2027: Thursday 15 April; Madhyahna muhurat 10:21 am to 12:53 pm (Kolkata)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "RAM NAVAMI 2027 · ANNAPURNA ASHTAMI",
    title: "Thursday 15 April 2027",
    subtitle: "Madhyahna muhurat (Kolkata) 10:21 am–12:53 pm. Annapurna Ashtami 14 Apr, Sandhi Puja 2:59–3:47 pm.",
    art: [{ id: "bagha", mood: "proud" }, { id: "detective", mood: "happy" }],
  });
}

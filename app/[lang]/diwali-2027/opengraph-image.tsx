import { ogImage } from "@/lib/og";

export const alt = "Diwali 2027: Lakshmi Puja Friday 29 October; Kali Puja Thursday 28 October in Bengal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "DIWALI 2027 · KALI PUJA",
    title: "Diwali Friday 29 October 2027",
    subtitle: "Kolkata Lakshmi Puja 6:00–7:05 pm. Bengal's Kali Puja Thu 28 Oct, Nishita 10:55–11:46 pm.",
    art: [{ id: "bhog", mood: "happy" }, { id: "sleepy", mood: "smug" }],
  });
}

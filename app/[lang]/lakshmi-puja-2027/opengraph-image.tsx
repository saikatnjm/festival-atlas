import { ogImage } from "@/lib/og";

export const alt = "Kojagori Lakshmi Puja 2027: Thursday 14 October; Nishita 10:58 to 11:47 pm (Kolkata)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "LAKSHMI PUJA 2027 · KOJAGORI",
    title: "Thursday 14 October 2027",
    subtitle: "Nishita time (Kolkata) 10:58–11:47 pm. Purnima tithi 14 Oct 6:49 pm to 15 Oct 7:16 pm.",
    art: [{ id: "bhog", mood: "happy" }, { id: "hansjaru", mood: "wow" }],
  });
}

import { ogImage } from "@/lib/og";

export const alt = "Chhath Puja 2027: 2 to 5 November; Sandhya Arghya Thursday 4 November";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "CHHATH PUJA 2027",
    title: "2–5 November 2027",
    subtitle: "Nahay Khay to Usha Arghya. Kolkata sunset 4:58 pm on 4 Nov, sunrise 5:43 am on 5 Nov.",
    art: [{ id: "bhog", mood: "happy" }, { id: "sleepy", mood: "smug" }],
  });
}

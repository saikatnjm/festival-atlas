import { ogImage } from "@/lib/og";

export const alt = "Tulsi Vivah 2026: Saturday 21 November; Prabodhini Ekadashi Friday 20 November";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "TULSI VIVAH 2026 · DEV UTHANI EKADASHI",
    title: "Saturday 21 November 2026",
    subtitle: "Dwadashi tithi Kolkata 21 Nov 6:31 am to 22 Nov 4:56 am. Prabodhini Ekadashi Fri 20 Nov.",
    art: [{ id: "bhog", mood: "happy" }, { id: "sleepy", mood: "smug" }],
  });
}

import { ogImage } from "@/lib/og";

export const alt = "Bengali festival calendar 2027: Durga Puja 5 to 10 October, Kali Puja 28 October, Saraswati Puja 11 February, Dol 22 March";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "BENGALI FESTIVAL CALENDAR 2027",
    title: "Durga Puja 5–10 Oct 2027",
    subtitle: "Saraswati Puja 11 Feb · Dol 22 Mar · Kali Puja 28 Oct · Jagaddhatri 7 Nov. Sourced dates and tithis.",
    art: [
      { id: "bagha", mood: "proud" },
      { id: "bhog", mood: "happy" },
    ],
  });
}

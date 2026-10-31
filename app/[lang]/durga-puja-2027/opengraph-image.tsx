import { ogImage } from "@/lib/og";

export const alt = "Durga Puja 2027: Shashthi Tuesday 5 October to Vijaya Dashami Sunday 10 October; Mahalaya 29 September";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "DURGA PUJA 2027 · DATES",
    title: "5–10 October 2027",
    subtitle: "Mahalaya 29 Sep · Shashthi Tue 5 Oct · Ashtami 7 · Sandhi Puja 8 · Navami 9 · Dashami Sun 10 Oct.",
    art: [
      { id: "bagha", mood: "proud" },
      { id: "bhog", mood: "happy" },
    ],
  });
}

import { ogImage } from "@/lib/og";

export const alt = "Bengali calendar 1433: today's Bangla date, month start dates in Bangladesh and Sankrantis in West Bengal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "BENGALI CALENDAR 1433",
    title: "Today's Bangla date",
    subtitle: "Month start dates in Bangladesh, Sankranti dates and times for West Bengal. 1434 begins 14/15 April 2027.",
    art: [
      { id: "detective", mood: "smug" },
      { id: "gopal", mood: "happy" },
    ],
  });
}

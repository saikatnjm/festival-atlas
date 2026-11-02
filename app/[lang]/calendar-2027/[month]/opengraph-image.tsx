import { ogImage } from "@/lib/og";

export const alt = "Hindu festivals, Ekadashi, Purnima and vrats of the month, 2027 (Kolkata and Dhaka)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ month: string }> }) {
  const { month } = await params;
  const name = month.charAt(0).toUpperCase() + month.slice(1);
  return ogImage({
    kicker: "HINDU CALENDAR 2027 · MONTH BY MONTH",
    title: `${name} 2027`,
    subtitle: "Every festival, Ekadashi, Purnima, Amavasya and vrat, with dates and tithi times, sourced.",
    art: [{ id: "detective", mood: "happy" }, { id: "gopal", mood: "smug" }],
  });
}

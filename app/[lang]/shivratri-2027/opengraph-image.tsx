import { ogImage } from "@/lib/og";

export const alt = "Maha Shivratri 2027: Saturday 6 March. Nishita kaal Kolkata 11:23 pm to 12:12 am; four prahar times and parana";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "MAHA SHIVRATRI 2027 · DATE & TIME",
    title: "Saturday 6 March 2027",
    subtitle: "Kolkata Nishita kaal 11:23 pm–12:12 am. Four prahars, parana on 7 March, Dhaka times too.",
    art: [{ id: "sleepy", mood: "wow" }, { id: "bagha", mood: "proud" }],
  });
}

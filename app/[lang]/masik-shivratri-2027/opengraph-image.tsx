import { ogImage } from "@/lib/og";

export const alt = "Masik Shivratri 2027: all 13 dates with midnight puja time for Kolkata and Dhaka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "MASIK SHIVRATRI 2027 · ALL DATES",
    title: "13 Masik Shivratris in 2027",
    subtitle: "Chaturdashi tithi and the midnight puja window; Maha Shivratri Sat 6 March.",
    art: [{ id: "detective", mood: "happy" }, { id: "sleepy", mood: "smug" }],
  });
}

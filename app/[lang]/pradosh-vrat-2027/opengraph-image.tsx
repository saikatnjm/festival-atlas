import { ogImage } from "@/lib/og";

export const alt = "Pradosh Vrat 2027: every date with Pradosh puja time for Kolkata and Dhaka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "PRADOSH VRAT 2027 · ALL DATES",
    title: "Every Pradosh Vrat of 2027",
    subtitle: "Trayodashi tithi and the evening Pradosh puja window, Kolkata and Dhaka.",
    art: [{ id: "sleepy", mood: "happy" }, { id: "bhog", mood: "smug" }],
  });
}

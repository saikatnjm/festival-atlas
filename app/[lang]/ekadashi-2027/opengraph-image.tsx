import { ogImage } from "@/lib/og";

export const alt = "Ekadashi 2027: every date with tithi times for Kolkata and Dhaka, Smarta and Vaishnava (ISKCON)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "EKADASHI 2027 · ALL DATES",
    title: "25 Ekadashis in 2027",
    subtitle: "Kolkata and Dhaka tithi times, Smarta and Vaishnava (ISKCON) dates.",
    art: [{ id: "sleepy", mood: "happy" }, { id: "gopal", mood: "smug" }],
  });
}

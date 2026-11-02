import { ogImage } from "@/lib/og";

export const alt = "Kali Puja 2027: Thursday 28 October; Kolkata Nishita puja 10:55 to 11:46 pm";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "KALI PUJA 2027 · SHYAMA PUJA",
    title: "Thursday 28 October 2027",
    subtitle: "Kolkata Nishita 10:55–11:46 pm, Dhaka 11:17 pm–12:08 am. Diwali the next day.",
    art: [{ id: "sleepy", mood: "happy" }, { id: "bagha", mood: "smug" }],
  });
}

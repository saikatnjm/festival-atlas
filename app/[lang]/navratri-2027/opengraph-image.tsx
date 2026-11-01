import { ogImage } from "@/lib/og";

export const alt = "Navratri 2027: Chaitra 7 to 15 April, Sharad from 30 September; Ghatasthapana times";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "NAVRATRI 2027 · CHAITRA & SHARAD",
    title: "Chaitra 7–15 April · Sharad from 30 September",
    subtitle: "Ghatasthapana muhurat for Kolkata and Dhaka. In Bengal, Sharad Navratri is Durga Puja.",
    art: [{ id: "bagha", mood: "happy" }, { id: "bhog", mood: "smug" }],
  });
}

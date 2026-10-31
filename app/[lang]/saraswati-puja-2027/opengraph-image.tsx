import { ogImage } from "@/lib/og";

export const alt = "Saraswati Puja 2027: Thursday 11 February. Panchami tithi Kolkata 11 Feb 3:04 am to 12 Feb 3:18 am; puja muhurat 6:11 to 11:51 am";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "SARASWATI PUJA 2027 · DATE & TIME",
    title: "Thursday 11 February 2027",
    subtitle: "Kolkata: Panchami 11 Feb 3:04 am to 12 Feb 3:18 am, muhurat 6:11–11:51 am. Dhaka times too.",
    art: [{ id: "detective", mood: "proud" }, { id: "selfie", mood: "happy" }],
  });
}

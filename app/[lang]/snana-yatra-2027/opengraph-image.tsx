import { ogImage } from "@/lib/og";

export const alt = "Snana Yatra 2027: Friday 18 June, Jyeshtha Purnima; tithi for Kolkata and Dhaka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "SNANA YATRA 2027 · JYESHTHA PURNIMA",
    title: "Friday 18 June 2027",
    subtitle: "Jagannath's bathing festival. Purnima Kolkata 18 Jun 4:34 am to 19 Jun 6:13 am.",
    art: [{ id: "bhog", mood: "happy" }, { id: "gopal", mood: "smug" }],
  });
}

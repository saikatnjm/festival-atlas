import { ogImage } from "@/lib/og";

export const alt = "Govardhan Puja 2027: Saturday 30 October; morning puja 5:40 to 7:56 am (Kolkata)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "GOVARDHAN PUJA 2027 · ANNAKUT",
    title: "Saturday 30 October 2027",
    subtitle: "Pratahkala 5:40–7:56 am, Sayankala 2:44–5:00 pm (Kolkata). The day after Diwali.",
    art: [{ id: "bhog", mood: "happy" }, { id: "gopal", mood: "smug" }],
  });
}

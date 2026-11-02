import { ogImage } from "@/lib/og";

export const alt = "Holi 2027: Monday 22 March; Holika Dahan Sunday 21 March 6:21 to 8:10 pm (Kolkata)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "HOLI 2027 · DOL JATRA",
    title: "Monday 22 March 2027",
    subtitle: "Holika Dahan Sun 21 Mar 6:21–8:10 pm (Kolkata). Dol Purnima the same day in Bengal.",
    art: [{ id: "selfie", mood: "happy" }, { id: "bhog", mood: "smug" }],
  });
}

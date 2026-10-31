import { ogImage } from "@/lib/og";

export const alt = "Dol Purnima 2027: Monday 22 March. Purnima tithi Kolkata 21 Mar 6:21 pm to 22 Mar 4:13 pm";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "DOL PURNIMA 2027 · DATE & TIME",
    title: "Monday 22 March 2027",
    subtitle: "Purnima tithi (Kolkata): 21 Mar 6:21 pm to 22 Mar 4:13 pm. Dol, Holi and Chaitanya Jayanti.",
    art: [
      { id: "selfie", mood: "happy" },
      { id: "gopal", mood: "wow" },
    ],
  });
}

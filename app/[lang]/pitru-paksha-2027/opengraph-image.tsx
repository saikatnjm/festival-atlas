import { ogImage } from "@/lib/og";

export const alt = "Pitru Paksha 2027: 16 to 29 September; every Shraddha date for Kolkata and Dhaka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "PITRU PAKSHA 2027 · SHRADDHA DATES",
    title: "16–29 September 2027",
    subtitle: "Every Shraddha day, Purnima Shraddha to Sarva Pitru Amavasya (Mahalaya, Wed 29 Sep).",
    art: [{ id: "sleepy", mood: "happy" }, { id: "gopal", mood: "smug" }],
  });
}

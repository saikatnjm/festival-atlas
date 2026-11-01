import { ogImage } from "@/lib/og";

export const alt = "Ganesh Chaturthi 2027: Saturday 4 September; Kolkata Madhyahna puja 10:20 am to 12:25 pm";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "GANESH CHATURTHI 2027",
    title: "Saturday 4 September 2027",
    subtitle: "Kolkata Madhyahna puja 10:20 am–12:25 pm. Visarjan Tue 14 Sep (Anant Chaturdashi).",
    art: [{ id: "gopal", mood: "happy" }, { id: "bhog", mood: "smug" }],
  });
}

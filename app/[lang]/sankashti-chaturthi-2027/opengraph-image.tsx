import { ogImage } from "@/lib/og";

export const alt = "Sankashti Chaturthi 2027: all 12 dates with Chaturthi tithi times for Kolkata and Dhaka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "SANKASHTI CHATURTHI 2027 · ALL DATES",
    title: "12 Sankashti Chaturthis in 2027",
    subtitle: "First Mon 25 Jan (Lambodara), last Thu 16 Dec. Chaturthi tithi times for Kolkata and Dhaka.",
    art: [{ id: "bhog", mood: "happy" }, { id: "gopal", mood: "smug" }],
  });
}

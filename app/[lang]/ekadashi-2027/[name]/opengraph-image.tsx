import { ogImage } from "@/lib/og";

export const alt = "Ekadashi 2027: date, tithi and parana time for Kolkata and Dhaka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const title = name.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return ogImage({
    kicker: "EKADASHI 2027 · DATE & PARANA",
    title: `${title} 2027`,
    subtitle: "Smarta and Vaishnava days, tithi and parana times for Kolkata and Dhaka, sourced.",
    art: [{ id: "gopal", mood: "happy" }, { id: "sleepy", mood: "smug" }],
  });
}

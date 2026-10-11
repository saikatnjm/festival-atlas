import { headers } from "next/headers";
import { redirect } from "next/navigation";

/** "/" has no page of its own: send visitors to Bangla if their browser prefers it, otherwise English. */
export default async function Root() {
  const accept = (await headers()).get("accept-language") ?? "";
  const first = accept.split(",").map((x) => x.trim().split(";")[0].toLowerCase());
  const bn = first.findIndex((l) => l === "bn" || l.startsWith("bn-"));
  const en = first.findIndex((l) => l === "en" || l.startsWith("en-"));
  redirect(bn !== -1 && (en === -1 || bn < en) ? "/bn" : "/en");
}

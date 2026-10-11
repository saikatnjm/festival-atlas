import { cleanName } from "@/lib/profile";

/** Addresses a line to the player: "সৈকত, চারটে দৃশ্য…" / "Saikat, four scenes…". Unchanged without a name. */
export function withName(line: string, name: string | undefined): string {
  const n = cleanName(name);
  return n ? `${n}, ${line}` : line;
}

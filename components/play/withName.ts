import { cleanName } from "@/lib/profile";

/** Addresses a line to the player: "পিন্টু, চারটে দৃশ্য…" / "Rini, four scenes…". Unchanged without a name. */
export function withName(line: string, name: string | undefined): string {
  const n = cleanName(name);
  if (!n) return line;
  // "Rini, four scenes…" not "Rini, Four scenes…": lower a leading capital unless it starts an acronym/name.
  // Only a plain first word is lowered ("Four scenes" → "four scenes"); "Thamma," or "I'll" stay as written.
  const rest = /^[A-Z][a-z]+ /.test(line) ? line[0].toLowerCase() + line.slice(1) : line;
  return `${n}, ${rest}`;
}

import { num, type Lang } from "./i18n";

/**
 * Fills {placeholders}. Numbers are formatted with the language's digits.
 * "a|b" picks a (singular) when the `n` variable (or `lines`/`count`) is 1, else b. Bangla strings
 * have no "|" and are used as they are.
 */
export function fmt(template: string, vars: Record<string, string | number> = {}, lang: Lang = "en"): string {
  let s = template;
  if (s.includes("|")) {
    const [one, many] = s.split("|");
    // Only the first segment before " · " carries the plural; keep the rest of the template.
    const probe = Number(vars.lines ?? vars.n ?? vars.count ?? 0);
    const rest = many.includes(" · ") ? many.slice(many.indexOf(" · ")) : "";
    s = probe === 1 ? one + rest : many;
  }
  return s.replace(/\{(\w+)\}/g, (_, k: string) => {
    const v = vars[k];
    if (v === undefined) return `{${k}}`;
    return typeof v === "number" ? num(v, lang) : v;
  });
}

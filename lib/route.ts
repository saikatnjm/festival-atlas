import { notFound } from "next/navigation";
import { isLang, type Lang } from "./i18n";

/** Narrows a route param to a supported language, or renders the 404 page. */
export function langOf(param: string): Lang {
  if (!isLang(param)) notFound();
  return param;
}

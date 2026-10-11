import type { Lang } from "@/lib/i18n";
import bn from "./bn";
import en, { type Dict } from "./en";

export type { Dict } from "./en";

const DICTS: Record<Lang, Dict> = { en, bn };

export const getDict = (lang: Lang): Dict => DICTS[lang];

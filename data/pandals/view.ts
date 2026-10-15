import type { Lang } from "@/lib/i18n";
import { withLang } from "@/lib/i18n";
import {
  areaOf,
  cityName,
  countryName,
  descriptionOf,
  nameOf,
  placeLabel,
  searchText,
  sortPandals,
  themeOf,
  pandals,
  type PandalStatus,
  type PinKind,
} from "./index";

/** What the (client-side) directory needs for one listing, already in the page language. */
export interface PandalItem {
  id: string;
  name: string;
  place: string;
  city: string;
  country: string;
  area?: string;
  year?: number;
  status: PandalStatus;
  theme?: string;
  themeKey?: string;
  description: string;
  lat?: number;
  lng?: number;
  pin?: PinKind;
  search: string;
  href: string;
}

export function toItems(lang: Lang): PandalItem[] {
  return sortPandals(pandals).map((p) => ({
    id: p.id,
    name: nameOf(p, lang),
    place: placeLabel(p, lang),
    city: p.city,
    country: p.country,
    area: areaOf(p, lang),
    year: p.year,
    status: p.status,
    theme: themeOf(p, lang),
    themeKey: p.theme,
    description: descriptionOf(p, lang),
    lat: p.lat,
    lng: p.lng,
    pin: p.pin,
    search: searchText(p),
    href: withLang(lang, `/puja/${p.id}`),
  }));
}

export { cityName, countryName };

// The one place pandal counts come from, so the home page chips and the collection pages agree.

import type { Collection } from "./collections";
import { hasPin, pandals, type Pandal } from "./index";

export type Match = (p: Pandal) => boolean;

/** How many listings satisfy `match` (all of them by default). */
export const countWhere = (match: Match = () => true): number => pandals.filter(match).length;

/** Totals for the about page: listings and countries covered. */
export function summary(): { total: number; countries: number } {
  return { total: countWhere(), countries: new Set(pandals.map((p) => p.country)).size };
}

/** Listings in one city, by the data's city field (so "Kolkata" excludes Siliguri and Khardaha). */
export const cityCount = (city: string): number => countWhere((p) => p.city === city);

/** Cities with the most listings, for the home page's "browse by place" chips. */
export function topCities(limit: number): { city: string; n: number }[] {
  const cities = [...new Set(pandals.map((p) => p.city))];
  return cities
    .map((city) => ({ city, n: cityCount(city) }))
    .sort((a, b) => b.n - a.n || a.city.localeCompare(b.city))
    .slice(0, limit);
}

/**
 * Counts for a collection page: everything it matches, how many have a pin, and how many are in its
 * primary city (the number the home chip for that city shows) versus elsewhere in the region.
 */
export function collectionCounts(c: Pick<Collection, "match" | "primaryCity">): { total: number; pinned: number; primary: number; elsewhere: number } {
  const list = pandals.filter(c.match);
  const primary = c.primaryCity ? list.filter((p) => p.city === c.primaryCity).length : list.length;
  return { total: list.length, pinned: list.filter(hasPin).length, primary, elsewhere: list.length - primary };
}

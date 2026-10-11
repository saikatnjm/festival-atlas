import { test } from "node:test";
import assert from "node:assert/strict";
import { applyFilters, filtersFromSearch, searchFromFilters, spreadPins, NO_FILTERS, hasFilters } from "../lib/pandal-filter.ts";

const list = [
  { id: "a", search: "kolkata india কলকাতা chaltabagan", country: "IN", city: "Kolkata", year: 2025, themeKey: "x", status: "confirmed" },
  { id: "b", search: "dhaka bangladesh ঢাকা", country: "BD", city: "Dhaka", year: 2023, status: "historical" },
  { id: "c", search: "london uk", country: "GB", city: "London", status: "pending" },
];

test("no filters returns everything; text search works in both scripts", () => {
  assert.equal(applyFilters(list, NO_FILTERS).length, 3);
  assert.deepEqual(applyFilters(list, { ...NO_FILTERS, q: "কলকাতা" }).map((x) => x.id), ["a"]);
  assert.deepEqual(applyFilters(list, { ...NO_FILTERS, q: " DHAKA " }).map((x) => x.id), ["b"]);
});

test("facet filters combine, and an impossible combination is empty", () => {
  assert.deepEqual(applyFilters(list, { ...NO_FILTERS, country: "IN", status: "confirmed" }).map((x) => x.id), ["a"]);
  assert.deepEqual(applyFilters(list, { ...NO_FILTERS, year: "2023" }).map((x) => x.id), ["b"]);
  assert.equal(applyFilters(list, { ...NO_FILTERS, country: "IN", status: "historical" }).length, 0);
});

test("filters round-trip through the URL query", () => {
  const f = { ...NO_FILTERS, q: "puja park", country: "IN", city: "Kolkata" };
  assert.ok(hasFilters(f));
  assert.deepEqual(filtersFromSearch(searchFromFilters(f)), f);
  assert.equal(searchFromFilters(NO_FILTERS), "");
});

test("spreadPins separates identical coordinates but leaves single pins alone", () => {
  const pts = [
    { id: "1", lat: 22.5, lng: 88.3 },
    { id: "2", lat: 22.5, lng: 88.3 },
    { id: "3", lat: 51.5, lng: -0.12 },
  ];
  const out = spreadPins(pts);
  const [a, b, c] = ["1", "2", "3"].map((id) => out.get(id));
  assert.notDeepEqual(a, b);
  assert.ok(Math.abs(a[0] - 22.5) < 0.01 && Math.abs(b[1] - 88.3) < 0.01, "stays within ~1km");
  assert.deepEqual(c, [51.5, -0.12]);
});

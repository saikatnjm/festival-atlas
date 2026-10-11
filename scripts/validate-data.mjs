// Fails the build if the curated pandal data is malformed or breaks the honesty rules.
import { readFileSync } from "node:fs";

const read = (f) => JSON.parse(readFileSync(new URL(`../data/pandals/${f}`, import.meta.url), "utf8"));
const entries = read("entries.json");
const bn = read("bn.json");
const geo = read("geo-bn.json");
const STATUS = new Set(["confirmed", "historical", "pending"]);
const errors = [];
const ids = new Set();
const isUrl = (u) => typeof u === "string" && /^https?:\/\/[^\s]+$/.test(u);

for (const e of entries) {
  const w = e.id ?? "(no id)";
  if (!/^[a-z0-9-]+$/.test(e.id ?? "") || ids.has(e.id)) errors.push(`${w}: missing, malformed or duplicate id`);
  ids.add(e.id);
  for (const f of ["name", "country", "city", "description", "lastVerified"]) {
    if (typeof e[f] !== "string" || !e[f].trim()) errors.push(`${w}: missing ${f}`);
  }
  if (!STATUS.has(e.status)) errors.push(`${w}: bad status`);
  if (!Array.isArray(e.sources) || e.sources.length === 0) errors.push(`${w}: needs at least one source`);
  else for (const s of e.sources) if (!s.title || !isUrl(s.url)) errors.push(`${w}: bad source ${JSON.stringify(s)}`);
  if (e.website !== undefined && !isUrl(e.website)) errors.push(`${w}: bad website`);
  if (e.status === "historical" && !(e.year <= 2024)) errors.push(`${w}: historical entries need year <= 2024`);
  if (e.status === "confirmed" && !(e.year >= 2025)) errors.push(`${w}: confirmed entries need a recent year`);
  const has = e.lat !== undefined || e.lng !== undefined;
  if (has) {
    if (typeof e.lat !== "number" || typeof e.lng !== "number") errors.push(`${w}: lat and lng must both be numbers`);
    else if (Math.abs(e.lat) > 90 || Math.abs(e.lng) > 180) errors.push(`${w}: coordinates out of range`);
    if (e.pin !== "area" && e.pin !== "city") errors.push(`${w}: pin must be "area" or "city"`);
    if (!e.coordSource) errors.push(`${w}: coordinates need coordSource`);
  }
  if (!bn[e.id] || !bn[e.id].description) errors.push(`${w}: missing Bangla description in bn.json`);
  if (!geo.countries?.[e.country]) errors.push(`${w}: country "${e.country}" missing in geo-bn.json`);
  if (!geo.cities?.[e.city]) errors.push(`${w}: city "${e.city}" missing in geo-bn.json`);
}
for (const id of Object.keys(bn)) if (!ids.has(id)) errors.push(`bn.json: unknown id ${id}`);

if (errors.length) {
  console.error("Data validation FAILED:\n- " + errors.join("\n- "));
  process.exit(1);
}
console.log(`Data OK: ${entries.length} pandal entries validated.`);

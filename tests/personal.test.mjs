import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { cleanName, possessive, nameOr, toProfile, hashString, NAME_MAX } from "../lib/profile.ts";
import { BADGES, TRAITS, VERDICTS, pickBadge, traitsFor, dominantChar, duoLine, assignSquad, fill, SQUAD_TITLES } from "../data/play/personal.ts";
import { cast } from "../data/play/cast.ts";
import { events } from "../data/events/events.ts";
import { checkEvents, eventStatus, trending, daysUntil } from "../lib/events.ts";
import { traditions } from "../data/local/content.ts";
import { START_PLACES, VIBES, STOP_META, FACTS, buildRoute } from "../data/local/routes.ts";

const chars = Object.keys(cast);
const graphemes = (s) => Array.from(new Intl.Segmenter(undefined, { granularity: "grapheme" }).segment(s));

test("possessive forms: Bengali and Latin names, both languages, skipped name", () => {
  assert.equal(possessive("সৈকত", "bn"), "সৈকতের");
  assert.equal(possessive("পিয়া", "bn"), "পিয়ার");
  assert.equal(possessive("রিনি", "bn"), "রিনির");
  assert.equal(possessive("বিশ্বজিৎ", "bn"), "বিশ্বজিতের");
  assert.equal(possessive("Saikat", "bn"), "Saikat-এর");
  assert.equal(possessive("Pia", "bn"), "Pia-র");
  assert.equal(possessive("Saikat", "en"), "Saikat’s");
  assert.equal(possessive("James", "en"), "James’");
  assert.equal(possessive("সৈকত", "en"), "সৈকত’s");
  assert.equal(possessive("", "bn"), "তোমার");
  assert.equal(possessive(undefined, "en"), "Your");
  assert.equal(possessive("   ", "en"), "Your");
  assert.equal(nameOr("", "bn"), "বন্ধু");
  assert.equal(nameOr(" Rini ", "en"), "Rini");
});

test("cleanName trims, strips markup and limits long names without breaking letters", () => {
  assert.equal(cleanName("  Rini   Das  "), "Rini Das");
  assert.equal(cleanName('<script>"x"</script>'), "scriptx/script");
  assert.equal(cleanName(42), "");
  const longBn = "শ্রীমতী ঐন্দ্রিলা বন্দ্যোপাধ্যায় চট্টোপাধ্যায়";
  const cut = cleanName(longBn);
  assert.ok(graphemes(cut).length <= NAME_MAX);
  assert.ok(longBn.startsWith(cut), "cut is a prefix");
  assert.ok(!/্$/.test(cut), "does not end on a bare virama");
  const longEn = "Bartholomew Alexander Fitzgerald-Montgomery";
  assert.ok(graphemes(cleanName(longEn)).length <= NAME_MAX);
});

test("toProfile keeps only valid optional details", () => {
  assert.deepEqual(toProfile(null), {});
  assert.deepEqual(toProfile({ name: " Pintu ", city: "Behala", role: "lost", mood: "nope", activity: 5 }), { name: "Pintu", city: "Behala", role: "lost" });
});

test("personal content covers every character in both languages", () => {
  for (const c of chars) {
    assert.ok(BADGES[c]?.length >= 2, `badges for ${c}`);
    for (const b of BADGES[c]) {
      assert.ok(b.bn.includes("{of}") && b.en.includes("{of}"), `badge placeholder ${c}`);
    }
    assert.ok(TRAITS[c]?.length >= 3, `traits for ${c}`);
    assert.ok(VERDICTS[c]?.bn.includes("{name}") && VERDICTS[c].en.includes("{name}"), `verdict ${c}`);
  }
});

test("badge title is personalised and depends on the choices", () => {
  const of = possessive("সৈকত", "bn");
  assert.equal(fill(pickBadge("bhog", 0).bn, { of }), "সৈকতের ভোগ খাওয়ার সরকারি লাইসেন্স");
  assert.notEqual(pickBadge("bhog", 0).en, pickBadge("bhog", 1).en);
  const seedA = hashString("puja-personality:0123:0");
  const seedB = hashString("puja-personality:3210:0");
  assert.notEqual(seedA, seedB);
});

test("traits come from the choices, then optional details; max four, no repeats", () => {
  const a = traitsFor("bhog", ["bhog", "detective", "bhog"], {});
  const b = traitsFor("bhog", ["selfie", "excuse"], {});
  assert.notDeepEqual(a.map((t) => t.en), b.map((t) => t.en));
  const withRole = traitsFor("bhog", ["bhog", "bhog", "bhog", "bhog"], { role: "lost", activity: "adda", mood: "hype" });
  assert.ok(withRole.length <= 4);
  assert.ok(withRole.some((t) => t.bn === "পুজোর হারিয়ে যাওয়া GPS"));
  assert.equal(new Set(withRole.map((t) => t.en)).size, withRole.length);
  assert.equal(traitsFor("sleepy", [], {}).length, 2, "skipped choices still give two traits");
  assert.equal(dominantChar({ bhog: 1, detective: 2 }), "detective");
  assert.equal(dominantChar({}), null);
});

test("friend duo line is symmetric; squad roles are unique and repeatable from a link", () => {
  assert.deepEqual(duoLine("bhog", "selfie"), duoLine("selfie", "bhog"));
  assert.ok(duoLine("bhog", "bhog").en.includes("twins"));
  const names = ["সৈকত", "Rini", "পিন্টু", "A very long nickname indeed", "Pia", "বাবাই"];
  const s1 = assignSquad(names, 0);
  const s2 = assignSquad(names, 0);
  assert.deepEqual(s1, s2);
  assert.equal(s1.members.length, names.length);
  assert.equal(new Set(s1.members.map((m) => m.title.en)).size, names.length);
  assert.ok(SQUAD_TITLES.length >= 6);
  assert.notDeepEqual(assignSquad(names, 1).members.map((m) => m.title.en), s1.members.map((m) => m.title.en));
});

test("events follow the data rules (sources, dates, both languages)", () => {
  assert.deepEqual(checkEvents(events), []);
  assert.ok(events.some((e) => e.region === "wb") && events.some((e) => e.region === "bd"));
  const ids = new Set(JSON.parse(readFileSync(new URL("../data/pandals/entries.json", import.meta.url), "utf8")).map((p) => p.id));
  for (const e of events) if (e.pandalId) assert.ok(ids.has(e.pandalId), `${e.id} links to a real listing`);
});

test("event status uses each region's local date", () => {
  const wb = events.find((e) => e.id === "wb-mahalaya-2026");
  const bd = events.find((e) => e.id === "bd-mahalaya-2026");
  assert.equal(eventStatus(wb, new Date("2026-10-09T18:00:00Z")), "upcoming"); // 23:30 IST on the 9th
  assert.equal(eventStatus(wb, new Date("2026-10-10T10:00:00Z")), "live");
  assert.equal(eventStatus(wb, new Date("2026-10-10T18:31:00Z")), "past"); // 00:01 IST on the 11th
  assert.equal(eventStatus(bd, new Date("2026-10-10T17:59:59Z")), "live"); // 23:59:59 in Dhaka
  assert.equal(eventStatus(bd, new Date("2026-10-10T18:00:00Z")), "past"); // midnight in Dhaka (UTC+6)
  assert.equal(eventStatus({ ...wb, confidence: "unconfirmed" }, new Date("2026-10-10T10:00:00Z")), "unconfirmed");
  const puja = events.find((e) => e.id === "bd-durga-puja-2026");
  assert.equal(daysUntil(puja, new Date("2026-10-10T06:00:00Z")), 6);
});

test("trending puts what is on now first, then the soonest", () => {
  const now = new Date("2026-10-10T06:00:00Z");
  const top = trending(events, now, undefined, 4);
  assert.equal(eventStatus(top[0], now), "live");
  const statuses = trending(events, now, undefined, events.length).map((e) => eventStatus(e, now));
  const order = { live: 0, upcoming: 1, unconfirmed: 2, past: 3 };
  for (let i = 1; i < statuses.length; i++) assert.ok(order[statuses[i - 1]] <= order[statuses[i]]);
  assert.ok(trending(events, now, "bd").every((e) => e.region === "bd"));
});

// Same rule as data/local/stops.ts: directory listings by country, plus highlights without a listing.
function stopIds(region) {
  const country = region === "wb" ? "IN" : "BD";
  const entries = JSON.parse(readFileSync(new URL("../data/pandals/entries.json", import.meta.url), "utf8"));
  const ids = new Set(entries.filter((p) => p.country === country).map((p) => p.id));
  for (const e of events) if (e.region === region && e.kind === "pandal" && !e.pandalId) ids.add(e.id);
  return ids;
}

test("route-maker stops are real stops of the right region; each region has traditions", () => {
  const all = { wb: stopIds("wb"), bd: stopIds("bd") };
  for (const [id, m] of Object.entries(STOP_META)) assert.ok(all[m.region].has(id), `${id} is a ${m.region} stop`);
  for (const r of ["wb", "bd"]) assert.ok(events.some((e) => e.id === FACTS[r].eventId), `fact for ${r} has a sourced event`);
  assert.ok(traditions.wb.length >= 3 && traditions.bd.length >= 3);
});

test("every start × vibe gives a full route that starts near home", () => {
  for (const p of START_PLACES) {
    const avail = stopIds(p.region);
    for (const v of VIBES) {
      const r = buildRoute(p.region, p.id, v.id, avail);
      assert.equal(r.stops.length, v.count, `${p.id}/${v.id} length`);
      assert.equal(new Set(r.stops).size, r.stops.length, `${p.id}/${v.id} unique`);
      assert.ok(r.stops.every((id) => STOP_META[id].region === p.region));
      if (v.id === "food") assert.equal(r.breaks.length, r.stops.length - 1);
      else assert.equal(r.breaks.length, 1);
    }
  }
  const wb = stopIds("wb");
  assert.equal(STOP_META[buildRoute("wb", "behala", "theme", wb).stops[0]].zone, "south");
  assert.equal(STOP_META[buildRoute("wb", "shyambazar", "theme", wb).stops[0]].zone, "north");
  assert.ok(buildRoute("wb", "behala", "lazy", wb).stops.every((id) => STOP_META[id].zone === "south"));
  assert.ok(buildRoute("wb", "behala", "heritage", wb).stops.includes("santosh-mitra-square"), "heritage pulls in a heritage stop one area away");
  assert.equal(STOP_META[buildRoute("bd", "olddhaka", "heritage", stopIds("bd")).stops[0]].zone, "old");
  assert.deepEqual(buildRoute("wb", "nowhere", "theme", wb), { stops: [], breaks: [] });
  const variants = new Set([0, 1, 2, 3, 4, 5].map((n) => buildRoute("wb", "behala", "theme", wb, n).stops.join()));
  assert.ok(variants.size > 1, "‘another route’ can change the route");
});

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
import { pujaPhase, inPujaMode, PUJA_2026, PUJA_MODE_WINDOW } from "../lib/puja-dates.ts";
import { autoTheme, THEME_BOOT_SCRIPT } from "../lib/theme.ts";
import { collections, getCollection } from "../data/pandals/collections.ts";
import { toVisits, toggleVisit, visitsFromQuery, visitsToQuery, VISITS_MAX } from "../lib/visits.ts";
import { bucketFor, crowdLevel, isDevice, isPandalId, rankBoard, waitLabel, fmtClock, kolkataDay } from "../lib/live-shared.ts";
import { distanceM, fmtDistance, inServiceArea } from "../lib/geo.ts";
import { GREETINGS, getGreeting, greetingForPhase } from "../data/play/greetings.ts";
import { cleanNick, resultShare, isGame, NICK_MAX } from "../lib/community-shared.ts";
import { fmtDate, fmtDateWithDay } from "../lib/dates.ts";

const chars = Object.keys(cast);
const graphemes = (s) => Array.from(new Intl.Segmenter(undefined, { granularity: "grapheme" }).segment(s));

test("possessive forms: Bengali and Latin names, both languages, skipped name", () => {
  assert.equal(possessive("তন্ময়", "bn"), "তন্ময়ের");
  assert.equal(possessive("পিয়া", "bn"), "পিয়ার");
  assert.equal(possessive("রিনি", "bn"), "রিনির");
  assert.equal(possessive("বিশ্বজিৎ", "bn"), "বিশ্বজিতের");
  assert.equal(possessive("Pintu", "bn"), "Pintu-র");
  assert.equal(possessive("Tanmoy", "bn"), "Tanmoy-র");
  assert.equal(possessive("Rahul", "bn"), "Rahul-এর");
  assert.equal(possessive("Pia", "bn"), "Pia-র");
  assert.equal(possessive("Pintu", "en"), "Pintu’s");
  assert.equal(possessive("James", "en"), "James’");
  assert.equal(possessive("তন্ময়", "en"), "তন্ময়’s");
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
  const of = possessive("তন্ময়", "bn");
  assert.equal(fill(pickBadge("bhog", 0).bn, { of }), "তন্ময়ের ভোগ খাওয়ার সরকারি লাইসেন্স");
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
  const names = ["তন্ময়", "Rini", "পিন্টু", "A very long nickname indeed", "Pia", "বাবাই"];
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
  const order = { live: 0, upcoming: 1, unconfirmed: 2, past: 3 };
  // Same rule as lib/events.ts: a live notice sorts after the upcoming items.
  const ranks = trending(events, now, undefined, events.length).map((e) => {
    const s = eventStatus(e, now);
    return s === "live" && e.kind === "notice" ? 1.5 : order[s];
  });
  for (let i = 1; i < ranks.length; i++) assert.ok(ranks[i - 1] <= ranks[i]);
  assert.notEqual(top[0].kind, "notice", "a standing notice never leads the list");
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

test("puja phase and Puja-mode theme follow the calendar", () => {
  assert.deepEqual(pujaPhase(new Date("2026-10-12T06:00:00Z"), "wb"), { kind: "before", days: 5, day: { id: "shashthi", bn: "ষষ্ঠী", en: "Shashthi" } });
  assert.equal(pujaPhase(new Date("2026-10-12T06:00:00Z"), "bd").days, 4);
  assert.equal(pujaPhase(new Date("2026-10-16T18:00:00Z"), "wb").kind, "before"); // 23:30 IST, 16 Oct
  assert.equal(pujaPhase(new Date("2026-10-16T20:00:00Z"), "wb").kind, "during"); // 01:30 IST, 17 Oct (Shashthi)
  assert.equal(pujaPhase(new Date("2026-10-19T06:00:00Z"), "wb").day.id, "ashtami");
  assert.equal(pujaPhase(new Date("2026-10-19T06:00:00Z"), "bd").day.id, "ashtami"); // BD: 19 Oct has no sourced tithi; Ashtami (18) carries over
  assert.equal(pujaPhase(new Date("2026-10-20T06:00:00Z"), "bd").day.id, "navami"); // Mahanabami holiday, 20 Oct
  assert.equal(pujaPhase(new Date("2026-10-22T06:00:00Z"), "wb").kind, "after");
  assert.ok(PUJA_2026.wb.shashthi > PUJA_2026.bd.shashthi);
  assert.equal(inPujaMode("2026-10-09"), false);
  assert.equal(inPujaMode("2026-10-10"), true);
  // lib/theme.ts keeps its own copy of the window; both must agree.
  assert.equal(autoTheme(PUJA_MODE_WINDOW.start), "sindoor");
  assert.equal(autoTheme(PUJA_MODE_WINDOW.end), "sindoor");
  assert.equal(autoTheme("2026-10-09"), "classic");
  assert.equal(autoTheme("2026-10-22"), "classic");
  assert.ok(THEME_BOOT_SCRIPT.includes("data-theme") && !THEME_BOOT_SCRIPT.includes("</script"));
});

test("landing-page collections cover every listing exactly once, in both languages", () => {
  const entries = JSON.parse(readFileSync(new URL("../data/pandals/entries.json", import.meta.url), "utf8"));
  for (const p of entries) {
    const hits = collections.filter((c) => c.match(p)).map((c) => c.slug);
    assert.deepEqual(hits.length, 1, `${p.id} belongs to exactly one collection (${hits.join(",")})`);
  }
  for (const c of collections) {
    for (const k of ["title", "h1", "lead", "description"]) assert.ok(c[k].bn && c[k].en, `${c.slug}.${k}`);
    assert.ok(c.faq.length >= 2 && c.faq.every((f) => f.q.bn && f.q.en && f.a.bn && f.a.en), `${c.slug} faq`);
    assert.ok(c.title.en.length <= 70, `${c.slug} title length ${c.title.en.length}`);
    assert.ok(c.description.en.length <= 170, `${c.slug} description length ${c.description.en.length}`);
  }
  assert.equal(getCollection("kolkata")?.region, "wb");
  assert.equal(getCollection("nope"), undefined);
  assert.equal(fmtDate("2026-10-17", "en", "2026-10-21"), "17–21 Oct");
  assert.equal(fmtDateWithDay("2026-10-17", "en"), "Saturday, 17 Oct");
  assert.equal(fmtDateWithDay("2026-10-21", "bn"), "বুধবার, ২১ অক্টোবর");
});

test("passport ticks: validation, toggling, link round-trip", () => {
  assert.deepEqual(toVisits(null), []);
  assert.deepEqual(toVisits([{ id: "Bad ID" }, { id: "ok-id", on: "2026-10-18" }, "ok-id", "another-one"]).map((v) => v.id), ["ok-id", "another-one"]);
  assert.equal(toVisits([{ id: "ok-id", on: "nope" }])[0].on.length, 10, "bad date falls back to today");
  const a = toggleVisit([], "sreebhumi-sporting-club", "2026-10-18");
  assert.deepEqual(a, [{ id: "sreebhumi-sporting-club", on: "2026-10-18" }]);
  assert.deepEqual(toggleVisit(a, "sreebhumi-sporting-club"), []);
  const many = Array.from({ length: VISITS_MAX + 5 }, (_, i) => ({ id: `p-${i}`, on: "2026-10-18" }));
  assert.equal(toggleVisit(many, "p-new").length, VISITS_MAX);
  assert.equal(visitsToQuery(a), "sreebhumi-sporting-club");
  assert.deepEqual(visitsFromQuery("a-b,c-d,,<x>").map((v) => v.id), ["a-b", "c-d"]);
});

test("live board helpers: buckets, validation, crowd level, ranking", () => {
  const t = new Date("2026-10-18T14:30:00Z");
  assert.equal(bucketFor("crowd", t), "2026-10-18T14");
  assert.equal(bucketFor("here", t), "2026-10-18T14");
  assert.equal(bucketFor("love", new Date("2026-10-18T20:00:00Z")), "2026-10-19", "love buckets follow the Kolkata day");
  assert.ok(isDevice("abcdefghijklmnop") && !isDevice("short") && !isDevice("has space in it 12345"));
  assert.ok(isPandalId("santosh-mitra-square") && !isPandalId("Santosh Mitra") && !isPandalId(""));
  assert.equal(crowdLevel(null), null);
  assert.equal(crowdLevel(1.2), 1);
  assert.equal(crowdLevel(2), 2);
  assert.equal(crowdLevel(2.6), 3);
  const board = {
    a: { crowd_n: 2, crowd_avg: 2, here_n: 0, love_today: 0 },
    b: { crowd_n: 0, crowd_avg: null, here_n: 3, love_today: 1 },
    c: { crowd_n: 0, crowd_avg: null, here_n: 0, love_today: 0 },
  };
  assert.deepEqual(rankBoard(board).map((x) => x.id), ["b", "a"], "check-ins outrank crowd reports; empty rows drop out");
});

test("greeting cards: every day bilingual with lines, and today's pick follows the calendar", () => {
  const validChars = Object.keys(cast);
  for (const g of GREETINGS) {
    assert.ok(g.lines.length >= 2 && g.lines.every((x) => x.bn && x.en), `${g.id} lines`);
    assert.ok(g.headline.bn.endsWith("!") && g.headline.en.endsWith("!"), `${g.id} headline ends with !`);
    assert.ok(validChars.includes(g.char), `${g.id} char`);
    assert.ok(g.tags.length >= 1 && g.tags.every((t) => /^[A-Za-z0-9]+$/.test(t)), `${g.id} tags`);
  }
  assert.equal(new Set(GREETINGS.map((g) => g.id)).size, GREETINGS.length);
  assert.equal(getGreeting("nope"), undefined);
  assert.equal(greetingForPhase(pujaPhase(new Date("2026-10-19T06:00:00Z"), "wb")), "ashtami");
  assert.equal(greetingForPhase(pujaPhase(new Date("2026-10-16T06:00:00Z"), "wb")), "panchami");
  assert.equal(greetingForPhase(pujaPhase(new Date("2026-10-22T06:00:00Z"), "wb")), "bijoya");
  assert.equal(greetingForPhase(pujaPhase(new Date("2026-11-05T06:00:00Z"), "wb")), "anytime");
  assert.equal(greetingForPhase(pujaPhase(new Date("2026-10-12T06:00:00Z"), "wb")), "anytime");
});

test("queue waits, clock times, Kolkata day and distances", () => {
  assert.equal(waitLabel(null), null);
  assert.equal(waitLabel(1), "~5");
  assert.equal(waitLabel(2.5), "15–30");
  assert.equal(waitLabel(4), "60+");
  assert.equal(fmtClock(540, "en"), "9:00 am");
  assert.equal(fmtClock(0, "en"), "12:00 am");
  assert.equal(fmtClock(765, "en"), "12:45 pm");
  assert.equal(fmtClock(540, "bn"), "সকাল ৯:০০");
  assert.equal(fmtClock(1125, "bn"), "সন্ধে ৬:৪৫");
  assert.equal(kolkataDay(new Date("2026-10-18T20:00:00Z")), "2026-10-19");
  // Sreebhumi (Lake Town) to Santosh Mitra Square (Sealdah): roughly 6 km.
  const d = distanceM({ lat: 22.605, lng: 88.405 }, { lat: 22.565877, lng: 88.365564 });
  assert.ok(d > 5000 && d < 7000, `distance ${d}`);
  assert.equal(fmtDistance(60, "en"), "100 m");
  assert.equal(fmtDistance(840, "bn"), "৮০০ মি");
  assert.equal(fmtDistance(2440, "en"), "2.4 km");
  assert.equal(fmtDistance(12400, "en"), "12 km");
  assert.ok(inServiceArea({ lat: 22.57, lng: 88.36 }) && inServiceArea({ lat: 23.72, lng: 90.39 }) && !inServiceArea({ lat: 51.5, lng: -0.1 }));
});

test("community helpers: nickname cleaning and result share", () => {
  assert.equal(cleanNick("  Rini  Das "), "Rini Das");
  assert.equal(cleanNick("<b>পিন্টু</b> 😀"), "bপিন্টুb");
  assert.equal(cleanNick(42), "");
  assert.ok(Array.from(cleanNick("x".repeat(80))).length <= NICK_MAX);
  assert.ok(isGame("puja-personality") && isGame("passport") && !isGame("Bad Game"));
  const stats = { "puja-personality": { "bhog-samrat": 30, "theme-da": 70 } };
  assert.deepEqual(resultShare(stats, "puja-personality", "bhog-samrat"), { n: 30, pct: 30 });
  assert.equal(resultShare(stats, "puja-personality", "nope"), null);
  assert.equal(resultShare(stats, "other", "x"), null);
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
  const heritage = buildRoute("wb", "behala", "heritage", wb).stops.map((id) => STOP_META[id]);
  assert.ok(heritage.some((m) => m.zone === "central" && m.tags.includes("heritage")), "heritage pulls in a heritage stop one area away");
  assert.ok(heritage.every((m) => m.tags.includes("heritage")), "all heritage stops match the vibe when enough exist");
  assert.equal(STOP_META[buildRoute("bd", "olddhaka", "heritage", stopIds("bd")).stops[0]].zone, "old");
  assert.deepEqual(buildRoute("wb", "nowhere", "theme", wb), { stops: [], breaks: [] });
  const variants = new Set([0, 1, 2, 3, 4, 5].map((n) => buildRoute("wb", "behala", "theme", wb, n).stops.join()));
  assert.ok(variants.size > 1, "‘another route’ can change the route");
});

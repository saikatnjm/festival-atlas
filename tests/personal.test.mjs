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
import { readExifGps } from "../lib/exif.ts";
import { ACTIVITY_MAX, toActivity } from "../lib/activity.ts";
import { checkCredentials, constantTimeEqual, makeSession, verifySession } from "../lib/admin-shared.ts";
import { cleanContact, cleanMessage, cleanPage, cleanTopic } from "../lib/feedback-shared.ts";
import { cleanPlace, toPlace } from "../lib/places-shared.ts";
import { COMMON_LINES, GREETINGS, anotherLine, getGreeting, greetingForPhase, linesFor } from "../data/play/greetings.ts";
import { regionFromTimeZone } from "../lib/region.ts";
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
  assert.equal(pujaPhase(new Date("2026-10-19T06:00:00Z"), "bd").day.id, "ashtami"); // BD Ashtami 19 Oct (Prothom Alo, 14 Oct)
  assert.equal(pujaPhase(new Date("2026-10-18T06:00:00Z"), "bd").day.id, "saptami"); // BD Saptami spans 17–18 Oct
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

test("greeting lines: enough variety, shared pool appended, random pick never repeats the current line", () => {
  for (const g of GREETINGS) {
    assert.ok(g.lines.length >= 8, `${g.id} has ${g.lines.length} lines`);
    const all = linesFor(g);
    assert.equal(all.length, g.lines.length + COMMON_LINES.length);
    assert.equal(new Set(all.map((x) => x.en)).size, all.length, `${g.id} duplicate lines`);
    for (const x of all) assert.ok(x.bn.length <= 110 && x.en.length <= 120, `${g.id} line too long for the card: ${x.en}`);
  }
  assert.ok(COMMON_LINES.length >= 10 && COMMON_LINES.every((x) => x.bn && x.en));
  for (let i = 0; i < 50; i++) assert.notEqual(anotherLine(12, 5), 5);
  assert.equal(anotherLine(1, 0), 0);
  assert.equal(anotherLine(3, 2, () => 0), 0, "a step of 1 wraps around");
  assert.equal(anotherLine(3, 0, () => 0.99), 2);
});

test("region guess from the phone's time zone", () => {
  assert.equal(regionFromTimeZone("Asia/Dhaka"), "bd");
  assert.equal(regionFromTimeZone("Asia/Kolkata"), "wb");
  assert.equal(regionFromTimeZone("Asia/Calcutta"), "wb");
  assert.equal(regionFromTimeZone("Europe/London"), null);
  assert.equal(regionFromTimeZone(undefined), null);
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

/** A minimal JPEG: SOI, one APP1 Exif segment (little-endian TIFF, IFD0 → GPS IFD), EOI. */
function jpegWithGps({ lat, lng, latRef = "N", lngRef = "E" }) {
  const tiff = new Uint8Array(128);
  const v = new DataView(tiff.buffer);
  tiff.set([0x49, 0x49], 0); // "II"
  v.setUint16(2, 42, true);
  v.setUint32(4, 8, true); // IFD0 offset
  v.setUint16(8, 1, true); // IFD0: one entry, the GPS IFD pointer
  v.setUint16(10, 0x8825, true);
  v.setUint16(12, 4, true);
  v.setUint32(14, 1, true);
  v.setUint32(18, 26, true);
  v.setUint32(22, 0, true); // no next IFD
  v.setUint16(26, 4, true); // GPS IFD: four entries
  let e = 28;
  const entry = (tag, type, count, write) => {
    v.setUint16(e, tag, true);
    v.setUint16(e + 2, type, true);
    v.setUint32(e + 4, count, true);
    write(e + 8);
    e += 12;
  };
  entry(0x0001, 2, 2, (o) => (tiff[o] = latRef.charCodeAt(0)));
  entry(0x0002, 5, 3, (o) => v.setUint32(o, 80, true));
  entry(0x0003, 2, 2, (o) => (tiff[o] = lngRef.charCodeAt(0)));
  entry(0x0004, 5, 3, (o) => v.setUint32(o, 104, true));
  v.setUint32(e, 0, true);
  const rational = (o, [n, d]) => {
    v.setUint32(o, n, true);
    v.setUint32(o + 4, d, true);
  };
  lat.forEach((r, i) => rational(80 + i * 8, r));
  lng.forEach((r, i) => rational(104 + i * 8, r));
  const app1 = 2 + 6 + tiff.length;
  const out = new Uint8Array(4 + app1 + 2);
  const o = new DataView(out.buffer);
  o.setUint16(0, 0xffd8);
  o.setUint16(2, 0xffe1);
  o.setUint16(4, app1);
  out.set([0x45, 0x78, 0x69, 0x66, 0, 0], 6); // "Exif\0\0"
  out.set(tiff, 12);
  o.setUint16(out.length - 2, 0xffd9);
  return out.buffer;
}

test("EXIF GPS: degrees/minutes/seconds, hemispheres, and junk", () => {
  // 22°34'23.4" N, 88°21'56" E: Santosh Mitra Square, give or take.
  const g = readExifGps(jpegWithGps({ lat: [[22, 1], [34, 1], [234, 10]], lng: [[88, 1], [21, 1], [56, 1]] }));
  assert.ok(g, "gps parsed");
  assert.ok(Math.abs(g.lat - 22.573167) < 1e-4 && Math.abs(g.lng - 88.365556) < 1e-4, JSON.stringify(g));
  const s = readExifGps(jpegWithGps({ lat: [[33, 1], [52, 1], [0, 1]], lng: [[151, 1], [12, 1], [0, 1]], latRef: "S", lngRef: "W" }));
  assert.ok(s && s.lat < -33 && s.lng < -151);
  assert.equal(readExifGps(jpegWithGps({ lat: [[0, 1], [0, 1], [0, 1]], lng: [[0, 1], [0, 1], [0, 1]] })), null, "0/0 is a missing fix");
  assert.equal(readExifGps(new Uint8Array([0x89, 0x50, 0x4e, 0x47]).buffer), null, "PNG");
  assert.equal(readExifGps(new Uint8Array([0xff, 0xd8, 0xff, 0xe0, 0x00, 0x04, 0x4a, 0x46, 0xff, 0xd9]).buffer), null, "JFIF only");
  assert.equal(readExifGps(jpegWithGps({ lat: [[22, 1], [0, 1], [0, 1]], lng: [[88, 1], [0, 1], [0, 1]] }).slice(0, 40)), null, "truncated");
  assert.equal(readExifGps(new ArrayBuffer(0)), null);
});

test("activity log validation and cap", () => {
  const list = toActivity([{ kind: "postcard", id: "x", at: 1 }, { kind: "bad", at: 2 }, { kind: "visit", at: "no" }, null, { kind: "play", at: 3, label: "ok", extra: 1 }]);
  assert.deepEqual(list, [
    { kind: "postcard", at: 1, id: "x" },
    { kind: "play", at: 3, label: "ok" },
  ]);
  const many = toActivity(Array.from({ length: ACTIVITY_MAX + 50 }, (_, i) => ({ kind: "visit", at: i })));
  assert.equal(many.length, ACTIVITY_MAX);
  assert.equal(many[0].at, 50, "oldest entries are dropped");
  assert.deepEqual(toActivity("nope"), []);
});

test("admin sessions: sign, verify, expire, tamper", async () => {
  const secret = "owner:correct-horse-battery";
  const now = 1_760_000_000_000;
  const token = await makeSession(secret, now);
  assert.match(token, /^\d{13}\.[0-9a-f]{64}$/);
  assert.equal(await verifySession(secret, token, now + 1000), true);
  assert.equal(await verifySession(secret, token, now + 13 * 3600 * 1000), false, "expired");
  assert.equal(await verifySession("other-secret", token, now), false, "wrong secret");
  assert.equal(await verifySession(secret, token.replace(/.$/, (c) => (c === "0" ? "1" : "0")), now), false, "tampered signature");
  assert.equal(await verifySession(secret, `${now + 999999999}.${token.split(".")[1]}`, now), false, "tampered expiry");
  assert.equal(await verifySession(secret, undefined, now), false);
  assert.equal(await verifySession("", token, now), false, "no secret configured");
  assert.ok(constantTimeEqual("শুভ ষষ্ঠী", "শুভ ষষ্ঠী") && !constantTimeEqual("a", "ab") && !constantTimeEqual("", "a") && constantTimeEqual("", ""));
  assert.equal(checkCredentials("owner", "correct-horse-battery", "owner", "correct-horse-battery"), true);
  assert.equal(checkCredentials("owner", "wrong", "owner", "correct-horse-battery"), false);
  assert.equal(checkCredentials("Owner", "correct-horse-battery", "owner", "correct-horse-battery"), false);
  assert.equal(checkCredentials("owner", "short", "owner", "short"), false, "password too short to be allowed");
  assert.equal(checkCredentials(null, "correct-horse-battery", "owner", "correct-horse-battery"), false);
});

test("feedback cleaning", () => {
  assert.equal(cleanTopic("puja-kali"), "puja-kali");
  assert.equal(cleanTopic(" BUG "), "bug");
  assert.equal(cleanTopic("x".repeat(41)), "general");
  assert.equal(cleanTopic(42), "general");
  assert.equal(cleanContact("  rini@example.com  "), "rini@example.com");
  assert.equal(cleanContact("ab"), null);
  assert.equal(cleanContact("x".repeat(200)).length, 120);
  assert.equal(cleanMessage("hi"), null);
  assert.equal(cleanMessage("line one\r\nline\u0000 two  "), "line one\nline two");
  assert.equal(cleanMessage("x".repeat(3000)).length, 2000);
  assert.equal(cleanPage("/bn/puja/sreebhumi-sporting-club?x=1"), "/bn/puja/sreebhumi-sporting-club?x=1");
  assert.equal(cleanPage("https://evil.example/"), null);
  assert.equal(cleanPage("/" + "a".repeat(300)), null);
});

test("community places: cleaning and row validation", () => {
  const ok = cleanPlace({ name: "  Behala  Nutan Dal ", area: "", city: "Kolkata", country: "IN", lat: 22.4987654321, lng: 88.3123456789, note: "theme: river" });
  assert.deepEqual(ok, { name: "Behala Nutan Dal", area: null, city: "Kolkata", country: "IN", lat: 22.498765, lng: 88.312346, note: "theme: river" });
  assert.equal(cleanPlace({ name: "ab", city: "Dhaka", country: "BD", lat: 23.7, lng: 90.4 }), null, "name too short");
  assert.equal(cleanPlace({ name: "Mandir", city: "Dhaka", country: "bd", lat: 23.7, lng: 90.4 }), null, "country must be two capitals");
  assert.equal(cleanPlace({ name: "Mandir", city: "Dhaka", country: "BD", lat: "23.7", lng: 90.4 }), null, "lat must be a number");
  assert.equal(cleanPlace({ name: "Mandir", city: "Dhaka", country: "BD", lat: 0, lng: 0 }), null, "0/0 is a missing fix");
  assert.equal(cleanPlace({ name: "Mandir", city: "Dhaka", country: "BD", lat: 91, lng: 90.4 }), null);
  assert.equal(cleanPlace("nope"), null);
  assert.equal(cleanPlace({ name: "x".repeat(100), city: "Dhaka", country: "BD", lat: 23.7, lng: 90.4 }).name.length, 80);
  assert.equal(toPlace({ id: 7, name: "Mandir", city: "Dhaka", country: "BD", lat: 23.7, lng: 90.4 }).id, 7);
  assert.equal(toPlace({ id: "7", name: "Mandir", city: "Dhaka", country: "BD", lat: 23.7, lng: 90.4 }), null);
  assert.equal(toPlace({ id: 7, name: "Mandir", city: "Dhaka", country: "BD", lat: 23.7, lng: 90.4, constructor: "x" }).name, "Mandir");
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

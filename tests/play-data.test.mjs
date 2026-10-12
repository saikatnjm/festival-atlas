import { test } from "node:test";
import assert from "node:assert/strict";
import * as quiz from "../data/play/quiz.ts";
import * as challenge from "../data/play/challenge.ts";
import * as bingo from "../data/play/bingo.ts";
import * as lines from "../data/play/lines.ts";
import { family, wit, epic, books } from "../data/play/stories.ts";
import { cast, castOrder } from "../data/play/cast.ts";
import { applyMeters, bingoTier, pathOutcome, scoreWeighted, rankWeighted, METER_START } from "../lib/play-logic.ts";

const quizzes = [{ meta: quiz.meta, scenes: quiz.scenes, results: quiz.results, order: castOrder }, family, wit, epic, books];
const modules = [...quizzes, challenge, bingo, lines];
const withResults = [...quizzes, challenge, bingo];
const BANGLA = /[\u0980-\u09FF]/;
const chars = (s) => [...s].length;
const LANGS = ["en", "bn"];

/** Every {en,bn} pair anywhere in a value: both non-empty, Bangla is Bangla. */
function checkL(v, where) {
  if (Array.isArray(v)) return v.forEach((x, i) => checkL(x, `${where}[${i}]`));
  if (v && typeof v === "object") {
    const keys = Object.keys(v);
    if (keys.length === 2 && keys.includes("en") && keys.includes("bn") && typeof v.en === "string") {
      assert.ok(v.en.trim(), `${where}.en empty`);
      assert.ok(v.bn.trim(), `${where}.bn empty`);
      assert.match(v.bn, BANGLA, `${where}.bn should contain Bangla`);
      return;
    }
    for (const k of keys) checkL(v[k], `${where}.${k}`);
  }
}

test("activity slugs are unique and URL-safe", () => {
  const slugs = modules.map((m) => m.meta.slug);
  assert.equal(new Set(slugs).size, slugs.length);
  for (const s of slugs) assert.match(s, /^[a-z0-9-]+$/);
});

test("all play content has both languages", () => {
  for (const m of modules) checkL({ ...m }, m.meta.slug);
  checkL(cast, "cast");
});

test("cast: six characters, distinct colours, valid hex, names in both languages", () => {
  assert.equal(castOrder.length, 6);
  assert.equal(new Set(castOrder.map((id) => cast[id].c1)).size, 6);
  for (const id of castOrder) {
    const c = cast[id];
    assert.equal(c.id, id);
    for (const f of ["c1", "c2", "c3", "skin"]) assert.match(c[f], /^#[0-9a-f]{6}$/i);
    for (const l of LANGS) assert.ok(c.name[l].trim());
  }
});

test("every activity's meta has a sensible search description in both languages", () => {
  for (const m of modules) {
    for (const l of LANGS) {
      const n = chars(m.meta.description[l]);
      assert.ok(n >= 50 && n <= (l === "en" ? 165 : 170), `${m.meta.slug}.${l} description length ${n}`);
    }
    assert.ok(m.meta.chars.length >= 1 && m.meta.chars.length <= 3);
    for (const id of m.meta.chars) assert.ok(cast[id], `unknown character ${id}`);
  }
});

test("every result has a character, mood, a 0-100 stat; ids are unique; copy fits the card", () => {
  const moods = new Set(["happy", "wow", "sleepy", "smug", "panic", "proud"]);
  for (const m of withResults) {
    const ids = m.results.map((r) => r.id);
    assert.equal(new Set(ids).size, ids.length, m.meta.slug);
    for (const r of m.results) {
      assert.match(r.id, /^[a-z0-9-]+$/);
      assert.ok(cast[r.char], `${r.id}: unknown character`);
      assert.ok(moods.has(r.mood), `${r.id}: unknown mood`);
      assert.ok(r.stat.value >= 0 && r.stat.value <= 100);
      for (const l of LANGS) {
        assert.ok(chars(r.blurb[l]) <= 220 && chars(r.title[l]) <= 44 && chars(r.punchline[l]) <= 80, `${r.id}.${l}: copy too long for the card`);
      }
    }
  }
});

test("quizzes: 3-5 scenes, 4 options each, every option scores real characters", () => {
  assert.ok(quizzes.length >= 5);
  for (const z of quizzes) {
    assert.ok(z.scenes.length >= 3 && z.scenes.length <= 5, z.meta.slug);
    for (const s of z.scenes) {
      assert.equal(s.options.length, 4);
      for (const o of s.options) {
        assert.ok(o.icon);
        const keys = Object.keys(o.score);
        assert.ok(keys.length >= 1);
        for (const k of keys) assert.ok(z.order.includes(k), `${z.meta.slug}: ${k} is not a result character`);
      }
    }
  }
});

test("quizzes: every result character can be the unique winner, and each has exactly one result", () => {
  for (const z of quizzes) {
    const winners = new Set();
    const walk = (i, picks) => {
      if (i === z.scenes.length) {
        const totals = Object.fromEntries(z.order.map((id) => [id, picks.reduce((n, p) => n + (p[id] ?? 0), 0)]));
        const top = Math.max(...Object.values(totals));
        const leaders = z.order.filter((id) => totals[id] === top);
        if (leaders.length === 1) winners.add(leaders[0]);
        const w = scoreWeighted(picks, z.order);
        assert.equal(rankWeighted(picks, z.order)[0], w, "rankWeighted must agree with scoreWeighted");
        assert.ok(z.results.some((r) => r.char === w), `${z.meta.slug}: no result for ${w}`);
        return;
      }
      for (const o of z.scenes[i].options) walk(i + 1, [...picks, o.score]);
    };
    walk(0, []);
    assert.deepEqual([...winners].sort(), [...z.order].sort(), z.meta.slug);
    assert.deepEqual(z.results.map((r) => r.char).sort(), [...z.order].sort(), z.meta.slug);
  }
});

test("challenge: 3-5 rounds, each option changes a meter, and it is flagged as fictional in both languages", () => {
  assert.ok(challenge.rounds.length >= 3 && challenge.rounds.length <= 5);
  assert.match(challenge.notice.bn, /কাল্পনিক/);
  assert.match(challenge.notice.en, /fictional/i);
  for (const r of challenge.rounds) {
    assert.ok(r.options.length >= 2);
    for (const o of r.options) assert.ok(Object.values(o.d).some((v) => v !== 0), o.label.en);
  }
});

test("challenge: every ending is reachable and every outcome has a result", () => {
  const seen = new Set();
  const walk = (i, m) => {
    if (i === challenge.rounds.length) return seen.add(pathOutcome(m));
    for (const o of challenge.rounds[i].options) walk(i + 1, applyMeters(m, o.d));
  };
  walk(0, { legs: METER_START, mood: METER_START, battery: METER_START });
  assert.deepEqual([...seen].sort(), challenge.results.map((r) => r.id).sort());
});

test("bingo: enough items for a card, no duplicates in either language, tiers exist", () => {
  assert.ok(bingo.items.length >= bingo.SIZE * bingo.SIZE);
  for (const l of LANGS) assert.equal(new Set(bingo.items.map((i) => i.text[l])).size, bingo.items.length, l);
  for (const i of bingo.items) assert.ok(i.icon && chars(i.text.bn) <= 34 && chars(i.text.en) <= 60, i.text.en);
  assert.ok(bingo.reactions.length >= 5);
  const ids = new Set(bingo.results.map((r) => r.id));
  for (let n = 1; n <= 2 * bingo.SIZE + 2; n++) assert.ok(ids.has(bingoTier(n)), `lines ${n}`);
});

test("generator: part lists are non-empty, unique per language, with plenty of combinations", () => {
  const lists = [lines.captionScenes, lines.captionPunchlines, lines.excuseOpeners, lines.excuseReasons, lines.reelShots, lines.reelTwists];
  for (const list of lists) {
    assert.ok(list.length >= 6);
    for (const l of LANGS) assert.equal(new Set(list.map((x) => x[l])).size, list.length, l);
  }
  assert.ok(lines.captionScenes.length * lines.captionPunchlines.length >= 36);
});

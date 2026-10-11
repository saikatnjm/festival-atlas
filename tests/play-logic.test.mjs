import { test } from "node:test";
import assert from "node:assert/strict";
import {
  METER_MAX,
  applyMeters,
  bingoTier,
  bn,
  countLines,
  mulberry32,
  pathOutcome,
  scoreWeighted,
  shuffleSeeded,
} from "../lib/play-logic.ts";

const grid = (...onIdx) => Array.from({ length: 16 }, (_, i) => onIdx.includes(i));

test("countLines: empty card has no lines", () => {
  assert.equal(countLines(grid(), 4), 0);
});

test("countLines: counts rows, columns and both diagonals", () => {
  assert.equal(countLines(grid(0, 1, 2, 3), 4), 1); // row
  assert.equal(countLines(grid(1, 5, 9, 13), 4), 1); // column
  assert.equal(countLines(grid(0, 5, 10, 15), 4), 1); // diagonal
  assert.equal(countLines(grid(3, 6, 9, 12), 4), 1); // anti-diagonal
  assert.equal(countLines(grid(0, 1, 2, 3, 4, 8, 12), 4), 2); // row + column sharing a cell
  assert.equal(countLines(grid(0, 1, 2, 4, 5, 6, 8, 9, 10), 4), 0); // 3x3 block is not a line
  assert.equal(countLines(grid(...Array.from({ length: 16 }, (_, i) => i)), 4), 10); // full card
});

test("shuffleSeeded: same seed gives same order, keeps every item once", () => {
  const items = Array.from({ length: 20 }, (_, i) => i);
  const a = shuffleSeeded(items, 42);
  assert.deepEqual(a, shuffleSeeded(items, 42));
  assert.notDeepEqual(a, shuffleSeeded(items, 43));
  assert.deepEqual([...a].sort((x, y) => x - y), items);
  assert.deepEqual(items, Array.from({ length: 20 }, (_, i) => i)); // input not mutated
});

test("mulberry32: deterministic and within [0, 1)", () => {
  const r1 = mulberry32(7);
  const r2 = mulberry32(7);
  for (let i = 0; i < 50; i++) {
    const v = r1();
    assert.equal(v, r2());
    assert.ok(v >= 0 && v < 1);
  }
});

test("scoreWeighted: highest total wins, ties go to earliest in order", () => {
  const order = ["a", "b", "c"];
  assert.equal(scoreWeighted([{ b: 2 }, { b: 1, a: 1 }], order), "b");
  assert.equal(scoreWeighted([{ c: 2 }, { b: 2 }], order), "b"); // tie b/c -> b comes first
  assert.equal(scoreWeighted([], order), "a");
  assert.equal(scoreWeighted([{ a: 1 }, { c: 3 }, { b: 1 }], order), "c");
});

test("applyMeters: adds effects and clamps between 0 and the maximum", () => {
  const start = { legs: 3, mood: 3, battery: 3 };
  assert.deepEqual(applyMeters(start, { legs: -1, mood: 2 }), { legs: 2, mood: 5, battery: 3 });
  assert.deepEqual(applyMeters(start, { battery: 10 }), { legs: 3, mood: 3, battery: METER_MAX });
  assert.deepEqual(applyMeters(start, { legs: -9 }), { legs: 0, mood: 3, battery: 3 });
  assert.deepEqual(start, { legs: 3, mood: 3, battery: 3 }); // input not mutated
});

test("pathOutcome: a zero meter decides the ending, otherwise the total does", () => {
  assert.equal(pathOutcome({ legs: 3, mood: 3, battery: 0 }), "dead-phone");
  assert.equal(pathOutcome({ legs: 0, mood: 3, battery: 3 }), "tired-legs");
  assert.equal(pathOutcome({ legs: 3, mood: 0, battery: 3 }), "lost-friends");
  assert.equal(pathOutcome({ legs: 0, mood: 0, battery: 0 }), "dead-phone"); // tie: battery first
  assert.equal(pathOutcome({ legs: 4, mood: 4, battery: 2 }), "route-master");
  assert.equal(pathOutcome({ legs: 3, mood: 3, battery: 3 }), "bhog-hero");
});

test("bn: converts digits to Bangla numerals and leaves other text alone", () => {
  assert.equal(bn(0), "০");
  assert.equal(bn(1234567890), "১২৩৪৫৬৭৮৯০");
  assert.equal(bn(-5), "-৫");
});

test("bingoTier: null until a line is complete", () => {
  assert.equal(bingoTier(0), null);
  assert.equal(bingoTier(1), "one-line");
  assert.equal(bingoTier(2), "few-lines");
  assert.equal(bingoTier(3), "few-lines");
  assert.equal(bingoTier(4), "bingo-boss");
  assert.equal(bingoTier(10), "bingo-boss");
});

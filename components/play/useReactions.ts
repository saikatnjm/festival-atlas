"use client";

import { useState } from "react";
import type { Mood } from "@/data/play/types";

const ORDER: Mood[] = ["wow", "smug", "happy", "proud", "panic", "sleepy"];

/**
 * Tap-to-react behaviour for a cartoon character: each tap changes the expression and shows the next
 * extra line (catchphrase, strength, weakness...). `taps` also restarts the CSS pop animation.
 */
export function useReactions(base: Mood, lines: string[]) {
  const [taps, setTaps] = useState(0);
  const start = Math.max(0, ORDER.indexOf(base));
  const mood = taps === 0 ? base : ORDER[(start + taps) % ORDER.length];
  const line = taps > 0 && lines.length > 0 ? lines[(taps - 1) % lines.length] : null;
  return { mood, line, taps, tap: () => setTaps((n) => n + 1) };
}

import type { CharId } from "./types";
import { castOrder } from "./cast";
import * as classic from "./quiz";
import { family, wit, epic, books } from "./stories";
import type { QuizScene } from "./quiz";
import type { ActivityMeta, PlayResult } from "./types";

export interface QuizData {
  meta: ActivityMeta;
  scenes: QuizScene[];
  results: PlayResult[];
  /** Tie-break order for scoring (earlier wins). */
  order: CharId[];
}

/** Every scored quiz, by activity slug. The runner component and the tests both read this. */
export const quizData: Record<string, QuizData> = {
  [classic.meta.slug]: { meta: classic.meta, scenes: classic.scenes, results: classic.results, order: castOrder },
  [family.meta.slug]: family,
  [wit.meta.slug]: wit,
  [epic.meta.slug]: epic,
  [books.meta.slug]: books,
};

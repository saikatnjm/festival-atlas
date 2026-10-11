import * as quiz from "./quiz";
import * as challenge from "./challenge";
import * as bingo from "./bingo";
import * as lines from "./lines";
import * as squad from "./squad";
import { family, wit, epic, books } from "./stories";
import type { ActivityMeta, PlayResult } from "./types";

export type { ActivityMeta, PlayResult } from "./types";

export interface Activity {
  meta: ActivityMeta;
  /** Shareable result pages exist for these. The generator has none. */
  results: PlayResult[];
}

export const activities: Activity[] = [
  { meta: quiz.meta, results: quiz.results },
  { meta: family.meta, results: family.results },
  { meta: challenge.meta, results: challenge.results },
  { meta: wit.meta, results: wit.results },
  { meta: epic.meta, results: epic.results },
  { meta: books.meta, results: books.results },
  { meta: bingo.meta, results: bingo.results },
  { meta: lines.meta, results: [] },
  { meta: squad.meta, results: [] },
];

export const getActivity = (slug: string): Activity | undefined =>
  activities.find((a) => a.meta.slug === slug);

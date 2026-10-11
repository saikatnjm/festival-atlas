import type { L } from "@/lib/i18n";

export type CharId = "detective" | "bhog" | "selfie" | "broke" | "excuse" | "sleepy" | "gopal" | "bagha" | "hansjaru";
export type Mood = "happy" | "wow" | "sleepy" | "smug" | "panic" | "proud";
export type Pattern = "dots" | "rays" | "stripes" | "checks";

/** One member of the "Puja Cartoon Universe" cast: original Puja types plus public-domain folk and Ray-family literary figures (our own drawings). */
export interface Character {
  id: CharId;
  /** Display name per language (the English one is a transliteration of the Bangla). */
  name: L;
  role: L;
  catchphrase: L;
  strength: L;
  weakness: L;
  /** Main colour (illustration + result-card panel). */
  c1: string;
  /** Light tint of the main colour (result-card paper). */
  c2: string;
  /** Darker shade of the main colour, for clothes detail. */
  c3: string;
  skin: string;
  pattern: Pattern;
}

export interface PlayResult {
  id: string;
  char: CharId;
  mood: Mood;
  title: L;
  punchline: L;
  blurb: L;
  /** A playful statistic, shown as a labelled bar. */
  stat: { label: L; value: number };
}

export type ActivityKind = "quiz" | "challenge" | "bingo" | "generator" | "group";

export interface ActivityMeta {
  slug: string;
  kind: ActivityKind;
  title: L;
  tagline: L;
  /** Short label on the result card sticker. */
  kicker: L;
  /** Optional note shown with results (e.g. that a game is fictional). */
  note?: L;
  /** Quiz intro bubble (defaults to the shared quiz intro). */
  intro?: L;
  /** Quiz share text with a {title} placeholder (defaults to the shared one). */
  share?: L;
  /** Used for the page meta description. */
  description: L;
  /** Characters shown on the activity's share-preview image. */
  chars: CharId[];
}

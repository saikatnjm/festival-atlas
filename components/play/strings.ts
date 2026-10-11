import type { Dict } from "@/data/i18n";

/** The slice of the dictionary the interactive games need (keeps the client payload small). */
export type PlayStrings = Pick<Dict, "game" | "share" | "card" | "result" | "play">;

export const playStrings = (t: Dict): PlayStrings => ({
  game: t.game,
  share: t.share,
  card: t.card,
  result: t.result,
  play: t.play,
});

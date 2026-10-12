"use client";

import { useMemo } from "react";
import { BADGES, TRAITS, fill } from "@/data/play/personal";
import { meta, results } from "@/data/play/quiz";
import type { PlayStrings } from "@/components/play/strings";
import ResultCard from "@/components/play/ResultCard";
import type { Lang } from "@/lib/i18n";
import { cleanName, possessive } from "@/lib/profile";
import type { CardData } from "@/lib/share";
import { useProfile } from "@/lib/use-profile";

const HINT = { bn: "এরকম একটা কার্ড, তোমার নামে। ৩০ সেকেন্ড লাগে।", en: "A card like this, with your name on it. Takes 30 seconds." };

/** A sample result card in the hero, so people see what they get before they tap. Uses the player's name if set. */
export default function HeroCard({ lang, s }: { lang: Lang; s: PlayStrings }) {
  const { profile } = useProfile();
  const name = cleanName(profile.name);
  const card: CardData = useMemo(() => {
    const r = results.find((x) => x.char === "bhog") ?? results[0];
    return {
      lang,
      char: r.char,
      mood: r.mood,
      kicker: meta.kicker[lang],
      owner: fill(BADGES[r.char][0][lang], { of: possessive(name, lang) }),
      title: r.title[lang],
      punchline: r.punchline[lang],
      traits: [TRAITS[r.char][0][lang], TRAITS.selfie[0][lang]],
    };
  }, [lang, name]);
  return (
    <div className="hero-card">
      <ResultCard card={card} s={s} />
      <p className="hero-card-hint">{HINT[lang]}</p>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { activities } from "@/data/play";
import { fun } from "@/data/i18n/fun";
import { CHAR_EMOJI, VERDICTS, duoLine, fill, pickBadge, traitsFor } from "@/data/play/personal";
import type { CharId } from "@/data/play/types";
import { withLang } from "@/lib/i18n";
import { cleanName, possessive } from "@/lib/profile";
import { copyText, shareLink, type CardData } from "@/lib/share";
import { useProfile } from "@/lib/use-profile";
import ResultCard from "./ResultCard";
import ShareBar from "./ShareBar";
import type { PlayStrings } from "./strings";

interface Props {
  s: PlayStrings;
  /** Slug of the activity this result belongs to. */
  slug: string;
  card: CardData;
  /** Language-less site path that identifies this result (a result page, or the activity with params). */
  sharePath: string;
  shareText: string;
  /** Inline play: restart handler. Omit on static result pages to link to the activity instead. */
  onAgain?: () => void;
  againLabel?: string;
  /** Optional second action next to "play again" (e.g. show the runner-up character). */
  extra?: { label: string; onClick: () => void };
  /** Generator output: adds a "copy the text" button. */
  copyLabel?: string;
  copyValue?: string;
  note?: string;
  /**
   * The player's own result (not a shared/static page): personalise it with the optional profile.
   * `chars` = the character each choice leaned to, in play order; `seed` comes from the choices.
   */
  personal?: { chars?: readonly CharId[]; seed: number; traits?: boolean };
}

/** The result id when the share path is a result page (/play/<slug>/r/<id>). */
function resultIdOf(path: string): string | null {
  const m = /\/r\/([\w-]+)$/.exec(path);
  return m ? m[1] : null;
}

export default function ResultPanel({ s, slug, card, sharePath, shareText, onAgain, againLabel, extra, copyLabel, copyValue, note, personal }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [artKey, setArtKey] = useState(0);
  const [salt, setSalt] = useState(0);
  const [vs, setVs] = useState<{ name: string; title: string; char: CharId } | null>(null);
  const [duelMsg, setDuelMsg] = useState("");
  const { profile } = useProfile();
  const lang = card.lang;
  const others = activities.filter((a) => a.meta.slug !== slug);
  const getArt = useCallback(() => ref.current?.querySelector(".cx-card-art svg")?.outerHTML ?? null, []);
  const onArtChange = useCallback(() => setArtKey((n) => n + 1), []);
  const resultId = resultIdOf(sharePath);
  const name = cleanName(profile.name);
  // Runners pass `personal` as a fresh object each render: depend on its contents, not its identity.
  const isPersonal = Boolean(personal);
  const pSeed = personal?.seed ?? 0;
  const pTraits = personal?.traits !== false;
  const pChars = (personal?.chars ?? []).join(",");

  // A friend's challenge (?vs=Name&vr=resultId) travels in the activity URL.
  useEffect(() => {
    if (!isPersonal) return;
    const q = new URLSearchParams(window.location.search);
    const vsName = cleanName(q.get("vs"));
    const vr = q.get("vr");
    const res = activities.find((a) => a.meta.slug === slug)?.results.find((r) => r.id === vr);
    if (vsName && res) setVs({ name: vsName, title: res.title[lang], char: res.char });
  }, [isPersonal, slug, lang]);

  const cardKey = JSON.stringify(card);
  const shown: CardData = useMemo(() => {
    if (!isPersonal) return card;
    const badge = pickBadge(card.char, pSeed + salt);
    const chars = (pChars ? pChars.split(",") : []) as CharId[];
    return {
      ...card,
      kicker: profile.city ? `${card.kicker} · ${profile.city}` : card.kicker,
      owner: fill(badge[lang], { of: possessive(name, lang) }),
      traits: pTraits ? traitsFor(card.char, chars, profile).map((t) => t[lang]) : undefined,
      verdict: name ? fill(VERDICTS[card.char][lang], { name }) : undefined,
    };
  }, [cardKey, isPersonal, pSeed, pTraits, pChars, salt, profile, name, lang]);

  // Personal result links carry the name only when the player gave one (?from=), so recipients see who sent it.
  const path = personal && name && resultId ? `${sharePath}?from=${encodeURIComponent(name)}` : sharePath;

  const onChallenge = async () => {
    if (!resultId) return;
    const q = new URLSearchParams({ vr: resultId });
    if (name) q.set("vs", name);
    const url = new URL(withLang(lang, `/play/${slug}?${q.toString()}`), window.location.origin).toString();
    const challenge = `${CHAR_EMOJI[card.char]} ${fill(fun.duel.challengeText[lang], { name: name || fun.duel.friend[lang], title: card.title })}`;
    const outcome = await shareLink({ title: `${card.title} · Festival Atlas`, text: challenge, url });
    if (outcome === "copied") setDuelMsg(fun.duel.copied[lang]);
    else if (outcome === "failed") setDuelMsg((await copyText(url)) ? fun.duel.copied[lang] : s.share.copyFailed);
  };

  // Share text leads with the character's emoji so it stands out in a chat.
  const text = `${CHAR_EMOJI[card.char]} ${shareText}`;

  return (
    <section className="cx-result" aria-label={s.play.resultAria}>
      {!onAgain ? (
        // A friend opened a shared result: the way in should be the first thing they see.
        <p className="cx-share-row cx-play-too">
          <Link className="cx-btn cx-btn-big" href={withLang(lang, `/play/${slug}`)}>
            {fun.duel.playToo[lang]}
          </Link>
        </p>
      ) : null}
      {vs ? (
        <div className="cx-duel" role="status">
          <p className="cx-duel-vs">{fill(fun.duel.vs[lang], { a: name || fun.duel.you[lang], b: vs.name })}</p>
          <p>
            <b>{name || fun.duel.you[lang]}:</b> {card.title} · <b>{vs.name}:</b> {vs.title}
          </p>
          <p>{fill(duoLine(card.char, vs.char)[lang], { a: name || fun.duel.you[lang], b: vs.name })}</p>
        </div>
      ) : null}
      <div ref={ref}>
        <ResultCard key={`${card.char}|${card.title}`} card={shown} s={s} onArtChange={onArtChange} />
      </div>
      {note ? <p className="cx-note">{note}</p> : null}
      <ShareBar
        s={s}
        path={withLang(lang, path)}
        title={`${shown.owner ?? card.title} · Festival Atlas`}
        text={text}
        card={shown}
        getArt={getArt}
        artKey={artKey}
        copyLabel={copyLabel}
        copyValue={copyValue}
      />
      <p className="cx-share-row">
        {onAgain ? (
          <button type="button" className="cx-btn" onClick={onAgain}>
            {againLabel ?? s.result.again}
          </button>
        ) : (
          <Link className="cx-btn" href={withLang(lang, `/play/${slug}`)}>
            {s.play.playYourself}
          </Link>
        )}
        {personal ? (
          <button type="button" className="cx-btn cx-btn-light" onClick={() => setSalt((n) => n + 1)}>
            {fun.card.newTitle[lang]}
          </button>
        ) : null}
        {extra ? (
          <button type="button" className="cx-btn cx-btn-light" onClick={extra.onClick}>
            {extra.label}
          </button>
        ) : null}
        {personal && resultId ? (
          <button type="button" className="cx-btn cx-btn-light" onClick={onChallenge}>
            {fun.duel.challenge[lang]}
          </button>
        ) : null}
      </p>
      {personal && resultId ? (
        <p className="cx-note" role="status">
          {duelMsg || fun.duel.note[lang]}
        </p>
      ) : null}
      {personal && slug !== "puja-squad" ? (
        <p className="cx-nudge">
          <Link href={withLang(lang, "/play/puja-squad")}>{fun.squad.nudge[lang]}</Link>
        </p>
      ) : null}
      <h3 className="cx-h3">{s.play.moreGames}</h3>
      <ul className="link-list">
        {others.map((a) => (
          <li key={a.meta.slug}>
            <Link href={withLang(lang, `/play/${a.meta.slug}`)}>{a.meta.title[lang]}</Link>
          </li>
        ))}
        <li>
          <Link href={withLang(lang, "/puja")}>{s.play.seePandals}</Link>
        </li>
      </ul>
    </section>
  );
}

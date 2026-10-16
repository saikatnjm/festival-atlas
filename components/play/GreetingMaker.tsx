"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { fun } from "@/data/i18n/fun";
import { GREETINGS, anotherLine, getGreeting, greetingForPhase, linesFor, type GreetingDay } from "@/data/play/greetings";
import { fill } from "@/data/play/personal";
import { track } from "@/lib/analytics";
import { withLang, type Lang } from "@/lib/i18n";
import { cleanName, NAME_MAX } from "@/lib/profile";
import { pujaPhase } from "@/lib/puja-dates";
import { guessRegion } from "@/lib/region";
import type { CardData } from "@/lib/share";
import { useProfile } from "@/lib/use-profile";
import ResultCard from "./ResultCard";
import ShareBar from "./ShareBar";
import type { PlayStrings } from "./strings";

const isDay = (v: unknown): v is GreetingDay => typeof v === "string" && GREETINGS.some((g) => g.id === v);

/** Daily Puja greeting cards with the sender's (and optionally the recipient's) name, ready to share. */
export default function GreetingMaker({ lang, s }: { lang: Lang; s: PlayStrings }) {
  const G = fun.greet;
  const { profile, ready } = useProfile();
  const [day, setDay] = useState<GreetingDay>("anytime");
  const [line, setLine] = useState(0);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fromLink, setFromLink] = useState(false);
  const [artKey, setArtKey] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const getArt = useCallback(() => ref.current?.querySelector(".cx-card-art svg")?.outerHTML ?? null, []);
  const onArtChange = useCallback(() => setArtKey((n) => n + 1), []);

  // Start from a shared link (?d=&l=&n=&to=) or from today's tithi for the saved region.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const d = q.get("d");
    if (isDay(d)) {
      setDay(d);
      const l = parseInt(q.get("l") ?? "", 10);
      setLine(Number.isFinite(l) && l > 0 ? l : 0);
      const n = cleanName(q.get("n"));
      if (n) {
        setFrom(n);
        setFromLink(true);
      }
      setTo(cleanName(q.get("to")));
      return;
    }
    // Saved region, else the phone's time zone (Asia/Dhaka → Bangladesh), else West Bengal.
    setDay(greetingForPhase(pujaPhase(new Date(), guessRegion())));
  }, []);
  // My own name from the profile once it has loaded, unless the link carried the sender's. (Not keyed on
  // `from`, so clearing the field doesn't refill it.)
  useEffect(() => {
    if (ready && !fromLink) setFrom((f) => f || profile.name || "");
  }, [ready, fromLink, profile.name]);

  const g = getGreeting(day) ?? GREETINGS[GREETINGS.length - 1];
  const lines = useMemo(() => linesFor(g), [g]);
  const li = line % lines.length;
  const sender = cleanName(from);
  const recipient = cleanName(to);
  const headline = recipient ? `${g.headline[lang].replace(/!$/, "")}, ${recipient}!` : g.headline[lang];

  const card: CardData = useMemo(
    () => ({
      lang,
      char: g.char,
      mood: g.mood,
      kicker: `${G.kicker[lang]} · ${g.icon} ${g.name[lang]}`,
      owner: sender ? fill(G.from[lang], { name: sender }) : undefined,
      title: headline,
      punchline: lines[li][lang],
    }),
    [lang, g, lines, li, sender, headline, G],
  );

  const query = new URLSearchParams({ d: g.id, l: String(li) });
  if (sender) query.set("n", sender);
  if (recipient) query.set("to", recipient);
  const shareText = `${headline} ${lines[li][lang]} ${g.tags.map((t) => `#${t}`).join(" ")}`;

  const makeOwn = () => {
    setFromLink(false);
    setFrom(cleanName(profile.name));
    setTo("");
    setLine(0);
    window.history.replaceState(null, "", window.location.pathname);
  };

  return (
    <div className="cx-stage greet">
      {fromLink ? (
        <p className="cx-duel" role="status">
          {fill(G.viewing[lang], { name: sender })}{" "}
          <button type="button" className="cx-link-btn" onClick={makeOwn}>
            {G.makeOwn[lang]}
          </button>
        </p>
      ) : null}
      <div className="cx-chips" role="group" aria-label={G.pickDay[lang]}>
        {GREETINGS.map((x) => (
          <button
            key={x.id}
            type="button"
            className="cx-chip"
            aria-pressed={day === x.id}
            onClick={() => {
              setDay(x.id);
              setLine(0);
            }}
          >
            {x.icon} {x.name[lang]}
          </button>
        ))}
      </div>
      <div className="greet-fields">
        <label className="cx-field">
          <span>{G.fromLabel[lang]}</span>
          <input className="cx-input" type="text" maxLength={NAME_MAX * 3} placeholder={G.fromPh[lang]} value={from} onChange={(e) => setFrom(e.target.value)} />
        </label>
        <label className="cx-field">
          <span>{G.toLabel[lang]}</span>
          <input className="cx-input" type="text" maxLength={NAME_MAX * 3} placeholder={G.toPh[lang]} value={to} onChange={(e) => setTo(e.target.value)} />
        </label>
      </div>
      <section className="cx-result" aria-label={G.cardAria[lang]}>
        <div ref={ref}>
          <ResultCard key={`${g.id}|${li}|${sender}|${recipient}`} card={card} s={s} onArtChange={onArtChange} />
        </div>
        <p className="cx-share-row">
          <button
            type="button"
            className="cx-btn cx-btn-light"
            onClick={() => {
              // A random different line, not the next one in order.
              setLine((n) => anotherLine(lines.length, n % lines.length));
              track("greeting_line", { day: g.id });
            }}
          >
            {G.anotherLine[lang]}
          </button>
        </p>
        <ShareBar
          s={s}
          path={`${withLang(lang, "/greetings")}?${query.toString()}`}
          title={`${headline} · ${s.card.brand}`}
          text={shareText}
          card={card}
          getArt={getArt}
          artKey={artKey}
        />
        <p className="cx-note">{G.note[lang]}</p>
      </section>
    </div>
  );
}

"use client";

import { useEffect, useId, useState } from "react";
import { fun } from "@/data/i18n/fun";
import { SQUAD_MAX, SQUAD_MIN, assignSquad, fill } from "@/data/play/personal";
import { meta } from "@/data/play/squad";
import type { Lang } from "@/lib/i18n";
import { NAME_MAX, cleanName } from "@/lib/profile";
import { useProfile } from "@/lib/use-profile";
import Bubble from "./Bubble";
import ResultPanel from "./ResultPanel";
import Character from "./art/Character";
import type { PlayStrings } from "./strings";

/** Query string that fully describes a squad, so a shared link shows recipients the same card. */
function squadQuery(names: string[], salt: number): string {
  const q = new URLSearchParams();
  for (const n of names) q.append("n", n);
  if (salt) q.set("k", String(salt));
  return q.toString();
}

export default function PujaSquad({ lang, s }: { lang: Lang; s: PlayStrings }) {
  const q = fun.squad;
  const id = useId();
  const { profile, ready } = useProfile();
  const [names, setNames] = useState<string[]>(["", ""]);
  const [done, setDone] = useState<{ names: string[]; salt: number } | null>(null);
  const [error, setError] = useState("");

  // A shared link (?n=…&n=…&k=…) opens straight on the same squad card.
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const fromUrl = p.getAll("n").map(cleanName).filter(Boolean).slice(0, SQUAD_MAX);
    const salt = Math.max(0, Math.min(999, Number.parseInt(p.get("k") ?? "0", 10) || 0));
    if (fromUrl.length >= SQUAD_MIN) {
      setNames(fromUrl);
      setDone({ names: fromUrl, salt });
    }
  }, []);
  // Pre-fill the first slot with the player's own (optional) name.
  useEffect(() => {
    if (ready && profile.name) setNames((n) => (n[0] ? n : [profile.name ?? "", ...n.slice(1)]));
  }, [ready, profile.name]);

  const show = (list: string[], salt: number) => {
    setDone({ names: list, salt });
    window.history.replaceState(null, "", `?${squadQuery(list, salt)}`);
  };

  const make = () => {
    const list = names.map(cleanName).filter(Boolean).slice(0, SQUAD_MAX);
    if (list.length < SQUAD_MIN) return setError(q.needTwo[lang]);
    setError("");
    show(list, 0);
  };

  if (done) {
    const squad = assignSquad(done.names, done.salt);
    return (
      <ResultPanel
        s={s}
        slug={meta.slug}
        card={{
          lang,
          char: "bagha",
          mood: "proud",
          kicker: q.kicker[lang],
          title: squad.name[lang],
          punchline: squad.line[lang],
          list: squad.members.map((m) => `${m.name}: ${m.title[lang]}`),
        }}
        sharePath={`/play/${meta.slug}?${squadQuery(done.names, done.salt)}`}
        shareText={q.shareText[lang]}
        onAgain={() => show(done.names, (done.salt + 1) % 1000)}
        againLabel={q.reshuffle[lang]}
        extra={{
          label: q.edit[lang],
          onClick: () => {
            setDone(null);
            window.history.replaceState(null, "", window.location.pathname);
          },
        }}
        note={q.note[lang]}
      />
    );
  }

  return (
    <form
      className="cx-stage"
      onSubmit={(e) => {
        e.preventDefault();
        make();
      }}
    >
      <div className="cx-squad-art" aria-hidden="true">
        <Character id="bagha" mood="happy" />
        <Character id="bhog" mood="smug" />
        <Character id="selfie" mood="wow" />
      </div>
      <Bubble>{q.intro[lang]}</Bubble>
      <ol className="cx-squad-inputs">
        {names.map((n, i) => (
          <li key={i}>
            <label className="visually-hidden" htmlFor={`${id}-${i}`}>
              {fill(q.friendPh[lang], { n: String(i + 1) })}
            </label>
            <input
              id={`${id}-${i}`}
              className="cx-input"
              type="text"
              autoComplete="off"
              maxLength={NAME_MAX * 3}
              placeholder={fill(q.friendPh[lang], { n: String(i + 1) })}
              value={n}
              onChange={(e) => setNames((list) => list.map((x, j) => (j === i ? e.target.value : x)))}
            />
            {names.length > SQUAD_MIN ? (
              <button type="button" className="cx-link-btn" onClick={() => setNames((list) => list.filter((_, j) => j !== i))}>
                {q.remove[lang]}
              </button>
            ) : null}
          </li>
        ))}
      </ol>
      {names.length < SQUAD_MAX ? (
        <button type="button" className="cx-btn cx-btn-light" onClick={() => setNames((list) => [...list, ""])}>
          + {q.add[lang]}
        </button>
      ) : null}
      <button type="submit" className="cx-btn cx-btn-big">
        {q.make[lang]}
      </button>
      <p className="cx-note" role="status">
        {error || q.note[lang]}
      </p>
    </form>
  );
}

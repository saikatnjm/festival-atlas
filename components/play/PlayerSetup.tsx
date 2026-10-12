"use client";

import { useEffect, useId, useState } from "react";
import { fun } from "@/data/i18n/fun";
import { ACTIVITY_INFO, MOOD_INFO, ROLE_INFO, fill, type OptionInfo } from "@/data/play/personal";
import type { Lang } from "@/lib/i18n";
import { ACTIVITY_IDS, CITY_MAX, MOOD_IDS, NAME_MAX, ROLE_IDS, markAsked, wasAsked, type Profile } from "@/lib/profile";
import { useProfile } from "@/lib/use-profile";

/**
 * Optional name/nickname prompt shown when a game opens (never on the home page). Skippable;
 * once answered or skipped it collapses into a one-line "Playing as …" bar.
 */
export default function PlayerSetup({ lang }: { lang: Lang }) {
  const { profile, ready, update } = useProfile();
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<Profile>({});
  const id = useId();
  const m = fun.me;

  useEffect(() => {
    // Decide once, when the stored profile has loaded.
    if (!ready) return;
    const wantsEdit = new URLSearchParams(window.location.search).get("me") === "1"; // header name chip
    setOpen(wantsEdit || (!profile.name && !wasAsked()));
  }, [ready]);
  useEffect(() => {
    if (open) setDraft(profile);
  }, [open]);

  if (!ready) return null;

  const focusGame = () => {
    window.setTimeout(() => document.querySelector<HTMLElement>(".cx-stage .cx-btn, .cx-stage button")?.focus(), 50);
  };
  const close = (save: boolean) => {
    if (save) update(draft);
    markAsked();
    setOpen(false);
    focusGame();
  };

  if (!open) {
    return (
      <p className="cx-me-bar">
        <span>{profile.name ? fill(m.playingAs[lang], { name: profile.name }) : m.playingAnon[lang]}</span>
        <button type="button" className="cx-link-btn" onClick={() => setOpen(true)}>
          {m.change[lang]}
        </button>
      </p>
    );
  }

  const chips = <K extends string>(label: string, ids: readonly K[], info: Record<K, OptionInfo>, key: "activity" | "role" | "mood") => (
    <fieldset className="cx-field">
      <legend>{label}</legend>
      <div className="cx-chips">
        {ids.map((k) => {
          const on = draft[key] === k;
          return (
            <button
              key={k}
              type="button"
              className="cx-chip"
              aria-pressed={on}
              onClick={() => setDraft((d) => ({ ...d, [key]: on ? undefined : k }) as Profile)}
            >
              <span aria-hidden="true">{info[k].icon}</span> {info[k].label[lang]}
            </button>
          );
        })}
      </div>
    </fieldset>
  );

  return (
    <form
      className="cx-me"
      aria-labelledby={`${id}-t`}
      onSubmit={(e) => {
        e.preventDefault();
        close(true);
      }}
    >
      <h2 id={`${id}-t`} className="cx-h3">
        {m.askTitle[lang]}
      </h2>
      <p className="cx-note">{m.askHint[lang]}</p>
      <label className="cx-field" htmlFor={`${id}-n`}>
        <span>{m.nameLabel[lang]}</span>
        <input
          id={`${id}-n`}
          className="cx-input"
          type="text"
          autoComplete="nickname"
          maxLength={NAME_MAX * 3}
          placeholder={m.namePh[lang]}
          value={draft.name ?? ""}
          onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))}
        />
      </label>
      <details className="cx-more">
        <summary>{m.more[lang]}</summary>
        <label className="cx-field" htmlFor={`${id}-c`}>
          <span>{m.city[lang]}</span>
          <input
            id={`${id}-c`}
            className="cx-input"
            type="text"
            autoComplete="off"
            maxLength={CITY_MAX * 3}
            placeholder={m.cityPh[lang]}
            value={draft.city ?? ""}
            onChange={(e) => setDraft((d) => ({ ...d, city: e.target.value }))}
          />
        </label>
        {chips(m.activity[lang], ACTIVITY_IDS, ACTIVITY_INFO, "activity")}
        {chips(m.role[lang], ROLE_IDS, ROLE_INFO, "role")}
        {chips(m.mood[lang], MOOD_IDS, MOOD_INFO, "mood")}
      </details>
      <p className="cx-share-row">
        <button type="submit" className="cx-btn">
          {m.go[lang]}
        </button>
        <button type="button" className="cx-btn cx-btn-light" onClick={() => close(false)}>
          {m.skip[lang]}
        </button>
      </p>
      <p className="cx-note">
        {m.privacy[lang]}{" "}
        {Object.keys(profile).length > 0 ? (
          <button
            type="button"
            className="cx-link-btn"
            onClick={() => {
              update({});
              setDraft({});
            }}
          >
            {m.forget[lang]}
          </button>
        ) : null}
      </p>
    </form>
  );
}

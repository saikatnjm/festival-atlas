"use client";

import { useEffect, useMemo, useRef, useState, type ChangeEvent } from "react";
import { useNearMe } from "@/components/live/useNearMe";
import type { PlayStrings } from "@/components/play/strings";
import { fun } from "@/data/i18n/fun";
import { GREETINGS, getGreeting, greetingForPhase } from "@/data/play/greetings";
import { fill } from "@/data/play/personal";
import { logActivity } from "@/lib/activity";
import { track } from "@/lib/analytics";
import { fmtDate } from "@/lib/dates";
import { readExifGps } from "@/lib/exif";
import { distanceM, inServiceArea, type LatLng } from "@/lib/geo";
import { num, withLang, type Lang } from "@/lib/i18n";
import { POSTCARD_EXT, POSTCARD_TYPE, loadPhoto, releasePhoto, renderPostcard } from "@/lib/postcard";
import { NAME_MAX, cleanName } from "@/lib/profile";
import { localDate, pujaPhase } from "@/lib/puja-dates";
import { CARD_FORMATS, canShareImage, copyText, downloadBlob, shareImage, shareLink, type CardFormat } from "@/lib/share";
import { useHost } from "@/lib/use-host";
import { useProfile } from "@/lib/use-profile";
import { useVisits } from "@/lib/use-visits";

/** Slim pandal row for the picker (built server-side from the directory). */
export interface PostcardPandal {
  id: string;
  name: string;
  /** "Lake Town · Kolkata" */
  place: string;
  lat?: number;
  lng?: number;
  /** Lower-cased search text: name, area, city in both scripts. */
  search: string;
}

type Source = "exif" | "near" | "pick";
type Region = "wb" | "bd";

/** A photo's GPS fix or the phone's position must be within this of a pin to pick it automatically. */
const MATCH_M = 1500;
const TAGS = "#PujoGuide #DurgaPuja2026 #PandalHopping";
const PLACEHOLDER_DATE = new Date("2026-10-01T00:00:00Z");
const isRegion = (v: unknown): v is Region => v === "wb" || v === "bd";

function nearestPin(items: readonly PostcardPandal[], p: LatLng): PostcardPandal | null {
  let best: PostcardPandal | null = null;
  let bestD = Infinity;
  for (const it of items) {
    if (typeof it.lat !== "number" || typeof it.lng !== "number") continue;
    const d = distanceM(p, { lat: it.lat, lng: it.lng });
    if (d < bestD) {
      bestD = d;
      best = it;
    }
  }
  return best && bestD <= MATCH_M ? best : null;
}

/**
 * Photo → postcard. The photo is read in the browser (its GPS tag picks the pandal), the card is drawn
 * on a canvas and shared as a file through the phone's share sheet. Nothing is uploaded.
 */
export default function PostcardMaker({ lang, items, s }: { lang: Lang; items: PostcardPandal[]; s: PlayStrings }) {
  const P = fun.postcard;
  const host = useHost();
  const { profile, ready: profileReady } = useProfile();
  const visits = useVisits();
  const near = useNearMe();
  const fileRef = useRef<HTMLInputElement>(null);
  const [photo, setPhoto] = useState<HTMLImageElement | null>(null);
  const [pandalId, setPandalId] = useState<string | null>(null);
  const [source, setSource] = useState<Source | null>(null);
  const [noMatch, setNoMatch] = useState(false);
  const [q, setQ] = useState("");
  const [region, setRegion] = useState<Region>("wb");
  const [line, setLine] = useState(0);
  const [custom, setCustom] = useState("");
  const [name, setName] = useState("");
  const [format, setFormat] = useState<CardFormat>("story");
  const [blob, setBlob] = useState<Blob | null>(null);
  const [preview, setPreview] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");
  const [canShare, setCanShare] = useState(false);
  // Today's date is read after mount (the prerendered HTML carries the build date, which would mismatch).
  const [now, setNow] = useState<Date | null>(null);

  // Saved region, a pandal handed over from its page (?p=), and whether files can be shared: once.
  useEffect(() => {
    setNow(new Date());
    try {
      const r = window.localStorage.getItem("fa:region");
      if (isRegion(r)) setRegion(r);
    } catch {
      // ignore
    }
    const p = new URLSearchParams(window.location.search).get("p");
    if (p && items.some((i) => i.id === p)) {
      setPandalId(p);
      setSource("pick");
    }
    setCanShare(canShareImage());
  }, [items]);
  useEffect(() => {
    if (profileReady) setName((n) => n || profile.name || "");
  }, [profileReady, profile.name]);
  // The phone's position (only after the visitor tapped the button) picks the nearest pandal.
  useEffect(() => {
    if (!near.pos) return;
    const hit = inServiceArea(near.pos) ? nearestPin(items, near.pos) : null;
    if (hit) {
      setPandalId(hit.id);
      setSource("near");
      setNoMatch(false);
    } else {
      setNoMatch(true);
    }
  }, [near.pos, items]);
  useEffect(() => {
    if (!blob) return setPreview("");
    const url = URL.createObjectURL(blob);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [blob]);

  // Until mounted, a fixed date keeps server and client markup identical.
  const phase = useMemo(() => pujaPhase(now ?? PLACEHOLDER_DATE, region), [now, region]);
  const g = getGreeting(greetingForPhase(phase)) ?? GREETINGS[GREETINGS.length - 1];
  const stamp = phase.kind === "during" ? phase.day[lang] : g.id === "anytime" ? P.season[lang] : g.name[lang];
  const captions = g.lines.map((l) => l[lang]);
  const caption = custom.trim() ? custom.trim().slice(0, 80) : captions[line % captions.length];
  const pandal = pandalId ? (items.find((i) => i.id === pandalId) ?? null) : null;
  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return needle ? items.filter((i) => i.search.includes(needle)).slice(0, 8) : [];
  }, [q, items]);
  const who = cleanName(name);

  const onFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = ""; // so picking the same photo again fires onChange
    if (!file) return;
    setMsg("");
    setBlob(null);
    try {
      // EXIF sits at the start of a JPEG; a quarter megabyte is plenty.
      const gps = readExifGps(await file.slice(0, 256 * 1024).arrayBuffer());
      const img = await loadPhoto(file);
      setPhoto((old) => {
        releasePhoto(old);
        return img;
      });
      if (gps && inServiceArea(gps)) {
        const hit = nearestPin(items, gps);
        if (hit) {
          setPandalId(hit.id);
          setSource("exif");
          setNoMatch(false);
        } else if (!pandalId) {
          setNoMatch(true);
        }
      }
    } catch {
      setMsg(P.badPhoto[lang]);
    }
  };

  const pickPandal = (id: string) => {
    setPandalId(id);
    setSource("pick");
    setNoMatch(false);
    setQ("");
  };

  const make = async () => {
    if (!photo) return setMsg(P.needPhoto[lang]);
    if (!pandal) return setMsg(P.needPandal[lang]);
    setBusy(true);
    setMsg(s.share.making);
    try {
      // The stamp number is the pandal's place in the passport, ticking it now when it is new.
      const idx = visits.visits.findIndex((v) => v.id === pandal.id);
      const ticked = idx < 0;
      if (ticked) visits.toggle(pandal.id);
      const n = ticked ? visits.visits.length + 1 : idx + 1;
      const byline = [who ? fill(P.by[lang], { name: who }) : "", fill(P.stampNo[lang], { n: num(n, lang) })].filter(Boolean).join(" · ");
      const out = await renderPostcard({
        lang,
        photo,
        name: pandal.name,
        place: pandal.place,
        stamp,
        date: fmtDate(localDate(new Date(), region), lang),
        caption,
        byline,
        host,
        pin: typeof pandal.lat === "number" && typeof pandal.lng === "number" ? { lat: pandal.lat, lng: pandal.lng } : null,
        format,
        attribution: P.attribution,
      });
      setBlob(out);
      setMsg(ticked ? fill(P.ticked[lang], { name: pandal.name }) : "");
      logActivity({ kind: "postcard", id: pandal.id, label: stamp });
      track("postcard", { pandal: pandal.id, format, source: source ?? "pick" });
    } catch {
      setMsg(s.share.imageFailed);
    }
    setBusy(false);
  };

  const shareBits = () => {
    if (!pandal) return null;
    const url = `${window.location.origin}${withLang(lang, `/puja/${pandal.id}`)}`;
    const text = `${fill(P.shareText[lang], { name: pandal.name, day: stamp })} ${TAGS}`;
    return { url, text, filename: `pujo-postcard-${pandal.id}.${POSTCARD_EXT}` };
  };

  const onShare = async () => {
    const b = shareBits();
    if (!blob || !b || !pandal) return;
    const outcome = await shareImage({ blob, filename: b.filename, type: POSTCARD_TYPE, title: P.h1[lang], text: b.text, url: b.url });
    if (outcome === "failed") {
      const o2 = await shareLink({ title: P.h1[lang], text: b.text, url: b.url });
      setMsg(o2 === "shared" ? s.share.shared : o2 === "copied" ? s.share.linkCopied : s.share.shareFailed);
      return;
    }
    setMsg(outcome === "shared" ? s.share.sharedImage : "");
    if (outcome === "shared") track("share", { what: "postcard", pandal: pandal.id, format });
  };

  const onSave = () => {
    const b = shareBits();
    if (!blob || !b) return;
    downloadBlob(blob, b.filename);
    setMsg(s.share.saved);
    track("save_image", { what: "postcard", format });
  };

  const onCopy = async () => {
    const b = shareBits();
    if (!b) return;
    setMsg((await copyText(`${b.text}\n${b.url}`)) ? s.share.textCopied : s.share.textCopyFailed);
  };

  return (
    <div className="cx-stage postcard">
      <p className="cx-share-row">
        <button type="button" className="cx-btn" onClick={() => fileRef.current?.click()}>
          {photo ? P.change[lang] : P.pick[lang]}
        </button>
        <input ref={fileRef} type="file" accept="image/*" onChange={onFile} hidden />
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="postcard-thumb" src={photo.src} alt="" />
        ) : null}
      </p>

      <section className="postcard-block" aria-labelledby="pc-pandal">
        <h2 id="pc-pandal" className="cx-h2">
          {P.pandalLabel[lang]}
        </h2>
        {pandal ? (
          <p className="postcard-chosen">
            <b>{pandal.name}</b> <span className="fineprint">{pandal.place}</span>
          </p>
        ) : null}
        {pandal && source === "exif" ? <p className="fineprint">{fill(P.autoExif[lang], { name: pandal.name })}</p> : null}
        {pandal && source === "near" ? <p className="fineprint">{fill(P.autoNear[lang], { name: pandal.name })}</p> : null}
        {!pandal && noMatch ? <p className="fineprint">{P.noMatch[lang]}</p> : null}
        <div className="postcard-find">
          <input className="cx-input" type="search" placeholder={P.pandalPh[lang]} value={q} onChange={(e) => setQ(e.target.value)} aria-label={P.pandalLabel[lang]} autoComplete="off" />
          <button type="button" className="cx-btn cx-btn-light" disabled={near.state === "asking"} onClick={near.ask}>
            {near.state === "asking" ? fun.near.asking[lang] : P.useNear[lang]}
          </button>
        </div>
        {near.state === "denied" || near.state === "unsupported" ? <p className="fineprint">{fun.near.denied[lang]}</p> : null}
        {results.length ? (
          <div className="cx-chips" role="listbox" aria-label={P.pandalLabel[lang]}>
            {results.map((r) => (
              <button key={r.id} type="button" role="option" className="cx-chip" aria-selected={r.id === pandalId} onClick={() => pickPandal(r.id)}>
                {r.name} <span className="fineprint">· {r.place}</span>
              </button>
            ))}
          </div>
        ) : null}
      </section>

      <section className="postcard-block" aria-labelledby="pc-caption">
        <h2 id="pc-caption" className="cx-h2">
          {P.captionLabel[lang]} · {g.icon} {stamp}
        </h2>
        <div className="cx-chips">
          {captions.map((c, i) => (
            <button
              key={c}
              type="button"
              className="cx-chip"
              aria-pressed={!custom.trim() && i === line % captions.length}
              onClick={() => {
                setLine(i);
                setCustom("");
              }}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="greet-fields">
          <label className="cx-field">
            <span>{P.captionCustom[lang]}</span>
            <input className="cx-input" type="text" maxLength={80} placeholder={P.captionPh[lang]} value={custom} onChange={(e) => setCustom(e.target.value)} />
          </label>
          <label className="cx-field">
            <span>{P.nameLabel[lang]}</span>
            <input className="cx-input" type="text" maxLength={NAME_MAX * 3} placeholder={fun.greet.fromPh[lang]} value={name} onChange={(e) => setName(e.target.value)} />
          </label>
        </div>
        <div className="cx-chips" role="group" aria-label={P.formatLabel[lang]}>
          {CARD_FORMATS.map((f) => (
            <button key={f} type="button" className="cx-chip" aria-pressed={format === f} onClick={() => setFormat(f)}>
              {fun.card[f][lang]}
            </button>
          ))}
        </div>
      </section>

      <p className="cx-share-row">
        <button type="button" className="cx-btn" disabled={busy} onClick={make}>
          {blob ? P.remake[lang] : P.make[lang]}
        </button>
      </p>

      {preview ? (
        <section className="cx-result" aria-label={P.aria[lang]}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={`postcard-preview postcard-${format}`} src={preview} alt={P.aria[lang]} />
          <p className="cx-share-row">
            {canShare ? (
              <button type="button" className="cx-btn" onClick={onShare}>
                {s.share.share}
              </button>
            ) : null}
            <button type="button" className="cx-btn cx-btn-light" onClick={onSave}>
              {s.share.saveImage}
            </button>
            <button type="button" className="cx-btn cx-btn-light" onClick={onCopy}>
              {P.copyCaption[lang]}
            </button>
          </p>
        </section>
      ) : null}

      <p className="fineprint" role="status" aria-live="polite">
        {msg || P.privacy[lang]}
      </p>
    </div>
  );
}

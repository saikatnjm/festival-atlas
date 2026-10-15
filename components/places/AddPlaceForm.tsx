"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { useNearMe } from "@/components/live/useNearMe";
import { deviceId } from "@/components/live/useLive";
import { fun } from "@/data/i18n/fun";
import { fill } from "@/data/play/personal";
import { track } from "@/lib/analytics";
import { readExifGps } from "@/lib/exif";
import { distanceM } from "@/lib/geo";
import type { Lang } from "@/lib/i18n";
import { PLACE_AREA_MAX, PLACE_CITY_MAX, PLACE_COUNTRIES, PLACE_NAME_MAX, PLACE_NOTE_MAX, cleanPlace } from "@/lib/places-shared";

/** Known pins, for the "already listed nearby" hint. */
export interface KnownPin {
  id: string;
  name: string;
  lat: number;
  lng: number;
}

type State = "idle" | "sending" | "sent" | "failed" | "disabled";
const DUPE_M = 150;

/** Name + where it is → a pending place for the owner to approve. The photo only lends its GPS tag. */
export default function AddPlaceForm({ lang, known }: { lang: Lang; known: KnownPin[] }) {
  const P = fun.places;
  const near = useNearMe();
  const fileRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState<string>("IN");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [note, setNote] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [state, setState] = useState<State>("idle");
  const [hint, setHint] = useState("");

  useEffect(() => {
    try {
      if (window.localStorage.getItem("fa:region") === "bd") setCountry("BD");
    } catch {
      // ignore
    }
  }, []);
  useEffect(() => {
    if (!near.pos) return;
    setLat(near.pos.lat.toFixed(6));
    setLng(near.pos.lng.toFixed(6));
    setHint("");
  }, [near.pos]);

  const onFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    const gps = readExifGps(await file.slice(0, 256 * 1024).arrayBuffer());
    if (!gps) return setHint(P.photoNoGps[lang]);
    setLat(gps.lat.toFixed(6));
    setLng(gps.lng.toFixed(6));
    setHint(P.photoGps[lang]);
  };

  const latN = Number(lat);
  const lngN = Number(lng);
  const hasLoc = lat.trim() !== "" && lng.trim() !== "" && Number.isFinite(latN) && Number.isFinite(lngN);
  const nearby = hasLoc ? known.find((k) => distanceM({ lat: latN, lng: lngN }, k) <= DUPE_M) : undefined;

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (state === "sending") return;
    if (!hasLoc) return setHint(P.needLoc[lang]);
    const place = cleanPlace({ name, area, city, country, lat: latN, lng: lngN, note });
    if (!place) return setHint(P.needName[lang]);
    setHint("");
    setState("sending");
    try {
      const res = await fetch("/api/places", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...place, device: deviceId(), lang, website }),
      });
      if (res.ok) {
        setState("sent");
        track("place_added", { country: place.country });
        return;
      }
      setState(res.status === 503 && (await res.json().catch(() => ({})))?.disabled ? "disabled" : "failed");
    } catch {
      setState("failed");
    }
  };

  if (state === "sent") {
    return (
      <p className="crowd-now" role="status">
        <b>{P.thanks[lang]}</b>{" "}
        <button
          type="button"
          className="cx-link-btn"
          onClick={() => {
            setName("");
            setArea("");
            setNote("");
            setLat("");
            setLng("");
            setState("idle");
          }}
        >
          {P.another[lang]}
        </button>
      </p>
    );
  }

  return (
    <form className="feedback-form" onSubmit={submit}>
      <p className="cta-row">
        <button type="button" className="button button-light" onClick={() => fileRef.current?.click()}>
          {P.photo[lang]}
        </button>
        <input ref={fileRef} type="file" accept="image/*" onChange={onFile} hidden />
        <button type="button" className="button button-light" disabled={near.state === "asking"} onClick={near.ask}>
          {near.state === "asking" ? fun.near.asking[lang] : P.useNear[lang]}
        </button>
      </p>
      {near.state === "denied" || near.state === "unsupported" ? <p className="fineprint">{P.noLoc[lang]}</p> : null}
      <div className="greet-fields">
        <label className="field">
          <span>{P.lat[lang]}</span>
          <input type="number" inputMode="decimal" step="any" min={-90} max={90} value={lat} onChange={(e) => setLat(e.target.value)} />
        </label>
        <label className="field">
          <span>{P.lng[lang]}</span>
          <input type="number" inputMode="decimal" step="any" min={-180} max={180} value={lng} onChange={(e) => setLng(e.target.value)} />
        </label>
      </div>
      {hasLoc ? (
        <p className="fineprint">
          <a href={`https://www.openstreetmap.org/?mlat=${latN}&mlon=${lngN}#map=17/${latN}/${lngN}`} rel="noopener noreferrer" target="_blank">
            {P.check[lang]}
          </a>
          {nearby ? ` · ${fill(P.dupe[lang], { name: nearby.name })}` : ""}
        </p>
      ) : null}
      <label className="field">
        <span>{P.nameLabel[lang]}</span>
        <input type="text" required maxLength={PLACE_NAME_MAX} placeholder={P.namePh[lang]} value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <div className="greet-fields">
        <label className="field">
          <span>{P.areaLabel[lang]}</span>
          <input type="text" maxLength={PLACE_AREA_MAX} placeholder={P.areaPh[lang]} value={area} onChange={(e) => setArea(e.target.value)} />
        </label>
        <label className="field">
          <span>{P.cityLabel[lang]}</span>
          <input type="text" required maxLength={PLACE_CITY_MAX} placeholder={P.cityPh[lang]} value={city} onChange={(e) => setCity(e.target.value)} />
        </label>
      </div>
      <label className="field">
        <span>{P.countryLabel[lang]}</span>
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          {PLACE_COUNTRIES.map((c) => (
            <option key={c} value={c}>
              {P.countries[c][lang]}
            </option>
          ))}
        </select>
      </label>
      <label className="field">
        <span>{P.noteLabel[lang]}</span>
        <input type="text" maxLength={PLACE_NOTE_MAX} placeholder={P.notePh[lang]} value={note} onChange={(e) => setNote(e.target.value)} />
      </label>
      <label className="hp" aria-hidden="true">
        website
        <input type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </label>
      <p className="cta-row">
        <button type="submit" className="button" disabled={state === "sending"}>
          {state === "sending" ? P.sending[lang] : P.submit[lang]}
        </button>
      </p>
      <p className="fineprint" role="status" aria-live="polite">
        {hint || (state === "failed" ? P.failed[lang] : state === "disabled" ? P.disabled[lang] : P.privacy[lang])}
      </p>
    </form>
  );
}

"use client";

import { useEffect, useState, type FormEvent } from "react";
import { deviceId } from "@/components/live/useLive";
import { fun } from "@/data/i18n/fun";
import { fill } from "@/data/play/personal";
import { UPCOMING_PUJAS, isPujaId } from "@/data/pujas";
import { track } from "@/lib/analytics";
import { CONTACT_MAX, FEEDBACK_TOPICS, MESSAGE_MAX, MESSAGE_MIN, cleanMessage } from "@/lib/feedback-shared";
import type { Lang } from "@/lib/i18n";

type State = "idle" | "sending" | "sent" | "failed" | "disabled";

/** Topic, optional contact, message. Sent to /api/feedback; only the site owner ever reads it. */
export default function FeedbackForm({ lang }: { lang: Lang }) {
  const F = fun.feedback;
  const [topic, setTopic] = useState<string>("general");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [state, setState] = useState<State>("idle");
  const [hint, setHint] = useState("");

  // ?topic=<puja id> from the Pujo menu's "coming soon" dialog.
  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("topic");
    if (isPujaId(t)) setTopic(`puja-${t}`);
  }, []);

  const pujaTopics = UPCOMING_PUJAS.map((p) => ({ value: `puja-${p.id}`, label: fill(F.topicPuja[lang], { name: `${p.icon} ${p.name[lang]}` }) }));
  const topicLabel = (t: (typeof FEEDBACK_TOPICS)[number]) => (t === "general" ? F.topicGeneral : t === "bug" ? F.topicBug : F.topicIdea)[lang];

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (state === "sending") return;
    if (!cleanMessage(message)) return setHint(F.tooShort[lang]);
    setHint("");
    setState("sending");
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ device: deviceId(), topic, contact, message, website, lang, page: window.location.pathname }),
      });
      if (res.ok) {
        setState("sent");
        track("feedback", { topic });
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
        <b>{F.thanks[lang]}</b>{" "}
        <button
          type="button"
          className="cx-link-btn"
          onClick={() => {
            setMessage("");
            setState("idle");
          }}
        >
          {F.another[lang]}
        </button>
      </p>
    );
  }

  return (
    <form className="feedback-form" onSubmit={submit}>
      <label className="field">
        <span>{F.topicLabel[lang]}</span>
        <select value={topic} onChange={(e) => setTopic(e.target.value)}>
          {FEEDBACK_TOPICS.map((t) => (
            <option key={t} value={t}>
              {topicLabel(t)}
            </option>
          ))}
          {pujaTopics.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </select>
      </label>
      <label className="field">
        <span>{F.contactLabel[lang]}</span>
        <input type="text" inputMode="email" autoComplete="email" maxLength={CONTACT_MAX} placeholder={F.contactPh[lang]} value={contact} onChange={(e) => setContact(e.target.value)} />
      </label>
      <label className="field">
        <span>{F.messageLabel[lang]}</span>
        <textarea required minLength={MESSAGE_MIN} maxLength={MESSAGE_MAX} placeholder={F.messagePh[lang]} value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      {/* Honeypot: hidden from people, filled by bots. */}
      <label className="hp" aria-hidden="true">
        website
        <input type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </label>
      <p className="cta-row">
        <button type="submit" className="button" disabled={state === "sending"}>
          {state === "sending" ? F.sending[lang] : F.send[lang]}
        </button>
      </p>
      <p className="fineprint" role="status" aria-live="polite">
        {hint || (state === "failed" ? F.failed[lang] : state === "disabled" ? F.disabled[lang] : F.privacy[lang])}
      </p>
    </form>
  );
}

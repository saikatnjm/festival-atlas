"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { fun } from "@/data/i18n/fun";
import { fill } from "@/data/play/personal";
import { UPCOMING_PUJAS, type PujaEntry } from "@/data/pujas";
import { track } from "@/lib/analytics";
import { withLang, type Lang } from "@/lib/i18n";

/** Durga Puja (live) plus the planned pujas; a planned one opens a "coming soon" dialog with a feedback link. */
export default function PujaMenu({ lang }: { lang: Lang }) {
  const M = fun.pujas;
  const ref = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState<PujaEntry | null>(null);

  const show = (p: PujaEntry) => {
    setOpen(p);
    track("puja_menu", { puja: p.id });
    const d = ref.current;
    if (d && !d.open) d.showModal();
  };
  const close = () => {
    ref.current?.close();
    setOpen(null);
  };

  return (
    <>
      <ul className="puja-menu" role="list">
        <li>
          <Link className="chip chip-live" href={withLang(lang, "/durga-puja-2026")}>
            🪔 {M.durga[lang]} <span className="puja-menu-tag">{M.live[lang]}</span>
          </Link>
        </li>
        {UPCOMING_PUJAS.map((p) => (
          <li key={p.id}>
            <button type="button" className="chip chip-soon" aria-haspopup="dialog" onClick={() => show(p)}>
              {p.icon} {p.name[lang]} <span className="puja-menu-tag">{M.soon[lang]}</span>
            </button>
          </li>
        ))}
      </ul>
      {/* Clicking the backdrop (the dialog element itself, outside .soon-body) closes it. */}
      <dialog ref={ref} className="soon-dialog" aria-labelledby="soon-h" onClose={() => setOpen(null)} onClick={(e) => e.target === ref.current && close()}>
        {open ? (
          <div className="soon-body">
            <p className="soon-icon" aria-hidden="true">
              {open.icon}
            </p>
            <h3 id="soon-h">{fill(M.title[lang], { name: open.name[lang] })}</h3>
            <p>{M.body[lang]}</p>
            <p className="fineprint">{open.when[lang]}</p>
            <p className="cta-row cta-center">
              <Link className="button" href={`${withLang(lang, "/feedback")}?topic=${open.id}`} onClick={close}>
                {M.ask[lang]}
              </Link>
              <button type="button" className="button button-light" onClick={close}>
                {M.close[lang]}
              </button>
            </p>
          </div>
        ) : null}
      </dialog>
    </>
  );
}

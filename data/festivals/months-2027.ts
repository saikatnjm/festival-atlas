// Month pages for 2027 (/calendar-2027/january … /december): every festival, Ekadashi, Purnima, Amavasya,
// Sankashti, Pradosh and Masik Shivratri of the month in one table. Nothing new is sourced here: each row
// is copied from a sourced festival page or list (with that row's own source), so the month pages can never
// disagree with them.

import type { L } from "@/lib/i18n";
import { AMAVASYA_KOL, AMAVASYA_NAMES, AMAVASYA_ROWS, dayLabel, EKADASHI_ROWS, NAMES, PURNIMA_KOL, PURNIMA_NAMES, PURNIMA_ROWS, SMARTA_KOL, timeLabel } from "./lunar-2027";
import { GRIHA_ROWS, VIVAH_ROWS } from "./muhurat-2027";
import type { FestivalPage, FestivalSource } from "./types";
import { MASIK_KOL, MASIK_NAMES, MASIK_ROWS, PAKSHA, PRADOSH_KOL, PRADOSH_NAMES, PRADOSH_ROWS, SANKASHTI_KOL, SANKASHTI_NAMES, SANKASHTI_ROWS } from "./vrat-2027";

const l = (bn: string, en: string): L => ({ bn, en });
const BN_DIGITS = "০১২৩৪৫৬৭৮৯";
const bnNum = (s: string) => s.replace(/\d/g, (d) => BN_DIGITS[Number(d)]);

export const MONTH_SLUGS = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"] as const;
const MONTH_NAMES: L[] = [
  l("জানুয়ারি", "January"), l("ফেব্রুয়ারি", "February"), l("মার্চ", "March"), l("এপ্রিল", "April"), l("মে", "May"), l("জুন", "June"),
  l("জুলাই", "July"), l("আগস্ট", "August"), l("সেপ্টেম্বর", "September"), l("অক্টোবর", "October"), l("নভেম্বর", "November"), l("ডিসেম্বর", "December"),
];

type Kind = "festival" | "ekadashi" | "purnima" | "amavasya" | "sankashti" | "pradosh" | "masik";
interface Item { date: string; kind: Kind; name: L; detail: L; source: FestivalSource; href?: string }

const KIND: Record<Kind, L> = {
  festival: l("পুজো ও উৎসব", "Festival"),
  ekadashi: l("একাদশী", "Ekadashi"),
  purnima: l("পূর্ণিমা", "Purnima"),
  amavasya: l("অমাবস্যা", "Amavasya"),
  sankashti: l("সংকষ্টী চতুর্থী", "Sankashti Chaturthi"),
  pradosh: l("প্রদোষ ব্রত", "Pradosh Vrat"),
  masik: l("মাসিক শিবরাত্রি", "Masik Shivratri"),
};

const range = (a: string, b: string): L => ({ bn: `${timeLabel(a, "bn")} – ${timeLabel(b, "bn")}`, en: `${timeLabel(a, "en")} – ${timeLabel(b, "en")}` });
const tithi = (a: string, b: string): L => { const r = range(a, b); return { bn: `তিথি (কলকাতা): ${r.bn}`, en: `Tithi (Kolkata): ${r.en}` }; };
/** "17:06-19:44" → "5:06 pm – 7:44 pm" (a printed window, only reformatted). */
const clock = (hm: string): L => {
  const [h, m] = hm.split(":").map(Number);
  const c = `${h % 12 === 0 ? 12 : h % 12}:${String(m).padStart(2, "0")}`;
  return { bn: bnNum(c), en: `${c} ${h < 12 ? "am" : "pm"}` };
};
const windowL = (w: string, bnLabel: string, enLabel: string): L => {
  const [a, b] = w.split("-").map(clock);
  return { bn: `${bnLabel} (কলকাতা): ${a.bn}–${b.bn}`, en: `${enLabel} (Kolkata): ${a.en} – ${b.en}` };
};

/** The first source a festival page cites for its dates. */
function pageSource(f: FestivalPage): FestivalSource | undefined {
  const rows = Object.values(f.timings?.rows ?? {}).flat();
  return rows[0]?.source ?? f.tables?.[0]?.rows[0]?.source ?? f.sections.flatMap((s) => s.paras).find((p) => p.source)?.source;
}

function items(pages: FestivalPage[]): Item[] {
  const out: Item[] = [];
  for (const f of pages) {
    const source = pageSource(f);
    // The year hub repeats events that have their own pages.
    if (!source || f.path === "/calendar-2027") continue;
    for (const e of f.events) {
      if (!e.start.startsWith("2027")) continue;
      out.push({ date: e.start, kind: "festival", name: e.name, detail: e.end ? { bn: `${dayLabel(e.end, "bn", false)} পর্যন্ত`, en: `until ${dayLabel(e.end, "en", false)}` } : l("তারিখ আর সময় পাতায়", "Date and times on its page"), source, href: f.path });
    }
  }
  for (const [n, d, ks, ke] of EKADASHI_ROWS) if (d.startsWith("2027")) out.push({ date: d, kind: "ekadashi", name: NAMES[n], detail: tithi(ks, ke), source: SMARTA_KOL(2027), href: "/ekadashi-2027" });
  for (const [n, d, , ks, ke] of PURNIMA_ROWS) if (d.startsWith("2027")) out.push({ date: d, kind: "purnima", name: PURNIMA_NAMES[n], detail: tithi(ks, ke), source: PURNIMA_KOL(2027), href: "/purnima-2027" });
  for (const [n, d, , ks, ke] of AMAVASYA_ROWS) if (d.startsWith("2027")) out.push({ date: d, kind: "amavasya", name: AMAVASYA_NAMES[n], detail: tithi(ks, ke), source: AMAVASYA_KOL(2027), href: "/amavasya-2027" });
  for (const [n, d, ks, ke] of SANKASHTI_ROWS) out.push({ date: d, kind: "sankashti", name: SANKASHTI_NAMES[n], detail: tithi(ks, ke), source: SANKASHTI_KOL, href: "/sankashti-chaturthi-2027" });
  for (const [d, n, p, , , w] of PRADOSH_ROWS) {
    const name = { bn: `${PRADOSH_NAMES[n].bn} (${PAKSHA[p].bn})`, en: `${PRADOSH_NAMES[n].en} (${PAKSHA[p].en})` };
    out.push({ date: d, kind: "pradosh", name, detail: windowL(w, "প্রদোষ কাল", "Pradosh"), source: PRADOSH_KOL, href: "/pradosh-vrat-2027" });
  }
  for (const [d, n, , , w] of MASIK_ROWS) {
    const name = { bn: `মাসিক শিবরাত্রি (${MASIK_NAMES[n].bn})`, en: `Masik Shivratri (${MASIK_NAMES[n].en})` };
    out.push({ date: d, kind: "masik", name, detail: windowL(w, "মাঝরাতের পুজো", "Midnight puja"), source: MASIK_KOL, href: "/masik-shivratri-2027" });
  }
  return dedupe(out).sort((a, b) => a.date.localeCompare(b.date) || (a.kind === "festival" ? -1 : b.kind === "festival" ? 1 : 0));
}

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/**
 * One row per festival and day: "Durga Puja 2027, Kolkata" and "…, Bangladesh" (same page) collapse, and when two
 * pages list the same festival (Kali Puja on the Diwali page and on its own), the festival's own page wins.
 */
function dedupe(list: Item[]): Item[] {
  const best = new Map<string, Item>();
  const out: Item[] = [];
  for (const x of list) {
    if (x.kind !== "festival") { out.push(x); continue; }
    const base = x.name.en.split(",")[0].trim();
    const key = `${x.date}|${slugify(base)}`;
    const own = (y: Item) => y.href === `/${slugify(base)}`;
    const prev = best.get(key) ?? best.get(`${x.date}|${x.href}`);
    if (!prev || (own(x) && !own(prev))) {
      const item = { ...x, name: { bn: x.name.bn.split(",")[0].trim(), en: base } };
      if (prev) out.splice(out.indexOf(prev), 1, item); else out.push(item);
      best.set(key, item);
      best.set(`${x.date}|${x.href}`, item);
    }
  }
  return out;
}

/** Base text plus as much of the festival list as fits within `max` characters. */
function fit(base: string, items: string, end: string, max: number): string {
  const parts = items ? items.split(", ") : [];
  for (let k = parts.length; k > 0; k--) {
    const s = `${base}: ${parts.slice(0, k).join(", ")}${end}`;
    if (s.length <= max) return s;
  }
  return `${base}${end}`;
}

const count = (rows: [string, ...unknown[]][], prefix: string) => rows.filter((r) => r[0].startsWith(prefix)).length;

function monthPage(i: number, all: Item[]): FestivalPage {
  const slug = MONTH_SLUGS[i];
  const mm = String(i + 1).padStart(2, "0");
  const prefix = `2027-${mm}`;
  const m = MONTH_NAMES[i];
  const rows = all.filter((x) => x.date.startsWith(prefix));
  const fest = rows.filter((x) => x.kind === "festival");
  const ek = rows.filter((x) => x.kind === "ekadashi");
  const pur = rows.find((x) => x.kind === "purnima");
  const ama = rows.find((x) => x.kind === "amavasya");
  const vivah = count(VIVAH_ROWS, prefix);
  const griha = count(GRIHA_ROWS, prefix);
  const top = fest.slice(0, 3);
  const list = (lang: "bn" | "en") => top.map((x) => `${x.name[lang]} ${dayLabel(x.date, lang, false)}`).join(lang === "bn" ? ", " : ", ");
  const n = (v: number) => ({ bn: bnNum(String(v)), en: String(v) });
  const prev = i > 0 ? MONTH_SLUGS[i - 1] : null;
  const next = i < 11 ? MONTH_SLUGS[i + 1] : null;
  return {
    path: `/calendar-2027/${slug}`,
    title: l(`${m.bn} ২০২৭: পুজো, একাদশী, পূর্ণিমা, শুভ দিন`, `${m.en} 2027 Hindu Calendar: Festivals, Ekadashi, Purnima`),
    description: l(
      fit(`${m.bn} ২০২৭-এর সব পুজো-পার্বণ, একাদশী, পূর্ণিমা-অমাবস্যা আর ব্রত, তারিখ ও কলকাতার তিথিসহ`, list("bn"), "।", 170),
      fit(`Every Hindu festival, Ekadashi, Purnima, Amavasya and vrat in ${m.en} 2027, with dates and Kolkata tithi times`, list("en"), ".", 160),
    ),
    h1: l(`${m.bn} ২০২৭: পুজো-পার্বণ আর ব্রতের তালিকা`, `${m.en} 2027: Hindu festivals and vrats`),
    lead: l(
      `${m.bn} ২০২৭-এ ${n(fest.length).bn}টা পুজো-উৎসব, ${n(ek.length).bn}টা একাদশী${pur ? `, পূর্ণিমা ${dayLabel(pur.date, "bn", false)}` : ""}${ama ? `, অমাবস্যা ${dayLabel(ama.date, "bn", false)}` : ""}। প্রতিটা সারির সূত্র আর বিস্তারিত পাতা নিচে।`,
      `${m.en} 2027 has ${fest.length} festival${fest.length === 1 ? "" : "s"} on our pages and ${ek.length} Ekadashi${ek.length === 1 ? "" : "s"}${pur ? `; Purnima is ${dayLabel(pur.date, "en", false)}` : ""}${ama ? `, Amavasya ${dayLabel(ama.date, "en", false)}` : ""}. Each row links to its sourced page.`,
    ),
    tables: [
      {
        id: "month",
        h2: l(`${m.bn} ২০২৭-এর তালিকা`, `${m.en} 2027 at a glance`),
        caption: l(`${m.bn} ২০২৭: তারিখ অনুযায়ী (কলকাতা, IST)`, `${m.en} 2027 by date (Kolkata, IST)`),
        columns: [l("তারিখ", "Date"), l("কী", "What"), l("ধরন", "Type"), l("বিস্তারিত", "Details")],
        rows: rows.map((x) => ({ cells: [{ bn: dayLabel(x.date, "bn", false), en: dayLabel(x.date, "en", false) }, x.name, KIND[x.kind], x.detail], source: x.source, href: x.href })),
        note: l(
          "সময় কলকাতার (IST); ঢাকার সময় সাধারণত আধঘণ্টা পরে, ঠিক সময় প্রতিটা পাতায়। বাড়ির পঞ্জিকা (বিশুদ্ধ সিদ্ধান্ত বা গুপ্তপ্রেস) মানলে মিলিয়ে নিও।",
          "Times are Kolkata (IST); Dhaka's are on each linked page. If you follow a printed panjika (Bishuddha Siddhanta or Gupta Press), check it: some days may differ.",
        ),
      },
    ],
    sections:
      vivah || griha
        ? [{
            id: "shubh",
            h2: l(`${m.bn} ২০২৭-এর শুভ দিন`, `Auspicious days in ${m.en} 2027`),
            paras: [{
              text: l(
                `দ্রিক পঞ্চাঙ্গের কলকাতার তালিকায় এই মাসে বিয়ের শুভ দিন ${n(vivah).bn}টা আর গৃহপ্রবেশের ${n(griha).bn}টা। পুরো তালিকা আলাদা পাতায়।`,
                `Drik Panchang's Kolkata lists have ${vivah} marriage date${vivah === 1 ? "" : "s"} and ${griha} Griha Pravesh date${griha === 1 ? "" : "s"} this month. The full lists are on their own pages.`,
              ),
              source: { title: "Drik Panchang, 2027 Hindu marriage dates for Kolkata", url: "https://www.drikpanchang.com/shubh-dates/shubh-marriage-dates-with-muhurat.html?geoname-id=1275004&year=2027" },
            }],
          }]
        : [],
    faq: [
      {
        q: l(`${m.bn} ২০২৭-এ কী কী পুজো আছে?`, `What festivals are in ${m.en} 2027?`),
        a: fest.length
          ? { bn: fest.map((x) => `${x.name.bn} (${dayLabel(x.date, "bn", false)})`).join(", ") + "।", en: fest.map((x) => `${x.name.en} (${dayLabel(x.date, "en", false)})`).join(", ") + "." }
          : l("আমাদের পাতায় এই মাসে বড় কোনো পুজো নেই; একাদশী আর অন্য ব্রতের দিন তালিকায়।", "None of our festival pages falls in this month; the Ekadashi and vrat days are in the table."),
      },
      {
        q: l(`${m.bn} ২০২৭-এ একাদশী কবে?`, `When is Ekadashi in ${m.en} 2027?`),
        a: ek.length
          ? { bn: ek.map((x) => `${x.name.bn} ${dayLabel(x.date, "bn", false)}`).join(", ") + " (স্মার্ত মতে)।", en: ek.map((x) => `${x.name.en} on ${dayLabel(x.date, "en", false)}`).join(", ") + " (Smarta)." }
          : l("এই মাসে স্মার্ত একাদশী নেই।", "No Smarta Ekadashi falls this month."),
      },
      {
        q: l(`${m.bn} ২০২৭-এ পূর্ণিমা আর অমাবস্যা কবে?`, `When are Purnima and Amavasya in ${m.en} 2027?`),
        a: {
          bn: [pur && `পূর্ণিমা ${dayLabel(pur.date, "bn", false)}`, ama && `অমাবস্যা ${dayLabel(ama.date, "bn", false)}`].filter(Boolean).join(", ") + "।",
          en: [pur && `Purnima ${dayLabel(pur.date, "en", false)}`, ama && `Amavasya ${dayLabel(ama.date, "en", false)}`].filter(Boolean).join(", ") + ".",
        },
      },
    ],
    events: [],
    links: [
      { href: "/calendar-2027", label: l("📅 পুরো বছরের ক্যালেন্ডার ২০২৭", "📅 Full 2027 calendar"), primary: true },
      ...(prev ? [{ href: `/calendar-2027/${prev}`, label: { bn: `← ${MONTH_NAMES[i - 1].bn}`, en: `← ${MONTH_NAMES[i - 1].en}` } }] : []),
      ...(next ? [{ href: `/calendar-2027/${next}`, label: { bn: `${MONTH_NAMES[i + 1].bn} →`, en: `${MONTH_NAMES[i + 1].en} →` } }] : []),
      { href: "/ekadashi-2027", label: l("🪔 একাদশী ২০২৭", "🪔 Ekadashi 2027") },
      { href: "/vivah-dates-2027", label: l("💍 বিয়ের শুভ দিন", "💍 Marriage dates") },
    ],
    lastChecked: "2026-11-02",
  };
}

/** Builds the twelve month pages from the other festival pages (which must not include these). */
export function monthPages(pages: FestivalPage[]): FestivalPage[] {
  const all = items(pages);
  return MONTH_SLUGS.map((_, i) => monthPage(i, all));
}

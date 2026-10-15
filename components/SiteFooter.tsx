import Link from "next/link";
import type { Dict } from "@/data/i18n";
import { fun } from "@/data/i18n/fun";
import { withLang, type Lang } from "@/lib/i18n";

const T = {
  explore: { bn: "ঘুরে দেখো", en: "Explore" },
  play: { bn: "খেলো", en: "Play" },
  about: { bn: "এই সাইট", en: "This site" },
  quiz: { bn: "পুজোয় তুমি কে?", en: "Who are you at Puja?" },
  squad: { bn: "পুজো-দলের রোল কার্ড", en: "Puja squad role card" },
  allGames: { bn: "সব খেলা", en: "All games" },
  map: { bn: "প্যান্ডেল ম্যাপ", en: "Pandal map" },
  language: { bn: "English", en: "বাংলা" },
  made: { bn: "সূত্রসহ, বিজ্ঞাপন-ছাড়া, অ্যাকাউন্ট-ছাড়া। কলকাতা ও ঢাকার জন্য ভালোবেসে বানানো।", en: "Sourced, ad-free, no accounts. Made with love for Kolkata and Dhaka." },
};

/** Footer: brand blurb plus three short link groups (explore, play, this site). */
export default function SiteFooter({ lang, t }: { lang: Lang; t: Dict }) {
  const other: Lang = lang === "en" ? "bn" : "en";
  const groups: { title: string; links: { href: string; label: string; lang?: Lang }[] }[] = [
    {
      title: T.explore[lang],
      links: [
        { href: withLang(lang, "/durga-puja-2026"), label: `📅 ${fun.home.datesPage[lang]}` },
        { href: withLang(lang, "/puja/kolkata"), label: `🥁 ${fun.home.kolkataPage[lang]}` },
        { href: withLang(lang, "/puja/dhaka"), label: `🛕 ${fun.home.dhakaPage[lang]}` },
        { href: withLang(lang, "/puja/abroad"), label: `🌍 ${fun.home.abroadPage[lang]}` },
        { href: withLang(lang, "/puja"), label: `🗺️ ${T.map[lang]}` },
        { href: withLang(lang, "/local"), label: `🌙 ${t.nav.local}` },
        { href: withLang(lang, "/add-pandal"), label: fun.places.addCta[lang] },
      ],
    },
    {
      title: T.play[lang],
      links: [
        { href: withLang(lang, "/postcard"), label: fun.postcard.homeCta[lang] },
        { href: withLang(lang, "/greetings"), label: fun.greet.homeCta[lang] },
        { href: withLang(lang, "/play/puja-personality"), label: T.quiz[lang] },
        { href: withLang(lang, "/play/puja-squad"), label: T.squad[lang] },
        { href: withLang(lang, "/passport"), label: `🎫 ${fun.passport.title[lang]}` },
        { href: withLang(lang, "/me"), label: fun.my.homeCta[lang] },
        { href: withLang(lang, "/play"), label: T.allGames[lang] },
      ],
    },
    {
      title: T.about[lang],
      links: [
        { href: withLang(lang, "/about"), label: t.about.title },
        { href: withLang(lang, "/feedback"), label: `💬 ${fun.feedback.footer[lang]}` },
        { href: `/${other}`, label: T.language[lang], lang: other },
      ],
    },
  ];

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <p className="footer-brand">
            <img src="/brand/logo-icon.svg" alt="" width={28} height={28} /> {t.site.name}
          </p>
          <p>{t.footer.blurb}</p>
          <p className="fineprint">{T.made[lang]}</p>
        </div>
        <nav className="footer-nav" aria-label={t.a11y.footerNav}>
          {groups.map((g) => (
            <div key={g.title} className="footer-col">
              <p className="footer-h">{g.title}</p>
              <ul>
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} hrefLang={l.lang} lang={l.lang}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="container footer-bottom">
        <p className="fineprint">{t.footer.mapCredit}</p>
        <p className="fineprint">© {new Date().getFullYear()} {t.site.name}</p>
      </div>
    </footer>
  );
}

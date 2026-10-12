import Link from "next/link";
import type { Dict } from "@/data/i18n";
import { fun } from "@/data/i18n/fun";
import { withLang, type Lang } from "@/lib/i18n";

export default function SiteFooter({ lang, t }: { lang: Lang; t: Dict }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">
            <img src="/brand/logo-icon.svg" alt="" width={28} height={28} /> {t.site.name}
          </p>
          <p>{t.footer.blurb}</p>
          <p className="fineprint">{t.footer.mapCredit}</p>
        </div>
        <nav aria-label={t.a11y.footerNav}>
          <ul className="link-list link-list-inline">
            <li>
              <Link href={withLang(lang, "/puja")}>{t.footer.map}</Link>
            </li>
            <li>
              <Link href={withLang(lang, "/play")}>{t.footer.play}</Link>
            </li>
            <li>
              <Link href={withLang(lang, "/local")}>{t.nav.local}</Link>
            </li>
            <li>
              <Link href={withLang(lang, "/puja/kolkata")}>{fun.home.kolkataPage[lang]}</Link>
            </li>
            <li>
              <Link href={withLang(lang, "/puja/dhaka")}>{fun.home.dhakaPage[lang]}</Link>
            </li>
            <li>
              <Link href={withLang(lang, "/puja/abroad")}>{fun.home.abroadPage[lang]}</Link>
            </li>
            <li>
              <Link href={withLang(lang, "/durga-puja-2026")}>{fun.home.datesPage[lang]}</Link>
            </li>
            <li>
              <Link href={withLang(lang, "/about")}>{t.about.title}</Link>
            </li>
            <li>
              <Link href={lang === "en" ? "/bn" : "/en"} hrefLang={lang === "en" ? "bn" : "en"} lang={lang === "en" ? "bn" : "en"}>
                {lang === "en" ? "বাংলা" : "English"}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

import Link from "next/link";
import type { Dict } from "@/data/i18n";
import { withLang, type Lang } from "@/lib/i18n";
import LangSwitch from "./LangSwitch";
import NameChip from "./NameChip";
import NavLinks from "./NavLinks";
import ThemePicker from "./ThemePicker";

export default function SiteHeader({ lang, t }: { lang: Lang; t: Dict }) {
  return (
    <header className="site-header">
      <div className="container bar">
        <Link href={withLang(lang, "/")} className="brand" aria-label={t.a11y.home}>
          {/* Dhak mark + wordmark in the page's display font, so Bangla pages get a Bangla wordmark. */}
          <img src="/brand/logo-icon.svg" alt="" width={34} height={34} />
          <span className="brand-word">{t.site.name}</span>
        </Link>
        <nav aria-label={t.a11y.mainNav}>
          <NavLinks lang={lang} labels={t.nav} />
        </nav>
        <div className="bar-tools">
          <NameChip lang={lang} label={t.a11y.me} />
          <ThemePicker lang={lang} />
          <LangSwitch lang={lang} label={t.a11y.language} switchTo={t.a11y.switchTo} />
        </div>
      </div>
    </header>
  );
}

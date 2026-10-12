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
          {/* Outlined-wordmark SVG: no font download needed for the brand. */}
          <img src="/brand/logo-primary.svg" alt={t.site.name} width={145} height={32} />
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

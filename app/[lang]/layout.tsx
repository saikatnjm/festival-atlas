import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../site.css";
import "../cx.css";
import { LangProvider } from "@/components/LangContext";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { getDict } from "@/data/i18n";
import { LANGS, OG_LOCALE, isLang } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const t = getDict(lang);
  const origin = siteUrl();
  const google = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  const bing = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;
  return {
    metadataBase: origin ? new URL(origin) : undefined,
    applicationName: t.site.name,
    title: { default: t.meta.home.title, template: `%s · ${t.site.name}` },
    description: t.meta.home.description,
    openGraph: { siteName: t.site.name, type: "website", locale: OG_LOCALE[lang] },
    twitter: { card: "summary_large_image" },
    verification: google || bing ? { google, other: bing ? { "msvalidate.01": bing } : undefined } : undefined,
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2B2D8F",
};

export default async function LangLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = getDict(lang);
  return (
    <html lang={lang}>
      <body data-lang={lang}>
        <a className="skip-link" href="#main">
          {t.a11y.skip}
        </a>
        <SiteHeader lang={lang} t={t} />
        <main id="main" className="container page">
          <LangProvider lang={lang} strings={{ notFound: t.notFound, error: t.error }}>
            {children}
          </LangProvider>
        </main>
        <SiteFooter lang={lang} t={t} />
      </body>
    </html>
  );
}

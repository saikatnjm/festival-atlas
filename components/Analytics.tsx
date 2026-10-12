import Script from "next/script";

/**
 * Google Analytics 4, loaded only when NEXT_PUBLIC_GA_ID (G-XXXXXXXXXX) is set at build time.
 * Loaded after the page is interactive so it never delays the first paint. IP anonymisation is on,
 * and no personal data (names typed into games) is ever sent: custom events carry only game/result ids.
 */
export default function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (!id || !/^G-[A-Z0-9]+$/.test(id)) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}',{anonymize_ip:true});`}
      </Script>
    </>
  );
}

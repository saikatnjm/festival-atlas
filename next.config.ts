import type { NextConfig } from "next";

/**
 * The site's public origin, resolved once at build time.
 * 1. NEXT_PUBLIC_SITE_URL when set (the explicit choice: set it in Vercel to the address you share).
 * 2. Otherwise, on Vercel, the project's shortest production domain (VERCEL_PROJECT_PRODUCTION_URL).
 * Empty when neither is set (no canonical URLs, no sitemap). A mismatch between the two is printed in
 * the build log, so a stale NEXT_PUBLIC_SITE_URL gets noticed instead of quietly pointing metadata at
 * an old domain.
 */
function siteOrigin(): string {
  const explicit = (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/+$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "";
  if (explicit && vercel && explicit !== vercel) {
    console.warn(`[site] NEXT_PUBLIC_SITE_URL is ${explicit} but Vercel's production domain is ${vercel}. Metadata uses ${explicit}; update the variable if that is stale.`);
  }
  return explicit || vercel;
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: { NEXT_PUBLIC_SITE_ORIGIN: siteOrigin() },
  // Old unprefixed links keep working (temporary redirect to the English version).
  async redirects() {
    return [
      { source: "/puja", destination: "/en/puja", permanent: false },
      { source: "/play", destination: "/en/play", permanent: false },
      { source: "/play/:path*", destination: "/en/play/:path*", permanent: false },
    ];
  },
};

export default nextConfig;

// Tells Bing (and other IndexNow engines) about the site's URLs after a deploy. Free, no account needed;
// the key file public/880f85be5d1a7f2a9a6bf0deec30bb06.txt proves ownership. Run after Vercel has deployed:
//   node scripts/indexnow.mjs               (every URL in the live sitemap)
//   node scripts/indexnow.mjs /en/blog/x    (only these paths)
const KEY = "880f85be5d1a7f2a9a6bf0deec30bb06";
const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://pujoguide.vercel.app").replace(/\/$/, "");
const host = new URL(SITE).host;

async function urls() {
  const paths = process.argv.slice(2);
  if (paths.length) return paths.map((p) => SITE + p);
  const xml = await (await fetch(`${SITE}/sitemap.xml`)).text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const urlList = (await urls()).slice(0, 10000);
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: ${urlList.length} URLs → HTTP ${res.status}`);

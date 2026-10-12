// Starts `next start` on a test port and checks routes, metadata and share previews.
import { spawn } from "node:child_process";

const PORT = 3100;
const base = `http://127.0.0.1:${PORT}`;

const O = "http://localhost:3100";
// <link rel="alternate" hrefLang=".." href=".."> in either attribute order and case.
const alt = (lang, href) => new RegExp(`hreflang="${lang}"[^>]*href="${href}"|href="${href}"[^>]*hreflang="${lang}"`, "i");
const HEAD = (lang) => `<html lang="${lang}"`;
// [path, expected status, text the body must contain]
const pages = [
  ["/en", 200, HEAD("en")],
  ["/bn", 200, HEAD("bn")],
  ["/en", 200, "Who are you at Puja? Find out in 30 seconds."],
  ["/bn", 200, "পুজোয় তুমি কে? ৩০ সেকেন্ডে জেনে নাও।"],
  ["/en", 200, 'data-theme'],
  ["/en", 200, 'rel="manifest"'],
  ["/en/about", 200, "How Festival Atlas works"],
  ["/bn/about", 200, "FAQPage"],
  ["/manifest.webmanifest", 200, '"Festival Atlas"'],
  ["/en/play/puja-family", 200, "Puja Household"],
  ["/bn/play/gopal-wit", 200, "দরবারি বুদ্ধি"],
  ["/en/play/epic-adda", 200, "Mahabharata"],
  ["/bn/play/book-mood", 200, "বইয়ের তাকে"],
  ["/bn/play/puja-family/r/feast-captain", 200, "ভোজের ক্যাপ্টেন"],
  ["/en/play/book-mood/r/nonsense-fan", 200, "Nonsense Connoisseur"],
  ["/en", 200, `rel="canonical" href="${O}/en"`],
  ["/bn", 200, alt("en", `${O}/en`)],
  ["/bn", 200, alt("bn", `${O}/bn`)],
  ["/en", 200, alt("x-default", `${O}/`)],
  ["/en/puja", 200, "Pandals of Kolkata &amp; Dhaka, on a map"],
  ["/bn/puja", 200, "কলকাতা আর ঢাকার প্যান্ডেল, ম্যাপে"],
  ["/en/puja/sreebhumi-sporting-club", 200, "Hawa Mahal"],
  ["/bn/puja/chandranath-temple-sitakunda", 200, "চন্দ্রনাথ"],
  ["/en/puja/deshapriya-park", 200, "Get directions"],
  ["/en/puja", 200, "Chaltabagan Sarbojanin Durga Pujo"],
  ["/bn/puja", 200, "Chaltabagan Sarbojanin Durga Pujo"], // proper names are kept
  ["/en/puja", 200, `rel="canonical" href="${O}/en/puja"`],
  ["/en/puja/chaltabagan-sarbojanin", 200, "Chaltabagan Sarbojanin Durga Pujo"],
  ["/bn/puja/chaltabagan-sarbojanin", 200, HEAD("bn")],
  ["/en/puja/chaltabagan-sarbojanin", 200, 'application/ld+json'],
  ["/en/play", 200, "Puja Cartoon Universe"],
  ["/bn/play", 200, "পুজোর কার্টুন-জগৎ"],
  ["/bn/play", 200, "থিম-দা তন্ময়"],
  ["/en/play", 200, "Theme-da Tanmoy"],
  ["/en/play/puja-personality", 200, "Which Puja character are you?"],
  ["/bn/play/puja-personality", 200, "পুজোর কোন চরিত্র তুমি?"],
  ["/en/play/pandal-challenge", 200, HEAD("en")],
  ["/bn/play/puja-bingo", 200, "পুজো বিঙ্গো"],
  ["/en/play/puja-lines", 200, HEAD("en")],
  ["/en/play/puja-squad", 200, "Puja Squad Role Card"],
  ["/bn/play/puja-squad", 200, "পুজো-দলের রোল কার্ড"],
  ["/en/local", 200, "What’s happening now?"],
  ["/bn/local", 200, "এখন কোথায় পুজোর হইচই?"],
  ["/en/local", 200, "Dhakeshwari"],
  ["/bn", 200, "এখন কোথায় পুজোর হইচই?"],
  ["/en/play/puja-personality/r/bhog-samrat", 200, 'property="og:image"'],
  ["/bn/play/puja-personality/r/bhog-samrat", 200, "ভোগের বুম্বা"],
  ["/bn/play/puja-personality/r/bhog-samrat", 200, `rel="canonical" href="${O}/bn/play/puja-personality/r/bhog-samrat"`],
  ["/en/play/pandal-challenge/r/dead-phone", 200, HEAD("en")],
  ["/bn/play/puja-bingo/r/bingo-boss", 200, "বিঙ্গো-সম্রাট বুম্বা"],
  ["/sitemap.xml", 200, `${O}/bn/play/puja-bingo/r/one-line`],
  ["/sitemap.xml", 200, `${O}/en/puja/chaltabagan-sarbojanin`],
  ["/sitemap.xml", 200, 'hreflang="bn"'],
  ["/robots.txt", 200, `Sitemap: ${O}/sitemap.xml`],
  ["/en/play/does-not-exist", 404, "find that page"],
  ["/bn/play/does-not-exist", 404, "পাতাটি"],
  ["/en/puja/does-not-exist", 404, "find that page"],
  ["/en/does-not-exist", 404, "find that page"],
  ["/xx/play", 404, ""],
];

// Old unprefixed links redirect to /en (manual redirect check below).
const langRedirects = [
  // [Accept-Language header, expected destination]
  ["bn-IN,bn;q=0.9,en;q=0.5", "/bn"],
  ["en-US,en;q=0.9", "/en"],
  ["en-US,en;q=0.9,bn;q=0.4", "/en"],
  ["", "/en"],
];
const redirects = [
  ["/puja", "/en/puja"],
  ["/play", "/en/play"],
  ["/play/puja-bingo", "/en/play/puja-bingo"],
];

// Share-preview images must be real PNGs.
const images = [
  "/opengraph-image",
  "/en/puja/opengraph-image",
  "/bn/puja/opengraph-image",
  "/en/puja/chaltabagan-sarbojanin/opengraph-image",
  "/en/play/puja-bingo/opengraph-image",
  "/bn/play/puja-personality/r/bhog-samrat/opengraph-image",
  "/en/play/pandal-challenge/r/dead-phone/opengraph-image",
  "/favicon.ico",
  "/apple-icon.png",
];

const server = spawn("node_modules/.bin/next", ["start", "-p", String(PORT)], { stdio: "inherit" });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function waitReady() {
  for (let i = 0; i < 60; i++) {
    try {
      await fetch(base);
      return;
    } catch {
      await sleep(500);
    }
  }
  throw new Error("server did not start within 30s");
}

let failed = 0;
const report = (ok, label) => {
  if (!ok) failed++;
  console.log(`${ok ? "PASS" : "FAIL"} ${label}`);
};

try {
  await waitReady();
  for (const [path, status, text] of pages) {
    const res = await fetch(base + path);
    const body = await res.text();
    report(res.status === status && (typeof text === "string" ? body.includes(text) : text.test(body)), `${path} -> ${res.status} (want ${status}, contains ${JSON.stringify(text)})`);
  }
  for (const [from, to] of redirects) {
    const res = await fetch(base + from, { redirect: "manual" });
    const loc = res.headers.get("location") ?? "";
    report(res.status >= 300 && res.status < 400 && loc.endsWith(to), `${from} -> ${res.status} ${loc} (want ${to})`);
  }
  for (const [al, to] of langRedirects) {
    const res = await fetch(base + "/", { redirect: "manual", headers: al ? { "accept-language": al } : {} });
    const loc = res.headers.get("location") ?? "";
    report(res.status >= 300 && res.status < 400 && loc.endsWith(to), `/ [${al || "no header"}] -> ${res.status} ${loc} (want ${to})`);
  }
  for (const path of images) {
    const res = await fetch(base + path);
    const bytes = new Uint8Array(await res.arrayBuffer());
    const isPng = bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47;
    const isIco = bytes[0] === 0 && bytes[2] === 1;
    report(res.status === 200 && (isPng || (path.endsWith(".ico") && isIco)), `${path} -> ${res.status}, image=${isPng || isIco}`);
  }
} catch (err) {
  failed++;
  console.error("FAIL", err.message);
} finally {
  server.kill();
}
console.log(failed ? `\n${failed} check(s) failed` : "\nAll smoke checks passed");
process.exit(failed ? 1 : 0);

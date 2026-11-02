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
  ["/en/about", 200, "How Pujo Guide works"],
  ["/en", 200, "Pujo Guide"],
  ["/bn", 200, "পুজো গাইড"],
  ["/en", 200, 'rel="apple-touch-icon"'],
  ["/bn/about", 200, "FAQPage"],
  ["/manifest.webmanifest", 200, '"Pujo Guide"'],
  ["/en/play/puja-family", 200, "Puja Household"],
  ["/bn/play/gopal-wit", 200, "দরবারি বুদ্ধি"],
  ["/en/play/epic-adda", 200, "Mahabharata"],
  ["/bn/play/book-mood", 200, "বইয়ের তাকে"],
  ["/bn/play/puja-family/r/feast-captain", 200, "ভোজের ক্যাপ্টেন"],
  ["/en/play/book-mood/r/nonsense-fan", 200, "Nonsense Connoisseur"],
  ["/en", 200, `rel="canonical" href="${O}/en"`],
  ["/bn", 200, alt("en", `${O}/en`)],
  ["/bn", 200, alt("bn", `${O}/bn`)],
  ["/en", 200, alt("x-default", `${O}/?`)], // Next drops the trailing slash on the resolved root URL
  ["/en/puja", 200, "Pandals of Kolkata &amp; Dhaka, on a map"],
  ["/bn/puja", 200, "কলকাতা আর ঢাকার প্যান্ডেল, ম্যাপে"],
  ["/en/puja/sreebhumi-sporting-club", 200, "Hawa Mahal"],
  ["/bn/puja/chandranath-temple-sitakunda", 200, "চন্দ্রনাথ"],
  ["/en/puja/deshapriya-park", 200, "Get directions"],
  ["/en/greetings", 200, "Shubho Bijoya!"],
  ["/bn/greetings", 200, "শুভ অষ্টমী!"],
  ["/bn/greetings", 200, "কালীপুজো, ভাইফোঁটা, জগদ্ধাত্রী পুজোর শুভেচ্ছা কার্ড ২০২৬"],
  ["/en/greetings", 200, "Shubho Jagaddhatri Puja!"],
  ["/en/greetings", 200, "Shubho Bhai Phota!"],
  ["/bn/greetings", 200, "শুভ কালীপুজো!"],
  ["/en/kali-puja-2026", 200, "Make a Kali Puja greeting card"],
  ["/en/postcard", 200, "Puja postcard"],
  ["/bn/postcard", 200, "পুজো পোস্টকার্ড"],
  ["/en/puja/deshapriya-park", 200, "Postcard from your photo here"],
  ["/en/me", 200, "My Puja card"],
  ["/bn/me", 200, "আমার পুজো কার্ড"],
  ["/en/add-pandal", 200, "Add a pandal or mandir"],
  ["/bn/add-pandal", 200, "পুজো বা মন্দির যোগ করো"],
  ["/api/places", 200, '"ok":true'],
  ["/en/feedback", 200, "Your feedback"],
  ["/bn/feedback", 200, "তোমার মতামত"],
  ["/en", 200, "Festivals all year"],
  ["/en", 200, "Coming up"],
  ["/en", 200, "📖 Puja stories"],
  ["/en/kali-puja-2026", 200, "Are Kali Puja and Diwali on the same day in 2026?"],
  ["/bn", 200, 'href="/bn/ekadashi-2027"'],
  ["/en", 200, 'href="/en/calendar-2027"'],
  ["/en/kali-puja-2026", 200, "Kali Puja 2026: when and what time"],
  ["/bn/kali-puja-2026", 200, "কালীপুজো ২০২৬: কবে, কখন"],
  ["/en/kali-puja-2026", 200, "10:55 pm to 11:46 pm"],
  ["/en/kali-puja-2026", 200, '"@type":"FAQPage"'],
  ["/bn/kali-puja-2026", 200, alt("en", `${O}/en/kali-puja-2026`)],
  ["/sitemap.xml", 200, `${O}/bn/kali-puja-2026`],
  ["/en", 200, 'href="/en/kali-puja-2026"'],
  ["/en/kali-puja-2026", 200, "Kali Puja pandals 2026: Kolkata, Barasat, Naihati"],
  ["/bn/kali-puja-2026", 200, "নৈহাটির বড়মা"],
  ["/en/kali-puja-2026", 200, '"@type":"ItemList"'],
  ["/en/puja/fatakesto-kali-puja", 200, "Kali Puja 2026 in Kolkata"],
  ["/bn/puja/naihati-boro-maa", 200, "কালীপুজো ২০২৬"],
  ["/en/puja/naihati-boro-maa", 200, '"startDate":"2026-11-08"'],
  ["/en/puja", 200, "🌑 Kali Puja"],
  ["/en/puja", 200, "🏮 Jagaddhatri Puja"],
  ["/en/jagaddhatri-puja-2026", 200, "Jagaddhatri Puja 2026: when and where"],
  ["/bn/jagaddhatri-puja-2026", 200, "জগদ্ধাত্রী পুজো ২০২৬: কবে, কোথায়"],
  ["/en/jagaddhatri-puja-2026", 200, "18 Nov 6:04 am to 19 Nov 7:05 am"],
  ["/en/jagaddhatri-puja-2026", 200, '"@type":"FAQPage"'],
  ["/en/jagaddhatri-puja-2026", 200, '"@type":"ItemList"'],
  ["/en/jagaddhatri-puja-2026", 200, "Kanailal Pally"],
  ["/bn/jagaddhatri-puja-2026", 200, alt("en", `${O}/en/jagaddhatri-puja-2026`)],
  ["/sitemap.xml", 200, `${O}/bn/jagaddhatri-puja-2026`],
  ["/en", 200, 'href="/en/jagaddhatri-puja-2026"'],
  ["/en/puja/chashapara-burima-krishnanagar", 200, "Jagaddhatri Puja in Krishnanagar"],
  ["/en/passport", 200, "Jagaddhatri Puja 2026"],
  ["/en/ekadashi-2027", 200, "Ekadashi 2027: every date for Kolkata and Dhaka"],
  ["/bn/ekadashi-2027", 200, "নির্জলা একাদশী"],
  ["/en/ekadashi-2027", 200, "14 Jun 2:11 am – 15 Jun 2:07 am"],
  ["/en/saraswati-puja-2027", 200, "Saraswati Puja 2027: when and what time"],
  ["/bn/saraswati-puja-2027", 200, "সকাল ৬:১১ থেকে ১১:৫১"],
  ["/en/shivratri-2027", 200, "11:23 pm to 12:12 am"],
  ["/bn/shivratri-2027", 200, "শিবরাত্রি ২০২৭: কবে, কখন"],
  ["/en/poila-boishakh-2027", 200, "Poila Boishakh 1434: which day, where"],
  ["/en/poila-boishakh-2027", 200, '"startDate":"2027-04-14"'],
  ["/en/shivratri-2027", 200, '"@type":"FAQPage"'],
  ["/sitemap.xml", 200, `${O}/bn/ekadashi-2027`],
  ["/sitemap.xml", 200, `${O}/en/poila-boishakh-2027`],
  ["/en", 200, 'href="/en/saraswati-puja-2027"'],
  ["/en/greetings", 200, "Shubho Noboborsho!"],
  ["/en/calendar-2027", 200, "Bengali festival calendar 2027"],
  ["/bn/calendar-2027", 200, "কোজাগরী লক্ষ্মীপুজো"],
  ["/en/calendar-2027", 200, 'href="/en/saraswati-puja-2027"'],
  ["/en/calendar-2027", 200, '"startDate":"2027-10-05"'],
  ["/sitemap.xml", 200, `${O}/en/calendar-2027`],
  ["/en/ekadashi-2027", 200, 'href="/en/calendar-2027"'],
  ["/en/dol-purnima-2027", 200, "Dol Purnima 2027: when and what time"],
  ["/bn/dol-purnima-2027", 200, "২১ মার্চ সন্ধে ৬:২১ থেকে ২২ মার্চ বিকেল ৪:১৩"],
  ["/en/greetings", 200, "Happy Dol Jatra!"],
  ["/en/purnima-2027", 200, "Purnima 2027: every full moon for Kolkata and Dhaka"],
  ["/bn/purnima-2027", 200, "কোজাগরী লক্ষ্মীপুজো"],
  ["/en/purnima-2027", 200, 'href="/en/dol-purnima-2027"'],
  ["/en/greetings/bhaiphota", 200, "Shubho Bhai Phota wishes in Bengali"],
  ["/bn/greetings/noboborsho", 200, "শুভ নববর্ষ শুভেচ্ছা বার্তা"],
  ["/en/greetings/kali", 200, "Copy Bangla"],
  ["/en/greetings", 200, 'href="/en/greetings/saraswati"'],
  ["/sitemap.xml", 200, `${O}/bn/greetings/dol`],
  ["/en/blog", 200, "Puja stories"],
  ["/en/blog/naihati-boro-maa-kali-puja", 200, '"@type":"Article"'],
  ["/bn/blog/bhai-phota-rituals", 200, "ভাইফোঁটা"],
  ["/sitemap.xml", 200, `${O}/en/blog/kali-puja-and-diwali`],
  ["/en/blog/bhoot-chaturdashi-2026", 200, "10:47 am on 7 November"],
  ["/llms.txt", 200, "# Pujo Guide"],
  ["/llms-full.txt", 200, "### When is Kali Puja in 2026?"],
  ["/llms-full.txt", 200, "Kolkata, Thu 19 Nov: Jagaddhatri Puja"],
  ["/llms.txt", 200, `${O}/en/ekadashi-2027`],
  ["/llms.txt", 200, `${O}/en/blog/naihati-boro-maa-kali-puja`],
  ["/robots.txt", 200, "GPTBot"],
  ["/880f85be5d1a7f2a9a6bf0deec30bb06.txt", 200, "880f85be5d1a7f2a9a6bf0deec30bb06"],
  ["/en", 200, '"@type":"Organization"'],
  ["/en/jagaddhatri-puja-2026", 200, 'dateTime="2026-10-31"'],
  ["/en/blog/bhai-phota-rituals", 200, 'property="og:type" content="article"'],
  ["/en/ekadashi-2027", 200, "📤 Share"],
  ["/en/rash-purnima-2026", 200, "Rash Purnima 2026: when and where"],
  ["/bn/rash-purnima-2026", 200, "শাক্ত রাস"],
  ["/en/poush-sankranti-2027", 200, "Poush Sankranti 2027: when and what time"],
  ["/bn/poush-sankranti-2027", 200, "পাটিসাপটা"],
  ["/en/greetings/rash", 200, "Shubho Rash Purnima wishes in Bengali"],
  ["/bn/greetings/poush", 200, "শুভ পৌষ সংক্রান্তি"],
  ["/llms.txt", 200, `${O}/en/rash-purnima-2026`],
  ["/en/blog/tarapith-kali-puja", 200, '"@type":"Article"'],
  ["/bn/blog/shyama-puja-bangladesh", 200, "ঢাকেশ্বরী"],
  ["/en/blog/chhath-puja-2026-kolkata", 200, "Chhath"],
  ["/en/blog/kolkata-book-fair-2027", 200, "Book Fair"],
  ["/en/blog/poush-mela-shantiniketan", 200, "Poush Mela"],
  ["/en/kali-puja-2026", 200, "📖 Kali Puja stories"],
  ["/bn/greetings/barodin", 200, "শুভ বড়দিন শুভেচ্ছা বার্তা"],
  ["/en/greetings/newyear", 200, "Happy New Year 2027 wishes in Bengali"],
  ["/en/amavasya-2027", 200, "Amavasya 2027: every new moon for Kolkata and Dhaka"],
  ["/bn/amavasya-2027", 200, "দর্শ অমাবস্যা"],
  ["/en/purnima-2027", 200, 'href="/en/amavasya-2027"'],
  ["/en/blog/dakshineswar-kali-temple-guide", 200, "6:30 AM to 12:30 PM"],
  ["/bn/blog/belur-math-guide", 200, "বেলুড় মঠ"],
  ["/en/blog/kalighat-kali-temple-guide", 200, '"@type":"FAQPage"'],
  ["/en/blog/nabanna-festival", 200, "More stories"],
  ["/en/bengali-calendar-1433", 200, "Bengali calendar 1433"],
  ["/bn/bengali-calendar-1433", 200, "আজ বাংলা কত তারিখ?"],
  ["/en/bengali-calendar-1433", 200, "Revised Bangla calendar"],
  ["/en/rath-yatra-2027", 200, "Rath Yatra 2027: when and what time"],
  ["/bn/janmashtami-2027", 200, "নিশীথ পুজো"],
  ["/en/lakshmi-puja-2027", 200, "10:58 pm to 11:47 pm"],
  ["/en/durga-puja-2027", 200, "Tarpan: Kutup muhurat"],
  ["/en/calendar-2027", 200, 'href="/en/janmashtami-2027"'],
  ["/en/blog/mahishasura-mardini-radio", 200, '"@type":"Article"'],
  ["/bn/blog/kumartuli-idol-makers-kolkata", 200, "কুমোরটুলি"],
  ["/en/blog/durga-puja-unesco-heritage", 200, "UNESCO"],
  ["/en/jamai-shashthi-2027", 200, "Jamai Shashthi 2027: when and what time"],
  ["/bn/greetings/jamai", 200, "শুভ জামাইষষ্ঠী"],
  ["/en/ram-navami-2027", 200, "10:21 am to 12:53 pm"],
  ["/en/calendar-2027", 200, 'href="/en/ram-navami-2027"'],
  ["/en/kali-puja-2026", 200, 'href="/en/blog/naihati-boro-maa-kali-puja"'],
  ["/en/durga-puja-2027", 200, "Durga Puja 2027: which day is which"],
  ["/bn/durga-puja-2027", 200, "সন্ধিপুজো"],
  ["/en/dhanteras-2026", 200, "5:28 pm to 7:26 pm"],
  ["/bn/kartik-puja-2026", 200, "কার্তিক লড়াই"],
  ["/en/tulsi-vivah-2026", 200, "Tulsi Vivah 2026: when and what time"],
  ["/en/vivah-dates-2027", 200, "Fri 15 Jan"],
  ["/bn/griha-pravesh-dates-2027", 200, "গৃহপ্রবেশ"],
  ["/en/sankashti-chaturthi-2027", 200, "Lambodara"],
  ["/en/pradosh-vrat-2027", 200, "Pradosh"],
  ["/bn/masik-shivratri-2027", 200, "শিবরাত্রি"],
  ["/en/diwali-2027", 200, "6:00 pm to 7:05 pm"],
  ["/en/ganesh-chaturthi-2027", 200, "Ganesh Chaturthi 2027"],
  ["/bn/raksha-bandhan-2027", 200, "রাখি"],
  ["/en/navratri-2027", 200, "Ghatasthapana"],
  ["/bn/vishwakarma-puja-2027", 200, "বিশ্বকর্মা"],
  ["/en/akshaya-tritiya-2027", 200, "5:00 am to 9:03 am"],
  ["/en/hanuman-jayanti-2027", 200, "Hanuman Jayanti 2027"],
  ["/en/guru-purnima-2027", 200, "Guru Purnima 2027"],
  ["/en/gita-jayanti-2026", 200, "Gita Jayanti 2026"],
  ["/bn/vivah-panchami-2026", 200, "বিবাহ পঞ্চমী"],
  ["/en/grahan-2027", 200, "2 Aug"],
  ["/bn/manasa-puja-2027", 200, "মনসা"],
  ["/en/kali-puja-2027", 200, "10:55 pm"],
  ["/en/bhai-phota-2027", 200, "Bhai Phota 2027"],
  ["/en/dhanteras-2027", 200, "6:08 pm"],
  ["/en/chhath-puja-2027", 200, "Chhath"],
  ["/en/holi-2027", 200, "Holika Dahan"],
  ["/en/mahalaya-2027", 200, "11:03"],
  ["/bn/jagaddhatri-puja-2027", 200, "জগদ্ধাত্রী"],
  ["/en/kartik-puja-2027", 200, "Kartik Puja 2027"],
  ["/en/rash-purnima-2027", 200, "Rash Purnima 2027"],
  ["/en/sankranti-2027", 200, "Makara"],
  ["/bn/buddha-purnima-2027", 200, "বুদ্ধ"],
  ["/en/snana-yatra-2027", 200, "Snana Yatra 2027"],
  ["/en/radhashtami-2027", 200, "10:20 am"],
  ["/en/karwa-chauth-2027", 200, "7:03 pm"],
  ["/en/govardhan-puja-2027", 200, "Govardhan"],
  ["/en/dev-deepawali-2027", 200, "Varanasi"],
  ["/en/pitru-paksha-2027", 200, "Sarva Pitru Amavasya"],
  ["/en/mauni-amavasya-2027", 200, "Mauni Amavasya 2027"],
  ["/bn/magha-purnima-2027", 200, "মাঘী"],
  ["/en/shitala-ashtami-2027", 200, "5:32 am"],
  ["/en/akshaya-navami-2027", 200, "5:44 am"],
  ["/bn/annapurna-jayanti-2027", 200, "অন্নপূর্ণা"],
  ["/en/parshuram-jayanti-2027", 200, "Parshuram"],
  ["/bn/vat-savitri-2027", 200, "সাবিত্রী"],
  ["/en/blog/langalbandh-ashtami-snan-narayanganj", 200, "Langalbandh"],
  ["/en/blog/charak-puja-gajan-festival", 200, "Charak"],
  ["/en/blog/bengali-hindu-wedding-rituals", 200, "/en/vivah-dates-2027"],
  ["/bn/blog/annaprashan-mukhe-bhaat", 200, "অন্নপ্রাশন"],
  ["/en/blog/dhakeshwari-temple-dhaka", 200, '"@type":"Article"'],
  ["/bn/blog/bishnupur-terracotta-temples", 200, "বিষ্ণুপুর"],
  ["/en/blog/sandhi-puja-108-lamps", 200, "Sandhi"],
  ["/bn/blog/sindoor-khela-bijoya-dashami", 200, "সিঁদুর"],
  ["/en/ekadashi-2027/nirjala-ekadashi", 200, "12:58 pm to 3:40 pm"],
  ["/bn/ekadashi-2027/saphala-ekadashi-december", 200, "সফলা"],
  ["/en/ekadashi-2027", 200, 'href="/en/ekadashi-2027/devshayani-ekadashi"'],
  ["/en/calendar-2027/october", 200, "October 2027"],
  ["/bn/calendar-2027/march", 200, "মার্চ ২০২৭"],
  ["/en/calendar-2027", 200, 'href="/en/calendar-2027/june"'],
  ["/en/durga-puja-2027", 200, '"endDate":"2027-10-10"'],
  ["/en/durga-puja-2026", 200, 'href="/en/durga-puja-2027"'],
  ["/en/calendar-2027", 200, 'href="/en/durga-puja-2027"'],
  ["/bn/greetings", 200, "শুভ সরস্বতী পুজো!"],
  // SEO shell: hreflang on landing pages, sitemap coverage, crawling allowed.
  ["/en/puja/kolkata", 200, alt("bn", `${O}/bn/puja/kolkata`)],
  ["/bn/puja/kolkata", 200, alt("en", `${O}/en/puja/kolkata`)],
  ["/bn/durga-puja-2026", 200, alt("en", `${O}/en/durga-puja-2026`)],
  ["/en/puja/sreebhumi-sporting-club", 200, alt("bn", `${O}/bn/puja/sreebhumi-sporting-club`)],
  ["/en/puja/kolkata", 200, 'property="og:locale" content="en_IN"'],
  ["/bn/puja/sreebhumi-sporting-club", 200, 'property="og:locale" content="bn_IN"'],
  ["/bn", 200, 'property="og:locale" content="bn_BD"'],
  ["/sitemap.xml", 200, `${O}/bn/puja/kolkata`],
  ["/sitemap.xml", 200, `${O}/en/puja/dhaka`],
  ["/sitemap.xml", 200, `${O}/bn/puja/abroad`],
  ["/sitemap.xml", 200, `${O}/en/durga-puja-2026`],
  ["/sitemap.xml", 200, `${O}/bn/durga-puja-2026`],
  ["/robots.txt", 200, "Allow: /"],
  // Every indexed page has a share image and a snippet-length description.
  ["/en/about", 200, 'property="og:image"'],
  ["/bn/passport", 200, 'name="twitter:image"'],
  ["/en/puja/santosh-mitra-square", 200, /<meta name="description" content="[^"]{60,170}"/],
  // Data: 2026 editions with history, Bangla names on /bn, Siliguri grouped outside Kolkata.
  ["/en/puja/santosh-mitra-square", 200, "Vande Mataram"],
  ["/en/puja/santosh-mitra-square", 200, "Past themes"],
  ["/en/puja/alipore-sarbojanin", 200, "Ramayana: An Epic Woven in Time"],
  ["/bn/puja/sreebhumi-sporting-club", 200, "<h1>শ্রীভূমি স্পোর্টিং ক্লাব</h1>"],
  ["/bn/puja/kolkata", 200, "একডালিয়া এভারগ্রিন ক্লাব"],
  ["/en/puja/kolkata", 200, "Elsewhere in West Bengal"],
  ["/en/puja/kolkata", 200, /\d+ in Kolkata · \d+ elsewhere · \d+ on the map/],
  ["/en/admin", 200, "Admin"],
  ["/en/passport", 200, "My Puja passport"],
  ["/bn/passport", 200, "আমার পুজো পাসপোর্ট"],
  ["/en/puja/deshapriya-park", 200, "Tick as visited"],
  ["/api/live", 200, '"ok":true'],
  ["/api/community", 200, '"ok":true'],
  ["/api/keepalive", 503, '"disabled":true'],
  ["/en/puja/kolkata", 200, "Kolkata Durga Puja 2026: pandals, themes and a map"],
  ["/bn/puja/kolkata", 200, "কলকাতার দুর্গাপুজো ২০২৬"],
  ["/en/puja/dhaka", 200, "Dhakeshwari"],
  ["/en/puja/abroad", 200, "London"],
  ["/en/puja/kolkata", 200, '"@type":"FAQPage"'],
  ["/en/puja/kolkata", 200, '"@type":"ItemList"'],
  ["/en/durga-puja-2026", 200, "Durga Puja 2026: the dates, day by day"],
  ["/bn/durga-puja-2026", 200, "ষষ্ঠী"],
  ["/en/durga-puja-2026", 200, "Sandhi Puja 19 Oct 10:27–11:15 am"],
  ["/bn/durga-puja-2026", 200, "সন্ধিপুজো"],
  ["/en/durga-puja-2026", 200, '"@type":"Event"'],
  ["/en/puja/sreebhumi-sporting-club", 200, '"@type":"Event"'],
  ["/en/puja/sreebhumi-sporting-club", 200, '"startDate":"2026-10-17"'],
  ["/en", 200, '"@type":"SearchAction"'],
  ["/sitemap.xml", 200, `${O}/bn/puja/kolkata`],
  ["/sitemap.xml", 200, `${O}/en/durga-puja-2026`],
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

// Share-preview images must be real PNGs. Their URLs are read from each page's og:image tag, so the
// test follows whatever URL scheme Next generates (plain or per-id images).
const imagePages = [
  "/en",
  "/en/puja",
  "/bn/puja",
  "/en/puja/chaltabagan-sarbojanin",
  "/en/play/puja-bingo",
  "/bn/play/puja-personality/r/bhog-samrat",
  "/en/play/pandal-challenge/r/dead-phone",
  "/en/durga-puja-2026",
  "/en/kali-puja-2026",
  "/en/jagaddhatri-puja-2026",
  "/en/ekadashi-2027",
  "/bn/saraswati-puja-2027",
  "/en/about",
  "/bn/play",
  "/en/puja/kolkata",
];
// Icons: the SVG favicon and the generated home-screen PNG (app/apple-icon.tsx; the URL has no extension).
const images = ["/icon.svg", "/apple-icon"];

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
  const checkImage = async (path, label = path) => {
    const res = await fetch(base + path);
    const bytes = new Uint8Array(await res.arrayBuffer());
    const isPng = bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47;
    const isIco = bytes[0] === 0 && bytes[2] === 1;
    const head = new TextDecoder().decode(bytes.slice(0, 64)).trimStart();
    const isSvg = path.endsWith(".svg") && (head.startsWith("<svg") || head.startsWith("<?xml"));
    report(res.status === 200 && (isPng || isSvg || (path.endsWith(".ico") && isIco)), `${label} -> ${res.status}, image=${isPng || isSvg || isIco}`);
  };
  for (const page of imagePages) {
    const html = await (await fetch(base + page)).text();
    const m = /property="og:image"\s+content="([^"]+)"/.exec(html) ?? /content="([^"]+)"\s+property="og:image"/.exec(html);
    const alt = /property="og:image:alt"\s+content="([^"]+)"/.exec(html) ?? /content="([^"]+)"\s+property="og:image:alt"/.exec(html);
    if (!m) {
      report(false, `${page}: no og:image tag`);
      continue;
    }
    const path = m[1].replace(/^https?:\/\/[^/]+/, "").replace(/&amp;/g, "&");
    await checkImage(path, `${page} og:image ${path}`);
    report(Boolean(alt && alt[1].length > 15 && alt[1] !== "Festival Atlas activity"), `${page} og:image:alt is specific (${alt ? alt[1] : "missing"})`);
  }
  for (const path of images) await checkImage(path);
} catch (err) {
  failed++;
  console.error("FAIL", err.message);
} finally {
  server.kill();
}
console.log(failed ? `\n${failed} check(s) failed` : "\nAll smoke checks passed");
process.exit(failed ? 1 : 0);

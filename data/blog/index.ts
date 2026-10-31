// All blog articles, newest first. Add a new article file here and it gets a page, a sitemap entry and a
// card on /blog.

import { BELUR_MATH } from "./belur-math";
import { BHAI_PHOTA } from "./bhai-phota";
import { BHOOT_CHATURDASHI } from "./bhoot-chaturdashi";
import { CHANDANNAGAR_LIGHTS } from "./chandannagar-lights";
import { CHHATH_PUJA_KOLKATA } from "./chhath-puja-kolkata";
import { DAKSHINESWAR_TEMPLE } from "./dakshineswar-temple";
import { EKADASHI_FASTING } from "./ekadashi-fasting";
import { KALI_PUJA_BANGLADESH } from "./kali-puja-bangladesh";
import { KALIGHAT_TEMPLE } from "./kalighat-temple";
import { KALI_PUJA_DIWALI } from "./kali-puja-diwali";
import { KOLKATA_BOOK_FAIR } from "./kolkata-book-fair-2027";
import { KRISHNANAGAR_JAGADDHATRI } from "./krishnanagar-jagaddhatri";
import { NABANNA } from "./nabanna";
import { NAIHATI_BORO_MAA } from "./naihati-boro-maa";
import { POILA_BOISHAKH_TRADITIONS } from "./poila-boishakh-traditions";
import { POUSH_MELA } from "./poush-mela-shantiniketan";
import { SARASWATI_RITUALS } from "./saraswati-puja-rituals";
import { TARAPITH_KALI_PUJA } from "./tarapith-kali-puja";
import type { Article } from "./types";

export const ARTICLES: Article[] = [BHOOT_CHATURDASHI, KALI_PUJA_DIWALI, NAIHATI_BORO_MAA, TARAPITH_KALI_PUJA, DAKSHINESWAR_TEMPLE, KALIGHAT_TEMPLE, BELUR_MATH, KALI_PUJA_BANGLADESH, CHHATH_PUJA_KOLKATA, BHAI_PHOTA, CHANDANNAGAR_LIGHTS, KRISHNANAGAR_JAGADDHATRI, EKADASHI_FASTING, NABANNA, POUSH_MELA, KOLKATA_BOOK_FAIR, SARASWATI_RITUALS, POILA_BOISHAKH_TRADITIONS];

export const getArticle = (slug: string): Article | undefined => ARTICLES.find((a) => a.slug === slug);

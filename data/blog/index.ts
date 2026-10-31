// All blog articles, newest first. Add a new article file here and it gets a page, a sitemap entry and a
// card on /blog.

import { BHAI_PHOTA } from "./bhai-phota";
import { BHOOT_CHATURDASHI } from "./bhoot-chaturdashi";
import { CHANDANNAGAR_LIGHTS } from "./chandannagar-lights";
import { EKADASHI_FASTING } from "./ekadashi-fasting";
import { KALI_PUJA_DIWALI } from "./kali-puja-diwali";
import { KRISHNANAGAR_JAGADDHATRI } from "./krishnanagar-jagaddhatri";
import { NAIHATI_BORO_MAA } from "./naihati-boro-maa";
import { POILA_BOISHAKH_TRADITIONS } from "./poila-boishakh-traditions";
import { SARASWATI_RITUALS } from "./saraswati-puja-rituals";
import type { Article } from "./types";

export const ARTICLES: Article[] = [BHOOT_CHATURDASHI, KALI_PUJA_DIWALI, NAIHATI_BORO_MAA, BHAI_PHOTA, CHANDANNAGAR_LIGHTS, KRISHNANAGAR_JAGADDHATRI, EKADASHI_FASTING, SARASWATI_RITUALS, POILA_BOISHAKH_TRADITIONS];

export const getArticle = (slug: string): Article | undefined => ARTICLES.find((a) => a.slug === slug);

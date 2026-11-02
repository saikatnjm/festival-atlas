// All blog articles, newest first. Add a new article file here and it gets a page, a sitemap entry and a
// card on /blog.

import { BELUR_MATH } from "./belur-math";
import { BHAI_PHOTA } from "./bhai-phota";
import { BHOOT_CHATURDASHI } from "./bhoot-chaturdashi";
import { CHANDANNAGAR_LIGHTS } from "./chandannagar-lights";
import { CHHATH_PUJA_KOLKATA } from "./chhath-puja-kolkata";
import { DAKSHINESWAR_TEMPLE } from "./dakshineswar-temple";
import { DURGA_PUJA_UNESCO } from "./durga-puja-unesco";
import { EKADASHI_FASTING } from "./ekadashi-fasting";
import { KALI_PUJA_BANGLADESH } from "./kali-puja-bangladesh";
import { KALIGHAT_TEMPLE } from "./kalighat-temple";
import { KALI_PUJA_DIWALI } from "./kali-puja-diwali";
import { KOLKATA_BOOK_FAIR } from "./kolkata-book-fair-2027";
import { KRISHNANAGAR_JAGADDHATRI } from "./krishnanagar-jagaddhatri";
import { KUMARTULI } from "./kumartuli";
import { MAHISHASURA_MARDINI } from "./mahishasura-mardini";
import { NABANNA } from "./nabanna";
import { NAIHATI_BORO_MAA } from "./naihati-boro-maa";
import { POILA_BOISHAKH_TRADITIONS } from "./poila-boishakh-traditions";
import { POUSH_MELA } from "./poush-mela-shantiniketan";
import { SARASWATI_RITUALS } from "./saraswati-puja-rituals";
import { TARAPITH_KALI_PUJA } from "./tarapith-kali-puja";
import { CHANDRANATH_TEMPLE } from "./chandranath-temple";
import { DHAKESHWARI_TEMPLE } from "./dhakeshwari-temple";
import { JESSORESHWARI_TEMPLE } from "./jessoreshwari-temple";
import { KANTAJEW_TEMPLE } from "./kantajew-temple";
import { PUTHIA_TEMPLES } from "./puthia-temples";
import { SHAKTI_PEETHAS_BENGAL } from "./shakti-peethas-bengal";
import { BISHNUPUR_TEMPLES } from "./bishnupur-temples";
import { TARAKESWAR_TEMPLE } from "./tarakeswar-temple";
import { MAYAPUR_ISKCON } from "./mayapur-iskcon";
import { HANGSESHWARI_TEMPLE } from "./hangseshwari-temple";
import { THANTHANIA_KALIBARI } from "./thanthania-kalibari";
import { BAKRESHWAR_KANKALITALA } from "./bakreshwar-kankalitala";
import { NABAPATRIKA_KOLA_BOU } from "./nabapatrika-kola-bou";
import { SANDHI_PUJA } from "./sandhi-puja";
import { KUMARI_PUJA } from "./kumari-puja";
import { SINDOOR_KHELA } from "./sindoor-khela";
import { DHUNUCHI_NAACH } from "./dhunuchi-naach";
import { AKAL_BODHON } from "./akal-bodhon";
import { KOJAGORI_LAKSHMI_PUJA } from "./kojagori-lakshmi-puja-rituals";
import { CHARAK_GAJAN } from "./charak-gajan";
import { JAMAI_SHASHTHI } from "./jamai-shashthi-traditions";
import { MAHESH_RATH_YATRA } from "./mahesh-rath-yatra";
import { POUSH_PARBON_PITHE } from "./poush-parbon-pithe";
import { JHULAN_YATRA } from "./jhulan-yatra";
import type { Article } from "./types";

export const ARTICLES: Article[] = [KOJAGORI_LAKSHMI_PUJA, CHARAK_GAJAN, JAMAI_SHASHTHI, MAHESH_RATH_YATRA, POUSH_PARBON_PITHE, JHULAN_YATRA, NABAPATRIKA_KOLA_BOU, SANDHI_PUJA, KUMARI_PUJA, SINDOOR_KHELA, DHUNUCHI_NAACH, AKAL_BODHON, BISHNUPUR_TEMPLES, TARAKESWAR_TEMPLE, MAYAPUR_ISKCON, HANGSESHWARI_TEMPLE, THANTHANIA_KALIBARI, BAKRESHWAR_KANKALITALA, SHAKTI_PEETHAS_BENGAL, DHAKESHWARI_TEMPLE, CHANDRANATH_TEMPLE, KANTAJEW_TEMPLE, PUTHIA_TEMPLES, JESSORESHWARI_TEMPLE, BHOOT_CHATURDASHI, KALI_PUJA_DIWALI, NAIHATI_BORO_MAA, TARAPITH_KALI_PUJA, DAKSHINESWAR_TEMPLE, KALIGHAT_TEMPLE, BELUR_MATH, KALI_PUJA_BANGLADESH, CHHATH_PUJA_KOLKATA, BHAI_PHOTA, CHANDANNAGAR_LIGHTS, KRISHNANAGAR_JAGADDHATRI, EKADASHI_FASTING, NABANNA, POUSH_MELA, MAHISHASURA_MARDINI, KUMARTULI, DURGA_PUJA_UNESCO, KOLKATA_BOOK_FAIR, SARASWATI_RITUALS, POILA_BOISHAKH_TRADITIONS];

export const getArticle = (slug: string): Article | undefined => ARTICLES.find((a) => a.slug === slug);

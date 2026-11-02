// Every festival landing page built on FestivalPage, for the sitemap and /llms.txt. (Kali Puja 2026 and
// Durga Puja 2026 have their own page code and are listed there separately.)

import { BENGALI_CALENDAR_1433 } from "./bengali-calendar-1433";
import { CALENDAR_2027 } from "./calendar-2027";
import { DOL_2027 } from "./dol-2027";
import { DURGA_2027 } from "./durga-2027";
import { JAMAI_2027, JANMASHTAMI_2027, LAKSHMI_2027, RAM_NAVAMI_2027, RATH_2027 } from "./mid-2027";
import { JAGADDHATRI_2026 } from "./jagaddhatri-2026";
import { AMAVASYA_2027, EKADASHI_2027, PURNIMA_2027 } from "./lunar-2027";
import { GRIHA_PRAVESH_2027, VIVAH_2027 } from "./muhurat-2027";
import { MASIK_SHIVRATRI_2027, PRADOSH_2027, SANKASHTI_2027 } from "./vrat-2027";
import { DIWALI_2027, GANESH_2027, NAVRATRI_2027, RAKHI_2027 } from "./major-2027";
import { AKSHAYA_2027, GURU_PURNIMA_2027, HANUMAN_2027, VISHWAKARMA_2027 } from "./more-2027";
import { GITA_JAYANTI_2026, GRAHAN_2027, MANASA_2027, VIVAH_PANCHAMI_2026 } from "./extra-2027";
import { BHAI_PHOTA_2027, CHHATH_2027, DHANTERAS_2027, KALI_PUJA_2027 } from "./autumn-2027";
import { HOLI_2027, JAGADDHATRI_2027, KARTIK_PUJA_2027, MAHALAYA_2027, RASH_2027 } from "./winter-2027";
import { BUDDHA_PURNIMA_2027, RADHASHTAMI_2027, SANKRANTI_2027, SNANA_YATRA_2027 } from "./summer-2027";
import { DHANTERAS_2026, KARTIK_PUJA_2026, TULSI_VIVAH_2026 } from "./nov-2026";
import { POILA_BOISHAKH_2027 } from "./poila-boishakh-2027";
import { POUSH_SANKRANTI_2027 } from "./poush-sankranti-2027";
import { RASH_2026 } from "./rash-2026";
import { SARASWATI_2027 } from "./saraswati-2027";
import { SHIVRATRI_2027 } from "./shivratri-2027";
import { EKADASHI_PAGES } from "./ekadashi-pages-2027";
import { monthPages } from "./months-2027";
import type { FestivalPage } from "./types";

const BASE_PAGES: FestivalPage[] = [
  DHANTERAS_2026,
  KARTIK_PUJA_2026,
  TULSI_VIVAH_2026,
  JAGADDHATRI_2026,
  RASH_2026,
  DURGA_2027,
  CALENDAR_2027,
  BENGALI_CALENDAR_1433,
  EKADASHI_2027,
  PURNIMA_2027,
  AMAVASYA_2027,
  POUSH_SANKRANTI_2027,
  SARASWATI_2027,
  SHIVRATRI_2027,
  DOL_2027,
  RAM_NAVAMI_2027,
  JAMAI_2027,
  RATH_2027,
  JANMASHTAMI_2027,
  LAKSHMI_2027,
  POILA_BOISHAKH_2027,
  VIVAH_2027,
  GRIHA_PRAVESH_2027,
  SANKASHTI_2027,
  PRADOSH_2027,
  MASIK_SHIVRATRI_2027,
  NAVRATRI_2027,
  RAKHI_2027,
  GANESH_2027,
  DIWALI_2027,
  HANUMAN_2027,
  AKSHAYA_2027,
  GURU_PURNIMA_2027,
  VISHWAKARMA_2027,
  VIVAH_PANCHAMI_2026,
  GITA_JAYANTI_2026,
  GRAHAN_2027,
  MANASA_2027,
  DHANTERAS_2027,
  KALI_PUJA_2027,
  BHAI_PHOTA_2027,
  CHHATH_2027,
  HOLI_2027,
  MAHALAYA_2027,
  JAGADDHATRI_2027,
  KARTIK_PUJA_2027,
  RASH_2027,
  SANKRANTI_2027,
  BUDDHA_PURNIMA_2027,
  SNANA_YATRA_2027,
  RADHASHTAMI_2027,
];

/** Every page, plus one page per 2027 Ekadashi and the twelve 2027 month pages built from them. */
export const FESTIVAL_PAGES: FestivalPage[] = [...BASE_PAGES, ...EKADASHI_PAGES, ...monthPages(BASE_PAGES)];

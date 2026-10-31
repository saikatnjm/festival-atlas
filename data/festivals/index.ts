// Every festival landing page built on FestivalPage, for the sitemap and /llms.txt. (Kali Puja 2026 and
// Durga Puja 2026 have their own page code and are listed there separately.)

import { CALENDAR_2027 } from "./calendar-2027";
import { DOL_2027 } from "./dol-2027";
import { DURGA_2027 } from "./durga-2027";
import { JAGADDHATRI_2026 } from "./jagaddhatri-2026";
import { AMAVASYA_2027, EKADASHI_2027, PURNIMA_2027 } from "./lunar-2027";
import { POILA_BOISHAKH_2027 } from "./poila-boishakh-2027";
import { POUSH_SANKRANTI_2027 } from "./poush-sankranti-2027";
import { RASH_2026 } from "./rash-2026";
import { SARASWATI_2027 } from "./saraswati-2027";
import { SHIVRATRI_2027 } from "./shivratri-2027";
import type { FestivalPage } from "./types";

export const FESTIVAL_PAGES: FestivalPage[] = [
  JAGADDHATRI_2026,
  RASH_2026,
  DURGA_2027,
  CALENDAR_2027,
  EKADASHI_2027,
  PURNIMA_2027,
  AMAVASYA_2027,
  POUSH_SANKRANTI_2027,
  SARASWATI_2027,
  SHIVRATRI_2027,
  DOL_2027,
  POILA_BOISHAKH_2027,
];

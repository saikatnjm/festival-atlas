// Which puja a listing is for. Data-free so client components can import it without the directory JSON.

/** Entries without `puja` are Durga Puja. */
export type PujaKind = "durga" | "kali" | "jagaddhatri";
export type OtherPuja = Exclude<PujaKind, "durga">;

/** Non-Durga pujas in the directory: chip/badge icon, hub page, share-image kicker. */
export const OTHER_PUJAS: Record<OtherPuja, { icon: string; hub: string; og: string }> = {
  kali: { icon: "🌑", hub: "/kali-puja-2026", og: "KALI PUJA PANDAL" },
  jagaddhatri: { icon: "🏮", hub: "/jagaddhatri-puja-2026", og: "JAGADDHATRI PUJA PANDAL" },
};
export const OTHER_PUJA_IDS = Object.keys(OTHER_PUJAS) as OtherPuja[];

"use client";

import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import type { LayerGroup, Map as LeafletMap } from "leaflet";
import type { PandalItem } from "@/data/pandals/view";
import { spreadPins } from "@/lib/pandal-filter";

type Leaflet = typeof import("leaflet");
type Pin = PandalItem & { lat: number; lng: number };

// Tile provider is one constant so it can be swapped later. OSM's tile usage
// policy applies (attribution required, light use): https://operations.osmfoundation.org/policies/tiles/
const TILE_URL = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const WORLD_VIEW: [number, number] = [24, 20];

interface Props {
  pins: Pin[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  label: string;
  loading: string;
}

export default function PujaMap({ pins, selectedId, onSelect, label, loading }: Props) {
  const elRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<{ L: Leaflet; map: LeafletMap; layer: LayerGroup } | null>(null);
  const [ready, setReady] = useState(false);

  // Create the map lazily, once the container has a real size (it may start hidden on mobile).
  useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    let disposed = false;
    let starting = false;

    const init = async () => {
      if (mapRef.current || starting) return;
      starting = true;
      const L = await import("leaflet");
      if (disposed) return;
      const map = L.map(el, { scrollWheelZoom: false, worldCopyJump: true, minZoom: 2 }).setView(WORLD_VIEW, 2);
      L.tileLayer(TILE_URL, { attribution: ATTRIBUTION, maxZoom: 19 }).addTo(map);
      mapRef.current = { L, map, layer: L.layerGroup().addTo(map) };
      setReady(true);
    };

    const observer = new ResizeObserver(() => {
      if (mapRef.current) mapRef.current.map.invalidateSize();
      else if (el.clientWidth > 0 && el.clientHeight > 0) void init();
    });
    observer.observe(el);

    return () => {
      disposed = true;
      observer.disconnect();
      mapRef.current?.map.remove();
      mapRef.current = null;
    };
  }, []);

  // Markers: rebuilt when the filtered set or selection changes (small static dataset).
  useEffect(() => {
    const s = mapRef.current;
    if (!ready || !s) return;
    const { L, layer } = s;
    layer.clearLayers();
    const spread = spreadPins(pins);
    for (const p of pins) {
      const active = p.id === selectedId;
      L.marker(spread.get(p.id) ?? [p.lat, p.lng], {
        title: p.name,
        alt: p.name,
        zIndexOffset: active ? 1000 : 0,
        icon: L.divIcon({
          className: "pin-wrap",
          html: `<span class="pin pin-${p.status}${active ? " pin-active" : ""}"></span>`,
          iconSize: [28, 28],
          iconAnchor: [14, 14],
        }),
      })
        .on("click", () => onSelect(p.id))
        .addTo(layer);
    }
  }, [ready, pins, selectedId, onSelect]);

  // Re-fit the view when the set of visible pins changes (not when only the selection changes).
  const pinKey = pins.map((p) => p.id).join("|");
  useEffect(() => {
    const s = mapRef.current;
    if (!ready || !s) return;
    if (pins.length === 0) return void s.map.setView(WORLD_VIEW, 2);
    if (pins.length === 1) return void s.map.setView([pins[0].lat, pins[0].lng], 11);
    s.map.fitBounds(s.L.latLngBounds(pins.map((p) => [p.lat, p.lng] as [number, number])), { padding: [40, 40], maxZoom: 12 });
    // pinKey stands in for `pins`, which is a new array on every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, pinKey]);

  // Centre on the selected pin.
  useEffect(() => {
    const s = mapRef.current;
    if (!ready || !s || !selectedId) return;
    const p = pins.find((x) => x.id === selectedId);
    if (p) s.map.panTo([p.lat, p.lng]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, selectedId]);

  return (
    <div className="map-shell">
      <div ref={elRef} className="map" role="region" aria-label={label} />
      {!ready && <p className="map-status">{loading}</p>}
    </div>
  );
}

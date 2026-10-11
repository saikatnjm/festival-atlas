// Original, fictional scene illustrations for the games (viewBox 320x180). Decorative only:
// the meaning is always carried by the text beside them. Plain SVG, no classes or hooks.

export type SceneKind = "queue" | "dhak" | "food" | "wallet" | "rain" | "battery" | "night";

const INK = "#2a1a14";
const S = { stroke: INK, strokeWidth: 3, strokeLinejoin: "round", strokeLinecap: "round" } as const;

function bunting(y = 10, colors = ["#f2a900", "#d33a2f", "#fff", "#0d7a73"]) {
  const flags = Array.from({ length: 9 }, (_, i) => i);
  return (
    <g>
      <path d={`M0 ${y} Q160 ${y + 26} 320 ${y}`} fill="none" {...S} strokeWidth={2} />
      {flags.map((i) => {
        const x = 18 + i * 35;
        const dy = 6 + Math.sin((i / 8) * Math.PI) * 18;
        return (
          <path key={i} d={`M${x} ${y + dy} l16 0 l-8 18 z`} fill={colors[i % colors.length]} {...S} strokeWidth={2} />
        );
      })}
    </g>
  );
}

function person(x: number, y: number, body: string, skin: string, s = 1) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x={-9} y={0} width={18} height={30} rx={8} fill={body} {...S} strokeWidth={2.5} />
      <circle cx={0} cy={-8} r={9} fill={skin} {...S} strokeWidth={2.5} />
    </g>
  );
}

function queue() {
  return (
    <g>
      <rect width={320} height={180} fill="#ffb86b" />
      <circle cx={250} cy={44} r={22} fill="#ffe08f" />
      <rect y={140} width={320} height={40} fill="#c9835a" />
      <rect x={196} y={52} width={96} height={90} fill="#fff" {...S} />
      <path d="M190 52 L244 16 L298 52 Z" fill="#d33a2f" {...S} />
      <path d="M228 142 L228 96 Q244 78 260 96 L260 142 Z" fill="#7a1f1f" {...S} />
      <circle cx={244} cy={10} r={6} fill="#f2a900" {...S} strokeWidth={2} />
      {[206, 218, 270, 282].map((x) => (
        <circle key={x} cx={x} cy={70} r={4} fill="#f2a900" {...S} strokeWidth={1.5} />
      ))}
      {person(30, 120, "#4338ca", "#8a5a3c")}
      {person(62, 124, "#c2185b", "#e8b48a", 0.95)}
      {person(94, 120, "#0d7a73", "#c68642")}
      {person(126, 124, "#e8590c", "#d9a066", 0.95)}
      {person(158, 120, "#2f855a", "#f2c9a0")}
      {person(190, 124, "#e0a100", "#b9794a", 0.95)}
      <path d="M20 160 L300 160" stroke={INK} strokeWidth={2} strokeDasharray="6 8" />
      {bunting(8)}
    </g>
  );
}

function dhak() {
  return (
    <g>
      <rect width={320} height={180} fill="#2b2a6b" />
      {[[30, 40], [70, 22], [250, 30], [290, 60], [210, 18], [110, 50]].map(([x, y]) => (
        <path key={`${x}${y}`} d={`M${x} ${y - 6} L${x + 2} ${y - 2} L${x + 6} ${y} L${x + 2} ${y + 2} L${x} ${y + 6} L${x - 2} ${y + 2} L${x - 6} ${y} L${x - 2} ${y - 2} Z`} fill="#ffe08f" />
      ))}
      <rect y={150} width={320} height={30} fill="#171642" />
      <path d="M100 70 Q160 54 220 70 L226 128 Q160 150 94 128 Z" fill="#e8590c" {...S} />
      <ellipse cx={160} cy={72} rx={60} ry={13} fill="#ffe3c4" {...S} />
      <path d="M104 82 L118 128 M122 86 L134 134 M142 88 L148 138 M160 88 L162 140 M178 88 L176 138 M198 86 L190 134 M216 82 L204 128" fill="none" stroke="#ffe08f" strokeWidth={3} strokeLinecap="round" />
      <path d="M250 66 L214 40" {...S} strokeWidth={5} />
      <circle cx={256} cy={70} r={8} fill="#ffe3c4" {...S} />
      <path d="M70 66 L104 44" {...S} strokeWidth={5} />
      <circle cx={64} cy={70} r={8} fill="#ffe3c4" {...S} />
      {[[40, 120, 14], [26, 100, 9], [286, 112, 12], [300, 92, 8]].map(([x, y, r]) => (
        <circle key={`${x}${y}`} cx={x} cy={y} r={r} fill="#c9c9e8" fillOpacity={0.55} />
      ))}
      {bunting(8, ["#ffe08f", "#ff6f91", "#8fd3ff", "#fff"])}
    </g>
  );
}

function food() {
  return (
    <g>
      <rect width={320} height={180} fill="#ffe3b0" />
      <path d="M40 18 L280 18 L300 54 L20 54 Z" fill="#d33a2f" {...S} />
      {[60, 100, 140, 180, 220, 260].map((x, i) => (
        <path key={x} d={`M${x - 20} 18 L${x} 18 L${x + (i % 2 ? 4 : 0)} 54 L${x - 24} 54 Z`} fill="#fff" fillOpacity={i % 2 ? 0 : 0.9} />
      ))}
      <rect y={140} width={320} height={40} fill="#b87445" />
      <path d="M96 78 Q160 60 224 78 L216 140 Q160 156 104 140 Z" fill="#7a7f87" {...S} />
      <ellipse cx={160} cy={78} rx={64} ry={14} fill="#f6c453" {...S} />
      <path d="M130 56 Q122 40 132 28 M160 52 Q152 36 162 22 M190 56 Q182 40 192 28" fill="none" stroke="#9a8a7c" strokeWidth={4} strokeLinecap="round" />
      <path d="M232 60 L270 128" {...S} strokeWidth={5} />
      <circle cx={228} cy={56} r={13} fill="#d7dbe0" {...S} />
      {[44, 76].map((x) => (
        <g key={x}>
          <ellipse cx={x} cy={134} rx={22} ry={7} fill="#fff" {...S} />
          <path d={`M${x - 14} 132 Q${x} 112 ${x + 14} 132 Z`} fill="#f6c453" {...S} strokeWidth={2.5} />
        </g>
      ))}
    </g>
  );
}

function wallet() {
  return (
    <g>
      <rect width={320} height={180} fill="#fff1c2" />
      <rect y={146} width={320} height={34} fill="#e8c98a" />
      <path d="M96 52 L224 52 L238 150 L82 150 Z" fill="#c68642" {...S} />
      <path d="M118 52 Q118 22 160 22 Q202 22 202 52" fill="none" {...S} strokeWidth={5} />
      <path d="M96 52 L224 52" {...S} strokeWidth={5} />
      <path d="M144 88 Q144 72 160 72 Q176 72 176 86 Q176 96 160 102 L160 112" fill="none" stroke="#fff" strokeWidth={9} strokeLinecap="round" />
      <circle cx={160} cy={130} r={5} fill="#fff" />
      <circle cx={268} cy={132} r={16} fill="#f2a900" {...S} />
      <path d="M262 132 L274 132" {...S} />
      <path d="M244 140 L226 140 M246 150 L232 150" fill="none" stroke={INK} strokeWidth={3} strokeLinecap="round" />
      <ellipse cx={58} cy={60} rx={12} ry={6} fill="#fff" {...S} strokeWidth={2} transform="rotate(-30 58 60)" />
      <ellipse cx={74} cy={56} rx={12} ry={6} fill="#fff" {...S} strokeWidth={2} transform="rotate(30 74 56)" />
      <circle cx={66} cy={64} r={4} fill={INK} />
      {bunting(8)}
    </g>
  );
}

function rain() {
  return (
    <g>
      <rect width={320} height={180} fill="#9db7d4" />
      <path d="M40 78 Q36 46 70 48 Q80 22 112 36 Q132 14 158 38 Q196 30 200 62 Q232 62 228 88 L48 90 Q30 90 40 78 Z" fill="#5c6f8a" {...S} transform="translate(30 -10)" />
      {Array.from({ length: 14 }, (_, i) => (
        <path key={i} d={`M${34 + i * 21} ${88 + (i % 3) * 12} l-6 18`} stroke="#eaf4ff" strokeWidth={3} strokeLinecap="round" />
      ))}
      <rect y={150} width={320} height={30} fill="#6a7f98" />
      <ellipse cx={80} cy={162} rx={34} ry={7} fill="#cfe5fa" />
      <ellipse cx={250} cy={166} rx={26} ry={6} fill="#cfe5fa" />
      <path d="M130 140 Q160 82 190 140 Z" fill="#d33a2f" {...S} />
      <path d="M160 140 L160 168 Q160 176 168 174" fill="none" {...S} />
      <path d="M145 140 Q152 118 160 140 M160 140 Q168 118 175 140" fill="none" stroke={INK} strokeWidth={2} />
    </g>
  );
}

function battery() {
  return (
    <g>
      <rect width={320} height={180} fill="#d9f2cf" />
      <rect x={112} y={14} width={96} height={152} rx={16} fill="#26262e" {...S} />
      <rect x={120} y={30} width={80} height={118} rx={6} fill="#fff" />
      <rect x={136} y={52} width={48} height={24} rx={4} fill="none" {...S} />
      <rect x={184} y={59} width={5} height={10} fill={INK} />
      <rect x={139} y={55} width={7} height={18} fill="#d33a2f" />
      <path d="M154 96 L142 122 L156 122 L148 144 L172 112 L158 112 L166 96 Z" fill="#f2a900" {...S} strokeWidth={2.5} />
      <path d="M244 96 Q276 96 276 126 L276 150" fill="none" {...S} strokeWidth={4} />
      <rect x={262} y={150} width={28} height={20} rx={4} fill="#d7dbe0" {...S} />
      <path d="M268 150 L268 142 M284 150 L284 142" {...S} strokeWidth={4} />
      <path d="M72 70 L88 92 M60 100 L84 104 M74 130 L90 114" stroke="#d33a2f" strokeWidth={4} strokeLinecap="round" />
    </g>
  );
}

function night() {
  return (
    <g>
      <rect width={320} height={180} fill="#1f1d4f" />
      <circle cx={64} cy={46} r={26} fill="#ffe08f" />
      <circle cx={74} cy={40} r={22} fill="#1f1d4f" />
      {[[120, 30], [180, 20], [250, 38], [290, 14]].map(([x, y]) => (
        <circle key={`${x}${y}`} cx={x} cy={y} r={2.5} fill="#fff" />
      ))}
      <rect y={150} width={320} height={30} fill="#12113a" />
      <path d="M200 70 L200 156" {...S} strokeWidth={6} stroke="#e8c98a" />
      <path d="M200 72 L256 72 L270 84 L256 96 L200 96 Z" fill="#e8590c" {...S} />
      <path d="M200 106 L150 106 L138 118 L150 130 L200 130 Z" fill="#c2185b" {...S} />
      <path d="M200 136 L246 136 L258 146 L246 156 L200 156 Z" fill="#0d7a73" {...S} />
      <circle cx={262} cy={36} r={20} fill="#fff" {...S} />
      <path d="M262 36 L262 22 M262 36 L274 42" fill="none" {...S} />
      {[24, 48, 72, 96].map((x, i) => (
        <circle key={x} cx={x} cy={140 - (i % 2) * 8} r={4} fill={["#ffe08f", "#ff6f91", "#8fd3ff", "#ffe08f"][i]} />
      ))}
    </g>
  );
}

const SCENES: Record<SceneKind, () => React.JSX.Element> = { queue, dhak, food, wallet, rain, battery, night };

export function sceneArt(kind: SceneKind) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180" width={320} height={180}>
      {SCENES[kind]()}
    </svg>
  );
}

export default function Scene({ kind }: { kind: SceneKind }) {
  return (
    <span className="cx-scene" aria-hidden="true">
      {sceneArt(kind)}
    </span>
  );
}

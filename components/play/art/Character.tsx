import { cast } from "@/data/play/cast";
import type { CharId, Mood } from "@/data/play/types";

// Original hand-built SVG characters. Everything here uses plain SVG elements and attributes only
// (no classes, CSS variables or hooks) so the same drawings work in the page, in the canvas image
// export, and inside next/og share-preview images.

const INK = "#2a1a14";
const S = { stroke: INK, strokeWidth: 4, strokeLinejoin: "round", strokeLinecap: "round" } as const;
const MOUTH = "#7a1f1f";

function face(mood: Mood, cx: number, cy: number, gap = 20, mouthDy = 0) {
  const lx = cx - gap;
  const rx = cx + gap;
  const my = cy + mouthDy;
  const brow = (x: number, dy: number, tilt: number) => (
    <path d={`M${x - 9} ${cy - 15 + dy + tilt} L${x + 9} ${cy - 15 + dy - tilt}`} fill="none" {...S} strokeWidth={3.5} />
  );
  switch (mood) {
    case "wow":
      return (
        <g>
          <circle cx={lx} cy={cy} r={9} fill="#fff" {...S} strokeWidth={3} />
          <circle cx={rx} cy={cy} r={9} fill="#fff" {...S} strokeWidth={3} />
          <circle cx={lx} cy={cy + 1} r={3.5} fill={INK} />
          <circle cx={rx} cy={cy + 1} r={3.5} fill={INK} />
          {brow(lx, -9, 0)}
          {brow(rx, -9, 0)}
          <ellipse cx={cx} cy={my + 27} rx={7} ry={9} fill={MOUTH} {...S} strokeWidth={3} />
        </g>
      );
    case "sleepy":
      return (
        <g>
          <path d={`M${lx - 8} ${cy} Q${lx} ${cy + 8} ${lx + 8} ${cy}`} fill="none" {...S} strokeWidth={3.5} />
          <path d={`M${rx - 8} ${cy} Q${rx} ${cy + 8} ${rx + 8} ${cy}`} fill="none" {...S} strokeWidth={3.5} />
          {brow(lx, -2, -2)}
          {brow(rx, -2, 2)}
          <ellipse cx={cx} cy={my + 28} rx={6} ry={5} fill={MOUTH} {...S} strokeWidth={3} />
        </g>
      );
    case "smug":
      return (
        <g>
          <circle cx={lx} cy={cy} r={6} fill={INK} />
          <circle cx={rx} cy={cy} r={6} fill={INK} />
          <path d={`M${lx - 9} ${cy - 3} L${lx + 9} ${cy - 3}`} {...S} strokeWidth={4} />
          <path d={`M${rx - 9} ${cy - 3} L${rx + 9} ${cy - 3}`} {...S} strokeWidth={4} />
          {brow(lx, -6, 3)}
          {brow(rx, -10, -3)}
          <path d={`M${cx - 14} ${my + 24} Q${cx + 4} ${my + 34} ${cx + 17} ${my + 20}`} fill="none" {...S} strokeWidth={3.5} />
        </g>
      );
    case "panic":
      return (
        <g>
          <circle cx={lx} cy={cy} r={9} fill="#fff" {...S} strokeWidth={3} />
          <circle cx={rx} cy={cy} r={9} fill="#fff" {...S} strokeWidth={3} />
          <circle cx={lx} cy={cy} r={2.5} fill={INK} />
          <circle cx={rx} cy={cy} r={2.5} fill={INK} />
          {brow(lx, -9, 4)}
          {brow(rx, -9, -4)}
          <path
            d={`M${cx - 15} ${my + 28} L${cx - 8} ${my + 22} L${cx} ${my + 29} L${cx + 8} ${my + 22} L${cx + 15} ${my + 28}`}
            fill="none"
            {...S}
            strokeWidth={3.5}
          />
          <path d={`M${rx + 20} ${cy - 22} Q${rx + 27} ${cy - 8} ${rx + 20} ${cy - 3} Q${rx + 13} ${cy - 8} ${rx + 20} ${cy - 22}Z`} fill="#8fd3ff" {...S} strokeWidth={2} />
        </g>
      );
    case "proud":
      return (
        <g>
          <path d={`M${lx - 8} ${cy + 3} Q${lx} ${cy - 9} ${lx + 8} ${cy + 3}`} fill="none" {...S} strokeWidth={3.5} />
          <path d={`M${rx - 8} ${cy + 3} Q${rx} ${cy - 9} ${rx + 8} ${cy + 3}`} fill="none" {...S} strokeWidth={3.5} />
          <circle cx={lx - 6} cy={cy + 14} r={7} fill="#ff6f91" fillOpacity={0.4} />
          <circle cx={rx + 6} cy={cy + 14} r={7} fill="#ff6f91" fillOpacity={0.4} />
          <path d={`M${cx - 17} ${my + 20} Q${cx} ${my + 46} ${cx + 17} ${my + 20} Z`} fill={MOUTH} {...S} strokeWidth={3} />
        </g>
      );
    default:
      return (
        <g>
          <circle cx={lx} cy={cy} r={5.5} fill={INK} />
          <circle cx={rx} cy={cy} r={5.5} fill={INK} />
          <circle cx={lx + 2} cy={cy - 2} r={1.8} fill="#fff" />
          <circle cx={rx + 2} cy={cy - 2} r={1.8} fill="#fff" />
          {brow(lx, -2, 1)}
          {brow(rx, -2, -1)}
          <path d={`M${cx - 15} ${my + 20} Q${cx} ${my + 42} ${cx + 15} ${my + 20} Z`} fill={MOUTH} {...S} strokeWidth={3} />
        </g>
      );
  }
}

/** Sleeve: ink outline stroke under a coloured stroke. */
function sleeve(d: string, color: string, w = 16) {
  return (
    <g>
      <path d={d} fill="none" stroke={INK} strokeWidth={w + 8} strokeLinecap="round" />
      <path d={d} fill="none" stroke={color} strokeWidth={w} strokeLinecap="round" />
    </g>
  );
}

function detective(mood: Mood) {
  const c = cast.detective;
  return (
    <g>
      {sleeve("M126 164 Q152 170 148 196", c.c1)}
      <line x1={152} y1={166} x2={146} y2={212} {...S} />
      <circle cx={166} cy={144} r={23} fill="#cdeeff" fillOpacity={0.7} {...S} />
      <path d="M154 134 Q158 126 168 124" fill="none" stroke="#fff" strokeWidth={4} strokeLinecap="round" />
      <circle cx={148} cy={198} r={9} fill={c.skin} {...S} strokeWidth={3} />
      <rect x={88} y={116} width={24} height={40} fill={c.skin} {...S} />
      <path d="M58 240 L66 158 Q100 142 134 158 L142 240 Z" fill={c.c1} {...S} />
      <path d="M68 152 Q100 176 132 152 L136 170 Q100 196 64 170 Z" fill="#fff" {...S} />
      <path d="M82 164 L86 182 M100 170 L102 188 M118 164 L116 182" fill="none" stroke="#d33a2f" strokeWidth={4} strokeLinecap="round" />
      <circle cx={58} cy={88} r={8} fill={c.skin} {...S} strokeWidth={3} />
      <circle cx={142} cy={88} r={8} fill={c.skin} {...S} strokeWidth={3} />
      <ellipse cx={100} cy={82} rx={40} ry={48} fill={c.skin} {...S} />
      <path d="M68 50 Q74 20 90 40 Q100 12 112 38 Q128 22 132 50 Q100 36 68 50 Z" fill={INK} {...S} strokeWidth={2} />
      <circle cx={82} cy={84} r={17} fill="#fff" fillOpacity={0.9} {...S} />
      <circle cx={118} cy={84} r={17} fill="#fff" fillOpacity={0.9} {...S} />
      <path d="M99 84 L101 84" {...S} />
      {face(mood, 100, 84, 18)}
    </g>
  );
}

function bhog(mood: Mood) {
  const c = cast.bhog;
  return (
    <g>
      <line x1={14} y1={238} x2={24} y2={104} {...S} strokeWidth={6} />
      <circle cx={24} cy={92} r={14} fill="#d7dbe0" {...S} />
      <ellipse cx={100} cy={206} rx={78} ry={58} fill={c.c1} {...S} />
      <path d="M92 200 Q100 212 108 200" fill="none" {...S} strokeWidth={3} />
      <path d="M46 176 Q60 150 100 148 Q140 150 154 176" fill="none" stroke={c.c3} strokeWidth={3} strokeLinecap="round" />
      {sleeve("M50 184 Q28 176 28 140", c.c1)}
      <circle cx={26} cy={134} r={10} fill={c.skin} {...S} strokeWidth={3} />
      {sleeve("M150 184 Q176 192 168 174", c.c1)}
      <ellipse cx={164} cy={172} rx={26} ry={9} fill="#fff" {...S} strokeWidth={3} />
      <path d="M146 170 Q164 136 184 170 Z" fill="#f6c453" {...S} strokeWidth={3} />
      <path d="M156 128 Q150 118 158 110 M170 126 Q164 116 172 108" fill="none" stroke="#b8a89b" strokeWidth={3} strokeLinecap="round" />
      <circle cx={46} cy={92} r={9} fill={c.skin} {...S} strokeWidth={3} />
      <circle cx={154} cy={92} r={9} fill={c.skin} {...S} strokeWidth={3} />
      <ellipse cx={100} cy={88} rx={54} ry={46} fill={c.skin} {...S} />
      <path d="M58 56 L68 22 L84 46 L100 14 L116 46 L132 22 L142 56 Z" fill="#fff" {...S} />
      <circle cx={66} cy={104} r={11} fill="#ff6f91" fillOpacity={0.35} />
      <circle cx={134} cy={104} r={11} fill="#ff6f91" fillOpacity={0.35} />
      {face(mood, 100, 84, 24)}
    </g>
  );
}

function selfie(mood: Mood) {
  const c = cast.selfie;
  const hair = "#3a1f1a";
  return (
    <g>
      <circle cx={58} cy={38} r={20} fill={hair} {...S} />
      <circle cx={46} cy={26} r={7} fill="#ffd23f" {...S} strokeWidth={2.5} />
      <path d="M52 100 Q40 30 100 30 Q160 30 148 100 Q150 152 130 152 L70 152 Q50 152 52 100 Z" fill={hair} {...S} />
      <rect x={90} y={120} width={20} height={40} fill={c.skin} {...S} />
      <path d="M66 240 L72 160 Q100 146 128 160 L134 240 Z" fill={c.c1} {...S} />
      <path d="M86 154 L100 176 L114 154" fill="none" {...S} strokeWidth={3} />
      {sleeve("M128 168 Q166 152 160 110", c.c1, 14)}
      <rect x={146} y={50} width={36} height={60} rx={7} fill="#26262e" {...S} />
      <rect x={150} y={57} width={28} height={44} rx={3} fill="#8fd3ff" />
      <path d="M154 62 L172 62 L154 82 Z" fill="#fff" fillOpacity={0.5} />
      <circle cx={162} cy={112} r={9} fill={c.skin} {...S} strokeWidth={3} />
      <circle cx={100} cy={92} r={42} fill={c.skin} {...S} />
      <path d="M58 88 Q66 52 100 54 Q134 52 142 88 Q122 66 100 72 Q78 66 58 88 Z" fill={hair} {...S} strokeWidth={2.5} />
      <path d="M30 100 L33 113 L46 116 L33 119 L30 132 L27 119 L14 116 L27 113 Z" fill="#ffd23f" {...S} strokeWidth={2.5} />
      <path d="M26 54 L28 62 L36 64 L28 66 L26 74 L24 66 L16 64 L24 62 Z" fill="#fff" {...S} strokeWidth={2.5} />
      {face(mood, 100, 94, 20)}
    </g>
  );
}

function broke(mood: Mood) {
  const c = cast.broke;
  return (
    <g>
      {sleeve("M130 166 Q166 176 170 148", c.c1)}
      <circle cx={170} cy={142} r={11} fill={c.skin} {...S} strokeWidth={3} />
      <rect x={88} y={120} width={24} height={36} fill={c.skin} {...S} />
      <path d="M60 240 L68 158 Q100 144 132 158 L140 240 Z" fill={c.c1} {...S} />
      <path d="M100 160 L100 240" fill="none" {...S} strokeWidth={3} />
      <circle cx={100} cy={184} r={3} fill={INK} />
      <circle cx={100} cy={206} r={3} fill={INK} />
      <path d="M72 198 L72 232 Q88 246 104 232 L104 198 Z" fill="#fff" {...S} strokeWidth={3} />
      <path d="M68 198 L108 198" {...S} strokeWidth={3} />
      <circle cx={124} cy={216} r={3} fill={INK} />
      <ellipse cx={119} cy={211} rx={5} ry={3} fill="#fff" {...S} strokeWidth={1.5} />
      <ellipse cx={129} cy={211} rx={5} ry={3} fill="#fff" {...S} strokeWidth={1.5} />
      {sleeve("M70 166 Q54 190 76 200", c.c1)}
      <circle cx={58} cy={90} r={8} fill={c.skin} {...S} strokeWidth={3} />
      <circle cx={142} cy={90} r={8} fill={c.skin} {...S} strokeWidth={3} />
      <ellipse cx={100} cy={88} rx={42} ry={46} fill={c.skin} {...S} />
      <path d="M58 80 Q60 38 100 38 Q140 38 142 80 Q120 56 100 60 Q76 56 58 80 Z" fill={INK} {...S} strokeWidth={2.5} />
      {face(mood, 100, 86, 19, 6)}
      <path d="M70 114 Q84 100 100 110 Q116 100 130 114 Q116 126 100 116 Q84 126 70 114 Z" fill={INK} {...S} strokeWidth={2.5} />
      <path d="M100 156 L82 146 L82 164 Z M100 156 L118 146 L118 164 Z" fill="#d33a2f" {...S} strokeWidth={3} />
    </g>
  );
}

function excuse(mood: Mood) {
  const c = cast.excuse;
  return (
    <g>
      {[
        [58, 62, 18],
        [80, 44, 20],
        [106, 38, 20],
        [130, 46, 19],
        [148, 66, 17],
        [50, 94, 12],
        [152, 98, 12],
      ].map(([x, y, r]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={r} fill={INK} stroke={INK} strokeWidth={2} />
      ))}
      <path d="M76 170 Q40 182 48 198" fill="none" stroke={INK} strokeWidth={24} strokeLinecap="round" />
      <path d="M76 170 Q40 182 48 198" fill="none" stroke={c.c1} strokeWidth={16} strokeLinecap="round" />
      <circle cx={44} cy={208} r={22} fill="#fff" {...S} />
      <circle cx={32} cy={186} r={6} fill={c.c3} {...S} strokeWidth={2.5} />
      <circle cx={56} cy={186} r={6} fill={c.c3} {...S} strokeWidth={2.5} />
      <path d="M44 208 L44 193 M44 208 L55 213" fill="none" {...S} strokeWidth={3} />
      <rect x={88} y={124} width={24} height={40} fill={c.skin} {...S} />
      <path d="M70 240 L76 166 Q100 152 124 166 L130 240 Z" fill={c.c1} {...S} />
      <path d="M88 158 L100 176 L112 158" fill="#fff" {...S} strokeWidth={3} />
      {sleeve("M124 172 Q172 176 174 138", c.c1)}
      <line x1={174} y1={124} x2={174} y2={80} stroke={INK} strokeWidth={13} strokeLinecap="round" />
      <line x1={174} y1={124} x2={174} y2={80} stroke={c.skin} strokeWidth={7} strokeLinecap="round" />
      <circle cx={174} cy={132} r={10} fill={c.skin} {...S} strokeWidth={3} />
      <ellipse cx={100} cy={92} rx={54} ry={50} fill={c.skin} {...S} />
      <path d="M62 62 Q74 82 90 64 Q102 84 116 64 Q130 80 140 62 Q122 46 100 48 Q78 46 62 62 Z" fill={INK} {...S} strokeWidth={2} />
      {face(mood, 100, 94, 24)}
      <path d="M154 40 Q160 54 154 60 Q148 54 154 40 Z" fill="#8fd3ff" {...S} strokeWidth={2} />
    </g>
  );
}

function sleepy(mood: Mood) {
  const c = cast.sleepy;
  return (
    <g>
      <path d="M140 12 L156 12 L140 28 L156 28 M162 0 L172 0 L162 10 L172 10" fill="none" {...S} strokeWidth={3.5} />
      <rect x={88} y={126} width={24} height={36} fill={c.skin} {...S} />
      <path d="M58 240 L66 162 Q100 148 134 162 L142 240 Z" fill={c.c1} {...S} />
      <path d="M84 168 L80 240 M104 160 L104 240 M124 168 L128 240" fill="none" stroke="#fff" strokeOpacity={0.55} strokeWidth={5} strokeLinecap="round" />
      <rect x={110} y={184} width={76} height={50} rx={13} transform="rotate(-10 148 209)" fill="#fff" {...S} />
      <path d="M126 196 Q148 206 170 192" transform="rotate(-10 148 209)" fill="none" {...S} strokeWidth={2.5} />
      {sleeve("M130 168 Q152 178 140 200", c.c1)}
      <circle cx={54} cy={100} r={8} fill={c.skin} {...S} strokeWidth={3} />
      <circle cx={146} cy={100} r={8} fill={c.skin} {...S} strokeWidth={3} />
      <circle cx={100} cy={98} r={46} fill={c.skin} {...S} />
      <path d="M54 84 Q58 34 112 24 Q150 18 168 56 Q150 46 146 82 Q100 66 54 84 Z" fill={c.c3} {...S} />
      <path d="M52 82 Q100 62 148 82 L146 96 Q100 80 54 96 Z" fill="#fff" {...S} strokeWidth={3} />
      <circle cx={168} cy={58} r={10} fill="#fff" {...S} strokeWidth={3} />
      <path d="M70 112 Q80 120 90 112 M110 112 Q120 120 130 112" fill="none" stroke={INK} strokeOpacity={0.45} strokeWidth={3} strokeLinecap="round" />
      {face(mood, 100, 100, 22)}
    </g>
  );
}

function gopal(mood: Mood) {
  const c = cast.gopal;
  return (
    <g>
      <rect x={88} y={134} width={24} height={30} fill={c.skin} {...S} />
      <path d="M56 240 L64 164 Q100 148 136 164 L144 240 Z" fill={c.c1} {...S} />
      <path d="M100 160 L100 240" fill="none" {...S} strokeWidth={3} />
      <path d="M84 176 h6 M110 190 h6 M84 206 h6" stroke="#fff" strokeOpacity={0.7} strokeWidth={4} strokeLinecap="round" />
      {sleeve("M132 170 Q160 160 156 124", c.c1)}
      <circle cx={156} cy={118} r={9} fill={c.skin} {...S} strokeWidth={3} />
      <path d="M142 90 L172 90 L168 118 Q157 124 146 118 Z" fill="#c0663a" {...S} />
      <ellipse cx={157} cy={90} rx={15} ry={4} fill="#8a4524" {...S} strokeWidth={2.5} />
      <circle cx={54} cy={104} r={8} fill={c.skin} {...S} strokeWidth={3} />
      <circle cx={146} cy={104} r={8} fill={c.skin} {...S} strokeWidth={3} />
      <ellipse cx={100} cy={100} rx={46} ry={50} fill={c.skin} {...S} />
      <path d="M52 78 Q56 22 100 20 Q144 22 148 78 Q100 62 52 78 Z" fill="#fff" {...S} />
      <path d="M52 78 Q100 62 148 78 L148 88 Q100 74 52 88 Z" fill={c.c3} {...S} strokeWidth={3} />
      <path d="M100 22 Q112 6 124 14" fill="none" {...S} strokeWidth={3.5} />
      {face(mood, 100, 102, 22, 12)}
      <path d="M62 128 Q80 114 100 126 Q120 114 138 128 Q120 140 100 132 Q80 140 62 128 Z" fill={INK} {...S} strokeWidth={2.5} />
    </g>
  );
}

function bagha(mood: Mood) {
  const c = cast.bagha;
  return (
    <g>
      <rect x={88} y={126} width={24} height={36} fill={c.skin} {...S} />
      <path d="M58 240 L66 160 Q100 146 134 160 L142 240 Z" fill={c.c1} {...S} />
      <path d="M62 170 L138 232" stroke={INK} strokeWidth={8} strokeLinecap="round" />
      <ellipse cx={100} cy={206} rx={44} ry={21} transform="rotate(8 100 206)" fill="#e9b872" {...S} />
      <path d="M72 198 L86 218 M92 194 L104 220 M116 198 L124 218" stroke={INK} strokeWidth={3} strokeLinecap="round" />
      {sleeve("M70 168 Q40 150 36 112", c.c1)}
      {sleeve("M130 168 Q160 150 166 112", c.c1)}
      <circle cx={36} cy={106} r={9} fill={c.skin} {...S} strokeWidth={3} />
      <circle cx={166} cy={106} r={9} fill={c.skin} {...S} strokeWidth={3} />
      <path d="M36 106 L22 66 M166 106 L180 66" {...S} strokeWidth={5} />
      <circle cx={21} cy={62} r={6} fill="#fff" {...S} strokeWidth={3} />
      <circle cx={181} cy={62} r={6} fill="#fff" {...S} strokeWidth={3} />
      <circle cx={54} cy={98} r={8} fill={c.skin} {...S} strokeWidth={3} />
      <circle cx={146} cy={98} r={8} fill={c.skin} {...S} strokeWidth={3} />
      <ellipse cx={100} cy={94} rx={44} ry={48} fill={c.skin} {...S} />
      <path d="M58 70 L66 34 L82 54 L96 26 L112 54 L130 34 L142 70 Q100 50 58 70 Z" fill={INK} {...S} strokeWidth={2} />
      <path d="M56 74 Q100 56 144 74 L144 86 Q100 68 56 86 Z" fill={c.c3} {...S} strokeWidth={3} />
      <circle cx={100} cy={72} r={5} fill="#ffb400" {...S} strokeWidth={2} />
      {face(mood, 100, 100, 21)}
    </g>
  );
}

function hansjaru(mood: Mood) {
  const c = cast.hansjaru;
  const quills = [-70, -45, -22, 0, 22, 45, 70].map((a) => (
    <path key={a} d="M100 150 L92 30 L108 30 Z" transform={`rotate(${a} 100 150)`} fill={c.c1} {...S} strokeWidth={3} />
  ));
  return (
    <g>
      {quills}
      <ellipse cx={100} cy={170} rx={52} ry={52} fill={c.skin} {...S} />
      <path d="M76 168 Q100 190 124 168" fill="none" stroke={INK} strokeOpacity={0.4} strokeWidth={3} strokeLinecap="round" />
      <path d="M72 218 L56 232 L72 232 L82 238 M128 218 L144 232 L128 232 L118 238" fill="#ff8a1f" {...S} strokeWidth={3.5} />
      <circle cx={100} cy={96} r={44} fill={c.skin} {...S} />
      <path d="M92 52 Q96 36 108 40 M100 52 Q110 30 122 36" fill="none" {...S} strokeWidth={3.5} />
      {face(mood, 100, 88, 20)}
      <path d="M72 112 Q100 100 128 112 Q124 134 100 134 Q76 134 72 112 Z" fill="#ff8a1f" {...S} strokeWidth={3.5} />
      <path d="M82 120 L118 120" stroke={INK} strokeWidth={3} strokeLinecap="round" />
    </g>
  );
}

const BODIES: Record<CharId, (mood: Mood) => React.JSX.Element> = { detective, bhog, selfie, broke, excuse, sleepy, gopal, bagha, hansjaru };

/** The character as a standalone <svg> (viewBox 200x240). Call as a function, not as a component. */
export function characterArt(id: CharId, mood: Mood, width = 200, height = 240) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240" width={width} height={height}>
      {BODIES[id](mood)}
    </svg>
  );
}

/** Decorative character illustration for pages (the meaning is always carried by nearby text). */
export default function Character({ id, mood = "happy", className }: { id: CharId; mood?: Mood; className?: string }) {
  return (
    <span className={className ? `cx-char ${className}` : "cx-char"} aria-hidden="true">
      {characterArt(id, mood)}
    </span>
  );
}

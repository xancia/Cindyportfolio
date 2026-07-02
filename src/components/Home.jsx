import { useRef, useState } from "react";
import Img from "./Img";

// Where the floating cards sit on large screens — corners and edges,
// leaving the middle clear for the intro text.
const SLOTS = [
  { pos: { top: "5%", left: "3%" }, rot: -4, w: "w-44 xl:w-56", delay: "0s" },
  {
    pos: { top: "45%", left: "5.5%" },
    rot: 3,
    w: "w-40 xl:w-48",
    delay: "1.4s",
  },
  {
    pos: { bottom: "4%", left: "20%" },
    rot: -2,
    w: "w-36 xl:w-44",
    delay: "2.3s",
  },
  {
    pos: { top: "6%", right: "3.5%" },
    rot: 4,
    w: "w-44 xl:w-56",
    delay: "0.8s",
  },
  {
    pos: { top: "47%", right: "5.5%" },
    rot: -3,
    w: "w-40 xl:w-48",
    delay: "1.9s",
  },
  {
    pos: { bottom: "5%", right: "21%" },
    rot: 2,
    w: "w-36 xl:w-44",
    delay: "3.1s",
  },
];

// Soft scrapbook mattes — cards cycle through these
const PASTELS = [
  "#fdeae2",
  "#fbf3d9",
  "#e9f0e2",
  "#e3edf2",
  "#f0e6f2",
  "#fce8ec",
];
const TAPES = [
  "#f6c6c9",
  "#f2ddA6",
  "#c9dcb9",
  "#bcd7e3",
  "#dcc8e8",
  "#f6c6d8",
];

// Little hand-drawn doodles sprinkled around the hero
function Doodle({ d, className, style, stroke = false }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`absolute w-6 h-6 pointer-events-none animate-floaty ${className}`}
      style={style}
      fill={stroke ? "none" : "currentColor"}
      stroke={stroke ? "currentColor" : "none"}
      strokeWidth={stroke ? 2 : 0}
      strokeLinecap="round"
    >
      <path d={d} />
    </svg>
  );
}

const SPARKLE =
  "M12 1c.9 6.2 4.8 10.1 11 11-6.2.9-10.1 4.8-11 11-.9-6.2-4.8-10.1-11-11 6.2-.9 10.1-4.8 11-11z";
const HEART =
  "M12 21s-8-5.3-8-11a4.6 4.6 0 0 1 8-3 4.6 4.6 0 0 1 8 3c0 5.7-8 11-8 11z";
const SQUIGGLE = "M2 14c3-7 6 7 10 0s6 7 10 0";

const DOODLES = [
  {
    d: SPARKLE,
    className: "text-accent/50",
    style: { top: "13%", left: "26%", animationDelay: "0.5s" },
  },
  {
    d: HEART,
    className: "text-[#f0b6c0]",
    style: { top: "25%", right: "24%", width: 20, animationDelay: "1.8s" },
  },
  {
    d: SQUIGGLE,
    className: "text-[#c9dcb9]",
    style: { bottom: "20%", left: "13%", width: 34, animationDelay: "2.6s" },
    stroke: true,
  },
  {
    d: SPARKLE,
    className: "text-[#e8c76e]/70",
    style: { bottom: "13%", right: "13%", width: 18, animationDelay: "3.4s" },
  },
  {
    d: SPARKLE,
    className: "text-[#bcd7e3]",
    style: { top: "38%", left: "30%", width: 14, animationDelay: "4.1s" },
  },
  {
    d: HEART,
    className: "text-accent/35",
    style: { bottom: "34%", right: "30%", width: 14, animationDelay: "1.1s" },
  },
];

// A scrapbook-style artwork card you can drag around. A click (without
// dragging) opens the project.
function FloatingCard({ proj, slot, index, onOpen }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const gesture = useRef(null);

  function onPointerDown(e) {
    gesture.current = {
      startX: e.clientX,
      startY: e.clientY,
      baseX: offset.x,
      baseY: offset.y,
      moved: false,
    };
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e) {
    const g = gesture.current;
    if (!g) return;
    const dx = e.clientX - g.startX;
    const dy = e.clientY - g.startY;
    if (Math.abs(dx) + Math.abs(dy) > 6) g.moved = true;
    setOffset({ x: g.baseX + dx, y: g.baseY + dy });
  }

  function onPointerUp() {
    const moved = gesture.current?.moved;
    gesture.current = null;
    setDragging(false);
    if (!moved) onOpen();
  }

  return (
    <div
      className={`absolute hidden lg:block ${slot.w} ${dragging ? "z-30" : "z-10 animate-floaty"}`}
      style={{ ...slot.pos, animationDelay: slot.delay }}
    >
      <div
        className="touch-none"
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div
          className={`group relative p-2.5 pb-2 rounded-2xl shadow-[0_8px_22px_rgba(43,36,29,0.08)] select-none ${
            dragging
              ? "cursor-grabbing scale-[1.04] rotate-0"
              : "cursor-grab rotate-(--rot) hover:rotate-0 hover:scale-[1.04] transition-transform duration-300 ease-out"
          }`}
          style={{
            "--rot": `${slot.rot}deg`,
            background: PASTELS[index % PASTELS.length],
          }}
        >
          {/* washi tape */}
          <div
            className="absolute -top-2 left-1/2 -translate-x-1/2 w-14 h-4 rounded-[3px] rotate-[-3deg] opacity-80 pointer-events-none"
            style={{ background: TAPES[index % TAPES.length] }}
          />
          <div className="aspect-[4/5] overflow-hidden rounded-xl pointer-events-none">
            <Img
              src={`/art/work/${proj.id}/${proj.cover || proj.images[0]}`}
              alt={proj.title}
            />
          </div>
          <div className="pt-1.5 px-1 flex justify-between items-baseline pointer-events-none">
            <span className="text-[11px] font-medium truncate">
              {proj.title}
            </span>
            <span className="text-[9px] text-ink/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0 pl-2">
              take a peek ✦
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home({ content, navigate }) {
  const { name, tagline, intro, location, resume, contact } = content;
  const featured = content.projects
    .filter((p) => p.featured)
    .slice(0, SLOTS.length);

  const socials = [
    contact.email && ["email", `mailto:${contact.email}`],
    contact.instagram && [
      "instagram",
      `https://instagram.com/${contact.instagram.replace("@", "")}`,
    ],
    contact.arena && ["are.na", `https://are.na${contact.arena}`],
    contact.linkedin && ["linkedin", `https://linkedin.com${contact.linkedin}`],
  ].filter(Boolean);

  return (
    <div className="relative min-h-[calc(100vh-69px)] flex flex-col overflow-hidden">
      {/* Doodles (large screens) */}
      <div className="hidden lg:block">
        {DOODLES.map((doodle, i) => (
          <Doodle key={i} {...doodle} />
        ))}
      </div>

      {/* Floating artwork cards (large screens) */}
      {featured.map((proj, i) => (
        <FloatingCard
          key={proj.id}
          proj={proj}
          slot={SLOTS[i]}
          index={i}
          onOpen={() => navigate("project", proj)}
        />
      ))}

      {/* Centre intro — everything a visitor needs, at a glance */}
      <div className="relative z-20 pointer-events-none flex-1 flex flex-col items-center justify-center text-center px-6 py-14">
        <p className="text-[11px] tracking-[0.22em] uppercase text-accent mb-5">
          ✦ portfolio of ✦
        </p>
        <h1 className="font-display font-bold text-[52px] sm:text-7xl xl:text-8xl leading-[0.98] tracking-[-0.02em]">
          {name}
        </h1>
        <p className="mt-4 font-display font-medium text-lg sm:text-xl text-ink/70">
          {tagline}
        </p>

        {intro && (
          <p className="mt-6 max-w-md text-sm leading-[1.8] text-ink/60">
            {intro}
          </p>
        )}

        {/* Main actions */}
        <div className="pointer-events-auto mt-9 flex flex-wrap justify-center items-center gap-3">
          <button
            onClick={() => navigate("work")}
            className="bg-ink text-paper rounded-full px-7 py-3 text-sm font-medium cursor-pointer transition-all duration-300 hover:bg-accent hover:-translate-y-0.5"
          >
            see all my work →
          </button>
          <button
            onClick={() => navigate("about")}
            className="rounded-full px-6 py-3 text-sm border border-ink/20 cursor-pointer transition-all duration-300 hover:border-accent hover:text-accent hover:-translate-y-0.5"
          >
            about me
          </button>
          {resume && (
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-6 py-3 text-sm border border-ink/20 transition-all duration-300 hover:border-accent hover:text-accent hover:-translate-y-0.5"
            >
              resume ↓
            </a>
          )}
        </div>

        {/* Socials */}
        {socials.length > 0 && (
          <div className="pointer-events-auto mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs lowercase">
            {socials.map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink/50 pb-0.5 border-b border-transparent transition-colors duration-200 hover:text-accent hover:border-accent"
              >
                {label} ↗
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Featured art as a simple grid on smaller screens */}
      {featured.length > 0 && (
        <div className="lg:hidden px-6 pb-12 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto w-full">
          {featured.map((proj, i) => (
            <div
              key={proj.id}
              className={`relative p-2 pb-1.5 rounded-2xl shadow-[0_5px_14px_rgba(43,36,29,0.08)] cursor-pointer transition-transform duration-300 hover:rotate-0 hover:scale-[1.03] ${
                i % 2 === 0 ? "rotate-[1.5deg]" : "rotate-[-1.5deg]"
              }`}
              style={{ background: PASTELS[i % PASTELS.length] }}
              onClick={() => navigate("project", proj)}
            >
              <div
                className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-10 h-3 rounded-[2px] rotate-[-3deg] opacity-80"
                style={{ background: TAPES[i % TAPES.length] }}
              />
              <div className="aspect-[4/5] overflow-hidden rounded-xl">
                <Img
                  src={`/art/work/${proj.id}/${proj.cover || proj.images[0]}`}
                  alt={proj.title}
                />
              </div>
              <div className="pt-1.5 px-1 text-[10px] font-medium truncate">
                {proj.title}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Footer line */}
      <p className="relative z-20 pb-6 text-center text-[10px] tracking-[0.16em] uppercase text-ink/40">
        {name} · {location} · made with ♡ · © {new Date().getFullYear()}
      </p>
    </div>
  );
}

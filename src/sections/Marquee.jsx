import { useEffect, useRef, useState } from "react";
import data from "../data/data.json";

const row1 = [
  ...data.skills.slice(0, 5).map((s) => s.name),
  ...data.projects.slice(0, 3).map((p) => p.title),
];
const row2 = [
  ...data.skills.slice(5, 10).map((s) => s.name),
  ...data.projects.slice(3, 6).map((p) => p.title),
];

function Tile({ label }) {
  return (
    <div className="flex h-[110px] w-[260px] shrink-0 items-center justify-center rounded-2xl border border-border bg-surface px-6 sm:h-[130px] sm:w-[320px]">
      <span className="text-center font-display text-lg font-medium uppercase tracking-wide text-muted sm:text-2xl">
        {label}
      </span>
    </div>
  );
}

function Row({ items, direction, offset }) {
  const tripled = [...items, ...items, ...items];
  const sign = direction === "right" ? 1 : -1;
  const translate = sign * (offset - 200);

  return (
    <div
      className="flex gap-3"
      style={{ transform: `translateX(${translate}px)`, willChange: "transform" }}
    >
      {tripled.map((label, i) => (
        <Tile key={`${label}-${i}`} label={label} />
      ))}
    </div>
  );
}

export default function Marquee() {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      const value = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(value);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-bg pb-10 pt-24 sm:pt-32 md:pt-40"
    >
      <div className="flex flex-col gap-3 overflow-hidden">
        <Row items={row1} direction="right" offset={offset} />
        <Row items={row2} direction="left" offset={offset} />
      </div>
    </section>
  );
}

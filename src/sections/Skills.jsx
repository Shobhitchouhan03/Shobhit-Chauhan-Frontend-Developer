import { useInView } from "react-intersection-observer";
import data from "../data/data.json";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

function SkillBar({ skill, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between">
        <span className="font-display text-sm font-medium text-text">{skill.name}</span>
        <span className="font-mono text-xs text-muted">{skill.level}%</span>
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-surface-2">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue to-violet transition-all duration-[1200ms] ease-out"
          style={{
            width: inView ? `${skill.level}%` : "0%",
            transitionDelay: `${index * 60}ms`,
          }}
        />
      </div>
      <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted/70">
        {skill.category}
      </p>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I reach for every day"
          gradientWord="every day"
          description="A frontend toolkit refined through shipping real, production interfaces — not just tutorials."
          align="center"
        />

        <div className="mt-16 grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {data.skills.map((skill, i) => (
            <Reveal key={skill.name} delay={(i % 2) * 0.08}>
              <SkillBar skill={skill} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

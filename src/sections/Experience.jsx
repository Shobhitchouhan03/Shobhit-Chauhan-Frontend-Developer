import data from "../data/data.json";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where the work has happened"
          gradientWord="work has happened"
          align="center"
        />

        <div className="relative mt-16 pl-8 sm:pl-10">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-blue via-violet to-transparent sm:left-[9px]" />

          <div className="flex flex-col gap-10">
            {data.experience.map((item, i) => (
              <Reveal key={item.role + item.period} delay={i * 0.08}>
                <div className="relative">
                  <span className="absolute -left-8 top-1.5 h-4 w-4 rounded-full border-2 border-bg bg-gradient-to-br from-blue to-violet sm:-left-10" />
                  <div className="glass rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-display text-lg font-semibold text-text">
                        {item.role}
                      </h3>
                      <p className="font-mono text-xs text-blue-soft">{item.period}</p>
                    </div>
                    <p className="mt-1 text-sm text-muted">
                      {item.company} · {item.location}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

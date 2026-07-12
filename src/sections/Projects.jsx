import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import data from "../data/data.json";
import Reveal from "../components/Reveal";
import Button from "../components/Button";

function ProjectImage({ project, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[24px] border border-border bg-surface sm:rounded-[32px] md:rounded-[40px] ${className}`}
    >
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="h-full w-full object-cover object-top"
        onError={(e) => {
          e.currentTarget.style.display = "none";
          e.currentTarget.nextSibling.style.display = "flex";
        }}
      />
      <div
        style={{ display: "none" }}
        className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-surface to-surface-2 text-center"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-blue-soft">
          {project.category}
        </span>
        <span className="px-4 font-display text-lg font-medium uppercase text-muted sm:text-xl">
          {project.title}
        </span>
      </div>
    </div>
  );
}

function ProjectCard({ project, index, total }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="relative sm:sticky sm:top-24 md:top-32"
      style={{ top: `${index * 28}px` }}
    >
      <motion.div
        style={{ scale }}
        className="h-auto rounded-[40px] border-2 border-border bg-bg p-4 sm:h-[78vh] sm:rounded-[50px] sm:p-6 md:h-[85vh] md:rounded-[60px] md:p-8"
      >
        <div className="flex h-full flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4 sm:gap-6">
              <span
                className="font-black leading-none text-muted"
                style={{ fontSize: "clamp(2.2rem, 7vw, 100px)" }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-blue-soft">
                  {project.category}
                </p>
                <h3 className="font-display text-xl font-medium uppercase text-text sm:text-2xl md:text-3xl">
                  {project.title}
                </h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <Button
              as="a"
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              icon={<FiExternalLink size={14} />}
              className="!px-6 !py-2.5 text-[11px] sm:text-xs"
            >
              Live Project
            </Button>
          </div>

          <ProjectImage project={project} className="flex-1" />
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const featured = data.projects;

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-bg px-5 pb-20 pt-16 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
    >
      <Reveal>
        <h2
          className="hero-heading text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Project
        </h2>
      </Reveal>

      <div className="mx-auto mt-16 flex max-w-5xl flex-col gap-6">
        {featured.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} total={featured.length} />
        ))}
      </div>
    </section>
  );
}

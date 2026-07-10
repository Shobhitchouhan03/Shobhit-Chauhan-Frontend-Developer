import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import data from "../data/data.json";
import Reveal from "../components/Reveal";
import Button from "../components/Button";

function ImageBlock({ label, className = "", style }) {
  return (
    <div
      style={style}
      className={`flex items-center justify-center rounded-[40px] border border-border bg-surface sm:rounded-[50px] md:rounded-[60px] ${className}`}
    >
      <span className="px-3 text-center font-display text-xs font-medium uppercase tracking-widest text-muted sm:text-sm">
        {label}
      </span>
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
      className="sticky top-24 h-[85vh] md:top-32"
      style={{ top: `${index * 28}px` }}
    >
      <motion.div
        style={{ scale }}
        className="h-full rounded-[40px] border-2 border-border bg-bg p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
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

          <div className="flex flex-1 gap-3">
            <div className="flex w-2/5 flex-col gap-3">
              <ImageBlock
                label={project.tech[0]}
                className="w-full"
                style={{ height: "clamp(130px, 16vw, 230px)" }}
              />
              <ImageBlock
                label={project.tech[1] || project.tech[0]}
                className="w-full flex-1"
                style={{ height: "clamp(160px, 22vw, 340px)" }}
              />
            </div>
            <ImageBlock label={project.title} className="w-3/5 flex-1" />
          </div>
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

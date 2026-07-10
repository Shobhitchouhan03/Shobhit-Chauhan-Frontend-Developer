import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";
import data from "../data/data.json";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const list = data.testimonials;
  const current = list[index];

  const next = () => setIndex((i) => (i + 1) % list.length);
  const prev = () => setIndex((i) => (i - 1 + list.length) % list.length);

  return (
    <section id="testimonials" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="What people say after we ship"
          gradientWord="ship"
          align="center"
        />

        <Reveal delay={0.15} className="mt-14">
          <div className="glass relative overflow-hidden rounded-[2rem] p-8 sm:p-12">
            <span className="font-display text-7xl text-blue-soft/20 select-none">“</span>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.name}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4 }}
                className="-mt-6"
              >
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <FiStar key={i} className="fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-lg leading-relaxed text-text sm:text-xl">
                  {current.quote}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue to-violet font-display text-sm font-semibold text-white">
                    {current.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-display text-sm font-medium text-text">
                      {current.name}
                    </p>
                    <p className="text-xs text-muted">{current.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center justify-between">
              <div className="flex gap-2">
                {list.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === index ? "w-6 bg-gradient-to-r from-blue to-violet" : "w-1.5 bg-surface-2"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  data-cursor-hover
                  aria-label="Previous testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:text-text"
                >
                  <FiChevronLeft />
                </button>
                <button
                  onClick={next}
                  data-cursor-hover
                  aria-label="Next testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:text-text"
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

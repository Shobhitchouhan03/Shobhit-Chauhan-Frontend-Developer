import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader({ visible, duration = 1400 }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const start = performance.now();

    let frame;
    const tick = (now) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);
      if (elapsed < duration) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, duration]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg"
        >
          <div className="flex flex-col items-center gap-6">
            <span className="hero-heading font-display text-7xl font-black tabular-nums sm:text-8xl">
              {progress}
              <span className="text-3xl sm:text-4xl">%</span>
            </span>

            <div className="h-[2px] w-40 overflow-hidden rounded-full bg-surface-2 sm:w-56">
              <motion.div
                className="h-full cta-gradient"
                style={{ width: `${progress}%` }}
              />
            </div>

            <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Loading portfolio
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

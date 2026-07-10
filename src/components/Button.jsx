import { useRef } from "react";
import { motion } from "framer-motion";

const variants = {
  primary:
    "cta-gradient text-white outline outline-2 outline-offset-[-3px] outline-white/90 hover:brightness-110",
  outline:
    "border-2 border-border text-muted hover:bg-[#D7E2EA]/10 hover:text-text",
  ghost: "text-muted hover:text-text",
};

export default function Button({
  children,
  as: Component = "button",
  variant = "primary",
  className = "",
  magnetic = true,
  icon = null,
  ...props
}) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block transition-transform duration-300 ease-out"
      whileTap={{ scale: 0.96 }}
    >
      <Component
        className={`group relative inline-flex items-center gap-2 rounded-full px-8 py-3 sm:px-10 sm:py-3.5 font-display text-xs sm:text-sm font-medium uppercase tracking-widest transition-all duration-300 ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
        {icon && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </Component>
    </motion.div>
  );
}

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import data from "../data/data.json";
import useActiveSection from "../hooks/useActiveSection";
import ThemeToggle from "./ThemeToggle";
import Button from "./Button";

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(data.navigation.map((n) => n.href));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href) => {
    setOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 transition-all duration-500 sm:px-6 ${
          scrolled ? "glass py-2 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)]" : "py-1"
        }`}
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="font-display text-lg font-semibold tracking-tight text-text"
          data-cursor-hover
        >
          Shobhit<span className="gradient-text">.dev</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {data.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              data-cursor-hover
              className={`relative rounded-full px-4 py-2 font-display text-sm transition-colors ${
                active === item.href ? "text-text" : "text-muted hover:text-text"
              }`}
            >
              {active === item.href && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full bg-surface-2"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <Button
            as="a"
            href={data.personal.resumeUrl}
            download
            variant="outline"
            className="!px-5 !py-2 text-xs"
          >
            Resume
          </Button>
          <Button
            as="a"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="!px-5 !py-2 text-xs"
          >
            Contact
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="mx-4 mt-3 overflow-hidden rounded-3xl lg:hidden"
          >
            <div className="glass flex flex-col gap-1 p-4">
              {data.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`rounded-xl px-4 py-3 font-display text-sm ${
                    active === item.href
                      ? "bg-surface-2 text-text"
                      : "text-muted hover:bg-surface-2 hover:text-text"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 flex items-center justify-between px-4">
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                <Button
                  as="a"
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contact");
                  }}
                  className="!px-5 !py-2 text-xs"
                >
                  Contact
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

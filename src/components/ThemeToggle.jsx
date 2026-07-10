import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === "dark";
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      data-cursor-hover
      className="relative flex h-9 w-16 items-center rounded-full border border-border bg-surface-2 px-1 transition-colors"
    >
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue to-violet text-white transition-transform duration-300 ${
          isDark ? "translate-x-0" : "translate-x-7"
        }`}
      >
        {isDark ? <FiMoon size={14} /> : <FiSun size={14} />}
      </span>
    </button>
  );
}

import * as FiIcons from "react-icons/fi";
import data from "../data/data.json";
import Reveal from "./Reveal";

export default function Footer() {
  const { footer, personal, socials, navigation } = data;

  return (
    <footer className="relative border-t border-border bg-surface/40 px-6 pb-8 pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <Reveal>
            <a href="#home" className="font-display text-2xl font-semibold text-text">
              Shobhit<span className="gradient-text">.dev</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {footer.tagline}
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => {
                const Icon = FiIcons[s.icon] || FiIcons.FiGlobe;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    data-cursor-hover
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all hover:-translate-y-1 hover:border-blue-soft/50 hover:text-blue-soft"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-display text-sm font-medium text-text">Navigate</p>
            <ul className="mt-4 flex flex-col gap-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-text"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-display text-sm font-medium text-text">Get in touch</p>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-muted">
              <li>
                <a href={`mailto:${personal.email}`} className="hover:text-text">
                  {personal.email}
                </a>
              </li>
              <li>{personal.location}</li>
              {personal.availableForWork && (
                <li className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Available for freelance work
                </li>
              )}
            </ul>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted sm:flex-row">
          <p>{footer.copyright}</p>
          <p className="font-mono">Made with care in {personal.location}</p>
        </div>
      </div>
    </footer>
  );
}

import data from "../data/data.json";
import Reveal from "../components/Reveal";
import Button from "../components/Button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(href) {
  document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  const { personal } = data;

  return (
    <section
      id="home"
      className="relative flex h-screen flex-col overflow-x-clip"
      style={{ overflowX: "clip" }}
    >
      {/* Navbar */}
      <Reveal y={-20} delay={0}>
        <nav className="flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
              }}
              className="text-sm font-medium uppercase tracking-wider text-muted transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Reveal>

      {/* Heading */}
      <div className="overflow-hidden">
        <Reveal y={40} delay={0.15}>
          <h1 className="hero-heading mt-6 w-full whitespace-nowrap text-[14vw] font-black uppercase leading-none tracking-tight sm:mt-4 sm:text-[15vw] md:-mt-5 md:text-[16vw] lg:text-[17.5vw]">
            Hi, i&apos;m {personal.firstName.toLowerCase()}
          </h1>
        </Reveal>
      </div>

      {/* Bottom bar */}
      <div className="relative z-20 mt-auto flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <Reveal y={20} delay={0.35}>
          <p
            className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-muted sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            {personal.role.toLowerCase()} driven by crafting striking and unforgettable interfaces
          </p>
        </Reveal>
        <Reveal y={20} delay={0.5}>
          <Button
            as="a"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#contact");
            }}
          >
            Contact Me
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

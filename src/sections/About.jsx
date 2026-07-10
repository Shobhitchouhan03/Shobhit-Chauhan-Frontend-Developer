import { FiCode, FiHash, FiTerminal, FiCpu } from "react-icons/fi";
import data from "../data/data.json";
import Reveal from "../components/Reveal";
import AnimatedText from "../components/AnimatedText";
import Button from "../components/Button";

const corners = [
  { Icon: FiTerminal, pos: "top-[4%] left-[1%] sm:left-[2%] md:left-[4%]", x: -80, delay: 0.1 },
  { Icon: FiHash, pos: "bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]", x: -80, delay: 0.25 },
  { Icon: FiCode, pos: "top-[4%] right-[1%] sm:right-[2%] md:right-[4%]", x: 80, delay: 0.15 },
  { Icon: FiCpu, pos: "bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]", x: 80, delay: 0.3 },
];

export default function About() {
  const { personal } = data;

  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 py-20 sm:px-8 md:px-10"
    >
      {corners.map(({ Icon, pos, x, delay }, i) => (
        <Reveal key={i} x={x} y={0} delay={delay} duration={0.9} className={`absolute ${pos}`}>
          <div className="flex h-[100px] w-[100px] items-center justify-center rounded-3xl border border-border bg-surface text-muted sm:h-[140px] sm:w-[140px] md:h-[180px] md:w-[180px]">
            <Icon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
          </div>
        </Reveal>
      ))}

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <Reveal y={40} delay={0}>
          <h2
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            About me
          </h2>
        </Reveal>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text={personal.longBio}
            className="max-w-[560px] text-center font-medium leading-relaxed text-muted"
            style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
          />

          <Button
            as="a"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}

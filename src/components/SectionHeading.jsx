import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  gradientWord,
  description,
  align = "left",
}) {
  const isCenter = align === "center";

  const renderTitle = () => {
    if (!gradientWord) return title;
    const parts = title.split(gradientWord);
    return (
      <>
        {parts[0]}
        <span className="gradient-text">{gradientWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={isCenter ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
      <Reveal>
        <span className="section-eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-text sm:text-4xl md:text-5xl">
          {renderTitle()}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

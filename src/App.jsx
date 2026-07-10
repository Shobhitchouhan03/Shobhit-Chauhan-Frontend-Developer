import { useEffect, useState } from "react";
import data from "./data/data.json";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import BackToTop from "./components/BackToTop";
import Hero from "./sections/Hero";
import Marquee from "./sections/Marquee";
import About from "./sections/About";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);
  const loadDuration = 1400;

  useEffect(() => {
    document.title = data.meta.siteTitle;
    const timer = setTimeout(() => setLoading(false), loadDuration);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
  }, [loading]);

  return (
    <div className="bg-bg" style={{ overflowX: "clip" }}>
      <Loader visible={loading} duration={loadDuration} />
      <ScrollProgress />
      <CustomCursor />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Experience />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton number={data.personal.whatsapp} />
      <BackToTop />
    </div>
  );
}

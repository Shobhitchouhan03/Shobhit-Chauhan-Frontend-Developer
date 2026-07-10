import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown, FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import data from "../data/data.json";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { buildMailto, buildWhatsappLink } from "../utils/links";

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-border py-4">
      <button
        onClick={onToggle}
        data-cursor-hover
        className="flex w-full items-center justify-between text-left"
      >
        <span className="font-display text-sm font-medium text-text sm:text-base">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-muted"
        >
          <FiChevronDown />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pt-3 text-sm leading-relaxed text-muted">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Contact() {
  const { personal, faqs } = data;
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [openFaq, setOpenFaq] = useState(0);
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const link = buildMailto({ to: personal.email, ...form });
    window.location.href = link;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something worth remembering"
          gradientWord="worth remembering"
          description="Have a project in mind? Send a message and it'll open straight in your email client — no backend, no waiting room."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal direction="right" className="flex flex-col gap-4">
            <a
              href={`mailto:${personal.email}`}
              data-cursor-hover
              className="group flex items-center gap-4 rounded-2xl border border-border p-5 transition-colors hover:border-blue-soft/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-2 text-blue-soft">
                <FiMail />
              </span>
              <div>
                <p className="text-xs text-muted">Email</p>
                <p className="font-display text-sm font-medium text-text">
                  {personal.email}
                </p>
              </div>
            </a>

            <a
              href={buildWhatsappLink(personal.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="group flex items-center gap-4 rounded-2xl border border-border p-5 transition-colors hover:border-blue-soft/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-2 text-emerald-400">
                <FaWhatsapp />
              </span>
              <div>
                <p className="text-xs text-muted">WhatsApp</p>
                <p className="font-display text-sm font-medium text-text">
                  +{personal.whatsapp}
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-border p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-2 text-violet-soft">
                <FiMapPin />
              </span>
              <div>
                <p className="text-xs text-muted">Based in</p>
                <p className="font-display text-sm font-medium text-text">
                  {personal.location}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-border p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-2 text-blue-soft">
                <FiPhone />
              </span>
              <div>
                <p className="text-xs text-muted">Phone</p>
                <p className="font-display text-sm font-medium text-text">
                  {personal.phone}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="mb-2 block text-xs text-muted" htmlFor="name">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm text-text outline-none transition-colors focus:border-blue-soft/60"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="mb-2 block text-xs text-muted" htmlFor="email">
                    Your email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@email.com"
                    className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm text-text outline-none transition-colors focus:border-blue-soft/60"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-xs text-muted" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me a bit about your project..."
                    className="w-full resize-none rounded-xl border border-border bg-transparent px-4 py-3 text-sm text-text outline-none transition-colors focus:border-blue-soft/60"
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <Button type="submit" icon={<FiSend />}>
                  Send Message
                </Button>
                <AnimatePresence>
                  {sent && (
                    <motion.span
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="font-mono text-xs text-emerald-400"
                    >
                      Opening your email client…
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-24">
          <SectionHeading eyebrow="FAQ" title="Common questions" align="center" />
          <div className="mx-auto mt-10 max-w-2xl">
            {faqs.map((item, i) => (
              <FaqItem
                key={item.question}
                item={item}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

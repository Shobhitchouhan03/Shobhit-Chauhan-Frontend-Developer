import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { buildWhatsappLink } from "../utils/links";

export default function WhatsAppButton({ number }) {
  return (
    <motion.a
      href={buildWhatsappLink(number)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      data-cursor-hover
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4, type: "spring", stiffness: 200, damping: 14 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-[0_8px_30px_-8px_rgba(37,211,102,0.7)]"
    >
      <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-[#25D366]" />
      <FaWhatsapp className="relative" />
    </motion.a>
  );
}

export function buildMailto({ to, name, email, message, subject }) {
  const finalSubject = subject || `Portfolio inquiry from ${name || "a visitor"}`;
  const body = [
    name ? `Name: ${name}` : null,
    email ? `Email: ${email}` : null,
    "",
    message || "",
  ]
    .filter((line) => line !== null)
    .join("\n");

  return `mailto:${to}?subject=${encodeURIComponent(finalSubject)}&body=${encodeURIComponent(body)}`;
}

export function buildWhatsappLink(number, text = "Hi! I found your portfolio and would love to connect.") {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

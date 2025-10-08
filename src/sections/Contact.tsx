import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import ShimmerButton from "@/components/ui/ShimmerButton";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuliere API-Call (hier später echte Integration)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });

      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative mx-auto w-full max-w-6xl px-6 scroll-mt-24"
    >
      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
          Jetzt unverbindlich anfragen
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base sm:leading-relaxed lg:text-lg">
          Vereinbaren Sie ein kostenloses Erstgespräch und erleben Sie, wie Voxon.ai Ihr Business transformiert.
        </p>
      </motion.div>

      <motion.div
        className="mx-auto mt-10 max-w-2xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <div className="rounded-[24px] border border-white/10 bg-night-900/75 p-6 shadow-[0_35px_120px_-70px_rgba(0,188,212,0.55)] backdrop-blur-xl sm:rounded-[28px] sm:p-8 md:rounded-[32px] md:p-10">
          {submitStatus === "success" ? (
            <motion.div
              className="flex flex-col items-center gap-4 py-12 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-electric-500/20">
                <svg className="h-8 w-8 text-electric-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Vielen Dank für Ihre Anfrage!</h3>
              <p className="text-white/70">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition focus:border-electric-500/50 focus:outline-none focus:ring-2 focus:ring-electric-500/20"
                    placeholder="Wie dürfen wir Sie nennen"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition focus:border-electric-500/50 focus:outline-none focus:ring-2 focus:ring-electric-500/20"
                    placeholder="max@beispiel.at"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white/80">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition focus:border-electric-500/50 focus:outline-none focus:ring-2 focus:ring-electric-500/20"
                    placeholder="+43 123 456789"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white/80">
                    Unternehmen
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition focus:border-electric-500/50 focus:outline-none focus:ring-2 focus:ring-electric-500/20"
                    placeholder="Ihre Firma"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80">
                  Ihre Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition focus:border-electric-500/50 focus:outline-none focus:ring-2 focus:ring-electric-500/20"
                  placeholder="Erzählen Sie uns von Ihrem Projekt oder stellen Sie Ihre Fragen..."
                />
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-white/50">
                  * Pflichtfelder · 100% DSGVO-konform
                </p>
                <ShimmerButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3 sm:w-auto"
                >
                  {isSubmitting ? "Wird gesendet..." : "→ Jetzt anfragen"}
                </ShimmerButton>
              </div>
            </form>
          )}
        </div>

        <motion.div
          className="mt-8 grid gap-3 text-center sm:grid-cols-3 sm:gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 sm:rounded-2xl sm:p-4">
            <div className="text-xl sm:text-2xl">📞</div>
            <p className="mt-1.5 text-xs font-medium text-white/80 sm:mt-2 sm:text-sm">Schnelle Antwort</p>
            <p className="text-[10px] text-white/50 sm:text-xs">Innerhalb 24h</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 sm:rounded-2xl sm:p-4">
            <div className="text-xl sm:text-2xl">🔒</div>
            <p className="mt-1.5 text-xs font-medium text-white/80 sm:mt-2 sm:text-sm">DSGVO-konform</p>
            <p className="text-[10px] text-white/50 sm:text-xs">EU-Hosting</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 sm:rounded-2xl sm:p-4">
            <div className="text-xl sm:text-2xl">🇦🇹</div>
            <p className="mt-1.5 text-xs font-medium text-white/80 sm:mt-2 sm:text-sm">Made in Austria</p>
            <p className="text-[10px] text-white/50 sm:text-xs">Support aus Österreich</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

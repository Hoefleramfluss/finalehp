import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

import ShimmerButton from "@/components/ui/ShimmerButton";
import { CheckIcon } from "@/components/icons";
import { copy } from "@/copy";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const calculatePrice = (planName: string, monthlyPrice: string) => {
    // Starter bleibt immer gleich
    if (planName === "Starter") return monthlyPrice;
    
    // Enterprise hat "ab" - nur Zahl extrahieren
    if (planName === "Enterprise") {
      const basePrice = parseFloat(monthlyPrice.replace(/[^\d,]/g, '').replace(',', '.'));
      const yearlyPrice = (basePrice * 0.9).toFixed(0);
      return isYearly ? `ab €${yearlyPrice}` : monthlyPrice;
    }
    
    // Medium und Pro bekommen 10% Rabatt
    const price = parseFloat(monthlyPrice.replace(/[^\d,]/g, '').replace(',', '.'));
    const yearlyPrice = (price * 0.9).toFixed(0);
    return isYearly ? `€${yearlyPrice}` : monthlyPrice;
  };

  return (
    <section id="pricing" className="relative mx-auto w-full max-w-6xl px-6 scroll-mt-24">
      <div className="mx-auto flex max-w-3xl flex-col gap-5 text-center">
        <motion.h2
          className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {copy.pricing.title}
        </motion.h2>
        <motion.p
          className="text-base text-white/70 sm:text-lg"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
        >
          {copy.pricing.subtitle}
        </motion.p>

        {/* Billing Toggle */}
        <motion.div
          className="mt-4 inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-night-900/80 p-1.5 backdrop-blur"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <button
            onClick={() => setIsYearly(false)}
            className={clsx(
              "rounded-full px-5 py-2 text-sm font-semibold transition-all",
              !isYearly
                ? "bg-electric-500/20 text-white shadow-sm"
                : "text-white/60 hover:text-white/80"
            )}
          >
            Monatlich
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={clsx(
              "rounded-full px-5 py-2 text-sm font-semibold transition-all",
              isYearly
                ? "bg-electric-500/20 text-white shadow-sm"
                : "text-white/60 hover:text-white/80"
            )}
          >
            Jährlich
            <span className="ml-1.5 text-xs text-electric-300">-10%</span>
          </button>
        </motion.div>
      </div>

      <div className="mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {copy.pricing.plans.map((plan, index) => (
          <motion.article
            key={plan.name}
            className={clsx(
              "group relative flex flex-col gap-4 rounded-[24px] border p-6 backdrop-blur-xl transition-all duration-300 sm:gap-5 sm:rounded-[28px] sm:p-7",
              {
                "border-electric-500/60 bg-gradient-to-br from-electric-500/15 via-night-900/90 to-night-900/90 shadow-[0_35px_120px_-60px_rgba(0,188,212,0.7)] hover:shadow-[0_35px_140px_-50px_rgba(0,188,212,0.85)]": 
                  plan.popular,
                "border-white/10 bg-night-900/75 hover:border-white/20 hover:bg-night-900/85": 
                  !plan.popular && !plan.enterprise,
                "border-electric-400/70 bg-gradient-to-br from-electric-400/20 via-night-900/85 to-night-900/95 shadow-[0_40px_140px_-55px_rgba(0,212,255,0.8)]": 
                  plan.enterprise,
              }
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
          >
            {plan.popular && (
              <motion.span 
                className="absolute -top-[10px] left-1/2 -translate-x-1/2 inline-flex items-center justify-center whitespace-nowrap rounded-full border border-electric-400 bg-gradient-to-r from-electric-500 to-electric-400 px-2.5 py-0.5 text-[8px] font-extrabold uppercase tracking-wide text-white shadow-[0_0_12px_rgba(0,188,212,0.5)]"
                initial={{ scale: 0, opacity: 0, y: -10 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 300, damping: 20 }}
              >
                ⭐ Meistgewählt
              </motion.span>
            )}
            
            {plan.enterprise && (
              <motion.span 
                className="absolute -top-[10px] left-1/2 -translate-x-1/2 inline-flex items-center justify-center whitespace-nowrap rounded-full border border-yellow-400 bg-gradient-to-r from-yellow-500 to-amber-400 px-2.5 py-0.5 text-[8px] font-extrabold uppercase tracking-wide text-night-900 shadow-[0_0_12px_rgba(251,191,36,0.5)]"
                initial={{ scale: 0, opacity: 0, y: -10 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 300, damping: 20 }}
              >
                💎 Premium
              </motion.span>
            )}

            <div className="flex flex-col gap-3 text-left">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                {plan.minutes && (
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
                    {plan.minutes}
                  </span>
                )}
              </div>
              <div className="inline-flex items-baseline gap-1.5">
                {plan.enterprise ? (
                  <>
                    <span className="text-xs font-medium text-white/60">ab</span>
                    <span className="text-3xl font-bold text-white lg:text-4xl">
                      {calculatePrice(plan.name, plan.price).replace('ab ', '')}
                    </span>
                  </>
                ) : (
                  <span className="text-3xl font-bold text-white lg:text-4xl">
                    {calculatePrice(plan.name, plan.price)}
                  </span>
                )}
                <span className="text-sm font-medium text-white/60">
                  {plan.period}
                </span>
              </div>
              {isYearly && plan.name !== "Starter" && (
                <p className="text-xs text-electric-300/80">
                  10% Ersparnis bei jährlicher Zahlung (pro Monat)
                </p>
              )}
            </div>

            <ul className="flex-1 space-y-2.5 text-sm text-white/75">
              {plan.features.map((feature, idx) => (
                <motion.li 
                  key={feature} 
                  className="flex items-start gap-2.5"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.05 }}
                >
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-electric-400" />
                  <span className="leading-relaxed">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <ShimmerButton asLink href="#contact" className="justify-center text-sm">
              Jetzt starten
            </ShimmerButton>
          </motion.article>
        ))}
      </div>

      <motion.div
        className="mt-12 flex flex-col items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-sm text-white/70"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p>{copy.pricing.footnote}</p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm font-semibold text-electric-300 transition hover:text-electric-200"
        >
          {copy.pricing.moreLink}
          <span aria-hidden>→</span>
        </a>
      </motion.div>
    </section>
  );
}

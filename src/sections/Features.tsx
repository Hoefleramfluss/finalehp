import { motion } from "framer-motion";

import { SparkleIcon, CheckIcon } from "@/components/icons";
import ShimmerButton from "@/components/ui/ShimmerButton";
import { copy } from "@/copy";

const featureVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export default function Features() {
  return (
    <section id="features" className="relative mx-auto w-full max-w-6xl px-6">
      <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_320px] md:items-start">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-electric-400"
          >
            <SparkleIcon className="h-4 w-4" />
            AI Agent Ops
          </motion.div>

          <motion.h2
            className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            {copy.features.title}
          </motion.h2>

          <motion.p
            className="text-base text-white/70 sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          >
            Unsere KI-Agenten übernehmen komplette Conversational Workflows vom Erstkontakt bis zur
            Terminbestätigung – orchestriert und überwacht auf einer Plattform.
          </motion.p>

          <motion.ul
            className="grid gap-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-120px" }}
          >
            {copy.features.items.map((feature, index) => (
              <motion.li
                key={feature.title}
                variants={featureVariants}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-inner backdrop-blur-lg"
              >
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm text-white/70">{feature.description}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <aside className="flex flex-col gap-6 rounded-[32px] border border-white/10 bg-night-900/70 p-8 shadow-[0_35px_120px_-60px_rgba(0,188,212,0.55)]">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-white">Voice Agents, die nichts vergessen</h3>
            <p className="text-sm text-white/70">
              Jede Interaktion landet strukturiert im CRM. Unsere Agenten sprechen Dialekte, reagieren auf Emotionen
              und verknüpfen Workflows in Echtzeit.
            </p>
          </div>

          <ul className="space-y-3 text-sm text-white/70">
            {copy.features.highlights.map((highlight) => (
              <li key={highlight.text} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <span className="text-2xl font-semibold text-white">{highlight.label}</span>
                <span>{highlight.text}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4">
            <ul className="space-y-2 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-electric-400" />
                Automatisierte Übergaben an Ihr Team
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-electric-400" />
                Voice QA & Agent Coaching in Echtzeit
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-electric-400" />
                Vollständig auditierbar & DSGVO-konform
              </li>
            </ul>
            <ShimmerButton asLink href="#pricing" className="justify-center">
              Pricing ansehen
            </ShimmerButton>
          </div>
        </aside>
      </div>
    </section>
  );
}

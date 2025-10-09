import { motion } from "framer-motion";

import { CheckIcon } from "@/components/icons";
import Logo from "@/components/Logo";
import { copy } from "@/copy";

export default function Why() {
  return (
    <section id="why" className="relative mx-auto w-full max-w-6xl px-6 scroll-mt-24">
      <div className="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-start">
        <div className="space-y-6 sm:space-y-8">
          <motion.div
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-night-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/70 backdrop-blur"
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Logo variant="compact" className="h-7 w-auto" alt="" aria-hidden />
            Voxon.ai Insights
          </motion.div>

          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {copy.why.title}
            </h2>
            <p className="max-w-3xl text-base text-white/70 sm:text-lg">{copy.why.intro}</p>
          </motion.div>

          <motion.ul
            className="grid gap-4 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {copy.why.bullets.map((item) => (
              <motion.li
                key={item.title}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-electric-500/30 bg-electric-500/10">
                    <CheckIcon className="h-4 w-4 text-electric-400" />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-white/70">{item.description}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.aside
          className="flex flex-col gap-6 rounded-[32px] border border-white/10 bg-night-900/80 p-6 shadow-[0_35px_120px_-60px_rgba(0,188,212,0.55)] backdrop-blur-lg sm:p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Logo variant="default" className="h-16 w-auto sm:h-20" />
          </motion.div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold leading-tight text-white sm:text-2xl">Business-Impact auf einen Blick</h3>
            <p className="text-sm leading-relaxed text-white/70">
              Erfolgreiche Kund:innen in Gastro, Medizin und Werkstätten vertrauen auf Voxon.ai für messbare
              Conversion-Steigerung.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 xs:grid-cols-3">
            {copy.why.highlights.map((item, idx) => (
              <motion.div
                key={item.text}
                className="relative rounded-2xl border border-electric-400/30 bg-gradient-to-br from-electric-500/10 to-electric-400/5 px-4 py-5 text-center text-white overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:bg-[linear-gradient(110deg,transparent,rgba(0,188,212,0.2),transparent)] hover:before:animate-shimmerAlt"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <p className="relative z-10 text-xs text-white/60 sm:text-sm">{item.text}</p>
                <p className="relative z-10 mt-2 text-2xl font-bold sm:text-3xl">{item.label}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-medium text-white/60">
            {copy.site.heroBadges.map((badge) => (
              <span key={badge} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                {badge}
              </span>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

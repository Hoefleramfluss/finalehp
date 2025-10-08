import { motion } from "framer-motion";

import ShimmerButton from "@/components/ui/ShimmerButton";
import { copy } from "@/copy";

export default function Functions() {
  return (
    <section id="functions" className="relative mx-auto w-full max-w-6xl px-6 scroll-mt-24">
      <motion.div
        className="mx-auto flex max-w-3xl flex-col gap-3 text-center sm:gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">{copy.functions.title}</h2>
        <p className="text-sm leading-relaxed text-white/70 sm:text-base sm:leading-relaxed lg:text-lg">{copy.functions.subtitle}</p>
      </motion.div>

      <div className="mt-8 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-3">
        {copy.functions.cards.map((card, index) => (
          <motion.article
            key={card.title}
            className="group relative flex h-full flex-col gap-3 rounded-[24px] border border-white/10 bg-night-900/80 p-6 backdrop-blur-lg transition-all sm:gap-4 sm:rounded-[30px] sm:p-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
            whileHover={{ y: -8, borderColor: "rgba(255,255,255,0.15)", transition: { duration: 0.2 } }}
          >
            <motion.span 
              className="text-3xl sm:text-4xl" 
              aria-hidden
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              {card.icon}
            </motion.span>
            <h3 className="text-lg font-bold text-white sm:text-xl">{card.title}</h3>
            <p className="text-sm leading-relaxed text-white/70">{card.description}</p>
          </motion.article>
        ))}
      </div>

      <motion.div 
        className="mt-10 flex flex-col items-center gap-6 sm:mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex w-full max-w-md flex-col items-center gap-3 text-center">
          <p className="text-base font-semibold text-white sm:text-lg">Überzeugen Sie sich selbst!</p>
          <p className="text-sm leading-relaxed text-white/70">
            Jahrelange Entwicklung der "Menschlichkeit" – lernt mit jedem Anruf:
          </p>
          <audio 
            controls 
            className="w-full rounded-xl border border-white/10 bg-night-900/80 shadow-lg"
            style={{ maxWidth: '400px' }}
          >
            <source src="/testaudio.mp3" type="audio/mpeg" />
            Ihr Browser unterstützt das Audio-Element nicht.
          </audio>
          <p className="px-4 text-xs leading-relaxed text-electric-300/80">
            🎧 Hörbeispiel: Wie ein Patiententelefonat klingen könnte (real getestet)
          </p>
        </div>
        <ShimmerButton asLink href="#contact" className="w-full max-w-xs px-8 py-3 sm:w-auto">
          {copy.functions.ctaButton}
        </ShimmerButton>
      </motion.div>
    </section>
  );
}

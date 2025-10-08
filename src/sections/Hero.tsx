import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import VideoBackground from "@/components/ui/VideoBackground";
import ShimmerButton from "@/components/ui/ShimmerButton";
import Logo from "@/components/Logo";
import { copy } from "@/copy";

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const subtitleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.4]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  const handleFunctionsClick = () => {
    const section = document.getElementById("functions");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      ref={ref as never}
      className="relative isolate flex min-h-[88vh] flex-col justify-center overflow-hidden px-6 pb-20 sm:pb-24 md:min-h-[92vh]"
      aria-labelledby="hero-heading"
    >
      <VideoBackground src="/hero-video1.mp4" opacity={0.3} />

      {/* Large Logo Top Right - Positioned over stats box */}
      <motion.div
        className="absolute right-0 top-24 z-10 hidden lg:block lg:right-8 xl:right-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ opacity: subtitleOpacity }}
      >
        <img
          src="/voxon-logo.png"
          alt="Voxon.ai Logo"
          className="h-28 w-auto opacity-90 transition-opacity hover:opacity-100 lg:h-32 xl:h-36"
        />
      </motion.div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 sm:gap-8 md:gap-10">
        <motion.div
          className="inline-flex max-w-max items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 backdrop-blur sm:gap-3 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.25em]"
          style={{ y: badgeY, opacity: subtitleOpacity }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          <Logo variant="compact" className="h-5 w-auto sm:h-6" alt="" aria-hidden />
          <span className="hidden sm:inline">{copy.site.shortTagline}</span>
          <span className="sm:hidden">🇦🇹 Austria · DSGVO</span>
        </motion.div>

        <div className="grid gap-8 sm:gap-10 md:grid-cols-[minmax(0,1fr)_340px] md:items-center md:gap-12">
          <div className="flex flex-col gap-6 sm:gap-8">
            <motion.h1
              id="hero-heading"
              className="text-balance text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl sm:leading-[1.05] lg:text-5xl xl:text-6xl"
              style={{ y: titleY }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
            >
              {copy.site.heroTitle}
            </motion.h1>

            <motion.p
              className="max-w-2xl text-sm font-medium leading-relaxed text-white/85 sm:text-base sm:leading-relaxed md:text-lg lg:text-xl"
              style={{ opacity: subtitleOpacity }}
            >
              {copy.site.heroSubtitle}
            </motion.p>

            <motion.ul
              className="hidden gap-3 text-sm text-white/70 sm:grid sm:text-base"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
            >
              {copy.site.heroOptions.slice(0, 3).map((option, idx) => (
                <motion.li 
                  key={option.label} 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-electric-500/30 bg-electric-500/10 text-xs font-semibold text-electric-300">
                    ✓
                  </span>
                  <span className="text-left text-white/80">{option.text}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <ShimmerButton asLink href="#contact" className="w-full justify-center px-6 py-3.5 text-sm font-semibold sm:w-auto sm:justify-start sm:px-8 sm:text-base">
                {copy.site.ctaPrimary}
              </ShimmerButton>
              <button
                type="button"
                onClick={handleFunctionsClick}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-medium text-white/80 backdrop-blur transition hover:border-electric-500/70 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric-500 sm:w-auto sm:px-6 sm:text-base"
              >
                {copy.site.ctaSecondary}
                <span className="translate-y-px transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-2 sm:gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
            >
              {copy.site.heroBadges.map((badge, idx) => (
                <motion.span
                  key={badge}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-white/60 sm:px-3 sm:text-xs sm:tracking-[0.2em]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + idx * 0.05 }}
                  whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.2)" }}
                >
                  {badge}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative overflow-hidden rounded-[20px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:rounded-[24px] sm:p-5 md:rounded-[32px] md:p-6"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            aria-label="Live KPI Übersicht"
          >
            {/* Logo overlay - oben rechts ohne Reflow */}
            <img
              src="/voxon-logo.png"
              alt="Voxon.ai"
              aria-hidden="true"
              className="pointer-events-none select-none absolute -top-2 -right-2 h-5 opacity-80 drop-shadow-lg sm:-top-3 sm:-right-3 sm:h-6 sm:opacity-90 md:h-7 z-10"
            />
            
            <div className="flex items-center justify-between text-[10px] font-medium text-white/60 sm:text-xs">
              <span>Realtime KPI</span>
              <span>Heute</span>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-4">
              {copy.why.highlights.map((item, idx) => (
                <motion.div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-night-900/70 p-3 shadow-inner sm:rounded-2xl sm:p-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -4, transition: { duration: 0.2 } }}
                >
                  <p className="text-[10px] font-semibold text-white/60 sm:text-sm">{item.text}</p>
                  <p className="mt-1.5 text-xl font-bold text-white sm:mt-2 sm:text-2xl">{item.label}</p>
                </motion.div>
              ))}
            </div>
            <motion.div 
              className="mt-4 rounded-xl border border-white/10 bg-gradient-to-r from-electric-500/20 to-electric-400/20 p-3.5 sm:mt-5 sm:rounded-2xl sm:p-4 md:mt-6 md:p-5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-[11px] font-semibold text-white/70 sm:text-xs md:text-sm">Reelles Beispiel:</p>
              <p className="mt-1.5 text-base font-bold leading-tight text-white sm:mt-2 sm:text-lg sm:leading-snug md:mt-3 md:text-xl">
                Durch automatisierte Erinnerungen ca. 9 Behandlungstermine / Woche mehr!
              </p>
              <p className="mt-2 flex flex-wrap items-center gap-1.5 text-[9px] font-medium text-white/60 sm:gap-2 sm:text-[10px] md:text-xs">
                <span>🔒 DSGVO</span>
                <span>·</span>
                <span>🇪🇺 EU</span>
                <span>·</span>
                <span>🇦🇹 Austria</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

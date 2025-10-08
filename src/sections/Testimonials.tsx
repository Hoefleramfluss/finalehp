import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

import ShimmerButton from "@/components/ui/ShimmerButton";
import { copy } from "@/copy";

export default function Testimonials() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { once: false, margin: "-100px" });

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => {
          // Autoplay failed, user interaction needed
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <section id="testimonials" className="relative mx-auto w-full max-w-6xl px-6 scroll-mt-24">
      <motion.div
        className="mx-auto flex max-w-3xl flex-col gap-3 text-center sm:gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">{copy.testimonials.title}</h2>
        <p className="text-sm leading-relaxed text-white/70 sm:text-base sm:leading-relaxed lg:text-lg">{copy.testimonials.intro}</p>
      </motion.div>

      {/* Testimonial Video */}
      <motion.div
        className="mt-8 sm:mt-12"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[24px] border border-white/10 bg-night-900/75 shadow-[0_35px_120px_-70px_rgba(0,188,212,0.55)] sm:rounded-[32px]">
          <video
            ref={videoRef}
            className="w-full"
            style={{ filter: "brightness(0.6)" }}
            controls
            playsInline
            loop
          >
            <source src="/testimonial-video.mp4" type="video/mp4" />
            Ihr Browser unterstützt das Video-Element nicht.
          </video>
        </div>
      </motion.div>

      <div className="mt-8 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2">
        {copy.testimonials.quotes.map((quote, index) => (
          <motion.blockquote
            key={quote.quote}
            className="group relative flex h-full flex-col gap-4 rounded-[24px] border border-white/10 bg-night-900/75 p-6 shadow-[0_35px_120px_-70px_rgba(0,188,212,0.55)] backdrop-blur-xl transition-all sm:rounded-[32px] sm:p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
            whileHover={{ y: -6, scale: 1.02, borderColor: "rgba(255,255,255,0.15)", transition: { duration: 0.2 } }}
          >
            <motion.span 
              className="text-3xl leading-none text-electric-400 sm:text-4xl" 
              aria-hidden
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              "
            </motion.span>
            <p className="text-base font-medium leading-relaxed text-white sm:text-lg">{quote.quote}</p>
            <footer className="flex items-center gap-3 text-xs font-semibold text-white/60 sm:text-sm">
              <span className="flex-1">{quote.attribution}</span>
              {quote.logo && (
                <img 
                  src={quote.logo} 
                  alt="" 
                  className="h-8 w-auto object-contain opacity-80 sm:h-10"
                />
              )}
            </footer>
          </motion.blockquote>
        ))}
      </div>

      <motion.p
        className="mt-10 text-center text-sm text-white/70"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {copy.testimonials.ctaText}
      </motion.p>

      <div className="mt-6 flex justify-center">
        <ShimmerButton asLink href="#contact" className="px-8 py-3">
          {copy.cta.primary}
        </ShimmerButton>
      </div>
    </section>
  );
}

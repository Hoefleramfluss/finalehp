import { motion } from "framer-motion";
import ShimmerButton from "@/components/ui/ShimmerButton";
import { copy } from "@/copy";

export default function CTA() {
  return (
    <section id="contact" className="relative mx-auto w-full max-w-5xl px-6 scroll-mt-24">
      <motion.div 
        className="overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-r from-electric-500/20 via-night-900/95 to-aqua-500/20 p-8 text-center shadow-[0_45px_160px_-70px_rgba(0,188,212,0.6)] sm:rounded-[36px] sm:p-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      >
        <motion.div
          className="absolute inset-0 -z-10 opacity-30"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, rgba(0,188,212,0.3), transparent 50%), radial-gradient(circle at 80% 80%, rgba(0,212,255,0.2), transparent 50%)",
            backgroundSize: "200% 200%",
          }}
        />
        
        <motion.h2 
          className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {copy.cta.title}
        </motion.h2>
        
        <motion.p 
          className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base sm:leading-relaxed lg:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {copy.cta.description}
        </motion.p>
        
        <motion.div 
          className="mt-6 flex flex-col justify-center gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <ShimmerButton asLink href="#contact" className="justify-center px-7 py-3 text-sm sm:px-8 sm:text-base">
            {copy.cta.primary}
          </ShimmerButton>
          <motion.a
            href={`mailto:${copy.footer.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 py-3 text-sm font-medium text-white/80 backdrop-blur transition hover:border-electric-500/70 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric-500 sm:px-7 sm:text-base"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {copy.cta.secondary}
          </motion.a>
        </motion.div>
        
        <motion.p 
          className="mt-5 text-[10px] leading-relaxed text-white/50 sm:mt-6 sm:text-xs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {copy.cta.footnote}
        </motion.p>
      </motion.div>
    </section>
  );
}

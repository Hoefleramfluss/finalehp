import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { copy } from "@/copy";
import { PlusIcon, MinusIcon } from "@/components/icons";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative mx-auto w-full max-w-5xl px-6 scroll-mt-24">
      <div className="flex flex-col gap-4 text-center sm:gap-6">
        <motion.h2
          className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {copy.faq.title}
        </motion.h2>
        <motion.p 
          className="mx-auto max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base sm:leading-relaxed lg:text-lg"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Antworten auf die Fragen von Entscheidern aus Vertrieb, Operations und IT.
        </motion.p>
      </div>

      <div className="mt-8 space-y-3 sm:mt-12 sm:space-y-4">
        {copy.faq.items.map((item, index) => {
          const isOpen = activeIndex === index;

          return (
            <motion.article
              key={item.question}
              className="rounded-3xl border border-white/10 bg-night-900/70 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.button
                type="button"
                className="flex w-full items-center justify-between gap-3 text-left sm:gap-4"
                aria-expanded={isOpen}
                onClick={() => setActiveIndex(isOpen ? null : index)}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-base font-bold text-white sm:text-lg">{item.question}</span>
                <motion.span 
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors sm:h-10 sm:w-10"
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? <MinusIcon className="h-4 w-4" /> : <PlusIcon className="h-4 w-4" />}
                </motion.span>
              </motion.button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.p
                    key="content"
                    className="mt-4 text-sm text-white/70"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {item.answer}
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

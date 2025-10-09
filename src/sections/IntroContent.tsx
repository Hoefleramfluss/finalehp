import { motion } from "framer-motion";

export default function IntroContent() {
  return (
    <section className="relative mx-auto w-full max-w-4xl px-6">
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          KI-Voice- & Chatbots aus Österreich – 24/7 erreichbar & DSGVO-konform
        </h1>

        <div className="space-y-6 text-base text-white/80 leading-relaxed sm:text-lg">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Warum Voxon.ai?</h2>
          
          <p>
            Voxon.ai automatisiert Anrufe und Terminbuchungen mit einem mehrsprachigen{" "}
            <a href="/voicebot-deutsch" className="text-electric-400 hover:text-electric-300 underline decoration-electric-400/30 underline-offset-4 transition-colors">
              Voice-Agent
            </a>
            , der natürlich klingt und nahtlos in Kalender, CRM und Reservierung integriert. 
            Unternehmen in Gastronomie, Medizin, Werkstätten und Dienstleistung steigern die Erreichbarkeit 
            und reduzieren No-Shows – ohne Wartezeiten für Kunden.
          </p>

          <h3 className="text-xl font-semibold text-white sm:text-2xl">Was unsere Lösung leistet</h3>
          
          <ul className="space-y-3 list-none pl-0">
            <li className="flex items-start gap-3">
              <span className="text-electric-400 text-xl flex-shrink-0">✓</span>
              <span>
                <a href="/ki-terminbuchung" className="text-electric-400 hover:text-electric-300 underline decoration-electric-400/30 underline-offset-4 transition-colors">
                  Automatische Terminbuchung
                </a>
                {" "}inkl. Bestätigung & Erinnerungen
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-electric-400 text-xl flex-shrink-0">✓</span>
              <span>Inbound & Outbound – Rückruflisten, Umbuchungen, Wartelisten</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-electric-400 text-xl flex-shrink-0">✓</span>
              <span>Dialekte & Mehrsprachigkeit, EU-Hosting, DSGVO-konform</span>
            </li>
          </ul>

          <p>
            Starte in unter 48 Stunden: Integrationen verbinden, Standard-Flows aktivieren, 
            Soft-Launch – fertig. Mehr Details zu{" "}
            <a href="/branchen/gastronomie" className="text-electric-400 hover:text-electric-300 underline decoration-electric-400/30 underline-offset-4 transition-colors">
              Use Cases in der Gastronomie
            </a>
            , zu{" "}
            <a href="#pricing" className="text-electric-400 hover:text-electric-300 underline decoration-electric-400/30 underline-offset-4 transition-colors">
              unseren Preisen
            </a>
            {" "}und{" "}
            <a href="#contact" className="text-electric-400 hover:text-electric-300 underline decoration-electric-400/30 underline-offset-4 transition-colors">
              Demo buchen
            </a>
            .
          </p>
        </div>
      </motion.div>
    </section>
  );
}

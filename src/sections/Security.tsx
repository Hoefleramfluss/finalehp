import { motion } from "framer-motion";
import { useState } from "react";

const securityOptions = [
  {
    id: "azure",
    icon: "🔷",
    title: "Azure OpenAI Service",
    models: "GPT-4o, GPT-4-Turbo",
    hosting: "Microsoft Azure EU (Niederlande / Frankfurt)",
    advantages: [
      "AV-Vertrag nach Art. 28 DSGVO",
      "Keine Datenübermittlung außerhalb der EU",
      "Enterprise-SLA + ISO 27001",
    ],
    ideal: "Ideal für Voicebots mit sensiblen Kundendaten.",
  },
  {
    id: "eu",
    icon: "🇪🇺",
    title: "Alternative EU-Modelle",
    models: "Mistral AI / Aleph Alpha",
    hosting: "100 % EU-Server",
    advantages: [
      "Keine Drittlandübermittlung",
      "Open-Source-kompatibel",
      "Hohe Transparenz, schnelleres Deployment",
    ],
    ideal: "Leistung leicht schwächer, aber für viele Voice-Flows völlig ausreichend.",
  },
  {
    id: "hybrid",
    icon: "⚡",
    title: "Hybrid-Setup",
    models: "Empfohlene Variante",
    hosting: "Google Cloud EU + Mistral/Azure",
    advantages: [
      "STT/TTS via Google Cloud (EU-Region – europe-west3)",
      "Intent-Erkennung via Mistral / Aleph Alpha / Azure EU",
      "Maximale Flexibilität",
      "Alles innerhalb der EU",
      "DSGVO-sicherer Datenaustausch",
      "Hohe Verfügbarkeit + KI-Präzision",
    ],
    ideal: "Best-of-Both: Höchste Qualität bei maximaler Datenschutz-Compliance.",
    recommended: true,
  },
];

export default function Security() {
  const [activeTab, setActiveTab] = useState("hybrid");

  return (
    <section id="security" className="relative mx-auto w-full max-w-6xl px-6 scroll-mt-24">
      <motion.div
        className="text-center space-y-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          🔒 100% Datenschutz - 100% Vertrauen
        </h2>
        <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
          VoxOn.ai verarbeitet alle Daten nach strengsten europäischen Datenschutzstandards – 
          100 % DSGVO-konform, EU-gehostet, mit Auftragsverarbeitungsvertrag.
        </p>
        <p className="text-base text-white/70 max-w-3xl mx-auto leading-relaxed">
          Ob Sprachverarbeitung, Termin-KI oder Chat-Agent – sämtliche Systeme werden ausschließlich 
          in europäischen Rechenzentren betrieben. Wir setzen auf zertifizierte Anbieter wie 
          Google Cloud (EU), Microsoft Azure (EU) und Mistral (AI EU).
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {securityOptions.map((option, idx) => (
          <motion.button
            key={option.id}
            onClick={() => setActiveTab(option.id)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all relative overflow-hidden ${
              activeTab === option.id
                ? "bg-electric-500/20 border-2 border-electric-400 text-white"
                : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10"
            }`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl mr-2">{option.icon}</span>
            {option.title}
            {option.recommended && (
              <span className="ml-2 text-xs bg-electric-500 text-night-900 px-2 py-0.5 rounded-full">
                Empfohlen
              </span>
            )}
          </motion.button>
        ))}
      </div>

      {/* Active Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-3xl border border-white/10 bg-night-900/80 p-8 backdrop-blur-xl shadow-[0_35px_120px_-60px_rgba(0,188,212,0.55)]"
      >
        {securityOptions
          .filter((opt) => opt.id === activeTab)
          .map((option) => (
            <div key={option.id} className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-5xl">{option.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-white">{option.title}</h3>
                  <p className="text-white/60">{option.models}</p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
                <p className="text-sm font-semibold text-white/70 mb-2">Hosting:</p>
                <p className="text-lg text-white">{option.hosting}</p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Vorteile:</h4>
                <ul className="space-y-3">
                  {option.advantages.map((adv, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-electric-400 text-xl flex-shrink-0">✓</span>
                      <span className="text-white/80">{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-gradient-to-r from-electric-500/10 to-electric-400/5 border border-electric-400/30 p-6">
                <p className="text-white leading-relaxed">
                  <strong>Ideal für:</strong> {option.ideal}
                </p>
              </div>
            </div>
          ))}
      </motion.div>

      {/* Legal Section */}
      <motion.div
        className="mt-12 space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h3 className="text-2xl font-bold text-white mb-4">
            📄 Vertrag zur Auftragsverarbeitung (AVV) & DSGVO
          </h3>
          <p className="text-white/80 leading-relaxed mb-6">
            Für jeden Kunden stellen wir einen individuellen Auftragsverarbeitungsvertrag gemäß 
            Art. 28 DSGVO bereit. Dieser regelt die technische und organisatorische Datensicherheit, 
            Löschfristen, Subprozessoren und Haftungsfragen.
          </p>
          <p className="text-white/80 leading-relaxed mb-6">
            Unsere Serverstandorte und Modelle erfüllen die Anforderungen der 
            Datenschutz-Grundverordnung (DSGVO), des österreichischen DSG und des TKG 2021.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/datenschutz.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/15 transition-all relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:bg-[linear-gradient(110deg,transparent,rgba(255,255,255,.35),transparent)] hover:before:animate-shimmerAlt"
            >
              <span className="relative z-10">🧾 Datenschutzerklärung</span>
            </a>
            <a
              href="/VoxOn_AV_Vertrag.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-electric-500/20 border border-electric-400 text-white hover:bg-electric-500/30 transition-all relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:bg-[linear-gradient(110deg,transparent,rgba(0,188,212,.35),transparent)] hover:before:animate-shimmerAlt"
            >
              <span className="relative z-10">📄 AV-Vertrag (PDF)</span>
            </a>
          </div>
        </div>

        {/* Description Block */}
        <div className="rounded-2xl border border-white/10 bg-night-900/80 p-6 backdrop-blur-xl">
          <p className="text-lg text-white/80 leading-relaxed">
            Voicebot Deutsch für automatische Terminbuchung. Ob Gastro, Ordination oder Werkstatt: Voxon.ai kümmert sich 24/7 um Anrufe & Termine – DSGVO-konform mit EU-Hosting.
          </p>
        </div>

        {/* Abschlusssatz */}
        <motion.div
          className="text-center py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-xl font-semibold text-white leading-relaxed">
            Sicherheit ist kein Zusatz, sondern Standard.
          </p>
          <p className="text-lg text-white/70 mt-2">
            Bei VoxOn.ai bleiben alle Daten in Europa – transparent, verschlüsselt und rechtskonform.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

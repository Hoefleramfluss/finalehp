import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShimmerButton from '@/components/ui/ShimmerButton';

export default function VoicebotDeutsch() {
  const jsonLdSchemas = [
    // WebPage
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Voicebot Deutsch – natürlicher Telefon‑Assistent",
      "url": "https://www.voxon.app/voicebot-deutsch",
      "inLanguage": "de",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.voxon.app/"},
          {"@type": "ListItem", "position": 2, "name": "Voicebot Deutsch", "item": "https://www.voxon.app/voicebot-deutsch"}
        ]
      }
    },
    // FAQPage
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {"@type": "Question", "name": "Wie schnell bin ich startklar?", "acceptedAnswer": {"@type": "Answer", "text": "In der Regel unter 48 Stunden: Integrationen verbinden, Standard-Flows aktivieren und Testanrufe durchführen."}},
        {"@type": "Question", "name": "Funktioniert das mit meinem System?", "acceptedAnswer": {"@type": "Answer", "text": "Gängige Kalender, Reservierungssysteme und CRMs werden unterstützt. Eigene Systeme sind via Webhook/REST möglich."}},
        {"@type": "Question", "name": "Was kostet das?", "acceptedAnswer": {"@type": "Answer", "text": "Abrechnung minutenbasiert – transparent und planbar. In der Demo kalkulieren wir dein realistisches Volumen."}},
        {"@type": "Question", "name": "Wie klingen die Stimmen?", "acceptedAnswer": {"@type": "Answer", "text": "Natürlich und passend zur Branche. Beispiele hörst du in der Live-Demo."}}
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Voicebot Deutsch – natürlicher Telefon‑Assistent | Voxon.ai"
        description="Was ist ein Voicebot auf Deutsch? Vorteile, Funktionen, Integrationen & Live‑Use‑Cases. Voxon: Terminbuchung 24/7, Dialekte, DSGVO & EU‑Hosting. Jetzt Demo buchen."
        canonical="https://www.voxon.app/voicebot-deutsch"
        ogTitle="Voicebot Deutsch – natürlicher Telefon‑Assistent | Voxon.ai"
        ogDescription="Erreichbarkeit erhöhen, No‑Shows senken: Voxon Voice Agent mit Dialekten & Integrationen. DSGVO‑konform, EU‑Hosting."
        ogUrl="https://www.voxon.app/voicebot-deutsch"
        ogImage="https://www.voxon.app/og-image.png"
        jsonLd={jsonLdSchemas}
      />
      
      <div className="relative min-h-screen bg-night-900 text-white">
        <Header />
        
        <main className="relative isolate px-6 pt-32 pb-24 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm text-white/60">
              <Link to="/" className="hover:text-white transition">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Voicebot Deutsch</span>
            </nav>

            {/* H1 */}
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-8">
              Voicebot Deutsch – der natürliche Telefon‑Assistent für dein Business
            </h1>

            {/* Einleitung */}
            <div className="prose prose-invert prose-lg max-w-none mb-12">
              <p className="text-xl text-white/80 leading-relaxed">
                Kunden rufen an, weil sie schnell Antworten oder Termine brauchen. Ein <strong>Voicebot auf Deutsch</strong> übernimmt diese Gespräche freundlich, verlässlich und jederzeit. Mit Voxon.ai bekommst du einen <strong>Voice Agent</strong>, der natürlich spricht, Dialekte versteht und Termine automatisch bucht – ohne starre Menüs, ohne Wartezeiten.
              </p>
            </div>

            {/* Was ist ein Voicebot? */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Was ist ein Voicebot?</h2>
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                Ein Voicebot ist eine sprachbasierte Software, die mit Menschen telefonisch interagiert. Er versteht freie Sprache (NLP), stellt Rückfragen, führt Aktionen aus (z. B. Termin anlegen) und bestätigt Ergebnisse. Im Gegensatz zu klassischer IVR („Drücke 1, 2, 3") führt ein <strong>Voicebot echte Dialoge</strong> und passt sich spontan an.
              </p>
            </section>

            {/* Vorteile */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Vorteile auf einen Blick</h2>
              <ul className="space-y-4 text-lg text-white/80">
                <li className="flex items-start">
                  <span className="mr-3 text-electric-500">✓</span>
                  <span><strong>Erreichbarkeit 24/7</strong> – auch außerhalb der Öffnungszeiten</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-electric-500">✓</span>
                  <span><strong>Automatische Terminbuchung</strong> – inkl. Bestätigung/Erinnerung</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-electric-500">✓</span>
                  <span><strong>No‑Shows reduzieren</strong> – klare Abfragen, Reminder, Umbuchungen</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-electric-500">✓</span>
                  <span><strong>Team entlasten</strong> – Standardanliegen erledigt der Bot</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-electric-500">✓</span>
                  <span><strong>DSGVO & EU‑Hosting</strong> – Daten bleiben in Europa</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-electric-500">✓</span>
                  <span><strong>Dialekte</strong> – Wienerisch, Hochdeutsch, neutral</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link to="/ki-terminbuchung" className="text-electric-500 hover:text-electric-400 font-medium">
                  → Mehr zur automatischen Terminbuchung
                </Link>
              </div>
            </section>

            {/* Wie der Dialog funktioniert */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Wie der Dialog funktioniert</h2>
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                Der Agent begrüßt, erfragt Anliegen, bestätigt Datum/Zeit in eigenen Worten, prüft Verfügbarkeit im Kalender/CRM/Reservierung, bucht oder schlägt Alternativen vor. Am Ende bekommst du eine saubere Notiz im System.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Bei komplexen Fällen stellt der Agent gezielte Rückfragen oder übergibt an dein Team – inkl. Zusammenfassung.
              </p>
            </section>

            {/* Integrationen */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Integrationen</h2>
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                Out‑of‑the‑box mit <strong>Google Calendar</strong>, <strong>Outlook/Exchange</strong>, <strong>iCal/ICS</strong>, <strong>Resmio</strong>, <strong>Doctolib</strong>, <strong>HubSpot</strong>, <strong>Pipedrive</strong> u. a.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Eigene Systeme? Über Webhook/REST möglich. Du definierst Rechte & Freigaben (selbst buchen vs. Vorschläge).
              </p>
            </section>

            {/* Qualität & Dialekte */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Qualität & Dialekte</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Natürlich klingende Stimmen, präzise Zahlenausgabe (z. B. „neunzehn Uhr", nicht „neunzehn null null"), robust bei Hintergrundgeräuschen. Der Agent paraphrasiert wichtige Infos und bestätigt sie – das senkt Fehler.
              </p>
            </section>

            {/* DSGVO-Sicherheit */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">DSGVO‑Sicherheit</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Datensparsamkeit, Auftragsverarbeitung, Rollen & Rechte, Löschfristen – transparent dokumentiert. Datenschutz‑Hinweise auf Nachfrage im Gespräch oder per Link. Hosting in der EU.
              </p>
            </section>

            {/* Was bringt es konkret? */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Was bringt es konkret?</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Mehr erreichte Anrufer, weniger No‑Shows, weniger Unterbrechungen im Tagesgeschäft. Typische Zeitersparnis: <strong>mehrere Stunden/Woche</strong>.
              </p>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Häufige Fragen</h2>
              <div className="space-y-6">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Wie schnell bin ich startklar?</h3>
                  <p className="text-white/80">In der Regel unter 48 Stunden: Integrationen verbinden, Standard-Flows aktivieren und Testanrufe durchführen.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Funktioniert das mit meinem System?</h3>
                  <p className="text-white/80">Gängige Kalender, Reservierungssysteme und CRMs werden unterstützt. Eigene Systeme sind via Webhook/REST möglich.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Was kostet das?</h3>
                  <p className="text-white/80">Abrechnung minutenbasiert – transparent und planbar. In der Demo kalkulieren wir dein realistisches Volumen.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Wie klingen die Stimmen?</h3>
                  <p className="text-white/80">Natürlich und passend zur Branche. Beispiele hörst du in der Live-Demo.</p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="mt-16 text-center">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-electric-500/10 to-electric-400/5 p-12">
                <h2 className="text-3xl font-bold text-white mb-6">Bereit für deinen Voice Agent?</h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <ShimmerButton asLink href="#contact" className="justify-center px-8 py-4">
                    → Jetzt Demo buchen
                  </ShimmerButton>
                  <Link 
                    to="/pricing" 
                    className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-8 py-4 font-medium text-white hover:bg-white/10 transition"
                  >
                    Preise ansehen
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

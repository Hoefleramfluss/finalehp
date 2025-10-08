import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShimmerButton from '@/components/ui/ShimmerButton';

export default function KITerminbuchung() {
  const jsonLdSchemas = [
    // Service Schema
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Automatische Terminbuchung per Voice AI",
      "serviceType": "Terminvereinbarung am Telefon",
      "provider": {"@type": "Organization", "name": "Voxon.ai", "url": "https://www.voxon.app/"},
      "areaServed": ["AT","DE","CH"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Voxon Pakete",
        "itemListElement": [
          {"@type": "Offer", "name": "Small"},
          {"@type": "Offer", "name": "Standard"},
          {"@type": "Offer", "name": "Pro"}
        ]
      }
    },
    // Breadcrumb
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.voxon.app/"},
        {"@type": "ListItem", "position": 2, "name": "KI‑Terminbuchung", "item": "https://www.voxon.app/ki-terminbuchung"}
      ]
    },
    // FAQPage
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {"@type": "Question", "name": "Wie funktioniert die automatische Terminbuchung?", "acceptedAnswer": {"@type": "Answer", "text": "Die Voice AI fragt Datum/Zeit und Anliegen ab, prüft freie Slots im Kalender/Reservierung/CRM und bestätigt oder schlägt Alternativen vor."}},
        {"@type": "Question", "name": "Senkt das No‑Shows?", "acceptedAnswer": {"@type": "Answer", "text": "Ja – durch unmittelbare Bestätigung und optionale Erinnerungen (z. B. 48 h & 4 h vorher) sowie klare Zusammenfassungen."}},
        {"@type": "Question", "name": "Welche Systeme werden unterstützt?", "acceptedAnswer": {"@type": "Answer", "text": "Google Calendar, Outlook/Exchange, iCal/ICS, Resmio, Doctolib, HubSpot, Pipedrive – weitere über REST/Webhook."}}
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="KI‑Terminbuchung per Telefon – automatisch & zuverlässig | Voxon.ai"
        description="Automatische Terminvereinbarung per Voice AI: anrufen lassen, buchen, bestätigen – inkl. Erinnerungen & Umbuchungen. Integrationen & DSGVO‑Hosting. Jetzt testen."
        canonical="https://www.voxon.app/ki-terminbuchung"
        ogTitle="KI‑Terminbuchung per Telefon – automatisch & zuverlässig | Voxon.ai"
        ogDescription="Voice AI nimmt Anrufe an, bucht Termine und erinnert automatisch. Dialekte, Integrationen, EU‑Hosting."
        ogUrl="https://www.voxon.app/ki-terminbuchung"
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
              <span className="text-white">KI-Terminbuchung</span>
            </nav>

            {/* H1 */}
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-8">
              Automatische Terminbuchung per Voice AI – direkt am Telefon
            </h1>

            {/* Warum KI-Terminbuchung? */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Warum KI‑Terminbuchung?</h2>
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                Termine sofort fixieren, statt Rückrufe zu stapeln: Deine Kunden rufen an, die Voice AI fragt die Eckdaten ab, prüft <strong>freie Slots</strong> in Kalender/Reservierung/CRM und bucht – mit SMS/E‑Mail‑Bestätigung und optionalen Erinnerungen. Das senkt No‑Shows und entlastet dein Team.
              </p>
            </section>

            {/* Ablauf im Gespräch */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Ablauf im Gespräch</h2>
              <div className="space-y-4 text-lg text-white/80">
                <div className="flex items-start gap-4">
                  <span className="text-2xl text-electric-500">1.</span>
                  <p><strong>Begrüßung</strong> → Der Agent meldet sich freundlich und fragt nach dem Anliegen</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl text-electric-500">2.</span>
                  <p><strong>Zeitraum erfragen</strong> → „Wann hättest du Zeit?" – flexibel & natürlich</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl text-electric-500">3.</span>
                  <p><strong>Verfügbarkeit prüfen</strong> → Kalender/CRM/Reservierung in Echtzeit</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl text-electric-500">4.</span>
                  <p><strong>Bestätigung/Alternative</strong> → Slot frei → buchen; besetzt → nächste Option</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl text-electric-500">5.</span>
                  <p><strong>Zusammenfassung</strong> → SMS/E-Mail-Bestätigung, Notiz im System</p>
                </div>
              </div>
              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                Für besondere Regeln (z. B. „Küche bis 21:00", „Sonntag 19:45") setzt die Voice AI klare Hinweise und schlägt passende Optionen vor.
              </p>
            </section>

            {/* Funktionen */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Funktionen</h2>
              <ul className="space-y-4 text-lg text-white/80">
                <li className="flex items-start">
                  <span className="mr-3 text-electric-500">✓</span>
                  <span><strong>Buchen, verschieben, absagen</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-electric-500">✓</span>
                  <span><strong>Warteliste & Rückrufbitten</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-electric-500">✓</span>
                  <span><strong>Mehrstufige Erinnerungen</strong> (z. B. 48 h & 4 h vorher)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-electric-500">✓</span>
                  <span><strong>Umbuchungen bei Konflikten</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-electric-500">✓</span>
                  <span><strong>Protokoll & Notizen</strong> im Zielsystem</span>
                </li>
              </ul>
            </section>

            {/* Integrationen */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Integrationen</h2>
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                <strong>Google Calendar</strong>, <strong>Outlook/Exchange</strong>, <strong>iCal/ICS</strong>, <strong>Resmio</strong>, <strong>Doctolib</strong>, <strong>HubSpot</strong>, <strong>Pipedrive</strong> u. a.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Eigene Systeme per REST/Webhook.
              </p>
            </section>

            {/* DSGVO & Hosting */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">DSGVO & Hosting</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                <strong>EU‑Hosting</strong>, Auftragsverarbeitung, Datensparsamkeit, Rollen & Rechte. Datenschutz‑Hinweise auf Nachfrage im Gespräch.
              </p>
            </section>

            {/* Preise & Minuten */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Preise & Minuten</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Minutenbasiert, fair & planbar. In der Demo rechnen wir dein Volumen (z. B. 15 Anrufe/Tag × 3 min × 5 Tage/Woche) und schlagen das passende Paket vor.
              </p>
              <div className="mt-6">
                <Link to="/pricing" className="text-electric-500 hover:text-electric-400 font-medium text-lg">
                  → Preise im Detail ansehen
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Häufige Fragen</h2>
              <div className="space-y-6">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Wie funktioniert die automatische Terminbuchung?</h3>
                  <p className="text-white/80">Die Voice AI fragt Datum/Zeit und Anliegen ab, prüft freie Slots im Kalender/Reservierung/CRM und bestätigt oder schlägt Alternativen vor.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Senkt das No‑Shows?</h3>
                  <p className="text-white/80">Ja – durch unmittelbare Bestätigung und optionale Erinnerungen (z. B. 48 h & 4 h vorher) sowie klare Zusammenfassungen.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Welche Systeme werden unterstützt?</h3>
                  <p className="text-white/80">Google Calendar, Outlook/Exchange, iCal/ICS, Resmio, Doctolib, HubSpot, Pipedrive – weitere über REST/Webhook.</p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="mt-16 text-center">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-electric-500/10 to-electric-400/5 p-12">
                <h2 className="text-3xl font-bold text-white mb-6">Termin-Chaos war gestern</h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <ShimmerButton asLink href="#contact" className="justify-center px-8 py-4">
                    → Jetzt testen
                  </ShimmerButton>
                  <Link 
                    to="/voicebot-deutsch" 
                    className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-8 py-4 font-medium text-white hover:bg-white/10 transition"
                  >
                    Mehr zum Voicebot
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

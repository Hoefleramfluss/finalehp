import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShimmerButton from '@/components/ui/ShimmerButton';

export default function VoicebotGastronomie() {
  const jsonLdSchemas = [
    // Service Schema
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Voicebot für Gastronomie",
      "serviceType": "Reservierungs‑ & Gästekommunikation",
      "provider": {"@type": "Organization", "name": "Voxon.ai", "url": "https://www.voxon.app/"},
      "areaServed": ["AT","DE","CH"],
      "audience": {"@type": "Audience", "audienceType": "Restaurants & Gastronomie"}
    },
    // Breadcrumb
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.voxon.app/"},
        {"@type": "ListItem", "position": 2, "name": "Branchen", "item": "https://www.voxon.app/branchen"},
        {"@type": "ListItem", "position": 3, "name": "Gastronomie", "item": "https://www.voxon.app/branchen/gastronomie"}
      ]
    },
    // FAQPage
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {"@type": "Question", "name": "Kann der Voicebot Küchenzeiten berücksichtigen?", "acceptedAnswer": {"@type": "Answer", "text": "Ja. Regeln wie Küche bis 21:00 oder Sonntagszeiten sind hinterlegt. Der Agent weist darauf hin und schlägt passende Uhrzeiten vor."}},
        {"@type": "Question", "name": "Wie hilft der Bot bei Schlechtwetter?", "acceptedAnswer": {"@type": "Answer", "text": "Der Agent informiert proaktiv über Regenrisiko und bietet Umbuchung vom Gastgarten in den Innenbereich an – inkl. Bestätigung."}},
        {"@type": "Question", "name": "Welche Systeme werden unterstützt?", "acceptedAnswer": {"@type": "Answer", "text": "Resmio, iCal/ICS, Google Calendar, Outlook/Exchange u. a. Auf Wunsch bucht der Agent direkt oder legt Anfragen zur Freigabe an."}}
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Voicebot für Gastronomie – Reservierungen & No‑Shows senken | Voxon.ai"
        description="Voice Agent für Restaurants: Anrufe annehmen, Tische buchen, Schlechtwetter‑Umbuchung, Erinnerungen & Gutschein‑Infos. Dialekte, EU‑Hosting, <48 h startklar."
        canonical="https://www.voxon.app/branchen/gastronomie"
        ogTitle="Voicebot für Gastronomie – Reservierungen & No‑Shows senken | Voxon.ai"
        ogDescription="Mehr Erreichbarkeit, weniger Leerläufe: Voice AI bucht, erinnert und informiert. Dialekte, Integrationen, EU‑Hosting."
        ogUrl="https://www.voxon.app/branchen/gastronomie"
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
              <Link to="/branchen" className="hover:text-white transition">Branchen</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Gastronomie</span>
            </nav>

            {/* H1 */}
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-8">
              Voicebot für Gastronomie – Reservierungen, Erinnerungen & entspannter Service
            </h1>

            {/* Problem & Ziel */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Problem & Ziel</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Telefon klingelt, Service rennt: Ein <strong>Voice Agent</strong> nimmt Anrufe an, bucht Tische, erklärt Küchenzeiten und verschickt Bestätigungen/Erinnerungen. Dein Team konzentriert sich auf Gäste – ohne ständige Unterbrechung.
              </p>
            </section>

            {/* Funktionen für Restaurants */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Funktionen für Restaurants</h2>
              <ul className="space-y-4 text-lg text-white/80">
                <li className="flex items-start">
                  <span className="mr-3 text-electric-500">🍽️</span>
                  <span><strong>Reservieren/verschieben/absagen</strong> – vollautomatisch am Telefon</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-electric-500">☔</span>
                  <span><strong>Schlechtwetter‑Umbuchungen</strong> – Gastgarten → Innenbereich</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-electric-500">⏰</span>
                  <span><strong>No‑Show‑Hinweise & Erinnerungen</strong> (z. B. 24 h & 4 h)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-electric-500">🎁</span>
                  <span><strong>Gutschein‑Infos</strong> – Verfügbarkeit, Abholung</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-electric-500">📅</span>
                  <span><strong>Tagesempfehlung/Öffnungszeiten</strong> ausspielen</span>
                </li>
              </ul>
            </section>

            {/* Küchenzeiten & Regeln */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Küchenzeiten & Regeln</h2>
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                Regeln wie <strong>„Küche bis 21:00"</strong>, <strong>„Sonntag 19:45"</strong> oder <strong>Anzahlungen ab 10 Personen</strong> sind hinterlegt. Der Agent weist freundlich darauf hin und passt Vorschläge an – weniger Missverständnisse, mehr Zufriedenheit.
              </p>
              
              <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-br from-electric-500/10 to-electric-400/5 p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Beispiel-Dialog:</h3>
                <div className="space-y-4 text-white/80">
                  <p><strong>Gast:</strong> „Ich hätte gern einen Tisch für 4 Personen, Samstag um 21:30."</p>
                  <p><strong>Agent:</strong> „Gern! Bitte beachte: Unsere Küche schließt um 21:00 Uhr. Möchtest du lieber um 19:00 oder 19:30 kommen?"</p>
                  <p><strong>Gast:</strong> „19:30 passt perfekt."</p>
                  <p><strong>Agent:</strong> „Super! Ich trage dich ein – du bekommst gleich eine SMS zur Bestätigung."</p>
                </div>
              </div>
            </section>

            {/* Integrationen */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Integrationen</h2>
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                <strong>Resmio</strong>, <strong>iCal/ICS</strong>, <strong>Google Calendar</strong>, <strong>Outlook/Exchange</strong> u. a. – der Agent bucht direkt oder legt Anfragen zur Bestätigung an.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <div className="text-electric-500 text-2xl mb-2">✓</div>
                  <h3 className="font-semibold text-white mb-2">Resmio</h3>
                  <p className="text-sm text-white/70">Direkte Integration für Restaurants</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <div className="text-electric-500 text-2xl mb-2">✓</div>
                  <h3 className="font-semibold text-white mb-2">Google Calendar</h3>
                  <p className="text-sm text-white/70">Einfaches Kalender-Management</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <div className="text-electric-500 text-2xl mb-2">✓</div>
                  <h3 className="font-semibold text-white mb-2">iCal/ICS</h3>
                  <p className="text-sm text-white/70">Universeller Kalender-Standard</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <div className="text-electric-500 text-2xl mb-2">✓</div>
                  <h3 className="font-semibold text-white mb-2">Outlook/Exchange</h3>
                  <p className="text-sm text-white/70">Microsoft-Integration</p>
                </div>
              </div>
            </section>

            {/* Ergebnisse */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Ergebnisse</h2>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-2xl border border-white/10 bg-white/5">
                  <div className="text-4xl font-bold text-electric-500 mb-2">+40%</div>
                  <p className="text-white/80">Höhere Erreichbarkeit bei Stoßzeiten</p>
                </div>
                <div className="text-center p-6 rounded-2xl border border-white/10 bg-white/5">
                  <div className="text-4xl font-bold text-electric-500 mb-2">−35%</div>
                  <p className="text-white/80">Weniger No-Shows durch Erinnerungen</p>
                </div>
                <div className="text-center p-6 rounded-2xl border border-white/10 bg-white/5">
                  <div className="text-4xl font-bold text-electric-500 mb-2">15h</div>
                  <p className="text-white/80">Zeitersparnis pro Woche</p>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/ki-terminbuchung" className="text-electric-500 hover:text-electric-400 font-medium text-lg">
                  → Mehr zur automatischen Terminbuchung
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Häufige Fragen</h2>
              <div className="space-y-6">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Kann der Voicebot Küchenzeiten berücksichtigen?</h3>
                  <p className="text-white/80">Ja. Regeln wie Küche bis 21:00 oder Sonntagszeiten sind hinterlegt. Der Agent weist darauf hin und schlägt passende Uhrzeiten vor.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Wie hilft der Bot bei Schlechtwetter?</h3>
                  <p className="text-white/80">Der Agent informiert proaktiv über Regenrisiko und bietet Umbuchung vom Gastgarten in den Innenbereich an – inkl. Bestätigung.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Welche Systeme werden unterstützt?</h3>
                  <p className="text-white/80">Resmio, iCal/ICS, Google Calendar, Outlook/Exchange u. a. Auf Wunsch bucht der Agent direkt oder legt Anfragen zur Freigabe an.</p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="mt-16 text-center">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-electric-500/10 to-electric-400/5 p-12">
                <h2 className="text-3xl font-bold text-white mb-6">Mehr Gäste, weniger Stress</h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <ShimmerButton asLink href="#contact" className="justify-center px-8 py-4">
                    → Demo buchen
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

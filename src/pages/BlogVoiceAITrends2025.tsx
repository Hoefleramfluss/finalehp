import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShimmerButton from '@/components/ui/ShimmerButton';
import { blogJsonLdSchemas } from '@/data/blogSchemas';

export default function BlogVoiceAITrends2025() {
  return (
    <>
      <SEO 
        title="Voice AI Trends 2025 – Wie KI-Stimmen Kundenerlebnisse revolutionieren | Voxon.ai"
        description="Mehrsprachige KI-Stimmen übernehmen 2025 das Telefon. Erfahre, warum Voice AI zum Gamechanger für Kundenservice, Terminbuchung und Automatisierung wird – inkl. Praxisbeispielen."
        canonical="https://www.voxon.app/blog/voice-ai-trends-2025"
        ogTitle="Voice AI Trends 2025 – Wie KI-Stimmen Kundenerlebnisse revolutionieren | Voxon.ai"
        ogDescription="Mehrsprachige KI-Stimmen übernehmen 2025 das Telefon – die wichtigsten Trends und Chancen für Unternehmen."
        ogUrl="https://www.voxon.app/blog/voice-ai-trends-2025"
        ogImage="https://www.voxon.app/og-image.png"
        jsonLd={blogJsonLdSchemas}
      />
      
      <div className="relative min-h-screen bg-night-900 text-white">
        <Header />
        
        <main className="relative isolate px-6 pt-32 pb-24 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <nav className="mb-8 text-sm text-white/60">
              <Link to="/" className="hover:text-white transition">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Blog</span>
            </nav>

            <header className="mb-12">
              <h1 className="page-title text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
                Voice AI Trends 2025 – Warum Unternehmen jetzt umdenken müssen
              </h1>
              <p className="lead text-xl text-white/80 leading-relaxed mb-6">
                Mehrsprachige KI-Stimmen übernehmen 2025 das Telefon. Erfahre, warum Voice AI zum Gamechanger für Kundenservice, Terminbuchung und Automatisierung wird.
              </p>
              <div className="flex items-center gap-4 text-sm text-white/60">
                <span>Von Christopher Marik</span>
                <span>•</span>
                <time dateTime="2025-10-08">8. Oktober 2025</time>
              </div>
            </header>

            <article className="prose prose-invert prose-lg max-w-none space-y-12">
              <section className="key-takeaway">
                <div className="rounded-3xl border border-electric-500/30 bg-gradient-to-br from-electric-500/10 to-electric-400/5 p-8">
                  <p className="text-lg text-white leading-relaxed">
                    <strong>Kurz gesagt:</strong> Mehrsprachige Voice AI steigert Erreichbarkeit, senkt No-Shows und entlastet Teams – in unter 48 Stunden implementierbar.
                  </p>
                </div>
              </section>

              {/* Content continues with full article - keeping design minimal */}
              <section className="mt-16 text-center">
                <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-electric-500/10 to-electric-400/5 p-12">
                  <h2 className="text-3xl font-bold text-white mb-4">🎧 Erlebe, wie dein Unternehmen mit Voice AI klingt</h2>
                  <ShimmerButton asLink href="#contact" className="justify-center px-8 py-4">
                    → Jetzt Demo buchen
                  </ShimmerButton>
                </div>
              </section>
            </article>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Bitte eine gültige E-Mail-Adresse eingeben.");
      return;
    }
    if (!password) {
      setError("Bitte das Passwort eingeben.");
      return;
    }
    console.log("login", { email });
  }

  return (
    <div className="relative min-h-screen bg-night-900 text-white overflow-hidden">
      <SEO
        title="Login – Voxon Verwaltung"
        description="Melde dich bei der Voxon Voicebot-Verwaltung an."
        canonical="https://www.voxon.app/login"
        ogUrl="https://www.voxon.app/login"
      />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh-radial opacity-70" />
      <div className="pointer-events-none absolute -top-40 -left-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-electric-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-aqua-500/20 blur-3xl" />

      <main className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 py-16">
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 shadow-voxon backdrop-blur-sm">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Anmelden</h1>
            <p className="mt-2 text-sm text-white/70">Voxon Voicebot Verwaltung</p>
          </div>

          {error && (
            <div className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-200">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="mb-1 block text-sm text-white/80">
                E-Mail
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none ring-0 transition focus:border-electric-500/60 focus:bg-white/10"
                placeholder="name@firma.com"
                autoComplete="email"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="mb-1 block text-sm text-white/80">
                Passwort
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none ring-0 transition focus:border-electric-500/60 focus:bg-white/10"
                placeholder="••••••••"
                autoComplete="current-password"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-white/60">Passwort vergessen?</span>
              <Link to="/registar" className="text-electric-400 hover:text-electric-300">
                Neu hier? Jetzt registrieren
              </Link>
            </div>

            <button
              type="submit"
              className="group relative mt-2 flex w-full items-center justify-center overflow-hidden rounded-lg bg-electric-500 px-4 py-2 font-semibold text-night-900 transition hover:bg-electric-400 focus:outline-none focus:ring-2 focus:ring-electric-500/50"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/30 blur-xl transition group-hover:translate-x-0" />
              Anmelden
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

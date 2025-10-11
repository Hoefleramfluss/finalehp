import Logo from "@/components/Logo";
import { copy } from "@/copy";

const footerLinks = [
  {
    title: "Entdecken",
    links: [
      { label: copy.site.nav.features, href: "#why" },
      { label: copy.site.nav.functions, href: "#functions" },
      { label: copy.site.nav.testimonials, href: "#testimonials" },
      { label: copy.site.nav.pricing, href: "#pricing" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Integrationen", href: "#functions" },
      { label: "Demo buchen", href: "#contact" },
      { label: "Referenzen", href: "#testimonials" },
      { label: "Support", href: `mailto:${copy.footer.email}` },
    ],
  },
  {
    title: "Rechtliches",
    links: copy.footer.links,
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-night-900/80">
      <div className="absolute inset-x-0 -top-20 h-20 bg-gradient-to-b from-electric-500/15 to-transparent blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-5">
          <a href="/" className="flex items-center" aria-label="Voxon.ai Startseite">
            <Logo className="h-10 w-auto" />
          </a>
          <p className="max-w-xs text-sm text-white/60">
            {copy.site.description}
          </p>
          <ul className="flex flex-wrap gap-2 text-xs font-medium text-white/60">
            {copy.site.trustBadges.map((badge) => (
              <li key={badge} className="rounded-full border border-white/10 px-3 py-1">
                {badge}
              </li>
            ))}
          </ul>
        </div>
        {footerLinks.map((column) => (
          <div key={column.title}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">
              {column.title}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 rounded-full px-2 py-1 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric-500"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 bg-black/20">
        {/* Impressum & Kontakt */}
        <div className="mx-auto max-w-6xl px-6 pt-8 pb-6">
          <div className="rounded-2xl border border-white/10 bg-night-900/80 p-5 backdrop-blur-xl">
            <h4 className="text-base font-semibold text-white mb-3">Impressum & Kontakt</h4>
            <div className="text-white/70 space-y-1.5 text-xs">
              <p className="font-semibold text-white text-sm">VoxOn.ai – Voice & Chatbots e.U.</p>
              <p>Gymelsdorfer Gasse 23, 2700 Wiener Neustadt, Österreich</p>
              <p>
                E-Mail:{" "}
                <a href="mailto:hello@voxon.app" className="text-electric-400 hover:text-electric-300">
                  hello@voxon.app
                </a>
                {" | "}Web:{" "}
                <a href="https://www.voxon.app" className="text-electric-400 hover:text-electric-300">
                  voxon.app
                </a>
              </p>
              <p>UID: ATU80848978 | Gerichtsstand: Landesgericht Wiener Neustadt</p>
            </div>
          </div>
        </div>

        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p>© {new Date().getFullYear()} {copy.footer.company}. Alle Rechte vorbehalten.</p>
            <p className="text-white/40">{copy.footer.microcopy}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {copy.footer.links.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-white">
                {link.label}
              </a>
            ))}
            <a href={`mailto:${copy.footer.email}`} className="hover:text-white">
              {copy.footer.email}
            </a>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-6 pb-6 text-[11px] text-white/40">
          {copy.footer.legalNote}
        </div>
      </div>
    </footer>
  );
}

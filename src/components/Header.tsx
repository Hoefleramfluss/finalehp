import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { MenuIcon, CloseIcon } from "@/components/icons";
import Logo from "@/components/Logo";
import Lines from "@/components/ui/Lines";
import { copy } from "@/copy";

const links = [
  { href: "#why", label: copy.site.nav.features },
  { href: "#functions", label: copy.site.nav.functions },
  { href: "#testimonials", label: copy.site.nav.testimonials },
  { href: "#pricing", label: copy.site.nav.pricing },
  { href: "#faq", label: copy.site.nav.faq },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current ? `#${current}` : "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl supports-[backdrop-filter]:bg-night-900/60">
      <motion.div
        className="relative mx-auto max-w-7xl px-4 sm:px-6"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="relative flex h-16 items-center justify-between">
          {/* Left: Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.slice(0, 2).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.href 
                    ? "text-white" 
                    : "text-white/70 hover:text-white"
                } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-500`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Center: Logo (absolut zentriert) */}
          <div className="absolute inset-x-0 flex justify-center pointer-events-none">
            <motion.a 
              href="/" 
              aria-label="Voxon.ai Startseite"
              className="pointer-events-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Logo variant="default" className="h-7 w-auto sm:h-8" />
            </motion.a>
          </div>

          {/* Right: Navigation + CTA + Mobile Toggle */}
          <div className="flex items-center gap-3 lg:gap-6">
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {links.slice(2).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === link.href 
                      ? "text-white" 
                      : "text-white/70 hover:text-white"
                  } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-500`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            
            <a
              href="#contact"
              className="relative hidden md:inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium text-white bg-white/10 ring-1 ring-white/15 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-500 overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:bg-[linear-gradient(110deg,transparent,rgba(255,255,255,.35),transparent)] hover:before:animate-shimmerAlt transition-all"
            >
              <span className="mr-1.5">→</span> {copy.site.ctaPrimary}
            </a>

            <button
              type="button"
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-white/15 text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-500"
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              onClick={() => setOpen(!open)}
            >
              {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Decorative Lines - nahtlos am Header-Bottom */}
        <div className="pointer-events-none absolute inset-x-0 -bottom-px">
          <Lines className="h-6 w-full opacity-60 md:h-8" />
        </div>
      </motion.div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/60 md:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="ml-auto h-full w-80 max-w-[85%] bg-night-900 shadow-xl ring-1 ring-white/10 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-6 flex items-center justify-end">
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Menü schließen"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-white/15 text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-500"
                >
                  <CloseIcon className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-3">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                      activeSection === link.href
                        ? "bg-white/10 text-white"
                        : "text-white/80 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-4 relative inline-flex items-center justify-center rounded-xl bg-white/10 px-4 py-2.5 ring-1 ring-white/15 text-white hover:bg-white/15 overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:bg-[linear-gradient(110deg,transparent,rgba(255,255,255,.35),transparent)] hover:before:animate-shimmerAlt transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-500"
                >
                  <span className="mr-1.5">→</span> {copy.site.ctaPrimary}
                </a>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

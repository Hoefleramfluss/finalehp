
import React from 'react';
import { LogoIcon, TwitterIcon, LinkedinIcon, GithubIcon } from './icons';

const Footer: React.FC = () => {
  const footerLinks = {
    Produkt: [
      { name: 'Features', href: '#' },
      { name: 'Preise', href: '#' },
      { name: 'Integrationen', href: '#' },
      { name: 'Sicherheit', href: '#' },
    ],
    Unternehmen: [
      { name: 'Über uns', href: '#' },
      { name: 'Karriere', href: '#' },
      { name: 'Presse', href: '#' },
      { name: 'Kontakt', href: '#' },
    ],
    Ressourcen: [
      { name: 'Blog', href: '#' },
      { name: 'Dokumentation', href: '#' },
      { name: 'API-Status', href: '#' },
      { name: 'Fallstudien', href: '#' },
    ],
  };

  return (
    <footer className="bg-black/20 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center space-x-2 mb-4">
              <LogoIcon className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold text-white">Workflow AI</span>
            </a>
            <p className="text-gray-400 max-w-xs">
              Die intelligente Plattform zur Automatisierung und Optimierung Ihrer Geschäftsprozesse.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"><TwitterIcon className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"><LinkedinIcon className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"><GithubIcon className="h-6 w-6" /></a>
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm flex flex-col sm:flex-row justify-between">
          <p>&copy; {new Date().getFullYear()} Workflow AI. Alle Rechte vorbehalten.</p>
          <div className="flex justify-center space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

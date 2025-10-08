
import React, { useState } from 'react';
import { LogoIcon, MenuIcon, XIcon } from './icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Preise' },
    { href: '#contact', label: 'Kontakt' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="relative bg-black/30 backdrop-blur-lg border border-white/10 rounded-2xl px-6 py-3 flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2">
            <LogoIcon className="h-8 w-8 text-cyan-400" />
            <span className="text-xl font-bold text-white">Workflow AI</span>
          </a>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#" className="hidden md:block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:scale-105 transition-transform duration-300">
            Demo anfordern
          </a>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-2 mx-6">
           <div className="bg-black/50 backdrop-blur-lg border border-white/10 rounded-2xl p-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-center">
                {link.label}
              </a>
            ))}
            <a href="#" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:scale-105 transition-transform duration-300 text-center">
                Demo anfordern
            </a>
           </div>
        </div>
      )}
    </header>
  );
};

export default Header;

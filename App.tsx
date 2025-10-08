
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import Features from './components/Features';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#080811] text-gray-200 overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-blue-500/20 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-purple-500/20 rounded-full filter blur-3xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <TrustBadges />
          <Features />
          <Pricing />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;

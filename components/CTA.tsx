
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-900/50 via-[#080811] to-purple-900/50 border border-white/10 rounded-3xl p-12 text-center">
          <div className="absolute inset-0 z-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Bereit, Ihre Prozesse zu revolutionieren?
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-10">
              Fordern Sie eine persönliche Demo an und erfahren Sie, wie Workflow AI Ihr Unternehmen transformieren kann. Unser Team freut sich darauf, Ihnen die Zukunft der Arbeit zu zeigen.
            </p>
            <a href="#" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-4 px-10 rounded-lg hover:scale-105 transition-transform duration-300 text-xl">
              Demo anfordern
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

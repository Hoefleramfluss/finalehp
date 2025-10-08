
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute w-full h-full bg-gradient-radial from-blue-600/40 via-transparent to-transparent rounded-full animate-[spin_20s_linear_infinite]"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/3 -translate-y-1/3">
          <div className="absolute w-full h-full bg-gradient-radial from-purple-600/40 via-transparent to-transparent rounded-full animate-[spin_25s_linear_infinite_reverse]"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Entfesseln Sie Ihre <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Workflow-Intelligenz
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-10">
          Automatisieren, optimieren und transformieren Sie Ihre Geschäftsprozesse mit der Kraft künstlicher Intelligenz. Workflow AI ist Ihre autonome Lösung für maximale Effizienz.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#pricing" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-8 rounded-lg w-full sm:w-auto hover:scale-105 transition-transform duration-300 text-lg">
            Jetzt starten
          </a>
          <a href="#" className="relative group w-full sm:w-auto">
             <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <button className="relative w-full px-8 py-3 bg-[#080811] rounded-lg leading-none flex items-center justify-center divide-x divide-gray-600">
                <span className="pr-4 text-gray-100">Video ansehen</span>
              </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

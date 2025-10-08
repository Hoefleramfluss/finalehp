
import React from 'react';
import { ChartBarIcon, DocumentTextIcon, CogIcon, LightBulbIcon } from './icons';

const Features: React.FC = () => {
  const features = [
    {
      icon: <ChartBarIcon className="h-10 w-10 text-cyan-400" />,
      title: 'AI-gestützte Datenanalyse',
      description: 'Verwandeln Sie Rohdaten in wertvolle Einblicke. Unsere KI analysiert komplexe Datensätze und identifiziert Muster und Trends in Echtzeit.',
    },
    {
      icon: <DocumentTextIcon className="h-10 w-10 text-cyan-400" />,
      title: 'Automatisierte Berichterstellung',
      description: 'Erstellen Sie auf Knopfdruck detaillierte und anpassbare Berichte. Sparen Sie Stunden manueller Arbeit und treffen Sie datengestützte Entscheidungen.',
    },
    {
      icon: <CogIcon className="h-10 w-10 text-cyan-400" />,
      title: 'Intelligente Prozessoptimierung',
      description: 'Unsere Algorithmen überwachen Ihre Workflows, erkennen Engpässe und schlagen proaktiv Optimierungen für maximale Effizienz vor.',
    },
    {
      icon: <LightBulbIcon className="h-10 w-10 text-cyan-400" />,
      title: 'Vorausschauende Prognosen',
      description: 'Nutzen Sie die Kraft des maschinellen Lernens, um zukünftige Geschäftsentwicklungen vorherzusagen und Ihre Strategie entsprechend anzupassen.',
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Ihre Bausteine für den Erfolg
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-16">
          Entdecken Sie unsere leistungsstarken Module, die entwickelt wurden, um jeden Aspekt Ihres Unternehmens zu revolutionieren.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-8 bg-black/30 border border-white/10 rounded-2xl text-left transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-2 group"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="mb-6 inline-block p-4 bg-gray-800/50 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

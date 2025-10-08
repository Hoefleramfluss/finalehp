import React from 'react';
import { CheckIcon } from './icons';

const Pricing: React.FC = () => {
    const plans = [
    {
      name: 'Starter',
      price: '€67,50',
      period: '/ Monat',
      description: 'Ideal für den Einstieg in die KI-gestützte Prozessautomatisierung.',
      features: [
        '300 KI-Minuten',
        '1 Twilio-Nummer (AT/EU)',
        'DSGVO-konformes EU-Hosting',
        '2 Standard-Tool-Calls',
        'E-Mail-Support (Reaktion < 24h)',
        'Basis-Berichte',
        '30-min Quickstart-Onboarding',
      ],
      isPopular: false,
    },
    {
      name: 'Medium',
      price: '€202,50',
      period: '/ Monat',
      description: 'Für wachsende Unternehmen mit steigenden Anforderungen.',
      features: [
        '900 KI-Minuten',
        'Alle Features aus Starter',
        '4 Tool-Calls & Webhooks',
        'Einfache CRM/Kalender-Integration',
        'Telefon & E-Mail-Support (<4h)',
        'Monatliches Intent-Tuning',
        'Basic-Analytics (Funnel)',
      ],
      isPopular: true,
    },
    {
      name: 'Pro',
      price: '€540',
      period: '/ Monat',
      description: 'Für etablierte Unternehmen, die ihre Prozesse skalieren.',
      features: [
        '2.400 KI-Minuten',
        'Alle Features aus Medium',
        '2 Nummern inklusive',
        'Prioritäts-Support (<2h, Mo-Sa)',
        'Premium-Integrationen',
        'Monatliches Gesprächs-Review',
        '10% Minuten Roll-Over',
      ],
      isPopular: false,
    },
    {
      name: 'Enterprise',
      price: '€1.350',
      period: '/ Monat',
      description: 'Maßgeschneiderte Lösungen für große Organisationen.',
      features: [
        '6.000 KI-Minuten',
        'Alle Features aus Pro',
        'Private Cloud, SSO & Verschlüsselung',
        'Individuelle Workflows & Setups',
        'SLA (99,9%) & 24/7 SOS-Hotline',
        'Compliance-Reports',
        'Dedizierter CSM & Roadmap-Workshops',
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Ein Plan, der mit Ihnen wächst
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-16">
          Wählen Sie den perfekten Plan für Ihre Bedürfnisse. Skalierbar, fair und transparent.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 border rounded-2xl flex flex-col text-left transition-all duration-300 ${
                plan.isPopular ? 'border-cyan-400 bg-black/30' : 'border-white/10 bg-black/20 hover:border-white/30'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                  BELIEBTESTER PLAN
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 mb-6 min-h-[60px] md:min-h-[40px]">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                {plan.period && <span className="text-gray-400 font-medium ml-1">{plan.period}</span>}
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckIcon className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`w-full text-center font-semibold py-3 px-8 rounded-lg transition-transform duration-300 mt-auto ${
                  plan.isPopular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {plan.price === 'Kontakt' ? 'Kontakt aufnehmen' : 'Plan wählen'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
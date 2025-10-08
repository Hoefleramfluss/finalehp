
import React from 'react';
import { AustriaIcon, ShieldCheckIcon, SparklesIcon } from './icons';

const TrustBadges: React.FC = () => {
  const badges = [
    { icon: <AustriaIcon className="h-7 w-7 text-cyan-400" />, text: 'Made in Austria' },
    { icon: <ShieldCheckIcon className="h-7 w-7 text-cyan-400" />, text: 'DSGVO-konform' },
    { icon: <SparklesIcon className="h-7 w-7 text-cyan-400" />, text: 'Autonomie statt Apps' },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="bg-black/30 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {badges.map((badge, index) => (
              <div key={index} className="flex items-center justify-center space-x-3">
                {badge.icon}
                <span className="text-lg font-medium text-gray-200">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;

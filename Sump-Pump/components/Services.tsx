
import React from 'react';

const SERVICE_ITEMS = [
  {
    title: "Pit Installation",
    description: "Expert excavation and lining of 18\"x24\" sump pits with professional-grade basins and gravel foundations for maximum drainage.",
    icon: "🏗️"
  },
  {
    title: "Battery Backups",
    description: "Reliable secondary systems that kick in automatically during power outages or primary pump failure. Peace of mind 24/7.",
    icon: "🔋"
  },
  {
    title: "Flooding Prevention",
    description: "Custom-tailored solutions for Colorado basements, protecting your structural integrity and preventing mold growth.",
    icon: "🏠"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-4">Our Professional Services</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICE_ITEMS.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow group"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

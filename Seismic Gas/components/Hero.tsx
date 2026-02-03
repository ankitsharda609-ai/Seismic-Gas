
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.7)), url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80')",
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <span className="inline-block bg-red-600/20 text-red-400 font-bold py-1 px-4 rounded-full text-xs tracking-widest uppercase mb-6 border border-red-600/30">
          Serving Sherman Oaks & San Fernando Valley
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
          Protect Your Home From <span className="text-red-500">Earthquake Fires</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Automatic Seismic Gas Shutoff Valves & Leak Detection. Professional installation by licensed experts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all shadow-xl hover:-translate-y-1">
            Get a Free Estimate
          </a>
          <a href="#services" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
            Explore Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;


import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="hero-gradient min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-3xl animate-fade-in-up">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 leading-tight">
          Don't Wait for the Next <span className="text-yellow-400">Storm</span>
        </h1>
        <p className="text-lg sm:text-2xl text-gray-200 mb-10 leading-relaxed font-light">
          Professional Sump Pump Battery Backups & Expert Pit Installations in Aurora, CO. Protect your foundation from costly water damage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="tel:8443406413" 
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 text-lg font-bold py-4 px-10 rounded-lg shadow-xl transition-all transform hover:scale-105"
          >
            Get a Free Estimate
          </a>
          <a 
            href="#blog" 
            className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 text-lg font-bold py-4 px-10 rounded-lg backdrop-blur-sm transition-all"
          >
            Learn More
          </a>
        </div>
        <p className="mt-8 text-blue-200 flex items-center justify-center gap-2">
          <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Licensed & Insured Local Experts
        </p>
      </div>
    </section>
  );
};

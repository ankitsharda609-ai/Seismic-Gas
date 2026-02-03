
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-500 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white font-extrabold text-2xl tracking-tighter logo-font">
            SEISMIC GUARD
          </div>
          
          <div className="flex gap-8 text-sm uppercase tracking-widest font-bold">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#safety-guide" className="hover:text-white transition-colors">Safety</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Seismic Guard Solutions. All rights reserved.</p>
            <p className="mt-1">Licensed & Insured C-36 Plumbing License #1029384</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

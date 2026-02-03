
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="text-red-600 font-extrabold text-2xl tracking-tighter logo-font flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-700"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/><path d="m9.05 14.88 2.05-2.05a2.44 2.44 0 0 1 3.5 0l2.05 2.05"/></svg>
              SEISMIC GUARD
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wide text-gray-600">
            <a href="#services" className="hover:text-red-600 transition-colors">SERVICES</a>
            <a href="#safety-guide" className="hover:text-red-600 transition-colors">EARTHQUAKE SAFETY</a>
            <a href="#faq" className="hover:text-red-600 transition-colors">FAQ</a>
            <a href="tel:8443406413" className="bg-red-600 text-white px-5 py-2.5 rounded-lg hover:bg-red-700 transition-all shadow-sm">
              (844) 340-6413
            </a>
          </div>

          <div className="md:hidden">
             <a href="tel:8443406413" className="text-red-600 font-bold">(844) 340-6413</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

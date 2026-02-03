
import React from 'react';

interface NavbarProps {
  activeTab: 'home' | 'blog' | 'faq';
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab }) => {
  return (
    <header className="bg-blue-900 text-white shadow-lg sticky top-[36px] sm:top-[40px] z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-yellow-400 p-2 rounded">
            <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <span className="text-xl font-extrabold tracking-tight">SECONDARY <span className="font-light text-blue-200">FLOODING</span></span>
        </div>
        <nav className="flex space-x-1 sm:space-x-8">
          <a 
            href="#home" 
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'home' ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-700'}`}
          >
            Home
          </a>
          <a 
            href="#blog" 
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'blog' ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-700'}`}
          >
            Expert Guide
          </a>
          <a 
            href="#faq" 
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'faq' ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-700'}`}
          >
            FAQs
          </a>
        </nav>
      </div>
    </header>
  );
};


import React, { useState } from 'react';

const faqs = [
  {
    q: "Does Los Angeles require these valves by law?",
    a: "Yes. The City of Los Angeles (LAMC §94.1217) requires a seismic gas shutoff valve for all new construction, significant remodels (over $10,000), and at the time of property sale."
  },
  {
    q: "Will the valve close if I drop something heavy or if a truck passes by?",
    a: "No. These valves are precision-engineered to ignore common vibrations. They are specifically calibrated to trigger only during the horizontal motion characteristic of a magnitude 5.1+ earthquake."
  },
  {
    q: "What is the difference between a Seismic Valve and an Excess Flow Valve?",
    a: "A Seismic Valve reacts to ground movement. An Excess Flow Valve reacts to a sudden surge in gas flow (like a pipe snapping). For total protection, many Sherman Oaks residents choose to install both."
  },
  {
    q: "Can I reset the valve myself after an earthquake?",
    a: "While the mechanical reset is simple, we strongly recommend having a licensed professional or the gas company check for leaks before turning your gas back on. Restoring gas to a damaged line can cause a fire."
  },
  {
    q: "How long does installation take?",
    a: "A typical professional installation at 14500 Ventura Blvd or surrounding areas takes about 2 to 4 hours, depending on the accessibility of your gas meter."
  }
];

const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left font-bold text-gray-900 text-lg py-2 hover:text-red-600 transition-colors"
      >
        <span>{q}</span>
        <svg 
          className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-600 leading-relaxed pb-2">
          {a}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>
        
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

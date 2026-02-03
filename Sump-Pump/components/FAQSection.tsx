
import React, { useState } from 'react';

const FAQS = [
  {
    question: "How long does a sump pump battery last during a power outage?",
    answer: "Depending on the model, most quality systems provide 5–7 hours of continuous pumping or 2–3 days of intermittent cycling (running every 10-15 minutes)."
  },
  {
    question: "Do I really need a backup if my primary pump is brand new?",
    answer: "Yes. Even a new pump cannot run without electricity. In Aurora, storms that cause flooding often cause power outages simultaneously. A backup is the only way to ensure protection."
  },
  {
    question: "What is a \"Pit Install\"?",
    answer: "It is the process of excavating a dedicated basin in your basement floor, lining it with a professional sump crock, and setting up the drainage system to collect and expel water efficiently."
  },
  {
    question: "How often should I test my system?",
    answer: "We recommend testing both your primary and backup pumps every 3 months by filling the pit with a bucket of water until they activate."
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-gray-50 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Everything you need to know about basement flood prevention.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-800 text-lg">{faq.question}</span>
                <svg 
                  className={`w-6 h-6 text-blue-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-yellow-50 border-l-8 border-yellow-400 p-8 rounded-xl shadow-md">
          <h4 className="text-xl font-extrabold text-blue-900 mb-2">Have more questions?</h4>
          <p className="text-blue-800 mb-4">Our local experts are ready to help with your specific basement layout.</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a href="tel:8443406413" className="font-bold text-2xl text-blue-900 hover:underline">
              (844) 340-6413
            </a>
            <span className="hidden sm:inline text-gray-400">|</span>
            <span className="text-gray-600">15000 E Colfax Ave, Aurora, CO 80011</span>
          </div>
        </div>
      </div>
    </section>
  );
};

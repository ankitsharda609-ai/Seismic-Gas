
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import SafetyGuide from './components/SafetyGuide';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SafetyAssistant from './components/SafetyAssistant';

const App: React.FC = () => {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        
        <section id="services" class="scroll-mt-20">
          <Services />
        </section>
        
        <section id="safety-guide" class="scroll-mt-20">
          <SafetyGuide />
        </section>
        
        <section id="faq" class="scroll-mt-20">
          <FAQ />
        </section>
        
        <section id="contact" class="scroll-mt-20">
          <Contact />
        </section>
      </main>

      <Footer />

      {/* Floating AI Assistant Trigger */}
      <button 
        onClick={() => setIsAssistantOpen(true)}
        className="fixed bottom-6 right-6 bg-red-600 text-white p-4 rounded-full shadow-2xl hover:bg-red-700 transition-all z-40 flex items-center gap-2"
      >
        <span className="hidden md:inline font-semibold">Safety Assistant</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
      </button>

      {isAssistantOpen && (
        <SafetyAssistant onClose={() => setIsAssistantOpen(false)} />
      )}
    </div>
  );
};

export default App;


import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Blog } from './components/Blog';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ContactBar } from './components/ContactBar';
import { AIAdvisor } from './components/AIAdvisor';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'blog' | 'faq'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'blog' || hash === 'faq') {
        setActiveTab(hash as any);
      } else {
        setActiveTab('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <Hero />
            <Services />
            <AIAdvisor />
          </>
        );
      case 'blog':
        return <Blog />;
      case 'faq':
        return <FAQSection />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ContactBar />
      <Navbar activeTab={activeTab} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;

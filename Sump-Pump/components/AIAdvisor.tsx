
import React, { useState, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';
import { GroundingSource } from '../types';

export const AIAdvisor: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [sources, setSources] = useState<GroundingSource[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse(null);
    setSources([]);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const res = await ai.models.generateContent({
        model: 'gemini-3-flash-latest',
        contents: `I am a homeowner in Aurora, Colorado. Answer this question about basement flooding and sump pump maintenance: ${query}`,
        config: {
          systemInstruction: "You are an expert advisor for 'Secondary Basement Flooding Prevention'. You are professional, reassuring, and knowledgeable about Colorado's specific climate (snowmelt, heavy spring rains). Suggest a professional inspection if appropriate.",
          tools: [{ googleSearch: {} }]
        },
      });

      setResponse(res.text || "I couldn't generate a response at this time. Please call us directly for expert advice.");
      
      const groundingChunks = res.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      setSources(groundingChunks as GroundingSource[]);

      setTimeout(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (error) {
      console.error("AI Error:", error);
      setResponse("Sorry, I encountered an error. Please try again or give us a call at (844) 340-6413.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-blue-900 text-white px-4 overflow-hidden relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Ask Our Smart Flood Advisor</h2>
          <p className="text-blue-200 text-lg">Curious about your specific situation? Ask a question about sump pumps or Aurora weather impacts.</p>
        </div>

        <form onSubmit={handleAsk} className="relative mb-8">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. How often does it flood in Aurora in the spring?"
            className="w-full bg-white/10 border-2 border-white/20 rounded-2xl py-5 px-6 sm:px-8 text-lg focus:outline-none focus:border-yellow-400 backdrop-blur-md placeholder-white/50 text-white"
          />
          <button 
            type="submit"
            disabled={loading}
            className="mt-4 sm:mt-0 sm:absolute sm:right-3 sm:top-1/2 sm:-translate-y-1/2 w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="animate-pulse">Consulting...</span>
            ) : (
              <>
                <span>Ask AI</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </>
            )}
          </button>
        </form>

        {response && (
          <div ref={scrollRef} className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl animate-fade-in">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-blue-100 p-2 rounded-lg">
                <svg className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-2">Advisor Response</h4>
                <div className="prose prose-sm sm:prose-base max-w-none text-gray-700 whitespace-pre-wrap">
                  {response}
                </div>
              </div>
            </div>

            {sources.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Sources & References</h5>
                <div className="flex flex-wrap gap-2">
                  {sources.map((source, idx) => (
                    source.web && (
                      <a 
                        key={idx}
                        href={source.web.uri}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 py-1 px-3 rounded-full transition-colors truncate max-w-[200px]"
                      >
                        {source.web.title || "Reference Source"}
                      </a>
                    )
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-[100px] -ml-48 -mb-48"></div>
    </section>
  );
};

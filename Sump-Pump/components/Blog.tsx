
import React from 'react';

export const Blog: React.FC = () => {
  return (
    <section className="py-16 bg-white px-4">
      <article className="max-w-4xl mx-auto prose prose-blue lg:prose-xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-4">
            Why a Battery Backup is Non-Negotiable for Aurora Homeowners
          </h1>
          <p className="text-gray-500 italic">Everything you need to know about secondary prevention.</p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
          <p className="text-blue-900 font-medium m-0">
            Basement flooding doesn't wait for a convenient time. In Colorado, heavy spring rains and rapid snowmelt can overwhelm a standard sump pump in minutes.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">The Importance of Secondary Prevention</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          A battery backup acts as your home's insurance policy. It serves two main purposes:
        </p>
        <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
          <li><strong>Power Outage Support:</strong> Most flooding occurs during severe storms when the grid is most vulnerable.</li>
          <li><strong>Mechanical Failure Backup:</strong> If your primary pump burns out or the float switch jams, the secondary pump takes over automatically.</li>
        </ul>

        <div className="bg-gray-900 text-white p-8 rounded-2xl mb-10 shadow-xl overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Professional Pit Installation (The "Pit Install")</h2>
            <p className="mb-6 opacity-90">A successful system starts with the pit. Here is our professional standard:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border-l border-white/20 pl-4">
                <span className="block text-yellow-400 font-bold text-sm uppercase mb-1">Location</span>
                <p className="text-sm">The lowest point where water naturally migrates.</p>
              </div>
              <div className="border-l border-white/20 pl-4">
                <span className="block text-yellow-400 font-bold text-sm uppercase mb-1">Basin Specs</span>
                <p className="text-sm">Heavy-duty liners (18" diameter, 24" deep).</p>
              </div>
              <div className="border-l border-white/20 pl-4">
                <span className="block text-yellow-400 font-bold text-sm uppercase mb-1">Foundation</span>
                <p className="text-sm">2-3 inches of washed gravel to prevent debris intake.</p>
              </div>
              <div className="border-l border-white/20 pl-4">
                <span className="block text-yellow-400 font-bold text-sm uppercase mb-1">Security</span>
                <p className="text-sm">Dual check valves to prevent backflow.</p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Maintenance Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="p-4 border rounded-lg bg-gray-50">
            <h4 className="font-bold mb-2">Test Monthly</h4>
            <p className="text-sm text-gray-600">Pour water into the pit to trigger the backup pump manually.</p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-50">
            <h4 className="font-bold mb-2">Clean Screen</h4>
            <p className="text-sm text-gray-600">Ensure the intake screen is free of silt, stones, or mud.</p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-50">
            <h4 className="font-bold mb-2">Battery Health</h4>
            <p className="text-sm text-gray-600">Batteries last 3–5 years. We recommend maintenance-free AGM batteries.</p>
          </div>
        </div>

        <div className="text-center py-10 border-t">
          <p className="text-xl font-bold text-blue-900 mb-6 italic">Protect your home today.</p>
          <a 
            href="tel:8443406413" 
            className="inline-block bg-blue-900 text-white font-bold py-4 px-12 rounded-full hover:bg-blue-800 shadow-lg transition-transform hover:scale-105"
          >
            Call Us Now: (844) 340-6413
          </a>
        </div>
      </article>
    </section>
  );
};

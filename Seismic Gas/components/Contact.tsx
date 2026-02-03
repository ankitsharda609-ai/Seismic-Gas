
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Let's Secure Your Home</h2>
            <p className="text-gray-400 text-lg mb-12">
              Our team is ready to provide a thorough safety assessment of your gas infrastructure. Professional service you can trust.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-red-600/20 p-3 rounded-lg text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Our Office</h4>
                  <p className="text-gray-400">14500 Ventura Blvd, Sherman Oaks, CA 91403</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-600/20 p-3 rounded-lg text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Email Us</h4>
                  <p className="text-gray-400">support@seismicguard.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-600/20 p-3 rounded-lg text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Call Anytime</h4>
                  <p className="text-gray-400 font-bold text-2xl text-red-500">(844) 340-6413</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 p-8 md:p-12 rounded-3xl border border-white/5">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Full Name</label>
                  <input type="text" className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 focus:border-red-600 focus:outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Phone Number</label>
                  <input type="tel" className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 focus:border-red-600 focus:outline-none transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">Property Type</label>
                <select className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 focus:border-red-600 focus:outline-none transition-all">
                  <option>Single Family Home</option>
                  <option>Multi-Unit Residential</option>
                  <option>Commercial Property</option>
                  <option>Industrial Facility</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">Message (Optional)</label>
                <textarea rows={4} className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 focus:border-red-600 focus:outline-none transition-all"></textarea>
              </div>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all text-lg">
                Request Free Estimate
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

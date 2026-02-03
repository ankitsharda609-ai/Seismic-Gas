
import React from 'react';

const SafetyGuide: React.FC = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="h-48 bg-red-600 flex items-center justify-center text-center p-8">
             <h2 className="text-3xl md:text-4xl font-extrabold text-white">Why Your Sherman Oaks Home Needs a Seismic Gas Shutoff Valve</h2>
          </div>
          
          <div className="p-8 md:p-12 prose prose-lg max-w-none text-gray-700">
            <p className="text-xl font-medium text-gray-900 mb-8 italic border-l-4 border-red-500 pl-4">
              Living in Southern California means preparing for the "Big One." While we often think about structural retrofitting, the most significant threat after an earthquake isn't the shaking itself—it's the fire.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Hidden Danger: Gas Leaks</h3>
            <p className="mb-6">
              During a major seismic event, main gas lines and appliance connectors can shear or pull apart. This releases highly flammable natural gas into your home. A single spark from a damaged electrical wire can lead to a catastrophic explosion.
            </p>

            <div className="bg-red-50 p-8 rounded-2xl my-10 border border-red-100">
              <h3 className="text-2xl font-bold text-red-900 mb-4">What is an Earthquake Shutoff Valve?</h3>
              <p className="mb-4">
                An <strong>Automatic Seismic Gas Shutoff Valve (SGSOV)</strong> is a specialized device installed on your gas meter. It is designed to:
              </p>
              <ul className="space-y-3 list-disc pl-5 text-gray-800">
                <li><span className="font-bold">Detect Shaking:</span> It triggers only during significant seismic activity (typically magnitude 5.1 or greater).</li>
                <li><span className="font-bold">Instant Response:</span> It closes the internal valve immediately, stopping the flow of gas into your house.</li>
                <li><span className="font-bold">Manual Reset:</span> Once the danger has passed and a professional has cleared your home of leaks, the valve can be manually reset.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Secondary Protection & Detection</h3>
            <p className="mb-6">For maximum safety, we recommend a "Triple Threat" approach:</p>
            <ol className="space-y-4 mb-8">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">1</span>
                <div>
                  <strong className="text-gray-900">Seismic Valve:</strong>
                  <p className="text-gray-600 text-sm">Stops gas at the meter during a quake.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">2</span>
                <div>
                  <strong className="text-gray-900">Secondary Valve:</strong>
                  <p className="text-gray-600 text-sm">Provides localized shutoff for high-risk appliances.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">3</span>
                <div>
                  <strong className="text-gray-900">Smart Leak Detection:</strong>
                  <p className="text-gray-600 text-sm">Monitors for "slow leaks" that occur from aging pipes rather than earthquakes.</p>
                </div>
              </li>
            </ol>

            <div className="mt-12 text-center p-8 bg-gray-900 rounded-2xl text-white">
              <p className="text-xl font-bold mb-4">Protect your family today.</p>
              <p className="mb-6 opacity-80">Call us for a professional inspection at 14500 Ventura Blvd.</p>
              <a href="tel:8443406413" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl transition-all">
                (844) 340-6413
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyGuide;

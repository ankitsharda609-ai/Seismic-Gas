
import React from 'react';

export const ContactBar: React.FC = () => {
  return (
    <div className="bg-yellow-400 text-black py-2 px-4 text-center font-bold text-sm sm:text-base sticky top-0 z-50 shadow-md">
      <p>
        🚨 Emergency Service Available in Aurora: 
        <a href="tel:8443406413" className="ml-2 underline hover:no-underline">(844) 340-6413</a>
      </p>
    </div>
  );
};

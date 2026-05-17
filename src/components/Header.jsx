import React from 'react';
import vibrantGuj from '../assets/vibrantguj.png';
import emblem from '../assets/emblem.png';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-3 px-4 md:px-12 flex flex-wrap justify-between items-center gap-4">
      <div className="flex items-center gap-4">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14 md:w-16 md:h-16 text-green-800">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
          <path d="M2 11h20"></path>
          <path d="M12 2v2"></path>
        </svg>
        <div>
          <h1 className="text-xl md:text-2xl font-black text-green-900 tracking-wide uppercase leading-none">
            Gujarat Government
          </h1>
          <p className="text-lg font-extrabold text-gray-900 tracking-wider uppercase">
            Approved Plots
          </p>
          <p className="text-[10px] text-gray-600 font-bold mt-0.5 tracking-tight">
            Under, Government of Gujarat | Affordable Plotting & Housing Policy 2016
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <img 
          src={vibrantGuj} 
          alt="Vibrant Gujarat" 
          className="h-16 md:h-24 w-auto object-contain hidden sm:block"
        />
        <div className="h-16 md:h-20 w-[1px] bg-gray-300 hidden sm:block"></div>
        <img 
          src={emblem} 
          alt="Emblem of India" 
          className="h-14 md:h-20 w-auto object-contain"
        />
      </div>
    </header>
  );
};

export default Header;

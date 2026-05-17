import React from 'react';
import { MapPin, Building2, TrendingUp } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import heroBg from '../assets/Gemini_Generated_Image_qja1wqqja1wqqja1.png';

const HeroSection = () => {
  return (
    <section 
      className="relative py-12 md:py-20 px-4 md:px-12 bg-cover bg-center min-h-[600px] flex items-center mb-8"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col md:flex-row justify-between items-end md:items-center gap-8">
        
        {/* Hero Left Content */}
        <div className="w-full md:w-[60%] space-y-6 relative">
          {/* Targeted Radial Glow strictly behind text, shifted left & narrower */}
          <div className="absolute -inset-y-16 md:-inset-y-24 -left-24 md:-left-48 right-12 md:right-32 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,1)_0%,rgba(255,255,255,0.85)_50%,transparent_85%)] -z-10 rounded-full blur-xl md:blur-2xl pointer-events-none"></div>

          <div>
            <span className="text-2xl font-extrabold text-blue-900 tracking-wide uppercase block mb-1 drop-shadow-sm">Invest In</span>
            <h2 className="text-6xl md:text-[80px] font-black text-[#0B5E28] tracking-tight leading-none uppercase drop-shadow-sm py-1">
              Dholera
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-blue-950 tracking-tight uppercase mt-1 drop-shadow-sm">
              Smart City
            </h3>
            <div className="flex items-center gap-2 mt-3">
              <div className="h-[2px] w-8 bg-green-800"></div>
              <p className="text-lg font-black text-green-900 uppercase tracking-widest drop-shadow-sm">
                The Future Is Here
              </p>
              <div className="h-[2px] w-8 bg-green-800"></div>
            </div>
          </div>

          {/* USPs */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-green-800 text-white rounded-full shadow-md"><MapPin size={20} /></div>
              <div><h4 className="font-extrabold text-sm uppercase text-gray-900 leading-tight">Strategic Location</h4></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-green-800 text-white rounded-full shadow-md"><Building2 size={20} /></div>
              <div><h4 className="font-extrabold text-sm uppercase text-gray-900 leading-tight">World Class Infrastructure</h4></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-green-800 text-white rounded-full shadow-md"><TrendingUp size={20} /></div>
              <div><h4 className="font-extrabold text-sm uppercase text-gray-900 leading-tight">Promising Future Growth</h4></div>
            </div>
          </div>

          
          <div className="pt-4 relative z-20 -mb-24 translate-y-6">
             <CountdownTimer />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;

import React from 'react';
import { Landmark, Shield, Building2, FileText, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full font-sans bg-[#F4F4F0]">
      {/* Top Strip */}
      <div className="flex flex-col md:flex-row w-full min-h-[75px] relative">
        
        {/* Left Features Section */}
        <div className="flex-1 flex flex-wrap md:flex-nowrap justify-center md:justify-around items-center py-6 md:py-0 px-2 md:pr-12 gap-y-6 gap-x-2">
          
          <div className="flex items-center gap-3 w-[45%] md:w-auto justify-center">
            <Landmark size={32} className="text-[#3b5e45]" strokeWidth={1.5} />
            <div className="text-[11px] sm:text-xs font-black text-[#1F3D2A] uppercase leading-tight tracking-wide text-left">
              Government<br/>Approved
            </div>
          </div>
          


          <div className="flex items-center gap-3 w-[45%] md:w-auto justify-center">
            <Shield size={32} className="text-[#3b5e45]" strokeWidth={1.5} />
            <div className="text-[11px] sm:text-xs font-black text-[#1F3D2A] uppercase leading-tight tracking-wide text-left">
              RERA<br/>Registered
            </div>
          </div>



          <div className="flex items-center gap-3 w-[45%] md:w-auto justify-center">
            <Building2 size={32} className="text-[#3b5e45]" strokeWidth={1.5} />
            <div className="text-[11px] sm:text-xs font-black text-[#1F3D2A] uppercase leading-tight tracking-wide text-left">
              Bank Loan<br/>Available
            </div>
          </div>



          <div className="flex items-center gap-3 w-[45%] md:w-auto justify-center">
            <FileText size={32} className="text-[#3b5e45]" strokeWidth={1.5} />
            <div className="text-[11px] sm:text-xs font-black text-[#1F3D2A] uppercase leading-tight tracking-wide text-left">
              Transparent<br/>Process
            </div>
          </div>

        </div>

        {/* Right Contact Section (Slanted via clip-path) */}
        <div className="w-full md:w-auto bg-[#072F15] text-white py-5 px-8 md:pl-20 md:pr-12 flex flex-col justify-center items-center md:items-start [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] md:[clip-path:polygon(40px_0,100%_0,100%_100%,0_100%)] md:-ml-10">
          <div className="flex flex-col items-center md:items-start">
             <span className="text-[11px] sm:text-xs font-bold text-gray-200 block mb-1">For More Information</span>
             <a href="tel:+918920816733" className="text-xl sm:text-2xl font-black flex items-center gap-2 tracking-wide"><Phone size={18} fill="currentColor"/> +91 8920816733</a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#041A0B] text-gray-300 text-[11px] font-medium py-3 px-4 md:px-8 border-t border-[#0d4a25]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-center w-full">
          <p>© 2025 All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#terms" className="hover:text-white transition-colors">Terms & Conditions</a>
            <span className="text-gray-500">|</span>
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

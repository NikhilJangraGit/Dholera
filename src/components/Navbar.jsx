import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ['Home', 'About Dholera', 'Projects', 'Gallery', 'Policy', 'Refund Policy', 'FAQ', 'Contact Us'];

  return (
    <nav className="bg-[#093A1A] text-white text-xs font-bold uppercase tracking-wider sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center h-14">
        
        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 -ml-2 hover:text-green-300 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 lg:gap-4 h-full">
          {menuItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-green-400 px-2.5 py-1 rounded transition-all flex items-center h-full">
              {item} {item === 'Policy' && '⏷'}
            </a>
          ))}
        </div>

        {/* Call Button */}
        <a href="tel:+919953510585" className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 px-4 h-full transition-colors text-sm font-black whitespace-nowrap ml-auto md:ml-0">
          <Phone size={16} fill="white" /> <span className="hidden sm:inline">+91 9953510585</span><span className="sm:hidden">CALL</span>
        </a>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a4620] px-4 py-4 space-y-3 absolute w-full left-0 border-t border-green-800 shadow-xl">
          {menuItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              onClick={() => setIsMenuOpen(false)}
              className="block hover:text-green-400 py-2 border-b border-green-800/50 transition-colors"
            >
              {item} {item === 'Policy' && '⏷'}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React from 'react';
import giftImg from '../assets/gift.png';

const LuckyDrawBanner = () => {
  return (
    <section className="w-[90%] mx-auto bg-gradient-to-r from-[#052610] to-[#0d5324] text-white py-0 px-4 md:px-12 shadow-inner rounded-2xl border border-gray-200 mt-24 md:mt-12 mb-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 py-8 md:py-2">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-8">
          <img src={giftImg} alt="Gift Box" className="w-32 md:w-48 drop-shadow-2xl md:animate-bounce" />
          <div>
            <p className="text-white font-black text-lg md:text-xl uppercase tracking-widest drop-shadow-md">Register Now & Get A Chance To Win</p>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mt-2 drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600">
              Lucky Draw!
            </h3>
            
            <div 
              className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-black text-base md:text-lg font-black tracking-widest uppercase px-10 py-2.5 mt-5 shadow-xl inline-block"
              style={{ clipPath: "polygon(0 0, 100% 0, 95% 50%, 100% 100%, 0 100%, 5% 50%)" }}
            >
              Plot Allotment Lucky Draw
            </div>

            <p className="text-sm md:text-base text-gray-200 font-bold mt-5 tracking-wide uppercase">Register today and be a step closer to your dream investment!</p>
          </div>
        </div>

        <div className="bg-white text-black p-6 rounded-xl flex flex-col items-center gap-4 shadow-2xl border-4 border-yellow-400 min-w-[280px]">
          <div className="flex items-center gap-3">
            <img src="https://cdn-icons-png.flaticon.com/512/2838/2838779.png" alt="Calendar" className="w-10 opacity-80" />
            <div>
              <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider block">Lucky Draw Date</span>
              <span className="text-xl font-black text-gray-900 block leading-tight">15 June 2025</span>
            </div>
          </div>
          <button 
            onClick={() => document.getElementById('reg-form').scrollIntoView({ behavior: 'smooth' })} 
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-black text-base md:text-lg uppercase tracking-widest py-3 rounded-lg transition-transform transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default LuckyDrawBanner;

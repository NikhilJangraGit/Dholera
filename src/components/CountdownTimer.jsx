import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 1,
    minutes: 27,
    seconds: 11
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        clearInterval(timer);
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#093A1A] text-white p-5 rounded-xl shadow-xl max-w-sm border-2 border-yellow-400">
      <p className="text-center text-xs font-black tracking-widest uppercase text-yellow-400 mb-3">
        Registration Open
      </p>
      <div className="grid grid-cols-4 gap-2 text-center">
        {[
          { label: 'Days', val: timeLeft.days },
          { label: 'Hours', val: timeLeft.hours },
          { label: 'Minutes', val: timeLeft.minutes },
          { label: 'Seconds', val: timeLeft.seconds }
        ].map((t, idx) => (
          <div key={idx} className="bg-white text-black p-2 rounded-lg shadow">
            <span className="text-xl font-black block text-gray-900">
              {String(t.val).padStart(2, '0')}
            </span>
            <span className="text-[9px] uppercase tracking-wider font-bold text-gray-500 block mt-0.5">
              {t.label}
            </span>
          </div>
        ))}
      </div>
      <button 
        onClick={() => document.getElementById('reg-form').scrollIntoView({ behavior: 'smooth' })} 
        className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-black text-xs uppercase tracking-widest py-3 rounded-lg mt-4 transition-all shadow-md transform hover:-translate-y-0.5"
      >
        Register Now
      </button>
    </div>
  );
};

export default CountdownTimer;

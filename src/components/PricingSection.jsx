import React from 'react';
import { Shield, Landmark, FileText, TrendingUp } from 'lucide-react';

const PricingSection = () => {
  return (
    <section className="w-[90%] mx-auto py-12 px-4 md:px-12 grid md:grid-cols-12 gap-8 items-center border border-gray-200 rounded-2xl mb-8">
      <div className="md:col-span-4 bg-white p-8 rounded-2xl shadow-xl text-center border-2 border-green-600/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-2 bg-green-600"></div>
        <span className="text-xs font-bold uppercase tracking-widest text-gray-500 block mb-1">Registration Amount</span>
        <h3 className="text-4xl font-black text-green-700 tracking-tight">₹49,000/-</h3>
        <span className="text-xs font-extrabold text-gray-400 uppercase tracking-widest block mt-1">Only</span>
      </div>

      <div className="md:col-span-8 space-y-6">
        <h4 className="text-lg font-bold text-gray-800">
          Pay just <span className="text-green-700 font-black text-xl">₹49,000/-</span> for Registration and get a chance to win plot allotment in the Lucky Draw.
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: <Shield className="text-green-700" size={24} />, title: "Secure Your Future" },
            { icon: <Landmark className="text-green-700" size={24} />, title: "Government Approved" },
            { icon: <FileText className="text-green-700" size={24} />, title: "Transparent Allotment" },
            { icon: <TrendingUp className="text-green-700" size={24} />, title: "Best Investment Opportunity" }
          ].map((box, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-2">
              {box.icon}
              <span className="text-xs font-black text-gray-800 uppercase tracking-tight leading-tight">{box.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

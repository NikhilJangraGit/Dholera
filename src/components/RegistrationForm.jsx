import React, { useState } from 'react';
import { Lock } from 'lucide-react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '', mobileNumber: '', emailId: '',
    city: '', project: '', plotType: '',
    panNumber: '', aadhaarNumber: '', address: '',
    agreeUpdates: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Registration Successful! Redirecting to payment...");
  };

  return (
    <section id="reg-form" className="w-[90%] mx-auto py-12 bg-white px-4 md:px-12 border border-gray-200 rounded-2xl mb-12 shadow-sm">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-green-700 uppercase tracking-widest">— Registration Form —</span>
          <h2 className="text-2xl font-black text-gray-900 uppercase mt-1">Book Your Lucky Slot</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <label className="block text-xs font-black uppercase text-gray-700 mb-1.5">Full Name*</label>
              <input type="text" required placeholder="Enter your full name" className="w-full px-5 py-3.5 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-green-600 focus:outline-none" value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs font-black uppercase text-gray-700 mb-1.5">Mobile Number*</label>
              <input type="tel" required placeholder="Enter your mobile number" className="w-full px-5 py-3.5 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-green-600 focus:outline-none" value={formData.mobileNumber} onChange={e => setFormData({...formData, mobileNumber: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs font-black uppercase text-gray-700 mb-1.5">Email ID*</label>
              <input type="email" required placeholder="Enter your email ID" className="w-full px-5 py-3.5 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-green-600 focus:outline-none" value={formData.emailId} onChange={e => setFormData({...formData, emailId: e.target.value})} />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <label className="block text-xs font-black uppercase text-gray-700 mb-1.5">City*</label>
              <select required className="w-full px-5 py-3.5 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-green-600 focus:outline-none bg-white" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})}>
                <option value="">Select your city</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Surat">Surat</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-black uppercase text-gray-700 mb-1.5">Interested In (Project)*</label>
              <select required className="w-full px-5 py-3.5 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-green-600 focus:outline-none bg-white" value={formData.project} onChange={e => setFormData({...formData, project: e.target.value})}>
                <option value="">Select project</option>
                <option value="Dholera Prime">Dholera Prime Plots</option>
                <option value="Dholera Premium">Dholera Premium Plots</option>
                <option value="Dholera Green">Dholera Green Plots</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-black uppercase text-gray-700 mb-1.5">Plot Type*</label>
              <select required className="w-full px-5 py-3.5 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-green-600 focus:outline-none bg-white" value={formData.plotType} onChange={e => setFormData({...formData, plotType: e.target.value})}>
                <option value="">Select plot type</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Industrial">Industrial</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <label className="block text-xs font-black uppercase text-gray-700 mb-1.5">PAN Number</label>
              <input type="text" placeholder="Enter PAN number" className="w-full px-5 py-3.5 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-green-600 focus:outline-none" value={formData.panNumber} onChange={e => setFormData({...formData, panNumber: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs font-black uppercase text-gray-700 mb-1.5">Aadhaar Number</label>
              <input type="text" placeholder="Enter Aadhaar number" className="w-full px-5 py-3.5 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-green-600 focus:outline-none" value={formData.aadhaarNumber} onChange={e => setFormData({...formData, aadhaarNumber: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs font-black uppercase text-gray-700 mb-1.5">Address*</label>
              <input type="text" required placeholder="Enter your address" className="w-full px-5 py-3.5 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-green-600 focus:outline-none" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} />
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <input type="checkbox" id="updates" required className="rounded text-green-600 focus:ring-green-500 h-4 w-4" checked={formData.agreeUpdates} onChange={e => setFormData({...formData, agreeUpdates: e.target.checked})} />
            <label htmlFor="updates" className="text-xs text-gray-600 font-medium select-none">I agree to receive updates and notifications.</label>
          </div>

          <div className="text-center pt-2">
            <button type="submit" className="bg-[#093A1A] hover:bg-green-800 text-white font-black uppercase tracking-widest text-sm px-10 py-3.5 rounded-lg shadow-lg inline-flex items-center gap-3 transition-all transform hover:-translate-y-0.5">
              Make Now <span className="text-lg">➔</span>
            </button>
            <p className="text-[11px] text-gray-500 mt-3 flex items-center justify-center gap-1.5">
              <Lock size={12} className="text-green-600" /> Your details are safe with us. We respect your privacy.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;

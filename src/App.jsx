import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LuckyDrawBanner from './components/LuckyDrawBanner';
import PricingSection from './components/PricingSection';
import RegistrationForm from './components/RegistrationForm';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50 selection:bg-green-600 selection:text-white">
      <Header />
      <Navbar />
      <HeroSection />
      <LuckyDrawBanner />
      <PricingSection />
      <RegistrationForm />
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default App;
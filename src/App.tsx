import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import WhyUs from './components/why-us/WhyUs';
import HowWeWork from './components/process/HowWeWork';
import TestimonialsSection from './components/testimonials/TestimonialsSection';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <WhyUs />
        <HowWeWork />
        <TestimonialsSection />
        <GetStarted />
      </main>
      <Footer />
    </div>
  );
}
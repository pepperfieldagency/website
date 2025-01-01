import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const socialProof = {
  metrics: [
    { value: '4.9', label: 'Customer Rating' },
    { value: '2K+', label: 'Clients Served' },
    { value: '98%', label: 'Success Rate' }
  ]
};

export default function Hero() {
  const scrollToGetStarted = () => {
    const element = document.getElementById('get-started');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-secondary overflow-hidden">
      <div className="absolute inset-0 z-0 hidden md:block">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-transparent" />
        <img 
          src="/PF-Header-Image.png" 
          alt="Digital Marketing Illustration" 
          className="absolute right-0 top-1/2 -translate-y-1/2 max-h-[400px] w-auto object-contain opacity-90 md:max-h-[450px] lg:max-h-[500px] xl:max-h-[600px]"
        />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
            <p className="text-primary text-lg font-medium">👋 Hello, business owner!</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            We can help you <br />
            <span className="text-primary">
              grow your business
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            We help ambitious companies scale through innovative strategies
            and data-driven solutions.
          </p>
          <div className="flex mb-16">
            <button 
              onClick={scrollToGetStarted}
              className="bg-accent text-secondary px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-accent/90 shadow-lg shadow-accent/25"
            >
              Schedule a free consultation <ArrowRight size={20} />
            </button>
          </div>

          {/* Social Proof Section */}
          <div className="border-t border-gray-800 pt-12">
            <div className="flex gap-12 max-w-xl">
              {socialProof.metrics.map((metric, index) => (
                <div key={index} className="text-left">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-3xl font-bold text-primary">{metric.value}</span>
                    {index === 0 && <Star className="w-4 h-4 text-accent fill-accent" />}
                  </div>
                  <div className="text-sm text-gray-400">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Image */}
      <div className="md:hidden mt-16 -mx-4">
        <img 
          src="/PF-Header-Image.png" 
          alt="Digital Marketing Illustration" 
          className="w-full max-h-[400px] object-contain"
        />
      </div>
    </div>
  );
}
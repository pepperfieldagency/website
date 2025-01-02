import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const socialProof = {
  metrics: [
    { value: '4.9', label: 'Customer Rating' },
    { value: '100+', label: 'Clients Served' },
    { value: '98%', label: 'Success Rate' }
  ]
};

export default function Hero() {
  const scrollToGetStarted = () => {
    const element = document.getElementById('get-started');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 bg-secondary overflow-hidden">
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
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 md:mb-6">
            <span className="mr-2">👋</span>
            <p className="text-primary text-sm md:text-base font-medium">Hello, business owner!</p>
          </div>
          
          <h1 className="text-[2.5rem] leading-[1.1] md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-8">
            <span className="block">We can help you</span>
            <span className="text-primary mt-2 block">
              grow your business
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8 md:mb-12 max-w-lg">
            We help ambitious companies scale through innovative strategies
            and data-driven solutions.
          </p>
          
          <div className="flex mb-12 md:mb-16">
            <button 
              onClick={scrollToGetStarted}
              className="bg-accent text-secondary px-6 md:px-8 py-3 md:py-4 rounded-full flex items-center justify-center gap-2 hover:bg-accent/90 shadow-lg shadow-accent/25 transition-all text-base md:text-lg font-medium"
            >
              Schedule a free consultation 
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Social Proof Section */}
          <div className="border-t border-gray-800 pt-8 md:pt-12">
            <div className="grid grid-cols-3 gap-4 md:gap-12 max-w-xl">
              {socialProof.metrics.map((metric, index) => (
                <div key={index} className="text-left">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-2xl md:text-3xl font-bold text-primary">{metric.value}</span>
                    {index === 0 && <Star className="w-4 h-4 text-accent fill-accent" />}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Image */}
      <div className="md:hidden mt-12 -mx-4">
        <img 
          src="/PF-Header-Image.png" 
          alt="Digital Marketing Illustration" 
          className="w-full max-h-[300px] object-contain"
        />
      </div>
    </div>
  );
}
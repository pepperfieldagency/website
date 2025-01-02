import React from 'react';
import BenefitCard from './BenefitCard';
import { benefits } from './benefits-data';

export default function WhyUs() {
  return (
    <div className="bg-gray-100 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#3FB885] px-6 py-2 rounded-lg mb-3">
            <h2 className="font-semibold text-[#0B1120]">WHY CHOOSE US</h2>
          </div>
          <h3 className="text-4xl font-bold text-secondary mb-6">
            Transform Your Business Growth
          </h3>
          <p className="text-gray-600 text-lg">
            Partner with us to unlock your business's full potential through proven strategies, 
            expert guidance, and measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </div>
  );
}
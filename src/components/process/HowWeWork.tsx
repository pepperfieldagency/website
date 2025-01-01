import React from 'react';
import ProcessListItem from './ProcessListItem';

const steps = [
  {
    title: "Discovery & Analysis",
    subtitle: "We dive deep into your business to understand your unique challenges and opportunities"
  },
  {
    title: "Strategy Development",
    subtitle: "Our team crafts a customized growth plan aligned with your business goals"
  },
  {
    title: "Implementation & Growth",
    subtitle: "We execute the strategy and continuously optimize for maximum results"
  }
];

export default function HowWeWork() {
  return (
    <div className="relative bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Vector Background */}
      <div className="absolute inset-0 z-0">
        <svg className="absolute right-0 top-0 h-full w-1/2 translate-x-1/2 transform text-primary/5" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
        <div className="absolute left-0 top-0 -translate-x-1/2 transform">
          <svg width="640" height="784" fill="none" viewBox="0 0 640 784" className="text-primary/5" aria-hidden="true">
            <defs>
              <pattern id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" fill="currentColor" />
              </pattern>
            </defs>
            <rect y="72" width="640" height="640" className="text-primary/5" fill="currentColor" />
            <rect width="640" height="784" fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold mb-3">HOW WE WORK</h2>
          <h3 className="text-4xl font-bold text-secondary mb-6">
            A Proven Process for Success
          </h3>
          <p className="text-gray-600 text-lg">
            Our systematic approach ensures consistent results and sustainable growth for your business
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <ol className="relative border-l border-primary/30">
            {steps.map((step, index) => (
              <ProcessListItem
                key={index}
                number={index + 1}
                {...step}
                isLast={index === steps.length - 1}
              />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
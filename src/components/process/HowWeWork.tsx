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
    <div id="how-we-work" className="relative bg-accent/5 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="mb-12">
              <div className="inline-block bg-accent px-6 py-2 rounded-lg mb-3">
                <h2 className="font-semibold text-secondary">HOW WE WORK</h2>
              </div>
              <h3 className="text-4xl font-bold text-secondary mb-6">
                A Proven Process for Success
              </h3>
              <p className="text-gray-600 text-lg max-w-lg mx-auto md:mx-0">
                Our systematic approach ensures consistent results and sustainable growth for your business
              </p>
            </div>

            <ol className="relative border-l border-accent/30 text-left max-w-lg mx-auto md:mx-0">
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

          <div className="relative mt-8 md:mt-0">
            <img
              src="/PF-How-We-Work.png"
              alt="Our work process visualization"
              className="rounded-2xl w-full h-auto object-cover mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
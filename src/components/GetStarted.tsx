import React from 'react';
import { InlineWidget } from 'react-calendly';

export default function GetStarted() {
  return (
    <div id="get-started" className="bg-secondary py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Schedule a free 30-minute strategy call with our experts and discover how we can help you achieve your business goals.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-1">
          <InlineWidget 
            url="https://calendly.com/haris-pepperfield/30min"
            styles={{
              height: '700px',
              width: '100%',
            }}
          />
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { InlineWidget } from 'react-calendly';
import { ArrowRight } from 'lucide-react';

export default function GetStarted() {
  return (
    <div id="get-started" className="bg-secondary py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Schedule a free 30-minute strategy call with our experts and discover how we can help you achieve your business goals.
          </p>
          <div className="inline-flex items-center gap-2 text-primary hover:text-primary/90">
            <span className="font-medium">Book your call now</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-1">
          <InlineWidget 
            url="https://calendly.com/your-scheduling-link"
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
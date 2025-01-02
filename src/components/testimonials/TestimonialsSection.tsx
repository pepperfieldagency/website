import React from 'react';
import TestimonialCard from './TestimonialCard';
import { testimonials } from './testimonials-data';

export default function TestimonialsSection() {
  return (
    <div id="reviews" className="bg-[#f8f9fa] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Success stories from businesses we've helped grow
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center md:items-stretch">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}
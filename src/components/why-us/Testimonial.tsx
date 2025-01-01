import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export default function Testimonial({ quote, author, role, company }: TestimonialProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <Quote className="w-8 h-8 text-primary/20 mb-4" />
      <p className="text-gray-700 mb-4 italic">{quote}</p>
      <div>
        <p className="font-semibold text-secondary">{author}</p>
        <p className="text-sm text-gray-500">{role} at {company}</p>
      </div>
    </div>
  );
}
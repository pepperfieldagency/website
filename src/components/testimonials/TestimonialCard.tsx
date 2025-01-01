import React from 'react';
import StarRating from './StarRating';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
  rating: number;
}

export default function TestimonialCard({ 
  name, 
  role, 
  company, 
  quote, 
  image,
  rating 
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 max-w-[350px] w-full hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-secondary">{name}</h3>
          <p className="text-sm text-gray-600">
            {role} at {company}
          </p>
        </div>
      </div>
      <StarRating rating={rating} className="mb-4" />
      <p className="text-gray-700 leading-relaxed">"{quote}"</p>
    </div>
  );
}
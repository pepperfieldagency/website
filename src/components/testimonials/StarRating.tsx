import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  className?: string;
}

export default function StarRating({ rating, className = '' }: StarRatingProps) {
  return (
    <div className={`flex gap-1 ${className}`}>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating
              ? 'text-accent fill-accent'
              : 'text-gray-300 fill-gray-300'
          }`}
        />
      ))}
    </div>
  );
}
import React from 'react';

interface ProcessListItemProps {
  number: number;
  title: string;
  subtitle: string;
  isLast: boolean;
}

export default function ProcessListItem({ number, title, subtitle, isLast }: ProcessListItemProps) {
  return (
    <li className={`ml-6 ${!isLast ? 'mb-12' : ''}`}>
      <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-white">
        <span className="text-white text-sm font-bold">{number}</span>
      </span>
      <div className="ml-4">
        <h3 className="font-semibold text-xl text-secondary mb-1">{title}</h3>
        <p className="text-gray-600">{subtitle}</p>
      </div>
    </li>
  );
}
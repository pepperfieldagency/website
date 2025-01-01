import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  number: number;
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

export default function ProcessStep({ number, icon: Icon, title, subtitle }: ProcessStepProps) {
  return (
    <div className="relative flex flex-col items-center text-center">
      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <h3 className="text-xl font-bold text-secondary mb-2">{title}</h3>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  );
}
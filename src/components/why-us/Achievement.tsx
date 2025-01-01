import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AchievementProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function Achievement({ icon: Icon, title, description }: AchievementProps) {
  return (
    <div className="flex gap-4 items-start">
      <div className="bg-primary/10 p-3 rounded-lg">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h3 className="font-semibold text-lg text-secondary mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
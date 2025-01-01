import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ListItemProps {
  icon: LucideIcon;
  text: string;
  iconClassName?: string;
}

export default function ListItem({ icon: Icon, text, iconClassName }: ListItemProps) {
  return (
    <div className="flex items-start gap-3">
      <Icon className={`w-6 h-6 flex-shrink-0 mt-1 ${iconClassName}`} />
      <p className="text-gray-700 text-lg">{text}</p>
    </div>
  );
}
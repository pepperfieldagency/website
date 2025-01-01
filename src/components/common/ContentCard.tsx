import React, { ReactNode } from 'react';

interface ContentCardProps {
  children: ReactNode;
  className?: string;
}

export default function ContentCard({ children, className = '' }: ContentCardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-8 ${className}`}>
      {children}
    </div>
  );
}
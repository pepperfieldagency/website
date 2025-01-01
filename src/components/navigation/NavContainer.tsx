import React from 'react';

interface NavContainerProps {
  children: React.ReactNode;
  isScrolled: boolean;
}

export default function NavContainer({ children, isScrolled }: NavContainerProps) {
  return (
    <div 
      className={`
        max-w-7xl mx-auto rounded-xl 
        transition-all duration-300
        ${isScrolled ? 'bg-[#0B1120]/95' : 'bg-[#0B1120]'}
        backdrop-blur-sm
        shadow-lg shadow-[#0B1120]/10
      `}
    >
      {children}
    </div>
  );
}
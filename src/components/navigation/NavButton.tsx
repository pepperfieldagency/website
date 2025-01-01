import React from 'react';

interface NavButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export default function NavButton({ onClick, children }: NavButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="bg-accent text-secondary px-6 py-2 rounded-full hover:bg-accent/90 shadow-lg shadow-accent/10 transition-all"
    >
      {children}
    </button>
  );
}
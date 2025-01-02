import React from 'react';
import { Menu, X } from 'lucide-react';

interface MenuToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function MenuToggle({ isOpen, onClick }: MenuToggleProps) {
  return (
    <button 
      onClick={onClick}
      className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      {isOpen ? (
        <X size={24} className="transform transition-transform duration-200" />
      ) : (
        <Menu size={24} className="transform transition-transform duration-200" />
      )}
    </button>
  );
}
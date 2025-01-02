import React from 'react';
import NavLink from './NavLink';
import NavButton from './NavButton';

interface MobileMenuProps {
  isOpen: boolean;
  onConsultationClick: () => void;
}

export default function MobileMenu({ isOpen, onConsultationClick }: MobileMenuProps) {
  return (
    <div 
      className={`
        md:hidden 
        overflow-hidden 
        transition-all 
        duration-300 ease-in-out
        ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}
      `}
    >
      <div className="px-6 py-4 space-y-4 mt-6">
        <div className="flex flex-col items-center gap-4">
          <NavLink href="#problem-section" className="w-full min-h-[44px] flex items-center justify-center">
            Solutions
          </NavLink>
          <NavLink href="#how-we-work" className="w-full min-h-[44px] flex items-center justify-center">
            How We Work
          </NavLink>
          <NavLink href="#reviews" className="w-full min-h-[44px] flex items-center justify-center">
            Reviews
          </NavLink>
          <NavButton 
            onClick={onConsultationClick}
            className="w-full min-h-[44px] flex items-center justify-center"
          >
            Contact
          </NavButton>
        </div>
      </div>
    </div>
  );
}
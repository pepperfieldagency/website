import React from 'react';
import NavLink from './NavLink';
import NavButton from './NavButton';

interface MobileMenuProps {
  isOpen: boolean;
  onConsultationClick: () => void;
}

export default function MobileMenu({ isOpen, onConsultationClick }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden px-4 pb-4">
      <div className="space-y-4">
        <NavLink href="#services">Services</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#process">Process</NavLink>
        <NavButton onClick={onConsultationClick}>
          Contact
        </NavButton>
      </div>
    </div>
  );
}
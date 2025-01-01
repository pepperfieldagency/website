import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import NavLink from './navigation/NavLink';
import NavButton from './navigation/NavButton';
import MobileMenu from './navigation/MobileMenu';
import NavContainer from './navigation/NavContainer';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToGetStarted = () => {
    const element = document.getElementById('get-started');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 py-4">
      <NavContainer isScrolled={isScrolled}>
        <div className="flex justify-between h-16 items-center px-4">
          <Logo />
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#process">Process</NavLink>
              <NavButton onClick={scrollToGetStarted}>
                Schedule a free consultation
              </NavButton>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <MobileMenu 
          isOpen={isOpen}
          onConsultationClick={scrollToGetStarted}
        />
      </NavContainer>
    </nav>
  );
}
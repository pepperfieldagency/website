import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import NavLink from './navigation/NavLink';
import NavButton from './navigation/NavButton';
import MobileMenu from './navigation/MobileMenu';
import NavContainer from './navigation/NavContainer';
import MenuToggle from './navigation/MenuToggle';

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
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 py-6">
      <NavContainer isScrolled={isScrolled}>
        <div className="flex justify-between items-center px-4 h-16">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#problem-section">Solutions</NavLink>
            <NavLink href="#how-we-work">How We Work</NavLink>
            <NavLink href="#reviews">Reviews</NavLink>
            <NavButton onClick={scrollToGetStarted}>
              Contact
            </NavButton>
          </div>
          
          <div className="md:hidden">
            <MenuToggle 
              isOpen={isOpen} 
              onClick={() => setIsOpen(!isOpen)} 
            />
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
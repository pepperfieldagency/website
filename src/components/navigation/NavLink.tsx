import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className = '' }: NavLinkProps) {
  return (
    <a 
      href={href}
      className={`
        text-white/90 
        hover:text-accent 
        transition-colors 
        duration-200
        text-center
        px-4
        py-2
        rounded-lg
        hover:bg-white/5
        ${className}
      `}
    >
      {children}
    </a>
  );
}
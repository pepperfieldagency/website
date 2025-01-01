import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <a 
      href={href}
      className="text-white/90 hover:text-accent transition-colors"
    >
      {children}
    </a>
  );
}
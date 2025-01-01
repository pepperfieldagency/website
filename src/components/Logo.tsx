import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img 
        src="/PF-Logo-Icon.png" 
        alt="Pepperfield Agency Logo"
        className="h-12 w-12 object-contain"
      />
      <span className="font-bold text-2xl text-white">
        Pepperfield
      </span>
    </div>
  );
}
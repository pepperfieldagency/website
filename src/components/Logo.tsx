import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center">
        <span className="text-2xl font-bold text-white">P</span>
      </div>
      <span className="font-bold text-2xl text-white">
        Pepperfield
      </span>
    </div>
  );
}
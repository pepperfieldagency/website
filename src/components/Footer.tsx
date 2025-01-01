import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0B1120] py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-white/90 text-center">
          © {currentYear} The Pepperfield Agency. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
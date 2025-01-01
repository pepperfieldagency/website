import React from 'react';

const stats = [
  { number: '150+', label: 'Clients Worldwide' },
  { number: '10+', label: 'Years Experience' },
  { number: '94%', label: 'Client Retention' },
  { number: '500+', label: 'Projects Completed' }
];

export default function Stats() {
  return (
    <div className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
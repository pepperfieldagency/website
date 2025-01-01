import React from 'react';
import { LineChart, Users, Lightbulb, Target } from 'lucide-react';

const services = [
  {
    icon: <LineChart className="w-8 h-8" />,
    title: 'Strategic Planning',
    description: 'Develop comprehensive strategies aligned with your business goals and market opportunities.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Team Development',
    description: 'Build and optimize high-performing teams that drive sustainable growth.'
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Innovation Consulting',
    description: 'Transform your business through innovative solutions and digital transformation.'
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Performance Optimization',
    description: 'Enhance operational efficiency and maximize business performance.'
  }
];

export default function Services() {
  return (
    <div id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive solutions for your business needs</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 rounded-2xl border border-gray-100 hover:border-primary hover:shadow-lg transition-all group">
              <div className="bg-secondary/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10">
                <div className="text-primary">{service.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-secondary">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
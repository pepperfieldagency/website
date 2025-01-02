import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';
import ContentCard from './common/ContentCard';
import ListItem from './common/ListItem';

const problems = [
  "Struggling to attract quality leads online",
  "Wasting money on ineffective marketing",
  "Losing customers to competitors",
  "Unclear digital marketing strategy"
];

const solutions = [
  "Data-driven lead generation strategies",
  "ROI-focused marketing campaigns",
  "Competitive market positioning",
  "Clear, actionable growth roadmap"
];

export default function ProblemSection() {
  return (
    <div id="problem-section" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            We Have Solutions To Your Problems
          </h2>
          <p className="text-xl text-gray-600">
            Transform your business challenges into opportunities for growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <ContentCard className="transform hover:scale-[1.02] transition-transform duration-300">
            <div className="space-y-8">
              <div>
                <h3 className="text-red-500 font-semibold mb-2">THE PROBLEM</h3>
                <h2 className="text-3xl font-bold text-secondary mb-6">
                  Challenges businesses face today
                </h2>
              </div>
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <ListItem 
                    key={index}
                    icon={XCircle}
                    text={problem}
                    iconClassName="text-red-500"
                  />
                ))}
              </div>
            </div>
          </ContentCard>

          <ContentCard className="transform hover:scale-[1.02] transition-transform duration-300">
            <div className="space-y-8">
              <div>
                <h3 className="text-primary font-semibold mb-2">THE SOLUTION</h3>
                <h2 className="text-3xl font-bold text-secondary mb-6">
                  How we transform your business
                </h2>
              </div>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <ListItem 
                    key={index}
                    icon={CheckCircle}
                    text={solution}
                    iconClassName="text-primary"
                  />
                ))}
              </div>
            </div>
          </ContentCard>
        </div>
      </div>
    </div>
  );
}
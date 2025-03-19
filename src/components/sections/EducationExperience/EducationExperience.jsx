import React from 'react';
import EducationTimeline from '../Education/EducationTimeline';
import ExperienceTimeline from './ExperienceTimeline';

const EducationExperience = () => {
  return (
    <section id="education-experience" className="py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-blue-900 dark:text-blue-100 mb-3">
          &lt; Education & Experience /&gt;
        </h2>
        <p className="text-lg md:text-xl text-blue-700 dark:text-blue-300 max-w-3xl mb-16">
          A comprehensive overview of my educational background and professional experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <EducationTimeline />
          </div>
          <div>
            <ExperienceTimeline />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;

import React from 'react';
import EducationTimeline from '../Education/EducationTimeline';
import ExperienceTimeline from './ExperienceTimeline';

const EducationExperience = () => {
  return (
    <section id="education-experience" className="py-4 md:py-32"> {/* Further reduced padding for mobile */}
      <div className="container mx-auto px-4">
        <h2 className="text-[2rem] md:text-6xl font-bold text-blue-900 dark:text-blue-100 mb-6 text-left whitespace-nowrap">
          &lt; My Journey /&gt;
        </h2>
        <p className="text-base md:text-xl text-blue-700 dark:text-blue-300 max-w-3xl mb-12 text-left">
          A comprehensive overview of my educational background and professional experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-6 text-left pl-4 md:pl-0">
              Education
            </h3>
            <EducationTimeline />
          </div>
          <div>
            <h3 className="text-2xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-6 text-left pl-4 md:pl-0">
              Experience
            </h3>
            <ExperienceTimeline />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;

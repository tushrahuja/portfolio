import React from 'react';
import { ContainerScroll } from './ContainerScroll';
import AboutContent from './AboutContent';

const AboutSection = () => {
  return (
    <div id="about">
      <ContainerScroll
        titleComponent={
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold text-blue-900 dark:text-blue-100 mb-12 md:mb-24">
            &lt; About Me /&gt;
          </h2>
        }
      >
        <AboutContent />
      </ContainerScroll>
    </div>
  );
};

export default AboutSection;

import React from 'react';
import { ContainerScroll } from './ContainerScroll';
import AboutContent from './AboutContent';

const AboutSection = () => {
  return (
    <div id="about">
      <ContainerScroll
        titleComponent={
          <h2 className="text-6xl md:text-7xl font-bold text-blue-900 dark:text-blue-100 mt-[-2rem]">
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

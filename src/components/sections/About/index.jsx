import React from 'react';
import { ContainerScroll } from './ContainerScroll';
import AboutContent from './AboutContent';

const AboutSection = () => {
  return (
    <div id="about" className="w-full overflow-x-hidden mt-20 md:mt-0 md:-mb-32"> {/* Added negative margin bottom for laptop */}
      <ContainerScroll
        titleComponent={
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold text-blue-900 dark:text-blue-100 mb-0 md:-mt-20"> {/* Added negative margin top for laptop */}
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

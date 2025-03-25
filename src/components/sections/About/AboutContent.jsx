import React from 'react';
import aboutme from '/src/images/aboutme.png';

const AboutContent = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <img
        src={aboutme}
        alt="About Me"
        className="w-full h-full object-contain md:object-cover rounded-xl
                   transform rotate-90 scale-[1.8] md:rotate-0 md:scale-100" // Increased scale to 1.8 for mobile only
        draggable={false}
      />
    </div>
  );
};

export default AboutContent;

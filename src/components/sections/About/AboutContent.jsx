import React from 'react';
import aboutme from '/src/images/aboutme.png';

const AboutContent = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <img
        src={aboutme}
        alt="About Me"
        className="w-full h-full object-contain lg:object-cover rounded-xl
                   transform rotate-90 scale-150 lg:rotate-0 lg:scale-100"
        draggable={false}
      />
    </div>
  );
};

export default AboutContent;

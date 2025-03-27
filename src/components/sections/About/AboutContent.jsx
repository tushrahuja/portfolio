import React from 'react';

const AboutContent = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <img
        src="/images/aboutme.png" // Updated path
        alt="About Me"
        className="w-full h-full object-contain md:object-cover rounded-xl
                   transform rotate-90 scale-[1.8] md:rotate-0 md:scale-100" // Increased scale to 1.8 for mobile only
        draggable={false}
      />
    </div>
  );
};

export default AboutContent;

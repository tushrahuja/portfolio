"use client";
import React from 'react';
import aboutme from '/src/images/aboutme.png';

const AboutContent = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <img
        src={aboutme}
        alt="About Me"
        className="w-full h-full object-contain rounded-xl"
        draggable={false}
      />
    </div>
  );
};

export default AboutContent;

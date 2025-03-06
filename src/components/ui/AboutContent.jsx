"use client";
import React from 'react';
import { ContainerScroll } from "./container-scroll-animation";
import aboutme from '/src/images/aboutme.png';

const AboutContent = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-6xl md:text-7xl font-bold text-blue-900 dark:text-blue-100">
              &lt; About Me /&gt;
            </h2>
          </>
        }
      >
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={aboutme}
            alt="About Me"
            className="w-full h-full object-contain rounded-xl"
            draggable={false}
          />
        </div>
      </ContainerScroll>
    </div>
  );
};

export default AboutContent;

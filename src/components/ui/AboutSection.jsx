import React from 'react';

export const AboutSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-16 bg-blue-900 dark:bg-blue-100">
      <h1 className="text-4xl font-semibold text-white dark:text-blue-900 font-serif">About Me</h1>
      <p className="text-center mt-4 text-white/60 dark:text-blue-700 md:text-lg">
        Hey there! I'm a passionate Frontend Developer aspiring to become a Full Stack Developer.
        I specialize in crafting responsive and dynamic user interfaces using React, Tailwind CSS, 
        Bootstrap, and Framer Motion.
      </p>
      <p className="text-center mt-4 text-white/60 dark:text-blue-700 md:text-lg">
        On the backend, I have experience with MySQL, MongoDB, and SQLite.
        I am also a dedicated problem solver, consistently working on improving my skills in
        Data Structures and Algorithms.
      </p>
      <p className="text-center mt-4 text-white/60 dark:text-blue-700 md:text-lg">
        Beyond coding, I take pride in my professional skills such as time management
        and team collaboration, which help me thrive in fast-paced development environments.
      </p>
    </div>
  );
};

export default AboutSection;

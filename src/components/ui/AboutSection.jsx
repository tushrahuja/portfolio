import React from 'react';
export const AboutSection = () => {
  return (
    <div className="container mx-auto p-4 md:p-20">
      <h1 className="text-4xl font-semibold">About Me</h1>
      <p className="text-center">
        Hey there! I'm Tushar Ahuja, a passionate Frontend Developer aspiring to become a Full Stack Developer.
        I specialize in crafting responsive and dynamic user interfaces using React, Tailwind CSS, 
        Bootstrap, and Framer Motion.
      </p>
      <p className="text-center">
        On the backend, I have experience with MySQL, MongoDB, and SQLite.
        I am also a dedicated problem solver, consistently working on improving my skills in
        Data Structures and Algorithms.
      </p>
      <p className="text-center">
        Beyond coding, I take pride in my professional skills such as time management
        and team collaboration, which help me thrive in fast-paced development environments.
      </p>
    </div>
  );
};

export default AboutSection;

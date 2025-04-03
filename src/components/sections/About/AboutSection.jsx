import React from 'react';
export const AboutSection = () => {
  return (
    <div className="container mx-auto p-4 md:p-20">
      <h1 className="text-lg md:text-4xl">About Me</h1>
      <p className="text-[10px] md:text-base text-center">
        Hey there! I'm Tushar Ahuja, a passionate Full Stack Developer and Computer Science Engineering 
        student based in Amravati, Maharashtra. 
        I specialize in building responsive, user-friendly web applications with modern technologies.
      </p>
      <p className="text-[10px] md:text-base text-center">
        My expertise spans the entire development stack - from crafting intuitive frontends with React.js 
        and modern CSS frameworks to building robust backends with Node.js and Express.js. 
        I'm proficient in both SQL (MySQL) and NoSQL (MongoDB) database systems, enabling me to design 
        efficient data architectures for various application needs. 
        I'm constantly exploring emerging technologies and frameworks to stay at the cutting edge of web 
        development.
      </p>
      <p className="text-[10px] md:text-base text-center">
        Beyond technical skills, I excel in problem-solving, communicate effectively with stakeholders, 
        and thrive in collaborative environments.
      </p>
    </div>
  );
};

export default AboutSection;

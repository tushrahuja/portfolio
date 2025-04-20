import React from "react";
import { motion } from "framer-motion";
import { SkillsCarousel } from "./Carousel3D";
import { skillSections } from "../../../data";

const Skills = () => {
  const isMobile = window.innerWidth <= 768;
  
  return (
    <motion.div 
      id="skills" 
      className="pt-0 md:pt-8 pb-8 md:pb-16 container mx-0 px-4 md:pl-6 lg:pl-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.h2 
        className="text-[2rem] md:text-6xl font-bold text-blue-900 dark:text-blue-100 mb-6 md:mb-8 whitespace-nowrap"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        &lt; Tools & Skills /&gt;
      </motion.h2>
      <motion.p 
        className="text-base md:text-xl text-blue-700 dark:text-blue-300 max-w-3xl mb-2 md:mb-4 text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        My expertise combines technical proficiency with professional skills, enabling me to
        deliver comprehensive solutions while effectively collaborating with teams and
        stakeholders.
      </motion.p>
      <SkillsCarousel skillSections={skillSections} />
    </motion.div>
  );
};

export default Skills;

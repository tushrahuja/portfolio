import React from "react";
import { motion } from "framer-motion";
import { SkillsCarousel } from "./Carousel3D";
import { skillSections } from "../../../data";

const Skills = () => {
  const isMobile = window.innerWidth <= 768;
  
  return (
    <motion.div id="skills" className="pt-0 md:pt-8 pb-8 md:pb-16 container mx-0 px-4 md:pl-6 lg:pl-8">
      <h2 className="text-[2rem] md:text-6xl font-bold text-blue-900 dark:text-blue-100 mb-1 md:mb-3 whitespace-nowrap">
        &lt; Tools & Skills /&gt;
      </h2>
      <p className="text-base md:text-xl text-blue-700 dark:text-blue-300 max-w-3xl mb-2 md:mb-4 text-left">
        My expertise combines technical proficiency with professional skills, enabling me to
        deliver comprehensive solutions while effectively collaborating with teams and
        stakeholders.
      </p>
      <SkillsCarousel skillSections={skillSections} />
    </motion.div>
  );
};

export default Skills;

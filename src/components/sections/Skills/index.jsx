import React from "react";
import { motion } from "framer-motion";
import { SkillsCarousel } from "./Carousel3D";
import { skillSections } from "../../../data";

const Skills = () => {
  return (
    <motion.div id="skills" className="pt-8 pb-16">
      <h2 className="text-4xl md:text-6xl font-bold text-blue-900 dark:text-blue-100 mb-3">
        &lt; Tools & Skills /&gt;
      </h2>
      <p className="text-base md:text-xl text-blue-700 dark:text-blue-300 max-w-3xl mb-4">
        My expertise combines technical proficiency with professional skills, enabling me to
        deliver comprehensive solutions while effectively collaborating with teams and
        stakeholders.
      </p>
      <SkillsCarousel skillSections={skillSections} />
    </motion.div>
  );
};

export default Skills;

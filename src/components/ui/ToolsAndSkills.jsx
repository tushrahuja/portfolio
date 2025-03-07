import React from "react";
import { motion } from "framer-motion";
import { SkillsCarousel } from "./3d-carousel";
import { skillSections } from "../../data";

const ToolsAndSkills = () => {
  return (
    <motion.div
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-20 pb-16"
    >
      <div className="w-full">
        <h2 className="text-5xl md:text-6xl font-bold text-blue-900 dark:text-blue-100 mb-5">
          &lt; Tools & Skills /&gt;
        </h2>
        <p className="text-lg md:text-xl text-blue-700 dark:text-blue-300 max-w-3xl mt-1">
          My expertise combines technical proficiency with professional skills, enabling me to
          deliver comprehensive solutions while effectively collaborating with teams and
          stakeholders.
        </p>
        <div className="-mt-6">
          <SkillsCarousel skillSections={skillSections} />
        </div>
      </div>
    </motion.div>
  );
};

export default ToolsAndSkills;

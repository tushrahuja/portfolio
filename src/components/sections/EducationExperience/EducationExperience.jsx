import React from 'react';
import { motion } from 'framer-motion';
import EducationTimeline from '../Education/EducationTimeline';
import ExperienceTimeline from './ExperienceTimeline';

const EducationExperience = () => {
  return (
    <motion.section 
      id="education-experience" 
      className="py-4 md:py-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-[2rem] md:text-6xl font-bold text-blue-900 dark:text-blue-100 mb-6 text-left whitespace-nowrap"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          &lt; My Journey /&gt;
        </motion.h2>
        <motion.p 
          className="text-base md:text-xl text-blue-700 dark:text-blue-300 max-w-3xl mb-12 text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          A comprehensive overview of my educational background and professional experience.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-6 text-left pl-4 md:pl-0">
              &lt; Education /&gt;
            </h3>
            <EducationTimeline />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-6 text-left pl-4 md:pl-0">
              &lt; Experience /&gt;
            </h3>
            <ExperienceTimeline />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default EducationExperience;

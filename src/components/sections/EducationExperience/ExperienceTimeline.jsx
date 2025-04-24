import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const ExperienceTimeline = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 50%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div id="experience" className="w-full">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-4 pb-16"
        ref={containerRef}
      >
        <div className="w-full">
          <div ref={ref} className="space-y-12 relative">
            <div className="flex items-start">
              <motion.div 
                className="h-7 sm:h-10 absolute left-3 md:left-3 w-7 sm:w-10 rounded-full bg-white dark:bg-black z-20 flex items-center justify-center border border-blue-300 dark:border-blue-700"
                whileHover={{ scale: 1.2, boxShadow: "0 0 8px rgba(59, 130, 246, 0.5)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="h-3 sm:h-4 w-3 sm:w-4 rounded-full bg-blue-200 dark:bg-blue-800 border border-blue-300 dark:border-blue-700 p-1.5 sm:p-2" />
              </motion.div>
              <div className="ml-12 md:ml-16 w-full">
                <motion.div 
                  className="bg-white/80 dark:bg-gray-900/80 rounded-xl p-4 border border-blue-200 dark:border-blue-800 transition-all duration-300 overflow-hidden"
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
                    borderColor: "rgba(59, 130, 246, 0.5)",
                    scale: 1.02 
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  {/* Header with role and timeline */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <motion.h3 
                      className="text-base md:text-xl font-bold text-blue-900 dark:text-blue-100 leading-tight"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      Data Analyst Intern
                    </motion.h3>
                    <motion.div 
                      className="flex items-center mt-1 md:mt-0"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <span className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/40 dark:to-blue-900/40 text-green-800 dark:text-green-200 text-xs px-3 py-1 rounded-full font-medium shadow-sm">Oct 2024 - Nov 2024</span>
                    </motion.div>
                  </div>
                  
                  {/* Company with icon */}
                  <motion.div 
                    className="flex items-center mb-3 text-sm text-blue-700 dark:text-blue-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">Connecting Dream Foundation</span>
                    <span className="ml-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs px-2 py-0.5 rounded">Remote</span>
                  </motion.div>
                  
                  {/* Divider */}
                  <div className="border-t border-blue-100 dark:border-blue-800/50 my-3"></div>
                  
                  {/* Key responsibilities */}
                  <motion.div 
                    className="mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300 ml-4">
                      <motion.li 
                        className="flex items-start"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 mt-0.5 text-green-600 dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Analyzed complex datasets to identify trends and patterns for business decision-making</span>
                      </motion.li>
                      <motion.li 
                        className="flex items-start"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 mt-0.5 text-green-600 dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Generated comprehensive reports with actionable insights for stakeholders</span>
                      </motion.li>
                    </ul>
                  </motion.div>
                  
                  {/* Skills used */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Skills Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "Pandas", "SQL", "Data Visualization", "Data Analytics"].map((skill, index) => (
                        <motion.span 
                          key={skill}
                          className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-2 py-1 rounded"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            <div className="flex items-start">
              <motion.div 
                className="h-7 sm:h-10 absolute left-3 md:left-3 w-7 sm:w-10 rounded-full bg-white dark:bg-black z-20 flex items-center justify-center border border-blue-300 dark:border-blue-700"
                whileHover={{ scale: 1.2, boxShadow: "0 0 8px rgba(59, 130, 246, 0.5)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="h-3 sm:h-4 w-3 sm:w-4 rounded-full bg-blue-200 dark:bg-blue-800 border border-blue-300 dark:border-blue-700 p-1.5 sm:p-2" />
              </motion.div>
              <div className="ml-12 md:ml-16 w-full">
                <motion.div 
                  className="bg-white/80 dark:bg-gray-900/80 rounded-xl p-4 border border-blue-200 dark:border-blue-800 transition-all duration-300 overflow-hidden"
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
                    borderColor: "rgba(59, 130, 246, 0.5)",
                    scale: 1.02 
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Header with role and timeline */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <motion.h3 
                      className="text-base md:text-xl font-bold text-blue-900 dark:text-blue-100 leading-tight"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      AI-ML Virtual Intern
                    </motion.h3>
                    <motion.div 
                      className="flex items-center mt-1 md:mt-0"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <span className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/40 dark:to-blue-900/40 text-green-800 dark:text-green-200 text-xs px-3 py-1 rounded-full font-medium shadow-sm">Jul 2024 - Sep 2024</span>
                    </motion.div>
                  </div>
                  
                  {/* Company with icon */}
                  <motion.div 
                    className="flex items-center mb-3 text-sm text-blue-700 dark:text-blue-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">EduSkills AICTE</span>
                    <span className="ml-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs px-2 py-0.5 rounded">Remote</span>
                  </motion.div>
                  
                  {/* Divider */}
                  <div className="border-t border-blue-100 dark:border-blue-800/50 my-3"></div>
                  
                  {/* Key responsibilities */}
                  <motion.div 
                    className="mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300 ml-4">
                      <motion.li 
                        className="flex items-start"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 mt-0.5 text-green-600 dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Developed and implemented machine learning models using Python and TensorFlow</span>
                      </motion.li>
                      <motion.li 
                        className="flex items-start"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 mt-0.5 text-green-600 dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Performed data preprocessing and feature engineering on complex datasets</span>
                      </motion.li>
                      <motion.li 
                        className="flex items-start"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 mt-0.5 text-green-600 dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Collaborated on computer vision and NLP projects</span>
                      </motion.li>
                    </ul>
                  </motion.div>
                  
                  {/* Skills used */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Skills Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "TensorFlow", "scikit-learn", "Neural Networks", "NLP"].map((skill, index) => (
                        <motion.span 
                          key={skill}
                          className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-2 py-1 rounded"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Timeline line with animated glow effect */}
            <div
              style={{
                height: height + "px",
              }}
              className="absolute left-[1.6rem] sm:left-[1.85rem] -top-6 overflow-hidden w-[2px] z-10 bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
            >
              <motion.div
                style={{
                  height: heightTransform,
                  opacity: opacityTransform,
                }}
                className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                animate={{ 
                  boxShadow: ['0 0 5px rgba(59, 130, 246, 0.3)', '0 0 20px rgba(59, 130, 246, 0.7)', '0 0 5px rgba(59, 130, 246, 0.3)'],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceTimeline;

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const EducationTimeline = () => {
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
    offset: ["start 50%", "end 50%"], // Adjusted start value to 50%
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div id="education" className="w-full">
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
                  {/* Header with degree and timeline */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <motion.h3 
                      className="text-base md:text-xl font-bold text-blue-900 dark:text-blue-100 leading-tight"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      BE in Computer Science Engineering
                    </motion.h3>
                    <motion.div 
                      className="flex items-center mt-1 md:mt-0"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <span className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 text-blue-800 dark:text-blue-200 text-xs px-3 py-1 rounded-full font-medium shadow-sm">2023-2026</span>
                    </motion.div>
                  </div>
                  
                  {/* Institution with icon */}
                  <motion.div 
                    className="flex items-center mb-3 text-sm text-blue-700 dark:text-blue-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="font-medium">P. R. Pote College of Engineering & Management, Amravati</span>
                  </motion.div>
                  
                  {/* Location */}
                  <motion.div 
                    className="flex items-center mb-3 text-sm text-blue-700 dark:text-blue-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Maharashtra, India</span>
                  </motion.div>
                  
                  {/* Divider */}
                  <div className="border-t border-blue-100 dark:border-blue-800/50 my-3"></div>
                  
                  {/* Key courses */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      Key Courses
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Data Structures & Algorithms", "Artificial Intelligence", "Web Development", "Object-Oriented Programming", "Database Management", "Networking"].map((course, index) => (
                        <motion.span 
                          key={course}
                          className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-2 py-1 rounded"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {course}
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
                  {/* Header with degree and timeline */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <motion.h3 
                      className="text-base md:text-xl font-bold text-blue-900 dark:text-blue-100 leading-tight"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      Diploma in E&TC
                    </motion.h3>
                    <motion.div 
                      className="flex items-center mt-1 md:mt-0"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <span className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 text-blue-800 dark:text-blue-200 text-xs px-3 py-1 rounded-full font-medium shadow-sm">2021-2023</span>
                    </motion.div>
                  </div>
                  
                  {/* Institution with icon */}
                  <motion.div 
                    className="flex items-center mb-3 text-sm text-blue-700 dark:text-blue-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="font-medium">Government Polytechnic, Amravati</span>
                  </motion.div>
                  
                  {/* Location */}
                  <motion.div 
                    className="flex items-center mb-3 text-sm text-blue-700 dark:text-blue-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Maharashtra, India</span>
                  </motion.div>
                  
                  {/* Divider */}
                  <div className="border-t border-blue-100 dark:border-blue-800/50 my-3"></div>
                  
                  {/* Key courses */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      Key Courses
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Microcontrollers", "Internet of Things", "Embedded Systems", "Computer Networks", "Electronics"].map((course, index) => (
                        <motion.span 
                          key={course}
                          className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-2 py-1 rounded"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {course}
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
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {/* Header with degree and timeline */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <motion.h3 
                      className="text-base md:text-xl font-bold text-blue-900 dark:text-blue-100 leading-tight"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      Secondary School Certificate (SSC)
                    </motion.h3>
                    <motion.div 
                      className="flex items-center mt-1 md:mt-0"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <span className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 text-blue-800 dark:text-blue-200 text-xs px-3 py-1 rounded-full font-medium shadow-sm">2020</span>
                    </motion.div>
                  </div>
                  
                  {/* Institution with icon */}
                  <motion.div 
                    className="flex items-center mb-3 text-sm text-blue-700 dark:text-blue-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="font-medium">Golden Kids English High School, Amravati</span>
                  </motion.div>
                  
                  {/* Location */}
                  <motion.div 
                    className="flex items-center mb-3 text-sm text-blue-700 dark:text-blue-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Maharashtra, India</span>
                  </motion.div>
                  
                  {/* Divider */}
                  <div className="border-t border-blue-100 dark:border-blue-800/50 my-3"></div>
                  
                  {/* Achievement */}
                  <motion.div 
                    className="flex items-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      x: 5,
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 300, damping: 10 }
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                    </svg>
                    <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Graduated with 79.80% marks</span>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Timeline line with animated glow effect */}
            <div
              style={{
                height: height + "px",
              }}
              className="absolute left-[1.6rem] sm:left-[1.85rem] -top-8 overflow-hidden w-[2px] z-10 bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
            >
              <motion.div
                style={{
                  height: heightTransform,
                  opacity: opacityTransform,
                }}
                className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-indigo-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
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

export default EducationTimeline;

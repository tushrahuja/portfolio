import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../../../data';

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="certifications" className="pt-20 pb-8 md:pb-32"> {/* Increased md:pb-20 to md:pb-32 for much more bottom padding on desktop */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        <h2 className="text-[2rem] md:text-6xl font-bold text-blue-900 dark:text-blue-100 mb-3 whitespace-nowrap text-left relative z-10">
          &lt; Certifications /&gt;
        </h2>
        <p className="text-sm md:text-xl text-blue-700 dark:text-blue-300 max-w-3xl mb-12 text-left">
          Professional certifications and achievements that demonstrate my commitment to continuous learning.
        </p>
        
        {/* Mobile horizontal scroll layout */}
        <div className="md:hidden flex flex-nowrap overflow-x-auto pb-8 -mx-4 sm:-mx-8 scroll-smooth gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group w-64 flex-none mx-2 first:ml-4 last:mr-4 
                       transition-all duration-300 relative"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md border-2 border-blue-900 dark:border-blue-300 relative">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900/90 dark:bg-blue-300/90 flex items-center justify-center 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                pointer-events-none group-hover:pointer-events-auto">
                    <div className="text-center p-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-base font-bold text-white dark:text-black mb-1">{cert.title}</h3>
                      <p className="text-sm font-semibold text-gray-200 dark:text-gray-800 mb-1">{cert.issuer}</p>
                      <p className="text-xs font-medium text-gray-300 dark:text-gray-700 mb-2">{cert.date}</p>
                      <p className="text-sm font-semibold text-gray-300 dark:text-gray-700">{cert.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-3">
                  <motion.a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    View
                    <svg className="w-3 h-3 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Desktop layout with exactly 4 cards per row */}
        <div className="hidden md:grid grid-cols-4 gap-4 pb-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group transition-all duration-300"
              style={{ zIndex: certifications.length - index }}
              whileHover={{ 
                scale: 1.1,
                zIndex: 50,
                transition: { duration: 0.3 }
              }}
            >
              <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg border-2 border-blue-900 dark:border-blue-300 h-full transform hover:-rotate-2">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900/90 dark:bg-blue-300/90 flex items-center justify-center 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                pointer-events-none group-hover:pointer-events-auto">
                    <div className="text-center p-3 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-base font-bold text-white dark:text-black mb-1">{cert.title}</h3>
                      <p className="text-sm font-semibold text-gray-200 dark:text-gray-800 mb-1">{cert.issuer}</p>
                      <p className="text-xs font-medium text-gray-300 dark:text-gray-700 mb-1">{cert.date}</p>
                      <p className="text-xs font-semibold text-gray-300 dark:text-gray-700 line-clamp-3">{cert.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-2">
                  <motion.a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    View
                    <svg className="w-3 h-3 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;

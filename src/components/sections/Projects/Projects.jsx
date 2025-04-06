import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../../data";
import { ArrowLeft, ArrowRight, Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {  // Only change slides when not hovering
        setCurrentProject((prev) => (prev + 1) % projects.length);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [isHovered]);  // Add isHovered as dependency

  const handleProjectClick = (index) => {
    setCurrentProject(index);
  };

  const handlePrevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  return (
    <motion.div
      id="projects"
      className="pt-9 py-32 container mx-0 px-4 md:pl-6 lg:pl-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="w-full">
        <h2 className="text-[2rem] md:text-6xl font-bold text-blue-900 dark:text-blue-100 mb-3 whitespace-nowrap">
          &lt; Projects /&gt;
        </h2>
        <p className="text-sm md:text-xl text-blue-700 dark:text-blue-300 max-w-3xl mb-16 text-left">
          A collection of projects that showcase my passion for building innovative and user-friendly applications
        </p>

        <div className="relative h-[450px] md:h-[400px] perspective-[1000px]">
          <motion.button
            onClick={handlePrevProject}
            className="absolute left-[-3rem] top-1/2 -translate-y-1/2 z-10 p-2 bg-white dark:bg-gray-800 text-gray-600 dark:text-blue-100 rounded-full shadow-md hidden sm:block hover:bg-blue-50 dark:hover:bg-gray-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowLeft className="w-5 h-5" />
          </motion.button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ rotateY: 45, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }}
              exit={{ rotateY: -45, opacity: 0, transition: { duration: 0.6, ease: "easeIn" } }}
              className="absolute inset-0"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div 
                className="group relative rounded-xl overflow-hidden bg-blue-50/50 dark:bg-[#0A1021]/50 h-full"
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col lg:flex-row h-full">
                  <div className="w-full lg:w-1/2 h-[200px] lg:h-full relative overflow-hidden">
                    <motion.img 
                      src={projects[currentProject].image}
                      alt={projects[currentProject].title}
                      className="w-full h-full object-contain p-2"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 p-4 lg:p-8 
                    bg-blue-50/70 dark:bg-[#0A1021]/70 
                    border-2 border-blue-300 dark:border-blue-700
                    rounded-b-xl lg:rounded-xl backdrop-blur-sm"
                  >
                    <div className="space-y-4 relative pb-12">
                      <div>
                        <motion.p 
                          className="text-xs sm:text-sm font-medium tracking-wider mb-2 text-blue-600 dark:text-blue-400"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          FEATURED PROJECT
                        </motion.p>
                        <motion.h3 
                          className="text-lg sm:text-2xl font-bold text-blue-900 dark:text-blue-100"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          {projects[currentProject].title}
                        </motion.h3>
                      </div>
                      <motion.p 
                        className="text-xs md:text-base text-blue-700 dark:text-blue-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {projects[currentProject].description}
                      </motion.p>
                      <motion.div 
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {projects[currentProject].tags.map((tag, index) => (
                          <motion.span 
                            key={index}
                            className="px-2 py-1 text-[10px] sm:text-xs rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            whileHover={{ y: -2, backgroundColor: "var(--tag-hover-bg, #dbeafe)" }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </motion.div>
                      <motion.div 
                        className="flex gap-4 absolute bottom-0 left-0"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <motion.a
                          href={projects[currentProject].github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-900 dark:text-blue-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          aria-label="View on GitHub"
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-6 h-6 sm:w-7 sm:h-7" />
                        </motion.a>
                        <motion.a
                          href={projects[currentProject].liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-900 dark:text-blue-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          aria-label="View Live Demo"
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-6 h-6 sm:w-7 sm:h-7" />
                        </motion.a>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Desktop arrows */}
          {!isMobile && (
            <motion.button
              onClick={handleNextProject}
              className="absolute right-[-3rem] top-1/2 -translate-y-1/2 z-10 p-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-blue-100 rounded-full shadow-md hidden sm:block hover:bg-blue-50 dark:hover:bg-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          )}

          {/* Mobile navigation arrows (replacing dots) */}
          <div className="sm:hidden absolute bottom-[-3rem] left-0 right-0 flex justify-center items-center gap-8">
            <motion.button
              onClick={handlePrevProject}
              className="p-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-blue-100 rounded-full shadow-md hover:bg-blue-50 dark:hover:bg-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowLeft className="w-4 h-4" />
            </motion.button>
            
            <motion.button
              onClick={handleNextProject}
              className="p-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-blue-100 rounded-full shadow-md hover:bg-blue-50 dark:hover:bg-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Desktop dot indicators (hidden on mobile) */}
          <div className="absolute -bottom-12 left-0 right-0 hidden sm:flex justify-center gap-3">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleProjectClick(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentProject
                    ? "bg-blue-500 dark:bg-blue-400"
                    : "bg-blue-200 dark:bg.gray-600 hover:bg-blue-300 dark:hover:bg.gray-500"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                animate={index === currentProject ? { 
                  scale: [1, 1.2, 1],
                  transition: { repeat: Infinity, repeatType: "reverse", duration: 2 }
                } : {}}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;

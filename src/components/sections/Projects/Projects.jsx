import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../../data";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full">
        <h2 className="text-[2rem] md:text-6xl font-bold text-blue-900 dark:text-blue-100 mb-3 whitespace-nowrap">
          &lt; Projects /&gt;
        </h2>
        <p className="text-sm md:text-xl text-blue-700 dark:text-blue-300 max-w-3xl mb-16 text-left">
          A collection of projects that showcase my passion for building innovative and user-friendly applications.
        </p>

        <div className="relative h-[450px] md:h-[400px] perspective-[1000px]"> {/* Reduced height for laptop */}
          <button
            onClick={handlePrevProject}
            className="absolute left-[-3rem] top-1/2 -translate-y-1/2 z-10 p-2 bg-white dark:bg-gray-800 text-blue-900 dark:text-blue-100 rounded-full shadow-md hidden sm:block"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ rotateX: 90, y: 100, opacity: 0 }}
              animate={{ rotateX: 0, y: 0, opacity: 1, transition: { duration: 1.2, ease: "easeOut" } }}
              exit={{ rotateX: -90, y: -100, opacity: 0, transition: { duration: 1.2, ease: "easeIn" } }}
              className="absolute inset-0"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="group relative rounded-xl overflow-hidden bg-blue-50/50 dark:bg-[#0A1021]/50 h-full">
                <div className="flex flex-col lg:flex-row h-full">
                  <div className="w-full lg:w-1/2 h-[200px] lg:h-full">
                    <img 
                      src={projects[currentProject].image}
                      alt={projects[currentProject].title}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 p-4 lg:p-8 
                    bg-blue-50/50 dark:bg-[#0A1021]/50 
                    border-2 border-blue-300 dark:border-blue-300
                    rounded-b-xl lg:rounded-xl"
                  >
                    <div className="space-y-4 relative pb-12"> {/* Reduced bottom padding */}
                      <div>
                        <p className="text-xs sm:text-sm font-medium tracking-wider mb-2 text-blue-600 dark:text-blue-400">
                          FEATURED PROJECT
                        </p>
                        <h3 className="text-lg sm:text-2xl font-bold text-blue-900 dark:text-blue-100">
                          {projects[currentProject].title}
                        </h3>
                      </div>
                      <p className="text-xs md:text-base text-blue-700 dark:text-blue-300">
                        {projects[currentProject].description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {projects[currentProject].tags.map((tag, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 text-[10px] sm:text-xs rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4 absolute bottom-0 left-0">
                        <a
                          href={projects[currentProject].github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-900 dark:text-blue-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          aria-label="View on GitHub"
                        >
                          <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                        </a>
                        <a
                          href={projects[currentProject].liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-900 dark:text-blue-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          aria-label="View Live Demo"
                        >
                          <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={handleNextProject}
            className="absolute right-[-3rem] top-1/2 -translate-y-1/2 z-10 p-2 bg-white dark:bg-gray-800 text-blue-900 dark:text-blue-100 rounded-full shadow-md hidden sm:block"
          >
            <ArrowRight className="w-5 h-5" />
          </button>

          <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => handleProjectClick(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentProject
                    ? "bg-blue-500 dark:bg-blue-400"
                    : "bg-blue-200 dark:bg-gray-600 hover:bg-blue-300 dark:hover:bg.gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;

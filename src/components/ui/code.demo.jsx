"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { AuroraBackground } from "./aurora-background";
import { InteractiveHoverButton } from "./interactive-hover-button";
import expensetrade from '/src/projects_screenshots/expensetrade.png';
import sampleproject from '/src/projects_screenshots/sampleproject.jpg'; // Sample project image
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaJava, 
  FaPython,
  FaReact,
  FaGitAlt,
  FaCloud,
  FaBootstrap,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane
} from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiFramer, 
  SiVite, 
  SiDjango,
  SiMysql,
  SiMongodb
} from "react-icons/si";
import { 
  BsFillLightningFill,
  BsPeopleFill,
  BsClockFill
} from "react-icons/bs";
import { GiPuzzle } from "react-icons/gi";
import { SkillsCarousel } from "./3d-carousel";

export function AuroraBackgroundDemo() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  
  const words = [
    "Frontend Developer",
    "Student at PRPCEM",
    "Tech Enthusiast",
    "Problem Solver",
    "Open Source Contributor"
  ];

  const projects = [
    {
      title: "ExpenseTrade",
      description: "An all-in-one financial management platform that helps users track expenses, manage income, and receive personalized stock suggestions. Features include expense tracking, income management, data visualization, and secure authentication.",
      image: expensetrade,
      tags: ["Python", "Streamlit", "SQLite", "Data Visualization"],
      liveDemo: "https://expensetrade.streamlit.app/",
      github: "https://github.com/tushrahuja/ExpenseTrade"
    },
    {
      title: "Sample Project",
      description: "This is a sample project to test the animation and layout. It includes basic features and a simple design.",
      image: sampleproject,
      tags: ["HTML", "CSS", "JavaScript"],
      liveDemo: "#",
      github: "#"
    },
  ];

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentWord = words[wordIndex];

    const type = () => {
      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
        return;
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        return;
      }

      const nextText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);

      setText(nextText);
    };

    const typeTimer = setTimeout(type, typingSpeed);
    return () => clearTimeout(typeTimer);
  }, [text, isDeleting, wordIndex, words]);

  // Auto-flip projects
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length); // Fix: use projects.length
    }, 8000); // Changed from 5000 to 8000 (8 seconds)

    return () => clearInterval(interval);
  }, []);

  const handleProjectClick = (index) => {
    setCurrentProject(index);
  };

  const skillSections = {
    languages: {
      title: "Programming Languages",
      items: [
        { 
          name: "HTML",
          icon: FaHtml5,
          color: "#E34F26"
        },
        { 
          name: "CSS",
          icon: FaCss3Alt,
          color: "#1572B6"
        },
        { 
          name: "JavaScript",
          icon: FaJsSquare,
          color: "#F7DF1E"
        },
        { 
          name: "Java",
          icon: FaJava,
          color: "#007396"
        },
        { 
          name: "Python",
          icon: FaPython,
          color: "#3776AB"
        }
      ]
    },
    frameworks: {
      title: "Libraries & Frameworks",
      items: [
        { 
          name: "React.js",
          icon: FaReact,
          color: "#61DAFB"
        },
        { 
          name: "Bootstrap",
          icon: FaBootstrap,
          color: "#7952B3"
        },
        { 
          name: "Tailwind CSS",
          icon: SiTailwindcss,
          color: "#06B6D4"
        },
        { 
          name: "Framer Motion",
          icon: SiFramer,
          color: "#0055FF"
        },
        { 
          name: "Vite",
          icon: SiVite,
          color: "#646CFF"
        }
      ]
    },
    backend: {
      title: "Backend",
      items: [
        { 
          name: "Django",
          icon: SiDjango,
          color: "#092E20"
        }
      ]
    },
    database: {
      title: "Databases",
      items: [
        { 
          name: "MySQL",
          icon: SiMysql,
          color: "#4479A1"
        },
        { 
          name: "MongoDB",
          icon: SiMongodb,
          color: "#47A248"
        }
      ]
    },
    tools: {
      title: "Tools & Technologies",
      items: [
        { 
          name: "Git",
          icon: FaGitAlt,
          color: "#F05032"
        },
        { 
          name: "Clever Cloud",
          icon: FaCloud,
          color: "#1A82FF"
        }
      ]
    },
    profSkills: {
      title: "Professional Skills",
      items: [
        {
          name: "Problem Solving",
          icon: GiPuzzle,
          color: "#FFB627",
          description: "Breaking down complex challenges into manageable solutions"
        },
        {
          name: "Team Collaboration",
          icon: BsPeopleFill,
          color: "#0EA5E9",
          description: "Effective communication and teamwork in development projects"
        },
        {
          name: "Time Management",
          icon: BsClockFill,
          color: "#22C55E",
          description: "Efficient project planning and deadline management"
        }
      ]
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-white dark:bg-black">
      <AuroraBackground className="fixed inset-0 z-0" />
      <div className="relative z-10 w-full">
        <div className="max-w-[90%] mx-auto px-6">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="flex flex-col gap-8 pt-32"
          >
            <div className="flex flex-col gap-6">
              <h1 className="text-[6rem] md:text-[7.5rem] font-bold tracking-tight leading-none -ml-3 text-blue-900 dark:text-blue-100 mb-4">
               TUSHAR AHUJA 
              </h1>
              <div className="text-3xl md:text-4xl font-normal text-blue-800 dark:text-blue-200 flex items-center mb-4">
                &lt; {text}| /&gt;
                <span className="animate-pulse ml-1"></span>
              </div>
              <p className="text-xl md:text-2xl text-blue-700 dark:text-blue-300 max-w-3xl mt-4 mb-4">
                Hi, I'm Tushar Ahuja. A passionate developer who loves to build things for the web. I enjoy turning complex problems into simple, beautiful and intuitive solutions.
              </p>
              <div className="flex items-center mt-4 space-x-4">
                <InteractiveHoverButton 
                  text="Get in touch"
                  className="text-blue-900 dark:text-blue-100 border-blue-200 dark:border-blue-800 text-lg font-semibold w-48 backdrop-blur-sm hover:bg-blue-50 dark:hover:bg-blue-900/20"
                />
                <InteractiveHoverButton 
                  text="Get Resume"
                  className="text-blue-900 dark:text-blue-100 border-blue-200 dark:border-blue-800 text-lg font-semibold w-48 backdrop-blur-sm hover:bg-blue-50 dark:hover:bg-blue-900/20"
                />
              </div>
            </div>
          </motion.div>

          {/* Tools & Skills Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="pt-40"
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

          {/* Showcase Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="py-32"
          >
            <div className="w-full">
              <h2 className="text-5xl md:text-6xl font-bold text-blue-900 dark:text-blue-100 mb-3">
              &lt; Projects /&gt;
              </h2>
              <p className="text-lg md:text-xl text-blue-700 dark:text-blue-300 max-w-3xl mb-16">
                A collection of projects that showcase my passion for building innovative and user-friendly applications.
              </p>

              {/* Flipping Projects Container */}
              <div className="relative h-[450px] perspective-[1000px]"> {/* Adjusted height */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProject}
                    initial={{ 
                      rotateX: 90,
                      y: 100,
                      opacity: 0 
                    }}
                    animate={{ 
                      rotateX: 0,
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 1.2,
                        ease: "easeOut"
                      }
                    }}
                    exit={{ 
                      rotateX: -90,
                      y: -100,
                      opacity: 0,
                      transition: {
                        duration: 1.2,
                        ease: "easeIn"
                      }
                    }}
                    className="absolute inset-0"
                  >
                    {/* Project Card */}
                    <div className="group relative rounded-xl overflow-hidden bg-blue-50/50 dark:bg-[#0A1021]/50 border border-blue-200/50 dark:border-blue-800/50 backdrop-blur-sm h-full transform-style-3d hover:scale-[1.02] transition-transform duration-300">
                      <div className="flex flex-col lg:flex-row h-full">
                        {/* Project Image */}
                        <div className="lg:w-1/2 overflow-hidden"> {/* Adjusted width */}
                          <div className="relative h-full w-full"> {/* Fix: h-full */}
                            <img 
                              src={projects[currentProject].image}
                              alt={projects[currentProject].title}
                              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" // Updated styles
                            />
                          </div>
                        </div>

                        {/* Project Details */}
                        <div className="border bg-white dark:bg-gray-900 text-blue-900 dark:text-blue-100 md:w-1/2 rounded-lg overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl p-8"> {/* Updated styles */}
                          <div className="space-y-6"> {/* Increased spacing */}
                            <div>
                              <p className="text-blue-600 dark:text-blue-400 text-lg font-medium tracking-wider mb-2"> {/* Increased font size */}
                                FEATURED PROJECT
                              </p>
                              <h3 className="text-3xl font-bold text-blue-900 dark:text-blue-100"> {/* Increased font size */}
                                {projects[currentProject].title}
                              </h3>
                            </div>

                            <p className="text-blue-700 dark:text-blue-300 text-lg"> {/* Increased font size */}
                              {projects[currentProject].description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                              {projects[currentProject].tags.map((tag, index) => (
                                <span 
                                  key={index}
                                  className="px-2 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <div className="flex gap-4">
                              <a
                                href={projects[currentProject].github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-900 dark:text-blue-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                aria-label="View on GitHub"
                              >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
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
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

                {/* Navigation Dots */}
                <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-3">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleProjectClick(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentProject
                          ? "bg-blue-500 dark:bg-blue-400"
                          : "bg-blue-200 dark:bg-gray-600 hover:bg-blue-300 dark:hover:bg-gray-500"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <div id="contact" className="relative min-h-screen w-full py-16">
            <div className="relative z-10 max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left Side (Contact Info) */}
                <div className="flex flex-col justify-center">
                  <h2 className="text-5xl font-bold text-blue-900 dark:text-blue-100 mb-4">
                  &lt; Get in Touch /&gt;
                  </h2>
                  <p className="text-lg text-blue-700 dark:text-blue-300 mb-8">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out to me using the form or contact details below.
                  </p>
                  <div className="flex items-center mb-4">
                    <FaEnvelope className="text-blue-900 dark:text-blue-100 mr-3" />
                    <span className="text-lg text-blue-700 dark:text-blue-300">tusharahuja.dev@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="text-blue-900 dark:text-blue-100 mr-3" />
                    <span className="text-lg text-blue-700 dark:text-blue-300">Amravati, Maharashtra, India</span>
                  </div>
                </div>

                {/* Right Side (Contact Form) */}
                <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
                  <form>
                    <div className="mb-6">
                      <label htmlFor="name" className="block text-lg font-medium text-blue-900 dark:text-blue-100 mb-2">Name</label>
                      <input type="text" id="name" className="w-full px-4 py-2 border border-blue-200 dark:border-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 text-blue-900 dark:text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="email" className="block text-lg font-medium text-blue-900 dark:text-blue-100 mb-2">Email</label>
                      <input type="email" id="email" className="w-full px-4 py-2 border border-blue-200 dark:border-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 text-blue-900 dark:text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-lg font-medium text-blue-900 dark:text-blue-100 mb-2">Message</label>
                      <textarea id="message" rows="4" className="w-full px-4 py-2 border border-blue-200 dark:border-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 text-blue-900 dark:text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    </div>
                    <button type="submit" className="flex items-center justify-center w-full px-4 py-2 bg-blue-900 dark:bg-blue-100 text-white dark:text-blue-900 font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-300 transition-colors">
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
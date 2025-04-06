import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { InteractiveHoverButton } from "../../ui/Button";
import { words } from "../../../data";

const HeroSection = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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

  const jumpToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView();
    }
  };

  return (
    <motion.div
      id="home"
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="flex flex-col gap-6 pt-16 pb-8 md:pb-24"
    >
      {/* Mobile Layout */}
      <div className="flex flex-col items-center px-4 lg:hidden">
        <motion.h1 
          className="text-4xl font-bold text-blue-900 dark:text-blue-100 mb-6 text-center whitespace-nowrap"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          TUSHAR AHUJA
        </motion.h1>
        <motion.div 
          className="w-48 h-48 rounded-full border-4 border-blue-900 dark:border-blue-100 mb-6 overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="/images/pfp3.jpg"
            alt="Tushar Ahuja"
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>
        <motion.div 
          className="text-2xl text-blue-800 dark:text-blue-200 mb-6 text-center min-h-[3rem] w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          &lt; {text}| /&gt;
          <span className="animate-pulse ml-1"></span>
        </motion.div>
        <motion.p 
          className="text-lg text-blue-700 dark:text-blue-300 text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Hi, I'm Tushar Ahuja. A passionate Full Stack Developer and a Computer Science Engineering student based in Amravati, Maharashtra.
          I love building web applications and solving problems using technology.
        </motion.p>
        <motion.div 
          className="flex flex-col w-full gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <InteractiveHoverButton 
            text="Get in touch"
            onClick={() => jumpToSection('contact')}
            className="text-blue-900 dark:text-blue-100 border-blue-200 dark:border-blue-800 text-base font-semibold w-full backdrop-blur-sm hover:bg-blue-50 dark:hover:bg-blue-900/20 px-6 py-3"
          />
          <InteractiveHoverButton 
            text="Get Resume"
            className="text-blue-900 dark:text-blue-100 border-blue-200 dark:border-blue-800 text-base font-semibold w-full backdrop-blur-sm hover:bg-blue-50 dark:hover:bg-blue-900/20 px-6 py-3"
          />
        </motion.div>
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:flex items-center justify-between">
        <motion.div 
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-[7rem] font-bold tracking-tight leading-none -ml-3 text-blue-900 dark:text-blue-100 mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            TUSHAR AHUJA
          </motion.h1>
          <motion.div 
            className="text-3xl md:text-4xl font-normal text-blue-800 dark:text-blue-200 flex items-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            &lt; {text}| /&gt;
            <span className="animate-pulse ml-1"></span>
          </motion.div>
          <motion.p 
            className="text-xl md:text-2xl text-blue-700 dark:text-blue-300 max-w-3xl mt-4 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Hi, I'm Tushar Ahuja. A passionate Full Stack Developer and a Computer Science Engineering student based in Amravati, Maharashtra.
            I love building web applications and solving problems using technology.
          </motion.p>
          <motion.div 
            className="flex items-center mt-4 space-x-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <InteractiveHoverButton 
              text="Get in touch"
              onClick={() => jumpToSection('contact')}
              className="text-blue-900 dark:text-blue-100 border-blue-200 dark:border-blue-800 text-lg font-semibold w-48 backdrop-blur-sm hover:bg-blue-50 dark:hover:bg-blue-900/20"
            />
            <InteractiveHoverButton 
              text="Get Resume"
              className="text-blue-900 dark:text-blue-100 border-blue-200 dark:border-blue-800 text-lg font-semibold w-48 backdrop-blur-sm hover:bg-blue-50 dark:hover:bg-blue-900/20"
            />
          </motion.div>
        </motion.div>
        <motion.div 
          className="w-96 h-96 rounded-full overflow-hidden border-4 border-blue-900 dark:border-blue-100 -ml-16 -mt-12"
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        >
          <img src="/images/pfp3.jpg" alt="Tushar Ahuja" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;

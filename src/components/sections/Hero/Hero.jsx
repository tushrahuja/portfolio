import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { InteractiveHoverButton } from "../../ui/Button";
import { words } from "../../../data";
import pfp from "/src/images/pfp3.jpg"

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

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

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
      className="flex flex-col gap-6 pt-16 pb-24"
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-6">
          <h1 className="text-[6rem] md:text-[7.5rem] font-bold tracking-tight leading-none -ml-3 text-blue-900 dark:text-blue-100 mb-4">
            TUSHAR AHUJA
          </h1>
          <div className="text-3xl md:text-4xl font-normal text-blue-800 dark:text-blue-200 flex items-center mb-4">
            &lt; {text}| /&gt;
            <span className="animate-pulse ml-1"></span>
          </div>
          <p className="text-xl md:text-2xl text-blue-700 dark:text-blue-300 max-w-3xl mt-4 mb-4">
            Hi, I'm Tushar Ahuja. A passionate Full Stack Developer and a Computer Science Engineering student based in Amravati, Maharashtra.
            I love building web applications and solving problems using technology.
          </p>
          <div className="flex items-center mt-4 space-x-4">
            <InteractiveHoverButton 
              text="Get in touch"
              onClick={() => jumpToSection('contact')}
              className="text-blue-900 dark:text-blue-100 border-blue-200 dark:border-blue-800 text-lg font-semibold w-48 backdrop-blur-sm hover:bg-blue-50 dark:hover:bg-blue-900/20"
            />
            <InteractiveHoverButton 
              text="Get Resume"
              className="text-blue-900 dark:text-blue-100 border-blue-200 dark:border-blue-800 text-lg font-semibold w-48 backdrop-blur-sm hover:bg-blue-50 dark:hover:bg-blue-900/20"
            />
          </div>
        </div>
        <div className="w-96 h-96 rounded-full overflow-hidden border-4 border-blue-900 dark:border-blue-100 -ml-16 -mt-12">
          <img src={pfp} alt="Tushar Ahuja" className="w-full h-full object-cover" />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";
import { HomeIcon, FolderIcon, UserIcon, Menu } from "lucide-react";

export function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const items = [
    { name: "Home", url: "#home", icon: HomeIcon },
    { name: "About", url: "#about", icon: UserIcon },
    { name: "Projects", url: "#projects", icon: FolderIcon },
  ];

  const handleClick = (name, url) => {
    const element = document.querySelector(url);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsOpen(false);
      // Force active section update
      setTimeout(() => {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id.charAt(0).toUpperCase() + section.id.slice(1));
          }
        });
      }, 100);
    }
  };

  return (
    <div className="fixed top-2 right-8 z-[100] mt-8">
      {/* Mobile Menu */}
      <div className="md:hidden">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-background/5 border border-blue-200 dark:border-blue-800 backdrop-blur-lg rounded-full"
          whileTap={{ scale: 0.95 }}
        >
          <Menu className="h-6 w-6 text-blue-900 dark:text-blue-100" />
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 py-2 w-48 bg-white/10 border border-blue-200 dark:border-blue-800 backdrop-blur-lg rounded-xl shadow-lg"
            >
              {items.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.name;
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => handleClick(item.name, item.url)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.2 }}
                    className={cn(
                      "flex items-center w-full px-4 py-2 text-left",
                      "text-blue-900 dark:text-blue-100 hover:bg-blue-50/50 dark:hover:bg-blue-900/20",
                      isActive && "bg-blue-50/50 dark:bg-blue-900/20"
                    )}
                  >
                    <Icon className="w-5 h-5 mr-2" />
                    {item.name}
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Menu with Tubelight Effect */}
      <motion.div 
        className="hidden md:flex items-center gap-3 bg-background/5 border border-blue-200 dark:border-blue-800 backdrop-blur-lg py-2 px-2 rounded-full shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.name;

          return (
            <motion.button
              key={item.name}
              onClick={() => handleClick(item.name, item.url)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-blue-900 dark:text-blue-100 hover:text-blue-800 dark:hover:text-blue-200",
                isActive && "bg-blue-50/50 dark:bg-blue-900/20"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon
                  size={18}
                  strokeWidth={2.5}
                  className="text-blue-900 dark:text-blue-100"
                />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-blue-500/5 dark:bg-blue-400/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <motion.div 
                    className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-500 dark:bg-blue-400 rounded-t-full"
                    animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <div className="absolute w-12 h-6 bg-blue-500/20 dark:bg-blue-400/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-blue-500/20 dark:bg-blue-400/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-blue-500/20 dark:bg-blue-400/20 rounded-full blur-sm top-0 left-2" />
                  </motion.div>
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
}

export const TubelightNavbar = Navbar;

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";
import { HomeIcon, FolderIcon, UserIcon, Menu } from "lucide-react";

export function NavBar({ activeSection }) {
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
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-background/5 border border-blue-200 dark:border-blue-800 backdrop-blur-lg rounded-full"
        >
          <Menu className="h-6 w-6 text-blue-900 dark:text-blue-100" />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute right-0 mt-2 py-2 w-48 bg-white/10 border border-blue-200 dark:border-blue-800 backdrop-blur-lg rounded-xl"
            >
              {items.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.name;
                return (
                  <button
                    key={item.name}
                    onClick={() => handleClick(item.name, item.url)}
                    className={cn(
                      "flex items-center w-full px-4 py-2 text-left",
                      "text-blue-900 dark:text-blue-100 hover:bg-blue-50/50 dark:hover:bg-blue-900/20",
                      isActive && "bg-blue-50/50 dark:bg-blue-900/20"
                    )}
                  >
                    <Icon className="w-5 h-5 mr-2" />
                    {item.name}
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Menu with Tubelight Effect */}
      <div className="hidden md:flex items-center gap-3 bg-background/5 border border-blue-200 dark:border-blue-800 backdrop-blur-lg py-2 px-2 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.name;

          return (
            <button
              key={item.name}
              onClick={() => handleClick(item.name, item.url)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-blue-900 dark:text-blue-100 hover:text-blue-800 dark:hover:text-blue-200",
                isActive && "bg-blue-50/50 dark:bg-blue-900/20"
              )}
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
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-500 dark:bg-blue-400 rounded-t-full">
                    <div className="absolute w-12 h-6 bg-blue-500/20 dark:bg-blue-400/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-blue-500/20 dark:bg-blue-400/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-blue-500/20 dark:bg-blue-400/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export const TubelightNavbar = NavBar;

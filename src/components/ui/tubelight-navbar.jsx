"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function NavBar({ items, className }) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 z-[100] mt-8",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-background/5 border border-blue-200 dark:border-blue-800 backdrop-blur-lg py-2 px-2 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(item.name);
              }}
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
            </a>
          );
        })}
      </div>
    </div>
  );
} 
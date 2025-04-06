import React from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = React.useState(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem("theme");
    // Return saved theme or default to "dark"
    return savedTheme || "dark";
  });

  React.useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    // Save to localStorage whenever theme changes
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <motion.button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-9 left-8 z-50 rounded-full p-2.5 bg-white/10 dark:bg-black/10 border border-white/20 dark:border-gray-800 backdrop-blur-lg shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, rotate: 15 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-gray-300 hover:text-white transition-colors" />
      ) : (
        <Moon className="h-5 w-5 text-gray-600 hover:text-black transition-colors" />
      )}
    </motion.button>
  );
}
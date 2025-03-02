"use client";
import React from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-8 right-8 z-50 rounded-full p-2.5 bg-white/10 dark:bg-black/10 border border-white/20 dark:border-gray-800 backdrop-blur-lg shadow-lg hover:scale-105 transition-transform"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-gray-300 hover:text-white transition-colors" />
      ) : (
        <Moon className="h-5 w-5 text-gray-600 hover:text-black transition-colors" />
      )}
    </button>
  );
} 
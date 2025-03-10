import React from "react";
import { AuroraBackground } from "./components/ui/AuroraBackground";
import { NavBar } from "./components/layout/NavBar";
import { Footer } from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Education from "./components/sections/Education";
import { useActiveSection } from "./hooks/useActiveSection";
import { ThemeToggle } from "./components/ui/ThemeToggle";

export function App() {
  const activeSection = useActiveSection();

  return (
    <div className="relative min-h-screen w-full bg-white dark:bg-black">
      <AuroraBackground className="fixed inset-0 z-0" />
      <ThemeToggle />
      <NavBar activeSection={activeSection} />
      <div className="relative z-10 w-full pt-16">
        <div className="max-w-[90%] mx-auto px-6">
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

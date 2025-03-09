"use client";
import React from "react";
import { AuroraBackground } from "./aurora-background";
import { TubelightNavbar } from "./tubelight-navbar";
import { Footer } from "./footer";
import HeroSection from "./HeroSection";
import Projects from "./projects";
import ToolsAndSkills from "./ToolsAndSkills";
import AboutContent from "./AboutContent";
import ContactSection from "./ContactSection";
import EducationSection from "./EducationSection";
import { useActiveSection } from "../../hooks/useActiveSection";

export function AuroraBackgroundDemo() {
  const activeSection = useActiveSection();

  return (
    <div className="relative min-h-screen w-full bg-white dark:bg-black">
      <AuroraBackground className="fixed inset-0 z-0" />
      <TubelightNavbar activeSection={activeSection} />
      <div className="relative z-10 w-full pt-16">
        <div className="max-w-[90%] mx-auto px-6">
          <HeroSection />
          <AboutContent />
          <EducationSection />
          <ToolsAndSkills />
          <Projects />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}
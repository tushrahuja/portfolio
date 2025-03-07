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

export function AuroraBackgroundDemo() {
  return (
    <div className="relative min-h-screen w-full bg-white dark:bg-black">
      <AuroraBackground className="fixed inset-0 z-0" />
      <TubelightNavbar />
      <div className="relative z-10 w-full pt-16">
        <div className="max-w-[90%] mx-auto px-6">
          <HeroSection />
          <AboutContent />
          <ToolsAndSkills />
          <Projects />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}
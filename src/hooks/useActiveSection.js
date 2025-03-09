import { useState, useEffect } from 'react';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects'];
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      const sectionElements = sections.map(id => ({
        id,
        element: document.getElementById(id),
      }));

      // Find the section that takes up most of the viewport
      const currentSection = sectionElements.reduce((acc, { id, element }) => {
        if (!element) return acc;

        const rect = element.getBoundingClientRect();
        const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
        const percentVisible = visibleHeight / element.offsetHeight;

        return percentVisible > acc.percentVisible
          ? { id, percentVisible }
          : acc;
      }, { id: activeSection.toLowerCase(), percentVisible: 0 });

      // Only update if we have a valid section with significant visibility
      if (currentSection.percentVisible > 0.2) {
        const newActiveSection = currentSection.id.charAt(0).toUpperCase() + currentSection.id.slice(1);
        if (newActiveSection !== activeSection) {
          setActiveSection(newActiveSection);
        }
      }
    };

    // Run once on mount to set initial active section
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]); // Add activeSection as dependency

  return activeSection;
}

"use client"

import { memo, useEffect, useLayoutEffect, useState, useRef } from "react"
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

const useMediaQuery = (query, defaultValue = false) => {
  const [matches, setMatches] = useState(defaultValue);

  useIsomorphicLayoutEffect(() => {
    const media = window.matchMedia(query);
    const updateMatch = () => setMatches(media.matches);
    updateMatch();
    media.addEventListener("change", updateMatch);
    return () => media.removeEventListener("change", updateMatch);
  }, [query]);

  return matches;
};

const duration = 0.15
const transition = { duration, ease: [0.32, 0.72, 0, 1] }
const transitionOverlay = { duration: 0.5, ease: [0.32, 0.72, 0, 1] }

const SkillCard = ({ title, items }) => (
  <motion.div
    className="bg-blue-50/90 dark:bg-[#0A1021]/90 backdrop-blur-sm rounded-xl 
               p-4 lg:p-8 w-[300px] sm:w-[320px] lg:w-[800px]
               border border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600"
  >
    <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-3 sm:mb-5 lg:mb-8 text-blue-900 dark:text-blue-100">
      {title}
    </h3>
    <div className="flex flex-wrap gap-3 lg:gap-5">
      {items.map((item) => (
        <div 
          key={item.name} 
          className="flex items-center gap-2 lg:gap-4 p-3 lg:p-4 
                     bg-white/80 dark:bg-[#1E293B]/50 
                     border border-blue-100 dark:border-[#1E293B]/50 
                     rounded-lg hover:border-blue-300 dark:hover:border-blue-500/30"
        >
          <item.icon className="w-6 h-6 lg:w-8 lg:h-8" style={{ color: item.color }} />
          <span className="text-sm lg:text-xl text-blue-900 dark:text-blue-100">{item.name}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

const Carousel = memo(
  ({
    controls,
    sections,
    isCarouselActive,
  }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const autoRotateInterval = useRef(null);
    const isMobile = useMediaQuery("(max-width: 768px)");

    // Auto-rotate function
    const startAutoRotate = () => {
      if (autoRotateInterval.current) {
        clearInterval(autoRotateInterval.current);
      }
      autoRotateInterval.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
      }, 7000); // Increased to 7 seconds for better readability
    };

    useEffect(() => {
      startAutoRotate();
      return () => {
        if (autoRotateInterval.current) {
          clearInterval(autoRotateInterval.current);
        }
      };
    }, []);

    const handleInteractionStart = () => {
      if (autoRotateInterval.current) {
        clearInterval(autoRotateInterval.current);
      }
    };

    const handleInteractionEnd = () => {
      startAutoRotate();
    };

    const handleDrag = (_, info) => {
      if (!isCarouselActive) return;
      
      if (info.offset.x > 100) {
        handleInteractionStart();
        setDirection(-1);
        setCurrentIndex((prev) => (prev === 0 ? sections.length - 1 : prev - 1));
        handleInteractionEnd();
      } else if (info.offset.x < -100) {
        handleInteractionStart();
        setDirection(1);
        setCurrentIndex((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
        handleInteractionEnd();
      }
    };

    const handleLeftClick = () => {
      handleInteractionStart();
      setDirection(-1);
      setCurrentIndex((prev) => (prev === 0 ? sections.length - 1 : prev - 1));
      handleInteractionEnd();
    };

    const handleRightClick = () => {
      handleInteractionStart();
      setDirection(1);
      setCurrentIndex((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
      handleInteractionEnd();
    };

    return (
      <div 
        className={`flex h-full items-center justify-center overflow-hidden ${
          isMobile ? "gap-0" : "gap-8" // Removed gap for mobile view
        }`}
        onMouseEnter={handleInteractionStart}
        onMouseLeave={handleInteractionEnd}
        onTouchStart={handleInteractionStart}
        onTouchEnd={handleInteractionEnd}
      >
        {/* Only show navigation arrows on non-mobile devices */}
        {!isMobile && (
          <button
            onClick={handleLeftClick}
            className="absolute left-0 md:left-2 z-10 p-1 md:p-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-blue-100 rounded-full shadow-md scale-75 md:scale-100 -translate-x-1 md:translate-x-0 hover:bg-blue-50 dark:hover:bg-gray-700"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        )}
        
        <div className={`relative w-[320px] md:w-[800px] ${isMobile ? "h-[520px]" : "h-[520px]"}`}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: direction > 0 ? 1000 : -1000 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -1000 : 1000 }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={handleDrag}
              className="absolute w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
            >
              <SkillCard
                title={sections[currentIndex].title}
                items={sections[currentIndex].items}
              />
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Only show navigation arrows on non-mobile devices */}
        {!isMobile && (
          <button
            onClick={handleRightClick}
            className="absolute right-0 md:right-2 z-10 p-1 md:p-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-blue-100 rounded-full shadow-md scale-75 md:scale-100 translate-x-1 md:translate-x-0 hover:bg-blue-50 dark:hover:bg-gray-700"
          >
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        )}
        
        <div className="absolute bottom-4 md:bottom-0 left-0 right-0 flex justify-center gap-3 pb-4 md:pb-8">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                handleInteractionStart();
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
                handleInteractionEnd();
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-blue-500 dark:bg-blue-400"
                  : "bg-blue-200 dark:bg-gray-600 hover:bg-blue-300 dark:hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    );
  }
);

const ItemsGrid = ({ items }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {items.map((item) => (
      <motion.div
        key={item.name}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/5 dark:bg-zinc-800/50 p-4 rounded-xl flex items-center gap-3"
      >
        <item.icon 
          className="w-6 h-6"
          style={{ color: item.color }}
        />
        <span className="text-zinc-900 dark:text-white font-medium">
          {item.name}
        </span>
      </motion.div>
    ))}
  </div>
);

export function SkillsCarousel({ skillSections }) {
  const controls = useAnimation()
  const sections = Object.values(skillSections)
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <motion.div layout className={`relative ${isMobile ? '-mt-0' : '-mt-8'}`}> {/* Reverted back to original values */}
      <div className={`relative ${isMobile ? 'h-[350px]' : 'h-[500px]'} w-full`}> {/* Removed added padding */}
        <Carousel
          controls={controls}
          sections={sections}
          isCarouselActive={true}
        />
      </div>
    </motion.div>
  )
}
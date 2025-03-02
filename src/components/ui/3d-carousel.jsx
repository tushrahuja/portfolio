"use client"

import { memo, useEffect, useLayoutEffect, useState, useRef } from "react"
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion"

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
    className="bg-blue-50/90 dark:bg-[#0A1021]/90 backdrop-blur-sm rounded-xl p-12 border border-blue-200 dark:border-[#1E293B] hover:border-blue-400 dark:hover:border-[#3B82F6] transition-colors duration-200 w-[1000px]"
    whileHover={{ scale: 1.02 }}
  >
    <h3 className="text-5xl font-bold text-blue-900 dark:text-white mb-10 border-b border-blue-200 dark:border-[#1E293B] pb-4">
      {title}
    </h3>
    <div className="flex flex-wrap gap-5">
      {items.map((item) => (
        <div 
          key={item.name}
          className="flex items-center gap-4 bg-white/80 dark:bg-[#1E293B]/50 px-6 py-5 rounded-lg border border-blue-100 dark:border-[#1E293B]/50 hover:border-blue-300 dark:hover:border-blue-500/30 transition-colors duration-200"
        >
          <item.icon 
            className="w-8 h-8"
            style={{ color: item.color }}
          />
          <span className="text-blue-900 dark:text-white/90 text-xl font-medium">
            {item.name}
          </span>
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

    return (
      <div 
        className="flex h-full items-center justify-center overflow-hidden"
        onMouseEnter={handleInteractionStart}
        onMouseLeave={handleInteractionEnd}
        onTouchStart={handleInteractionStart}
        onTouchEnd={handleInteractionEnd}
      >
        <div className="relative w-[1000px] h-[600px]">
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
        
        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-3 pb-8">
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

  return (
    <motion.div layout className="relative -mt-8">
      <div className="relative h-[600px] w-full">
        <Carousel
          controls={controls}
          sections={sections}
          isCarouselActive={true}
        />
      </div>
    </motion.div>
  )
} 
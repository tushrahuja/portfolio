"use client";
import { memo, useEffect, useLayoutEffect, useState } from "react";
import { motion, useAnimation, useMotionValue, useTransform, AnimatePresence } from "framer-motion";

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

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

const CategoryCard = ({ title, items, onClick }) => (
  <motion.div
    onClick={onClick}
    className="group relative bg-white/10 dark:bg-zinc-900/50 backdrop-blur-sm rounded-xl p-8 border border-zinc-200/20 dark:border-zinc-700/50 overflow-hidden hover:border-zinc-300/30 dark:hover:border-zinc-600/50 transition-all w-[300px] h-[200px] cursor-pointer"
    whileHover={{ 
      scale: 1.05,
      rotateX: 10,
      rotateY: 10,
      transition: { duration: 0.2 }
    }}
    style={{ transformStyle: "preserve-3d" }}
  >
    <div className="relative h-full flex flex-col items-center justify-center">
      <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {items.length} {items.length === 1 ? 'skill' : 'skills'}
      </p>
    </div>
    <div 
      className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity" 
      style={{ 
        backgroundImage: 'linear-gradient(to bottom right, rgba(255,255,255,0.1), transparent)',
        transform: "translateZ(-1px)"
      }}
    />
  </motion.div>
);

const ItemsGrid = ({ items, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    onClick={onClose}
  >
    <motion.div 
      className="bg-white/10 dark:bg-zinc-900/90 p-8 rounded-2xl max-w-4xl w-full mx-4 backdrop-blur-md"
      onClick={e => e.stopPropagation()}
    >
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
    </motion.div>
  </motion.div>
);

export function SkillsCarousel({ skillSections }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="relative">
      <div className="flex gap-6 overflow-x-auto pb-8 px-4 snap-x snap-mandatory">
        {Object.entries(skillSections).map(([key, section]) => (
          <div key={key} className="snap-center shrink-0">
            <CategoryCard
              title={section.title}
              items={section.items}
              onClick={() => setSelectedCategory(section)}
            />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCategory && (
          <ItemsGrid 
            items={selectedCategory.items} 
            onClose={() => setSelectedCategory(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
} 
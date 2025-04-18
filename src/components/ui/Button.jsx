import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

const InteractiveHoverButton = React.forwardRef(({ text = "Button", className, onClick, ...props }, ref) => {
  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      className={cn(
        "group relative w-44 cursor-pointer overflow-hidden rounded-full border bg-transparent p-3 text-center font-semibold",
        className,
      )}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      <span className="relative z-20 inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {text}
      </span>
      <div className="absolute top-0 z-20 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 text-white dark:text-black">
        <span>{text}</span>
        <ArrowRight className="h-5 w-5" />
      </div>
      <motion.div 
        className="absolute right-0 bottom-0 h-2 w-2 scale-[1] rounded-lg bg-blue-900 dark:bg-blue-100 transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8]"
        initial={{ scale: 1 }}
        whileHover={{ 
          boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
          transition: { duration: 0.3 }
        }}
      ></motion.div>
    </motion.button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const ContainerScroll = ({ titleComponent, children }) => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: isMobile 
      ? ["start 80%", "center 20%"]  // Start animation earlier on mobile (at 80% from bottom of viewport)
      : ["start 60%", "center center"]  // Keep original timing for laptop
  });

  const scaleDimensions = () => {
    return isMobile ? [0.8, 1] : [1.05, 1];
  };

  const rotate = useTransform(
    scrollYProgress, 
    [0, 1], 
    isMobile ? [40, 0] : [30, 0]  // Increased initial rotation for laptop
  );
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[45rem] md:h-[80rem] flex flex-col items-center justify-center relative p-0" // Removed pt-20 to eliminate extra space
      ref={containerRef}
    >
      <Header translate={translate} titleComponent={titleComponent} />
      <div
        className="w-full relative flex items-center justify-center"
        style={{
          perspective: "1000px",
        }}
      >
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({ rotate, scale, translate, children }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl mx-auto h-[35rem] md:h-[60rem] w-[98vw] md:w-full border-4 border-black p-1 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl" // Kept borders intact
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-black dark:bg-zinc-900 border-4 border-lightblue dark:border-gray-600">
        {children}
      </div>
    </motion.div>
  );
};

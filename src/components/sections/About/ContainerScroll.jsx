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
      ? ["start 95%", "end 20%"]  // Early trigger for mobile
      : ["start 60%", "center center"]  // Adjusted laptop trigger points
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
      className="h-[45rem] md:h-[65rem] flex flex-col items-center justify-center relative p-0 pt-20 md:p-10" // Added pt-20 for mobile only
      ref={containerRef}
    >
      <Header translate={translate} titleComponent={titleComponent} />
      <div
        className="w-full relative flex items-center justify-center -mt-16 md:-mt-20"
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
      className="max-w-5xl -mt-12 mx-auto h-[35rem] md:h-[40rem] w-[98vw] md:w-full border-4 border-black p-1 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl" // Increased mobile height
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-black dark:bg-zinc-900 md:rounded-2xl p-1 md:p-4 border-4 border-lightblue dark:border-gray-600">
        {children}
      </div>
    </motion.div>
  );
};

"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children
}) => {
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

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: isMobile 
      ? ["start 90%", "center 30%"]  // Adjusted animation trigger points
      : ["start 20%", "center 80%"]  // Changed from [40%, 70%] to [20%, 80%] for longer animation
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  // Add shadow transform
  const shadowOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    ['0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
     '0 0 #0000002d, 0 4px 10px #0000002a, 0 15px 15px #00000022, 0 35px 25px #00000016, 0 60px 30px #0000000a, 0 95px 35px #00000003']
  );

  return (
    <div
      className={`${isMobile ? 'h-[50rem] mt-8' : 'h-[80rem]'} flex items-center justify-center relative p-0 w-full`} // Keep container height and margin
      ref={containerRef}
    >
      <div
        className="py-0 w-full relative flex flex-col items-center justify-center"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale} shadowOpacity={shadowOpacity} isMobile={isMobile}>
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
      className="div max-w-5xl mx-auto text-center mb-0" // Removed all margin
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  children,
  isMobile,
  shadowOpacity
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow: shadowOpacity, // Use dynamic shadow
      }}
      className={`${
        isMobile 
          ? 'h-[40rem] w-[88vw] px-2 mx-[6vw] -mt-20' // Added negative top margin to reduce space
          : 'h-[45rem] w-[85%] p-4 mx-auto' 
      } border-4 border-black bg-[#222222] rounded-[30px] shadow-2xl`}
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-black dark:bg-zinc-900 border-4 border-lightblue dark:border-gray-600">
        {children}
      </div>
    </motion.div>
  );
};

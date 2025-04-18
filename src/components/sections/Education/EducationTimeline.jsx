import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const EducationTimeline = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 50%", "end 50%"], // Adjusted start value to 50%
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div id="education" className="w-full">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-4 pb-16"
        ref={containerRef}
      >
        <div className="w-full">
          <div ref={ref} className="space-y-12 relative">
            <div className="flex items-start">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black z-20 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <div className="ml-12 md:ml-16 w-full"> {/* Reduced margin */}
                <div className="bg-white/80 dark:bg-gray-900/80 rounded-xl p-3 md:p-4 border border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <h3 className="text-base md:text-xl font-bold text-blue-900 dark:text-blue-100"> {/* Reduced text size */}
                    BE in Computer Science Engineering @P. R. Pote College of Engineering & Management
                  </h3>
                  <p className="text-md text-blue-700 dark:text-blue-300 mt-1">
                    2023-2026 | Amravati, Maharashtra
                  </p>
                  <p className="text-md text-blue-700 dark:text-blue-300 mt-1">
                    Relevant courses included DSA, AI, Web Development, OOP, Networking, DBMS
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-start">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black z-20 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <div className="ml-12 md:ml-16 w-full"> {/* Reduced margin */}
                <div className="bg-white/80 dark:bg-gray-900/80 rounded-xl p-3 md:p-4 border border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <h3 className="text-base md:text-xl font-bold text-blue-900 dark:text-blue-100"> {/* Reduced text size */}
                    Diploma in E&TC @Government Polytechnic
                  </h3>
                  <p className="text-md text-blue-700 dark:text-blue-300 mt-1">
                    2021-2023 | Amravati, Maharashtra
                  </p>
                  <p className="text-md text-blue-700 dark:text-blue-300 mt-1">
                  Relevant courses included Microcontrollers, IoT, Embedded Systems, Networks
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-start">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black z-20 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <div className="ml-12 md:ml-16 w-full"> {/* Reduced margin */}
                <div className="bg-white/80 dark:bg-gray-900/80 rounded-xl p-3 md:p-4 border border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <h3 className="text-base md:text-xl font-bold text-blue-900 dark:text-blue-100"> {/* Reduced text size */}
                    SSC @Golden Kids English High School
                  </h3>
                  <p className="text-md text-blue-700 dark:text-blue-300 mt-1">
                    2020 | Amravati, Maharashtra
                  </p>
                  <p className="text-md text-blue-700 dark:text-blue-300 mt-1">
                    Percentage: 79.80%
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                height: height + "px",
              }}
              className="absolute left-[1.85rem] -top-8 overflow-hidden w-[2px] z-10 bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
            >
              <motion.div
                style={{
                  height: heightTransform,
                  opacity: opacityTransform,
                }}
                className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EducationTimeline;

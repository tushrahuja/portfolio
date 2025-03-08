"use client";
import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const EducationSection = () => {
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
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div id="education" className="w-full">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-20 pb-16"
        ref={containerRef}
      >
        <div className="w-full">
          <h2 className="text-5xl md:text-6xl font-bold text-blue-900 dark:text-blue-100 mb-16"> {/* Increased bottom margin */}
            &lt; Education /&gt;
          </h2>
          <div ref={ref} className="space-y-12 relative">
            <div className="flex items-start">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black z-20 flex items-center justify-center"> {/* Added z-20 */}
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <div className="ml-16"> {/* Adjusted margin to align with Tools & Skills */}
                <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                  Bachelor Of Engineering in Computer Science Engineering @P. R. Pote College of Engineering and Management.
                </h3>
                <p className="text-lg text-blue-700 dark:text-blue-300">
                  2023-2026 | Amravati, Maharashtra.
                </p>
                <p className="text-lg text-blue-700 dark:text-blue-300 mt-2">
                  Relevant courses included Data Structures and Algorithms, Artificial Intelligence, Web Development, Networking and Database Management.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black z-20 flex items-center justify-center"> {/* Added z-20 */}
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <div className="ml-16"> {/* Adjusted margin to align with Tools & Skills */}
                <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                  Diploma in Electronics and Telecommunication Engineering @Government Polytechnic, Amravati.
                </h3>
                <p className="text-lg text-blue-700 dark:text-blue-300">
                  2021-2023 | Amravati, Maharashtra.
                </p>
                <p className="text-lg text-blue-700 dark:text-blue-300 mt-2">
                  Relevant courses included Microprocessors, Analog and Digital Communication, Internet of Things, Embedded Systems and Computer Networks.
                </p>
              </div>
            </div>
            <div
              style={{
                height: height + "px",
              }}
              className="absolute left-[1.85rem] -top-6 overflow-hidden w-[2px] z-10 bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] " // Changed top-0 to -top-6 for precise centering
            >
              <motion.div
                style={{
                  height: heightTransform,
                  opacity: opacityTransform,
                }}
                className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EducationSection;

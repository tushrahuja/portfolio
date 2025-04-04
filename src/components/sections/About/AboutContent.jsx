import React, { useState, useEffect } from 'react';

const AboutContent = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check on initial render
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <img
        src={isMobile ? "/images/aboutme2.jpg" : "/images/aboutme.png"}
        alt="About Me"
        className={`w-full h-full ${
          isMobile 
            ? 'object-fill scale-110'
            : 'object-contain scale-120' // Slightly reduced from scale-125 to scale-120
        }`}
        draggable={false}
      />
    </div>
  );
};

export default AboutContent;

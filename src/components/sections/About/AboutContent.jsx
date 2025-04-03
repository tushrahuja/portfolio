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
        className={`w-full h-full rounded-xl ${
          isMobile 
            ? "object-cover scale-110 transform" // Reduced from scale-125 to scale-110
            : "object-cover transform md:rotate-0 md:scale-100"
        }`}
        draggable={false}
      />
    </div>
  );
};

export default AboutContent;

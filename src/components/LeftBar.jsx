import React, { useState, useEffect } from 'react';

const LeftBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add initial delay for smooth appearance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      
      // Calculate scroll percentage
      const progress = Math.min((scrolled / windowHeight) * 100, 100);
      setScrollProgress(progress);
    };

    // Initial call
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 h-full w-1 z-50 pointer-events-none">
      {/* Background bar */}
      <div 
        className={`h-full w-full bg-[#1E0A2A] transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Progress bar */}
      <div
        className="absolute top-0 left-0 w-full transition-all duration-300 ease-out"
        style={{
          height: `${scrollProgress}%`,
          background: 'linear-gradient(to bottom, #9333ea, #db2777)',
          boxShadow: '0 0 20px rgba(147, 51, 234, 0.5)',
          borderRadius: '0 0 4px 4px'
        }}
      />

      {/* Glowing overlay */}
      <div
        className="absolute top-0 left-0 w-full"
        style={{
          height: `${scrollProgress}%`,
          boxShadow: '0 0 30px rgba(219, 39, 119, 0.3)',
          transition: 'height 300ms ease-out'
        }}
      />
    </div>
  );
};

export default LeftBar;
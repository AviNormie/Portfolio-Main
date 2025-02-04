import React, { useState, useEffect } from 'react';

const LeftBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollPosition / windowHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-1 h-full bg-[#1E0A2A] shadow-lg rounded-md"
      style={{
        boxShadow: scrollProgress > 0 ? '0 0 15px rgba(255, 0, 255, 0.75)' : 'none', // Glowing effect
      }}
    >
      <div
        className="w-full bg-purple-600 transition-all duration-300"
        style={{
          height: `${scrollProgress}%`,
        }}
      ></div>
    </div>
  );
};

export default LeftBar;

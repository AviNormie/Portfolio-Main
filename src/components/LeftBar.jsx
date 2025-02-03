import React, { useState, useEffect } from 'react';

const LeftBar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrolled(scrollPosition > 100); // You can adjust this value to when the color change happens
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-20 h-full transition-all duration-500 ${
        scrolled ? 'bg-purple-600' : 'bg-gray-500'
      }`}
    ></div>
  );
};

export default LeftBar;

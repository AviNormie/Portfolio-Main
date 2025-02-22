import React, { useState } from 'react';
import ShinyText from '../blocks/TextAnimations/ShinyText/ShinyText';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', text: 'Home' },
    { id: 'skills', text: 'Skills' },
    { id: 'projects', text: 'Projects' },
    { id: 'experience', text: 'Experience' },
    { id: 'contact', text: 'Contact' }
  ];

  return (
    <div className="navbar-container hover:scale-105 transition duration-400 fixed mt-1 top-3 left-1/2 transform -translate-x-1/2 w-11/12 md:w-3/4 h-auto md:h-16 p-1 bg-[#14071b]/30 backdrop-blur-sm shadow-lg border border-[#14071b] rounded-full z-50">
      <div className="flex flex-col md:flex-row justify-between items-center h-full px-6 py-2 md:py-0">
        <div className="flex space-x-4 mb-2 md:mb-0">
          <span className="text-3xl font-bold text-[#491d63]">
            <ShinyText text="Avi Srivastava" disabled={false} speed={2} className="hidden md:block font-bold" />
          </span>
        </div>

        <div className="flex space-x-4">
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 md:gap-x-5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative group"
              >
                <ShinyText 
                  text={item.text} 
                  disabled={false} 
                  speed={4} 
                  className="cursor-pointer text-sm md:text-base" 
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
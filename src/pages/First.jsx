import React from 'react';
import Navbar from '../components/Navbar';
import Squares from '../blocks/Backgrounds/Squares/Squares';
import LeftBar from '../components/LeftBar';
import Main from '../sections/Main';
import ProjectSection from '../sections/ProjectsSection';
import Contact from '../sections/Contact';
import FloatingOrbs from '../blocks/Orbs';
import Experience from '../sections/Experience';
import CodingAnimation from '../sections/CodingAnimation';
function First() {
  return (
    <div className="relative bg-[#1E0A2A] w-full h-full">
      <div className="absolute inset-0">
        <FloatingOrbs />
      </div>
      <div className="absolute inset-0 z-[2]">
        <Squares
          speed={0.5}
          squareSize={50}
          direction="down"
          borderColor="#ffffff"
        />
      </div>
      <Navbar />
      <LeftBar />
      <div className="relative z-10 text-white p-10">
        <Main/>
        <CodingAnimation/>
        <ProjectSection />
        <Experience />
    
        <Contact />
      </div>
    </div>
  );
}

export default First;

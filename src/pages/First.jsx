import React from 'react';
import Navbar from '../components/Navbar';
import Squares from '../blocks/Backgrounds/Squares/Squares';
import LeftBar from '../components/LeftBar';
function First() {
  return (
    <div className="relative bg-[#1E0A2A] w-full h-screen">
      {/* Background Squares */}
      <div className="absolute inset-0 z-0">
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
        {/* sections to be added */}
        <h1 className="text-4xl mt-10 font-bold">Hello, World!</h1>
        <h2 className='mt-[1000px]'>hii</h2>
      </div>
    </div>
  );
}

export default First;

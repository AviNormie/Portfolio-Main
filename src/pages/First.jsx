import React from 'react';
import Navbar from '../components/Navbar';
function First() {
  
  return (
    <div className="relative bg-[#1E0A2A] w-full h-screen">
      {/* Main Content */}
      <Navbar />
      <div className="relative z-10  text-white p-10">
        <h1 className="text-4xl  mt-10 font-bold">Hello, World!</h1>
        
      </div>
    </div>
  );
}

export default First;

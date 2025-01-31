import React from 'react';

import ShinyText from '../blocks/TextAnimations/ShinyText/ShinyText'
const Navbar = () => {

  return (
    <div className="navbar-container hover:scale-105 transition duration-400 fixed mt-1 top-3 left-1/2 transform -translate-x-1/2 w-3/4 h-16 p-1 bg-[#14071b]/30 backdrop-blur-sm shadow-lg border border-[#14071b] rounded-full z-50">
      <div className="flex justify-between items-center h-full px-6">
        {/* Left Side Content */}
        <div className="flex space-x-4">
          <span className="text-3xl font-bold text-[#491d63]">
          <ShinyText text="Avi Srivastava" disabled={false} speed={2} className='font-bold' />
          </span>
        </div>

        {/* Right Side Content */}
        <div className="flex space-x-4">
        <div className='flex gap-x-5  '>
            <ShinyText text="Just some shiny text!" disabled={false} speed={4} className='' />
            <ShinyText text="Just some shiny text!" disabled={false} speed={5} className='' />
            <ShinyText text="Just some shiny text!" disabled={false} speed={4} className='' />
            <ShinyText text="Just some shiny text!" disabled={false} speed={5} className='' />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

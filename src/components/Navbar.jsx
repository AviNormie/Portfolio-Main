import React from 'react';

const Navbar = () => {

  return (
    <div className="navbar-container hover:scale-105 transition duration-400 fixed top-3 left-1/2 transform -translate-x-1/2 w-3/4 h-16 p-1 bg-[#14071b]/30 backdrop-blur-sm shadow-lg border border-[#14071b] rounded-full z-50">
      <div className="flex justify-between items-center h-full px-6">
        {/* Left Side Content */}
        <div className="flex space-x-4">
          <span className="text-3xl font-bold text-[#002f34]">
            ChainXchange
          </span>
        </div>

        {/* Right Side Content */}
        <div className="flex space-x-4">
          <button
            
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition"
          >
            My Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

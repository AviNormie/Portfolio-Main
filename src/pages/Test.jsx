import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextPressure from '../blocks/TextAnimations/TextPressure/TextPressure';
import Navbar from '../components/Navbar';
function Portfolio() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {isOn ? (
          <motion.div
            key="fullPage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center min-h-screen bg-white text-black"
          >
            <div className="relative bg-[#1E0A2A] w-full h-screen">
            {/* Main Content */}
            <Navbar />
            <div className="relative z-10  text-white p-10">
                <h1 className="text-4xl  mt-10 font-bold">Hello, World!</h1>
                
            </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="portfolioPage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center min-h-screen bg-black text-white"
          >
            <div style={{ position: 'relative' }}>
              <TextPressure
                text="Hello!!!"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#ffffff"
                strokeColor="#ff0000"
                minFontSize={80}
              />
            </div>
            <div
              className="w-14 h-7 bg-gray-300 rounded-full p-1 flex items-center cursor-pointer mt-2"
              onClick={toggleSwitch}
            >
              <motion.div
                layout
                className="w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300"
                animate={{ x: isOn ? 32 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Portfolio;

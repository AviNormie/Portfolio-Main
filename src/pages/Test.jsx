import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextPressure from '../blocks/TextAnimations/TextPressure/TextPressure';
import Navbar from '../components/Navbar';
import Meteors from '../blocks/Meteors';
import First from './First';
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
            initial={{ opacity: 0, backgroundColor: '#1E0A2A' }}
            animate={{
              opacity: 1,
              backgroundColor: '#1E0A2A',
            }}
            exit={{
              opacity: 0,
              backgroundColor: '#1E0A2A',
            }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center min-h-screen text-black"
          >
            <First />
          </motion.div>
        ) : (
          <motion.div
            key="portfolioPage"
            initial={{ opacity: 0, backgroundColor: '#000000' }} // Keep background black for Hello page
            animate={{
              opacity: 1,
              backgroundColor: '#000000',
            }}
            exit={{
              opacity: 0,
              backgroundColor: '#000000',
            }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center min-h-screen text-white"
          >
            <Meteors number={30} />
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
                className="w-6 h-6 bg-white rounded-full shadow-md"
                animate={{ x: isOn ? 32 : 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Portfolio;

import React from 'react';
import Navbar from './components/Navbar';
import ShinyText from './blocks/TextAnimations/ShinyText/ShinyText'
function App() {
  
  return (
    <div className="relative bg-[#1E0A2A] w-full h-screen">
      {/* Main Content */}
      <Navbar />
      <div className="relative z-10  text-white p-10">
        <h1 className="text-4xl  mt-10 font-bold">Hello, World!</h1>
        <div className='flex  border rounded-full'>

      <ShinyText text="Just some shiny text!" disabled={false} speed={2} className='ml-10' />
        </div>
      </div>
    </div>
  );
}

export default App;

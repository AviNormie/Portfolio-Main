import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="relative w-full h-screen">

      {/* Main Content */}
      <Navbar />
      <div className="relative z-10 text-white p-10">
        <h1 className="text-4xl font-bold">Hello, World!</h1>
      </div>
    </div>
  );
}

export default App;

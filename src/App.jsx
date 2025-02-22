import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"; // Import Vercel Analytics
import Test from "./pages/Test";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Test />} />
        </Routes>
      </BrowserRouter>

      <Analytics /> {/* Add this line to enable Vercel Analytics */}
    </>
  );
}

export default App;

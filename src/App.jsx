import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import First from './pages/First'
import Test from './pages/Test'
import CompTesting from './pages/CompTesting'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<First/>} />
      <Route path='/a' element={<Test/>} />
      <Route path='/c' element={<CompTesting/>} />
      
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
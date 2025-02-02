import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import First from './pages/First'
import Test from './pages/Test'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<First/>} />
      <Route path='/t' element={<Test/>} />
      
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
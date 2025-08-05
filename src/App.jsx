import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Herosection from './Components/Herosection'
import ProductDetail from './Components/ProductDetail'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Herosection/>} />
        <Route path='/product' element={<ProductDetail/>} />



      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
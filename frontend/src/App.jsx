import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Cart from "./pages/cart/Cart.jsx";
import PlaceOrder from "./pages/placeOrder/PlaceOrder.jsx";

export default function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
      </Routes>
    </div>
  )
}

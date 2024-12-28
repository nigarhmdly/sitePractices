import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Cart from '../pages/cart/Cart'
import AdminPanelSection from '../pages/admin/Admin'
import Wish from '../pages/wish/Wish'


const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/wish" element={<Wish/>} />
      <Route path="/admin" element={<AdminPanelSection/>} />
    
    </Routes>
  </BrowserRouter>
  )
}

export default Router
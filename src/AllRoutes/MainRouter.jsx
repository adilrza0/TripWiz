import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Login from '../Pages/Login'
import HotelPage from '../Pages/HotelPage'
import { Cart } from '../Pages/Cart'
import Signup from '../Pages/Signup'
import Blogs from '../Pages/Blogs'
import Contact from '../Pages/Contact'
import Abouts from '../Pages/Abouts'

export default function MainRouter() {
  return (
    <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/hotels' element={<HotelPage />}/>
        <Route path='/cart/:id' element={<Cart />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route  path='/blogs' element={<Blogs />} />
        <Route  path='/contact' element={<Contact />} />
        <Route  path='/about' element={<Abouts />} />

    </Routes>
  )
}

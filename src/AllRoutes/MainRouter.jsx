import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Login from '../Pages/Login'
import HotelPage from '../Pages/HotelPage'
import { Cart } from '../Pages/Cart'
import Signup from '../Pages/Signup'
import Blogs from '../Pages/Blogs'
import FlightPage from '../Pages/FlightPage'


export default function MainRouter() {
  return (
    <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/hotels' element={<HotelPage />}/>
        <Route path='/cart/:id' element={<Cart />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/flight' element={<FlightPage />}/>

        


    </Routes>
  )
}

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import HotelPage from '../Pages/HotelPage'
import { Cart } from '../Pages/Cart'
import Signup from '../Pages/Signup'
import FlightPage from '../Pages/FlightPage'
import Home from "../LandingComponents/Home"
import FlightCart from '../Pages/FlightCart'


export default function MainRouter() {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/hotels' element={<HotelPage />}/>
        <Route path='/cart/:id' element={<Cart />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/flight' element={<FlightPage />}/>
        <Route path='/flightcart/:id' element={<FlightCart />} />
        


    </Routes>
  )
}

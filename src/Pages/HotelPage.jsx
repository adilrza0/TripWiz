import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getHotels } from '../Redux/hotelReducers/action'

export default function HotelPage() {
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(getHotels)

    },[])

  return (
    <div>
        
    </div>
  )
}

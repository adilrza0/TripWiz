import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getHotels } from '../Redux/hotelReducer/action'
import HotelCard from '../Components/HotelCard'
import styled from 'styled-components'
import { SideBarHotel } from '../Components/SideBarHotel'
import { useSearchParams } from 'react-router-dom'

import { ChakraProvider } from '@chakra-ui/react'



export default function HotelPage() {
    const [searchParams]=useSearchParams()
    const dispatch=useDispatch()
    const {hotels}=useSelector((store)=>store.hotelReducer,shallowEqual)
    let paramObj={
      category:searchParams.getAll("category"),
      _sort:"price",
      _order:searchParams.get("order")
    }
    useEffect(()=>{
      dispatch(getHotels(paramObj))
      console.log("woik")

    },[searchParams])
    

  return (
    <ChakraProvider>


    <DIV>
      <SideBarHotel/>
      <div className='Hotel-Container'>
      {hotels.map((ele)=>{
        return <HotelCard key={ele.id} {...ele} />
      })}
      </div>
        
    </DIV>
    </ChakraProvider>
  )
}
const DIV=styled.div`
display: flex;
gap: 20px;
.Hotel-Container{
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns:repeat(3,1fr) ;
  gap: 30px;
  
}
  
`
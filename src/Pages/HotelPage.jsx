import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getHotels, getTotalPage } from '../Redux/hotelReducer/action'
import HotelCard from '../Components/HotelCard'
import styled from 'styled-components'
import { SideBarHotel } from '../Components/SideBarHotel'
import { useSearchParams } from 'react-router-dom'

import { ChakraProvider } from '@chakra-ui/react'
import Pagination from '../Components/Pagination'
import InputHotel from '../Components/InputHotel'


export default function HotelPage() {
    const [searchParams]=useSearchParams()
    const [trig,setTrig]=useState(false)
    const [currPage,setCurrPage]=useState(1)
    const dispatch=useDispatch()
    const {hotels,totalPages,search}=useSelector((store)=>store.hotelReducer,shallowEqual)
    let paramObj={
      category:searchParams.getAll("category"),
      price_gte:searchParams.get("min"),
      price_lte:searchParams.get("max"),
      q:search,
      _limit:9,
      _page:currPage,
      _sort:"price",
      _order:searchParams.get("order")
    }
    useEffect(()=>{
      dispatch(getHotels(paramObj))
      dispatch(getTotalPage(paramObj))
      console.log("woik")
      

    },[searchParams,currPage,trig])
    

    

  return (
    <ChakraProvider>

    <InputHotel setTrig={setTrig}  />
    <DIV>
      <SideBarHotel/>
      <div>
      <div className='Hotel-Container'>
      {hotels.map((ele)=>{
        return <HotelCard key={ele.id} {...ele} />
      })}
      
      </div>
      <Pagination updatePage={setCurrPage} currentpage={currPage} totalPages={totalPages} />
      </div>
        
    </DIV>
    </ChakraProvider>
  )
}
const DIV=styled.div`
display: flex;




.Hotel-Container{
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns:repeat(3,1fr) ;
  gap: 30px;
  overflow-y: scroll;
  height: 600px;
  scrollbar-width: none;
  
  
}
.Hotel-Container::-webkit-scrollbar {
    display: none; /* Hide the scrollbar in Chrome/Edge/Safari */
}
  
`
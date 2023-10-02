import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFlights } from '../Redux/flightReducer/action'
import Pagination from '../Components/Pagination'
import FlightList from '../Components/FlightList'
import { ChakraProvider } from '@chakra-ui/react'
import styled from 'styled-components'

import FlightSide from '../Components/FlightSide'
import { useSearchParams } from 'react-router-dom'

export default function FlightPage() {
    const [searchParams]=useSearchParams()
    const [page,setPage]=useState(1)
    const dispatch=useDispatch()
    const {flights,totalPages}=useSelector((store)=>store.flightReducer)
    
    let paramObj={
        airline:searchParams.getAll("airline"),
        price_gte:searchParams.get("min"),
        price_lte:searchParams.get("max"),
        _page:page,
        _limit:9,
        _sort:"price",
        _order:searchParams.get("order")
    }

    useEffect(()=>{
        dispatch(getFlights(paramObj))

    },[page,searchParams])
  return (
    <ChakraProvider>
        
    <DIV>
        
    <div style={{"height":"80px","backgroundColor":"#00375C"}}>

    </div>
        
        <div className='mainContainer'>  
            
            
            <FlightSide />
            <div>
            <div className='flightList'>
            {flights.map((ele)=>{
                return <FlightList key={ele.id} {...ele} />
            })}
            
            </div>
            <Pagination updatePage={setPage} totalPages={totalPages} currentpage={page} />
            
            </div>
        </div>
        
    </DIV>
    </ChakraProvider>
  )
}
const DIV=styled.div`

>div:nth-child(2){
    padding-top: 100px;

}
>div:first-child{
    
    width: 3500px;
    height: 200px;
    position: fixed;
}
>.mainContainer{
   display: flex;
    flex-direction:row;
    
}
.flightList{
    height: 600px;
   overflow-y: scroll;
   
}
.flightList::-webkit-scrollbar{
    display: none;
}

    
`
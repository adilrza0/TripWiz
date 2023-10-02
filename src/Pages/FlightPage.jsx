import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFlights } from '../Redux/flightReducer/action'
import Pagination from '../Components/Pagination'
import FlightList from '../Components/FlightList'
import { ChakraProvider } from '@chakra-ui/react'
import styled from 'styled-components'

export default function FlightPage() {
    const dispatch=useDispatch()
    const {flights,totalPages}=useSelector((store)=>store.flightReducer)
    const [page,setPage]=useState(1)
    let paramObj={
        _page:page,
        _limit:9
    }

    useEffect(()=>{
        dispatch(getFlights(paramObj))
    },[page])
  return (
    <ChakraProvider>
        
    <DIV>
        
    <div style={{"height":"80px","backgroundColor":"#00375C"}}>

    </div>
        <div>
        {flights.map((ele)=>{
            return <FlightList key={ele.id} {...ele} />
        })}
        <Pagination updatePage={setPage} totalPages={totalPages} currentpage={page} />
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

    
`
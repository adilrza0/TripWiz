import axios from "axios"

import { GET_HOTELS_FAILURE, GET_HOTELS_REQUEST, GET_HOTELS_SUCCESS } from "../actionType"
import { URLSearchParamsInit } from "react-router-dom"

export const getHotels=(paramObj)=>(dispatch)=>{
   dispatch({type:GET_HOTELS_REQUEST})
   console.log(paramObj)
  
   axios.get(`http://localhost:8080/hotels`,{params:paramObj})
   .then((res)=>{
      console.log(res)
    dispatch({type:GET_HOTELS_SUCCESS,payload:res.data})
   })
   .catch((err)=>{
    dispatch({type:GET_HOTELS_FAILURE})
    console.error()
   })

}
import axios from "axios"

import { GET_HOTELS_FAILURE, GET_HOTELS_REQUEST, GET_HOTELS_SUCCESS, GET_TOTAL_PAGES } from "../actionType"

export const getHotels=(paramObj)=>(dispatch)=>{
   dispatch({type:GET_HOTELS_REQUEST})
   //console.log(paramObj)
   // console.log(paramObj)
   axios.get(`http://localhost:8080/hotels`,{params:paramObj})
   .then((res)=>{
   
    dispatch({type:GET_HOTELS_SUCCESS,payload:res.data})
   })
   .catch((err)=>{
    dispatch({type:GET_HOTELS_FAILURE})
    console.error()
   })

}
export const getTotalPage=(paramObj)=>(dispatch)=>{
   paramObj._limit=""
   paramObj._page=""
   axios.get(`http://localhost:8080/hotels`,{params:paramObj})
   .then((res)=>{
     const pages=Math.ceil(res.data.length/9)
    
    dispatch({type:GET_TOTAL_PAGES,payload:pages})
   })
}
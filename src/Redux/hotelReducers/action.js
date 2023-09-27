import axios from "axios"
import { GET_HOTELS_FAILURE, GET_HOTELS_REQUEST, GET_HOTELS_SUCCESS } from "../actionType"

export const getHotels=(dispatch)=>{
   dispatch({type:GET_HOTELS_REQUEST})
   axios.get(`http://localhost:8080/hotels`)
   .then((res)=>{
    dispatch({type:GET_HOTELS_SUCCESS,payload:res.data})
   })
   .catch((err)=>{
    dispatch({type:GET_HOTELS_FAILURE})
    console.error()
   })

}
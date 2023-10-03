import axios from "axios"
import { GET_FLIGHTS_FAILURE, GET_FLIGHTS_REQUEST, GET_FLIGHTS_SUCCESS } from "../actionType"

export const getFlights=(paramObj)=>(dispatch)=>{
    dispatch({type:GET_FLIGHTS_REQUEST})
    console.log(paramObj)
    axios.get(`http://localhost:8080/flights`,{params:paramObj})
    .then((res)=>{
        const data=res.data
        console.log(res.data)
        const pages=Math.ceil(res.headers["x-total-count"]/9)
        dispatch({type:GET_FLIGHTS_SUCCESS,payload:{data,pages}})
    })
    .catch((err)=>{
        console.log(err)
        dispatch({type:GET_FLIGHTS_FAILURE})
    })
}
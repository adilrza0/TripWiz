import axios from "axios"
import {GET_SIGNUP_DATA, POST_SIGNUP_DATA} from "../actionType"

export const getUserData = (dispatch)=>{
    axios.get(`http://localhost:8080/users`)
    .then((res) =>{
        // console.log("insideAction.js =>" ,res.data)
        dispatch({type:GET_SIGNUP_DATA, payload:res.data})
    })
    .catch((err)=>{
        console.log(err)
    })
}


export const postSignUpData = (data)=>(dispatch)=>{
    
   return axios.post(`http://localhost:8080/users`, data)
    .then((res) =>{
        dispatch({type:POST_SIGNUP_DATA})
    })
    .catch((err)=>{
        console.log(err)
    })
}
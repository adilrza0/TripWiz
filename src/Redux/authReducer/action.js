import axios from "axios"
import {ADMIN_AUTH_SUCCESS, GET_SIGNUP_DATA, POST_SIGNUP_DATA} from "../actionType"

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

export const checkLogin = (email,password,navigate,loginData) => (dispatch) => {

    if(email==="aamil@gmail.com" && password==="aamil123"){
        return ( navigate("/admin"),dispatch({type:ADMIN_AUTH_SUCCESS}))
        
      }
  
      const user = loginData.find((user) => user.email === email && user.password === password);
      console.log(user)
      if(user){
        // dispatch({type:ADMIN_AUTH_SUCCESS})
        navigate("/")
        alert("Signin Successfull")
      }
      else{
        alert("Invalid email or password. Please try again or create an account")
      }
}
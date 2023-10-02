import { PAYMENT_DATA } from "./actionType"



export const paymentData = (data)=>(dispatch)=>{
    
  return dispatch({type:PAYMENT_DATA,payload:data})
   
}
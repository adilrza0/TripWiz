import { PAYMENT_DATA } from "./actionType"

const initSate = {
    userData:{}
}
export const paymentReducer = (state=initSate, {type, payload}) =>{
    switch(type) {
        case PAYMENT_DATA:
            return {...state, userData:payload}
        default:
            return state
    }
  }
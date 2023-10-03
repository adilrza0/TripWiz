import { ADMIN_AUTH_SUCCESS, GET_SIGNUP_DATA, POST_SIGNUP_DATA } from "../actionType"

const initSate = {
    isAuth: false,
    loginData:[]
}
export const reducer = (state=initSate, {type, payload}) =>{
    switch(type) {
        case GET_SIGNUP_DATA:
            return {...state, loginData:payload}
        case POST_SIGNUP_DATA:
            return {...state }
        case ADMIN_AUTH_SUCCESS:
            return {...state, isAuth:true}    
        default:
            return state
    }
  }
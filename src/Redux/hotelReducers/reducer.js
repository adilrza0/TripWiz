import { GET_HOTELS_FAILURE, GET_HOTELS_REQUEST, GET_HOTELS_SUCCESS } from "../actionType"

const initialdata={
    isLoading:false,
    isError:false,
    hotels:[]
}
export const reducer=(state=initialdata,{type,payload})=>{
    switch(type){
        case GET_HOTELS_REQUEST:{
            return {...state,isLoading:true}
        }
        case GET_HOTELS_SUCCESS:{
            return {...state,isLoading:false,hotels:payload}
        }
        case GET_HOTELS_FAILURE:{
            return {...state,isLoading:false,isError:true,}
        }
        default:{
            return state
        }
    }
}
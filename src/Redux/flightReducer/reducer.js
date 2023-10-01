import { GET_FLIGHTS_FAILURE, GET_FLIGHTS_REQUEST, GET_FLIGHTS_SUCCESS } from "../actionType"

const initial={
    isLoading:false,
    isError:false,
    flights:[],
    totalPages:0
}
export const reducer=(state=initial,{type,payload})=>{
    switch(type){
        case GET_FLIGHTS_REQUEST:{
            return {...state,isLoading:true}
        }
        case GET_FLIGHTS_SUCCESS:{
          
            return {...state,isLoading:false,flights:payload.data,totalPages:payload.pages}
        }
        case GET_FLIGHTS_FAILURE:{
            return {...state,isLoading:false,isError:true}
        }
        default:{
            return state
        }
    }

}
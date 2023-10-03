import { GET_HOTELS_FAILURE, GET_HOTELS_REQUEST, GET_HOTELS_SUCCESS, GET_TOTAL_PAGES, UPDATE_SEARCH } from "../actionType"

const initialdata={
    isLoading:false,
    isError:false,
    hotels:[],
    totalPages:0,
    search:""
}
export const reducer=(state=initialdata,{type,payload})=>{
    switch(type){
        case GET_HOTELS_REQUEST:{
            return {...state,isLoading:true}
        }
        case GET_HOTELS_SUCCESS:{
            console.log(payload)
            return {...state,isLoading:false,hotels:payload}
        }
        case GET_HOTELS_FAILURE:{
            return {...state,isLoading:false,isError:true,}
        }
        case GET_TOTAL_PAGES:{
            return {...state,totalPages:payload}
        }
        case UPDATE_SEARCH:{
            return {...state,search:payload}
        }
        default:{
            return state
        }
    }
}
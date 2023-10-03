import { parseDateTime } from "../../FunctionalComponent/parseDate"
import { UPDATE_CHECKIN, UPDATE_CHECKOUT, UPDATE_GUESTDETAILS } from "../actionType"
const {day,month,year,time}=parseDateTime(new Date())

const initial={
    checkin:{
        day:day,
        month:month,
        year:year,
        time:time
    },
    checkout:{
        day:day,
        month:month,
        year:year,
        time:time
    },
    guestDeatails:{
        rooms:1,
        adult:1,
        children:0,
    },
    guest:{
        name:"",
        phone:0,
        email:""

    }
}
export const reducer=(state=initial,{type,payload})=>{
    switch(type){
        case UPDATE_CHECKIN:{
            return {...state,checkin:payload}
        }
        case UPDATE_CHECKOUT:{
            return {...state,checkout:payload}
        }
        case UPDATE_GUESTDETAILS:{
            console.log(payload)
            return {...state,guestDeatails:payload}
        }
        default:{
            return state
        }
    }
}
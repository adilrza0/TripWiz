import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as hotelReducer } from "./hotelReducer/reducer";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./authReducer/reducer";
import { reducer as flightReducer } from "./flightReducer/reducer";
import {reducer as adminReducer} from "./adminReducer/reducer"
import {reducer as addhotelReducer} from "./AddhotelReducer/reducer"


const rootReducer=combineReducers({
    //add your reducers here
   hotelReducer,
   authReducer,
   flightReducer,
   adminReducer,
   addhotelReducer,
})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))
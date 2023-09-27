import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as hotelReducer } from "./hotelReducers/reducer";
import thunk from "redux-thunk";





const rootReducer=combineReducers({
    //add your reducers here
   hotelReducer

})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))
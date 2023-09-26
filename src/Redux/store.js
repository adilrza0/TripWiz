import { combineReducers, legacy_createStore } from "redux";

//*************** */
const reducer=(state={},{type})=>{
    switch(type){
        default:{
            return state
        }
    }
}

//************** */

const rootReducer=combineReducers({
    //add your reducers here
    reducer

})
export const store=legacy_createStore(rootReducer)
import { SET_DATA } from "../const/const";

const initialState={
    data:[]
}    
export const heroReducer=(state=initialState,action)=>{
    switch (action.type) {
        case SET_DATA:
           return{
               ...state,
               data:action.payload
           }
        default:
            return state 
    }
}
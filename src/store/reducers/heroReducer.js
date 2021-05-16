import { SET_COMICS,SET_LOADING } from "../const/const";

const initialState={
    data:[],
    loading:true
}    
export const heroReducer=(state=initialState,action)=>{
    switch (action.type) {
        case SET_COMICS:
           return{
               ...state,
               data:action.payload
               
           }
        case SET_LOADING:
            return{
                ...state,
                loading:action.payload
            }
        default:
            return state 
    }
}
import {FETCH_USER, LOGIN_USER,LOG_OUT_USER} from "../const/const"
const initialState={
    users:{},
    login:{}
}
export const userReducer=(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_USER:

            return {
                ...state,
                users:action.payload,
            }
  
       
        case LOGIN_USER:
            return {
                ...state,
                login:action.payload
            }
        case LOG_OUT_USER:
            return {
                ...state,
                login:action.payload
            }
    
        default:
            return state
    }
}
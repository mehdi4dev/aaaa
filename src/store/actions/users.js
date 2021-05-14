import { 
    FETCH_USER,
    LOGIN_USER,
    LOG_OUT_USER
 } from "../const/const";

 
export const userInfo=(users)=>{
    return{
        type:FETCH_USER,
        payload:users,
        isLogin:false
    }
}

export const userLogin=(isLogin)=>{
  
    return{
        type:LOGIN_USER,
        payload:isLogin
    }
}
export const userLogOut=(isLogin)=>{
    return {
        type:LOG_OUT_USER,
        payload :isLogin
    }
}

import { 
    FETCH_USER,
    LOGIN_USER,
    LOG_OUT_USER
 } from "../const/const";

 
export const usersInfo=(users)=>{
    return {
      

            type:FETCH_USER,
            payload:users,
      
      
    }
}

export const userLogin=(useremail,isLogin)=>{
    
    return{
        type:LOGIN_USER,
        payload:{
            useremail,
            isLogin
        }
    }
}
export const userLogOut=(isLogin)=>{
    
    return {
        type:LOG_OUT_USER,
        payload :{
            useremail:"",
            isLogin
        }
    }
}
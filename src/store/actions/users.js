
import { 
    FETCH_USER,
    LOGIN_USER,
    LOG_OUT_USER
 } from "../const/const";
import {cleanData} from "./hero"
 
export const usersInfo=(users)=>{
    return {
      

            type:FETCH_USER,
            payload:users,
      
      
    }
}

export const userLogin=(useremail,username,isLogin)=>{
    
    return{
        type:LOGIN_USER,
        payload:{
            useremail,
            username,
            isLogin
        }
    }
}
export const userLogOut=(isLogin)=>{
  
    return {
        type:LOG_OUT_USER,
        payload :{
            useremail:"",
            username:"",
            isLogin
        }
    }

}
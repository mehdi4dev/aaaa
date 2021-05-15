import api ,{ts,apikey,hash} from "../../services/api";
import { 
    FETCH_USER,
    LOGIN_USER,
    LOG_OUT_USER
 } from "../const/const";

 
export const userInfo=(users)=>{
    return{
        type:FETCH_USER,
        payload:users,
      
    }
}

export const userLogin=(useremail,isLogin)=>{
    const login={
        useremail,
        isLogin
    }
    return{
        type:LOGIN_USER,
        payload:login
    }
}
export const userLogOut=(isLogin)=>{
    const logout={
        useremail:"",
        isLogin
    }
    return {
        type:LOG_OUT_USER,
        payload :logout
    }
}
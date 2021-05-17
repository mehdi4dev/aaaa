import api ,{ts,apikey,hash} from "../../services/api";
import { SET_COMICS,SET_LOADING,SET_HERO } from "../const/const";
export const fetchHeroComics=(heroid)=>{
    return async (dispatch)=>{
        const apiData=await api.get(`${heroid}/comics`,{
            params:{
                ts:ts,
                apikey:apikey,
                hash:hash
            }
        })
            let data=apiData.data.data.results
            data.sort((a, b)=> { 
                
                return a.modified < b.modified ? 1 : -1
            })
            
            dispatch(setComics(data))
            dispatch(setLoading(false))
   

        }

}
export const fetchHero=(heroid)=>{
    return async (dispatch)=>{
        const apiData=await api.get(`${heroid}`,{
            params:{
                ts:ts,
                apikey:apikey,
                hash:hash
            }
        })
            let data=apiData.data.data.results
            
            dispatch(setHero(data))
            dispatch(setLoading(false))
       

        }

}
export const setLoading=(loading)=>{
    return {
        type:SET_LOADING,
        payload:loading
    }
}
export const setComics=(data)=>{
    return {
        type:SET_COMICS,
        payload:data
    }
}

export const setHero=(data)=>{
    return {
        type:SET_HERO,
        payload:data
    }
}
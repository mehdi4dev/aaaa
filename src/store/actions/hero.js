import api ,{ts,apikey,hash} from "../../services/api";
import { SET_DATA } from "../const/const";
export const fetchHeroComic=(heroid)=>{
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
   

        }

}
export const setComics=(data)=>{
    return {
        type:SET_DATA,
        payload:data
    }
}
import React,{useEffect, useState} from 'react';
import ComicsList from "../component/comicsList"
import {
        makeStyles
      } from '@material-ui/core'
    import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {userLogOut} from "../store/actions/users"
import {fetchHeroComics } from "../store/actions/hero";
import LinearProgress from '@material-ui/core/LinearProgress';
import Navbar from '../component/navbar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
 
  menu:{
      marginTop:theme.spacing(8)
  },
  loading: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));



function   HeroComics  () {
const classes = useStyles();
// const [anchorEl, setAnchorEl] = useState(null);
const history = useHistory();
const dispatch=useDispatch()
const userlogin=useSelector(state=>state.users.login)
const user=useSelector(state=>state.users.users)
const comics=useSelector(state=>state.hero.data)
const loading=useSelector(state=>state.hero.loading)

  useEffect(()=>{
            if(userlogin.isLogin !== true){

              alert("first you must login")
              history.push("/")
              
            }
   else{

     
     for(let item of user){
       
       if(item.email===userlogin.useremail){
         dispatch(fetchHeroComics(item.heroId))
         
        }
      }
    }
     
          },[])

// const handleClick = (event) => {
// setAnchorEl(event.currentTarget);
// };
// const handleLogout = () => {
//   dispatch(userLogOut(false))
//   history.push("/")
// };

// const handleClose = () => {
//   setAnchorEl(null);
 
// };

  return (
    <div className={classes.root}>
     
      <Navbar />
      {
      !userlogin.islogin && 
      loading && 
      <div className={classes.loading}>
        <LinearProgress />
        <LinearProgress color="secondary" />
    </div>
    
      }
    {
      !userlogin.islogin &&
      !loading &&
        <ComicsList comics={comics} />
    }
    
            
      </div>
  
    
    );

}

export default HeroComics
import React,{useEffect, useState} from 'react';
import ComicsList from "../component/comicsList"
import {
        makeStyles
      } from '@material-ui/core'
    import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {userLogOut} from "../store/actions/users"


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

const history = useHistory();
const dispatch=useDispatch()
const userlogin=useSelector(state=>state.users.login)
const hero=useSelector(state=>state.hero.hero)
const comics=useSelector(state=>state.hero.comics)


  useEffect(()=>{
            if(userlogin.isLogin !== true){

              alert("first you must login")
              history.push("/")
              
            }
 
     
          },[])



  return (
    <div className={classes.root}>
     
        <Navbar  hero={hero} />
        <ComicsList comics={comics} />
       
      </div>
  
    
    );

}

export default HeroComics
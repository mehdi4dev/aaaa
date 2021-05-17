import React, { useEffect, useState } from 'react';
import ComicsList from "../component/comicsList"
import {
  makeStyles
} from '@material-ui/core'
import { useHistory } from "react-router-dom";



import Navbar from '../component/navbar';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },

}));



function HeroComics() {
  const classes = useStyles();
  const history = useHistory();
  const userlogin = useSelector(state => state.users.login)
  const hero = useSelector(state => state.hero.hero)
  const comics = useSelector(state => state.hero.comics)


  useEffect(() => {
    if (userlogin.isLogin !== true) {

      alert("first you must login")
      history.push("/")

    }


  }, [])



  return (
    <div className={classes.root}>

      <Navbar hero={hero} />
      <ComicsList comics={comics} />

    </div>


  );

}

export default HeroComics
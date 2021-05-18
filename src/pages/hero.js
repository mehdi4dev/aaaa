import React from "react"
import { makeStyles } from "@material-ui/core"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import HeroCard from "../component/heroCard"
import Navbar from "../component/navbar"
import { fetchHero } from "../store/actions/hero";
import { fetchHeroComics } from "../store/actions/hero";
import { setLoading } from "../store/actions/hero";
import LinearProgress from '@material-ui/core/LinearProgress';
const useStyles = makeStyles((theme) => ({

}))
function Hero() {
  const classes = useStyles()
  const user = useSelector(state => state.users.users)
  const userlogin = useSelector(state => state.users.login)
  const hero = useSelector(state => state.hero.hero)
  const loading = useSelector(state => state.hero.loading)
  const dispatch = useDispatch()
  const history = useHistory();
  useEffect(() => {
    if (userlogin.isLogin !== true) {

      alert("first you must login")
      history.push("/")

    }
    else {
      for (let item of user) {

        if (item.email === userlogin.useremail) {
          dispatch(setLoading(true));
          Promise.all([
            dispatch(fetchHero(item.heroId)),
            dispatch(fetchHeroComics(item.heroId))
          ]).then(() =>
            dispatch(setLoading(false))
          )
          break;
        }
      }
    }

  }, [])


  console.log(loading);
  if (loading) {

    return (

      <div className={classes.loading}>
        <LinearProgress />
        <LinearProgress color="secondary" />
      </div>
    );
  }

  return (

    <React.Fragment >

      <Navbar hero={hero} />
      <HeroCard hero={hero} />

    </React.Fragment>
  );

}
export default Hero
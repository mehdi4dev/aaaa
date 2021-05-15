import React,{useEffect, useState} from 'react';
import ComicList from "../component/comicList"
import {Container,
        Grid,
        Avatar,
        Menu,
        MenuItem,
        IconButton,
        Typography,
        Toolbar,
        AppBar,
        makeStyles
      } from '@material-ui/core'
    import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {userLogOut} from "../store/actions/users"
import {fetchHeroComic } from "../store/actions/hero";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  title: {
    flexGrow: 1,
  },

  
  largeavatar:{
      width:theme.spacing(10),
      height:theme.spacing(10)
  },
  menu:{
      marginTop:theme.spacing(8)
  }
}));



 function   Favorite  () {
const classes = useStyles();
const [anchorEl, setAnchorEl] = useState(null);
const history = useHistory();
const dispatch=useDispatch()
const userlogin=useSelector(state=>state.users.login)
const user=useSelector(state=>state.users.users)
const hero=useSelector(state=>state.hero.data)


  useEffect(()=>{
            if(userlogin.isLogin !== true){

              alert("first you must login")
              history.push("/")
              
            }else{

              // console.log(user);
              for(let item of user){
                
                if(item.email===userlogin.useremail){
                  
                  dispatch(fetchHeroComic(item.heroId))
                }
              }
            }
          },[])

const handleClick = (event) => {
setAnchorEl(event.currentTarget);
};
const handleLogout = () => {
  dispatch(userLogOut(false))
  history.push("/")
};

const handleClose = () => {
  setAnchorEl(null);
 
};

  return (
    <div className={classes.root}>
      {/* {console.log(hero)} */}
      <AppBar position="static" className={classes.ma}>
      <Toolbar variant="regular">
      
      <Typography variant="h4" className={classes.title}>
      Marvel Heroes
      </Typography>
      
      <IconButton
      onClick={handleClick}
      >
      <Avatar src="/lizard.jpg" className={classes.largeavatar} />
      </IconButton>
      
      <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      className={classes.Menu}
      onClose={handleClose}
      >
      <MenuItem  >Username</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
      
      </Toolbar>
      </AppBar>

        <ComicList hero={hero} />
    
            
      </div>
  
    
    );

}

export default Favorite
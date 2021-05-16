import React, {  useState,useEffect  } from 'react';
import {Avatar,
        Button,
        CssBaseline,
        TextField,
        FormControlLabel,
        Checkbox,
        makeStyles,
        Container,
        Typography
    } from "@material-ui/core"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { fade } from '@material-ui/core/styles/colorManipulator';
import {useDispatch, useSelector } from 'react-redux';
import {userLogin} from "../store/actions/users"
// import {userInfo} from "../store/actions/users"
import {setLoading} from "../store/actions/hero"
// import info from "../json/users.json"
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root:{
         height: 900, 
        backgroundImage:'url(/MARVEL.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
    },
    paper: {
        paddingLeft:theme.spacing(1),
        paddingRight:theme.spacing(1),
        backgroundColor:fade(theme.palette.grey[50], 0.8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    container:{
        paddingTop: theme.spacing(20),  
    }
}));

 function SignIn() {
  const classes = useStyles();
  const [userName,setUserName] =useState('')
  const [password,setPassword] =useState('')
  const history = useHistory();
  const users=useSelector(state=>state.users.users)
  
  const dispatch=useDispatch();
  // useEffect(()=>{
  //   dispatch(userInfo(info))
  // },[])

  const handleSubmit=(e)=>{
    e.preventDefault()
    for(let item of users){

      if(item.email===userName && item.password==password)
      {
          dispatch(userLogin(item.email,true))
          dispatch(setLoading(true))
          history.push("/heroComics");
      }
      
    }
    
  }
  const handleChange=(e)=>{
    if(e.target.name==="username" )
        setUserName(e.target.value)
    if(e.target.name==="password" )
        setPassword(e.target.value)
  }

  return (
     <div className={classes.root}>
       
     
    <Container    component="main" maxWidth="xs" className={classes.container} >
        <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" color="" >
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="username"
            autoComplete="email"
            autoFocus
            onChange={handleChange}

            />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
            />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            
            
            >
            Sign In
     
          </Button>
         
        </form>
      </div>
  
    </Container>
     
    </div>
    
  );
}


export default SignIn
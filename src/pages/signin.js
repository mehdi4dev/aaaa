import React from 'react';
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

export default function SignIn() {
  const classes = useStyles();

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
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
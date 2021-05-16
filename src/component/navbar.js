import React, { useState } from "react"
import {  makeStyles } from "@material-ui/core";
import {Container,
        Grid,
        Avatar,
        Menu,
        MenuItem,
        IconButton,
        Typography,
        Toolbar,
        AppBar,
} from "@material-ui/core"

const useStyles=makeStyles((theme)=>({
    title: {
        flexGrow: 1,
      },
    
    
      
      largeavatar:{
          width:theme.spacing(10),
          height:theme.spacing(10)
      },
}))


export default function Navbar(){
    const classes=useStyles()
    const [anchorEl, setAnchorEl] = useState(null);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        };


        const handleLogout = () => {
        //   dispatch(userLogOut(false))
        //   history.push("/")
        };
        
        const handleClose = () => {
          setAnchorEl(null);
         
        };

    return(
        <AppBar position="static" >
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
            {/* <MenuItem  >{userlogin.useremail}</MenuItem> */}
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
            
            </Toolbar>
        </AppBar>
    );
}
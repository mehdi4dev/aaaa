import React,{useState} from 'react';

import Card from "../component/card"
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





const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  title: {
    flexGrow: 1,
  },

  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
  },
  
  largeavatar:{
      width:theme.spacing(10),
      height:theme.spacing(10)
  },
  menu:{
      marginTop:theme.spacing(8)
  }
}));


const cards = [1, 2, 3, 4, 5, 6];

export default function     () {
const classes = useStyles();
const [anchorEl, setAnchorEl] = useState(null);

const handleClick = (event) => {
setAnchorEl(event.currentTarget);
};

const handleClose = () => {
setAnchorEl(null);
};

  return (
    <div className={classes.root}>
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
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>

        </Toolbar>
      </AppBar>
      <Container className={classes.cardGrid} maxWidth="lg">   
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card  />
              </Grid>
            ))}
          </Grid>
        </Container>
  
    </div>
    
    
  );

}

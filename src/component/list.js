import React from "react"
import {makeStyles,
      
        ListItem,
        ListItemAvatar,
        Avatar,
        ListItemText,
        Typography,
        Divider
} from "@material-ui/core"


const useStyles=makeStyles((theme)=>({
        list: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
      },
      inline: {
        display: 'inline',
      },
}))
export default function  ListOfComics(){
    const classes =useStyles();
    return(
        <div>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                primary="Brunch this weekend?"
                secondary={
                    <React.Fragment>
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                    >
                        Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            </div>
        
    );
}
import React from "react"
import {makeStyles,
      List,
        ListItem,
        ListItemAvatar,
        Avatar,
        ListItemText,
        Typography,
        Divider
} from "@material-ui/core"
import LinearProgress from '@material-ui/core/LinearProgress';
import { useSelector } from "react-redux";

const useStyles=makeStyles((theme)=>({
       
      inline: {
        display: 'inline',
      },
}))
export default function  ListOfComics({comics}){
    const classes =useStyles();
    const loading=useSelector(state=>state.hero.loading)
    const handleSubmit=()=>{
        window.open(`https://www.marvel.com/comics/issue/${comics.id}/${comics.title}`, "_blank")
    }
    return(
        <div>
            {console.log(loading)}
            <form onClick={handleSubmit}>


                <ListItem alignItems="flex-start" >
                    <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={`${comics.images[0].path}.jpg`} />
                    </ListItemAvatar>
                    <ListItemText
                    primary={comics.title}
                    secondary={
                        <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                        
                        
                        </Typography>
                        {/* {comics.description} */}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
            </form>
          
            </div>
        
    );
}
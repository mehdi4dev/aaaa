import React from "react"
import {
    makeStyles,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Typography,
    Divider,
    Box
} from "@material-ui/core"
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        '&:hover': {
            cursor: "pointer"
        }
    },
    Box:{
        width: 500, 
        whiteSpace: 'nowrap',
        [theme.breakpoints.down(1300)]: {
            width: 350,
          },
        [theme.breakpoints.down(1100)]: {
            width: 250,
          },
          [theme.breakpoints.down(1000)]: {
            width: 500,
          }
    },
    inline: {
        display: 'inline',
    },
}))
export default function ListOfComics({ comics }) {
    const classes = useStyles();
    const loading = useSelector(state => state.hero.loading)
    const handleSubmit = () => {
        window.open(`https://www.marvel.com/comics/issue/${comics.id}/${comics.title}`, "_blank")
    }
    return (
        <div>
            {console.log(loading)}
            <form onClick={handleSubmit} className={classes.root}>


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
                                    variant="caption"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    
                                    <Box component="div" className={classes.Box} textOverflow="ellipsis" overflow="hidden" bgcolor="background.paper">

                                        {comics.description}
                                    </Box>
                           
                                </Typography>

                                {console.log(comics)}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="fullWidth" component="li" />
            </form>

        </div>

    );
}
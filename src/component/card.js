import React from "react"
import {CardActions,
        makeStyles,
        Button,
        Card,
        CardMedia,
        CardContent,
        Typography
    } from "@material-ui/core"
import captian from '../images/1.jpg'

const useStyles=makeStyles((theme)=>({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      cardMedia: {
        paddingTop: '100%', // 16:9
        
      },
      cardContent: {
        flexGrow: 1,
      }
}))

export default function Cards({props}){
    const classes=useStyles()
return(  
        <Card className={classes.card}>
            <CardMedia
            
            className={classes.cardMedia}
            image={captian}
            
            title="Image title"
            />
            
            <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
                Heading
            </Typography>
            <Typography>
                This is a media card. You can use this section to describe the content.
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small" color="primary">
                View
            </Button>
            <Button size="small" color="primary">
                Edit
            </Button>
            </CardActions>
        </Card>

    );
}
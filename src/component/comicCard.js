import React from "react"
import {CardActions,
        makeStyles,
        Button,
        Card,
        CardMedia,
        CardContent,
        Typography
    } from "@material-ui/core"

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

export default function ComicCard({hero}){
    const classes=useStyles()
    const handleSubmit=()=>{

    }
return(  
    <Card className={classes.card} onSubmit={handleSubmit}>
            <CardMedia
            className={classes.cardMedia}
            image={`${hero.images[0].path}.jpg`}
            
            title="Image title"
            />
            
            <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
                {hero.title}
            </Typography>
            <Typography>
                {hero.description}
            </Typography>
            </CardContent>
            <CardActions>
            <Button 
            size="small" 
            color="primary"
            variant="contained"
            
            >
                View
            </Button>
            
            </CardActions>
        </Card>

    );
}
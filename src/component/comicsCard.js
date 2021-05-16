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

export default function ComicsCard({comic}){
    const classes=useStyles()

    const handleClick=(e)=>{
        window.open(`https://www.marvel.com/comics/issue/${comic.id}/${comic.title}`, "_blank")
 
    }

return(  
    

    <Card className={classes.card}  onClick={handleClick}>
            <CardMedia
            className={classes.cardMedia}
            image={`${comic.images[0].path}.jpg`}
            
            title="Image title"
            />
            
            <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
                {comic.title}
            </Typography>
            <Typography>
                {comic.description}
            </Typography>
            </CardContent>
            <CardActions>
            <Button 
            size="small" 
            color="primary"
            variant="contained"
            // href={`https://www.marvel.com/comics/issue/${hero.id}/${hero.title}`}
            // target="_blank"
            
            >
                View
            </Button>
            
            </CardActions>
        </Card>

  
    );
}
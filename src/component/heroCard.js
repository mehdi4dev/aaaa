import React from "react"
import {CardActions,
        makeStyles,
        Button,
        Card,
        CardMedia,
        CardContent,
        Grid,
        Container,
        List,
    } from "@material-ui/core"
import ListOfComics from "./list"
import Navbar from "./navbar"
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

const useStyles=makeStyles((theme)=>({
    container:{
        paddingTop: theme.spacing(8),
        paddingBottom:theme.spacing(4)
    },
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
      },
      
}))
const list=[1,2,3,4,5]
export default function Hero(){
    const classes=useStyles()

    const handleClick=(e)=>{
        // window.open(`https://www.marvel.com/comics/issue/${comic.id}/${comic.title}`, "_blank")
 
    }

return(  
    <div>
    <Navbar/>
    <Container className={classes.container} maxWidth="lg">

            <Grid container  direction="row" maxWidth="lg" >
                <Grid item xs>
                        <Card className={classes.card}  onClick={handleClick}>
                                <CardMedia
                                className={classes.cardMedia}
            
                                image={"/logo192.png"}
                                title="Image title"
                                />
                            
                            </Card>
                </Grid>
                <Grid item xs>
                            <Card className={classes.card}  onClick={handleClick}>
                                {list.map(item=>(
                                    <List className={classes.list}>
                                        <ListOfComics key={item.key} />
                                    </List>
                                ))}
                                    <CardContent className={classes.cardContent}>
                                    
                                    </CardContent>
                                    <CardActions>
                                    <Button 
                                    size="large"
                                    fullWidth 
                                    color="primary"
                                    variant="contained"
                                    // href={`https://www.marvel.com/comics/issue/${hero.id}/${hero.title}`}
                                    // target="_blank"
                                        endIcon={<DoubleArrowIcon />}
                                    >
                                    
                                        Hero's comics
                                    </Button>
                                    
                                    </CardActions>
                                </Card>
                </Grid>
            </Grid>

        
        </Container>
        </div>
    );
}
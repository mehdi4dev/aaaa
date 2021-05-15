import React from "react"
import ComicCard from "./comicCard"
import { Grid,Container } from "@material-ui/core";
import {makeStyles} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({

    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom:theme.spacing(4)
      },
  }));

export default function  ComicList({hero}){
    const classes = useStyles();
    return (
        <div >
            {/* {console.log(hero)} */}
            <Container className={classes.cardGrid} maxWidth="lg" >
            <Grid container spacing={4} >
             {hero.map((hero)=>(
                <Grid item    xs={12} sm={6} md={4}>
                    {/* {let imagepath=hero[index].images[0].path} */}
                 <ComicCard key={hero.id}  hero={hero} />
                 </Grid>
             ))

             }   
            </Grid>
            </Container>
        </div>
    );
}
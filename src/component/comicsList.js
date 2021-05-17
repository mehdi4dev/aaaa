import React from "react"
import ComicsCard from "./comicsCard"
import { Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({

    container: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(4)
    },
}));

export default function ComicsList({ comics }) {
    const classes = useStyles();
    return (
        <div >

            <Container className={classes.container} maxWidth="lg" >
                <Grid container spacing={4} >
                    {comics.map((comic) => (
                        <Grid item xs={12} sm={6} md={4}>
                            <ComicsCard key={comic.id} comic={comic} />
                        </Grid>
                    ))

                    }
                </Grid>
            </Container>
        </div>
    );
}
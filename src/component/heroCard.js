import React, { useEffect } from "react"
import {
    CardActions,
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
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";


const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(4),


    },


    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        width: 600,
        [theme.breakpoints.down(1000)]: {
            width: 600,
        },
        [theme.breakpoints.down(700 )]: {
            width: 450,
        },
        [theme.breakpoints.down(500)]: {
            width: 340,
        },
        [theme.breakpoints.down(500)]: {
            width: 250,
        },
       

    },
    cardList: {
        height: 600,
        // [theme.breakpoints.down(1000)]: {
        //     width: 600,
        // },
        // [theme.breakpoints.down(500)]: {
        //     width: 100,
        // },
    },
    cardMedia: {
        paddingTop: '100%', // 16:9
        [theme.breakpoints.down('md')]: {
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }

    },


}))

export default function HeroCard({ hero }) {
    const classes = useStyles()
    const user = useSelector(state => state.users.users)
    const userlogin = useSelector(state => state.users.login)
    const comics = useSelector(state => state.hero.comics)
    const loading = useSelector(state => state.hero.loading)
    const history = useHistory()

    const handleClick = (e) => {
        if (userlogin.isLogin !== true) {

            alert("first you must login")
            history.push("/")

        }
        else {

            for (let item of user) {

                if (item.email === userlogin.useremail) {

                    history.push("/heroComics");

                }
            }
        }
    }

    return (
        <div>

            <Container className={classes.container} maxWidth="lg">

                <Grid container direction="row"   >
                    <Grid item xs >
                        <Card className={classes.card}  >
                            <CardMedia
                                className={classes.cardMedia}

                                image={`${hero[0].thumbnail.path}.jpg`}
                                title="Image title"
                            />
                        </Card>
                    </Grid>
                    <Grid item xs>


                        {!loading &&
                            <Card className={classes.cardList}>
                                {comics.filter((comic, index) => index < 6).map((comic) => (
                                    <List className={classes.list}>
                                        <ListOfComics key={comic.id} comics={comic} />
                                    </List>
                                ))}

                                <CardActions >
                                    <Button
                                        size="large"
                                        fullWidth
                                        color="primary"
                                        variant="contained"
                                        onClick={handleClick}
                                        endIcon={<DoubleArrowIcon />}

                                    >

                                        More
                                    </Button>

                                </CardActions>
                            </Card>
                        }
                    </Grid>
                </Grid>


            </Container>
        </div>
    );
}
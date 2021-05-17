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
import { fetchHeroComics } from "../store/actions/hero";
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../store/actions/hero"
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
               
  

    },
    cardList:{
        height:600,
        [theme.breakpoints.down(1000)]: {
            width: 600,
          },
    },
    cardMedia: {
        paddingTop: '100%', // 16:9
        [theme.breakpoints.down('md')]: {
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }

    },
    cardContent: {
        flexGrow: 1,
    },

}))

export default function HeroCard({ hero }) {
    const classes = useStyles()
    const user = useSelector(state => state.users.users)
    const userlogin = useSelector(state => state.users.login)
    const comics = useSelector(state => state.hero.comics)
    const loading = useSelector(state => state.hero.loading)
    const history = useHistory()
    const dispatch = useDispatch()
    useEffect(() => {
        for (let item of user) {

            if (item.email === userlogin.useremail) {
                // dispatch(setLoading(true))
                dispatch(fetchHeroComics(item.heroId))
            }
        }
    }, [])

    const handleClick = (e) => {
        if (userlogin.isLogin !== true) {

            alert("first you must login")
            history.push("/")

        }
        else {

            for (let item of user) {

                if (item.email === userlogin.useremail) {

                    dispatch(setLoading(true))
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
                            <Card   className={classes.cardList}>
                                {comics.filter((comic, index) => index < 6).map((comic) => (
                                    <List className={classes.list}>
                                        <ListOfComics key={comic.id} comics={comic} />
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
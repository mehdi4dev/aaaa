import React, { useState } from "react"
import { makeStyles } from "@material-ui/core";
import {

    Avatar,
    Menu,
    MenuItem,
    IconButton,
    Typography,
    Toolbar,
    AppBar,
} from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { userLogOut } from "../store/actions/users"
const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
    largeavatar: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        '&:hover': {
            cursur: "pointer"
        }
    },
}))


export default function Navbar({ hero }) {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null);
    const userlogin = useSelector(state => state.users.login)
    const dispatch = useDispatch();
    const history = useHistory();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };


    const handleLogout = () => {
        dispatch(userLogOut(false))
        history.push("/")
    };

    const handleClose = () => {
        setAnchorEl(null);

    };

    return (
        <AppBar position="static" color="secondary" >
            <Toolbar variant="regular">

                <Typography variant="h3" className={classes.title}>
                    MARVEL HEROS
            </Typography>

                <IconButton
                    onClick={handleClick}
                >
                    <Avatar src={`${hero[0].thumbnail.path}.jpg`} className={classes.largeavatar} />
                </IconButton>

                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    className={classes.Menu}
                    onClose={handleClose}
                >
                    <MenuItem  >{userlogin.username}</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>

            </Toolbar>
        </AppBar>
    );
}
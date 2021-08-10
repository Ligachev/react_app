import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {AppBar, Button, Toolbar, Typography} from '@material-ui/core';
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStore} from "../../index";
import {logout_user_action} from "../../redux/action";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            display: 'flex',
            justifyContent: 'space-between',
            flexGrow: 1,
        },
        title: {
            flexGrow: 6,
        },
        toolbar: {
            display: 'flex',
            justifyContent: 'space-around',
        }
    }),
);

export function HomePage() {
    const classes = useStyles();
    const user = useSelector((state: AppStore) => state.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = () => {
        history.push('/login');
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" className={classes.title}>
                        Dictionary App
                    </Typography>
                    <div className={classes.menuButton}>
                        {
                            user.isLogin ?
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => dispatch(logout_user_action())}
                                >
                                    Logout
                                </Button> :
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleClick}
                                >
                                    Login
                                </Button>
                        }
                        {/*<Link to="/login">*/}
                        {/*    Login*/}
                        {/*</Link>*/}
                        <Link to="/dictionary">
                            Dictionary
                        </Link>
                        <Link to="/about">
                            About
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

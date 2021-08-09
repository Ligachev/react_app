import React, {useState} from 'react';
import clsx from 'clsx';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {AppStore} from "../../index";
import {login_user_action} from "../../redux/action";
import {useHistory, useLocation} from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        margin: {
            margin: theme.spacing(1),
        },
        withoutLabel: {
            marginTop: theme.spacing(3),
        },
        textField: {
            width: '25ch',
        },
    }),
);

interface State {
    name: string;
    password: string;
    showPassword: boolean;
}

export function LoginPage() {
    const classes = useStyles();
    const [values, setValues] = useState<State>({
        name: '',
        password: '',
        showPassword: false,
    });
    const [error, setError] = useState({ok: false, text: ''});
    const user = useSelector((state: AppStore) => state.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    // @ts-ignore
    const {from} = location.state || {from: {pathname: "/"}};
    const submit = () => {
        if ((user.name === values.name) && (user.password === values.password)) {
            dispatch(login_user_action());
            history.replace(from);
        } else {
            setError({ok: true, text: 'Указан неверный логин и/или пароль'});
        }
    }

    const handleFocus = () => {
        setError({ok: false, text: ''});
    };

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [prop]: event.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword});
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <div className={classes.root}>
            <form>
                <TextField
                    id="outlined-basic"
                    label="Login"
                    variant="outlined"
                    onChange={handleChange("name")}
                    onFocus={handleFocus}
                    error={error.ok}
                    helperText={error.text}
                />
                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <Visibility/> : <VisibilityOff/>}
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={70}
                        error={error.ok}
                    />
                </FormControl>
                <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    onClick={submit}
                >
                    Войти
                </Button>
            </form>
        </div>
    );
}

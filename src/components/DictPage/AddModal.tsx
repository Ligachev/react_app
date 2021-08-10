import React, {ChangeEvent, useState} from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Button, TextField} from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import {useDispatch} from "react-redux";
import {Book} from "../../redux/reducer";
import {add_book_action} from "../../redux/action";

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
        field: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }),
);

type AddModalType = {
    isOpen: boolean;
    onClose: () => void;
}

export function AddModal(props: AddModalType) {
    const {isOpen, onClose} = props;
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [error, setError] = useState({ok: false, text: ''});
    const [book, setBook] = useState<Omit<Book, 'id'>>({
        name: '',
        author: '',
        description: ''
    });
    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (book.name) {
            dispatch(add_book_action(book));
            onClose();
        } else {
            setError({ok: true, text: 'Укажите название книги'});
        }
    };

    const handleFocus = () => {
        setError({ok: false, text: ''});
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>, field: keyof Omit<Book, 'id'>) => {
        setBook(prevState => ({...prevState, [field]: event.target.value}));
    };

    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div style={modalStyle} className={classes.paper}>
                <Typography variant="h6" id="tableTitle" component="div">
                    Добавить книгу
                </Typography>
                <form className={classes.field} noValidate autoComplete="off">
                    <TextField
                        id="outlined-basic"
                        label="Название"
                        variant="outlined"
                        onFocus={handleFocus}
                        error={error.ok}
                        helperText={error.text}
                        onChange={
                            (event) => handleChange(
                                event as ChangeEvent<HTMLInputElement>, 'name')}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Автор"
                        variant="outlined"
                        onChange={
                            (event) => handleChange(
                                event as ChangeEvent<HTMLInputElement>, 'author')}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Описание"
                        variant="outlined"
                        onChange={
                            (event) => handleChange(
                                event as ChangeEvent<HTMLInputElement>, 'description')}
                    />
                    <Button variant="contained" color="primary" disableElevation onClick={handleSubmit}>
                        Сохранить
                    </Button>
                </form>
            </div>
        </Modal>

    );
}

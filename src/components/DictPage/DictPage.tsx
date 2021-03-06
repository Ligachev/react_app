import React, {useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import {Delete, Add, Search} from '@material-ui/icons';
import {Link} from "react-router-dom";
import {Breadcrumbs} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {AppStore} from "../../index";
import {Book} from '../../redux/reducer';
import {del_book_action, search_book_action} from "../../redux/action";
import {AddModal} from "./AddModal";
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';


interface HeadCell {
    disablePadding: boolean;
    id: keyof Book;
    label: string;
    numeric: boolean;
}

const headCells: HeadCell[] = [
    {id: 'id', numeric: false, disablePadding: true, label: ''},
    {id: 'name', numeric: false, disablePadding: true, label: 'Название книги'},
    {id: 'author', numeric: false, disablePadding: true, label: 'Автор'},
    {id: 'description', numeric: false, disablePadding: true, label: 'Описание'},
];

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        toolBar: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(1),
        },
        title: {
            flex: '1 1 100%',
        },
        paper: {
            width: '100%',
            marginBottom: theme.spacing(2),
        },
        table: {
            minWidth: 750,
        },
        visuallyHidden: {
            border: 0,
            clip: 'rect(0 0 0 0)',
            height: 1,
            margin: -1,
            overflow: 'hidden',
            padding: 0,
            position: 'absolute',
            top: 20,
            width: 1,
        },
        margin: {
            margin: theme.spacing(1),
        },
    }),
);

export function DictPage() {
    const classes = useStyles();
    const books = useSelector((state: AppStore) => state.books);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(100);
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div className={classes.root}>
            <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                <Link to="/">
                    Home
                </Link>
                <Link to="/dictionary">
                    Dictionary
                </Link>
            </Breadcrumbs>
            <Paper className={classes.paper}>
                <Toolbar
                    className={classes.toolBar}
                >
                    <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                        Книги
                    </Typography>
                    <FormControl className={classes.margin}>
                        <Input
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <IconButton aria-label="add" onClick={() => dispatch(search_book_action(search))}>
                                        <Search/>
                                    </IconButton>
                                </InputAdornment>
                            }
                            onChange={handleSearch}
                        />
                    </FormControl>
                    <Tooltip title="Add">
                        <IconButton aria-label="add" onClick={handleOpen}>
                            <Add/>
                        </IconButton>
                    </Tooltip>
                </Toolbar>
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size='small'
                        aria-label="enhanced table"
                    >
                        <TableHead>
                            <TableRow>
                                {headCells.map((headCell) => (
                                    <TableCell
                                        key={headCell.id}
                                        align={headCell.numeric ? 'right' : 'left'}
                                        padding={headCell.disablePadding ? 'none' : 'default'}
                                    >
                                        {headCell.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {books.map((book, index) => (
                                <TableRow
                                    hover
                                    key={book.id}
                                >
                                    <TableCell>
                                        <Tooltip title="Delete">
                                            <IconButton aria-label="delete"
                                                        onClick={() => dispatch(del_book_action(book.id))}>
                                                <Delete/>
                                            </IconButton>
                                        </Tooltip>
                                    </TableCell>
                                    <TableCell component="th" id={index.toString()} scope="row" padding="none">
                                        {book.name}
                                    </TableCell>
                                    <TableCell>{book.author}</TableCell>
                                    <TableCell>{book.description}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 50, 100]}
                    component="div"
                    count={books.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <AddModal isOpen={isOpen} onClose={handleClose}/>
        </div>
    );
}



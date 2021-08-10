import {fakeBooks, fakeUser} from "../fakeData/fakeData";
import {BooksActions, LoginUserActions} from "./action";
import {Reducer} from "react";

export type User = {
    isLogin: boolean;
    name: string;
    password: string;
}

export type Book = {
    id: number;
    name: string;
    author: string;
    description: string;
}

export const userReducer: Reducer<User,
    LoginUserActions> = (
    state: User = fakeUser,
    action: LoginUserActions
): User => {
    switch (action.type) {
        case 'LOGIN_USER':
            return {...state, isLogin: true};
        case 'LOGOUT_USER':
            return {...state, isLogin: false};
        default:
            return state;
    }
};

export const booksReducer: Reducer<readonly Book[],
    BooksActions> = (
    state: readonly Book[] = fakeBooks(),
    action: BooksActions
): readonly Book[] => {
    switch (action.type) {
        case 'ADD_BOOK':
            return [{...action.book, id: state[state.length - 1].id + 1}, ...state];
        case 'DEL_BOOK':
            return state.filter((book) => book.id !== action.bookId);
        case 'SEARCH_BOOK':
            if (action.searchString) {
                return state.filter((book) => book.name.toLowerCase().includes(action.searchString.toLowerCase()));
            }
            return fakeBooks();
        default:
            return state;
    }
};

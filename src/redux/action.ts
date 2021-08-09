import {Book} from "./reducer";

export type LoginUserActions = ReturnType<| typeof login_user_action
    | typeof logout_user_action>;

export type BooksActions = ReturnType<| typeof add_book_action
    | typeof del_book_action
    | typeof search_book_action>;

export const login_user_action = () => {
    return {
        type: 'LOGIN_USER',
    } as const;
};

export const logout_user_action = () => {
    return {
        type: 'LOGOUT_USER',
    } as const;
};

export const add_book_action = (book: Omit<Book, 'id'>) => {
    return {
        type: 'ADD_BOOK',
        book,
    } as const;
};

export const del_book_action = (bookId: number) => {
    return {
        type: 'DEL_BOOK',
        bookId,
    } as const;
};

export const search_book_action = (searchString: string) => {
    return {
        type: 'SEARCH_BOOK',
        searchString,
    } as const;
};
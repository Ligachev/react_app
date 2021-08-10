import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App';
import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import thunkMiddleware from "redux-thunk";
import {Provider} from "react-redux";
import {Book, booksReducer, User, userReducer} from "./redux/reducer";
import { composeWithDevTools } from 'redux-devtools-extension';


export type AppStore = {
    user: User;
    books: Book[];
}

const store: Store<AppStore> = createStore(
    combineReducers({
        user: userReducer,
        books: booksReducer,
    }),
    composeWithDevTools(applyMiddleware(thunkMiddleware))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

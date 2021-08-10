import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import {HomePage} from "../HomePage";
import {AboutPage} from "../AboutPage";
import {DictPage} from "../DictPage";
import {LoginPage} from "../LoginPage";
import {useSelector} from "react-redux";
import {AppStore} from "../../index";

export function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <HomePage/>
                        </Route>
                        <Route path="/about">
                            <AboutPage/>
                        </Route>
                        <PrivateRoute path="/dictionary">
                            <DictPage/>
                        </PrivateRoute>
                        <Route path="/login">
                            <LoginPage/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

type PrivateRouteType = {
    children: React.ReactNode;
    path: string;
}

function PrivateRoute({children, ...rest}: PrivateRouteType) {
    const auth = useSelector((state: AppStore) => state.user.isLogin);
    return (
        <Route
            {...rest}
            render={({location}) =>
                auth ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    );
}
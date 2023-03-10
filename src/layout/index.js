import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import routes from "../routes";

const Main = () => {
    return (
        <HashRouter>
            <Switch>
                {
                    routes.map((route, index) => {
                        return (
                            <Route
                                key={index}
                                exact={route.exact}
                                path={route.path}
                                render={(props) => <route.component {...props} />}
                            />
                        )
                    })
                }
                <Redirect to="/" />
            </Switch>
        </HashRouter>
    )
}

export default Main;
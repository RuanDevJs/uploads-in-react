import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { AuthenticateContext } from "../Contexts/AuthenticateContext";

import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import SignOut from "../Pages/SignOut";

function CustomRoutes({isPrivate, ...props}){
    const {authenticated, loading} = useContext(AuthenticateContext);

    if(loading){
        return(
            <p>Loading</p>
        )
    }

    if(isPrivate && !authenticated){
        return(
            <Redirect to="/" />
        );
    }

    return(
        <Route {...props}/>
    )
}

export default function Routes() {
    return (
        <Switch>
            <CustomRoutes exact path="/" component={SignIn} />
            <CustomRoutes exact path="/register" component={SignOut} />
            <CustomRoutes isPrivate exact path="/home" component={Home} />
        </Switch>
    );
}

import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { UserContext } from "../Contexts/UserContext";

import Home from "../Pages/Home";
import SignOut from "../Pages/SignOut";

function CustomRoutes({isPrivate, ...props}){
    const {loading, authenticated} = useContext(UserContext);

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
            <CustomRoutes exact path="/" component={SignOut} />
            <CustomRoutes isPrivate exact path="/home" component={Home} />
        </Switch>
    );
}

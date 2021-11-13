import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Routes from "./Routes";
import UserProvider from "./Contexts/UserContext";

function App() {
    return (
        <BrowserRouter>
            <UserProvider>
                <Routes />
            </UserProvider>
        </BrowserRouter>
    );
}

export default App;

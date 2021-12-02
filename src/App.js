import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Routes from "./Routes";
import {AuhtenticateProvider} from "./Contexts/AuthenticateContext";

function App() {
    return (
        <BrowserRouter>
            <AuhtenticateProvider>
                <Routes />
            </AuhtenticateProvider>
        </BrowserRouter>
    );
}

export default App;

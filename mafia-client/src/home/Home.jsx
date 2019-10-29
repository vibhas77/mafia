import React from 'react';
import Welcome from "./Welcome";
import AuthenticatedRoute from "../auth/AuthenticatedRoute";
import CoreApp from "../app/CoreApp";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

function Home(props) {
    return (
        <div>
            <Route path={"/"} component={Welcome} />
        </div>
    );
}

export default Home;
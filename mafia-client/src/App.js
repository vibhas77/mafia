import React from 'react';
import './App.css';
import Home from './home/Home.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faUser, faClipboard , faList , faTrophy } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

library.add(fab, faCheckSquare, faCoffee , faUser , faClipboard , faList , faTrophy);

function App() {
  return (
      <Router>
          <Switch>
              <Route path="/" component={Home} />
              {/*<Redirect from="/" to="/home" />*/}
          </Switch>
      </Router>
  );
}

export default App;

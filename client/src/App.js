import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Path from './components/Path';

import './App.css';

const App = () => (
    <Router>
        <Fragment>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/path" component={Path} />
            </Switch>
        </Fragment>
    </Router>
);

export default App;

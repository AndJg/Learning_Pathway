import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Path from './components/Path';

class Root extends React.Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Navbar />
                    <Route exact path="/" component={Landing} />
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/path" component={Path} />
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}

export default Root;

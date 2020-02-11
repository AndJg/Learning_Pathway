import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Task from './components/Path/TaskDetails';
import TaskDetails from './components/Path/TaskDetails';

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
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route path="/taskdetails/:id" component={TaskDetails} />
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}

export default Root;

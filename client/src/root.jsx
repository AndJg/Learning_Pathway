import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import Login from './components/auth/Login';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import TaskDetails from './components/Path/TaskDetails';
import Register from './components/auth/Register';
import CreatePath from './components/Path/CreatePath';
import CreateTask from './components/Path/CreateTask';

class Root extends React.Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Navbar />
                    <Route exact path="/" component={Landing} />
                    <Switch>
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route path="/taskdetails/:id" component={TaskDetails} />
                        <Route path="/createpath" component={CreatePath} />
                        <Route path="/createtask" component={CreateTask} />
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}

export default Root;

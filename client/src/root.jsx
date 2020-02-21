import React, { Fragment, useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import Login from './components/auth/Login';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import TaskDetails from './components/Path/TaskDetails';
import Register from './components/auth/Register';
import CreatePath from './components/Path/CreatePath';
import CreateTask from './components/Path/CreateTask';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/authAction';
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/layout/Profile';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const Root = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <Provider store={store}>
            <Router>
                <Fragment>
                    <Navbar />
                    <Route exact path="/" component={Landing} />
                    <Switch>
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                        <PrivateRoute exact path="/dashboard" component={Dashboard} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/taskdetails/:id" component={TaskDetails} />
                        <Route path="/createpath" component={CreatePath} />
                        <Route path="/createtask" component={CreateTask} />
                    </Switch>
                </Fragment>
            </Router>
        </Provider>
    );
};

export default Root;

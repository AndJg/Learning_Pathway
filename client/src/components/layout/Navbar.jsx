import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { logout } from '../../actions/authAction';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const loggedInLinks = (
        <ul className="right">
            <li>
                <NavLink to="/dashboard">dashboard</NavLink>
            </li>
            <li>
                <NavLink to="/profile" className="user-photo">
                    US
                </NavLink>
            </li>
            <li>
                <a onClick={logout}>Logout</a>
            </li>
        </ul>
    );

    const LoggedOutLinks = (
        <ul className="right">
            <li>
                <NavLink to="/login">Sign In</NavLink>
            </li>
            <li>
                <NavLink to="/register">Sign Up</NavLink>
            </li>
        </ul>
    );

    return (
        <nav>
            <div className="container">
                <li>
                    <Link to="/" className="logo-brand">
                        Learning_Pathway
                    </Link>
                </li>
            </div>
            {!loading && <Fragment>{isAuthenticated ? loggedInLinks : LoggedOutLinks}</Fragment>}
        </nav>
    );
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);

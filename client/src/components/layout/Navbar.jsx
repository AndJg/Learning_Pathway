import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import './Navbar.scss';
import { logout } from '../../actions/authAction';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const loggedInLinks = (
        <ul className="right">
            <li className="right__link">
                <NavLink to="/dashboard">dashboard</NavLink>
            </li>
            <li className="right__link">
                <NavLink to="/profile" className="user-photo">
                    US
                </NavLink>
            </li>
            <li className="right__link">
                <a href="#" onClick={logout}>
                    Logout
                </a>
            </li>
        </ul>
    );

    const LoggedOutLinks = (
        <ul className="right">
            <li className="right__link">
                <NavLink to="/login">Sign In</NavLink>
            </li>
            <li className="right__link">
                <NavLink to="/register">Sign Up</NavLink>
            </li>
        </ul>
    );

    return (
        <nav>
            <div className="container">
                <li className="container__logo-brand">
                    <Link to="/">Learning_Pathway</Link>
                </li>
                {!loading && <Fragment>{isAuthenticated ? loggedInLinks : LoggedOutLinks}</Fragment>}
            </div>
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

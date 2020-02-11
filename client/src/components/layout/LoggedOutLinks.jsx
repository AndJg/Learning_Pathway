import React from 'react';
import { NavLink } from 'react-router-dom';

const LoggedOutLinks = () => {
    return (
        <ul className="right">
            <li>
                <NavLink to="/login">Sign In</NavLink>
            </li>
            <li>
                <NavLink to="/register">Sign Up</NavLink>
            </li>
        </ul>
    );
};

export default LoggedOutLinks;

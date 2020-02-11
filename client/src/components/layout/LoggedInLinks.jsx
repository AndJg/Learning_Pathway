import React from 'react';
import { NavLink } from 'react-router-dom';

const LoggedInLinks = () => {
    return (
        <ul className="right">
            <li>
                <NavLink to="/dashboard">dashboard</NavLink>
            </li>
            <li>
                <NavLink to="/profile" className="user-photo">
                    US
                </NavLink>
            </li>
        </ul>
    );
};

export default LoggedInLinks;

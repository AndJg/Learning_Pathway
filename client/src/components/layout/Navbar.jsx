import React from 'react';
import { Link } from 'react-router-dom';
import LoggedInLinks from './LoggedInLinks';
import LoggedOutLinks from './LoggedOutLinks';

const Navbar = () => {
    return (
        <nav>
            <div className="container">
                <li>
                    <Link to="/" className="logo-brand">
                        Learning_Pathway
                    </Link>
                </li>
                <LoggedInLinks />
                <LoggedOutLinks />
            </div>
        </nav>
    );
};

export default Navbar;

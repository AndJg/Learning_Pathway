import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { login } from '../../actions/authAction';

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();

        console.log({ email, password });
        login(email, password);
    };

    if (isAuthenticated) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="container">
            <form onSubmit={e => onSubmit(e)}>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="email"
                        name="email"
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder="password"
                        name="password"
                        value={password}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <input type="submit" value="Login"></input>
            </form>
        </div>
    );
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);

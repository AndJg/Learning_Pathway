import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Auth.scss';
import { register } from '../../actions/authAction';

const Register = ({ register }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const { username, email, password } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();

        console.log({ username, email, password });
        register({ username, email, password });
    };

    return (
        <div className="formContainer">
            <form onSubmit={e => onSubmit(e)}>
                <div className="formContainer__input">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        placeholder="username"
                        name="username"
                        value={username}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className="formContainer__input">
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
                <div className="formContainer__input">
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
                <input className="formContainer__input" type="submit" value="Register"></input>
            </form>
        </div>
    );
};

Register.propTypes = {
    register: PropTypes.func.isRequired,
};

export default connect(null, { register })(Register);

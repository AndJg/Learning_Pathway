import React from 'react';
import { Formik, useFormik } from 'formik';
import axios from '../utils/axios';
import * as Yup from 'yup';

const Register = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required('Required')
                .min(3, 'Username must be at least 3 characters long')
                .max(25, 'Username can not be longer than 25 characters!'),
            password: Yup.string()
                .required('Required')
                .min(3, 'Password must be minimum 3 characters long!'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
        }),
        onSubmit: fields => {
            axios
                .post('auth/register', {
                    username: fields.username,
                    email: fields.email,
                    password: fields.password,
                })
                .then(response => {
                    const token = response.data.token;
                    alert(JSON.stringify(token));
                    // fields.props.loginHandler(token);
                    // fields.props.history.push('/');
                })
                .catch(error => {
                    // document.getElementById('loginError').innerHTML = `${error.response.data}`;
                    alert(error);
                });
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? <div>{formik.errors.username}</div> : null}
            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} />
            {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
            <label htmlFor="password">Password</label>
            <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
            <button type="submit">Submit</button>
        </form>
    );
};

export default Register;

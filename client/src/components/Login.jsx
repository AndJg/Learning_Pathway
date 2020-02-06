import React from 'react';
import { Formik, useFormik } from 'formik';
import axios from '../utils/axios';
import * as Yup from 'yup';

const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            password: Yup.string().required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
        }),
        onSubmit: fields => {
            axios
                .post('auth/login', {
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

export default Login;

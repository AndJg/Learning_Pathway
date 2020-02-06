import React from 'react';
import { Formik, useFormik } from 'formik';
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
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="username">Email Address</label>
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

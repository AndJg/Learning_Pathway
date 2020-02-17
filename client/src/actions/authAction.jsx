import axios from '../utils/axios';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';

//Register
export const register = ({ username, email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const body = JSON.stringify({ username, email, password });

    try {
        const res = await axios.post('auth/register', body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
        });
    } catch (error) {
        const errors = error.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(console.log(error.msg)));
        }

        dispatch({ type: REGISTER_FAIL });
    }
};

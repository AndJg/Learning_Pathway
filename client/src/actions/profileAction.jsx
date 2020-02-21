import axios from '../utils/axios';

import { PROFILE_LOAD, PROFILE_ERROR } from './types';

export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get('auth/me');

        dispatch({
            type: PROFILE_LOAD,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status },
        });
    }
};

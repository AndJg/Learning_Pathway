import axios from '../utils/axios';

import { LOAD_PATHS, PATH_ERROR } from './types';

export const getAllPaths = () => async dispatch => {
    try {
        const res = await axios.get('path/');

        dispatch({
            type: LOAD_PATHS,
            payload: res.data,
        });
    } catch (error) {
        dispatch({ type: PATH_ERROR });
    }
};

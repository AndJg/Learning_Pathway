import uuid from 'uuid';
import { SET_ERROR, REMOVE_ERROR } from './types';

export const setError = (message, errorType) => dispatch => {
    const id = uuid.v4();

    dispatch({
        type: SET_ERROR,
        payload: { message, errorType, id },
    });
};

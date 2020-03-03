import { LOAD_PATHS, PATH_ERROR } from '../actions/types';

const initialState = {
    paths: [],
    loading: null,
    error: {},
};

const pathReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_PATHS:
            return {
                ...state,
                paths: payload,
                loading: false,
            };
        case PATH_ERROR:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export default pathReducer;

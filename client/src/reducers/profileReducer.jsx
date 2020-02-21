import { PROFILE_LOAD, PROFILE_ERROR } from '../actions/types';

const initialState = {
    profile: null,
    loading: null,
    error: {},
};

const profileReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case PROFILE_LOAD:
            return {
                ...state,
                profile: payload,
                loading: false,
            };
        case PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default profileReducer;

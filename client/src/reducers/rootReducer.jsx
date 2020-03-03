import { combineReducers } from 'redux';
import authReducer from './authReducer';
import pathReducer from './pathReducer';
import taskReducer from './taskReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    path: pathReducer,
    task: taskReducer,
    error: errorReducer,
    profile: profileReducer,
});

export default rootReducer;

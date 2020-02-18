import { combineReducers } from 'redux';
import authReducer from './authReducer';
import pathReducer from './pathReducer';
import taskReducer from './taskReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    paths: pathReducer,
    task: taskReducer,
    error: errorReducer,
});

export default rootReducer;

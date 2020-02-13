import { combineReducers } from 'redux';
import authReducer from './auth';
import pathReducer from './pathReducer';
import taskReducer from './taskReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    paths: pathReducer,
    task: taskReducer,
});

export default rootReducer;

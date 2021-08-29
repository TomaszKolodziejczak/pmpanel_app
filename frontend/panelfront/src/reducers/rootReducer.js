import { combineReducers } from 'redux';

import commentReducer from './commentReducer';
import projectReducer from './projectReducer';
import userReducer from './userReducer';
import auth from './auth'

export const rootReducer = combineReducers({
    comments: commentReducer,
    projects: projectReducer,
    users: userReducer,
    auth,
});

export default rootReducer;
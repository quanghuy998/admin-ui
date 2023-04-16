import users from './users';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    users,
});

export default rootReducer;

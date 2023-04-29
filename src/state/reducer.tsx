import users from './users';
import roles from './roles';
import notifications from './notifications';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    users,
    roles,
    notifications,
});

export default rootReducer;

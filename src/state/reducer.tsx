import { combineReducers } from '@reduxjs/toolkit';

import authentication from './authentication';
import notifications from './notifications';
import users from './users';
import roles from './roles';

const rootReducer = combineReducers({
    users,
    roles,
    notifications,
    authentication,
});

export default rootReducer;

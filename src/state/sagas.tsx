import { all } from 'redux-saga/effects';

import { sagas as authenticationSaga } from './authentication';
import { sagas as notificationSaga } from './notifications';
import { sagas as userSagas } from './users';
import { sagas as roleSaga } from './roles';

export default function* saga() {
    yield all([...userSagas, ...roleSaga, ...notificationSaga, ...authenticationSaga]);
}

import { sagas as userSagas } from './users';
import { sagas as roleSaga } from './roles';
import { sagas as notificationSaga } from './notifications';
import { all } from 'redux-saga/effects';

export default function* saga() {
    yield all([...userSagas, ...roleSaga, ...notificationSaga]);
}

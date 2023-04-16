import { sagas as userSagas } from './users';
import { all } from 'redux-saga/effects';

export default function* saga() {
    yield all([...userSagas]);
}

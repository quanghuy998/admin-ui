import { call, put, takeLeading } from 'redux-saga/effects';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { IUser, IUserActionTypes, IUserState } from './types';
import { getUsersAsync } from '../../api/users/user.service';
import { GET_USERS, SET_USERS } from './constants';
import IState, { getDefaultState } from '../state';

/*----------------- Start reducer -------------------------------*/

const getUsers = (): IUserActionTypes => ({
    type: GET_USERS,
});

const setUsers = (users: IUser[]): IUserActionTypes => ({
    type: SET_USERS,
    users: users,
});

export default function reducer(state = getDefaultState().users, action: IUserActionTypes): IUserState {
    switch (action.type) {
        case SET_USERS:
            return { ...state, isFetching: false, users: action.users };
        default:
            return state;
    }
}
/*----------------- End reducer -------------------------------*/

/*----------------- Start Saga -------------------------------*/
function* fetchUsers() {
    const users: IUser[] = yield call(getUsersAsync);
    if (users) yield put(setUsers(users));
}

export const sagas = [takeLeading(GET_USERS, fetchUsers)];
/*----------------- End Saga -------------------------------*/
const usersSelector = (state: IState) => state.users.users;
const usersFetchingStatusSelector = (state: IState) => state.users.isFetching;

export const useUsers = () => {
    const dispatch = useDispatch();
    const users = useSelector(usersSelector);
    const isFetching = useSelector(usersFetchingStatusSelector);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    return { users, isFetching };
};

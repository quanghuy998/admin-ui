import { call, put, takeLatest, takeLeading } from 'redux-saga/effects';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { ICreateUserModal, createUserAsync, deleteUserAsync, getUsersAsync } from '../../api/users/user.service';
import { createNotificationAction } from '../notifications';
import { updateUserAsync } from '../../api/users/user.service';
import IState, { getDefaultState } from '../state';
import {
    ICreateUserSagaAction,
    IDeleteUserSagaAction,
    IUpdateUserSagaAction,
    IUser,
    IUserActionTypes,
    IUserState,
} from './types';
import {
    CREATE_USER_SAGA,
    CREATE_USER,
    GET_USERS,
    SET_USERS,
    UPDATE_USER_SAGA,
    UPDATE_USER,
    DELETE_USER,
    DELETE_USER_SAGA,
} from './constants';

/*----------------- Start reducer -------------------------------*/

const getUserAction = (): IUserActionTypes => ({
    type: GET_USERS,
});

const setUserAction = (users: IUser[]): IUserActionTypes => ({
    type: SET_USERS,
    payload: users,
});

const updateUserAction = (payload: IUser): IUserActionTypes => ({
    type: UPDATE_USER,
    payload: payload,
});

const createUserAction = (payload: IUser): IUserActionTypes => ({
    type: CREATE_USER,
    payload: payload,
});

const deleteUserAction = (payload: number): IUserActionTypes => ({
    type: DELETE_USER,
    payload: payload,
});

export const createUserSagaAction = (payload: ICreateUserModal): IUserActionTypes => ({
    type: CREATE_USER_SAGA,
    payload: payload,
});

export const updateUserSagaAction = (payload: IUser): IUserActionTypes => ({
    type: UPDATE_USER_SAGA,
    payload: payload,
});

export const deleteUserSagaAction = (payload: number): IUserActionTypes => ({
    type: DELETE_USER_SAGA,
    payload: payload,
});

export default function reducer(state = getDefaultState().users, action: IUserActionTypes): IUserState {
    switch (action.type) {
        case SET_USERS:
            return { ...state, isFetching: false, users: action.payload };
        case CREATE_USER:
            const newUsers = [...state.users, action.payload];
            return { ...state, isFetching: false, users: newUsers };
        case UPDATE_USER:
            const updatedUsers = state.users.map((user) => {
                if (user.id === action.payload.id) {
                    return { ...user, ...action.payload };
                }
                return user;
            });
            return { ...state, isFetching: false, users: updatedUsers };
        case DELETE_USER:
            const remainingUsers = state.users.filter((user) => user.id !== action.payload);
            return { ...state, isFetching: false, users: remainingUsers };
        default:
            return state;
    }
}
/*----------------- End reducer -------------------------------*/

/*----------------- Start Saga -------------------------------*/
function* fetchUsersSaga() {
    const users: IUser[] = yield call(getUsersAsync);
    if (users) yield put(setUserAction(users));
}

function* createUserSaga(action: ICreateUserSagaAction): Generator<any, void, IUser> {
    const user = yield call(createUserAsync, action.payload);
    if (user) {
        yield put(createUserAction(user));
        yield put(
            createNotificationAction({
                type: 'success',
                message: `Create user ${user.lastName} ${user.firstName} successfully`,
            }),
        );
    }
}

function* updateUserSaga(action: IUpdateUserSagaAction): Generator<any, void, IUser> {
    const user = yield call(updateUserAsync, action.payload);
    if (user) {
        yield put(updateUserAction(user));
        yield put(
            createNotificationAction({
                type: 'success',
                message: `Update user ${user.lastName} ${user.firstName} successfully`,
            }),
        );
    }
}

function* deleteUserSaga(action: IDeleteUserSagaAction): Generator<any, void, number> {
    const id = yield call(deleteUserAsync, action.payload);
    if (id) {
        yield put(deleteUserAction(id));
        yield put(
            createNotificationAction({
                type: 'success',
                message: `Delete user id ${id} successfully`,
            }),
        );
    }
}

export const sagas = [
    takeLeading(GET_USERS, fetchUsersSaga),
    takeLatest(CREATE_USER_SAGA, createUserSaga),
    takeLatest(UPDATE_USER_SAGA, updateUserSaga),
    takeLatest(DELETE_USER_SAGA, deleteUserSaga),
];
/*----------------- End Saga -------------------------------*/
const usersSelector = (state: IState) => state.users.users;
const usersFetchingStatusSelector = (state: IState) => state.users.isFetching;

export const useUsers = () => {
    const dispatch = useDispatch();
    const users = useSelector(usersSelector);
    const isFetching = useSelector(usersFetchingStatusSelector);

    useEffect(() => {
        dispatch(getUserAction());
    }, [dispatch]);

    return { users, isFetching };
};

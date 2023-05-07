import { call, put, takeLeading } from 'redux-saga/effects';

import { CHECK_IS_LOGGED_IN, CHECK_IS_LOGGED_IN_SAGA } from './constants';
import { isLoggedIn } from '../../api/identity/identity.service';
import IState, { getDefaultState } from '../state';
import {
    IAuthenticationActionTypes,
    IAuthenticationState,
    ICheckUserLoginAction,
    ICheckUserLoginSagaAction,
} from './types';

const checkIsLoggedInAction = (isLoggedIn: boolean): ICheckUserLoginAction => ({
    type: CHECK_IS_LOGGED_IN,
    payload: isLoggedIn,
});

export const checkIsLoggedInSagaAction = (cookies: any): ICheckUserLoginSagaAction => ({
    type: CHECK_IS_LOGGED_IN_SAGA,
    payload: cookies,
});

export default function reducer(
    state = getDefaultState().authentication,
    action: IAuthenticationActionTypes,
): IAuthenticationState {
    switch (action.type) {
        case CHECK_IS_LOGGED_IN:
            return { ...state, isLoggedIn: action.payload, isCheckedLoggedIn: false };
        case CHECK_IS_LOGGED_IN_SAGA:
            return { ...state, isCheckedLoggedIn: true };
        default:
            return state;
    }
}

function* checkUserIsLoggedIn(action: ICheckUserLoginSagaAction) {
    var isLoggin: boolean = yield call(isLoggedIn, action.payload);
    if (isLoggin) yield put(checkIsLoggedInAction(isLoggin));
}

export const sagas = [takeLeading(CHECK_IS_LOGGED_IN_SAGA, checkUserIsLoggedIn)];

export const isLoggedInSelector = (state: IState) => state.authentication.isLoggedIn;
export const isCheckedLoggedInSelector = (state: IState) => state.authentication.isCheckedLoggedIn;

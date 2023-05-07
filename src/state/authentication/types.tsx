import { CHECK_IS_LOGGED_IN, CHECK_IS_LOGGED_IN_SAGA } from './constants';

export interface IAuthenticationState {
    isLoggedIn: boolean;
    isCheckedLoggedIn: boolean;
}

export interface ITokenRequest {
    redirectUri: string;
    code: string;
}

export interface ITokenResponse {
    userId: string;
    access_token: string;
    refresh_token: string;
    expires_in: string;
}

export interface ICheckUserLoginSagaAction {
    type: typeof CHECK_IS_LOGGED_IN_SAGA;
    payload: any;
}

export interface ICheckUserLoginAction {
    type: typeof CHECK_IS_LOGGED_IN;
    payload: boolean;
}

export type IAuthenticationActionTypes = ICheckUserLoginAction | ICheckUserLoginSagaAction;

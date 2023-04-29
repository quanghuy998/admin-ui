import { ICreateUserModal } from '../../api/users/user.service';
import {
    CREATE_USER_SAGA,
    CREATE_USER,
    GET_USERS,
    SET_USERS,
    UPDATE_USER_SAGA,
    UPDATE_USER,
    DELETE_USER_SAGA,
    DELETE_USER,
} from './constants';

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    createdTime: string;
    modifiedTime: string;
}

export interface IUserState {
    users: IUser[];
    isFetching: boolean;
}

export interface IGetUsersAction {
    type: typeof GET_USERS;
}

export interface ISetUserAction {
    type: typeof SET_USERS;
    payload: IUser[];
}

export interface ICreateUserAction {
    type: typeof CREATE_USER;
    payload: IUser;
}

export interface IUpdateUserAction {
    type: typeof UPDATE_USER;
    payload: IUser;
}

export interface IDeleteUserAction {
    type: typeof DELETE_USER;
    payload: number;
}

export interface ICreateUserSagaAction {
    type: typeof CREATE_USER_SAGA;
    payload: ICreateUserModal;
}

export interface IUpdateUserSagaAction {
    type: typeof UPDATE_USER_SAGA;
    payload: IUser;
}

export interface IDeleteUserSagaAction {
    type: typeof DELETE_USER_SAGA;
    payload: number;
}

export type IUserActionTypes =
    | IGetUsersAction
    | ISetUserAction
    | IUpdateUserAction
    | ICreateUserAction
    | IDeleteUserAction
    | IUpdateUserSagaAction
    | ICreateUserSagaAction
    | IDeleteUserSagaAction;

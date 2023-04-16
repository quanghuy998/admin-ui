import { GET_USERS, SET_USERS } from './constants';

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    createTime: string;
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
    users: IUser[];
}

export type IUserActionTypes = IGetUsersAction | ISetUserAction;

import { GET_ROLES, SET_ROLES } from './constants';

export interface IRoleState {
    roles: IRole[];
    isFetching: boolean;
}

export interface IRole {
    id: number;
    name: string;
    roleClaims: IRoleClaim[];
}

export interface IRoleClaim {
    id: number;
    claimValue: string;
}

export interface IGetRolesAction {
    type: typeof GET_ROLES;
}

export interface ISetRolesAction {
    type: typeof SET_ROLES;
    roles: IRole[];
}

export type IRolesActionTypes = IGetRolesAction | ISetRolesAction;

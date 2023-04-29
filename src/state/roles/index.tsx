import { call, put, takeLeading } from 'redux-saga/effects';
import IState, { getDefaultState } from '../state';
import { GET_ROLES, SET_ROLES } from './constants';
import { IRolesActionTypes } from './types';
import { IGetRolesAction, IRole, IRoleState, ISetRolesAction } from './types';
import { getRolesAsync } from '../../api/roles/role.service';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export const getRoleAction = (): IGetRolesAction => ({
    type: GET_ROLES,
});

const setRoleAction = (roles: IRole[]): ISetRolesAction => ({
    type: SET_ROLES,
    roles: roles,
});

export default function reducer(state = getDefaultState().roles, action: IRolesActionTypes): IRoleState {
    switch (action.type) {
        case SET_ROLES:
            return { ...state, isFetching: false, roles: action.roles };
        default:
            return state;
    }
}

/*----------Saga -----------*/
function* fetchRoles() {
    const roles: IRole[] = yield call(getRolesAsync);
    if (roles) yield put(setRoleAction(roles));
}

export const sagas = [takeLeading(GET_ROLES, fetchRoles)];
/*----------Saga -----------*/
const rolesSelector = (state: IState) => state.roles.roles;
const rolesIsFetchingStatusSelector = (state: IState) => state.roles.isFetching;

export const useRoles = () => {
    const dispatch = useDispatch();
    const roles = useSelector(rolesSelector);
    const isFetching = useSelector(rolesIsFetchingStatusSelector);

    useEffect(() => {
        dispatch(getRoleAction());
    }, [dispatch]);

    return { roles, isFetching };
};

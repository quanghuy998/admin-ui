import { INotificationState } from './notifications/types';
import { IRoleState } from './roles/types';
import { IUserState } from './users/types';

export default interface IState {
    users: IUserState;
    roles: IRoleState;
    notifications: INotificationState;
}

export const getDefaultState = (): IState => ({
    users: { users: [], isFetching: true },
    roles: { roles: [], isFetching: true },
    notifications: { notifications: [] },
});

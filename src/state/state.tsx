import { IUserState } from './users/types';

export default interface IState {
    users: IUserState;
}

export const getDefaultState = (): IState => ({
    users: { users: [], isFetching: true },
});

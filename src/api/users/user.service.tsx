import config from '../../config/config';
import { IUser } from '../../state/users/types';
import { deleteAsync, getAsync, postAsync, putAsync } from '../common/api-service';

export interface ICreateUserModal {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    address: string;
}

export interface IUpdateUserModal {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
}

export const getUsersAsync = async (): Promise<IUser[] | undefined> => {
    const response = await getAsync(`${config.identityServiceUrl}api/users`);
    if (response.error || !response.data) return;

    return response.data;
};

export const createUserAsync = async (model: ICreateUserModal): Promise<IUser | undefined> => {
    const response = await postAsync(`${config.identityServiceUrl}api/users`, model);
    if (response.error) return;

    return response.data;
};

export const updateUserAsync = async (model: IUpdateUserModal): Promise<IUser | undefined> => {
    var firstName = model.firstName;
    var lastName = model.lastName;
    var email = model.email;
    var address = model.address;

    const response = await putAsync(`${config.identityServiceUrl}api/users/${model.id}`, {
        firstName,
        lastName,
        email,
        address,
    });

    if (response.error) return;
    return response.data;
};

export const deleteUserAsync = async (id: number) => {
    const response = await deleteAsync(`${config.identityServiceUrl}api/users/${id}`);
    if (response.error) return;
    return response.data;
};

export const loginAsync = async (userName: string, password: string) => {
    const data = {
        userName,
        password,
    };
    const response = await postAsync(`${config.identityServiceUrl}oauth/token`, data);
    return response;
};

export const validateUserToken = async (accessToken: string) => {
    const response = await getAsync(`${config.identityServiceUrl}oauth/token/validate`, {
        Authorization: `Bearer ${accessToken}`,
    });
    return response;
};

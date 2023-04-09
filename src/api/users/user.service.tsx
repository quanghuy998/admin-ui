import { getAsync, postAsync } from '../common/api-service';
import config from '../config/config';
import { Cookies } from 'react-cookie';

interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    createdTime: string;
    modifiedTime: string;
}

interface ITokenResponse {
    accessToken: string;
    refreshToken?: string;
    expiredIn?: number;
}

export const getUsersAsync = async (): Promise<IUser[] | undefined> => {
    const response = await getAsync(`${config.identityServiceUrl}api/users`);
    if (response.error || !response.data) return;

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

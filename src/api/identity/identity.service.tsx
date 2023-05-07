import config from '../../config/config';
import { postAsync } from '../common/api-service';

interface ITokenResponse {
    userId: string;
    access_token: string;
    refresh_token: string;
    expires_in: string;
}

export const loginPage = `${config.adminBaseUrl}login`;

export const redirectToLogin = () => {
    window.location.href = loginPage;
};

export const isLoggedIn = (cookies: any): Promise<boolean> => {
    if (cookies.orange_access_token_indicator === 'true') return Promise.resolve(true);

    return Promise.resolve(false);
};

export const getTokenAsync = async (code: string, redirectUri: string): Promise<ITokenResponse[] | undefined> => {
    const response = await postAsync(`${config.identityServiceUrl}oauth2/token`, {
        clientId: config.adminApplicationId,
        redirectUri,
        code,
    });

    if (response.error || !response.data) return;
    return response.data;
};

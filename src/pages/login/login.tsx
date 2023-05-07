import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import queryString from 'query-string';

import { getTokenAsync } from '../../api/identity/identity.service';
import config from '../../config/config';
import IState from '../../state/state';

const Login: React.FC = () => {
    const location = useLocation();
    const params = queryString.parse(location.search);
    const isLogin = useSelector((state: IState) => state.authentication.isLoggedIn);

    useEffect(() => {
        var authCode = params.code;
        var redirectUri = config.adminBaseUrl + 'login';
        if (authCode === null || authCode === undefined) {
            var path = `${config.fusionAuthBaseUrl}oauth2/authorize?client_id=${config.adminApplicationId}&response_type=code&redirect_uri=${config.adminBaseUrl}login`;
            window.location.replace(path);
        }

        if (isLogin === false) {
            getTokenAsync(authCode!.toString(), redirectUri).then(function () {
                window.location.replace(config.adminBaseUrl + 'dashboard');
                return;
            });
        }
    }, []);

    return <div>Redirecting to login...</div>;
};

export default Login;

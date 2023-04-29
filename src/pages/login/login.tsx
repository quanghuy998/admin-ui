import { Button, TextField } from '@mui/material';
import './login.scss';
import { useEffect, useState } from 'react';
import { loginAsync, validateUserToken } from '../../api/users/user.service';
import useCookies from 'react-cookie/cjs/useCookies';

const Login = () => {
    const [isLoggin, setIsLoggin] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookie] = useCookies(['access_token', 'refresh_token']);

    useEffect(() => {
        (async function isUserLoggedIn() {
            var result = await validateUserToken(cookies['access_token']);
            if (!result.error) setIsLoggin(true);
            else setIsLoggin(false);
        })();
        if (isLoggin) window.location.replace('/');
    }, [isLoggin]);

    const handleSubmit = async () => {
        var result = await loginAsync(userName, password);
        if (!result.error) {
            // setCookie('access_token', result.data.accessToken, { path: '/' });
            // setCookie('refresh_token', result.data.refreshToken, { path: '/' });
            setIsLoggin(true);
        }
    };

    return (
        <div className="login">
            <div className="login-content-form">
                <h2>Login</h2>
                <TextField
                    label="User name"
                    variant="standard"
                    className="login-content-form-text"
                    onChange={(e) => setUserName(e.target.value)}
                />
                <TextField
                    label="Password"
                    variant="standard"
                    className="login-content-form-text"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="row">
                    <input type="checkbox" /> Remember me?
                </div>
                <Button variant="contained" onClick={() => handleSubmit()}>
                    Login
                </Button>
            </div>
        </div>
    );
};
export default Login;

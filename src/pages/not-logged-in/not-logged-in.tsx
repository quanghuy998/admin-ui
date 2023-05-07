import { useEffect } from 'react';

import { redirectToLogin } from '../../api/identity/identity.service';

const NotLoggedIn = () => {
    useEffect(() => {
        redirectToLogin();
    }, []);

    return <div>Cannot access this page...</div>;
};

export default NotLoggedIn;

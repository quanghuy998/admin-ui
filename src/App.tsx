import { BrowserRouter as Router, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { Routes } from 'react-router';
import { useEffect } from 'react';

import { checkIsLoggedInSagaAction, isCheckedLoggedInSelector, isLoggedInSelector } from './state/authentication';
import WaitingForAuthentication from './components/waiting-for-authentication/waiting-for-authentication';
import EmptyLayout from './components/layouts/empty-layout/empty-layout';
import NotLoggedIn from './pages/not-logged-in/not-logged-in';

function App() {
    const dispatch = useDispatch();
    const [cookies, setCookies] = useCookies();

    const isLoggedIn = useSelector(isLoggedInSelector);
    const isCheckedLoggedIn = useSelector(isCheckedLoggedInSelector);

    useEffect(() => {
        dispatch(checkIsLoggedInSagaAction(cookies));
    }, [dispatch]);

    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        const Layout = route.layout ? route.layout : EmptyLayout;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                    {privateRoutes.map((route, index) => {
                        let Layout = route.layout ? route.layout : EmptyLayout;
                        const Page = isCheckedLoggedIn
                            ? WaitingForAuthentication
                            : isLoggedIn
                            ? route.component
                            : NotLoggedIn;

                        if (Page === WaitingForAuthentication) Layout = EmptyLayout;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;

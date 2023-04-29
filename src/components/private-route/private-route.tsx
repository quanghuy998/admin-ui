import React from 'react';
import { Route } from 'react-router-dom';

interface IProps {
    element: any;
    path: string;
}

const PrivateRoute: React.FC<IProps> = ({ element, path }) => {
    return <Route path={path} element={element} />;
};

export default PrivateRoute;

import React from 'react';
import AdminLayoutHeader from './admin-layout-header/admin-layout-header';
import AdminLayoutMenu from './admin-layout-menu/admin-layout-menu';

import './admin-layout.scss';

interface Props {
    children: any;
}

const AdminLayout: React.FC<Props> = (props) => {
    return (
        <div className="admin-layout">
            <AdminLayoutHeader />
            <div className="admin-layout-content">
                <AdminLayoutMenu />
                <div className="admin-layout-content__child">{props.children}</div>
            </div>
        </div>
    );
};

export default AdminLayout;

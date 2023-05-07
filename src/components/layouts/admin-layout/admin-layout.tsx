import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { deleteNotificationAction, useNotifications } from '../../../state/notifications';
import AdminLayoutHeader from './admin-layout-header/admin-layout-header';
import AdminLayoutMenu from './admin-layout-menu/admin-layout-menu';
import Notifications from '../../notifications/notifications';
import './admin-layout.scss';

interface Props {
    children: any;
}

const AdminLayout: React.FC<Props> = (props) => {
    const notifications = useNotifications();
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            const notification = notifications.find((_) => _.id > 0);
            if (notification !== undefined) dispatch(deleteNotificationAction(notification.id));

            return () => {
                clearTimeout(timer);
            };
        }, 3000);
    }, [notifications]);

    return (
        <div className="admin-layout">
            <AdminLayoutHeader />
            <div className="admin-layout-content">
                <AdminLayoutMenu />
                <div className="admin-layout-content__child container">
                    {notifications.map((notification, index) => {
                        return (
                            <Notifications
                                type={notification.type}
                                message={notification.message}
                                id={notification.id}
                                key={index}
                            />
                        );
                    })}
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;

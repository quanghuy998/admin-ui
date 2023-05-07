import { useDispatch } from 'react-redux';
import { Alert } from '@mui/material';
import React from 'react';

import { deleteNotificationAction } from '../../state/notifications';
import './notifications.scss';

interface IProps {
    type: 'error' | 'warning' | 'info' | 'success';
    message: string;
    id: number;
}

const Notifications: React.FC<IProps> = ({ type, message, id }) => {
    const dispatch = useDispatch();

    const handleOnClose = () => {
        dispatch(deleteNotificationAction(id));
    };

    return (
        <Alert severity={type} className="notification" onClose={handleOnClose}>
            {message}
        </Alert>
    );
};

export default Notifications;

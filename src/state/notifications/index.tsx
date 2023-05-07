import { useSelector } from 'react-redux';

import { ICreateNotificationModal, INotification, INotificationActionTypes, INotificationState } from './types';
import { CREATE_NOTIFICATION, DELETE_NOTIFICATION } from './constants';
import IState, { getDefaultState } from '../state';

export const createNotificationAction = (notification: ICreateNotificationModal): INotificationActionTypes => ({
    type: CREATE_NOTIFICATION,
    payload: notification,
});

export const deleteNotificationAction = (id: number): INotificationActionTypes => ({
    type: DELETE_NOTIFICATION,
    payload: id,
});

export default function reducer(
    state = getDefaultState().notifications,
    action: INotificationActionTypes,
): INotificationState {
    switch (action.type) {
        case CREATE_NOTIFICATION:
            const notification: INotification = {
                id: state.notifications.length + 1,
                message: action.payload.message,
                type: action.payload.type,
            };
            const newNotifications = [...state.notifications, notification];
            return { ...state, notifications: newNotifications };
        case DELETE_NOTIFICATION:
            const filteredNotifications = state.notifications.filter(
                (notification) => notification.id !== action.payload,
            );
            return { ...state, notifications: filteredNotifications };
        default:
            return state;
    }
}

export const sagas = [];

const notificationsSelector = (state: IState) => state.notifications.notifications;

export const useNotifications = () => {
    return useSelector(notificationsSelector);
};

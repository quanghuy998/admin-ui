import { CREATE_NOTIFICATION, DELETE_NOTIFICATION, DELETE_NOTIFICATION_SAGA } from './constants';

export interface INotification {
    type: 'error' | 'warning' | 'info' | 'success';
    message: string;
    id: number;
}

export interface ICreateNotificationModal {
    type: 'error' | 'warning' | 'info' | 'success';
    message: string;
}

export interface INotificationState {
    notifications: INotification[];
}

export interface ICreateNotificationAction {
    type: typeof CREATE_NOTIFICATION;
    payload: ICreateNotificationModal;
}

export interface IDeleteNotificationAction {
    type: typeof DELETE_NOTIFICATION;
    payload: number;
}

export interface IDeleteNotificationSagaAction {
    type: typeof DELETE_NOTIFICATION_SAGA;
    payload: INotification;
}

export type INotificationActionTypes =
    | ICreateNotificationAction
    | IDeleteNotificationAction
    | IDeleteNotificationSagaAction;

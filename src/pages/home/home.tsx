import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNotificationAction, useNotifications } from '../../state/notifications';
import { INotification } from '../../state/notifications/types';

const Home: React.FC = () => {
    const dispatch = useDispatch();
    const notifications = useNotifications();

    React.useEffect(() => {
        const notification: INotification = {
            id: 0,
            type: 'info',
            message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
        };
        dispatch(createNotificationAction(notification));
    }, []);

    return (
        <div>
            <div className="container">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, id maxime aspernatur at architecto
                quidem perferendis perspiciatis nobis, minima est quaerat eius provident fuga veritatis sequi, delectus
                repellat vel dolorum?
            </div>
        </div>
    );
};

export default Home;

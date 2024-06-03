import {NotificationManager} from 'react-notifications';

// success, warning, error, info
export const notification = (type, title, content) => {
    NotificationManager[type](content, title, 3000);
};
import { TIconType } from '../../components/Icon/collection';

export interface NotificationProps extends INotificationStyled {
    /**
     * The notification ID will generated if not assigned
     */
    id: string;

    /**
     * The title to display in notification
     */
    title?: string;

    /**
     * The message to display in notification
     */
    message?: string;

    /**
     * set an icon to show inside the notification
     * import { iconTypes } from "../../components/Icon/collection"
     */
    icon?: TIconType;

    /**
     * used for dispatching state to context
     */

    dispatch: (value: NotificationActionType) => void;
}

export interface INotificationStyled extends INotificationContainer {
    /**
     * type
     */
    type: notifyType;

    /**
     * starts close animation when true
     */
    isClosing?: boolean;
}

export interface INotificationContainer {
    /**
     * position  of element
     */
    position: IPosition;
}

export type IPosition = 'topR' | 'topL' | 'bottomR' | 'bottomL';

export type notifyType = 'error' | 'info' | 'success' | 'warning';

export type NotificationActionType = {
    type: 'add_notification' | 'remove_notification' | 'clear_notifications';
    payload: PayloadType;
    id: string;
};

export type PayloadType = {
    id?: string;
    type: notifyType;
    message?: string;
    title?: string;
    icon?: TIconType;
    position: IPosition;
};

export interface IToasts {
    topR: PayloadType[];
    topL: PayloadType[];
    bottomR: PayloadType[];
    bottomL: PayloadType[];
}
